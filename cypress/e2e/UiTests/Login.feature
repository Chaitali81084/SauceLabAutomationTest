Feature: Valid and Invalid login sceanrios

Background:
Given user visit saucelabs website
    

Scenario Outline: Login using valid user
    When user enters the username "<username>" and password "<password>"
    And user clicks on login button
    Then user is on inventory page

Examples: 
|username |password|
|standard_user|secret_sauce|

Scenario Outline: Login using different and invalid user
    When user enters the username "<username>" and password "<password>"
    And user clicks on login button
    Then the error message is displayed "<error_message>"

Examples: 

|username |password|error_message|
|locked_out_user  |secret_sauce  | Epic sadface: Sorry, this user has been locked out.  |
|invalid_user  |secret_sauce  | Epic sadface: Username and password do not match any user in this service|
|standard_user  |invalid_password  | Epic sadface: Username and password do not match any user in this service|


    



    