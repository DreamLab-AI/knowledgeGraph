public:: true

# Optical Systems
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:optical-systems",
  "@type": "Page",
  "vc:slug": "optical-systems",
  "title": "Optical Systems",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:optical-systems",
  "@type": "Class",
  "label": "Optical Systems",
  "definition": "Optical Systems are arrangements of lenses, mirrors, waveguides, and combiners that direct and form light to project or relay images. In display hardware they govern how rendered content is delivered to the eye, including focus, field of view, and image clarity. Augmented- and virtual-reality headsets depend on compact optical systems such as pancake lenses and waveguide combiners to merge virtual imagery with the real world.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sc-display-and-rendering", "label": "Display and Rendering"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ar-display-device", "label": "Ar Display Device"},
      {"@id": "urn:ngm:class:display-hardware", "label": "Display Hardware"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Optical Systems are arrangements of lenses, mirrors, and waveguides that form and relay images, a core requirement of any [[AR Display Device]] and of [[Display Hardware]] generally.
- ### Content
  - They determine field of view, focal depth, and image clarity in head-mounted displays. Technologies such as waveguide combiners and pancake lenses let compact headsets project virtual content and, in AR, blend it optically with the surrounding environment.
