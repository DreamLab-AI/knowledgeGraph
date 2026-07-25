public:: true

# Presence Awareness

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:presence-awareness",
  "@type": "Page",
  "title": "Presence Awareness",
  "vc:slug": "presence-awareness",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:presence-awareness",
  "@type": "Class",
  "label": "Presence Awareness",
  "definition": "Presence awareness is the capability of a collaborative system to track and surface which users are currently active in a shared space or document, along with lightweight state such as their cursor position, selection or focus. It is a foundational building block for real-time collaborative editing, allowing participants to see who else is present and where their attention is directed. Systems typically implement it as a low-latency, frequently updated channel separate from the durable document state itself.",
  "domain": "distributed-collaboration",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:awareness",
      "label": "Awareness"
    }
  ],
  "relations": {},
  "sameAs": [],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Presence awareness is the capability of a collaborative system to track and surface which users are currently active in a shared space or document, along with lightweight state such as their cursor position, selection or focus. It is a foundational building block for real-time collaborative editing, allowing participants to see who else is present and where their attention is directed. Systems typically implement it as a low-latency, frequently updated channel separate from the durable document state itself.
	- It is a [[Awareness]] concept.
- ### Relationships
	- subClassOf:: [[Awareness]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
