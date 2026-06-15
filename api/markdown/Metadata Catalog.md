public:: true

# Metadata Catalog
```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:metadata-catalog", "@type": "Page", "title": "Metadata Catalog", "vc:slug": "metadata-catalog", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:metadata-catalog",
  "@type": "Class",
  "label": "Metadata Catalog",
  "definition": "A metadata catalog is a centralised, searchable inventory of an organisation's data assets and their descriptive, technical, operational, and business metadata. It records schemas, locations, ownership, lineage, classifications, and usage, enabling users to discover, understand, trust, and govern data. By unifying metadata across heterogeneous stores, it underpins data discovery, governance, and self-service analytics.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-catalog",
      "label": "Data Catalog"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:metadata-management",
        "label": "Metadata Management"
      },
      {
        "@id": "urn:ngm:class:data-lineage",
        "label": "Data Lineage"
      },
      {
        "@id": "urn:ngm:class:schema-registry",
        "label": "Schema Registry"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:metadata-management",
        "label": "Metadata Management"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-catalog",
        "label": "Data Catalog"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-discovery",
        "label": "Data Discovery"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      },
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-lineage",
        "label": "Data Lineage"
      },
      {
        "@id": "urn:ngm:class:schema-registry",
        "label": "Schema Registry"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:metadata-management",
        "label": "Metadata Management"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-lake",
        "label": "Data Lake"
      },
      {
        "@id": "urn:ngm:class:data-warehouse",
        "label": "Data Warehouse"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:master-data-management",
        "label": "Master Data Management"
      },
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      },
      {
        "@id": "urn:ngm:class:data-discovery",
        "label": "Data Discovery"
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
  - [[Metadata Catalog]] is defined in relation to [[Data Catalog]], [[Metadata Management]], [[Data Lineage]], [[Data Governance]], building on [[Data Catalog]].
  - A metadata catalog is a centralised, searchable inventory of an organisation's data assets and their descriptive, technical, operational, and business metadata. It records schemas, locations, ownership, lineage, classifications, and usage, enabling users to discover, understand, trust, and govern data. By unifying metadata across heterogeneous stores, it underpins data discovery, governance, and self-service analytics.

- ### Overview
  - A metadata catalog acts as a single source of truth about data: what exists, where it lives, what it means, who owns it, how fresh and trustworthy it is, and how it relates to other assets. It harvests technical metadata from sources and enriches it with business glossaries, tags, classifications, and lineage.
  - By making this metadata searchable and collaborative, the catalog turns scattered, tribal knowledge into a shared, governed resource. It is the connective tissue of modern data platforms, mediating discovery for analysts and policy enforcement for stewards.

- ### Key aspects
  - Automated harvesting of technical metadata and crawling of sources across lakes, warehouses, and streams.
  - Business context: glossaries, classifications, ownership, certification, and usage popularity.
  - Lineage capture and impact analysis linking upstream sources to downstream consumers.

- ### Applications
  - Self-service data discovery so analysts find trustworthy datasets quickly.
  - Governance: tracking sensitive data, enforcing access policy, and demonstrating compliance.
  - Change-impact analysis before altering schemas or pipelines.

- ### Relationships
  - subClassOf:: [[Data Catalog]]
  - hasPart:: [[Metadata Management]]
  - hasPart:: [[Data Lineage]]
  - hasPart:: [[Schema Registry]]
  - requires:: [[Metadata Management]]
  - requires:: [[Data Governance]]
  - partOf:: [[Data Catalog]]
  - enables:: [[Data Discovery]]
  - enables:: [[Data Governance]]
  - supports:: [[Data Management]]
  - supports:: [[Data Quality]]
  - uses:: [[Data Lineage]]
  - uses:: [[Schema Registry]]
  - dependsOn:: [[Metadata Management]]
  - bridgesTo:: [[Data Lake]]
  - bridgesTo:: [[Data Warehouse]]
  - relatedTo:: [[Master Data Management]]
  - relatedTo:: [[Data Quality]]
  - relatedTo:: [[Data Discovery]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
