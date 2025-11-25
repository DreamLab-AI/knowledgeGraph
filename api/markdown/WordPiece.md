- ### OntologyBlock
  id:: wordpiece-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0234
	- preferred-term:: WordPiece
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:WordPiece
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: draft

### Relationships

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Wordpiece))

;; Annotations
(AnnotationAssertion rdfs:label :Wordpiece "WordPiece"@en)
(AnnotationAssertion rdfs:comment :Wordpiece "A subword tokenisation method that merges character sequences based on likelihood maximisation rather than frequency, used in BERT and related models."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Wordpiece "MV-0234"^^xsd:string)
(DataPropertyAssertion :isAITechnology :Wordpiece "true"^^xsd:boolean)
```

## Characteristics

- **Likelihood-Based**: Merges based on language model probability
- **Principled Criterion**: Uses statistical measure rather than frequency
- **Vocabulary Construction**: Builds vocabulary optimising for model likelihood
- **BERT Standard**: Default tokenisation for BERT family

## Academic Foundations

**Primary Source**: Schuster & Nakajima (2012); detailed in arXiv:2012.15524 (2020)

**Usage**: Standard tokenisation algorithm for BERT, DistilBERT, and Electra.

**Comparison**: Similar to BPE but uses likelihood maximisation instead of frequency counting for merge decisions.

## Technical Context

WordPiece is the subword tokenisation algorithm used for BERT, DistilBERT, and Electra. It differs from BPE by choosing merges that maximise the likelihood of the training data under a unigram language model, rather than simply merging the most frequent pairs.

## Ontological Relationships

- **Broader Term**: Subword Tokenisation
- **Related Terms**: Byte-Pair Encoding, SentencePiece, Tokenisation
- **Used In**: BERT, DistilBERT, ELECTRA

## Usage Context

"WordPiece is the subword tokenisation algorithm used for BERT, DistilBERT, and Electra."

## References

- Schuster, M., & Nakajima, K. (2012). "Japanese and Korean voice search". ICASSP 2012
- Song et al. (2020). "Fast WordPiece Tokenization". arXiv:2012.15524

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: mv:WordPiece
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- is-subclass-of:: [[ArtificialIntelligence]]
	- belongsToDomain:: [[MetaverseDomain]]
