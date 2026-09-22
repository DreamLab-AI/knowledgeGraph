public:: true

elevatedFrom:: [[Telethrone]]
# Gaze Contingent Telepresence Display
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a9867374f10a504b1123801453ac07f4879d82df4f5fb63d8269d9e5c6a9d6dc",
  "@type": "Page",
  "vc:slug": "gaze-contingent-telepresence-display",
  "title": "Gaze Contingent Telepresence Display",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:must",
      "vc:label": "MUST"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": ""
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Telethrone"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gaze-contingent-telepresence-display",
  "@type": "Class",
  "label": "Gaze Contingent Telepresence Display",
  "definition": "Telethrone is a research concept for a hyper-personal display and telepresence installation that resolves the challenge of rendering a spatially aware, photorealistic metahuman avatar for a single collocated viewer. It combines personalised 3D reconstruction from 2D imagery, gaze-contingent rendering, and situated display technology to achieve high-fidelity presence without requiring the viewer to wear head-mounted displays.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:hyper-personalisation", "label": "Hyper personalisation"},
      {"@id": "urn:ngm:class:neural-rendering", "label": "Neural Rendering"},
      {"@id": "urn:ngm:class:display-hardware", "label": "Display Hardware"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:tele020virtualrealitytelepresence", "label": "TELE020virtualrealitytelepresence"},
      {"@id": "urn:ngm:class:tele-050-neuralrenderingtelepresence", "label": "TELE 050 neuralrenderingtelepresence"},
      {"@id": "urn:ngm:class:avatar", "label": "Avatar"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:telethrone:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a9867374f10a504b1123801453ac07f4879d82df4f5fb63d8269d9e5c6a9d6dc"
  },
  "vc:resolutions": [
    {
      "raw": "[[MUST]]",
      "resolved": "urn:visionflow:linked:must",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Telethrone is a research concept for a hyper-personal display and telepresence installation that resolves the challenge of rendering a spatially aware, photorealistic metahuman avatar for a single collocated viewer. It combines personalised 3D reconstruction from 2D imagery, gaze-contingent rendering, and situated display technology to achieve high-fidelity presence without requiring the viewer to wear head-mounted displays.
- ### Semantic Classification
  - owl-class:: spatial-computing:Telethrone
  - owl-role:: Concept
- ### Relationships
  - uses:: Hyper personalisation, Neural Rendering, Display Hardware
  - relatedTo:: TELE020virtualrealitytelepresence, TELE 050 neuralrenderingtelepresence, Avatar
  - enables:: Immersive Experience
- ### Content
  - Telethrone metahuman avatar
  - Hyperpersonal display is solved
  - Create the 3d from 2d
  - [[MUST]]
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
