public:: true

# Climate Risk

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:climate-risk", "@type":"Page", "title":"Climate Risk", "vc:slug":"climate-risk", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:climate-risk",
  "@type":"Class",
  "label":"Climate Risk",
  "definition":"Climate risk is the set of financial, operational and strategic threats that arise from climate change and the transition to a low-carbon economy. It is conventionally divided into physical risk, stemming from acute and chronic climate impacts, and transition risk, arising from policy, technology, market and reputational shifts. Organisations assess and disclose climate risk to inform capital allocation, resilience planning and regulatory compliance.",
  "domain":"governance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:physical-risk","label":"Physical Risk"},{"@id":"urn:ngm:class:transition-risk","label":"Transition Risk"}],
    "requires":[{"@id":"urn:ngm:class:climate-scenario-analysis","label":"Climate Scenario Analysis"},{"@id":"urn:ngm:class:materiality-assessment","label":"Materiality Assessment"}],
    "standardizedBy":[{"@id":"urn:ngm:class:tcfd","label":"TCFD"},{"@id":"urn:ngm:class:issb","label":"ISSB"}],
    "enables":[{"@id":"urn:ngm:class:disclosure-requirements","label":"Disclosure Requirements"}],
    "supports":[{"@id":"urn:ngm:class:sustainable-finance","label":"Sustainable Finance"},{"@id":"urn:ngm:class:corporate-governance","label":"Corporate Governance"}],
    "relatedTo":[{"@id":"urn:ngm:class:climate-change","label":"Climate Change"},{"@id":"urn:ngm:class:esg","label":"ESG"},{"@id":"urn:ngm:class:carbon-accounting","label":"Carbon Accounting"},{"@id":"urn:ngm:class:existential-risk","label":"Existential Risk"}],
    "bridgesTo":[{"@id":"urn:ngm:class:sustainability-reporting","label":"Sustainability Reporting"},{"@id":"urn:ngm:class:financial-regulation","label":"Financial Regulation"}],
    "dependsOn":[{"@id":"urn:ngm:class:ghg-protocol","label":"GHG Protocol"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Climate risk is the set of financial, operational and strategic threats arising from [[Climate Change]] and the transition to a low-carbon economy.
- It is conventionally split into [[Physical Risk]] and [[Transition Risk]].
- Organisations quantify climate risk through [[Climate Scenario Analysis]] to inform resilience planning.
- It is a central concern of modern [[Risk Management]] and regulatory [[Disclosure]].
- ### Overview
- Physical risk captures the direct consequences of a changing climate, including acute events such as floods, storms and wildfires, and chronic shifts such as rising sea levels, heat stress and changing precipitation patterns.
- Transition risk arises from the move to a low-carbon economy: policy and legal changes such as carbon pricing, technological disruption, shifting market preferences, and reputational pressure from stakeholders.
- Financial regulators increasingly treat climate risk as a source of systemic financial instability, prompting stress testing and prudential supervision.
- Disclosure frameworks such as the TCFD and the ISSB standards require organisations to describe governance, strategy, risk management, and metrics and targets relating to climate.
- ### Key aspects
- Distinction between physical and transition risk channels.
- Time horizons spanning short, medium and long term.
- Sectoral exposure variation across high-emitting and vulnerable industries.
- Integration into enterprise risk management and capital planning.
- Quantification via scenario analysis and stress testing.
- ### Mechanisms
- Climate scenario analysis against pathways such as net-zero by 2050 or higher-warming trajectories.
- Materiality assessment to determine which climate risks warrant disclosure.
- Emissions accounting under the GHG Protocol to gauge transition exposure.
- Financial modelling of asset impairment and stranded assets.
- ### Applications
- Bank and insurer climate stress testing under supervisory regimes.
- Investor portfolio risk assessment and engagement.
- Corporate strategy adaptation and resilience investment.
- Mandatory and voluntary climate-related financial disclosure.
- ### Relationships
- hasPart:: [[Physical Risk]]
- hasPart:: [[Transition Risk]]
- requires:: [[Climate Scenario Analysis]]
- requires:: [[Materiality Assessment]]
- standardizedBy:: [[TCFD]]
- standardizedBy:: [[ISSB]]
- enables:: [[Disclosure]]
- supports:: [[Sustainable Finance]]
- supports:: [[Corporate Governance]]
- relatedTo:: [[Climate Change]]
- relatedTo:: [[ESG]]
- relatedTo:: [[Carbon Accounting]]
- relatedTo:: [[Existential Risk]]
- bridgesTo:: [[Sustainability Reporting]]
- bridgesTo:: [[Financial Regulation]]
- dependsOn:: [[GHG Protocol]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
