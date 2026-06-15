- ### Definition
  - Mutual TLS extends [[Transport Layer Security]] so that both parties present and verify [[X.509 Certificate]]s issued by a [[Certificate Authority]], giving bidirectional [[Authentication]] underpinned by [[Public Key Infrastructure]].

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

- ### Relationships
  - subClassOf:: [[Transport Layer Security]]
  - requires:: [[X.509 Certificate]]
  - requires:: [[Certificate Authority]]
  - uses:: [[TLS Handshake]]
  - uses:: [[Asymmetric Cryptography]]
  - enables:: [[Authentication]]
  - enables:: [[Zero Trust Architecture]]
  - supports:: [[Service Mesh]]
  - supports:: [[Microservices]]
  - dependsOn:: [[Public Key Infrastructure]]
  - dependsOn:: [[Encryption]]
  - implements:: [[Mutual Authentication]]
  - contrastsWith:: [[Server-Side TLS]]
  - relatedTo:: [[Identity Management]]
  - relatedTo:: [[Access Control]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation