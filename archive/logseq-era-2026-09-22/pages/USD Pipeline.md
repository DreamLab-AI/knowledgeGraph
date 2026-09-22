public:: true

# USD Pipeline
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:usd-pipeline",
  "@type": "Page",
  "vc:slug": "usd-pipeline",
  "title": "USD Pipeline",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:usd-pipeline",
  "@type": "Class",
  "label": "USD Pipeline",
  "definition": "A USD pipeline is a content production workflow built around Pixar's Universal Scene Description (USD) format, which composes, layers and exchanges complex 3D scene data across digital-content-creation tools. USD enables non-destructive collaboration through composition arcs, variants and references, making it the interchange backbone for film, games and metaverse asset production. It standardises how geometry, materials, animation and motion-capture data flow between applications.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sc-content-and-assets", "label": "Content and Assets"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:motion-capture", "label": "Motion Capture"}, {"@id": "urn:ngm:class:procedural-and-hybrid-4-d", "label": "Procedural and Hybrid 4D"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A USD pipeline organises 3D content production around the Universal Scene Description format, standardising data such as [[Motion Capture]] and supporting [[Procedural and Hybrid 4D]] authoring.
- ### Content
  - USD's layered composition lets multiple departments edit the same scene non-destructively via sublayers, references and variants. Pipelines pair USD with Hydra for rendering and MaterialX for shading, enabling scalable interchange across studios and real-time engines.
