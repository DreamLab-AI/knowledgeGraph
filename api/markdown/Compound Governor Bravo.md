public:: true
alias:: Compound GovernorBravo

# Compound Governor Bravo
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:compound-governor-bravo",
  "@type": "Page",
  "vc:slug": "compound-governor-bravo",
  "title": "Compound Governor Bravo",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:compound-governor-bravo",
  "@type": "Class",
  "label": "Compound Governor Bravo",
  "definition": "Compound Governor Bravo is the second-generation on-chain governance contract deployed by the Compound protocol, superseding the original Governor Alpha with enhanced parameter configurability and an abstraction layer that separates governance logic from the Timelock executor. It enables COMP token holders to create, vote on, and execute governance proposals that modify protocol parameters such as interest rate models, collateral factors, and supported assets. Governor Bravo introduced the ability to update governance parameters without a full contract migration, reducing the friction of iterative governance improvements. The contract has become an influential reference implementation, widely forked by other DeFi protocols seeking battle-tested on-chain governance infrastructure.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:on-chain-governance", "label": "On-chain Governance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:compound", "label": "Compound"},
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:token-weighted-voting", "label": "Token-Weighted Voting"},
      {"@id": "urn:ngm:class:proposal-system", "label": "Proposal System"},
      {"@id": "urn:ngm:class:voting-mechanism", "label": "Voting Mechanism"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:dao", "label": "DAO"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Compound Governor Bravo]] is the configurable [[On-chain Governance]] smart contract of the [[Compound]] protocol, allowing [[Governance Token]] holders to submit and vote on [[Proposal System]] items that execute protocol changes through a Timelock, establishing a reference architecture for [[DAO Governance]] in [[Decentralised Finance]].
- ### Relationships
  - Governor Bravo is tightly coupled to the [[Compound]] lending protocol and uses [[Token-Weighted Voting]] via the COMP [[Governance Token]] to determine proposal outcomes. It implements a [[Voting Mechanism]] with configurable quorum, proposal threshold, and voting delay parameters, making it more flexible than its predecessor. The contract architecture has influenced [[DAO Governance]] design across [[Decentralised Finance]] and is a canonical example of [[Blockchain Governance]] applied to protocol parameter management. The [[Proposal System]] it embodies supports iterative [[DAO]] operations without requiring contract redeployment.
- ### Content
  - Governor Bravo introduces a separation between governance voting logic and the Timelock executor, an architectural improvement over Governor Alpha where both were tightly coupled. Governance proposals specify calldata to be executed by the Timelock after a delay period, ensuring token holders have time to exit positions before contentious changes take effect. The configurable voting delay, voting period, proposal threshold, and quorum allow the community to tune governance parameters through the same proposal mechanism they govern.

  - The contract processes proposals through four states: Pending (voting delay not elapsed), Active (open for voting), Succeeded or Defeated (based on vote tally and quorum), and Queued or Executed via the Timelock. COMP holders can delegate their voting power to any address, enabling representative governance structures and voter coalitions. The delegation mechanism is critical in practice because most COMP holders are passive and delegate to active governance participants.

  - Governor Bravo's influence extends well beyond Compound itself. Protocols including Uniswap, Aave (via AIP extensions), and dozens of other [[Decentralised Finance]] projects have forked or closely adapted its architecture. OpenZeppelin's Governor contract in their contracts library provides a modular version inspired by Governor Bravo, substantially lowering the barrier to deploying robust [[On-chain Governance]] for new protocols.

  - Governance attack vectors are a known concern: whale accumulation of COMP can enable unilateral passage of malicious proposals if quorum thresholds are insufficiently high. [[DAO Analytics]] tools track delegation patterns and proposal histories to surface governance health metrics. The Timelock delay is a critical security parameter—too short and it offers insufficient exit time; too long and it impedes responsive protocol management in fast-moving [[Decentralised Finance]] markets.
