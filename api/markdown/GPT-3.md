- ### OntologyBlock
  id:: gpt-3-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0214
	- preferred-term:: GPT 3
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:GPT3
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: dt:Draft

### Relationships
- is-subclass-of:: [[GPT]]

## Characteristics

- **Massive Scale**: 175 billion parameters
- **In-Context Learning**: Learns from prompt examples without parameter updates
- **Few-Shot Performance**: Strong task performance with minimal examples
- **Emergent Abilities**: Capabilities arising from scale

## Academic Foundations

**Primary Source**: Brown et al., "Language Models are Few-Shot Learners", arXiv:2005.14165 (2020)

**Benchmark Performance**: Achieves 85.0 F1 on CoQA in few-shot settings, demonstrating strong in-context learning abilities.

**Citations**: Seminal work on emergent abilities in large models.

## Technical Context

GPT-3's in-context learning allows it to adapt to new tasks purely through text interaction with the model. Few-shot performance increases more rapidly with model size than zero-shot, demonstrating benefits of scale for learning from demonstrations.

## Ontological Relationships

- **Broader Term**: Large Language Model
- **Related Terms**: GPT-2, GPT-4, In-Context Learning, Few-Shot Learning
- **Successors**: InstructGPT, ChatGPT, GPT-4

## Usage Context

"GPT-3 achieves 85.0 F1 on CoQA in few-shot settings, demonstrating strong in-context learning abilities."

## OWL Functional Syntax

```clojure
(Declaration (Class :GPT3))
(AnnotationAssertion rdfs:label :GPT3 "GPT-3"@en)
(AnnotationAssertion :fullName :GPT3 "Generative Pre-trained Transformer 3"@en)
(AnnotationAssertion rdfs:comment :GPT3
  "175 billion parameter autoregressive model demonstrating few-shot learning without fine-tuning."@en)
(AnnotationAssertion :hasSource :GPT3
  "Brown et al., 'Language Models are Few-Shot Learners', arXiv:2005.14165 (2020)"@en)

;; Taxonomic relationships
(SubClassOf :GPT3 :LargeLanguageModel)
(SubClassOf :GPT3 :DecoderOnlyModel)
(SubClassOf :GPT3 :AutoregressiveLanguageModel)
(SubClassOf :GPT3 :GPT)

;; Scale characteristics
(DataPropertyAssertion :hasParameterCount :GPT3 "175B"^^xsd:string)
(AnnotationAssertion :scaleComparison :GPT3
  "10× larger than any previous non-sparse language model"@en)

;; Emergent capabilities
(Declaration (Class :InContextLearning))
(Declaration (Class :FewShotLearning))
(Declaration (Class :ZeroShotLearning))
(Declaration (Class :EmergentAbility))

(SubClassOf :GPT3
  (ObjectSomeValuesFrom :demonstrates :InContextLearning))
(SubClassOf :GPT3
  (ObjectSomeValuesFrom :demonstrates :FewShotLearning))
(SubClassOf :GPT3
  (ObjectSomeValuesFrom :demonstrates :ZeroShotLearning))
(SubClassOf :GPT3
  (ObjectSomeValuesFrom :exhibits :EmergentAbility))

;; Learning characteristics
(DataPropertyAssertion :learnsFromPromptExamples :GPT3 "true"^^xsd:boolean)
(DataPropertyAssertion :requiresParameterUpdates :GPT3 "false"^^xsd:boolean)
(DataPropertyAssertion :adaptsViaTextInteraction :GPT3 "true"^^xsd:boolean)

;; Model variants
(Declaration (Class :GPT3Small))
(Declaration (Class :GPT3Medium))
(Declaration (Class :GPT3Large))
(Declaration (Class :GPT3XL))
(Declaration (Class :GPT3_175B))

(SubClassOf :GPT3Small :GPT3)
(SubClassOf :GPT3Medium :GPT3)
(SubClassOf :GPT3Large :GPT3)
(SubClassOf :GPT3XL :GPT3)
(SubClassOf :GPT3_175B :GPT3)

(DataPropertyAssertion :hasParameterCount :GPT3Small "125M"^^xsd:string)
(DataPropertyAssertion :hasParameterCount :GPT3Medium "350M"^^xsd:string)
(DataPropertyAssertion :hasParameterCount :GPT3Large "760M"^^xsd:string)
(DataPropertyAssertion :hasParameterCount :GPT3XL "1.3B"^^xsd:string)
(DataPropertyAssertion :hasParameterCount :GPT3_175B "175B"^^xsd:string)

;; Benchmark performance
(DataPropertyAssertion :achievesCoQAF1 :GPT3 "85.0"^^xsd:decimal)
(AnnotationAssertion :benchmarkContext :GPT3 "Few-shot settings"@en)

;; Successors
(AnnotationAssertion :hasSuccessor :GPT3 :InstructGPT)
(AnnotationAssertion :hasSuccessor :GPT3 :ChatGPT)
(AnnotationAssertion :hasSuccessor :GPT3 :GPT4)

;; Key findings
(AnnotationAssertion :keyFinding :GPT3
  "Few-shot performance scales more rapidly with model size than zero-shot"@en)
(AnnotationAssertion :keyFinding :GPT3
  "Demonstrates benefits of scale for learning from demonstrations"@en)

;; Architecture specifics
(DataPropertyAssertion :hasLayerCount :GPT3_175B "96"^^xsd:integer)
(DataPropertyAssertion :hasHiddenDimension :GPT3_175B "12288"^^xsd:integer)
(DataPropertyAssertion :hasAttentionHeads :GPT3_175B "96"^^xsd:integer)
(DataPropertyAssertion :hasContextLength :GPT3_175B "2048"^^xsd:integer)
```

## References

- Brown, T., et al. (2020). "Language Models are Few-Shot Learners". arXiv:2005.14165

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: mv:GPT3
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
