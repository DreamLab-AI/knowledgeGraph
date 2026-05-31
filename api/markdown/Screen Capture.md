public:: true

# Screen Capture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:screen-capture",
  "@type": "Page",
  "vc:slug": "screen-capture",
  "title": "Screen Capture",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:screen-capture",
  "@type": "Class",
  "label": "Screen Capture",
  "definition": "Screen capture is the acquisition of the visual contents of a display, window, or application as still images or a stream of frames. It underpins screenshots, screen recording, and remote presentation, and is increasingly used to provide perceptual input to AI agents that operate graphical interfaces. Capture is mediated by operating-system or browser APIs subject to user permission.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:human-computer-interaction", "label": "Human-Computer Interaction"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:computer-use-and-browser-agents", "label": "Computer Use and Browser Agents"},
      {"@id": "urn:ngm:class:screen-recording", "label": "Screen Recording"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Screen capture acquires display contents as images or frames; it supplies visual input to [[Computer Use and Browser Agents]] and is the underlying mechanism generalised by [[Screen Recording]].
- ### Content
  - Capture pipelines read framebuffers or composited surfaces through OS or browser APIs, optionally constrained to a single window or region. For AI agents, captured frames are paired with accessibility metadata to ground grounding and action selection, while permission prompts and privacy indicators mitigate misuse.
