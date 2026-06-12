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
  "definition": "A cryptographic protocol that provides authentication, confidentiality and integrity for communications over a computer network, succeeding the earlier Secure Sockets Layer.",
  "domain": "cryptographic",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-protocol",
      "label": "Cryptographic Protocol"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
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
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
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
