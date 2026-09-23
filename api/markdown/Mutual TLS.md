
Mutual TLS is a configuration of the Transport Layer Security protocol in which both the client and the server present and verify X.509 certificates, establishing bidirectional authentication rather than authenticating only the server. Each party proves possession of the private key corresponding to its certificate, which a trusted certificate authority has signed. It is widely used to secure service-to-service communication in zero-trust architectures and microservice meshes. By binding identity to the transport channel, it prevents impersonation and unauthorised connections.

- ### Overview
  - In ordinary TLS only the server authenticates itself to the client. Mutual TLS, also called mTLS, requires the client to present a certificate as well, so each side cryptographically proves its identity during the handshake.
  - This bidirectional trust is foundational to zero-trust architectures, where no network location is implicitly trusted and every connection must be authenticated and encrypted regardless of origin.

- ### Mechanisms
  - During the TLS handshake the server requests a client certificate via a certificate request message.
  - Each party verifies the peer certificate chain against trusted certificate authorities and checks validity and revocation status.
  - Each party signs handshake data with its private key to prove possession of the key matching its certificate.
  - The negotiated session keys then encrypt all subsequent traffic, binding identity to the secured channel.

- ### Applications
  - Service-to-service authentication within microservice meshes and Kubernetes clusters.
  - API gateways and partner integrations requiring strong client identity.
  - Internet-of-things device authentication to backend platforms.
  - Zero-trust enterprise networks enforcing per-connection verification.

- ### Provenance

