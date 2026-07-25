public:: true

# Real-Time Interpretation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:real-time-interpretation",
  "@type": "Page",
  "title": "Real-Time Interpretation",
  "vc:slug": "real-time-interpretation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:real-time-interpretation",
  "@type": "Class",
  "label": "Real-Time Interpretation",
  "definition": "Real-time interpretation is the simultaneous conversion of spoken language from a source language into a target language with minimal delay, combining speech recognition, machine translation and speech synthesis in a continuous pipeline. Unlike batch machine translation, it must produce output incrementally as the source speech arrives, trading some accuracy for low latency. It underpins live captioning, simultaneous conference interpretation and voice-based cross-lingual communication tools.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:speech-recognition",
      "label": "Speech Recognition"
    }
  ],
  "relations": {},
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Real-time interpretation is the simultaneous conversion of spoken language from a source language into a target language with minimal delay, combining speech recognition, machine translation and speech synthesis in a continuous pipeline. Unlike batch machine translation, it must produce output incrementally as the source speech arrives, trading some accuracy for low latency. It underpins live captioning, simultaneous conference interpretation and voice-based cross-lingual communication tools.
- ### Relationships
	- subClassOf:: [[Speech Recognition]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
