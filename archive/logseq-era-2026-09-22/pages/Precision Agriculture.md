public:: true

# Precision Agriculture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:precision-agriculture",
  "@type": "Page",
  "vc:slug": "precision-agriculture",
  "title": "Precision Agriculture",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:precision-agriculture",
  "@type": "Class",
  "label": "Precision Agriculture",
  "definition": "Precision agriculture is a farming-management approach that uses sensing, geolocation, and data analytics to observe and respond to variability within fields at fine spatial resolution. It applies inputs such as water, fertiliser, and pesticide only where and when needed, improving yield and reducing waste. It integrates IoT sensors, satellite and drone imagery, and increasingly autonomous ground robots.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-application", "label": "AI Application"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:io-t-sensor-network", "label": "IoT Sensor Network"},
      {"@id": "urn:ngm:class:ground-robot", "label": "Ground Robot"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Precision agriculture manages farms at fine spatial resolution using sensing and analytics to apply inputs only where needed. It is enabled by [[IoT Sensor Network]] deployments and supported by [[Ground Robot]] platforms for monitoring and intervention.
- ### Content
  - The approach fuses soil-moisture and weather sensors, multispectral imagery, and GPS-guided machinery to build per-zone prescriptions. Autonomous and semi-autonomous robots perform targeted weeding, spraying, planting, and harvesting, while machine-learning models predict yields and detect disease early, reducing chemical use and environmental impact.
