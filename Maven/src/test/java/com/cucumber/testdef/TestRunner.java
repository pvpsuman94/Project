package com.cucumber.testdef;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="/home/prasanna/prasanna-workspace/Maven/src/test/java/com/cucumber/feature/flipkart.feature", 
				glue="com.cucumber.stepdef",
				format = "html:test-out-put")

public class TestRunner {

}
