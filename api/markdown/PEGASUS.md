- ### OntologyBlock
  id:: pegasus-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0935
	- preferred-term:: PEGASUS
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:PEGASUS
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: draft

### Relationships

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Pegasus))

;; Annotations
(AnnotationAssertion rdfs:label :Pegasus "PEGASUS"@en)
(AnnotationAssertion rdfs:comment :Pegasus "Pre-training with Extracted Gap-sentences for Abstractive SUmmarization: a pre-training approach specifically designed for abstractive summarisation that masks and predicts entire sentences rather than individual tokens."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Pegasus "MV-0935"^^xsd:string)
(DataPropertyAssertion :isAITechnology :Pegasus "true"^^xsd:boolean)
```

## Characteristics

- **Gap-Sentence Generation**: Pre-trains by predicting masked sentences
- **Summarisation-Focused**: Designed specifically for summarisation tasks
- **Encoder-Decoder**: Full transformer architecture
- **Sentence Selection**: Selects important sentences to mask

## Academic Foundations

**Primary Source**: Zhang et al., "PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization", arXiv:1912.08777 (2019)

**Performance**: Achieves state-of-the-art performance on 12 diverse summarisation datasets with limited fine-tuning data.

## Technical Context

PEGASUS introduces gap-sentence generation (GSG) as a pre-training objective where important sentences are removed from documents and the model learns to generate them from the remaining text. This objective closely matches the summarisation task structure.

## Ontological Relationships

- **Broader Term**: Pre-trained Language Model
- **Related Terms**: BART, T5, Abstractive Summarisation
- **Task Specialisation**: Summarisation

## Usage Context

"PEGASUS's gap-sentence generation pre-training is specifically designed to match the abstractive summarisation task structure."

## References

- Zhang, J., et al. (2019). "PEGASUS: Pre-training with Extracted Gap-sentences for Abstractive Summarization". arXiv:1912.08777

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: mv:PEGASUS
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- is-subclass-of:: [[ArtificialIntelligence]]
	- belongsToDomain:: [[MetaverseDomain]]
