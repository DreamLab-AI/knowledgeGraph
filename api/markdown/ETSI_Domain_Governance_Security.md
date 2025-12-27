- ### OntologyBlock
  id:: etsi_domain_governance_security-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0014
	- source-domain:: mv
	- preferred-term:: ETSI_Domain_Governance_Security
	- status:: draft
	- public-access:: true
	- definition:: A component of the metaverse ecosystem.
	- maturity:: draft
	- owl:class:: mv:ETSI_Domain_Governance_Security
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Etsidomaingovernancesecurity))

;; Annotations
(AnnotationAssertion rdfs:label :Etsidomaingovernancesecurity "ETSI_Domain_Governance_Security"@en)
(AnnotationAssertion rdfs:comment :Etsidomaingovernancesecurity "A component of the metaverse ecosystem."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Etsidomaingovernancesecurity "mv-1761742247919"^^xsd:string)
```

### Relationships
- is-subclass-of:: [[Metaverse]]
