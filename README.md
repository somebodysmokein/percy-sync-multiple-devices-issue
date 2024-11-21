# Percy sync issue with webdriverio [Percy on Automate]

Percy sync issue is not happening with more number of parallel devices (greter than 4). Polling for comparison status calls aren't made for all the devices. The ones for which the poll status is not called is waiting to timeout either "BrowserStack idle timeout" or "Webdriverio default timeout". 

## Setup
* Clone the repo
* Install dependencies `npm install`
* Add the Percy environment variables
* Kick off the tests with  `npm run percy-test` command


## Notes
* You can export the environment variables for the Username and Access Key of your BrowserStack account
  
  ```sh
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```

