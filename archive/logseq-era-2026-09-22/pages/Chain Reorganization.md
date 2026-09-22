public:: true

# Chain Reorganization
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2c6a7abcc976e40744331d4b3672236dec9b9c2657b868078f27e025083364ac",
  "@type": "Page",
  "vc:slug": "chain-reorganization",
  "title": "Chain Reorganization",
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
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "BlockchainDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:distributed-data-structure",
      "vc:label": "DistributedDataStructure"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0015"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Chain Reorganization"
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
  "@id": "urn:ngm:class:chain-reorganization",
  "@type": "Class",
  "label": "Chain Reorganization",
  "definition": "A Chain Reorganization (reorg) is the replacement of one or more blocks in the canonical blockchain by an alternative chain of equal or greater cumulative proof-of-work, occurring when competing miners produce valid chains of differing lengths and the network converges on the longest-chain rule to select the canonical history. Reorgs invalidate transactions confirmed only in the abandoned chain segment, enabling double-spend attacks when deliberately induced and posing settlement finality risks for exchanges and payment processors.",
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
      "@id": "urn:ngm:class:distributed-data-structure",
      "label": "Distributed Data Structure"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:nakamoto-consensus", "label": "Nakamoto Consensus"},
      {"@id": "urn:ngm:class:longest-chain-rule", "label": "Longest Chain Rule"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:double-spending", "label": "Double Spending"},
      {"@id": "urn:ngm:class:51-attack", "label": "51% Attack"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:finality", "label": "Finality"},
      {"@id": "urn:ngm:class:transaction-finality", "label": "Transaction Finality"},
      {"@id": "urn:ngm:class:selfish-mining", "label": "Selfish Mining"},
      {"@id": "urn:ngm:class:fork-choice-rule", "label": "Fork Choice Rule"},
      {"@id": "urn:ngm:class:blockchain-scalability", "label": "Blockchain Scalability"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:chain-reorganization:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2c6a7abcc976e40744331d4b3672236dec9b9c2657b868078f27e025083364ac"
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
      "raw": "[[BlockchainDomain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DistributedDataStructure]]",
      "resolved": "urn:visionflow:owl:class:distributed-data-structure",
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
  A Chain Reorganization (reorg) is the replacement of one or more blocks in the canonical blockchain by an alternative chain of equal or greater cumulative proof-of-work, occurring when competing miners produce valid chains of differing lengths and the network converges on the longest-chain rule to select the canonical history. Reorgs invalidate transactions confirmed only in the abandoned chain segment, enabling double-spend attacks when deliberately induced and posing settlement finality risks for exchanges and payment processors.

- ### Semantic Classification
  - owl-class:: blockchain:ChainReorganization
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[Distributed Data Structure]]
  - requires:: [[Proof Of Work]], [[Nakamoto Consensus]], [[Longest Chain Rule]]
  - enables:: [[Double Spending]], [[51% Attack]]
  - relatedTo:: [[Finality]], [[Transaction Finality]], [[Selfish Mining]], [[Fork Choice Rule]], [[Blockchain Scalability]]
  - partOf:: [[Consensus Mechanism]]
  - contrastsWith:: [[Byzantine Fault Tolerance]]

- ### Content

  ## Class Declaration
  Declaration(Class(:ChainReorganization))

  ## Subclass Relationships
  SubClassOf(:ChainReorganization :DistributedDataStructure)
  SubClassOf(:ChainReorganization :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:ChainReorganization
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:ChainReorganization
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :ChainReorganization "BC-0015"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :ChainReorganization "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :ChainReorganization "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :ChainReorganization :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :ChainReorganization :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :ChainReorganization "Chain Reorganization"@en)
  AnnotationAssertion(rdfs:comment :ChainReorganization
    "Replacement of blockchain segment"@en)
  AnnotationAssertion(dct:description :ChainReorganization
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :ChainReorganization "BC-0015")
  AnnotationAssertion(:priority :ChainReorganization "1"^^xsd:integer)
  AnnotationAssertion(:category :ChainReorganization "blockchain-fundamentals"@en)
  )
      ```

  ### About Chain Reorganization

  In proof-of-work blockchain networks, multiple miners may independently discover valid blocks at approximately the same height, producing competing chain tips. Each node initially appends the first valid block it receives to its local chain, creating a temporary fork where different subsets of the network have different views of the canonical chain. The longest-chain rule—more precisely, the heaviest-chain rule measuring cumulative proof-of-work—resolves this contention: when one chain accumulates more work than its competitors, all nodes adopting that chain orphan the competing blocks and any transactions exclusively confirmed therein, constituting a reorganisation.

  Shallow reorgs of one or two blocks occur naturally and frequently in any proof-of-work blockchain without adversarial intent, arising simply from network propagation latency. These natural reorgs are a fundamental feature of probabilistic finality: a transaction confirmed in a block at depth N has been reversed by a reorg of depth N, and the probability of such a reorg decays exponentially with depth assuming honest majority hash power. Bitcoin's convention of waiting six confirmations before treating a payment as final reflects this probabilistic model and corresponds to a reorg of at least six blocks, which requires an adversary controlling close to 50% of hash power even under optimistic assumptions.

  Adversarial reorgs are engineered by attackers who privately mine a competing chain and broadcast it after targets have accepted transactions in the public chain, invalidating those transactions. This double-spend attack requires controlling sufficient hash rate to outpace the honest network—approximately 51% for sustained attacks, though shorter reorgs are achievable with less hash power by exploiting network topology. Selfish mining strategies can amplify an attacker's effective share of block rewards, making attacks viable at lower hash rate thresholds than the naive 51% estimate suggests.

  Exchanges, payment processors, and merchants mitigate reorg risk by requiring multiple confirmations before crediting deposits and by monitoring blockchain analytics services that detect unusual chain-tip competition patterns. Proof-of-stake and Byzantine fault-tolerant consensus mechanisms achieve deterministic finality without reorgs by requiring supermajority validator signatures on each block, eliminating the probabilistic settlement model entirely at the cost of different security assumptions.

  ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
