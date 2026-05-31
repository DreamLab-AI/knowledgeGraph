public:: true

# MaterialX
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:584c83a798f53eeabbbb5b984873655eac78cba68da115d74ed25ca3dce95531",
  "@type": "Page",
  "vc:slug": "material-x",
  "title": "MaterialX",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:shader",
      "vc:label": "Shader"
    },
    {
      "@id": "urn:visionflow:linked:texture-mapping",
      "vc:label": "Texture Mapping"
    },
    {
      "@id": "urn:visionflow:linked:physically-based-rendering",
      "vc:label": "Physically Based Rendering"
    },
    {
      "@id": "urn:visionflow:linked:asset-interoperability",
      "vc:label": "Asset Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:gl-tf",
      "vc:label": "glTF"
    },
    {
      "@id": "urn:visionflow:linked:material-definition",
      "vc:label": "Material Definition"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "MaterialX"
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
  "@id": "urn:ngm:class:material-x",
  "@type": "Class",
  "label": "MaterialX",
  "definition": "MaterialX is an open standard for describing surface and procedural materials, shading networks and look development data in a renderer-independent form for exchange between content creation tools.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:material-definition",
      "label": "Material Definition"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      },
      {
        "@id": "urn:ngm:class:texture-mapping",
        "label": "Texture Mapping"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:physically-based-rendering",
        "label": "Physically Based Rendering"
      },
      {
        "@id": "urn:ngm:class:asset-interoperability",
        "label": "Asset Interoperability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:material-x:cfaf06826e82",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:584c83a798f53eeabbbb5b984873655eac78cba68da115d74ed25ca3dce95531"
  },
  "vc:resolutions": [
    {
      "raw": "[[Shader]]",
      "resolved": "urn:visionflow:linked:shader",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Texture Mapping]]",
      "resolved": "urn:visionflow:linked:texture-mapping",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Physically Based Rendering]]",
      "resolved": "urn:visionflow:linked:physically-based-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Asset Interoperability]]",
      "resolved": "urn:visionflow:linked:asset-interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[glTF]]",
      "resolved": "urn:visionflow:linked:gl-tf",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Material Definition]]",
      "resolved": "urn:visionflow:linked:material-definition",
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
  - MaterialX is an open standard for describing surface and procedural materials, shading networks and look development data in a renderer-independent form for exchange between content creation tools.

- ### Semantic Classification
  - owl-class:: metaverse:MaterialX
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Material Definition]]
  - bridges-to:: [[glTF]]
  - requires:: [[Shader]], [[Texture Mapping]]
  - enables:: [[Physically Based Rendering]], [[Asset Interoperability]]

- ### Content
  - MaterialX captures the full graph of nodes, parameters, textures and shading relationships that define a material, allowing a look to move between applications and renderers without manual reconstruction. It separates the material definition from any specific renderer implementation.
  - Originally developed for film production and now maintained as an open standard, MaterialX is increasingly used alongside USD and glTF to carry rich material data through 3D asset pipelines. It supports physically based shading models so that appearance is preserved consistently across tools.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
