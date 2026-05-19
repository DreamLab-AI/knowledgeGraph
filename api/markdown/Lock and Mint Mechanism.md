schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#LockAndMintMechanism
legacy_uri:: urn:visionclaw:concept:blockchain:lock-and-mint-mechanism
public:: true

# Lock and Mint Mechanism
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8874ed8c29f56a23a98c0aac9bb30ba2a0339e0b49a2581bbc1c1d9856bd1601",
  "@type": "Page",
  "vc:slug": "lock-and-mint-mechanism",
  "title": "Lock and Mint Mechanism",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:wrapped-token",
      "vc:label": "Wrapped Token"
    },
    {
      "@id": "urn:visionflow:owl:class:atomic-swap",
      "vc:label": "Atomic Swap"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-oracle",
      "vc:label": "Blockchain Oracle"
    },
    {
      "@id": "urn:visionflow:owl:class:cross-chain-bridge",
      "vc:label": "Cross-Chain Bridge"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
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
      "vc:value": "sha256-12-ed47af57230c"
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
      "vc:value": "http://narrativegoldmine.com/blockchain#LockAndMintMechanism"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-8011"
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
      "vc:value": "Lock and Mint Mechanism"
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
      "vc:value": "urn:visionclaw:concept:blockchain:lock-and-mint-mechanism"
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
      "vc:value": "urn:visionclaw:concept:blockchain:lock-and-mint-mechanism"
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
    "@id": "urn:visionflow:page:8874ed8c29f56a23a98c0aac9bb30ba2a0339e0b49a2581bbc1c1d9856bd1601@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:lock-and-mint-mechanism",
  "@type": "OntologyClass",
  "label": "Lock and Mint Mechanism",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:de-fi-protocol",
      "vc:label": "De Fi Protocol"
    }
  ],
  "vc:sourceDomain": "blockchain",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:8874ed8c29f56a23a98c0aac9bb30ba2a0339e0b49a2581bbc1c1d9856bd1601"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:8874ed8c29f56a23a98c0aac9bb30ba2a0339e0b49a2581bbc1c1d9856bd1601@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Cross-chain asset transfer protocol where tokens are locked in a smart contract on the source chain and equivalent wrapped tokens are minted on the destination chain, maintaining a 1:1 backing ratio. Enables asset portability across heterogeneous blockchain ecosystems while preserving value equivalence.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:requires": [
    {
      "@id": "urn:visionflow:owl:class:blockchain-oracle",
      "vc:label": "Blockchain Oracle"
    }
  ],
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:wrapped-token",
      "vc:label": "Wrapped Token"
    }
  ],
  "vc:implements": [
    {
      "@id": "urn:visionflow:owl:class:cross-chain-bridge",
      "vc:label": "Cross-Chain Bridge"
    }
  ],
  "vc:uses": [
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:lock-and-mint-mechanism:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8874ed8c29f56a23a98c0aac9bb30ba2a0339e0b49a2581bbc1c1d9856bd1601"
  },
  "vc:resolutions": [
    {
      "raw": "[[Wrapped Token]]",
      "resolved": "urn:visionflow:linked:wrapped-token",
      "kind": "StubLink"
    },
    {
      "raw": "[[Atomic Swap]]",
      "resolved": "urn:visionflow:owl:class:atomic-swap",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Oracle]]",
      "resolved": "urn:visionflow:owl:class:blockchain-oracle",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Chain Bridge]]",
      "resolved": "urn:visionflow:owl:class:cross-chain-bridge",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:8874ed8c29f56a23a98c0aac9bb30ba2a0339e0b49a2581bbc1c1d9856bd1601@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Cross-chain asset transfer protocol where tokens are locked in a smart contract on the source chain and equivalent wrapped tokens are minted on the destination chain, maintaining a 1:1 backing ratio. Enables asset portability across heterogeneous blockchain ecosystems while preserving value equivalence.

- ### Semantic Classification
  - owl-class:: blockchain:LockAndMintMechanism
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - requires:: [[Blockchain Oracle]] (in most designs)
  - enables:: [[Wrapped Token]]
  - implements:: [[Cross-Chain Bridge]]

