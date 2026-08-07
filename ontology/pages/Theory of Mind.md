public:: true

# Theory of Mind
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9224c0b4fffa3b978459797f9ae4052e281f6d9899beb8e4abeacf94abb95165",
  "@type": "Page",
  "vc:slug": "theory-of-mind",
  "title": "Theory of Mind",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cognitive-science",
      "vc:label": "Cognitive Science"
    },
    {
      "@id": "urn:visionflow:linked:common-sense-reasoning",
      "vc:label": "Common Sense Reasoning"
    },
    {
      "@id": "urn:visionflow:linked:social-interaction",
      "vc:label": "Social Interaction"
    },
    {
      "@id": "urn:visionflow:linked:social-robotics",
      "vc:label": "Social Robotics"
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
  "@id": "urn:ngm:class:theory-of-mind",
  "@type": "Class",
  "label": "Theory of Mind",
  "definition": "The cognitive capacity to attribute mental states — beliefs, desires, intentions, knowledge, and emotions — to oneself and to others, and to recognise that others' mental states may differ from one's own and from reality. Central to human social cognition and classically probed with false-belief tasks, theory of mind has become a benchmark capability for artificial agents, where machine analogues are pursued to support cooperation, communication, and safe interaction with people.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:cognitive-science",
    "label": "Cognitive Science"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:common-sense-reasoning",
        "label": "Common Sense Reasoning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:social-interaction",
        "label": "Social Interaction"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:social-robotics",
        "label": "Social Robotics"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "The cognitive capacity to attribute mental states — beliefs, desires, intentions, knowledge, and emotions — to oneself and to others, and to recognise that others' mental states may differ from one's own and from reality. Central to human social cognition and classically probed with false-belief tasks, theory of mind has become a benchmark capability for artificial agents, where machine analogues are pursued to support cooperation, communication, and safe interaction with people."

- ### Semantic Classification
  - owl-class:: ai:TheoryOfMind
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Cognitive Science]]
  - part-of:: [[Common Sense Reasoning]]
  - enables:: [[Social Interaction]]
  - related-to:: [[Social Robotics]]

- ### Content

  ## Definition

  **Theory of mind** (ToM) is the ability to model other agents as having minds: to infer what someone believes, wants, intends, or knows, and to predict their behaviour from those inferred states rather than from the world as it actually is. The term originates with Premack and Woodruff's 1978 question of whether chimpanzees possess it; the canonical diagnostic is the *false-belief task* (Sally-Anne), which children typically pass around age four by predicting that an agent will act on an outdated belief rather than on the true state of the world.

  ToM is layered. First-order attribution ("she believes X") extends to higher orders ("he thinks that she believes X"), and full competence spans belief, desire, intention, knowledge and ignorance, emotion, and pretence. In cognitive science it is variously explained by *theory-theory* (an intuitive folk psychology), *simulation theory* (running one's own cognitive machinery offline in the other's place), and Bayesian inverse-planning accounts that recover goals and beliefs as the latent causes best explaining observed behaviour.

  For artificial agents, ToM is a load-bearing part of [[Common Sense Reasoning]] about people and a prerequisite for fluent [[Social Interaction]]: a system that cannot track what its interlocutor knows will over-explain, under-explain, or mispredict their actions. In [[Social Robotics]] and human-robot teaming, machine ToM supports intention recognition, legible motion, and knowing when a human collaborator holds a stale or false belief that the robot should correct.

  ## Current Landscape

  - **Computational models**: Bayesian inverse planning (Baker, Saxe, Tenenbaum) treats observed action as approximately rational given latent beliefs and goals; ToMnet (Rabinowitz et al., 2018) meta-learns agent models from behavioural traces; recursive reasoning appears in multi-agent RL as I-POMDPs and cognitive hierarchy models.
  - **Language models**: large models pass many classic false-belief vignettes, but performance degrades under adversarial rewording, prompting active debate over whether this constitutes robust ToM or pattern matching; benchmarks include ToMi, BigToM, FANToM, and OpenToM.
  - **Applications**: assistive and service robots, dialogue systems tracking interlocutor knowledge state, pedagogical agents modelling learner misconceptions, and negotiation or teaming agents anticipating human partners.
  - **Safety relevance**: ToM cuts both ways — agents that model human beliefs can cooperate and communicate better, but the same capability underlies deception; alignment research therefore treats machine ToM as both a tool and a monitored risk.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
