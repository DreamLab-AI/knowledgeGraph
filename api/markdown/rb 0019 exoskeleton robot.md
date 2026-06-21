public:: true

# rb 0019 exoskeleton robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f5cdb92ae46ce9d19f0a2b2e73ab84c6a8251b008533546780f6c689462bf55f",
  "@type": "Page",
  "vc:slug": "rb-0019-exoskeleton-robot",
  "title": "rb 0019 exoskeleton robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0019"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0019 exoskeleton robot"
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
  "@id": "urn:ngm:class:rb-0019-exoskeleton-robot",
  "@type": "Class",
  "label": "rb 0019 exoskeleton robot",
  "definition": "An exoskeleton robot is a wearable robotic device that attaches to the human body and augments, supports, or replaces the wearer's physical capabilities. Exoskeletons may be powered (actuated) or passive (spring-and-damper based), and are used for physical rehabilitation after stroke or spinal cord injury, industrial worker fatigue reduction, and military load-carrying augmentation. Safety is paramount because the robot shares the mechanical structure with a human; ISO 13482 governs safety requirements for personal care robots including exoskeletons.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:exoskeleton-robot",
      "label": "Exoskeleton Robot"
    }
  ],
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:rb-0007-collaborative-robot", "label": "rb 0007 collaborative robot"},
      {"@id": "urn:ngm:class:service-robot", "label": "Service Robot"},
      {"@id": "urn:ngm:class:wearable-computing-platform", "label": "Wearable Computing Platform"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0088-iso-13482-compliance", "label": "rb 0088 iso 13482 compliance"},
      {"@id": "urn:ngm:class:rb-0089-risk-assessment", "label": "rb 0089 risk assessment"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:rb-0056-impedance-control", "label": "rb 0056 impedance control"},
      {"@id": "urn:ngm:class:rb-0067-force-torque-sensor", "label": "rb 0067 force torque sensor"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-ts-15066", "label": "ISO TS 15066"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R2ExplicitInBody"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0019-exoskeleton-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f5cdb92ae46ce9d19f0a2b2e73ab84c6a8251b008533546780f6c689462bf55f"
  },
  "vc:resolutions": [
    {
      "raw": "[[RoboticsDomain]]",
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
  - ### Primary Definition
  An exoskeleton robot is a wearable robotic device that attaches to and moves with the human body to augment, support, or restore physical capabilities. Powered exoskeletons use motors and actuators aligned with the wearer's joints, driven by control systems that interpret intent from force sensors, EMG signals, or inertial measurements. Applications span rehabilitation medicine (post-stroke gait retraining), industrial ergonomics (upper-limb support to reduce worker fatigue), and military logistics (load-carrying augmentation). Because the device is mechanically coupled to a human, safety analysis must address failure modes that could apply unintended forces to the wearer's body.

- ### Semantic Classification
  - owl-class:: robotics:rb0019exoskeletonrobot
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Exoskeleton robots represent the most intimate form of human-robot physical interaction, placing them under ISO 13482 (personal care robots) rather than the industrial robot standards ISO 10218 and ISO/TS 15066. Control strategies typically employ impedance or admittance control to achieve compliant interaction with the wearer's natural movement. Unlike collaborative robots operating alongside humans, exoskeletons must ensure zero undesired joint torque in any failure state, driving requirements for redundant sensing and fail-safe braking mechanisms.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
