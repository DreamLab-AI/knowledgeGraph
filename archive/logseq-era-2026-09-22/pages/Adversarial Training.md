public:: true

# Adversarial Training

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:adversarial-training", "@type":"Page", "title":"Adversarial Training", "vc:slug":"adversarial-training", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:adversarial-training",
  "@type":"Class",
  "label":"Adversarial Training",
  "definition":"Adversarial training is a robustness technique that augments model training with adversarially perturbed examples generated to maximise the model's loss. By solving an inner maximisation that crafts worst-case inputs within a bounded perturbation set and an outer minimisation over model parameters, it teaches models to resist adversarial attacks. It improves robustness against perturbations at the cost of additional computation and sometimes reduced clean accuracy.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:model-training","label":"Model Training"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:model-training","label":"Model Training"}],
    "hasPart":[{"@id":"urn:ngm:class:data-augmentation","label":"Data Augmentation"},{"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"}],
    "implements":[{"@id":"urn:ngm:class:model-robustness","label":"Model Robustness"}],
    "requires":[{"@id":"urn:ngm:class:adversarial-attack","label":"Adversarial Attack"},{"@id":"urn:ngm:class:supervised-learning","label":"Supervised Learning"}],
    "uses":[{"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"},{"@id":"urn:ngm:class:neural-network","label":"Neural Network"}],
    "enables":[{"@id":"urn:ngm:class:robustness","label":"Robustness"}],
    "relatedTo":[{"@id":"urn:ngm:class:generative-adversarial-network","label":"Generative Adversarial Network"},{"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"},{"@id":"urn:ngm:class:overfitting","label":"Overfitting"},{"@id":"urn:ngm:class:security","label":"Security"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Adversarial training hardens models by training on worst-case perturbed inputs produced via an attack. It is a specialised form of [[Model Training]] that improves [[Model Robustness]] against an [[Adversarial Attack]] using [[Gradient Descent]] on a min-max objective.
- ### Overview
- Standard models can be fooled by tiny, carefully chosen perturbations that are imperceptible to humans; adversarial training directly defends against this failure mode.
- It frames training as a saddle-point problem: an inner attacker finds the worst input within a bound, and the outer learner minimises loss against that attacker.
- The technique is among the most reliable empirical defences, though it raises training cost and can trade off clean-data accuracy for robustness.
- ### Mechanisms
- Each batch is perturbed by an attack such as projected gradient descent, constrained to a small norm ball around the original input.
- The model parameters are updated via [[Gradient Descent]] to correctly classify these adversarial examples.
- This functions as a targeted form of [[Data Augmentation]] focused on the model's current weaknesses.
- Robustness is evaluated by attacking the trained model and measuring accuracy under attack, supporting [[Robustness]] guarantees.
- ### Applications
- Defending image and text [[Neural Network]] classifiers against evasion attacks.
- Hardening safety-critical perception systems in autonomous platforms.
- Improving reliability of models deployed in adversarial [[Security]] settings.
- Studying generalisation and the relationship between robustness and [[Overfitting]].
- ### Relationships
- partOf:: [[Model Training]]
- hasPart:: [[Data Augmentation]]
- hasPart:: [[Gradient Descent]]
- implements:: [[Model Robustness]]
- requires:: [[Adversarial Attack]]
- requires:: [[Supervised Learning]]
- uses:: [[Gradient Descent]]
- uses:: [[Neural Network]]
- enables:: [[Robustness]]
- relatedTo:: [[Generative Adversarial Network]]
- relatedTo:: [[Deep Learning]]
- relatedTo:: [[Overfitting]]
- relatedTo:: [[Security]]
- ### Provenance
- updated:: 2026-06-15
