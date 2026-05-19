schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#3dFileFormat
legacy_uri:: urn:visionclaw:concept:spatial-computing:3d-file-format
public:: true

# 3D File Format
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a177c110d5656c1775cea5fe0dc71cb4872f3b28ffe36bb528a206ae64b5aa43",
  "@type": "Page",
  "vc:slug": "3-d-file-format",
  "title": "3D File Format",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-rendering",
      "vc:label": "3D Rendering"
    },
    {
      "@id": "urn:visionflow:linked:animation-keyframes",
      "vc:label": "Animation Keyframes"
    },
    {
      "@id": "urn:visionflow:linked:asset-pipeline",
      "vc:label": "Asset Pipeline"
    },
    {
      "@id": "urn:visionflow:linked:cross-platform-asset-exchange",
      "vc:label": "Cross-Platform Asset Exchange"
    },
    {
      "@id": "urn:visionflow:linked:gl-tf",
      "vc:label": "glTF"
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
      "@id": "urn:visionflow:owl:class:3-d-model",
      "vc:label": "3D Model"
    },
    {
      "@id": "urn:visionflow:owl:class:data-format-standard",
      "vc:label": "Data Format Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-asset-management",
      "vc:label": "Digital Asset Management"
    },
    {
      "@id": "urn:visionflow:owl:class:interoperability",
      "vc:label": "Interoperability"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-998d6c33672d"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#3dFileFormat"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9502"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T20:30:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "3D File Format"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:3d-file-format"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:3d-file-format"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:a177c110d5656c1775cea5fe0dc71cb4872f3b28ffe36bb528a206ae64b5aa43@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:3-d-file-format",
  "@type": "Class",
  "label": "3D File Format",
  "definition": "3D File Formats are standardised container structures for encoding three-dimensional geometric data, textures, materials, animations, and metadata.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-format-standard",
      "label": "Data Format Standard"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:animation-keyframes",
        "label": "Animation Keyframes"
      },
      {
        "@id": "urn:ngm:class:material-definition",
        "label": "Material Definition"
      },
      {
        "@id": "urn:ngm:class:mesh-data",
        "label": "Mesh Data"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:3-d-rendering",
        "label": "3D Rendering"
      },
      {
        "@id": "urn:ngm:class:cross-platform-asset-exchange",
        "label": "Cross-Platform Asset Exchange"
      },
      {
        "@id": "urn:ngm:class:digital-asset-management",
        "label": "Digital Asset Management"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:3-d-file-format:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a177c110d5656c1775cea5fe0dc71cb4872f3b28ffe36bb528a206ae64b5aa43"
  },
  "vc:resolutions": [
    {
      "raw": "[[3D Rendering]]",
      "resolved": "urn:visionflow:linked:3-d-rendering",
      "kind": "StubLink"
    },
    {
      "raw": "[[Animation Keyframes]]",
      "resolved": "urn:visionflow:linked:animation-keyframes",
      "kind": "StubLink"
    },
    {
      "raw": "[[Asset Pipeline]]",
      "resolved": "urn:visionflow:linked:asset-pipeline",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cross-Platform Asset Exchange]]",
      "resolved": "urn:visionflow:linked:cross-platform-asset-exchange",
      "kind": "StubLink"
    },
    {
      "raw": "[[glTF]]",
      "resolved": "urn:visionflow:linked:gl-tf",
      "kind": "StubLink"
    },
    {
      "raw": "[[Material Definition]]",
      "resolved": "urn:visionflow:linked:material-definition",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mesh Data]]",
      "resolved": "urn:visionflow:linked:mesh-data",
      "kind": "StubLink"
    },
    {
      "raw": "[[3D Model]]",
      "resolved": "urn:visionflow:owl:class:3-d-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Format Standard]]",
      "resolved": "urn:visionflow:owl:class:data-format-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset Management]]",
      "resolved": "urn:visionflow:owl:class:digital-asset-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interoperability]]",
      "resolved": "urn:visionflow:owl:class:interoperability",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:a177c110d5656c1775cea5fe0dc71cb4872f3b28ffe36bb528a206ae64b5aa43@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - 3D File Formats are standardised container structures for encoding three-dimensional geometric data, textures, materials, animations, and metadata. Common formats include [[glTF]] (GL Transmission Format), FBX, OBJ, and USD, each optimised for specific use cases such as real-time rendering, interoperability, or archival preservation in spatial computing environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:3DFileFormat
  - owl-role:: concept

- ### Relationships
  - is-subclass-of:: [[Data Format Standard]]
  - bridges-to:: [[3D Model]], [[Asset Pipeline]], [[Interoperability]]
  - enables:: [[Cross-Platform Asset Exchange]], [[3D Rendering]], [[Digital Asset Management]]
  - requires:: [[Mesh Data]], [[Material Definition]], [[Animation Keyframes]]

- ### Content

  ## Overview

  3D File Formats serve as critical interchange standards enabling asset portability across development tools, rendering engines, and platforms. Each format balances file size, fidelity, rendering efficiency, and supported features.

  ## Common Formats
  - **glTF**: Optimised for web and real-time applications, providing efficient streaming
  - **FBX**: Industry standard for animation and rigging workflows
  - **OBJ**: Simple text-based format for geometric data interchange
  - **USD**: Pixar's universal format for complex, layered virtual environments

  #### Related Concepts
  - [[3D Model]], [[Mesh Data]], [[Material Definition]], [[Asset Pipeline]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
