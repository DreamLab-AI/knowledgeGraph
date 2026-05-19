schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#LightClient
legacy_uri:: urn:visionclaw:concept:blockchain:light-client
public:: true

# Light Client
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:aa685ca4d1f6699e6d02731053abd6f3b0a094adf955c0b5be311db8d4cf910e",
  "@type": "Page",
  "vc:slug": "light-client",
  "title": "Light Client",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:interoperability-protocol",
      "vc:label": "Interoperability Protocol"
    },
    {
      "@id": "urn:visionflow:linked:spv-simplified-payment-verification",
      "vc:label": "SPV (Simplified Payment Verification)"
    },
    {
      "@id": "urn:visionflow:linked:state-proof",
      "vc:label": "State Proof"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:cross-chain-bridge",
      "vc:label": "Cross-Chain Bridge"
    },
    {
      "@id": "urn:visionflow:owl:class:full-node",
      "vc:label": "Full Node"
    },
    {
      "@id": "urn:visionflow:owl:class:merkle-tree",
      "vc:label": "Merkle Tree"
    },
    {
      "@id": "urn:visionflow:owl:class:relayer",
      "vc:label": "Relayer"
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
      "vc:value": "sha256-12-28dfb5c104e8"
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
      "vc:value": "http://narrativegoldmine.com/blockchain#LightClient"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-8010"
    },
    {
      "vc:key": "maturity",
      "vc:value": "reviewed"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Light Client"
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
      "vc:value": "urn:visionclaw:concept:blockchain:light-client"
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
      "vc:value": "urn:visionclaw:concept:blockchain:light-client"
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
    "@id": "urn:visionflow:page:aa685ca4d1f6699e6d02731053abd6f3b0a094adf955c0b5be311db8d4cf910e@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:light-client",
  "@type": "Class",
  "label": "Light Client",
  "definition": "Resource-efficient blockchain client that validates block headers and uses cryptographic proofs (Merkle proofs, state proofs) to verify transaction inclusion without downloading full blockchain state.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:node",
      "label": "Node"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:cross-chain-bridge",
        "label": "Cross-Chain Bridge"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:light-client:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:aa685ca4d1f6699e6d02731053abd6f3b0a094adf955c0b5be311db8d4cf910e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Interoperability Protocol]]",
      "resolved": "urn:visionflow:linked:interoperability-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[SPV (Simplified Payment Verification)]]",
      "resolved": "urn:visionflow:linked:spv-simplified-payment-verification",
      "kind": "StubLink"
    },
    {
      "raw": "[[State Proof]]",
      "resolved": "urn:visionflow:linked:state-proof",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Chain Bridge]]",
      "resolved": "urn:visionflow:owl:class:cross-chain-bridge",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Full Node]]",
      "resolved": "urn:visionflow:owl:class:full-node",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Merkle Tree]]",
      "resolved": "urn:visionflow:owl:class:merkle-tree",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Relayer]]",
      "resolved": "urn:visionflow:owl:class:relayer",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:aa685ca4d1f6699e6d02731053abd6f3b0a094adf955c0b5be311db8d4cf910e@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Resource-efficient blockchain client that validates block headers and uses cryptographic proofs (Merkle proofs, state proofs) to verify transaction inclusion without downloading full blockchain state. Light clients enable trustless interaction from mobile devices, browsers, and IoT systems while requiring only megabytes of storage versus gigabytes for full nodes.

- ### Semantic Classification
  - owl-class:: blockchain:LightClient
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - enables:: [[Cross-Chain Bridge]]

