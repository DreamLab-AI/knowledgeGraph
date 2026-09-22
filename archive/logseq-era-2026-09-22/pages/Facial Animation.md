public:: true

# Facial Animation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:facial-animation",
  "@type": "Page",
  "title": "Facial Animation",
  "vc:slug": "facial-animation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:facial-animation",
  "@type": "Class",
  "label": "Facial Animation",
  "definition": "Facial animation is the discipline of generating expressive, lifelike movement of a digital character's face, including lip synchronisation, eye motion, and emotional expression. It commonly combines blend-shape (morph-target) deformation, facial rigs, and performance-capture data to drive realistic results. Facial animation is essential for believable avatars, virtual humans, and immersive experiences in spatial computing.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:character-animation",
      "label": "Character Animation"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:avatar",
        "label": "Avatar"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:character-animation",
        "label": "Character Animation"
      },
      {
        "@id": "urn:ngm:class:skeletal-animation",
        "label": "Skeletal Animation"
      },
      {
        "@id": "urn:ngm:class:motion-capture",
        "label": "Motion Capture"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:motion-capture",
        "label": "Motion Capture"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:motion-capture",
        "label": "Motion Capture"
      },
      {
        "@id": "urn:ngm:class:skeletal-animation",
        "label": "Skeletal Animation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:avatar",
        "label": "Avatar"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:skeletal-animation",
        "label": "Skeletal Animation"
      },
      {
        "@id": "urn:ngm:class:character-animation",
        "label": "Character Animation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:character-animation",
        "label": "Character Animation"
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
  - Facial animation is the discipline of generating expressive, lifelike movement of a digital character's face, including lip synchronisation, eye motion, and emotional expression. It commonly combines blend-shape (morph-target) deformation, facial rigs, and performance-capture data to drive realistic results. Facial animation is essential for believable avatars, virtual humans, and immersive experiences in spatial computing.
  - Related concepts: [[Character Animation]], [[Skeletal Animation]], [[Motion Capture]], [[Avatar]], [[Spatial Computing]].
- ### Overview
  - Facial animation specialises [[Character Animation]] to the subtle, high-fidelity motion of the human face.
  - It blends morph-target deformation with facial rigging and often draws on [[Motion Capture]] of a live performer.
  - Real-time facial animation underpins responsive [[Avatar]] systems in spatial-computing platforms.
- ### Mechanisms
  - Blend shapes / morph targets: interpolating between sculpted facial poses.
  - Facial rigging: bone- and control-based deformation systems layered over the mesh.
  - Performance capture: marker-based or markerless tracking of an actor's face.
  - Lip-sync: mapping phonemes to visemes for speech.
  - Emotion and gaze: encoding expression and eye behaviour for believability.
- ### Applications
  - Real-time avatars for social VR and telepresence.
  - Game and film character performance.
  - Virtual production and digital humans.
  - Accessibility and sign-language avatars.
- ### Relationships
  - enables:: [[Avatar]]
  - enables:: [[Real-Time Rendering]]
  - relatedTo:: [[Character Animation]]
  - relatedTo:: [[Skeletal Animation]]
  - relatedTo:: [[Motion Capture]]
  - hasPart:: [[Motion Capture]]
  - uses:: [[Motion Capture]]
  - uses:: [[Skeletal Animation]]
  - requires:: [[Real-Time Rendering]]
  - supports:: [[Avatar]]
  - bridgesTo:: [[Spatial Computing]]
  - dependsOn:: [[Skeletal Animation]]
  - dependsOn:: [[Character Animation]]
  - partOf:: [[Character Animation]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: GapMaterialisation
  - quality:: 0.62
