public:: true

# Interaction Manager
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:interaction-manager",
  "@type": "Page",
  "vc:slug": "interaction-manager",
  "title": "Interaction Manager",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:interaction-manager",
  "@type": "Class",
  "label": "Interaction Manager",
  "definition": "An interaction manager is the software component that coordinates the flow of communication between a user and an intelligent virtual entity, governing turn-taking, context tracking, and the selection of responses or behaviours. It mediates between perception, dialogue state, and action so that an agent's experience layer feels coherent and responsive. It is the control hub that converts understood input into appropriately timed and styled output.",
  "domain": "metaverse",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:sc-interaction", "label": "Interaction Technology"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:intelligent-virtual-entity", "label": "Intelligent Virtual Entity"},
      {"@id": "urn:ngm:class:experience-layer", "label": "Experience Layer"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - An interaction manager orchestrates the dialogue and behaviour flow of an agent, tracking context and selecting timed responses. It is a part of the [[Intelligent Virtual Entity]] and of the broader [[Experience Layer]].
- ### Content
  - It maintains dialogue state, arbitrates between competing behaviours, and coordinates multimodal output across speech, animation, and gesture. By decoupling decision logic from rendering, it lets virtual entities behave consistently across contexts.
