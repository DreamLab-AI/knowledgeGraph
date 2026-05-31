public:: true

# Blender
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c9520118c9723e579af605085fb70bafe5027520752544b465da3782c4927e74",
  "@type": "Page",
  "vc:slug": "blender",
  "title": "Blender",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:open-source-software",
      "vc:label": "Open Source Software"
    },
    {
      "@id": "urn:visionflow:linked:animation",
      "vc:label": "Animation"
    },
    {
      "@id": "urn:visionflow:linked:game-engine",
      "vc:label": "Game Engine"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Blender"
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
  "@id": "urn:ngm:class:blender",
  "@type": "Class",
  "label": "Blender",
  "definition": "Blender is a free and open-source 3D creation suite supporting modelling, animation, rendering, and related workflows.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:open-source-software",
      "label": "Open Source Software"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:open-source-software",
        "label": "Open Source Software"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:animation",
        "label": "Animation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:blender:5a80e4ba8e6d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c9520118c9723e579af605085fb70bafe5027520752544b465da3782c4927e74"
  },
  "vc:resolutions": [
    {
      "raw": "[[Open Source Software]]",
      "resolved": "urn:visionflow:linked:open-source-software",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Animation]]",
      "resolved": "urn:visionflow:linked:animation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Game Engine]]",
      "resolved": "urn:visionflow:linked:game-engine",
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
  - Blender is a free and open-source 3D creation suite supporting modelling, animation, rendering, and related workflows.

- ### Semantic Classification
  - owl-class:: metaverse:Blender
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Open Source Software]]
  - bridges-to:: [[Game Engine]]
  - requires:: [[Open Source Software]]
  - enables:: [[Animation]]

- ### Content
  - Blender is an open-source application for creating 3D content, covering modelling, sculpting, texturing, animation, simulation, and rendering.
  - It is used across visual effects, game asset creation, and animation, and supports scripting for automation and extension.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
