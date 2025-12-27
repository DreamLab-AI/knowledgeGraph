- ### OntologyBlock
  id:: etsi_domain_human_interface-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0017
	- source-domain:: mv
	- preferred-term:: ETSI_Domain_Human_Interface
	- status:: draft
	- public-access:: true
	- definition:: A component of the metaverse ecosystem.
	- maturity:: draft
	- owl:class:: mv:ETSI_Domain_Human_Interface
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Etsidomainhumaninterface))

;; Annotations
(AnnotationAssertion rdfs:label :Etsidomainhumaninterface "ETSI_Domain_Human_Interface"@en)
(AnnotationAssertion rdfs:comment :Etsidomainhumaninterface "A component of the metaverse ecosystem."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Etsidomainhumaninterface "mv-1761742247920"^^xsd:string)
```

### Relationships
- is-subclass-of:: [[Metaverse]]
