public:: true

# Byzantine Fault Tolerance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3230b05f1b205e113b5f0a7fc05e44ed3056d17aeb500678c992e7169780475e",
  "@type": "Page",
  "vc:slug": "byzantine-fault-tolerance",
  "title": "Byzantine Fault Tolerance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-energy-optimisation",
      "vc:label": "AI Energy Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:consensus-safety",
      "vc:label": "Consensus Safety"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-signature",
      "vc:label": "Cryptographic Signature"
    },
    {
      "@id": "urn:visionflow:linked:distributed-agreement",
      "vc:label": "Distributed Agreement"
    },
    {
      "@id": "urn:visionflow:linked:finality-gadget",
      "vc:label": "Finality Gadget"
    },
    {
      "@id": "urn:visionflow:linked:leader-election",
      "vc:label": "Leader Election"
    },
    {
      "@id": "urn:visionflow:linked:malicious-node-handling",
      "vc:label": "Malicious Node Handling"
    },
    {
      "@id": "urn:visionflow:linked:message-authentication",
      "vc:label": "Message Authentication"
    },
    {
      "@id": "urn:visionflow:linked:quorum",
      "vc:label": "Quorum"
    },
    {
      "@id": "urn:visionflow:linked:voting-round",
      "vc:label": "Voting Round"
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
      "@id": "urn:visionflow:owl:class:distributed-systems",
      "vc:label": "Distributed Systems"
    },
    {
      "@id": "urn:visionflow:owl:class:fault-tolerance",
      "vc:label": "Fault Tolerance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0544"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Byzantine Fault Tolerance"
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
  "@id": "urn:ngm:class:byzantine-fault-tolerance",
  "@type": "Class",
  "label": "Byzantine Fault Tolerance",
  "definition": "The feature of a distributed network to reach consensus on the same value even when some nodes fail to respond or respond with incorrect information. Enables networks to function correctly despite malicious or faulty nodes comprising less than one-third of the network. Derived from the Byzantine Generals Problem; the fundamental theorem states consensus is achievable if and only if more than two-thirds of participants are honest.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:consensus-mechanism",
    "label": "Consensus Mechanism"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:finality-gadget",
        "label": "Finality Gadget"
      },
      {
        "@id": "urn:ngm:class:leader-election",
        "label": "Leader Election"
      },
      {
        "@id": "urn:ngm:class:voting-round",
        "label": "Voting Round"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      },
      {
        "@id": "urn:ngm:class:message-authentication",
        "label": "Message Authentication"
      },
      {
        "@id": "urn:ngm:class:quorum",
        "label": "Quorum"
      },
      {
        "@id": "urn:ngm:class:distributed-agreement",
        "label": "Distributed Agreement"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus Safety"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:deterministic-finality",
        "label": "Deterministic Finality"
      },
      {
        "@id": "urn:ngm:class:state-machine-replication",
        "label": "State Machine Replication"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:practical-byzantine-fault-tolerance",
        "label": "Practical Byzantine Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:hotstuff-protocol",
        "label": "HotStuff Protocol"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:network-synchrony",
        "label": "Network Synchrony"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:crash-fault-tolerance",
        "label": "Crash Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:validator-set",
        "label": "Validator Set"
      },
      {
        "@id": "urn:ngm:class:casper-ffg",
        "label": "Casper FFG"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:multi-agent-systems",
        "label": "Multi-Agent Systems"
      },
      {
        "@id": "urn:ngm:class:ai-energy-optimisation",
        "label": "AI Energy Optimisation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:bft-consensus",
      "label": "BFT Consensus"
    },
    {
      "@id": "urn:ngm:class:byzantine-agreement",
      "label": "Byzantine Agreement"
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
  "@id": "urn:visionflow:annotation:link-resolutions:byzantine-fault-tolerance:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3230b05f1b205e113b5f0a7fc05e44ed3056d17aeb500678c992e7169780475e"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Energy Optimisation]]",
      "resolved": "urn:visionflow:linked:ai-energy-optimisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Consensus Safety]]",
      "resolved": "urn:visionflow:linked:consensus-safety",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Signature]]",
      "resolved": "urn:visionflow:linked:cryptographic-signature",
      "kind": "StubLink"
    },
    {
      "raw": "[[Distributed Agreement]]",
      "resolved": "urn:visionflow:linked:distributed-agreement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Finality Gadget]]",
      "resolved": "urn:visionflow:linked:finality-gadget",
      "kind": "StubLink"
    },
    {
      "raw": "[[Leader Election]]",
      "resolved": "urn:visionflow:linked:leader-election",
      "kind": "StubLink"
    },
    {
      "raw": "[[Malicious Node Handling]]",
      "resolved": "urn:visionflow:linked:malicious-node-handling",
      "kind": "StubLink"
    },
    {
      "raw": "[[Message Authentication]]",
      "resolved": "urn:visionflow:linked:message-authentication",
      "kind": "StubLink"
    },
    {
      "raw": "[[Quorum]]",
      "resolved": "urn:visionflow:linked:quorum",
      "kind": "StubLink"
    },
    {
      "raw": "[[Voting Round]]",
      "resolved": "urn:visionflow:linked:voting-round",
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
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:owl:class:distributed-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fault Tolerance]]",
      "resolved": "urn:visionflow:owl:class:fault-tolerance",
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
  - The feature of a distributed network to reach consensus on the same value even when some nodes fail to respond or respond with incorrect information. Enables networks to function correctly despite malicious or faulty nodes comprising less than one-third of the network.

- ### Semantic Classification
  - owl-class:: blockchain:ByzantineFaultTolerance
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Consensus Mechanism]], [[Distributed Agreement]]
  - requires:: [[Cryptographic Signature]], [[Message Authentication]], [[Quorum]]
  - enables:: [[Fault Tolerance]], [[Malicious Node Handling]], [[Consensus Safety]]
  - has-part:: [[Leader Election]], [[Voting Round]], [[Finality Gadget]]
  - bridges-to:: [[AI Energy Optimisation]], [[Distributed Systems]]

- ### Content

  Byzantine Fault Tolerance (BFT) solves the classic Byzantine Generals Problem: how can a group of distributed participants reach consensus when some may be faulty or malicious? The fundamental theorem states that consensus is achievable if and only if more than two-thirds of participants are honest, enabling systems to tolerate up to one-third malicious nodes.

  BFT protocols like Practical Byzantine Fault Tolerance (PBFT) provide deterministic finality: once a block is confirmed, it cannot be reverted even with majority control. This contrasts with Proof-of-Work's probabilistic finality where blocks can theoretically be reversed with sufficient computational power. BFT typically operates in rounds where a designated leader proposes blocks and validators vote in multiple phases ensuring safety and liveness.

  Modern blockchain implementations adapt BFT with Proof-of-Stake validator selection (Tendermint, HotStuff, Casper FFG), achieving both permissionless operation and instant finality. BFT consensus provides high throughput and fast confirmation but traditionally required known validator sets, though advances now enable practical Byzantine agreement with thousands of participants.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
