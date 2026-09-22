public:: true

# Plan and Execute
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:plan-and-execute",
  "@type": "Page",
  "vc:slug": "plan-and-execute",
  "title": "Plan and Execute",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:plan-and-execute",
  "@type": "Class",
  "label": "Plan and Execute",
  "definition": "Plan and execute is an agentic reasoning strategy in which an LLM-based agent first generates a multi-step plan for a task and then carries out each step, optionally re-planning when steps fail or new information appears. Separating planning from execution improves coherence on long-horizon tasks compared with purely reactive, single-step prompting. It is a common control pattern for autonomous and computer-use agents.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:computer-use-and-browser-agents", "label": "Computer Use and Browser Agents"}, {"@id": "urn:ngm:class:agents", "label": "Agents"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Plan and execute is an agent control strategy that drafts a full plan before acting, used by [[Computer Use and Browser Agents]] and general [[Agents]] for long-horizon tasks.
- ### Content
  - The agent decomposes a goal into an ordered plan, then executes steps sequentially, monitoring outcomes and re-planning when an action fails or the environment changes. This explicit separation reduces myopic errors and wasted tool calls relative to reactive loops, at the cost of upfront planning latency and sensitivity to plan quality when the environment is highly dynamic.
