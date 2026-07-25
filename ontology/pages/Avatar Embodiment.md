public:: true

# Avatar Embodiment
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-avatar-embodiment",
  "@type": "Page",
  "vc:slug": "avatar-embodiment",
  "title": "Avatar Embodiment",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:avatar-embodiment",
  "@type": "Class",
  "label": "Avatar Embodiment",
  "definition": "Avatar Embodiment is the psychological and technical phenomenon in which a user perceives a digital avatar as an extension or representation of their own body within a virtual or mixed reality environment. It involves mapping real-time motion capture, physiological signals, and expressive cues from the user onto the avatar to create a sense of ownership and presence. High-fidelity embodiment enhances social telepresence by allowing remote participants to express identity, emotion, and intent through their avatars.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-telepresence", "label": "Telepresence"}
  ],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:social-presence", "label": "Social Presence"}],
    "relatedTo": [
      {"@id": "urn:ngm:class:shared-virtual-space", "label": "Shared Virtual Space"},
      {"@id": "urn:ngm:class:virtual-reality-telepresence", "label": "Virtual Reality Telepresence"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - The psychological and technical phenomenon in which a user perceives a digital avatar as an extension of their own body, enabling expressive social presence in virtual collaboration environments.
