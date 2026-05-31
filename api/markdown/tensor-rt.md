- ### Definition
  - A software development kit from NVIDIA for optimising and running deep learning inference on NVIDIA GPUs, performing graph optimisations, precision calibration and kernel selection.

- ### Semantic Classification
  - owl-class:: deep-learning:TensorRT
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Inference Engine]]
  - bridges-to:: [[Model Deployment]]
  - requires:: [[Hardware Acceleration]]
  - enables:: [[Edge Inference]]

- ### Content
  - TensorRT takes a trained network and produces an optimised inference engine tuned for a target NVIDIA GPU. Optimisations include layer and tensor fusion, selection of efficient kernels, and reduced-precision execution such as FP16 and INT8 with calibration to limit accuracy loss.
  - It is used to reduce latency and increase throughput for production inference, including server deployments and embedded platforms. Models from common frameworks are imported through formats such as ONNX before being compiled into a TensorRT engine.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z