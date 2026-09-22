public:: true

# TELE-050-neural-rendering-telepresence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3d638c0d5cb4356cfb197786e8539895312966917553cb76e4fb3bb5c6e07a6e",
  "@type": "Page",
  "vc:slug": "tele-050-neural-rendering-telepresence",
  "title": "TELE-050-neural-rendering-telepresence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:neural-rendering",
      "vc:label": "Neural Rendering"
    },
    {
      "@id": "urn:visionflow:linked:novel-view-synthesis",
      "vc:label": "Novel View Synthesis"
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
      "vc:value": "TELE-050-neural-rendering-telepresence"
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
  "@id": "urn:ngm:class:tele-050-neural-rendering-telepresence",
  "@type": "Class",
  "label": "TELE-050-neural-rendering-telepresence",
  "definition": "Neural rendering for telepresence is the application of learned, image-synthesis models to reconstruct and display remote people and scenes with photorealistic appearance and free viewpoint control.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:telepresence",
      "label": "Telepresence"
    },
    {
      "@id": "urn:ngm:class:dc-telepresence",
      "label": "Telepresence (Distributed Collaboration)"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:neural-rendering",
        "label": "Neural Rendering"
      },
      {
        "@id": "urn:ngm:class:novel-view-synthesis",
        "label": "Novel View Synthesis"
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
  "@id": "urn:visionflow:annotation:link-resolutions:tele-050-neural-rendering-telepresence:9e4f2c28ac45",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3d638c0d5cb4356cfb197786e8539895312966917553cb76e4fb3bb5c6e07a6e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Neural Rendering]]",
      "resolved": "urn:visionflow:linked:neural-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Novel View Synthesis]]",
      "resolved": "urn:visionflow:linked:novel-view-synthesis",
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
  - Neural rendering for telepresence is the application of learned, image-synthesis models to reconstruct and display remote people and scenes with photorealistic appearance and free viewpoint control.

- ### Semantic Classification
  - owl-class:: metaverse:TELE050neuralrenderingtelepresence
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Telepresence]]
  - bridges-to:: [[Neural Rendering]]
  - requires:: [[Neural Rendering]], [[Novel View Synthesis]]
  - enables:: [[Telepresence]]

- ### Content
  - Neural rendering for telepresence uses neural networks to synthesise realistic views of remote participants and environments from captured data, rather than relying solely on classical geometry and texturing. It aims to deliver convincing presence, including correct gaze and viewpoint-dependent appearance, over a network.
  - Methods in this area include neural radiance fields, learned avatars and Gaussian splatting representations, which can be reconstructed from camera input and rendered at the receiver. The main engineering challenges are real-time performance, data transmission and reconstruction fidelity for faces and motion.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
