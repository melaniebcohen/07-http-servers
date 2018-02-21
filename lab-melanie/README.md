![cf](https://i.imgur.com/7v5ASc8.png) Lab 07: Vanilla HTTP Server
======

## Directory Structure
* **README.md**
* **.gitignore**
* **.eslintrc**
* **.eslintignore**
* **package.json**
  * a `lint` script has been configured for running eslint
  * a `start` script has been configured for running the server
* **lib/**
  * **parse-body.js** - a custom middleware module similar to body-parser
* **server.js** - contains server configuration all requests

## Installation
1. To install this application, download the files from this repository
2. `cd` to the repository directory and run `npm i`
3. Use `npm run start` or `node server.js` to start the server connection

## HTTP Requests
Users can make the following requests:
GET: `/` will result in a 'Hello from my server!' message.
```
http :3000
```

GET: `/cowsay text=='text here'` will respond with a cow saying your message.
```
http :3000/cowsay text=='hello'
```

POST: `/cowsay message=='text here'` will respond with a cow saying your message.
```
http :3000/cowsay message=='bonjour'
```

## Stretch Goal: Changing Cow File
Users can change the cow on the `cowsay_type` GET request by entering `/cowsaytype text=='text here' f=='animal here'`:

```
http :3000/cowsay_type text=='Where are my dragons??' f=='DRAGON'
```
Available animal types are listed [here](https://github.com/piuccio/cowsay).