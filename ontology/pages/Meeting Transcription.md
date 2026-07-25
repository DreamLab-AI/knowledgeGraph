public:: true

# Meeting Transcription
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5baf144f59dcc0a200c0e60ba4cb1b0feea49fc817d8c37200b1c0b29a47dcac",
  "@type": "Page",
  "vc:slug": "meeting-transcription",
  "title": "Meeting Transcription",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:speech-recognition",
      "vc:label": "Speech Recognition"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0855"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Meeting Transcription"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:meeting-transcription",
  "@type": "Class",
  "label": "Meeting Transcription",
  "definition": "The automated conversion of spoken dialogue in synchronous or asynchronous meetings into structured text, combining automatic speech recognition with speaker diarisation, punctuation restoration, and optionally action-item extraction. AI-powered meeting transcription systems enable searchable records, accessibility, and downstream summarisation workflows.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-application",
      "label": "AI Application"
    },
    {
      "@id": "urn:ngm:class:speech-recognition",
      "label": "Speech Recognition"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:automatic-speech-recognition", "label": "Automatic Speech Recognition"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:audio-processing-system", "label": "Audio Processing System"},
      {"@id": "urn:ngm:class:audio-technology", "label": "Audio Technology"},
      {"@id": "urn:ngm:class:speech-recognition", "label": "Speech Recognition"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:documentation-generation", "label": "Documentation Generation"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:meeting-transcription:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5baf144f59dcc0a200c0e60ba4cb1b0feea49fc817d8c37200b1c0b29a47dcac"
  },
  "vc:resolutions": [
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Speech Recognition]]",
      "resolved": "urn:visionflow:owl:class:speech-recognition",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Meeting Transcription is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:MeetingTranscription
  - owl-role:: Concept
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[Speech Recognition]]

- ### Content
  Meeting transcription systems combine automatic speech recognition (ASR) with speaker diarisation to produce speaker-attributed transcripts of multi-party conversations. Modern ASR engines based on transformer architectures (e.g., Whisper) achieve near-human word error rates in clean acoustic conditions, while diarisation clusters audio segments by speaker identity using voice embeddings.

  Post-processing stages add punctuation restoration, paragraph segmentation, and optionally named-entity extraction, sentiment analysis, and action-item detection powered by large language models. The resulting structured transcript supports downstream use cases including meeting summaries, searchable knowledge archives, accessibility compliance, and CRM integration, making meeting transcription a foundational enterprise AI application.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
