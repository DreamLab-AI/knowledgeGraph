public:: true

# Goal Specification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:goal-specification",
  "@type": "Page",
  "vc:slug": "goal-specification",
  "title": "Goal Specification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:goal-specification",
  "@type": "Class",
  "label": "Goal Specification",
  "definition": "Goal specification is the formal description of what an autonomous agent or planner is meant to achieve, expressed as target states, conditions, objectives, or reward functions. It translates high-level intent into a representation that planning and reasoning systems can evaluate and pursue. Clear goal specification is essential for task planning and avoiding misaligned or unsafe agent behaviour.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:task-planning", "label": "Task Planning"}, {"@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Goal specification expresses an agent's intended outcomes in a machine-evaluable form; it is required by [[Task Planning]] to define the objective and by an [[Autonomous Agent]] to know when its task is complete.
- ### Content
  - Goals may be stated as logical conditions over states, as numeric objectives or reward functions, or as natural-language instructions that an LLM grounds into actionable subgoals. Ambiguous or underspecified goals lead to reward hacking, specification gaming, and unintended behaviour, making precise specification a safety concern. Hierarchical decomposition turns a top-level goal into ordered subgoals that planners can satisfy incrementally.
