public:: true

# Markov Decision Process
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9d12168ccf14eb473f3a1bc96f031b14a177d1234568d2c70232612053ad9a94",
  "@type": "Page",
  "vc:slug": "markov-decision-process",
  "title": "Markov Decision Process",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:markov-chain",
      "vc:label": "Markov Chain"
    },
    {
      "@id": "urn:visionflow:linked:probability-theory",
      "vc:label": "Probability Theory"
    },
    {
      "@id": "urn:visionflow:linked:reinforcement-learning",
      "vc:label": "Reinforcement Learning"
    },
    {
      "@id": "urn:visionflow:linked:optimisation",
      "vc:label": "Optimisation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Markov Decision Process"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:markov-decision-process",
  "@type": "Class",
  "label": "Markov Decision Process",
  "definition": "A mathematical framework for modelling sequential decision-making where outcomes are partly random and partly under the control of a decision maker.",
  "domain": "mathematics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:markov-chain",
      "label": "Markov Chain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:markov-chain",
        "label": "Markov Chain"
      },
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:markov-decision-process:562a229845c8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9d12168ccf14eb473f3a1bc96f031b14a177d1234568d2c70232612053ad9a94"
  },
  "vc:resolutions": [
    {
      "raw": "[[Markov Chain]]",
      "resolved": "urn:visionflow:linked:markov-chain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Probability Theory]]",
      "resolved": "urn:visionflow:linked:probability-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reinforcement Learning]]",
      "resolved": "urn:visionflow:linked:reinforcement-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Optimisation]]",
      "resolved": "urn:visionflow:linked:optimisation",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A mathematical framework for modelling sequential decision-making where outcomes are partly random and partly under the control of a decision maker.

- ### Semantic Classification
  - owl-class:: mathematics:MarkovDecisionProcess
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Markov Chain]]
  - bridges-to:: [[Optimisation]]
  - requires:: [[Markov Chain]], [[Probability Theory]]
  - enables:: [[Reinforcement Learning]]

- ### Content
  - A Markov decision process extends a Markov chain with actions and rewards, modelling an agent that chooses actions to maximise cumulative reward over time. Its solution is a policy mapping states to actions, often computed via dynamic programming.
  - It provides the formal foundation for reinforcement learning, where the transition and reward functions are typically unknown and must be learned through interaction.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
