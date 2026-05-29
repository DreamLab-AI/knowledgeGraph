public:: true

# Render Target
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:404967b77b4dfdbe9db75a289128e4f68b185af8e22c3583b9823b4f8e21db27",
  "@type": "Page",
  "vc:slug": "render-target",
  "title": "Render Target",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9220"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Render Target"
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
  "@id": "urn:ngm:class:render-target",
  "@type": "Class",
  "label": "Render Target",
  "definition": "A memory buffer or texture surface to which a GPU writes the output of a rendering pass, including the default framebuffer displayed on screen and off-screen targets used for post-processing effects, shadow maps, reflections, and multi-pass rendering in real-time graphics pipelines.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    },
    {
      "@id": "urn:ngm:class:render-pipeline",
      "label": "Render Pipeline"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:gpu-compute",
        "label": "GPU Compute"
      },
      {
        "@id": "urn:ngm:class:compute-shader",
        "label": "Compute Shader"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:pixel-shader",
        "label": "Pixel Shader"
      },
      {
        "@id": "urn:ngm:class:vertex-shader",
        "label": "Vertex Shader"
      },
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:real-time-rendering-pipeline",
        "label": "Real-Time Rendering Pipeline"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:render-target:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:404967b77b4dfdbe9db75a289128e4f68b185af8e22c3583b9823b4f8e21db27"
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
  - A memory buffer or texture surface to which a GPU writes the output of a rendering pass, including the default framebuffer displayed on screen and off-screen targets used for post-processing effects, shadow maps, reflections, and multi-pass rendering in real-time graphics pipelines.

- ### Semantic Classification
  - owl-class:: spatial-computing:RenderTarget
  - owl-role:: Concept

- ### Relationships
  - Part Of: [[Real-Time Rendering Pipeline]]
  - Uses: [[GPU Compute]]
  - Uses: [[Compute Shader]]
  - Related To: [[Pixel Shader]]
  - Related To: [[Vertex Shader]]
  - Related To: [[Shader]]

- ### Content
  # RenderTarget
  RenderTarget represents a key component in Metaverse infrastructure and technology. Research: RenderTarget - framebuffers, render textures, off-screen rendering
  - https://www.khronos.org/ - Industry standards
  - https://www.w3.org/TR/ - Web standards
  - https://developer.mozilla.org/ - Technical documentation

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
