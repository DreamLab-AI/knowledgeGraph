public:: true

# Embodied Interaction

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:embodied-interaction",
  "@type": "Page",
  "title": "Embodied Interaction",
  "vc:slug": "embodied-interaction",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:embodied-interaction",
  "@type": "Class",
  "label": "Embodied Interaction",
  "definition": "Embodied interaction is an approach to human-computer interaction in which the user's body, physical movement, and spatial context are the primary means of engaging with digital systems. It draws on theories of embodied cognition, treating perception and action as inseparable, and is central to virtual, augmented, and mixed reality where users act through avatars and natural gesture. The paradigm prioritises tangible, gestural, and full-body input over abstract symbolic command.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:human-computer-interaction",
      "label": "Human Computer Interaction"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human Computer Interaction"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:interaction-design",
        "label": "Interaction Design"
      },
      {
        "@id": "urn:ngm:class:presence",
        "label": "Presence"
      },
      {
        "@id": "urn:ngm:class:proxemics",
        "label": "Proxemics"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:gesture-recognition",
        "label": "Gesture Recognition"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:social-vr",
        "label": "Social VR"
      },
      {
        "@id": "urn:ngm:class:telepresence",
        "label": "Telepresence"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:haptics",
        "label": "Haptics"
      },
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      },
      {
        "@id": "urn:ngm:class:eye-tracking",
        "label": "Eye Tracking"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:avatar",
        "label": "Avatar"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:proprioceptive-sensing",
        "label": "Proprioceptive Sensing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:social-presence-theory",
        "label": "Social Presence Theory"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Embodied interaction is an approach to human-computer interaction in which the user's body, physical movement, and spatial context are the primary means of engaging with digital systems. It draws on theories of embodied cognition, treating perception and action as inseparable, and is central to virtual, augmented, and mixed reality where users act through avatars and natural gesture. The paradigm prioritises tangible, gestural, and full-body input over abstract symbolic command.
  - Related concepts: [[Human Computer Interaction]] [[Gesture Recognition]] [[Presence]] [[Haptics]] [[Virtual Reality]]
- ### Overview
  - Rather than mediating interaction through keyboards and screens, embodied interaction situates computation in the physical world and treats the moving body as the locus of meaning-making. In immersive environments users reach, grasp, point, and walk, and the system interprets these actions as input. This grounding in bodily experience tends to increase the sense of presence and reduce cognitive load relative to symbolic interfaces.
- ### Key aspects
  - Embodied cognition: meaning arises from sensorimotor engagement with the world
  - Natural gesture and full-body input as first-class interaction modalities
  - Tangible and graspable interfaces that map digital state to physical form
  - Spatial and proxemic awareness of where the user and objects are located
  - Multimodal fusion of gaze, gesture, voice, and haptic feedback
- ### Applications
  - Hand-tracked manipulation in virtual and mixed reality
  - Collaborative avatars in social VR spaces
  - Training and simulation that rehearse physical procedures
  - Accessible interfaces driven by movement rather than fine motor control
- ### Relationships
  - subClassOf:: [[Human Computer Interaction]]
  - partOf:: [[Human Computer Interaction]]
  - relatedTo:: [[Interaction Design]]
  - relatedTo:: [[Presence]]
  - relatedTo:: [[Proxemics]]
  - implements:: [[Gesture Recognition]]
  - enables:: [[Social VR]]
  - enables:: [[Telepresence]]
  - uses:: [[Haptics]]
  - uses:: [[Spatial Audio]]
  - uses:: [[Eye Tracking]]
  - requires:: [[Avatar]]
  - supports:: [[Virtual Reality]]
  - supports:: [[Augmented Reality]]
  - dependsOn:: [[Proprioceptive Sensing]]
  - bridgesTo:: [[Social Presence Theory]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
