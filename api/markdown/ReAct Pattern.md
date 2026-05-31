public:: true

# ReAct Pattern
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:re-act-pattern",
  "@type": "Page",
  "vc:slug": "re-act-pattern",
  "title": "ReAct Pattern",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:re-act-pattern",
  "@type": "Class",
  "label": "ReAct Pattern",
  "definition": "ReAct (Reasoning and Acting) is a prompting and agent-control pattern in which a language model interleaves explicit reasoning traces with action steps such as tool calls, observing the results before reasoning again. This loop lets the model decompose tasks, gather information, and self-correct rather than answering in a single pass. It is a foundational design for tool-using LLM agents.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:agent-frameworks", "label": "Agent Frameworks"},
      {"@id": "urn:ngm:class:function-calling", "label": "Function Calling"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The ReAct pattern interleaves model reasoning with actions and observations in a loop. It is implemented by [[Agent Frameworks]] and typically realised through [[Function Calling]] to invoke external tools.
- ### Content
  - A ReAct trace alternates Thought, Action, and Observation steps until the agent decides it can answer. Grounding reasoning in tool observations reduces hallucination and enables multi-step problem solving, but adds latency and token cost, and demands robust parsing and error handling around tool invocations.
