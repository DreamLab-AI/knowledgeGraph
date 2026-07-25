public:: true

# Materiality Assessment

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:materiality-assessment", "@type":"Page", "title":"Materiality Assessment", "vc:slug":"materiality-assessment", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:materiality-assessment",
  "@type":"Class",
  "label":"Materiality Assessment",
  "definition":"Materiality assessment is the structured process by which an organisation identifies and prioritises the environmental, social and governance topics that are significant enough to influence its decisions or the decisions of its stakeholders. It establishes which sustainability matters warrant disclosure, management attention and resource allocation. Double materiality extends the concept to consider both financial impact on the firm and the firm's impact on society and the environment.",
  "domain":"governance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:sustainability-reporting","label":"Sustainability Reporting"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:stakeholder-engagement","label":"Stakeholder Engagement"},{"@id":"urn:ngm:class:disclosure-requirements","label":"Disclosure Requirements"}],
    "hasPart":[{"@id":"urn:ngm:class:double-materiality","label":"Double Materiality"},{"@id":"urn:ngm:class:financial-materiality","label":"Financial Materiality"}],
    "enables":[{"@id":"urn:ngm:class:esg-reporting","label":"ESG Reporting"},{"@id":"urn:ngm:class:disclosure-requirements","label":"Disclosure Requirements"}],
    "supports":[{"@id":"urn:ngm:class:corporate-governance","label":"Corporate Governance"},{"@id":"urn:ngm:class:risk-management","label":"Risk Management"}],
    "uses":[{"@id":"urn:ngm:class:climate-scenario-analysis","label":"Climate Scenario Analysis"}],
    "standardizedBy":[{"@id":"urn:ngm:class:issb","label":"ISSB"},{"@id":"urn:ngm:class:tcfd","label":"TCFD"}],
    "relatedTo":[{"@id":"urn:ngm:class:esg","label":"ESG"},{"@id":"urn:ngm:class:carbon-accounting","label":"Carbon Accounting"},{"@id":"urn:ngm:class:audit","label":"Audit"}],
    "bridgesTo":[{"@id":"urn:ngm:class:climate-risk","label":"Climate Risk"}],
    "partOf":[{"@id":"urn:ngm:class:sustainability-reporting","label":"Sustainability Reporting"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Materiality assessment is the structured process by which an organisation identifies and prioritises the [[ESG]] topics significant enough to influence its decisions or those of its stakeholders.
- It determines which sustainability matters warrant [[Disclosure]], management attention and resource allocation.
- The concept of [[Double Materiality]] broadens the lens to capture both the financial impact on the firm and the firm's impact on the wider world.
- It sits at the heart of credible [[Sustainability Reporting]] and informs [[Risk Management]] priorities.
- ### Overview
- Materiality is borrowed from financial accounting, where an item is material if its omission or misstatement could influence the economic decisions of users. In sustainability practice the principle is extended across a far wider set of impacts and dependencies.
- A materiality assessment typically begins with a long list of candidate topics drawn from sector frameworks, peer benchmarking and regulatory expectations. These are then evaluated against two axes: significance to the business and significance to stakeholders.
- The output is usually visualised as a materiality matrix that plots topics by importance, guiding where the organisation should focus disclosure and action.
- Regulators and standard setters have increasingly converged on the double materiality view, requiring organisations to report both how sustainability issues affect enterprise value and how the enterprise affects people and the planet.
- ### Key aspects
- Topic identification drawing on standards, sector guidance and stakeholder input.
- Stakeholder mapping and engagement to capture external perspectives.
- Impact and dependency analysis across the value chain.
- Prioritisation against financial and impact thresholds.
- Documentation and assurance to support audit and disclosure.
- Periodic refresh to reflect changing risks and stakeholder concerns.
- ### Mechanisms
- Surveys, interviews and workshops with internal and external stakeholders.
- Scenario analysis to test the salience of climate and transition risks.
- Quantitative scoring models that combine likelihood, magnitude and stakeholder concern.
- Cross-referencing against [[ISSB]], [[TCFD]] and sector taxonomies.
- ### Applications
- Defining the content boundary of annual sustainability and ESG reports.
- Prioritising decarbonisation, social and governance initiatives.
- Informing board oversight and enterprise risk registers.
- Aligning corporate strategy with stakeholder expectations and regulatory disclosure regimes.
- ### Relationships
- requires:: [[Stakeholder Engagement]]
- requires:: [[Disclosure]]
- hasPart:: [[Double Materiality]]
- hasPart:: [[Financial Materiality]]
- enables:: [[ESG Reporting]]
- enables:: [[Disclosure]]
- supports:: [[Corporate Governance]]
- supports:: [[Risk Management]]
- uses:: [[Climate Scenario Analysis]]
- standardizedBy:: [[ISSB]]
- standardizedBy:: [[TCFD]]
- relatedTo:: [[ESG]]
- relatedTo:: [[Carbon Accounting]]
- relatedTo:: [[Audit]]
- bridgesTo:: [[Climate Risk]]
- partOf:: [[Sustainability Reporting]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
