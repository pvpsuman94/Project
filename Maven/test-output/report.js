$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/prasanna/prasanna-workspace/Maven/src/test/java/com/cucumber/feature/flipkart.feature");
formatter.feature({
  "line": 1,
  "name": "Checking price of a mobile in flipkart",
  "description": "",
  "id": "checking-price-of-a-mobile-in-flipkart",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1393459164,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Checking  price for Mi Note 7 pro",
  "description": "",
  "id": "checking-price-of-a-mobile-in-flipkart;checking--price-for-mi-note-7-pro",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Landed on Mi Note 7 pro page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Goto price tool tip",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Get special price",
  "keyword": "And "
});
formatter.match({
  "location": "Flipkart.gotoflipkart()"
});
formatter.result({
  "duration": 1112594895,
  "status": "passed"
});
formatter.match({
  "location": "Flipkart.gotoTollTip()"
});
formatter.result({
  "duration": 52789210,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d75.0.3770.100)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027prasanna\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-54-generic\u0027, java.version: \u00271.8.0_212\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.100, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: /tmp/.com.google.Chrome.kpdVr2}, goog:chromeOptions: {debuggerAddress: localhost:41243}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: d3099fa37972aca75e3753a00c725f05\n*** Element info: {Using\u003did, value\u003dprice-info-icon}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.cucumber.stepdef.Flipkart.gotoTollTip(Flipkart.java:41)\n\tat ✽.Then Goto price tool tip(/home/prasanna/prasanna-workspace/Maven/src/test/java/com/cucumber/feature/flipkart.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "Flipkart.get_special_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 73358360,
  "status": "passed"
});
formatter.before({
  "duration": 806738652,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Check Logo TItle",
  "description": "",
  "id": "checking-price-of-a-mobile-in-flipkart;check-logo-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "You are in flipkart page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "GotoLogo and get the Logo title",
  "keyword": "Then "
});
formatter.match({
  "location": "Flipkart.gotoFlipkart()"
});
formatter.result({
  "duration": 875358987,
  "status": "passed"
});
formatter.match({
  "location": "Flipkart.verifyLogoTitle()"
});
formatter.result({
  "duration": 38886638,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d75.0.3770.100)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027prasanna\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.15.0-54-generic\u0027, java.version: \u00271.8.0_212\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.100, chrome: {chromedriverVersion: 75.0.3770.90 (a6dcaf7e3ec6f..., userDataDir: /tmp/.com.google.Chrome.FzS4V6}, goog:chromeOptions: {debuggerAddress: localhost:34595}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 07cb41d33bb578968bfba341a8b1ca38\n*** Element info: {Using\u003dclass name, value\u003d_1e_EAo}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.cucumber.stepdef.Flipkart.verifyLogoTitle(Flipkart.java:64)\n\tat ✽.Then GotoLogo and get the Logo title(/home/prasanna/prasanna-workspace/Maven/src/test/java/com/cucumber/feature/flipkart.feature:10)\n",
  "status": "failed"
});
formatter.after({
  "duration": 70538911,
  "status": "passed"
});
});