public:: true

# Data Management Platform

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:data-management-platform",
  "@type": "Page",
  "title": "Data Management Platform",
  "vc:slug": "data-management-platform",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-management-platform",
  "@type": "Class",
  "label": "Data Management Platform",
  "definition": "A data management platform is a centralised system for collecting, organising, segmenting, and activating large volumes of data drawn from multiple sources so that it can be used for analytics, audience targeting, and decision-making. Historically associated with advertising, where it aggregated and anonymised audience data for campaign targeting, the term also denotes broader enterprise platforms that unify data pipelines, storage, and governance. It is closely related to, but distinct from, customer data platforms and data warehouses.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data",
      "label": "Data"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-pipeline",
        "label": "Data Pipeline"
      },
      {
        "@id": "urn:ngm:class:data-warehouse",
        "label": "Data Warehouse"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:customer-data-platform",
        "label": "Customer Data Platform"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:programmatic-advertising",
        "label": "Programmatic Advertising"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:advertising",
        "label": "Advertising"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consent-management",
        "label": "Consent Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:synthetic-data-generator",
        "label": "Synthetic Data Generator"
      },
      {
        "@id": "urn:ngm:class:data-warehouse",
        "label": "Data Warehouse"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data",
        "label": "Data"
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
- A data management platform is a centralised [[Data]] system for aggregating, segmenting, and activating multi-source data.
- It is part of broader [[Data Integration]] architecture.
- It contrasts with the [[Customer Data Platform]], which centres on persistent individual profiles.
- It commonly enables [[Programmatic Advertising]] and supports [[Data Governance]].
- ### Overview
- The platform ingests data from many sources, normalises it, and organises it into segments usable downstream.
- In advertising it has historically aggregated and anonymised audience signals to drive campaign targeting.
- Enterprise interpretations emphasise unified pipelines, storage, governance, and activation across an organisation.
- It is distinguished from a data warehouse by its emphasis on activation and segmentation rather than analytical storage alone.
- ### Key aspects
- Ingestion and normalisation from diverse first- and third-party sources.
- Audience or entity segmentation for targeting and analysis.
- Activation interfaces feeding downstream systems and campaigns.
- Governance and consent controls over collected data.
- ### Applications
- Audience segmentation for programmatic advertising.
- Unifying marketing and analytics data across channels.
- Feeding personalisation and recommendation systems.
- Supporting data governance and consent enforcement at scale.
- ### Relationships
- partOf:: [[Data Integration]]
- hasPart:: [[Data Pipeline]]
- hasPart:: [[Data Warehouse]]
- contrastsWith:: [[Customer Data Platform]]
- uses:: [[Data Integration]]
- enables:: [[Programmatic Advertising]]
- supports:: [[Data Governance]]
- supports:: [[Advertising]]
- requires:: [[Consent Management]]
- relatedTo:: [[Synthetic Data Generator]]
- relatedTo:: [[Data Warehouse]]
- dependsOn:: [[Data]]
- ### Provenance
- updated:: 2026-06-15
