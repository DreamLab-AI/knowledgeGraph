public:: true

# LyCORIS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ly-coris",
  "@type": "Page",
  "vc:slug": "ly-coris",
  "title": "LyCORIS",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ly-coris",
  "@type": "Class",
  "label": "LyCORIS",
  "definition": "LyCORIS (Lora beYond Conventional methods, Other Rank adaptation Implementations for Stable diffusion) is an open-source library implementing a family of parameter-efficient fine-tuning methods for diffusion and other models that extend beyond standard low-rank adaptation. It includes techniques such as LoHa (Hadamard-product decomposition), LoKr (Kronecker-product decomposition), and full or convolutional adaptations, giving practitioners a richer set of expressiveness-versus-size trade-offs. LyCORIS is widely used in the image-generation community to train compact, shareable model adapters.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:parameter-efficient-fine-tuning", "label": "Parameter-Efficient Fine-Tuning"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:low-rank-adaptation", "label": "Low-Rank Adaptation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine-Tuning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - LyCORIS is an open-source library of parameter-efficient fine-tuning methods for diffusion and other models that generalise low-rank adaptation through Hadamard, Kronecker, and other matrix decompositions.

- ### Relationships
  - LyCORIS is a subclass of [[Parameter-Efficient Fine-Tuning]] and uses [[Low-Rank Adaptation]] as the baseline it extends and generalises. It enables practical [[Fine-Tuning]] of large generative models with compact adapters, and relates to the broader [[Deep Learning]] toolkit for adapting pretrained networks.

- ### Content
  - LyCORIS arose from the image-generation community's need to customise large diffusion models cheaply. Standard low-rank adaptation captures a weight update as the product of two low-rank matrices, which is effective but represents only one particular way of constraining an update to be small. LyCORIS treats this as one option among many, packaging a family of alternative low-parameter decompositions that offer different balances of expressiveness, file size, and training behaviour.

  - Its signature methods generalise the matrix factorisation. LoHa decomposes the update using a Hadamard (element-wise) product of low-rank factors, which can represent higher effective rank than a plain low-rank product for the same parameter count. LoKr uses a Kronecker product, yielding very compact adapters well suited to capturing structured patterns. Additional modes adapt convolutional layers and offer fuller, less constrained updates when fidelity matters more than minimal size.

  - This menu of methods matters because adaptation tasks differ. Teaching a model a simple style may need only a tiny adapter, while capturing a complex subject or intricate concept benefits from a more expressive decomposition. By exposing these choices in a single interoperable library compatible with common training and inference tooling, LyCORIS lets practitioners tune the trade-off between adapter quality and the size of the file they must store and share.

  - The practical impact is a thriving ecosystem of small, swappable model adapters. Because a LyCORIS adapter is a fraction of the size of a full model, users can train, distribute, and combine many of them on top of a shared base checkpoint, mixing styles and concepts at inference time. This composability — many lightweight adaptations over one large foundation model — is central to how the open generative-image community customises and remixes models without the cost of full retraining.
