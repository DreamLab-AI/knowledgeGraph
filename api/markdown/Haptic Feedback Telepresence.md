public:: true

# Haptic Feedback Telepresence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:912ef84907d23f21e6048b431075e3406305897b4affff0b3780dbcaf1a59672",
  "@type": "Page",
  "vc:slug": "haptic-feedback-telepresence",
  "title": "Haptic Feedback Telepresence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:haptic-technology",
      "vc:label": "Haptic Technology"
    },
    {
      "@id": "urn:visionflow:linked:tele-020-virtual-reality-telepresence",
      "vc:label": "TELE-020-virtual-reality-telepresence"
    },
    {
      "@id": "urn:visionflow:linked:tele-200-robotic-telepresence",
      "vc:label": "TELE-200-robotic-telepresence"
    },
    {
      "@id": "urn:visionflow:linked:tele-201-teleoperation-systems",
      "vc:label": "TELE-201-teleoperation-systems"
    },
    {
      "@id": "urn:visionflow:owl:class:tele-001-telepresence",
      "vc:label": "TELE-001-telepresence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-0203"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Haptic Feedback Telepresence"
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
  "@id": "urn:ngm:class:haptic-feedback-telepresence",
  "@type": "Class",
  "label": "Haptic Feedback Telepresence",
  "definition": "Haptic Feedback Telepresence is the integration of tactile and kinesthetic feedback devices — such as force-feedback gloves, exoskeletons, and haptic controllers — into telepresence systems, enabling bidirectional touch sensation between a remote operator and a distant physical or virtual environment. It closes the sensorimotor loop beyond visual and auditory channels, allowing operators to feel forces, textures, weight, and vibration, which significantly enhances manipulation precision and immersive presence in teleoperation, surgical robotics, and VR collaboration contexts.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-telepresence",
      "label": "Telepresence"
    },
    {
      "@id": "urn:ngm:class:haptic-feedback",
      "label": "Haptic Feedback"
    }
  ],
  "quality": 0.75,
  "qualityScore": 0.75,
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:telepresence", "label": "Telepresence"},
      {"@id": "urn:ngm:class:telecollaboration-and-telepresence", "label": "Telecollaboration and Telepresence"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:haptics", "label": "Haptics"},
      {"@id": "urn:ngm:class:exoskeleton-robot", "label": "Exoskeleton Robot"},
      {"@id": "urn:ngm:class:tactile-sensor", "label": "Tactile Sensor"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:teleoperation", "label": "Teleoperation"},
      {"@id": "urn:ngm:class:guaranteed-bandwidth", "label": "Guaranteed Bandwidth"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:robotic-telepresence", "label": "Robotic Telepresence"},
      {"@id": "urn:ngm:class:immersive-communication", "label": "Immersive Communication"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human Computer Interaction"},
      {"@id": "urn:ngm:class:virtual-environment", "label": "Virtual Environment"},
      {"@id": "urn:ngm:class:tele-001-telepresence", "label": "TELE 001 telepresence"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:haptic-feedback-telepresence:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:912ef84907d23f21e6048b431075e3406305897b4affff0b3780dbcaf1a59672"
  },
  "vc:resolutions": [
    {
      "raw": "[[Haptic Technology]]",
      "resolved": "urn:visionflow:linked:haptic-technology",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-020-virtual-reality-telepresence]]",
      "resolved": "urn:visionflow:linked:tele-020-virtual-reality-telepresence",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-200-robotic-telepresence]]",
      "resolved": "urn:visionflow:linked:tele-200-robotic-telepresence",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-201-teleoperation-systems]]",
      "resolved": "urn:visionflow:linked:tele-201-teleoperation-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-001-telepresence]]",
      "resolved": "urn:visionflow:owl:class:tele-001-telepresence",
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
  - "The integration of haptic (tactile and kinesthetic) feedback devices into telepresence systems, enabling remote operators to feel forces, textures, and vibrations from distant environments through force-feedback gloves, exoskeletons, or handheld controllers, creating bidirectional touch sensation for immersive remote interaction with physical or virtual objects."

- ### Semantic Classification
  - owl-class:: distributed-collaboration:HapticFeedbackTelepresence
  - owl-role:: Object

- ### Relationships
  - is-subclass-of:: [[Haptic Technology]]

- ### Content

  ## Definition

  **Haptic Feedback Telepresence** extends telepresence beyond visual and auditory modalities to include touch sensation, enabling operators to feel forces exerted by remote robots [[TELE-201-teleoperation-systems]] or virtual objects [[TELE-020-virtual-reality-telepresence]]. Force feedback devices replicate resistance, weight, texture, and vibration, creating bidirectional coupling where operator inputs control remote/virtual objects whilst receiving tactile sensations from those objects, enhancing manipulation precision, immersion, and task performance.

  ## Types of Haptic Feedback

  - **Kinesthetic**: Joint torques, resistance (e.g., feeling object weight)
  - **Tactile**: Surface texture, vibration (e.g., fabric roughness)
  - **Thermal**: Temperature sensations (heating/cooling actuators)

  ## Devices

  - **Force Feedback Gloves**: CyberGlove, HaptX, SenseGlove (10+ DOF force feedback)
  - **Exoskeletons**: Full-arm force reflection for teleoperation
  - **Haptic Controllers**: Vibration motors, ultrasonic mid-air haptics

  ## Applications

  - **Surgical Telepresence**: Surgeons feel tissue stiffness during robotic surgery
  - **VR Collaboration**: Users feel virtual handshakes, object textures
  - **Industrial Telerobotics**: Operators sense resistance when manipulating heavy objects remotely

  #### Related Concepts
  - [[TELE-001-telepresence]]
  - [[TELE-200-robotic-telepresence]]
  - [[TELE-201-teleoperation-systems]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
