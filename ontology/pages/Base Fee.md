public:: true

# Base Fee
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2964c56d21c498a903a8c79e5fa06ce41c7ff66f96e47b8e73c6313c9b089ec3",
  "@type": "Page",
  "vc:slug": "base-fee",
  "title": "Base Fee",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ieee-2418-1",
      "vc:label": "IEEE 2418.1"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23257-2021",
      "vc:label": "ISO/IEC 23257:2021"
    },
    {
      "@id": "urn:visionflow:linked:nist-nistir",
      "vc:label": "NIST NISTIR"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    },
    {
      "@id": "urn:visionflow:owl:class:economic-layer",
      "vc:label": "EconomicLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:economic-mechanism",
      "vc:label": "EconomicMechanism"
    },
    {
      "@id": "urn:visionflow:owl:class:token-economics",
      "vc:label": "TokenEconomicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "Virtual Economy"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0108"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Base Fee"
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
  "@id": "urn:ngm:class:base-fee",
  "@type": "Class",
  "label": "Base Fee",
  "definition": "The Base Fee is the algorithmically determined minimum fee per unit of gas that every transaction must pay to be included in an Ethereum block, introduced by EIP-1559. It adjusts automatically each block based on whether the previous block was above or below its gas target, increasing when demand is high and decreasing when low. Unlike miner tips, the base fee is burned rather than paid to validators, creating a deflationary pressure on ETH supply and making gas price prediction more reliable for users.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    },
    {
      "@id": "urn:ngm:class:blockchain-entity",
      "label": "Blockchain Entity"
    },
    {
      "@id": "urn:ngm:class:economic-mechanism",
      "label": "Economic Mechanism"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:gas", "label": "Gas"},
      {"@id": "urn:ngm:class:blockchain-transaction", "label": "Blockchain Transaction"},
      {"@id": "urn:ngm:class:mempool", "label": "Mempool"},
      {"@id": "urn:ngm:class:eip-1559", "label": "EIP-1559"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:gas-fee-market", "label": "Gas Fee Market"},
      {"@id": "urn:ngm:class:burning-mechanism", "label": "Burning Mechanism"},
      {"@id": "urn:ngm:class:mev", "label": "MEV"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:gas-price", "label": "Gas Price"},
      {"@id": "urn:ngm:class:gas-limit", "label": "Gas Limit"},
      {"@id": "urn:ngm:class:priority-fee", "label": "Priority Fee"},
      {"@id": "urn:ngm:class:block-reward", "label": "Block Reward"},
      {"@id": "urn:ngm:class:blockchain-economics", "label": "Blockchain Economics"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:priority-fee", "label": "Priority Fee"},
      {"@id": "urn:ngm:class:miner", "label": "Miner"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:gas-fee-market", "label": "Gas Fee Market"},
      {"@id": "urn:ngm:class:blockchain-economics", "label": "Blockchain Economics"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:base-fee:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2964c56d21c498a903a8c79e5fa06ce41c7ff66f96e47b8e73c6313c9b089ec3"
  },
  "vc:resolutions": [
    {
      "raw": "[[IEEE 2418.1]]",
      "resolved": "urn:visionflow:linked:ieee-2418-1",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23257:2021]]",
      "resolved": "urn:visionflow:linked:iso-iec-23257-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST NISTIR]]",
      "resolved": "urn:visionflow:linked:nist-nistir",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EconomicLayer]]",
      "resolved": "urn:visionflow:owl:class:economic-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EconomicMechanism]]",
      "resolved": "urn:visionflow:owl:class:economic-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TokenEconomicsDomain]]",
      "resolved": "urn:visionflow:owl:class:token-economics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Economy]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy",
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
  The Base Fee is the algorithmically determined minimum fee per unit of gas that every transaction must pay to be included in an Ethereum block, introduced by EIP-1559. It adjusts automatically each block based on whether the previous block was above or below its gas target, increasing when demand is high and decreasing when low. Unlike miner tips, the base fee is burned rather than paid to validators, creating a deflationary pressure on ETH supply and making gas price prediction more reliable for users.

- ### Semantic Classification
  - owl-class:: blockchain:BaseFee
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[TokenEconomicsDomain]]
  - implemented-in-layer:: [[EconomicLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[EconomicMechanism]]
  - requires:: [[Gas]], [[Blockchain Transaction]], [[Mempool]], [[EIP-1559]]
  - enables:: [[Gas Fee Market]], [[Burning Mechanism]], [[MEV]]
  - relatedTo:: [[Gas Price]], [[Gas Limit]], [[Priority Fee]], [[Block Reward]], [[Blockchain Economics]]
  - contrastsWith:: [[Priority Fee]], [[Miner]]
  - partOf:: [[Gas Fee Market]], [[Blockchain Economics]]

- ### Content

  ## Class Declaration
  Declaration(Class(:BaseFee))

  ## Subclass Relationships
  SubClassOf(:BaseFee :EconomicMechanism)
  SubClassOf(:BaseFee :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:BaseFee
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:BaseFee
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :BaseFee "BC-0108"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :BaseFee "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :BaseFee "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :BaseFee :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :BaseFee :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :BaseFee "Base Fee"@en)
  AnnotationAssertion(rdfs:comment :BaseFee
    "Minimum transaction fee"@en)
  AnnotationAssertion(dct:description :BaseFee
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :BaseFee "BC-0108")
  AnnotationAssertion(:priority :BaseFee "1"^^xsd:integer)
  AnnotationAssertion(:category :BaseFee "economic-incentive"@en)
  )
      ```

  - ## About Base Fee

  - Minimum transaction fee within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  - ### Key Characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  - ### Technical Components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  - ### Use Cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  - ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies



  <!-- Merged from BC 0108 base fee.md: MetaverseDomain -->


  <!-- Merged from Base Fee.md: Blockchain, Transaction Fee -->

  ### EIP-1559 and the Base Fee Mechanism

  Ethereum Improvement Proposal 1559 (London hard fork, August 2021) replaced the first-price auction gas model with a two-component fee system. Every block has a target gas limit (currently 15M gas), and the base fee adjusts ±12.5% per block depending on whether the previous block exceeded or was below this target. This creates a predictable, smooth fee curve that follows demand without wild per-block volatility, greatly improving the user experience for fee estimation.

  ### Burning and Deflationary Dynamics

  The entire base fee is permanently destroyed (burned) rather than distributed to validators. This introduces a deflationary supply mechanism: during periods of high network activity, ETH is burned faster than it is issued as block rewards, making the net issuance of ETH negative (ultra-sound money narrative). The priority fee (tip) is the only component retained by the validator proposing the block, preserving the incentive to include transactions.

  ### Interaction with MEV and Mempool

  Because the base fee is predictable, searchers and builders in MEV (Maximal Extractable Value) ecosystems can price their bundles relative to the base fee and optimise their priority tip to ensure inclusion. The mempool queues transactions; those bidding below the current base fee are excluded entirely. When network demand spikes suddenly, the base fee rises sharply, temporarily pricing out low-priority transactions and smoothing congestion over subsequent blocks.

  ### Layer-2 Implications

  On Ethereum rollups (Optimism, Arbitrum), the L2 gas fee structure inherits the L1 base fee as a component of the data publication cost. Rollup operators must monitor L1 base fee fluctuations to price their L2 transaction fees correctly. EIP-4844 (proto-danksharding) introduced separate blob fee markets that reduce rollup costs by providing cheaper, ephemeral data publication outside the standard base fee mechanism.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
