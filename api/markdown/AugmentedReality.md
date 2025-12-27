- ### OntologyBlock
  id:: augmentedreality-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0004
	- source-domain:: mv
	- preferred-term:: AugmentedReality
	- status:: active
	- public-access:: true
	- definition:: Technology that overlays digital information, graphics, and interactive elements onto the real-world environment in real-time through devices like smartphones, tablets, or AR headsets.
	- maturity:: mature
	- owl:class:: mv:AugmentedReality
	- owl:physicality:: Technology
	- owl:role:: System
	- belongsToDomain:: [[MetaverseDomain]]

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Augmentedreality))

;; Annotations
(AnnotationAssertion rdfs:label :Augmentedreality "AugmentedReality"@en)
(AnnotationAssertion rdfs:comment :Augmentedreality "A component of the metaverse ecosystem."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Augmentedreality "mv-1761742247883"^^xsd:string)
```

### Relationships
- is-subclass-of:: [[Metaverse]]
