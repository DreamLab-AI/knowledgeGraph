public:: true

# Lead Screw Actuator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4e037c38bcfa013a3801597843de48b67ac8001937af4b770ee1afcde81db67a",
  "@type": "Page",
  "vc:slug": "lead-screw-actuator",
  "title": "Lead Screw Actuator",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:electric-linear-actuator",
      "vc:label": "Electric Linear Actuator"
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
      "vc:value": "RB-0176"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Lead Screw Actuator"
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
  "@id": "urn:ngm:class:lead-screw-actuator",
  "@type": "Class",
  "label": "Lead Screw Actuator",
  "definition": "A linear actuation mechanism that converts rotational motion from a motor into controlled axial displacement by driving a threaded nut along a precision-cut helical screw shaft. Lead screw actuators provide high mechanical advantage, inherent load-holding capability (due to the self-locking property when lead angle is below the friction angle), and positional repeatability, making them widely used in CNC machines, 3D printers, robotic joints, and medical devices.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:electric-linear-actuator",
      "label": "Electric Linear Actuator"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:stepper-motor", "label": "Stepper Motor"},
      {"@id": "urn:ngm:class:servo-motor", "label": "Servo Motor"},
      {"@id": "urn:ngm:class:torque", "label": "Torque"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:mechanical-component", "label": "Mechanical Component"},
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:torque-control", "label": "Torque Control"},
      {"@id": "urn:ngm:class:industrial-robot", "label": "Industrial Robot"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:robotics-control", "label": "Robotics Control"},
      {"@id": "urn:ngm:class:robotics-systems", "label": "Robotics Systems"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:pid-controller", "label": "Pid Controller"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:lead-screw-actuator:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4e037c38bcfa013a3801597843de48b67ac8001937af4b770ee1afcde81db67a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Electric Linear Actuator]]",
      "resolved": "urn:visionflow:owl:class:electric-linear-actuator",
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
  A linear actuation mechanism that converts rotary motor motion into controlled axial displacement by driving a threaded nut along a precision helical screw shaft. High mechanical advantage, self-locking (load holding without power), and positional repeatability make it widely used in CNC machines, 3D printers, robotic joints, and medical devices.

- ### Relationships
  Lead Screw Actuator **uses** Stepper Motor or Servo Motor as its rotational power source and Torque as the driving quantity converted to linear force. It **has part** Mechanical Component (screw and nut assembly) and is itself a specialised Actuator. It **enables** Torque Control applications and is a common component in Industrial Robot axes. It is **related to** Robotics Control and Robotics Systems. It **contrasts with** PID Controller (which is a control algorithm rather than a physical actuation device).

- ### Content

  The lead screw actuator consists of two principal components: the threaded screw (which rotates) and the nut (which translates). The relationship between rotational input and linear output is governed by the lead — the axial distance the nut travels per full revolution of the screw. A stepper or servo motor drives the screw; the nut is constrained against rotation, converting the helical motion into pure axial displacement.

  The self-locking property is a critical operational characteristic: when the helix angle of the screw thread is less than the arctangent of the coefficient of friction, the screw cannot be back-driven by axial load. This means the actuator holds position when unpowered — valuable in vertical axes (lifting applications) and safety-critical deployments where power failure must not cause collapse.

  Compared with ballscrew actuators (which use recirculating balls to reduce friction), lead screws sacrifice efficiency (typically 25–50% vs 90% for ballscrews) for lower cost, greater compactness, and the self-locking benefit. ACME and trapezoidal thread profiles are standard; precision ground thread forms reduce backlash for positioning applications.

  In robotics, lead screw actuators appear in Cartesian gantry robots, delta printer effectors, surgical positioning stages, and haptic feedback devices. Their predictable, quasi-static mechanics make them amenable to open-loop stepper motor control, though closed-loop configurations with encoders are used where precision demands require feedback.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
