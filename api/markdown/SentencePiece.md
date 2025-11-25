- ### OntologyBlock
  id:: sentencepiece-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0235
	- preferred-term:: SentencePiece
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:SentencePiece
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: draft

### Relationships

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Sentencepiece))

;; Annotations
(AnnotationAssertion rdfs:label :Sentencepiece "SentencePiece"@en)
(AnnotationAssertion rdfs:comment :Sentencepiece "A language-independent tokenisation library that treats input as a raw stream and learns subword units directly from raw text without pre-tokenisation, enabling purely end-to-end systems."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Sentencepiece "MV-0235"^^xsd:string)
(DataPropertyAssertion :isAITechnology :Sentencepiece "true"^^xsd:boolean)
```

## Characteristics

- **Language-Independent**: Works across all languages without language-specific rules
- **No Pre-Tokenisation**: Processes raw text directly
- **Multiple Algorithms**: Supports BPE and unigram language model
- **Reversible**: Can perfectly reconstruct original text

## Academic Foundations

**Primary Source**: Kudo & Richardson, "SentencePiece: A simple and language independent approach to subword tokenization", arXiv:1808.06226 (2018)

**Design Philosophy**: Purely data-driven, requiring no language-specific knowledge or pre-processing.

## Technical Context

SentencePiece enables purely end-to-end and language-independent tokenisation systems. Unlike BPE and WordPiece which require language-specific pre-tokenisation, SentencePiece treats text as a raw character sequence, making it ideal for multilingual models and languages without clear word boundaries.

## Ontological Relationships

- **Broader Term**: Tokenisation Tool
- **Related Terms**: Byte-Pair Encoding, Subword Tokenisation
- **Used In**: T5, mT5, XLNet, ALBERT

## Usage Context

"SentencePiece enables purely end-to-end and language-independent tokenisation systems."

## References

- Kudo, T., & Richardson, J. (2018). "SentencePiece: A simple and language independent approach to subword tokenization". arXiv:1808.06226

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: mv:SentencePiece
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- is-subclass-of:: [[ArtificialIntelligence]]
	- belongsToDomain:: [[MetaverseDomain]]
