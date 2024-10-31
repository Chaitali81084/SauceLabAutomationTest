Feature:Purchase of the product is complete

Background:
Given user visit saucelabs website
And user enters valid details


Scenario: Verify that product purchase is completed successfully and validate details are correct on Checkout page
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
When I follow the checkout process
And I click continue
Then I am on Checkout Overview Page
And I Verify all relevant details on the page 
|productname|
|Sauce Labs Bolt T-Shirt|
|Sauce Labs Onesie|
|Sauce Labs Bike Light|
When I click Finish button
Then I see "THANK YOU FOR YOUR ORDER"
Then I logout