- ### Content

  ## Definition
  - Blockchain client that downloads and verifies only block headers rather than full transaction history
  - Uses cryptographic proofs to verify transaction inclusion without storing entire blockchain state
  - Enables resource-constrained devices to interact trustlessly with blockchain networks

  ## Core Components
  - **Header Chain**: Sequential block headers with cryptographic linkage
  - **Merkle Proofs**: Compact proof of transaction inclusion in block
  - **State Proofs**: Verification of account/contract state without full state tree
  - **Consensus Verification**: Validates block finality using header signatures

  ## Technical Characteristics
  - **Storage Efficiency**: Stores megabytes vs gigabytes/terabytes of full nodes
  - **Bandwidth Efficiency**: Minimal data synchronization requirements
  - **Verification Security**: Cryptographically verifies data authenticity
  - **Synchronization Speed**: Fast initial sync (minutes vs days/weeks)

  ## Verification Methods
  ### SPV (Simplified Payment Verification)
  - Bitcoin-style header chain verification
  - Merkle proof for transaction confirmation
  - Assumes majority hash power honesty

  ### State Proofs
  - Merkle Patricia proofs for Ethereum state
  - Verkle tree proofs (upcoming Ethereum upgrade)
  - Zero-knowledge proofs for compact state verification

  ### Consensus Proofs
  - BLS signature aggregation (Ethereum beacon chain)
  - Validator committee signatures (Tendermint)
  - SNARK/STARK proofs of consensus validity

  ## Use Cases
  - Mobile wallet applications
  - Browser extensions (MetaMask)
  - IoT device blockchain interaction
  - Cross-chain bridges (trustless verification)
  - Resource-constrained embedded systems

  ## Blockchain Examples
  - **Bitcoin SPV**: Original light client design (Nakamoto 2008)
  - **Ethereum Light Client**: Header-based with state proofs
  - **Tendermint/Cosmos**: Validator set tracking and signatures
  - **Polkadot Light Client**: GRANDPA finality proofs

  ## Relationships
  - contrasts-with:: [[Full Node]]
  - uses:: [[Merkle Tree]]
  - enables:: [[Cross-Chain Bridge]]
  - component-of:: [[Interoperability Protocol]]
  - used-by:: [[Relayer]]

  ## Security Model
  - **Trust Assumptions**: Honest majority of hash power/validators
  - **Attack Vectors**: Eclipse attacks, long-range attacks
  - **Mitigation**: Multiple peer connections, checkpoints, fraud proofs
  - **Trade-off**: Security vs resource efficiency

  ## Advantages
  - Minimal hardware requirements
  - Fast synchronization
  - Privacy-preserving (selective queries)
  - Suitable for mobile and embedded devices

  ## Limitations
  - Cannot validate transaction validity rules (only inclusion)
  - Vulnerable to withholding attacks (unconfirmed invalid transactions)
  - Relies on network assumptions (connectivity to honest nodes)
  - Limited query capabilities compared to full nodes

  ## Performance Characteristics
  - **Storage**: ~100 MB for header chain (Bitcoin, Ethereum)
  - **Bandwidth**: KB/s for header updates
  - **Sync Time**: Minutes for initial synchronization
  - **Verification Time**: Milliseconds per transaction proof

  ## Advanced Techniques
  ### Zero-Knowledge Light Clients
  - zk-SNARKs proving consensus validity
  - Constant-size proofs regardless of chain length
  - Near-instant synchronization

  ### Verkle Trees
  - Smaller proof sizes than Merkle Patricia trees
  - Enables stateless clients
  - Planned for Ethereum post-Merge upgrades

  ### Committee-Based Light Clients
  - Randomly selected validator committees
  - BLS signature aggregation
  - Used in Ethereum Altair upgrade

  ## Implementation Considerations
  - Checkpoint hardcoding for long-range attack prevention
  - Peer diversity for eclipse attack resistance
  - Proof request strategies (bandwidth vs latency)
  - Caching for frequently accessed data

  #### Related Concepts
  - [[Merkle Tree]]
  - [[SPV (Simplified Payment Verification)]]
  - [[State Proof]]
  - [[Cross-Chain Bridge]]

  #blockchain #light-client #verification #efficiency

  ### Relationships
  - is-subclass-of:: [[Blockchain]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
