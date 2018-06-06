# Notes from AngularJS GetSTarted
[![BCH compliance](https://bettercodehub.com/edge/badge/JulCesMelPin/surveyApp-BackEnd?branch=master)](https://bettercodehub.com/)

## Table of contents
<details>
<!-- toc -->

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Install](#install)
- [Steps](#steps)
  * [Step 0](#step-00)
  * [Step 1](#step-01)
  * [Step 2](#step-02)
  * [Step 3](#step-03)
  * [Step 4](#step-04)
  * [Step 5](#step-05)
  * [Step 6](#step-06)
</details>

## Description

This is an exercise from Pluralsight course on [AngularJS](https://app.pluralsight.com/paths/skill/angular-js) - GetSTarted, authored by Scott Allen ([Go to course](https://app.pluralsight.com/library/courses/angularjs-get-started/table-of-contents)). The code is organized in branches to make it easy to navigate between develope stages as explained below.

## Prerequisites

### Git

- A good place to learn about setting up git is [here](https://app.pluralsight.com/library/courses/introduction-to-git/table-of-contents).
- You can find documentation and download git [here](https://git-scm.com/doc).

### No need for Node.js or its package manager (npm).

## Install
 
To begin using this material, clone this repository on your prefered destination:

```git
git clone https://github.com/DrGregoryHouse/AngularJS_GetSterted.git
```

## Steps

Switch branches to navigate between steps in the code generation. You can `git checkout` to an *x* point of the tutorial using:

```git
git checkout step0x
```

To see the changes made between any two lessons use the `git diff` command:

```git
git diff step0?..step0?
```

### Step 00 - Blank HTML/JS/CSS template
This is the initial step on the assesment of building a simple AngularJS web application. To get into the first step (Step 00) go to the root directory of the repository and use:
 
```git
git checkout Step00
```

Application Directory Layout:
```
src/                     --> all the source code of the app (along with unit tests)
  lib/...                  --> 3rd party JS/CSS libraries, including Angular and jQuery
  scripts/                 --> all Javascript code
    main.js                  --> main Javascript file.
  styles/                  --> all stylesheet information (not used).
    main.css                 --> main Stylesheet file.
  index.html               --> app layout file (the main HTML template file of the app)
README.md                --> general information about this repository.
```

Changes to be made to the next step:
- Add the 'angular.js' script.
- Add the `ngApp` directive to bootstrap the application.

### Step 1

In this step, the application consumes Github API in a single view. To get into this step use:
 
```git
git checkout Step01
```

Application Directory Layout:
```
src/                     --> all the source code of the app (along with unit tests)
  lib/                     --> 3rd party JS/CSS libraries, including Angular and jQuery
    angular.min.js           --> AngularJS library minified.
  scripts/                 --> all Javascript code
    main.js                  --> main Javascript file.
  styles/                  --> all stylesheet information (not used).
    main.css                 --> main Stylesheet file.
  index.html               --> app layout file (the main HTML template file of the app)
README.md                --> general information about this repository.
```

Changes to be made to the next step:
- Add Immediate Function Invocation (IFI) syntax.
- Add `ng-form` to implement a search by username input parameter.

### Step 2

This is where search button is implemented.
 
```git
git checkout Step02
```

Application Directory Layout:
```
src/                     --> all the source code of the app (along with unit tests)
  lib/                     --> 3rd party JS/CSS libraries, including Angular and jQuery
    angular.min.js           --> AngularJS library minified.
  scripts/                 --> all Javascript code
    main.js                  --> main Javascript file.
  styles/                  --> all stylesheet information (not used).
    main.css                 --> main Stylesheet file.
  index.html               --> app layout file (the main HTML template file of the app)
README.md                --> general information about this repository.
```

Changes to be made to the next step:
- Add Immediate Function Invocation (IFI) syntax.
- Add `ng-form` to implement a search by username input parameter.

### Step 3

In this part, username information is placed in a view.
 
```git
git checkout Step03
```

Application Directory Layout:
```
src/                     --> all the source code of the app (along with unit tests)
  lib/                     --> 3rd party JS/CSS libraries, including Angular and jQuery
    angular.min.js           --> AngularJS library minified.
  scripts/                 --> all Javascript code
    main.js                  --> main Javascript file.
  styles/                  --> all stylesheet information (not used).
    main.css                 --> main Stylesheet file.
  index.html               --> app layout file (the main HTML template file of the app)
README.md                --> general information about this repository.
```

Changes to be made to the next step:
- Add
- Add

### Step 4

In this step, repositories from a user on Github are queried and displayed. 
 
```git
git checkout Step04
```

Application Directory Layout:
```
src/                     --> all the source code of the app (along with unit tests)
  lib/                     --> 3rd party JS/CSS libraries, including Angular and jQuery
    angular.min.js           --> AngularJS library minified.
  scripts/                 --> all Javascript code
    main.js                  --> main Javascript file.
  styles/                  --> all stylesheet information (not used).
    main.css                 --> main Stylesheet file.
  index.html               --> app layout file (the main HTML template file of the app)
README.md                --> general information about this repository.
```

Changes to be made to the next step:
- Add
- Add

### Step 5

In this step, ´ng-include´ is used to organize views.
 
```git
git checkout Step05
```

Application Directory Layout:
```
src/                     --> all the source code of the app (along with unit tests)
  lib/                     --> 3rd party JS/CSS libraries, including Angular and jQuery
    angular.min.js           --> AngularJS library minified.
  scripts/                 --> all Javascript code
    main.js                  --> main Javascript file.
  styles/                  --> all stylesheet information (not used).
    main.css                 --> main Stylesheet file.
  index.html               --> app layout file (the main HTML template file of the app)
README.md                --> general information about this repository.
```

Changes to be made to the next step:
- Add
- Add

### Step 6

Final step for best practices. 
 
```git
git checkout Step06
```

Application Directory Layout:
```
src/                     --> all the source code of the app (along with unit tests)
  lib/                     --> 3rd party JS/CSS libraries, including Angular and jQuery
    angular.min.js           --> AngularJS library minified.
  scripts/                 --> all Javascript code
    main.js                  --> main Javascript file.
  styles/                  --> all stylesheet information (not used).
    main.css                 --> main Stylesheet file.
  index.html               --> app layout file (the main HTML template file of the app)
README.md                --> general information about this repository.
```

Changes to be made to the next step:
- Add
- Add

## Contact

For more information of this repository, please contact `julioc.melchor@softtek.com`