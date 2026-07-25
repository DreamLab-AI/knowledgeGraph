public:: true

# Reasoning Trace
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:reasoning-trace",
  "@type": "Page",
  "vc:slug": "reasoning-trace",
  "title": "Reasoning Trace",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reasoning-trace",
  "@type": "Class",
  "label": "Reasoning Trace",
  "definition": "A reasoning trace is the recorded sequence of intermediate thoughts, tool calls, and decisions a model produces while solving a task, distinct from its final output. It serves as both a working scratchpad that improves accuracy and an audit artefact for inspecting how an agent reached a conclusion. Traces underpin debugging, evaluation, and self-correction in agentic systems.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:agents", "label": "Agents"},
      {"@id": "urn:ngm:class:computer-use-and-browser-agents", "label": "Computer Use and Browser Agents"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A reasoning trace is the step-by-step record of a model's intermediate thoughts and actions, used by [[Agents]] and [[Computer Use and Browser Agents]] to plan, self-correct, and provide auditability.
- ### Content
  - Traces capture chain-of-thought text, tool invocations, observations, and branch points, enabling replay and inspection of agent behaviour. They are central to evaluation and safety, since a misleading or unfaithful trace can mask the true cause of an output.
