- ### OntologyBlock
  id:: gpt-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0212
	- preferred-term:: GPT
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:GPT
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: mv:Draft

### Relationships
- is-subclass-of:: [[ai:ModelArchitecture]]
- is-subclass-of:: [[PreTrainedLanguageModel]]

## Characteristics

- **Decoder-Only Architecture**: Uses only transformer decoder with causal masking
- **Autoregressive Generation**: Predicts next token sequentially
- **Generative Pre-training**: Pre-trains on next-token prediction
- **Transfer Learning**: Fine-tunes for downstream tasks

## Academic Foundations

**Primary Source**: Radford et al., "Improving Language Understanding by Generative Pre-Training" (2018)

**Key Innovation**: Demonstrated that large gains on diverse NLP tasks can be realised by generative pre-training followed by discriminative fine-tuning.

## Technical Context

GPT demonstrates the effectiveness of unsupervised pre-training using the language modelling objective. The model learns rich representations that transfer well to various NLP tasks with minimal task-specific modifications.

## Ontological Relationships

- **Broader Term**: Pre-trained Language Model
- **Related Terms**: GPT-2, GPT-3, GPT-4, Autoregressive Language Model
- **Architecture Type**: Decoder-Only Transformer

## Usage Context

"GPT demonstrates that large gains on diverse NLP tasks can be realised by generative pre-training followed by discriminative fine-tuning."

## OWL Functional Syntax

```clojure
(Declaration (Class :GPT))
(AnnotationAssertion rdfs:label :GPT "GPT"@en)
(AnnotationAssertion :fullName :GPT "Generative Pre-trained Transformer"@en)
(AnnotationAssertion rdfs:comment :GPT
  "Autoregressive language model using transformer decoder with generative pre-training."@en)
(AnnotationAssertion :hasSource :GPT
  "Radford et al., 'Improving Language Understanding by Generative Pre-Training' (2018)"@en)

;; Taxonomic relationships
(SubClassOf :GPT :PreTrainedLanguageModel)
(SubClassOf :GPT :DecoderOnlyModel)
(SubClassOf :GPT :AutoregressiveLanguageModel)
(SubClassOf :GPT :TransformerArchitecture)

;; Architectural characteristics
(SubClassOf :GPT
  (ObjectAllValuesFrom :usesArchitectureType :DecoderOnly))
(SubClassOf :GPT
  (ObjectAllValuesFrom :usesAttentionType :CausalAttention))
(SubClassOf :GPT
  (ObjectAllValuesFrom :implementsMechanism :CausalAttention))

;; Training objective
(Declaration (Class :NextTokenPrediction))
(SubClassOf :GPT
  (ObjectSomeValuesFrom :trainedWith :NextTokenPrediction))
(SubClassOf :GPT
  (ObjectSomeValuesFrom :trainedWith :LanguageModelling))

;; Generation characteristics
(DataPropertyAssertion :isAutoregressive :GPT "true"^^xsd:boolean)
(DataPropertyAssertion :generatesLeftToRight :GPT "true"^^xsd:boolean)
(DataPropertyAssertion :supportsTextGeneration :GPT "true"^^xsd:boolean)

;; Training paradigm
(SubClassOf :GPT
  (ObjectSomeValuesFrom :follows :GenerativePreTraining))
(SubClassOf :GPT
  (ObjectSomeValuesFrom :follows :DiscriminativeFineTuning))

;; Model configuration
(DataPropertyAssertion :hasLayerCount :GPT "12"^^xsd:integer)
(DataPropertyAssertion :hasHiddenDimension :GPT "768"^^xsd:integer)
(DataPropertyAssertion :hasAttentionHeads :GPT "12"^^xsd:integer)
(DataPropertyAssertion :hasContextLength :GPT "512"^^xsd:integer)

;; Successors
(AnnotationAssertion :hasSuccessor :GPT :GPT2)
(AnnotationAssertion :hasSuccessor :GPT :GPT3)
(AnnotationAssertion :hasSuccessor :GPT :GPT4)

;; Key innovation
(AnnotationAssertion :keyInnovation :GPT
  "Demonstrated effectiveness of generative pre-training for transfer learning in NLP"@en)

;; Transfer learning capability
(DataPropertyAssertion :supportsTransferLearning :GPT "true"^^xsd:boolean)
(DataPropertyAssertion :requiresTaskSpecificFineTuning :GPT "true"^^xsd:boolean)
```

## References

- Radford, A., et al. (2018). "Improving Language Understanding by Generative Pre-Training". OpenAI

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: mv:GPT
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
