public:: true

# Gitcoin Passport
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:gitcoin-passport",
  "@type": "Page",
  "vc:slug": "gitcoin-passport",
  "title": "Gitcoin Passport",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gitcoin-passport",
  "@type": "Class",
  "label": "Gitcoin Passport",
  "definition": "Gitcoin Passport is a decentralised identity and sybil-resistance protocol that aggregates verifiable credentials from diverse identity providers—including Web2 platforms, biometric services, and on-chain activity records—into a composable score that attests to the humanness and trustworthiness of a wallet address. It is used primarily to protect quadratic funding rounds and other public goods allocation mechanisms from manipulation by coordinated sybil attacks. The passport stores credentials using the Ceramic Network and Decentralised Identifier standards, enabling portability across Web3 applications without centralising personal data. Its stamp-based architecture allows flexible weighting of identity evidence according to the risk tolerance of each application.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:decentralized-identity-did", "label": "Decentralized Identity (DID)"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:sybil-resistance", "label": "Sybil Resistance"},
      {"@id": "urn:ngm:class:sybil-attack", "label": "Sybil Attack"},
      {"@id": "urn:ngm:class:identity-verification", "label": "Identity Verification"},
      {"@id": "urn:ngm:class:verifiable-credential-vc", "label": "Verifiable Credential (VC)"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:quadratic-funding", "label": "Quadratic Funding"},
      {"@id": "urn:ngm:class:public-goods-funding", "label": "Public Goods Funding"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:gitcoin", "label": "Gitcoin"},
      {"@id": "urn:ngm:class:did-document", "label": "DID Document"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Gitcoin Passport is a [[Sybil Resistance]] protocol that aggregates [[Verifiable Credential (VC)]] stamps from multiple identity providers into a composable trust score, primarily protecting [[Quadratic Funding]] rounds from manipulation by bot or duplicate accounts.
- ### Relationships
  - The passport is a key component of the [[Gitcoin]] ecosystem and combats [[Sybil Attack]] threats inherent in open participation systems. It issues and stores credentials using [[DID Document]] standards, enabling portable trust without centralised data custody. Its scores directly gate access to [[Quadratic Funding]] and broader [[Public Goods Funding]] mechanisms, and the credential architecture builds on [[Verifiable Credential (VC)]] and [[Decentralized Identity (DID)]] infrastructure, with verification attested via [[Identity Verification]] integrations from diverse providers.
- ### Content
  - Gitcoin Passport emerged from [[Gitcoin]]'s experience running quadratic funding rounds that proved highly vulnerable to Sybil attacks, where a single actor creates multiple wallet addresses to multiply their influence on fund allocation. The passport addresses this by requiring each participant to accumulate sufficient verifiable evidence of unique personhood before their vote is counted at full weight.

  - The stamp model is deliberately pluralistic: users can connect accounts from social platforms such as GitHub, Twitter, and Google; obtain biometric attestations from Proof of Humanity or BrightID; demonstrate on-chain history through ENS ownership or Ethereum transaction age; or receive attestations from professional credential services. Each stamp carries a configurable weight, and applications define their own scoring threshold based on the value at risk and their tolerance for false positives versus false negatives.

  - The underlying data architecture uses Decentralised Identifiers and Verifiable Credentials stored on the Ceramic Network, a decentralised data stream protocol that keeps credential data under user control without requiring a central database. This design means the passport is non-custodial: Gitcoin never stores personal data, and users can delete or revoke credentials at any time.

  - Beyond Gitcoin's own funding rounds, the passport has been adopted by other Web3 protocols as a shared sybil-resistance primitive, including decentralised governance platforms, token airdrops, and access-gated community tools. This composability—any application can query a passport score via a simple API—positions it as an emerging public infrastructure layer for Web3 trust.

  - The passport faces ongoing challenges around stamp acquisition friction, geographic bias in available identity providers, and the privacy implications of aggregating cross-platform identity signals. Research into privacy-preserving scoring approaches—including zero-knowledge proofs over credential sets—represents an active development direction to address the tension between sybil resistance and individual privacy.
