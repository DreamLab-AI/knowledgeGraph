public:: true

# Reward Function
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:01e31db3bfe151505d7e98bd5bb912de874ca4cd164dc403ea50d58d536d3de1",
  "@type": "Page",
  "vc:slug": "reward-function",
  "title": "Reward Function",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:autonomous-agent-learning",
      "vc:label": "Autonomous Agent Learning"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:reinforcement-learning",
      "vc:label": "Reinforcement Learning"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10024"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Reward Function"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reward-function",
  "@type": "Class",
  "label": "Reward Function",
  "definition": "A mathematical formulation in reinforcement learning that maps state-action pairs to scalar values, guiding AI agent behaviour toward desired outcomes through feedback signals; central to policy optimisation, agent training, and objective specification in machine learning systems.",
  "domain": "machine-learning",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:reward-signal",
        "label": "Reward Signal"
      },
      {
        "@id": "urn:ngm:class:discount-factor",
        "label": "Discount Factor"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:state-space",
        "label": "State Space"
      },
      {
        "@id": "urn:ngm:class:action-space",
        "label": "Action Space"
      },
      {
        "@id": "urn:ngm:class:environment-model",
        "label": "Environment Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:policy-optimisation",
        "label": "Policy Optimisation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bellman-equation",
        "label": "Bellman Equation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:value-function",
        "label": "Value Function"
      },
      {
        "@id": "urn:ngm:class:temporal-difference-learning",
        "label": "Temporal Difference Learning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:inverse-reinforcement-learning",
        "label": "Inverse Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:reward-shaping",
        "label": "Reward Shaping"
      },
      {
        "@id": "urn:ngm:class:multi-objective-optimisation",
        "label": "Multi-Objective Optimisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:loss-function",
        "label": "Loss Function"
      },
      {
        "@id": "urn:ngm:class:heuristic-function",
        "label": "Heuristic Function"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:reward-hacking",
        "label": "Reward Hacking"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning-from-human-feedback",
        "label": "Reinforcement Learning from Human Feedback"
      },
      {
        "@id": "urn:ngm:class:alignment",
        "label": "Alignment"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:objective-function",
      "label": "Objective Function"
    },
    {
      "@id": "urn:ngm:class:utility-function",
      "label": "Utility Function"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:reward-function:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:01e31db3bfe151505d7e98bd5bb912de874ca4cd164dc403ea50d58d536d3de1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Autonomous Agent Learning]]",
      "resolved": "urn:visionflow:linked:autonomous-agent-learning",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reinforcement Learning]]",
      "resolved": "urn:visionflow:owl:class:reinforcement-learning",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A mathematical formulation in reinforcement learning that maps state-action pairs to scalar values, guiding AI agent behaviour toward desired outcomes in game environments, virtual worlds, and autonomous systems through feedback signals.

- ### Semantic Classification
  - owl-class:: spatial-computing:RewardFunction
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Reinforcement Learning]]
  - enables:: [[Autonomous Agent Learning]]

- ### Content

  - #### Key Concepts
		- Sparse vs dense reward signals
		- Reward shaping for faster convergence
		- Inverse reinforcement learning
		- Multi-objective reward functions
		- Credit assignment problem
  - #### Applications
		- Game NPC behaviour optimization
		- Virtual character training
		- Autonomous vehicle navigation
		- Robotic control systems
		- Player engagement optimization

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
