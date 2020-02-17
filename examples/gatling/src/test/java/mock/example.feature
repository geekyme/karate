Feature: karate 'hello world' example
Scenario: Successful hit dummy API 

Given url 'http://localhost:8000'
When method get
Then status 200