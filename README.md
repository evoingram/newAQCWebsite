[![Maintainability](https://api.codeclimate.com/v1/badges/043ebab30e06dbf85ed7/maintainability)](https://codeclimate.com/github/evoingram/newAQCWebsite/maintainability)

# A Quo Co. Official Company Website

[Deployed Project](https://www.aquoco.co)

## Project Description

new company website using what I've learned in Lambda.

This project was developed using many parametric mixins and nested styles, different media queries for phone, tablet, and desktop, responsive units for font sizing, and media queries escaped. It has several animations, two for the showcase image up top, another for the various sections coming in from alternating sides (slide in left/right), and yet another for the underlines when you hover over a link. On the main page, they underline from the inside outward. Any gradient you see was generated with pure CSS. The site utilizes a form I designed from scratch for orders and price quotes.

## Key Features

- Live solo project
- Made with LESS, JavaScript, HTML, and CSS
- Fourth iteration, utilizing what I've learned at Lambda
- Ranks in the 90th percentile in Google PageSpeed Insights
- Ranks on first page results for "seattle transcription" in Google, page two for Bing/Duckduckgo
- 100/100 for accessibility, best practices, and SEO in Google Chrome's Lighthouse report
- 95/100 for performance in Google Chrome's Lighthouse report
- pure CSS gradients
- completed popup windows except for priceQuote & FAQ
- this is an infinite or endless page; all internal links on main page are a popup to other hidden sections on the same page.
- contains animation in showcase image from top of page to where it resides.
- contains animation bringing in the stripes/main nav linked pages from either side; left, right, left,right, left to where they each reside.
- contains separate less files for animation/header/form or popup window.
- contains several mixins: one for animation, several for color manipulation according to color scheme, some flexbox ones, and an order/z-index one.
- image carousel for court transcription section changes images every 7-8 seconds to show sections of the company's product.
- added hover blur to front showcase image
- added linear gradient to logo and nav menus
- added underline from inside out effect to nav link hover https://codepen.io/matchboxhero/pen/VMEWrq?editors=1100
- FAQ issues fixed (width, padding, and questions/answers not popping out properly)
- added clickable image carousel, removed timed image shuffle
- sticky header menu
- added empty line/space above green text in showcase image
- stopped underlining of all body links
- added blur transition fade-in to showcase
- priceQuote popup
- refactor order form from old to new
- development page goes too far down when you click development links
- refactored whole website for best LESS pages/functions
- used separate js page for javascript functions
- tested order form
- added button to order another when complete
- fixed recaptcha
- figured out why submitted order form is redirecting to php page
- reformatted languages in development section
- closed other sub-windows when you open another one
- tablet & mobile versions
- alternate blue/silver background
- rounded aqc logo corners
- trick anchors for sticky navbar

## Tech Stack

Front end deployed to `private hosting` and built using:

- [HTML](https://en.wikipedia.org/wiki/HTML): standard markup language for documents designed to be displayed in a web browser.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS):  a stylesheet language used to describe the presentation of a document written in HTML or XML.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript):  a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
- [LESS](http://lesscss.org/):  a backwards-compatible language extension for CSS.
   
## Testing

This site was tested in Brave, Firefox, I.E., Edge, and Chrome.
