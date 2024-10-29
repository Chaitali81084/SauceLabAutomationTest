Feature:Purchase of the product is complete

Background:
Given user visit saucelabs website
And user enters valid details


Scenario Outline: Verify that product purchase is completed successfully
When I click on product name "<productname>"
Then I add to the cart
And I see product "<productname>" added to the cart
When I follow the checkout process
And I click continue
Then I am on Checkout Overview Page
And I Verify all relevant details on the page with "<productname>"
When I click Finish button
Then I see "THANK YOU FOR YOUR ORDER"
Then I logout

Examples:
|productname|
|Sauce Labs Fleece Jacket|
|Sauce Labs Bolt T-Shirt|
