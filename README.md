# extension-vue-2

> ColdBox Elixir 6 support for Vue 2.0

This package provides Webpack support for compiling Vue 2.0 `.vue` files in your ColdBox Elixir 2 projects. Please note that, if using ColdBox Elixir 1, you don't want this package.  [You actually want this one.](https://github.com/coldbox-elixir/extension-vue)

Usage is identical to [coldbox-elixir-vue](https://github.com/coldbox-elixir/extension-vue):

### Step 1: Install

```
npm install coldbox-elixir-vue-2 --save-dev
```

### Step 2: Gulpfile.js

``` js
var elixir = require( "coldbox-elixir" );

require( "coldbox-elixir-vue-2" );

elixir( function( mix ) {
	mix.webpack( "app.js" );
} )
```

## Contributions and Bugs

Project tracking for this project can be found at the [Ortus Solutions Jira](https://ortussolutions.atlassian.net/projects/ELIXIR/summary).  Please log all bugs, improvements, and features there.

Pull requests are welcome and encouraged.  Please [check on the Jira page](https://ortussolutions.atlassian.net/projects/ELIXIR/issues/ELIXIR-2?filter=allissues) before starting any large amount of work so your time isn't wasted.

Brad Wood (@bdw429s) has a [great guide on submitting pull requests.](https://www.ortussolutions.com/blog/submit-your-first-pull-request-to-an-open-source-project)  If you are unsure where to go, in need of help, or have a question, come ask in the #box-products channel on the [CFML Slack](http://cfml-slack.herokuapp.com/).
