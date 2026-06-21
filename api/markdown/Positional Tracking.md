public:: true

# Positional Tracking
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-positional-tracking",
  "@type": "Page",
  "vc:slug": "positional-tracking",
  "title": "Positional Tracking",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:positional-tracking",
  "@type": "Class",
  "label": "Positional Tracking",
  "definition": "Positional Tracking is the real-time determination of the position and orientation of a device, body part, or object in three-dimensional space, typically using sensors such as IMUs, cameras, or external emitters. It is a foundational capability for spatial computing systems including virtual reality, augmented reality, and robotics, enabling accurate alignment of digital content with the physical world. Techniques range from inside-out camera-based tracking to outside-in lighthouse systems.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:sc-interaction", "label": "Spatial Computing Interaction"}
  ],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:simultaneous-localisation-and-mapping", "label": "Simultaneous Localisation and Mapping"}]
  },
  "quality": 0.7
}
```

- ### Definition
  - Positional Tracking is the real-time sensing and computation of a device or body's position and orientation in 3D space, enabling spatial computing systems to align virtual content accurately with the physical environment.
