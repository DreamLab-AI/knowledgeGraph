public:: true

# ERC-20 Tokens
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:13892d1cbeaf5ed37466fe7323141fc1ba9c4cb68e1505dea09cad70c564931f",
  "@type": "Page",
  "vc:slug": "erc-20-tokens",
  "title": "ERC-20 Tokens",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ERC-20 Tokens"
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
  "@id": "urn:ngm:class:erc-20-tokens",
  "@type": "Class",
  "label": "ERC-20 Tokens",
  "definition": "An Ethereum standard defining a common interface for fungible tokens, including functions for transfers, balances and allowances. It is the widely adopted standard for interchangeable tokens on Ethereum.",
  "domain": "standards",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
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
  "@id": "urn:visionflow:annotation:link-resolutions:erc-20-tokens:e3b625b8c451",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:13892d1cbeaf5ed37466fe7323141fc1ba9c4cb68e1505dea09cad70c564931f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technical Standard]]",
      "resolved": "urn:visionflow:linked:technical-standard",
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
  - An Ethereum standard defining a common interface for fungible tokens, including functions for transfers, balances and allowances. It is the widely adopted standard for interchangeable tokens on Ethereum.

- ### Semantic Classification
  - owl-class:: standards:ERC20Tokens
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[Ethereum Smart Contract Platform]]

- ### Content
  - An Ethereum standard defining a common interface for fungible tokens, including functions for transfers, balances and allowances. It is the widely adopted standard for interchangeable tokens on Ethereum.
  - Topic area: fungible tokens.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
