public:: true
alias:: Multi-Party Transactions

# Multi Party Transactions
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f944bef68899f6322c1662457780488a6e9836519425c88e3fd1d0a7d9161dc5",
  "@type": "Page",
  "vc:slug": "multi-party-transactions",
  "title": "Multi Party Transactions",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain-transactions",
      "vc:label": "Blockchain Transactions"
    },
    {
      "@id": "urn:visionflow:linked:cross-chain-trading",
      "vc:label": "Cross Chain Trading"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9976"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Multi Party Transactions"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multi-party-transactions",
  "@type": "Class",
  "label": "Multi Party Transactions",
  "definition": "Blockchain transactions involving more than two participants that use atomic swap protocols, adaptor signatures, and hash timelock contracts (HTLCs) to ensure all parties complete their exchanges simultaneously or the entire transaction is reversed, preventing partial completion losses.",
  "domain": "blockchain",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    },
    {
      "@id": "urn:ngm:class:blockchain-transaction",
      "label": "Blockchain Transaction"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:cross-chain-trading",
        "label": "Cross Chain Trading"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:multi-party-transactions:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f944bef68899f6322c1662457780488a6e9836519425c88e3fd1d0a7d9161dc5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain Transactions]]",
      "resolved": "urn:visionflow:linked:blockchain-transactions",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cross Chain Trading]]",
      "resolved": "urn:visionflow:linked:cross-chain-trading",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Blockchain transactions involving more than two participants that use atomic swap protocols, adaptor signatures, and hash timelock contracts (HTLCs) to ensure all parties complete their exchanges simultaneously or the entire transaction is reversed, preventing partial completion losses.

- ### Semantic Classification
  - owl-class:: blockchain:MultiPartyTransactions
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Transactions]]
  - enables:: [[Cross Chain Trading]]

- ### Content

  ### Technical Details
  - Uses universal adaptor signature secrets to prevent malicious dropouts
  - ParaSwap framework reduces exchange time complexity from O(n) to O(1)
  - Can operate almost entirely off-chain with single on-chain finalization
  - Implemented across Bitcoin, Ethereum, Avalanche, and Binance Smart Chain
  - Reduces gas costs by 26.2x to 46.8x compared to serial swap methods

  ### Security Features
  - Cryptographic hash functions ensure transaction integrity
  - Time-lock constraints return funds if deadlines are missed
  - Atomic execution prevents partial transaction completion
  - No trusted third parties or centralized exchanges required

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
