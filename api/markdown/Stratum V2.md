public:: true

# Stratum V2
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:stratum-v2",
  "@type": "Page",
  "vc:slug": "stratum-v2",
  "title": "Stratum V2",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stratum-v2",
  "@type": "Class",
  "label": "Stratum V2",
  "definition": "Stratum V2 is the second-generation protocol for communication between Bitcoin miners and mining pools, redesigned to improve efficiency, security, and decentralisation over the original Stratum. Its headline feature is Job Declaration, which lets individual miners construct their own block templates and choose which transactions to include rather than blindly mining the pool operator's template, redistributing transaction-selection power. It also adds end-to-end encryption, binary framing for lower bandwidth, and reduced susceptibility to man-in-the-middle hashrate hijacking.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:mining-pool", "label": "Mining Pool"},
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:censorship-resistance", "label": "Censorship Resistance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol", "label": "Bitcoin Proof-of-Work Protocol"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Stratum V2 is the redesigned miner-to-pool protocol for Bitcoin that adds encryption, binary efficiency, and miner-controlled block template construction to decentralise transaction selection.

- ### Relationships
  - Stratum V2 is a subclass of [[Network Protocol]] and is used by [[Mining Pool]]s to coordinate [[Proof of Work]] hashing. By letting individual miners build their own templates, it enables greater [[Censorship Resistance]] in the [[Bitcoin Proof-of-Work Protocol]] network by dispersing the power to choose which transactions are confirmed.

- ### Content
  - The original Stratum protocol, while ubiquitous, concentrated significant power in pool operators: the pool constructed the block template, deciding which transactions to include, and miners contributed only raw hashing power against that fixed template. This meant a handful of large pools effectively controlled transaction selection for the entire network, a centralisation pressure at odds with Bitcoin's design goals. Stratum also transmitted data in cleartext, exposing miners to hashrate-stealing man-in-the-middle attacks.

  - Stratum V2's most consequential addition is the Job Declaration Protocol, which separates the act of providing hashpower from the act of choosing a block's contents. With it, a miner can run its own Bitcoin node, construct a block template reflecting its own transaction-selection policy, and direct its hashrate at that template while still pooling reward variance through the operator. Transaction-selection power is thereby redistributed from a few pools back toward thousands of individual miners.

  - The protocol also delivers substantial engineering improvements. A compact binary framing replaces the verbose JSON-RPC of the original, cutting bandwidth and latency — important for miners on constrained connections and for reducing stale shares. End-to-end authenticated encryption using the Noise protocol framework protects the connection against eavesdropping and tampering, closing the hashrate-hijacking vector that plagued the first generation.

  - Adoption depends on coordinated upgrades across mining firmware, pool software, and proxy infrastructure, which has made rollout gradual despite clear benefits. Reference implementations and a translation proxy that bridges legacy Stratum V1 devices ease the transition. Beyond efficiency, the strategic significance of Stratum V2 is political: by enabling decentralised template construction, it directly addresses one of the most credible centralisation criticisms of proof-of-work mining and strengthens the censorship resistance that is Bitcoin's core value proposition.
