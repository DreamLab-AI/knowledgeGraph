- ### OntologyBlock
  id:: summary-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: DT-0518
	- preferred-term:: Ontology Summary Documentation
	- status:: draft
	- public-access:: true
	- definition:: Ontology Summary Documentation refers to meta-documentation components that provide structured overviews of ontological entities within a knowledge graph system. These summaries serve as quick-reference materials that distill complex ontological structures into accessible formats for human consumption and automated processing. In knowledge management practice, summary documentation bridges the gap between formal ontological representations and practical user needs, enabling rapid comprehension of domain concepts, relationships, and hierarchies. Summaries may be generated automatically from underlying ontology structures or curated manually to emphasise particular perspectives or use cases. Within UK knowledge management contexts, summary documentation supports compliance with information governance requirements by providing clear, auditable descriptions of knowledge assets. The practice distinguishes between internal summaries (used for system documentation and development) and external summaries (designed for stakeholder communication), with each type serving distinct organisational functions whilst maintaining semantic consistency with the underlying ontology.
	- maturity:: draft
	- owl:class:: mv:OntologySummaryDocumentation
	- owl:physicality:: ConceptualEntity
	- owl:role:: DocumentationType
	- belongsToDomain:: [[KnowledgeManagementDomain]]

## Relationships

- skos:related:: [[Knowledge Management]], [[Documentation]], [[Ontology]]
- enables:: [[Quick Reference]], [[Overview Generation]]
- part-of:: [[Meta Documentation]]
- supports:: [[Information Governance]], [[Semantic Consistency]]

## Creating Summary Documents

Summary documents in this knowledge graph should be created when:

1. **New Domain Introduction**: When establishing a new knowledge domain, create a summary to provide context and scope
2. **Complex Entity Networks**: When multiple related entities form a cohesive concept that benefits from overview documentation
3. **Stakeholder Communication**: When external parties require accessible descriptions of technical ontological structures
4. **Periodic Reviews**: As part of knowledge graph maintenance cycles to ensure documentation currency

Summary documents should:
- Use consistent metadata properties (term-id, preferred-term, source-domain, etc.)
- Set appropriate access levels (public-access:: false for internal documentation)
- Include relationship mappings to maintain graph connectivity
- Provide clear, concise definitions (200-300 words)
- Reference authoritative sources where applicable
- Maintain semantic alignment with formal OWL representations

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :OntologySummaryDocumentation))

;; Annotations
(AnnotationAssertion rdfs:label :OntologySummaryDocumentation "Ontology Summary Documentation"@en-GB)
(AnnotationAssertion rdfs:comment :OntologySummaryDocumentation
  "Meta-documentation components that provide structured overviews of ontological entities within a knowledge graph system."@en-GB)

;; Data Properties
(AnnotationAssertion dcterms:identifier :OntologySummaryDocumentation "mv-1761742247967"^^xsd:string)
(AnnotationAssertion km:accessLevel :OntologySummaryDocumentation "internal"^^xsd:string)
(AnnotationAssertion km:maturityLevel :OntologySummaryDocumentation "draught"^^xsd:string)
(AnnotationAssertion km:authorityScore :OntologySummaryDocumentation "0.65"^^xsd:decimal)

;; Object Properties
(SubClassOf :OntologySummaryDocumentation :DocumentationType)
(SubClassOf :OntologySummaryDocumentation
  (ObjectSomeValuesFrom :relatesTo :KnowledgeManagement))
(SubClassOf :OntologySummaryDocumentation
  (ObjectSomeValuesFrom :enables :QuickReference))
(SubClassOf :OntologySummaryDocumentation
  (ObjectSomeValuesFrom :partOf :MetaDocumentation))
```
