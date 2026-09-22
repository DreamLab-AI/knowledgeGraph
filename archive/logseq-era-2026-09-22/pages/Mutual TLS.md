public:: true

# Mutual TLS
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:mutual-tls", "@type":"Page", "title":"Mutual TLS", "vc:slug":"mutual-tls", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mutual-tls",
  "@type": "Class",
  "label": "Mutual TLS",
  "definition": "Mutual TLS is a configuration of the Transport Layer Security protocol in which both the client and the server present and verify X.509 certificates, establishing bidirectional authentication rather than authenticating only the server. Each party proves possession of the private key corresponding to its certificate, which a trusted certificate authority has signed. It is widely used to secure service-to-service communication in zero-trust architectures and microservice meshes. By binding identity to the transport channel, it prevents impersonation and unauthorised connections.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:transport-layer-security",
      "label": "Transport Layer Security"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:x-509-certificate",
        "label": "X.509 Certificate"
      },
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:tls-handshake",
        "label": "TLS Handshake"
      },
      {
        "@id": "urn:ngm:class:asymmetric-cryptography",
        "label": "Asymmetric Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Architecture"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:service-mesh",
        "label": "Service Mesh"
      },
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:mutual-authentication",
        "label": "Mutual Authentication"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:server-side-tls",
        "label": "Server-Side TLS"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:mtls",
      "label": "mTLS"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

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
