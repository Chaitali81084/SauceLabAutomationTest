Feature: Login Sucessfully

Scenario Outline: Test with different user
    Given I visit sauce lab website
    When user enters the username "<username>" and password "<password>"
    And user clicks on login button
    Then the error message is displayed "<error_message>"

Examples:
|username |password|error_message|
|locked_out_user  |secret_sauce  | Epic sadface: Sorry, this user has been locked out.  |

