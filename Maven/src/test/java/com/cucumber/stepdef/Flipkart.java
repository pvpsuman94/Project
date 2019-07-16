package com.cucumber.stepdef;

import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.google.common.base.Verify;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Flipkart {
	WebDriver driver;
	String price;
	@Before
	public void launchBrowser() {
		System.setProperty("webdriver.chrome.driver", "/home/prasanna/Downloads/chromedriver");
		driver=new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}

	@Given("^Landed on Mi Note 7 pro page$")
	public void gotoflipkart() {
		driver.get("https://www.flipkart.com/redmi-note-7-pro-neptune-blue-64-gb/p/itmfegkx8nbcze6t?pid=MOBFDXZ376XRTZXH");
	}
	
	@Then("^Goto price tool tip$")
	public void gotoTollTip() {
		  Actions action = new Actions(driver);
			WebElement infoIcon = driver.findElement(By.id("price-info-icon"));
			action.moveToElement(infoIcon).build().perform();
			
			
	}
	
	@Then("^Get special price$")
	public void get_special_price(){
		WebDriverWait wait = new WebDriverWait(driver,10);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[text()='Special Price']/following-sibling::div")));
		WebElement priceEle = driver.findElement(By.xpath("//div[text()='Special Price']/following-sibling::div"));   
		String price = priceEle.getText();
		System.out.println(price);
	}
	

	@Given("^You are in flipkart page$")
	public void gotoFlipkart(){
		driver.get("https://www.flipkart.com/redmi-note-7-pro-neptune-blue-64-gb/p/itmfegkx8nbcze6t?pid=MOBFDXZ376XRTZXH");
	}
	
	@Then("^GotoLogo and get the Logo title$")
	public void verifyLogoTitle(){
		String logoTitle = driver.findElement(By.className("_1e_EAo")).getAttribute("title");
		System.out.println(logoTitle);
		//Verify.verify(logoTitle.equals("Flipkart123"));
		assertTrue(logoTitle.equals("Flipkart"));
	}
	
	@After
	public void closeBrowser() {
		driver.quit();
	}

}
