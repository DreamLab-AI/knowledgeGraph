- ### OntologyBlock
  id:: training-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0041
	- preferred-term:: Training
	- source-domain:: artificial-intelligence
	- status:: draft
- public-access:: true
	- definition:: ### Primary Definition
**Training** is the process of using a training dataset to cause a model to be created or updated. Training involves iterative adjustment of model parameters to minimise error or maximise performance on the training task.
	- maturity:: draft
	- owl:class:: ai:Training
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
- ## About Training
	- ### Primary Definition
**Training** is the process of using a training dataset to cause a model to be created or updated. Training involves iterative adjustment of model parameters to minimise error or maximise performance on the training task.
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Training
		  
		  ## Metadata
		  - **Term ID**: AI-0041
		  - **Type**: AICapability
		  - **Classification**: ML Process
		  - **Domain**: MLDomain
		  - **Layer**: AlgorithmicLayer
		  - **Status**: Active
		  - **Version**: 1.0
		  - **Last Updated**: 2025-10-27
		  - **Priority**: 1=Foundational
		  
		  ## Definition
		  
		  ### Primary Definition
		  **Training** is the process of using a training dataset to cause a model to be created or updated. Training involves iterative adjustment of model parameters to minimise error or maximise performance on the training task.
		  
		  **Source**: ISO/IEC 22989:2022, Clause 3.3.7 - Authority Score: 0.95
		  
		  ### Operational Characteristics
		  - **Iterative Optimisation**: Repeatedly adjusts parameters to improve performance
		  - **Dataset-Driven**: Learns patterns from training data examples
		  - **Objective Function**: Minimises loss or maximises reward
		  - **Parameter Updates**: Modifies model weights and biases
		  - **Convergence**: Continues until performance plateaus or criteria met
		  
		  ## Relationships
		  
		  ### Parent Classes
		  - **Machine Learning Process**: Training is a core ML activity
		  - **Model Development**: Essential phase in creating AI models
		  
		  ### Related Concepts
		  - **Training Data** (AI-0051): Input dataset for training
		  - **Backpropagation** (AI-0043): Algorithm for neural network training
		  - **Gradient Descent** (AI-0044): Optimisation method used in training
		  - **Validation**: Evaluates model during training
		  - **Overfitting** (AI-0054): Risk during training process
		  
		  ## Formal Ontology
		  
		  <details>
		  <summary>Click to expand OntologyBlock</summary>
		  
		  ```clojure
		  ;; Training Ontology (OWL Functional Syntax)
		  ;; Term ID: AI-0041
		  ;; Domain: MLDomain | Layer: AlgorithmicLayer
		  
		  (Declaration (Class :Training))
		  
		  ;; Core Classification
		  (SubClassOf :Training :MachineLearningProcess)
		  (SubClassOf :Training :ModelDevelopmentPhase)
		  
		  ;; Process Characteristics
		  (SubClassOf :Training
		    (ObjectSomeValuesFrom :requiresInput :TrainingData))
		  (SubClassOf :Training
		    (ObjectSomeValuesFrom :produces :TrainedModel))
		  (SubClassOf :Training
		    (ObjectSomeValuesFrom :employs :OptimisationAlgorithm))
		  (SubClassOf :Training
		    (ObjectSomeValuesFrom :minimises :LossFunction))
		  (SubClassOf :Training
		    (ObjectSomeValuesFrom :updates :ModelParameters))
		  
		  ;; Operational Properties
		  (SubClassOf :Training
		    (ObjectSomeValuesFrom :performsIteratively :ParameterAdjustment))
		  (SubClassOf :Training
		    (ObjectSomeValuesFrom :convergesTo :OptimalParameters))
		  
		  ;; Annotations
		  (AnnotationAssertion rdfs:label :Training "Training"@en)
		  (AnnotationAssertion rdfs:comment :Training
		    "Process of using training dataset to create or update a model through iterative parameter adjustment"@en)
		  (AnnotationAssertion :isoReference :Training "ISO/IEC 22989:2022, Clause 3.3.7")
		  (AnnotationAssertion :authorityScore :Training "0.95"^^xsd:float)
		  (AnnotationAssertion :priorityLevel :Training "1"^^xsd:integer)
		  
		  ;; Data Properties
		  (DataPropertyAssertion :isIterative :Training "true"^^xsd:boolean)
		  (DataPropertyAssertion :requiresOptimisation :Training "true"^^xsd:boolean)
		  (DataPropertyAssertion :modifiesModelParameters :Training "true"^^xsd:boolean)
		  
		  ;; Property Declarations
		  (Declaration (ObjectProperty :requiresInput))
		  (ObjectPropertyDomain :requiresInput :Training)
		  (ObjectPropertyRange :requiresInput :TrainingData)
		  
		  (Declaration (ObjectProperty :produces))
		  (ObjectPropertyDomain :produces :Training)
		  (ObjectPropertyRange :produces :TrainedModel)
		  
		  (Declaration (ObjectProperty :employs))
		  (ObjectPropertyDomain :employs :Training)
		  (ObjectPropertyRange :employs :OptimisationAlgorithm)
		  
		  (Declaration (ObjectProperty :minimises))
		  (ObjectPropertyDomain :minimises :Training)
		  (ObjectPropertyRange :minimises :LossFunction)
		  ```
		  </details>
		  
		  ## Standards Alignment
		  
		  ### ISO/IEC Standards
		  - **ISO/IEC 22989:2022**: Clause 3.3.7 (Training)
		  - **ISO/IEC 23894:2023**: Training data quality requirements
		  
		  ### NIST AI RMF
		  - **Function**: MAP (Understanding training data and processes)
		  
		  ### EU AI Act
		  - **Article 10**: Training data requirements for high-risk AI
		  
		  ## Related Terms
		  - **Training Data** (AI-0051): Dataset used for training
		  - **Inference** (AI-0042): Contrasting process (using trained model)
		  - **Backpropagation** (AI-0043): Common training algorithm
		  - **Model** (AI-0004): Output of training process
		  
		  ## References
		  1. ISO/IEC 22989:2022 - Clause 3.3.7
		  2. NIST AI 100-3 - Glossary
		  3. EU AI Act - Article 10 (Training data requirements)
		  
		  ---
		  
		  **Authority Score**: 0.95 | **Standards Compliance**: ✓ ISO/IEC ✓ NIST ✓ EU AI Act
		  
		  ```
## Academic Context

- Training is a structured, goal-oriented process designed to build specific skills or knowledge for defined purposes, distinct from broader, self-directed learning which emphasises critical thinking and adaptability[1].
  - It is typically time-bound and practical, focusing on improving performance in particular roles or tasks, with progress assessed through feedback and evaluation.
  - The academic foundations of training draw from educational psychology, instructional design, and organisational behaviour, emphasising measurable outcomes and skill acquisition.

## Current Landscape (2025)

- Industry adoption of training is increasingly skills-focused rather than role-focused, reflecting the need for agility in fast-evolving job markets[3].
  - Notable organisations globally and within the UK are integrating AI-powered personalised training platforms and cloud-based remote learning solutions to enhance accessibility and effectiveness[2][5][7].
  - In the UK, major cities such as Manchester, Leeds, Newcastle, and Sheffield have seen growth in corporate training hubs and digital learning providers, supporting regional workforce development.
- Technical capabilities now include AI-driven simulations, competency-based assessments, and data analytics to track skill development and training impact[5][7].
- Limitations remain around ensuring equitable access, maintaining engagement in remote formats, and addressing ethical concerns related to AI use in training[4].
- Standards and frameworks increasingly emphasise skills validation, continuous learning cultures, and integration of AI ethics policies within training programmes[4][7].

## Research & Literature

- Key academic sources include:
  - Salas, E., Tannenbaum, S. I., Kraiger, K., & Smith-Jentsch, K. A. (2012). The Science of Training and Development in Organizations: What Matters in Practice. *Psychological Science in the Public Interest*, 13(2), 74–101. DOI:10.1177/1529100612436661
  - Noe, R. A. (2017). *Employee Training and Development* (7th ed.). McGraw-Hill Education.
  - Brown, K. G., & Sitzmann, T. (2011). Training and Employee Development for Improved Performance. *Annual Review of Organizational Psychology and Organizational Behavior*, 1, 451–474. DOI:10.1146/annurev-orgpsych-031413-091326
- Ongoing research focuses on AI integration in training, ethical AI use, skills validation methods, and the impact of remote learning on engagement and outcomes[4][7].

## UK Context

- The UK has been proactive in adopting skills-based training approaches, with government initiatives supporting upskilling and reskilling to address projected skill shortages[3].
- North England cities such as Manchester and Leeds host innovation hubs that collaborate with universities and industry to develop advanced training technologies and programmes.
- Regional case studies include partnerships between local authorities and tech firms to deliver AI-enhanced training for manufacturing and digital sectors, notably in Sheffield and Newcastle.

## Future Directions

- Emerging trends include further AI-driven personalisation, immersive virtual reality training, and continuous, just-in-time learning embedded in workflows[5][7].
- Anticipated challenges involve balancing automation with human-led training, ensuring data privacy, mitigating algorithmic bias, and maintaining workforce engagement in hybrid learning environments[4].
- Research priorities focus on ethical frameworks for AI in training, efficacy of blended learning models, and longitudinal impacts of skills-first training on career trajectories.

## References

1. Disprz. (2025). Learning vs Training 2025: Key Differences & Best Practices. Retrieved from https://disprz.ai/blog/learning-vs-training-differences-best-practices  
2. CertLibrary. (2025). The Top Training Trends Shaping the Future of Learning in 2025. Retrieved from https://www.certlibrary.com/blog/the-top-training-trends-shaping-the-future-of-learning-in-2025/  
3. Thirst. (2025). Top 11 Learning and Development Trends 2025. Retrieved from https://thirst.io/blog/11-learning-and-development-trends-for-2025/  
4. Training Magazine. (2025). What Will Drive 2025? Retrieved from https://trainingmag.com/what-will-drive-2025/  
5. eLearning Industry. (2025). Key Trends in Corporate Training and Development for 2025. Retrieved from https://www.eidesign.net/corporate-training-development-trends/  
6. Salas, E., Tannenbaum, S. I., Kraiger, K., & Smith-Jentsch, K. A. (2012). The Science of Training and Development in Organizations: What Matters in Practice. *Psychological Science in the Public Interest*, 13(2), 74–101. https://doi.org/10.1177/1529100612436661  
7. LessonLab. (2025). Shaping the Future of Corporate Training and Learning: Key Trends for 2025. Retrieved from https://lessonlab.org/shaping-the-future-of-corporate-training-and-learning-key-trends-for-2025/  
8. Noe, R. A. (2017). *Employee Training and Development* (7th ed.). McGraw-Hill Education.  
9. Brown, K. G., & Sitzmann, T. (2011). Training and Employee Development for Improved Performance. *Annual Review of Organizational Psychology and Organizational Behavior*, 1, 451–474. https://doi.org/10.1146/annurev-orgpsych-031413-091326


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
