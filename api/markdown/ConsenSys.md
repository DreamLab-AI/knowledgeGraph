public:: true

# ConsenSys
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:12ee0b989ece4405a7711d06cdea6d474ac0388c9439e0381c7e2b3aa200a916",
  "@type": "Page",
  "vc:slug": "consen-sys",
  "title": "ConsenSys",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:web-3",
      "vc:label": "Web3"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ConsenSys"
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
  "@id": "urn:ngm:class:consen-sys",
  "@type": "Class",
  "label": "ConsenSys",
  "definition": "ConsenSys is a software company that builds Ethereum infrastructure and developer tools, including wallet and node services.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ethereum",
      "label": "Ethereum"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:web3",
        "label": "Web3"
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
  "@id": "urn:visionflow:annotation:link-resolutions:consen-sys:7196d7446932",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:12ee0b989ece4405a7711d06cdea6d474ac0388c9439e0381c7e2b3aa200a916"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Web3]]",
      "resolved": "urn:visionflow:linked:web-3",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
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
  - ConsenSys is a software company that builds Ethereum infrastructure and developer tools, including wallet and node services.

- ### Semantic Classification
  - owl-class:: blockchain:ConsenSys
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Ethereum]]
  - bridges-to:: [[Smart Contract]]
  - requires:: [[Ethereum]]
  - enables:: [[Web3]]

- ### Content
  - ConsenSys develops products for the Ethereum ecosystem, including a widely used browser-based wallet and infrastructure for accessing the network.
  - Its tools support developers building decentralised applications and interacting with smart contracts.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
