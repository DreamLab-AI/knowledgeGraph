- ### OntologyBlock
  id:: layer2scaling-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0044
	- source-domain:: mv
	- preferred-term:: Layer2Scaling
	- status:: draft
	- public-access:: true
	- definition:: A component of the metaverse ecosystem.
	- maturity:: draft
	- owl:class:: mv:Layer2Scaling
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Layer2scaling))

;; Annotations
(AnnotationAssertion rdfs:label :Layer2scaling "Layer2Scaling"@en)
(AnnotationAssertion rdfs:comment :Layer2scaling "A component of the metaverse ecosystem."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Layer2scaling "mv-1761742247942"^^xsd:string)
```

### Relationships
- is-subclass-of:: [[Metaverse]]
