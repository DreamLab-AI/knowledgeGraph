public:: true

# Gaze Tracking
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:gaze-tracking",
  "@type": "Page",
  "title": "Gaze Tracking",
  "vc:slug": "gaze-tracking",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gaze-tracking",
  "@type": "Class",
  "label": "Gaze Tracking",
  "definition": "Gaze tracking is the measurement of where a person is looking by estimating the direction and point of regard of the eyes, typically using cameras and infrared illumination to locate pupil and corneal reflections. In spatial computing it provides a hands-free input modality and a signal for attention, enabling interfaces that respond to where the user looks. Gaze tracking is foundational to foveated rendering, intent inference, and accessible interaction in head-mounted displays and immersive systems.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:eye-tracking",
      "label": "Eye Tracking"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:eye-tracking",
        "label": "Eye Tracking"
      },
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human-Computer Interaction"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:perception-system",
        "label": "Perception System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:perception-system",
        "label": "Perception System"
      },
      {
        "@id": "urn:ngm:class:computational-model",
        "label": "Computational Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:foveated-rendering",
        "label": "Foveated Rendering"
      },
      {
        "@id": "urn:ngm:class:immersive-interface",
        "label": "Immersive Interface"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:spatial-interaction",
        "label": "Spatial Interaction"
      },
      {
        "@id": "urn:ngm:class:accessibility",
        "label": "Accessibility"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:user-interface",
        "label": "User Interface"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:hand-tracking",
        "label": "Hand Tracking"
      },
      {
        "@id": "urn:ngm:class:gesture-recognition",
        "label": "Gesture Recognition"
      },
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:gaze-estimation",
      "label": "Gaze Estimation"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Gaze Tracking]] estimates the point of regard of the eyes to provide a hands-free, attention-aware input for [[Spatial Computing]]. A specialisation of [[Eye Tracking]] within [[Human-Computer Interaction]], it feeds [[Foveated Rendering]] and intent inference in head-mounted displays.
- ### Overview
  - By locating the pupil centre and corneal reflections under controlled illumination, gaze trackers compute the line of sight and intersect it with the display or scene to yield a gaze point. This turns the eyes into a fast, low-effort pointing device.
  - Beyond pointing, gaze is a rich attention signal. Systems can infer interest, intent, and cognitive state, enabling interfaces that pre-load content the user is about to engage and accessibility modes for users who cannot use their hands.
- ### Mechanisms
  - Infrared illumination produces stable corneal glints for robust eye localisation.
  - Pupil-corneal reflection geometry maps eye images to gaze direction.
  - Per-user calibration corrects for individual eye anatomy and headset fit.
  - Machine-learning estimators improve accuracy and tolerance to slippage and lighting.
- ### Applications
  - [[Foveated Rendering]] concentrating GPU effort where the user is looking.
  - Gaze-and-dwell or gaze-and-pinch selection in [[Immersive Interface]] designs.
  - [[Accessibility]] input for users with limited mobility.
  - Attention analytics and intent prediction in [[Virtual Reality]] experiences.
- ### Relationships
  - partOf:: [[Eye Tracking]]
  - partOf:: [[Human-Computer Interaction]]
  - hasPart:: [[Perception System]]
  - requires:: [[Perception System]]
  - requires:: [[Computational Model]]
  - enables:: [[Foveated Rendering]]
  - enables:: [[Immersive Interface]]
  - uses:: [[Machine Learning]]
  - supports:: [[Spatial Interaction]]
  - supports:: [[Accessibility]]
  - implements:: [[User Interface]]
  - relatedTo:: [[Hand Tracking]]
  - relatedTo:: [[Gesture Recognition]]
  - relatedTo:: [[Virtual Reality]]
  - bridgesTo:: [[Spatial Computing]]
- ### Provenance
  - updated:: 2026-06-15
