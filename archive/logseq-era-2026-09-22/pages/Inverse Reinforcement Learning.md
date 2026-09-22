public:: true

# Inverse Reinforcement Learning
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:inverse-reinforcement-learning", "@type":"Page", "title":"Inverse Reinforcement Learning", "vc:slug":"inverse-reinforcement-learning", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:inverse-reinforcement-learning",
  "@type":"Class",
  "label":"Inverse Reinforcement Learning",
  "definition":"Inverse reinforcement learning (IRL) is a machine-learning approach that infers the reward function an agent appears to be optimising from observations of its behaviour, rather than being told the reward in advance. It inverts the usual reinforcement-learning problem: instead of finding a policy that maximises a known reward, it recovers the reward that best explains demonstrated, near-optimal trajectories. The recovered reward can then be used to train new policies that generalise the demonstrated intent to unseen situations, making IRL central to learning complex objectives that are hard to specify by hand.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:imitation-learning","label":"Imitation Learning"}],
  "relations":{
    "implements":[{"@id":"urn:ngm:class:imitation-learning","label":"Imitation Learning"}],
    "requires":[
      {"@id":"urn:ngm:class:reward-function","label":"Reward Function"},
      {"@id":"urn:ngm:class:markov-decision-process","label":"Markov Decision Process"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:reinforcement-learning","label":"Reinforcement Learning"},
      {"@id":"urn:ngm:class:neural-network","label":"Neural Network"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:apprenticeship-learning","label":"Apprenticeship Learning"},
      {"@id":"urn:ngm:class:robot-perception","label":"Robot Learning"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:robotics","label":"Robotics"},
      {"@id":"urn:ngm:class:reward-function","label":"Reward Function"}
    ],
    "dependsOn":[{"@id":"urn:ngm:class:markov-decision-process","label":"Markov Decision Process"}],
    "contrastsWith":[
      {"@id":"urn:ngm:class:reinforcement-learning","label":"Reinforcement Learning"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:apprenticeship-learning","label":"Apprenticeship Learning"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"},
      {"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Inverse reinforcement learning infers the [[Reward Function]] that best explains observed expert behaviour, inverting standard [[Reinforcement Learning]]. As a form of [[Imitation Learning]] over a [[Markov Decision Process]], it recovers intent rather than copying actions directly.
- ### Overview
- In ordinary reinforcement learning the reward is given and the agent searches for a policy that maximises it. IRL turns this around: the demonstrations are given and the algorithm searches for a reward under which those demonstrations look optimal. This is powerful when the objective is intuitive to a human but hard to write down, such as driving courteously or grasping delicate objects.
- The problem is fundamentally under-determined, because many reward functions can explain the same behaviour, so IRL methods add regularising assumptions such as maximum entropy, margin maximisation or feature matching to pick a plausible reward.
- ### Mechanisms
- Feature-based reward representation, expressing the reward as a function of state features.
- Maximum-entropy formulations that resolve ambiguity by preferring the least committed reward.
- Margin and apprenticeship methods that make the expert outperform alternatives.
- Adversarial and deep variants that scale to high-dimensional observations with a [[Neural Network]].
- Recovered-reward re-optimisation to produce a generalising policy.
- ### Applications
- Learning driving and navigation objectives from human demonstrations.
- Teaching manipulation skills in [[Robotics]] without hand-coded rewards.
- [[Apprenticeship Learning]] where the agent matches expert performance.
- Reward modelling for systems whose goals are hard to specify explicitly.
- ### Relationships
- implements:: [[Imitation Learning]]
- requires:: [[Reward Function]]
- requires:: [[Markov Decision Process]]
- uses:: [[Reinforcement Learning]]
- uses:: [[Neural Network]]
- enables:: [[Apprenticeship Learning]]
- enables:: [[Robot Learning]]
- supports:: [[Robotics]]
- supports:: [[Reward Function]]
- dependsOn:: [[Markov Decision Process]]
- contrastsWith:: [[Reinforcement Learning]]
- bridgesTo:: [[Apprenticeship Learning]]
- relatedTo:: [[Machine Learning]]
- relatedTo:: [[Model Evaluation]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
