- ### OntologyBlock
  id:: decoder-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0206
	- preferred-term:: Decoder
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:Decoder
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: draft

### Relationships

## Characteristics

- **Autoregressive Generation**: Generates tokens sequentially
- **Masked Self-Attention**: Prevents attending to future positions
- **Cross-Attention**: Attends to encoder representations
- **Causal Structure**: Maintains left-to-right generation order

## Academic Foundations

**Primary Source**: Vaswani et al., "Attention Is All You Need", arXiv:1706.03762 (2017)

**Architecture**: Each decoder layer contains masked self-attention, encoder-decoder cross-attention, and a feed-forward network with residual connections.

## Technical Context

The decoder generates output sequences autoregressively, attending to both previously generated tokens (via masked self-attention) and the encoder's output (via cross-attention). GPT-style models use decoder-only architecture without cross-attention.

## Ontological Relationships

- **Broader Term**: Transformer Architecture Component
- **Related Terms**: Encoder, Cross-Attention, Causal Attention
- **Examples**: GPT, GPT-2, GPT-3 (decoder-only models)

## Usage Context

"The transformer decoder uses masked self-attention and cross-attention to generate output sequences autoregressively."

## OWL Functional Syntax

```clojure
(Declaration (Class :Decoder))
(AnnotationAssertion rdfs:label :Decoder "Decoder"@en)
(AnnotationAssertion rdfs:comment :Decoder
  "Component that generates output sequence autoregressively using masked self-attention and cross-attention."@en)
(AnnotationAssertion :hasSource :Decoder
  "Vaswani et al., 'Attention Is All You Need', arXiv:1706.03762 (2017)"@en)

;; Taxonomic relationships
(SubClassOf :Decoder :TransformerArchitectureComponent)

;; Structural composition
(SubClassOf :Decoder
  (ObjectSomeValuesFrom :consistsOfLayers :DecoderLayer))
(SubClassOf :Decoder
  (ObjectMinCardinality 1 :consistsOfLayers :DecoderLayer))

;; Decoder layer structure
(Declaration (Class :DecoderLayer))
(SubClassOf :DecoderLayer
  (ObjectSomeValuesFrom :contains :MaskedSelfAttention))
(SubClassOf :DecoderLayer
  (ObjectSomeValuesFrom :contains :CrossAttention))
(SubClassOf :DecoderLayer
  (ObjectSomeValuesFrom :contains :FeedForwardNetwork))
(SubClassOf :DecoderLayer
  (ObjectSomeValuesFrom :uses :ResidualConnection))
(SubClassOf :DecoderLayer
  (ObjectSomeValuesFrom :uses :LayerNormalisation))

;; Attention mechanisms
(SubClassOf :Decoder
  (ObjectSomeValuesFrom :implementsMechanism :CausalAttention))
(SubClassOf :Decoder
  (ObjectSomeValuesFrom :implementsMechanism :CrossAttention))

;; Generation characteristics
(DataPropertyAssertion :isAutoregressive :Decoder "true"^^xsd:boolean)
(DataPropertyAssertion :generatesSequentially :Decoder "true"^^xsd:boolean)
(DataPropertyAssertion :maintainsCausalStructure :Decoder "true"^^xsd:boolean)

;; Typical configurations
(DataPropertyAssertion :typicalLayerCount :Decoder "6"^^xsd:integer)
(DataPropertyAssertion :largeModelLayerCount :Decoder "24"^^xsd:integer)

;; Decoder-only models (without cross-attention)
(Declaration (Class :DecoderOnlyModel))
(SubClassOf :GPT :DecoderOnlyModel)
(SubClassOf :GPT2 :DecoderOnlyModel)
(SubClassOf :GPT3 :DecoderOnlyModel)
(SubClassOf :GPT4 :DecoderOnlyModel)

(AnnotationAssertion rdfs:comment :DecoderOnlyModel
  "Transformer models using only masked self-attention without encoder cross-attention"@en)

;; Functional properties
(SubClassOf :Decoder
  (ObjectSomeValuesFrom :attendsTo :EncoderOutput))
(SubClassOf :Decoder
  (ObjectSomeValuesFrom :attendsTo :PreviouslyGeneratedTokens))
(SubClassOf :Decoder
  (ObjectSomeValuesFrom :generates :OutputSequence))
```

## References

- Vaswani, A., et al. (2017). "Attention Is All You Need". arXiv:1706.03762
- Radford, A., et al. (2018). "Improving Language Understanding by Generative Pre-Training"

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: mv:Decoder
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- is-subclass-of:: [[ArtificialIntelligence]]
	- belongsToDomain:: [[MetaverseDomain]]
