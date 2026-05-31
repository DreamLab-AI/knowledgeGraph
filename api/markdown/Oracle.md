public:: true

# Oracle
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:35dc61fea3cf79782819482db05ba38a7326f7e12a6f6b3b9884ef3a477f9a69",
  "@type": "Page",
  "vc:slug": "oracle",
  "title": "Oracle",
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
      "@id": "urn:visionflow:linked:price-oracle",
      "vc:label": "Price Oracle"
    },
    {
      "@id": "urn:visionflow:linked:chainlink",
      "vc:label": "Chainlink"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
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
      "vc:value": "Oracle"
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
  "@id": "urn:ngm:class:oracle",
  "@type": "Class",
  "label": "Oracle",
  "definition": "In blockchain systems, a mechanism that brings external information onto the chain so that smart contracts can act on data they cannot observe directly. Oracles are the boundary between deterministic on-chain logic and the variable outside world.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-domain",
      "label": "Blockchain Domain"
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
  "@id": "urn:visionflow:annotation:link-resolutions:oracle:9202af6ce925",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:35dc61fea3cf79782819482db05ba38a7326f7e12a6f6b3b9884ef3a477f9a69"
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
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
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
  - In blockchain systems, a mechanism that brings external information onto the chain so that smart contracts can act on data they cannot observe directly. Oracles are the boundary between deterministic on-chain logic and the variable outside world.

- ### Semantic Classification
  - owl-class:: blockchain:Oracle
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Price Oracle]], [[Chainlink]]
  - requires:: [[Smart Contract]]
  - enables:: [[DeFi]]

- ### Content
  - An oracle is the component that feeds off-chain data, such as asset prices, weather or event outcomes, into smart contracts. Since a blockchain is deterministic and isolated, it cannot fetch external data on its own, so the oracle performs that role.
  - Centralised oracles rely on a single trusted reporter, while decentralised oracle networks aggregate many sources and add economic penalties to discourage false reporting. Contract correctness depends heavily on the accuracy and tamper resistance of the oracle.

- ### Provenance
  - sources:: [[https://ethereum.org/en/developers/docs/oracles/]]
  - migration-date:: 2026-05-29T00:00:00Z
