public:: true

# Real-Time VFX
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:real-time-vfx",
  "@type": "Page",
  "vc:slug": "real-time-vfx",
  "title": "Real-Time VFX",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:real-time-vfx",
  "@type": "Class",
  "label": "Real-Time VFX",
  "definition": "Real-time VFX is the generation of visual effects such as particles, fluids, fire, and dynamic simulations rendered live at interactive frame rates rather than pre-baked offline. It leverages GPU compute, particle systems, and procedural techniques to produce reactive effects within a game or virtual-production frame budget. It enables interactive spectacle in games, live events, and metaverse experiences.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sc-display-and-rendering", "label": "Display and Rendering"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:procedural-and-hybrid-4-d", "label": "Procedural and Hybrid 4D"},
      {"@id": "urn:ngm:class:particle-systems", "label": "Particle Systems"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Real-time VFX produces live, interactive visual effects within a frame budget using GPU compute and procedural methods. It is enabled by [[Procedural and Hybrid 4D]] techniques and by [[Particle Systems]].
- ### Content
  - Effect authoring tools (e.g. Niagara, VFX Graph) drive GPU particle simulations, vector fields, and shader-based fluids that react to gameplay or performer input. Constrained by per-frame compute, real-time VFX favours approximations and level-of-detail over the physical accuracy of offline simulation, prioritising responsiveness and visual impact.
