public:: true

# In-Camera VFX
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:in-camera-vfx",
  "@type": "Page",
  "vc:slug": "in-camera-vfx",
  "title": "In-Camera VFX",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:in-camera-vfx",
  "@type": "Class",
  "label": "In-Camera VFX",
  "definition": "In-camera visual effects (ICVFX) is a virtual-production technique in which final-pixel visual effects are captured live during photography, typically by displaying real-time rendered 3D environments on large LED volumes behind the actors. Camera tracking drives the rendered background's perspective so that parallax and lighting match the physical camera, producing realistic in-camera composites without later green-screen keying. ICVFX collapses much of post-production into the shoot itself.",
  "domain": "metaverse",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:rendering-technique", "label": "Rendering Technique"}],
  "relations": {
    "partOf": [{"@id": "urn:ngm:class:virtual-production-vp", "label": "Virtual Production (VP)"}],
    "uses": [{"@id": "urn:ngm:class:virtual-production-volume", "label": "Virtual Production Volume"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - In-camera VFX captures final-pixel effects live on LED volumes during shooting, a core method of [[Virtual Production (VP)]] performed within a [[Virtual Production Volume]].
- ### Content
  - A real-time engine renders the environment to the LED wall, synchronised to the tracked camera so perspective and reflections respond as it moves, while the wall also provides interactive lighting on the subjects. ICVFX reduces compositing work and gives filmmakers immediate creative feedback, at the cost of demanding precise tracking, calibration, and high-performance rendering.
