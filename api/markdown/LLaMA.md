- ### OntologyBlock
  id:: llama-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0226
	- preferred-term:: LLaMA
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:LLaMA
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: mv:Draft

### Relationships

- is-subclass-of:: [[ai:ModelArchitecture]]
## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Llama))

;; Annotations
(AnnotationAssertion rdfs:label :Llama "LLaMA"@en)
(AnnotationAssertion rdfs:comment :Llama "Large Language Model Meta AI: a collection of foundation language models ranging from 7B to 65B parameters, designed to be efficient and performant whilst using only publicly available data."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Llama "MV-0226"^^xsd:string)
(DataPropertyAssertion :isAITechnology :Llama "true"^^xsd:boolean)
```

## Characteristics

- **Efficient Design**: Strong performance at smaller scales
- **Public Data**: Trained exclusively on publicly available datasets
- **Multiple Sizes**: 7B, 13B, 33B, and 65B parameter variants
- **Research Focus**: Openly shared for research purposes

## Academic Foundations

**Primary Source**: Touvron et al., "LLaMA: Open and Efficient Foundation Language Models", arXiv:2302.13971 (2023)

**Performance**: 13B model outperforms GPT-3 (175B) on most benchmarks, demonstrating efficiency of training procedure.

## Technical Context

LLaMA demonstrates that highly capable language models can be trained using only publicly available data without proprietary datasets. The models use various optimisations including pre-normalisation, SwiGLU activations, and rotary positional embeddings.

## Ontological Relationships

- **Broader Term**: Large Language Model
- **Related Terms**: GPT, BERT, Foundation Model
- **Successors**: LLaMA 2, LLaMA 3

## Usage Context

"LLaMA's 13B model demonstrates that efficient training and architecture choices can match larger models trained with more compute."

## References

- Touvron, H., et al. (2023). "LLaMA: Open and Efficient Foundation Language Models". arXiv:2302.13971

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: mv:LLaMA
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- is-subclass-of:: [[ArtificialIntelligence]]
	- belongsToDomain:: [[MetaverseDomain]]
