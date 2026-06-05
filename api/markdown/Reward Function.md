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
  "definition": "A mathematical formulation in reinforcement learning that maps state-action pairs to scalar values, guiding AI agent behaviour toward desired outcomes in game environments, virtual worlds, and autonomous systems through feedback signals.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-agent-learning",
        "label": "Autonomous Agent Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
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
