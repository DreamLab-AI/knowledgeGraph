public:: true

# Greenhouse Gas Protocol

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:greenhouse-gas-protocol", "@type":"Page", "title":"Greenhouse Gas Protocol", "vc:slug":"greenhouse-gas-protocol", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:greenhouse-gas-protocol",
  "@type":"Class",
  "label":"Greenhouse Gas Protocol",
  "definition":"The Greenhouse Gas Protocol is the most widely used set of standards for measuring and reporting greenhouse gas emissions across organisations and value chains. It defines the categorisation of emissions into Scope 1 direct emissions, Scope 2 purchased energy and Scope 3 value-chain emissions, and provides accounting and reporting principles. Developed by the World Resources Institute and the World Business Council for Sustainable Development, it underpins corporate carbon accounting and disclosure.",
  "domain":"governance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:carbon-accounting","label":"Carbon Accounting"}],
  "relations":{
    "standardizedBy":[{"@id":"urn:ngm:class:disclosure","label":"Disclosure"}],
    "requires":[{"@id":"urn:ngm:class:scope-3-emissions","label":"Scope 3 Emissions"},{"@id":"urn:ngm:class:materiality-assessment","label":"Materiality Assessment"}],
    "dependsOn":[{"@id":"urn:ngm:class:carbon-accounting","label":"Carbon Accounting"}],
    "enables":[{"@id":"urn:ngm:class:sustainability-reporting","label":"Sustainability Reporting"},{"@id":"urn:ngm:class:esg-reporting","label":"ESG Reporting"}],
    "supports":[{"@id":"urn:ngm:class:net-zero","label":"Net Zero"},{"@id":"urn:ngm:class:carbon-credits","label":"Carbon Credits"}],
    "implements":[{"@id":"urn:ngm:class:tcfd","label":"TCFD"}],
    "relatedTo":[{"@id":"urn:ngm:class:issb","label":"ISSB"},{"@id":"urn:ngm:class:climate-change","label":"Climate Change"},{"@id":"urn:ngm:class:emissions-trading-scheme","label":"Emissions Trading Scheme"},{"@id":"urn:ngm:class:esg","label":"ESG"}],
    "bridgesTo":[{"@id":"urn:ngm:class:climate-risk","label":"Climate Risk"}],
    "partOf":[{"@id":"urn:ngm:class:carbon-accounting","label":"Carbon Accounting"}]
  },
  "sameAs":[{"@id":"urn:ngm:class:ghg-protocol","label":"GHG Protocol"}],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- The Greenhouse Gas Protocol is the most widely used set of standards for measuring and reporting greenhouse gas emissions across organisations and value chains.
- It defines the split of emissions into Scope 1 direct, Scope 2 purchased energy and [[Scope 3 Emissions]] value-chain categories.
- It is the methodological backbone of corporate [[Carbon Accounting]].
- It feeds disclosure regimes and frameworks such as the [[ISSB]] standards and [[TCFD]].
- ### Overview
- Developed jointly by the World Resources Institute and the World Business Council for Sustainable Development, the protocol provides a comprehensive accounting framework adopted by companies, cities and standard setters worldwide.
- Its Corporate Standard establishes principles of relevance, completeness, consistency, transparency and accuracy that govern credible emissions inventories.
- The scope framework distinguishes direct emissions from owned sources (Scope 1), indirect emissions from purchased electricity, steam, heat and cooling (Scope 2), and all other indirect emissions in the value chain (Scope 3).
- Scope 3 frequently dominates a company's footprint yet is the hardest to measure, spanning upstream supply chains and downstream product use.
- ### Key aspects
- The three-scope emissions classification.
- Organisational and operational boundary setting.
- Accounting and reporting principles ensuring comparability.
- Global warming potential factors to aggregate gases as CO2 equivalent.
- Guidance modules for product life cycle and value-chain accounting.
- ### Mechanisms
- Activity-data collection and emission-factor application.
- Boundary consolidation using equity share or control approaches.
- Base-year recalculation to maintain consistency over time.
- Verification and assurance of reported inventories.
- ### Applications
- Corporate carbon footprinting and net-zero target setting.
- Inputs to sustainability and ESG reporting.
- Compliance with disclosure standards and trading schemes.
- Supply-chain decarbonisation and supplier engagement.
- ### Relationships
- standardizedBy:: [[Disclosure]]
- requires:: [[Scope 3 Emissions]]
- requires:: [[Materiality Assessment]]
- dependsOn:: [[Carbon Accounting]]
- enables:: [[Sustainability Reporting]]
- enables:: [[ESG Reporting]]
- supports:: [[Net Zero]]
- supports:: [[Carbon Credits]]
- implements:: [[TCFD]]
- relatedTo:: [[ISSB]]
- relatedTo:: [[Climate Change]]
- relatedTo:: [[Emissions Trading Scheme]]
- relatedTo:: [[ESG]]
- bridgesTo:: [[Climate Risk]]
- partOf:: [[Carbon Accounting]]
- sameAs:: [[GHG Protocol]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
