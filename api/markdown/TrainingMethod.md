- ### OntologyBlock
  id:: trainingmethod-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-7005
	- preferred-term:: TrainingMethod
	- source-domain:: ai
	- status:: active
	- public-access:: true
	- definition:: Training methods in machine learning are algorithms and techniques used to optimize model parameters by minimizing a loss function through iterative weight updates. The core approach combines backpropagation (computing gradients via the chain rule) with gradient descent optimization (adjusting weights in the direction that reduces loss), with variants including stochastic gradient descent (SGD), Adam, RMSprop, and AdaGrad offering different convergence properties.
	- maturity:: reviewed
	- belongsToDomain:: [[Artificial Intelligence]]
	- owl:class:: ai:Trainingmethod
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

### Relationships
- is-subclass-of:: [[MachineLearning]]
- related-to:: [[Model Training]]
- related-to:: [[ModelArchitecture]]
- related-to:: [[NeuralNetworkArchitecture]]
- related-to:: [[DPO]]

### Core Algorithms
- **Backpropagation**: Computes gradients of loss function with respect to weights using chain rule, propagating errors backward through network layers
- **Gradient Descent**: Optimization algorithm that iteratively updates weights by moving in the direction of steepest descent
  - **Stochastic Gradient Descent (SGD)**: Updates weights using single samples or mini-batches
  - **Adam**: Adaptive learning rates with momentum, combining RMSprop and momentum benefits
  - **RMSprop**: Adapts learning rate based on running average of recent gradients
  - **AdaGrad**: Adapts learning rate per-parameter based on historical gradients

### Key Challenges
- **Vanishing Gradients**: Gradients become very small in deep networks, especially with sigmoid/tanh activations
- **Exploding Gradients**: Gradients grow excessively large, causing divergence
- **Dying ReLU**: ReLU units stuck at zero output, solved by LeakyReLU variants

### Advanced Techniques
- Learning rate scheduling and warm-up
- Gradient clipping for stability
- Mixed-precision training for efficiency

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched from stub with technical definition
- **References**: 21 pages reference this concept
