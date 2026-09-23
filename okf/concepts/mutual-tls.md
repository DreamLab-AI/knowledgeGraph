---
okf_version: "0.2"
type: Class
title: Mutual TLS
resource: urn:ngm:class:mutual-tls
domain: security
description: Mutual TLS is a configuration of the Transport Layer Security protocol in which both the client and the server present and verify X.509 certificates, establishing bidirectional authentication rather than authenticating only the server. Each party proves possession of the private key corresponding to its certificate, which a trusted certificate authority has signed. It is widely used to secure serv
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:tls
requires:
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:certificate-authority
enables:
  - urn:ngm:class:authentication
  - urn:ngm:class:zero-trust-architecture
dependsOn:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:encryption
implements:
  - urn:ngm:class:mutual-authentication
contrastsWith:
  - urn:ngm:class:server-side-tls
uses:
  - urn:ngm:class:tls-handshake
  - urn:ngm:class:asymmetric-cryptography
supports:
  - urn:ngm:class:service-mesh
  - urn:ngm:class:microservices
relatedTo:
  - urn:ngm:class:identity-management
  - urn:ngm:class:access-control
---

# Mutual TLS

Mutual TLS is a configuration of the Transport Layer Security protocol in which both the client and the server present and verify X.509 certificates, establishing bidirectional authentication rather than authenticating only the server. Each party proves possession of the private key corresponding to its certificate, which a trusted certificate authority has signed. It is widely used to secure service-to-service communication in zero-trust architectures and microservice meshes. By binding identity to the transport channel, it prevents impersonation and unauthorised connections.
