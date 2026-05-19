schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/ontology#AgenticWorkshop
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:agentic-workshop
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-938d08b5a036"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/ontology#AgenticWorkshop"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Agentic Workshop"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:agentic-workshop"
    },
    {
      "vc:key": "status",
      "vc:value": "stub"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:agentic-workshop"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:74ed87aa01dc571e1d68b50ae9b8e7f96b3c12f916f71911f55afba716212e32@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:agentic-workshop",
  "@type": "OntologyClass",
  "label": "Agentic Workshop",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "artificial-intelligence"
    }
  ],
  "vc:sourceDomain": "artificial-intelligence",
  "vc:status": "stub",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:74ed87aa01dc571e1d68b50ae9b8e7f96b3c12f916f71911f55afba716212e32"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:74ed87aa01dc571e1d68b50ae9b8e7f96b3c12f916f71911f55afba716212e32@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Agentic Workshop is a concept within the ngm domain.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    }
  ]
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:74ed87aa01dc571e1d68b50ae9b8e7f96b3c12f916f71911f55afba716212e32@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Agentic Workshop is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AgenticWorkshop
  - owl-role:: Concept

- ### Relationships
  - bridges-to:: [[AI Agent System]]

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
