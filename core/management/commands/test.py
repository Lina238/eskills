from selenium import webdriver
from django.core.management.base import BaseCommand
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import time
class Command(BaseCommand):
#   def handle(self,*args, **kwargs):  
    help='load data'
    driver=webdriver.Chrome("C:/Users/Lina-pc/Downloads/chromedriver_win32/chromedriver.exe")
    driver.get("http://localhost:3000/AjouterAnnonce")
    driver.find_element(By.NAME,"name").send_keys("Yasmine ")
    
    driver.find_element(By.NAME,"Fname").send_keys("Arezki ")
    # driver.find_element(By.NAME,"module").send_keys("Math")
    driver.find_element(By.NAME,"email").send_keys("y_arezki@estin.dz ")
    driver.find_element(By.NAME,"price").send_keys("5000Da")
    driver.find_element(By.NAME,"level").send_keys("Bac")
    driver.find_element(By.NAME,"title").send_keys("Cours en Maths")
    driver.find_element(By.NAME,"service").send_keys("je donne des cours depuis 5ans ")
    driver.find_element(By.NAME,"wilaya").send_keys("Alger")
    driver.find_element(By.ID,"combo-box-demo").send_keys("online")
    driver.find_element(By.ID,"combo-box-demo").click()
    action = ActionChains(driver)
    action.send_keys(Keys.ARROW_DOWN)
    action.send_keys(Keys.ENTER)
    action.perform()
    action.click()
    driver.find_element(By.ID,"imgs").send_keys("C:/Users/Lina-pc/OneDrive/Bureau/Eskills/backend/Eskills/myapp/src/assets/img1.jpg")
    time.sleep(2.4)
    driver.find_element(By.XPATH,'//*[@id="root"]/form/button').submit()
