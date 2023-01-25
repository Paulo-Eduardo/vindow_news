## Comented code is needed when adding auth to the mongo access, also need to add auth mode to the mongoimport as a arg

FROM mongo

 ARG DATABASE_URI
#  ARG USERNAME
#  ARG PASSWORD
 ARG MONGO_INITDB_DATABASE

 ENV DATABASE_URI ${DATABASE_URI}
#  ENV USERNAME ${USERNAME}
#  ENV PASSWORD ${PASSWORD}
 ENV MONGO_INITDB_DATABASE ${MONGO_INITDB_DATABASE}

COPY news.json /news.json

CMD mongoimport --uri ${DATABASE_URI} --db vindow --collection news --drop --file ./news.json --jsonArray