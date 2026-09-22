public:: true

# Pulse Width Modulation
```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:pulse-width-modulation", "@type": "Page", "title": "Pulse Width Modulation", "vc:slug": "pulse-width-modulation", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pulse-width-modulation",
  "@type": "Class",
  "label": "Pulse Width Modulation",
  "definition": "Pulse-width modulation (PWM) is a technique that controls the average power delivered to a load by rapidly switching a signal between on and off and varying the proportion of on-time, the duty cycle. Because the switching frequency is high relative to the load's response, the load reacts to the average value, yielding efficient, near-lossless control of voltage, current, or position. It is ubiquitous in motor drives, power conversion, and digital generation of analogue-like outputs.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    },
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:microcontroller",
        "label": "Microcontroller"
      },
      {
        "@id": "urn:ngm:class:power-electronics",
        "label": "Power Electronics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:duty-cycle",
        "label": "Duty Cycle"
      },
      {
        "@id": "urn:ngm:class:microcontroller",
        "label": "Microcontroller"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:power-electronics",
        "label": "Power Electronics"
      },
      {
        "@id": "urn:ngm:class:control-system",
        "label": "Control System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:motor-control",
        "label": "Motor Control"
      },
      {
        "@id": "urn:ngm:class:servo-motor",
        "label": "Servo Motor"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:dc-motor",
        "label": "DC Motor"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:motor-control",
        "label": "Motor Control"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:duty-cycle",
        "label": "Duty Cycle"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:servo-motor",
        "label": "Servo Motor"
      },
      {
        "@id": "urn:ngm:class:control-system",
        "label": "Control System"
      },
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:pwm",
      "label": "PWM"
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
  - [[Pulse Width Modulation]] is defined in relation to [[Motor Control]], [[Microcontroller]], [[Servo Motor]], [[Actuator]], building on [[Robotics]].
  - Pulse-width modulation (PWM) is a technique that controls the average power delivered to a load by rapidly switching a signal between on and off and varying the proportion of on-time, the duty cycle. Because the switching frequency is high relative to the load's response, the load reacts to the average value, yielding efficient, near-lossless control of voltage, current, or position. It is ubiquitous in motor drives, power conversion, and digital generation of analogue-like outputs.

- ### Overview
  - PWM encodes an analogue level into the width of digital pulses. At a fixed carrier frequency, increasing the fraction of each period that the signal is high raises the average delivered power; decreasing it lowers the average. The load's inertia or a low-pass filter smooths the switching into a continuous effective value.
  - Because the switching element is either fully on or fully off, conduction losses are low, making PWM highly efficient compared with linear regulation. This efficiency, combined with simple generation from microcontroller timers, makes it the default method for driving motors and converting power.

- ### Mechanisms
  - Duty cycle: the ratio of on-time to period sets the average output; carrier frequency is chosen above the load's response band.
  - Generation: microcontroller timer/counter peripherals compare a counter against a threshold to produce the pulse train.
  - Power stage: transistor switches (MOSFETs/IGBTs) and, often, an H-bridge drive the load efficiently.

- ### Applications
  - Speed and torque control of DC and brushless motors via motor drivers and H-bridges.
  - Servo positioning, where pulse width encodes a commanded angle.
  - Switching power supplies, LED dimming, and audio class-D amplification.

- ### Relationships
  - subClassOf:: [[Robotics]]
  - requires:: [[Microcontroller]]
  - requires:: [[Power Electronics]]
  - uses:: [[Duty Cycle]]
  - uses:: [[Microcontroller]]
  - dependsOn:: [[Power Electronics]]
  - dependsOn:: [[Control System]]
  - enables:: [[Motor Control]]
  - enables:: [[Servo Motor]]
  - supports:: [[Actuator]]
  - supports:: [[DC Motor]]
  - partOf:: [[Motor Control]]
  - hasPart:: [[Duty Cycle]]
  - implements:: [[Signal Processing]]
  - bridgesTo:: [[Embedded Systems]]
  - relatedTo:: [[Actuator]]
  - relatedTo:: [[Servo Motor]]
  - relatedTo:: [[Control System]]
  - relatedTo:: [[Embedded Systems]]
  - sameAs:: [[PWM]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
