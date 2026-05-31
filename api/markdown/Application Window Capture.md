public:: true

# Application Window Capture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:application-window-capture",
  "@type": "Page",
  "vc:slug": "application-window-capture",
  "title": "Application Window Capture",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:application-window-capture",
  "@type": "Class",
  "label": "Application Window Capture",
  "definition": "Application Window Capture is a screen-capture technique that grabs the pixels of a single specified application window rather than the entire display or a region. It lets users share or record one program while keeping other windows, notifications, and private content off-screen. Operating systems expose it through window-enumeration and per-window framebuffer APIs used by recording and conferencing software.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:dc-workspace-tools", "label": "Workspace Tools"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:screen-recording", "label": "Screen Recording"},
      {"@id": "urn:ngm:class:screen-sharing", "label": "Screen Sharing"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - Application Window Capture records or streams the pixels of one chosen window instead of the whole screen. It is a capture mode within [[Screen Recording]] and a component of selective [[Screen Sharing]] that protects unrelated content.
- ### Content
  - The OS provides window handles and per-window framebuffers so capture follows the window as it moves or resizes, excluding overlapping windows and system overlays. This isolation is valued for privacy and clarity in demos and conferences, though it must handle occlusion, GPU-composited surfaces, and protected-content windows that may render as blank.
