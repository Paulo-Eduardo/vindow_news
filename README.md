# Vindow News

Before being able to run you have to set .env
Use .env.example to have an idea on how to config it

Now you can choose to run it using docker or not

## Docker

The most simple way to work with a dev environment

`docker-compose up --build`

This will raise 4 containers

- `mongo`: database
- `server`: back end
- `client`: front end
- `mongo-seed`: this one will add a list of news into the database for test pourpose

## Without docker

To run it outside docker you need to:

- set new `MONGO_URI` variable into `./api/.env` file with the URI for you database. URI format `mongodb://<user>:<pass>@<host>:<port>/vindow`

now you can use the api developed here or even the one provided for this test

In `./client/.env` set VITE_API_URL to the one you choose

- local = `http://localhost:8081/v1`
- provided = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api`

Also, the api key and host should be setted(this sted is indiferent for the api used)

```
VITE_RAPIDAPI_KEY=e28105562fmsh01edebafeeb6117p1f37e7jsn0221a314ae3d
VITE_RAPIDAPI_HOST=contextualwebsearch-websearch-v1.p.rapidapi.com
```

This two are hardcoded on local api just for the sake of this test. I wanted to let front just switch API address and use the rest as it is

Now you can start the api(or not)

From root

- `cd ./api`
- `npm i`
- `npm start`

For the front-end

From root

- `cd ./client`
- `npm i`
- `npm run dev`

## Possible improvements

- A better script for seeding the database, I wish I had something that run just during the first build process, or just check if db exist and let it be
- Add page size config to the News Card List
- A lot of UI improvements, lack of criativity in this side gets the best of me (sorry 😅)
- A real authentication middleware check
