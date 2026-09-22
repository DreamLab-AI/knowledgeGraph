public:: true

# Plan and Execute Pattern
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:plan-and-execute-pattern",
  "@type": "Page",
  "vc:slug": "plan-and-execute-pattern",
  "title": "Plan and Execute Pattern",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:plan-and-execute-pattern",
  "@type": "Class",
  "label": "Plan and Execute Pattern",
  "definition": "The plan-and-execute pattern is an agent-architecture design in which a dedicated planner component produces a structured task plan that an executor component then realises step by step using tools. Formalising the strategy as a reusable pattern lets agent frameworks separate high-level reasoning from low-level tool invocation, enabling re-planning and observability. It is widely implemented through function-calling pipelines in LLM agent frameworks.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:agent-frameworks", "label": "Agent Frameworks"}, {"@id": "urn:ngm:class:function-calling", "label": "Function Calling"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The plan-and-execute pattern is a reusable agent architecture pairing a planner with an executor, implemented by [[Agent Frameworks]] and realised through [[Function Calling]].
- ### Content
  - As a design pattern it standardises the split between a planner that emits an ordered, often typed plan and an executor that invokes tools per step, feeding results back for monitoring and conditional re-planning. Agent frameworks codify this as composable nodes or graphs, using structured function-calling to bind plan steps to concrete tool calls, which improves traceability and recovery on multi-step tasks.
