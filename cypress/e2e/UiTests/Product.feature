Feature:Add Product to the cart


Background:
Given user visit saucelabs website with valid details

Scenario Outline:Verify that product is added to cart
When I click on product name "<productname>"
Then I add to the cart
And I see product "<productname>" added to the cart
Then I logout
And I am on login Page
Examples:
|productname|
|Sauce Labs Bolt T-Shirt|

Scenario:
And I see product "<productname>" added to the cart




