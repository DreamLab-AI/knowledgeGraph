public:: true

# LoRa Alliance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:lo-ra-alliance",
  "@type": "Page",
  "vc:slug": "lo-ra-alliance",
  "title": "LoRa Alliance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:lo-ra-alliance",
  "@type": "Class",
  "label": "LoRa Alliance",
  "definition": "The LoRa Alliance is an open, non-profit association that defines and certifies the LoRaWAN standard for low-power wide-area networking. It maintains the LoRaWAN specification, regional parameters, and a device-certification programme to ensure interoperability across vendors and operators. The alliance governs the ecosystem enabling long-range, low-power IoT connectivity.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:standards-body", "label": "Standards Body"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:lo-ra-wan", "label": "LoRaWAN"}, {"@id": "urn:ngm:class:io-t-sensor-network", "label": "IoT Sensor Network"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The LoRa Alliance is the standards body that defines and certifies [[LoRaWAN]], governing the interoperable low-power wide-area connectivity used by an [[IoT Sensor Network]].
- ### Content
  - The alliance publishes the LoRaWAN link-layer specification and regional frequency-plan parameters, and runs certification to guarantee cross-vendor device interoperability. Its open governance has driven broad adoption of LoRaWAN for metering, asset tracking, and environmental sensing.
