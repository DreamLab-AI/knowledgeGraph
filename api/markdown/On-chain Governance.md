public:: true

# on-chain governance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:88d4b18dd735b70a76b50b496be3e06a667a229f22ee32660f7bed5727816a88",
  "@type": "Page",
  "vc:slug": "on-chain-governance",
  "title": "on-chain governance",
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
  "@id": "urn:ngm:class:on-chain-governance",
  "@type": "Class",
  "label": "On-chain Governance",
  "definition": "On-chain governance is a blockchain coordination model in which protocol upgrade proposals, parameter changes, and treasury spending decisions are formally submitted, deliberated, voted on by token holders, and automatically enacted through the execution of smart contracts recorded on the distributed ledger. This approach makes governance decisions transparent, censorship-resistant, and auditable, since all votes and execution outcomes are immutable on-chain records. It contrasts with off-chain governance, where decisions are reached through social consensus (forums, developer meetings) and implemented by core developers with no on-chain enforcement.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Blockchain Governance and Regulation"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"},
      {"@id": "urn:ngm:class:voting-mechanism", "label": "Voting Mechanism"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:open-zeppelin-governor", "label": "OpenZeppelin Governor"},
      {"@id": "urn:ngm:class:proposal-system", "label": "Proposal System"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - On-chain governance is a blockchain coordination model in which protocol upgrade proposals, parameter changes, and treasury spending decisions are formally submitted, deliberated, voted on by token holders, and automatically enacted through the execution of smart contracts recorded on the distributed ledger. This approach makes governance decisions transparent, censorship-resistant, and auditable, since all votes and execution outcomes are immutable on-chain records. It contrasts with off-chain governance, where decisions are reached through social consensus (forums, developer meetings) and implemented by core developers with no on-chain enforcement.

- ### Semantic Classification
  - owl-class:: on-chain-governance:On-chain Governance
  - owl-role:: Concept

- ### Relationships
  - uses [[Smart Contract]]
  - uses [[Governance Token]]
  - enables [[DAO Governance]]
  - enables [[Voting Mechanism]]
  - relatedTo [[OpenZeppelin Governor]]
  - relatedTo [[Proposal System]]

- ### Content
  - On-chain governance systems typically follow a proposal lifecycle: an eligible address (often requiring a minimum token balance or delegated voting power) submits a governance proposal specifying calldata for one or more target contracts. After a voting delay period (which allows token holders to adjust delegations before the snapshot), a voting period opens during which governance token holders—or their delegates—cast on-chain votes. Proposals that reach a quorum and a majority threshold proceed to a timelock queue; after a mandatory delay (providing an exit window for dissenting parties), the proposal is executed autonomously by the smart contract.
  - Voting power in most on-chain governance systems is proportional to governance token holdings, with delegation mechanisms allowing passive holders to assign their voting weight to active participants (delegates). Vote counting variants include simple majority, supermajority, conviction voting (where voting power accrues over time the longer a voter supports a proposal), and quadratic voting (where the cost of additional votes grows quadratically, reducing whale influence). OpenZeppelin Governor is the dominant framework for deploying on-chain governance on EVM chains, used by Uniswap, Compound, and Gitcoin.
  - On-chain governance faces the plutocracy problem: token-weighted voting concentrates power in large holders (whales), potentially allowing minority interests to capture protocol direction. Mechanisms such as vote delegation, time-locked execution, and guardian multisigs mitigate governance attacks. Layer 1 blockchains including Tezos, Cosmos, and Polkadot implement on-chain governance at the protocol level, enabling validator-voted upgrades without hard forks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
