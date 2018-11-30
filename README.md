# react-panini-calculator 

## Run with docker

```bash
$ docker build -t panini-calculator:latest .
$ docker run -p 8080:80 panini-calculator:latest
```

=> open http://localhost:8080 in your browser, (first call will take 10s to respond)


# Run locally to dev

## Prequesites

make sure you have [node and npm](https://nodejs.org/en/) installed

```bash
$ node -v  #=> v8.2.1
$ npm -v   #=> 5.3.0
```

## run it

clone the project and cd inside

```bash
$ git clone https://github.com/straczowski/react-panini-calculator.git
$ cd react-panini-calculator
```

install modules and and run it 

```
$ npm install
$ npm start
```

=> will automatically open http://localhost:3000 in your browser