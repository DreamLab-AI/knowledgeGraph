public:: true

# Microsoft Copilot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:421190423096b5e80a4f307db4a2ebb416c19321b5202c1ec8008dfec5916b7d",
  "@type": "Page",
  "vc:slug": "microsoft-copilot",
  "title": "Microsoft Copilot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:large-language-model",
      "vc:label": "Large Language Model"
    },
    {
      "@id": "urn:visionflow:linked:llama",
      "vc:label": "Llama"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence-domain",
      "vc:label": "Artificial Intelligence Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Microsoft Copilot"
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
  "@id": "urn:ngm:class:microsoft-copilot",
  "@type": "Class",
  "label": "Microsoft Copilot",
  "definition": "Microsoft Copilot is a family of generative AI assistants developed by Microsoft and integrated across its products, including Windows, Microsoft 365 and the Edge browser. Launched from 2023 onwards, it builds on large language models from OpenAI together with Microsoft's own models and data grounding. In Microsoft 365 it can draft documents, summarise meetings, analyse spreadsheets and generate email based on a user's content and context. GitHub Copilot, a related product, provides code completion and chat assistance within software development environments.",
  "domain": "microsoft-copilot",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence-domain",
      "label": "Artificial Intelligence Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Model"
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
  "@id": "urn:visionflow:annotation:link-resolutions:microsoft-copilot:41749b116c70",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:421190423096b5e80a4f307db4a2ebb416c19321b5202c1ec8008dfec5916b7d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Large Language Model]]",
      "resolved": "urn:visionflow:linked:large-language-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[Meta Llama Model Family]]",
      "resolved": "urn:visionflow:linked:llama",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence Domain]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence-domain",
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
  - Microsoft Copilot is a family of generative AI assistants developed by Microsoft and integrated across its products, including Windows, Microsoft 365 and the Edge browser. Launched from 2023 onwards, it builds on large language models from OpenAI together with Microsoft's own models and data grounding. In Microsoft 365 it can draft documents, summarise meetings, analyse spreadsheets and generate email based on a user's content and context. GitHub Copilot, a related product, provides code completion and chat assistance within software development environments.

- ### Semantic Classification
  - owl-class:: ai:MicrosoftCopilot
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence Domain]]
  - bridges-to:: [[Meta Llama Model Family]]
  - requires:: [[Large Language Model]]

- ### Content
  - Microsoft Copilot is an umbrella brand for AI assistants embedded throughout Microsoft's software. Rather than a single product, it spans the consumer Copilot chat experience, Copilot in Windows and Edge, and Copilot for Microsoft 365 that operates within Word, Excel, PowerPoint, Outlook and Teams.
  - In the productivity suite, Copilot grounds its responses in a user's documents, emails and calendar through a retrieval layer over Microsoft Graph, so it can summarise threads, draft content and answer questions about an organisation's data subject to existing permissions. This grounding distinguishes enterprise Copilot from a general chatbot.
  - GitHub Copilot, an earlier and closely related offering, focuses on software development by suggesting code and answering questions inside editors. Together these products represent Microsoft's strategy of distributing generative AI across its existing platforms rather than as a standalone application.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
