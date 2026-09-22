public:: true

# Urban Planning

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:urban-planning", "@type": "Page", "title": "Urban Planning", "vc:slug": "urban-planning", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:urban-planning",
  "@type": "Class",
  "label": "Urban Planning",
  "definition": "Urban planning is the discipline concerned with the design, regulation and long-term development of land use, infrastructure and public space within cities and regions. Contemporary practice increasingly draws on geospatial data and digital twins of urban systems to model traffic, utilities, housing and environmental impact before physical intervention. It sits at the intersection of policy, civil engineering and spatial computing tools that visualise and simulate proposed changes.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "Spatial Computing"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:geospatial-data",
        "label": "Geospatial Data"
      }
    ],
    "enables": [],
    "requires": [],
    "implements": [],
    "partOf": [],
    "contrastsWith": [],
    "dependsOn": [],
    "bridgesTo": [],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-twin-of-society-dto-s",
        "label": "Digital Twin of Society (DToS)"
      }
    ],
    "supports": []
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Urban planning is the discipline concerned with the design, regulation and long-term development of land use, infrastructure and public space within cities and regions. Contemporary practice increasingly draws on geospatial data and digital twins of urban systems to model traffic, utilities, housing and environmental impact before physical intervention. It sits at the intersection of policy, civil engineering and spatial computing tools that visualise and simulate proposed changes.
- ### Relationships
	- uses:: [[Geospatial Data]]
	- relatedTo:: [[Digital Twin of Society (DToS)]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
