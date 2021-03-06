# favicongrab

A module for grabbing Favicon for any web site

[![Build Status](https://travis-ci.org/anubhavsrivastava/favicongrab.svg?branch=master)](https://travis-ci.org/anubhavsrivastava/favicongrab)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![GitHub issues](https://img.shields.io/github/issues/anubhavsrivastava/favicongrab.svg?style=flat-square)](https://github.com/anubhavsrivastava/favicongrab/issues)
[![HitCount](http://hits.dwyl.io/anubhavsrivastava/favicongrab.svg)](http://hits.dwyl.io/anubhavsrivastava/favicongrab)

[![NPM](https://nodei.co/npm/favicongrab.png?downloads=true&stars=true)](https://nodei.co/npm/favicongrab/)

### Install

```
$ npm install favicongrab --save
```

or

```
yarn add favicongrab
```

### Usage

    const { grabFavicon } = require('favicongrab');

    grabFavicon('https://about.theanubhav.com').then((response)=>{console.log(response)})

Above call returns following `response`

    { domain: 'about.theanubhav.com',
      icons: [ {
          src: 'https://about.theanubhav.com/favicon.ico',
        type: 'image/x-icon'
        } ]
    }

### API Specification

#### `grabFavicon`

-   returns - Promise
-   arguments - siteUrl // e.g theanubhav.com

-   Result Data

1.  Success :

        { domain: 'about.theanubhav.com',
            icons: [ {
                src: 'https://about.theanubhav.com/favicon.ico',
                type: 'image/x-icon'
            } ]
        }

Description properties of icon object:

-   property src contains an absolute URL for a favicon image and is required and unique;
-   property type equals an [MIME-type](https://en.wikipedia.org/wiki/Media_type)'s favicon image;
-   property sizes contains size's favicon image and in a simple case has the following format: HEIGHTxWIDTH in pixels.

2. Failure :

All error messages have the following format

    {
        "error": "Unresolved domain name."
    }

### Reference

`favicongrab` uses HTTP API from [favicongrabber](https://favicongrabber.com). Refer service API reference [here](https://favicongrabber.com/service-api-reference).

### Related Module

-   [favicon-downloader](https://github.com/anubhavsrivastava/favicon-downloader) A module for download Favicon of any web site.

### Environment

Currently, `favicongrab` is supported for Nodejs Environment only. Please open a issue for browser support, if required.

### Related Module

-   [favicon-downloader](https://github.com/anubhavsrivastava/favicon-downloader) A module for downloading Favicon of any web site.
-   [favicon-downloader-cli](https://github.com/anubhavsrivastava/favicon-downloader-cli) CLI for favicon-downloader module

### Contribution

Suggestions and PRs are welcome!

Please create issue or open PR request for contribution.

### License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

refer `LICENSE` file in this repository.
