public:: true

# Spot Trading
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:spot-trading", "@type":"Page", "title":"Spot Trading", "vc:slug":"spot-trading", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:spot-trading",
  "@type":"Class",
  "label":"Spot Trading",
  "definition":"Spot trading is the buying and selling of an asset for immediate delivery and settlement at the current market price, as opposed to settlement at a future date. In cryptocurrency and traditional markets it involves placing orders against an order book or liquidity pool, with ownership of the underlying asset transferring promptly, and it contrasts with derivatives and margin trading where exposure is taken without immediate full ownership.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:digital-asset","label":"Digital Asset"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:order-book","label":"Order Book"},
      {"@id":"urn:ngm:class:limit-order","label":"Limit Order"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:liquidity","label":"Liquidity"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:order-book","label":"Order Book"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:liquidity","label":"Liquidity"},
      {"@id":"urn:ngm:class:settlement","label":"Settlement"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:derivatives-trading","label":"Derivatives Trading"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:bid-ask-spread","label":"Bid-Ask Spread"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:digital-asset","label":"Digital Asset"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:settlement","label":"Settlement"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:centralised-exchange","label":"Centralised Exchange"},
      {"@id":"urn:ngm:class:decentralised-exchange","label":"Decentralised Exchange"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- [[Spot Trading]] is buying and selling an asset for immediate delivery at the current price. It runs against an [[Order Book]] using order types such as the [[Limit Order]], requires [[Liquidity]] and prompt [[Settlement]], and contrasts with [[Derivatives Trading]].
- ### Overview
- Spot trading is the most direct form of market participation: a buyer and seller agree a price now, ownership transfers, and the trade settles promptly. There is no leverage or future obligation inherent to the trade itself.
- It is the baseline against which derivative and margin products are defined, and its prices feed the reference rates those products track.
- ### Key aspects
- Trades execute at the prevailing market price with near-immediate settlement.
- An [[Order Book]] matches buy and sell orders, with the [[Bid-Ask Spread]] reflecting available liquidity.
- Ownership of the underlying asset transfers, unlike synthetic or leveraged exposure.
- Both [[Centralised Exchange]] and [[Decentralised Exchange]] venues support spot markets.
- ### Applications
- Acquiring or disposing of cryptocurrency holdings at current prices.
- Providing the reference prices used by [[Derivatives Trading]] products.
- Rebalancing portfolios via direct buys and sells.
- ### Relationships
- subClassOf:: [[Digital Asset]]
- hasPart:: [[Order Book]]
- hasPart:: [[Limit Order]]
- enables:: [[Liquidity]]
- uses:: [[Order Book]]
- requires:: [[Liquidity]]
- requires:: [[Settlement]]
- contrastsWith:: [[Derivatives Trading]]
- dependsOn:: [[Bid-Ask Spread]]
- partOf:: [[Digital Asset]]
- supports:: [[Settlement]]
- relatedTo:: [[Centralised Exchange]]
- relatedTo:: [[Decentralised Exchange]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
