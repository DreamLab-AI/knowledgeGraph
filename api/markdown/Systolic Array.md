public:: true

# Systolic Array

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:systolic-array",
  "@type": "Page",
  "title": "Systolic Array",
  "vc:slug": "systolic-array",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:systolic-array",
  "@type": "Class",
  "label": "Systolic Array",
  "definition": "A Systolic Array is a specialised parallel computing architecture composed of a homogeneous network of processing elements (PEs) that rhythmically compute and pass data through the array in a pipelined fashion, analogous to the rhythmic pumping of the heart. Each PE performs a fixed local computation and passes results to neighbours without centralised control or global memory access. This architecture is highly efficient for matrix multiplication and convolution operations, making it the dominant microarchitecture in modern AI accelerators such as Google's Tensor Processing Units.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "Infrastructure"
    },
    {
      "@id": "urn:ngm:class:ai-hardware",
      "label": "AI Hardware"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:processing-element",
        "label": "Processing Element"
      },
      {
        "@id": "urn:ngm:class:matrix-multiply-accumulate",
        "label": "Matrix Multiply-Accumulate"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:matrix-multiplication",
        "label": "Matrix Multiplication"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:neural-network-inference",
        "label": "Neural Network Inference"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-flow-architecture",
        "label": "Data Flow Architecture"
      },
      {
        "@id": "urn:ngm:class:hardware-accelerator",
        "label": "Hardware Accelerator"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:silicon-chip",
        "label": "Silicon Chip"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:field-programmable-gate-array",
        "label": "Field Programmable Gate Array"
      },
      {
        "@id": "urn:ngm:class:tensor-processing-unit",
        "label": "Tensor Processing Unit"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:von-neumann-architecture",
        "label": "Von Neumann Architecture"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Systolic Array]] is a parallel [[Hardware Accelerator]] architecture where a grid of processing elements rhythmically passes data and partial results through the array without central coordination.
  - It excels at matrix multiplication and convolution — the core operations of [[Deep Learning]] — delivering high throughput with minimal memory bandwidth.
  - Google's [[Tensor Processing Unit]] employs a systolic array at its computational core, enabling efficient [[Neural Network Inference]] at datacenter scale.

- ### Overview
  - Coined by H.T. Kung and Charles Leiserson in 1978, the systolic array concept drew inspiration from the heart's rhythmic pumping of blood.
  - The architecture eliminates von Neumann bottlenecks by keeping data moving between neighbouring PEs rather than fetching from shared memory.
  - Each processing element performs a multiply-accumulate (MAC) operation, perfectly suited to dot product computation in neural network layers.

- ### Key Aspects
  - **Regularity**: All PEs are identical, simplifying design and manufacturing.
  - **Pipelining**: Data flows through the array while being transformed at each step.
  - **Locality**: Nearest-neighbour communication only; no long-range memory bus contention.
  - **Throughput**: Scales linearly with number of PEs for suitable workloads.

- ### Mechanisms
  - Input matrices are fed into the edges of the array; partial sums accumulate as data flows through.
  - Weights may be stationary (weight-stationary dataflow) or cycled through while inputs are held, depending on the variant.
  - Pipeline depth determines latency; array width and height determine throughput.

- ### Applications
  - [[Tensor Processing Unit]] (TPU) matrix multiply units in Google Cloud.
  - Custom AI ASICs for mobile inference.
  - Signal processing in radar and sonar systems.
  - FPGA implementations for low-latency model serving.

- ### Relationships
  - hasPart:: [[Processing Element]]
  - enables:: [[Matrix Multiplication]]
  - enables:: [[Deep Learning]]
  - enables:: [[Neural Network Inference]]
  - uses:: [[Data Flow Architecture]]
  - uses:: [[Hardware Accelerator]]
  - dependsOn:: [[Silicon Chip]]
  - relatedTo:: [[GPU]]
  - relatedTo:: [[Field Programmable Gate Array]]
  - relatedTo:: [[Tensor Processing Unit]]
  - contrastsWith:: [[Von Neumann Architecture]]
  - supports:: [[Machine Learning]]
  - bridgesTo:: [[Artificial Intelligence]]

- ### Provenance
  - updated:: 2026-06-15
