package com.maven.test;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;

public abstract class Browser {
	
	public static WebDriver driver;
	
	@BeforeSuite
	public void launchBrowser() {
		System.setProperty("webdriver.chrome.driver", "/home/prasanna/Downloads/chromedriver");
		driver=new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get("http://jobsrally.com/makers");
	}
	
	

}
