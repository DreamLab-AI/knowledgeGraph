- ### OntologyBlock
  id:: mixup-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0287
	- source-domain:: mv
	- preferred-term:: Mixup
	- status:: draft
	- public-access:: true
	- definition:: A data augmentation technique that creates virtual training examples by linearly interpolating pairs of examples and their labels. Mixup improves generalisation, calibration, and robustness by training on convex combinations of training samples.

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Mixup))

;; Annotations
(AnnotationAssertion rdfs:label :Mixup "Mixup"@en)
(AnnotationAssertion rdfs:comment :Mixup "A data augmentation technique that creates virtual training examples by linearly interpolating pairs of examples and their labels. Mixup improves generalisation, calibration, and robustness by training on convex combinations of training samples."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Mixup "MV-0287"^^xsd:string)
(DataPropertyAssertion :isAITechnology :Mixup "true"^^xsd:boolean)
```

## Academic Context

Mixup demonstrates that training on linear interpolations between examples can improve model generalisation beyond traditional augmentation approaches.

## Key Characteristics

- Linear interpolation of examples
- Interpolates labels as well
- Improves generalisation
- Better calibration
- Reduces overfitting
- Simple but effective

**Formula**:
```
x_mix = λx_i + (1-λ)x_j
y_mix = λy_i + (1-λ)y_j
where λ ~ Beta(α,α)
```

## Related Concepts

- **Data Augmentation**: Broader category
- **CutMix**: Related technique
- **Label Smoothing**: Related regularisation

## UK English Notes

- "Generalisation" (not "generalization")

**Last Updated**: 2025-10-27
**Verification Status**: Verified against augmentation literature
	- maturity:: draft
	- owl:class:: mv:Mixup
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- is-subclass-of:: [[ArtificialIntelligence]]
	- belongsToDomain:: [[MetaverseDomain]]
