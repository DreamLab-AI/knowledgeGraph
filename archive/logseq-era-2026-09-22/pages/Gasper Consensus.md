public:: true

# Gasper Consensus
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e01a31d6b074156639d822fbb6265ddd245d44a8aa318da97cd4058df63307e7",
  "@type": "Page",
  "vc:slug": "gasper-consensus",
  "title": "Gasper Consensus",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:hybrid-consensus",
      "vc:label": "Hybrid Consensus"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0554"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Gasper Consensus"
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
  "@id": "urn:ngm:class:gasper-consensus",
  "@type": "Class",
  "label": "Gasper Consensus",
  "definition": "Gasper Consensus is Ethereum's Proof-of-Stake consensus protocol, combining Casper FFG (Friendly Finality Gadget) as a finality mechanism with LMD GHOST (Latest Message Driven Greedy Heaviest Observed Subtree) as the fork choice rule. Validators stake ETH directly and attest to blocks in each epoch; Casper FFG provides economic finality by requiring two-thirds supermajority agreement, while LMD GHOST guides validators towards the heaviest chain, resolving short-lived forks without full finalisation delay.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    },
    {
      "@id": "urn:ngm:class:hybrid-consensus",
      "label": "Hybrid Consensus"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:fork-choice-rule", "label": "Fork Choice Rule"},
      {"@id": "urn:ngm:class:finality", "label": "Finality"},
      {"@id": "urn:ngm:class:validator-set", "label": "Validator Set"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"},
      {"@id": "urn:ngm:class:validator-node", "label": "Validator Node"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:finality", "label": "Finality"},
      {"@id": "urn:ngm:class:blockchain-scalability", "label": "Blockchain Scalability"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:consensus-algorithm", "label": "Consensus Algorithm"},
      {"@id": "urn:ngm:class:consensus-protocol", "label": "Consensus Protocol"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"},
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:gasper-consensus:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e01a31d6b074156639d822fbb6265ddd245d44a8aa318da97cd4058df63307e7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hybrid Consensus]]",
      "resolved": "urn:visionflow:owl:class:hybrid-consensus",
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
  Gasper Consensus is Ethereum's Proof-of-Stake consensus protocol, combining Casper FFG as a finality gadget with LMD GHOST as the fork choice rule. Validators stake ETH directly and attest to blocks each epoch; Casper FFG provides economic finality via two-thirds supermajority while LMD GHOST resolves short-lived forks by selecting the heaviest chain.

- ### Semantic Classification
  - owl-class:: blockchain:GasperConsensus
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Hybrid Consensus]], [[Protocol and Consensus]]
  - hasPart:: [[Fork Choice Rule]], [[Finality]], [[Validator Set]]
  - requires:: [[Proof of Stake]], [[Validator Node]], [[Consensus Mechanism]]
  - enables:: [[Finality]], [[Blockchain Scalability]]
  - uses:: [[Consensus Algorithm]], [[Consensus Protocol]]
  - relatedTo:: [[Blockchain]], [[Blockchain Protocol]], [[Distributed Ledger]]

### Definition

Gasper is the name given to the composite consensus specification underlying Ethereum's post-Merge Proof-of-Stake network. It was formally described in the 2020 paper "Combining GHOST and Casper" by Buterin, Neu, Tse, and Fox. The protocol operates across a slot-and-epoch structure: validators are assigned to slots within 32-slot epochs, and each validator submits a signed attestation specifying their view of the head of the chain and a checkpoint vote for Casper FFG.

### Relationships

Gasper combines two distinct algorithmic components that address different timing concerns. LMD GHOST (Fork Choice Rule) is a greedy algorithm selecting the chain head by finding the subtree with the greatest accumulated attestation weight, providing fast confirmation of newly produced blocks within seconds. Casper FFG (Finality) operates at epoch boundaries, achieving irreversible economic finality when two consecutive checkpoints each receive two-thirds of the total validator stake in attestations—a condition known as a "supermajority link."

### Content

Validator participation is central to Gasper's security model. Each Validator Node must post 32 ETH as collateral to a deposit contract, and the Validator Set is randomly shuffled each epoch to assign attestation committees and block proposers. Slashing conditions punish double voting and surround voting, destroying a portion of staked ETH and forcibly ejecting the offending validator. This economic penalty mechanism provides cryptoeconomic security: attacking finality requires burning at least one-third of total staked ETH.

Gasper's hybrid design creates a trade-off between latency and safety. LMD GHOST offers probabilistic confirmation in ~12 seconds (one slot), while Casper FFG finality takes ~12 minutes (two epochs) under normal network conditions. This separation allows applications requiring speed (e.g., DeFi) to operate on probabilistic confirmation while high-value operations can wait for finality. The design influences Blockchain Scalability by enabling sharding proposals (EIP-4844, full danksharding) to build atop the finality guarantees Gasper provides.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
