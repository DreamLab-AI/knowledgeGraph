public:: true

# Cryptoeconomics

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:cryptoeconomics", "@type":"Page", "title":"Cryptoeconomics", "vc:slug":"cryptoeconomics", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:cryptoeconomics",
  "@type":"Class",
  "label":"Cryptoeconomics",
  "definition":"Cryptoeconomics is the discipline that combines cryptography with economic incentives to design and secure decentralised systems whose participants are assumed to act in their own self-interest. It uses mechanism design and game theory to make honest behaviour the rational choice, so that protocols remain secure and live without a trusted central authority. The field underpins consensus mechanisms, token economies, and the incentive structures of blockchain networks.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:blockchain-economics","label":"Blockchain Economics"}],
  "relations":{
    "dependsOn":[{"@id":"urn:ngm:class:mechanism-design","label":"Mechanism Design"},{"@id":"urn:ngm:class:game-theory","label":"Game Theory"},{"@id":"urn:ngm:class:cryptography","label":"Cryptography"}],
    "bridgesTo":[{"@id":"urn:ngm:class:game-theory","label":"Game Theory"},{"@id":"urn:ngm:class:economic-security","label":"Economic Security"}],
    "uses":[{"@id":"urn:ngm:class:token-economics","label":"Token Economics"},{"@id":"urn:ngm:class:tokenomics","label":"Tokenomics"}],
    "enables":[{"@id":"urn:ngm:class:consensus-mechanism","label":"Consensus Mechanism"},{"@id":"urn:ngm:class:sybil-resistance","label":"Sybil Resistance"},{"@id":"urn:ngm:class:proof-of-stake","label":"Proof of Stake"}],
    "supports":[{"@id":"urn:ngm:class:decentralised-finance","label":"Decentralised Finance"},{"@id":"urn:ngm:class:blockchain-governance","label":"Blockchain Governance"}],
    "requires":[{"@id":"urn:ngm:class:mechanism-design","label":"Mechanism Design"}],
    "relatedTo":[{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"},{"@id":"urn:ngm:class:staking","label":"Staking"},{"@id":"urn:ngm:class:dao","label":"DAO"}],
    "partOf":[{"@id":"urn:ngm:class:blockchain","label":"Blockchain"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Cryptoeconomics]] fuses [[Cryptography]] with economic incentives to secure decentralised systems whose participants act in self-interest.
- It applies [[Mechanism Design]] and [[Game Theory]] to make honest behaviour the rational choice.
- The field underpins [[Consensus Mechanism]] design and [[Token Economics]] in blockchain networks.
- ### Overview
- Cryptoeconomics treats a decentralised protocol as a game in which anonymous, profit-seeking participants choose strategies. By aligning rewards and penalties with desirable behaviour, it makes following the protocol more profitable than attacking it, even when no central authority polices conduct.
- Cryptography provides the enforcement primitives, such as signatures, hashing, and commitment schemes, that make rules tamper-evident and identities accountable. Economic mechanisms then supply the motivation, using staking, slashing, block rewards, and fees to reward honest validation and punish deviation.
- The discipline gives protocol designers tools to reason about security in terms of cost-of-attack and economic guarantees rather than purely cryptographic hardness. It explains why proof-of-stake validators behave honestly, how Sybil resistance is bought with scarce resources, and how token economies sustain network participation.
- ### Mechanisms
- Incentive alignment: structuring rewards so the dominant strategy is honest participation.
- Penalty and slashing: imposing economic losses on provable misbehaviour to deter attacks.
- Sybil resistance: requiring scarce resources such as stake or work to gain influence.
- Cost-of-attack analysis: quantifying the economic price of subverting consensus.
- Token-based coordination: using tokens to fund security and reward useful contributions.
- ### Applications
- Securing [[Proof of Stake]] networks through [[Staking]] and slashing incentives.
- Designing [[Consensus Mechanism]] rules that achieve [[Sybil Resistance]].
- Structuring incentives for [[Decentralised Finance]] protocols and [[Smart Contract]] systems.
- Informing [[Blockchain Governance]] and [[DAO]] reward and voting design.
- ### Relationships
- dependsOn:: [[Mechanism Design]]
- dependsOn:: [[Game Theory]]
- dependsOn:: [[Cryptography]]
- bridgesTo:: [[Game Theory]]
- bridgesTo:: [[Economic Security]]
- uses:: [[Token Economics]]
- uses:: [[Tokenomics]]
- enables:: [[Consensus Mechanism]]
- enables:: [[Sybil Resistance]]
- enables:: [[Proof of Stake]]
- supports:: [[Decentralised Finance]]
- supports:: [[Blockchain Governance]]
- requires:: [[Mechanism Design]]
- relatedTo:: [[Smart Contract]]
- relatedTo:: [[Staking]]
- relatedTo:: [[DAO]]
- partOf:: [[Blockchain]]
- ### Provenance
- updated:: 2026-06-15
