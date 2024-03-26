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

```
<div class="bb-p-200 bb-m-500 bb-bg-primary-500"></div>

```

## Customization

Create your own theme.scss and import our variables:

```
import '../node_modules/barebones-css/scss/variables/colors'

$custom-token: $primary700
```

Or directly change the value of our variables:

```
//overrides $primary700 from barebones-css variables
$primary700: #d63384

import '../node_modules/barebones-css/scss/variables'
```
