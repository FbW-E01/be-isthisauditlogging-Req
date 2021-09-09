# Backend - Server - Fancy Logging

- I want you to create an express server.
- This server should have two GET endpoints and two POST endpoints. 
- When we get a request to *any* endpoint, make a note of that into your database (lowdb). 

- Make sure to use proper ISO 8601 date formats: https://en.wikipedia.org/wiki/ISO_8601 
- For example, if your server receives a request to `/secret` on `06.09.2021 20:11:22 (UTC)` your log entry should look like this:

> [2021-09-06T20:11:22Z] /secret accessed

- All log entries need to be contained in an array.

- **BONUS** Add an endpoint that returns all the entries in your access log.
- **BONUS** Your endpoints should return a response slowly. Wait between 1 and 5 seconds before responding to requests. Those frontends are getting too fast anyways, we need to slow them down!







































































🍌🍌🍌🍌🍌
