public:: true

# ROS Navigation Stack
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ros-navigation-stack",
  "@type": "Page",
  "vc:slug": "ros-navigation-stack",
  "title": "ROS Navigation Stack",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ros-navigation-stack",
  "@type": "Class",
  "label": "ROS Navigation Stack",
  "definition": "The ROS Navigation Stack is a collection of software packages within the Robot Operating System (ROS) framework that provides a robot with the capability to move autonomously through an environment by combining map building, localisation, global path planning, local obstacle avoidance, and motor control into an integrated pipeline. It abstracts sensor inputs (laser scan, odometry, IMU), maintains a 2D occupancy grid map and cost layers, runs AMCL (Adaptive Monte Carlo Localisation) for pose estimation, and uses A* or Dijkstra for global plans combined with DWA (Dynamic Window Approach) or TEB (Timed Elastic Band) for local reactive navigation. The Navigation Stack is the de facto standard for mobile ground-robot navigation in research and production robotics.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robot-operating-system",
      "label": "Robot Operating System"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:move-base",
        "label": "Move Base"
      },
      {
        "@id": "urn:ngm:class:costmap",
        "label": "Costmap 2D"
      },
      {
        "@id": "urn:ngm:class:global-planner",
        "label": "Global Planner"
      },
      {
        "@id": "urn:ngm:class:local-planner",
        "label": "Local Planner"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:robot-operating-system",
        "label": "Robot Operating System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:occupancy-grid",
        "label": "Occupancy Grid Map"
      },
      {
        "@id": "urn:ngm:class:odometry",
        "label": "Odometry"
      },
      {
        "@id": "urn:ngm:class:transform-tree",
        "label": "Transform Tree"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      },
      {
        "@id": "urn:ngm:class:localisation",
        "label": "Localisation"
      },
      {
        "@id": "urn:ngm:class:particle-filter",
        "label": "Particle Filter"
      },
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Simultaneous Localisation and Mapping"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      },
      {
        "@id": "urn:ngm:class:obstacle-avoidance",
        "label": "Obstacle Avoidance"
      },
      {
        "@id": "urn:ngm:class:autonomous-robot",
        "label": "Autonomous Robot"
      },
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:publish-subscribe-pattern",
        "label": "Publish-Subscribe Messaging"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ros-2",
        "label": "ROS 2"
      },
      {
        "@id": "urn:ngm:class:gazebo-simulator",
        "label": "Gazebo Simulator"
      },
      {
        "@id": "urn:ngm:class:nav2",
        "label": "Nav2"
      },
      {
        "@id": "urn:ngm:class:mobile-robot",
        "label": "Mobile Robot"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ros-nav-stack",
      "label": "ROS Nav Stack"
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
  - The [[ROS Navigation Stack]] is the standard [[Robot Operating System]] software pipeline for autonomous mobile robot navigation, integrating [[Sensor Fusion]], [[Localisation]], [[Path Planning]], and [[Obstacle Avoidance]] modules into a coherent, configurable system used across research and industrial robotics.

- ### Relationships
  - [[ROS Navigation Stack]] sits atop the [[Robot Operating System]] middleware layer, using its publish-subscribe messaging to connect sensor drivers (providing [[Lidar]] scans and wheel odometry), the [[Sensor Fusion]] layer (robot_localization package providing EKF-based pose estimates), map server, and planner nodes. [[Localisation]] is performed by AMCL using Monte Carlo particle filtering against a known occupancy map. Global [[Path Planning]] (navfn, global_planner) produces a collision-free trajectory using A* or Dijkstra over the static costmap, while local [[Obstacle Avoidance]] planners react to dynamic obstacles in real time. The [[Gazebo Simulator]] ecosystem provides the standard simulation environment for testing navigation configurations before deployment on [[Autonomous Robot]] hardware. [[ROS 2]] introduced the Navigation2 (Nav2) successor with action-server architecture, lifecycle management, and improved real-time performance.

- ### Content
  - The ROS Navigation Stack was developed at Willow Garage around 2009–2010 alongside the foundational ROS framework itself, drawing on prior robotics navigation research to produce a reusable, sensor-agnostic system. The initial design was driven by the PR2 mobile manipulation robot and its need to move through office environments reliably. The navigation stack abstracted over sensor types by defining a common sensor message interface (sensor_msgs/LaserScan, nav_msgs/Odometry) so the same planning and localisation algorithms could work with laser scanners, sonar, or depth cameras.

  - The stack's architecture is built around a costmap hierarchy. The static map costmap layer represents the known floor plan obtained from SLAM (Simultaneous Localisation and Mapping). Dynamic layers add inflation radii around obstacles, footprint constraints, and sensor-updated obstacle data. The global planner queries the static costmap to compute a full path from start to goal. The local planner then executes this path in a receding-horizon fashion, evaluating candidate velocity commands for safety and progress using the Dynamic Window Approach (DWA) which samples from dynamically feasible velocity space. The move_base action server coordinates all components and handles recovery behaviours (clearing costmaps, in-place rotation) when the robot becomes stuck.

  - The ROS Navigation Stack enabled a step-change in robotics research productivity. Labs worldwide adopted it as a baseline, allowing researchers to focus on novel contributions (better localisers, improved planners, learning-based policies) rather than rebuilding navigation infrastructure from scratch. Industrial warehouse robots, hospital delivery robots, and agricultural platforms have all been prototyped and deployed using nav-stack foundations. The consistent interface definitions created a common vocabulary across the community that persists in the Nav2 era.

  - In 2024–2025 the ROS 2 Nav2 framework (the official successor) has matured into a production-grade system with lifecycle-managed servers, composable nodes for improved CPU cache locality, and a behaviour-tree-based mission execution engine replacing the ad-hoc state machine of the original nav-stack. Learned navigation policies trained in simulation are being integrated as plugins alongside classical planners, enabling robots to handle complex social navigation scenarios. SLAM systems (Cartographer, RTAB-Map, LIO-SAM) produce 3D maps consumable by Nav2, extending navigation beyond flat floor environments to multilevel structures. Sensor fusion using [[Sensor Fusion]] nodes now routinely integrates IMU, wheel encoders, and GPS for outdoor navigation.