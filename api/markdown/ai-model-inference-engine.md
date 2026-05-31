- ### Definition
  - An AI model inference engine is the software runtime that executes a trained model to produce predictions from new inputs. It manages computation graph execution, hardware acceleration and memory to run models efficiently.

- ### Semantic Classification
  - owl-class:: machine-learning:AIModelInferenceEngine
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Inference Serving]]
  - bridges-to:: [[Latency]], [[Model Deployment]]
  - requires:: [[GPU]], [[Model Optimization]]
  - enables:: [[Inference Serving]], [[Model Serving]]

- ### Content
  - An inference engine takes a trained model and runs the forward pass on input data, scheduling operations onto CPUs, GPUs or specialised accelerators. It applies optimisations such as operator fusion, quantised execution and batching to reduce latency and increase throughput.
  - Inference engines are distinct from training frameworks because they focus only on prediction, often after the model has been converted to an optimised format. They sit beneath model serving systems and determine the runtime cost of deployment.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z