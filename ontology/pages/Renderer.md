public:: true

# Renderer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:renderer",
  "@type": "Page",
  "vc:slug": "renderer",
  "title": "Renderer",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:renderer",
  "@type": "Class",
  "label": "Renderer",
  "definition": "A renderer is the software or hardware component that converts a scene description, such as geometry, materials, lights, or a markup specification, into a final image or visual output. Renderers range from real-time rasterisers and ray tracers to text-and-diagram engines that draw from declarative source. The choice of renderer determines visual fidelity, performance, and the formats a system can produce.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sc-display-and-rendering", "label": "Display and Rendering"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:universal-scene-description", "label": "Universal Scene Description"},
      {"@id": "urn:ngm:class:diagrams-as-code", "label": "Diagrams as Code"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A renderer turns a scene or markup specification into a visual output, consuming formats such as [[Universal Scene Description]] and powering [[Diagrams as Code]] toolchains.
- ### Content
  - Real-time renderers prioritise frame rate via rasterisation and GPU pipelines, while offline renderers use path tracing for physically accurate images. Declarative renderers compile structured source, such as diagram or document specs, into deterministic visuals, decoupling content from presentation.
