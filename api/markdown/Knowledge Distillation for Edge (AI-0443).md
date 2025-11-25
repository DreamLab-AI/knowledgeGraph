id:: knowledge-distillation-for-edge-ai-0443-ontology

- ### OntologyBlock
  id:: Knowledge Distillation for Edge (AI-0443)
  - ontology:: true
  - public-access:: true
  - term-id:: DT-0443
  - preferred-term:: Knowledge Distillation for Edge (AI-0443)
  - source-domain:: ai
  - status:: in
  - definition:: Knowledge Distillation for Edge transfers learned representations from large, accurate teacher neural networks to compact student models optimized for edge deployment, achieving 20-30x compression while retaining 97%+ of accuracy. Knowledge distillation addresses the mismatch between expensive training (requiring large models and substantial compute) and deployment constraints (limited memory, power, latency). A large teacher model trained on expansive datasets learns rich feature representations; the student model learns to mimic teacher predictions and intermediate representations through soft targets (probability distributions over classes) rather than hard labels. Temperature scaling softens teacher probabilities, revealing knowledge about class confusion and similarity that hard labels omit. Dark knowledge captures patterns learned through large-scale training that transfer to compact students. Typical teacher-student compression ratios reach 20x: a 500MB teacher network compresses to 25MB student while retaining accuracy. Layer-wise knowledge distillation transfers intermediate representations, not just final predictions, improving student generalization. Multi-task distillation combines classification with auxiliary tasks (depth estimation, segmentation) to enrich knowledge transfer. Advantages include retention of teacher accuracy without distillation's accuracy loss versus other compression techniques, enabling real-time inference on wearables and smartphones. Student models learn faster and more robustly than training from scratch on limited edge datasets. Applications span mobile voice assistants, on-device translation, medical diagnosis wearables, and autonomous drone perception. Distillation complements pruning and quantization, forming a comprehensive compression pipeline. Knowledge distillation democratizes edge AI by enabling state-of-the-art model accuracy on resource-limited devices without sacrificing accuracy for extreme compression.

### Relationships
- is-subclass-of:: [[AIApplications]]
