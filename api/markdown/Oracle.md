- ### OntologyBlock
  id:: oracle-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0045
	- source-domain:: mv
	- preferred-term:: Oracle
	- status:: draft
	- public-access:: true
	- definition:: A component of the metaverse ecosystem.
	- maturity:: draft
	- owl:class:: mv:Oracle
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Oracle))

;; Annotations
(AnnotationAssertion rdfs:label :Oracle "Oracle"@en)
(AnnotationAssertion rdfs:comment :Oracle "A component of the metaverse ecosystem."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Oracle "mv-1761742247950"^^xsd:string)
```

### Relationships
- is-subclass-of:: [[Metaverse]]
