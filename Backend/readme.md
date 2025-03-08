# User Authentication API

## Endpoints

### 1. Register a New User

**Endpoint:** `/users/register`  
**Method:** `POST`  
**Description:** Registers a new user by validating input data and storing the user in the database.

#### Request Body

The request body should be a JSON object containing the following fields:

```json
{
  "fullname": {
    "firstname": "John", // Required, minimum length: 3 characters
    "lastname": "Doe" // Optional, minimum length: 3 characters
  },
  "email": "john.doe@example.com", // Required, valid email format
  "password": "password123" // Required, minimum length: 6 characters
}
```

#### Response

##### Success (201 Created)

If registration is successful, the response will contain the user's token and details.

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

##### Error (400 Bad Request)

If validation fails, an error response is returned.

```json
{
  "errors": [
    { "msg": "Invalid Email", "param": "email", "location": "body" },
    {
      "msg": "First Name is required",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

**Status Codes:**

- `201 Created` - User successfully registered.
- `400 Bad Request` - Validation errors in the request body.

---

### 2. User Login

**Endpoint:** `/users/login`  
**Method:** `POST`  
**Description:** Authenticates an existing user and returns a token if credentials are valid.

#### Request Body

The request body should be a JSON object containing the following fields:

```json
{
  "email": "john.doe@example.com", // Required, valid email format
  "password": "password123" // Required, minimum length: 6 characters
}
```

#### Response

##### Success (200 OK)

If login is successful, the response will contain the user's token and details.

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

##### Error (400 Bad Request)

If validation fails, an error response is returned.

```json
{
  "errors": [
    { "msg": "Invalid Email", "param": "email", "location": "body" },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

##### Error (401 Unauthorized)

If the email or password is incorrect, an unauthorized response is returned.

```json
{
  "message": "Invalid email or password"
}
```

**Status Codes:**

- `200 OK` - User successfully logged in.
- `400 Bad Request` - Validation errors in the request body.
- `401 Unauthorized` - Invalid email or password.

---

## Usage

- To **register** a new user, send a `POST` request to `/users/register` with the required data in the request body.
- To **log in**, send a `POST` request to `/users/login` with the required credentials in the request body.

This documentation provides an overview of the `/users/register` and `/users/login` endpoints, including required data, response formats, and status codes.
