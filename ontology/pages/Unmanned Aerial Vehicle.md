public:: true

# Unmanned Aerial Vehicle

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:unmanned-aerial-vehicle",
  "@type": "Page",
  "title": "Unmanned Aerial Vehicle",
  "vc:slug": "unmanned-aerial-vehicle",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:unmanned-aerial-vehicle",
  "@type": "Class",
  "label": "Unmanned Aerial Vehicle",
  "definition": "An Unmanned Aerial Vehicle (UAV), commonly called a drone, is an aircraft that operates without an onboard human pilot, controlled either remotely or autonomously by onboard flight software. UAVs integrate flight control, navigation, sensing and communication subsystems to perform tasks ranging from aerial imaging to delivery and inspection. They span scales from small quadcopters to fixed-wing platforms and increasingly rely on autonomy for navigation and obstacle avoidance.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gps",
        "label": "Gps"
      },
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:remote-sensing",
        "label": "Remote Sensing"
      },
      {
        "@id": "urn:ngm:class:precision-agriculture",
        "label": "Precision Agriculture"
      },
      {
        "@id": "urn:ngm:class:surveillance",
        "label": "Surveillance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      },
      {
        "@id": "urn:ngm:class:telemetry",
        "label": "Telemetry"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:inertial-measurement-unit",
        "label": "Inertial Measurement Unit"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:mapping",
        "label": "Mapping"
      },
      {
        "@id": "urn:ngm:class:obstacle-avoidance",
        "label": "Obstacle Avoidance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:quadcopter",
        "label": "Quadcopter"
      },
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicle"
      },
      {
        "@id": "urn:ngm:class:swarm-robotics",
        "label": "Swarm Robotics"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robot",
        "label": "Robot"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A pilotless aircraft, controlled remotely or autonomously, that integrates flight control, navigation and sensing to perform imaging, inspection and delivery tasks.
  - Related: [[Robotics]] [[Autonomous Navigation]] [[Computer Vision]] [[Sensor]]
- ### Overview
  - A UAV combines airframe, propulsion, flight controller, sensors and a communications link to fly without an onboard pilot.
  - Control ranges from manual remote piloting through assisted flight to fully autonomous mission execution.
  - Onboard sensing (GPS, IMU, cameras, lidar) feeds state estimation, navigation and obstacle avoidance.
  - Platforms include multirotors for hover-and-stare tasks and fixed-wing types for long-range coverage.
- ### Key aspects
  - Flight control and stabilisation loops that translate setpoints into actuator commands.
  - State estimation fusing GNSS, inertial and visual data for accurate localisation.
  - Payloads such as cameras, multispectral sensors and delivery mechanisms.
  - Communications and telemetry links for command, control and data downlink.
  - Autonomy stacks for path planning, geofencing and collision avoidance.
- ### Applications
  - Aerial mapping, surveying and photogrammetry for construction and land management.
  - Crop monitoring and spraying in precision agriculture.
  - Infrastructure inspection of bridges, turbines and power lines.
  - Search and rescue, security surveillance and last-mile delivery.
- ### Relationships
  - partOf:: [[Robotics]]
  - uses:: [[Computer Vision]]
  - enables:: [[Remote Sensing]]
  - requires:: [[Autonomous Navigation]]
  - relatedTo:: [[Quadcopter]]
  - bridgesTo:: [[Robot]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