- ### Content

  ## Definition
  - Cross-chain asset transfer method where tokens are locked on source chain and equivalent wrapped tokens minted on destination chain
  - Maintains 1:1 backing ratio between locked assets and minted representations
  - Enables asset portability across blockchains with different execution environments

  ## Core Components
  - **Lock Contract**: Smart contract holding locked assets on source chain
  - **Mint Authority**: Entity authorized to mint wrapped tokens on destination chain
  - **Burn Function**: Destroys wrapped tokens to initiate reverse transfer
  - **Unlock Logic**: Releases locked assets when wrapped tokens burned

  ## Technical Characteristics
  - **Peg Mechanism**: Maintains value equivalence between chains
  - **Custodial Model**: Locked assets held by smart contract or multisig
  - **Synthetic Assets**: Minted tokens represent claim on locked originals
  - **Bidirectional**: Supports transfer in both directions

  ## Protocol Flow
  ### Locking (Source → Destination)
  1. User sends asset to lock contract on source chain
  2. Event emitted proving lock transaction
  3. Relayer/Oracle observes lock event
  4. Mint contract creates equivalent wrapped tokens on destination chain
  5. Wrapped tokens sent to user's address

  ### Unlocking (Destination → Source)
  1. User burns wrapped tokens on destination chain
  2. Burn event emitted with unlock destination
  3. Relayer/Oracle observes burn event
  4. Unlock contract releases original assets on source chain

  ## Implementation Variants
  ### Trusted Custodian
  - Centralized entity controls mint/burn authority
  - Examples: Wrapped Bitcoin (WBTC), centralized bridge tokens
  - Trust assumptions: custodian solvency and honesty

  ### Smart Contract Custody
  - Decentralized smart contract holds locked assets
  - Multi-signature or threshold signature control
  - Examples: Polygon PoS Bridge, Avalanche Bridge

  ### Threshold Signatures
  - Distributed key generation among validator set
  - M-of-N threshold required for mint/unlock operations
  - Examples: tBTC, RenBTC (now deprecated)

  ### Light Client Verification
  - Cryptographic proofs verify lock/burn events
  - Trustless verification without relying on validators
  - Examples: Rainbow Bridge (NEAR-Ethereum)

  ## Relationships
  - implements:: [[Cross-Chain Bridge]]
  - uses:: [[Smart Contract]]
  - enables:: [[Wrapped Token]]
  - alternative-to:: [[Atomic Swap]]
  - requires:: [[Blockchain Oracle]] (in most designs)

  ## Security Considerations
  - Custodian key management and access control
  - Smart contract vulnerabilities (reentrancy, overflow)
  - Oracle manipulation or failure
  - Proof verification correctness
  - Reserve asset solvency verification

  ## Trust Assumptions
  - Custodian will not abscond with locked funds
  - Bridge operators will relay events accurately
  - Smart contract logic is bug-free
  - Oracle data is accurate and timely

  ## Advantages
  - Enables cross-chain composability
  - Maintains asset value peg
  - Supports complex DeFi interactions on destination chain
  - Scalable to many destination chains

  ## Limitations
  - Introduces custodial risk
  - Liquidity fragmentation across chains
  - Dependency on bridge infrastructure
  - Potential for depeg events

  ## Economic Risks
  - **Bank Run**: Insufficient reserves if bridge exploited
  - **Depeg**: Wrapped token price deviates from underlying
  - **Insolvency**: Custodian loses access to locked funds
  - **MEV**: Front-running of large bridge transactions

  ## Wrapped Token Examples
  - **WBTC**: Bitcoin on Ethereum (custodial)
  - **renBTC**: Bitcoin on Ethereum (threshold signatures, discontinued)
  - **WETH**: ETH wrapped for ERC-20 compatibility
  - **Multichain Tokens**: Various assets on multiple chains

  ## Verification Mechanisms
  - Reserve attestation (proof of reserves)
  - Merkle proof of lock events
  - Light client consensus verification
  - Threshold signature validation

  ## Performance Metrics
  - Lock-to-mint latency
  - Transaction finality on both chains
  - Bridge capacity (max throughput)
  - Collateralization ratio

  #### Related Concepts
  - [[Cross-Chain Bridge]]
  - [[Wrapped Token]]
  - [[Blockchain Oracle]]
  - [[Smart Contract]]

  #blockchain #interoperability #lock-and-mint #cross-chain

  ### Relationships
  - is-subclass-of:: [[Blockchain]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
