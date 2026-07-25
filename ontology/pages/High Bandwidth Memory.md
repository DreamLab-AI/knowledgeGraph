public:: true

# High Bandwidth Memory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:high-bandwidth-memory",
  "@type": "Page",
  "vc:slug": "high-bandwidth-memory",
  "title": "High Bandwidth Memory",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:high-bandwidth-memory",
  "@type": "Class",
  "label": "High Bandwidth Memory",
  "definition": "High Bandwidth Memory (HBM) is a 3D-stacked DRAM technology that places multiple memory dies on a silicon interposer adjacent to a processor, delivering very wide buses and high memory bandwidth at low power per bit. It is the standard memory for AI accelerators and GPUs where feeding compute units with data is the dominant bottleneck. HBM enables training and inference of large models that would otherwise be memory-bandwidth bound.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:hardware", "label": "Hardware"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:data-processing-hardware", "label": "Data Processing Hardware"},
      {"@id": "urn:ngm:class:compute-infrastructure", "label": "Compute Infrastructure"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - High Bandwidth Memory is stacked, interposer-mounted DRAM that is required by modern [[Data Processing Hardware]] and forms a critical part of AI [[Compute Infrastructure]].
- ### Content
  - By stacking DRAM dies with through-silicon vias and placing them beside the compute die, HBM achieves bandwidth far above conventional GDDR while improving energy efficiency. It is integral to GPU and AI-accelerator packages, directly determining how large a model's weights and activations can be kept fed at full throughput.
