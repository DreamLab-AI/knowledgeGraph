public:: true

# FBX
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4ca6c9353a86c0653164c5761ae14ba1da2706257806cf17596e895034673ae0",
  "@type": "Page",
  "vc:slug": "fbx",
  "title": "FBX",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:computer-graphics",
      "vc:label": "Computer Graphics"
    },
    {
      "@id": "urn:visionflow:linked:skeletal-animation",
      "vc:label": "Skeletal Animation"
    },
    {
      "@id": "urn:visionflow:linked:game-engine",
      "vc:label": "Game Engine"
    },
    {
      "@id": "urn:visionflow:linked:gl-tf",
      "vc:label": "glTF"
    },
    {
      "@id": "urn:visionflow:linked:universal-scene-description",
      "vc:label": "Universal Scene Description"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "FBX"
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
  "@id": "urn:ngm:class:fbx",
  "@type": "Class",
  "label": "FBX",
  "definition": "FBX is a proprietary 3D asset interchange format used to transfer geometry, materials, skeletal rigs and animation between digital content creation tools and game engines.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computer-graphics",
      "label": "Computer Graphics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:computer-graphics",
        "label": "Computer Graphics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:skeletal-animation",
        "label": "Skeletal Animation"
      },
      {
        "@id": "urn:ngm:class:game-engine",
        "label": "Game Engine"
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
  "@id": "urn:visionflow:annotation:link-resolutions:fbx:932153c31e61",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4ca6c9353a86c0653164c5761ae14ba1da2706257806cf17596e895034673ae0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Computer Graphics]]",
      "resolved": "urn:visionflow:linked:computer-graphics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Skeletal Animation]]",
      "resolved": "urn:visionflow:linked:skeletal-animation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Game Engine]]",
      "resolved": "urn:visionflow:linked:game-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[glTF]]",
      "resolved": "urn:visionflow:linked:gl-tf",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Universal Scene Description]]",
      "resolved": "urn:visionflow:linked:universal-scene-description",
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
  - FBX is a proprietary 3D asset interchange format used to transfer geometry, materials, skeletal rigs and animation between digital content creation tools and game engines.

- ### Semantic Classification
  - owl-class:: metaverse:FBX
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Computer Graphics]]
  - bridges-to:: [[glTF]], [[Universal Scene Description]]
  - requires:: [[Computer Graphics]]
  - enables:: [[Skeletal Animation]], [[Game Engine]]

- ### Content
  - FBX stores a scene graph of nodes carrying transforms, mesh data, skinning weights and keyframed animation tracks. It is widely supported as an exchange path between modelling packages and runtime engines, though its binary specification is controlled by a single vendor rather than an open standards body.
  - In metaverse and XR production FBX commonly serves as the bridge from authoring tools into Unity and Unreal, after which assets are often re-exported to open formats such as glTF for runtime delivery. Its handling of skeletal rigs makes it a frequent choice for character and avatar pipelines.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
