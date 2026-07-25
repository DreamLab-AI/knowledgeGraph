public:: true

# Inworld AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b0be6b353b0aab69ce8ec59d246276b646677fc18f965f9b3038aa64b16a91d0",
  "@type": "Page",
  "vc:slug": "inworld-ai",
  "title": "Inworld AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:language-model",
      "vc:label": "Language Model"
    },
    {
      "@id": "urn:visionflow:linked:text-to-speech",
      "vc:label": "Text-to-Speech"
    },
    {
      "@id": "urn:visionflow:linked:game-ai",
      "vc:label": "Game AI"
    },
    {
      "@id": "urn:visionflow:linked:avatar",
      "vc:label": "Avatar"
    },
    {
      "@id": "urn:visionflow:linked:conversational-ai",
      "vc:label": "Conversational AI"
    },
    {
      "@id": "urn:visionflow:linked:speech-recognition",
      "vc:label": "Speech Recognition"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Inworld AI"
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
  "@id": "urn:ngm:class:inworld-ai",
  "@type": "Class",
  "label": "Inworld AI",
  "definition": "Inworld AI is a company providing tools for building interactive AI-driven characters for games and virtual experiences. Its platform combines language models, speech and behaviour controls to drive non-player characters and avatars.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:conversational-ai",
      "label": "Conversational AI"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:language-model",
        "label": "Language Model"
      },
      {
        "@id": "urn:ngm:class:text-to-speech",
        "label": "Text-to-Speech"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:game-ai",
        "label": "Game AI"
      },
      {
        "@id": "urn:ngm:class:avatar",
        "label": "Avatar"
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
  "@id": "urn:visionflow:annotation:link-resolutions:inworld-ai:2b2c136e8f48",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b0be6b353b0aab69ce8ec59d246276b646677fc18f965f9b3038aa64b16a91d0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Language Model]]",
      "resolved": "urn:visionflow:linked:language-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Text-to-Speech]]",
      "resolved": "urn:visionflow:linked:text-to-speech",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Game AI]]",
      "resolved": "urn:visionflow:linked:game-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Avatar]]",
      "resolved": "urn:visionflow:linked:avatar",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Conversational AI]]",
      "resolved": "urn:visionflow:linked:conversational-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Speech Recognition]]",
      "resolved": "urn:visionflow:linked:speech-recognition",
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
  - Inworld AI is a company providing tools for building interactive AI-driven characters for games and virtual experiences. Its platform combines language models, speech and behaviour controls to drive non-player characters and avatars.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:InworldAI
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Conversational AI]]
  - bridges-to:: [[Conversational AI]], [[Speech Recognition]]
  - requires:: [[Language Model]], [[Text-to-Speech]]
  - enables:: [[Game AI]], [[Avatar]]

- ### Content
  - Inworld AI offers a development platform for creating characters that hold conversations, remember context and react to player actions. The system layers personality and goal definitions over language model output to keep behaviour consistent.
  - The product is aimed at game studios and interactive media producers who want responsive characters without scripting every dialogue branch. It integrates speech recognition and synthesis so characters can be spoken to and respond in voice.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
