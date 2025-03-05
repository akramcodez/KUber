# User Registration Endpoint Documentation

## Endpoint: `/users/register`

### Method: POST

### Description

This endpoint is used to register a new user. It validates the input data and creates a new user in the database if the data is valid.

### Request Body

The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response

#### Success (201 Created)

If the user is successfully registered, the response will be a JSON object containing the user's token and user details.

Example:

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error (400 Bad Request)

If there are validation errors, the response will be a JSON object containing the errors.

Example:

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First Name is required",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be atleast 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

Status Codes
201 Created: User successfully registered.
400 Bad Request: Validation errors in the request body.

Usage
To register a new user, send a POST request to /users/register with the required data in the request body.

This documentation provides an overview of the /users/register endpoint, including the required data, response format, and status codes.

Save this content in a file named `README.md` in the `Backend` folder.
Save this content in a file named `README.md` in the `Backend` folder.
