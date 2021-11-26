Feature: Validate login functionality

    Scenario: Validate valid credentials
    Given User navigate to instagram url
    When User enter username "enter your insta username" and password "enter your insta password"
    And User tap on "Login" button
    Then User able to see "Instagram" img
