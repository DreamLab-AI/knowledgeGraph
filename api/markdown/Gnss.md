public:: true

# Gnss
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:gnss",
  "@type": "Page",
  "title": "Gnss",
  "vc:slug": "gnss",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gnss",
  "@type": "Class",
  "label": "Gnss",
  "definition": "A Global Navigation Satellite System (GNSS) is a constellation of satellites that broadcast timed signals enabling receivers to compute their absolute position, velocity and time anywhere on Earth. GPS, Galileo, GLONASS and BeiDou are the principal systems, with receivers trilaterating position from signal travel times across multiple satellites. In robotics, GNSS provides global geo-referenced localisation that anchors local sensor-based estimates to an absolute coordinate frame.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:localisation",
      "label": "Localization"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gps",
        "label": "GPS"
      },
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      },
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:localisation",
        "label": "Localization"
      },
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:kalman-filter",
        "label": "Kalman Filter"
      },
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicle"
      },
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:localisation",
        "label": "Localization"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:gps",
        "label": "GPS"
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
  - A Global Navigation Satellite System (GNSS) is a constellation of satellites that broadcast timed signals enabling receivers to compute their absolute position, velocity and time anywhere on Earth. GPS, Galileo, GLONASS and BeiDou are the principal systems, with receivers trilaterating position from signal travel times across multiple satellites. In robotics, GNSS provides global geo-referenced localisation that anchors local sensor-based estimates to an absolute coordinate frame.
  - Related core concepts: [[Localisation]] [[GPS]] [[Autonomous Navigation]] [[Sensor Fusion]] [[Kalman Filter]]
- ### Overview
  - GNSS delivers absolute positioning by measuring how long coded signals take to reach a receiver from satellites with precisely known orbits and clocks. Augmentation techniques such as RTK and PPP refine accuracy from metres to centimetres, while integration with inertial measurement units bridges signal outages. For robots and vehicles, GNSS is the global anchor that complements relative, drift-prone onboard estimation.
- ### Mechanisms
  - Trilateration: solving position from pseudorange measurements to four or more satellites.
  - Constellations: GPS, Galileo, GLONASS and BeiDou, each providing independent satellite signals.
  - Augmentation: RTK, PPP and SBAS corrections that improve accuracy and integrity.
  - Inertial fusion: tight or loose coupling with IMU data via Kalman filtering to handle outages and high dynamics.
  - Error sources: ionospheric delay, multipath, satellite geometry and urban canyon signal blockage.
- ### Applications
  - Outdoor autonomous vehicle and drone navigation with global geo-referencing.
  - Precision agriculture and surveying requiring centimetre-level positioning.
  - Anchoring SLAM and dead-reckoning estimates to an absolute frame.
  - Fleet tracking, logistics and timing synchronisation across distributed systems.
- ### Relationships
  - subClassOf:: [[Localisation]]
  - relatedTo:: [[GPS]]
  - relatedTo:: [[Autonomous Navigation]]
  - relatedTo:: [[SLAM]]
  - dependsOn:: [[Sensor]]
  - enables:: [[Localisation]]
  - enables:: [[Autonomous Navigation]]
  - uses:: [[Kalman Filter]]
  - uses:: [[Sensor]]
  - supports:: [[Autonomous Vehicle]]
  - supports:: [[Path Planning]]
  - partOf:: [[Localisation]]
  - requires:: [[Sensor]]
  - bridgesTo:: [[Sensor Fusion]]
  - contrastsWith:: [[SLAM]]
  - hasPart:: [[GPS]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
