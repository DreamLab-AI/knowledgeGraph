public:: true

# Grokking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:edb8ea204b96700292b181c57c317c09547a53e136fd4c89da6abdc491f85536",
  "@type": "Page",
  "vc:slug": "grokking",
  "title": "Grokking",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:generalisation",
      "vc:label": "Generalisation"
    },
    {
      "@id": "urn:visionflow:linked:overfitting",
      "vc:label": "Overfitting"
    },
    {
      "@id": "urn:visionflow:linked:emergent-capabilities",
      "vc:label": "Emergent Capabilities"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:grokking",
  "@type": "Class",
  "label": "Grokking",
  "definition": "A training phenomenon in deep learning, first documented by Power et al. (2022) on algorithmic tasks, in which a network first memorises its training data — reaching perfect training accuracy while test accuracy stays at chance — and then, after continued training far beyond apparent convergence, abruptly transitions to near-perfect generalisation; interpreted as a delayed phase change from a memorising solution to a simpler, structured circuit, typically induced by regularisation such as weight decay.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:generalisation",
    "label": "Generalisation"
  },
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:regularisation",
        "label": "Regularisation"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:overfitting",
        "label": "Overfitting"
      },
      {
        "@id": "urn:ngm:class:benign-overfitting",
        "label": "Benign Overfitting"
      },
      {
        "@id": "urn:ngm:class:emergent-capabilities",
        "label": "Emergent Capabilities"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A training phenomenon in deep learning, first documented by Power et al. (2022) on algorithmic tasks, in which a network first memorises its training data — reaching perfect training accuracy while test accuracy stays at chance — and then, after continued training far beyond apparent convergence, abruptly transitions to near-perfect generalisation; interpreted as a delayed phase change from a memorising solution to a simpler, structured circuit, typically induced by regularisation such as weight decay."

- ### Semantic Classification
  - owl-class:: machine-learning:Grokking
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Generalisation]]
  - depends-on:: [[Regularisation]], [[Deep Learning]]
  - related-to:: [[Overfitting]], [[Benign Overfitting]], [[Emergent Capabilities]]

- ### Content

  ## Definition

  **Grokking** (named after Heinlein's word for deep, intuitive understanding) is the observation that a neural network can transition from memorisation to genuine [[Generalisation]] long after training appears finished. In the canonical experiments of Power et al. (OpenAI, 2022), small transformers trained on modular arithmetic reached 100% training accuracy within a few hundred steps while validation accuracy sat at chance — the classic signature of [[Overfitting]] — and then, thousands to hundreds of thousands of steps later, validation accuracy shot up to near 100%. The network had quietly reorganised its internal solution from a lookup table into the actual algorithm.

  Mechanistic interpretability work made this concrete. Nanda et al. (2023) reverse-engineered grokked modular-addition transformers and found they implement a Fourier-based algorithm — embedding numbers as trigonometric functions and using rotation identities — and showed the transition decomposes into memorisation, circuit formation, and clean-up phases, with the generalising circuit growing gradually beneath a memorising solution that weight decay eventually strips away. This supports the dominant explanation: memorising solutions are found quickly but are heavy in weight norm, while generalising solutions are simpler (lower norm) but harder to find; [[Regularisation]] tilts the long-run optimisation towards the simpler circuit, producing a delayed phase change. Related analyses (Liu et al.'s "omnigrok") show grokking can be induced or eliminated by controlling initial weight norm, and Varma et al. frame it as competition between memorising and generalising circuits under an efficiency pressure.

  Grokking matters beyond its toy origins because it challenges standard early-stopping practice — validation-loss plateaus can conceal an impending generalisation transition — and because it offers a controlled laboratory for the [[Emergent Capabilities]] debate: an apparently sudden capability jump that, on closer inspection, reflects continuous underlying progress in hidden structure.

  ## Current Landscape

  - **Scope**: originally algorithmic datasets (modular arithmetic, permutation groups); since reproduced on sparse-parity tasks, small image benchmarks, and other settings, though it remains most pronounced in small-data, over-parameterised regimes.
  - **Drivers**: weight decay is the most reliable trigger; data-set size, initialisation scale, and representation learning speed modulate the delay between memorisation and generalisation.
  - **Theory links**: connected to double descent, benign overfitting, lottery-ticket-style circuit competition, and singular learning theory's phase-transition view of training dynamics.
  - **Practical reading**: "converged" networks may still be reorganising internally; interpretability probes (weight-norm trajectories, Fourier structure, progress measures such as restricted loss) can reveal transitions invisible in aggregate loss curves.
  - **Weight decay is not the whole story (2024-2025)**: an ICLR 2024 study exhibits grokking with *zero* weight decay and *increasing* weight norm, attributing it instead to a lazy-to-rich (feature-learning) transition; a NeurIPS 2025 analysis casts grokking as a two-timescale gradient-flow process where a slow norm-reduction phase (order 1/λ) drives the late generalisation jump.
  - **Optimisation-level triggers**: ICLR 2025 work ("Grokking at the Edge of Numerical Stability") traces the delay to Softmax Collapse from uncontrolled logit growth and removes it with a modified optimiser (⊥Grad); grokking can also occur without regularisation when the training set is large enough.
  - **Consensus caveat**: weight decay reliably *induces* grokking and controls its delay (Nanda et al. 2023, Varma et al. 2023), but recent results show it is neither strictly necessary nor sufficient — initialisation scale and data fraction ("Goldilocks" regime) matter as much.

  **Sources**:
  - https://papers.neurips.cc/paper_files/paper/2022/file/dfc310e81992d2e4cedc09ac47eff13e-Paper-Conference.pdf
  - https://openreview.net/pdf?id=TvfkSyHZRA
  - https://par.nsf.gov/servlets/purl/10541956

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
