public:: true

# End-to-End Learning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2faa8a27b0f03be0ecb08bb30ade719ab71bc99ab30a733ff0d2ad2adb68e3d1",
  "@type": "Page",
  "vc:slug": "end-to-end-learning",
  "title": "End-to-End Learning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:deep-learning", "vc:label": "Deep Learning"},
    {"@id": "urn:visionflow:linked:feature-engineering", "vc:label": "Feature Engineering"},
    {"@id": "urn:visionflow:linked:representation-learning", "vc:label": "Representation Learning"},
    {"@id": "urn:visionflow:linked:perception-system", "vc:label": "Perception System"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:end-to-end-learning",
  "@type": "Class",
  "label": "End-to-End Learning",
  "definition": "A training paradigm in which a single differentiable model is optimised to map raw inputs directly to final task outputs — pixels to steering angles, waveforms to transcripts, text to text — with all intermediate representations learned jointly by gradient descent rather than specified as hand-engineered features or separately built pipeline stages; it trades the modularity, interpretability, and testability of engineered pipelines for the ability to discover representations that human designers would not, and dominates wherever data and compute are abundant.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:deep-learning",
    "label": "Deep Learning"
  },
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:backpropagation", "label": "Backpropagation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:feature-engineering", "label": "Feature Engineering"},
      {"@id": "urn:ngm:class:perception-system", "label": "Perception System"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:representation-learning", "label": "Representation Learning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:monolithic-ai", "label": "Monolithic AI"}
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A training paradigm in which a single differentiable model is optimised to map raw inputs directly to final task outputs — pixels to steering angles, waveforms to transcripts, text to text — with all intermediate representations learned jointly by gradient descent rather than specified as hand-engineered features or separately built pipeline stages; it trades the modularity, interpretability, and testability of engineered pipelines for the ability to discover representations that human designers would not, and dominates wherever data and compute are abundant."

- ### Semantic Classification
  - owl-class:: machine-learning:EndToEndLearning
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Deep Learning]]
  - contrasts-with:: [[Feature Engineering]], [[Perception System]]
  - uses:: [[Neural Network]], [[Backpropagation]]

- ### Content

  ## Definition

  **End-to-end learning** trains one differentiable system to perform an entire task, from raw sensory input to final output, optimising every internal representation against the task loss. The alternative it displaced is the staged pipeline: hand-crafted [[Feature Engineering]] followed by a shallow classifier, or, in robotics, a chain of separately engineered modules — perception, localisation, planning, control — each with its own specification, interface, and test suite.

  The paradigm's case is empirical: given enough data, jointly learned intermediate representations consistently beat hand-designed ones, because the optimiser co-adapts every stage to the final objective and exploits regularities designers never articulated. Speech recognition abandoned phoneme pipelines for sequence-to-sequence models; machine translation abandoned alignment-and-phrase-table systems; computer vision abandoned SIFT and HOG for learned convolutional features. NVIDIA's PilotNet (2016) made the paradigm vivid in driving — a network mapping camera pixels directly to steering commands — and modern large language models are the paradigm at its extreme, a single network subsuming what were once dozens of NLP components.

  The costs are equally real, and they explain why safety-critical autonomy still often prefers a modular [[Perception System]] feeding explicit planning. End-to-end systems are hard to verify compositionally: there is no intermediate interface at which to write a specification, failures are diagnosed by data archaeology rather than unit tests, credit assignment for errors is opaque, and the system may exploit spurious shortcuts in the training distribution. The current frontier blends the two views — differentiable modular architectures, auxiliary intermediate losses, and interpretable bottlenecks — seeking end-to-end optimisation without monolithic opacity.

  ## Current Landscape

  - **Autonomous driving**: the field's live controversy. Tesla's FSD v12 onwards and research systems such as UniAD (CVPR 2023 best paper) pursue end-to-end driving stacks, while Waymo and most certification frameworks retain modular decomposition for verifiability; intermediate designs train modules jointly but keep inspectable interfaces.
  - **Foundation models**: large language and multimodal models are end-to-end learning at maximal scale, with [[Representation Learning]] emerging implicitly from a single objective; instruction tuning and RLHF extend the differentiable path through behavioural alignment.
  - **Robotics**: end-to-end visuomotor policies (RT-2, diffusion policies, ALOHA-style imitation) map camera input to actuation, challenging the classical sense–plan–act decomposition catalogued in robotics core concepts.
  - **Engineering practice**: data curation has replaced feature design as the main human lever — the effort formerly spent on features now goes into datasets, augmentation, and evaluation harnesses, alongside auxiliary losses and probing to recover some of the lost inspectability.
