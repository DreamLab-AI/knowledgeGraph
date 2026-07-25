public:: true

# Green Computing

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:green-computing", "@type":"Page", "title":"Green Computing", "vc:slug":"green-computing", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:green-computing",
  "@type":"Class",
  "label":"Green Computing",
  "definition":"Green computing is the design, manufacture, operation and disposal of computing systems in ways that minimise environmental impact across their lifecycle. It targets energy efficiency, reduced carbon emissions, sustainable materials and responsible electronic-waste management. Practices range from efficient hardware and data-centre design to carbon-aware scheduling of workloads onto low-carbon energy.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:sustainability","label":"Sustainability"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:energy-efficiency","label":"Energy Efficiency"}],
    "partOf":[{"@id":"urn:ngm:class:sustainability","label":"Sustainability"}],
    "hasPart":[{"@id":"urn:ngm:class:carbon-aware-computing","label":"Carbon-Aware Computing"},{"@id":"urn:ngm:class:lifecycle-assessment","label":"Lifecycle Assessment"}],
    "uses":[{"@id":"urn:ngm:class:renewable-energy","label":"Renewable Energy"},{"@id":"urn:ngm:class:power-usage-effectiveness","label":"Power Usage Effectiveness"}],
    "reduces":[{"@id":"urn:ngm:class:energy-consumption","label":"Energy Consumption"},{"@id":"urn:ngm:class:e-waste","label":"E-Waste"}],
    "dependsOn":[{"@id":"urn:ngm:class:renewable-energy","label":"Renewable Energy"}],
    "supports":[{"@id":"urn:ngm:class:net-zero","label":"Net Zero"},{"@id":"urn:ngm:class:esg","label":"ESG"}],
    "requires":[{"@id":"urn:ngm:class:energy-efficiency","label":"Energy Efficiency"}],
    "implements":[{"@id":"urn:ngm:class:sustainability","label":"Sustainability"}],
    "contrastsWith":[{"@id":"urn:ngm:class:energy-consumption","label":"Energy Consumption"}],
    "bridgesTo":[{"@id":"urn:ngm:class:cloud-computing","label":"Cloud Computing"}],
    "relatedTo":[{"@id":"urn:ngm:class:data-centre","label":"Data Centre"},{"@id":"urn:ngm:class:edge-computing","label":"Edge Computing"},{"@id":"urn:ngm:class:carbon-aware-computing","label":"Carbon-Aware Computing"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Green computing is the practice of reducing the environmental footprint of information technology across its whole lifecycle, from chip fabrication and [[Data Centre]] operation to end-of-life [[E-Waste]] handling. It is a domain of [[Sustainability]] applied specifically to computing.
- It combines [[Energy Efficiency]] engineering with [[Renewable Energy]] sourcing and [[Carbon-Aware Computing]] scheduling to lower both energy use and carbon emissions.
- ### Overview
- Hardware efficiency improves performance per watt through better silicon, cooling and power delivery.
- Facility efficiency, tracked by metrics such as [[Power Usage Effectiveness]], minimises overhead energy in [[Data Centre]] operations.
- Workload management shifts computation toward times and locations where low-carbon electricity is abundant, the essence of [[Carbon-Aware Computing]].
- Lifecycle thinking, via [[Lifecycle Assessment]], accounts for embodied emissions in manufacturing and the impact of disposal and recycling.
- ### Key aspects
- Energy efficiency: maximising useful computation per unit of energy.
- Carbon awareness: aligning compute with low-carbon energy availability.
- Sustainable hardware: durable, repairable and recyclable equipment.
- Waste reduction: minimising and responsibly recycling [[E-Waste]].
- ### Applications
- Designing and operating energy-efficient cloud and edge infrastructure.
- Scheduling AI training and batch jobs to track renewable supply.
- Reducing [[Energy Consumption]] and carbon for large-scale services.
- Supporting corporate [[Net Zero]] and [[ESG]] commitments.
- ### Relationships
- subClassOf:: [[Sustainability]]
- enables:: [[Energy Efficiency]]
- partOf:: [[Sustainability]]
- hasPart:: [[Carbon-Aware Computing]]
- hasPart:: [[Lifecycle Assessment]]
- uses:: [[Renewable Energy]]
- uses:: [[Power Usage Effectiveness]]
- reduces:: [[Energy Consumption]]
- reduces:: [[E-Waste]]
- dependsOn:: [[Renewable Energy]]
- supports:: [[Net Zero]]
- supports:: [[ESG]]
- requires:: [[Energy Efficiency]]
- implements:: [[Sustainability]]
- contrastsWith:: [[Energy Consumption]]
- bridgesTo:: [[Cloud Computing]]
- relatedTo:: [[Data Centre]]
- relatedTo:: [[Edge Computing]]
- relatedTo:: [[Carbon-Aware Computing]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
