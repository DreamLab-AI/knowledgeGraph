public:: true

# Prosthetics
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:prosthetics", "@type":"Page", "title":"Prosthetics", "vc:slug":"prosthetics", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:prosthetics",
  "@type": "Class",
  "label": "Prosthetics",
  "definition": "Prosthetics is the field concerned with the design, fitting, and control of artificial devices that replace missing or impaired body parts to restore form and function. Modern prosthetic limbs increasingly incorporate actuators, sensors, and control systems, with advanced devices using myoelectric or neural signals to drive movement intuitively. The discipline draws on biomechanics, human-robot interaction, and assistive technology to match device behaviour to human intent and gait. It contrasts with exoskeletons and orthotics, which augment or support existing limbs rather than replacing them.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:ngm:class:assistive-technology", "label": "Assistive Technology" }
  ],
  "relations": {
    "partOf": [
      { "@id": "urn:ngm:class:assistive-technology", "label": "Assistive Technology" }
    ],
    "hasPart": [
      { "@id": "urn:ngm:class:actuators", "label": "Actuators" },
      { "@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:neural-interface", "label": "Neural Interface" },
      { "@id": "urn:ngm:class:series-elastic-actuation", "label": "Series Elastic Actuation" },
      { "@id": "urn:ngm:class:actuators", "label": "Actuators" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:biomechanics", "label": "Biomechanics" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:rehabilitation-robotics", "label": "Rehabilitation Robotics" },
      { "@id": "urn:ngm:class:human-robot-interaction", "label": "Human-Robot Interaction" }
    ],
    "contrastsWith": [
      { "@id": "urn:ngm:class:exoskeleton", "label": "Exoskeleton" }
    ],
    "bridgesTo": [
      { "@id": "urn:ngm:class:neural-interface", "label": "Neural Interface" },
      { "@id": "urn:ngm:class:wearable-robotics", "label": "Wearable Robotics" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:robotic-manipulation", "label": "Robotic Manipulation" }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": { "attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-15T00:00:00Z", "inferenceRule": "GapMaterialisation" }
}
```

- ### Definition
  - Prosthetics is the field of designing and controlling artificial devices that replace missing or impaired body parts, restoring both appearance and function. As a branch of [[Assistive Technology]], modern prosthetic limbs embed [[Actuators]], sensors, and control systems.
  - It draws heavily on [[Biomechanics]] and [[Human-Robot Interaction]] to map human intent onto device motion, and contrasts with the [[Exoskeleton]], which augments rather than replaces a limb.

- ### Overview
  - Prosthetics restores mobility and dexterity to people with limb loss or congenital absence, ranging from passive cosmetic devices to actively powered, intent-driven limbs.
  - **Why it matters:** the gap between human limb capability and a prosthesis directly affects independence and quality of life; closing it is a major goal of rehabilitation engineering.
  - **How it works:**
    - The residual limb is interfaced through a socket or, for advanced systems, a [[Neural Interface]].
    - User intent is inferred from myoelectric, mechanical, or neural signals.
    - Control systems translate intent into coordinated [[Actuators]] driving joints.
    - [[Sensor Fusion]] feeds back position, force, and contact information to refine control and, increasingly, provide sensory feedback.

- ### Key aspects
  - **Signal acquisition** — surface myoelectric signals or implanted neural interfaces capture user intent.
  - **Actuation** — motors and compliant elements such as [[Series Elastic Actuation]] produce safe, natural movement.
  - **Control** — pattern recognition and model-based controllers map intent to multi-joint motion.
  - **Socket and fit** — comfortable, stable attachment to the residual limb is foundational to function.
  - **Sensory feedback** — emerging closed-loop systems restore a sense of touch and proprioception.

- ### Applications
  - Upper-limb myoelectric hands restoring grasp and manipulation.
  - Powered lower-limb prostheses improving gait stability and energy efficiency.
  - Osseointegrated and neurally integrated limbs offering intuitive, high-degree-of-freedom control.
  - Integration with [[Rehabilitation Robotics]] programmes for training and adaptation.

- ### Relationships
  - subClassOf:: [[Assistive Technology]]
  - partOf:: [[Assistive Technology]]
  - hasPart:: [[Actuators]]
  - hasPart:: [[Sensor Fusion]]
  - uses:: [[Neural Interface]]
  - uses:: [[Series Elastic Actuation]]
  - uses:: [[Actuators]]
  - requires:: [[Biomechanics]]
  - supports:: [[Rehabilitation Robotics]]
  - supports:: [[Human-Robot Interaction]]
  - contrastsWith:: [[Exoskeleton]]
  - bridgesTo:: [[Neural Interface]]
  - bridgesTo:: [[Wearable Robotics]]
  - relatedTo:: [[Robotic Manipulation]]

- ### Provenance
  - updated:: 2026-06-15
