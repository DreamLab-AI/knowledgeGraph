SHACL (Shapes Constraint Language) is a W3C standard for validating RDF graphs against a set of declarative conditions expressed as shapes. It defines constraints on the structure, datatypes, cardinality and value ranges that nodes in a graph must satisfy, and reports conformance results identifying any violations. SHACL enables data quality assurance and interface contracts for linked data, complementing OWL by focusing on validation rather than inference.

### Overview

- As linked data and knowledge graphs grew, practitioners needed a way to assert and check structural expectations on RDF.
- SHACL provides a closed-world, validation-oriented complement to OWL's open-world inference semantics.
- A SHACL processor takes a data graph and a shapes graph and produces a validation report listing conformance and violations.
- It underpins data contracts, ingestion gates and quality controls in [[Knowledge Graph]] pipelines.

### Mechanisms

- Node shapes constrain the properties and values of targeted nodes.
- Property shapes specify cardinality, datatype, value range and pattern constraints.
- Targets select which nodes a shape applies to, by class, instance or query.
- SHACL-SPARQL extends validation with custom constraints expressed in [[SPARQL]].

### Applications

- Validating data before loading into a knowledge graph or triple store.
- Defining and enforcing data contracts between producers and consumers.
- Quality assurance and conformance reporting for [[Linked Data]] publishing.
- Form generation and editing constraints driven by shapes.

### Provenance

