
SSL termination is the practice of decrypting inbound TLS-encrypted traffic at a dedicated network endpoint, typically a reverse proxy or load balancer, before forwarding the now-plaintext requests to backend servers. By centralising the cryptographic handshake and certificate management at the edge, it offloads CPU-intensive encryption work from application servers and simplifies certificate lifecycle administration. The terminating node holds the private keys and performs the handshake, then routes traffic over the internal network. It is a foundational pattern in modern web infrastructure, often paired with re-encryption to backends for end-to-end security.

- SSL termination decrypts inbound [[Transport Layer Security]] traffic at a [[Reverse Proxy]] or [[Load Balancer]] edge, offloading [[Cryptography]] from backends and centralising certificate management. It is the entry point that enables [[HTTPS]] while simplifying [[Network Security]] administration.
- ### Overview
- Performing the TLS handshake is computationally expensive; concentrating it at a single tier frees application servers to focus on business logic.
- The terminating node owns the certificates and private keys, presents them to clients, and decrypts the session, then proxies cleartext or re-encrypts to backends.
- This pattern is ubiquitous in load balancers, API gateways, and CDNs.
- ### Mechanisms
- The edge node completes the [[TLS]] handshake and session-key negotiation with the client.
- Decrypted requests are routed to backend pools, optionally over a re-encrypted internal channel.
- Certificate rotation, OCSP stapling, and cipher policy are managed centrally.
- ### Applications
- Web application delivery behind a [[Load Balancer]].
- API gateways performing authentication after decryption.
- Edge acceleration at a [[Content Delivery Network]] or [[Edge Computing]] tier.
- Combining decryption with [[Caching]] for cacheable responses.
- ### Provenance

