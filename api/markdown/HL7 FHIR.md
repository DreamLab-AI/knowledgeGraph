public:: true

# HL7 FHIR

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:hl7-fhir", "@type":"Page", "title":"HL7 FHIR", "vc:slug":"hl7-fhir", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:hl7-fhir",
  "@type":"Class",
  "label":"HL7 FHIR",
  "definition":"HL7 FHIR (Fast Healthcare Interoperability Resources) is a standard developed by Health Level Seven International for the electronic exchange of healthcare information. It models clinical and administrative data as modular Resources accessed through a RESTful API using JSON or XML representations, combining a defined data model with web-native interaction. It has become the dominant modern standard for healthcare interoperability, enabling exchange between electronic health records, apps and analytics systems.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:interoperability","label":"Interoperability"}],
  "relations":{
    "standardizedBy":[{"@id":"urn:ngm:class:semantic-interoperability","label":"Semantic Interoperability"}],
    "enables":[{"@id":"urn:ngm:class:semantic-interoperability","label":"Semantic Interoperability"},{"@id":"urn:ngm:class:data-exchange","label":"Data Exchange"},{"@id":"urn:ngm:class:healthcare-technology","label":"Healthcare Technology"}],
    "uses":[{"@id":"urn:ngm:class:rest-api","label":"REST API"},{"@id":"urn:ngm:class:xml","label":"XML"}],
    "requires":[{"@id":"urn:ngm:class:rest-api","label":"REST API"}],
    "implements":[{"@id":"urn:ngm:class:interoperability","label":"Interoperability"}],
    "dependsOn":[{"@id":"urn:ngm:class:interoperability","label":"Interoperability"}],
    "supports":[{"@id":"urn:ngm:class:healthcare-records","label":"Healthcare Records"},{"@id":"urn:ngm:class:electronic-health-record","label":"Electronic Health Record"}],
    "relatedTo":[{"@id":"urn:ngm:class:healthcare-technology","label":"Healthcare Technology"},{"@id":"urn:ngm:class:semantic-interoperability","label":"Semantic Interoperability"},{"@id":"urn:ngm:class:healthcare-records","label":"Healthcare Records"}],
    "bridgesTo":[{"@id":"urn:ngm:class:rest-api","label":"REST API"}]
  },
  "sameAs":[{"@id":"urn:ngm:class:fast-healthcare-interoperability-resources","label":"Fast Healthcare Interoperability Resources"}],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - [[HL7 FHIR]] is the Health Level Seven standard for exchanging healthcare data as modular Resources over a [[REST API]], delivering [[Interoperability]] and [[Semantic Interoperability]] between health systems.
  - It supports [[Healthcare Records]] and [[Electronic Health Record]] exchange across apps and analytics.
- ### Overview
  - FHIR represents clinical and administrative concepts as Resources — for example Patient, Observation, Encounter and Medication — each with a defined data model.
  - Resources are exchanged in JSON or XML and accessed through a RESTful API supporting create, read, update, delete and search.
  - Profiles and extensions adapt the base Resources to local and national implementation requirements.
  - Its web-native design lowers integration cost relative to earlier HL7 messaging standards.
- ### Key aspects
  - Modular, composable Resource model.
  - RESTful, web-standard interaction patterns.
  - Profiling for jurisdiction-specific constraints.
  - Strong ecosystem of apps via SMART on FHIR.
- ### Applications
  - Interoperability between electronic health record systems.
  - Patient-facing health apps and portals.
  - Population-health and clinical analytics pipelines.
  - Feeding curated clinical data to medical AI systems.
- ### Relationships
  - standardizedBy:: [[Semantic Interoperability]]
  - enables:: [[Semantic Interoperability]]
  - enables:: [[Data Exchange]]
  - enables:: [[Healthcare Technology]]
  - uses:: [[REST API]]
  - uses:: [[XML]]
  - requires:: [[REST API]]
  - implements:: [[Interoperability]]
  - dependsOn:: [[Interoperability]]
  - supports:: [[Healthcare Records]]
  - supports:: [[Electronic Health Record]]
  - relatedTo:: [[Healthcare Technology]]
  - relatedTo:: [[Semantic Interoperability]]
  - relatedTo:: [[Healthcare Records]]
  - bridgesTo:: [[REST API]]
- ### Provenance
  - updated:: 2026-06-15
