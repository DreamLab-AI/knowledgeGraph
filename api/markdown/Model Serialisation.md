
Model serialisation is the process of converting a trained machine learning model — including its architecture definition, learned weights, and associated metadata — into a persistent, portable file format that can be stored, transferred, and subsequently loaded to restore the model to an operational state. Serialisation enables reproducibility, deployment across different environments, and sharing of pre-trained models through repositories. Common formats include ONNX for cross-framework portability, SafeTensors for security, PyTorch checkpoint files, and framework-native formats such as TensorFlow SavedModel.

- ### Overview
  - As machine learning models grow larger and more expensive to train, serialisation has become a critical infrastructure capability. A trained model represents enormous computational investment; serialisation ensures that investment is not lost when a process terminates and allows the model to be deployed in environments different from where training occurred.
  - Security concerns with Python's pickle format — which can execute arbitrary code on deserialisation — have motivated safer alternatives. SafeTensors stores only tensor data with no executable payload. ONNX defines a computation graph interchange format enabling models trained in PyTorch to be served via TensorRT or ONNX Runtime without framework lock-in. For very large models, sharded serialisation splits weights across multiple files and supports lazy loading to manage memory.

- ### Key aspects
  - **Format trade-offs** — pickle/PT are convenient but unsafe; ONNX is portable but may not capture all operations; SafeTensors is safe and fast but weights-only.
  - **Architecture serialisation** — storing the model architecture alongside weights (e.g., `model.save()` in Keras) versus storing weights separately from a code-defined architecture.
  - **Quantisation compatibility** — quantised models require formats that can represent reduced-precision tensors (INT8, FP8); GGUF serves this niche for LLM inference.
  - **Sharding** — models exceeding single-file size limits (e.g., HuggingFace `pytorch_model.bin.index.json`) use index files to map tensor names to shards.

- ### Applications
  - Saving training checkpoints during long runs to enable resumption after hardware failure.
  - Publishing pre-trained models to HuggingFace Hub or similar repositories for community use.
  - Exporting models from PyTorch to ONNX for deployment on edge devices via ONNX Runtime.
  - Packaging models into Docker containers for reproducible serving environments.

- ### Mechanisms
  - **State dict serialisation** — PyTorch saves `model.state_dict()`, a mapping of parameter names to tensors, which can be reloaded into a matching architecture.
  - **Graph serialisation** — TorchScript and ONNX serialise the computation graph alongside weights, enabling framework-independent execution.
  - **Lazy loading** — memory-mapped tensor files allow selective loading of individual layers, critical for models too large to fit in RAM simultaneously.

- ### Provenance

