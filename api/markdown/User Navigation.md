public:: true

# User Navigation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:user-navigation",
  "@type": "Page",
  "vc:slug": "user-navigation",
  "title": "User Navigation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:user-navigation",
  "@type": "Class",
  "label": "User Navigation",
  "definition": "User navigation is the set of interaction techniques and interface affordances that let people move through and orient themselves within a digital or spatial environment, from menus and links to locomotion in 3D space. In immersive contexts it covers teleportation, smooth locomotion and wayfinding cues, while in 2D it covers information architecture and discovery flows. Effective navigation reduces cognitive load and supports search and content discovery.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sc-interaction", "label": "Metaverse Interaction"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:search-discovery", "label": "Search Discovery"}, {"@id": "urn:ngm:class:3-d-user-interface", "label": "3D User Interface"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - User navigation lets people move through and orient within digital and spatial environments, enabling [[Search Discovery]] and shaping the [[3D User Interface]].
- ### Content
  - In XR, navigation must mitigate motion discomfort through techniques like teleportation, vignetting and snap turning. Across all interfaces, clear wayfinding, breadcrumbs and spatial anchors help users build a mental model and locate content efficiently.
