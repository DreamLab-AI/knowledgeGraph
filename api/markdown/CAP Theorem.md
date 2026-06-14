public:: true

# CAP Theorem
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:63468c27dee0c80fbc3878c4be8e410de2e2ad3301efa2080623986b3e9d1f51",
  "@type": "Page",
  "vc:slug": "cap-theorem",
  "title": "CAP Theorem",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:distributed-database-design",
      "vc:label": "Distributed Database Design"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems Domain"
    },
    {
      "@id": "urn:visionflow:linked:consensus",
      "vc:label": "Consensus"
    },
    {
      "@id": "urn:visionflow:linked:eventual-consistency",
      "vc:label": "Eventual Consistency"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:gilbert-and-lynch-2002",
      "vc:label": "Gilbert and Lynch (2002)"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "CAP Theorem"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cap-theorem",
  "@type": "Class",
  "label": "CAP Theorem",
  "definition": "The CAP Theorem states that a distributed data store cannot simultaneously guarantee all three of consistency, availability and partition tolerance. When a network partition occurs and messages between nodes are lost or delayed, a system must choose between remaining available, by serving possibly stale data, and remaining consistent, by refusing requests it cannot safely satisfy. Formulated by Eric Brewer and later proved formally by Gilbert and Lynch, it frames a fundamental trade-off in distributed systems design.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:infra-computing-and-cloud",
    "label": "Computing and Cloud"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:consistency",
        "label": "Consistency"
      },
      {
        "@id": "urn:ngm:class:availability",
        "label": "Availability"
      },
      {
        "@id": "urn:ngm:class:partition-tolerance",
        "label": "Partition Tolerance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:network-partition",
        "label": "Network Partition"
      },
      {
        "@id": "urn:ngm:class:distributed-data-store",
        "label": "Distributed Data Store"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:distributed-database-design",
        "label": "Distributed Database Design"
      },
      {
        "@id": "urn:ngm:class:system-fault-tolerance",
        "label": "System Fault Tolerance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:replication",
        "label": "Replication"
      },
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:acid-properties",
        "label": "ACID Properties"
      },
      {
        "@id": "urn:ngm:class:pacelc-theorem",
        "label": "PACELC Theorem"
      },
      {
        "@id": "urn:ngm:class:base-properties",
        "label": "BASE Properties"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:eventual-consistency",
        "label": "Eventual Consistency"
      },
      {
        "@id": "urn:ngm:class:strong-consistency",
        "label": "Strong Consistency"
      },
      {
        "@id": "urn:ngm:class:linearizability",
        "label": "Linearizability"
      },
      {
        "@id": "urn:ngm:class:two-phase-commit",
        "label": "Two-Phase Commit"
      },
      {
        "@id": "urn:ngm:class:raft-consensus",
        "label": "RAFT Consensus"
      },
      {
        "@id": "urn:ngm:class:paxos-protocol",
        "label": "Paxos Protocol"
      },
      {
        "@id": "urn:ngm:class:nosql-database",
        "label": "NoSQL Database"
      },
      {
        "@id": "urn:ngm:class:distributed-systems-theorem",
        "label": "Distributed Systems Theorem"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain-consensus",
        "label": "Blockchain Consensus"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:brewer-theorem",
      "label": "Brewer's Theorem"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:cap-theorem:6764cb9f7b3e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:63468c27dee0c80fbc3878c4be8e410de2e2ad3301efa2080623986b3e9d1f51"
  },
  "vc:resolutions": [
    {
      "raw": "[[Distributed Database Design]]",
      "resolved": "urn:visionflow:linked:distributed-database-design",
      "kind": "StubLink"
    },
    {
      "raw": "[[Distributed Systems Domain]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus]]",
      "resolved": "urn:visionflow:linked:consensus",
      "kind": "StubLink"
    },
    {
      "raw": "[[Eventual Consistency]]",
      "resolved": "urn:visionflow:linked:eventual-consistency",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Gilbert and Lynch (2002)]]",
      "resolved": "urn:visionflow:linked:gilbert-and-lynch-2002",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The CAP Theorem states that a distributed data store cannot simultaneously guarantee all three of consistency, availability and partition tolerance. When a network partition occurs and messages between nodes are lost or delayed, a system must choose between remaining available, by serving possibly stale data, and remaining consistent, by refusing requests it cannot safely satisfy. Formulated by Eric Brewer and later proved formally by Gilbert and Lynch, it frames a fundamental trade-off in distributed systems design.

- ### Semantic Classification
  - owl-class:: cs:CAPTheorem
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Distributed Systems Domain]], [[Consensus]], [[Eventual Consistency]]
  - enables:: [[Distributed Database Design]]

- ### Content
  - In the theorem's terms, consistency means every read returns the most recent write or an error, availability means every request receives a non-error response without guaranteeing it reflects the latest write, and partition tolerance means the system continues operating despite arbitrary loss of messages between nodes. Because network partitions are unavoidable in real distributed systems, partition tolerance is effectively a given.
  - The practical consequence is that, during a partition, a system must sacrifice either consistency or availability. This gives rise to the common CP and AP categorisations of distributed databases, where CP systems prioritise correctness over responsiveness during faults, and AP systems remain responsive at the cost of possibly stale reads.
  - The theorem clarifies that there is no single best choice, only trade-offs appropriate to a workload. It is often refined by the PACELC formulation, which adds that even without partitions a system trades latency against consistency, and it informs the design of consensus protocols, replication schemes and eventually consistent stores.

- ### Provenance
  - sources:: [[Gilbert and Lynch (2002)]]
  - migration-date:: 2026-05-29T00:00:00Z
