public:: true

# Loom
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:033dea3f80edb685e06a365b97aea387a87a86dfd9bbd45584f872514190d004",
  "@type": "Page",
  "vc:slug": "loom",
  "title": "Loom",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:screen-recording",
      "vc:label": "Screen Recording"
    },
    {
      "@id": "urn:visionflow:linked:video-streaming",
      "vc:label": "Video Streaming"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Loom"
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
  "@id": "urn:ngm:class:loom",
  "@type": "Class",
  "label": "Loom",
  "definition": "A video messaging application that lets users record their screen, camera, and microphone to create and share short videos. It is used for asynchronous communication at work.",
  "domain": "software",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:screen-recording",
      "label": "Screen Recording"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:screen-recording",
        "label": "Screen Recording"
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
  "@id": "urn:visionflow:annotation:link-resolutions:loom:784a2ddf5d4d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:033dea3f80edb685e06a365b97aea387a87a86dfd9bbd45584f872514190d004"
  },
  "vc:resolutions": [
    {
      "raw": "[[Screen Recording]]",
      "resolved": "urn:visionflow:linked:screen-recording",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Video Streaming]]",
      "resolved": "urn:visionflow:linked:video-streaming",
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
  - A video messaging application that lets users record their screen, camera, and microphone to create and share short videos. It is used for asynchronous communication at work.

- ### Semantic Classification
  - owl-class:: software:Loom
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Screen Recording]]
  - bridges-to:: [[Video Streaming]]
  - requires:: [[Screen Recording]]

- ### Content
  - Loom is an application for recording and sharing short videos that capture the screen alongside the user's camera and voice. It is commonly used for explanations, walkthroughs, and feedback that would otherwise require a meeting.
  - Recordings are hosted in the cloud and shared by link, with features such as automatic transcription and viewer analytics. The company was acquired by Atlassian in 2023.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
