public:: true

# Micro-OLED Display
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:micro-oled-display",
  "@type": "Page",
  "vc:slug": "micro-oled-display",
  "title": "Micro-OLED Display",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:micro-oled-display",
  "@type": "Class",
  "label": "Micro-OLED Display",
  "definition": "A micro-OLED display is an organic light-emitting diode panel fabricated directly on a silicon backplane (OLED-on-silicon), yielding pixel pitches of a few micrometres and very high pixel densities. Its compact size, high contrast, fast response, and low power make it the dominant near-eye display technology for AR and VR headsets. The silicon substrate enables integrated drive circuitry impossible on glass.",
  "domain": "metaverse",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:sc-display-and-rendering", "label": "Display and Rendering"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ar-frame", "label": "AR Frame"},
      {"@id": "urn:ngm:class:mixed-reality", "label": "Mixed Reality"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A micro-OLED display is an OLED panel built on a silicon backplane, achieving micrometre-scale pixels for near-eye optics. It is used by an [[AR Frame]] and in [[Mixed Reality]] headsets.
- ### Content
  - Self-emissive pixels give per-pixel black levels and microsecond response, reducing motion blur critical for head-mounted use. The silicon substrate integrates row/column drivers and compensation logic, but yield and cost at high brightness remain the principal manufacturing challenges.
