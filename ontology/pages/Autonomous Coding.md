public:: true

# Autonomous Coding

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:autonomous-coding", "@type":"Page", "title":"Autonomous Coding", "vc:slug":"autonomous-coding", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:autonomous-coding",
  "@type":"Class",
  "label":"Autonomous Coding",
  "definition":"Autonomous coding is the capability of an AI agent to write, modify, test and debug software with minimal human intervention, planning and executing multi-step coding tasks end to end. It builds on code generation but adds agentic control loops for tool use, self-correction and iterative verification against a goal. It is a core capability enabled by agent frameworks, orchestrators and execution sandboxes.",
  "domain":"ai",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:code-generation","label":"Code Generation"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:code-generation","label":"Code Generation"}]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Autonomous Coding]] Autonomous coding is the capability of an AI agent to write, modify, test and debug software with minimal human intervention, planning and executing multi-step coding tasks end to end. It builds on code generation but adds agentic control loops for tool use, self-correction and iterative verification against a goal. It is a core capability enabled by agent frameworks, orchestrators and execution sandboxes.
- ### Relationships
	- subClassOf:: [[Code Generation]]
	- enables:: [[Code Generation]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
