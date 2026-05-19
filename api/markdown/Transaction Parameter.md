schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#TransactionParameter
legacy_uri:: urn:visionclaw:concept:blockchain:transaction-parameter
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-866aa21dc283"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "blockchain"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/blockchain#TransactionParameter"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10084"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Transaction Parameter"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:blockchain:transaction-parameter"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:blockchain:transaction-parameter"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:baf0faccf6d955c9c996dbd0858dfd6c2a21dc19a922400c4be4f4e6a7441595@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:transaction-parameter",
  "@type": "OntologyClass",
  "label": "Transaction Parameter",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:blockchain-transaction",
      "vc:label": "Blockchain Transaction"
    }
  ],
  "vc:sourceDomain": "blockchain",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:baf0faccf6d955c9c996dbd0858dfd6c2a21dc19a922400c4be4f4e6a7441595"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:baf0faccf6d955c9c996dbd0858dfd6c2a21dc19a922400c4be4f4e6a7441595@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Configuration values that define the execution characteristics of a blockchain transaction, including gas limit, gas price, nonce, and other parameters that determine transaction priority, cost, and computational resources allocated.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:baf0faccf6d955c9c996dbd0858dfd6c2a21dc19a922400c4be4f4e6a7441595@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
