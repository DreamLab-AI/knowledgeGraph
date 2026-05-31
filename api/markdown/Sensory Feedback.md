public:: true

# Sensory Feedback
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sensory-feedback",
  "@type": "Page",
  "vc:slug": "sensory-feedback",
  "title": "Sensory Feedback",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sensory-feedback",
  "@type": "Class",
  "label": "Sensory Feedback",
  "definition": "Sensory feedback is the delivery of stimuli to a user's senses, including visual, auditory, haptic, and proprioceptive channels, in response to their actions within a virtual or mixed environment. Timely and coherent feedback closes the perception-action loop and is a precondition for the user's sense of presence and emotional engagement. It is a core mechanism of immersive interaction design.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sc-interaction", "label": "Spatial Computing Interaction"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:presence", "label": "Presence"}, {"@id": "urn:ngm:class:emotional-immersion", "label": "Emotional Immersion"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Sensory feedback delivers visual, auditory, haptic, and proprioceptive stimuli in response to user action, closing the perception-action loop. It is required for [[Presence]] and for [[Emotional Immersion]].
- ### Content
  - Low latency and cross-modal coherence are critical; mismatches between motion and feedback degrade presence and can induce discomfort. Designers tune feedback timing, intensity, and modality to reinforce believable cause-and-effect and to deepen engagement in immersive experiences.
