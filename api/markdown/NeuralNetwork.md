- ### OntologyBlock
  id:: neuralnetwork-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0501
	- source-domain:: ai
	- preferred-term:: NeuralNetwork
	- status:: active
	- public-access:: true
	- definition:: A computational system inspired by biological neural networks, consisting of interconnected nodes that process information through weighted connections to learn patterns and make predictions.
	- maturity:: mature
	- owl:class:: ai:Neuralnetwork
	- owl:physicality:: ConceptualEntity
	- owl:role:: Model
	- owl:equivalentClass:: ai:Neuralnetwork
	- belongsToDomain:: [[AIDomain]]

### Relationships

- is-subclass-of:: [[ai:ModelArchitecture]]

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Neuralnetwork))

;; Annotations
(AnnotationAssertion rdfs:label :Neuralnetwork "NeuralNetwork"@en)
(AnnotationAssertion rdfs:comment :Neuralnetwork "A component of the metaverse ecosystem."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Neuralnetwork "mv-1761742247950"^^xsd:string)
```
