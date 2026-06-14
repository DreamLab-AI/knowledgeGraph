public:: true

# Partition Attack
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ea0602c7edd0ed7970fa40ab5016a7c3e2be6663691241509a0b32d1bd72a8e2",
  "@type": "Page",
  "vc:slug": "partition-attack",
  "title": "Partition Attack",
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
      "@id": "urn:visionflow:owl:class:bc-cryptographic-primitive",
      "vc:label": "CryptographicDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:network-component",
      "vc:label": "NetworkComponent"
    },
    {
      "@id": "urn:visionflow:owl:class:security-layer",
      "vc:label": "SecurityLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0084"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Partition Attack"
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
  "@id": "urn:ngm:class:partition-attack",
  "@type": "Class",
  "label": "Partition Attack",
  "definition": "A Partition Attack is a network-level attack against a blockchain in which an adversary manipulates routing infrastructure to segment the peer-to-peer network into two or more isolated subgraphs, causing each partition to mine or validate on a separate chain branch. When the partition is healed the shorter branch is discarded, enabling the attacker to waste honest mining power and potentially facilitate double-spend attacks.",
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
      "@id": "urn:ngm:class:network-component",
      "label": "NetworkComponent"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:network-topology", "label": "Network Topology"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:double-spending", "label": "Double Spending"},
      {"@id": "urn:ngm:class:selfish-mining", "label": "Selfish Mining"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:eclipse-attack", "label": "Eclipse Attack"},
      {"@id": "urn:ngm:class:sybil-attack", "label": "Sybil Attack"},
      {"@id": "urn:ngm:class:attack-vector", "label": "Attack Vector"},
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"},
      {"@id": "urn:ngm:class:cryptographic-security", "label": "Cryptographic Security"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:partition-attack:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ea0602c7edd0ed7970fa40ab5016a7c3e2be6663691241509a0b32d1bd72a8e2"
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
      "raw": "[[CryptographicDomain]]",
      "resolved": "urn:visionflow:owl:class:bc-cryptographic-primitive",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NetworkComponent]]",
      "resolved": "urn:visionflow:owl:class:network-component",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SecurityLayer]]",
      "resolved": "urn:visionflow:owl:class:security-layer",
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
  A Partition Attack is a network-level attack against a blockchain in which an adversary manipulates routing infrastructure to segment the peer-to-peer network into two or more isolated subgraphs, causing each partition to mine or validate on a separate chain branch. When the partition is healed the shorter branch is discarded, enabling the attacker to waste honest mining power and potentially facilitate double-spend attacks.

- ### Semantic Classification
  - owl-class:: blockchain:PartitionAttack
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  A Partition Attack exploits the [[Network Topology]] of a [[Peer-to-Peer Network]], using BGP hijacking or similar routing manipulation to segregate nodes. Once the network is split, the attacker can enable [[Double Spending]] by having a payment confirmed in one partition while a conflicting transaction is placed in another, then allowing the longer chain to orphan the first. This technique complements [[Selfish Mining]] and is related to [[Eclipse Attack]] (which targets a single node rather than the whole network) and [[Sybil Attack]]. The attack vector exploits [[Blockchain Network]] routing assumptions and is countered by [[Byzantine Fault Tolerance]] finality mechanisms and [[Cryptographic Security]] of the routing layer.

- ### Content

  ## Class Declaration
  Declaration(Class(:PartitionAttack))

  ## Subclass Relationships
  SubClassOf(:PartitionAttack :NetworkComponent)
  SubClassOf(:PartitionAttack :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:PartitionAttack
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:PartitionAttack
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :PartitionAttack "BC-0084"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :PartitionAttack "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :PartitionAttack "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :PartitionAttack :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :PartitionAttack :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :PartitionAttack "Partition Attack"@en)
  AnnotationAssertion(rdfs:comment :PartitionAttack
    "Network segmentation attack"@en)
  AnnotationAssertion(dct:description :PartitionAttack
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :PartitionAttack "BC-0084")
  AnnotationAssertion(:priority :PartitionAttack "1"^^xsd:integer)
  AnnotationAssertion(:category :PartitionAttack "network-security"@en)
  )
      ```

  #### Attack Mechanics
  The adversary first identifies the Internet AS (Autonomous System) paths used by Bitcoin or Ethereum nodes and targets critical routing chokepoints—often a small number of transit ASes through which a disproportionate share of node traffic flows. By announcing more specific BGP prefixes for these addresses, the attacker hijacks traffic and can drop or delay block and transaction messages selectively, creating a de-facto partition. Empirical research (Apostolaki et al., 2017) demonstrated that a single AS could partition the Bitcoin network into two roughly equal halves by intercepting traffic from as few as 13 BGP prefixes.

  #### Impact and Exploitation
  During a partition, each isolated subnetwork mines independently. The partition can be exploited for double spending: the attacker sends a transaction in one partition (e.g., to a merchant) and a conflicting transaction in the other (returning funds to themselves). When the partition heals, the honest chain wins the fork race and the merchant's payment is reversed. Even without double spending, partitions waste significant mining energy on orphaned blocks and can be used to delay transaction finality for high-value confirmations.

  #### Defences
  Countermeasures operate at multiple levels: blockchain nodes should establish peer diversity across different ASes and geographies, use encrypted peer connections (e.g., BIP 324) that make selective traffic manipulation harder, monitor for unusual block propagation patterns, and apply penalty logic for peers that deliver stale or invalid blocks. Protocol-level defences include BFT finality mechanisms that reject forks older than a checkpoint, and block headers with checkpoint commitments that make partition-based reorgs cryptographically detectable.

  #### Relationship to Eclipse Attacks
  Eclipse Attack is a related but distinct threat that isolates a single node by surrounding it with adversary-controlled peers, controlling all its incoming and outgoing connections. Partition Attack operates at the routing layer and affects whole network segments. Both attacks can be combined: an attacker might first partition the network to isolate a mining pool and then eclipse the pool's nodes to fully control their view of the blockchain.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
