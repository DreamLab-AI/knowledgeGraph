public:: true

# Carbon Neutrality
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:carbon-neutrality",
  "@type": "Page",
  "vc:slug": "carbon-neutrality",
  "title": "Carbon Neutrality",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:carbon-neutrality",
  "@type": "Class",
  "label": "Carbon Neutrality",
  "definition": "Carbon neutrality is a state in which an entity — an organisation, product, event, or country — achieves a net-zero balance between its greenhouse gas emissions and the carbon dioxide it removes or offsets, such that its net contribution to atmospheric CO₂ concentration is zero over a defined accounting period. It is typically achieved through a combination of direct emissions reductions, procurement of renewable energy, and the purchase and retirement of independently verified carbon credits representing emissions avoided or removed elsewhere. Carbon neutrality is distinct from net-zero emissions, which generally requires deeper reductions and limits the role of offsets, and from climate positivity, which requires net negative emissions.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:climate-policy", "label": "Climate Policy"},
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:carbon-footprint-measurement", "label": "Carbon Footprint Measurement"},
      {"@id": "urn:ngm:class:carbon-neutrality-planning", "label": "Carbon Neutrality Planning"},
      {"@id": "urn:ngm:class:carbon-neutrality-verification", "label": "Carbon Neutrality Verification"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:greenhouse-gas-accounting", "label": "Greenhouse Gas Accounting"},
      {"@id": "urn:ngm:class:scope-3-emissions-reporting", "label": "Scope 3 Emissions Reporting"},
      {"@id": "urn:ngm:class:third-party-assurance", "label": "Third-Party Assurance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:carbon-offset-programme", "label": "Carbon Offset Programme"},
      {"@id": "urn:ngm:class:carbon-credits", "label": "Carbon Credits"},
      {"@id": "urn:ngm:class:renewable-energy-procurement", "label": "Renewable Energy Procurement"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:net-zero-targets", "label": "Net Zero Targets"},
      {"@id": "urn:ngm:class:esg-reporting", "label": "ESG Reporting"},
      {"@id": "urn:ngm:class:green-claims-compliance", "label": "Green Claims Compliance"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:voluntary-carbon-market", "label": "Voluntary Carbon Market"},
      {"@id": "urn:ngm:class:science-based-targets", "label": "Science Based Targets"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:pas-2060", "label": "PAS 2060"},
      {"@id": "urn:ngm:class:iso-14068", "label": "ISO 14068"},
      {"@id": "urn:ngm:class:paris-agreement", "label": "Paris Agreement"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:net-zero-emissions", "label": "Net Zero Emissions"},
      {"@id": "urn:ngm:class:climate-positivity", "label": "Climate Positivity"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:corporate-sustainability-reporting", "label": "Corporate Sustainability Reporting"},
      {"@id": "urn:ngm:class:supply-chain-decarbonisation", "label": "Supply Chain Decarbonisation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:carbon-neutrality-verification", "label": "Carbon Neutrality Verification"},
      {"@id": "urn:ngm:class:direct-air-capture", "label": "Direct Air Capture"},
      {"@id": "urn:ngm:class:eu-green-claims-directive", "label": "EU Green Claims Directive"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:climate-neutral", "label": "Climate Neutral"},
    {"@id": "urn:ngm:class:carbon-balanced", "label": "Carbon Balanced"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.72
}
```

- ### Definition
  - [[Carbon Neutrality]] is a climate commitment and measurable state in which an organisation's or entity's total greenhouse gas emissions, after all feasible reductions, are balanced by equivalent removals or offsets, yielding a net emissions figure of zero for the accounting period. The pathway typically follows a three-step hierarchy: measure the carbon footprint via [[Carbon Footprint Measurement]], reduce emissions across Scope 1, 2, and material Scope 3 categories, and compensate residual emissions by purchasing and retiring certified [[Carbon Credits]] from a [[Carbon Offset Programme]]. Third-party assurance — [[Carbon Neutrality Verification]] — is required for credible public claims, typically against standards such as PAS 2060 or ISO 14068.

- ### Relationships
  - [[Carbon Neutrality]] is the outcome that [[Carbon Neutrality Planning]] processes aim to achieve, and its credibility depends on [[Carbon Neutrality Verification]] by accredited third parties. It is operationalised through [[Carbon Offset Programme]] participation and procurement of [[Carbon Credits]] from the [[Voluntary Carbon Market]]. Organisations use [[Carbon Footprint Measurement]] as the baseline for reduction strategy and report on neutrality progress through [[ESG Reporting]] channels. Achieving and maintaining carbon neutrality positions organisations towards longer-term [[Net Zero Targets]] aligned with science-based pathways.

- ### Content
  - The concept of carbon neutrality gained mainstream currency in the mid-2000s, driven by the voluntary carbon market's growth and early corporate climate pledges. The term "carbon neutral" was the New Oxford American Dictionary's word of the year in 2006, reflecting its entry into public discourse. Early corporate claims were largely unverified and inconsistently defined, prompting BSI to publish PAS 2060 in 2010 — the first publicly available specification for carbon neutrality claims — which required disclosure of the carbon footprint boundary, the reduction plan, and the offset types used.

  - From a technical standpoint, carbon neutrality calculations require decisions on accounting boundaries (which Scope 3 categories to include), which emission factor databases to use, how to account for biogenic carbon, and which carbon credit types qualify as genuine offsets. High-quality removals (direct air capture, biochar, enhanced weathering) command significant premiums over cheaper avoidance credits (renewable energy, avoided deforestation) and are increasingly preferred by sophisticated buyers concerned about permanence and additionality. The quality spectrum of carbon credits is a persistent challenge: credits that do not represent genuine, additional, permanent reductions inflate the apparent neutrality of purchasers without delivering commensurate climate benefit.

  - Country-level carbon neutrality pledges accelerated after the Paris Agreement (2015), with the EU, UK, Japan, South Korea, and China all adopting statutory or policy-level net-zero or carbon-neutral targets for 2050-2060. At the sub-national level, cities including Copenhagen, Stockholm, and Melbourne have achieved or are approaching carbon neutrality for their municipal operations. The private sector has seen a proliferation of neutrality claims from airlines, food companies, financial institutions, and technology firms, with varying levels of rigour.

  - In 2024-2025, the credibility of carbon neutrality claims faces significant scrutiny following investigations into the quality of forestry offset credits underpinning many large corporate neutrality claims. The Science Based Targets initiative revised its Net-Zero Standard to strongly limit the use of offsets as a substitute for direct emissions reductions, instead positioning them as a complement for residual emissions only. The EU Green Claims Directive (in legislative progress) proposes to prohibit carbon neutrality marketing claims not substantiated by third-party verified, full life-cycle accounting, fundamentally raising the evidentiary bar for neutrality assertions in the European market.