public:: true

# Gps Navigation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:gps-navigation",
  "@type": "Page",
  "title": "Gps Navigation",
  "vc:slug": "gps-navigation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gps-navigation",
  "@type": "Class",
  "label": "Gps Navigation",
  "definition": "GPS navigation is the use of the Global Positioning System — a satellite-based radio navigation system operated by the United States government — to determine the precise position, velocity, and time of a receiver anywhere on or near Earth. A GPS receiver calculates its location by measuring the time of arrival of signals from at least four satellites and applying trilateration. It is widely used in autonomous robots, vehicles, aircraft, and mobile devices as a primary or complementary localisation sensor.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:robotics", "label": "Robotics"}],
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:inertial-navigation", "label": "Inertial Navigation"},
      {"@id": "urn:ngm:class:visual-odometry", "label": "Visual Odometry"},
      {"@id": "urn:ngm:class:lidar-slam", "label": "Lidar Slam"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:satellite-communication", "label": "Satellite Communication"},
      {"@id": "urn:ngm:class:atomic-clock", "label": "Atomic Clock"},
      {"@id": "urn:ngm:class:spectrum-allocation", "label": "Spectrum Allocation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomous-vehicle", "label": "Autonomous Vehicle"},
      {"@id": "urn:ngm:class:drone-navigation", "label": "Drone Navigation"},
      {"@id": "urn:ngm:class:geofencing", "label": "Geofencing"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:trilateration", "label": "Trilateration"},
      {"@id": "urn:ngm:class:kalman-filter", "label": "Kalman Filter"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:gnss-receiver", "label": "Gnss Receiver"},
      {"@id": "urn:ngm:class:satellite-signal", "label": "Satellite Signal"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:robot-localisation", "label": "Robot Localisation"},
      {"@id": "urn:ngm:class:fleet-management", "label": "Fleet Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:gnss", "label": "Gnss"},
      {"@id": "urn:ngm:class:dead-reckoning", "label": "Dead Reckoning"},
      {"@id": "urn:ngm:class:real-time-kinematic", "label": "Real-Time Kinematic"}
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
  - [[Gps Navigation]] uses signals from the [[Satellite Communication]] constellation of GPS satellites to compute position via [[Trilateration]] with sub-metre to centimetre accuracy when augmented.
  - A [[Gnss Receiver]] measures signal time-of-flight from at least four satellites; [[Kalman Filter]] algorithms smooth position estimates and blend with [[Inertial Navigation]] data.
  - Widely used in [[Autonomous Vehicle]] systems, mobile robotics, and surveying, often combined with [[Sensor Fusion]] to maintain accuracy in [[Dead Reckoning]] fallback scenarios.

- ### Overview
  - GPS (Global Positioning System) was developed by the US Department of Defense and declared operational in 1995. It consists of a constellation of at least 24 satellites in medium Earth orbit, ground control stations, and user receivers. The system broadcasts precise timing signals; receivers measure the time differences to compute position through trilateration.
  - For robotics, GPS provides an absolute position reference in outdoor environments but suffers from signal occlusion in urban canyons, under foliage, or indoors. Real-Time Kinematic (RTK) GPS uses a fixed base station to provide differential corrections, achieving centimetre-level accuracy suitable for precision agriculture and surveying robots. In autonomous vehicles, GPS is combined with IMUs, lidar, and cameras via sensor fusion to maintain reliable localisation when satellite signals are degraded.

- ### Key aspects
  - **Accuracy tiers** — standalone GPS offers 3–5 m accuracy; SBAS augmentation yields sub-metre; RTK achieves centimetre level.
  - **Multipath and shadowing** — reflections from buildings and tree canopy degrade accuracy in urban and forested environments.
  - **Signal vulnerability** — GPS signals are weak and susceptible to jamming and spoofing, requiring anti-spoofing measures for safety-critical applications.
  - **Multi-constellation** — modern receivers combine GPS (US), GLONASS (Russia), Galileo (EU), and BeiDou (China) for improved geometry and redundancy.

- ### Applications
  - Outdoor mobile robot waypoint navigation and return-to-home functions.
  - Autonomous agricultural machinery for precise row guidance and field mapping.
  - UAV/drone geofencing and return-to-home safety systems.
  - Vehicle fleet tracking and logistics routing.

- ### Mechanisms
  - **Code-phase measurement** — coarse acquisition (C/A) code correlation determines pseudorange to each satellite.
  - **Carrier-phase measurement** — RTK uses the carrier phase of the 1575.42 MHz L1 signal to achieve centimetre resolution after ambiguity resolution.
  - **Differential correction** — SBAS (EGNOS, WAAS) or RTK base stations broadcast corrections that cancel common-mode errors.

- ### Relationships
  - contrastsWith:: [[Inertial Navigation]]
  - contrastsWith:: [[Visual Odometry]]
  - contrastsWith:: [[Lidar Slam]]
  - requires:: [[Satellite Communication]]
  - requires:: [[Atomic Clock]]
  - requires:: [[Spectrum Allocation]]
  - enables:: [[Autonomous Vehicle]]
  - enables:: [[Drone Navigation]]
  - enables:: [[Geofencing]]
  - uses:: [[Trilateration]]
  - uses:: [[Kalman Filter]]
  - uses:: [[Sensor Fusion]]
  - hasPart:: [[Gnss Receiver]]
  - hasPart:: [[Satellite Signal]]
  - supports:: [[Robot Localisation]]
  - supports:: [[Fleet Management]]
  - relatedTo:: [[Gnss]]
  - relatedTo:: [[Dead Reckoning]]
  - relatedTo:: [[Real-Time Kinematic]]

- ### Provenance
  - updated:: 2026-06-15
