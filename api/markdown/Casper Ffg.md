public:: true

# Casper Ffg

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:casper-ffg", "@type":"Page", "title":"Casper Ffg", "vc:slug":"casper-ffg", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:casper-ffg",
  "@type":"Class",
  "label":"Casper Ffg",
  "definition":"Casper FFG (the Friendly Finality Gadget) is a proof-of-stake finality mechanism that overlays a checkpoint-based voting protocol on an underlying block proposal chain. Validators stake deposits and vote in two rounds to justify and then finalise checkpoints, after which reverting them would require destroying at least one third of the total stake. It introduces economic finality with slashing penalties for equivocation, providing strong accountability without requiring a full consensus overhaul.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:finality-gadget","label":"Finality Gadget"}],
  "relations":{
    "implements":[
      {"@id":"urn:ngm:class:finality","label":"Finality"},
      {"@id":"urn:ngm:class:proof-of-stake","label":"Proof of Stake"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:validator","label":"Validator"},
      {"@id":"urn:ngm:class:staking","label":"Staking"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:slashing","label":"Slashing"},
      {"@id":"urn:ngm:class:validator-set","label":"Validator Set"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:blockchain-security","label":"Blockchain Security"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:ethereum","label":"Ethereum"},
      {"@id":"urn:ngm:class:pos-consensus","label":"Proof-of-Stake Consensus"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:consensus-mechanism","label":"Consensus Mechanism"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:byzantine-fault-tolerance","label":"Byzantine Fault Tolerance"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:finality","label":"Finality"},
      {"@id":"urn:ngm:class:ethereum","label":"Ethereum"},
      {"@id":"urn:ngm:class:slashing","label":"Slashing"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Casper FFG is a proof-of-stake [[Finality]] mechanism layered on a block-proposal chain via checkpoint voting.
  - It is a specific [[Finality Gadget]] and a component of the broader [[Consensus Mechanism]] family.
  - It requires staking [[Validator]] participants and enforces correctness through [[Slashing]].
  - It was designed for and deployed within [[Ethereum]]'s transition to [[Proof of Stake]].
- ### Overview
  - Casper FFG, the Friendly Finality Gadget, finalises checkpoints rather than every block, sitting atop a separate fork-choice rule.
  - Validators cast votes that justify a checkpoint and then finalise it once a supermajority links two consecutive justified checkpoints.
  - Reverting a finalised checkpoint would require an attacker controlling at least one third of total stake to be provably destroyed.
  - This delivers economic finality: dishonest validators that equivocate lose their deposits through slashing.
- ### Mechanisms
  - Checkpoint epochs: the chain is partitioned into epochs whose boundary blocks are checkpoints.
  - Two-phase voting: justification followed by finalisation across linked supermajority votes.
  - Stake-weighted thresholds: a two-thirds supermajority of staked value drives decisions.
  - Slashing conditions: penalties for double voting and surround votes that violate the protocol.
  - Accountable safety: violations are attributable to specific validators and their deposits.
- ### Applications
  - Providing economic finality for proof-of-stake blockchains such as Ethereum.
  - Strengthening the security guarantees of validator-driven consensus systems.
  - Discouraging equivocation through slashing-backed accountability.
  - Serving as a reference design for hybrid finality gadgets over existing chains.
- ### Relationships
  - implements:: [[Finality]]
  - implements:: [[Proof of Stake]]
  - requires:: [[Validator]]
  - requires:: [[Staking]]
  - uses:: [[Slashing]]
  - uses:: [[Validator Set]]
  - enables:: [[Blockchain Security]]
  - supports:: [[Ethereum]]
  - supports:: [[Proof-of-Stake Consensus]]
  - partOf:: [[Consensus Mechanism]]
  - contrastsWith:: [[Byzantine Fault Tolerance]]
  - relatedTo:: [[Finality]]
  - relatedTo:: [[Ethereum]]
  - relatedTo:: [[Slashing]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
