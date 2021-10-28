# Requirements
## NPX
Npx is a command line tool who provide a shortcut to `./node_module/.bin`
```shell
npm install -g npx
```

## Mongo DB
A running mongodb server, available on `localhost:27017`

# How to start
## Install dependencies
```shell
npm install
```

## Run migration
```shell
npm run migrate
```

# How to use
## Run server in production mode
```shell
npm start
```

## Run server in development mode
```shell
npm run start-dev
# or
npx pm2 start
```

## Run test
```shell
npm test
```

## Show logs
```shell
npm run logs
# or
npx pm2 logs
```
