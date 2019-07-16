package com.maven.test;

import java.util.Set;

import org.openqa.selenium.By;
import org.testng.annotations.Test;

public class WindowHandle extends Browser {
	
	@Test
	public void windowHandles() {
		driver.get("https://www.flipkart.com/mobiles/mi~brand/pr?sid=tyy,4io");
		driver.findElement(By.xpath("//div[@class='_3wU53n' and text()='Redmi Note 7S (Onyx Black, 64 GB)']")).click();
		Set<String> wh = driver.getWindowHandles();
		System.out.println(wh);
		for(String newTab: wh) {
			try {
				driver.switchTo().window(newTab);
				driver.findElement(By.xpath("//button[text()='ADD TO CART']")).click();
			} catch (Exception e) {
				System.out.println("Element not found");
			}
		}

	}

}