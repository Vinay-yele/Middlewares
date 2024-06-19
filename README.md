Express Error Handling and Error Counting
This project features an Express server that implements robust error handling and error counting mechanisms.

Features
Error Handling: If any endpoint encounters an exception, the server responds with a 404 status code.
Error Counting: Tracks the number of exceptions that occur, exposing this count via an API endpoint.
Endpoints
GET /user: Simulates an error by always throwing an exception.
POST /user: Responds with a dummy user creation message.
GET /errorCount: Returns the current error count.




This server helps demonstrate how to handle errors in an Express application and maintain an error count across requests.






