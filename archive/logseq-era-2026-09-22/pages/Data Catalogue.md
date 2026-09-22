public:: true

# Data Catalogue

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:data-catalogue",
  "@type": "Page",
  "title": "Data Catalogue",
  "vc:slug": "data-catalogue",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-catalogue",
  "@type": "Class",
  "label": "Data Catalogue",
  "definition": "A data catalogue is a centralised, searchable inventory of an organisation's data assets enriched with metadata, descriptions, lineage and usage information. It helps users discover, understand, trust and govern data by linking technical metadata with business context and policies. Modern catalogues often automate metadata harvesting and use collaboration features to capture institutional knowledge.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      },
      {
        "@id": "urn:ngm:class:data-dictionary",
        "label": "Data Dictionary"
      },
      {
        "@id": "urn:ngm:class:data-lineage",
        "label": "Data Lineage"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:metadata-management",
        "label": "Metadata Management"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-discovery",
        "label": "Data Discovery"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:master-data-management",
        "label": "Master Data Management"
      },
      {
        "@id": "urn:ngm:class:data-lake",
        "label": "Data Lake"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:dublin-core",
        "label": "Dublin Core"
      },
      {
        "@id": "urn:ngm:class:data-standards",
        "label": "Data Standards"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
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
  - A data catalogue is a centralised, searchable inventory of an organisation's data assets enriched with metadata, descriptions, lineage and usage information. It helps users discover, understand, trust and govern data by linking technical metadata with business context and policies. Modern catalogues often automate metadata harvesting and use collaboration features to capture institutional knowledge.
  - Related concepts: [[Data Management]] [[Metadata Management]] [[Data Governance]] [[Data Discovery]] [[Data Lineage]]
- ### Overview
  - A data catalogue acts as the connective tissue of a data platform, providing a single place to find and understand data assets across databases, warehouses, lakes and pipelines. It harvests technical metadata automatically, augments it with business glossaries, ownership and quality indicators, and exposes search, lineage and access-request workflows. By making data discoverable and trustworthy it accelerates analytics while supporting governance and compliance.
- ### Key aspects
  - Automated harvesting of technical metadata from sources
  - Business glossary linking data to organisational terminology
  - Lineage tracking from source through transformation to consumption
  - Search, tagging and collaboration to capture tribal knowledge
  - Integration with governance policies and access controls
- ### Applications
  - Self-service data discovery for analysts and scientists
  - Data governance and stewardship programmes
  - Regulatory compliance and audit traceability
  - Impact analysis through end-to-end lineage
  - Onboarding and knowledge retention across teams
- ### Relationships
  - subClassOf:: [[Data Management]]
  - partOf:: [[Data Management]]
  - hasPart:: [[Metadata]]
  - hasPart:: [[Data Dictionary]]
  - hasPart:: [[Data Lineage]]
  - requires:: [[Metadata Management]]
  - supports:: [[Data Discovery]]
  - supports:: [[Data Governance]]
  - supports:: [[Data Quality]]
  - bridgesTo:: [[Master Data Management]]
  - bridgesTo:: [[Data Lake]]
  - uses:: [[Dublin Core]]
  - uses:: [[Data Standards]]
  - relatedTo:: [[Data Management]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
