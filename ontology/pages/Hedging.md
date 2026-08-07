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
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
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

  ## Current Landscape

  - The MillTechFX Global FX Report 2025, surveying 750 senior finance executives across Europe, North America, and the UK, found that 81% of corporates now hedge forecastable currency risk, with average hedge ratios of 45–49% and UK firms running the longest average hedge tenor at 5.5 months (published March–April 2025).
  - Geopolitical uncertainty is lengthening hedges: 62% of surveyed corporates planned to extend hedge tenors during 2025, against only 8% planning to shorten them (Reuters, 28 March 2025).
  - On 3 December 2025 the IASB published Exposure Draft IASB/ED/2025/1 introducing the Risk Mitigation Accounting (RMA) model — the renamed Dynamic Risk Management project — for portfolios of interest-rate repricing risk managed on a net basis; comments close 31 July 2026, and the ED proposes the eventual withdrawal of IAS 39's hedge accounting, including macro hedging.
  - Migration to IFRS 9 hedge accounting remains incomplete: a September 2025 EFRAG survey found 68% of responding financial institutions still apply IAS 39 for hedge accounting, with a further 24% applying both standards during transition.

  **Sources**:
  - https://www.reuters.com/markets/currencies/geopolitical-angst-prompts-over-60-companies-hedge-fx-longer-survey-shows-2025-03-28/
  - https://www.ey.com/content/dam/ey-unified-site/ey-com/en-gl/technical/ifrs-technical-resources/documents/ey-gl-ifrs-devel-245-iasb-rma-12-2025.pdf
  - https://www.isda.org/a/0opgE/Preparing-for-the-Dynamic-Risk-Management-Accounting-Model-Aug-2025-Update.pdf
  - https://tradetreasurypayments.com/articles/81-of-corporates-now-hedging-fx-risk-new-milltechfx-data-shows
