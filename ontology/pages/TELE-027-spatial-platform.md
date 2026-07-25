public:: true

# TELE-027-spatial-platform
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:694d25f73a9d7736c65961605de6348d7d4e3d7fded1dae7d7da5018bd309302",
  "@type": "Page",
  "vc:slug": "tele-027-spatial-platform",
  "title": "TELE-027-spatial-platform",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:avatar-system",
      "vc:label": "Avatar System"
    },
    {
      "@id": "urn:visionflow:linked:remote-collaboration",
      "vc:label": "Remote Collaboration"
    },
    {
      "@id": "urn:visionflow:linked:metaverse",
      "vc:label": "Metaverse"
    },
    {
      "@id": "urn:visionflow:linked:telepresence",
      "vc:label": "Telepresence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "TELE-027-spatial-platform"
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
  "@id": "urn:ngm:class:tele-027-spatial-platform",
  "@type": "Class",
  "label": "TELE-027-spatial-platform",
  "definition": "Spatial is a collaboration platform that hosts virtual rooms where participants meet as avatars to share documents, 3D models and media for meetings, events and presentations.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:telepresence",
      "label": "Telepresence"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:avatar-system",
        "label": "Avatar System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:remote-collaboration",
        "label": "Remote Collaboration"
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
  "@id": "urn:visionflow:annotation:link-resolutions:tele-027-spatial-platform:42d44f9f2c51",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:694d25f73a9d7736c65961605de6348d7d4e3d7fded1dae7d7da5018bd309302"
  },
  "vc:resolutions": [
    {
      "raw": "[[Avatar System]]",
      "resolved": "urn:visionflow:linked:avatar-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Remote Collaboration]]",
      "resolved": "urn:visionflow:linked:remote-collaboration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse]]",
      "resolved": "urn:visionflow:linked:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telepresence]]",
      "resolved": "urn:visionflow:linked:telepresence",
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
  - Spatial is a collaboration platform that hosts virtual rooms where participants meet as avatars to share documents, 3D models and media for meetings, events and presentations.

- ### Semantic Classification
  - owl-class:: metaverse:TELE027spatialplatform
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Telepresence]]
  - bridges-to:: [[Metaverse]]
  - requires:: [[Avatar System]]
  - enables:: [[Remote Collaboration]]

- ### Content
  - Spatial is a web and headset accessible platform that provides persistent virtual rooms in which users appear as avatars and can share screens, images, video and 3D objects. It targets meetings, exhibitions and social events that benefit from a sense of shared place.
  - The platform supports access from browsers, mobile devices and mixed reality headsets, rendering a common scene state to all participants. Avatar representation can range from camera-derived likenesses to stylised models depending on the access device.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
