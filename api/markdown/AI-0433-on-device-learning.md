- ### OntologyBlock
  id:: on-device-learning-(ai-0433)-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0433
    - preferred-term:: On-Device Learning (AI-0433)
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: On-Device Learning is machine learning model training and adaptation occurring directly on end-user devices (smartphones, tablets, embedded systems) using local data without transmitting raw data to cloud servers, enabling personalized model adaptation, privacy preservation, and offline functionality while addressing challenges of limited computational resources and energy constraints. This approach implements training paradigms including transfer learning where pre-trained base models are fine-tuned on device-specific data adapting final layers to local patterns, few-shot learning enabling rapid adaptation from handful of examples crucial for personalized applications, meta-learning (learning to learn) where models trained to quickly adapt to new tasks with minimal data and computation, and incremental learning continuously updating models as new data arrives without catastrophic forgetting of previous knowledge. Privacy benefits include data localization ensuring sensitive information (health metrics, personal communications, financial transactions) never leaves device eliminating transmission and storage risks, user control maintaining sovereignty over personal data and model adaptations, compliance facilitation satisfying GDPR's data minimization and purpose limitation principles, and reduced attack surface as centralized servers holding massive datasets present attractive targets while distributed on-device learning disperses risk. Technical implementation strategies span selective layer training freezing most model parameters while updating final classification layers reducing computation and energy, gradient compression quantizing and sparsifying gradients before optional aggregation in federated scenarios, efficient optimizers (SGD variants, Adam) with reduced memory footprints suitable for constrained devices, and model compression applying quantization and pruning to maintain compact representations throughout adaptation process. The 2024-2025 period witnessed Apple's iOS and Google's Android implementing on-device learning for keyboard prediction, photo search, and Siri/Assistant personalization demonstrating commercial viability, TensorFlow Lite and PyTorch Mobile providing frameworks enabling developers to deploy on-device training, and academic research advancing continual learning algorithms preventing catastrophic forgetting while enabling lifelong adaptation on edge devices, though challenges remain including computational overhead where training requires 10-100x more resources than inference limiting update frequency, energy consumption potentially draining batteries necessitating careful scheduling during charging periods, and convergence difficulties as limited local data may be insufficient for robust adaptation requiring careful initialization and regularization to prevent overfitting.
    - maturity:: mature
    - source:: [[Apple Core ML]], [[TensorFlow Lite]], [[PyTorch Mobile]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: aigo:OnDeviceLearning
    - owl:physicality:: VirtualEntity
    - owl:role:: Process
    - owl:inferred-class:: aigo:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: on-device-learning-(ai-0433)-relationships

  - #### OWL Axioms
    id:: on-device-learning-(ai-0433)-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :OnDeviceLearning))
(AnnotationAssertion rdfs:label :OnDeviceLearning "On-Device Learning"@en)
(SubClassOf :OnDeviceLearning :AIGovernancePrinciple)
(SubClassOf :OnDeviceLearning :ContinuousLearning)

;; Training Characteristics
(SubClassOf :OnDeviceLearning
  (ObjectSomeValuesFrom :performs :LocalModelTraining))
(SubClassOf :OnDeviceLearning
  (ObjectSomeValuesFrom :performs :IncrementalLearning))
(SubClassOf :OnDeviceLearning
  (ObjectAllValuesFrom :avoids :RawDataTransmission))

;; Privacy Properties
(SubClassOf :OnDeviceLearning
  (ObjectSomeValuesFrom :ensures :DataLocalisation))
(SubClassOf :OnDeviceLearning
  (ObjectSomeValuesFrom :implements :PrivacyPreservation))

;; Learning Modes
(SubClassOf :OnDeviceLearning
  (ObjectUnionOf :TransferLearning :FewShotLearning :MetaLearning))

;; Resource Requirements
(DataPropertyAssertion :requiresMemoryMB :OnDeviceLearning "100"^^xsd:integer)
(DataPropertyAssertion :requiresComputeGFLOPS :OnDeviceLearning "1.0"^^xsd:float)
(DataPropertyAssertion :trainingTimeSeconds :OnDeviceLearning "60"^^xsd:integer)

;; Adaptation Strategies
(SubClassOf :OnDeviceLearning
  (ObjectSomeValuesFrom :supports :PersonalisedAdaptation))
(SubClassOf :OnDeviceLearning
  (ObjectSomeValuesFrom :supports :OnlineLearning))

;; Standards Compliance
(AnnotationAssertion rdfs:seeAlso :OnDeviceLearning
  "Apple Core ML - On-Device Training")
(AnnotationAssertion rdfs:seeAlso :OnDeviceLearning
  "TensorFlow Lite - Transfer Learning on Mobile")
(AnnotationAssertion rdfs:seeAlso :OnDeviceLearning
  "IEEE TNNLS - Continual Learning Survey")
      ```

- ## About On-Device Learning (AI-0433)
  id:: on-device-learning-(ai-0433)-about

  - 
  -
    - ### Implementation Patterns
  - ### Pattern 1: Personalised Keyboard Prediction
    ```swift
    // iOS Core ML on-device training
    import CoreML
    import CreateML
  -
    class KeyboardPersonalisation {
        /*
         * Personalised next-word prediction
         * Device: iPhone (Neural Engine)
         * Base Model: LSTM language model (15MB)
         * Local Training: User's typing history (privacy-preserved)
         */
  -
        private var baseModel: MLModel
        private var personalModel: MLUpdateTask?
  -
        func personaliseModel(userTypingHistory: [String]) async throws {
            // Prepare training data from local history
            let trainingData = MLDataTable(userTypingHistory.map { text in
                ["input": MLFeatureValue(string: text.prefix(upTo: text.index(text.endIndex, offsetBy: -1))),
                 "target": MLFeatureValue(string: String(text.last!))]
            })
  -
            // On-device training configuration
            let updateParameters = MLModelConfiguration()
            updateParameters.computeUnits = .cpuAndNeuralEngine
            updateParameters.allowsLowPrecisionAccumulation = true
  -
            // Fine-tune last 2 layers only
            let updateTask = try MLUpdateTask(
                forModelAt: baseModelURL,
                trainingData: trainingData,
                configuration: updateParameters
            )
  -
            // Training progress monitoring
            updateTask.resume()
  -
            for await progress in updateTask.progress {
                print("Training: \(progress.fractionCompleted * 100)%")
                // Typical: 2-5 minutes on iPhone
            }
  -
            // Deploy personalised model
            let updatedModel = try await updateTask.result.get()
            self.baseModel = updatedModel
  -
            // Save user-specific weights locally (encrypted)
            try updatedModel.write(to: personalModelURL)
        }
  -
        func predict(prefix: String) -> String {
            // Use personalised model for prediction
            let input = try! MLDictionaryFeatureProvider(dictionary: ["input": prefix])
            let prediction = try! baseModel.prediction(from: input)
            return prediction.featureValue(for: "output")!.stringValue
        }
    }
    ```
