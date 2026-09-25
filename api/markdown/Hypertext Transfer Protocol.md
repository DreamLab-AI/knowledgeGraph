The Hypertext Transfer Protocol (HTTP) is an application-layer, request-response protocol for exchanging hypermedia documents and data across the web. Clients issue requests with methods and headers, and servers return responses with status codes and content. HTTP is the foundational protocol of the World Wide Web and of most modern web APIs.

### Overview

- HTTP defines how clients ask for resources and how servers respond, using a small set of methods and a rich header model.
- It is stateless by design: each request is independent, with state layered on top via cookies and tokens.
- Successive versions improved performance through persistent connections, multiplexing, and header compression.
- HTTPS adds confidentiality and integrity by running HTTP over a [[TLS]] channel.

### Mechanisms

- Methods such as GET, POST, PUT, and DELETE express the intended operation on a resource.
- Status codes communicate the outcome of each request to the client.
- Headers carry metadata for content negotiation, caching, and authentication.
- Connection reuse and multiplexing reduce latency for multiple resources.

### Key aspects

- Statelessness: requests are self-contained for scalability.
- Uniform interface: a consistent method and resource model.
- Extensibility: headers and methods allow evolution without breaking clients.
- Cacheability: responses can be cached to reduce load and latency.

### Applications

- Serving web pages and hypermedia across the [[Application Layer]].
- Backing [[REST API]] and other web service architectures.
- Delivering content for single-page and mobile applications.
- Carrying machine-to-machine [[API]] traffic in distributed systems.

### Provenance

