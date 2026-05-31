public:: true

# Set-of-Mark Prompting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:set-of-mark-prompting",
  "@type": "Page",
  "vc:slug": "set-of-mark-prompting",
  "title": "Set-of-Mark Prompting",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:set-of-mark-prompting",
  "@type": "Class",
  "label": "Set-of-Mark Prompting",
  "definition": "Set-of-mark prompting is a visual-prompting technique that overlays an image with numbered or coloured marks on segmented regions so a multimodal language model can refer to and reason about specific elements by label. By grounding the model's references in explicit visual tokens, it sharply improves spatial grounding, visual question answering, and GUI element selection. It is a key enabler of vision-driven computer-use agents.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:computer-use-and-browser-agents", "label": "Computer Use and Browser Agents"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Set-of-mark prompting overlays segmented image regions with numbered marks so a multimodal model can reference and act on specific elements by label. It is a building block implemented by [[Computer Use and Browser Agents]].
- ### Content
  - A segmentation model partitions the screenshot or image, each region receives a visible identifier, and the prompt instructs the model to answer or act in terms of those identifiers. This converts ambiguous pixel-space grounding into discrete symbolic choices, markedly improving the reliability with which agents click, type, and navigate user interfaces.
