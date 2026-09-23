
Model inference is the operational phase of a machine learning system in which a trained model is applied to new, previously unseen inputs to produce predictions, classifications, or generated outputs. Unlike training, inference involves only a forward pass through the model and is optimised for low latency, high throughput, and efficient resource use. It is the stage at which a model delivers value in production, serving requests in real time, in batches, or at the edge.

- ### Overview
  - Once a model has been trained and validated, inference is the act of running it against production data.
  - Inputs are pre-processed into the model's expected tensor format, passed through the network, and the raw outputs are post-processed into usable predictions.
  - Inference can run synchronously (online, request-response), asynchronously, or in batches over large datasets.
  - Deployment targets range from cloud GPUs and CPU clusters to mobile and embedded edge devices.
- ### Mechanisms
  - Forward propagation through the trained weights without gradient computation.
  - Computational graph execution managed by an [[Inference Engine]] (for example ONNX Runtime, TensorRT, or TorchScript).
  - Optimisations such as quantisation, operator fusion, kernel selection, and graph pruning via [[Model Optimization]].
  - Hardware acceleration using [[GPU Acceleration]] and specialised accelerators.
  - Batching and caching to maximise throughput and amortise overhead.
- ### Key aspects
  - Latency: the time taken to return a single prediction, critical for interactive applications.
  - Throughput: the number of predictions served per unit time, critical for large-scale workloads.
  - Cost efficiency: balancing accuracy against compute and memory footprint.
  - Reproducibility: identical inputs must yield identical outputs across deployments.
- ### Applications
  - Real-time recommendation, fraud detection, and search ranking.
  - Computer vision inference at the edge for robotics and AR.
  - Large language model generation and conversational agents.
  - Batch scoring of records in analytics pipelines via [[Predictive Analytics]].
- ### Provenance

