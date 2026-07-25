public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f2885d4d03a179aa552af4882900eec5f9a822664019cc0c7d9635cafc1ad3e1",
  "@type": "Page",
  "vc:slug": "dc-telepresence",
  "title": "Telepresence",
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
  "@id": "urn:ngm:class:dc-telepresence",
  "label": "Telepresence (Distributed Collaboration)",
  "definition": "Telepresence is the distributed-collaboration taxonomy hub covering technologies that create a convincing sense of physical co-presence across remote locations — spanning robotic telepresence, haptic-feedback telepresence, virtual-reality telepresence, and social presence theory. It is a peer category to Workspace Tools and Communication Technology within the distributed collaboration domain.",
  "domain": "distributed-collaboration",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-collaboration",
      "label": "Distributed Collaboration"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:robotic-telepresence", "label": "Robotic Telepresence"},
      {"@id": "urn:ngm:class:haptic-feedback-telepresence", "label": "Haptic Feedback Telepresence"},
      {"@id": "urn:ngm:class:teleoperation-systems", "label": "Teleoperation Systems"},
      {"@id": "urn:ngm:class:social-presence", "label": "Social Presence"},
      {"@id": "urn:ngm:class:spatial-presence", "label": "Spatial Presence"},
      {"@id": "urn:ngm:class:presence", "label": "Presence"},
      {"@id": "urn:ngm:class:immersive-communication", "label": "Immersive Communication"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:dc-workspace-tools", "label": "Workspace Tools"},
      {"@id": "urn:ngm:class:dc-communication", "label": "Communication Technology"},
      {"@id": "urn:ngm:class:robotics-telepresence-bridge", "label": "Robotics-Telepresence Bridge"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:haptics", "label": "Haptics"},
      {"@id": "urn:ngm:class:avatar-system", "label": "Avatar System"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:metaverse-telepresence-bridge", "label": "Metaverse-Telepresence Bridge"}
    ]
  },
  "quality": 0.8,
  "qualityScore": 0.8,
  "maturity": "established"
}
```

Telepresence technologies aim to dissolve the perceptual gap between geographically distributed participants. Achieving high-fidelity presence requires convergence of low-latency video/audio, spatial audio, haptic feedback, and — increasingly — robotic avatars and VR environments. Social presence theory provides the theoretical grounding for evaluating how effectively any given system achieves the subjective experience of being physically co-located.
