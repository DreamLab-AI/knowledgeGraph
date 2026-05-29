- ### Definition
  - Quantisation is a model compression technique that reduces the numerical precision of a neural network's weights and, optionally, activations from the floating-point formats used during training (typically FP32 or BF16) to lower bit-widths such as INT8, INT4, or binary representations. This reduction decreases memory consumption and accelerates matrix operations on hardware with native low-precision arithmetic units, enabling deployment of large models on memory-constrained devices with minimal accuracy degradation. Techniques include post-training quantisation (PTQ) and quantisation-aware training (QAT), which differ in when the precision reduction is applied relative to the training process.

- ### Semantic Classification
  - owl-class:: quantisation:Quantisation
  - owl-role:: Concept

- ### Relationships
  - enables [[Inference]]
  - enables [[Edge AI Accelerator]]
  - relatedTo [[Knowledge Distillation]]
  - relatedTo [[Model Compression for Edge]]
  - relatedTo [[Neural Network Quantisation]]
  - uses [[Hardware Acceleration]]

- ### Content
  Quantisation is one of the most widely deployed techniques for reducing the compute and memory cost of large neural networks at inference time. The fundamental operation maps continuous floating-point values to a discrete grid defined by a scale factor and zero point, introducing bounded quantisation error that manifests as accuracy degradation. Symmetric INT8 quantisation of weights is near-lossless for many transformer architectures; aggressive INT4 or even 2-bit quantisation of large language models requires calibration techniques such as GPTQ or AWQ to redistribute error across weight matrices.

  Post-training quantisation applies precision reduction to a trained model without additional gradient updates, relying on calibration datasets to set per-tensor or per-channel scaling parameters. Quantisation-aware training simulates low-precision arithmetic during the forward pass using fake quantisation operators, allowing the model to adapt its weight distributions to minimise post-deployment error. Mixed-precision schemes — quantising less sensitive layers more aggressively — offer further flexibility.

  On modern AI accelerators (e.g. NVIDIA Hopper's FP8 support, ARM Ethos-U65), native low-precision hardware paths deliver significant throughput improvements. Quantisation interacts closely with knowledge distillation — smaller student models may be distilled and then quantised — and with model pruning, forming a complementary suite of compression techniques for edge and mobile deployment.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z