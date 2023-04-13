const jwt = require('jsonwebtoken');
const JWT_SECRET = 'newtonSchool';

/*
You need to implement a middleware function in Express that gets the logged-in user's information from the JSON web token (JWT) provided in the Authorization header of the request. The middleware function is named "getLoggedInUser" and takes three parameters: req, res, and next.

The middleware function first checks if the token is present in the Authorization header. If it is missing, the middleware function returns a 401 status code with an error message indicating that the authentication failed due to a missing token.

If the token is present, the middleware function attempts to verify the token with the JWT_SECRET. If the verification fails, the middleware function returns a 401 status code with an error message indicating that the authentication failed due to an invalid token.

If the token verification succeeds, the middleware function extracts the user's information from the decoded token and sets it as a property on the request object named "user". Then, the middleware function calls the next() function to pass control to the next middleware function in the request processing chain.

If the authorization header is missing:
Status Code: 401 Unauthorized
Response Body: { "message": "Authentication failed: Missing token.", "status": "error" }

If the authorization header is present but the token is invalid:
Status Code: 401 Unauthorized
Response Body: { "message": "Authentication failed: Invalid token.", "status": "error" }

If the authorization header is present and the token is valid:
The middleware will decode the token and extract the user object from it.
The user object will be added to the request object under the property "user".
The middleware will call the next middleware or controller in the chain.

*/
const getLoggedInUser = (req, res, next) => {
    //Write your code here
};


module.exports = getLoggedInUser;