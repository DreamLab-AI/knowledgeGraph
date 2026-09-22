public:: true

# AI Chips
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-chips",
  "@type": "Page",
  "vc:slug": "ai-chips",
  "title": "AI Chips",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-chips",
  "@type": "Class",
  "label": "AI Chips",
  "definition": "AI Chips are specialized processors optimized for the massively parallel linear-algebra workloads of machine-learning training and inference, including GPUs, TPUs, NPUs, and custom ASICs. They deliver high throughput on matrix and tensor operations through wide SIMD execution, high-bandwidth memory, and reduced-precision arithmetic. Control over advanced AI-chip design and fabrication has become a strategic axis of geopolitical and commercial competition.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:competition-in-ai", "label": "Competition in AI"},
      {"@id": "urn:ngm:class:hardware", "label": "Hardware"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - AI Chips are accelerators built for the parallel tensor math of deep learning. Their supply and capability are central to [[Competition in AI]], making them a strategic class of [[Hardware]].
- ### Content
  - Designs trade off training versus inference, precision (FP16, BF16, FP8, INT8), and memory bandwidth, with high-bandwidth memory and fast interconnects often the limiting factors at scale. Access depends on a concentrated fabrication supply chain, so export controls and foundry capacity directly shape who can train frontier models.
