public:: true
alias:: OccupancyGrid

# Occupancy Grid
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:occupancy-grid",
  "@type": "Page",
  "vc:slug": "occupancy-grid",
  "title": "Occupancy Grid",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:occupancy-grid",
  "@type": "Class",
  "label": "Occupancy Grid",
  "definition": "An occupancy grid is a probabilistic spatial representation of a robot's environment as a discretised lattice of cells, each storing a probability or log-odds value indicating the likelihood that the corresponding region of space is occupied by an obstacle. It provides a metric map suitable for collision avoidance, path planning, and SLAM by fusing noisy sensor measurements through Bayesian updates.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:environment-mapping",
      "label": "Environment Mapping"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:lidar-sensor",
        "label": "LiDAR Sensor"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      },
      {
        "@id": "urn:ngm:class:costmap",
        "label": "Costmap"
      },
      {
        "@id": "urn:ngm:class:voxel-grid",
        "label": "Voxel Grid"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      },
      {
        "@id": "urn:ngm:class:collision-avoidance",
        "label": "Collision Avoidance"
      },
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      },
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Global Path Planning"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:rb-0075-range-finder",
        "label": "Range Sensor"
      },
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Robot Pose Estimation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:metric-map",
        "label": "Metric Map"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:topological-map",
        "label": "Topological Map"
      },
      {
        "@id": "urn:ngm:class:feature-map",
        "label": "Feature Map"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:occupancy-map",
      "label": "Occupancy Map"
    },
    {
      "@id": "urn:ngm:class:probabilistic-grid-map",
      "label": "Probabilistic Grid Map"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - An occupancy grid is a discretised probabilistic map used in robotics and autonomous systems for [[Environment Mapping]], where each cell encodes the posterior probability of obstacle presence derived from [[Sensor Fusion]] of range measurements.

- ### Relationships
  - Occupancy grids are populated by fusing [[Lidar Sensor]] returns and other range measurements via Bayesian inverse sensor models. They are a core representation in [[SLAM]] pipelines where map building and localisation are performed simultaneously, and they consume [[Point Cloud]] data as input. The resulting grid representation directly feeds [[Motion Planning]] algorithms such as A* or potential-field methods that require collision-free path computation.

- ### Content
  - The occupancy grid formalism was introduced by Alberto Elfes and Hans Moravec at Carnegie Mellon University in 1985-1989. Their key insight was to represent environment uncertainty probabilistically using a fixed-resolution grid rather than storing a list of discrete obstacles, enabling graceful handling of noisy sonar sensors. Log-odds representation — storing log(P(occupied)/P(free)) in each cell — was adopted to avoid numerical underflow and to allow simple additive sensor updates. The approach became foundational in mobile robotics research throughout the 1990s and 2000s.

  - Each cell in an occupancy grid is updated by applying Bayes' rule using the sensor's inverse model: given a range measurement z and the robot's pose x, the model computes P(cell occupied | z, x). In practice, cells in a sonar or lidar beam up to the measured range are decremented (marked free), while the cell at the measured range is incremented (marked occupied). Log-odds summation makes this computationally efficient. 3D volumetric extensions such as OctoMap use octrees to achieve memory-efficient adaptive resolution, and deep-learning variants predict occupancy from camera images without explicit range measurements.

  - Occupancy grids matter because they provide a universal, resolution-independent map format that bridges raw sensor data and high-level planning. They are directly usable by global path planners, local obstacle avoidance algorithms, and spatial AI systems. Their probabilistic nature correctly represents sensor uncertainty, avoiding overconfidence in map quality. In autonomous driving, birds-eye-view occupancy grids are the standard representation for predicting dynamic agent positions, and the representation has become a central target for end-to-end learned perception systems.

  - In 2024-2025, occupancy grids are experiencing a renaissance in autonomous driving through learned occupancy prediction networks such as Tesla's occupancy network and the OpenOccupancy benchmark. These neural occupancy maps predict 3D voxel grids from surround-view camera images, bypassing the need for explicit lidar sensors. Differentiable occupancy representations are being integrated into end-to-end planning pipelines where the map representation is jointly optimised with planning objectives. In mobile robotics, the Nav2 stack in ROS 2 relies on occupancy grids as the primary costmap representation, and ongoing work addresses dynamic environments by coupling occupancy grids with object-track propagation.