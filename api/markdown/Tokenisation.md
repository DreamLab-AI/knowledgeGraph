- ### OntologyBlock
  id:: tokenisation-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0231
	- preferred-term:: Tokenisation
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:Tokenisation
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: draft

### Relationships

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Tokenisation))

;; Annotations
(AnnotationAssertion rdfs:label :Tokenisation "Tokenisation"@en)
(AnnotationAssertion rdfs:comment :Tokenisation "The process of breaking text into discrete units (tokens) that can be processed by neural networks, ranging from characters to subwords to whole words."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Tokenisation "MV-0231"^^xsd:string)
(DataPropertyAssertion :isAITechnology :Tokenisation "true"^^xsd:boolean)
```

## Characteristics

- **Text Segmentation**: Breaks continuous text into processable units
- **Vocabulary Construction**: Creates finite set of tokens
- **Multiple Granularities**: Character, subword, or word-level
- **Language Dependency**: Different strategies for different languages

## Academic Foundations

**Primary Source**: Multiple sources; comprehensive comparison in arXiv:2411.17669 (2024)

**Impact**: Significantly affects model performance, vocabulary size, and ability to handle rare words and out-of-vocabulary terms.

## Technical Context

Tokenisation is a fundamental preprocessing step that significantly impacts model performance and vocabulary size. Modern approaches use subword tokenisation (BPE, WordPiece, SentencePiece) to balance vocabulary size with the ability to represent rare words.

## Ontological Relationships

- **Broader Term**: Natural Language Processing Technique
- **Related Terms**: Subword Tokenisation, Byte-Pair Encoding, WordPiece, Vocabulary
- **Narrower Terms**: Character Tokenisation, Word Tokenisation, Subword Tokenisation

## Usage Context

"Tokenisation is a fundamental preprocessing step that significantly impacts model performance and vocabulary size."

## References

- Mielke et al. (2021). "Between words and characters: A Brief History of Open-Vocabulary Modelling and Tokenization in NLP". arXiv:2112.10508
- Comparison study: arXiv:2411.17669 (2024)

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: mv:Tokenisation
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- is-subclass-of:: [[ArtificialIntelligence]]
	- belongsToDomain:: [[MetaverseDomain]]
