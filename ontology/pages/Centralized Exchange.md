public:: true

# Centralized Exchange

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:centralized-exchange", "@type":"Page", "title":"Centralized Exchange", "vc:slug":"centralized-exchange", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:centralized-exchange",
  "@type":"Class",
  "label":"Centralized Exchange",
  "definition":"A centralized exchange (CEX) is a digital-asset trading venue operated by a single company that custodies user funds, matches orders through an internal order book, and acts as an intermediary for every trade. Users deposit assets into accounts controlled by the operator, who maintains liquidity, settlement, and the matching engine off-chain. CEXs offer high throughput and familiar interfaces but require trust in the operator and typically enforce identity-verification and anti-money-laundering controls.",
  "domain":"blockchain",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:blockchain","label":"Blockchain"}],
  "relations":{
    "contrastsWith":[{"@id":"urn:ngm:class:decentralized-exchange","label":"Decentralized Exchange"},{"@id":"urn:ngm:class:self-custody","label":"Self-Custody"}],
    "requires":[{"@id":"urn:ngm:class:order-book","label":"Order Book"},{"@id":"urn:ngm:class:custody","label":"Custody"},{"@id":"urn:ngm:class:know-your-customer","label":"Know Your Customer"},{"@id":"urn:ngm:class:liquidity","label":"Liquidity"}],
    "uses":[{"@id":"urn:ngm:class:custodial-wallet","label":"Custodial Wallet"},{"@id":"urn:ngm:class:aml","label":"AML"}],
    "supports":[{"@id":"urn:ngm:class:stablecoin","label":"Stablecoin"},{"@id":"urn:ngm:class:liquidity","label":"Liquidity"}],
    "relatedTo":[{"@id":"urn:ngm:class:binance","label":"Binance"},{"@id":"urn:ngm:class:coinbase","label":"Coinbase"},{"@id":"urn:ngm:class:decentralized-finance","label":"Decentralized Finance"}],
    "dependsOn":[{"@id":"urn:ngm:class:custody","label":"Custody"}],
    "bridgesTo":[{"@id":"urn:ngm:class:order-book","label":"Order Book"}]
  },
  "sameAs":[{"@id":"urn:ngm:class:centralised-exchange","label":"Centralised Exchange"}],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A [[Centralised Exchange]] is a custodial trading venue where a single operator matches buy and sell orders for digital assets through an internal [[Order Book]] and holds user [[Custody|funds]].
- It contrasts sharply with a [[Decentralized Exchange]], trading the trustlessness of [[Self-Custody]] for speed, deep [[Liquidity]], and a familiar account-based experience.
- Operators enforce [[Know Your Customer]] and [[AML]] controls as a regulated [[Custodial Wallet]] provider.
- ### Overview
- Centralized exchanges emerged as the dominant on-ramp between fiat currency and cryptocurrency, providing order matching, settlement, custody, and market-making within one corporate entity.
- Trades execute off-chain inside the operator's matching engine; only deposits and withdrawals touch the underlying blockchain, which allows very high throughput and instant internal settlement.
- The model concentrates counterparty risk: users trust the operator to remain solvent, secure private keys, and honour withdrawal requests.
- ### Key aspects
- Custodial model: the exchange holds the private keys and is the on-chain owner of pooled user assets.
- Order book matching: bids and asks are recorded in a continuous limit order book with a matching engine rather than an automated market maker.
- Liquidity provision: market makers and the operator supply depth, narrowing spreads relative to many on-chain venues.
- Compliance: identity verification, transaction monitoring, and jurisdictional licensing are integral to the offering.
- Fiat connectivity: bank rails and payment processors enable fiat deposits and withdrawals.
- ### Applications
- Spot and derivatives trading of cryptocurrencies and tokenised assets.
- Fiat on-ramps and off-ramps for retail and institutional participants.
- Staking, lending, and yield products built on pooled custody.
- Price discovery whose feeds are consumed by broader markets and oracles.
- ### Relationships
- contrastsWith:: [[Decentralized Exchange]]
- contrastsWith:: [[Self-Custody]]
- requires:: [[Order Book]]
- requires:: [[Custody]]
- requires:: [[Know Your Customer]]
- requires:: [[Liquidity]]
- uses:: [[Custodial Wallet]]
- uses:: [[AML]]
- supports:: [[Stablecoin]]
- supports:: [[Liquidity]]
- relatedTo:: [[Binance]]
- relatedTo:: [[Coinbase]]
- relatedTo:: [[Decentralized Finance]]
- dependsOn:: [[Custody]]
- bridgesTo:: [[Order Book]]
- sameAs:: [[Centralised Exchange]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
