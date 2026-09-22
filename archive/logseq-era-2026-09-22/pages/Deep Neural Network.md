public:: true

# Deep Neural Network

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:deep-neural-network", "@type":"Page", "title":"Deep Neural Network", "vc:slug":"deep-neural-network", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:deep-neural-network",
  "@type":"Class",
  "label":"Deep Neural Network",
  "definition":"A deep neural network is an artificial neural network with multiple hidden layers between its input and output, enabling it to learn hierarchical representations of data. Each layer applies a learnable linear transformation followed by a non-linear activation, and the network is trained by gradient descent with backpropagation to minimise a loss function. Depth lets the model compose simple features into increasingly abstract ones, which underlies modern deep learning across vision, language, and audio.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:neural-network","label":"Neural Network"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"}],
    "hasPart":[{"@id":"urn:ngm:class:activation-function","label":"Activation Function"}],
    "uses":[{"@id":"urn:ngm:class:backpropagation","label":"Backpropagation"},{"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"},{"@id":"urn:ngm:class:activation-function","label":"Activation Function"}],
    "dependsOn":[{"@id":"urn:ngm:class:training-data","label":"Training Data"},{"@id":"urn:ngm:class:supervised-learning","label":"Supervised Learning"}],
    "requires":[{"@id":"urn:ngm:class:training-data","label":"Training Data"}],
    "enables":[{"@id":"urn:ngm:class:representation-learning","label":"Representation Learning"}],
    "implements":[{"@id":"urn:ngm:class:feedforward-neural-network","label":"Feedforward Neural Network"}],
    "bridgesTo":[{"@id":"urn:ngm:class:transformer","label":"Transformer"}],
    "contrastsWith":[{"@id":"urn:ngm:class:feedforward-neural-network","label":"Feedforward Neural Network"}],
    "relatedTo":[{"@id":"urn:ngm:class:convolutional-neural-network","label":"Convolutional Neural Network"},{"@id":"urn:ngm:class:recurrent-neural-network","label":"Recurrent Neural Network"},{"@id":"urn:ngm:class:overfitting","label":"Overfitting"},{"@id":"urn:ngm:class:embedding","label":"Embedding"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A deep neural network is a [[Neural Network]] with many stacked hidden layers that learns hierarchical features through [[Backpropagation]] and [[Gradient Descent]]. It is the workhorse of [[Deep Learning]], enabling [[Representation Learning]] from raw data.
- Depth — rather than width alone — is what distinguishes deep networks, letting them compose abstractions across layers.
- ### Overview
- Each layer transforms its input with a learnable weight matrix and bias, then applies a non-linear [[Activation Function]] so the network can model complex, non-linear relationships.
- Training adjusts weights to reduce a loss measured on [[Training Data]], with errors propagated backwards through the layers.
- Specialised architectures — convolutional, recurrent, and transformer — are deep networks tailored to spatial, sequential, and attention-based data respectively.
- ### Mechanisms
- Forward pass: input flows through successive layers to produce predictions.
- Loss computation: predictions are compared against targets to quantify error.
- Backpropagation: gradients of the loss with respect to each weight are computed via the chain rule.
- Optimisation: gradient descent (and variants) update weights to minimise the loss.
- Regularisation: techniques such as dropout and weight decay counter [[Overfitting]].
- ### Key aspects
- Hierarchical features: early layers capture low-level patterns, later layers capture abstract concepts.
- Non-linearity: activation functions give the network expressive power beyond linear models.
- Parameterisation: millions to billions of weights are learned end to end.
- Generalisation: held-out performance depends on data quantity, quality, and regularisation.
- ### Applications
- Computer vision via [[Convolutional Neural Network]] backbones.
- Sequence modelling via [[Recurrent Neural Network]] and [[Transformer]] architectures.
- Embedding generation and [[Representation Learning]] for downstream tasks.
- Speech, recommendation, and scientific modelling.
- ### Relationships
- partOf:: [[Deep Learning]]
- hasPart:: [[Activation Function]]
- uses:: [[Backpropagation]]
- uses:: [[Gradient Descent]]
- dependsOn:: [[Training Data]]
- dependsOn:: [[Supervised Learning]]
- requires:: [[Training Data]]
- enables:: [[Representation Learning]]
- implements:: [[Feedforward Neural Network]]
- bridgesTo:: [[Transformer]]
- contrastsWith:: [[Feedforward Neural Network]]
- relatedTo:: [[Convolutional Neural Network]]
- relatedTo:: [[Recurrent Neural Network]]
- relatedTo:: [[Overfitting]]
- relatedTo:: [[Embedding]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
