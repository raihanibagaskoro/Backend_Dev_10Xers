## API DOCUMENTATIONS
---

#### User
<details>
 <summary><code>POST</code> <code><b>/login</b></code> <code>(user login)</code></summary>

 ##### Body

> | key      |  type     | data type               |
> |-----------|-----------|-------------------------|
> | username      |  required | String   |
> | password      |  required | String   |


##### Responses

> | http code     | response                                                            |
> |---------------|---------------------------------------------------------------------|
> | `200`         |`access_token`                                |
> | `401`         | `"Invalid username or password"`                            |
> | `500`         | `"Internal server error"`                                                                |


</details>

#### Product
<details>
 <summary><code>POST</code> <code><b>/product</b></code> <code>(add new product)</code></summary>

##### Headers

> | key      |  type     | data type               |
> |-----------|-----------|-------------------------|
> | access_token      |  required | String   |

 ##### Body

> | key      |  type     | data type               |
> |-----------|-----------|-------------------------|
> | productName      |  required | String   |
> | price      |  required | Integer   |


##### Responses

> | http code     | response                                                            |
> |---------------|---------------------------------------------------------------------|
> | `201`         |`{"id": Integer, "productName": String, "price": Integer, "updatedAt": DATE, "createdAt": DATE}`                                |
> | `401`         | `"Unauthorized"`                            |
> | `403`         | `"Forbidden"`                                                                |
> | `500`         | `"Internal server error"`                                                                |


</details>

<details>
 <summary><code>GET</code> <code><b>/product</b></code> <code>(view all product)</code></summary>

##### Headers

> | key      |  type     | data type               |
> |-----------|-----------|-------------------------|
> | access_token      |  required | String   |

 ##### Body

> None


##### Responses

> | http code     | response                                                            |
> |---------------|---------------------------------------------------------------------|
> | `200`         |`{"id": Integer, "productName": String, "price": Integer, "updatedAt": DATE, "createdAt": DATE}...`                                |
> | `401`         | `"Unauthorized"`                            |
> | `403`         | `"Forbidden"`                                                                |
> | `500`         | `"Internal server error"`                                                                |


</details>

<details>
 <summary><code>GET</code> <code><b>/product/search</b></code> <code>(search products based on product name)</code></summary>

##### Headers

> | key      |  type     | data type               |
> |-----------|-----------|-------------------------|
> | access_token      |  required | String   |

 ##### Parameters

> | key      |  type     | data type               |
> |-----------|-----------|-------------------------|
> | productName      |  required | String   |


##### Responses

> | http code     | response                                                            |
> |---------------|---------------------------------------------------------------------|
> | `200`         |`{"id": Integer, "productName": String, "price": Integer, "updatedAt": DATE, "createdAt": DATE}...`                                |
> | `401`         | `"Unauthorized"`                            |
> | `500`         | `"Internal server error"`                                                                |


</details>

<details>
 <summary><code>GET</code> <code><b>/product/:id</b></code> <code>(view a product based on id)</code></summary>

##### Headers

> | key      |  type     | data type               |
> |-----------|-----------|-------------------------|
> | access_token      |  required | String   |

 ##### Body

> None

 ##### Parameters

> | key      |  type     | data type               |
> |-----------|-----------|-------------------------|
> | id      |  required | Integer   |


##### Responses

> | http code     | response                                                            |
> |---------------|---------------------------------------------------------------------|
> | `200`         |`{"id": Integer, "productName": String, "price": Integer, "updatedAt": DATE, "createdAt": DATE}`                                |
> | `401`         | `"Unauthorized"`                            |
> | `403`         | `"Forbidden"`                                                                |
> | `500`         | `"Internal server error"`                                                                |


</details>

<details>
 <summary><code>PUT</code> <code><b>/product/:id</b></code> <code>(edit a product based on id)</code></summary>

##### Headers

> | key      |  type     | data type               |
> |-----------|-----------|-------------------------|
> | access_token      |  required | String   |

 ##### Body

> | key      |  type     | data type               |
> |-----------|-----------|-------------------------|
> | productName      |  optional | String   |
> | price      |  optional | String   |

 ##### Parameters

> | key      |  type     | data type               |
> |-----------|-----------|-------------------------|
> | id      |  required | Integer   |


##### Responses

> | http code     | response                                                            |
> |---------------|---------------------------------------------------------------------|
> | `200`         |`Product updated successfully`                                |
> | `401`         | `"Unauthorized"`                            |
> | `403`         | `"Forbidden"`                                                                |
> | `404`         | `"Product not found"`                                                                |
> | `500`         | `"Internal server error"`                                                                |


</details>

<details>
 <summary><code>DELETE</code> <code><b>/product/:id</b></code> <code>(delete a product based on id)</code></summary>

##### Headers

> | key      |  type     | data type               |
> |-----------|-----------|-------------------------|
> | access_token      |  required | String   |


 ##### Parameters

> | key      |  type     | data type               |
> |-----------|-----------|-------------------------|
> | id      |  required | Integer   |


##### Responses

> | http code     | response                                                            |
> |---------------|---------------------------------------------------------------------|
> | `200`         |`Product deleted successfully`                                |
> | `401`         | `"Unauthorized"`                            |
> | `403`         | `"Forbidden"`                                                                |
> | `404`         | `"Product not found"`                                                                |
> | `500`         | `"Internal server error"`                                                                |


</details>