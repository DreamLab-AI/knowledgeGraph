public:: true

# Query Optimiser

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:query-optimiser",
  "@type": "Page",
  "title": "Query Optimiser",
  "vc:slug": "query-optimiser",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:query-optimiser",
  "@type": "Class",
  "label": "Query Optimiser",
  "definition": "A query optimiser is the component of a database management system that transforms a declarative query into an efficient physical execution plan. It enumerates candidate plans, estimates their cost using statistics about data distribution and access paths, and selects the plan expected to minimise resource usage. Cost-based optimisers rely on cardinality estimation and index awareness, while rule-based optimisers apply heuristic transformations.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:query-engine",
      "label": "Query Engine"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:database-management-system",
        "label": "Database Management System"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:indexing",
        "label": "Indexing"
      },
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      },
      {
        "@id": "urn:ngm:class:indexing",
        "label": "Indexing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sql",
        "label": "SQL"
      },
      {
        "@id": "urn:ngm:class:relational-database",
        "label": "Relational Database"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:performance-optimization",
        "label": "Performance Optimization"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:performance-optimization",
        "label": "Performance Optimization"
      },
      {
        "@id": "urn:ngm:class:database-query",
        "label": "Database Query"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:query-engine",
        "label": "Query Engine"
      },
      {
        "@id": "urn:ngm:class:database",
        "label": "Database"
      },
      {
        "@id": "urn:ngm:class:caching",
        "label": "Caching"
      },
      {
        "@id": "urn:ngm:class:postgresql",
        "label": "PostgreSQL"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:query-optimizer",
      "label": "Query Optimizer"
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
  - A query optimiser is the component of a database management system that transforms a declarative query into an efficient physical execution plan. It enumerates candidate plans, estimates their cost using statistics about data distribution and access paths, and selects the plan expected to minimise resource usage. Cost-based optimisers rely on cardinality estimation and index awareness, while rule-based optimisers apply heuristic transformations.
  - [[Database Management System]] [[SQL]] [[Indexing]] [[Performance Optimization]]
- ### Overview
  - The optimiser sits between the parser and the execution engine, turning a logical query tree into a chosen physical plan.
  - Cost-based optimisation depends on accurate statistics; stale or missing statistics lead to poor plans and unpredictable performance.
  - Join ordering, access-path selection, and predicate pushdown are among the most impactful decisions an optimiser makes.
- ### Mechanisms
  - Plan enumeration generates alternative logical and physical plans for a query.
  - Cardinality estimation predicts how many rows each operator will produce.
  - Cost modelling assigns estimated CPU, I/O, and memory costs to candidate plans.
  - Index selection and join-method choice (nested loop, hash, merge) determine runtime behaviour.
- ### Applications
  - Accelerating analytical and transactional workloads in relational databases such as PostgreSQL.
  - Powering query planning in distributed and columnar query engines.
  - Informing database administrators where indexes or rewritten queries are needed.
- ### Relationships
  - partOf:: [[Database Management System]]
  - hasPart:: [[Indexing]]
  - hasPart:: [[Statistics]]
  - requires:: [[Statistics]]
  - requires:: [[Indexing]]
  - uses:: [[SQL]]
  - uses:: [[Relational Database]]
  - enables:: [[Performance Optimization]]
  - supports:: [[Database Query]]
  - relatedTo:: [[Query Engine]]
  - relatedTo:: [[Database]]
  - relatedTo:: [[Caching]]
  - relatedTo:: [[PostgreSQL]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
