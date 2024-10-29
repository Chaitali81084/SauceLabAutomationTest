Feature:Sorting of the Product

Background:
Given user visit saucelabs website
And user enters valid details
Then user is on inventory page

Scenario Outline: Sorting products "<sortorder>"
Then I sort products from "<sortorder>"

Examples:
|sortorder|
|za|
|az|
|lohi|
|hilo|
