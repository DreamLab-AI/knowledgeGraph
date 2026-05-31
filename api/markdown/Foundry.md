public:: true

# Foundry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a4e5f01bdc81e5fb3c737c79f714dfcfe7082e9395b74164f60e1956ebf70a37",
  "@type": "Page",
  "vc:slug": "foundry",
  "title": "Foundry",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:solidity",
      "vc:label": "Solidity"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Foundry"
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
  "@id": "urn:ngm:class:foundry",
  "@type": "Class",
  "label": "Foundry",
  "definition": "Foundry is a development toolkit for Ethereum smart contracts, providing tools for compilation, testing, and deployment written in Rust.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:solidity",
      "label": "Solidity"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:solidity",
        "label": "Solidity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
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
  "@id": "urn:visionflow:annotation:link-resolutions:foundry:dfb316701857",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a4e5f01bdc81e5fb3c737c79f714dfcfe7082e9395b74164f60e1956ebf70a37"
  },
  "vc:resolutions": [
    {
      "raw": "[[Solidity]]",
      "resolved": "urn:visionflow:linked:solidity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
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
  - Foundry is a development toolkit for Ethereum smart contracts, providing tools for compilation, testing, and deployment written in Rust.

- ### Semantic Classification
  - owl-class:: blockchain:Foundry
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Solidity]]
  - bridges-to:: [[Ethereum]]
  - requires:: [[Solidity]]
  - enables:: [[Smart Contract]]

- ### Content
  - Foundry is a toolkit for Ethereum application development that includes a build and test framework, a local node, and command-line utilities.
  - It is used to write, compile, test, and deploy smart contracts, with testing written directly in Solidity.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
