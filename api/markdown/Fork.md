public:: true

# Fork

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:fork",
  "@type": "Page",
  "title": "Fork",
  "vc:slug": "fork",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fork",
  "@type": "Class",
  "label": "Fork",
  "definition": "A Fork in the context of blockchain and distributed systems is a divergence in the protocol rules or chain history that results in two or more distinct execution paths from a common ancestor state. Hard forks introduce backward-incompatible rule changes requiring all participants to upgrade, potentially creating a permanently divergent chain. Soft forks introduce backward-compatible tightening of rules. Forks can be planned governance events (protocol upgrades) or unintended consequences of network partitions or competing miner/validator behaviour.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:governance", "label": "Governance"},
      {"@id": "urn:ngm:class:blockchain-data", "label": "Blockchain Data"},
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:merge", "label": "Merge"},
      {"@id": "urn:ngm:class:backward-compatibility", "label": "Backward Compatibility"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:hard-fork", "label": "Hard Fork"},
      {"@id": "urn:ngm:class:soft-fork", "label": "Soft Fork"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:social-consensus", "label": "Social Consensus"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:protocol-upgrade", "label": "Protocol Upgrade"},
      {"@id": "urn:ngm:class:network-partition", "label": "Network Partition"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"}
    ],
    "impacts": [
      {"@id": "urn:ngm:class:tokenisation", "label": "Tokenisation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-hash", "label": "Cryptographic Hash"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Fork]] is a divergence in a [[Blockchain]] or [[Distributed Systems]] protocol where two or more valid but incompatible execution paths emerge from the same prior state.
  - [[Hard Fork]] events require all nodes to upgrade to continue on the canonical chain; nodes that do not upgrade follow the old rules on a divergent chain.
  - [[Soft Fork]] events tighten validation rules in a backward-compatible manner, so non-upgraded nodes still follow the longest chain.

- ### Overview
  - Forks are a fundamental governance mechanism in permissionless blockchains: when stakeholder groups disagree on protocol direction, they can fork rather than concede.
  - Notable hard forks include Ethereum/Ethereum Classic (2016) after The DAO hack reversal, and Bitcoin/Bitcoin Cash (2017) over block size.
  - In practice, soft forks are safer for network cohesion; hard forks carry the risk of community and asset fragmentation.

- ### Key Aspects
  - **Hard Fork**: Backward-incompatible; requires network-wide upgrade; may produce two live chains.
  - **Soft Fork**: Backward-compatible tightening; only miners/validators need upgrade.
  - **Accidental Fork**: Temporary divergence due to simultaneous valid block production; resolved by longest-chain rule.
  - **Contentious vs coordinated**: Social [[Governance]] determines whether a fork is accepted by the community.

- ### Mechanisms
  - Nodes evaluate the canonical chain according to the heaviest or longest chain rule under their local protocol version.
  - Replay protection mechanisms prevent transactions on one fork from being valid on another.
  - [[Cryptographic Hash]] linkage ensures forks can be traced to their common ancestor block.

- ### Applications
  - Protocol upgrades (EIP activations on Ethereum, BIP activations on Bitcoin).
  - Recovery from catastrophic smart contract exploits.
  - Creation of alternative blockchain networks with modified parameters.

- ### Relationships
  - relatedTo:: [[Consensus Mechanism]]
  - relatedTo:: [[Governance]]
  - relatedTo:: [[Blockchain Data]]
  - relatedTo:: [[Distributed Ledger]]
  - contrastsWith:: [[Backward Compatibility]]
  - hasPart:: [[Hard Fork]]
  - hasPart:: [[Soft Fork]]
  - requires:: [[Social Consensus]]
  - enables:: [[Protocol Upgrade]]
  - dependsOn:: [[Peer-to-Peer Network]]
  - bridgesTo:: [[Distributed Systems]]
  - uses:: [[Cryptographic Hash]]

- ### Provenance
  - updated:: 2026-06-15
