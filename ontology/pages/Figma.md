public:: true

# Figma
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:figma",
  "@type": "Page",
  "vc:slug": "figma",
  "title": "Figma",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:figma",
  "@type": "Class",
  "label": "Figma",
  "definition": "Figma is a browser-based collaborative interface-design and prototyping platform that lets multiple designers work simultaneously on the same files in real time. It provides vector editing, component and design-system management, interactive prototyping, and developer hand-off, all stored in the cloud for seamless multiplayer collaboration. Figma has become a standard tool for UI/UX design and cross-functional product teams.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:dc-workspace-tools", "label": "Workspace Tools"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:collaborative-systems-modality-whiteboard", "label": "Collaborative Whiteboard"},
      {"@id": "urn:ngm:class:fig-jam", "label": "FigJam"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Figma is a cloud-based collaborative UI/UX design and prototyping tool supporting real-time multiplayer editing, paired with its [[FigJam]] whiteboard and acting as a structured complement to a [[Collaborative Whiteboard]]. It is a digital-collaboration workspace tool.
- ### Content
  - Figma combines vector design, reusable components, shared design systems, and interactive prototyping with developer hand-off via inspectable specs and code snippets. Running in the browser with continuous cloud sync, it removes file-versioning friction and enables distributed teams to co-design simultaneously, which has driven its broad adoption in product-design workflows.
