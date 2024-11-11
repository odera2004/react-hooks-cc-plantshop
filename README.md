# Phase 2 Code Challenge: Plantsy
# odera2004

## Endpoints

The base URL for your backend is: `http://localhost:6001`

## Core Deliverables

As a user:

1. When the app starts, I can see all plants.
2. I can add a new plant to the page by submitting the form.
3. I can mark a plant as "sold out".
4. I can search for plants by their name and see a filtered list of plants.

### Endpoints for Core Deliverables


### Bugs
1. The search functionality is case sensitive.
2. Page needs reloading after deleting and adding a plant.

#### GET /plants

Example Response:

```json
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }
]
```

#### POST `/plants`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "name": "string",
  "image": "string",
  "price": number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
```

## Advanced Deliverables

As a user:
1. I can delete a plant and it is still gone when I refresh the page.

### Endpoints for Advanced Deliverables

#### PATCH /plants/:id

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "price": number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 16.99
}
```

#### DELETE /plants/:id

Example Response:

```json
{}
```
