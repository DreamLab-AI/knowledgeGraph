public:: true

# Physical Presence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:physical-presence",
  "@type": "Page",
  "vc:slug": "physical-presence",
  "title": "Physical Presence",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:physical-presence",
  "@type": "Class",
  "label": "Physical Presence",
  "definition": "Physical presence is the perceptual sense of being bodily situated in a remote or virtual environment, including the ability to act on and feel that environment. In telepresence it is produced by combining spatial audio-visual immersion with embodiment cues such as haptic feedback and a controllable remote body or robot. Strong physical presence makes a mediated location feel as though the user is genuinely there.",
  "domain": "metaverse",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:dc-telepresence", "label": "Telepresence"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:haptics", "label": "Haptics"}, {"@id": "urn:ngm:class:tc-0003-telepresence-robot", "label": "tc 0003 telepresence robot"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Physical presence is the felt sense of being bodily located in a remote or virtual space, enabled by [[Haptics]] and by embodied platforms such as the [[TC-0003 Telepresence Robot]].
- ### Content
  - Beyond visual and auditory immersion, physical presence depends on closing the action-perception loop: the user's movements drive a remote body or avatar, and forces, textures, and resistance are returned through haptic actuators. This embodiment supports tasks requiring dexterity and social co-presence, with fidelity limited by latency, the realism of force feedback, and the degrees of freedom of the remote platform.
