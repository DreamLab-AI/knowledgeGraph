A web API is an application programming interface exposed over the web using HTTP, allowing programs to request and exchange data with a remote service rather than rendering pages for humans. It defines a contract of endpoints, request and response formats, authentication and error semantics, commonly returning structured data such as JSON. Web APIs are the backbone of integration between applications, mobile clients, microservices and third-party platforms, with REST and GraphQL being two prevailing architectural styles.

### Overview

- Where a website renders HTML for people, a web API returns machine-readable data for other software to consume.
- A consumer issues HTTP requests to defined endpoints and receives structured responses such as JSON or XML.
- The API contract specifies resources, methods, parameters, status codes and authentication so clients can integrate reliably.
- REST and GraphQL are dominant styles, each with different trade-offs in flexibility and caching.

### Key aspects

- Contract: a stable, documented interface decouples client and server evolution.
- Transport: HTTP provides verbs, status codes and headers as the uniform protocol.
- Data format: JSON is the common payload, with content negotiation supporting alternatives.
- Cross-cutting concerns: authentication, rate limiting, versioning and error handling shape robustness.

### Applications

- Mobile and single-page applications fetching data from backend services.
- Microservice-to-microservice communication within distributed systems.
- Public platform APIs enabling third-party developers to build integrations.
- Automation and data pipelines pulling from or pushing to remote services.

### Provenance

