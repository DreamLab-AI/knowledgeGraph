public:: true

# Supply and Demand
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a81b253178922771f8a864c9e0d8af2f2925f287babc0d2c4a10768551b90d25",
  "@type": "Page",
  "vc:slug": "supply-and-demand",
  "title": "Supply and Demand",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:economics", "vc:label": "Economics"},
    {"@id": "urn:visionflow:linked:microeconomics", "vc:label": "Microeconomics"},
    {"@id": "urn:visionflow:linked:price-discovery", "vc:label": "Price Discovery"},
    {"@id": "urn:visionflow:linked:exchange-rate", "vc:label": "Exchange Rate"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:supply-and-demand",
  "@type": "Class",
  "label": "Supply and Demand",
  "definition": "The foundational economic model describing how the price and traded quantity of a good emerge from the interaction of sellers' willingness to supply at each price and buyers' willingness to purchase, with markets tending towards the equilibrium where the two schedules intersect; shifts in either schedule — driven by costs, income, preferences, or expectations — move prices and quantities in predictable directions, making the model the basic engine of price formation in markets from commodities to currencies.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:economics",
    "label": "Economics"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:microeconomics", "label": "Microeconomics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:price-discovery", "label": "Price Discovery"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:exchange-rate", "label": "Exchange Rate"},
      {"@id": "urn:ngm:class:digital-economy", "label": "Digital Economy"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The foundational economic model describing how the price and traded quantity of a good emerge from the interaction of sellers' willingness to supply at each price and buyers' willingness to purchase, with markets tending towards the equilibrium where the two schedules intersect; shifts in either schedule — driven by costs, income, preferences, or expectations — move prices and quantities in predictable directions, making the model the basic engine of price formation in markets from commodities to currencies."

- ### Semantic Classification
  - owl-class:: finance:SupplyAndDemand
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Economics]]
  - part-of:: [[Microeconomics]]
  - enables:: [[Price Discovery]]
  - related-to:: [[Exchange Rate]]

- ### Content

  ## Definition

  **Supply and demand** is the central organising model of [[Microeconomics]]. The demand curve records the quantity buyers will purchase at each price and normally slopes downwards (higher prices deter purchases); the supply curve records the quantity sellers will offer and normally slopes upwards (higher prices make production worthwhile). Where the curves cross lies the market equilibrium: the price at which the quantity supplied equals the quantity demanded, leaving neither unsold surplus nor unmet shortage.

  The model's analytical power comes from comparative statics. A change in a non-price determinant — production costs, technology, consumer income, tastes, the price of substitutes, or expectations about the future — shifts one of the curves and moves the equilibrium in a predictable direction. Price elasticity measures how strongly quantity responds to price, determining whether a supply shock mostly raises prices (inelastic demand, as with fuel) or mostly reduces volumes (elastic demand, as with luxuries).

  Although formalised by Alfred Marshall in the late nineteenth century, the mechanism operates wherever voluntary exchange occurs, including the digital settings this graph maps: token markets, automated market makers, prediction markets, and foreign-exchange venues. [[Price Discovery]] is the real-time expression of the model — order flow continuously revealing where the effective supply and demand schedules currently intersect — and [[Exchange Rate]] movements are the model applied to one currency priced in another.

  ## Current Landscape

  - **Market microstructure**: modern electronic markets make the schedules directly observable as limit order books; depth on the bid and ask sides is an empirical snapshot of demand and supply near the current price.
  - **Algorithmic markets**: automated market makers in decentralised finance encode supply and demand into constant-function invariants, replacing the order book with a formula that reprices continuously as inventories change.
  - **Limits of the model**: network effects, zero-marginal-cost digital goods, and administered or subsidised prices can hold markets away from the textbook equilibrium; behavioural economics documents systematic departures from the rational demand curve.
  - **Policy use**: the framework underpins analysis of price controls, taxation incidence, congestion pricing, and spectrum or carbon-permit auctions.
