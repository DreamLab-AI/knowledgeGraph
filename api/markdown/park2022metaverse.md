public:: true

# park2022metaverse
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:462522d53e198aafde5416edd0143c951a22a006f6d65d6537ac39b223dbc09e",
  "@type": "Page",
  "vc:slug": "park-2022-metaverse",
  "title": "park2022metaverse",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:metaverse",
      "vc:label": "Metaverse"
    },
    {
      "@id": "urn:visionflow:linked:virtual-world",
      "vc:label": "Virtual World"
    },
    {
      "@id": "urn:visionflow:linked:spatial-computing",
      "vc:label": "Spatial Computing"
    },
    {
      "@id": "urn:visionflow:linked:mixed-reality",
      "vc:label": "Mixed Reality"
    },
    {
      "@id": "urn:visionflow:linked:metaverse-domain",
      "vc:label": "Metaverse Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "park2022metaverse"
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
  "@id": "urn:ngm:class:park-2022-metaverse",
  "@type": "Class",
  "label": "park2022metaverse",
  "definition": "park2022metaverse is a citation key referencing a 2022 survey of the metaverse that reviews enabling technologies, applications and open challenges across hardware, networking and user interaction.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:metaverse-domain",
      "label": "Metaverse Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:virtual-world",
        "label": "Virtual World"
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
  "@id": "urn:visionflow:annotation:link-resolutions:park-2022-metaverse:a387ef73e2dd",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:462522d53e198aafde5416edd0143c951a22a006f6d65d6537ac39b223dbc09e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Metaverse]]",
      "resolved": "urn:visionflow:linked:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual World]]",
      "resolved": "urn:visionflow:linked:virtual-world",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Computing]]",
      "resolved": "urn:visionflow:linked:spatial-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mixed Reality]]",
      "resolved": "urn:visionflow:linked:mixed-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse Domain]]",
      "resolved": "urn:visionflow:linked:metaverse-domain",
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
  - park2022metaverse is a citation key referencing a 2022 survey of the metaverse that reviews enabling technologies, applications and open challenges across hardware, networking and user interaction.

- ### Semantic Classification
  - owl-class:: metaverse:park2022metaverse
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Metaverse Domain]]
  - bridges-to:: [[Spatial Computing]], [[Mixed Reality]]
  - requires:: [[Metaverse]]
  - enables:: [[Virtual World]]

- ### Content
  - This reference is a survey treating the metaverse as a convergence of immersive interfaces, persistent virtual worlds, networking and content technologies. It organises the field into enabling layers and identifies research challenges.
  - As a citation it anchors claims about metaverse architecture and terminology within the graph, connecting the metaverse concept to spatial computing and mixed reality.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
