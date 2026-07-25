public:: true

# User Representation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:user-representation",
  "@type": "Page",
  "vc:slug": "user-representation",
  "title": "User Representation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:user-representation",
  "@type": "Class",
  "label": "User Representation",
  "definition": "User representation is the visual and behavioural embodiment of a person within a virtual environment, encompassing avatars, presence indicators and the mapping of real movement onto a digital persona. It conveys identity, expression and social presence, allowing others to perceive and interact with the user in shared spaces. It is a defining element of avatar systems and virtual worlds.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:virtual-environment", "label": "Virtual Environment"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:avatar-system", "label": "Avatar System"}, {"@id": "urn:ngm:class:virtual-world", "label": "Virtual World"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - User representation is how a person is embodied in a shared digital space, enabled by an [[Avatar System]] and forming part of a [[Virtual World]].
- ### Content
  - Representations range from photorealistic full-body avatars to stylised or abstract forms, driven by tracking data, inverse kinematics and expression capture. Design choices affect social presence, identity expression, inclusivity and the bandwidth required to synchronise embodiment across clients.
