public:: true

# openzeppelin governor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7b80039802e0fd3b0924cf204ef08cef0146bfdf8064bbd7c7ec07f59ea45e31",
  "@type": "Page",
  "vc:slug": "open-zeppelin-governor",
  "title": "openzeppelin governor",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-zeppelin-governor",
  "@type": "Class",
  "label": "OpenZeppelin Governor",
  "definition": "OpenZeppelin Governor is a modular, security-audited Solidity smart-contract framework that provides the core infrastructure for deploying on-chain governance systems on EVM-compatible blockchains. It implements a proposal lifecycle—proposal creation, voting delay, voting period, quorum check, and timelock-guarded execution—with pluggable modules for vote counting strategies (simple, bravo, fractional), token-based voting power sources (ERC-20 with EIP-5805 checkpointing or ERC-721), and timelock controller integration. Governor is used as the governance layer by major DeFi protocols and DAOs to manage protocol parameter changes, treasury disbursements, and contract upgrades.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Blockchain Governance and Regulation"
    }
  ],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:on-chain-governance", "label": "On-chain Governance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"},
      {"@id": "urn:ngm:class:voting-mechanism", "label": "Voting Mechanism"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - OpenZeppelin Governor is a modular, security-audited Solidity smart-contract framework that provides the core infrastructure for deploying on-chain governance systems on EVM-compatible blockchains. It implements a proposal lifecycle—proposal creation, voting delay, voting period, quorum check, and timelock-guarded execution—with pluggable modules for vote counting strategies (simple, bravo, fractional), token-based voting power sources (ERC-20 with EIP-5805 checkpointing or ERC-721), and timelock controller integration. Governor is used as the governance layer by major DeFi protocols and DAOs to manage protocol parameter changes, treasury disbursements, and contract upgrades.

- ### Semantic Classification
  - owl-class:: open-zeppelin-governor:OpenZeppelin Governor
  - owl-role:: Concept

- ### Relationships
  - implements [[On-chain Governance]]
  - uses [[Smart Contract]]
  - uses [[Governance Token]]
  - enables [[DAO Governance]]
  - enables [[Voting Mechanism]]

- ### Content
  - OpenZeppelin Governor is the successor to the Compound Governance Bravo pattern and is maintained by the OpenZeppelin security team as part of the OpenZeppelin Contracts library. Its architecture is built around a core `Governor.sol` abstract contract that delegates specifics to extension contracts: `GovernorVotes` wires up an IVotes token (ERC-20Votes or ERC-721Votes) for voting power retrieval, `GovernorCountingSimple` implements majority vote counting, and `GovernorTimelockControl` integrates a TimelockController that enforces a mandatory waiting period between proposal passing and execution.
  - The proposal lifecycle proceeds as follows: any address holding sufficient voting power above a proposalThreshold may call `propose()`, emitting a proposal ID and start block. During the voting delay period (configurable in blocks or seconds), token holders may delegate votes but cannot yet cast them. During the voting period, token holders call `castVote()` with support values (0=against, 1=for, 2=abstain). After the voting period, if quorum and majority thresholds are met, the proposal enters a queue in the TimelockController; after the timelock delay it may be executed by any caller.
  - Governor's modular design allows communities to customise quorum fractions, voting periods, proposalThresholds, and voting power sources without modifying the core contract. This has made it the de facto standard for DAO governance in the Ethereum ecosystem, adopted by protocols including Uniswap, Compound, ENS, and Gitcoin. The framework is compatible with upgradeable proxy patterns (UUPS, TransparentProxy) enabling post-deployment governance parameter adjustments.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
