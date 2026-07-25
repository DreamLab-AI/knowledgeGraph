public:: true

# Node Based Editor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c1b421f4a68765c3ecab6cdbb09b745cc342787b41f9c19f26892c1e65392407",
  "@type": "Page",
  "vc:slug": "node-based-editor",
  "title": "Node Based Editor",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9170"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Node Based Editor"
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
  "@id": "urn:ngm:class:node-based-editor",
  "@type": "Class",
  "label": "Node Based Editor",
  "definition": "A visual authoring tool that represents computational logic, material properties, or content workflows as directed graphs of interconnected nodes and edges, enabling non-linear dataflow programming. Node-based editors are widely used in game engines, VFX pipelines, and spatial computing tools for shader authoring, procedural geometry generation, and real-time behaviour scripting.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:shader", "label": "Shader"},
      {"@id": "urn:ngm:class:game-engine", "label": "Game Engine"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:procedural-generation", "label": "Procedural Generation"},
      {"@id": "urn:ngm:class:world-building", "label": "World Building"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:user-interface", "label": "User Interface"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:3-d-asset", "label": "3D Asset"},
      {"@id": "urn:ngm:class:rendering-engine", "label": "Rendering Engine"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:node-based-editor:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c1b421f4a68765c3ecab6cdbb09b745cc342787b41f9c19f26892c1e65392407"
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
  - A visual authoring tool that represents computational logic, material properties, or content workflows as directed graphs of interconnected nodes and edges, enabling non-linear dataflow programming. Node-based editors are widely used in game engines, VFX pipelines, and spatial computing tools for shader authoring, procedural geometry generation, and real-time behaviour scripting.

- ### Semantic Classification
  - owl-class:: spatial-computing:NodeBasedEditor
  - owl-role:: Concept

- ### Relationships
  - **uses** [[Shader]] — shader graphs are the most common domain for node-based editing in real-time graphics
  - **uses** [[Game Engine]] — major game engines (Unreal, Unity, Godot) include node-based editors as core tools
  - **enables** [[Procedural Generation]] — node graphs are the primary authoring method for procedural content
  - **enables** [[World Building]] — node-based tools accelerate environment and asset authoring workflows
  - **hasPart** [[User Interface]] — the graph canvas and node palette comprise the UI of the editor
  - **supports** [[3D Asset]] — node-based editors produce or modify 3D assets and their materials
  - **supports** [[Rendering Engine]] — the rendering engine executes the shader and material graphs authored in node editors

- ### Content
  # NodeBasedEditor
  NodeBasedEditor represents a key component in Metaverse infrastructure and technology. Research: NodeBasedEditor - visual programming, node graphs, shader editors, material editors
  - https://www.khronos.org/ - Industry standards
  - https://www.w3.org/TR/ - Web standards
  - https://developer.mozilla.org/ - Technical documentation

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
