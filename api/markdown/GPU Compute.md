public:: true

# gpu compute
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c9e380e718a618734f76570f8947ec6e19e80c9a90cf4f0f853744b2221e3a1a",
  "@type": "Page",
  "vc:slug": "gpu-compute",
  "title": "gpu compute",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gpu-compute",
  "@type": "Class",
  "label": "GPU Compute",
  "definition": "GPU Compute refers to the use of Graphics Processing Units for general-purpose massively parallel numerical computation (GPGPU), exploiting the GPU's thousands of shader cores to execute data-parallel workloads — principally matrix multiplications and convolutions — at throughputs far exceeding those achievable on CPUs. GPU compute is the dominant hardware substrate for training and inference of deep neural networks, enabled by programming frameworks such as CUDA and ROCm that expose the GPU's parallel execution model to software developers. It underpins the large-scale computation required for training large language models, diffusion models, and other foundation models.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-infrastructure",
      "label": "AI Infrastructure"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:distributed-training", "label": "Distributed Training"},
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cuda", "label": "CUDA"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:tpu", "label": "TPU"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:machine-learning-discipline-infrastructure", "label": "Machine Learning Infrastructure"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - GPU Compute refers to the use of Graphics Processing Units for general-purpose massively parallel numerical computation (GPGPU), exploiting the GPU's thousands of shader cores to execute data-parallel workloads — principally matrix multiplications and convolutions — at throughputs far exceeding those achievable on CPUs. GPU compute is the dominant hardware substrate for training and inference of deep neural networks, enabled by programming frameworks such as CUDA and ROCm that expose the GPU's parallel execution model to software developers. It underpins the large-scale computation required for training large language models, diffusion models, and other foundation models.

- ### Semantic Classification
  - owl-class:: gpu-compute:GPU Compute
  - owl-role:: Concept

- ### Relationships
  - enables [[Distributed Training]]
  - enables [[Model Training]]
  - uses [[CUDA]]
  - relatedTo [[TPU]]
  - relatedTo [[Deep Learning]]
  - relatedTo [[Machine Learning Infrastructure]]

- ### Content
  - Graphics Processing Units were originally designed for rasterising 3D geometry, but their massively parallel architecture — comprising thousands of small processing cores operating in lock-step on SIMD workloads — proved well-suited to the tensor operations central to deep learning. Nvidia's introduction of CUDA in 2007 enabled programmers to write general-purpose code targeting the GPU, unlocking GPU compute for scientific computing and, subsequently, machine learning.
  - Modern GPU compute for deep learning is dominated by Nvidia data-centre GPUs such as the A100, H100, and H200, which include dedicated Tensor Core units that accelerate mixed-precision matrix multiplications — the dominant operation in transformer training. A single H100 can perform hundreds of teraFLOPs of FP8 matrix operations per second. Large-scale Model Training requires clusters of GPUs interconnected by NVLink (within a node) and InfiniBand or Ethernet (between nodes), enabling Distributed Training strategies such as data parallelism, model parallelism, and pipeline parallelism.
  - GPU compute is also essential for inference: serving large language models at low latency requires batching requests and executing transformer forward passes on GPU. Efficient GPU utilisation during inference is the focus of frameworks such as vLLM and TensorRT-LLM. Alternative hardware accelerators include Google's TPUs, which offer comparable training throughput for specific workloads, and AMD's MI300X which has gained traction as an Nvidia alternative. Energy consumption of GPU compute clusters is a significant concern for Machine Learning Infrastructure operators, intersecting with sustainability and ESG reporting obligations.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
