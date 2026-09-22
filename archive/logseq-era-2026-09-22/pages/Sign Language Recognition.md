public:: true

# Sign Language Recognition
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sign-language-recognition",
  "@type": "Page",
  "vc:slug": "sign-language-recognition",
  "title": "Sign Language Recognition",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sign-language-recognition",
  "@type": "Class",
  "label": "Sign Language Recognition",
  "definition": "Sign language recognition is the computer-vision and sequence-modelling task of translating the manual and non-manual gestures of a signed language into text or speech. It must model hand shape, motion trajectory, facial expression, and grammatical structure that differs fundamentally from spoken languages. It is an accessibility-focused application that builds on robust hand tracking and temporal recognition.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:hand-tracking", "label": "Hand Tracking"}, {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human Computer Interaction"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Sign language recognition translates signed gestures into text or speech by modelling hand shape, motion, and facial cues. It is enabled and supported by accurate [[Hand Tracking]] and advances accessible [[Human-Computer Interaction]].
- ### Content
  - Modern systems combine pose-estimation backbones with temporal models such as transformers or CTC-trained recurrent networks to handle continuous signing and coarticulation. Challenges include signer variation, limited annotated corpora, and capturing the simultaneous non-manual markers that carry grammatical meaning.
