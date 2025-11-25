- ### OntologyBlock
  id:: mbert-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0225
	- preferred-term:: mBERT
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:mBERT
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: draft

### Relationships
- is-subclass-of:: [[BERT]]

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Mbert))

;; Annotations
(AnnotationAssertion rdfs:label :Mbert "mBERT"@en)
(AnnotationAssertion rdfs:comment :Mbert "Multilingual BERT: a variant of BERT pre-trained on Wikipedia in 104 languages, enabling cross-lingual transfer and multilingual understanding without language-specific modifications."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Mbert "MV-0225"^^xsd:string)
(DataPropertyAssertion :isAITechnology :Mbert "true"^^xsd:boolean)
```

## Characteristics

- **Multilingual Coverage**: Supports 104 languages
- **Shared Vocabulary**: Single vocabulary across all languages
- **Cross-Lingual Transfer**: Transfers knowledge between languages
- **Same Architecture**: Identical to monolingual BERT

## Academic Foundations

**Primary Source**: Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", arXiv:1810.04805 (2018)

**Cross-Lingual Ability**: Demonstrates zero-shot cross-lingual transfer on various NLU tasks despite being trained without explicit cross-lingual objectives.

## Technical Context

mBERT is trained on concatenated Wikipedia dumps from 104 languages using the same masked language modelling objective as monolingual BERT. Surprisingly, it learns to align representations across languages, enabling zero-shot cross-lingual transfer.

## Ontological Relationships

- **Broader Term**: Pre-trained Language Model, Multilingual Model
- **Related Terms**: BERT, mT5, XLM-RoBERTa
- **Base Architecture**: BERT with multilingual training data

## Usage Context

"mBERT enables zero-shot cross-lingual transfer across 104 languages without language-specific training objectives."

## References

- Devlin, J., et al. (2018). "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding". arXiv:1810.04805

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: mv:mBERT
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
