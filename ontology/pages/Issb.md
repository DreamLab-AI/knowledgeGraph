public:: true

# Issb

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:issb", "@type":"Page", "title":"Issb", "vc:slug":"issb", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:issb",
  "@type":"Class",
  "label":"Issb",
  "definition":"The International Sustainability Standards Board (ISSB) is a standard-setting body established under the IFRS Foundation to develop a global baseline of sustainability-related financial disclosure standards. Its inaugural standards, IFRS S1 and IFRS S2, set out general sustainability and climate-specific disclosure requirements for capital markets. The ISSB consolidated earlier voluntary frameworks to reduce fragmentation and improve the comparability of corporate sustainability information.",
  "domain":"governance",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:sustainability-reporting","label":"Sustainability Reporting"}],
  "relations":{
    "standardizedBy":[{"@id":"urn:ngm:class:disclosure-requirements","label":"Disclosure Requirements"}],
    "implements":[{"@id":"urn:ngm:class:tcfd","label":"TCFD"},{"@id":"urn:ngm:class:climate-scenario-analysis","label":"Climate Scenario Analysis"}],
    "requires":[{"@id":"urn:ngm:class:materiality-assessment","label":"Materiality Assessment"},{"@id":"urn:ngm:class:carbon-accounting","label":"Carbon Accounting"}],
    "supports":[{"@id":"urn:ngm:class:esg-reporting","label":"ESG Reporting"},{"@id":"urn:ngm:class:sustainable-finance","label":"Sustainable Finance"}],
    "enables":[{"@id":"urn:ngm:class:disclosure-requirements","label":"Disclosure Requirements"},{"@id":"urn:ngm:class:financial-materiality","label":"Financial Materiality"}],
    "uses":[{"@id":"urn:ngm:class:ghg-protocol","label":"GHG Protocol"}],
    "relatedTo":[{"@id":"urn:ngm:class:esg","label":"ESG"},{"@id":"urn:ngm:class:financial-regulation","label":"Financial Regulation"},{"@id":"urn:ngm:class:corporate-governance","label":"Corporate Governance"},{"@id":"urn:ngm:class:audit","label":"Audit"}],
    "bridgesTo":[{"@id":"urn:ngm:class:climate-risk","label":"Climate Risk"}],
    "partOf":[{"@id":"urn:ngm:class:sustainability-reporting","label":"Sustainability Reporting"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- The International Sustainability Standards Board (ISSB) is a standard-setting body under the IFRS Foundation that develops a global baseline of sustainability-related financial [[Disclosure]] standards.
- Its first standards, IFRS S1 and IFRS S2, define general sustainability and climate-specific disclosure requirements for capital markets.
- It builds directly on the [[TCFD]] recommendations and consolidates earlier voluntary frameworks to improve comparability.
- It anchors credible [[Sustainability Reporting]] and supports [[Sustainable Finance]] decision-making.
- ### Overview
- The ISSB was announced at COP26 in 2021 to address the proliferation of overlapping voluntary sustainability frameworks that hindered investor comparability.
- It absorbed the work of the Value Reporting Foundation (SASB and Integrated Reporting) and the Climate Disclosure Standards Board, positioning itself as the global baseline that jurisdictions can build upon.
- IFRS S1 sets out general requirements for disclosing material sustainability risks and opportunities, while IFRS S2 focuses specifically on climate, incorporating the four pillars of the TCFD: governance, strategy, risk management, and metrics and targets.
- The standards are designed to be interoperable with jurisdiction-specific regimes such as the EU's CSRD, allowing companies to satisfy multiple reporting obligations with a common core.
- ### Key aspects
- A global baseline of investor-focused sustainability disclosure.
- Financial materiality lens centred on enterprise value.
- Climate-first sequencing through IFRS S2.
- Interoperability with regional regimes and existing frameworks.
- Use of [[GHG Protocol]] methodologies for emissions metrics.
- ### Mechanisms
- Adoption of the TCFD four-pillar structure for climate disclosure.
- Requirement for scenario analysis to assess climate resilience.
- Reliance on materiality assessment to scope disclosed topics.
- Phased transition relief to ease initial implementation.
- ### Applications
- Issuance of sustainability and climate disclosures in annual financial filings.
- Investor screening and capital allocation in sustainable finance.
- Jurisdictional adoption as the basis for mandatory disclosure rules.
- Assurance and audit of reported sustainability metrics.
- ### Relationships
- standardizedBy:: [[Disclosure]]
- implements:: [[TCFD]]
- implements:: [[Climate Scenario Analysis]]
- requires:: [[Materiality Assessment]]
- requires:: [[Carbon Accounting]]
- supports:: [[ESG Reporting]]
- supports:: [[Sustainable Finance]]
- enables:: [[Disclosure]]
- enables:: [[Financial Materiality]]
- uses:: [[GHG Protocol]]
- relatedTo:: [[ESG]]
- relatedTo:: [[Financial Regulation]]
- relatedTo:: [[Corporate Governance]]
- relatedTo:: [[Audit]]
- bridgesTo:: [[Climate Risk]]
- partOf:: [[Sustainability Reporting]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
