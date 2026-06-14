public:: true

# Visual-Inertial Odometry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:visual-inertial-odometry",
  "@type": "Page",
  "vc:slug": "visual-inertial-odometry",
  "title": "Visual-Inertial Odometry",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:visual-inertial-odometry",
  "@type": "Class",
  "label": "Visual-Inertial Odometry",
  "definition": "Visual-inertial odometry (VIO) is a technique that estimates a device's six-degree-of-freedom motion and pose by fusing camera imagery with inertial measurement unit data. The complementary fusion compensates for the drift of inertial sensors and the scale ambiguity of monocular vision, yielding robust, low-latency tracking. VIO underpins inside-out tracking for mixed-reality headsets, drones and mobile robots.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Navigation and Planning"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:mixed-reality", "label": "Mixed Reality"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Visual-inertial odometry fuses camera and IMU data to estimate pose and motion, a technique required by [[Mixed Reality]] for robust inside-out tracking.
- ### Content
  - VIO tightly or loosely couples visual feature tracking with high-rate inertial integration through filtering or optimisation back-ends. The fusion resolves monocular scale, bridges visual dropouts, and delivers the low-latency, drift-corrected pose needed for stable headset and robot localisation.
