public:: true

# TELE-107-ai-meeting-assistants
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0a966a9c92601d82533eca4631338b3722a69f9f30ac859dad1ccf28a300d6f8",
  "@type": "Page",
  "vc:slug": "tele-107-ai-meeting-assistants",
  "title": "TELE-107-ai-meeting-assistants",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:speech-recognition",
      "vc:label": "Speech Recognition"
    },
    {
      "@id": "urn:visionflow:linked:large-language-models",
      "vc:label": "Large Language Models"
    },
    {
      "@id": "urn:visionflow:linked:meeting-transcription",
      "vc:label": "Meeting Transcription"
    },
    {
      "@id": "urn:visionflow:linked:conversational-ai",
      "vc:label": "Conversational AI"
    },
    {
      "@id": "urn:visionflow:linked:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "TELE-107-ai-meeting-assistants"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tele-107-ai-meeting-assistants",
  "@type": "Class",
  "label": "TELE-107-ai-meeting-assistants",
  "definition": "AI meeting assistants are software agents that join or process meetings to provide transcription, summarisation, action-item extraction and live support using speech recognition and language models.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:telecollaboration",
      "label": "Telecollaboration"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:speech-recognition",
        "label": "Speech Recognition"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:meeting-transcription",
        "label": "Meeting Transcription"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:tele-107-ai-meeting-assistants:21f07a816f8e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0a966a9c92601d82533eca4631338b3722a69f9f30ac859dad1ccf28a300d6f8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Speech Recognition]]",
      "resolved": "urn:visionflow:linked:speech-recognition",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:linked:large-language-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Meeting Transcription]]",
      "resolved": "urn:visionflow:linked:meeting-transcription",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Conversational AI]]",
      "resolved": "urn:visionflow:linked:conversational-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:linked:telecollaboration",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - AI meeting assistants are software agents that join or process meetings to provide transcription, summarisation, action-item extraction and live support using speech recognition and language models.

- ### Semantic Classification
  - owl-class:: metaverse:TELE107aimeetingassistants
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Telecollaboration]]
  - bridges-to:: [[Conversational AI]]
  - requires:: [[Speech Recognition]], [[Large Language Models]]
  - enables:: [[Meeting Transcription]]

- ### Content
  - AI meeting assistants are automated tools that attend or analyse meetings and generate transcripts, summaries and follow-up tasks. They combine speech recognition to convert audio to text with language models that condense discussion and identify decisions and action items.
  - Such assistants are integrated into conferencing and collaboration platforms to reduce manual note-taking and to make meeting content searchable afterwards. Accuracy depends on audio quality, speaker separation and the language coverage of the underlying recognition models.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
