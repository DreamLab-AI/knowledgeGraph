public:: true

# IMU Sensors
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:imu-sensors",
  "@type": "Page",
  "vc:slug": "imu-sensors",
  "title": "IMU Sensors",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:imu-sensors",
  "@type": "Class",
  "label": "IMU Sensors",
  "definition": "An inertial measurement unit (IMU) is a sensor package that measures a body's specific force and angular rate, typically combining a three-axis accelerometer and a three-axis gyroscope, often with a magnetometer. By integrating these measurements it estimates orientation, velocity, and relative motion without external references. IMUs are central to motion tracking, navigation, and stabilisation in robotics, XR, and aerospace.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sensor", "label": "Sensor"}],
  "relations": {
    "partOf": [{"@id": "urn:ngm:class:motion-capture-rig", "label": "Motion Capture Rig"}],
    "relatedTo": [{"@id": "urn:ngm:class:lens-and-camera-calibration", "label": "Lens and Camera Calibration"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - IMU sensors fuse accelerometer and gyroscope data to estimate motion and orientation, forming part of a [[Motion Capture Rig]] and assisting tasks such as [[Lens and Camera Calibration]].
- ### Content
  - Raw inertial measurements drift over time, so IMUs are commonly fused with vision, GPS, or magnetic references through Kalman or complementary filters to bound error. MEMS fabrication has made IMUs small and inexpensive enough to embed in headsets, controllers, drones, and wearable trackers.
