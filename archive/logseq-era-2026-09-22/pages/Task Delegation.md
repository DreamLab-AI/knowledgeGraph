public:: true

# Task Delegation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:task-delegation",
  "@type": "Page",
  "title": "Task Delegation",
  "vc:slug": "task-delegation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:task-delegation",
  "@type": "Class",
  "label": "Task Delegation",
  "definition": "Task Delegation is the mechanism by which an agent assigns a sub-task to another agent or tool deemed more capable, available or specialised for that work. In multi-agent and agentic systems it underpins division of labour, allowing a coordinating agent to decompose a goal and route components to subordinate executors. Effective delegation requires shared task representation, capability awareness and result aggregation.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:multi-agent-system",
      "label": "Multi-Agent System"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:multi-agent-system",
        "label": "Multi-Agent System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:multi-agent-coordination",
        "label": "Multi-Agent Coordination"
      },
      {
        "@id": "urn:ngm:class:workflow-orchestration",
        "label": "Workflow Orchestration"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:inter-agent-communication",
        "label": "Inter-Agent Communication"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:agent-communication-language",
        "label": "Agent Communication Language"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:task-allocation",
        "label": "Task Allocation"
      },
      {
        "@id": "urn:ngm:class:multi-agent-coordination",
        "label": "Multi-Agent Coordination"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:workflow-orchestration",
        "label": "Workflow Orchestration"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Task Delegation is the mechanism by which an agent assigns a sub-task to another agent or tool deemed more capable, available or specialised for that work. In multi-agent and agentic systems it underpins division of labour, allowing a coordinating agent to decompose a goal and route components to subordinate executors. Effective delegation requires shared task representation, capability awareness and result aggregation.
  - Related concepts: [[Multi-Agent System]] [[Inter-Agent Communication]] [[Autonomous Agent]] [[Multi-Agent Coordination]]
- ### Overview
  - Task delegation lets agentic systems scale beyond a single model's competence by routing work to the most appropriate executor. A planner or orchestrator decomposes a goal, identifies which agent or tool can satisfy each part based on advertised capabilities, dispatches the work and reintegrates the returned results. It depends on a shared communication language and on mechanisms for monitoring progress and handling failure or reassignment.
- ### Key aspects
  - Goal decomposition into delegatable sub-tasks
  - Capability matching to select an appropriate executor
  - Communication of task, context and acceptance criteria
  - Result aggregation and quality verification
  - Failure handling, retries and reassignment
- ### Mechanisms
  - Goal decomposition into delegatable sub-tasks
  - Capability matching to select an appropriate executor
  - Communication of task, context and acceptance criteria
- ### Applications
  - Orchestrating specialised tool-using agents
  - Hierarchical planner-executor agent architectures
  - Routing queries to domain-expert models
  - Distributed problem solving across agent teams
  - Human-in-the-loop escalation and handoff
- ### Relationships
  - subClassOf:: [[Multi-Agent System]]
  - partOf:: [[Multi-Agent System]]
  - enables:: [[Multi-Agent Coordination]]
  - enables:: [[Workflow Orchestration]]
  - uses:: [[Inter-Agent Communication]]
  - requires:: [[Agent Communication Language]]
  - dependsOn:: [[Autonomous Agent]]
  - supports:: [[Decision Making]]
  - relatedTo:: [[Task Allocation]]
  - relatedTo:: [[Multi-Agent Coordination]]
  - bridgesTo:: [[Workflow Orchestration]]
  - contrastsWith:: [[Autonomous Agent]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
