public:: true

# Fee Market
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:56fa68c08738446256069459c05220271aea10eb2479597b014abbcb8c153f75",
  "@type": "Page",
  "vc:slug": "fee-market",
  "title": "Fee Market",
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
      "@id": "urn:visionflow:owl:class:token-economics-domain",
      "vc:label": "TokenEconomicsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0110"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Fee Market"
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
  "@id": "urn:ngm:class:fee-market",
  "@type": "Class",
  "label": "Fee Market",
  "definition": "A Fee Market is the mechanism by which blockchain participants competitively bid transaction fees to have their transactions included in blocks, with miners or validators selecting transactions that maximise their revenue given limited block capacity. Fee markets emerge from the interplay between fixed block-space supply and variable transaction demand, producing dynamic price discovery that signals network congestion. Ethereum's EIP-1559 introduced a protocol-level base fee that adjusts algorithmically each block, partially burning fees to reduce token supply and adding a tip mechanism for priority inclusion.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-defi-and-economics",
      "label": "DeFi and Economics"
    },
    {
      "@id": "urn:ngm:class:blockchain-entity",
      "label": "Blockchain Entity"
    },
    {
      "@id": "urn:ngm:class:economic-mechanism",
      "label": "EconomicMechanism"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:base-fee", "label": "Base Fee"},
      {"@id": "urn:ngm:class:transaction-fee", "label": "Transaction Fee"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:mempool", "label": "Mempool"},
      {"@id": "urn:ngm:class:block-size", "label": "Block Size"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:miner", "label": "Miner"},
      {"@id": "urn:ngm:class:blockchain-transaction", "label": "Blockchain Transaction"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:gas-fee-market", "label": "Gas Fee Market"},
      {"@id": "urn:ngm:class:gas-price", "label": "Gas Price"},
      {"@id": "urn:ngm:class:tokenomics", "label": "Tokenomics"},
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}
    ]
  },
  "qualityScore": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:fee-market:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:56fa68c08738446256069459c05220271aea10eb2479597b014abbcb8c153f75"
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
      "resolved": "urn:visionflow:owl:class:token-economics-domain",
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
  A Fee Market is the mechanism by which blockchain participants competitively bid transaction fees to have their transactions included in blocks, with miners or validators selecting transactions that maximise their revenue given limited block capacity. Fee markets emerge from the interplay between fixed block-space supply and variable transaction demand, producing dynamic price discovery that signals network congestion. Ethereum's EIP-1559 introduced a protocol-level base fee that adjusts algorithmically each block, partially burning fees to reduce token supply and adding a tip mechanism for priority inclusion.

- ### Semantic Classification
  - owl-class:: blockchain:FeeMarket
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[TokenEconomicsDomain]]
  - implemented-in-layer:: [[EconomicLayer]]

- ### Relationships
  The Fee Market **has parts** including the Base Fee (the protocol-mandated minimum per-unit cost) and Transaction Fees paid by users. It **requires** a Mempool (the pool of pending transactions competing for inclusion) and Block Size constraints that create the scarcity driving bidding. It **enables** Miners to earn revenue and makes Blockchain Transactions economically viable. It is **related to** the Gas Fee Market (Ethereum's specific implementation), Gas Price as the unit denomination, Tokenomics as the broader economic context, and Proof Of Work as the original incentive framework. It **depends on** the Blockchain itself as the underlying settlement layer.

- ### Content

  ## Class Declaration
  Declaration(Class(:FeeMarket))

  ## Subclass Relationships
  SubClassOf(:FeeMarket :EconomicMechanism)
  SubClassOf(:FeeMarket :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:FeeMarket
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:FeeMarket
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :FeeMarket "BC-0110"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :FeeMarket "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :FeeMarket "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :FeeMarket :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :FeeMarket :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :FeeMarket "Fee Market"@en)
  AnnotationAssertion(rdfs:comment :FeeMarket
    "Dynamic fee determination"@en)
  AnnotationAssertion(dct:description :FeeMarket
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :FeeMarket "BC-0110")
  AnnotationAssertion(:priority :FeeMarket "1"^^xsd:integer)
  AnnotationAssertion(:category :FeeMarket "economic-incentive"@en)
  )
      ```

  Fee markets are a foundational mechanism in public blockchain systems, arising wherever block space is scarce relative to demand. In the original Bitcoin design, miners sort pending transactions by fee-per-byte and fill blocks greedily from the highest-paying entries downwards. During periods of high congestion, users who wish rapid confirmation must outbid one another, driving fees to levels that can make small transactions economically unviable.

  Ethereum's EIP-1559 (implemented August 2021) restructured the fee market by introducing an algorithmic base fee that the protocol adjusts every block by up to 12.5% depending on whether the previous block was above or below its 50% utilisation target. Users pay the base fee (which is burned, permanently removing ETH from circulation) plus a priority tip paid to the validator. This reform improved fee predictability and created a deflationary pressure on ETH supply during high-activity periods, though it did not eliminate fee spikes under sustained overload.

  Fee markets interact with block propagation dynamics and miner extractable value (MEV). Sophisticated actors submit bundles of transactions with carefully crafted fees to capture arbitrage, liquidation, and front-running opportunities, creating a secondary market for block-space positioning. Layer-2 solutions such as rollups reduce demand for Layer-1 block space, lowering base fees for underlying settlement transactions while shifting fee market dynamics up the stack.

  The design of a fee market has security implications: if block rewards fall and fees do not compensate, miners or validators may find it rational to attack the chain rather than extend it honestly (the "fee cliff" problem relevant to Bitcoin's long-term security model as the block subsidy approaches zero).

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
