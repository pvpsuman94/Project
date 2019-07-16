package com.maven.test;

import org.openqa.selenium.By;
import org.testng.annotations.Test;

import com.selenium.dataproviders.ExcelData;


public class JRLogin extends Browser {
	
	@Test(dataProvider = "sample", dataProviderClass = ExcelData.class)
	public void login(String uname, String pwd) {
		driver.findElement(By.name("username")).sendKeys(uname);
		driver.findElement(By.name("password")).sendKeys(pwd);
		driver.findElement(By.xpath("//input[@type='submit']")).click();
		driver.findElement(By.xpath("//div[@id='left-menu']//a[text()='Logout']")).click();
	}
	
	

}
