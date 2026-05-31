public:: true

# Otter.ai
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:12bf81ce08bd9fe49756aafdf3a67a1003e6a87cc1048ecf44f6b9001d6853ca",
  "@type": "Page",
  "vc:slug": "otter-ai",
  "title": "Otter.ai",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:speech-recognition",
      "vc:label": "Speech Recognition"
    },
    {
      "@id": "urn:visionflow:linked:audio-processing",
      "vc:label": "Audio Processing"
    },
    {
      "@id": "urn:visionflow:linked:natural-language-processing",
      "vc:label": "Natural Language Processing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Otter.ai"
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
  "@id": "urn:ngm:class:otter-ai",
  "@type": "Class",
  "label": "Otter.ai",
  "definition": "An American company that provides automatic speech recognition and transcription software for meetings and conversations. It generates real-time transcripts, summaries, and notes from audio.",
  "domain": "natural-language-processing",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:speech-recognition",
      "label": "Speech Recognition"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:speech-recognition",
        "label": "Speech Recognition"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:audio-processing",
        "label": "Audio Processing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:otter-ai:3fdeabb31376",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:12bf81ce08bd9fe49756aafdf3a67a1003e6a87cc1048ecf44f6b9001d6853ca"
  },
  "vc:resolutions": [
    {
      "raw": "[[Speech Recognition]]",
      "resolved": "urn:visionflow:linked:speech-recognition",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Audio Processing]]",
      "resolved": "urn:visionflow:linked:audio-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Natural Language Processing]]",
      "resolved": "urn:visionflow:linked:natural-language-processing",
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
  - An American company that provides automatic speech recognition and transcription software for meetings and conversations. It generates real-time transcripts, summaries, and notes from audio.

- ### Semantic Classification
  - owl-class:: natural-language-processing:Otterai
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Speech Recognition]]
  - bridges-to:: [[Natural Language Processing]]
  - requires:: [[Speech Recognition]]
  - enables:: [[Audio Processing]]

- ### Content
  - Otter.ai offers software that transcribes spoken audio into text in real time, aimed at meetings, lectures, and interviews. It produces searchable transcripts and can identify speakers.
  - The product integrates with video conferencing tools to capture and summarise discussions automatically, combining speech recognition with natural language processing for summaries and highlights.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
