- ### OntologyBlock
  id:: xlnet-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0221
	- preferred-term:: XLNet
	- source-domain:: mv
	- status:: draft
	- public-access:: true




### OWL Classification
	- owl:class:: mv:XLNet
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Domain & Architecture
	- belongsToDomain:: [[MetaverseDomain]]
	- maturity:: draft

### Relationships

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Xlnet))

;; Annotations
(AnnotationAssertion rdfs:label :Xlnet "XLNet"@en)
(AnnotationAssertion rdfs:comment :Xlnet "A generalised autoregressive pre-training method that learns bidirectional contexts by maximising expected likelihood over all permutations of the factorisation order, overcoming limitations of BERT's masked language modelling."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Xlnet "MV-0221"^^xsd:string)
(DataPropertyAssertion :isAITechnology :Xlnet "true"^^xsd:boolean)
```

## Characteristics

- **Permutation Language Modelling**: Trains on all factorisation orders
- **Bidirectional Context**: Captures dependencies in both directions
- **Autoregressive**: Avoids independence assumption of masked tokens
- **Transformer-XL Integration**: Incorporates segment recurrence mechanism

## Academic Foundations

**Primary Source**: Yang et al., "XLNet: Generalized Autoregressive Pretraining for Language Understanding", arXiv:1906.08237 (2019)

**Performance**: Outperforms BERT on 20 tasks including question answering, natural language inference, sentiment analysis, and document ranking.

## Technical Context

XLNet addresses BERT's limitations by using permutation language modelling, which trains the model to predict tokens in all possible orders. This enables learning bidirectional context whilst maintaining an autoregressive formulation that doesn't assume independence amongst masked positions.

## Ontological Relationships

- **Broader Term**: Pre-trained Language Model
- **Related Terms**: BERT, Transformer-XL, Permutation Language Modelling
- **Innovation**: Permutation Language Modelling

## Usage Context

"XLNet's permutation language modelling enables bidirectional context learning without BERT's masked token independence assumption."

## References

- Yang, Z., et al. (2019). "XLNet: Generalized Autoregressive Pretraining for Language Understanding". arXiv:1906.08237

---

*Ontology Term managed by AI-Grounded Ontology Working Group*
*UK English Spelling Standards Applied*
	- maturity:: draft
	- owl:class:: mv:XLNet
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- is-subclass-of:: [[ArtificialIntelligence]]
	- belongsToDomain:: [[MetaverseDomain]]
