- ### OntologyBlock
  id:: bert-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0211
	- preferred-term:: BERT
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:BERT
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: mv:Draft

### Relationships
- is-subclass-of:: [[ModelArchitecture]]
- is-subclass-of:: [[PreTrainedLanguageModel]]

## Characteristics

- **Encoder-Only Architecture**: Uses only transformer encoder layers
- **Bidirectional Pre-training**: Attends to full context in both directions
- **Masked Language Modelling**: Primary pre-training objective
- **Fine-Tuning Paradigm**: Pre-train then fine-tune for downstream tasks

## Academic Foundations

**Primary Source**: Devlin et al., "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding", arXiv:1810.04805 (2018)

**Benchmark Results**: Obtains state-of-the-art results on eleven NLP tasks, pushing GLUE benchmark to 80.4% and achieving 93.2 F1 on SQuAD v1.1.

## Technical Context

BERT revolutionised NLP by demonstrating that pre-training bidirectional representations on large text corpora, then fine-tuning on specific tasks, achieves superior performance compared to task-specific architectures. Uses WordPiece tokenisation and trains on masked language modelling and next sentence prediction.

## Ontological Relationships

- **Broader Term**: Pre-trained Language Model
- **Related Terms**: Masked Language Model, Transformer Architecture, RoBERTa, ALBERT
- **Architecture Type**: Encoder-Only Transformer

## Usage Context

"BERT obtains state-of-the-art results on eleven NLP tasks, including pushing the GLUE benchmark to 80.4%."

## OWL Functional Syntax

```clojure
(Declaration (Class :BERT))
(AnnotationAssertion rdfs:label :BERT "BERT"@en)
(AnnotationAssertion :fullName :BERT "Bidirectional Encoder Representations from Transformers"@en)
(AnnotationAssertion rdfs:comment :BERT
  "Transformer-based model pre-training deep bidirectional representations using masked language modelling."@en)
(AnnotationAssertion :hasSource :BERT
  "Devlin et al., 'BERT: Pre-training of Deep Bidirectional Transformers', arXiv:1810.04805 (2018)"@en)

;; Taxonomic relationships
(SubClassOf :BERT :PreTrainedLanguageModel)
(SubClassOf :BERT :EncoderOnlyModel)
(SubClassOf :BERT :TransformerArchitecture)

;; Architectural characteristics
(SubClassOf :BERT
  (ObjectAllValuesFrom :usesArchitectureType :EncoderOnly))
(SubClassOf :BERT
  (ObjectAllValuesFrom :usesAttentionType :BidirectionalAttention))

;; Pre-training objectives
(Declaration (Class :MaskedLanguageModelling))
(Declaration (Class :NextSentencePrediction))

(SubClassOf :BERT
  (ObjectSomeValuesFrom :trainedWith :MaskedLanguageModelling))
(SubClassOf :BERT
  (ObjectSomeValuesFrom :trainedWith :NextSentencePrediction))

;; Tokenisation
(SubClassOf :BERT
  (ObjectSomeValuesFrom :usesTokenisation :WordPiece))

;; Training paradigm
(SubClassOf :BERT
  (ObjectSomeValuesFrom :follows :PreTrainFineTuneParadigm))
(DataPropertyAssertion :supportsBidirectionalContext :BERT "true"^^xsd:boolean)

;; Benchmark performance
(DataPropertyAssertion :achievesGLUEScore :BERT "80.4"^^xsd:decimal)
(DataPropertyAssertion :achievesSQuADv1F1 :BERT "93.2"^^xsd:decimal)
(AnnotationAssertion :benchmarkPerformance :BERT
  "State-of-the-art on eleven NLP tasks at introduction"@en)

;; Model variants
(Declaration (Class :BERTBase))
(Declaration (Class :BERTLarge))
(SubClassOf :BERTBase :BERT)
(SubClassOf :BERTLarge :BERT)

(DataPropertyAssertion :hasLayerCount :BERTBase "12"^^xsd:integer)
(DataPropertyAssertion :hasHiddenDimension :BERTBase "768"^^xsd:integer)
(DataPropertyAssertion :hasAttentionHeads :BERTBase "12"^^xsd:integer)
(DataPropertyAssertion :hasParameterCount :BERTBase "110M"^^xsd:string)

(DataPropertyAssertion :hasLayerCount :BERTLarge "24"^^xsd:integer)
(DataPropertyAssertion :hasHiddenDimension :BERTLarge "1024"^^xsd:integer)
(DataPropertyAssertion :hasAttentionHeads :BERTLarge "16"^^xsd:integer)
(DataPropertyAssertion :hasParameterCount :BERTLarge "340M"^^xsd:string)

;; Successors and variants
(SubClassOf :RoBERTa :BERT)
(SubClassOf :ALBERT :BERT)
(SubClassOf :DeBERTa :BERT)
(SubClassOf :mBERT :BERT)

;; Impact
(AnnotationAssertion :hasImpact :BERT
  "Revolutionised NLP by demonstrating effectiveness of bidirectional pre-training"@en)
```

## References

- Devlin, J., et al. (2018). "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding". arXiv:1810.04805

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: mv:BERT
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
