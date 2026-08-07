public:: true

# Liveness
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f43c5c4c751977f33591518fe370b5c3d0d383fa0ceae6c91f1bf7ad64814aee",
  "@type": "Page",
  "vc:slug": "liveness",
  "title": "Liveness",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:temporal-logic", "vc:label": "Temporal Logic"},
    {"@id": "urn:visionflow:linked:health-check", "vc:label": "Health Check"},
    {"@id": "urn:visionflow:linked:quorum", "vc:label": "Quorum"},
    {"@id": "urn:visionflow:linked:transaction-finality", "vc:label": "Transaction Finality"},
    {"@id": "urn:visionflow:linked:consensus-mechanism", "vc:label": "Consensus Mechanism"},
    {"@id": "urn:visionflow:linked:byzantine-fault-tolerance", "vc:label": "Byzantine Fault Tolerance"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:liveness",
  "@type": "Class",
  "label": "Liveness",
  "definition": "Liveness is the class of correctness properties asserting that something good eventually happens: a submitted transaction is eventually finalised, a consensus protocol eventually decides, a requesting process eventually enters its critical section. Formalised in temporal logic and contrasted with safety properties, which assert that nothing bad ever happens, liveness cannot be violated by any finite execution — only by an infinite one that forever withholds progress — and in asynchronous fault-prone systems it is fundamentally constrained by results such as the FLP impossibility theorem.",
  "domain": "distributed-systems",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:temporal-logic",
    "label": "Temporal Logic"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:health-check", "label": "Health Check"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:quorum", "label": "Quorum"},
      {"@id": "urn:ngm:class:transaction-finality", "label": "Transaction Finality"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"}
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "Liveness is the class of correctness properties asserting that something good eventually happens: a submitted transaction is eventually finalised, a consensus protocol eventually decides, a requesting process eventually enters its critical section. Formalised in temporal logic and contrasted with safety properties, which assert that nothing bad ever happens, liveness cannot be violated by any finite execution — only by an infinite one that forever withholds progress — and in asynchronous fault-prone systems it is fundamentally constrained by results such as the FLP impossibility theorem."

- ### Semantic Classification
  - owl-class:: distributed-systems:Liveness
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Temporal Logic]]
  - part-of:: [[Health Check]]
  - related-to:: [[Consensus Mechanism]]
  - related-to:: [[Transaction Finality]]

- ### Content

  ## Definition

  **Liveness** is one half of the classical decomposition of programme correctness introduced by Lamport (1977) and formalised by Alpern and Schneider (1985): safety properties say that *nothing bad ever happens*, liveness properties say that *something good eventually happens*. "Every request is eventually answered", "the protocol eventually decides a value", and "the lock is eventually released" are liveness properties. The formal distinction is topological: a safety violation is witnessed by some finite prefix of an execution, whereas no finite prefix can refute a liveness property — only an infinite execution that postpones the good event forever. Alpern and Schneider proved that every trace property is the intersection of a safety property and a liveness property, which is why the pair anchors specification languages built on [[Temporal Logic]] (LTL's ◇, "eventually") and tools such as TLA+.

  In distributed computing the tension between the two halves is fundamental. The FLP impossibility result shows that in a fully asynchronous system no deterministic consensus protocol can guarantee both safety and liveness in the presence of even one crash fault; practical [[Consensus Mechanism]] designs therefore keep safety unconditional and make liveness conditional on partial synchrony. Paxos and Raft never corrupt agreed state but can stall without a stable leader; PBFT-style [[Byzantine Fault Tolerance]] protocols preserve safety below one-third faulty replicas but need timing assumptions to keep making progress. A [[Quorum]] that cannot be assembled — through partition or correlated failure — is the canonical liveness failure mode.

  Blockchains inherit the same dichotomy in economic dress. [[Transaction Finality]] is the liveness guarantee users experience: a chain is live if valid transactions submitted to honest nodes are eventually included and finalised. Nakamoto-style chains favour liveness (the chain keeps extending under partition, at the cost of reorgs), while BFT-finality chains favour safety (they halt rather than fork — Tendermint stops below two-thirds participation, and Ethereum's inactivity leak exists precisely to buy back liveness by bleeding stake from absent validators).

  ## Technical Details

  The term has a narrower operational sense in infrastructure engineering: a *liveness probe*, one facet of a [[Health Check]]. Kubernetes distinguishes liveness (is the process making progress, or deadlocked and in need of a restart?) from readiness (should it receive traffic?) — a direct, if informal, descendant of the formal property: the probe approximates "this service will eventually respond" with "it responded within the timeout just now". Verifying true liveness requires reasoning about infinite behaviours, so model checkers handle it with Büchi automata and fairness assumptions (weak fairness: a continuously enabled action eventually fires), and proofs use ranking functions or well-founded orderings to show the awaited event cannot recede forever. In practice, most production incidents described as "the system is down" are liveness failures — state remains consistent, but progress has stopped.
