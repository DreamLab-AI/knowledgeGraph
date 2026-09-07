```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d3b66f40b8fb9b5ada655daa1265f3bd635e86650549045757468c8960b45c7a",
  "@type": "Page",
  "vc:slug": "procedural-texture",
  "title": "Procedural Texture",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:dynamic-surface-detail",
      "vc:label": "Dynamic Surface Detail"
    },
    {
      "@id": "urn:visionflow:linked:gpu-shader",
      "vc:label": "GPU Shader"
    },
    {
      "@id": "urn:visionflow:linked:graphics-processing-unit",
      "vc:label": "Graphics Processing Unit"
    },
    {
      "@id": "urn:visionflow:linked:material-system",
      "vc:label": "Material System"
    },
    {
      "@id": "urn:visionflow:linked:mathematical-functions",
      "vc:label": "Mathematical Functions"
    },
    {
      "@id": "urn:visionflow:linked:memory-efficient-texturing",
      "vc:label": "Memory Efficient Texturing"
    },
    {
      "@id": "urn:visionflow:linked:noise-function",
      "vc:label": "Noise Function"
    },
    {
      "@id": "urn:visionflow:linked:pattern-generator",
      "vc:label": "Pattern Generator"
    },
    {
      "@id": "urn:visionflow:linked:procedural-materials",
      "vc:label": "Procedural Materials"
    },
    {
      "@id": "urn:visionflow:linked:resolution-independent-graphics",
      "vc:label": "Resolution Independent Graphics"
    },
    {
      "@id": "urn:visionflow:linked:shader-code",
      "vc:label": "Shader Code"
    },
    {
      "@id": "urn:visionflow:linked:siggraph-graphics-glossary",
      "vc:label": "SIGGRAPH Graphics Glossary"
    },
    {
      "@id": "urn:visionflow:linked:texture-coordinates",
      "vc:label": "Texture Coordinates"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-layer",
      "vc:label": "ComputeLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-application",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:parameter-set",
      "vc:label": "Parameter Set"
    },
    {
      "@id": "urn:visionflow:owl:class:rendering-pipeline",
      "vc:label": "Rendering Pipeline"
    },
    {
      "@id": "urn:visionflow:owl:class:shader-language",
      "vc:label": "Shader Language"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20193"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Procedural Texture"
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
  "@id": "urn:ngm:class:procedural-texture",
  "@type": "Class",
  "label": "Procedural Texture",
  "definition": "Algorithmically generated pattern used to simulate surface detail without stored images, computed on-demand using mathematical functions.",
  "domain": "spatial-computing",
  "maturity": "established",
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
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:noise-function",
        "label": "Noise Function"
      },
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader Code"
      },
      {
        "@id": "urn:ngm:class:parameter-set",
        "label": "Parameter Set"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:material-system",
        "label": "Material System"
      },
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

- ### Definition
  - Algorithmically generated pattern used to simulate surface detail without stored images, computed on-demand using mathematical functions.

- ### Semantic Classification
  - owl-class:: spatial-computing:ProceduralTexture
  - owl-role:: Process
  - owl-inferred:: spatial-computing:VirtualProcess
  - belongs-to-domain:: [[CreativeMediaDomain]]
  - implemented-in-layer:: [[ComputeLayer]]

- ### Relationships
  - has-part:: [[Noise Function]], [[Pattern Generator]], [[Shader Code]], [[Parameter Set]]
  - is-part-of:: [[Material System]], [[Rendering Pipeline]]
  - requires:: [[GPU Shader]], [[Texture Coordinates]], [[Mathematical Functions]]
  - enables:: [[Dynamic Surface Detail]], [[Memory Efficient Texturing]], [[Resolution Independent Graphics]], [[Procedural Materials]]
  - depends-on:: [[Graphics Processing Unit]], [[Shader Language]]

- ### Content
  Procedural Texture — content pending enrichment.

- ### Provenance
  - sources:: [[SIGGRAPH Graphics Glossary]]
  - migration-date:: 2026-04-26T00:00:00Z
