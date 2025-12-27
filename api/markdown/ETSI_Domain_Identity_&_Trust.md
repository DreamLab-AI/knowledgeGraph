- ### OntologyBlock
  id:: etsi_domain_identity_&_trust-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0020
	- source-domain:: mv
	- preferred-term:: ETSI_Domain_Identity_&_Trust
	- status:: draft
	- public-access:: true
	- definition:: A component of the metaverse ecosystem.
	- maturity:: draft
	- owl:class:: mv:ETSI_Domain_Identity_And_Trust
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Etsidomainidentitytrust))

;; Annotations
(AnnotationAssertion rdfs:label :Etsidomainidentitytrust "ETSI_Domain_Identity_&_Trust"@en)
(AnnotationAssertion rdfs:comment :Etsidomainidentitytrust "A component of the metaverse ecosystem."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Etsidomainidentitytrust "mv-1761742247920"^^xsd:string)
```

### Relationships
- is-subclass-of:: [[Metaverse]]
