public:: true

# Non-Destructive Editing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:non-destructive-editing",
  "@type": "Page",
  "vc:slug": "non-destructive-editing",
  "title": "Non-Destructive Editing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:non-destructive-editing",
  "@type": "Class",
  "label": "Non-Destructive Editing",
  "definition": "Non-destructive editing is a content-authoring approach in which modifications are recorded as separate, reversible operations or layers rather than overwriting the original source data. The source remains intact, and the final result is computed by composing the edit stack, so any change can be re-ordered, adjusted, or removed. It is fundamental to layered 3D scene description and modern media pipelines.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sc-content-and-assets", "label": "Content and Assets"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:universal-scene-description", "label": "Universal Scene Description"},
      {"@id": "urn:ngm:class:3-d-scene-exchange-protocol-sxp", "label": "3D Scene Exchange Protocol (SXP)"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Non-destructive editing records changes as reversible layers over an untouched source. It is enabled by [[Universal Scene Description]] and implemented by the [[3D Scene Exchange Protocol (SXP)]].
- ### Content
  - In USD this is realised through composition arcs and layer stacks, where stronger layers override weaker ones without modifying them, enabling collaborative, version-friendly workflows. The same principle underlies adjustment layers in image and video editors, allowing experimentation and reproducibility at the cost of resolving the edit graph at read time.
