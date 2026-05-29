public:: true

# flow matching
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ec6c298d55c911a0be64fe22dce5ddcf885b1cdca2584cd9730b08d62bb40dd7",
  "@type": "Page",
  "vc:slug": "flow-matching",
  "title": "flow matching",
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
  "@id": "urn:ngm:class:flow-matching",
  "@type": "Class",
  "label": "Flow Matching",
  "definition": "Flow Matching is a generative modelling framework that trains a neural network to parameterise the vector field of a continuous normalising flow by directly regressing on analytically tractable target vector fields defined along flow paths between a source distribution (typically Gaussian noise) and a data distribution. Unlike score-based diffusion models, which require simulating a stochastic differential equation during training, flow matching uses deterministic conditional flow paths that can be computed in closed form, yielding stable and efficient training. At inference, the learned vector field is integrated with an ODE solver to transport samples from noise to data.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:diffusion-model", "label": "Diffusion Model"},
      {"@id": "urn:ngm:class:generative-model", "label": "Generative Model"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:generative-adversarial-network", "label": "Generative Adversarial Network"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Flow Matching is a generative modelling framework that trains a neural network to parameterise the vector field of a continuous normalising flow by directly regressing on analytically tractable target vector fields defined along flow paths between a source distribution (typically Gaussian noise) and a data distribution. Unlike score-based diffusion models, which require simulating a stochastic differential equation during training, flow matching uses deterministic conditional flow paths that can be computed in closed form, yielding stable and efficient training. At inference, the learned vector field is integrated with an ODE solver to transport samples from noise to data.

- ### Semantic Classification
  - owl-class:: flow-matching:Flow Matching
  - owl-role:: Concept

- ### Relationships
  - relatedTo [[Diffusion Model]]
  - relatedTo [[Generative Model]]
  - uses [[Neural Network]]
  - uses [[Deep Learning]]
  - contrastsWith [[Generative Adversarial Network]]

- ### Content
  - Flow Matching is a framework for training generative models based on continuous normalising flows (CNFs), which transform samples from a simple source distribution into complex data distributions via a continuous-time ODE. Classical CNF training is computationally expensive because it requires solving the ODE during training and computing a log-determinant Jacobian term. Flow matching sidesteps these challenges by training a vector field network to match target vector fields that can be computed without ODE simulation.
  - The key insight is Conditional Flow Matching (CFM): rather than learning the marginal flow directly, the network is trained to match the conditional flow between individual noise samples and data samples, which has a simple closed-form expression (e.g., a linear interpolation path). Because these conditional targets are computed per-sample without ODE integration, training is efficient and stable. At inference, the trained vector field is integrated from a noise sample to produce a data sample, typically using a few steps of an ODE solver such as Euler or Runge-Kutta.
  - Flow Matching generalises and subsumes score-based diffusion models from a mathematical standpoint, enabling more flexible interpolation paths (not just Gaussian diffusion schedules) and in practice allowing generation with fewer function evaluations. It has been applied to image synthesis, audio generation, video, molecular conformation generation, and protein structure prediction. The Stable Diffusion 3 architecture and Meta's Voicebox are among notable systems built on flow matching principles. Compared to Generative Adversarial Networks, flow matching offers stable training without adversarial dynamics, and compared to VAEs, it avoids posterior collapse.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
