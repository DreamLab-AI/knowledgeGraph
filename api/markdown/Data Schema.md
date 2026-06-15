public:: true

# Data Schema
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-schema",
  "@type": "Page",
  "vc:slug": "data-schema",
  "title": "Data Schema",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-schema",
  "@type": "Class",
  "label": "Data Schema",
  "definition": "A Data Schema is a formal specification that defines the structure, types, constraints, and semantics of data within a system or exchange protocol. It enumerates fields, their data types, cardinality rules, allowed values, and relationships between entities, enabling machines to validate conformance and enabling humans to understand data contracts. Data schemas are expressed in formalisms such as JSON Schema, XML Schema Definition, RDF SHACL, or OWL, and are versioned to manage evolution over time. They underpin interoperability between systems, database design, API contracts, and linked-data publishing.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:schema-definition", "label": "Schema Definition"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:json-data-interchange-format-schema", "label": "JSON Schema"},
      {"@id": "urn:ngm:class:rdf", "label": "RDF"},
      {"@id": "urn:ngm:class:json-data-interchange-format-ld", "label": "JSON-LD"},
      {"@id": "urn:ngm:class:xml-schema-definition", "label": "XML Schema Definition"},
      {"@id": "urn:ngm:class:shacl", "label": "SHACL"},
      {"@id": "urn:ngm:class:owl", "label": "OWL"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"},
      {"@id": "urn:ngm:class:schema-registry", "label": "Schema Registry"},
      {"@id": "urn:ngm:class:data-validation", "label": "Data Validation"},
      {"@id": "urn:ngm:class:api-contract", "label": "API Contract"},
      {"@id": "urn:ngm:class:data-interoperability", "label": "Data Interoperability"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:data-type", "label": "Data Type"},
      {"@id": "urn:ngm:class:namespace", "label": "Namespace"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:field-definition", "label": "Field Definition"},
      {"@id": "urn:ngm:class:constraint", "label": "Constraint"},
      {"@id": "urn:ngm:class:cardinality-rule", "label": "Cardinality Rule"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:schema-versioning", "label": "Schema Versioning"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"},
      {"@id": "urn:ngm:class:metadata-schema", "label": "Metadata Schema"},
      {"@id": "urn:ngm:class:credential-schema", "label": "Credential Schema"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:schemaless-database", "label": "Schemaless Database"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"},
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:data-model", "label": "Data Model"},
    {"@id": "urn:ngm:class:schema", "label": "Schema"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.72
}
```

- ### Definition
  - A Data Schema is a formal specification—expressed in [[JSON Schema]], [[RDF]], or similar formalisms—that defines the structure, types, and constraints of data, enabling machine validation and supporting [[Knowledge Representation]] and interoperability across systems.

- ### Relationships
  - Data Schemas use [[JSON Schema]] for REST APIs and configuration files, [[RDF]] and [[JSON-LD]] for linked-data publishing, and [[Ontology]] frameworks for richer semantic constraint expression. They enable [[Knowledge Representation]] by providing the structural skeleton onto which semantic meaning is layered, and are curated in a [[Schema Registry]] to support discovery and governance. [[Metadata Schema]] extends data schemas to describe data about data, whilst [[Credential Schema]] applies the same principles to verifiable credential formats, ensuring that issued credentials are machine-verifiable against a published specification.

- ### Content
  - A Data Schema functions as a contract between producers and consumers of data. When a service publishes an API or a dataset, its schema tells downstream systems exactly what fields to expect, which are required, what types are valid, and what relationships exist between entities. This contract is the foundation of reliable integration: without it, every consumer must reverse-engineer structure from examples, leading to brittle assumptions and costly maintenance when producers change their data model.

  - Schema evolution is one of the most operationally significant challenges in data engineering. As systems mature, fields are added, renamed, or removed, and their types change. Versioning strategies—backwards-compatible additions, semantic versioning, schema negotiation via content-type headers—allow producers and consumers to evolve independently without breaking running integrations. A [[Schema Registry]] centralises published schema versions and enforces compatibility rules, rejecting schema changes that would break existing consumers.

  - In the semantic web and knowledge graph domains, [[RDF]] shapes languages such as SHACL and ShEx extend the expressive power of schemas to include graph-level integrity constraints, cardinality on property paths, and cross-entity consistency rules. This allows an [[Ontology]] to carry not just a taxonomy of classes but enforceable rules that any conformant dataset must satisfy, enabling automated quality gates in data pipelines.

  - Interoperability across industries depends on shared, publicly maintained schemas. Standards bodies publish canonical schemas for domains such as healthcare (FHIR), financial services ([[JSON Schema]] profiles), and credentials ([[Credential Schema]] in the W3C Verifiable Credentials ecosystem). Adoption of these schemas reduces integration friction, but also requires governance processes to manage proposals, deprecations, and the competing interests of different stakeholder communities.
