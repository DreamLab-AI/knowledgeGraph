public:: true

# rlhf
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:122e80280ffc3a656a4c99cf42bb4e9313ac28970ae8874db00ec3a88268f3de",
  "@type": "Page",
  "vc:slug": "rlhf",
  "title": "rlhf",
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
  "@id": "urn:ngm:class:rlhf",
  "@type": "Class",
  "label": "RLHF",
  "definition": "Reinforcement Learning from Human Feedback (RLHF) is a training methodology that aligns large language models with human preferences by first training a reward model on human comparison judgements, then optimising the language model policy against that reward model using reinforcement learning — typically Proximal Policy Optimisation. RLHF enables models to be steered towards outputs that human annotators prefer for helpfulness, harmlessness, and honesty, going beyond what is achievable with supervised fine-tuning on static demonstration data alone. Variants including Direct Preference Optimisation (DPO) and Constitutional AI extend or simplify the original three-stage pipeline.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:reward-model", "label": "Reward Model"},
      {"@id": "urn:ngm:class:human-feedback", "label": "Human Feedback"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-alignment", "label": "AI Alignment"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:direct-preference-optimisation", "label": "Direct Preference Optimisation"},
      {"@id": "urn:ngm:class:constitutional-ai-training-methodology", "label": "Constitutional AI"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Reinforcement Learning from Human Feedback (RLHF) is a training methodology that aligns large language models with human preferences by first training a reward model on human comparison judgements, then optimising the language model policy against that reward model using reinforcement learning — typically Proximal Policy Optimisation. RLHF enables models to be steered towards outputs that human annotators prefer for helpfulness, harmlessness, and honesty, going beyond what is achievable with supervised fine-tuning on static demonstration data alone. Variants including Direct Preference Optimisation (DPO) and Constitutional AI extend or simplify the original three-stage pipeline.

- ### Semantic Classification
  - owl-class:: rlhf:RLHF
  - owl-role:: Concept

- ### Relationships
  - requires [[Reward Model]]
  - requires [[Human Feedback]]
  - requires [[Reinforcement Learning]]
  - enables [[AI Alignment]]
  - relatedTo [[Direct Preference Optimisation]]
  - relatedTo [[Constitutional AI Training Methodology]]

- ### Content
  RLHF addresses a fundamental limitation of supervised fine-tuning: language models trained on human-written demonstrations inherit the statistical patterns of the training corpus but lack an explicit signal for preferred behaviour in novel or ambiguous situations. The RLHF pipeline consists of three stages: supervised fine-tuning on demonstration data; reward model training on human preference pairs (which of two model outputs is preferred); and RL optimisation of the language model to maximise reward model scores while constraining deviation from the supervised baseline via a KL-divergence penalty.

  Proximal Policy Optimisation (PPO) is the standard RL algorithm used in this stage, balancing sample efficiency with policy stability. The reward model is itself a language model with a linear head that outputs a scalar preference score. A critical challenge is reward hacking — the policy discovering inputs that maximise the reward model score without corresponding to genuinely preferred outputs, exploiting the reward model's distributional limitations.

  Direct Preference Optimisation (DPO) bypasses the explicit reward model by deriving an optimal policy directly from preference pairs using a reparameterisation, substantially simplifying training and showing competitive results on alignment benchmarks. Constitutional AI, developed by Anthropic, introduces a self-critique loop where the model revises its outputs against a set of principles before human feedback is collected, reducing reliance on costly human annotation for safety-relevant refusals.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
