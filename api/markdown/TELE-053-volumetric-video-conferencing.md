```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d53702ad723fe56479f283ae9e371d668205431a4a741f27c2f220f725ae7c1d",
  "@type": "Page",
  "vc:slug": "tele-053-volumetric-video-conferencing",
  "title": "TELE-053-volumetric-video-conferencing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:volumetric-capture",
      "vc:label": "Volumetric Capture"
    },
    {
      "@id": "urn:visionflow:linked:point-cloud",
      "vc:label": "Point Cloud"
    },
    {
      "@id": "urn:visionflow:linked:telepresence",
      "vc:label": "Telepresence"
    },
    {
      "@id": "urn:visionflow:linked:video-conferencing",
      "vc:label": "Video Conferencing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "TELE-053-volumetric-video-conferencing"
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
  "@id": "urn:ngm:class:tele-053-volumetric-video-conferencing",
  "@type": "Class",
  "label": "TELE-053-volumetric-video-conferencing",
  "definition": "Volumetric video conferencing is real-time meeting communication in which participants are captured as three-dimensional representations and rendered so others can view them from arbitrary angles.",
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
        "@id": "urn:ngm:class:volumetric-capture",
        "label": "Volumetric Capture"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
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

- ### Definition
  - Volumetric video conferencing is real-time meeting communication in which participants are captured as three-dimensional representations and rendered so others can view them from arbitrary angles.

- ### Semantic Classification
  - owl-class:: metaverse:TELE053volumetricvideoconferencing
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Telepresence]]
  - bridges-to:: [[Video Conferencing]]
  - requires:: [[Volumetric Capture]], [[Point Cloud]]
  - enables:: [[Telepresence]]

- ### Content
  - Volumetric video conferencing captures each participant as a 3D representation, such as a point cloud or textured mesh, and streams it so that remote viewers can see the person with depth and from different viewpoints. This differs from flat video conferencing, which fixes the viewpoint to a single camera.
  - The technique requires multi-camera or depth-sensing capture, compression of 3D data and rendering on the receiver, often within head-mounted displays. Bandwidth and capture cost remain the main constraints on widespread deployment.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
