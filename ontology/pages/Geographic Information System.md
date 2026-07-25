public:: true

# Geographic Information System

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:geographic-information-system",
  "@type": "Page",
  "title": "Geographic Information System",
  "vc:slug": "geographic-information-system",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:geographic-information-system",
  "@type": "Class",
  "label": "Geographic Information System",
  "definition": "A Geographic Information System (GIS) is an integrated framework for capturing, storing, managing, analysing and visualising data that is referenced to locations on the Earth's surface. It combines spatial databases, coordinate systems and analytical operations to model geographic phenomena and answer questions about place, distance, pattern and relationship. GIS underpins applications ranging from urban planning and environmental monitoring to logistics and emergency response.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "Spatial Computing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:spatial-database",
        "label": "Spatial Database"
      },
      {
        "@id": "urn:ngm:class:coordinate-system",
        "label": "Coordinate System"
      },
      {
        "@id": "urn:ngm:class:mapping",
        "label": "Mapping"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:spatial-database",
        "label": "Spatial Database"
      },
      {
        "@id": "urn:ngm:class:coordinate-system",
        "label": "Coordinate System"
      },
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:environmental-monitoring",
        "label": "Environmental Monitoring"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:remote-sensing",
        "label": "Remote Sensing"
      },
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      },
      {
        "@id": "urn:ngm:class:data-analytics",
        "label": "Data Analytics"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:environmental-monitoring",
        "label": "Environmental Monitoring"
      },
      {
        "@id": "urn:ngm:class:data-analytics",
        "label": "Data Analytics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:mapping",
        "label": "Mapping"
      },
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      },
      {
        "@id": "urn:ngm:class:data-pipeline",
        "label": "Data Pipeline"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:coordinate-system",
        "label": "Coordinate System"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:gis",
      "label": "GIS"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A Geographic Information System (GIS) is an integrated framework for capturing, storing, managing, analysing and visualising data that is referenced to locations on the Earth's surface. It combines spatial databases, coordinate systems and analytical operations to model geographic phenomena and answer questions about place, distance, pattern and relationship. GIS underpins applications ranging from urban planning and environmental monitoring to logistics and emergency response.
  - Closely related concepts include [[Spatial Computing]], [[Remote Sensing]], [[Spatial Database]], [[Coordinate System]], [[Mapping]].
- ### Overview
  - [[Spatial Computing]] provides the broader context within which Geographic Information System sits.
  - Geographic Information System is treated here as a member of the **spatial-computing** domain at **mature** maturity.
  - It is referenced across the knowledge graph by classes that depend on or compose it, making it a central node that warranted an explicit definition.
- ### Key aspects
  - It comprises [[Spatial Database]].
  - It comprises [[Coordinate System]].
  - It comprises [[Mapping]].
  - It requires [[Data Management]].
  - It makes use of [[Remote Sensing]].
  - It makes use of [[Sensor]].
  - It makes use of [[Data Analytics]].
- ### Mechanisms
  - Geographic Information System operates by combining its constituent parts into a coherent capability that other classes can rely upon.
  - Its guarantees and behaviours are realised through the dependencies and standards captured in the relations below.
- ### Applications
  - Enables and supports [[Environmental Monitoring]].
  - Enables and supports [[Digital Twin]].
  - Enables and supports [[Data Analytics]].
- ### Relationships
  - hasPart:: [[Spatial Database]]
  - hasPart:: [[Coordinate System]]
  - hasPart:: [[Mapping]]
  - partOf:: [[Spatial Computing]]
  - requires:: [[Spatial Database]]
  - requires:: [[Coordinate System]]
  - requires:: [[Data Management]]
  - enables:: [[Environmental Monitoring]]
  - enables:: [[Digital Twin]]
  - uses:: [[Remote Sensing]]
  - uses:: [[Sensor]]
  - uses:: [[Data Analytics]]
  - supports:: [[Environmental Monitoring]]
  - supports:: [[Data Analytics]]
  - relatedTo:: [[Mapping]]
  - relatedTo:: [[Metadata]]
  - relatedTo:: [[Data Pipeline]]
  - dependsOn:: [[Coordinate System]]
  - bridgesTo:: [[Digital Twin]]
  - subClassOf:: [[Spatial Computing]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
