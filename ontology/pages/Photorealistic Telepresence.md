public:: true

# Photorealistic Telepresence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:photorealistic-telepresence",
  "@type": "Page",
  "vc:slug": "photorealistic-telepresence",
  "title": "Photorealistic Telepresence",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:photorealistic-telepresence",
  "@type": "Class",
  "label": "Photorealistic Telepresence",
  "definition": "Photorealistic telepresence is remote real-time communication in which participants appear as lifelike, volumetrically accurate representations rather than video tiles or stylised avatars. It reconstructs a person's appearance and motion using techniques such as neural avatars and 3D Gaussian splatting, rendering them convincingly in a shared spatial scene. The goal is a sense of co-presence that closely matches being physically together.",
  "domain": "metaverse",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:dc-telepresence", "label": "Telepresence"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:ai-avatars", "label": "AI Avatars"}, {"@id": "urn:ngm:class:3-d-gaussian-splatting", "label": "3D Gaussian Splatting"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Photorealistic telepresence renders remote participants as lifelike volumetric representations, drawing on [[AI Avatars]] and reconstruction methods such as [[3D Gaussian Splatting]].
- ### Content
  - Systems capture a subject with multi-view cameras or depth sensors, build a driveable photoreal model of their face and body, and render it in real time into a shared 3D space viewed through headsets or light-field displays. Achieving convincing co-presence requires low latency, accurate relighting, and faithful expression transfer, which remain active research challenges constraining the technology to early deployments.
