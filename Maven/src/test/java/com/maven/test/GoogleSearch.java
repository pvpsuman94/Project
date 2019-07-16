package com.maven.test;

import org.testng.annotations.AfterClass;
import org.testng.annotations.Test;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.AfterClass;
import org.testng.annotations.Test;

import com.google.common.base.Verify;

import org.testng.annotations.BeforeClass;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertNotEquals;
import static org.testng.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class GoogleSearch {
public static WebDriver driver;
	
	@BeforeClass
	public void launchBrowser() {
		System.setProperty("webdriver.chrome.driver", "/home/prasanna/Downloads/chromedriver");
		driver=new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	}
	
	@BeforeMethod
	public void beforeMethod() {
		System.out.println("Printing from Before Method");
	}
	
	@BeforeTest
	public void beforeTest() {
		System.out.println("Printing from Before Test");
	}
 
	@Test
  public void miNoteSeven() {
	  
		driver.get("https://www.flipkart.com/redmi-note-7-pro-neptune-blue-64-gb/p/itmfegkx8nbcze6t?pid=MOBFDXZ376XRTZXH");
  }
  
	@Test(dependsOnMethods = "logoTitle")
  public void performAction() {
	  Actions action = new Actions(driver);
		WebElement infoIcon = driver.findElement(By.id("price-info-icon"));
		action.moveToElement(infoIcon).build().perform();
		WebDriverWait wait = new WebDriverWait(driver,10);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[text()='Special Price']/following-sibling::div")));
		WebElement priceEle = driver.findElement(By.xpath("//div[text()='Special Price']/following-sibling::div"));
		String price = priceEle.getText();
		System.out.println(price);
  }
	
	@Test(dependsOnMethods = "miNoteSeven")
	public void logoTitle() {
		String logoTitle = driver.findElement(By.className("_1e_EAo")).getAttribute("title");
		System.out.println(logoTitle);
		Verify.verify(logoTitle.equals("Flipkart123"));
		//assertTrue(logoTitle.equals("Flipkart123"), "This is custom failure message");
	}
	
	@AfterClass
	public void closeBrowser() {
		driver.quit();
	}
}
