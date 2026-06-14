public:: true

# Agent Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:75a71973b8d80bbea8bb2f936f0db78abb5fca4d465259c3231d24a7f2102a5f",
  "@type": "Page",
  "vc:slug": "agent-layer",
  "title": "Agent Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:inference-layer",
      "vc:label": "Inference Layer"
    },
    {
      "@id": "urn:visionflow:linked:control-layer",
      "vc:label": "Control Layer"
    },
    {
      "@id": "urn:visionflow:linked:coordination-layer",
      "vc:label": "Coordination Layer"
    },
    {
      "@id": "urn:visionflow:linked:application-layer",
      "vc:label": "Application Layer"
    },
    {
      "@id": "urn:visionflow:linked:autonomous-agent",
      "vc:label": "Autonomous Agent"
    },
    {
      "@id": "urn:visionflow:linked:reinforcement-learning",
      "vc:label": "Reinforcement Learning"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Agent Layer"
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
  "@id": "urn:ngm:class:agent-layer",
  "@type": "Class",
  "label": "Agent Layer",
  "definition": "The Agent Layer is the stratum that hosts autonomous entities capable of perceiving, deciding, and acting toward goals. It sits above control and inference strata that supply its capabilities and below coordination and application strata that direct collectives of agents. It contains agent policies, goal representations, memory, and decision loops.",
  "domain": "ai",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:inference-layer",
        "label": "Inference Layer"
      },
      {
        "@id": "urn:ngm:class:control-layer",
        "label": "Control Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:coordination-layer",
        "label": "Coordination Layer"
      },
      {
        "@id": "urn:ngm:class:application-layer",
        "label": "Application Layer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:agent-layer:2b937fc62a2a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:75a71973b8d80bbea8bb2f936f0db78abb5fca4d465259c3231d24a7f2102a5f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Inference Layer]]",
      "resolved": "urn:visionflow:linked:inference-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Control Layer]]",
      "resolved": "urn:visionflow:linked:control-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Coordination Layer]]",
      "resolved": "urn:visionflow:linked:coordination-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:linked:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Agent]]",
      "resolved": "urn:visionflow:linked:autonomous-agent",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reinforcement Learning]]",
      "resolved": "urn:visionflow:linked:reinforcement-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - The Agent Layer is the stratum that hosts autonomous entities capable of perceiving, deciding, and acting toward goals. It sits above control and inference strata that supply its capabilities and below coordination and application strata that direct collectives of agents. It contains agent policies, goal representations, memory, and decision loops.

- ### Semantic Classification
  - owl-class:: agent:AgentLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Autonomous Agent]], [[Reinforcement Learning]]
  - requires:: [[Inference Layer]], [[Control Layer]]
  - enables:: [[Coordination Layer]], [[Application Layer]]

- ### Content
  - The Agent Layer encapsulates entities that pursue objectives with some degree of autonomy. Typical members include decision policies, goal and task representations, working and long-term memory, planning routines, and the perception-action loops that connect them. Each agent maps observations to actions in service of its goals.
  - It requires the Inference Layer for the model-driven judgements it relies on and the Control Layer to carry out chosen actions. It enables the Coordination Layer, which composes many agents, and the Application Layer, which exposes agent behaviour to users.
  - The layer bridges to autonomous agents and reinforcement learning, paradigms that define how agents choose actions under uncertainty. Goal specification and bounded autonomy set here determine how safely agents can be entrusted with tasks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
