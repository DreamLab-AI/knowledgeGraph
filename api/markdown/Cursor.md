public:: true

# Cursor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f7baf3c476fa644e10439fb0adc523c6b3af2ca559f34d5d499ba1fc02d00e44",
  "@type": "Page",
  "vc:slug": "cursor",
  "title": "Cursor",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gpt",
      "vc:label": "GPT"
    },
    {
      "@id": "urn:visionflow:linked:software-development",
      "vc:label": "Software Development"
    },
    {
      "@id": "urn:visionflow:linked:generative-ai",
      "vc:label": "Generative AI"
    },
    {
      "@id": "urn:visionflow:linked:https-cursor-com",
      "vc:label": "https://cursor.com"
    },
    {
      "@id": "urn:visionflow:linked:https-docs-cursor-com",
      "vc:label": "https://docs.cursor.com"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Cursor"
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
  "@id": "urn:ngm:class:cursor",
  "@type": "Class",
  "label": "Cursor",
  "definition": "Cursor is a code editor built on Visual Studio Code that integrates large language models for code completion, editing, and chat-based assistance. It is developed by Anysphere.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-development",
      "label": "Software Development"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:gpt",
        "label": "GPT"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
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
  "@id": "urn:visionflow:annotation:link-resolutions:cursor:46a4eebd20d8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f7baf3c476fa644e10439fb0adc523c6b3af2ca559f34d5d499ba1fc02d00e44"
  },
  "vc:resolutions": [
    {
      "raw": "[[GPT]]",
      "resolved": "urn:visionflow:linked:gpt",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Development]]",
      "resolved": "urn:visionflow:linked:software-development",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative AI]]",
      "resolved": "urn:visionflow:linked:generative-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://cursor.com]]",
      "resolved": "urn:visionflow:linked:https-cursor-com",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://docs.cursor.com]]",
      "resolved": "urn:visionflow:linked:https-docs-cursor-com",
      "kind": "StubLink"
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
  - Cursor is a code editor built on Visual Studio Code that integrates large language models for code completion, editing, and chat-based assistance. It is developed by Anysphere.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Cursor
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Software Development]]
  - bridges-to:: [[Generative AI]]
  - requires:: [[GPT]]
  - enables:: [[Software Development]]

- ### Content
  - Cursor extends a familiar editor with model-driven features that suggest completions, apply multi-file edits, and answer questions about a codebase. It indexes project files so that suggestions reflect the surrounding context.
  - The editor supports natural-language instructions for refactoring and generation, and it can run commands and read terminal output to assist with debugging. It connects to hosted models and allows configuration of which model to use.

- ### Provenance
  - sources:: [[https://cursor.com]], [[https://docs.cursor.com]]
  - migration-date:: 2026-05-29T00:00:00Z
