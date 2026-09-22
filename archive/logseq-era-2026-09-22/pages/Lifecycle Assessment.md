public:: true

# Lifecycle Assessment
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:lifecycle-assessment", "@type":"Page", "title":"Lifecycle Assessment", "vc:slug":"lifecycle-assessment", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:lifecycle-assessment",
  "@type":"Class",
  "label":"Lifecycle Assessment",
  "definition":"Lifecycle assessment is a systematic method for evaluating the environmental impacts of a product, process or service across its entire life, from raw-material extraction through manufacture, distribution, use and end-of-life disposal or recycling. By accounting for inputs and outputs such as energy, materials, emissions and waste at every stage, it identifies where the greatest impacts occur and prevents burden-shifting between life-cycle phases. It underpins eco-design, carbon accounting and credible sustainability claims, and is governed by international standards to ensure comparability.",
  "domain":"governance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:environmental-sustainability","label":"Environmental Sustainability"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:carbon-accounting","label":"Carbon Accounting"},
      {"@id":"urn:ngm:class:carbon-footprint","label":"Carbon Footprint"}
    ],
    "partOf":[{"@id":"urn:ngm:class:sustainability","label":"Sustainability"}],
    "requires":[
      {"@id":"urn:ngm:class:carbon-accounting","label":"Carbon Accounting"},
      {"@id":"urn:ngm:class:supply-chain","label":"Supply Chain"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:carbon-footprint","label":"Carbon Footprint"},
      {"@id":"urn:ngm:class:supply-chain","label":"Supply Chain"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:circular-economy","label":"Circular Economy"},
      {"@id":"urn:ngm:class:green-computing","label":"Green Computing"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:esg","label":"ESG"},
      {"@id":"urn:ngm:class:sustainable-development","label":"Sustainable Development"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:climate-action","label":"Climate Action"},
      {"@id":"urn:ngm:class:renewable-energy","label":"Renewable Energy"},
      {"@id":"urn:ngm:class:carbon-neutrality","label":"Carbon Neutrality"}
    ]
  },
  "sameAs":[{"@id":"urn:ngm:class:life-cycle-assessment","label":"Life Cycle Assessment"}],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Lifecycle assessment evaluates the environmental impact of a product or service across its whole life, from raw materials to disposal. A method within [[Environmental Sustainability]] and [[Sustainability]], it underpins [[Carbon Accounting]] and credible [[ESG]] claims by quantifying impacts at every stage.
- ### Overview
- The technique follows four phases: defining goal and scope, compiling a life-cycle inventory of inputs and outputs, assessing the resulting impacts, and interpreting the findings. By covering the entire [[Supply Chain]] it avoids burden-shifting, where reducing impact in one stage simply moves it to another.
- Results highlight environmental hotspots and inform [[Eco-Design]] decisions, material substitution and a transition toward a [[Circular Economy]]. Standardised methodology makes assessments comparable and defensible against accusations of greenwashing.
- ### Key aspects
- Cradle-to-grave (or cradle-to-cradle) system boundaries.
- Life-cycle inventory of energy, materials, emissions and waste.
- Impact categories spanning climate, water, toxicity and resource use.
- Avoidance of burden-shifting between phases.
- Standardised, comparable methodology supporting [[Carbon Footprint]] claims.
- ### Applications
- Comparing product designs to choose the lowest-impact option.
- Substantiating [[ESG]] and [[Carbon Neutrality]] disclosures.
- Driving [[Circular Economy]] strategies for reuse and recycling.
- Informing procurement across a complex [[Supply Chain]].
- ### Relationships
- hasPart:: [[Carbon Accounting]]
- hasPart:: [[Carbon Footprint]]
- partOf:: [[Sustainability]]
- requires:: [[Carbon Accounting]]
- requires:: [[Supply Chain]]
- uses:: [[Carbon Footprint]]
- uses:: [[Supply Chain]]
- enables:: [[Circular Economy]]
- enables:: [[Green Computing]]
- supports:: [[ESG]]
- supports:: [[Sustainable Development]]
- relatedTo:: [[Climate Action]]
- relatedTo:: [[Renewable Energy]]
- relatedTo:: [[Carbon Neutrality]]
- sameAs:: [[Life Cycle Assessment]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
