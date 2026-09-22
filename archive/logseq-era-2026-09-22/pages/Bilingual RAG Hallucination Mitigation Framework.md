public:: true

elevatedFrom:: [[jing]]
# Bilingual RAG Hallucination Mitigation Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6dd42a0309486c6382499214531f09993b0ea1f882e6865123fd8f8aa3afcb81",
  "@type": "Page",
  "vc:slug": "bilingual-rag-hallucination-mitigation-framework",
  "title": "Bilingual RAG Hallucination Mitigation Framework",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "jing"
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
  "@id": "urn:ngm:class:bilingual-rag-hallucination-mitigation-framework",
  "@type": "Class",
  "label": "Bilingual RAG Hallucination Mitigation Framework",
  "definition": "Jing is a multi-agent AI framework designed to minimise hallucination in Chinese-English bilingual retrieval-augmented generation (RAG) pipelines, specifically applied to emotional-support chatbots for end-of-life counselling and palliative care. The system combines multiple large language models with open-source text-to-speech engines and real-time 3D avatars to deliver culturally sensitive, affectively aware conversational companions, initially targeting Japanese VR screen deployment contexts. Its multi-agent architecture distributes validation, retrieval, and generation tasks across specialised model instances to improve factual grounding and reduce hallucinated responses in high-stakes care settings.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "quality": 0.7,
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:text-to-speech", "label": "Text-to-Speech"},
      {"@id": "urn:ngm:class:multi-agent-systems", "label": "Multi-Agent Systems"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-avatar", "label": "Digital Avatar"},
      {"@id": "urn:ngm:class:emotional-intelligence", "label": "Emotional Intelligence"},
      {"@id": "urn:ngm:class:healthcare-ai", "label": "Healthcare AI"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:virtual-reality-applications", "label": "Virtual Reality Applications"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:jing:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6dd42a0309486c6382499214531f09993b0ea1f882e6865123fd8f8aa3afcb81"
  },
  "vc:resolutions": [],
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
  - **Jing** is a multi-agent AI system for bilingual (Chinese/English) retrieval-augmented generation targeting emotionally sensitive domains — specifically end-of-life counselling. It combines multiple LLMs, open-source TTS, and real-time 3D avatars, initially deployed on Japanese VR screens. The multi-agent design reduces hallucination by distributing retrieval, validation, and generation across specialised model instances.

- ### Semantic Classification
  - owl-class:: infrastructure:Jing
  - owl-role:: Concept

- ### Relationships
  - uses:: Retrieval-Augmented Generation, Large Language Models, Text-to-Speech, Multi-Agent Systems
  - relatedTo:: Digital Avatar, Emotional Intelligence, Healthcare AI
  - supports:: Virtual Reality Applications

- ### Content
  - Multi-agent framework for minimising hallucination in Chinese/English RAG-based emotional support chatbots, using multiple large language models and open-source text-to-speech engines alongside real-time 3D avatars.
  - End-of-life counsellor care chatbot — VR product for Japanese VR screens.

  Jing addresses a fundamental challenge in high-stakes conversational AI: the tendency of single-model RAG systems to hallucinate when queries mix languages, culturally specific idiom, and emotionally charged content simultaneously. By routing sub-tasks (retrieval, grounding verification, affective tone adjustment, speech synthesis) to dedicated agents, the system achieves factual reliability appropriate for palliative care contexts where misinformation carries serious consequences.

  The 3D avatar component supports non-verbal affective communication — gaze, gesture, facial expression — which research suggests is important for reducing patient isolation in remote or VR-mediated care settings.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
