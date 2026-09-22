public:: true

# Software Engineering Automation

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:software-engineering-automation", "@type": "Page", "title": "Software Engineering Automation", "vc:slug": "software-engineering-automation", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:software-engineering-automation",
  "@type": "Class",
  "label": "Software Engineering Automation",
  "definition": "Software engineering automation is the application of AI agents and tooling to perform software development tasks -- code generation, testing, refactoring and deployment -- with reduced human intervention. It builds on agent harnesses and autonomous task execution to let coding agents plan, execute and verify multi-step engineering work directly in a terminal or IDE. It underpins the current generation of terminal and IDE coding agents that operate over real codebases and toolchains.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "uses": [],
    "requires": [
      {
        "@id": "urn:ngm:class:agent-harness",
        "label": "Agent Harness"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-task-execution",
        "label": "Autonomous Task Execution"
      },
      {
        "@id": "urn:ngm:class:terminal-coding-agents",
        "label": "Terminal Coding Agents"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:software-engineering",
        "label": "Software Engineering"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Software engineering automation is the application of AI agents and tooling to perform software development tasks -- code generation, testing, refactoring and deployment -- with reduced human intervention. It builds on agent harnesses and autonomous task execution to let coding agents plan, execute and verify multi-step engineering work directly in a terminal or IDE. It underpins the current generation of terminal and IDE coding agents that operate over real codebases and toolchains.
- ### Relationships
	- requires:: [[Agent Harness]]
	- enables:: [[Autonomous Task Execution]]
	- enables:: [[Terminal Coding Agents]]
	- partOf:: [[Software Engineering]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
