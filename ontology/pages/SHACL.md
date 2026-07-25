public:: true

# SHACL
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:shacl",
  "@type": "Page",
  "title": "SHACL",
  "vc:slug": "shacl",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:shacl",
  "@type": "Class",
  "label": "SHACL",
  "definition": "SHACL (Shapes Constraint Language) is a W3C standard for validating RDF graphs against a set of declarative conditions expressed as shapes. It defines constraints on the structure, datatypes, cardinality and value ranges that nodes in a graph must satisfy, and reports conformance results identifying any violations. SHACL enables data quality assurance and interface contracts for linked data, complementing OWL by focusing on validation rather than inference.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:knowledge-representation",
      "label": "Knowledge Representation"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      },
      {
        "@id": "urn:ngm:class:turtle",
        "label": "Turtle"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:owl",
        "label": "OWL"
      },
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:owl",
        "label": "OWL"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:shapes-constraint-language",
      "label": "Shapes Constraint Language"
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
  - [[SHACL]] is a W3C language for validating [[RDF]] data against declarative shapes that describe required structure and constraints.
  - It sits within [[Knowledge Representation]] and complements [[OWL]] by validating data rather than inferring new facts.
  - Shapes are themselves written in RDF and commonly serialised in [[Turtle]].
- ### Overview
  - As linked data and knowledge graphs grew, practitioners needed a way to assert and check structural expectations on RDF.
  - SHACL provides a closed-world, validation-oriented complement to OWL's open-world inference semantics.
  - A SHACL processor takes a data graph and a shapes graph and produces a validation report listing conformance and violations.
  - It underpins data contracts, ingestion gates and quality controls in [[Knowledge Graph]] pipelines.
- ### Mechanisms
  - Node shapes constrain the properties and values of targeted nodes.
  - Property shapes specify cardinality, datatype, value range and pattern constraints.
  - Targets select which nodes a shape applies to, by class, instance or query.
  - SHACL-SPARQL extends validation with custom constraints expressed in [[SPARQL]].
- ### Applications
  - Validating data before loading into a knowledge graph or triple store.
  - Defining and enforcing data contracts between producers and consumers.
  - Quality assurance and conformance reporting for [[Linked Data]] publishing.
  - Form generation and editing constraints driven by shapes.
- ### Relationships
  - partOf:: [[Knowledge Representation]]
  - uses:: [[RDF]]
  - uses:: [[Turtle]]
  - supports:: [[Data Quality]]
  - supports:: [[Data Governance]]
  - relatedTo:: [[OWL]]
  - relatedTo:: [[SPARQL]]
  - relatedTo:: [[Linked Data]]
  - enables:: [[Knowledge Graph]]
  - standardizedBy:: [[Knowledge Representation]]
  - contrastsWith:: [[OWL]]
  - dependsOn:: [[RDF]]
- ### Provenance
  - updated:: 2026-06-15
