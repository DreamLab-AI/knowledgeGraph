- ### OntologyBlock
  id:: neural-network-quantisation-(ai-0435)-ontology
  collapsed:: true

  - **Identification**
    - public-access:: true
    - ontology:: true
    - term-id:: AI-0435
    - preferred-term:: Neural Network Quantisation (AI-0435)
    - source-domain:: ai
    - status:: in-progress
    - version:: 1.0
    - last-updated:: 2025-10-29

  - **Definition**
    - definition:: Neural Network Quantization is a model compression technique reducing numerical precision of weights and activations from floating-point (FP32, FP16) to lower-bit integer representations (INT8, INT4, binary) decreasing memory footprint, improving inference speed through efficient integer arithmetic, and enabling deployment on hardware with specialized integer processing units. This technique implements quantization through mapping continuous floating-point values to discrete integer levels using scale factor s and zero-point z with quantized value q = round(x/s) + z, supporting uniform quantization with evenly-spaced quantization levels and non-uniform quantization concentrating levels in high-density regions of value distributions. Quantization approaches include post-training quantization (PTQ) applying quantization to pre-trained models without retraining through calibration on representative dataset determining optimal scale/zero-point parameters (fast but may incur 1-3% accuracy loss), and quantization-aware training (QAT) simulating quantization during training through fake quantization operators enabling model to adapt learning quantization-friendly representations (slower but maintains accuracy within 0.5% of FP32 baseline). Quantization scope encompasses weight-only quantization maintaining FP32 activations reducing model size but limited speedup, weight and activation quantization enabling full integer inference pipeline achieving maximum speedup on INT8-capable hardware, and dynamic quantization determining activation scales at runtime balancing flexibility and performance. Hardware support spans ARM NEON/SVE providing 128/256-bit SIMD with INT8 dot products, Intel VNNI (Vector Neural Network Instructions) accelerating INT8 matrix multiplication on Xeon and Core processors, Qualcomm Hexagon DSP offering dedicated INT8 vector units, Apple Neural Engine with 16-bit and 8-bit arithmetic support, Google Edge TPU optimized for INT8 inference at 4 TOPS with systolic array architecture, and NVIDIA Tensor Cores supporting INT8 (Turing+) and INT4 (Ampere+) providing 2-4x throughput versus FP16. Implementation challenges include accuracy degradation particularly for small models or networks sensitive to quantization noise mitigated through mixed-precision quantization maintaining critical layers at higher precision, calibration complexity requiring representative data and careful scale determination avoiding clipping or underutilization of quantization range, and layer-wise sensitivity analysis identifying quantization-sensitive layers requiring special treatment, with frameworks like TensorRT, ONNX Runtime, TensorFlow Lite, and PyTorch supporting various quantization schemes and hardware-specific optimizations.
    - maturity:: mature
    - source:: [[TensorRT]], [[ONNX Runtime]], [[TensorFlow Lite Quantization]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: aigo:NeuralNetworkQuantisation
    - owl:physicality:: VirtualEntity
    - owl:role:: Process
    - owl:inferred-class:: aigo:VirtualProcess
    - belongsToDomain:: [[AIEthicsDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: neural-network-quantisation-(ai-0435)-relationships

  - #### OWL Axioms
    id:: neural-network-quantisation-(ai-0435)-owl-axioms
    collapsed:: true
    - ```clojure
      (Declaration (Class :NeuralNetworkQuantisation))
(AnnotationAssertion rdfs:label :NeuralNetworkQuantisation "Neural Network Quantisation"@en)
(SubClassOf :NeuralNetworkQuantisation :AIGovernancePrinciple)

;; Quantization Types
(SubClassOf :NeuralNetworkQuantisation
  (ObjectUnionOf :PostTrainingQuantization :QuantizationAwareTraining))

;; Precision Levels
(DisjointClasses :FP32Precision :FP16Precision :INT8Precision :INT4Precision :BinaryPrecision)

;; Quantization Scope
(SubClassOf :NeuralNetworkQuantisation
  (ObjectSomeValuesFrom :quantizes :Weights))
(SubClassOf :NeuralNetworkQuantisation
  (ObjectSomeValuesFrom :quantizes :Activations))
(SubClassOf :NeuralNetworkQuantisation
  (ObjectSomeValuesFrom :quantizes :Gradients))

;; Compression Metrics
(DataPropertyAssertion :achievesCompressionRatio :NeuralNetworkQuantisation "4.0"^^xsd:float)
(DataPropertyAssertion :accuracyDegradation :NeuralNetworkQuantisation "1.0"^^xsd:float)
(DataPropertyAssertion :speedupFactor :NeuralNetworkQuantisation "2.5"^^xsd:float)

;; Quantization Parameters
(SubClassOf :NeuralNetworkQuantisation
  (DataSomeValuesFrom :hasScale xsd:float))
(SubClassOf :NeuralNetworkQuantisation
  (DataSomeValuesFrom :hasZeroPoint xsd:integer))
(SubClassOf :NeuralNetworkQuantisation
  (DataSomeValuesFrom :hasBitwidth xsd:positiveInteger))

;; Hardware Support
(SubClassOf :NeuralNetworkQuantisation
  (ObjectSomeValuesFrom :acceleratedBy :VectorProcessingUnit))
(SubClassOf :NeuralNetworkQuantisation
  (ObjectSomeValuesFrom :acceleratedBy :NeuralProcessingUnit))

;; Standards Reference
(AnnotationAssertion rdfs:seeAlso :NeuralNetworkQuantisation
  "ONNX Runtime - Quantization Specification")
(AnnotationAssertion rdfs:seeAlso :NeuralNetworkQuantisation
  "ARM CMSIS-NN - INT8 Inference")
      ```

- ## About Neural Network Quantisation (AI-0435)
  id:: neural-network-quantisation-(ai-0435)-about

  - 
  -
  

