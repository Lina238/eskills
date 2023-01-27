import requests
from typing  import List
import pandas
import csv
from urlextract import URLExtract
from urllib.request import urlopen
from selenium import webdriver
from django.core.management.base import BaseCommand
from bs4 import BeautifulSoup
class Command(BaseCommand):
    help='load data'
    def handle(self,*args, **kwargs):
#      # pages=Pages()
# #      print(pages)     
#      annonces=[]
#      image=""
#      fld_name=["Catégorie","Localisation","Adresse","Surface", "Prix","Text","image"]
#            #tu dois installer pandas et selenuim 
#            #tu dois telecharger chromedriver et ajouter son path (si t'utilises chrom)
#            #ouvre ton chrome apres les 3 points ni apres aider apres à propos de google chrome check ta version 
#            #link de telechargement de chromedriver:
#            #https://chromedriver.chromium.org/downloads
#            #telecharge la meme versoin de ton chrome
#      driver=webdriver.Chrome('Users/Lina-pc/Downloads/chromedriver_win32')#link du chromedriver 
#      # for p in pages:
#      urls=self.construct_urls()
#      extractor = URLExtract()  
#      for url in urls:   
#        page=requests.get(url)
#        scp=BeautifulSoup(page.content,'html.parser') 
#        img = scp.find("img",id='PhotoMax_0') 
#        if img!=None: 
#          image='http://www.annonce-algerie.com/'+str(img['src'])
#          print(image)     
#        driver.get(url)    
#        html = driver.page_source  
#        df=pandas.read_html(html)
#        d=df[70]
#        d=d.drop([0,1,3, 5, 7,9])
#        d=d.drop(d.columns[[2, 3, 4,5]], axis=1)  
#        d=d.get(d.columns[[1]])
#        L = d.index[d.isna().all(axis=1)].tolist()
#        s=[11]
#        if  L == s :              
#                    d=d.drop([11])                     
#        if len(d)==6:
       
#               dict={
#                "Catégorie": d.iloc[0].to_string(),
#                "Localisation":d.iloc[1].to_string(),
#                "Adresse":d.iloc[2].to_string(),
#                "Surface":d.iloc[3].to_string(),
#                "Prix": d.iloc[4].to_string(),
#                "Text":d.iloc[5].to_string(),
#                 "image":image
#                 }
#        elif len(d)==5:
#                 dict={
#                "Catégorie": d.iloc[0].to_string(),
#                "Localisation":d.iloc[1].to_string(),
#               "Adresse":"",
#               "Surface":d.iloc[2].to_string(),
#               "Prix": d.iloc[3].to_string(),
#               "Text":d.iloc[4].to_string(),
#               "image":image
#                }
               
#        annonces.append(dict)
#     #  print(annonces)
#     #  with open('C:/Users/Lina-pc/Downloads/django-world-cup-plot-master/infos/in.csv', 'a', encoding="utf-8") as csvfile:
#     #                writer = csv.DictWriter(csvfile,fieldnames=fld_name)
#     #                writer.writeheader()
#     #                writer.writerows(annonces) 
       with open('C:/Users/Lina-pc/Downloads/django-world-cup-plot-master/infos/in.csv', mode ='r') as file:   
  
          csvFile = csv.DictReader(file)
 
       
          for lines in csvFile:
             print(lines['CatÃ©gorie'])
       
    def construct_urls(self) ->List[str]:
         
         page= requests.get("http://www.annonce-algerie.com/AnnoncesImmobilier.asp")

         soupi =BeautifulSoup (page.content, 'html.parser') 
         links= soupi.find_all('a', href=True)

         details_annonces=[]

         for link in links:


          if "DetailsAnnonceImmobilier" in link['href']: 
              details_annonces.append(f" {'http://www.annonce-algerie.com/'}{link['href']}")


         
         return details_annonces
def Pages():
          P=[]          
          page=requests.get("http://www.annonce-algerie.com/AnnoncesImmobilier.asp")
          scp=BeautifulSoup(page.content,'html.parser')
          liens=scp.find_all('a',href=True)
          lespages=[]
         
          for l in liens:
                  if "rech_typ" in l['href']:
                      lespages.append(f" {'http://www.annonce-algerie.com/'}{l['href']}")
          lespages.append("http://www.annonce-algerie.com/AnnoncesImmobilier.asp")
          P=list(set(lespages))
          return P