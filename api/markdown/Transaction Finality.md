public:: true

# Transaction Finality
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:57741e66a6801c61652d68fcc0d990c4dfa0eb4fe46c1b298ad3d0c00633baf5",
  "@type": "Page",
  "vc:slug": "transaction-finality",
  "title": "Transaction Finality",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:settlement",
      "vc:label": "Settlement"
    },
    {
      "@id": "urn:visionflow:linked:transaction-confirmation-time",
      "vc:label": "Transaction Confirmation Time"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:consensus-mechanism",
      "vc:label": "Consensus Mechanism"
    },
    {
      "@id": "urn:visionflow:owl:class:deterministic-finality",
      "vc:label": "Deterministic Finality"
    },
    {
      "@id": "urn:visionflow:owl:class:probabilistic-finality",
      "vc:label": "Probabilistic Finality"
    },
    {
      "@id": "urn:visionflow:owl:class:transaction",
      "vc:label": "Transaction"
    },
    {
      "@id": "urn:visionflow:owl:class:transaction-confirmation",
      "vc:label": "Transaction Confirmation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-8021"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Transaction Finality"
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
  "@id": "urn:ngm:class:transaction-finality",
  "@type": "Class",
  "label": "Transaction Finality",
  "definition": "The point at which a blockchain transaction becomes irreversible and cannot be altered or removed, providing settlement certainty for participants.",
  "domain": "blockchain",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
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
  "@id": "urn:visionflow:annotation:link-resolutions:transaction-finality:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:57741e66a6801c61652d68fcc0d990c4dfa0eb4fe46c1b298ad3d0c00633baf5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Settlement]]",
      "resolved": "urn:visionflow:linked:settlement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Transaction Confirmation Time]]",
      "resolved": "urn:visionflow:linked:transaction-confirmation-time",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Mechanism]]",
      "resolved": "urn:visionflow:owl:class:consensus-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deterministic Finality]]",
      "resolved": "urn:visionflow:owl:class:deterministic-finality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Probabilistic Finality]]",
      "resolved": "urn:visionflow:owl:class:probabilistic-finality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transaction]]",
      "resolved": "urn:visionflow:owl:class:transaction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transaction Confirmation]]",
      "resolved": "urn:visionflow:owl:class:transaction-confirmation",
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
  - The point at which a blockchain transaction becomes irreversible and cannot be altered or removed, providing settlement certainty for participants. Finality types include probabilistic (increasing confidence with confirmations), deterministic (explicit protocol guarantee), and economic (cost to revert exceeds benefit).

- ### Semantic Classification
  - owl-class:: blockchain:TransactionFinality
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - depends-on:: [[Consensus Mechanism]]

- ### Content

  ## Definition
  - Point at which transaction becomes irreversible and cannot be altered or removed from blockchain
  - Guarantees transaction permanence and settlement certainty for participants
  - Fundamental property determining blockchain suitability for different applications

  ## Core Concepts
  - **Irreversibility**: Transaction cannot be rolled back or modified
  - **Settlement Guarantee**: Assets definitively transferred
  - **Confidence Level**: Degree of certainty transaction will remain in chain
  - **Time to Finality**: Duration from inclusion to finalization

  ## Finality Types
  ### [[Probabilistic Finality]]
  - Confidence increases with subsequent block confirmations
  - Never reaches 100% certainty (theoretically)
  - Used in Proof-of-Work systems (Bitcoin, Ethereum PoW)

  ### [[Deterministic Finality]]
  - Transactions finalized through explicit protocol mechanism
  - Absolute guarantee after finalization checkpoint
  - Used in BFT-based consensus (Tendermint, Algorand)

  ### Economic Finality
  - Cost to revert exceeds potential gain
  - Probabilistic but economically secured
  - Ethereum Proof-of-Stake uses slashing for economic finality

  ## Relationships
  - property-of:: [[Transaction]]
  - depends-on:: [[Consensus Mechanism]]
  - has-types:: [[Probabilistic Finality]], [[Deterministic Finality]]
  - affects:: [[Transaction Confirmation Time]]
  - critical-for:: [[Settlement]]

  ## Finality by Consensus Type
  | Consensus | Finality Type | Time to Finality |
  |-----------|---------------|------------------|
  | Bitcoin PoW | Probabilistic | ~60 min (6 blocks) |
  | Ethereum PoW | Probabilistic | ~15 min (20-30 blocks) |
  | Ethereum PoS | Economic | ~13 min (2 epochs) |
  | Tendermint | Deterministic | ~6 seconds (1 block) |
  | Algorand | Deterministic | ~4 seconds (1 block) |
  | Solana | Economic | ~13 seconds (32 blocks) |

  ## Implications
  ### For Applications
  - **Payments**: Fast finality enables real-time transactions
  - **DeFi**: Deterministic finality reduces liquidation risks
  - **Cross-Chain**: Finality time affects bridge security/speed
  - **Enterprise**: Regulated industries require strong finality guarantees

  ### For Users
  - Confidence in transaction settlement
  - Time to consider transaction "complete"
  - Risk of double-spend or reorganization

  ### For Developers
  - Smart contract interaction patterns
  - Error handling and rollback scenarios
  - Integration with external systems

  ## Measurement Metrics
  - **Mean Time to Finality (MTTF)**: Average finalization duration
  - **Confidence Threshold**: Block confirmations for desired certainty
  - **Finality Rate**: Percentage of blocks achieving finality
  - **Reorg Depth**: Historical chain reorganization statistics

  ## Security Considerations
  - Long-range attacks on probabilistic finality
  - Network partition finality implications
  - Checkpoint mechanisms for faster weak subjectivity
  - Slashing penalties for violating finality

  ## Trade-offs
  ### Fast Finality
  - **Pros**: Better UX, real-time applications, cross-chain efficiency
  - **Cons**: May sacrifice decentralization or liveness guarantees

  ### Slow Finality
  - **Pros**: Stronger security guarantees, simpler consensus
  - **Cons**: Poor UX, limits application design space

  ## Checkpoint Finality
  - Periodic finalization of earlier blocks
  - Hybrid approach (fast blocks, slow finality)
  - Ethereum Casper FFG: block production + periodic finalization

  ## Attack Vectors
  - **Nothing-at-Stake**: PoS validators signing conflicting chains
  - **Long-Range Attacks**: Rewriting history from genesis
  - **Short-Range Reorgs**: Recent block reorganization
  - **51% Attacks**: Majority control enabling finality violation

  #### Related Concepts
  - [[Probabilistic Finality]]
  - [[Deterministic Finality]]
  - [[Consensus Mechanism]]
  - [[Transaction Confirmation]]

  #blockchain #finality #consensus #security

  ### Relationships
  - is-subclass-of:: [[Blockchain]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
