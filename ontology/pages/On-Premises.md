public:: true

# On-Premises
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a8f275950ea8929e6ddae18d53d492cae50bc348cfc21449183146b257aed695",
  "@type": "Page",
  "vc:slug": "on-premises",
  "title": "On-Premises",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:infrastructure", "vc:label": "Infrastructure"},
    {"@id": "urn:visionflow:linked:cloud-computing", "vc:label": "Cloud Computing"},
    {"@id": "urn:visionflow:linked:hybrid-cloud", "vc:label": "Hybrid Cloud"},
    {"@id": "urn:visionflow:linked:infrastructure-as-a-service", "vc:label": "Infrastructure As A Service"},
    {"@id": "urn:visionflow:linked:software-as-a-service", "vc:label": "Software As A Service"},
    {"@id": "urn:visionflow:linked:data-centre", "vc:label": "Data Centre"},
    {"@id": "urn:visionflow:linked:edge-computing", "vc:label": "Edge Computing"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:on-premises",
  "@type": "Class",
  "label": "On-Premises",
  "definition": "On-premises is the deployment model in which an organisation runs its computing infrastructure — servers, storage, networking, and the software on top — in facilities it owns or directly controls, rather than renting capacity from a cloud provider. The organisation purchases hardware as capital expenditure, operates and patches the full stack itself, and retains physical custody of its data, trading the elasticity and managed services of public cloud for maximal control over locality, latency, security boundaries, and long-run unit costs.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:infrastructure",
    "label": "Infrastructure"
  },
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"},
      {"@id": "urn:ngm:class:infrastructure-as-a-service", "label": "Infrastructure as a Service"},
      {"@id": "urn:ngm:class:software-as-a-service", "label": "Software as a Service"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:hybrid-cloud", "label": "Hybrid Cloud"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:data-centre", "label": "Data Centre"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "On-premises is the deployment model in which an organisation runs its computing infrastructure — servers, storage, networking, and the software on top — in facilities it owns or directly controls, rather than renting capacity from a cloud provider. The organisation purchases hardware as capital expenditure, operates and patches the full stack itself, and retains physical custody of its data, trading the elasticity and managed services of public cloud for maximal control over locality, latency, security boundaries, and long-run unit costs."

- ### Semantic Classification
  - owl-class:: infrastructure:OnPremises
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Infrastructure]]
  - contrasts-with:: [[Cloud Computing]]
  - bridges-to:: [[Hybrid Cloud]]
  - related-to:: [[Data Centre]]

- ### Content

  ## Definition

  **On-premises** (colloquially "on-prem") denotes computing run in facilities the organisation itself owns or controls — a server room, a corporate [[Data Centre]], or leased colocation space with the organisation's own hardware. Before cloud computing the model had no name because it was the only model; the term was retrofitted as a contrast class once [[Infrastructure As A Service]] and [[Software As A Service]] made "someone else's data centre" the default alternative. The defining features are ownership of the hardware lifecycle, operational responsibility for the entire stack from power and cooling to application patches, and a capital-expenditure cost profile: capacity is bought up front and depreciated, rather than metered per hour.

  The trade-offs against [[Cloud Computing]] are well mapped. On-premises offers physical data custody (decisive for classified workloads, air-gapped environments, and strict data-residency regimes), deterministic latency to co-located equipment (factory floors, trading venues, hospitals), no egress fees, and — at high sustained utilisation — lower unit cost than equivalent rented capacity. Against that stand slow procurement, capacity that must be sized for peak rather than average, the burden of staffing 24/7 operations, and the absence of the managed databases, queues, and AI services that cloud platforms bundle. Security is a genuine draw rather than an automatic win on either side: cloud providers patch hypervisors faster than most enterprises, but on-premises keeps the attack surface and the audit trail under one roof.

  In practice pure positions are rare. Most large organisations operate a [[Hybrid Cloud]]: regulated systems of record and latency-critical workloads stay on-premises while elastic and customer-facing workloads run in public cloud, with private connectivity between the two. Vendors now sell the boundary itself — AWS Outposts, Azure Stack/Azure Local, and Google Distributed Cloud place cloud-operated racks inside customer facilities, while [[Edge Computing]] pushes small on-premises footprints out to shops, cell sites, and vehicles.

  ## Current Landscape

  After a decade of cloud-first orthodoxy, the pendulum has partially swung back under the banner of "cloud repatriation": organisations with stable, predictable workloads (large databases, video, simulation, and increasingly self-hosted AI inference on their own GPUs) report material savings from moving them back on-premises, with 37signals' documented exit from AWS a widely cited case. Data-sovereignty regulation in the EU, the growth of sovereign-cloud offerings, and GPU scarcity have reinforced the trend. The realistic synthesis is workload placement as an ongoing economic decision: on-premises is no longer a legacy posture but one point on a continuum running from owned racks through colocation and hosted private cloud to hyperscale public regions.
