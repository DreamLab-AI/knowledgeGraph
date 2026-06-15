public:: true

# Feature Map

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:feature-map",
  "@type": "Page",
  "title": "Feature Map",
  "vc:slug": "feature-map",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:feature-map",
  "@type": "Class",
  "label": "Feature Map",
  "definition": "A feature map (or activation map) is the output produced when a convolutional filter is applied across an input in a convolutional neural network, encoding the spatial response of a learned feature. Each channel of a feature map highlights where a particular pattern, such as an edge or texture, occurs in the input. Stacks of feature maps form the intermediate representations that deeper layers compose into higher-level concepts.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:convolutional-neural-network",
      "label": "Convolutional Neural Network"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:filter-kernel",
        "label": "Filter Kernel"
      },
      {
        "@id": "urn:ngm:class:receptive-field",
        "label": "Receptive Field"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:convolution",
        "label": "Convolution"
      },
      {
        "@id": "urn:ngm:class:activation-function",
        "label": "Activation Function"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:feature-extraction",
        "label": "Feature Extraction"
      },
      {
        "@id": "urn:ngm:class:feature-detection",
        "label": "Feature Detection"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:image-recognition",
        "label": "Image Recognition"
      },
      {
        "@id": "urn:ngm:class:object-detection",
        "label": "Object Detection"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:pooling-layer",
        "label": "Pooling Layer"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tensor",
        "label": "Tensor"
      },
      {
        "@id": "urn:ngm:class:spatial-hierarchy",
        "label": "Spatial Hierarchy"
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
  - A [[Feature Map]] is the spatial activation produced by [[Convolution]] of a [[Filter Kernel]] over an input in a [[Convolutional Neural Network]], the substrate of learned [[Feature Extraction]].
- ### Overview
  - Convolving a learned kernel with an input yields a feature map whose values measure how strongly the kernel's pattern matches each location.
  - Multiple kernels in a layer produce a stack of feature maps (channels), each tuned to a different pattern.
  - Early layers form low-level maps (edges, colours); deeper layers form abstract, semantically meaningful maps.
  - The receptive field of a feature-map cell is the region of input that influences it, growing with depth.
- ### Key aspects
  - Channels: one feature map per convolutional filter in a layer.
  - Receptive field determining how much input context a cell summarises.
  - Non-linear activation (e.g. ReLU) applied element-wise to the map.
  - Spatial dimensionality reduced by pooling and strided convolution.
  - Visualisation of feature maps for interpretability and debugging.
- ### Applications
  - Image classification and recognition backbones.
  - Object detection where feature pyramids aggregate maps at multiple scales.
  - Semantic segmentation using high-resolution feature maps.
  - Transfer learning, reusing pretrained feature maps for new tasks.
- ### Relationships
  - hasPart:: [[Filter Kernel]]
  - hasPart:: [[Receptive Field]]
  - partOf:: [[Convolutional Neural Network]]
  - uses:: [[Convolution]]
  - uses:: [[Activation Function]]
  - enables:: [[Feature Extraction]]
  - enables:: [[Feature Detection]]
  - supports:: [[Image Recognition]]
  - supports:: [[Object Detection]]
  - dependsOn:: [[Backpropagation]]
  - contrastsWith:: [[Pooling Layer]]
  - relatedTo:: [[Tensor]]
  - relatedTo:: [[Spatial Hierarchy]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
