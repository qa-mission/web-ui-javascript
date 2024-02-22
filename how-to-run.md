## How to run simple test
```
<computer-name>:~/QAMISSION/workspace/javascript/master/web-ui-javascript$ npx jest src/tests/sum.test.js 
 PASS  src/tests/sum.test.js
  ✓ adds 1 + 2 to equal 3 (2 ms)
  ✓ simple test (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.236 s, estimated 1 s
Ran all test suites matching /src\/tests\/sum.test.js/i.
<computer-name>:~/QAMISSION/workspace/javascript/master/web-ui-javascript$ 
```
## To support ECM export/import notation:

```
<computer-name>:~/QAMISSION/workspace/javascript/master/web-ui-javascript$ npm install --save-dev @babel/preset-env babel-jest

added 266 packages, and audited 267 packages in 12s

16 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
<computer-name>:~/QAMISSION/workspace/javascript/master/web-ui-javascript$ 
<computer-name>:~/QAMISSION/workspace/javascript/master/web-ui-javascript$ 
```
Create babel.config.json file:
```
{
    "presets": ["@babel/preset-env"]
}
```

```
<computer-name>:~/QAMISSION/workspace/javascript/master/web-ui-javascript$ npx jest src/tests/sum.test.js 
 PASS  src/tests/sum.test.js
  ✓ adds 1 + 2 to equal 3 (2 ms)
  ✓ simple test (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.813 s
Ran all test suites matching /src\/tests\/sum.test.js/i.
<computer-name>:~/QAMISSION/workspace/javascript/master/web-ui-javascript$ 
```

Run config tests:
```
npx jest src/tests/config/config.test.js


<computer-name>:~/QAMISSION/workspace/javascript/master/web-ui-javascript$ npx jest src/tests/config/config.test.js 
 PASS  src/tests/config/config.test.js
  Config class
    ✓ initializes with default configurations (6 ms)
    ✓ environment variables override configurations (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.527 s, estimated 1 s
Ran all test suites matching /src\/tests\/config\/config.test.js/i.
<computer-name>:~/QAMISSION/workspace/javascript/master/web-ui-javascript$ 


```


Run ChromeDriverFactory test:
```
pavel@pavel-nata:~/QAMISSION/workspace/javascript/master/web-ui-javascript$ npx jest src/tests/driver/ChromeDriverFactory.test.js 
 FAIL  src/tests/driver/ChromeDriverFactory.test.js (23.591 s)
  ChromeDriverFactory Integration Test
    ✕ Start Chrome Driver and navigate to URL (21879 ms)

  ● ChromeDriverFactory Integration Test › Start Chrome Driver and navigate to URL

    expect(received).toEqual(expected) // deep equality

    Expected: "GLEN ERIN DRIVE"
    Received: "ISABELLA STREET"

      30 |     const element = await driver.findElement(By.css("div.booking-selector"));
      31 |     const elementText = await element.getText();
    > 32 |     expect(elementText).toEqual("GLEN ERIN DRIVE"); // Adjust the text as necessary
         |                         ^
      33 |   }, 30000); // Increase timeout if necessary
      34 | });
      35 |

      at toEqual (src/tests/driver/ChromeDriverFactory.test.js:32:25)
      at call (src/tests/driver/ChromeDriverFactory.test.js:2:1)
      at Generator.tryCatch (src/tests/driver/ChromeDriverFactory.test.js:2:1)
      at Generator._invoke [as next] (src/tests/driver/ChromeDriverFactory.test.js:2:1)
      at asyncGeneratorStep (src/tests/driver/ChromeDriverFactory.test.js:2:1)
      at asyncGeneratorStep (src/tests/driver/ChromeDriverFactory.test.js:2:1)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        23.641 s
Ran all test suites matching /src\/tests\/driver\/ChromeDriverFactory.test.js/i.
pavel@pavel-nata:~/QAMISSION/workspace/javascript/master/web-ui-javascript$ 
```

