
A reverse proxy is a server that sits in front of one or more backend servers and forwards client requests to them, presenting a single entry point to the outside world. It terminates client connections, can offload TLS, cache responses, compress payloads and apply access controls before relaying traffic. By decoupling clients from backends it improves security, scalability and operational flexibility.

- ### Overview
  - Unlike a forward proxy, which acts on behalf of clients, a reverse proxy acts on behalf of servers, accepting external connections and distributing them to internal services.
  - It provides a single, stable entry point so that backend services can be added, removed or relocated without affecting clients.
  - Popular implementations include general-purpose web servers configured in proxy mode and dedicated edge proxies.

- ### Key aspects
  - TLS offloading via [[SSL Termination]], decrypting once at the edge so backends serve plaintext internally.
  - Response [[Caching]] and compression to reduce backend load and latency.
  - Request routing by host or path, header rewriting and connection pooling.
  - Security functions such as [[Rate Limiting]] and integration with a [[Web Application Firewall]].

- ### Applications
  - Exposing internal [[Microservices]] behind a unified hostname.
  - Edge termination and caching in front of a [[Content Delivery Network]] origin.
  - Blue-green and canary release routing during deployments.
  - Centralised TLS, authentication and logging for web estates.

- ### Provenance

