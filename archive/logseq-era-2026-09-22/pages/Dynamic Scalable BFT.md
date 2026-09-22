public:: true

# Dynamic Scalable BFT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cfbb716f64d2eebcc7b10dd9e13c98e17ee3c4b82be22e23edfabb96b62d46b4",
  "@type": "Page",
  "vc:slug": "dynamic-scalable-bft",
  "title": "Dynamic Scalable BFT",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:practical-byzantine-fault-tolerance",
      "vc:label": "Practical Byzantine Fault Tolerance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0559"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Dynamic Scalable BFT"
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
  "@id": "urn:ngm:class:dynamic-scalable-bft",
  "@type": "Class",
  "label": "Dynamic Scalable BFT",
  "definition": "Dynamic Scalable BFT (DSBFT) is an optimised Byzantine fault-tolerant consensus protocol that combines Distributed Key Generation (DKG) with BLS aggregate signatures to allow a validator committee to reach consensus with O(n) rather than O(n²) message complexity, while supporting dynamic membership—nodes may join or leave the committee without requiring a full protocol restart or trusted dealer for key setup.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    },
    {
      "@id": "urn:ngm:class:practical-byzantine-fault-tolerance",
      "label": "Practical Byzantine Fault Tolerance"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"},
      {"@id": "urn:ngm:class:key-management", "label": "Key Management"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-primitive", "label": "Cryptographic Primitive"},
      {"@id": "urn:ngm:class:consensus-algorithm", "label": "Consensus Algorithm"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:blockchain-scalability", "label": "Blockchain Scalability"},
      {"@id": "urn:ngm:class:finality", "label": "Finality"},
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:validator-node", "label": "Validator Node"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"},
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"},
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:dynamic-scalable-bft:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cfbb716f64d2eebcc7b10dd9e13c98e17ee3c4b82be22e23edfabb96b62d46b4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Practical Byzantine Fault Tolerance]]",
      "resolved": "urn:visionflow:owl:class:practical-byzantine-fault-tolerance",
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
  Dynamic Scalable BFT (DSBFT) is an optimised Byzantine fault-tolerant consensus protocol that combines Distributed Key Generation (DKG) with BLS aggregate signatures to allow a validator committee to reach consensus with O(n) rather than O(n²) message complexity, while supporting dynamic membership—nodes may join or leave the committee without requiring a full protocol restart or trusted dealer for key setup.

- ### Semantic Classification
  - owl-class:: blockchain:DynamicScalableBFT
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Practical Byzantine Fault Tolerance]]
  - requires:: [[Byzantine Fault Tolerance]], [[Key Management]], [[Digital Signature]]
  - uses:: [[Cryptographic Primitive]], [[Consensus Algorithm]]
  - enables:: [[Blockchain Scalability]], [[Finality]], [[Blockchain Governance]]
  - hasPart:: [[Consensus Mechanism]], [[Validator Node]]
  - relatedTo:: [[Blockchain Network]], [[Fault Tolerance]], [[Distributed Systems]]

- ### Content
  Classical BFT protocols such as PBFT achieve safety and liveness but suffer from quadratic message complexity: each node must communicate with every other node in both the prepare and commit phases, limiting practical deployment to committees of tens of nodes before network overhead becomes prohibitive. Dynamic Scalable BFT addresses this scaling ceiling through two complementary mechanisms: BLS signature aggregation and DKG-based threshold key setup.

  BLS aggregate signatures are the critical bandwidth optimiser. In a committee of n validators, each validator's individual attestation is a BLS signature of approximately 48 bytes (on BLS12-381). The leader node aggregates all received signatures into a single constant-size aggregate signature that any observer can verify against the aggregated public key. This collapses per-round communication from O(n²) individual signatures to O(n) individual messages inbound to the aggregator plus one outbound aggregate, making hundred-member committees practical and thousand-member committees tractable.

  DKG solves the key setup problem for threshold BLS without requiring a trusted dealer. In a standard threshold signature scheme, a trusted party generates the master secret and distributes shares; if that party is compromised, the entire scheme is broken. DKG protocols (Pedersen DKG, Feldman VSS) distribute the key generation across all participants: each node contributes randomness, and the joint protocol produces a threshold public key and private key shares such that no single participant ever holds the full secret. This preserves the decentralisation property essential to permissionless and semi-permissioned blockchain systems.

  Dynamic membership is handled through reconfiguration epochs: when a node wishes to join or leave, a new DKG ceremony generates fresh key material for the new committee composition, and the old epoch's validators sign a handoff message certifying the new committee. This avoids the need to restart the chain and allows continuous operation during membership transitions, which is essential for production blockchain networks subject to hardware failures, software upgrades, and economic incentive-driven validator churn.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
