public:: true

# Custody
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e78b6d6989ed232289266673d7c22a9fc7339633c3bb92b8dd764406b1534bff",
  "@type": "Page",
  "vc:slug": "custody",
  "title": "Custody",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:private-key",
      "vc:label": "Private Key"
    },
    {
      "@id": "urn:visionflow:linked:wallet",
      "vc:label": "Wallet"
    },
    {
      "@id": "urn:visionflow:linked:self-custody",
      "vc:label": "Self-Custody"
    },
    {
      "@id": "urn:visionflow:linked:institutional-custody",
      "vc:label": "Institutional Custody"
    },
    {
      "@id": "urn:visionflow:linked:custody-infrastructure",
      "vc:label": "Custody Infrastructure"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Custody"
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
  "@id": "urn:ngm:class:custody",
  "@type": "Class",
  "label": "Custody",
  "definition": "The holding and safekeeping of assets and the keys that control them, defining who has the authority to move funds on behalf of an owner.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-asset-management",
        "label": "Digital Asset Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
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
  "@id": "urn:visionflow:annotation:link-resolutions:custody:21a7f61c15ce",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e78b6d6989ed232289266673d7c22a9fc7339633c3bb92b8dd764406b1534bff"
  },
  "vc:resolutions": [
    {
      "raw": "[[Private Key]]",
      "resolved": "urn:visionflow:linked:private-key",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Wallet]]",
      "resolved": "urn:visionflow:linked:wallet",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Self-Custody]]",
      "resolved": "urn:visionflow:linked:self-custody",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Institutional Custody]]",
      "resolved": "urn:visionflow:linked:institutional-custody",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Custody Infrastructure]]",
      "resolved": "urn:visionflow:linked:custody-infrastructure",
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
  - The holding and safekeeping of assets and the keys that control them, defining who has the authority to move funds on behalf of an owner.

- ### Semantic Classification
  - owl-class:: blockchain:Custody
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Custody Infrastructure]]
  - bridges-to:: [[Self-Custody]], [[Institutional Custody]]
  - requires:: [[Private Key]], [[Wallet]]

- ### Content
  - Custody concerns who controls the private keys that authorise transfers of digital assets. In self-custody the owner holds the keys directly and bears full responsibility for their security, while in third-party custody a service holds the keys and acts on the owner's instructions.
  - Custody arrangements involve trade-offs between control, convenience, and risk. Self-custody removes counterparty exposure but places the burden of key management on the owner, whereas custodial services offer operational support and recovery options at the cost of trusting the provider with access to assets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
