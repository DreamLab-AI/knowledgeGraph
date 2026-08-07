public:: true

# Hedging
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c3cadcbd270ef98293f5fc757d31b402ce3282bbdbba13751c01d1c466ceccd2",
  "@type": "Page",
  "vc:slug": "hedging",
  "title": "Hedging",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:risk-management", "vc:label": "Risk Management"},
    {"@id": "urn:visionflow:linked:market-making", "vc:label": "Market Making"},
    {"@id": "urn:visionflow:linked:synthetic-asset", "vc:label": "Synthetic Asset"},
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
  "@id": "urn:ngm:class:hedging",
  "@type": "Class",
  "label": "Hedging",
  "definition": "A risk management practice in which an exposure to adverse price, rate, or credit movements is deliberately offset by taking a counterbalancing position — typically in derivatives such as futures, options, and swaps, or in correlated instruments — so that losses on the primary holding are compensated by gains on the hedge; the aim is not profit but the reduction of variance, exchanging upside potential for predictability of outcomes.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:risk-management",
    "label": "Risk Management"
  },
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:synthetic-asset", "label": "Synthetic Asset"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:market-making", "label": "Market Making"},
      {"@id": "urn:ngm:class:exchange-rate", "label": "Exchange Rate"}
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
  - "A risk management practice in which an exposure to adverse price, rate, or credit movements is deliberately offset by taking a counterbalancing position — typically in derivatives such as futures, options, and swaps, or in correlated instruments — so that losses on the primary holding are compensated by gains on the hedge; the aim is not profit but the reduction of variance, exchanging upside potential for predictability of outcomes."

- ### Semantic Classification
  - owl-class:: finance:Hedging
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Risk Management]]
  - uses:: [[Synthetic Asset]]
  - related-to:: [[Market Making]], [[Exchange Rate]]

- ### Content

  ## Definition

  **Hedging** is the deliberate construction of offsetting exposures so that the value of a portfolio becomes insensitive — fully or partially — to a risk factor the holder does not wish to bear. An airline buying jet-fuel futures, an exporter selling forward the foreign currency it expects to receive, and an options desk delta-hedging its book with the underlying share are all performing the same operation: converting an uncertain future outcome into a more predictable one, at the cost of forgoing favourable moves and paying transaction or premium costs.

  The practice is a subclass of [[Risk Management]] rather than speculation: the hedger already holds the risk and pays to shed it, whereas the speculator accepts risk in exchange for expected return. In practice the two roles are symbiotic — speculators and market makers supply the liquidity hedgers demand. [[Market Making]] itself depends on continuous hedging: a dealer who fills a client order immediately neutralises the inherited inventory risk in a correlated market, keeping quoted spreads tight.

  In decentralised finance the same logic is rebuilt from on-chain components. A [[Synthetic Asset]] that tracks an external price gives its issuer a short exposure that must be hedged, and stablecoin issuers, perpetual-futures funding arbitrageurs, and liquidity providers managing impermanent loss all run hedging programmes structurally identical to their traditional-finance counterparts. Currency hedging against [[Exchange Rate]] movements remains the largest single use case globally, embedded in trillions of dollars of forwards and swaps.

  ## Technical Details

  - **Instruments**: forwards and futures (linear payoff, lock in a price), options (asymmetric payoff, insure against one tail while retaining the other), swaps (exchange streams of cash flows, e.g. fixed-for-floating interest), and natural hedges (matching revenues and costs in the same currency).
  - **Hedge ratio**: the position size that minimises variance; for linear hedges the regression beta of the exposure on the hedging instrument, for options the delta, recomputed continuously as prices move (dynamic hedging).
  - **Basis risk**: the residual risk that the hedge instrument and the exposure do not move one-for-one — the dominant practical failure mode, from mismatched grades, maturities, or reference rates.
  - **Greeks**: derivative desks manage delta, gamma, vega, and theta jointly; a "perfect" hedge in one dimension leaves residuals in the others.
  - **Accounting and governance**: hedge-accounting rules (IFRS 9) require documented designation and effectiveness testing, distinguishing genuine hedges from directional bets carried on the same instruments.
