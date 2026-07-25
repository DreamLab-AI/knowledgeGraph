public:: true

# Building Information Modelling
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:building-information-modelling", "@type":"Page", "title":"Building Information Modelling", "vc:slug":"building-information-modelling", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:building-information-modelling",
  "@type":"Class",
  "label":"Building Information Modelling",
  "definition":"Building Information Modelling (BIM) is a collaborative process for creating and managing a shared digital representation of the physical and functional characteristics of a built asset across its lifecycle. A BIM model is an object-oriented, parametric 3D database in which geometry is enriched with semantic data such as materials, costs, schedules and performance properties. It supports coordinated design, clash detection, quantity take-off and facility management by allowing architects, engineers and contractors to work against a single federated source of truth. BIM underpins the convergence of construction practice with digital twin and spatial computing technologies.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:spatial-computing","label":"Spatial Computing"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:digital-twin","label":"Digital Twin"}],
    "hasPart":[{"@id":"urn:ngm:class:point-cloud","label":"Point Cloud"}],
    "requires":[{"@id":"urn:ngm:class:interoperability","label":"Interoperability"}],
    "enables":[{"@id":"urn:ngm:class:digital-twin-technology","label":"Digital Twin Technology"}],
    "uses":[{"@id":"urn:ngm:class:photogrammetry","label":"Photogrammetry"},{"@id":"urn:ngm:class:lidar","label":"LiDAR"}],
    "supports":[{"@id":"urn:ngm:class:digital-twin","label":"Digital Twin"}],
    "standardizedBy":[{"@id":"urn:ngm:class:standards","label":"Standards"}],
    "bridgesTo":[{"@id":"urn:ngm:class:geographic-information-system","label":"Geographic Information System"}],
    "relatedTo":[{"@id":"urn:ngm:class:point-cloud","label":"Point Cloud"},{"@id":"urn:ngm:class:photogrammetry","label":"Photogrammetry"},{"@id":"urn:ngm:class:spatial-computing","label":"Spatial Computing"}],
    "dependsOn":[{"@id":"urn:ngm:class:interoperability","label":"Interoperability"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Building Information Modelling (BIM) is a collaborative process for producing and governing a shared digital model of a built asset. It draws on [[Spatial Computing]], [[Digital Twin]], [[Photogrammetry]], [[LiDAR]] and [[Geographic Information System]] to enrich 3D geometry with semantic data.
- ### Overview
- BIM moves construction beyond drafting into data-driven asset management. A federated BIM model stores not only geometry but also embedded attributes such as materials, costs, time scheduling (4D), cost (5D) and operational data.
- It functions as the single source of truth across the design, build and operate phases, reducing rework and coordination errors.
- The discipline spans authoring tools, common data environments, open exchange formats and lifecycle management workflows.
- ### Key aspects
- Object-oriented parametric modelling: elements are intelligent objects carrying behaviour and attributes rather than dumb lines.
- Federation: discipline models (architectural, structural, MEP) are combined and checked for spatial clashes.
- Levels of development and information define how much detail and reliability a model element carries at each stage.
- Open data exchange relies on vendor-neutral schemas to preserve [[Interoperability]] across tools.
- ### Mechanisms
- Authoring tools generate parametric geometry linked to data dictionaries.
- Clash detection algorithms test federated models for hard and soft collisions before construction.
- Quantity take-off and scheduling derive directly from model attributes.
- Reality capture via [[Photogrammetry]] and [[LiDAR]] produces [[Point Cloud]] data used to update or verify models.
- ### Applications
- Coordinated multidisciplinary design and clash avoidance.
- Construction sequencing, cost estimation and procurement.
- Handover of as-built data into facility and asset management.
- Feeding spatially accurate models into [[Digital Twin]] and [[Digital Twin Technology]] platforms for operations.
- Integration with [[Geographic Information System]] for infrastructure and city-scale planning.
- ### Relationships
- partOf:: [[Digital Twin]]
- hasPart:: [[Point Cloud]]
- requires:: [[Interoperability]]
- enables:: [[Digital Twin Technology]]
- uses:: [[Photogrammetry]]
- uses:: [[LiDAR]]
- supports:: [[Digital Twin]]
- standardizedBy:: [[Standards]]
- bridgesTo:: [[Geographic Information System]]
- relatedTo:: [[Spatial Computing]]
- dependsOn:: [[Interoperability]]
- ### Provenance
- updated:: 2026-06-15
