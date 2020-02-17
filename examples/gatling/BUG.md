## Initial Observation

https://stackoverflow.com/questions/60258153/karate-gatlings-maxduration-does-not-appear-to-be-working-correctly?noredirect=1#comment106586537_60258153

When attempting to loadtest a remote API, gatling appears to run into some limits on users / rps

## Current Observation

1. Run the simple server `python -m SimpleHTTPServer` in the current folder (see the `index.html`)
2. Build this project - `mvn clean test`
3. Run the loadtest (see `example.feature`)

You can see a snapshot of the observed report in report.html