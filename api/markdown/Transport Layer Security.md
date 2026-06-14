public:: true

# Transport Layer Security
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4728ce7f4fb39662415dc1554e167f9e0e71f2d111bef79e793a7faea17bde25",
  "@type": "Page",
  "vc:slug": "transport-layer-security",
  "title": "Transport Layer Security",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:public-key-infrastructure",
      "vc:label": "Public Key Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:certificate-authority",
      "vc:label": "Certificate Authority"
    },
    {
      "@id": "urn:visionflow:linked:encryption",
      "vc:label": "Encryption"
    },
    {
      "@id": "urn:visionflow:linked:authentication",
      "vc:label": "Authentication"
    },
    {
      "@id": "urn:visionflow:linked:tls",
      "vc:label": "TLS"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-protocol",
      "vc:label": "Cryptographic Protocol"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Transport Layer Security"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:transport-layer-security",
  "@type": "Class",
  "label": "Transport Layer Security",
  "definition": "A cryptographic protocol standardised by the IETF that provides mutual authentication, confidentiality and data integrity for communications over a computer network, succeeding the deprecated Secure Sockets Layer and currently at version 1.3 (RFC 8446).",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:cryptographic-protocol",
    "label": "Cryptographic Protocol"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      },
      {
        "@id": "urn:ngm:class:x509-certificate",
        "label": "X.509 Certificate"
      },
      {
        "@id": "urn:ngm:class:asymmetric-cryptography",
        "label": "Asymmetric Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:secure-communication",
        "label": "Secure Communication"
      },
      {
        "@id": "urn:ngm:class:data-integrity",
        "label": "Data Integrity"
      },
      {
        "@id": "urn:ngm:class:mutual-authentication",
        "label": "Mutual Authentication"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:tls-handshake",
        "label": "TLS Handshake"
      },
      {
        "@id": "urn:ngm:class:cipher-suite",
        "label": "Cipher Suite"
      },
      {
        "@id": "urn:ngm:class:session-key",
        "label": "Session Key"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:diffie-hellman-key-exchange",
        "label": "Diffie-Hellman Key Exchange"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:symmetric-encryption",
        "label": "Symmetric Encryption"
      },
      {
        "@id": "urn:ngm:class:message-authentication-code",
        "label": "Message Authentication Code"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:internet-engineering-task-force",
        "label": "Internet Engineering Task Force"
      },
      {
        "@id": "urn:ngm:class:rfc-8446",
        "label": "RFC 8446"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:secure-sockets-layer",
        "label": "Secure Sockets Layer"
      },
      {
        "@id": "urn:ngm:class:datagram-transport-layer-security",
        "label": "Datagram Transport Layer Security"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:https",
        "label": "HTTPS"
      },
      {
        "@id": "urn:ngm:class:secure-email",
        "label": "Secure Email"
      },
      {
        "@id": "urn:ngm:class:api-security",
        "label": "API Security"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Architecture"
      },
      {
        "@id": "urn:ngm:class:web3-security",
        "label": "Web3 Security"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:certificate-revocation",
        "label": "Certificate Revocation"
      },
      {
        "@id": "urn:ngm:class:forward-secrecy",
        "label": "Forward Secrecy"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:tls",
      "label": "TLS"
    },
    {
      "@id": "urn:ngm:class:ssl-tls",
      "label": "SSL/TLS"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:transport-layer-security:66474ed33c57",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4728ce7f4fb39662415dc1554e167f9e0e71f2d111bef79e793a7faea17bde25"
  },
  "vc:resolutions": [
    {
      "raw": "[[Public Key Infrastructure]]",
      "resolved": "urn:visionflow:linked:public-key-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Certificate Authority]]",
      "resolved": "urn:visionflow:linked:certificate-authority",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Encryption]]",
      "resolved": "urn:visionflow:linked:encryption",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Authentication]]",
      "resolved": "urn:visionflow:linked:authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TLS]]",
      "resolved": "urn:visionflow:linked:tls",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Protocol]]",
      "resolved": "urn:visionflow:linked:cryptographic-protocol",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A cryptographic protocol that provides authentication, confidentiality and integrity for communications over a computer network, succeeding the earlier Secure Sockets Layer.

- ### Semantic Classification
  - owl-class:: cryptographic:TransportLayerSecurity
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptographic Protocol]]
  - bridges-to:: [[TLS]]
  - requires:: [[Public Key Infrastructure]], [[Certificate Authority]]
  - enables:: [[Encryption]], [[Authentication]]

- ### Content
  - Transport Layer Security secures data in transit by establishing an encrypted channel between communicating parties. It uses a handshake to authenticate at least one party, negotiate cryptographic parameters and derive session keys.
  - The protocol relies on public key infrastructure and X.509 certificates to bind identities to keys. It is widely used to protect web traffic, email and other application protocols, and has evolved through successive versions to remove weak algorithms.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
