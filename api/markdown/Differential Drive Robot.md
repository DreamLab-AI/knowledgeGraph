public:: true

# Differential Drive Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eff297084954925b5310c9967aaa118ab6a93b4c9858386607595b7298b0853e",
  "@type": "Page",
  "vc:slug": "differential-drive-robot",
  "title": "Differential Drive Robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:arc-trajectory-following",
      "vc:label": "Arc Trajectory Following"
    },
    {
      "@id": "urn:visionflow:linked:autonomous-vehicles",
      "vc:label": "Autonomous Vehicles"
    },
    {
      "@id": "urn:visionflow:linked:caster-wheel",
      "vc:label": "Caster Wheel"
    },
    {
      "@id": "urn:visionflow:linked:differential-drive-controller",
      "vc:label": "Differential Drive Controller"
    },
    {
      "@id": "urn:visionflow:linked:dubins-curves",
      "vc:label": "Dubins Curves"
    },
    {
      "@id": "urn:visionflow:linked:forward-locomotion",
      "vc:label": "Forward Locomotion"
    },
    {
      "@id": "urn:visionflow:linked:in-place-rotation",
      "vc:label": "In-Place Rotation"
    },
    {
      "@id": "urn:visionflow:linked:independent-wheel-motors",
      "vc:label": "Independent Wheel Motors"
    },
    {
      "@id": "urn:visionflow:linked:inertial-measurement-units",
      "vc:label": "Inertial Measurement Units"
    },
    {
      "@id": "urn:visionflow:linked:kinematic-model",
      "vc:label": "Kinematic Model"
    },
    {
      "@id": "urn:visionflow:linked:left-drive-motor",
      "vc:label": "Left Drive Motor"
    },
    {
      "@id": "urn:visionflow:linked:localisation",
      "vc:label": "Localisation"
    },
    {
      "@id": "urn:visionflow:linked:mobile-manipulation",
      "vc:label": "Mobile Manipulation"
    },
    {
      "@id": "urn:visionflow:linked:motor-drivers",
      "vc:label": "Motor Drivers"
    },
    {
      "@id": "urn:visionflow:linked:nonholonomic-robot",
      "vc:label": "Nonholonomic Robot"
    },
    {
      "@id": "urn:visionflow:linked:odometry-sensors",
      "vc:label": "Odometry Sensors"
    },
    {
      "@id": "urn:visionflow:linked:point-turning",
      "vc:label": "Point Turning"
    },
    {
      "@id": "urn:visionflow:linked:power-battery",
      "vc:label": "Power Battery"
    },
    {
      "@id": "urn:visionflow:linked:reeds-shepp-paths",
      "vc:label": "Reeds-Shepp Paths"
    },
    {
      "@id": "urn:visionflow:linked:right-drive-motor",
      "vc:label": "Right Drive Motor"
    },
    {
      "@id": "urn:visionflow:linked:service-robotics",
      "vc:label": "Service Robotics"
    },
    {
      "@id": "urn:visionflow:linked:skid-control",
      "vc:label": "Skid Control"
    },
    {
      "@id": "urn:visionflow:linked:visual-odometry",
      "vc:label": "Visual Odometry"
    },
    {
      "@id": "urn:visionflow:linked:warehouse-automation",
      "vc:label": "Warehouse Automation"
    },
    {
      "@id": "urn:visionflow:linked:wheel",
      "vc:label": "Wheel"
    },
    {
      "@id": "urn:visionflow:owl:class:mobile-robot",
      "vc:label": "Mobile Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:motion-planning",
      "vc:label": "Motion Planning"
    },
    {
      "@id": "urn:visionflow:owl:class:odometry",
      "vc:label": "Odometry"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-computing",
      "vc:label": "Spatial Computing"
    },
    {
      "@id": "urn:visionflow:owl:class:velocity-control",
      "vc:label": "VelocityControl"
    },
    {
      "@id": "urn:visionflow:owl:class:wheeled-robot",
      "vc:label": "Wheeled Robot"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0114"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Differential Drive Robot"
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
  "@id": "urn:ngm:class:differential-drive-robot",
  "@type": "Class",
  "label": "Differential Drive Robot",
  "definition": "Differential drive robot uses two independently controlled wheels on opposite sides to enable both forward/backward locomotion and in-place rotation, forming the most widely deployed Mobile Robot architecture.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robo Robot Type"
    },
    {
      "@id": "urn:ngm:class:wheeled-robot",
      "label": "Wheeled Robot"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:caster-wheel",
        "label": "Caster Wheel"
      },
      {
        "@id": "urn:ngm:class:differential-drive-controller",
        "label": "Differential Drive Controller"
      },
      {
        "@id": "urn:ngm:class:left-drive-motor",
        "label": "Left Drive Motor"
      },
      {
        "@id": "urn:ngm:class:right-drive-motor",
        "label": "Right Drive Motor"
      },
      {
        "@id": "urn:ngm:class:wheel",
        "label": "Wheel"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:independent-wheel-motors",
        "label": "Independent Wheel Motors"
      },
      {
        "@id": "urn:ngm:class:motor-driver",
        "label": "Motor Drivers"
      },
      {
        "@id": "urn:ngm:class:odometry-sensors",
        "label": "Odometry Sensors"
      },
      {
        "@id": "urn:ngm:class:power-battery",
        "label": "Power Battery"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:arc-trajectory-following",
        "label": "Arc Trajectory Following"
      },
      {
        "@id": "urn:ngm:class:forward-locomotion",
        "label": "Forward Locomotion"
      },
      {
        "@id": "urn:ngm:class:in-place-rotation",
        "label": "In-Place Rotation"
      },
      {
        "@id": "urn:ngm:class:point-turning",
        "label": "Point Turning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:differential-drive-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:eff297084954925b5310c9967aaa118ab6a93b4c9858386607595b7298b0853e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Arc Trajectory Following]]",
      "resolved": "urn:visionflow:linked:arc-trajectory-following",
      "kind": "StubLink"
    },
    {
      "raw": "[[Autonomous Vehicles]]",
      "resolved": "urn:visionflow:linked:autonomous-vehicles",
      "kind": "StubLink"
    },
    {
      "raw": "[[Caster Wheel]]",
      "resolved": "urn:visionflow:linked:caster-wheel",
      "kind": "StubLink"
    },
    {
      "raw": "[[Differential Drive Controller]]",
      "resolved": "urn:visionflow:linked:differential-drive-controller",
      "kind": "StubLink"
    },
    {
      "raw": "[[Dubins Curves]]",
      "resolved": "urn:visionflow:linked:dubins-curves",
      "kind": "StubLink"
    },
    {
      "raw": "[[Forward Locomotion]]",
      "resolved": "urn:visionflow:linked:forward-locomotion",
      "kind": "StubLink"
    },
    {
      "raw": "[[In-Place Rotation]]",
      "resolved": "urn:visionflow:linked:in-place-rotation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Independent Wheel Motors]]",
      "resolved": "urn:visionflow:linked:independent-wheel-motors",
      "kind": "StubLink"
    },
    {
      "raw": "[[Inertial Measurement Units]]",
      "resolved": "urn:visionflow:linked:inertial-measurement-units",
      "kind": "StubLink"
    },
    {
      "raw": "[[Kinematic Model]]",
      "resolved": "urn:visionflow:linked:kinematic-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[Left Drive Motor]]",
      "resolved": "urn:visionflow:linked:left-drive-motor",
      "kind": "StubLink"
    },
    {
      "raw": "[[Localisation]]",
      "resolved": "urn:visionflow:linked:localisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mobile Manipulation]]",
      "resolved": "urn:visionflow:linked:mobile-manipulation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Motor Drivers]]",
      "resolved": "urn:visionflow:linked:motor-drivers",
      "kind": "StubLink"
    },
    {
      "raw": "[[Nonholonomic Robot]]",
      "resolved": "urn:visionflow:linked:nonholonomic-robot",
      "kind": "StubLink"
    },
    {
      "raw": "[[Odometry Sensors]]",
      "resolved": "urn:visionflow:linked:odometry-sensors",
      "kind": "StubLink"
    },
    {
      "raw": "[[Point Turning]]",
      "resolved": "urn:visionflow:linked:point-turning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Power Battery]]",
      "resolved": "urn:visionflow:linked:power-battery",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reeds-Shepp Paths]]",
      "resolved": "urn:visionflow:linked:reeds-shepp-paths",
      "kind": "StubLink"
    },
    {
      "raw": "[[Right Drive Motor]]",
      "resolved": "urn:visionflow:linked:right-drive-motor",
      "kind": "StubLink"
    },
    {
      "raw": "[[Service Robotics]]",
      "resolved": "urn:visionflow:linked:service-robotics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Skid Control]]",
      "resolved": "urn:visionflow:linked:skid-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[Visual Odometry]]",
      "resolved": "urn:visionflow:linked:visual-odometry",
      "kind": "StubLink"
    },
    {
      "raw": "[[Warehouse Automation]]",
      "resolved": "urn:visionflow:linked:warehouse-automation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Wheel]]",
      "resolved": "urn:visionflow:linked:wheel",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mobile Robot]]",
      "resolved": "urn:visionflow:owl:class:mobile-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Motion Planning]]",
      "resolved": "urn:visionflow:owl:class:motion-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Odometry]]",
      "resolved": "urn:visionflow:owl:class:odometry",
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
    },
    {
      "raw": "[[VelocityControl]]",
      "resolved": "urn:visionflow:owl:class:velocity-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Wheeled Robot]]",
      "resolved": "urn:visionflow:owl:class:wheeled-robot",
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
  - Differential drive robot uses two independently controlled wheels on opposite sides to enable both forward/backward locomotion and in-place rotation, forming the most widely deployed [[Mobile Robot]] architecture. By differentially controlling wheel velocities, the robot achieves holonomic-like manoeuvring from non-holonomic kinematics, making differential drives ubiquitous in research platforms, [[Autonomous Vehicles]], and [[Mobile Manipulation]] systems.

- ### Semantic Classification
  - owl-class:: robotics:DifferentialDriveRobot
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - bridges-to:: [[Spatial Computing Paradigm]]
  - is-subclass-of:: [[Wheeled Robot]], [[Nonholonomic Robot]]
  - has-part:: [[Left Drive Motor]], [[Right Drive Motor]], [[Wheel]], [[Caster Wheel]], [[Differential Drive Controller]]
  - requires:: [[Independent Wheel Motors]], [[Odometry Sensors]], [[Motor Drivers]], [[Power Battery]]
  - enables:: [[Point Turning]], [[Forward Locomotion]], [[In-Place Rotation]], [[Arc Trajectory Following]]
  - depends-on:: [[Kinematic Model]], [[VelocityControl]]

- ### Content
  Differential drive kinematics operate through a simple principle: equal wheel speeds produce straight-line motion, whilst unequal speeds produce curved trajectories with the instantaneous centre of rotation located perpendicular to the axle. Setting opposite wheel velocities achieves in-place rotation without forward translation. This mechanical simplicity enables robots like the Pioneer, TurtleBot, and ROS reference platforms to achieve complex manoeuvres using straightforward control algorithms.

  The popularity of differential drive stems from its reliability, low cost, and predictable non-linear dynamics enabling accurate [[Odometry]]-based [[Localisation]]. However, differential drives are non-holonomic systems: the robot cannot move sideways despite having two degrees of freedom available, meaning it cannot simply drive to arbitrary positions in arbitrary orientations but must follow feasible paths respecting kinematic constraints. This restriction necessitates [[Motion Planning]] algorithms like [[Dubins Curves]] and [[Reeds-Shepp Paths]] that respect non-holonomy.

  Modern differential drive systems incorporate odometry fusion with [[Inertial Measurement Units]] and [[Visual Odometry]] for improved localisation, [[Skid Control]] to handle slip on compliant terrain, and adaptive control algorithms that estimate wheel friction and adjust motor commands accordingly. Multi-wheeled variants extend the architecture—four-wheel differential drives using paired motors, or three-wheeled configurations balancing stability and footprint. Integration with computer vision enables visually-guided navigation, whilst combinations with robotic arms create mobile manipulation platforms for [[Warehouse Automation]] and [[Service Robotics]].

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
