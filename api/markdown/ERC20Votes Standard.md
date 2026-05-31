public:: true

# ERC20Votes Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:erc20-votes-standard",
  "@type": "Page",
  "vc:slug": "erc20-votes-standard",
  "title": "ERC20Votes Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:erc20-votes-standard",
  "@type": "Class",
  "label": "ERC20Votes Standard",
  "definition": "ERC20Votes is an extension of the ERC-20 fungible-token standard that adds on-chain governance capabilities by tracking historical voting power through checkpointed balances and supporting delegation of votes. It records a snapshot of each account's balance at every block where it changes, so a governance contract can query voting weight at a specific past block, preventing double-voting and flash-loan manipulation. Implemented in widely audited libraries, it is the dominant pattern for token-based voting in decentralised autonomous organisations.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:erc20-standard", "label": "ERC-20 Standard"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:dao", "label": "DAO"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:erc-20-votes", "label": "ERC-20 Votes"},
      {"@id": "urn:ngm:class:ethereum", "label": "Ethereum"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - ERC20Votes extends the ERC-20 token standard with checkpointed historical balances and vote delegation, letting governance contracts query an account's voting power at a past block to enable secure on-chain voting.

- ### Relationships
  - ERC20Votes Standard is a subclass of the [[ERC-20 Standard]] and uses [[Smart Contract]] logic to checkpoint balances. It enables [[DAO]] governance by providing manipulation-resistant voting power, and relates to [[ERC-20 Votes]] tokens and the [[Ethereum]] ecosystem in which the pattern is standardised.

- ### Content
  - On-chain governance needs a trustworthy measure of voting power, and the naive approach — counting an account's current token balance at vote time — is dangerously exploitable. An attacker could borrow a large balance via a flash loan, cast a vote, and repay within the same transaction, or transfer the same tokens between accounts to vote multiple times. ERC20Votes closes these vectors by anchoring voting power to historical state rather than the live balance.

  - The mechanism is checkpointing. Every time an account's balance or delegation changes, the contract records a checkpoint pairing the block number with the new value, building an append-only history of voting weight over time. A governance contract that opens a proposal records the proposal's snapshot block, and all votes are weighed by each account's checkpointed balance at that block — fixed in the past and therefore immune to manipulation occurring after voting begins.

  - Delegation is the second pillar. ERC20Votes separates token ownership from voting power: holders can delegate their voting weight to themselves or to a representative without transferring the tokens. This supports both direct participation and representative models where passive holders delegate to active, accountable delegates, and it means voting power only counts once an account has explicitly delegated, an intentional design choice that the implementing libraries document carefully.

  - Because correct, secure implementation is subtle, the pattern is provided as audited, reusable components in libraries such as OpenZeppelin's, and it integrates directly with companion governor contracts that manage proposals, voting periods, quorums, and execution. This standardisation has made ERC20Votes the default substrate for DAO governance on Ethereum and compatible chains, underpinning the treasuries and protocol-parameter decisions of many of the largest decentralised organisations.
