- ### OntologyBlock
  id:: tinyml-(machine-learning-on-microcontrollers)-(ai-0432)-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0432
    - preferred-term:: TinyML (Machine Learning on Microcontrollers) (AI-0432)
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: TinyML is machine learning deployment on extremely resource-constrained microcontrollers with memory measured in kilobytes (typically 256KB RAM, 1MB flash storage), power consumption in milliwatts (under 1mW idle, a few mW active), and processing measured in MHz (typically 16-80MHz ARM Cortex-M cores), enabling intelligent inference at the extreme edge in battery-powered IoT devices, wearables, and embedded sensors. This paradigm enables always-on intelligent sensing at ultra-low power enabling applications infeasible with cloud connectivity including keyword spotting wake-word detection consuming under 1mW enabling multi-year battery life, gesture recognition processing accelerometer data locally for responsive interaction, anomaly detection in industrial sensors identifying equipment failures without connectivity, audio event classification recognizing sounds like glass breaking or baby crying for home automation, and predictive maintenance on rotating machinery analyzing vibration patterns to predict bearing failures. Implementation requires aggressive model optimization through INT8 quantization representing weights and activations in 8-bit integers (4x compression versus FP32), extreme pruning removing 70-95% of model weights while maintaining acceptable accuracy, knowledge distillation training compact student models mimicking larger teacher models, and architecture search discovering efficient neural architectures (MobileNet, EfficientNet variants) tailored for resource constraints. Key constraints include memory footprint where entire model must fit in RAM with typical limit 100KB for weights plus activation memory, computational budget constrained to deliver real-time inference within 10-50ms on CPUs without hardware accelerators, energy per inference typically 0.5mJ enabling 10,000+ inferences per mAh battery capacity, and fixed-point arithmetic as floating-point operations prohibitively expensive requiring software emulation or absent from hardware entirely. The TinyML ecosystem comprises frameworks including TensorFlow Lite for Microcontrollers (Google) supporting ARM Cortex-M deployment, Edge Impulse providing end-to-end workflow from data collection to deployment, uTensor enabling neural network inference on mbed-OS devices, and CMSIS-NN providing optimized neural network kernels for ARM Cortex-M processors, while benchmarks from MLPerf Tiny establish standardized metrics for comparing inference latency, accuracy, and energy consumption across TinyML implementations, with typical results showing 10ms keyword spotting inference consuming 0.5mJ on Cortex-M4 processors.
    - maturity:: mature
    - source:: [[TensorFlow Lite Micro]], [[TinyML Foundation]], [[MLPerf Tiny]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: aigo:TinyML
    - owl:physicality:: VirtualEntity
    - owl:role:: Process
    - owl:inferred-class:: aigo:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: tinyml-(machine-learning-on-microcontrollers)-(ai-0432)-relationships

  - #### OWL Axioms
    id:: tinyml-(machine-learning-on-microcontrollers)-(ai-0432)-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :TinyML))
(AnnotationAssertion rdfs:label :TinyML "TinyML"@en)
(SubClassOf :TinyML :AIGovernancePrinciple)
(SubClassOf :TinyML :UltraLowPowerAI)

;; Extreme Resource Constraints
(DataPropertyAssertion :hasMaxMemoryKB :TinyML "256"^^xsd:integer)
(DataPropertyAssertion :hasMaxStorageKB :TinyML "1024"^^xsd:integer)
(DataPropertyAssertion :hasMaxPowerMW :TinyML "1"^^xsd:integer)
(DataPropertyAssertion :hasMaxModelSizeKB :TinyML "100"^^xsd:integer)

;; Target Hardware
(SubClassOf :TinyML
  (ObjectSomeValuesFrom :deployedOn :Microcontroller))
(SubClassOf :TinyML
  (ObjectSomeValuesFrom :targetsHardware :ARMCortexM))
(SubClassOf :TinyML
  (ObjectSomeValuesFrom :runsOn :BareMetalOS))

;; Inference Characteristics
(DataPropertyAssertion :hasInferenceTimeMS :TinyML "10"^^xsd:integer)
(DataPropertyAssertion :hasEnergyPerInferenceMicrojoules :TinyML "500"^^xsd:integer)

;; Required Optimisations
(SubClassOf :TinyML
  (ObjectAllValuesFrom :requires :INT8Quantization))
(SubClassOf :TinyML
  (ObjectAllValuesFrom :requires :AggressivePruning))
(SubClassOf :TinyML
  (ObjectSomeValuesFrom :uses :FixedPointArithmetic))

;; Standards and Frameworks
(AnnotationAssertion rdfs:seeAlso :TinyML
  "TensorFlow Lite for Microcontrollers")
(AnnotationAssertion rdfs:seeAlso :TinyML
  "TinyML Foundation - MLPerf Tiny")
(AnnotationAssertion rdfs:seeAlso :TinyML
  "IEEE Spectrum TinyML Special Issue 2020")
      ```

- ## About TinyML (Machine Learning on Microcontrollers) (AI-0432)
  id:: tinyml-(machine-learning-on-microcontrollers)-(ai-0432)-about

  - 
  -
    - ### Challenges and Solutions
  - ### Memory Constraints
    **Problem**: Model doesn't fit in 256KB RAM
    **Solutions**:
    - Aggressive pruning (remove 70-90% weights)
    - Knowledge distillation from large teacher
    - Tensor memory sharing and reuse
    - Hybrid quantization (critical layers 16-bit)
