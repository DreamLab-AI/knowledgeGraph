public:: true

# Scene Design
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:scene-design",
  "@type": "Page",
  "vc:slug": "scene-design",
  "title": "Scene Design",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:scene-design",
  "@type": "Class",
  "label": "Scene Design",
  "definition": "Scene design is the process of composing and arranging the spatial, visual, and behavioural elements of a virtual or augmented environment. It encompasses layout of geometry, lighting, materials, cameras, and interactive objects within a scene graph. It is a foundational creative activity in metaverse, game, and immersive-media authoring.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sc-content-and-assets", "label": "Spatial Content and Assets"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:etsi-domain-creative-media", "label": "ETSI Domain Creative Media"},
      {"@id": "urn:ngm:class:authoring-tool", "label": "Authoring Tool"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Scene design is the composition of virtual environments and is performed within an [[Authoring Tool]]; it is one of the creative activities organised under [[ETSI Domain Creative Media]].
- ### Content
  - Designers work against a scene graph that hierarchically organises transforms, meshes, lights, and behaviours. Decisions about spatial layout, level of detail, and lighting balance visual fidelity against rendering performance, and increasingly interoperate through open scene-description formats for portability across engines.
