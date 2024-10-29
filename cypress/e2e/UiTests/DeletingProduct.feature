Feature:Deleting Product from the cart

Background:
Given user visit saucelabs website
And user enters valid details

Scenario Outline: Verify that product can be deleted from the cart
When I click on product name "<productname>"
Then I add to the cart
And I see product "<productname>" added to the cart
When I click remove button to remove product
Then the cart is empty


Examples:
| productname |
| Sauce Labs Bolt T-Shirt |