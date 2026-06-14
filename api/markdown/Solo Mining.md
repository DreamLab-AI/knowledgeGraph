public:: true

# Solo Mining
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:435472e808009ca0599b756c47c641cef66178eb4e9372962e030dfcf4a9d0c8",
  "@type": "Page",
  "vc:slug": "solo-mining",
  "title": "Solo Mining",
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
      "@id": "urn:visionflow:owl:class:bc-protocol-and-consensus",
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
      "vc:value": "BC-0065"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Solo Mining"
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
  "@id": "urn:ngm:class:solo-mining",
  "@type": "Class",
  "label": "Solo Mining",
  "definition": "Solo Mining is a blockchain participation strategy in which an individual miner independently operates hashing hardware and attempts to discover valid blocks without joining a mining pool, retaining the full block reward upon success but accepting high variance in earnings proportional to the miner's share of total network hash rate. It contrasts with pool mining by preserving full decentralisation of block production but is economically viable only when a miner controls a significant fraction of total hash power.",
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
      "@id": "urn:ngm:class:consensus-protocol",
      "label": "ConsensusProtocol"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:consensus-algorithm", "label": "Consensus Algorithm"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:mining-pool", "label": "Mining Pool"},
      {"@id": "urn:ngm:class:selfish-mining", "label": "Selfish Mining"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:block-reward", "label": "Block Reward"},
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"},
      {"@id": "urn:ngm:class:nakamoto-consensus", "label": "Nakamoto Consensus"},
      {"@id": "urn:ngm:class:51-attack", "label": "51% Attack"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:finality", "label": "Finality"},
      {"@id": "urn:ngm:class:blockchain-scalability", "label": "Blockchain Scalability"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:solo-mining:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:435472e808009ca0599b756c47c641cef66178eb4e9372962e030dfcf4a9d0c8"
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
      "raw": "[[ConsensusDomain]]",
      "resolved": "urn:visionflow:owl:class:bc-protocol-and-consensus",
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
  Solo Mining is a blockchain participation strategy in which an individual miner independently operates hashing hardware and attempts to discover valid blocks without joining a mining pool. The miner retains the full block reward upon success but accepts high variance in earnings proportional to their share of total network hash rate. It preserves full decentralisation of block production but is economically viable only when a miner controls a significant fraction of total hash power.

- ### Semantic Classification
  - owl-class:: blockchain:SoloMining
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[ConsensusDomain]]
  - implemented-in-layer:: [[ProtocolLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[ConsensusProtocol]]
  - requires:: [[Proof Of Work]], [[Consensus Algorithm]]
  - contrastsWith:: [[Mining Pool]], [[Selfish Mining]]
  - relatedTo:: [[Block Reward]], [[Blockchain Network]], [[Nakamoto Consensus]], [[51% Attack]]
  - enables:: [[Finality]], [[Blockchain Scalability]]
  - partOf:: [[Blockchain]]

- ### Content

  ## Class Declaration
  Declaration(Class(:SoloMining))

  ## Subclass Relationships
  SubClassOf(:SoloMining :ConsensusProtocol)
  SubClassOf(:SoloMining :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:SoloMining
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:SoloMining
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :SoloMining "BC-0065"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :SoloMining "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :SoloMining "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :SoloMining :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :SoloMining :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :SoloMining "Solo Mining"@en)
  AnnotationAssertion(rdfs:comment :SoloMining
    "Individual miner operation"@en)
  AnnotationAssertion(dct:description :SoloMining
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :SoloMining "BC-0065")
  AnnotationAssertion(:priority :SoloMining "1"^^xsd:integer)
  AnnotationAssertion(:category :SoloMining "consensus-fundamentals"@en)
  )
      ```

  ### About Solo Mining

  Solo mining is the original mode of participation in proof-of-work blockchains, as designed by Bitcoin's Nakamoto consensus protocol. In this model a single miner connects their hardware directly to a full node, broadcasts candidate block headers, and iterates the nonce field billions of times per second in search of a hash value below the current difficulty target. When a valid block is found, the miner collects the entire block subsidy plus all transaction fees included in that block, with no obligation to share revenue with any other party.

  The central economic trade-off is variance. A miner controlling 1% of total network hash rate expects to find a block roughly once every 100 block intervals on average (approximately 16.7 hours on Bitcoin), but the actual inter-block time follows an exponential distribution, meaning the miner may go weeks without a reward and then find two blocks in quick succession. For operators with thin capital reserves or large fixed operating costs, this variance is often unacceptable, which is why mining pools emerged as a variance-reduction mechanism.

  Solo mining remains relevant in several contexts: operators running full nodes for sovereignty reasons, miners in jurisdictions where pool membership raises regulatory concerns, and institutional miners with sufficient hash rate to achieve consistent block discovery intervals. Large mining operations controlling more than 1% of network hash rate can viably solo mine while still maintaining lower variance than smaller operators.

  From a network security perspective, solo mining is preferable to pool mining because it decentralises block production across many independent operators. Mining pool concentration—where a single pool controls more than 50% of hash rate—creates the conditions for a 51% attack, enabling double spending and chain reorganisation. Encouraging solo mining or small-pool participation therefore strengthens blockchain security guarantees and censorship resistance, making it an important consideration in network health monitoring and protocol design.

  ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
