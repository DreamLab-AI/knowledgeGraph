public:: true

# imu
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d7c6d2a2b81e3cca189128dc349302595b37a633d56b15a1b0b6360cfc905ba8",
  "@type": "Page",
  "vc:slug": "imu",
  "title": "imu",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:imu",
  "@type": "Class",
  "label": "IMU",
  "definition": "An Inertial Measurement Unit (IMU) is a self-contained electronic sensor module that combines tri-axial accelerometers, gyroscopes, and optionally magnetometers to measure a body's specific force, angular rate, and orientation relative to an inertial reference frame. In spatial-computing headsets and controllers, the IMU provides low-latency, high-frequency pose estimates that are fused with visual odometry or SLAM to achieve stable, drift-corrected tracking. The same component is integral to robot proprioception, UAV stabilisation, and motion-capture systems.",
  "domain": "spatial-computing",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-interaction",
      "label": "Spatial Interaction"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:motion-tracking", "label": "Motion Tracking"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:inertial-measurement-unit", "label": "Inertial Measurement Unit"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - An Inertial Measurement Unit (IMU) is a self-contained electronic sensor module that combines tri-axial accelerometers, gyroscopes, and optionally magnetometers to measure a body's specific force, angular rate, and orientation relative to an inertial reference frame. In spatial-computing headsets and controllers, the IMU provides low-latency, high-frequency pose estimates that are fused with visual odometry or SLAM to achieve stable, drift-corrected tracking. The same component is integral to robot proprioception, UAV stabilisation, and motion-capture systems.

- ### Semantic Classification
  - owl-class:: imu:IMU
  - owl-role:: Concept

- ### Relationships
  - enables [[Sensor Fusion]]
  - enables [[Motion Tracking]]
  - relatedTo [[SLAM]]
  - relatedTo [[Pose Estimation]]
  - partOf [[Inertial Measurement Unit]]

- ### Content
  - An IMU is the fundamental sensing element for any system that must know its own motion without relying on external references such as GPS or visual markers. The accelerometer trio measures the sum of gravitational and inertial acceleration along three orthogonal axes, while the gyroscope trio measures angular velocity. Integrating these measurements over time yields estimates of velocity, position, and orientation — a process known as dead reckoning or inertial navigation.
  - In extended-reality headsets (AR/VR/MR), the IMU runs at 1000 Hz or higher and feeds a sensor-fusion filter — commonly an extended Kalman filter or complementary filter — that blends its output with lower-frequency visual odometry data from outward-facing cameras. The fusion corrects gyroscope drift (a known limitation of MEMS gyros) and provides the photon-to-photon latency of under 20 ms required to prevent motion sickness.
  - MEMS (micro-electromechanical systems) IMUs have shrunk to millimetre scale, making them viable for wearable devices, surgical tools, and miniature drones. Standards such as IEEE 1559 address IMU performance characterisation. In robotics, the IMU feeds into SLAM pipelines alongside LiDAR or depth cameras, enabling legged robots and drones to navigate dynamically changing environments with high reliability.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
