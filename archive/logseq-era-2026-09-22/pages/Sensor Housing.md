public:: true

# Sensor Housing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sensor-housing",
  "@type": "Page",
  "vc:slug": "sensor-housing",
  "title": "Sensor Housing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sensor-housing",
  "@type": "Class",
  "label": "Sensor Housing",
  "definition": "A sensor housing is the mechanical enclosure that protects a sensing element from environmental hazards such as moisture, dust, vibration, and electromagnetic interference while maintaining its measurement window. It defines mounting geometry, ingress protection rating, thermal management, and the optical or acoustic path to the sensed medium. It is a structural component of robotic and exteroceptive sensing assemblies.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:hardware", "label": "Hardware"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:exteroceptive-sensor", "label": "Exteroceptive Sensor"}, {"@id": "urn:ngm:class:mechanical-component", "label": "Mechanical Component"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A sensor housing is the protective mechanical enclosure that shields a sensing element while preserving its measurement window. It is a [[Mechanical Component]] and a structural part of every [[Exteroceptive Sensor]] package.
- ### Content
  - Design balances ingress protection, thermal dissipation, and material choice against an unobstructed path for the measured signal. Optical sensors require transparent or coated apertures, acoustic sensors need acoustically matched membranes, and field-robotics housings often target high IP ratings for outdoor and submerged operation.
