public:: true

# Pretraining

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:pretraining", "@type":"Page", "title":"Pretraining", "vc:slug":"pretraining", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:pretraining",
  "@type":"Class",
  "label":"Pretraining",
  "definition":"Pretraining is the initial phase of training a model on a large, broad corpus using self-supervised objectives to learn general-purpose representations before any task-specific adaptation. It produces a foundation model whose learned features can be transferred to downstream tasks through fine-tuning or prompting. For language models this typically involves predicting masked or next tokens over vast text collections.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:self-supervised-learning","label":"Self-Supervised Learning"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:training-corpus","label":"Training Corpus"},{"@id":"urn:ngm:class:unsupervised-learning","label":"Unsupervised Learning"}],
    "implements":[{"@id":"urn:ngm:class:self-supervised-learning","label":"Self-Supervised Learning"}],
    "enables":[{"@id":"urn:ngm:class:fine-tuning","label":"Fine-Tuning"},{"@id":"urn:ngm:class:transfer-learning","label":"Transfer Learning"}],
    "produces":[{"@id":"urn:ngm:class:foundation-model","label":"Foundation Model"}],
    "uses":[{"@id":"urn:ngm:class:next-token-prediction","label":"Next Token Prediction"},{"@id":"urn:ngm:class:representation-learning","label":"Representation Learning"}],
    "supports":[{"@id":"urn:ngm:class:large-language-model","label":"Large Language Model"},{"@id":"urn:ngm:class:language-model","label":"Language Model"}],
    "contrastsWith":[{"@id":"urn:ngm:class:fine-tuning","label":"Fine-Tuning"},{"@id":"urn:ngm:class:instruction-tuning","label":"Instruction Tuning"}],
    "dependsOn":[{"@id":"urn:ngm:class:representation-learning","label":"Representation Learning"}],
    "bridgesTo":[{"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"}],
    "relatedTo":[{"@id":"urn:ngm:class:transfer-learning","label":"Transfer Learning"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Pretraining]] is the initial large-scale training phase using [[Self-Supervised Learning]] objectives over a broad [[Training Corpus]].
- It learns general representations that [[Transfer Learning]] and [[Fine-Tuning]] later adapt to specific tasks.
- For a [[Large Language Model]] this typically means [[Next Token Prediction]] or masked-token objectives over vast text.
- ### Overview
- Pretraining decouples generic capability acquisition from task specialisation, amortising the cost of learning broadly useful features.
- Self-supervised objectives derive supervision signals from the data itself, avoiding the need for human labels at scale.
- The result is a [[Foundation Model]] that can be reused across many downstream applications.
- This paradigm has become the dominant route to capable language, vision and multimodal models.
- ### Mechanisms
- Causal language modelling predicts the next token from preceding context, while masked language modelling reconstructs hidden tokens.
- Training proceeds over enormous corpora for many compute-hours to absorb statistical structure of the domain.
- [[Representation Learning]] produces dense embeddings that encode syntax, semantics and world knowledge.
- The pretrained weights are then specialised through fine-tuning, instruction tuning or in-context prompting.
- ### Applications
- Building the base of every modern [[Large Language Model]] and many vision systems.
- Providing transferable backbones for classification, retrieval and generation.
- Reducing data and compute requirements for downstream tasks via transfer.
- ### Relationships
- subClassOf:: [[Self-Supervised Learning]]
- requires:: [[Training Corpus]]
- requires:: [[Unsupervised Learning]]
- implements:: [[Self-Supervised Learning]]
- enables:: [[Fine-Tuning]]
- enables:: [[Transfer Learning]]
- produces:: [[Foundation Model]]
- uses:: [[Next Token Prediction]]
- uses:: [[Representation Learning]]
- supports:: [[Large Language Model]]
- supports:: [[Language Model]]
- contrastsWith:: [[Fine-Tuning]]
- contrastsWith:: [[Instruction Tuning]]
- dependsOn:: [[Representation Learning]]
- bridgesTo:: [[Deep Learning]]
- relatedTo:: [[Transfer Learning]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
