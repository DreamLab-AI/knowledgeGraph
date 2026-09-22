public:: true

# Holographic Telepresence
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-holographic-telepresence",
  "@type": "Page",
  "vc:slug": "holographic-telepresence",
  "title": "Holographic Telepresence",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:holographic-telepresence",
  "@type": "Class",
  "label": "Holographic Telepresence",
  "definition": "Holographic Telepresence is a form of remote presence technology that projects three-dimensional, life-size representations of remote participants into a shared physical or virtual space. It combines light field capture, display, and rendering techniques to create the illusion that a remote person is physically co-located with local participants. This approach enables natural interaction cues such as eye contact, spatial positioning, and gestural communication that are absent in conventional video conferencing.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-telepresence", "label": "Telepresence"}
  ],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:social-presence", "label": "Social Presence"}],
    "relatedTo": [
      {"@id": "urn:ngm:class:light-field-display", "label": "Light Field Display"},
      {"@id": "urn:ngm:class:volumetric-video", "label": "Volumetric Video"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - A telepresence technology that projects life-size, three-dimensional representations of remote participants into a shared space to enable natural co-located interaction.
