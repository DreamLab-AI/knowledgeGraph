public:: true

# Quorum
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:quorum",
  "@type": "Page",
  "vc:slug": "quorum",
  "title": "Quorum",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:quorum",
  "@type": "Class",
  "label": "Quorum",
  "definition": "Quorum refers to the minimum number or proportion of participants—nodes, voters, or validators—that must agree or be present for a decision, transaction, or consensus round to be considered valid in a distributed system or governance process. In blockchain contexts, quorum thresholds determine the minimum fraction of stake, tokens, or nodes required to reach consensus or pass a governance proposal. In distributed database and consensus algorithm contexts, quorum overlap guarantees are what ensure linearisability in systems like Paxos and Raft. In DAO governance, quorum requirements prevent low-participation attacks where a small minority can pass proposals without broader community engagement. Setting appropriate quorum thresholds balances liveness (ability to make decisions) against safety (resistance to minority capture).",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:consensus-algorithm", "label": "Consensus Algorithm"},
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"},
      {"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:on-chain-governance", "label": "On-chain Governance"},
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:voting-mechanism", "label": "Voting Mechanism"},
      {"@id": "urn:ngm:class:consensus-protocol", "label": "Consensus Protocol"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"},
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Quorum]] defines the minimum participation threshold—expressed as a count or fraction of nodes, stake, or token holders—required by a [[Consensus Mechanism]] or [[Voting Mechanism]] to produce a valid decision in [[Distributed System]] architectures and [[On-chain Governance]] processes.
- ### Relationships
  - Quorum is a foundational parameter of any [[Consensus Algorithm]], setting the overlap guarantee that prevents conflicting decisions across network partitions. In [[Byzantine Fault Tolerance]] systems, quorums must be sized to tolerate up to f Byzantine nodes in a 3f+1 total node set. In [[DAO Governance]] and [[On-chain Governance]], quorum thresholds guard against low-voter-participation attacks on [[Blockchain Governance]] proposals. [[Fault Tolerance]] properties of distributed systems are directly derived from quorum intersection properties. The [[Consensus Protocol]] and [[Voting Mechanism]] both parameterise quorum thresholds as their primary safety lever.
- ### Content
  - In classical distributed systems theory, quorum systems are collections of subsets of servers such that any two quorums intersect. This intersection property is the mathematical foundation that prevents split decisions: if any two decisions must be made by overlapping sets, no two contradictory decisions can both achieve quorum. Paxos, Raft, and Viewstamped Replication all derive their safety guarantees from majority quorums in a 2f+1 node ensemble, tolerating f crash failures.

  - Blockchain consensus mechanisms adapt quorum concepts to adversarial, open-membership settings. Tendermint and HotStuff use two-thirds-plus-one quorums (⅔n+1) to tolerate Byzantine faults, consistent with the theoretical minimum for BFT consensus. Proof-of-stake validators must collectively hold two-thirds of staked tokens to form a quorum for block finalisation. The Stellar Consensus Protocol (SCP) generalises quorums to federated Byzantine agreement, where each node defines its own quorum slices rather than relying on a global membership list.

  - Governance quorums serve a different purpose from consensus quorums: they prevent capture rather than ensure safety in the distributed systems sense. A DAO requiring 4% of token supply to constitute a valid proposal vote prevents a whale with 3% stake from unilaterally passing malicious proposals during low-participation periods. Quorum thresholds must be calibrated against observed voter turnout—a quorum that cannot realistically be met causes governance paralysis, while one too low enables minority capture. [[DAO Analytics]] tooling monitors quorum attainment across proposal histories to inform parameter adjustments.

  - Multi-signature wallet schemes implement quorum as an m-of-n threshold: m of n designated signers must approve a transaction. This is a practical quorum mechanism widely used for treasury management, upgrade key custody, and oracle operator coordination. Hardware security modules and distributed key generation protocols extend multi-sig quorums to threshold signature schemes where the signing key is never reconstructed in a single location, providing quorum-grade security without single-point-of-failure exposure.
