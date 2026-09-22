public:: true

# Reflexion
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:reflexion",
  "@type": "Page",
  "vc:slug": "reflexion",
  "title": "Reflexion",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reflexion",
  "@type": "Class",
  "label": "Reflexion",
  "definition": "Reflexion is a framework for language-model agents that converts feedback from failed attempts into reflective verbal self-critiques stored in an episodic memory, which condition subsequent attempts. Rather than updating model weights, it reinforces behaviour through natural-language reflections, enabling rapid trial-and-error learning. It improves agent performance on decision-making, reasoning, and coding benchmarks across repeated episodes.",
  "domain": "ai",
  "maturity": "experimental",
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
  - Reflexion is a verbal reinforcement framework that lets [[Agents]] and [[Computer Use and Browser Agents]] learn from failure by storing self-critiques in memory and reusing them on later attempts.
- ### Content
  - After each trial the agent generates a reflection explaining what went wrong, appends it to an episodic buffer, and uses the accumulated reflections to guide future actions. Because learning happens in language rather than parameters, Reflexion adapts quickly without fine-tuning and complements reasoning and self-correction techniques.
