public:: true

# Wearable Robotics

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:wearable-robotics",
  "@type": "Page",
  "title": "Wearable Robotics",
  "vc:slug": "wearable-robotics",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:wearable-robotics",
  "@type": "Class",
  "label": "Wearable Robotics",
  "definition": "Wearable robotics encompasses powered mechanical systems worn on or attached to the human body to augment, assist or restore physical capability. These devices, including exoskeletons and powered orthoses, sense the wearer's intent and motion and deliver coordinated actuation in real time to support movement, reduce effort or rehabilitate impaired function. The field integrates biomechanics, control engineering, sensing and human-robot interaction.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    },
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      },
      {
        "@id": "urn:ngm:class:force-sensor",
        "label": "Force Sensor"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:biomechanics",
        "label": "Biomechanics"
      },
      {
        "@id": "urn:ngm:class:kinematics",
        "label": "Kinematics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:haptics",
        "label": "Haptics"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:assistive-technology",
        "label": "Assistive Technology"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:prosthetics",
        "label": "Prosthetics"
      },
      {
        "@id": "urn:ngm:class:soft-robotics",
        "label": "Soft Robotics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:exoskeleton",
        "label": "Exoskeleton"
      },
      {
        "@id": "urn:ngm:class:human-robot-interaction",
        "label": "Human-Robot Interaction"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
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
- Wearable robotics builds powered systems worn on the body that sense intent and deliver coordinated actuation, integrating [[Biomechanics]], [[Kinematics]] and [[Sensor Fusion]] within the broader field of [[Robotics]].
- It targets augmentation, assistance and rehabilitation of human movement.
- ### Overview
- A wearable robot couples mechanical structures to the wearer through cuffs, braces or garments, and uses sensors to infer motion and intent before commanding actuators that work in harmony with the wearer's muscles.
- Safety, comfort, weight and intuitive control are decisive design constraints because the machine operates in intimate physical contact with a person.
- Soft and compliant approaches from [[Soft Robotics]] increasingly complement rigid exoskeleton structures.
- ### Key aspects
- Intent detection from electromyography, force and inertial sensing.
- Real-time, compliant control synchronised with human motion.
- Lightweight, ergonomic mechanical design for prolonged wear.
- Safety mechanisms preventing harmful forces or postures.
- Personalisation to individual [[Biomechanics]] and impairment.
- ### Mechanisms
- Sensing of motion and intent, fusion of multimodal signals, and actuation through motors or compliant elements that amplify or substitute for muscular effort.
- ### Applications
- Mobility assistance and gait restoration for impaired walking.
- Industrial exoskeletons reducing strain in lifting and overhead work.
- Rehabilitation therapy with repeatable, measurable assistance.
- [[Assistive Technology]] for activities of daily living.
- ### Relationships
- hasPart:: [[Actuator]]
- hasPart:: [[Sensor]]
- hasPart:: [[Force Sensor]]
- requires:: [[Biomechanics]]
- requires:: [[Kinematics]]
- uses:: [[Haptics]]
- uses:: [[Sensor Fusion]]
- enables:: [[Assistive Technology]]
- bridgesTo:: [[Prosthetics]]
- bridgesTo:: [[Soft Robotics]]
- relatedTo:: [[Exoskeleton]]
- relatedTo:: [[Human Robot Interaction]]
- dependsOn:: [[Robotics]]
- ### Provenance
- updated:: 2026-06-15
