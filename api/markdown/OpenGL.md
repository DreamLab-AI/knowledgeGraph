public:: true

# OpenGL
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:86cb3b335eae6f7ea90793d62e5deb0babf0f312863a06ca53c79237a29558fa",
  "@type": "Page",
  "vc:slug": "open-gl",
  "title": "OpenGL",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gpu",
      "vc:label": "GPU"
    },
    {
      "@id": "urn:visionflow:linked:shader-language",
      "vc:label": "Shader Language"
    },
    {
      "@id": "urn:visionflow:linked:3-d-rendering",
      "vc:label": "3D Rendering"
    },
    {
      "@id": "urn:visionflow:linked:rasterization",
      "vc:label": "Rasterization"
    },
    {
      "@id": "urn:visionflow:linked:vulkan",
      "vc:label": "Vulkan"
    },
    {
      "@id": "urn:visionflow:linked:graphics-api",
      "vc:label": "Graphics API"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "OpenGL"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-gl",
  "@type": "Class",
  "label": "OpenGL",
  "definition": "OpenGL is a cross-platform graphics API for rendering 2D and 3D vector graphics, providing a standardised interface to the rendering capabilities of graphics hardware.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:graphics-api",
      "label": "Graphics API"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:shader-language",
        "label": "Shader Language"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:3-d-rendering",
        "label": "3D Rendering"
      },
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:open-gl:8ce0b6fe5b87",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:86cb3b335eae6f7ea90793d62e5deb0babf0f312863a06ca53c79237a29558fa"
  },
  "vc:resolutions": [
    {
      "raw": "[[GPU]]",
      "resolved": "urn:visionflow:linked:gpu",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Shader Language]]",
      "resolved": "urn:visionflow:linked:shader-language",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[3D Rendering]]",
      "resolved": "urn:visionflow:linked:3-d-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rasterization]]",
      "resolved": "urn:visionflow:linked:rasterization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Vulkan]]",
      "resolved": "urn:visionflow:linked:vulkan",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Graphics API]]",
      "resolved": "urn:visionflow:linked:graphics-api",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - OpenGL is a cross-platform graphics API for rendering 2D and 3D vector graphics, providing a standardised interface to the rendering capabilities of graphics hardware.

- ### Semantic Classification
  - owl-class:: general:OpenGL
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Graphics API]]
  - bridges-to:: [[Vulkan]]
  - requires:: [[GPU]], [[Shader Language]]
  - enables:: [[3D Rendering]], [[Rasterization]]

- ### Content
  - OpenGL defines a set of functions for submitting geometry, configuring state and invoking programmable shaders, abstracting over the underlying graphics hardware so that applications run across vendors and platforms. It uses a rasterisation pipeline with programmable vertex and fragment stages.
  - Maintained by the Khronos Group, OpenGL has been a long-standing foundation for graphics applications and remains widely supported. Its lower-level successor Vulkan offers more explicit control over hardware for performance-critical use.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
