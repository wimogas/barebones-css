# Barebones CSS 1.0.0

Barebones CSS is a simple and customizable CSS Library built with SCSS & Webpack and documented with Storybook.

Check out the Storybook Docs:

[![storybook-logo.png](src%2Fassets%2Fstorybook-logo.png)](https://barebones-css.vercel.app/)

## Features

- Fully-loaded with utilities like colors, spacing, typography, layout and more.
- Customizable with tokens and themes

## Installation

```bash
npm install barebones-css
```

## Usage

```jsx
import '../node_modules/barebones-css/build/index.css';
...
<div class="bb-p-200 bb-m-500 bb-bg-primary-500"></div>

```

## Customization

Create your own theme.scss and import our variables:

```scss
@import '../node_modules/barebones-css/build/scss/styles/'

//use barebones $primary700 token in your custom scss
$custom-token: $primary700;

.custom {
  color: $custom-token;
}
```

Or directly change the value of our variables:

```scss
//overrides $primary700 from barebones-css variables
$primary700: #d63384;

@import '../node_modules/barebones-css/build/scss/styles'
```
