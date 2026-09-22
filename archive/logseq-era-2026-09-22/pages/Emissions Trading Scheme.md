public:: true

# Emissions Trading Scheme

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:emissions-trading-scheme", "@type":"Page", "title":"Emissions Trading Scheme", "vc:slug":"emissions-trading-scheme", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:emissions-trading-scheme",
  "@type":"Class",
  "label":"Emissions Trading Scheme",
  "definition":"An emissions trading scheme is a market-based policy instrument that caps the total quantity of greenhouse gases that regulated entities may emit and allows them to trade emission allowances. By placing a price on carbon through tradable permits it incentivises reductions where they are cheapest to achieve. Schemes such as the EU ETS and the UK ETS operate on a cap-and-trade basis and form a central pillar of climate policy and carbon markets.",
  "domain":"finance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:carbon-markets","label":"Carbon Markets"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:carbon-markets","label":"Carbon Markets"}],
    "uses":[{"@id":"urn:ngm:class:carbon-credits","label":"Carbon Credits"},{"@id":"urn:ngm:class:carbon-offset","label":"Carbon Offset"}],
    "implements":[{"@id":"urn:ngm:class:paris-agreement","label":"Paris Agreement"}],
    "requires":[{"@id":"urn:ngm:class:carbon-accounting","label":"Carbon Accounting"},{"@id":"urn:ngm:class:ghg-protocol","label":"GHG Protocol"}],
    "enables":[{"@id":"urn:ngm:class:sustainable-finance","label":"Sustainable Finance"}],
    "supports":[{"@id":"urn:ngm:class:climate-change","label":"Climate Change"}],
    "contrastsWith":[{"@id":"urn:ngm:class:carbon-tax","label":"Carbon Tax"},{"@id":"urn:ngm:class:voluntary-carbon-market","label":"Voluntary Carbon Market"}],
    "relatedTo":[{"@id":"urn:ngm:class:financial-regulation","label":"Financial Regulation"},{"@id":"urn:ngm:class:green-finance","label":"Green Finance"},{"@id":"urn:ngm:class:climate-risk","label":"Climate Risk"}],
    "bridgesTo":[{"@id":"urn:ngm:class:sustainability-reporting","label":"Sustainability Reporting"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- An emissions trading scheme is a market-based policy instrument that caps the total greenhouse gases regulated entities may emit and lets them trade emission allowances.
- By pricing carbon through tradable permits it drives reductions where they are cheapest, a mechanism distinct from a flat [[Carbon Tax]].
- It is a central segment of regulated [[Carbon Markets]].
- It complements voluntary action by attaching a compliance price to emissions.
- ### Overview
- Under cap-and-trade, a regulator sets an overall emissions cap and issues a corresponding number of allowances, each permitting the emission of one tonne of carbon dioxide equivalent.
- Entities that reduce emissions below their holdings can sell surplus allowances, while those exceeding their permits must buy more, establishing a market price for carbon.
- The cap is tightened over time to deliver progressive decarbonisation in line with climate targets such as the Paris Agreement.
- The EU ETS, launched in 2005, is the largest and longest-running scheme; the UK ETS, China's national scheme and several regional North American programmes follow comparable designs.
- ### Key aspects
- An overall emissions cap that declines over time.
- Tradable allowances denominated in tonnes of CO2 equivalent.
- Auctioning and free allocation of allowances.
- Market stability mechanisms to manage price volatility.
- Monitoring, reporting and verification of emissions.
- ### Mechanisms
- Cap-setting aligned with national and international climate commitments.
- Primary auctions and secondary market trading of allowances.
- Surrender of allowances to cover verified emissions each compliance period.
- Linkage between schemes to deepen liquidity and harmonise prices.
- ### Applications
- Compliance obligations for power, industry and aviation sectors.
- Carbon price signals informing investment and abatement decisions.
- Revenue generation for governments through allowance auctions.
- Inputs to corporate carbon accounting and sustainability reporting.
- ### Relationships
- partOf:: [[Carbon Markets]]
- uses:: [[Carbon Credits]]
- uses:: [[Carbon Offset]]
- implements:: [[Paris Agreement]]
- requires:: [[Carbon Accounting]]
- requires:: [[GHG Protocol]]
- enables:: [[Sustainable Finance]]
- supports:: [[Climate Change]]
- contrastsWith:: [[Carbon Tax]]
- contrastsWith:: [[Voluntary Carbon Market]]
- relatedTo:: [[Financial Regulation]]
- relatedTo:: [[Green Finance]]
- relatedTo:: [[Climate Risk]]
- bridgesTo:: [[Sustainability Reporting]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
