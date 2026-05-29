public:: true

# scaling laws
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:52b7fa328c8474bd2b3ff81865a009c339287470aaffc604bfba7fa5b10110c1",
  "@type": "Page",
  "vc:slug": "scaling-laws",
  "title": "scaling laws",
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
  "@id": "urn:ngm:class:scaling-laws",
  "@type": "Class",
  "label": "Scaling Laws",
  "definition": "Scaling Laws are empirical power-law relationships that describe how the held-out cross-entropy loss of large neural language models varies predictably as a function of three primary axes: the number of model parameters, the volume of training tokens, and the total compute budget measured in floating-point operations. Foundational work established that optimal allocation of a fixed compute budget requires roughly equal scaling of model size and training data, a result later refined by Chinchilla-style analyses. These laws guide architectural decisions, determine when to train versus when to scale, and enable cost projections for future model generations, making them central to modern AI infrastructure planning.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-research-area",
      "label": "AI Research Area"
    }
  ],
  "relations": {
    "dependsOn": [
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:pre-training", "label": "Pre Training"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:parameter-count", "label": "Parameter Count"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Scaling Laws are empirical power-law relationships that describe how the held-out cross-entropy loss of large neural language models varies predictably as a function of three primary axes: the number of model parameters, the volume of training tokens, and the total compute budget measured in floating-point operations. Foundational work established that optimal allocation of a fixed compute budget requires roughly equal scaling of model size and training data, a result later refined by Chinchilla-style analyses. These laws guide architectural decisions, determine when to train versus when to scale, and enable cost projections for future model generations, making them central to modern AI infrastructure planning.

- ### Semantic Classification
  - owl-class:: scaling-laws:Scaling Laws
  - owl-role:: Concept

- ### Relationships
  - dependsOn [[Model Training]]
  - dependsOn [[Training Data]]
  - enables [[Pre Training]]
  - enables [[Large Language Models]]
  - relatedTo [[Parameter Count]]

- ### Content
  - Scaling laws express cross-entropy loss L as a power function of model parameters N, training tokens D, and compute C = 6ND (assuming standard transformer training). Key findings from foundational research established that loss decreases smoothly and predictably along each axis, with diminishing returns when one axis is held constant while others scale. Chinchilla-style compute-optimal analyses showed that earlier large models were substantially undertrained relative to their parameter count—optimal training allocates compute roughly equally between model size and data.
  - Scaling laws guide decisions about when to invest in additional pretraining compute versus fine-tuning or architectural innovation. They also predict the emergence of qualitative capabilities—sometimes called emergent abilities—that appear discontinuously at sufficient scale, though the precise mechanisms and predictability of emergence remain active research questions.
  - Beyond language modelling, scaling law analogues have been established for vision transformers, code generation models, multimodal architectures, and reinforcement learning from human feedback. The applicability of a single power-law across many orders of magnitude of compute makes scaling laws one of the most practically useful empirical tools available to AI infrastructure planners and researchers designing training runs for large foundation models.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
