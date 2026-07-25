public:: true

# Multi-Turn Dialogue
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:multi-turn-dialogue",
  "@type": "Page",
  "vc:slug": "multi-turn-dialogue",
  "title": "Multi-Turn Dialogue",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multi-turn-dialogue",
  "@type": "Class",
  "label": "Multi-Turn Dialogue",
  "definition": "Multi-turn dialogue is a conversational interaction spanning several exchanges in which a system must maintain context, track state, and resolve references across turns to produce coherent, relevant responses. It contrasts with single-turn question answering by requiring memory of prior utterances and the evolving goal. It is a core capability and evaluation axis for chatbots and conversational AI.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:chatbots", "label": "Chatbots"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Multi-turn dialogue is conversation over several exchanges where context, state, and references must persist across turns. It is the core capability implemented by [[Chatbots]].
- ### Content
  - Handling it well requires tracking dialogue state, resolving anaphora and ellipsis, and conditioning each response on accumulated history within the model's context window. Long conversations strain context limits, motivating summarisation, retrieval of prior turns, and explicit memory mechanisms to preserve coherence.
