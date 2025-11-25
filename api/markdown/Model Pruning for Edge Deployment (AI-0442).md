id:: model-pruning-for-edge-deployment-ai-0442-ontology

- ### OntologyBlock
  id:: Model Pruning for Edge Deployment (AI-0442)
  - ontology:: true
  - public-access:: true
  - term-id:: DT-0442
  - preferred-term:: Model Pruning for Edge Deployment (AI-0442)
  - source-domain:: ai
  - status:: in
  - definition:: Model Pruning for Edge Deployment systematically removes redundant weights and neurons from neural networks, reducing model size and computational requirements while maintaining sufficient accuracy for edge inference. Pruning achieves 10-100x compression ratios by exploiting the observation that large trained networks contain significant redundancy; many weights contribute negligibly to predictions. Structured pruning removes entire filters, channels, or layers, naturally reducing memory and compute requirements on hardware lacking specialized sparse matrix support. Unstructured pruning removes individual weights, achieving higher sparsity (90%+ of weights eliminated) but requiring specialized hardware or software support for sparse tensor operations. Channel pruning identifies and removes underutilized convolutional channels, reducing both parameter count and computation. Magnitude pruning removes weights below learned thresholds; lottery ticket hypothesis pruning identifies critical subnetworks that achieve comparable accuracy with far fewer parameters. Fine-tuning after pruning recovers accuracy degradation, typically losing only 1-3% accuracy while reducing model size by 10x. Iterative pruning gradually increases sparsity while monitoring accuracy, balancing compression against performance. Pruned models occupy 10-100KB instead of multi-megabyte original sizes, fitting mobile devices and embedded systems with limited storage and memory. MobileNetV3 and EfficientNet architectures employ depthwise separable convolutions and pruning for resource-efficient inference. Deployment on edge accelerators requires structured pruning supporting fixed-format sparse tensors. Model pruning represents the practical sweet spot between uncompressed accuracy and severely quantized approximations, enabling accurate on-device intelligence without specialized accelerators.

### Relationships
- is-subclass-of:: [[AIApplications]]
