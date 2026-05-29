public:: true

# liquid democracy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0a49793e1c81370afdf3fe61c617286150d37fc60d4dfa6dc2e54984eae6a26d",
  "@type": "Page",
  "vc:slug": "liquid-democracy",
  "title": "liquid democracy",
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
  "@id": "urn:ngm:class:liquid-democracy",
  "@type": "Class",
  "label": "Liquid Democracy",
  "definition": "Liquid democracy is a hybrid governance model that combines direct and representative democracy by allowing participants to vote on proposals themselves or transitively delegate their voting power to a trusted proxy, who may further re-delegate to another delegate, forming an arbitrarily deep delegation chain. Delegations are revocable at any time, allowing voters to reclaim their votes before a proposal closes. In blockchain governance contexts, liquid democracy is implemented via governance token delegation mechanisms, enabling token holders to assign their on-chain voting weight to domain experts while retaining the right to override delegated votes on individual proposals.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Blockchain Governance and Regulation"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"},
      {"@id": "urn:ngm:class:on-chain-governance", "label": "On-chain Governance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"},
      {"@id": "urn:ngm:class:voting-mechanism", "label": "Voting Mechanism"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:quadratic-voting", "label": "Quadratic Voting"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Liquid democracy is a hybrid governance model that combines direct and representative democracy by allowing participants to vote on proposals themselves or transitively delegate their voting power to a trusted proxy, who may further re-delegate to another delegate, forming an arbitrarily deep delegation chain. Delegations are revocable at any time, allowing voters to reclaim their votes before a proposal closes. In blockchain governance contexts, liquid democracy is implemented via governance token delegation mechanisms, enabling token holders to assign their on-chain voting weight to domain experts while retaining the right to override delegated votes on individual proposals.

- ### Semantic Classification
  - owl-class:: liquid-democracy:Liquid Democracy
  - owl-role:: Concept

- ### Relationships
  - enables [[DAO Governance]]
  - enables [[On-chain Governance]]
  - uses [[Governance Token]]
  - uses [[Voting Mechanism]]
  - contrastsWith [[Quadratic Voting]]

- ### Content
  - Liquid democracy was theorised as a political mechanism in the early 2000s and has found its most active implementation in blockchain governance systems, where smart contracts can enforce delegation rules, track voting weight, and compute outcomes transparently and without a central authority. The canonical on-chain implementation assigns each governance token a delegation slot: the holder either votes directly with their balance, or calls a delegate() function specifying a delegate address, after which that address votes with the combined weight of all its delegators.
  - The Compound protocol pioneered ERC-20-compatible governance delegation via a Votes extension (later standardised as ERC-20Votes in OpenZeppelin), which allows token balances to be delegated across blocks with historical checkpointing via block number, enabling governance proposals to snapshot vote weights at a specific block to prevent double-spending of delegated votes. Uniswap, ENS, Gitcoin, and Arbitrum use similar mechanisms. The ENS DAO explicitly models liquid delegation as a feature: small holders delegate to domain-expert community members rather than leave their tokens uninvolved in governance.
  - Key design tensions in liquid democracy include delegation concentration (popular delegates accumulate outsized influence, mirroring the plutocracy problem in token-weighted voting), delegation inertia (holders forget to revoke stale delegations), and Sybil vulnerability (creating many accounts to receive delegated weight). Quadratic voting addresses wealth concentration but not delegation; conviction voting provides an alternative time-weighted mechanism. Academic work on liquid democracy in political science, most notably by Blum and Zuber, provides formal analyses of delegation graph stability and cycle prevention.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
