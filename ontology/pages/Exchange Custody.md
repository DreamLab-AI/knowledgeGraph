public:: true

# Exchange Custody

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:exchange-custody", "@type":"Page", "title":"Exchange Custody", "vc:slug":"exchange-custody", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:exchange-custody",
  "@type":"Class",
  "label":"Exchange Custody",
  "definition":"Exchange custody is the model in which a cryptocurrency exchange or platform holds and controls the private keys to users' digital assets on their behalf, rather than users self-custodying their own keys. The custodian operates wallets, manages security and reconciles internal ledgers crediting customers' balances. This arrangement simplifies user experience and trading but concentrates risk, since users rely on the exchange's solvency, controls and honesty rather than holding their keys directly.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:institutional-custody","label":"Institutional Custody"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:cryptocurrency-exchange","label":"Cryptocurrency Exchange"}],
    "uses":[{"@id":"urn:ngm:class:hot-wallet","label":"Hot Wallet"},{"@id":"urn:ngm:class:cold-storage","label":"Cold Storage"},{"@id":"urn:ngm:class:multi-signature-wallet","label":"Multi-Signature Wallet"}],
    "requires":[{"@id":"urn:ngm:class:key-management","label":"Key Management"}],
    "supports":[{"@id":"urn:ngm:class:cryptocurrency-exchange","label":"Cryptocurrency Exchange"}],
    "enables":[{"@id":"urn:ngm:class:digital-asset","label":"Digital Asset"}],
    "dependsOn":[{"@id":"urn:ngm:class:key-management","label":"Key Management"}],
    "implements":[{"@id":"urn:ngm:class:institutional-custody","label":"Institutional Custody"}],
    "contrastsWith":[{"@id":"urn:ngm:class:self-custody","label":"Self Custody"}],
    "bridgesTo":[{"@id":"urn:ngm:class:multi-signature-wallet","label":"Multi-Signature Wallet"}],
    "relatedTo":[{"@id":"urn:ngm:class:institutional-custody","label":"Institutional Custody"},{"@id":"urn:ngm:class:cryptocurrency-exchange","label":"Cryptocurrency Exchange"},{"@id":"urn:ngm:class:digital-asset","label":"Digital Asset"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Exchange custody is a [[Institutional Custody]] arrangement where a [[Cryptocurrency Exchange]] holds users' [[Digital Asset]] keys on their behalf.
- It relies on operational [[Key Management]] combining [[Hot Wallet]] liquidity with [[Cold Storage]] for the bulk of holdings.
- It stands in direct contrast to [[Self Custody]], where the user alone controls the private keys.
- ### Overview
- Under exchange custody the platform maintains an internal ledger crediting each customer a balance, while on-chain assets are pooled across exchange-controlled wallets. Withdrawals move assets from these wallets to user-supplied addresses.
- The model trades self-sovereignty for convenience: users avoid the burden of key management but inherit counterparty risk tied to the custodian's solvency, security and integrity.
- High-profile exchange failures have made the distinction between custodied and self-custodied holdings, and the phrase "not your keys, not your coins", central to the ecosystem's risk discourse.
- ### Mechanisms
- Segregation of hot wallets for daily liquidity from cold storage for reserves.
- Multi-signature and hardware-backed signing for high-value transfers.
- Internal accounting reconciled against on-chain balances and proof-of-reserves attestations.
- Withdrawal controls, allowlisting and fraud monitoring.
- ### Applications
- Centralised trading platforms holding customer balances.
- Institutional custodians offering qualified custody to funds and treasuries.
- On-ramp and off-ramp services bridging fiat and digital assets.
- ### Relationships
- partOf:: [[Cryptocurrency Exchange]]
- uses:: [[Hot Wallet]]
- uses:: [[Cold Storage]]
- uses:: [[Multi-Signature Wallet]]
- requires:: [[Key Management]]
- supports:: [[Cryptocurrency Exchange]]
- enables:: [[Digital Asset]]
- dependsOn:: [[Key Management]]
- implements:: [[Institutional Custody]]
- contrastsWith:: [[Self Custody]]
- bridgesTo:: [[Multi-Signature Wallet]]
- relatedTo:: [[Institutional Custody]]
- relatedTo:: [[Cryptocurrency Exchange]]
- relatedTo:: [[Digital Asset]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
