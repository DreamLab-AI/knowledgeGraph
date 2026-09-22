public:: true

# Tls Handshake

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:tls-handshake",
  "@type": "Page",
  "title": "Tls Handshake",
  "vc:slug": "tls-handshake",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tls-handshake",
  "@type": "Class",
  "label": "Tls Handshake",
  "definition": "The TLS handshake is the negotiation phase of the Transport Layer Security protocol in which a client and server agree on protocol version and cipher suite, authenticate via certificates, and establish shared session keys. It combines public-key cryptography for authentication and key agreement with symmetric cryptography for the subsequent record protocol. Modern versions complete in fewer round trips and provide forward secrecy through ephemeral key exchange.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:transport-layer-security",
      "label": "Transport Layer Security"
    }
  ],
  "relations": {
    "partOf": {
      "@id": "urn:ngm:class:transport-layer-security",
      "label": "Transport Layer Security"
    },
    "hasPart": [
      {
        "@id": "urn:ngm:class:nonce",
        "label": "Nonce"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:diffie-hellman-key-exchange",
        "label": "Diffie-Hellman Key Exchange"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:mutual-tls",
        "label": "Mutual TLS"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:forward-secrecy",
        "label": "Forward Secrecy"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - The TLS handshake is the negotiation phase of [[Transport Layer Security]].
  - It uses [[Public-Key Cryptography]] and [[Diffie-Hellman Key Exchange]] to agree session keys.
  - It authenticates parties and can be extended to [[Mutual TLS]], achieving [[Forward Secrecy]].
- ### Overview
  - During the handshake the peers exchange supported versions and cipher suites, present certificates and run an authenticated key exchange.
  - The result is a shared symmetric key that protects all subsequent application data via the record protocol.
  - TLS 1.3 streamlines the handshake to one round trip and removes legacy, non-forward-secret key exchanges.
- ### Mechanisms
  - Version and cipher-suite negotiation between client and server.
  - Certificate-based authentication using public-key cryptography.
  - Ephemeral Diffie-Hellman key agreement for forward secrecy.
  - Nonce and transcript hashing to bind the session and prevent replay.
- ### Applications
  - Securing HTTPS web traffic and APIs.
  - Mutual-TLS authentication between microservices.
  - Protecting messaging, email transport and VPN channels.
- ### Security notes
  - Ephemeral key exchange provides forward secrecy.
  - Downgrade protection prevents version rollback attacks.
  - Certificate validation is critical to thwart impersonation.
- ### Relationships
  - partOf:: [[Transport Layer Security]]
  - hasPart:: [[Nonce]]
  - uses:: [[Public-Key Cryptography]]
  - uses:: [[Diffie-Hellman Key Exchange]]
  - uses:: [[Elliptic Curve Cryptography]]
  - supports:: [[Encryption]]
  - supports:: [[Authentication]]
  - bridgesTo:: [[Mutual TLS]]
  - bridgesTo:: [[Network Protocol]]
  - requires:: [[Hash Function]]
  - enables:: [[Forward Secrecy]]
  - dependsOn:: [[Cryptography]]
  - relatedTo:: [[Security]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
