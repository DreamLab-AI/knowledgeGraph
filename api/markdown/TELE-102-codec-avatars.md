public:: true

# TELE-102-codec-avatars
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:986ed80805be2d2c5013912d9f7c408ffb3ba031cfc8f4b9f364c564a3bbccd4",
  "@type": "Page",
  "vc:slug": "tele-102-codec-avatars",
  "title": "TELE-102-codec-avatars",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:neural-rendering",
      "vc:label": "Neural Rendering"
    },
    {
      "@id": "urn:visionflow:linked:volumetric-capture",
      "vc:label": "Volumetric Capture"
    },
    {
      "@id": "urn:visionflow:linked:telepresence",
      "vc:label": "Telepresence"
    },
    {
      "@id": "urn:visionflow:linked:avatar-system",
      "vc:label": "Avatar System"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "TELE-102-codec-avatars"
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
  "@id": "urn:ngm:class:tele-102-codec-avatars",
  "@type": "Class",
  "label": "TELE-102-codec-avatars",
  "definition": "Codec Avatars are a research effort by Meta to produce photorealistic, real-time avatars of people that are learned from capture data and driven by sensors to reproduce expression and appearance.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:avatar-system",
      "label": "Avatar System"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:neural-rendering",
        "label": "Neural Rendering"
      },
      {
        "@id": "urn:ngm:class:volumetric-capture",
        "label": "Volumetric Capture"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:telepresence",
        "label": "Telepresence"
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
  "@id": "urn:visionflow:annotation:link-resolutions:tele-102-codec-avatars:f1187c0cd5e1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:986ed80805be2d2c5013912d9f7c408ffb3ba031cfc8f4b9f364c564a3bbccd4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Neural Rendering]]",
      "resolved": "urn:visionflow:linked:neural-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Volumetric Capture]]",
      "resolved": "urn:visionflow:linked:volumetric-capture",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telepresence]]",
      "resolved": "urn:visionflow:linked:telepresence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Avatar System]]",
      "resolved": "urn:visionflow:linked:avatar-system",
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
  - Codec Avatars are a research effort by Meta to produce photorealistic, real-time avatars of people that are learned from capture data and driven by sensors to reproduce expression and appearance.

- ### Semantic Classification
  - owl-class:: metaverse:TELE102codecavatars
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Avatar System]]
  - bridges-to:: [[Avatar System]]
  - requires:: [[Neural Rendering]], [[Volumetric Capture]]
  - enables:: [[Telepresence]]

- ### Content
  - Codec Avatars are a line of research from Meta aimed at creating photorealistic digital representations of individuals that can be animated in real time. The avatars are built from detailed multi-camera capture and a learned model, then driven by sensors on a headset to mirror the wearer's facial expression and gaze.
  - The approach treats the avatar as an encoder-decoder system, where compact driving signals are decoded into a high-fidelity rendered face, which suits transmission over a network for telepresence. Open challenges include reducing the capture requirements and generalising convincingly to many users.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
