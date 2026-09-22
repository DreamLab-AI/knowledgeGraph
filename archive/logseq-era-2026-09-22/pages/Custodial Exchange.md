public:: true

# Custodial Exchange

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:custodial-exchange", "@type":"Page", "title":"Custodial Exchange", "vc:slug":"custodial-exchange", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:custodial-exchange",
  "@type":"Class",
  "label":"Custodial Exchange",
  "definition":"A custodial exchange is a cryptocurrency trading venue that holds users' assets and private keys on their behalf, settling trades on its internal ledger rather than on-chain. Users gain convenience, liquidity and familiar account-based access, but cede control of their keys and accept counterparty risk in the operator. It is the centralised counterpart to non-custodial and decentralised trading models.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:cryptocurrency-exchange","label":"Cryptocurrency Exchange"}],
  "relations":{
    "contrastsWith":[
      {"@id":"urn:ngm:class:decentralized-exchange","label":"Decentralized Exchange"},
      {"@id":"urn:ngm:class:self-custody","label":"Self-Custody"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:know-your-customer","label":"Know Your Customer"},
      {"@id":"urn:ngm:class:custodial-wallet","label":"Custodial Wallet"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:custody","label":"Custody"},
      {"@id":"urn:ngm:class:cold-storage","label":"Cold Storage"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:liquidity","label":"Liquidity"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:proof-of-reserve","label":"Proof of Reserve"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:centralized-exchange","label":"Centralized Exchange"},
      {"@id":"urn:ngm:class:qualified-custodian","label":"Qualified Custodian"},
      {"@id":"urn:ngm:class:digital-asset-custody","label":"Digital Asset Custody"},
      {"@id":"urn:ngm:class:wallet","label":"Wallet"}
    ]
  },
  "sameAs":[
    {"@id":"urn:ngm:class:centralized-exchange","label":"Centralized Exchange"}
  ],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A custodial exchange is a [[Cryptocurrency Exchange]] that holds users' keys and assets on their behalf. It contrasts sharply with [[Self-Custody]] and the [[Decentralized Exchange]] model, and typically enforces [[Know Your Customer]] checks while relying on [[Custodial Wallet]] infrastructure.
- ### Overview
  - On a custodial exchange, deposits move into wallets controlled by the operator, and trades are matched and settled on the platform's internal ledger. Only deposits and withdrawals touch the blockchain.
  - This model offers high performance, deep liquidity and a conventional account experience, which has made custodial exchanges the dominant on-ramp for most users.
  - The trade-off is counterparty risk: users trust the operator to remain solvent, secure and honest. Failures, hacks and mismanagement have repeatedly demonstrated this risk, motivating proof-of-reserve and regulatory custody requirements.
- ### Key aspects
  - Operator-held keys: the exchange, not the user, controls the private keys.
  - Internal settlement: trades clear on the platform ledger, not on-chain.
  - Liquidity and speed: order books concentrate liquidity for fast matching.
  - Compliance surface: KYC/AML obligations apply because the operator is an intermediary.
  - Counterparty risk: solvency and security of the operator are central concerns.
- ### Mechanisms
  - Pooled hot and cold wallets segregating operational and reserve funds.
  - Internal ledger accounting that tracks user balances off-chain.
  - Proof-of-reserve attestations to evidence backing of customer assets.
  - Withdrawal controls, limits and KYC gating for regulatory compliance.
- ### Applications
  - Retail and institutional spot and derivatives trading.
  - Fiat on- and off-ramps for cryptocurrency.
  - Custody for users unwilling to manage their own keys.
- ### Relationships
  - contrastsWith:: [[Decentralized Exchange]]
  - contrastsWith:: [[Self-Custody]]
  - requires:: [[Know Your Customer]]
  - requires:: [[Custodial Wallet]]
  - uses:: [[Custody]]
  - uses:: [[Cold Storage]]
  - supports:: [[Liquidity]]
  - implements:: [[Proof of Reserve]]
  - dependsOn:: [[Regulatory Compliance]]
  - relatedTo:: [[Centralized Exchange]]
  - relatedTo:: [[Qualified Custodian]]
  - relatedTo:: [[Digital Asset Custody]]
  - relatedTo:: [[Wallet]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
