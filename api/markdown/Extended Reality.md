```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@type": "Page",
  "@id": "urn:visionflow:page:extended-reality",
  "title": "Extended Reality",
  "vc:slug": "extended-reality",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:extended-reality",
  "@type": "Class",
  "label": "Extended Reality",
  "definition": "Extended Reality (XR) is an umbrella term encompassing Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR). XR technologies alter or extend the user's perception of the physical environment through head-mounted displays, spatial tracking, and real-time rendering. XR serves as the primary experiential layer of the spatial computing stack, bridging physical and digital environments across training, collaboration, entertainment, and industrial applications.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "quality": 0.3,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:mixed-reality", "label": "Mixed Reality"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:xr-hardware", "label": "XR Hardware"},
      {"@id": "urn:ngm:class:haptics", "label": "Haptics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:virtual-environment", "label": "Virtual Environment"},
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"}
    ]
  }
}
```

## Extended Reality

Extended Reality (XR) is the umbrella term for immersive technologies spanning Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR).

### Relationships
- hasPart [[Virtual Reality]]
- hasPart [[Augmented Reality]]
- hasPart [[Mixed Reality]]
- uses [[XR Hardware]]
- uses [[Haptics]]
- enables [[Virtual Environment]]
- enables [[Immersive Experience]]

### Content

XR technologies span a continuum from fully immersive VR environments — where all sensory input is computer-generated — to AR overlays that annotate the physical world with digital information. Mixed reality occupies the middle ground, anchoring digital objects to physical surfaces with spatial awareness. The XR hardware ecosystem includes head-mounted displays (HMDs), spatial tracking systems, hand-tracking peripherals, and haptic feedback devices. WebXR provides a browser-based access layer, lowering the deployment barrier for experiential content. Enterprise adoption spans industrial training, remote assistance, surgical simulation, and architectural visualisation. Standards coordination through the Khronos OpenXR specification enables cross-vendor application portability, addressing the fragmentation that historically slowed ecosystem growth.
