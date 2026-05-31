public:: true

# Deep Research
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:deep-research",
  "@type": "Page",
  "vc:slug": "deep-research",
  "title": "Deep Research",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:deep-research",
  "@type": "Class",
  "label": "Deep Research",
  "definition": "Deep research is an agentic AI capability in which a language model autonomously plans and executes multi-step investigations, browsing the web, reading sources, and synthesising a cited report on a topic. The agent decomposes a query into sub-questions, iteratively gathers evidence across many pages, and reconciles findings rather than answering from parametric memory alone. It trades latency for depth, breadth of sources, and verifiable citations.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-application", "label": "AI Application"}],
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
  - Deep research is an autonomous workflow where an AI agent plans, browses, and synthesises a cited answer over many steps. It is built on [[Agents]] and leans on [[Computer Use and Browser Agents]] to navigate live web sources.
- ### Content
  - A deep-research agent maintains a research plan, issues searches, follows links, extracts and cross-checks evidence, then compiles a structured report with provenance. Key challenges are source quality, hallucination control, and managing long-horizon tool-use loops within token and time budgets.
