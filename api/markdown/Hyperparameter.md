- ### OntologyBlock
  id:: hyperparameter-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0048
	- preferred-term:: Hyperparameter
- source-domain:: mv
	- status:: draft
	- definition:: ### Primary Definition
A **Hyperparameter** is a configuration variable set before training that controls the learning process but is not learned from data. Examples include learning rate, batch size, and number of layers. Hyperparameters are tuned through experimentation.
	- maturity:: draft
	- owl:class:: ai:Hyperparameter
	- owl:role:: Concept
	- belongsToDomain:: [[MachineLearningDomain]]
- ## About Hyperparameter
	- ### Primary Definition
A **Hyperparameter** is a configuration variable set before training that controls the learning process but is not learned from data. Examples include learning rate, batch size, and number of layers. Hyperparameters are tuned through experimentation.
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Hyperparameter
		  
		  ## Metadata
		  - **Term ID**: AI-0048
		  - **Type**: AICapability
		  - **Classification**: Configuration Parameter
		  - **Domain**: MLDomain
		  - **Layer**: AlgorithmicLayer
		  - **Status**: Active
		  - **Version**: 1.0
		  - **Last Updated**: 2025-10-27
		  - **Priority**: 1=Foundational
		  
		  ## Definition
		  
		  ### Primary Definition
		  A **Hyperparameter** is a configuration variable set before training that controls the learning process but is not learned from data. Examples include learning rate, batch size, and number of layers. Hyperparameters are tuned through experimentation.
		  
		  **Source**: ISO/IEC 22989:2022 (Training context) + NIST AI 100-3 - Authority Score: 0.93
		  
		  ### Operational Characteristics
		  - **Pre-Training Configuration**: Set before learning begins
		  - **Not Learned**: Not updated during training
		  - **Affects Learning**: Controls training behaviour and model architecture
		  - **Tuning Required**: Optimised through search or experimentation
		  - **Model-Specific**: Different models have different hyperparameters
		  
		  ## Relationships
		  
		  ### Parent Classes
		  - **Configuration Parameter**: Hyperparameter is a model configuration setting
		  
		  ### Related Concepts
		  - **Training** (AI-0041): Hyperparameters control training
		  - **Model Parameters** (AI-0051): Contrasting concept (learned vs configured)
		  - **Learning Rate**: Common hyperparameter
		  - **Batch Size** (AI-0050): Training hyperparameter
		  - **Validation Data**: Used for hyperparameter tuning
		  
		  ## Formal Ontology
		  
		  <details>
		  <summary>Click to expand OntologyBlock</summary>
		  
		  ```clojure
		  ;; Hyperparameter Ontology (OWL Functional Syntax)
		  ;; Term ID: AI-0048
		  ;; Domain: MLDomain | Layer: AlgorithmicLayer
		  
		  (Declaration (Class :Hyperparameter))
		  
		  ;; Core Classification
		  (SubClassOf :Hyperparameter :ConfigurationParameter)
		  (SubClassOf :Hyperparameter :TrainingConfiguration)
		  
		  ;; Distinguishing Properties
		  (SubClassOf :Hyperparameter
		    (ObjectSomeValuesFrom :setBeforeTraining :ModelConfiguration))
		  (SubClassOf :Hyperparameter
		    (ObjectSomeValuesFrom :controls :LearningProcess))
		  (SubClassOf :Hyperparameter
		    (ObjectAllValuesFrom :notLearnedFrom :TrainingData))
		  
		  ;; Tuning Properties
		  (SubClassOf :Hyperparameter
		    (ObjectSomeValuesFrom :optimisedThrough :ExperimentalSearch))
		  (SubClassOf :Hyperparameter
		    (ObjectSomeValuesFrom :evaluatedUsing :ValidationData))
		  
		  ;; Contrast with Model Parameters
		  (DisjointClasses :Hyperparameter :ModelParameters)
		  
		  ;; Annotations
		  (AnnotationAssertion rdfs:label :Hyperparameter "Hyperparameter"@en-GB)
		  (AnnotationAssertion rdfs:comment :Hyperparameter
		    "Configuration variable set before training controlling learning process but not learned from data"@en)
		  (AnnotationAssertion :isoReference :Hyperparameter "ISO/IEC 22989:2022")
		  (AnnotationAssertion :authorityScore :Hyperparameter "0.93"^^xsd:float)
		  (AnnotationAssertion :priorityLevel :Hyperparameter "1"^^xsd:integer)
		  
		  ;; Data Properties
		  (DataPropertyAssertion :isLearnedFromData :Hyperparameter "false"^^xsd:boolean)
		  (DataPropertyAssertion :requiresManualTuning :Hyperparameter "true"^^xsd:boolean)
		  (DataPropertyAssertion :setPreTraining :Hyperparameter "true"^^xsd:boolean)
		  ```
		  </details>
		  
		  ## Standards Alignment
		  
		  ### ISO/IEC Standards
		  - **ISO/IEC 22989:2022**: Training and model configuration
		  
		  ### NIST AI RMF
		  - **Function**: MAP (Understanding model configuration)
		  
		  ### EU AI Act
		  - **Article 11**: Technical documentation includes hyperparameter choices
		  
		  ## Related Terms
		  - **Model Parameters** (AI-0051): Contrasting concept (learned parameters)
		  - **Training** (AI-0041): Hyperparameters guide training
		  - **Validation Data**: Used to tune hyperparameters
		  - **Learning Rate**: Example hyperparameter
		  
		  ## References
		  1. ISO/IEC 22989:2022 - Training context
		  2. NIST AI 100-3 - Technical terminology
		  3. EU AI Act - Article 11 (Technical documentation)
		  
		  ---
		  
		  **Authority Score**: 0.93 | **Standards Compliance**: ✓ ISO/IEC ✓ NIST ✓ EU AI Act
		  
		  ```

	- ### Hyperparameter Tuning
		- **Grid Search:** An exhaustive search over a specified parameter grid.
			- [GridSearchCV in scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html)
		- **Random Search:** A search over a specified parameter distribution.
			- [RandomizedSearchCV in scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html)

- # The Golden Key: AI-Guided Emergent Narratives for Hyper-Personalized Location-Based Events

- # Enabling Hyper-Personalised Experiences

	- ### Hyperparameter Tuning
		- **Grid Search:** An exhaustive search over a specified parameter grid.
			- [GridSearchCV in scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html)
		- **Random Search:** A search over a specified parameter distribution.
			- [RandomizedSearchCV in scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html)

- # The Golden Key: AI-Guided Emergent Narratives for Hyper-Personalized Location-Based Events

- # Enabling Hyper-Personalised Experiences

- # The Golden Key: AI-Guided Emergent Narratives for Hyper-Personalized Location-Based Events

- # Enabling Hyper-Personalised Experiences

- source-domain:: ai
	- status:: active
    - public-access:: true
	- definition:: A configuration variable set before training that controls the learning process but is not learned from data. Examples include learning rate, batch size, and number of layers.
	- maturity:: established
	- owl:class:: ai:Hyperparameter
	- owl:role:: Concept
	- belongsToDomain:: [[MachineLearningDomain]]


## Academic Context

- Brief contextual overview
  - Hyperparameters are foundational to machine learning, controlling how models learn without being learned themselves from training data
  - Distinguished from model parameters (weights and biases learned during training)
  - Critical for model performance and generalisation
- Academic foundations
  - Formal definition established in ISO/IEC 22989:2022 for AI terminology
  - Extensively studied in optimisation theory and statistical learning frameworks
  - Research spans automated hyperparameter tuning, neural architecture search, and meta-learning

## Current Landscape (2025)

- Industry adoption and implementations
  - Universal across all machine learning frameworks including TensorFlow, PyTorch, scikit-learn, and JAX
  - Automated tuning tools widely adopted: Optuna, Ray Tune, Weights & Biases Sweeps
  - UK companies like DeepMind and Faculty AI pioneering efficient hyperparameter optimisation
- Technical capabilities and limitations
  - Common hyperparameters include learning rate, batch size, number of layers, dropout rate, regularisation strength
  - Manual tuning remains time-consuming and computationally expensive
  - AutoML platforms increasingly automate selection but may lack domain-specific insights
- Standards and frameworks
  - ISO/IEC 22989:2022 provides standardised AI terminology including hyperparameters
  - NIST AI Risk Management Framework addresses documentation requirements
  - EU AI Act Article 11 mandates disclosure of hyperparameter choices for high-risk systems

## Research & Literature

- Key academic papers and sources
  - Bergstra, J., & Bengio, Y. (2012). "Random Search for Hyper-Parameter Optimization." Journal of Machine Learning Research, 13, 281-305. [http://jmlr.org/papers/v13/bergstra12a.html](http://jmlr.org/papers/v13/bergstra12a.html)
  - Feurer, M., & Hutter, F. (2019). "Hyperparameter Optimization." In Automated Machine Learning (pp. 3-33). Springer. [https://doi.org/10.1007/978-3-030-05318-5_1](https://doi.org/10.1007/978-3-030-05318-5_1)
  - Elsken, T., et al. (2019). "Neural Architecture Search: A Survey." Journal of Machine Learning Research, 20(55), 1-21. [http://jmlr.org/papers/v20/18-598.html](http://jmlr.org/papers/v20/18-598.html)
- Ongoing research directions
  - Transfer learning for hyperparameter tuning across related tasks
  - Bayesian optimisation and Gaussian processes for efficient search
  - Meta-learning approaches to learn optimal hyperparameter configurations

## UK Context

- British contributions and implementations
  - DeepMind's research on automated hyperparameter tuning for reinforcement learning systems
  - University of Oxford's work on Bayesian optimisation for hyperparameter search
  - UK-based Faculty AI develops enterprise AutoML platforms with sophisticated tuning
- North England innovation hubs
  - University of Manchester's machine learning research group explores efficient tuning methods
  - Leeds Institute for Data Analytics investigates hyperparameter optimisation for healthcare AI
- Regional case studies
  - Manchester-based Peak AI applies automated hyperparameter tuning to retail forecasting models
  - Newcastle University's digital health projects optimise medical imaging models via principled hyperparameter search

## Future Directions

- Emerging trends and developments
  - Neural architecture search (NAS) automating both architecture and hyperparameter selection
  - Meta-learning frameworks predicting optimal hyperparameters from dataset characteristics
  - Green AI initiatives balancing performance with energy efficiency in hyperparameter tuning
- Anticipated challenges
  - Computational cost of exhaustive search remains prohibitive for large-scale models
  - Generalisation across domains still requires domain expertise
  - Explainability of automated tuning decisions for regulatory compliance
- Research priorities
  - Efficient search algorithms reducing computational burden
  - Transfer learning for hyperparameter configurations
  - Integration with model interpretability and fairness constraints

## Hyperparameter Tuning Methods

- Grid search
  - Exhaustive search over specified parameter grid
  - Guarantees finding best combination within grid but computationally expensive
  - scikit-learn GridSearchCV: [https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html)
- Random search
  - Samples random combinations from parameter distributions
  - Often more efficient than grid search for high-dimensional spaces
  - scikit-learn RandomizedSearchCV: [https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html)
- Bayesian optimisation
  - Uses probabilistic model to guide search towards promising regions
  - Popular tools include Optuna, Hyperopt, and Google Vizier
- Neural architecture search
  - Automates both architecture and hyperparameter selection
  - Computationally intensive but yields state-of-the-art results

## References

1. ISO/IEC 22989:2022. Information technology — Artificial intelligence — Artificial intelligence concepts and terminology.
2. Bergstra, J., & Bengio, Y. (2012). Random Search for Hyper-Parameter Optimization. Journal of Machine Learning Research, 13, 281-305. http://jmlr.org/papers/v13/bergstra12a.html
3. Feurer, M., & Hutter, F. (2019). Hyperparameter Optimization. In Automated Machine Learning (pp. 3-33). Springer. https://doi.org/10.1007/978-3-030-05318-5_1
4. Elsken, T., et al. (2019). Neural Architecture Search: A Survey. Journal of Machine Learning Research, 20(55), 1-21. http://jmlr.org/papers/v20/18-598.html
5. NIST AI 100-3. U.S. Leadership in AI: A Plan for Federal Engagement in Developing Technical Standards and Related Tools. https://www.nist.gov/publications/us-leadership-ai-plan-federal-engagement-developing-technical-standards-and-related


## Metadata

- Last Updated: 2025-11-11
- Review Status: Comprehensive editorial review
- Verification: Academic sources verified
- Regional Context: UK context included
