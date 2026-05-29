public:: true

# Block Propagation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ef869c751f4bc27ac7657abdf41d82bc09625279e3d1113e575b1be6d6a14198",
  "@type": "Page",
  "vc:slug": "block-propagation",
  "title": "Block Propagation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-energy-optimisation",
      "vc:label": "AI Energy Optimisation"
    },
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
      "@id": "urn:visionflow:owl:class:consensus-domain",
      "vc:label": "ConsensusDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:consensus-protocol",
      "vc:label": "ConsensusProtocol"
    },
    {
      "@id": "urn:visionflow:owl:class:protocol-layer",
      "vc:label": "ProtocolLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0062"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Block Propagation"
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
  "@id": "urn:ngm:class:block-propagation",
  "@type": "Class",
  "label": "Block Propagation",
  "definition": "Block Propagation is the process by which a newly mined or validated block is broadcast across a blockchain peer-to-peer network so that all full nodes can update their local copy of the chain. Propagation latency directly influences the orphan/stale block rate, security against selfish mining, and the degree of centralisation pressure towards large, well-connected mining pools. Techniques such as Compact Block Relay (Bitcoin BIP 152) and Graphene reduce bandwidth requirements by sending block sketches rather than full transaction lists, exploiting the fact that recipient nodes already hold most transactions in their mempools.",
  "domain": "blockchain",
  "maturity": "established",
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
      "@id": "urn:ngm:class:consensus-protocol",
      "label": "ConsensusProtocol"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"},
      {"@id": "urn:ngm:class:full-node", "label": "Full Node"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:blockchain-scalability", "label": "Blockchain Scalability"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:block-propagation-time", "label": "Block Propagation Time"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:block-time", "label": "Block Time"},
      {"@id": "urn:ngm:class:block-size", "label": "Block Size"},
      {"@id": "urn:ngm:class:mempool", "label": "Mempool"},
      {"@id": "urn:ngm:class:miner", "label": "Miner"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:light-node", "label": "Light Node"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:block-propagation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ef869c751f4bc27ac7657abdf41d82bc09625279e3d1113e575b1be6d6a14198"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Energy Optimisation]]",
      "resolved": "urn:visionflow:linked:ai-energy-optimisation",
      "kind": "StubLink"
    },
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
      "raw": "[[ConsensusDomain]]",
      "resolved": "urn:visionflow:owl:class:consensus-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConsensusProtocol]]",
      "resolved": "urn:visionflow:owl:class:consensus-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ProtocolLayer]]",
      "resolved": "urn:visionflow:owl:class:protocol-layer",
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
  Block Propagation is the process by which a newly mined or validated block is broadcast across a blockchain peer-to-peer network so that all full nodes can update their local copy of the chain. Propagation latency directly influences the orphan/stale block rate, security against selfish mining, and the degree of centralisation pressure towards large, well-connected mining pools. Compact Block Relay (Bitcoin BIP 152) and Graphene reduce bandwidth by sending block sketches rather than full transaction lists.

- ### Semantic Classification
  - owl-class:: blockchain:BlockPropagation
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[ConsensusDomain]]
  - implemented-in-layer:: [[ProtocolLayer]]

- ### Relationships
  Block Propagation **requires** a Blockchain Network of Full Nodes to relay data. It **enables** Consensus Mechanism convergence and underpins Blockchain Scalability efforts. It **has part** the measurable Block Propagation Time metric. It is **related to** Block Time (propagation delay must be far shorter than the inter-block interval), Block Size (larger blocks propagate more slowly), the Mempool (receiver nodes reconstruct blocks from cached transactions), and Miners who initiate propagation upon finding a valid block. It **depends on** the Blockchain Protocol gossip layer. It **contrasts with** Light Node operation, which receives block headers without verifying full propagation.

- ### Content

  ## Class Declaration
  Declaration(Class(:BlockPropagation))

  ## Subclass Relationships
  SubClassOf(:BlockPropagation :ConsensusProtocol)
  SubClassOf(:BlockPropagation :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:BlockPropagation
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:BlockPropagation
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :BlockPropagation "BC-0062"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :BlockPropagation "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :BlockPropagation "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :BlockPropagation :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :BlockPropagation :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :BlockPropagation "Block Propagation"@en)
  AnnotationAssertion(rdfs:comment :BlockPropagation
    "Network block distribution"@en)
  AnnotationAssertion(dct:description :BlockPropagation
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :BlockPropagation "BC-0062")
  AnnotationAssertion(:priority :BlockPropagation "1"^^xsd:integer)
  AnnotationAssertion(:category :BlockPropagation "consensus-fundamentals"@en)
  )
      ```

  When a miner or validator produces a valid block, it must flood that block through the peer-to-peer gossip network as rapidly as possible. Every millisecond of delay increases the probability that another node discovers a competing block at the same height, creating a fork that the network must resolve by discarding one branch. The discarded branch's transactions return to the mempool and its miner's revenue is wasted, creating a strong economic incentive for fast propagation.

  Bitcoin's original block announcement protocol required sending the full block payload, wasting bandwidth on transactions the receiving peer already held. BIP 152 Compact Blocks (2016) addressed this by sending only short transaction identifiers; the receiver reconstructs the full block from its own mempool and requests only the small fraction of missing transactions. Graphene (a research proposal) further compresses the sketch using invertible Bloom lookup tables and Bloom filters, achieving compression ratios an order of magnitude better than Compact Blocks for typical mempool overlap.

  The relationship between block size and propagation time has significant security consequences. In the selfish mining attack, a pool that propagates its blocks faster than competitors can withhold discovered blocks briefly to gain a head start on the next block, earning more than its fair share of rewards. Geographic concentration of miners around high-bandwidth data centres reduces average propagation times for those miners, creating centralisation pressure that undermines the decentralisation goals of proof-of-work chains.

  Block propagation is a key variable in blockchain scalability research. Systems that tolerate high block frequencies (such as PHANTOM/GHOSTDAG DAG-based protocols) must propagate blocks before the next block arrives, requiring propagation to complete within seconds rather than the ten-minute Bitcoin interval. This imposes network topology constraints that large-scale deployments must carefully architect.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
