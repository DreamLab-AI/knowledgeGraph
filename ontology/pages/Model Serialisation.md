public:: true

# Model Serialisation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:model-serialisation",
  "@type": "Page",
  "title": "Model Serialisation",
  "vc:slug": "model-serialisation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-serialisation",
  "@type": "Class",
  "label": "Model Serialisation",
  "definition": "Model serialisation is the process of converting a trained machine learning model — including its architecture definition, learned weights, and associated metadata — into a persistent, portable file format that can be stored, transferred, and subsequently loaded to restore the model to an operational state. Serialisation enables reproducibility, deployment across different environments, and sharing of pre-trained models through repositories. Common formats include ONNX for cross-framework portability, SafeTensors for security, PyTorch checkpoint files, and framework-native formats such as TensorFlow SavedModel.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:model-deployment", "label": "Model Deployment"},
      {"@id": "urn:ngm:class:model-registry", "label": "Model Registry"},
      {"@id": "urn:ngm:class:mlops", "label": "Mlops"},
      {"@id": "urn:ngm:class:transfer-learning", "label": "Transfer Learning"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:file-format", "label": "File Format"},
      {"@id": "urn:ngm:class:model-architecture", "label": "Model Architecture"},
      {"@id": "urn:ngm:class:weight-storage", "label": "Weight Storage"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:model-portability", "label": "Model Portability"},
      {"@id": "urn:ngm:class:model-versioning", "label": "Model Versioning"},
      {"@id": "urn:ngm:class:inference-engine", "label": "Inference Engine"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:checkpoint", "label": "Checkpoint"},
      {"@id": "urn:ngm:class:model-metadata", "label": "Model Metadata"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:onnx", "label": "Onnx"},
      {"@id": "urn:ngm:class:safetensors", "label": "Safetensors"},
      {"@id": "urn:ngm:class:pickle-format", "label": "Pickle Format"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:model-serving", "label": "Model Serving"},
      {"@id": "urn:ngm:class:experiment-reproducibility", "label": "Experiment Reproducibility"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:just-in-time-compilation", "label": "Just In Time Compilation"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:onnx", "label": "Onnx"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:storage-system", "label": "Storage System"}
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Model Serialisation]] converts a trained ML model's architecture and weights into a portable [[File Format]] that persists state for later loading, sharing, or [[Model Deployment]].
  - Formats range from framework-specific [[Checkpoint]] files (PyTorch `.pt`, TensorFlow `SavedModel`) to cross-framework interchange via [[Onnx]] and the security-oriented [[Safetensors]] format.
  - Central to [[Mlops]] workflows, enabling [[Model Registry]] versioning, [[Transfer Learning]] from pre-trained checkpoints, and reproducible [[Experiment Reproducibility]].

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

- ### Relationships
  - relatedTo:: [[Model Deployment]]
  - relatedTo:: [[Model Registry]]
  - relatedTo:: [[Mlops]]
  - relatedTo:: [[Transfer Learning]]
  - requires:: [[File Format]]
  - requires:: [[Model Architecture]]
  - requires:: [[Weight Storage]]
  - enables:: [[Model Portability]]
  - enables:: [[Model Versioning]]
  - enables:: [[Inference Engine]]
  - hasPart:: [[Checkpoint]]
  - hasPart:: [[Model Metadata]]
  - uses:: [[Onnx]]
  - uses:: [[Safetensors]]
  - uses:: [[Pickle Format]]
  - supports:: [[Model Serving]]
  - supports:: [[Experiment Reproducibility]]
  - contrastsWith:: [[Just In Time Compilation]]
  - standardizedBy:: [[Onnx]]
  - dependsOn:: [[Storage System]]

- ### Provenance
  - updated:: 2026-06-15
