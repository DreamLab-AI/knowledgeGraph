public:: true

# TELE-025-microsoft-hololens
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2517d25dc6a9130d160505796d109de3625c6cfae0bae22a92b761307be24f2e",
  "@type": "Page",
  "vc:slug": "tele-025-microsoft-hololens",
  "title": "TELE-025-microsoft-hololens",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:spatial-mesh",
      "vc:label": "Spatial Mesh"
    },
    {
      "@id": "urn:visionflow:linked:spatial-anchors",
      "vc:label": "Spatial Anchors"
    },
    {
      "@id": "urn:visionflow:linked:mixed-reality",
      "vc:label": "Mixed Reality"
    },
    {
      "@id": "urn:visionflow:linked:head-mounted-display",
      "vc:label": "Head-Mounted Display"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "TELE-025-microsoft-hololens"
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
  "@id": "urn:ngm:class:tele-025-microsoft-hololens",
  "@type": "Class",
  "label": "TELE-025-microsoft-hololens",
  "definition": "Microsoft HoloLens is a self-contained mixed reality head-mounted display that overlays interactive holographic content onto the wearer's view of the real world.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:head-mounted-display",
      "label": "Head-Mounted Display"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:spatial-mesh",
        "label": "Spatial Mesh"
      },
      {
        "@id": "urn:ngm:class:spatial-anchors",
        "label": "Spatial Anchors"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
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
  "@id": "urn:visionflow:annotation:link-resolutions:tele-025-microsoft-hololens:c7afd05b0c2d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2517d25dc6a9130d160505796d109de3625c6cfae0bae22a92b761307be24f2e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Spatial Mesh]]",
      "resolved": "urn:visionflow:linked:spatial-mesh",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Anchors]]",
      "resolved": "urn:visionflow:linked:spatial-anchors",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mixed Reality]]",
      "resolved": "urn:visionflow:linked:mixed-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Head-Mounted Display]]",
      "resolved": "urn:visionflow:linked:head-mounted-display",
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
  - Microsoft HoloLens is a self-contained mixed reality head-mounted display that overlays interactive holographic content onto the wearer's view of the real world.

- ### Semantic Classification
  - owl-class:: metaverse:TELE025microsofthololens
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Head-Mounted Display]]
  - bridges-to:: [[Mixed Reality]]
  - requires:: [[Spatial Mesh]], [[Spatial Anchors]]
  - enables:: [[Mixed Reality]]

- ### Content
  - Microsoft HoloLens is an untethered mixed reality headset developed by Microsoft that projects holographic imagery onto see-through optics so that virtual objects appear placed within the user's physical environment. It performs spatial mapping, hand and eye tracking and on-device computation without an attached PC.
  - The device supports gaze, gesture and voice input and anchors holograms to mapped surfaces so content stays fixed in space as the user moves. It is used mainly in industrial, medical and enterprise settings for tasks such as remote assistance, training and design visualisation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
