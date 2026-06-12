public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a9e9d238e785172e9c012e93862cb9afb504142a1611cda498727b6cbde60aca",
  "@type": "Page",
  "vc:slug": "sc-interaction",
  "title": "Interaction Technology",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T19:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@type": "Class",
  "@id": "urn:ngm:class:sc-interaction",
  "label": "Interaction Technology",
  "definition": "Interaction Technology is the spatial-computing taxonomy hub for all modalities through which users perceive and manipulate virtual and mixed-reality environments — including hand tracking, eye tracking, gaze control, haptics, voice interaction, and VR controllers. It sits alongside Display and Rendering and Platform and Environment as a peer category within spatial computing.",
  "domain": "spatial-computing",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing-paradigm",
      "label": "Spatial Computing"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:hand-tracking", "label": "Hand Tracking"},
      {"@id": "urn:ngm:class:eye-tracking", "label": "Eye Tracking"},
      {"@id": "urn:ngm:class:gaze-control", "label": "Gaze Control"},
      {"@id": "urn:ngm:class:haptic-feedback", "label": "Haptic Feedback"},
      {"@id": "urn:ngm:class:voice-interaction", "label": "Voice Interaction"},
      {"@id": "urn:ngm:class:vr-controllers", "label": "VR Controllers"},
      {"@id": "urn:ngm:class:3-d-user-interface", "label": "3D User Interface"},
      {"@id": "urn:ngm:class:haptics", "label": "Haptics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:sc-display-and-rendering", "label": "Display and Rendering"},
      {"@id": "urn:ngm:class:sc-platform-and-environment", "label": "Platform and Environment"},
      {"@id": "urn:ngm:class:immersive-interface", "label": "Immersive Interface"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"},
      {"@id": "urn:ngm:class:augmented-reality-collaboration", "label": "Augmented Reality Collaboration"}
    ]
  },
  "quality": 0.8,
  "qualityScore": 0.8,
  "maturity": "established"
}
```

Interaction Technology encompasses all input and feedback modalities that allow users to interact with spatial computing systems. This includes both physical input devices (VR controllers, haptic gloves) and natural interaction methods (hand tracking, eye/gaze tracking, voice). The category bridges hardware sensing capabilities and the software frameworks that interpret user intent within three-dimensional environments.
