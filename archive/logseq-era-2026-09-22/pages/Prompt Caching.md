public:: true

# Prompt Caching

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:prompt-caching", "@type": "Page", "title": "Prompt Caching", "vc:slug": "prompt-caching", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:prompt-caching",
  "@type": "Class",
  "label": "Prompt Caching",
  "definition": "Prompt caching is an inference optimisation in which the key-value attention state for a shared, unchanging prefix of a prompt -- such as a system prompt or long context document -- is computed once and reused across subsequent requests, avoiding redundant computation. It reduces latency and cost for workloads that repeatedly send the same long context with only a short suffix varying between calls. It builds directly on KV cache mechanisms and is a common lever in context engineering for large language model applications.",
  "vc:plainGloss": "A speed-and-cost saving trick: when you keep sending the same long piece of context to an AI (a big instruction sheet, say), it holds on to the groundwork from the first time instead of re-reading it every request. You pay less and get faster replies for the repeated part.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:caching",
      "label": "Caching"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:kv-cache",
        "label": "KV Cache"
      }
    ],
    "requires": [],
    "enables": [
      {
        "@id": "urn:ngm:class:context-engineering",
        "label": "Context Engineering"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:caching",
        "label": "Caching"
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
	- Prompt caching is an inference optimisation in which the key-value attention state for a shared, unchanging prefix of a prompt -- such as a system prompt or long context document -- is computed once and reused across subsequent requests, avoiding redundant computation. It reduces latency and cost for workloads that repeatedly send the same long context with only a short suffix varying between calls. It builds directly on KV cache mechanisms and is a common lever in context engineering for large language model applications.

- ### In Plain Terms
	- A speed-and-cost saving trick: when you keep sending the same long piece of context to an AI (a big instruction sheet, say), it holds on to the groundwork from the first time instead of re-reading it every request. You pay less and get faster replies for the repeated part.
- ### Relationships
	- uses:: [[KV Cache]]
	- enables:: [[Context Engineering]]
	- partOf:: [[Caching]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
