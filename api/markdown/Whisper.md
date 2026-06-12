public:: true

# Whisper
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3853591d81ca2fb6034cc9696fa693e545a6e7b40b1cab4ae91f43c4e05ff775",
  "@type": "Page",
  "vc:slug": "whisper",
  "title": "Whisper",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:transformer",
      "vc:label": "Transformer"
    },
    {
      "@id": "urn:visionflow:linked:attention-mechanism",
      "vc:label": "Attention Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:speech-recognition",
      "vc:label": "Speech Recognition"
    },
    {
      "@id": "urn:visionflow:linked:translation",
      "vc:label": "Translation"
    },
    {
      "@id": "urn:visionflow:linked:speech-processing",
      "vc:label": "Speech Processing"
    },
    {
      "@id": "urn:visionflow:linked:open-ai",
      "vc:label": "OpenAI"
    },
    {
      "@id": "urn:visionflow:linked:automatic-speech-recognition",
      "vc:label": "Automatic Speech Recognition"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Whisper"
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
  "@id": "urn:ngm:class:whisper",
  "@type": "Class",
  "label": "Whisper",
  "definition": "Whisper is an automatic speech recognition model from OpenAI trained on a large multilingual dataset. It transcribes and translates speech across many languages and is released as open source.",
  "domain": "natural-language-processing",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:automatic-speech-recognition",
      "label": "Automatic Speech Recognition"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:speech-recognition",
        "label": "Speech Recognition"
      },
      {
        "@id": "urn:ngm:class:translation",
        "label": "Translation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:whisper:ba7955598f20",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3853591d81ca2fb6034cc9696fa693e545a6e7b40b1cab4ae91f43c4e05ff775"
  },
  "vc:resolutions": [
    {
      "raw": "[[Transformer]]",
      "resolved": "urn:visionflow:linked:transformer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Attention Mechanism]]",
      "resolved": "urn:visionflow:linked:attention-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Speech Recognition]]",
      "resolved": "urn:visionflow:linked:speech-recognition",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Translation]]",
      "resolved": "urn:visionflow:linked:translation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Speech Processing]]",
      "resolved": "urn:visionflow:linked:speech-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[OpenAI Research Organisation]]",
      "resolved": "urn:visionflow:linked:open-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Automatic Speech Recognition]]",
      "resolved": "urn:visionflow:linked:automatic-speech-recognition",
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
  - Whisper is an automatic speech recognition model from OpenAI trained on a large multilingual dataset. It transcribes and translates speech across many languages and is released as open source.

- ### Semantic Classification
  - owl-class:: natural-language-processing:Whisper
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Automatic Speech Recognition]]
  - bridges-to:: [[Speech Processing]], [[OpenAI Research Organisation]]
  - requires:: [[Transformer]], [[Attention Mechanism]]
  - enables:: [[Speech Recognition]], [[Translation]]

- ### Content
  - Whisper is an encoder-decoder transformer trained on a large corpus of audio paired with transcripts, which gives it strong performance across languages, accents and noisy conditions. It performs transcription and direct speech translation into English.
  - Because the weights and code are open, Whisper is widely used as a building block in transcription pipelines and as a base for fine-tuning. Several optimised reimplementations exist for faster inference.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
