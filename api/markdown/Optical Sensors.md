public:: true

# Optical Sensors
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:optical-sensors",
  "@type": "Page",
  "vc:slug": "optical-sensors",
  "title": "Optical Sensors",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:optical-sensors",
  "@type": "Class",
  "label": "Optical Sensors",
  "definition": "Optical Sensors are devices that detect and convert light, across visible, infrared, or other wavelengths, into electrical signals for measurement or imaging. They include cameras, photodiodes, depth sensors, and structured-light or time-of-flight units used to capture scene geometry and motion. In capture and recognition systems they provide the primary visual input from which 3D structure, pose, and identity are inferred.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sensor", "label": "Sensor"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-performance-capture", "label": "Digital Performance Capture"},
      {"@id": "urn:ngm:class:human-capture-and-recognition", "label": "Human Capture & Recognition"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Optical Sensors convert light into electrical signals for imaging and measurement, providing the visual input that [[Digital Performance Capture]] and [[Human Capture and Recognition]] systems require.
- ### Content
  - The category spans cameras, photodiodes, depth sensors, and time-of-flight and structured-light units. Their resolution, frame rate, and depth fidelity determine how accurately downstream pipelines reconstruct 3D geometry, motion, and identity from a scene.
