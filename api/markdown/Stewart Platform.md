public:: true

# Stewart Platform
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3059f4e86025e17bd60606cd9289a12d792641b836bb891080cce942adad31d1",
  "@type": "Page",
  "vc:slug": "stewart-platform",
  "title": "Stewart Platform",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:parallel-robot",
      "vc:label": "Parallel Robot"
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
      "vc:value": "RB-0137"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Stewart Platform"
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
  "@id": "urn:ngm:class:stewart-platform",
  "@type": "Class",
  "label": "Stewart Platform",
  "definition": "A Stewart Platform (also known as a Gough-Stewart platform) is a type of parallel manipulator consisting of six variable-length prismatic actuators (struts) connecting a fixed base plate to a moveable top plate via universal or spherical joints, enabling six degrees of freedom—three translational and three rotational—within a compact, high-stiffness mechanical structure. First described by V.E. Gough in 1954 for tyre testing and later analysed by D. Stewart in 1965 for flight simulation, the architecture is characterised by high load-bearing capacity, positional accuracy, and mechanical rigidity compared to serial manipulators.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:parallel-robot",
      "label": "Parallel Robot"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"},
      {"@id": "urn:ngm:class:robot-joint", "label": "Robot Joint"},
      {"@id": "urn:ngm:class:end-effector", "label": "End Effector"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:kinematics", "label": "Kinematics"},
      {"@id": "urn:ngm:class:robot-dynamics", "label": "Robot Dynamics"},
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:robot-control", "label": "Robot Control"},
      {"@id": "urn:ngm:class:robot-kinematics", "label": "Robot Kinematics"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:industrial-robot", "label": "Industrial Robot"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:surgical-robot", "label": "Surgical Robot"},
      {"@id": "urn:ngm:class:haptic-feedback", "label": "Haptic Feedback"},
      {"@id": "urn:ngm:class:robot-singularity", "label": "Robot Singularity"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:stewart-platform:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3059f4e86025e17bd60606cd9289a12d792641b836bb891080cce942adad31d1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Parallel Robot]]",
      "resolved": "urn:visionflow:owl:class:parallel-robot",
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


### Definition

A Stewart Platform (also known as a Gough-Stewart platform) is a type of parallel manipulator consisting of six variable-length prismatic actuators (struts) connecting a fixed base plate to a moveable top plate via universal or spherical joints, enabling six degrees of freedom—three translational and three rotational—within a compact, high-stiffness mechanical structure. First described by V.E. Gough in 1954 for tyre testing and later analysed by D. Stewart in 1965 for flight simulation, the architecture is characterised by high load-bearing capacity, positional accuracy, and mechanical rigidity compared to serial manipulators.

### Relationships

The Stewart Platform **hasPart** [[Actuator]] (the six prismatic linear drives), [[Robot Joint]] (universal/spherical joints at each strut terminus), and [[End Effector]] (the moving top plate that carries payload or tooling). It **requires** [[Kinematics]] (both forward and inverse kinematics are computationally demanding due to the parallel closed-loop structure), [[Robot Dynamics]] (for high-bandwidth control of all six struts simultaneously), and [[Motion Planning]] (to generate collision-free trajectories in the constrained workspace). It **uses** [[Robot Control]] strategies and [[Robot Kinematics]] models to coordinate strut lengths to achieve desired platform pose. It **contrastsWith** [[Industrial Robot]] serial manipulators, which sacrifice rigidity and payload for larger workspace and simpler kinematics. It is **relatedTo** [[Surgical Robot]] (where precision and stiffness are critical), [[Haptic Feedback]] (force-reflecting interfaces often use parallel structures), and [[Robot Singularity]] (parallel robots have different—often internal—singularity configurations than serial robots).

### Content

The Stewart Platform's defining characteristic is its closed kinematic chain: all six actuators simultaneously constrain and drive the end-effector, which means forces are shared across multiple limbs rather than accumulated serially. This gives the platform exceptional stiffness-to-weight ratio and allows it to support heavy loads with sub-millimetre repeatability.

Kinematic analysis of the Stewart Platform is split into two problems. Inverse kinematics—finding the six strut lengths required to achieve a desired pose—is analytically straightforward: given the target position and orientation of the top plate, the lengths are computed directly from geometry. Forward kinematics—finding the top plate pose given the six measured strut lengths—is highly non-linear with up to 40 real solutions in general and is typically solved iteratively or via neural network approximation for real-time control.

Applications span flight and driving simulators (where the platform moves a cockpit to reproduce motion cues), precision machining (where the rigid structure provides accuracy superior to gantry machines for certain geometries), surgical robotics (minimally invasive procedures requiring millimetric precision), earthquake simulation tables (testing structural resilience), and haptic devices (providing force reflection in teleoperation). Each application domain places distinct demands on workspace volume, payload capacity, velocity bandwidth, and positional accuracy, driving variations in strut geometry, actuator type (electric, hydraulic, pneumatic), and joint design.

The platform's primary limitations are its restricted workspace compared to serial robots of equivalent reach, complex control due to kinematic coupling between actuators, and internal singularities within the workspace where controllability is lost. Active research addresses singularity-robust trajectory planning, adaptive control for varying payloads, and hybrid serial-parallel architectures that combine the strengths of both paradigms.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
