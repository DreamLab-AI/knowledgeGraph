public:: true

# Agent Loop

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:agent-loop", "@type":"Page", "title":"Agent Loop", "vc:slug":"agent-loop", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:agent-loop",
  "@type":"Class",
  "label":"Agent Loop",
  "definition":"The agent loop is the repeating control cycle — observe, plan, act, evaluate — through which an autonomous agent perceives its environment, selects a next action or tool call, executes it, and incorporates the result before repeating. It is the core execution pattern underlying agentic systems, terminal coding agents, and retrieval-augmented reasoning, continuing until a termination condition such as task completion or a step budget is reached. The loop's design governs how an agent balances exploration, tool use, and convergence toward a goal.",
  "domain":"ai",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:agent-harness","label":"Agent Harness"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:agent-harness","label":"Agent Harness"}]
  },
  "sameAs":[],
  "quality":0.6,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- The agent loop is the repeating control cycle — observe, plan, act, evaluate — through which an autonomous agent perceives its environment, selects a next action or tool call, executes it, and incorporates the result before repeating. It is the core execution pattern underlying agentic systems, terminal coding agents, and retrieval-augmented reasoning, continuing until a termination condition such as task completion or a step budget is reached. The loop's design governs how an agent balances exploration, tool use, and convergence toward a goal.
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
