public:: true

# Cylindrical Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9aa6232952c4f2b0f54d6c613dcd9eaa21b3087e51fe3a7baa96d92e450123aa",
  "@type": "Page",
  "vc:slug": "cylindrical-robot",
  "title": "Cylindrical Robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:articulated-robots",
      "vc:label": "Articulated Robots"
    },
    {
      "@id": "urn:visionflow:linked:assembly-automation",
      "vc:label": "Assembly Automation"
    },
    {
      "@id": "urn:visionflow:linked:azimuth-drive",
      "vc:label": "Azimuth Drive"
    },
    {
      "@id": "urn:visionflow:linked:base-support",
      "vc:label": "Base Support"
    },
    {
      "@id": "urn:visionflow:linked:component-assembly",
      "vc:label": "Component Assembly"
    },
    {
      "@id": "urn:visionflow:linked:control-systems",
      "vc:label": "Control Systems"
    },
    {
      "@id": "urn:visionflow:linked:coordinate-robots",
      "vc:label": "Coordinate Robots"
    },
    {
      "@id": "urn:visionflow:linked:depalletising",
      "vc:label": "Depalletising"
    },
    {
      "@id": "urn:visionflow:linked:end-effector-mount",
      "vc:label": "End-Effector Mount"
    },
    {
      "@id": "urn:visionflow:linked:fixed-base-manipulator",
      "vc:label": "Fixed-Base Manipulator"
    },
    {
      "@id": "urn:visionflow:linked:material-handling",
      "vc:label": "Material Handling"
    },
    {
      "@id": "urn:visionflow:linked:palletising",
      "vc:label": "Palletising"
    },
    {
      "@id": "urn:visionflow:linked:pick-and-place",
      "vc:label": "Pick and Place"
    },
    {
      "@id": "urn:visionflow:linked:prismatic-actuators",
      "vc:label": "Prismatic Actuators"
    },
    {
      "@id": "urn:visionflow:linked:radial-actuator",
      "vc:label": "Radial Actuator"
    },
    {
      "@id": "urn:visionflow:linked:rotary-joint",
      "vc:label": "Rotary Joint"
    },
    {
      "@id": "urn:visionflow:linked:vertical-actuator",
      "vc:label": "Vertical Actuator"
    },
    {
      "@id": "urn:visionflow:linked:wrist",
      "vc:label": "Wrist"
    },
    {
      "@id": "urn:visionflow:owl:class:force-control",
      "vc:label": "Force Control"
    },
    {
      "@id": "urn:visionflow:owl:class:industrial-robot",
      "vc:label": "Industrial Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-computing",
      "vc:label": "Spatial Computing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0134"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Cylindrical Robot"
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
  "@id": "urn:ngm:class:cylindrical-robot",
  "@type": "Class",
  "label": "Cylindrical Robot",
  "definition": "Cylindrical robot employs one rotary joint (azimuth) and two prismatic joints (radial and vertical) that produce a cylindrical workspace, enabling efficient reach over rectangular work envelopes.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:azimuth-drive",
        "label": "Azimuth Drive"
      },
      {
        "@id": "urn:ngm:class:end-effector-mount",
        "label": "End-Effector Mount"
      },
      {
        "@id": "urn:ngm:class:radial-actuator",
        "label": "Radial Actuator"
      },
      {
        "@id": "urn:ngm:class:vertical-actuator",
        "label": "Vertical Actuator"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:base-support",
        "label": "Base Support"
      },
      {
        "@id": "urn:ngm:class:prismatic-actuators",
        "label": "Prismatic Actuators"
      },
      {
        "@id": "urn:ngm:class:rotary-joint",
        "label": "Rotary Joint"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:component-assembly",
        "label": "Component Assembly"
      },
      {
        "@id": "urn:ngm:class:depalletising",
        "label": "Depalletising"
      },
      {
        "@id": "urn:ngm:class:palletising",
        "label": "Palletising"
      },
      {
        "@id": "urn:ngm:class:pick-and-place",
        "label": "Pick and Place"
      }
    ]
  },
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:cylindrical-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9aa6232952c4f2b0f54d6c613dcd9eaa21b3087e51fe3a7baa96d92e450123aa"
  },
  "vc:resolutions": [
    {
      "raw": "[[Articulated Robots]]",
      "resolved": "urn:visionflow:linked:articulated-robots",
      "kind": "StubLink"
    },
    {
      "raw": "[[Assembly Automation]]",
      "resolved": "urn:visionflow:linked:assembly-automation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Azimuth Drive]]",
      "resolved": "urn:visionflow:linked:azimuth-drive",
      "kind": "StubLink"
    },
    {
      "raw": "[[Base Support]]",
      "resolved": "urn:visionflow:linked:base-support",
      "kind": "StubLink"
    },
    {
      "raw": "[[Component Assembly]]",
      "resolved": "urn:visionflow:linked:component-assembly",
      "kind": "StubLink"
    },
    {
      "raw": "[[Control Systems]]",
      "resolved": "urn:visionflow:linked:control-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[Coordinate Robots]]",
      "resolved": "urn:visionflow:linked:coordinate-robots",
      "kind": "StubLink"
    },
    {
      "raw": "[[Depalletising]]",
      "resolved": "urn:visionflow:linked:depalletising",
      "kind": "StubLink"
    },
    {
      "raw": "[[End-Effector Mount]]",
      "resolved": "urn:visionflow:linked:end-effector-mount",
      "kind": "StubLink"
    },
    {
      "raw": "[[Fixed-Base Manipulator]]",
      "resolved": "urn:visionflow:linked:fixed-base-manipulator",
      "kind": "StubLink"
    },
    {
      "raw": "[[Material Handling]]",
      "resolved": "urn:visionflow:linked:material-handling",
      "kind": "StubLink"
    },
    {
      "raw": "[[Palletising]]",
      "resolved": "urn:visionflow:linked:palletising",
      "kind": "StubLink"
    },
    {
      "raw": "[[Pick and Place]]",
      "resolved": "urn:visionflow:linked:pick-and-place",
      "kind": "StubLink"
    },
    {
      "raw": "[[Prismatic Actuators]]",
      "resolved": "urn:visionflow:linked:prismatic-actuators",
      "kind": "StubLink"
    },
    {
      "raw": "[[Radial Actuator]]",
      "resolved": "urn:visionflow:linked:radial-actuator",
      "kind": "StubLink"
    },
    {
      "raw": "[[Rotary Joint]]",
      "resolved": "urn:visionflow:linked:rotary-joint",
      "kind": "StubLink"
    },
    {
      "raw": "[[Vertical Actuator]]",
      "resolved": "urn:visionflow:linked:vertical-actuator",
      "kind": "StubLink"
    },
    {
      "raw": "[[Wrist]]",
      "resolved": "urn:visionflow:linked:wrist",
      "kind": "StubLink"
    },
    {
      "raw": "[[Force Control]]",
      "resolved": "urn:visionflow:owl:class:force-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Industrial Robot]]",
      "resolved": "urn:visionflow:owl:class:industrial-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Computing Paradigm]]",
      "resolved": "urn:visionflow:owl:class:spatial-computing",
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
  - Cylindrical robot employs one rotary joint (azimuth) and two prismatic joints (radial and vertical) that produce a cylindrical workspace, enabling efficient reach over rectangular work envelopes. This architecture, simpler and more affordable than six-axis articulated robots, has historically dominated [[Assembly Automation]] and [[Material Handling]] applications where reach and vertical lift are primary requirements.

- ### Semantic Classification
  - owl-class:: robotics:CylindricalRobot
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - bridges-to:: [[Spatial Computing Paradigm]]
  - is-subclass-of:: [[Industrial Robot]], [[Coordinate Robots]]
  - has-part:: [[Azimuth Drive]], [[Radial Actuator]], [[Vertical Actuator]], [[End-Effector Mount]]
  - requires:: [[Rotary Joint]], [[Prismatic Actuators]], [[Base Support]]
  - enables:: [[Palletising]], [[Pick and Place]], [[Component Assembly]], [[Depalletising]]
  - is-subclass-of:: [[Fixed-Base Manipulator]]

- ### Content
  The cylindrical robot geometry arises from decoupling motion into rotational positioning around a vertical axis and translational movement in radial and vertical directions. Early robots utilised this kinematic structure because it maps naturally onto hydraulic and pneumatic actuators, enabling simple mechanical design with direct drive or low-ratio transmission. The workspace forms a cylinder, with reach determined by maximum radial extension and stroke limited by radial and vertical travel.

  Cylindrical robots remain prevalent in industrial automation where their geometric simplicity translates to lower cost, simpler control systems, and higher mechanical stiffness compared to articulated alternatives. Their fixed footprint and workspace geometry simplify safety zone definition and collision avoidance. However, the restriction to cylindrical coordinates reduces flexibility for complex trajectory following and orientation changes required in modern precision tasks, explaining gradual displacement by [[Articulated Robots]] in sophisticated manufacturing.

  Contemporary cylindrical robots incorporate advanced [[Control Systems]] enabling smooth path planning in Cartesian space despite cylindrical kinematics, collaborative operation through [[Force Control]], and vision-guided task execution. Hybrid designs combine cylindrical base motion with articulated [[Wrist]] mechanisms to extend capability whilst retaining the simplicity advantages of cylindrical structure for gross positioning.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
