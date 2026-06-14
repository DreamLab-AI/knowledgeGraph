public:: true

# Identity Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:098ce6378fa66c6c47b852dead6c27dd73229aac7cbfc6ba9f963ec55e07378e",
  "@type": "Page",
  "vc:slug": "identity-layer",
  "title": "Identity Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptographic-layer",
      "vc:label": "Cryptographic Layer"
    },
    {
      "@id": "urn:visionflow:linked:identifier-layer",
      "vc:label": "Identifier Layer"
    },
    {
      "@id": "urn:visionflow:linked:policy-layer",
      "vc:label": "Policy Layer"
    },
    {
      "@id": "urn:visionflow:linked:custody-layer",
      "vc:label": "Custody Layer"
    },
    {
      "@id": "urn:visionflow:linked:public-key-infrastructure",
      "vc:label": "Public Key Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-identifiers",
      "vc:label": "Decentralised Identifiers"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:w-3-c-world-wide-web-consortium",
      "vc:label": "W3C (World Wide Web Consortium)"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Identity Layer"
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
  "@id": "urn:ngm:class:identity-layer",
  "@type": "Class",
  "label": "Identity Layer",
  "definition": "The Identity Layer is the cross-cutting stratum that establishes, represents, and verifies the identities of participants and resources. It sits above the Cryptographic Layer, on which its proofs rest, and below access, policy, and governance strata that reason about who is acting. It contains identifiers, credentials, authentication mechanisms, and the bindings between them.",
  "domain": "security",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-layer",
        "label": "Cryptographic Layer"
      },
      {
        "@id": "urn:ngm:class:identifier-layer",
        "label": "Identifier Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:policy-layer",
        "label": "Policy Layer"
      },
      {
        "@id": "urn:ngm:class:custody-layer",
        "label": "Custody Layer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:identity-layer:8f66320afd3f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:098ce6378fa66c6c47b852dead6c27dd73229aac7cbfc6ba9f963ec55e07378e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptographic Layer]]",
      "resolved": "urn:visionflow:linked:cryptographic-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Identifier Layer]]",
      "resolved": "urn:visionflow:linked:identifier-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Policy Layer]]",
      "resolved": "urn:visionflow:linked:policy-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Custody Layer]]",
      "resolved": "urn:visionflow:linked:custody-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Public Key Infrastructure]]",
      "resolved": "urn:visionflow:linked:public-key-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Identifiers]]",
      "resolved": "urn:visionflow:linked:decentralised-identifiers",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[W3C (World Wide Web Consortium)]]",
      "resolved": "urn:visionflow:linked:w-3-c-world-wide-web-consortium",
      "kind": "StubLink"
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
  - The Identity Layer is the cross-cutting stratum that establishes, represents, and verifies the identities of participants and resources. It sits above the Cryptographic Layer, on which its proofs rest, and below access, policy, and governance strata that reason about who is acting. It contains identifiers, credentials, authentication mechanisms, and the bindings between them.

- ### Semantic Classification
  - owl-class:: id:IdentityLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Public Key Infrastructure]], [[Decentralised Identifiers]]
  - requires:: [[Cryptographic Layer]], [[Identifier Layer]]
  - enables:: [[Policy Layer]], [[Custody Layer]]

- ### Content
  - The Identity Layer answers who or what is making a request and how confident the system can be in that claim. Typical members include credential issuance, authentication protocols, key-to-subject bindings, and revocation mechanisms. It produces verified subjects that other layers can reference in their rules.
  - It requires the Cryptographic Layer for the signatures and proofs that make claims verifiable and the Identifier Layer for the names those claims attach to. It enables the Policy Layer, which scopes permissions to identities, and the Custody Layer, which binds control of assets to verified principals.
  - The layer bridges to public key infrastructure and decentralised identifiers, models that govern how trust in an identity is rooted and propagated. Authentication strength set here bounds the assurance of every authorisation decision above.

- ### Provenance
  - sources:: [[W3C (World Wide Web Consortium)]]
  - migration-date:: 2026-05-29T00:00:00Z
