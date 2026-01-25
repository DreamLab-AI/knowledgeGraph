- ### OntologyBlock
  id:: inference-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0042
	- preferred-term:: Inference
	- source-domain:: ai
	- status:: draft
- public-access:: true
	- definition:: ### Primary Definition
**Inference** is the process of applying an AI system to produce results. The act of using a trained model to make predictions or generate outputs on new, unseen data. Refers both to the process and its result, with premises being a fact, rule, model, feature, or raw data.
	- maturity:: draft
	- owl:class:: ai:Inference
	- owl:role:: Concept
	- belongsToDomain:: [[ArtificialIntelligenceDomain]]
- ## About Inference
	- ### Primary Definition
**Inference** is the process of applying an AI system to produce results. The act of using a trained model to make predictions or generate outputs on new, unseen data. Refers both to the process and its result, with premises being a fact, rule, model, feature, or raw data.
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Inference
		  
		  ## Metadata
		  - **Term ID**: AI-0042
		  - **Type**: AICapability
		  - **Classification**: ML Process
		  - **Domain**: MLDomain
		  - **Layer**: ImplementationLayer
		  - **Status**: Active
		  - **Version**: 1.0
		  - **Last Updated**: 2025-10-27
		  - **Priority**: 1=Foundational
		  
		  ## Definition
		  
		  ### Primary Definition
		  **Inference** is the process of applying an AI system to produce results. The act of using a trained model to make predictions or generate outputs on new, unseen data. Refers both to the process and its result, with premises being a fact, rule, model, feature, or raw data.
		  
		  **Source**: ISO/IEC 22989:2022, Clause 3.3.4 - Authority Score: 0.95
		  
		  ### Operational Characteristics
		  - **Model Application**: Uses trained model on new inputs
		  - **Real-Time Processing**: Typically requires low latency
		  - **No Learning**: Model parameters remain fixed
		  - **Production Phase**: Deployed model serving predictions
		  - **Scalability Critical**: Must handle high request volumes
		  
		  ## Relationships
		  
		  ### Parent Classes
		  - **Machine Learning Process**: Inference is a core ML operation
		  - **Deployment Phase**: Occurs after training completion
		  
		  ### Related Concepts
		  - **Training** (AI-0041): Contrasting process (creating vs using model)
		  - **Model** (AI-0004): Inference applies trained models
		  - **Prediction**: Common inference output type
		  - **Deployment**: Context where inference occurs
		  - **Runtime Performance**: Inference speed and throughput
		  
		  ## Formal Ontology
		  
		  <details>
		  <summary>Click to expand OntologyBlock</summary>
		  
		  ```clojure
		  ;; Inference Ontology (OWL Functional Syntax)
		  ;; Term ID: AI-0042
		  ;; Domain: MLDomain | Layer: ImplementationLayer
		  
		  (Declaration (Class :Inference))
		  
		  ;; Core Classification
		  (SubClassOf :Inference :MachineLearningProcess)
		  (SubClassOf :Inference :DeploymentPhase)
		  
		  ;; Process Characteristics
		  (SubClassOf :Inference
		    (ObjectSomeValuesFrom :applies :TrainedModel))
		  (SubClassOf :Inference
		    (ObjectSomeValuesFrom :requiresInput :NewData))
		  (SubClassOf :Inference
		    (ObjectSomeValuesFrom :produces :Prediction))
		  (SubClassOf :Inference
		    (ObjectSomeValuesFrom :occursIn :ProductionEnvironment))
		  
		  ;; Disjoint with Training
		  (DisjointClasses :Inference :Training)
		  
		  ;; Annotations
		  (AnnotationAssertion rdfs:label :Inference "Inference"@en)
		  (AnnotationAssertion rdfs:comment :Inference
		    "Process of applying trained AI system to produce results on new, unseen data"@en)
		  (AnnotationAssertion :isoReference :Inference "ISO/IEC 22989:2022, Clause 3.3.4")
		  (AnnotationAssertion :authorityScore :Inference "0.95"^^xsd:float)
		  (AnnotationAssertion :priorityLevel :Inference "1"^^xsd:integer)
		  
		  ;; Data Properties
		  (DataPropertyAssertion :modifiesModelParameters :Inference "false"^^xsd:boolean)
		  (DataPropertyAssertion :requiresLowLatency :Inference "true"^^xsd:boolean)
		  (DataPropertyAssertion :isProductionPhase :Inference "true"^^xsd:boolean)
		  
		  ;; Property Declarations
		  (Declaration (ObjectProperty :applies))
		  (ObjectPropertyDomain :applies :Inference)
		  (ObjectPropertyRange :applies :TrainedModel)
		  
		  (Declaration (DataProperty :requiresLowLatency))
		  (DataPropertyDomain :requiresLowLatency :Inference)
		  (DataPropertyRange :requiresLowLatency xsd:boolean)
		  ```
		  </details>
		  
		  ## Standards Alignment
		  
		  ### ISO/IEC Standards
		  - **ISO/IEC 22989:2022**: Clause 3.3.4 (Inference)
		  
		  ### NIST AI RMF
		  - **Function**: MANAGE (Inference-time monitoring)
		  
		  ### EU AI Act
		  - **Article 72**: Post-market monitoring includes inference behaviour
		  
		  ## Related Terms
		  - **Training** (AI-0041): Contrasting ML process
		  - **Model** (AI-0004): Applied during inference
		  - **Deployment**: Operational context for inference
		  - **Prediction**: Common inference output
		  
		  ## References
		  1. ISO/IEC 22989:2022 - Clause 3.3.4
		  2. NIST AI 100-3 - Glossary
		  3. NIST AI RMF 1.0 - Runtime monitoring
		  
		  ---
		  
		  **Authority Score**: 0.95 | **Standards Compliance**: ✓ ISO/IEC ✓ NIST ✓ EU AI Act
		  
		  ```

	- ## Section 1: Introduction
		- There are four main "wars" or battlegrounds among AI companies and stakeholders: the Data War, GPU/Inference War, Multimodality War, and RAG/Ops War.

	- ## Section 1: Introduction
		- There are four main "wars" or battlegrounds among AI companies and stakeholders: the Data War, GPU/Inference War, Multimodality War, and RAG/Ops War.

	- ### Introduction

	- ### Key Techniques

	- #### [Overview of GGUF quantization methods : LocalLLaMA (reddit.com)](https://www.reddit.com/r/LocalLLaMA/comments/1ba55rj/overview_of_gguf_quantization_methods/)
	- **Quantization:**
		- Rounding of weights and activations to lower precision representation.
		  

- ### Cambridge IGCSE English
   
   Cambridge IGCSE First Language English is designed for learners whose first language is English. The course aims to develop learners' analysis and communication skills, including inference and presenting opinions effectively. The syllabus encourages learners to read widely for enjoyment and to further their awareness of English usage. Cambridge IGCSE English also provides teaching and learning resources for teachers, including schemes of work, example candidate responses, past papers, and digital resources.

- ### Cambridge IGCSE English
   
   Cambridge IGCSE First Language English is designed for learners whose first language is English. The course aims to develop learners' analysis and communication skills, including inference and presenting opinions effectively. The syllabus encourages learners to read widely for enjoyment and to further their awareness of English usage. Cambridge IGCSE English also provides teaching and learning resources for teachers, including schemes of work, example candidate responses, past papers, and digital resources.

- ### Cambridge IGCSE English
   
   Cambridge IGCSE First Language English is designed for learners whose first language is English. The course aims to develop learners' analysis and communication skills, including inference and presenting opinions effectively. The syllabus encourages learners to read widely for enjoyment and to further their awareness of English usage. Cambridge IGCSE English also provides teaching and learning resources for teachers, including schemes of work, example candidate responses, past papers, and digital resources.
