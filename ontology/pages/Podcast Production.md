public:: true

# Podcast Production
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:podcast-production",
  "@type": "Page",
  "vc:slug": "podcast-production",
  "title": "Podcast Production",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:podcast-production",
  "@type": "Class",
  "label": "Podcast Production",
  "definition": "Podcast production is the end-to-end process of creating episodic audio programmes, encompassing recording, editing, mixing, mastering, and distribution. AI tools increasingly automate transcription, voice synthesis, noise removal, and chaptering. It is a key application domain for speech and audio machine-learning systems.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-application", "label": "AI Application"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:speech-and-voice", "label": "Speech and Voice"},
      {"@id": "urn:ngm:class:music-and-audio", "label": "Music and Audio"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Podcast production covers the workflow of recording, editing, and distributing episodic audio. It is enabled by [[Speech and Voice]] technologies and supported by [[Music and Audio]] generation and processing tools.
- ### Content
  - Modern production pipelines combine automatic speech recognition for transcripts and captions, generative voice synthesis for cloning or narration, source separation and denoising for cleanup, and automated mixing. These tools lower the barrier to high production quality and enable accessibility features such as searchable transcripts and multilingual dubbing.
