# extension-vue-2

> ColdBox Elixir 6 support for Vue 2.0

This package provides Webpack support for compiling Vue 2.0 `.vue` files in your ColdBox Elixir 2 projects. Please note that, if using ColdBox Elixir 1, you don't want this package.

Usage is identical to [coldbox-elixir-vue](https://github.com/coldbox-elixir/extension-vue):

## Step 1: Install

```
npm install coldbox-elixir-vue-2 --save-dev
```

## Step 2: Gulpfile.js

``` js
var elixir = require( "coldbox-elixir" );

require( "coldbox-elixir-vue-2" );

elixir( function( mix ) {
	mix.webpack( "app.js" );
} )
```
