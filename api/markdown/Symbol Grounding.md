public:: true

# Symbol Grounding
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:symbol-grounding",
  "@type": "Page",
  "vc:slug": "symbol-grounding",
  "title": "Symbol Grounding",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:symbol-grounding",
  "@type": "Class",
  "label": "Symbol Grounding",
  "definition": "Symbol grounding is the problem and process of connecting abstract symbols manipulated by an intelligent system to their referents in the perceptual and physical world, so that the symbols carry intrinsic meaning rather than being defined only by other symbols. First articulated by Stevan Harnad, it asks how a system can avoid an infinite regress of definitions and acquire understanding tied to sensory experience. It is central to debates about whether language models truly understand the concepts they process.",
  "domain": "ai",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:ai-research-area", "label": "AI Research Area"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cognitive-ai", "label": "Cognitive AI"},
      {"@id": "urn:ngm:class:ai-grounded-domain", "label": "AI Grounded Domain"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Symbol grounding is the challenge of linking a system's internal symbols to real-world referents so they acquire intrinsic meaning, a prerequisite for [[Cognitive AI]] that genuinely understands rather than merely manipulates tokens.
- ### Content
  - Harnad's formulation highlights that a purely symbolic system risks circularity, defining symbols only in terms of other ungrounded symbols. Proposed solutions connect symbols to sensorimotor data, embodiment, or multimodal perception so that representations are anchored in interaction with the environment. The question resurfaces with large language models, where critics argue text-only training leaves symbols ungrounded while others contend that rich statistical structure provides a weaker but functional grounding.
