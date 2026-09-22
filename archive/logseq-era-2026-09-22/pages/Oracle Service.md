public:: true

# Oracle Service
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e8a216b915e4072baf218e121de5832b689f49a2d2b37df99d01a259d1b66c55",
  "@type": "Page",
  "vc:slug": "oracle-service",
  "title": "Oracle Service",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:chainlink",
      "vc:label": "Chainlink"
    },
    {
      "@id": "urn:visionflow:linked:optimistic-oracle",
      "vc:label": "Optimistic Oracle"
    },
    {
      "@id": "urn:visionflow:linked:price-oracle",
      "vc:label": "Price Oracle"
    },
    {
      "@id": "urn:visionflow:linked:https-ethereum-org-en-developers-docs-oracles",
      "vc:label": "https://ethereum.org/en/developers/docs/oracles/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Oracle Service"
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
  "@id": "urn:ngm:class:oracle-service",
  "@type": "Class",
  "label": "Oracle Service",
  "definition": "A service that supplies external data to smart contracts, bridging the gap between on-chain logic and off-chain information such as prices, events or sensor readings. It provides the inputs that contracts cannot read directly from the blockchain.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:oracle-service:fd5112309286",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e8a216b915e4072baf218e121de5832b689f49a2d2b37df99d01a259d1b66c55"
  },
  "vc:resolutions": [
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
      "raw": "[[Chainlink]]",
      "resolved": "urn:visionflow:linked:chainlink",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Optimistic Oracle]]",
      "resolved": "urn:visionflow:linked:optimistic-oracle",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Price Oracle]]",
      "resolved": "urn:visionflow:linked:price-oracle",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://ethereum.org/en/developers/docs/oracles/]]",
      "resolved": "urn:visionflow:linked:https-ethereum-org-en-developers-docs-oracles",
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
  - A service that supplies external data to smart contracts, bridging the gap between on-chain logic and off-chain information such as prices, events or sensor readings. It provides the inputs that contracts cannot read directly from the blockchain.

- ### Semantic Classification
  - owl-class:: blockchain:OracleService
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Price Oracle]]
  - bridges-to:: [[Chainlink]], [[Optimistic Oracle]]
  - requires:: [[Smart Contract]]
  - enables:: [[DeFi]]

- ### Content
  - An oracle service collects information from sources outside the blockchain and delivers it to smart contracts in a form they can act on. Because contracts cannot query the outside world themselves, the oracle is the trusted or decentralised channel for that data.
  - Designs range from single reporters to decentralised oracle networks that aggregate multiple sources and penalise incorrect reports. The reliability of contracts that depend on external data, such as lending and derivatives protocols, rests on the integrity of the oracle service.

- ### Provenance
  - sources:: [[https://ethereum.org/en/developers/docs/oracles/]]
  - migration-date:: 2026-05-29T00:00:00Z
