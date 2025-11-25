- ### OntologyBlock
  id:: AI-0230
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0230
	- preferred-term:: Claude
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:Claude
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: dt:Draft

### Relationships

## Characteristics

- **Constitutional AI Training**: Uses self-critique and constitutional principles
- **Long Context**: Supports very long context windows (100K+ tokens)
- **Safety Focus**: Emphasises harmlessness and alignment
- **Strong Reasoning**: Excels at complex reasoning and analysis

## Academic Foundations

**Primary Source**: Bai et al., "Constitutional AI: Harmlessness from AI Feedback", arXiv:2212.08073 (2022)

**Alignment Approach**: Combines supervised learning with Constitutional AI and RLAIF for alignment without extensive human feedback on harmful outputs.

## Technical Context

Claude models are trained with Constitutional AI, which uses a set of principles to guide self-critique and revision. This approach enables the model to learn harmless behaviour through AI feedback rather than requiring extensive human labelling of harmful outputs.

## Ontological Relationships

- **Broader Term**: Large Language Model
- **Related Terms**: GPT-4, Constitutional AI, RLAIF
- **Variants**: Claude, Claude 2, Claude 3 (Haiku, Sonnet, Opus)

## Usage Context

"Claude's Constitutional AI training enables harmless behaviour through self-critique guided by explicit principles."

## OWL Functional Syntax

```clojure
(Declaration (Class :Claude))
(AnnotationAssertion rdfs:label :Claude "Claude"@en)
(AnnotationAssertion rdfs:comment :Claude
  "A family of large language models by Anthropic, trained using Constitutional AI for helpfulness, harmlessness, and honesty."@en)
(AnnotationAssertion :hasSource :Claude
  "Bai et al., 'Constitutional AI: Harmlessness from AI Feedback', arXiv:2212.08073 (2022)"@en)

;; Taxonomic relationships
(SubClassOf :Claude :LargeLanguageModel)
(SubClassOf :Claude :TransformerArchitecture)

;; Training methodology
(SubClassOf :Claude
  (ObjectSomeValuesFrom :trainedWith :ConstitutionalAI))
(SubClassOf :Claude
  (ObjectSomeValuesFrom :trainedWith :RLAIF))

;; Design objectives
(SubClassOf :Claude
  (ObjectSomeValuesFrom :optimisedFor :Helpfulness))
(SubClassOf :Claude
  (ObjectSomeValuesFrom :optimisedFor :Harmlessness))
(SubClassOf :Claude
  (ObjectSomeValuesFrom :optimisedFor :Honesty))

;; Capabilities
(SubClassOf :Claude
  (ObjectSomeValuesFrom :excellsAt :ComplexReasoning))
(SubClassOf :Claude
  (ObjectSomeValuesFrom :excellsAt :CodeGeneration))
(SubClassOf :Claude
  (ObjectSomeValuesFrom :supports :ExtendedContext))

;; Model variants
(SubClassOf :ClaudeHaiku :Claude)
(SubClassOf :ClaudeSonnet :Claude)
(SubClassOf :ClaudeOpus :Claude)

;; Properties
(DataPropertyAssertion :maxContextLength :Claude "100000"^^xsd:integer)
(DataPropertyAssertion :emphasisesSafety :Claude "true"^^xsd:boolean)
(DataPropertyAssertion :developer :Claude "Anthropic"^^xsd:string)
(DataPropertyAssertion :usesConstitution :Claude "true"^^xsd:boolean)
```

## References

- Bai, Y., et al. (2022). "Constitutional AI: Harmlessness from AI Feedback". arXiv:2212.08073
- Anthropic (2023). "Claude 2 Technical Documentation"

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: mv:Claude
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- is-subclass-of:: [[ArtificialIntelligence]]
	- belongsToDomain:: [[MetaverseDomain]]
