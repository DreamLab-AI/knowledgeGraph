public:: true

# Reward Modelling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:reward-modelling",
  "@type": "Page",
  "vc:slug": "reward-modelling",
  "title": "Reward Modelling",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reward-modelling",
  "@type": "Class",
  "label": "Reward Modelling",
  "definition": "Reward modelling is a machine-learning technique that trains a separate model to predict human preferences and use its scores as a reward signal for optimising another agent. It underpins reinforcement learning from human feedback, where the reward model ranks candidate outputs so a policy can be tuned toward preferred behaviour. It is central to aligning large language models with human values and intent.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:safety-and-alignment", "label": "Safety and Alignment"}, {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Reward modelling learns a model of human preferences whose scores guide policy optimisation, a core component of [[Safety and Alignment]] and broader [[AI Safety]].
- ### Content
  - A reward model is trained on human comparisons between outputs, then provides the reward in reinforcement learning from human feedback. Its quality bounds alignment: reward misspecification or hacking can cause models to optimise the proxy rather than the intended objective.
