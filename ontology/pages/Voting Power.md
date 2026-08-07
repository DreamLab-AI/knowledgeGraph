public:: true

# Voting Power
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4c3f175e6782cb73c6682c03a7c422143c8854be9c7b0906f1442ecdcc283545",
  "@type": "Page",
  "vc:slug": "voting-power",
  "title": "Voting Power",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:governance", "vc:label": "Governance"},
    {"@id": "urn:visionflow:linked:governance-token", "vc:label": "Governance Token"},
    {"@id": "urn:visionflow:linked:on-chain-governance", "vc:label": "On-chain Governance"},
    {"@id": "urn:visionflow:linked:snapshot-governance", "vc:label": "Snapshot Governance"},
    {"@id": "urn:visionflow:linked:quorum", "vc:label": "Quorum"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:voting-power",
  "@type": "Class",
  "label": "Voting Power",
  "definition": "Voting power is the quantified influence a participant can exert over a collective decision, expressed as the weight their ballot carries relative to all eligible ballots. In token-based governance systems it is typically proportional to the number of governance tokens held, delegated, or staked at a given snapshot block, though alternative schemes such as quadratic voting, reputation weighting, and one-person-one-vote deliberately decouple influence from raw holdings to resist plutocratic capture.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:governance",
    "label": "Governance"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:token", "label": "Token"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:on-chain-governance", "label": "On-chain Governance"},
      {"@id": "urn:ngm:class:snapshot-governance", "label": "Snapshot Governance"},
      {"@id": "urn:ngm:class:quorum", "label": "Quorum"},
      {"@id": "urn:ngm:class:dao", "label": "DAO"}
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "Voting power is the quantified influence a participant can exert over a collective decision, expressed as the weight their ballot carries relative to all eligible ballots. In token-based governance systems it is typically proportional to the number of governance tokens held, delegated, or staked at a given snapshot block, though alternative schemes such as quadratic voting, reputation weighting, and one-person-one-vote deliberately decouple influence from raw holdings to resist plutocratic capture."

- ### Semantic Classification
  - owl-class:: governance:VotingPower
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Governance]]
  - part-of:: [[Governance Token]]
  - related-to:: [[On-chain Governance]]
  - related-to:: [[Snapshot Governance]]

- ### Content

  ## Definition

  **Voting power** measures how much weight a participant's ballot carries in a collective decision. In decentralised governance it is the central unit of account: proposals in a [[DAO]] pass or fail according to the aggregate voting power cast for each option, and thresholds such as [[Quorum]] are defined over total voting power rather than the number of voters. The concept therefore sits at the join between token economics and political design — it converts an asset position into decision-making authority.

  The dominant model is token-weighted voting, where one governance token confers one vote. Because tokens are transferable, this makes voting power a market-priced commodity: it can be bought, borrowed, or delegated. [[Snapshot Governance]] systems record balances at a specific block height so that voting power cannot be inflated mid-vote by flash-loaned tokens, while [[On-chain Governance]] frameworks such as Compound's Governor contracts read delegated balances directly from the token contract at proposal creation.

  Token weighting concentrates influence in large holders, so a rich design space of correctives has emerged. Quadratic voting prices the *n*-th vote at *n²* credits, flattening whale dominance; vote-escrowed models (veTokens) weight ballots by both stake and lock-up duration, aligning influence with long-term commitment; delegation lets passive holders route their power to active stewards; and reputation-based systems allocate non-transferable weight earned through contribution. Each scheme trades off sybil resistance, capital efficiency, and egalitarian legitimacy differently.

  ## Current Landscape

  Empirical studies of major DAOs consistently find heavy concentration: in many protocols fewer than a dozen addresses can decide most votes, and average turnout of eligible voting power remains in single-digit percentages. This has pushed the ecosystem towards delegation programmes with compensated professional delegates, quorum tuning, and hybrid models where token-weighted signalling is checked by elected councils or security multisigs. Vote markets and governance attacks — accumulating cheap voting power to pass a self-serving proposal — remain the core threat model, making the measurement, snapshotting, and auditability of voting power a live engineering concern rather than a settled convention.
