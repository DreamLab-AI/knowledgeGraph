public:: true

# Local Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e0b17b43a5207b740fd790d68f77a3942d4cbeb3036971d13f4afcc91cd3216f",
  "@type": "Page",
  "vc:slug": "local-model",
  "title": "Local Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    { "@id": "urn:visionflow:linked:language-model", "vc:label": "LanguageModel" },
    { "@id": "urn:visionflow:linked:on-device-inference", "vc:label": "OnDeviceInference" },
    { "@id": "urn:visionflow:linked:self-hosted-ai-server-infrastructure", "vc:label": "SelfHostedAIServerInfrastructure" },
    { "@id": "urn:visionflow:linked:cloud-computing", "vc:label": "CloudComputing" }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": { "@id": "did:nostr:ontology-mesh" },
  "prov:generatedAtTime": { "@value": "2026-08-07T00:00:00Z", "@type": "xsd:dateTime" }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:local-model",
  "@type": "Class",
  "label": "Local Model",
  "definition": "A machine-learning model, typically a language model, whose weights are downloaded and run on hardware controlled by the operator — a personal device, a workstation, or a private server — so that inference happens without sending data to a third-party API. Local models trade the ceiling capability and elastic scale of hosted frontier systems for data locality, predictable per-token cost, offline availability, and full control over versioning and privacy, and they are commonly used as the cheap or confidential tier in a model-routing strategy.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": { "@id": "urn:ngm:class:language-model", "label": "Language Model" },
  "relations": {
    "uses": [
      { "@id": "urn:ngm:class:on-device-inference", "label": "On-Device Inference" },
      { "@id": "urn:ngm:class:model-quantization", "label": "Model Quantization" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:self-hosted-ai-server-infrastructure", "label": "Self-Hosted AI Server Infrastructure" }
    ],
    "contrastsWith": [
      { "@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing" }
    ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "GapFill"
  }
}
```

- ### Definition
  - "A machine-learning model, typically a language model, whose weights are downloaded and run on hardware controlled by the operator — a personal device, a workstation, or a private server — so that inference happens without sending data to a third-party API. Local models trade the ceiling capability and elastic scale of hosted frontier systems for data locality, predictable per-token cost, offline availability, and full control over versioning and privacy, and they are commonly used as the cheap or confidential tier in a model-routing strategy."

- ### In Plain Terms
  - A local model is an AI you run on your own machine or server instead of calling someone else's cloud, so your data stays put and you are not paying per request.

- ### Semantic Classification
  - owl-class:: machine-learning:LocalModel
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[LanguageModel]]
  - uses:: [[OnDeviceInference]]
  - uses:: [[ModelQuantization]]
  - enables:: [[SelfHostedAIServerInfrastructure]]
  - contrasts-with:: [[CloudComputing]]

- ### Content

  ## Definition

  A **local model** is a model executed on infrastructure the user owns or administers, as opposed to one accessed as a remote managed service. The defining property is where inference happens and where data goes: with a local model the prompt, the context, and the generated tokens never leave the operator's boundary. This is achieved by obtaining the model weights — typically an open-weight release — and running them through a local runtime that performs [[OnDeviceInference]] on the available CPU, GPU, or neural accelerator. The spectrum runs from small models on a laptop to large open-weight systems on a private GPU server.

  The appeal of a local model is a bundle of properties that hosted APIs cannot fully offer. Data locality keeps sensitive or regulated information in-house, which is often a hard requirement rather than a preference. Cost becomes a fixed function of owned hardware rather than a per-token bill, which changes the economics of high-volume or long-running workloads. Availability no longer depends on a network link or a provider's uptime, enabling offline and air-gapped deployment. And because the operator pins the exact weights, behaviour is stable and reproducible across time.

  ## Trade-offs and Enabling Techniques

  These benefits come at the cost of capability and operational burden, which is why a local model **contrasts with** the elastic, managed model of [[CloudComputing]]. Open-weight models that fit on commodity hardware generally sit below the frontier on the hardest reasoning tasks, and the operator inherits responsibility for provisioning accelerators, managing memory, patching, and scaling. Fitting a capable model onto constrained hardware relies on [[ModelQuantization]], which reduces weight precision to shrink memory footprint and raise throughput with a modest, tunable loss of quality, alongside techniques such as key-value caching and speculative decoding.

  ## Role in Agent Orchestration

  In an agent system a local model is most valuable as one tier in a routing strategy. Cheap, high-volume, or privacy-sensitive steps — classification, extraction, drafting, guardrail checks — are directed to the local model, while a hosted frontier model is reserved for the hardest reasoning. This tiering, together with the ability to stand up [[SelfHostedAIServerInfrastructure]], lets an orchestrator control both its cost envelope and its data-exposure surface, and provides a naturally independent fallback path when an external provider is unavailable.
