public:: true

# MuZero
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mu-zero",
  "@type": "Page",
  "vc:slug": "mu-zero",
  "title": "MuZero",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mu-zero",
  "@type": "Class",
  "label": "MuZero",
  "definition": "MuZero is a model-based reinforcement learning algorithm from DeepMind that achieves superhuman performance in board games and Atari without being given the rules of the environment. It learns a latent dynamics model predicting reward, value, and policy, then plans with Monte Carlo Tree Search over this learned model. It generalises AlphaZero to domains where the environment dynamics are unknown.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:learning-algorithm", "label": "Learning Algorithm"},
      {"@id": "urn:ngm:class:ai-in-games", "label": "AI in Games"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - MuZero is a model-based RL algorithm that masters games without being told their rules, learning a latent model and planning with MCTS. It is a [[Learning Algorithm]] notable in [[AI in Games]].
- ### Content
  - Rather than predicting raw observations, MuZero learns just the quantities needed for planning, reward, value, and policy, in an abstract latent space, sidestepping the difficulty of modelling full environment dynamics. This let it match AlphaZero on Go, chess, and shogi while also excelling at Atari from pixels.
