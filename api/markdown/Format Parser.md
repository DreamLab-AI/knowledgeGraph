schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#FormatParser
legacy_uri:: urn:visionclaw:concept:spatial-computing:format-parser
public:: true

# Format Parser
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a4c563bbff1744fb2c273d440bc030cc16042c18d99f8e3d7b0a1a487f7540c2",
  "@type": "Page",
  "vc:slug": "format-parser",
  "title": "Format Parser",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cross-platform-content",
      "vc:label": "Cross-Platform Content"
    },
    {
      "@id": "urn:visionflow:owl:class:data-processing",
      "vc:label": "Data Processing"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
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
      "vc:value": "sha256-12-8ec45d4a2af0"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#FormatParser"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9902"
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
      "vc:value": "Format Parser"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:format-parser"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:format-parser"
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
    "@id": "urn:visionflow:page:a4c563bbff1744fb2c273d440bc030cc16042c18d99f8e3d7b0a1a487f7540c2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:format-parser",
  "@type": "Class",
  "label": "Format Parser",
  "definition": "Software components that interpret and convert various 3D asset file formats into internal representations for metaverse platforms, enabling interoperability between content creation tools and runtime environments whilst preserving geometry, materials, animations, and metadata.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-processing",
      "label": "Data Processing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:cross-platform-content",
        "label": "Cross-Platform Content"
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
  "@id": "urn:visionflow:annotation:link-resolutions:format-parser:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a4c563bbff1744fb2c273d440bc030cc16042c18d99f8e3d7b0a1a487f7540c2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cross-Platform Content]]",
      "resolved": "urn:visionflow:linked:cross-platform-content",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Processing]]",
      "resolved": "urn:visionflow:owl:class:data-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:a4c563bbff1744fb2c273d440bc030cc16042c18d99f8e3d7b0a1a487f7540c2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Software components that interpret and convert various 3D asset file formats (glTF, USD, FBX, OBJ) into internal representations for metaverse platforms, enabling interoperability between content creation tools and runtime environments whilst preserving geometry, materials, animations, and metadata.

- ### Semantic Classification
  - owl-class:: spatial-computing:FormatParser
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Data Processing]]
  - enables:: [[Cross-Platform Content]]

- ### Content

  ## Supported Formats

  ### Industry Standards

  #### glTF (GL Transmission Format)
  - Khronos Group standard for 3D scenes
  - JSON-based with binary geometry data
  - Optimised for web and real-time applications
  - Widely adopted in metaverse platforms

  #### USD (Universal Scene Description)
  - Pixar-developed scene description format
  - Compositional and non-destructive
  - OpenUSD initiative for industry adoption
  - Digital twin and simulation support

  #### FBX (Filmbox)
  - Autodesk proprietary format
  - Industry standard for animation
  - Skeletal and morph target support
  - Wide tool compatibility

  #### OBJ (Wavefront Object)
  - Simple text-based geometry format
  - Broad legacy support
  - Material library (.mtl) companion files
  - Limited animation support

  ### Emerging Formats
  - VRM (Virtual Reality Model) for avatars
  - USDZ (Apple's USD variant)
  - 3D Tiles for geospatial data

  ## Parsing Pipeline

  ### Input Processing
  - File format detection
  - Schema validation
  - Binary data extraction
  - Metadata parsing

  ### Geometry Processing
  - Vertex buffer construction
  - Index buffer generation
  - Normal and tangent calculation
  - UV coordinate mapping

  ### Material Processing
  - PBR (Physically Based Rendering) material extraction
  - Texture reference resolution
  - Shader property mapping
  - Material graph interpretation

  ### Animation Processing
  - Skeleton hierarchy extraction
  - Animation curve parsing
  - Blend shape target loading
  - Animation clip segmentation

  ## Interoperability Challenges

  ### Format Conversion Issues
  - Material system differences
  - Coordinate system variations
  - Animation representation differences
  - Metadata loss during conversion

  ### Best Practices
  - Preserve original data where possible
  - Document conversion limitations
  - Support format versioning
  - Validate output integrity

  ## Applications

  ### Content Creation
  - Asset import/export pipelines
  - Format translation tools
  - Batch processing systems

  ### Runtime Systems
  - Real-time asset loading
  - Streaming content delivery
  - LOD format handling
  - Compression support

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
