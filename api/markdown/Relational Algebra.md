public:: true

# Relational Algebra
```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:relational-algebra", "@type": "Page", "title": "Relational Algebra", "vc:slug": "relational-algebra", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:relational-algebra",
  "@type": "Class",
  "label": "Relational Algebra",
  "definition": "Relational algebra is a formal, procedural query language consisting of operators that take relations as input and produce relations as output. Its core operators — selection, projection, union, set difference, Cartesian product, rename, and derived operators such as join — provide a closed algebra that gives precise semantics to relational queries. It is the theoretical foundation for SQL and for the query optimisation performed by relational database systems.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:relational-database",
      "label": "Relational Database"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:relational-calculus",
        "label": "Relational Calculus"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:relational-model",
        "label": "Relational Model"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:sql",
        "label": "SQL"
      },
      {
        "@id": "urn:ngm:class:query-optimization",
        "label": "Query Optimisation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:relational-model",
        "label": "Relational Model"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:set-theory",
        "label": "Set Theory"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:join",
        "label": "Join"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:sql",
        "label": "SQL"
      },
      {
        "@id": "urn:ngm:class:query-processing",
        "label": "Query Processing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:set-theory",
        "label": "Set Theory"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:relational-database",
        "label": "Relational Database"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:relational-calculus",
        "label": "Relational Calculus"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:relational-database",
        "label": "Relational Database"
      },
      {
        "@id": "urn:ngm:class:database-management-system",
        "label": "Database Management System"
      },
      {
        "@id": "urn:ngm:class:data-model",
        "label": "Data Model"
      },
      {
        "@id": "urn:ngm:class:query-optimization",
        "label": "Query Optimisation"
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
  - [[Relational Algebra]] is defined in relation to [[Relational Model]], [[SQL]], [[Set Theory]], [[Relational Database]], building on [[Relational Database]].
  - Relational algebra is a formal, procedural query language consisting of operators that take relations as input and produce relations as output. Its core operators — selection, projection, union, set difference, Cartesian product, rename, and derived operators such as join — provide a closed algebra that gives precise semantics to relational queries. It is the theoretical foundation for SQL and for the query optimisation performed by relational database systems.

- ### Overview
  - Introduced by E. F. Codd alongside the relational model, relational algebra treats relations as sets of tuples and defines operators that are closed — every operator returns a relation, so expressions compose. Selection filters rows, projection chooses columns, and join combines relations on matching attributes, with union, difference, and product supplying set-theoretic combination.
  - Its procedural nature specifies how to compute a result, which makes it ideal as an internal representation for query engines. Equivalence laws over its operators (commutativity, pushing selections, reordering joins) are exactly what cost-based optimisers exploit to transform queries into cheaper plans.

- ### Key aspects
  - Closed set of operators over relations: selection, projection, union, difference, product, rename, and joins.
  - Algebraic equivalences enabling query rewriting and optimisation.
  - Equivalence in expressive power to safe relational calculus, the basis of relational completeness.

- ### Applications
  - Defining the semantics of SQL queries and views.
  - Internal query representation and cost-based optimisation in database engines.
  - Teaching and reasoning about correctness of relational queries.

- ### Relationships
  - subClassOf:: [[Relational Database]]
  - contrastsWith:: [[Relational Calculus]]
  - implements:: [[Relational Model]]
  - supports:: [[SQL]]
  - supports:: [[Query Optimisation]]
  - partOf:: [[Relational Model]]
  - uses:: [[Set Theory]]
  - hasPart:: [[Join]]
  - enables:: [[SQL]]
  - enables:: [[Query Processing]]
  - requires:: [[Set Theory]]
  - dependsOn:: [[Relational Database]]
  - bridgesTo:: [[Relational Calculus]]
  - relatedTo:: [[Relational Database]]
  - relatedTo:: [[Database Management System]]
  - relatedTo:: [[Data Model]]
  - relatedTo:: [[Query Optimisation]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
