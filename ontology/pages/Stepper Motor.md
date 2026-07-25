public:: true

# Stepper Motor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ce2146ff09ae30783fb4a4c7728e9b5b83614222a80b2727e66ce32c94c4c22d",
  "@type": "Page",
  "vc:slug": "stepper-motor",
  "title": "Stepper Motor",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:electric-motor",
      "vc:label": "Electric Motor"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0173"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Stepper Motor"
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
  "@id": "urn:ngm:class:stepper-motor",
  "@type": "Class",
  "label": "Stepper Motor",
  "definition": "A stepper motor is an electromechanical actuator that divides a full rotation into a fixed number of discrete angular steps, enabling precise open-loop position control without requiring feedback sensors. By energising coils in sequence, the rotor advances one step per pulse, making stepper motors essential for applications demanding repeatable positioning such as CNC machining, 3D printing, and robotic joints.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:electric-motor",
      "label": "Electric Motor"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:encoder", "label": "Encoder"},
      {"@id": "urn:ngm:class:rotary-encoder", "label": "Rotary Encoder"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:embedded-systems", "label": "Embedded Systems"},
      {"@id": "urn:ngm:class:motion-control", "label": "Motion Control"},
      {"@id": "urn:ngm:class:open-loop-control", "label": "Open-Loop Control"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:robotics-control", "label": "Robotics Control"},
      {"@id": "urn:ngm:class:robotics-process", "label": "Robotics Process"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"},
      {"@id": "urn:ngm:class:electric-actuator", "label": "Electric Actuator"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:servo-motor", "label": "Servo Motor"},
      {"@id": "urn:ngm:class:dc-servo-motor", "label": "DC Servo Motor"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"},
      {"@id": "urn:ngm:class:robot-actuator", "label": "Robot Actuator"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:stepper-motor:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ce2146ff09ae30783fb4a4c7728e9b5b83614222a80b2727e66ce32c94c4c22d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Electric Motor]]",
      "resolved": "urn:visionflow:owl:class:electric-motor",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
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
  A stepper motor is an electromechanical actuator that divides a full rotation into a fixed number of discrete angular steps, enabling precise open-loop position control without requiring feedback sensors. By energising coils in a predetermined sequence, the rotor advances one step per electrical pulse, making stepper motors indispensable wherever repeatable, quantifiable positioning is required. Common variants include permanent-magnet, variable-reluctance, and hybrid designs, with step resolutions ranging from 1.8° (200 steps/rev) to sub-degree microstepping configurations.

- ### Semantic Classification
  - owl-class:: robotics:StepperMotor
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Electric Motor]]
  - requires:: [[Motion Control]], [[Open-Loop Control]], [[Embedded Systems]]
  - enables:: [[Robotics Control]], [[Robotics Process]]
  - uses:: [[Actuator]], [[Electric Actuator]]
  - hasPart:: [[Encoder]], [[Rotary Encoder]]
  - contrastsWith:: [[Servo Motor]], [[DC Servo Motor]]
  - relatedTo:: [[Robotics]], [[Robot Actuator]]

- ### Content
  Stepper motors translate electrical pulses directly into precise mechanical movement, with each pulse rotating the shaft by one fixed angular increment. Unlike servo motors, which rely on closed-loop feedback to correct positioning errors, stepper motors operate open-loop: the controller issues a pulse sequence and assumes the rotor follows without verification. This simplicity reduces system cost and complexity, but means that missed steps — caused by excessive load or acceleration — accumulate undetected.

  The motor's internal construction determines step resolution. Permanent-magnet steppers use a magnetised rotor that aligns with successive stator poles. Variable-reluctance designs exploit differences in magnetic reluctance across rotor teeth. Hybrid steppers combine both principles to achieve the fine step angles (1.8° or 0.9°) dominant in industrial and consumer applications. Driver ICs implement microstepping by proportionally energising two adjacent phases simultaneously, dividing a full step into 8, 16, or 32 microsteps to smooth motion and reduce resonance.

  In robotics and automation, stepper motors are used extensively in CNC machines, 3D printer extruder and axis drives, pick-and-place equipment, and camera pan/tilt mechanisms. Their torque-speed curve — high holding torque at standstill, diminishing torque at higher speeds — makes them well-suited for low-to-medium speed positioning tasks. Embedded system microcontrollers (Raspberry Pi, Arduino, STM32) generate step pulses through PWM or GPIO, while dedicated driver chips (DRV8825, A4988, TMC2209) handle current regulation and microstepping.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
