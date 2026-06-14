public:: true

# Video Async
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7a738e5607ca235ad6e98117c7ffa4e3cb5a34720af620cbc06d844bc5606782",
  "@type": "Page",
  "vc:slug": "video-async",
  "title": "Video Async",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:collaboration-tools",
      "vc:label": "Collaboration Tools"
    },
    {
      "@id": "urn:visionflow:linked:loom",
      "vc:label": "Loom"
    },
    {
      "@id": "urn:visionflow:owl:class:asynchronous-collaboration",
      "vc:label": "Asynchronous Collaboration"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "TelecollaborationDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-9003"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Video Async"
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
  "@id": "urn:ngm:class:video-async",
  "@type": "Class",
  "label": "Video Async",
  "definition": "Asynchronous video communication is a mode of distributed collaboration in which participants record, share, and consume video messages at times of their own choosing rather than in a live session, combining the visual richness and non-verbal expressiveness of video with the time-zone flexibility and cognitive benefits of asynchronous working. Tools such as screen-and-webcam recorders reduce dependence on synchronous meetings, enable clearer knowledge sharing across distributed teams, and produce persistent, referenceable communication artefacts.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "quality": 0.75,
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-communication",
      "label": "Communication Technology"
    },
    {
      "@id": "urn:ngm:class:asynchronous-collaboration",
      "label": "Asynchronous Collaboration"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:screen-sharing", "label": "Screen Sharing"},
      {"@id": "urn:ngm:class:asynchronous-video", "label": "Asynchronous Video"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"},
      {"@id": "urn:ngm:class:knowledge-sharing", "label": "Knowledge Sharing"},
      {"@id": "urn:ngm:class:remote-collaboration", "label": "Remote Collaboration"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:video-conferencing", "label": "Video Conferencing"},
      {"@id": "urn:ngm:class:synchronous-collaboration", "label": "Synchronous Collaboration"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:asynchronous-communication", "label": "Asynchronous Communication"},
      {"@id": "urn:ngm:class:collaboration-platform", "label": "Collaboration Platform"},
      {"@id": "urn:ngm:class:digital-workplace-platform", "label": "Digital Workplace Platform"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:video-async:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7a738e5607ca235ad6e98117c7ffa4e3cb5a34720af620cbc06d844bc5606782"
  },
  "vc:resolutions": [
    {
      "raw": "[[Collaboration Tools]]",
      "resolved": "urn:visionflow:linked:collaboration-tools",
      "kind": "StubLink"
    },
    {
      "raw": "[[Loom]]",
      "resolved": "urn:visionflow:linked:loom",
      "kind": "StubLink"
    },
    {
      "raw": "[[Asynchronous Collaboration]]",
      "resolved": "urn:visionflow:owl:class:asynchronous-collaboration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TelecollaborationDomain]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Asynchronous video communication allowing users to record, share, and view video messages at their convenience, combining visual richness with time flexibility.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:VideoAsync
  - owl-role:: Object
  - belongs-to-domain:: [[TelecollaborationDomain]]

- ### Relationships
  - is-subclass-of:: [[Asynchronous Collaboration]]

- ### Content

  ## Overview

  Video Async (asynchronous video) refers to a communication practice where participants record video messages—often combining webcam footage with screen capture—and recipients view and respond at a later time of their choosing. Popularised by tools such as Loom, this approach decouples message production from consumption, eliminating the scheduling overhead of synchronous meetings while preserving the expressiveness and context of spoken, face-to-face communication.

  ## Role in Distributed Teams

  For geographically or temporally distributed teams, asynchronous video reduces reliance on live video conferencing by enabling detailed walkthroughs, design reviews, code demonstrations, and status updates to be shared as persistent, referenceable artefacts. This supports knowledge management goals: recordings can be searched, annotated, and integrated into documentation workflows. The format is particularly effective for one-to-many broadcasts—such as engineering demos or leadership updates—where a synchronous audience is impractical.

- ### Provenance
  - sources:: [[Collaboration Tools]], [[Loom]]
  - migration-date:: 2026-04-26T00:00:00Z
