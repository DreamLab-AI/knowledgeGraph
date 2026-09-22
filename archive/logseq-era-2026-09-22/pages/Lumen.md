public:: true

# Lumen
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:lumen",
  "@type": "Page",
  "vc:slug": "lumen",
  "title": "Lumen",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:lumen",
  "@type": "Class",
  "label": "Lumen",
  "definition": "Lumen is Unreal Engine's fully dynamic global illumination and reflections system that computes indirect lighting in real time without precomputed lightmaps. It uses a combination of screen-space tracing, software ray tracing against signed distance fields, and optional hardware ray tracing to produce diffuse interreflection and reflections that update as scenes and lights change. Lumen enables physically plausible lighting in interactive applications and games.",
  "domain": "metaverse",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:rendering-technique", "label": "Rendering Technique"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:ray-tracing", "label": "Ray Tracing"}, {"@id": "urn:ngm:class:unreal-engine", "label": "Unreal Engine"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Lumen is the real-time dynamic global illumination system inside [[Unreal Engine]], producing indirect light and reflections without baked lightmaps. It blends screen-space and distance-field tracing with optional [[Ray Tracing]] hardware acceleration.
- ### Content
  - Lumen scales across hardware by selecting software or hardware ray-tracing paths and adjusting trace resolution. It removes the lighting-bake workflow, letting artists move lights and geometry interactively, at the cost of careful performance tuning for high-resolution reflections and large open worlds.
