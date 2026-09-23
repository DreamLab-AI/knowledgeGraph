
Stateless architecture is a design approach in which each request carries all the information needed to process it, and the serving component retains no client session state between requests. By externalising state to caches, databases, or tokens, stateless services can be freely replicated, replaced, and load-balanced, which simplifies horizontal scaling and fault recovery at the cost of pushing state management to dedicated stores.

- [[Stateless Architecture]] is a design where each request carries everything needed to serve it and the component keeps no session state. It enables [[Scalability]] and [[Load Balancing]], commonly over a [[REST API]], and is a hallmark of [[Cloud Native]] systems.
- ### Overview
- Statelessness decouples a request from any particular server instance. Because no instance holds unique session data, any replica can serve any request, making the system resilient to node loss and easy to scale out.
- The trade-off is that state must live somewhere: stateless designs externalise it to databases, distributed caches, or self-contained tokens carried by the client.
- ### Key aspects
- Each request is self-describing, typically authenticated by a token rather than a server-side session.
- Identical, interchangeable replicas allow simple [[Load Balancing]] without sticky sessions.
- Externalised state stores become the durability and consistency boundary of the system.
- Failure recovery is straightforward because replacing an instance loses no in-flight client state.
- ### Applications
- Horizontally scaled web and API tiers behind a load balancer.
- [[Microservices]] deployed and replaced rapidly under [[Kubernetes]].
- Serverless functions that spin up per request with no retained context.
- ### Provenance

