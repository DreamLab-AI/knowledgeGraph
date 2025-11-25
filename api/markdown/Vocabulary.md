- ### OntologyBlock
  id:: vocabulary-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0236
	- preferred-term:: Vocabulary
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:Vocabulary
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: draft

### Relationships

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Vocabulary))

;; Annotations
(AnnotationAssertion rdfs:label :Vocabulary "Vocabulary"@en)
(AnnotationAssertion rdfs:comment :Vocabulary "The number of unique tokens in a model's tokenisation scheme, balancing expressiveness with computational efficiency, typically ranging from 30,000 to 250,000 tokens in modern language models."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Vocabulary "MV-0236"^^xsd:string)
(DataPropertyAssertion :isAITechnology :Vocabulary "true"^^xsd:boolean)
```

## Characteristics

- **Fixed Size**: Determined during tokenisation algorithm training
- **Trade-Off**: Larger vocabularies vs. longer sequences
- **Special Tokens**: Includes padding, unknown, and task-specific tokens
- **Model Impact**: Affects embedding layer size and output layer

## Academic Foundations

**Primary Source**: General NLP concept, discussed in tokenisation literature

**Typical Sizes**:
- BERT: 30,522 tokens (WordPiece)
- GPT-2: 50,257 tokens (BPE)
- GPT-3: 50,257 tokens (BPE)
- T5: 32,000 tokens (SentencePiece)

## Technical Context

Vocabulary size is determined by the tokenisation algorithm and affects model size and granularity. Larger vocabularies enable more efficient encoding but increase embedding and output layer sizes. The choice depends on the trade-off between sequence length and token-level granularity.

## Ontological Relationships

- **Broader Term**: Model Hyperparameter
- **Related Terms**: Tokenisation, Subword Tokenisation, Token Embedding
- **Determined By**: Tokenisation algorithm and configuration

## Usage Context

"Vocabulary size is determined by the tokenisation algorithm and affects model size and granularity."

## References

- General NLP and tokenisation literature
- Model-specific technical documentation

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: mv:Vocabulary
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- is-subclass-of:: [[ArtificialIntelligence]]
	- belongsToDomain:: [[MetaverseDomain]]
