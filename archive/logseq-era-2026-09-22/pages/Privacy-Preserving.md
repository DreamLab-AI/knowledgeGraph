public:: true

# Privacy-Preserving
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c120c7252dfd4d3e664a764006c6b2a3710e618a86f7956201fa942d127030fa",
  "@type": "Page",
  "vc:slug": "privacy-preserving",
  "title": "Privacy-Preserving",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:privacy-preserving-ai",
      "vc:label": "Privacy-Preserving AI"
    },
    {
      "@id": "urn:visionflow:linked:federated-learning",
      "vc:label": "Federated Learning"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Privacy-Preserving"
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
  "@id": "urn:ngm:class:privacy-preserving",
  "@type": "Class",
  "label": "Privacy-Preserving",
  "definition": "Privacy-preserving describes methods and systems designed to perform useful computation or data analysis while limiting exposure of the underlying personal or sensitive data.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy-preserving-ai",
        "label": "Privacy-Preserving AI"
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
  "@id": "urn:visionflow:annotation:link-resolutions:privacy-preserving:1d88511cda6f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c120c7252dfd4d3e664a764006c6b2a3710e618a86f7956201fa942d127030fa"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy-Preserving AI]]",
      "resolved": "urn:visionflow:linked:privacy-preserving-ai",
      "kind": "StubLink"
    },
    {
      "raw": "[[Federated Learning]]",
      "resolved": "urn:visionflow:linked:federated-learning",
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
  - Privacy-preserving describes methods and systems designed to perform useful computation or data analysis while limiting exposure of the underlying personal or sensitive data.

- ### Semantic Classification
  - owl-class:: cryptography:PrivacyPreserving
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - bridges-to:: [[Federated Learning]]
  - requires:: [[Cryptography]]
  - enables:: [[Privacy-Preserving AI]]

- ### Content
  - Privacy-preserving techniques include differential privacy, which bounds how much a single record can affect an output, homomorphic encryption, which computes on encrypted data, and secure multi-party computation, which lets parties jointly compute a function without revealing their inputs.
  - These methods are applied in machine learning, analytics, and data sharing to meet confidentiality requirements and regulatory constraints while still extracting value from data.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
