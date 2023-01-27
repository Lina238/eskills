import requests
from typing  import List
import sqlite3
import re
import csv
from urlextract import URLExtract
from django.core.management.base import BaseCommand
from bs4 import BeautifulSoup
from core.models import Annonce
from core.views import creerannonce

class Command(BaseCommand):
     
    help='load data'
    def handle(self,*args, **kwargs):
      links=self.LinkPage()
      elements=[]
      for link in links:
           urls=self.construct_urls(link)
           print(len(urls))
           extractor = URLExtract()
           fld_name=["titre","niveau","discription","image","mode", "nom", "prix", "lieu"]
           for url in urls:
                page=requests.get(url)
                scp=BeautifulSoup(page.content,'html.parser')
          
                titre=scp.find_all('h1',class_='anntot')[0].text.strip()                
                discription=scp.find_all('h3')[0].text.strip() 
                divg = scp.find('div',class_='img_anntot',style=True)             
                imgurl = extractor.find_urls(str(divg))
                nom=scp.find ( 'div',style=lambda value: value and 'font-size:1.2rem' in value ).text.strip()               
                prix=scp.find ( 'p',style=lambda value: value and 'font-size:1.5rem' in value ).text.strip()
                mode=scp.find ( 'div',style=lambda value: value and 'margin-top:2' in value ).text.strip()
                niveau=scp.find ( 'div',style=lambda value: value and 'border-top:#CCC dotted' in value and 'padding:5' in value).text.strip()
                niveau=niveau.replace( "Niveau maximum enseigné :", "")
                lieu= scp.find('p',style=lambda value: value and 'margin-bottom:0' in value and 'padding-bottom:0' in value ).text.strip() 
                lieu=lieu.replace( "Domiciliation :", "")
                t=re.compile(r'\s+')
                lieu=re.sub(t, '', lieu)
                lieu = ''.join([i for i in lieu if not i.isdigit()])
                lieu= lieu.replace('(','').replace(')','')  
                
                dict={
                  "titre":titre,
                  "niveau":niveau,
                  "discription":discription,
                  "image":imgurl,
                   "mode":mode,
                  "nom":nom,
                  "prix":prix,
                  # "possibilité du paiment":paimentpos,
                  "lieu":lieu,                  
                }
                elements.append(dict)    
      with open('infos.csv', 'a', encoding="utf-8") as csvfile:
                   writer = csv.DictWriter(csvfile,fieldnames=fld_name)
                   writer.writeheader()
                   writer.writerows(elements)
      creerannonce()


                       
       
                
    def construct_urls(self,l) ->List[str]:
         
         page= requests.get(l)
         
         soupi =BeautifulSoup (page.content, 'html.parser') 
         links= soupi.find_all('a', href=True)
        
         details_annonces=[]

         for link in links:
          if "annonce-professeur" in link['href']:               
              details_annonces.append(f" {'https://dz.professeurparticulier.com'}{link['href']}")


         return details_annonces
    def LinkPage(self) ->List[str]:
          global result         
          page=requests.get("https://dz.professeurparticulier.com/marech.php?ap=9&cat=0&pp=1&pays=Alg%E9rie&prox=20&go=1")
          scp=BeautifulSoup(page.content,'html.parser')
          links=scp.find_all('a',{'class':'noirot_sslien'},href=True) 
          nb=len(links);
         
          lespages=[]
          for link in links:
                 if link.get('title'):
                                   
                                linksnm=link.find(text=True,recursive=False)                                
                                lespages.append(f" {'https://dz.professeurparticulier.com/marech.php?ap=9&cat=0&pp='}{linksnm}{'&pays=Alg%E9rie&prox=20&go=1'}")
                                
                                nb=nb+1
                              
          # nb=nb+1   
          # p= 'https://dz.professeurparticulier.com/marech.php?ap=9&cat=0&pp='+str(nb)+'&pays=Alg%E9rie&prox=20&go=1'           
          # print(p)
          # page1=requests.get(p)
          # nb=0;
          # scp1=BeautifulSoup(page1.content,'html.parser')
          # links1=scp1.find_all('a',{'class':'noirot_sslien'},href=True) 
          # for link in links1:
          #  if link.get('title'):
          #    linksnm1=link.find(text=True,recursive=False) 
          #    nb=nb+1
          #    lespages.append(f" {'https://dz.professeurparticulier.com/marech.php?ap=9&cat=0&pp='}{linksnm1}{'&pays=Alg%E9rie&prox=20&go=1'}")                                     
          result=list(set(lespages))
          result.append("https://dz.professeurparticulier.com/marech.php?ap=9&cat=0&pp=1&pays=Alg%E9rie&prox=20&go=1")
          print(result)
          return result               
# # # niveaux
# https://dz.professeurparticulier.com/marech.php?ap=9&cat=0&pp=2&pays=Alg%C3%A9rie&prox=20&go=1
# # https://dz.professeurparticulier.com/marech.php?ap=9&cat=1&pp=1&pays=Alg%E9rie&nivmax=3&prox=20&go=1
# # # https://dz.professeurparticulier.com/marech.php?ap=9&cat=1&pp=1&pays=Alg%E9rie&nivmax=1&prox=20&go=1
