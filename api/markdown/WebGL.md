public:: true

# WebGL
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c9c0641ffb79c0a0aa28f27a4650757e288878d12409bb3aca1c4eebd64b6150",
  "@type": "Page",
  "vc:slug": "web-gl",
  "title": "WebGL",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gpu",
      "vc:label": "GPU"
    },
    {
      "@id": "urn:visionflow:linked:real-time-rendering",
      "vc:label": "Real-Time Rendering"
    },
    {
      "@id": "urn:visionflow:linked:computer-graphics",
      "vc:label": "Computer Graphics"
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
      "vc:value": "WebGL"
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
  "@id": "urn:ngm:class:web-gl",
  "@type": "Class",
  "label": "WebGL",
  "definition": "WebGL is a JavaScript API for rendering interactive 2D and 3D graphics in web browsers without plug-ins, based on OpenGL ES. It executes on the GPU through the HTML canvas element.",
  "domain": "computer-graphics",
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
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
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
  "@id": "urn:visionflow:annotation:link-resolutions:web-gl:57f7cff16f31",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c9c0641ffb79c0a0aa28f27a4650757e288878d12409bb3aca1c4eebd64b6150"
  },
  "vc:resolutions": [
    {
      "raw": "[[GPU]]",
      "resolved": "urn:visionflow:linked:gpu",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Rendering]]",
      "resolved": "urn:visionflow:linked:real-time-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Graphics]]",
      "resolved": "urn:visionflow:linked:computer-graphics",
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
  - WebGL is a JavaScript API for rendering interactive 2D and 3D graphics in web browsers without plug-ins, based on OpenGL ES. It executes on the GPU through the HTML canvas element.

- ### Semantic Classification
  - owl-class:: computer-graphics:WebGL
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Graphics API]]
  - bridges-to:: [[Computer Graphics]]
  - requires:: [[GPU]]
  - enables:: [[Real-Time Rendering]]

- ### Content
  - WebGL is a cross-platform graphics API exposed to JavaScript that lets web pages render hardware-accelerated 2D and 3D scenes inside a canvas element. Derived from OpenGL ES, it gives developers programmable shaders and direct GPU access in the browser without external plug-ins.
  - It became the foundation for browser-based games, data visualisation and 3D viewers, and underlies higher-level libraries and engines. Its successor WebGPU offers a more modern interface, but WebGL remains widely supported across browsers.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
