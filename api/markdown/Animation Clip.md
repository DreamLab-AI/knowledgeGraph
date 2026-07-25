public:: true

# Animation Clip

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:animation-clip",
  "@type": "Page",
  "title": "Animation Clip",
  "vc:slug": "animation-clip",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:animation-clip",
  "@type": "Class",
  "label": "Animation Clip",
  "definition": "An animation clip is a discrete, reusable unit of animation data, typically a time-ordered sequence of keyframes or pose samples for a skeleton or property set, such as a walk cycle or a wave gesture. Animation controllers and state machines reference clips as the atomic assets they blend, sequence and transition between at runtime. Clips are commonly authored once and retargeted across multiple character rigs that share a compatible skeleton.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:animation",
      "label": "Animation"
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
	- An animation clip is a discrete, reusable unit of animation data, typically a time-ordered sequence of keyframes or pose samples for a skeleton or property set, such as a walk cycle or a wave gesture. Animation controllers and state machines reference clips as the atomic assets they blend, sequence and transition between at runtime. Clips are commonly authored once and retargeted across multiple character rigs that share a compatible skeleton.
	- It is a [[Animation]] concept.
- ### Relationships
	- subClassOf:: [[Animation]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
