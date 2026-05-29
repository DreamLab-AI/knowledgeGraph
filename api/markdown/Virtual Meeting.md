public:: true

# Virtual Meeting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b2e3dc56f974948ed53971fd1cb1224b65cd16f0f7107ff648a00f685e2f842d",
  "@type": "Page",
  "vc:slug": "virtual-meeting",
  "title": "Virtual Meeting",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-0602"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Meeting"
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
  "@id": "urn:ngm:class:virtual-meeting",
  "@type": "Class",
  "label": "Virtual Meeting",
  "definition": "A synchronous gathering of geographically distributed participants conducted through video conferencing, spatial computing, or immersive VR/AR technologies to enable remote collaboration. Virtual meetings span traditional video-call platforms with screen sharing and virtual whiteboards through to persistent 3D avatar-based spaces such as Meta Horizon Workrooms and Microsoft Mesh, which replicate physical presence cues including spatial audio and non-verbal body language.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-communication",
      "label": "Communication Technology"
    },
    {
      "@id": "urn:ngm:class:telecollaboration",
      "label": "Telecollaboration"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:immersive-technology", "label": "Immersive Technology"},
      {"@id": "urn:ngm:class:collaboration-platform", "label": "Collaboration Platform"},
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:immersive-workspaces", "label": "Immersive Workspaces"},
      {"@id": "urn:ngm:class:telecollaboration-and-telepresence", "label": "Telecollaboration and Telepresence"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:social-vr", "label": "Social VR"},
      {"@id": "urn:ngm:class:virtual-event-platform", "label": "Virtual Event Platform"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-meeting:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b2e3dc56f974948ed53971fd1cb1224b65cd16f0f7107ff648a00f685e2f842d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Telecollaboration]]",
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
  - Virtual Meeting refers to synchronous gatherings of participants using video conferencing, spatial computing, or immersive technologies to collaborate remotely. This encompasses traditional video conferencing platforms, virtual whiteboards, screen sharing capabilities, and emerging 3D virtual meeting spaces.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:VirtualMeeting
  - owl-role:: Concept
  - belongs-to-domain:: [[Telecollaboration]]

- ### Relationships
  - is-subclass-of:: [[Telecollaboration]]
  - uses:: [[Immersive Technology]], [[Collaboration Platform]], [[Spatial Computing]]
  - enables:: [[Immersive Workspaces]], [[Telecollaboration and Telepresence]]
  - relatedTo:: [[Social VR]], [[Virtual Event Platform]]

- ### Content

  - ## Overview
  - Virtual meetings enable distributed teams to collaborate synchronously through video conferencing and increasingly through immersive 3D spaces. Traditional platforms provide screen sharing, virtual whiteboards, and breakout rooms. Spatial computing platforms such as Meta Horizon Workrooms and Microsoft Mesh add persistent 3D environments with avatar representation, spatial audio, and gesture-based interaction that replicate presence cues absent in flat video.
  - ## Technical Approaches
  - ### Platform Categories
        - **Video Conferencing**: Zoom, Teams, Meet — two-dimensional, browser-accessible
        - **Spatial VR Meetings**: Horizon Workrooms, Engage — avatar-based, headset-required
        - **Hybrid Spatial**: Microsoft Mesh — mixed 2D/3D, device-agnostic
        - **Browser-Based 3D**: Mozilla Hubs, Spatial.io — no headset required
  - ### Key Capabilities
        - Spatial audio for proximity-based conversation
        - Shared virtual whiteboards and object manipulation
        - Persistent virtual rooms with customisable environments
        - Recording and asynchronous playback

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
