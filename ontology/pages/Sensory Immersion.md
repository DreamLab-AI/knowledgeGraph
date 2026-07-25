public:: true

# Sensory Immersion
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sensory-immersion",
  "@type": "Page",
  "vc:slug": "sensory-immersion",
  "title": "Sensory Immersion",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sensory-immersion",
  "@type": "Class",
  "label": "Sensory Immersion",
  "definition": "Sensory immersion is the dimension of immersion produced by saturating a user's perceptual channels with synthetic stimuli, such that the virtual environment dominates their awareness over the physical surroundings. It is driven by display fidelity, spatial audio, haptics, and wide field of view, and is distinct from narrative or cognitive immersion. It is a constituent component of the broader experience of immersion.",
  "domain": "metaverse",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:virtual-environment", "label": "Virtual Environment"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:immersion", "label": "Immersion"}, {"@id": "urn:ngm:class:feedback-mechanism", "label": "Feedback Mechanism"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Sensory immersion is the perceptual saturation that makes a synthetic environment dominate a user's awareness. It is a constituent part of [[Immersion]] and is enabled by a responsive [[Feedback Mechanism]].
- ### Content
  - It scales with display resolution, field of view, frame rate, spatial audio, and tactile cues. High sensory immersion lowers the user's awareness of the medium, but must be matched by low-latency feedback to avoid sensory conflict and to sustain the illusion of being present.
