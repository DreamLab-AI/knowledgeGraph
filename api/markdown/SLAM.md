- ### OntologyBlock
  id:: slam-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0052
	- source-domain:: mv
	- preferred-term:: SLAM
	- status:: draft
	- public-access:: true
	- definition:: A component of the metaverse ecosystem.
	- maturity:: draft
	- owl:class:: mv:SLAM
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Slam))

;; Annotations
(AnnotationAssertion rdfs:label :Slam "SLAM"@en)
(AnnotationAssertion rdfs:comment :Slam "A component of the metaverse ecosystem."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Slam "mv-1761742247966"^^xsd:string)
```

### Relationships
- is-subclass-of:: [[Metaverse]]
