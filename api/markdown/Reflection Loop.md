public:: true

# Reflection Loop
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:reflection-loop",
  "@type": "Page",
  "vc:slug": "reflection-loop",
  "title": "Reflection Loop",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reflection-loop",
  "@type": "Class",
  "label": "Reflection Loop",
  "definition": "A reflection loop is an agentic control pattern in which a model critiques its own intermediate output, identifies errors or gaps, and revises before continuing or finalising. By iterating between generation and self-evaluation, the agent improves quality on tasks where a single pass is unreliable. It is a building block of self-correcting LLM agents and tool-using workflows.",
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
  - A reflection loop is a generate-critique-revise cycle that lets [[Agents]] and [[Computer Use and Browser Agents]] catch and fix their own mistakes before acting or responding.
- ### Content
  - Implementations prompt the model to evaluate its draft against goals, constraints, or test results, then feed the critique back as additional context for a revised attempt. The loop terminates on a quality threshold or iteration budget, trading extra compute for markedly higher reliability on multi-step tasks.
