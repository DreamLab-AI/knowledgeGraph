schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#AssetFormatStandards
legacy_uri:: urn:visionclaw:concept:spatial-computing:asset-format-standards
public:: true

# Asset Format Standards
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f695055c925f918e17c644feececdf1515f6d56fab29472d6225b1a47af0bff1",
  "@type": "Page",
  "vc:slug": "asset-format-standards",
  "title": "Asset Format Standards",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:content-portability",
      "vc:label": "Content Portability"
    },
    {
      "@id": "urn:visionflow:linked:conversion-tools",
      "vc:label": "Conversion Tools"
    },
    {
      "@id": "urn:visionflow:linked:cross-platform-assets",
      "vc:label": "Cross-Platform Assets"
    },
    {
      "@id": "urn:visionflow:linked:fbx",
      "vc:label": "FBX"
    },
    {
      "@id": "urn:visionflow:linked:format-compliance",
      "vc:label": "Format Compliance"
    },
    {
      "@id": "urn:visionflow:linked:gl-tf",
      "vc:label": "glTF"
    },
    {
      "@id": "urn:visionflow:linked:khronos-group",
      "vc:label": "Khronos Group"
    },
    {
      "@id": "urn:visionflow:linked:material-x",
      "vc:label": "MaterialX"
    },
    {
      "@id": "urn:visionflow:linked:metaverse-standards-forum",
      "vc:label": "Metaverse Standards Forum"
    },
    {
      "@id": "urn:visionflow:linked:open-usd",
      "vc:label": "OpenUSD"
    },
    {
      "@id": "urn:visionflow:linked:pixar-usd",
      "vc:label": "Pixar USD"
    },
    {
      "@id": "urn:visionflow:linked:tool-interoperability",
      "vc:label": "Tool Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:validation-systems",
      "vc:label": "Validation Systems"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:technical-standards",
      "vc:label": "Technical Standards"
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
      "vc:value": "sha256-12-39601439c7e9"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#AssetFormatStandards"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9780"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Asset Format Standards"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:asset-format-standards"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:asset-format-standards"
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
    "@id": "urn:visionflow:page:f695055c925f918e17c644feececdf1515f6d56fab29472d6225b1a47af0bff1@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:asset-format-standards",
  "@type": "Class",
  "label": "Asset Format Standards",
  "definition": "Asset Format Standards are technical specifications defining file formats, data structures, and interchange protocols for 3D models, textures, animations, and scene descriptions, enabling interoperability between content creation tools, game engines, and metaverse platforms through standards like...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standards",
      "label": "Technical Standards"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:conversion-tools",
        "label": "Conversion Tools"
      },
      {
        "@id": "urn:ngm:class:format-compliance",
        "label": "Format Compliance"
      },
      {
        "@id": "urn:ngm:class:validation-systems",
        "label": "Validation Systems"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:content-portability",
        "label": "Content Portability"
      },
      {
        "@id": "urn:ngm:class:cross-platform-assets",
        "label": "Cross-Platform Assets"
      },
      {
        "@id": "urn:ngm:class:tool-interoperability",
        "label": "Tool Interoperability"
      }
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:asset-format-standards:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f695055c925f918e17c644feececdf1515f6d56fab29472d6225b1a47af0bff1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Content Portability]]",
      "resolved": "urn:visionflow:linked:content-portability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Conversion Tools]]",
      "resolved": "urn:visionflow:linked:conversion-tools",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cross-Platform Assets]]",
      "resolved": "urn:visionflow:linked:cross-platform-assets",
      "kind": "StubLink"
    },
    {
      "raw": "[[FBX]]",
      "resolved": "urn:visionflow:linked:fbx",
      "kind": "StubLink"
    },
    {
      "raw": "[[Format Compliance]]",
      "resolved": "urn:visionflow:linked:format-compliance",
      "kind": "StubLink"
    },
    {
      "raw": "[[glTF]]",
      "resolved": "urn:visionflow:linked:gl-tf",
      "kind": "StubLink"
    },
    {
      "raw": "[[Khronos Group]]",
      "resolved": "urn:visionflow:linked:khronos-group",
      "kind": "StubLink"
    },
    {
      "raw": "[[MaterialX]]",
      "resolved": "urn:visionflow:linked:material-x",
      "kind": "StubLink"
    },
    {
      "raw": "[[Metaverse Standards Forum]]",
      "resolved": "urn:visionflow:linked:metaverse-standards-forum",
      "kind": "StubLink"
    },
    {
      "raw": "[[OpenUSD]]",
      "resolved": "urn:visionflow:linked:open-usd",
      "kind": "StubLink"
    },
    {
      "raw": "[[Pixar USD]]",
      "resolved": "urn:visionflow:linked:pixar-usd",
      "kind": "StubLink"
    },
    {
      "raw": "[[Tool Interoperability]]",
      "resolved": "urn:visionflow:linked:tool-interoperability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Validation Systems]]",
      "resolved": "urn:visionflow:linked:validation-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technical Standards]]",
      "resolved": "urn:visionflow:owl:class:technical-standards",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:f695055c925f918e17c644feececdf1515f6d56fab29472d6225b1a47af0bff1@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Asset Format Standards are technical specifications defining file formats, data structures, and interchange protocols for 3D models, textures, animations, and scene descriptions, enabling interoperability between content creation tools, game engines, and metaverse platforms through standards like glTF, USD, and FBX.

- ### Semantic Classification
  - owl-class:: spatial-computing:AssetFormatStandards
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - bridges-to:: [[Computer Vision]] (ai)
  - is-subclass-of:: [[Technical Standards]]
  - requires:: [[Format Compliance]], [[Conversion Tools]], [[Validation Systems]]
  - enables:: [[Cross-Platform Assets]], [[Tool Interoperability]], [[Content Portability]]

- ### Content

  ### Technical Details
  Key formats include:
  - **glTF**: Khronos Group open standard, "JPEG of 3D," optimized for real-time web and downstream applications
  - **USD (OpenUSD)**: Pixar-developed scene description format for content creation workflows, adopted by Alliance for OpenUSD (Pixar, Adobe, Apple, Autodesk, Nvidia)
  - **FBX**: Autodesk format widely used for complex scenes, character animations, and game development

  ### Industry Initiatives
  - **Metaverse Standards Forum**: 3D Asset Interoperability Domain Group enabling USD/glTF cooperation
  - **Adobe USD Plugins**: Open-source converters between USD and FBX, glTF, OBJ, PLY, STL formats
  - **PBR Alignment**: Coordination between Pixar USD, Khronos glTF PBR, OpenPBR, and MaterialX

  #### Future Directions
  Industry exploring NERFs, Gaussian Splats, and alignment between physically-based rendering approaches across standards.

- ### Provenance
  - sources:: [[glTF]], [[OpenUSD]], [[FBX]], [[Khronos Group]], [[Pixar USD]], [[MaterialX]], [[Metaverse Standards Forum]]
  - migration-date:: 2026-04-26T00:00:00Z
