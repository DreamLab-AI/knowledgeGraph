schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#OpenAi
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:open-ai
public:: true

# Open AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4dc019f2c31f788a214bb52d13d472f431e0a9a712f3163d077ff6d636b0eab0",
  "@type": "Page",
  "vc:slug": "open-ai",
  "title": "Open AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:aicompanies",
      "vc:label": "AICompanies"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-ed8c7bd606f2"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#OpenAi"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-8045"
    },
    {
      "vc:key": "maturity",
      "vc:value": "complete"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Open AI"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:open-ai"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:open-ai"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:4dc019f2c31f788a214bb52d13d472f431e0a9a712f3163d077ff6d636b0eab0@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:open-ai",
  "@type": "OntologyClass",
  "label": "Open AI",
  "subClassOf": [
    {
      "@id": "urn:visionflow:linked:aicompanies",
      "vc:label": "AICompanies"
    }
  ],
  "vc:sourceDomain": "artificial-intelligence",
  "vc:status": "active",
  "vc:maturity": "complete",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:4dc019f2c31f788a214bb52d13d472f431e0a9a712f3163d077ff6d636b0eab0"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:4dc019f2c31f788a214bb52d13d472f431e0a9a712f3163d077ff6d636b0eab0@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "OpenAI is an American artificial intelligence company founded in December 2015, known for developing the GPT family of large language models, DALL-E image generation, and the Sora video model. Following an October 2025 restructuring, the non-profit OpenAI Foundation holds 26% of the for-profit OpenAI Group PBC (public benefit corporation), with Microsoft owning 27% and the company valued at $500 billion.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:open-ai:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4dc019f2c31f788a214bb52d13d472f431e0a9a712f3163d077ff6d636b0eab0"
  },
  "vc:resolutions": [
    {
      "raw": "[[AICompanies]]",
      "resolved": "urn:visionflow:linked:aicompanies",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:4dc019f2c31f788a214bb52d13d472f431e0a9a712f3163d077ff6d636b0eab0@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - OpenAI is an American artificial intelligence company founded in December 2015, known for developing the GPT family of large language models, DALL-E image generation, and the Sora video model. Following an October 2025 restructuring, the non-profit OpenAI Foundation holds 26% of the for-profit OpenAI Group PBC (public benefit corporation), with Microsoft owning 27% and the company valued at $500 billion.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Openai
  - owl-role:: Organization
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[AICompanies]]

- ### Content
  <<<<<<< HEAD

  - ## Technical Details
  - ### Major Products and Models
  - **ChatGPT** (Nov 2022): Conversational AI interface, catalyzed widespread interest in generative AI
  - **GPT-4/4o** (2023-2024): Flagship multimodal language models
  - **GPT-4.1/4.5** (2025): Latest non-reasoning models
  - **GPT-5** (2025): Current flagship with full reasoning capabilities
  - **OpenAI o1** (Dec 2024): Early reasoning model (codename "strawberry")
  - **DALL-E 3**: Advanced text-to-image generation
  - **Sora** (Dec 2024): Text-to-video generation model
  - **Whisper**: Open-source speech recognition
  - **Operator** (Jan 2025): AI agent for web automation
  - ### Key Figures
  - **Sam Altman**: CEO since 2019, briefly ousted and reinstated in Nov 2023
  - **Greg Brockman**: Co-founder and President
  - **Mira Murati**: Former CTO
  - **Bret Taylor**: Board Chair (OpenAI Foundation)
  - ### Organization Structure (October 2025)
  - **OpenAI Foundation**: Non-profit holding 26% of PBC, controls all board appointments
  - **OpenAI Group PBC**: For-profit public benefit corporation
  - **Ownership**: Foundation 26%, Microsoft 27%, Employees/Investors 47%
  - **Safety & Security Committee**: Remains under Foundation governance
  - ## Timeline
  - **2015**: Founded as non-profit by Altman, Brockman, Musk, Thiel, and others
  - **2018**: Created capped-profit OpenAI LP division
  - **2019**: Sam Altman becomes CEO
  - **2022**: ChatGPT launch (Nov 30)
  - **2023**: GPT-4 release; Altman briefly ousted (Nov)
  - **2024**: GPT-4o, o1 reasoning model, Sora, partnerships with ASU, Reddit, Apple
  - **2025**: Operator, GPT-5, IO acquisition ($6.5B), restructuring to PBC, $500B valuation
  - ## Applications
  - **Consumer**: ChatGPT for conversation, writing, coding, research
  - **Enterprise**: API access for custom applications
  - **Education**: Partnerships with universities
  - **Productivity**: Integration via Microsoft 365 Copilot

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
