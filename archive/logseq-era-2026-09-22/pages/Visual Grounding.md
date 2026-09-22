public:: true

# Visual Grounding
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:visual-grounding",
  "@type": "Page",
  "vc:slug": "visual-grounding",
  "title": "Visual Grounding",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:visual-grounding",
  "@type": "Class",
  "label": "Visual Grounding",
  "definition": "Visual grounding is the task of localising the region of an image or scene that corresponds to a natural-language expression, linking words to specific visual entities. It connects language understanding to perception, enabling models to point at, select or act on the object a user refers to. Visual grounding is foundational for vision-language models and for agents that operate graphical interfaces.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:vision-language-model", "label": "Vision Language Model"}, {"@id": "urn:ngm:class:computer-use-and-browser-agents", "label": "Computer Use and Browser Agents"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Visual grounding localises the image region referred to by a textual expression, a core capability of a [[Vision-Language Model]] and of [[Computer Use and Browser Agents]].
- ### Content
  - It requires joint reasoning over language and visual features to resolve referring expressions, often outputting bounding boxes, masks or coordinates. Grounding lets agents identify clickable UI elements or scene objects, bridging instruction following and concrete action.
