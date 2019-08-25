## Repro steps for [issue #8872](https://github.com/facebook/jest/issues/8872)

1. Run `npm install`
2. run `npm test`

## Expected result

The test **passes** because the result from the "compiler" which is run in the worker is sent back to the main thread.


> The script which is run in the worker is a TypeScript file. This script is being transformed by jest's transformer specified in [babel.config.js](https://github.com/tedconn/worker-jest-ts/blob/master/babel.config.js)

## Actual result

```bash
Call retries were exceeded

      at ChildProcessWorker.initialize (node_modules/jest-worker/build/workers/ChildProcessWorker.js:193:21)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.818s, estimated 1s
Ran all test suites.
Jest did not exit one second after the test run has completed.

This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.
```

