- ### OntologyBlock
  id:: datapipeline-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0011
	- preferred-term:: DataPipeline
	- status:: draft
	- public-access:: true
	- definition:: A component of the metaverse ecosystem.
	- maturity:: draft
	- owl:class:: mv:DataPipeline
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Datapipeline))

;; Annotations
(AnnotationAssertion rdfs:label :Datapipeline "DataPipeline"@en)
(AnnotationAssertion rdfs:comment :Datapipeline "A component of the metaverse ecosystem."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Datapipeline "mv-1761742247911"^^xsd:string)
```
