- ### OntologyBlock
  id:: mixtral-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0228
	- preferred-term:: Mixtral
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:Mixtral
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: draft

### Relationships

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Mixtral))

;; Annotations
(AnnotationAssertion rdfs:label :Mixtral "Mixtral"@en)
(AnnotationAssertion rdfs:comment :Mixtral "A Sparse Mixture of Experts language model with 8 expert networks where each token is routed to 2 experts, achieving 47B total parameters whilst maintaining 13B active parameters per token for efficient inference."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Mixtral "MV-0228"^^xsd:string)
(DataPropertyAssertion :isAITechnology :Mixtral "true"^^xsd:boolean)
```

## Characteristics

- **Sparse MoE**: Uses Mixture of Experts architecture
- **8 Experts**: Eight specialist sub-networks
- **Top-2 Routing**: Each token routed to 2 experts
- **Efficient Scaling**: Large capacity with controlled compute

## Academic Foundations

**Primary Source**: Jiang et al., "Mixtral of Experts", arXiv:2401.04088 (2024)

**Performance**: Matches or outperforms GPT-3.5 on most benchmarks whilst using 5× less active parameters per token.

## Technical Context

Mixtral demonstrates that Mixture of Experts enables scaling to large parameter counts whilst maintaining inference efficiency. Each input token is processed by only 2 of 8 experts, keeping compute costs similar to a 13B dense model whilst achieving performance of much larger dense models.

## Ontological Relationships

- **Broader Term**: Large Language Model, Mixture of Experts
- **Related Terms**: Mistral, Sparse Activation, Expert Network
- **Architecture Type**: Sparse Mixture of Experts

## Usage Context

"Mixtral achieves strong performance through sparse activation, using only 13B parameters per token despite 47B total parameters."

## References

- Jiang, A. Q., et al. (2024). "Mixtral of Experts". arXiv:2401.04088

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*