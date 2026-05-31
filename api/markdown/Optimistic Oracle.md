public:: true

# Optimistic Oracle
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2c0015f13375152cab6997b0c79c4beacb7d19d1312176c86f4ded4a0fd354a9",
  "@type": "Page",
  "vc:slug": "optimistic-oracle",
  "title": "Optimistic Oracle",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:dispute-resolution",
      "vc:label": "Dispute Resolution"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:price-oracle",
      "vc:label": "Price Oracle"
    },
    {
      "@id": "urn:visionflow:linked:chainlink",
      "vc:label": "Chainlink"
    },
    {
      "@id": "urn:visionflow:linked:https-docs-uma-xyz",
      "vc:label": "https://docs.uma.xyz/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Optimistic Oracle"
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
  "@id": "urn:ngm:class:optimistic-oracle",
  "@type": "Class",
  "label": "Optimistic Oracle",
  "definition": "An oracle design in which proposed off-chain data is accepted by default and only verified on-chain if a participant disputes it within a challenge window. It reduces routine reporting costs by reserving full verification for contested values.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:price-oracle",
      "label": "Price Oracle"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:dispute-resolution",
        "label": "Dispute Resolution"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
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
  "@id": "urn:visionflow:annotation:link-resolutions:optimistic-oracle:735dbe7e9c88",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2c0015f13375152cab6997b0c79c4beacb7d19d1312176c86f4ded4a0fd354a9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Dispute Resolution]]",
      "resolved": "urn:visionflow:linked:dispute-resolution",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Price Oracle]]",
      "resolved": "urn:visionflow:linked:price-oracle",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Chainlink]]",
      "resolved": "urn:visionflow:linked:chainlink",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://docs.uma.xyz/]]",
      "resolved": "urn:visionflow:linked:https-docs-uma-xyz",
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
  - An oracle design in which proposed off-chain data is accepted by default and only verified on-chain if a participant disputes it within a challenge window. It reduces routine reporting costs by reserving full verification for contested values.

- ### Semantic Classification
  - owl-class:: blockchain:OptimisticOracle
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Price Oracle]]
  - bridges-to:: [[Price Oracle]], [[Chainlink]]
  - requires:: [[Dispute Resolution]], [[Smart Contract]]
  - enables:: [[DeFi]]

- ### Content
  - An optimistic oracle posts a value to a smart contract and treats it as correct unless a counterparty raises a dispute before a deadline. Reporters and disputers post bonds, so an incorrect value can be challenged and the dishonest party loses its bond.
  - Because most reported values are uncontested, the model avoids the cost of continuous consensus on every data point. It is used for inputs that are objective but expensive to verify continuously, such as settlement prices, insurance triggers and cross-chain state assertions.

- ### Provenance
  - sources:: [[https://docs.uma.xyz/]]
  - migration-date:: 2026-05-29T00:00:00Z
