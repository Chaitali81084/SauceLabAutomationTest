Feature:Add Multiple Product to the cart


Background:
Given user visit saucelabs website
And user enters valid details

Scenario: Add Multiple Product to the cart and verfiy they been added
And I select a multiple products from inventory page
|productname|
|Sauce Labs Bolt T-Shirt|
|Sauce Labs Onesie|
|Sauce Labs Bike Light|
Then I see products added to the cart
|productname|
|Sauce Labs Bolt T-Shirt|
|Sauce Labs Onesie|
|Sauce Labs Bike Light|
