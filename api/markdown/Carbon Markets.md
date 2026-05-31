public:: true
alias:: CarbonMarkets

# Carbon Markets
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:carbon-markets",
  "@type": "Page",
  "vc:slug": "carbon-markets",
  "title": "Carbon Markets",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:carbon-markets",
  "@type": "Class",
  "label": "Carbon Markets",
  "definition": "Carbon markets are trading systems in which carbon credits or allowances — each representing one metric tonne of CO₂ equivalent — are bought and sold between emitters, governments, financial intermediaries, and voluntary buyers, using price signals to incentivise least-cost emissions reductions across the economy. They encompass compliance markets (mandatory emissions trading schemes such as the EU ETS, California Cap-and-Trade, and Article 6 mechanisms under the Paris Agreement) and voluntary carbon markets (VCMs) where organisations purchase credits from independently verified projects to offset residual emissions against net-zero commitments. Market integrity depends on rigorous project standards, independent verification, and robust registry systems to prevent double counting.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:environmental-asset-market", "label": "Environmental Asset Market"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:carbon-credits", "label": "Carbon Credits"},
      {"@id": "urn:ngm:class:carbon-registry", "label": "Carbon Registry"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:carbon-offset-trading", "label": "Carbon Offset Trading"},
      {"@id": "urn:ngm:class:carbon-neutrality", "label": "Carbon Neutrality"},
      {"@id": "urn:ngm:class:net-zero-targets", "label": "Net Zero Targets"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:voluntary-carbon-market", "label": "Voluntary Carbon Market"},
      {"@id": "urn:ngm:class:carbon-price-discovery", "label": "Carbon Price Discovery"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Carbon Markets]] are structured trading systems that use a commodity — the carbon credit, representing one tonne of CO₂-equivalent emissions avoided or removed — as a mechanism to put a price on greenhouse gas pollution and redirect investment towards mitigation activities. Compliance markets, established by government regulation, cap aggregate emissions from covered sectors and require emitters to surrender allowances matching their actual output, creating scarcity that drives price. Voluntary markets allow organisations outside mandatory caps to purchase [[Carbon Credits]] verified by standards bodies (Verra, Gold Standard, ACR) and retire them via [[Carbon Registry]] systems to substantiate net-zero or carbon-neutral claims.

- ### Relationships
  - [[Carbon Markets]] are a type of [[Environmental Asset Market]] that operationalise [[Carbon Offset Trading]] through the issuance, exchange, and retirement of [[Carbon Credits]] tracked in [[Carbon Registry]] infrastructure. They enable organisations to pursue [[Carbon Neutrality]] and [[Net Zero Targets]] by compensating for residual emissions. [[Carbon Price Discovery]] emerges from market trading activity and provides an economic signal that theoretically drives abatement investment to its most efficient allocation. The [[Voluntary Carbon Market]] operates in parallel to mandatory compliance schemes, serving buyers not subject to regulatory caps.

- ### Content
  - Carbon market mechanisms have theoretical roots in Ronald Coase's 1960 work on externalities and gained practical form through the US EPA's Acid Rain Programme (1990), which used tradeable SO₂ allowances to efficiently reduce acid rain precursor emissions at lower cost than command-and-control regulation. The Kyoto Protocol (1997) established the first international carbon market mechanisms: Joint Implementation, the Clean Development Mechanism (CDM), and International Emissions Trading. The EU Emissions Trading System (EU ETS), launched in 2005, became the world's first and largest cap-and-trade scheme for CO₂.

  - The EU ETS operates across approximately 11,000 power stations and industrial plants in 30 countries. Phase 4 (2021-2030) tightened the annual cap reduction rate from 1.74% to 2.2% per year and introduced a Market Stability Reserve that withdraws allowances when the total number in circulation exceeds a threshold. ETS carbon prices reached historic highs above €100/tonne in 2023 before retreating. The Carbon Border Adjustment Mechanism (CBAM), phasing in from 2026, will require importers of steel, cement, fertiliser, and other carbon-intensive goods to purchase certificates matching the embedded carbon cost, applying the EU carbon price globally to covered imports.

  - The voluntary carbon market expanded rapidly between 2020 and 2022, driven by corporate net-zero pledges, reaching approximately $2 billion in transaction value at its peak. A subsequent credibility crisis — triggered by investigative reporting in 2023 alleging widespread over-crediting in REDD+ forestry projects, particularly those certified by Verra's Verified Carbon Standard — caused VCM transaction volumes to decline sharply. In response, the Integrity Council for the Voluntary Carbon Market (ICVCM) published its Core Carbon Principles (2023) to set minimum quality thresholds, and Science Based Targets initiative guidance sought to limit the role of offsets in corporate climate claims.

  - As of 2024-2025, Article 6 of the Paris Agreement — which establishes international cooperative mechanisms for cross-border carbon trading — reached key implementation milestones at COP29 (Baku, 2024), unlocking bilateral Article 6.2 trades and the multilateral Article 6.4 mechanism. These developments are expected to create a new layer of sovereign carbon trading alongside existing compliance and voluntary markets. Digital infrastructure including blockchain-based carbon credit tokenisation ([[Carbon Credit Token]]) is being deployed to improve registry transparency and enable fractional trading, though regulatory acceptance of tokenised credits remains uneven across jurisdictions.