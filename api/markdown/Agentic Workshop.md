public:: true

# Agentic Workshop
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:74ed87aa01dc571e1d68b50ae9b8e7f96b3c12f916f71911f55afba716212e32",
  "@type": "Page",
  "vc:slug": "agentic-workshop",
  "title": "Agentic Workshop",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Agentic Workshop"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agentic-workshop",
  "@type": "Class",
  "label": "Agentic Workshop",
  "definition": "A structured training programme introducing practitioners to agentic AI systems, covering context engineering, memory management, agent orchestration tools (such as Roo Code), and practical case studies in project management, data visualisation, and academic research through phased, multi-session instruction.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-application",
      "label": "AI Application"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:agentic-ai", "label": "Agentic AI"},
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-governance-and-ethics", "label": "AI Governance and Ethics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:agent-frameworks", "label": "Agent Frameworks"},
      {"@id": "urn:ngm:class:advice-for-developing-gen-ai", "label": "Advice for developing GenAI"}
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:agentic-workshop:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:74ed87aa01dc571e1d68b50ae9b8e7f96b3c12f916f71911f55afba716212e32"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A structured training programme introducing practitioners to agentic AI systems: context engineering, memory management, agent orchestration tools, and practical case studies across project management, data visualisation, and academic research via phased multi-session instruction.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AgenticWorkshop
  - owl-role:: Concept

- ### Relationships
  - bridges-to:: [[AI Agent System]]
  - uses:: [[AI Agent System]], [[Large Language Models]]
  - enables:: [[Agentic AI]], [[Generative AI]]
  - supports:: [[AI Governance and Ethics]]
  - relatedTo:: [[Agent Frameworks]], [[Advice for developing GenAI]]

- ### Content
  - {{embed ((68d3ab67-38ca-43b6-b924-439d02c7f3bd))}}
  - Think of agents as sheep dogs. You're not putting sheep in a pen one by one any more. sometimes the best path to getting the sheep in en masse is a long arc round the field where the agent develops the mass as it goes. Sometimes it's a structured play with more work up front. This somewhat depends on you.
  - My background, why you're here, what you can expect
  - course structure (multi session, not completely interdependent, simple pricing)
  - background and rationalle
  - chatbots and the agent / agentic boundary are confusing
		- you probably already use them (deep research)
			- compare gemini pro deep research with [roo](https://gist.github.com/ruvnet/88c61ee4e38191b0be65f498792d5017) (first view of it)
		- why this complex way
			- talking about memory
			- consistency, flexibility, scale
			- data safety and privacy
			- longer run times, more thinking, as much as you need
			- price / performance
			- power use and the start of vibe coding
  - phased approach
  - Phase one (today)
		- introduction to vscode
		- introduction to roo code
		- context management and context engineering
		- demonstrate agents, see where we're going (visionflow)
		- show setup of the system (link to online homework)
			- show how to find all this guidance
			- gemini (free) (more like agents)
		- claude code (paid) (more like agentic)
		- case studies using agentic claude
			- -Project management (120 kids doing their own thing)
			- -Data visualisation (new python tools)
			- -Academic research and verifying sources. (latex)
  - phase two (tomorrow)
		- TODO Mcp security course. Context, sheaf of papers
  - use the search on agentics video site [Agentics Foundation Video Portal](https://video.agentics.org/search?keyword=middleware)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
