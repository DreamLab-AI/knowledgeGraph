- ### OntologyBlock
  id:: self-training-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0281
	- source-domain:: mv
	- preferred-term:: Self Training
	- status:: draft
	- public-access:: true
	- definition:: A semi-supervised learning technique where a model is iteratively improved by training on its own high-confidence predictions on unlabelled data. Self-training enables learning from large amounts of unlabelled data by using the model's own predictions as pseudo-labels.
	- #### Relationships
	  id:: self-training-relationships
	  collapsed:: true
		- is-subclass-of:: [[MachineLearning]]

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :SelfTraining))

;; Annotations
(AnnotationAssertion rdfs:label :SelfTraining "Self Training"@en)
(AnnotationAssertion rdfs:comment :SelfTraining "A semi-supervised learning technique where a model is iteratively improved by training on its own high-confidence predictions on unlabelled data. Self-training enables learning from large amounts of unlabelled data by using the model's own predictions as pseudo-labels."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :SelfTraining "MV-0281"^^xsd:string)
(DataPropertyAssertion :isAITechnology :SelfTraining "true"^^xsd:boolean)
```

## Academic Context

Self-training demonstrates that models can bootstrap their own performance by leveraging confident predictions on unlabelled data, reducing reliance on expensive labelling.

## Key Characteristics

- Uses model's own predictions
- Iterative improvement
- Semi-supervised learning
- Leverages unlabelled data
- Requires confidence thresholding
- Can amplify biases if not careful

## Related Concepts

- **Semi-Supervised Learning**: Broader paradigm
- **Pseudo-Labelling**: Related technique
- **Co-Training**: Multi-view variant

## UK English Notes

- "Labelled/unlabelled" (not "labelled/unlabeled")

**Last Updated**: 2025-10-27
**Verification Status**: Verified against semi-supervised learning literature
	- maturity:: draft
	- owl:class:: mv:SelfTraining
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
