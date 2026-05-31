public:: true

# Hardhat
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b3d0b674b24331bb1d09570c51488a18603a265eb1d32c48c366a7cb84e2fe76",
  "@type": "Page",
  "vc:slug": "hardhat",
  "title": "Hardhat",
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
      "vc:value": "Hardhat"
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
  "@id": "urn:ngm:class:hardhat",
  "@type": "Class",
  "label": "Hardhat",
  "definition": "Hardhat is a development environment for Ethereum software, providing tools for compiling, testing, and debugging smart contracts.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:hardhat:736900ad3b39",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b3d0b674b24331bb1d09570c51488a18603a265eb1d32c48c366a7cb84e2fe76"
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
  - Hardhat is a development environment for Ethereum software, providing tools for compiling, testing, and debugging smart contracts.

- ### Semantic Classification
  - owl-class:: blockchain:Hardhat
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Solidity]]
  - bridges-to:: [[Ethereum]]
  - requires:: [[Solidity]]
  - enables:: [[Smart Contract]]

- ### Content
  - Hardhat is a development environment that helps developers compile, deploy, test, and debug Ethereum smart contracts.
  - It includes a local network for testing and supports plugins that extend its functionality.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
