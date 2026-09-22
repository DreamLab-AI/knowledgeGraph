public:: true

# Worldcoin
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:234191a67f1725f08278562ec10d0c0395bf07511899c7dccaf43a8b556d12e2",
  "@type": "Page",
  "vc:slug": "worldcoin",
  "title": "Worldcoin",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:biometric-authentication",
      "vc:label": "Biometric Authentication"
    },
    {
      "@id": "urn:visionflow:linked:facial-recognition",
      "vc:label": "Facial Recognition"
    },
    {
      "@id": "urn:visionflow:linked:sybil-resistance",
      "vc:label": "Sybil Resistance"
    },
    {
      "@id": "urn:visionflow:linked:digital-identity",
      "vc:label": "Digital Identity"
    },
    {
      "@id": "urn:visionflow:linked:identity-verification",
      "vc:label": "Identity Verification"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Worldcoin"
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
  "@id": "urn:ngm:class:worldcoin",
  "@type": "Class",
  "label": "Worldcoin",
  "definition": "A digital identity and cryptocurrency project that uses iris biometrics to produce a cryptographic proof of unique human personhood, enabling sybil-resistant participation in online systems and distributing an associated cryptocurrency token.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-identity",
      "label": "Digital Identity"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      },
      {
        "@id": "urn:ngm:class:facial-recognition",
        "label": "Facial Recognition"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:sybil-resistance",
        "label": "Sybil Resistance"
      },
      {
        "@id": "urn:ngm:class:proof-of-personhood",
        "label": "Proof of Personhood"
      },
      {
        "@id": "urn:ngm:class:universal-basic-income",
        "label": "Universal Basic Income"
      },
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:iris-recognition",
        "label": "Iris Recognition"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:world-id",
        "label": "World ID"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:centralised-identity",
        "label": "Centralised Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:privacy-preserving-computation",
        "label": "Privacy-Preserving Computation"
      },
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      },
      {
        "@id": "urn:ngm:class:consent-management",
        "label": "Consent Management"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:world-network",
      "label": "World Network"
    }
  ],
  "quality": 0.7,
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
  "@id": "urn:visionflow:annotation:link-resolutions:worldcoin:61a0095fc92f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:234191a67f1725f08278562ec10d0c0395bf07511899c7dccaf43a8b556d12e2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Biometric Authentication]]",
      "resolved": "urn:visionflow:linked:biometric-authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Facial Recognition]]",
      "resolved": "urn:visionflow:linked:facial-recognition",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sybil Resistance]]",
      "resolved": "urn:visionflow:linked:sybil-resistance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Identity]]",
      "resolved": "urn:visionflow:linked:digital-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Verification]]",
      "resolved": "urn:visionflow:linked:identity-verification",
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
  - A digital identity and cryptocurrency project that uses iris biometrics to issue a unique identifier intended to distinguish individual humans online.

- ### Semantic Classification
  - owl-class:: general:Worldcoin
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Digital Identity]]
  - bridges-to:: [[Digital Identity]], [[Identity Verification]]
  - requires:: [[Biometric Authentication]], [[Facial Recognition]]
  - enables:: [[Sybil Resistance]]
  - requires:: [[Zero-Knowledge Proof]], [[Identity Verification]]
  - enables:: [[Proof of Personhood]], [[Universal Basic Income]], [[Decentralized Identity]]
  - uses:: [[Iris Recognition]], [[Cryptocurrency]], [[Blockchain]], [[Smart Contract]]
  - hasPart:: [[World ID]], [[Worldcoin Token]]
  - contrastsWith:: [[Know Your Customer]], [[Centralised Identity]]
  - relatedTo:: [[Privacy-Preserving Computation]], [[Data Protection]], [[Consent Management]]
  - bridgesTo:: [[Artificial Intelligence]], [[Governance]], [[Security]]

- ### Content
  - Worldcoin is a project that issues a digital identifier derived from iris biometrics, with the stated aim of establishing proof of unique human identity for use in online systems. Enrolment involves a specialised device that captures an iris image and produces a code.
  - The project pairs the identifier with an associated cryptocurrency and wallet. Its use of biometric data has drawn scrutiny from data protection authorities in several jurisdictions concerning consent, storage and processing of sensitive information.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
