public:: true

# Tensor
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:tensor", "@type":"Page", "title":"Tensor", "vc:slug":"tensor", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tensor",
  "@type": "Class",
  "label": "Tensor",
  "definition": "A tensor is a multidimensional array of numerical values characterised by a rank, a shape and a data type, generalising scalars, vectors and matrices to arbitrary dimensions. In machine learning it is the fundamental data structure that holds inputs, parameters, activations and gradients as they flow through a model. Tensor operations such as contraction, broadcasting and elementwise functions are the computational primitives executed on accelerators during training and inference.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:linear-algebra",
      "label": "Linear Algebra"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:computation-graph",
        "label": "Computation Graph"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:tensor-processing-unit",
        "label": "Tensor Processing Unit"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      },
      {
        "@id": "urn:ngm:class:automatic-differentiation",
        "label": "Automatic Differentiation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:computation-graph",
        "label": "Computation Graph"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:tensor-flow",
        "label": "TensorFlow"
      },
      {
        "@id": "urn:ngm:class:py-torch",
        "label": "PyTorch"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:automatic-differentiation",
        "label": "Automatic Differentiation"
      },
      {
        "@id": "urn:ngm:class:tensor-processing-unit",
        "label": "Tensor Processing Unit"
      }
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
  - A tensor is a multidimensional array generalising scalars, vectors and matrices, rooted in [[Linear Algebra]].
  - It is the carrier of data through a [[Neural Network]], holding inputs, weights, activations and gradients.
  - Tensor operations are executed efficiently on a [[GPU]] or [[Tensor Processing Unit]] and form the core of [[Deep Learning]].

- ### Overview
  - A tensor is described by its rank (number of dimensions), its shape (size along each dimension) and its element data type.
  - Frameworks represent computations as a [[Computation Graph]] of tensor operations, enabling [[Automatic Differentiation]].
  - Operations like matrix multiplication, contraction, reshaping and broadcasting compose into the layers of modern models.

- ### Key aspects
  - Rank, shape and dtype fully characterise a tensor.
  - Broadcasting aligns shapes for elementwise operations without copying data.
  - Contraction generalises matrix multiplication across arbitrary axes.
  - Device placement determines whether operations run on CPU or accelerator.

- ### Applications
  - Storing batches of training examples and model parameters.
  - Driving forward and backward passes via [[Backpropagation]].
  - Implementing models in [[TensorFlow]] and [[PyTorch]].
  - Mapping dense linear algebra onto a [[Tensor Processing Unit]].

- ### Relationships
  - subClassOf:: [[Linear Algebra]]
  - hasPart:: [[Computation Graph]]
  - partOf:: [[Linear Algebra]]
  - partOf:: [[Neural Network]]
  - uses:: [[GPU]]
  - uses:: [[Tensor Processing Unit]]
  - dependsOn:: [[Linear Algebra]]
  - enables:: [[Deep Learning]]
  - enables:: [[Backpropagation]]
  - enables:: [[Automatic Differentiation]]
  - supports:: [[Neural Network]]
  - supports:: [[Computation Graph]]
  - implements:: [[TensorFlow]]
  - implements:: [[PyTorch]]
  - relatedTo:: [[Deep Learning]]
  - relatedTo:: [[Automatic Differentiation]]
  - relatedTo:: [[Tensor Processing Unit]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
