public:: true

# Time-of-Flight Sensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:time-of-flight-sensor",
  "@type": "Page",
  "vc:slug": "time-of-flight-sensor",
  "title": "Time-of-Flight Sensor",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:time-of-flight-sensor",
  "@type": "Class",
  "label": "Time-of-Flight Sensor",
  "definition": "A time-of-flight (ToF) sensor measures distance by emitting a light signal, typically infrared, and timing how long it takes to reflect back from a surface, yielding a per-pixel depth map. Because it directly measures travel time, it produces depth in real time without the baseline geometry needed by stereo cameras. ToF sensors are widely used for hand and gesture tracking, scene reconstruction, and mixed-reality depth sensing.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sensor", "label": "Sensor"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:mixed-reality", "label": "Mixed Reality"},
      {"@id": "urn:ngm:class:hand-tracking", "label": "Hand Tracking"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A time-of-flight sensor measures depth by timing reflected light, producing real-time depth maps that drive [[Hand Tracking]] and depth perception in [[Mixed Reality]] devices.
- ### Content
  - ToF sensors emit modulated or pulsed infrared light and compute distance from the measured round-trip delay or phase shift across an array of pixels, giving a dense depth image at video rates. Compared with structured-light and stereo approaches, they are compact, work in low light, and require less compute, though they trade off resolution and can struggle with reflective or absorptive surfaces. They are common in mobile depth cameras, headset sensing for hand and environment tracking, and short-range robotic perception.
