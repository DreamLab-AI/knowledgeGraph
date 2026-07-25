public:: true

# Surgical Simulation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:surgical-simulation",
  "@type": "Page",
  "title": "Surgical Simulation",
  "vc:slug": "surgical-simulation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:surgical-simulation",
  "@type": "Class",
  "label": "Surgical Simulation",
  "definition": "Surgical simulation is the use of interactive virtual environments to model surgical procedures for training, planning and assessment. It combines real-time graphics, deformable tissue modelling, collision detection and haptic feedback to recreate the visual and tactile experience of operating. Surgical simulators allow clinicians to rehearse techniques and acquire skills without risk to patients.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:medical-simulation",
      "label": "Medical Simulation"
    }
  ],
  "relations": {
    "supports": [
      {
        "@id": "urn:ngm:class:training",
        "label": "Training"
      },
      {
        "@id": "urn:ngm:class:medical-imaging",
        "label": "Medical Imaging"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:haptic-feedback",
        "label": "Haptic Feedback"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:collision-detection",
        "label": "Collision Detection"
      },
      {
        "@id": "urn:ngm:class:haptic-feedback",
        "label": "Haptic Feedback"
      },
      {
        "@id": "urn:ngm:class:force-feedback",
        "label": "Force Feedback"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:collision-detection",
        "label": "Collision Detection"
      },
      {
        "@id": "urn:ngm:class:force-feedback",
        "label": "Force Feedback"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:medical-simulation",
        "label": "Medical Simulation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:xr-applications",
        "label": "XR Applications"
      },
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:simulation",
        "label": "Simulation"
      },
      {
        "@id": "urn:ngm:class:medical-imaging",
        "label": "Medical Imaging"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:xr-applications",
        "label": "XR Applications"
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
  - Surgical simulation is the use of interactive virtual environments to model surgical procedures for training, planning and assessment. It combines real-time graphics, deformable tissue modelling, collision detection and haptic feedback to recreate the visual and tactile experience of operating. Surgical simulators allow clinicians to rehearse techniques and acquire skills without risk to patients.
  - Related: [[Medical Simulation]] [[Haptic Feedback]] [[Collision Detection]] [[Virtual Reality]]
- ### Overview
  - Surgical simulators integrate biomechanical tissue models with high-frame-rate rendering and force-feedback devices so that trainees feel realistic resistance as they cut, suture and manipulate anatomy. Patient-specific models derived from medical imaging support preoperative rehearsal of complex cases.
- ### Mechanisms
  - Deformable soft-tissue and biomechanical modelling
  - Real-time collision detection between instruments and anatomy
  - Haptic and force feedback for tactile realism
  - Patient-specific models built from medical imaging
  - Performance metrics for objective skills assessment
- ### Applications
  - Training and credentialing of surgeons
  - Preoperative planning and rehearsal of complex cases
  - Minimally invasive and robotic surgery practice
  - Assessment of psychomotor surgical skills
- ### Relationships
  - subClassOf:: [[Medical Simulation]]
  - supports:: [[Training]]
  - supports:: [[Medical Imaging]]
  - enables:: [[Haptic Feedback]]
  - uses:: [[Collision Detection]]
  - uses:: [[Haptic Feedback]]
  - uses:: [[Force Feedback]]
  - uses:: [[Real-Time Rendering]]
  - hasPart:: [[Collision Detection]]
  - hasPart:: [[Force Feedback]]
  - partOf:: [[Medical Simulation]]
  - requires:: [[Real-Time Rendering]]
  - implements:: [[Virtual Reality]]
  - relatedTo:: [[XR Applications]]
  - relatedTo:: [[Virtual Reality]]
  - relatedTo:: [[Simulation]]
  - relatedTo:: [[Medical Imaging]]
  - bridgesTo:: [[XR Applications]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
