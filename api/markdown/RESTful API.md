A RESTful API is a web application programming interface that follows the Representational State Transfer architectural style, exposing resources identified by URIs and manipulated through a uniform set of HTTP methods. It is stateless, treats responses as representations of resource state, and uses standard status codes and media types so clients and servers can evolve independently. RESTful design favours predictable, cacheable, hypermedia-driven interactions over the web.

### Overview

- REST treats everything as a resource with a stable identifier; clients act on resources by transferring representations of their state.
- Statelessness means each request carries all context it needs, improving scalability and enabling [[Caching]].
- A uniform interface and self-descriptive messages let clients and servers evolve independently, with hypermedia ([[HATEOAS]]) guiding navigation.

### Key aspects

- Resource modelling and consistent URI design under [[API Design]].
- HTTP verbs mapped to create, read, update and delete semantics.
- Appropriate status codes, content negotiation and [[Idempotency]] guarantees.
- Cacheability and layered architecture for scalability.

### Applications

- Public and internal web services exposing data and operations.
- Inter-service communication across [[Microservices]].
- Backends for web and mobile clients, fronted by an [[API Gateway]].
- Integration platforms managed via [[API Management]].

### Provenance

