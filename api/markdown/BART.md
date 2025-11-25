- ### OntologyBlock
  id:: bart-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0222
	- preferred-term:: BART
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:BART
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: draft

### Relationships

## Characteristics

- **Encoder-Decoder Architecture**: Full transformer with both components
- **Denoising Objective**: Learns to reconstruct corrupted text
- **Flexible Corruption**: Multiple noise functions (masking, deletion, shuffling)
- **Generation Tasks**: Optimised for text generation

## Academic Foundations

**Primary Source**: Lewis et al., "BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension", arXiv:1910.13461 (2019)

**Performance**: Achieves state-of-the-art performance on text generation tasks including summarisation and dialogue.

## Technical Context

BART trains by corrupting text with an arbitrary noising function and learning to reconstruct the original text. This combines the bidirectional context of BERT's encoder with the autoregressive generation of GPT's decoder, making it particularly effective for generation tasks.

## Ontological Relationships

- **Broader Term**: Pre-trained Language Model
- **Related Terms**: BERT, GPT, T5, Encoder-Decoder Architecture
- **Task Strength**: Summarisation, Generation

## Usage Context

"BART's denoising pre-training combines bidirectional encoding with autoregressive decoding for strong generation performance."

## OWL Functional Syntax

```clojure
(Declaration (Class :BART))
(AnnotationAssertion rdfs:label :BART "BART"@en)
(AnnotationAssertion rdfs:comment :BART
  "Bidirectional and Auto-Regressive Transformers: a denoising autoencoder combining bidirectional encoding with autoregressive decoding."@en)
(AnnotationAssertion :hasSource :BART
  "Lewis et al., 'BART: Denoising Sequence-to-Sequence Pre-training', arXiv:1910.13461 (2019)"@en)

;; Taxonomic relationships
(SubClassOf :BART :PreTrainedLanguageModel)
(SubClassOf :BART :EncoderDecoderArchitecture)
(SubClassOf :BART :TransformerArchitecture)

;; Architectural components
(SubClassOf :BART
  (ObjectSomeValuesFrom :hasComponent :Encoder))
(SubClassOf :BART
  (ObjectSomeValuesFrom :hasComponent :Decoder))
(SubClassOf :BART
  (ObjectSomeValuesFrom :hasComponent :DenoisingObjective))

;; Pre-training approach
(SubClassOf :BART
  (ObjectSomeValuesFrom :usesPre-training :DenoisingAutoencoder))
(SubClassOf :BART
  (ObjectSomeValuesFrom :applies :NoiseFunction))

;; Capabilities
(SubClassOf :BART
  (ObjectSomeValuesFrom :excellsAt :TextGeneration))
(SubClassOf :BART
  (ObjectSomeValuesFrom :excellsAt :Summarisation))
(SubClassOf :BART
  (ObjectSomeValuesFrom :excellsAt :DialogueGeneration))

;; Combines approaches
(SubClassOf :BART
  (ObjectSomeValuesFrom :combines :BidirectionalEncoding))
(SubClassOf :BART
  (ObjectSomeValuesFrom :combines :AutoregressiveDecoding))

;; Properties
(DataPropertyAssertion :hasBidirectionalEncoder :BART "true"^^xsd:boolean)
(DataPropertyAssertion :hasAutoregressiveDecoder :BART "true"^^xsd:boolean)
(DataPropertyAssertion :usesDenoisingObjective :BART "true"^^xsd:boolean)
(DataPropertyAssertion :optimisedForGeneration :BART "true"^^xsd:boolean)
```

## References

- Lewis, M., et al. (2019). "BART: Denoising Sequence-to-Sequence Pre-training". arXiv:1910.13461

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: mv:BART
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- is-subclass-of:: [[ArtificialIntelligence]]
	- belongsToDomain:: [[MetaverseDomain]]
