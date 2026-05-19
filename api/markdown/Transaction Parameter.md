public:: true

# Transaction Parameter
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:baf0faccf6d955c9c996dbd0858dfd6c2a21dc19a922400c4be4f4e6a7441595",
  "@type": "Page",
  "vc:slug": "transaction-parameter",
  "title": "Transaction Parameter",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain-transaction",
      "vc:label": "Blockchain Transaction"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10084"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Transaction Parameter"
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
  "@id": "urn:ngm:class:transaction-parameter",
  "@type": "Class",
  "label": "Transaction Parameter",
  "definition": "Configuration values that define the execution characteristics of a blockchain transaction, including gas limit, gas price, nonce, and other parameters that determine transaction priority, cost, and computational resources allocated.",
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
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:transaction-parameter:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:baf0faccf6d955c9c996dbd0858dfd6c2a21dc19a922400c4be4f4e6a7441595"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain Transaction]]",
      "resolved": "urn:visionflow:owl:class:blockchain-transaction",
      "kind": "ResolvedLink"
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
  - Configuration values that define the execution characteristics of a blockchain transaction, including gas limit, gas price, nonce, and other parameters that determine transaction priority, cost, and computational resources allocated.

- ### Semantic Classification
  - owl-class:: blockchain:TransactionParameter
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Transaction]]

- ### Content

  - ## Overview
  - Every blockchain transaction must be configured with parameters before execution. The gas limit defines maximum computational resources, while gas price determines the transaction fee. In 2024, the Dencun/Cancun upgrades reduced Layer 2 fees by 90%, with average Ethereum fees dropping to $3.78.
  - ## Technical Details
  - ### Core Parameters
		- **Gas Limit**: Maximum gas units allowed for transaction execution
		- **Gas Price**: Fee per unit of gas (in gwei for Ethereum)
		- **Nonce**: Transaction sequence number for the sender
		- **Value**: Amount of cryptocurrency to transfer
		- **Data**: Smart contract function call data
  - ### Gas Cost Structure
		- **Intrinsic Gas**: Minimum 21,000 gas for all transactions
		- **Storage Costs**: 20,000 gas for zero-to-non-zero storage writes, 5,000 for modifications
		- **Cold vs Warm**: Higher costs for first access to accounts/storage slots
		- **EVM Opcodes**: Variable costs based on computational complexity
  - ### Optimization Strategies
		- Use `calldata` instead of `memory` for function parameters
		- Prefer `view` functions to avoid transaction overhead
		- Batch multiple operations in single transactions
		- Use Layer 2 solutions for lower fees
  - ## Applications
  - DeFi transaction cost optimization
  - Smart contract gas efficiency
  - MEV (Maximal Extractable Value) strategies
  - Layer 2 rollup transaction batching
  - High-frequency trading on blockchain

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
