public:: true

# Coordinate Frame
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:coordinate-frame",
  "@type": "Page",
  "vc:slug": "coordinate-frame",
  "title": "Coordinate Frame",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:coordinate-frame",
  "@type": "Class",
  "label": "Coordinate Frame",
  "definition": "A coordinate frame is a reference system defined by an origin and a set of axes against which positions, orientations, and motions are measured. In robotics and perception, multiple frames (world, base, sensor, tool) are related by rigid-body transforms so that data from different sources can be expressed consistently. Correct frame management is essential for sensor fusion, motion planning, and collision checking.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-navigation-and-planning",
      "label": "Navigation and Planning"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:origin-point",
        "label": "Origin Point"
      },
      {
        "@id": "urn:ngm:class:axis-vector",
        "label": "Axis Vector"
      },
      {
        "@id": "urn:ngm:class:rotation-matrix",
        "label": "Rotation Matrix"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:rigid-body-transform",
        "label": "Rigid Body Transform"
      },
      {
        "@id": "urn:ngm:class:homogeneous-transformation-matrix",
        "label": "Homogeneous Transformation Matrix"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      },
      {
        "@id": "urn:ngm:class:collision-detection",
        "label": "Collision Detection"
      },
      {
        "@id": "urn:ngm:class:inverse-kinematics",
        "label": "Inverse Kinematics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:quaternion-math",
        "label": "Quaternion"
      },
      {
        "@id": "urn:ngm:class:euler-angles",
        "label": "Euler Angles"
      },
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:exteroceptive-sensor",
        "label": "Exteroceptive Sensor"
      },
      {
        "@id": "urn:ngm:class:inertial-measurement-unit",
        "label": "Inertial Measurement Unit"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Simultaneous Localization and Mapping"
      },
      {
        "@id": "urn:ngm:class:robot-kinematics",
        "label": "Robot Kinematics"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ros",
        "label": "ROS TF Framework"
      },
      {
        "@id": "urn:ngm:class:denavit-hartenberg-parameters",
        "label": "Denavit-Hartenberg Convention"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:coordinate-system",
        "label": "Global Coordinate System"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:exteroceptive-sensor",
        "label": "Exteroceptive Sensor"
      },
      {
        "@id": "urn:ngm:class:collision-detection",
        "label": "Collision Detection"
      },
      {
        "@id": "urn:ngm:class:transform-tree",
        "label": "Transform Tree"
      },
      {
        "@id": "urn:ngm:class:odometry",
        "label": "Odometry"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:reference-frame",
      "label": "Reference Frame"
    },
    {
      "@id": "urn:ngm:class:cartesian-frame",
      "label": "Cartesian Frame"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A coordinate frame is an origin-and-axes reference for measuring pose and motion, required to interpret data from an [[Exteroceptive Sensor]] and to perform [[Collision Detection]].
- ### Content
  - Frames are linked by homogeneous transforms forming a tree (for example via ROS tf), letting a system convert measurements between sensor, robot, and world references. Errors in frame definitions or transform chains produce systematic offsets that corrupt mapping, planning, and manipulation.
