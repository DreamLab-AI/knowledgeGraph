public:: true

# Scene Graph Format
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9ff961fa94b0be49d3ddf7e5eaa9d57a0bea9e5c8c4c22d93d20e14ac02016a4",
  "@type": "Page",
  "vc:slug": "scene-graph-format",
  "title": "Scene Graph Format",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9134"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Scene Graph Format"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:scene-graph-format",
  "@type": "Class",
  "label": "Scene Graph Format",
  "definition": "Scene Graph Format is a spatial computing concept and a type of Scene Graph.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    },
    {
      "@id": "urn:ngm:class:scene-graph",
      "label": "Scene Graph"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:scene-graph-format:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9ff961fa94b0be49d3ddf7e5eaa9d57a0bea9e5c8c4c22d93d20e14ac02016a4"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - SceneGraphFormat is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: spatial-computing:SceneGraphFormat
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  # SceneGraphFormat
  SceneGraphFormat defines structured representations organizing 3D scenes as directed acyclic graphs (DAGs) where nodes represent spatial entities, transformations, geometry, materials, lights, cameras, and behaviors with parent-child relationships encoding spatial hierarchies. Nodes maintain local transformation matrices composed from position, rotation, and scale, with world transforms computed by concatenating ancestor transformations enabling efficient hierarchical animation and instancing. Common formats include X3D (ISO standard) for web-based 3D with declarative scene description, Collada (COL LAborative Design Activity) supporting digital content creation tool interchange, USD (Universal Scene Description) from Pixar providing powerful composition and layering for complex pipelines, glTF optimized for efficient transmission and runtime loading, and FBX widely used for animation and model exchange. Scene graphs enable efficient spatial culling by testing bounding volumes hierarchically, allow property inheritance where children adopt parent characteristics unless overridden, support instancing where multiple references share underlying data, and facilitate level streaming for large environments. Modern formats embed metadata including physics properties, navigation hints, interaction behaviors, and custom application data.
  - https://www.web3d.org/specifications/X3D - X3D ISO standard for web3D
  - https://www.khronos.org/collada/ - Collada 3D asset exchange schema
  - https://openusd.org/release/index.html - USD comprehensive documentation
  - https://www.khronos.org/gltf/ - glTF runtime 3D asset delivery

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
