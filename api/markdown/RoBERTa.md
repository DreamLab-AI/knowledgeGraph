- ### OntologyBlock
  id:: roberta-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0217
	- preferred-term:: RoBERTa
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:RoBERTa
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: dt:Draft

### Relationships
- is-subclass-of:: [[ai:ModelArchitecture]]
- is-subclass-of:: [[BERT]]

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Roberta))

;; Annotations
(AnnotationAssertion rdfs:label :Roberta "RoBERTa"@en)
(AnnotationAssertion rdfs:comment :Roberta "Robustly Optimised BERT Approach: an optimised version of BERT that removes next sentence prediction, trains with larger batches and learning rates, and uses dynamic masking to improve performance."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Roberta "MV-0217"^^xsd:string)
(DataPropertyAssertion :isAITechnology :Roberta "true"^^xsd:boolean)
```

## Characteristics

- **Improved Training**: Longer training with larger batches
- **Dynamic Masking**: Changes masked tokens across epochs
- **No NSP**: Removes next sentence prediction objective
- **Larger Dataset**: Trained on more data than original BERT

## Academic Foundations

**Primary Source**: Liu et al., "RoBERTa: A Robustly Optimized BERT Pretraining Approach", arXiv:1907.11692 (2019)

**Key Findings**: Demonstrates that BERT was significantly undertrained and that careful hyperparameter tuning and training procedure choices matter substantially.

## Technical Context

RoBERTa shows that BERT's training can be substantially improved by removing the next sentence prediction task, training with dynamic masking, using larger mini-batches and learning rates, and training on more data for longer.

## Ontological Relationships

- **Broader Term**: Pre-trained Language Model
- **Related Terms**: BERT, ALBERT, DeBERTa
- **Base Architecture**: BERT with training optimisations

## Usage Context

"RoBERTa achieves state-of-the-art results on GLUE, SQuAD, and RACE benchmarks by optimising BERT's pre-training procedure."

## References

- Liu, Y., et al. (2019). "RoBERTa: A Robustly Optimized BERT Pretraining Approach". arXiv:1907.11692

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: mv:RoBERTa
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
