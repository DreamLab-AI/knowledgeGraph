- ### OntologyBlock
  id:: stochastic-gradient-descent-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0045
	- preferred-term:: Stochastic Gradient Descent
	- source-domain:: mv
	- status:: draft
- public-access:: true
	- definition:: ### Primary Definition
**Stochastic Gradient Descent (SGD)** is a variant of gradient descent that updates model parameters using the gradient computed from a single training example (or small batch) rather than the entire dataset. This introduces randomness but enables faster iterations and can escape local minima.
	- maturity:: draft
	- owl:class:: mv:StochasticGradientDescent
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
- ## About Stochastic Gradient Descent
	- ### Primary Definition
**Stochastic Gradient Descent (SGD)** is a variant of gradient descent that updates model parameters using the gradient computed from a single training example (or small batch) rather than the entire dataset. This introduces randomness but enables faster iterations and can escape local minima.
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Stochastic Gradient Descent
		  
		  ## Metadata
		  - **Term ID**: AI-0045
		  - **Type**: AIAlgorithm
		  - **Classification**: Optimisation Algorithm
		  - **Domain**: MLDomain
		  - **Layer**: AlgorithmicLayer
		  - **Status**: Active
		  - **Version**: 1.0
		  - **Last Updated**: 2025-10-27
		  - **Priority**: 1=Foundational
		  
		  ## Definition
		  
		  ### Primary Definition
		  **Stochastic Gradient Descent (SGD)** is a variant of gradient descent that updates model parameters using the gradient computed from a single training example (or small batch) rather than the entire dataset. This introduces randomness but enables faster iterations and can escape local minima.
		  
		  **Source**: ISO/IEC 22989:2022 (Optimisation) + Academic consensus - Authority Score: 0.93
		  
		  ### Operational Characteristics
		  - **Single-Sample Updates**: Computes gradient from one example at a time
		  - **Faster Iterations**: Much quicker than full-batch gradient descent
		  - **Noisy Gradients**: Stochastic nature introduces variance
		  - **Regularisation Effect**: Noise can help escape local minima
		  - **Mini-Batch Variant**: Often uses small batches (16-256) in practice
		  
		  ## Relationships
		  
		  ### Parent Classes
		  - **Gradient Descent** (AI-0044): SGD is a gradient descent variant
		  
		  ### Related Concepts
		  - **Batch Size** (AI-0050): Hyperparameter for SGD variants
		  - **Optimiser** (AI-0046): Advanced SGD variants (Adam, RMSprop)
		  - **Training** (AI-0041): SGD is a common training method
		  - **Convergence**: SGD convergence differs from batch gradient descent
		  
		  ## Formal Ontology
		  
		  <details>
		  <summary>Click to expand OntologyBlock</summary>
		  
		  ```clojure
		  ;; Stochastic Gradient Descent Ontology (OWL Functional Syntax)
		  ;; Term ID: AI-0045
		  ;; Domain: MLDomain | Layer: AlgorithmicLayer
		  
		  (Declaration (Class :StochasticGradientDescent))
		  
		  ;; Core Classification
		  (SubClassOf :StochasticGradientDescent :GradientDescent)
		  (SubClassOf :StochasticGradientDescent :OptimisationAlgorithm)
		  
		  ;; Algorithmic Characteristics
		  (SubClassOf :StochasticGradientDescent
		    (ObjectSomeValuesFrom :usesSingleSample :GradientComputation))
		  (SubClassOf :StochasticGradientDescent
		    (ObjectSomeValuesFrom :introducesStochasticity :ParameterUpdates))
		  (SubClassOf :StochasticGradientDescent
		    (ObjectSomeValuesFrom :enablesFaster :Iterations))
		  
		  ;; Operational Properties
		  (SubClassOf :StochasticGradientDescent
		    (ObjectSomeValuesFrom :hasNoisyGradients :StochasticVariance))
		  (SubClassOf :StochasticGradientDescent
		    (ObjectSomeValuesFrom :canEscape :LocalMinima))
		  (SubClassOf :StochasticGradientDescent
		    (ObjectSomeValuesFrom :requiresHyperparameter :BatchSize))
		  
		  ;; Annotations
		  (AnnotationAssertion rdfs:label :StochasticGradientDescent "Stochastic Gradient Descent"@en-GB)
		  (AnnotationAssertion rdfs:comment :StochasticGradientDescent
		    "Gradient descent variant using single samples or small batches for faster, stochastic parameter updates"@en)
		  (AnnotationAssertion :isoReference :StochasticGradientDescent "ISO/IEC 22989:2022")
		  (AnnotationAssertion :authorityScore :StochasticGradientDescent "0.93"^^xsd:float)
		  (AnnotationAssertion :priorityLevel :StochasticGradientDescent "1"^^xsd:integer)
		  
		  ;; Data Properties
		  (DataPropertyAssertion :isStochastic :StochasticGradientDescent "true"^^xsd:boolean)
		  (DataPropertyAssertion :fasterThanBatch :StochasticGradientDescent "true"^^xsd:boolean)
		  (DataPropertyAssertion :hasNoisyGradients :StochasticGradientDescent "true"^^xsd:boolean)
		  ```
		  </details>
		  
		  ## Standards Alignment
		  
		  ### ISO/IEC Standards
		  - **ISO/IEC 22989:2022**: Optimisation algorithms
		  
		  ### NIST AI RMF
		  - **Function**: MAP (Training processes)
		  
		  ## Related Terms
		  - **Gradient Descent** (AI-0044): Parent algorithm
		  - **Batch Size** (AI-0050): Key SGD hyperparameter
		  - **Optimiser** (AI-0046): Advanced SGD-based methods
		  - **Training** (AI-0041): Process using SGD
		  
		  ## References
		  1. Bottou - "Large-Scale Machine Learning with Stochastic Gradient Descent" - COMPSTAT, 2010
		  2. ISO/IEC 22989:2022 - Optimisation methods
		  
		  ---
		  
		  **Authority Score**: 0.93 | **Standards Compliance**: ✓ ISO/IEC ✓ NIST
		  
		  ```
# Stochastic Gradient Descent: Updated Ontology Entry

## Academic Context

- Stochastic Gradient Descent (SGD) remains one of the most widely deployed optimisation algorithms in machine learning, data science, and computational statistics[1]
  - Foundational algorithm for training neural networks and deep learning models
  - Iterative method for optimising objective functions with suitable smoothness properties[4]
  - Distinguishes itself from batch gradient descent through its use of individual or mini-batch samples rather than entire datasets
  - Computational efficiency gains come at the cost of introducing stochastic noise into the optimisation trajectory

## Current Landscape (2025)

- **Industry adoption and implementations**
  - SGD and its variants form the backbone of modern deep learning frameworks (PyTorch, TensorFlow, JAX)
  - Cryo-electron microscopy (cryo-EM) reconstruction now employs SGD for ab initio volume refinement, replacing traditional expectation-maximisation approaches and eliminating the need for good initialisation[2]
  - GPU-accelerated SGD implementations enable optimisation of complex systems with millions of nodes; recent work demonstrates 70% reduction in optimisation time for operator placement in geo-distributed streaming systems[5]
  - Stream processing and distributed systems leverage parallelised SGD for real-time analytics

- **Technical capabilities and limitations**
  - Convergence behaviour differs markedly between underparameterised and overparameterised regimes[4]
    - Overparameterised case: SGD converges to the interpolation solution with minimum distance from starting weights, even with constant learning rates
    - Underparameterised case: requires decreasing learning rate schedules for convergence
  - Learning rate (step size) selection remains a critical hyperparameter; setting too high causes divergence, whilst too low impedes convergence[4]
  - Recent theoretical work identifies three distinct dynamical phases governed by batch size and learning rate: noise-dominated SGD, large-first-step-dominated SGD, and deterministic gradient descent[3]
  - High-dimensional learning dynamics exhibit phase transitions at critical step-size scalings; information exponent controls sample complexity[1]

- **Standards and frameworks**
  - Learning rate schedules now standard practice, with step size decreasing as a function of iteration number[4]
  - Mini-batch processing has become ubiquitous, balancing computational efficiency with gradient estimate quality
  - Adaptive learning rate methods (Adam, RMSprop, AdaGrad) address the hyperparameter tuning challenge, though vanilla SGD remains competitive in many settings

## Research & Literature

- **Key academic papers and sources**
  - Rangriz, P. (2025). "Limit Theorems for Stochastic Gradient Descent in High-Dimensional Single-Layer Networks." *arXiv* preprint 2511.02258. Analyses critical scaling regimes and diffusive limits; demonstrates how information exponent governs sample complexity in high-dimensional settings[1]
  - Punjani, A., Rubenstein, B. K., et al. (2017). Application of SGD to cryo-EM ab initio reconstruction, eliminating initialisation requirements. Extended in recent work on efficient high-resolution refinement[2]
  - PNAS (2025). "On the Different Regimes of Stochastic Gradient Descent." Establishes phase diagram separating three dynamical regimes with distinct generalisation error characteristics; demonstrates batch size scaling with training set size[3]
  - Wikipedia contributors (2025). "Stochastic Gradient Descent." Comprehensive overview of convergence properties, extensions, and practical guidance on step-size selection[4]
  - Terhaag, T. J., Chatziliadis, X., Zacharatou, E. T., & Markl, V. (2025). "GPU-Accelerated Stochastic Gradient Descent for Scalable Operator Placement in Geo-Distributed Streaming Systems." *VLDB 2025 Workshop: ADMS25*. Demonstrates practical scalability to million-node topologies[5]

- **Ongoing research directions**
  - Stochastic differential equation (SDE) approximations for understanding finite-batch effects and training dynamics[3]
  - Phase transitions and critical phenomena in high-dimensional learning
  - Convergence rate analysis under varying smoothness and convexity assumptions
  - Integration with modern hardware accelerators (GPUs, TPUs) for distributed optimisation

## UK Context

- **British contributions and implementations**
  - University of Waterloo (Canada) and UC San Diego collaboration on high-dimensional SGD theory reflects international research networks, though UK institutions contribute substantially to optimisation theory
  - No specific North England innovation hubs identified in current SGD literature, though Manchester and Leeds host significant machine learning research communities
  - UK-based pharmaceutical and biotech firms increasingly adopt cryo-EM with SGD-based reconstruction for structural biology applications

- **Regional considerations**
  - Sheffield and Newcastle universities maintain active optimisation research groups, though specific SGD contributions not highlighted in recent literature
  - UK's Alan Turing Institute (London-based) coordinates research on scalable machine learning algorithms, including SGD variants

## Future Directions

- **Emerging trends and developments**
  - Hybrid approaches combining SGD with second-order information (natural gradient, quasi-Newton methods) for improved convergence
  - Federated learning implementations using SGD across decentralised data sources
  - Theoretical understanding of implicit regularisation in SGD—why it generalises well despite overfitting capacity
  - Energy-efficient SGD implementations addressing computational sustainability concerns

- **Anticipated challenges**
  - Hyperparameter selection remains non-trivial; automated methods (hyperparameter optimisation, meta-learning) still developing
  - Scaling to trillion-parameter models whilst maintaining computational tractability
  - Understanding and controlling stochastic noise in extremely high-dimensional settings

- **Research priorities**
  - Convergence guarantees under realistic (non-convex, non-smooth) conditions
  - Adaptive methods that automatically adjust to problem geometry without manual tuning
  - Theoretical foundations for understanding why SGD generalises better than full-batch gradient descent

---

**Note:** This entry reflects the state of SGD research as of November 2025. The field remains active, with particular momentum in theoretical understanding of high-dimensional dynamics and practical applications in distributed systems and scientific computing.


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
