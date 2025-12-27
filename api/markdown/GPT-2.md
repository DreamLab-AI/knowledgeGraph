- ### OntologyBlock
  id:: gpt-2-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0213
	- preferred-term:: GPT 2
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:GPT2
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: mv:Draft

### Relationships
- is-subclass-of:: [[ai:ModelArchitecture]]
- is-subclass-of:: [[GPT]]

## Characteristics

- **Scale Increase**: 10× larger than original GPT
- **Zero-Shot Learning**: Performs tasks without fine-tuning
- **Multitask Capability**: Single model handles diverse tasks
- **Internet-Scale Training**: Trained on WebText dataset

## Academic Foundations

**Primary Source**: Radford et al., "Language Models are Unsupervised Multitask Learners" (2019)

**Key Finding**: Language models begin to learn tasks without explicit supervision when trained on millions of webpages, demonstrating emergent multitask capabilities.

## Technical Context

GPT-2 demonstrated that sufficiently large language models trained on diverse internet text can perform many tasks in a zero-shot setting without task-specific fine-tuning, a precursor to the few-shot learning capabilities in GPT-3.

## Ontological Relationships

- **Broader Term**: Pre-trained Language Model
- **Related Terms**: GPT, GPT-3, Zero-Shot Learning, Autoregressive Language Model
- **Architecture Evolution**: Successor to GPT, predecessor to GPT-3

## Usage Context

"GPT-2 demonstrates that language models begin to learn tasks without explicit supervision when trained on millions of webpages."

## OWL Functional Syntax

```clojure
(Declaration (Class :GPT2))
(AnnotationAssertion rdfs:label :GPT2 "GPT-2"@en)
(AnnotationAssertion rdfs:comment :GPT2
  "A 1.5 billion parameter transformer language model demonstrating unsupervised multitask learning capabilities."@en)
(AnnotationAssertion :hasSource :GPT2
  "Radford et al., 'Language Models are Unsupervised Multitask Learners' (2019)"@en)

;; Taxonomic relationships
(SubClassOf :GPT2 :PreTrainedLanguageModel)
(SubClassOf :GPT2 :AutoregressiveLanguageModel)
(SubClassOf :GPT2 :TransformerArchitecture)

;; Evolution
(SubClassOf :GPT2
  (ObjectSomeValuesFrom :successorOf :GPT))
(SubClassOf :GPT3
  (ObjectSomeValuesFrom :successorOf :GPT2))

;; Training
(SubClassOf :GPT2
  (ObjectSomeValuesFrom :trainedOn :WebText))

;; Capabilities
(SubClassOf :GPT2
  (ObjectSomeValuesFrom :demonstrates :ZeroShotLearning))
(SubClassOf :GPT2
  (ObjectSomeValuesFrom :demonstrates :UnsupervisedMultitaskLearning))

;; Properties
(DataPropertyAssertion :parameterCount :GPT2 "1500000000"^^xsd:integer)
(DataPropertyAssertion :trainingDataSize :GPT2 "40GB"^^xsd:string)
(DataPropertyAssertion :contextLength :GPT2 "1024"^^xsd:integer)
(DataPropertyAssertion :scaleIncrease :GPT2 "10x vs GPT"^^xsd:string)
(DataPropertyAssertion :requiresFineTuning :GPT2 "false"^^xsd:boolean)

;; Related models
(DisjointClasses :GPT2 :BERT)
(DisjointClasses :GPT2 :T5)
```

## References

- Radford, A., et al. (2019). "Language Models are Unsupervised Multitask Learners". OpenAI

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: mv:GPT2
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
