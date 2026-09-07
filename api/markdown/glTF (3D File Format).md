```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e0266ab1ae8c8f59ff4549329c17dff061617916a87c9f6770b2a02d73b94dd4",
  "@type": "Page",
  "vc:slug": "gl-tf-3-d-file-format",
  "title": "glTF (3D File Format)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-asset-exchange",
      "vc:label": "3D Asset Exchange"
    },
    {
      "@id": "urn:visionflow:linked:3-d-content-pipeline",
      "vc:label": "3D Content Pipeline"
    },
    {
      "@id": "urn:visionflow:linked:animation-channels",
      "vc:label": "Animation Channels"
    },
    {
      "@id": "urn:visionflow:linked:asset-interchange-system",
      "vc:label": "Asset Interchange System"
    },
    {
      "@id": "urn:visionflow:linked:base64-encoding",
      "vc:label": "Base64 Encoding"
    },
    {
      "@id": "urn:visionflow:linked:content-interoperability",
      "vc:label": "Content Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:cross-platform-compatibility",
      "vc:label": "Cross-Platform Compatibility"
    },
    {
      "@id": "urn:visionflow:linked:ewg-msf-taxonomy",
      "vc:label": "EWG/MSF taxonomy"
    },
    {
      "@id": "urn:visionflow:linked:json-schema",
      "vc:label": "JSON Schema"
    },
    {
      "@id": "urn:visionflow:linked:khronos-group",
      "vc:label": "Khronos Group"
    },
    {
      "@id": "urn:visionflow:linked:material-definition",
      "vc:label": "Material Definition"
    },
    {
      "@id": "urn:visionflow:linked:mesh-data",
      "vc:label": "Mesh Data"
    },
    {
      "@id": "urn:visionflow:linked:mime-types",
      "vc:label": "MIME Types"
    },
    {
      "@id": "urn:visionflow:linked:runtime-rendering",
      "vc:label": "Runtime Rendering"
    },
    {
      "@id": "urn:visionflow:linked:texture-references",
      "vc:label": "Texture References"
    },
    {
      "@id": "urn:visionflow:linked:uri-specification",
      "vc:label": "URI Specification"
    },
    {
      "@id": "urn:visionflow:owl:class:binary-buffer",
      "vc:label": "Binary Buffer"
    },
    {
      "@id": "urn:visionflow:owl:class:binary-encoding",
      "vc:label": "Binary Encoding"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-application",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "DataLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:graphics-api",
      "vc:label": "Graphics API"
    },
    {
      "@id": "urn:visionflow:owl:class:sc-interaction",
      "vc:label": "InteractionDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:scene-graph",
      "vc:label": "Scene Graph"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20110"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "glTF (3D File Format)"
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
  "@id": "urn:ngm:class:gl-tf-3-d-file-format",
  "@type": "Class",
  "label": "glTF (3D File Format)",
  "definition": "A royalty-free, open-standard 3D asset transmission format developed by Khronos Group that efficiently specifies scene structure, geometry, materials, animations, and other properties for real-time rendering.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:material-definition",
        "label": "Material Definition"
      },
      {
        "@id": "urn:ngm:class:mesh-data",
        "label": "Mesh Data"
      },
      {
        "@id": "urn:ngm:class:binary-buffer",
        "label": "Binary Buffer"
      },
      {
        "@id": "urn:ngm:class:scene-graph",
        "label": "Scene Graph"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format-schema",
        "label": "JSON Schema"
      },
      {
        "@id": "urn:ngm:class:binary-encoding",
        "label": "Binary Encoding"
      },
      {
        "@id": "urn:ngm:class:graphics-api",
        "label": "Graphics API"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:content-interoperability",
        "label": "Content Interoperability"
      },
      {
        "@id": "urn:ngm:class:cross-platform-compatibility",
        "label": "Cross-Platform Compatibility"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:3-d-content-pipeline",
        "label": "3D Content Pipeline"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R4SemanticSimilarity"
  }
}
```

- ### Definition
  - A royalty-free, open-standard 3D asset transmission format developed by Khronos Group that efficiently specifies scene structure, geometry, materials, animations, and other properties for real-time rendering.

- ### Semantic Classification
  - owl-class:: spatial-computing:glTFFormat
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[CreativeMediaDomain]], [[InteractionDomain]]
  - implemented-in-layer:: [[DataLayer]]

- ### Relationships
  - has-part:: [[Scene Graph]], [[Mesh Data]], [[Material Definition]], [[Texture References]], [[Animation Channels]], [[Binary Buffer]]
  - is-part-of:: [[3D Content Pipeline]], [[Asset Interchange System]]
  - requires:: [[JSON Schema]], [[Binary Encoding]], [[Graphics API]]
  - enables:: [[3D Asset Exchange]], [[Runtime Rendering]], [[Cross-Platform Compatibility]], [[Content Interoperability]]
  - depends-on:: [[URI Specification]], [[Base64 Encoding]], [[MIME Types]]

- ### Content
  glTF (3D File Format) — content pending enrichment.

- ### Provenance
  - sources:: [[Khronos Group]], [[EWG/MSF taxonomy]]
  - migration-date:: 2026-04-26T00:00:00Z
