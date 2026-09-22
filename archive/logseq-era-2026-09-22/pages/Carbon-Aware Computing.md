public:: true

# Carbon-Aware Computing

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:carbon-aware-computing", "@type":"Page", "title":"Carbon-Aware Computing", "vc:slug":"carbon-aware-computing", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:carbon-aware-computing",
  "@type":"Class",
  "label":"Carbon-Aware Computing",
  "definition":"Carbon-aware computing is the practice of scheduling and placing computational workloads to minimise their associated greenhouse-gas emissions by responding to the time-varying and location-varying carbon intensity of electricity. Rather than only reducing energy use, it shifts flexible work to periods and regions where the grid is cleaner. The approach combines real-time grid carbon-intensity signals with workload orchestration to lower the carbon footprint of data centres and cloud services.",
  "domain":"infrastructure",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:green-computing","label":"Green Computing"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:green-computing","label":"Green Computing"}],
    "dependsOn":[{"@id":"urn:ngm:class:renewable-energy","label":"Renewable Energy"},{"@id":"urn:ngm:class:demand-response","label":"Demand Response"}],
    "requires":[{"@id":"urn:ngm:class:energy-efficiency","label":"Energy Efficiency"}],
    "uses":[{"@id":"urn:ngm:class:cloud-computing","label":"Cloud Computing"},{"@id":"urn:ngm:class:demand-response","label":"Demand Response"}],
    "enables":[{"@id":"urn:ngm:class:net-zero","label":"Net Zero"},{"@id":"urn:ngm:class:carbon-footprint","label":"Carbon Footprint"}],
    "supports":[{"@id":"urn:ngm:class:environmental-sustainability","label":"Environmental Sustainability"},{"@id":"urn:ngm:class:carbon-footprint","label":"Carbon Footprint"}],
    "bridgesTo":[{"@id":"urn:ngm:class:renewable-energy","label":"Renewable Energy"}],
    "contrastsWith":[{"@id":"urn:ngm:class:energy-efficiency","label":"Energy Efficiency"}],
    "relatedTo":[{"@id":"urn:ngm:class:cloud-computing","label":"Cloud Computing"},{"@id":"urn:ngm:class:carbon-accounting","label":"Carbon Accounting"},{"@id":"urn:ngm:class:lifecycle-assessment","label":"Lifecycle Assessment"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Carbon-aware computing schedules and places workloads to follow cleaner electricity, lowering emissions per unit of work. It is a branch of [[Green Computing]] that responds to grid carbon intensity using [[Renewable Energy]] availability and [[Demand Response]] signals.
- It complements [[Energy Efficiency]] by reducing not just how much energy is used but how dirty that energy is.
- ### Overview
- Electricity carbon intensity varies by hour and region as the generation mix shifts between renewables and fossil fuels.
- Flexible workloads — batch jobs, model training, backups — can be deferred or relocated to low-carbon windows without harming service quality.
- Orchestrators consume real-time and forecast carbon-intensity data to make placement and timing decisions.
- ### Key aspects
- Temporal shifting: moving deferrable work to greener hours of the day.
- Spatial shifting: routing work to regions with cleaner grids.
- Demand shaping: aligning consumption with [[Renewable Energy]] supply via [[Demand Response]].
- Measurement: attributing emissions through [[Carbon Accounting]] and [[Carbon Footprint]] reporting.
- ### Mechanisms
- Grid carbon-intensity signals feed scheduling policies in the orchestration layer.
- Workload classification separates latency-sensitive tasks from flexible ones.
- Cloud platforms expose region and time hints so [[Cloud Computing]] consumers can act.
- Forecasting anticipates clean windows to plan deferrable work in advance.
- ### Applications
- Scheduling machine-learning training during low-carbon periods.
- Geographically routing batch processing to renewable-rich regions.
- Reducing data-centre emissions toward [[Net Zero]] commitments.
- Reporting against [[Environmental Sustainability]] and [[Lifecycle Assessment]] targets.
- ### Relationships
- partOf:: [[Green Computing]]
- dependsOn:: [[Renewable Energy]]
- dependsOn:: [[Demand Response]]
- requires:: [[Energy Efficiency]]
- uses:: [[Cloud Computing]]
- uses:: [[Demand Response]]
- enables:: [[Net Zero]]
- enables:: [[Carbon Footprint]]
- supports:: [[Environmental Sustainability]]
- bridgesTo:: [[Renewable Energy]]
- contrastsWith:: [[Energy Efficiency]]
- relatedTo:: [[Cloud Computing]]
- relatedTo:: [[Carbon Accounting]]
- relatedTo:: [[Lifecycle Assessment]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
