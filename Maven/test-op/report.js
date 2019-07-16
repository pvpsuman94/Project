$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/prasanna/prasanna-workspace/Maven/src/test/java/com/cucumber/feature/flipkart.feature");
formatter.feature({
  "line": 1,
  "name": "Checking price of a mobile in flipkart",
  "description": "",
  "id": "checking-price-of-a-mobile-in-flipkart",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1400037815,
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
  "duration": 2407004584,
  "status": "passed"
});
formatter.match({
  "location": "Flipkart.gotoTollTip()"
});
formatter.result({
  "duration": 240957994,
  "status": "passed"
});
formatter.match({
  "location": "Flipkart.get_special_price()"
});
formatter.result({
  "duration": 682137915,
  "status": "passed"
});
formatter.after({
  "duration": 89071145,
  "status": "passed"
});
formatter.before({
  "duration": 717860643,
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
  "duration": 2289837805,
  "status": "passed"
});
formatter.match({
  "location": "Flipkart.verifyLogoTitle()"
});
formatter.result({
  "duration": 80704500,
  "status": "passed"
});
formatter.after({
  "duration": 84196373,
  "status": "passed"
});
});