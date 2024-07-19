# @axe/webdriverio and/or @webdriverio/spec-reporter memory leak

Simply run `npm install` and then:

```bash
npm run wdio
```

The `wdio.conf.js` already enables `NODE_OPTIONS=--inspect` for the WebdriverIO worker.
Attach a debugger, e.g. via [chrome://inspect](chrome://inspect) in Chrome, and use allocation instrumentation and heap snapshots to investigate.

## Screenshots

![Heap containment diff view of the script leak](heap-view-script-leak.png)

![Allocation timeline from a single call](allocation-timeline.png)