public:: true

# Service Design

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:service-design", "@type":"Page", "title":"Service Design", "vc:slug":"service-design", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:service-design",
  "@type":"Class",
  "label":"Service Design",
  "definition":"Service design is the activity of planning and orchestrating the people, infrastructure, communication, and touchpoints of a service to improve its quality and the interaction between a provider and its users. It takes a holistic, end-to-end view that spans front-stage customer experiences and the back-stage processes and systems that enable them. Service designers use tools such as journey maps and service blueprints to align organisational capabilities with user needs across every channel.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:user-experience","label":"User Experience"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:user-experience","label":"User Experience"}],
    "relatedTo":[{"@id":"urn:ngm:class:customer-experience","label":"Customer Experience"},{"@id":"urn:ngm:class:product-design","label":"Product Design"},{"@id":"urn:ngm:class:interaction-design","label":"Interaction Design"}],
    "uses":[{"@id":"urn:ngm:class:design-thinking","label":"Design Thinking"},{"@id":"urn:ngm:class:stakeholder-mapping","label":"Stakeholder Mapping"}],
    "requires":[{"@id":"urn:ngm:class:user-research","label":"User Research"}],
    "supports":[{"@id":"urn:ngm:class:customer-experience","label":"Customer Experience"}],
    "enables":[{"@id":"urn:ngm:class:usability","label":"Usability"}],
    "dependsOn":[{"@id":"urn:ngm:class:user-research","label":"User Research"}],
    "implements":[{"@id":"urn:ngm:class:design-thinking","label":"Design Thinking"}],
    "contrastsWith":[{"@id":"urn:ngm:class:product-design","label":"Product Design"}],
    "bridgesTo":[{"@id":"urn:ngm:class:human-computer-interaction","label":"Human-Computer Interaction"}],
    "informs":[{"@id":"urn:ngm:class:user-experience","label":"User Experience"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Service design orchestrates the touchpoints, processes, and people that together deliver a service, extending the concerns of [[User Experience]] beyond a single screen.
- It is closely allied with [[Customer Experience]] and [[Product Design]] but takes a wider, systemic view of the whole journey.
- Practitioners apply [[Design Thinking]] and [[User Research]] to align organisational capability with real user need.
- ### Overview
- Service design emerged from the convergence of design, operations, and marketing to address services rather than discrete products.
- It treats a service as a system of interactions unfolding over time, across multiple channels, and involving both customers and staff.
- The discipline distinguishes the front stage that users perceive from the back stage of processes, technology, and policies that make it possible.
- Outputs are intangible but repeatable: improved journeys, clearer roles, and better-aligned supporting systems.
- It plays an increasingly important role in spatial and immersive services where physical and digital touchpoints blend.
- ### Key aspects
- Holistic perspective — the entire end-to-end journey rather than isolated interactions.
- Front-stage and back-stage alignment — visible experience coordinated with invisible enablers.
- Co-creation — designing with users, staff, and stakeholders rather than for them.
- Evidence — grounded in [[User Research]] and behavioural insight.
- Orchestration — sequencing touchpoints so the service feels coherent over time.
- ### Applications
- Designing public-sector and healthcare services that span many channels.
- Improving onboarding and support journeys for digital products.
- Aligning physical, web, and immersive touchpoints into one coherent experience.
- Mapping and removing friction in complex multi-departmental processes.
- ### Relationships
- partOf:: [[User Experience]]
- relatedTo:: [[Customer Experience]]
- relatedTo:: [[Product Design]]
- relatedTo:: [[Interaction Design]]
- uses:: [[Design Thinking]]
- uses:: [[Stakeholder Mapping]]
- requires:: [[User Research]]
- supports:: [[Customer Experience]]
- enables:: [[Usability]]
- dependsOn:: [[User Research]]
- implements:: [[Design Thinking]]
- contrastsWith:: [[Product Design]]
- bridgesTo:: [[Human-Computer Interaction]]
- informs:: [[User Experience]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
