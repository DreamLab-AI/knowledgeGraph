public:: true

# BNB Chain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b83d4e69531cccf036733ebf92807493a1be17e280a557cf774e50b18cfa5d67",
  "@type": "Page",
  "vc:slug": "bnb-chain",
  "title": "BNB Chain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:evm",
      "vc:label": "EVM"
    },
    {
      "@id": "urn:visionflow:linked:proof-of-stake",
      "vc:label": "Proof of Stake"
    },
    {
      "@id": "urn:visionflow:linked:binance",
      "vc:label": "Binance"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BNB Chain"
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
  "@id": "urn:ngm:class:bnb-chain",
  "@type": "Class",
  "label": "BNB Chain",
  "definition": "A blockchain compatible with the Ethereum Virtual Machine, operated with a delegated validator set and used widely for trading, lending, and other on-chain applications.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:evm",
        "label": "EVM"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bnb-chain:302465946705",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b83d4e69531cccf036733ebf92807493a1be17e280a557cf774e50b18cfa5d67"
  },
  "vc:resolutions": [
    {
      "raw": "[[EVM]]",
      "resolved": "urn:visionflow:linked:evm",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proof of Stake]]",
      "resolved": "urn:visionflow:linked:proof-of-stake",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Binance]]",
      "resolved": "urn:visionflow:linked:binance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:linked:blockchain",
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
  - A blockchain compatible with the Ethereum Virtual Machine, operated with a delegated validator set and used widely for trading, lending, and other on-chain applications.

- ### Semantic Classification
  - owl-class:: blockchain:BNBChain
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - bridges-to:: [[Binance]], [[Smart Contract]]
  - requires:: [[EVM]], [[Proof of Stake]]

- ### Content
  - BNB Chain is an Ethereum-compatible network that executes smart contracts written for the Ethereum Virtual Machine. It uses a consensus model with a limited, staked validator set, which favours throughput and low fees over a large permissionless validator population.
  - The chain hosts a broad range of applications including exchanges, lending markets, and token issuance, and it is closely associated with the Binance exchange ecosystem. Its compatibility with Ethereum tooling allows contracts and developer workflows to be ported with limited modification.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
