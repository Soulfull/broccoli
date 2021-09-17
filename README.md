# Broccoli

A test task. Email subscription service for customers.

---

## About
It is a simple, mobile friendy, application for users email subscription. The app uses `Typescript` for strict type checking, `React` for working with DOM, `Webpack` for building project and `jest` for unit testing. For working with styles, Broccoli supports `CSS Modules`.
I decided not to use any state manager, because of the simplicity of the app.

## Installation

Application uses `npm`, so you should have Node installed.
First clone repo and install dependencies:

```sh
cd broccoli
npm install
```

## Usage

For start dev server:

```sh
npm run start
```

Browser will open `http://localhost:4000`

For run test:

```sh
npm run test
```

For production build:

```sh
npm run build
```

##File Sctructure

* ``api/`` - contains api layers
* ``comonents/`` - simple independent components. Potentialy can be moved to ui-kit
* ``icons/`` - simple components represent UI icons
* ``modules/`` - composition of components
* ``modules/forms/`` - forms
* ``pages/`` - application pages components
