public:: true

# Blackboard Pattern
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b9ea829e77bc4d85b88adf164f945743e12f315d508621a7c41264c75cf61077",
  "@type": "Page",
  "vc:slug": "blackboard-pattern",
  "title": "Blackboard Pattern",
  "vc:public": true,
  "vc:outboundWikilinks": [
    { "@id": "urn:visionflow:linked:multi-agent-orchestration", "vc:label": "MultiAgentOrchestration" },
    { "@id": "urn:visionflow:linked:memory-bank", "vc:label": "MemoryBank" },
    { "@id": "urn:visionflow:linked:multi-agent-system", "vc:label": "MultiAgentSystem" },
    { "@id": "urn:visionflow:linked:supervisor-worker-pattern", "vc:label": "SupervisorWorkerPattern" }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": { "@id": "did:nostr:ontology-mesh" },
  "prov:generatedAtTime": { "@value": "2026-08-09T00:00:00Z", "@type": "xsd:dateTime" }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:blackboard-pattern",
  "@type": "Class",
  "label": "Blackboard Pattern",
  "definition": "A coordination architecture in which multiple specialised agents collaborate not by messaging each other directly but by reading from and writing to a shared, structured workspace — the blackboard. Each agent watches the blackboard for a state it can act on, contributes its partial result back to the shared space, and lets other agents build on that contribution in turn, so a solution accretes incrementally through many opportunistic updates rather than through a fixed pipeline. The pattern decouples the collaborators from one another: an agent needs to understand only the blackboard's contents, not the identity, order, or availability of its peers.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": { "@id": "urn:ngm:class:multi-agent-orchestration", "label": "Multi-Agent Orchestration" },
  "relations": {
    "requires": [
      { "@id": "urn:ngm:class:multi-agent-system", "label": "Multi-Agent System" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:memory-bank", "label": "Memory Bank" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:supervisor-worker-pattern", "label": "Supervisor-Worker Pattern" },
      { "@id": "urn:ngm:class:task-delegation", "label": "Task Delegation" }
    ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-09T00:00:00Z",
    "inferenceRule": "GapFill"
  }
}
```

- ### Definition
  - "A coordination architecture in which multiple specialised agents collaborate not by messaging each other directly but by reading from and writing to a shared, structured workspace — the blackboard. Each agent watches the blackboard for a state it can act on, contributes its partial result back to the shared space, and lets other agents build on that contribution in turn, so a solution accretes incrementally through many opportunistic updates rather than through a fixed pipeline. The pattern decouples the collaborators from one another: an agent needs to understand only the blackboard's contents, not the identity, order, or availability of its peers."

- ### In Plain Terms
  - Imagine several experts around a whiteboard: nobody hands work directly to anyone else — each person just watches the board, adds what they can when they see an opening, and the answer slowly builds up from everyone's contributions.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:BlackboardPattern
  - owl-role:: Pattern

- ### Relationships
  - is-subclass-of:: [[MultiAgentOrchestration]]
  - requires:: [[MultiAgentSystem]]
  - uses:: [[MemoryBank]]
  - related-to:: [[SupervisorWorkerPattern]]
  - related-to:: [[TaskDelegation]]

- ### Content

  ## Definition

  The **blackboard pattern** organises collaboration around a shared workspace rather than around direct communication. A set of specialised agents — historically called knowledge sources — each monitor a common, structured store called the blackboard. When an agent recognises that the current contents fall within its competence, it acts, writing its contribution back so that the blackboard's state advances. Other agents may then find that this new state is something they can act on, and the solution grows by accumulation. Progress is opportunistic: at any moment whichever agent has something useful to add does so, and there is no predetermined order of contributions.

  This indirection is the pattern's defining trait. Because agents interact only through the blackboard, they are decoupled from one another — an agent needs no knowledge of which peers exist, what they are doing, or whether they are even available. New capabilities can be added simply by introducing another agent that reads and writes the shared space. The blackboard itself is typically realised as a [[MemoryBank]] or comparable shared store, which every collaborator treats as the single source of truth for the task in progress.

  ## Control

  A pure free-for-all can stall or thrash, so most blackboard systems add a control component that decides which eligible agent should act next when several could. This controller ranks candidate contributions, arbitrates conflicts, and recognises when the solution on the board is complete. The design therefore balances two forces: the openness that lets any agent contribute whenever it can, and the coordination needed to keep that openness from degenerating into redundant or contradictory work.

  ## Relationship to Neighbouring Patterns

  As a form of [[MultiAgentOrchestration]], the blackboard pattern contrasts instructively with the [[SupervisorWorkerPattern]]. Supervisor-worker coordination is push-based and hierarchical — a supervisor actively assigns work through [[TaskDelegation]] — whereas the blackboard is pull-based and flat, with agents self-selecting work from a shared state. The blackboard shines when the path to a solution is not known in advance and many kinds of expertise must be applied in an order that only becomes clear as partial results appear, presupposing a [[MultiAgentSystem]] whose members are diverse rather than uniform.
