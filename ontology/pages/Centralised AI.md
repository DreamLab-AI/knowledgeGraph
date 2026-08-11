public:: true

# Centralised AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b5fe37724363c206945c627bbdd7e0ca8557389f011f5e2cdb7451e2941a7cfb",
  "@type": "Page",
  "vc:slug": "centralised-ai",
  "title": "Centralised AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-ai",
      "vc:label": "Decentralised AI"
    },
    {
      "@id": "urn:visionflow:linked:edge-inference",
      "vc:label": "Edge Inference"
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
  "@id": "urn:ngm:class:centralised-ai",
  "@type": "Class",
  "label": "Centralised AI",
  "definition": "An organisational and architectural model of artificial intelligence in which training data, compute, model weights, and inference services are concentrated under a single operator in large data centres, with users accessing capability remotely through APIs; the contrast class to decentralised AI, edge inference, and multi-agent approaches that distribute computation, control, or decision-making across many independent nodes.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:artificial-intelligence",
    "label": "Artificial Intelligence"
  },
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:decentralised-ai",
        "label": "Decentralised AI"
      },
      {
        "@id": "urn:ngm:class:edge-inference",
        "label": "Edge Inference"
      },
      {
        "@id": "urn:ngm:class:multi-agent-system",
        "label": "Multi-Agent System"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:compute-governance",
        "label": "Compute Governance"
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
  - "An organisational and architectural model of artificial intelligence in which training data, compute, model weights, and inference services are concentrated under a single operator in large data centres, with users accessing capability remotely through APIs; the contrast class to decentralised AI, edge inference, and multi-agent approaches that distribute computation, control, or decision-making across many independent nodes."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:CentralisedAI
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - contrasts-with:: [[Decentralised AI]]
  - contrasts-with:: [[Edge Inference]]
  - depends-on:: [[Cloud Computing]]

- ### Content

  ## Definition

  **Centralised AI** names the dominant deployment pattern of the frontier era: a small number of laboratories train very large models on proprietary data using massive, co-located GPU clusters, keep the weights private, and serve inference from their own or hyperscale cloud infrastructure. The economics of scaling laws drive this concentration — pre-training runs costing hundreds of millions of pounds are only feasible for organisations that can aggregate compute, energy, data, and specialised talent in one place — and the resulting capability is delivered to everyone else as a metered API.

  The model has genuine strengths. Centralised operators can enforce uniform safety mitigations, patch vulnerabilities in one place, monitor misuse across their whole user base, and offer a level of model quality that distributed alternatives have not matched. It is also the configuration that compute governance regimes implicitly assume: chokepoints in the supply of advanced chips and data-centre capacity are only effective levers because training is concentrated.

  Its weaknesses mirror those of any centralised system: single points of failure and control, opaque decision-making about model behaviour, data gravity that pulls user information into a few silos, latency and connectivity dependence, and geopolitical concentration of a strategically important capability. These are precisely the pressures that motivate the contrast classes — [[Edge Inference]] moves computation onto local devices for latency, privacy, and resilience; [[Decentralised AI]] approaches such as federated and distributed low-communication training spread the training itself across independent participants; and [[Multi-Agent System]] architectures distribute decision-making authority rather than concentrating it in one monolithic model.

  ## Current Landscape

  The tension between centralised and distributed AI is now a live architectural and policy question rather than a settled outcome. On-device model deployments from major platform vendors, increasingly capable open-weight models, and training methods tolerant of slow interconnects (exemplified by DiLoCo-style distributed optimisation) are eroding the assumption that capability must live in a single data centre. At the same time, frontier capability continues to concentrate: the largest training runs, the deepest safety teams, and the majority of paid inference all sit with a handful of centralised providers.

  - **Distributed training has crossed from theory to practice**: Prime Intellect's INTELLECT-1 (late 2024) trained a 10-billion-parameter model across five countries and three continents on up to 112 H100 GPUs, using DiLoCo plus an int8 all-reduce to cut communication bandwidth roughly 400-fold versus standard data-parallel training.
  - **Decentralised RL and larger runs (2025)**: INTELLECT-2 (32B) was trained by globally decentralised, permissionless reinforcement learning on heterogeneous contributed compute, and Nous Research's Consilience began pretraining a 40B model on ~20 trillion tokens over its Psyche network — evidence the ceiling on distributed scale keeps rising.
  - **Method lineage**: These build on DeepMind's DiLoCo and Prime Intellect's OpenDiLoCo (2024), whose inner/outer optimisation synchronises pseudo-gradients only every few hundred steps, making training viable over slow or intermittent interconnects.
  - **Centralisation still dominant**: Despite this, the largest frontier runs, deepest safety teams, and most paid inference remain with a handful of centralised providers, and most production systems are hybrids — routing between a large centralised model and small local ones, or coordinating edge agents against a central orchestrator.

  **Sources**:
  - https://arxiv.org/html/2412.01152v1
  - https://www.primeintellect.ai/blog/intellect-2
  - https://www.galaxy.com/insights/research/decentralized-ai-training

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
