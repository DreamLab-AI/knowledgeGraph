- ### OntologyBlock
  id:: gpt-4-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0215
	- preferred-term:: GPT 4
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:GPT4
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: dt:Draft

### Relationships
- is-subclass-of:: [[GPT]]

## Characteristics

- **Multimodal Capabilities**: Processes both images and text
- **Human-Level Performance**: Matches or exceeds human performance on many benchmarks
- **Professional Competency**: Passes professional exams (bar exam, medical licencing)
- **Improved Safety**: Enhanced alignment through RLHF

## Academic Foundations

**Primary Source**: OpenAI, "GPT-4 Technical Report", arXiv:2303.08774 (2023)

**Benchmark Performance**: Passes a simulated bar exam with a score around the top 10% of test takers, demonstrating human-level performance.

**Estimated Scale**: Model card asserts training on 13 trillion tokens (though architecture details remain largely undisclosed).

## Technical Context

GPT-4 represents a major advancement in multimodal AI, capable of understanding both visual and textual information. It demonstrates significant improvements in factuality, steerability, and safety compared to GPT-3.5, whilst maintaining strong few-shot learning capabilities.

## Ontological Relationships

- **Broader Term**: Large Language Model, Multimodal Model
- **Related Terms**: GPT-3, Multimodal Learning, Vision-Language Model
- **Variants**: GPT-4 Turbo, GPT-4V (Vision)

## Usage Context

"GPT-4 passes a simulated bar exam with a score around the top 10% of test takers, demonstrating human-level performance."

## OWL Functional Syntax

```clojure
(Declaration (Class :GPT4))
(AnnotationAssertion rdfs:label :GPT4 "GPT-4"@en)
(AnnotationAssertion rdfs:comment :GPT4
  "Large-scale multimodal transformer model accepting image and text inputs, exhibiting human-level performance on benchmarks."@en)
(AnnotationAssertion :hasSource :GPT4
  "OpenAI, 'GPT-4 Technical Report', arXiv:2303.08774 (2023)"@en)

;; Taxonomic relationships
(SubClassOf :GPT4 :LargeLanguageModel)
(SubClassOf :GPT4 :MultimodalModel)
(SubClassOf :GPT4 :TransformerArchitecture)

;; Evolution
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :successorOf :GPT3))

;; Modalities
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :accepts :TextInput))
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :accepts :ImageInput))
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :produces :TextOutput))

;; Alignment
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :trainedWith :RLHF))
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :improves :Safety))

;; Capabilities
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :demonstrates :HumanLevelPerformance))
(SubClassOf :GPT4
  (ObjectSomeValuesFrom :demonstrates :ProfessionalCompetency))

;; Variants
(SubClassOf :GPT4Turbo :GPT4)
(SubClassOf :GPT4Vision :GPT4)

;; Properties
(DataPropertyAssertion :isMultimodal :GPT4 "true"^^xsd:boolean)
(DataPropertyAssertion :contextLength :GPT4 "8192"^^xsd:integer)
(DataPropertyAssertion :barExamPercentile :GPT4 "90"^^xsd:integer)
(DataPropertyAssertion :estimatedTrainingTokens :GPT4 "13000000000000"^^xsd:integer)
(DataPropertyAssertion :developer :GPT4 "OpenAI"^^xsd:string)
```

## References

- OpenAI (2023). "GPT-4 Technical Report". arXiv:2303.08774

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: mv:GPT4
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
