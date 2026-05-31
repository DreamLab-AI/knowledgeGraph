public:: true

# Agentic Systems Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f5c72ca82bb3bd3eff269eeb9656b675e41e9cf353ffb09d11132fcf380f69f5",
  "@type": "Page",
  "vc:slug": "agentic-systems-domain",
  "title": "Agentic Systems Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:autonomous-agent",
      "vc:label": "Autonomous Agent"
    },
    {
      "@id": "urn:visionflow:linked:tool-use",
      "vc:label": "Tool Use"
    },
    {
      "@id": "urn:visionflow:linked:planning",
      "vc:label": "Planning"
    },
    {
      "@id": "urn:visionflow:linked:agent-memory",
      "vc:label": "Agent Memory"
    },
    {
      "@id": "urn:visionflow:linked:multi-agent-coordination",
      "vc:label": "Multi-Agent Coordination"
    },
    {
      "@id": "urn:visionflow:linked:natural-language-processing-domain",
      "vc:label": "Natural Language Processing Domain"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-representation-domain",
      "vc:label": "Knowledge Representation Domain"
    },
    {
      "@id": "urn:visionflow:linked:reinforcement-learning",
      "vc:label": "Reinforcement Learning"
    },
    {
      "@id": "urn:visionflow:linked:task-automation",
      "vc:label": "Task Automation"
    },
    {
      "@id": "urn:visionflow:linked:workflow-orchestration",
      "vc:label": "Workflow Orchestration"
    },
    {
      "@id": "urn:visionflow:linked:tool-augmented-reasoning",
      "vc:label": "Tool-Augmented Reasoning"
    },
    {
      "@id": "urn:visionflow:linked:ai-safety-domain",
      "vc:label": "AI Safety Domain"
    },
    {
      "@id": "urn:visionflow:linked:robotics-domain",
      "vc:label": "Robotics Domain"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence-domain",
      "vc:label": "Artificial Intelligence Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Agentic Systems Domain"
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
  "@id": "urn:ngm:class:agentic-systems-domain",
  "@type": "Class",
  "label": "Agentic Systems Domain",
  "definition": "The Agentic Systems Domain covers software agents that pursue goals over multiple steps by planning, invoking tools and acting on an environment. Its scope includes single-agent control loops, tool use, memory and the coordination of multiple agents. It is a sub-area of the Artificial Intelligence Domain that composes models from other domains into goal-directed behaviour. The boundary excludes the underlying model training, which belongs to the Machine Learning Domain.",
  "domain": "agentic-systems",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence-domain",
      "label": "Artificial Intelligence Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
      },
      {
        "@id": "urn:ngm:class:tool-use",
        "label": "Tool Use"
      },
      {
        "@id": "urn:ngm:class:planning",
        "label": "Planning"
      },
      {
        "@id": "urn:ngm:class:agent-memory",
        "label": "Agent Memory"
      },
      {
        "@id": "urn:ngm:class:multi-agent-coordination",
        "label": "Multi-Agent Coordination"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:natural-language-processing-domain",
        "label": "Natural Language Processing Domain"
      },
      {
        "@id": "urn:ngm:class:knowledge-representation-domain",
        "label": "Knowledge Representation Domain"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:task-automation",
        "label": "Task Automation"
      },
      {
        "@id": "urn:ngm:class:workflow-orchestration",
        "label": "Workflow Orchestration"
      },
      {
        "@id": "urn:ngm:class:tool-augmented-reasoning",
        "label": "Tool-Augmented Reasoning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:agentic-systems-domain:c4d6bb8ada78",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f5c72ca82bb3bd3eff269eeb9656b675e41e9cf353ffb09d11132fcf380f69f5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Autonomous Agent]]",
      "resolved": "urn:visionflow:linked:autonomous-agent",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tool Use]]",
      "resolved": "urn:visionflow:linked:tool-use",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Planning]]",
      "resolved": "urn:visionflow:linked:planning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Agent Memory]]",
      "resolved": "urn:visionflow:linked:agent-memory",
      "kind": "StubLink"
    },
    {
      "raw": "[[Multi-Agent Coordination]]",
      "resolved": "urn:visionflow:linked:multi-agent-coordination",
      "kind": "StubLink"
    },
    {
      "raw": "[[Natural Language Processing Domain]]",
      "resolved": "urn:visionflow:linked:natural-language-processing-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Knowledge Representation Domain]]",
      "resolved": "urn:visionflow:linked:knowledge-representation-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reinforcement Learning]]",
      "resolved": "urn:visionflow:linked:reinforcement-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Task Automation]]",
      "resolved": "urn:visionflow:linked:task-automation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Workflow Orchestration]]",
      "resolved": "urn:visionflow:linked:workflow-orchestration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Tool-Augmented Reasoning]]",
      "resolved": "urn:visionflow:linked:tool-augmented-reasoning",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Safety Domain]]",
      "resolved": "urn:visionflow:linked:ai-safety-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotics Domain]]",
      "resolved": "urn:visionflow:linked:robotics-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence Domain]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence-domain",
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
  - The Agentic Systems Domain covers software agents that pursue goals over multiple steps by planning, invoking tools and acting on an environment. Its scope includes single-agent control loops, tool use, memory and the coordination of multiple agents. It is a sub-area of the Artificial Intelligence Domain that composes models from other domains into goal-directed behaviour. The boundary excludes the underlying model training, which belongs to the Machine Learning Domain.

- ### Semantic Classification
  - owl-class:: agent:AgenticSystemsDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence Domain]]
  - bridges-to:: [[AI Safety Domain]], [[Robotics Domain]], [[Knowledge Representation Domain]]
  - has-part:: [[Autonomous Agent]], [[Tool Use]], [[Planning]], [[Agent Memory]], [[Multi-Agent Coordination]]
  - requires:: [[Natural Language Processing Domain]], [[Knowledge Representation Domain]], [[Reinforcement Learning]]
  - enables:: [[Task Automation]], [[Workflow Orchestration]], [[Tool-Augmented Reasoning]]

- ### Content
  - The Agentic Systems Domain studies how autonomous software agents decompose objectives, select actions and adapt to feedback over an extended interaction. Its scope covers the control loop of perception, reasoning and action, the use of external tools and the maintenance of memory across steps. The boundary lies above model training, so the domain treats a language or policy model as a component and concerns itself with how that component is orchestrated.
  - Member concepts include the Autonomous Agent as the unit of behaviour, Tool Use for invoking external capabilities, Planning for action selection, Agent Memory for state persistence and Multi-Agent Coordination for collective behaviour. These rely on natural language processing for instruction following, knowledge representation for grounding and reinforcement learning for sequential decision making.
  - The domain bridges to the AI Safety Domain because autonomous action raises alignment and oversight concerns, to the Robotics Domain where embodied agents act in the physical world, and to knowledge representation for the symbolic structures agents reason over. It enables task automation, workflow orchestration and tool-augmented reasoning.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
