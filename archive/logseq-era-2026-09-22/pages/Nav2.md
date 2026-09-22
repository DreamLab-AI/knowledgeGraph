public:: true

# Nav2
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:nav2",
  "@type": "Page",
  "vc:slug": "nav2",
  "title": "Nav2",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:nav2",
  "@type": "Class",
  "label": "Nav2",
  "definition": "Nav2 (Navigation2) is the production-ready autonomous navigation framework for ROS 2, providing a composable, lifecycle-managed stack of planners, controllers, costmap layers, and behaviour-tree-based task orchestration. It enables mobile robots to safely compute and execute collision-free paths in structured and semi-structured environments.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:navigation-stack",
      "label": "Navigation Stack"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ros-2",
        "label": "ROS 2"
      },
      {
        "@id": "urn:ngm:class:dds-middleware",
        "label": "DDS Middleware"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:behaviour-tree",
        "label": "Behavior Tree"
      },
      {
        "@id": "urn:ngm:class:costmap",
        "label": "Costmap"
      },
      {
        "@id": "urn:ngm:class:lidar",
        "label": "LiDAR"
      },
      {
        "@id": "urn:ngm:class:occupancy-grid",
        "label": "Occupancy Grid"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      },
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      },
      {
        "@id": "urn:ngm:class:obstacle-avoidance",
        "label": "Obstacle Avoidance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:localisation",
        "label": "Robot Localization"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:autonomous-mobile-robots",
        "label": "Autonomous Mobile Robots"
      },
      {
        "@id": "urn:ngm:class:warehouse-robotics",
        "label": "Warehouse Robotics"
      },
      {
        "@id": "urn:ngm:class:service-robotics",
        "label": "Service Robotics"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:move-base",
        "label": "move_base"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      },
      {
        "@id": "urn:ngm:class:autonomous-mobile-robots",
        "label": "Autonomous Mobile Robots"
      },
      {
        "@id": "urn:ngm:class:robot-operating-system",
        "label": "Robot Operating System"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:navigation2",
      "label": "Navigation2"
    },
    {
      "@id": "urn:ngm:class:ros2-navigation",
      "label": "ROS 2 Navigation"
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
  - [[Nav2]] is the official navigation framework for [[ROS 2]], supplying modular planners (global and local), costmap 2D layers, recovery behaviours, and a [[Behaviour Tree]]-driven mission server that together allow a mobile robot to autonomously navigate from goal to goal.

- ### Relationships
  - Nav2 depends on [[ROS 2]] for its communication middleware and lifecycle management, uses [[Costmap]] layers to represent traversable and obstacle-occupied space, orchestrates planner/controller switching through [[Behaviour Tree]] executors, and produces behaviours central to [[Autonomous Navigation]] in [[Autonomous Mobile Robots]].

- ### Content
  - Nav2 is the direct successor to the original ROS Navigation Stack (move_base) and was redesigned from scratch for ROS 2 to exploit its improved security, lifecycle nodes, and DDS-based communication. The initial stable release targeted ROS 2 Foxy (2020) and has shipped in every subsequent distribution. The redesign introduced behaviour-tree task orchestration to replace the brittle state-machine approach of move_base, giving practitioners the ability to compose complex recovery sequences declaratively in XML.
  - The stack comprises several composable server nodes: the Planner Server (runs global path planning algorithms such as NavFn, Smac Planner, or ThetaStar), the Controller Server (runs local trajectory tracking such as DWB or MPPI), the Costmap2D servers (2D occupancy representations with pluggable layers for obstacles, inflation, and semantics), the Smoother Server, and the BT Navigator which drives the whole lifecycle using behaviour trees. All servers communicate via ROS 2 actions and services and expose standardised lifecycle transitions so system integrators can manage them atomically.
  - Nav2 matters because it provides a vendor-neutral, community-maintained navigation baseline used across research, logistics, and consumer robotics platforms. Commercial deployments include autonomous ground vehicles in warehouses, hospital service robots, and last-mile delivery prototypes. The plugin architecture means teams can swap planners or controllers without modifying the rest of the stack, dramatically reducing integration overhead when experimenting with MPPI or learned controllers.
  - In 2024–2025, Nav2 has reached a mature release cadence aligned with ROS 2 Rolling and Jazzy Jalisco, introducing coverage navigation primitives, improved MPPI controller performance with GPU-assisted sampling, and integration hooks for 3D voxel costmaps derived from depth cameras and LiDAR. The project's roadmap includes first-class support for dynamic obstacle prediction from learned perception models and simplified integration with the Nav2 Simple Commander Python API, which has become the de facto onboarding interface for new robot developers.

