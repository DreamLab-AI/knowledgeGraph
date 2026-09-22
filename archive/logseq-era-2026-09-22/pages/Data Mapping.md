public:: true

# Data Mapping
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:data-mapping",
  "@type": "Page",
  "title": "Data Mapping",
  "vc:slug": "data-mapping",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-mapping",
  "@type": "Class",
  "label": "Data Mapping",
  "definition": "Data mapping is the process of defining correspondences between fields, elements, or schemas of a source data structure and those of a target, specifying how each attribute is matched, transformed, or combined during movement between systems. It is foundational to data integration, migration, and interoperability, guiding extract-transform-load pipelines and message translation so that semantically equivalent information aligns across heterogeneous models. In privacy and governance contexts, data mapping also denotes the cataloguing of where personal data resides and how it flows, which is a prerequisite for lineage tracking and regulatory compliance.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-integration",
      "label": "Data Integration"
    }
  ],
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-modelling",
        "label": "Data Modelling"
      },
      {
        "@id": "urn:ngm:class:schema-mapping",
        "label": "Schema Mapping"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-transformation",
        "label": "Data Transformation"
      },
      {
        "@id": "urn:ngm:class:data-catalogue",
        "label": "Data Catalogue"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-lineage",
        "label": "Data Lineage"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:etl-pipeline",
        "label": "ETL Pipeline"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-20022",
        "label": "ISO 20022"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Data Mapping is a key concept in the governance domain. Related concepts include [[Data Integration]] [[Schema Mapping]] [[Data Modelling]] [[Data Lineage]].
  - Data mapping is the process of defining correspondences between fields, elements, or schemas of a source data structure and those of a target, specifying how each attribute is matched, transformed, or combined during movement between systems. It is foundational to data integration, migration, and interoperability, guiding extract-transform-load pipelines and message translation so that semantically equivalent information aligns across heterogeneous models. In privacy and governance contexts, data mapping also denotes the cataloguing of where personal data resides and how it flows, which is a prerequisite for lineage tracking and regulatory compliance.
- ### Overview
  - Data Mapping sits within the broader category of [[Data Integration]], which it specialises.
  - It connects to a network of 12 related classes across the knowledge graph, anchoring edges that previously pointed to an undefined node.
- ### Key aspects
  - uses: [[ETL Pipeline]]
  - requires: [[Data Transformation]]
  - requires: [[Data Catalogue]]
- ### Mechanisms
  - Data Mapping operates through its constituent parts and dependencies, integrating with adjacent systems to deliver its function within governance.
  - Depends on [[Data Modelling]] for correct operation.
  - Depends on [[Schema Mapping]] for correct operation.
- ### Applications
  - Applied to advance [[Data Lineage]].
  - Applied to advance [[Interoperability]].
  - Applied to advance [[Data Governance]].
  - Applied to advance [[Regulatory Compliance]].
- ### Relationships
  - subClassOf:: [[Data Integration]]
  - dependsOn:: [[Data Modelling]]
  - dependsOn:: [[Schema Mapping]]
  - requires:: [[Data Transformation]]
  - requires:: [[Data Catalogue]]
  - partOf:: [[Data Integration]]
  - enables:: [[Data Lineage]]
  - enables:: [[Interoperability]]
  - uses:: [[ETL Pipeline]]
  - supports:: [[Data Governance]]
  - supports:: [[Regulatory Compliance]]
  - standardizedBy:: [[ISO 20022]]
  - relatedTo:: [[Data Protection]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
