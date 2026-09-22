public:: true

# Wearable Computing
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:wearable-computing",
  "@type": "Page",
  "title": "Wearable Computing",
  "vc:slug": "wearable-computing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:wearable-computing",
  "@type": "Class",
  "label": "Wearable Computing",
  "definition": "Wearable computing is the design and use of computing devices worn on or close to the body, integrating sensing, processing and display into garments, accessories and head-mounted units. These devices provide continuous, context-aware interaction and data capture without occupying the hands, enabling hands-free assistance, health monitoring and immersive experiences. It is a foundational layer of spatial and ambient computing.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "Spatial Computing"
    },
    {
      "@id": "urn:ngm:class:human-interface-device",
      "label": "Human Interface Device"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:ambient-computing",
        "label": "Ambient Computing"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      },
      {
        "@id": "urn:ngm:class:head-mounted-display",
        "label": "Head-Mounted Display"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human-Computer Interaction"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ambient-computing",
        "label": "Ambient Computing"
      },
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human-Computer Interaction"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Wearable Computing]] embeds sensing, processing and display into devices worn on the body.
  - It is a constituent of [[Spatial Computing]] and [[Ambient Computing]], providing continuous context-aware interaction.
  - Devices range from [[Sensor]]-laden bands to [[Head-Mounted Display]] units supporting [[Augmented Reality]].
- ### Overview
  - Wearables bring computing into close, persistent contact with the user, shifting interaction from sessions to continuous awareness.
  - They emphasise hands-free, glanceable and context-sensitive interfaces.
  - On-body sensors capture motion, physiology and environment as input streams.
  - Wearable computing converges with [[Internet of Things]] connectivity and [[Extended Reality]] displays.
- ### Key aspects
  - Body-worn form factors constrain power, heat, weight and ergonomics.
  - Sensor fusion combines accelerometry, biometrics and location into context.
  - Low-power processing and efficient connectivity sustain all-day operation.
  - Privacy and continuous data capture raise distinctive governance concerns.
- ### Applications
  - Fitness and health monitoring through smartwatches and bands.
  - Hands-free assistance and remote support via smart glasses.
  - Immersive augmented and mixed reality through head-mounted displays.
  - Industrial and field work where hands-free instructions improve safety.
- ### Relationships
  - partOf:: [[Spatial Computing]]
  - partOf:: [[Ambient Computing]]
  - hasPart:: [[Sensor]]
  - hasPart:: [[Head-Mounted Display]]
  - uses:: [[Sensor]]
  - uses:: [[Internet of Things]]
  - enables:: [[Augmented Reality]]
  - enables:: [[Human-Computer Interaction]]
  - requires:: [[Internet of Things]]
  - supports:: [[Extended Reality]]
  - relatedTo:: [[Ambient Computing]]
  - relatedTo:: [[Human-Computer Interaction]]
  - relatedTo:: [[Augmented Reality]]
- ### Provenance
  - updated:: 2026-06-15
