public:: true

# Database Query
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bb148339074b49993c185fef0d21302f398c4642c942be0066eca70a5b8db9e9",
  "@type": "Page",
  "vc:slug": "database-query",
  "title": "Database Query",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9562"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Database Query"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:database-query",
  "@type": "Class",
  "label": "Database Query",
  "definition": "A structured request submitted to a database management system to retrieve, insert, update, or delete data according to defined criteria. Queries are expressed in formal query languages such as SQL for relational databases or SPARQL for RDF triple stores, and underpin knowledge graph retrieval, analytics pipelines, and real-time application data access.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    },
    {
      "@id": "urn:ngm:class:data-management",
      "label": "Data Management"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      },
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      },
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:database-query:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bb148339074b49993c185fef0d21302f398c4642c942be0066eca70a5b8db9e9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A structured request submitted to a database management system to retrieve, insert, update, or delete data according to defined criteria. Queries are expressed in formal query languages such as SQL for relational databases or SPARQL for RDF triple stores, and underpin knowledge graph retrieval, analytics pipelines, and real-time application data access.

- ### Semantic Classification
  - owl-class:: infrastructure:DatabaseQuery
  - owl-role:: concept

- ### Relationships
  - Uses [[SPARQL]]
  - Uses [[REST API]]
  - Part Of [[Data Management]]
  - Enables [[Knowledge Graph]]
  - Enables [[Linked Data]]
  - Related To [[RDF]]
  - Related To [[Semantic Web]]

- ### Content

  ## Overview

  Database queries are the primary mechanism for extracting structured information from persistent stores. In knowledge graph contexts, SPARQL queries traverse RDF triple patterns to answer complex relational questions. In metaverse and XR platforms, low-latency query execution is critical for real-time asset retrieval, spatial indexing, and user state synchronisation.

- ### Provenance
  - bridges-to:: [[Blockchain]] (bc)
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
