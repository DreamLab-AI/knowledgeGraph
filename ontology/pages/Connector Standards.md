public:: true

# Connector Standards
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:connector-standards",
  "@type": "Page",
  "vc:slug": "connector-standards",
  "title": "Connector Standards",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:connector-standards",
  "@type": "Class",
  "label": "Connector Standards",
  "definition": "Connector standards are specifications that define the mechanical form factor, pin assignment, and electrical signalling of the physical interfaces used to join cables and devices. They guarantee interoperability across vendors at the physical layer, covering examples such as USB-C, RJ45, and HDMI. Standardised connectors reduce fragmentation and enable plug-and-play interconnection.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:physical-layer", "label": "Physical Layer"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Connector standards specify the form factor, pinout, and signalling of physical interfaces, defining interoperability at the [[Physical Layer]].
- ### Content
  - A connector standard fixes the geometry and contact layout so that any compliant plug mates with any compliant receptacle, and pairs this with electrical and protocol specifications for signalling. Examples include USB-C, RJ45, and fibre connectors, each constraining mechanical tolerances, durability cycles, and impedance characteristics.
