public:: true

elevatedFrom:: [[Project BroBots]]
# Toxic Content Counter-Narrative System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3b49dda1fae03e41e5a73235e2ce6700093d10090bee0d01d0f2262176b0e443",
  "@type": "Page",
  "vc:slug": "toxic-content-counter-narrative-system",
  "title": "Toxic Content Counter-Narrative System",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:agentic-alliance",
      "vc:label": "Agentic Alliance"
    },
    {
      "@id": "urn:visionflow:owl:class:agents",
      "vc:label": "Agents"
    },
    {
      "@id": "urn:visionflow:owl:class:death-of-the-internet",
      "vc:label": "Death of the Internet"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-society-harms",
      "vc:label": "Digital Society Harms"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Project BroBots"
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
  "@id": "urn:ngm:class:toxic-content-counter-narrative-system",
  "@type": "Class",
  "label": "Toxic Content Counter-Narrative System",
  "definition": "Project BroBots is a multi-agent research initiative to identify, classify, and counter toxic online content using NLP-based harm detection and counter-narrative generation. It employs fine-tuned large language models on social media corpora, the Agentic Alliance tech stack, and is motivated by the harms of automated bot-driven misinformation and harassment across internet platforms.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:agents", "label": "Agents"},
      {"@id": "urn:ngm:class:decentralised-agent-coordination-initiative", "label": "Agentic Alliance"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:content-moderation", "label": "Content Moderation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:digital-society-harms", "label": "Digital Society Harms"},
      {"@id": "urn:ngm:class:death-of-the-internet", "label": "Death of the Internet"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:active-research-projects-registry", "label": "Projects"}
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:project-bro-bots:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3b49dda1fae03e41e5a73235e2ce6700093d10090bee0d01d0f2262176b0e443"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decentralised Agent Coordination Initiative]]",
      "resolved": "urn:visionflow:owl:class:agentic-alliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Agents]]",
      "resolved": "urn:visionflow:owl:class:agents",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Death of the Internet]]",
      "resolved": "urn:visionflow:owl:class:death-of-the-internet",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Society Harms]]",
      "resolved": "urn:visionflow:owl:class:digital-society-harms",
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
  - Project BroBots is a multi-agent research initiative to identify, classify, and counter toxic online content using NLP-based harm detection and counter-narrative generation. It employs fine-tuned large language models on social media corpora, the Agentic Alliance tech stack, and is motivated by the harms of automated bot-driven misinformation and harassment across internet platforms.

- ### Semantic Classification
  - owl-class:: infrastructure:ProjectBroBots
  - owl-role:: Concept

- ### Relationships
  - uses: [[Agents]], [[Decentralised Agent Coordination Initiative]], [[Natural Language Processing]]
  - enables: [[Content Moderation]]
  - contrastsWith: [[Digital Society Harms]], [[Death of the Internet]]
  - partOf: [[Active Research Projects Registry]]

- ### Content
  - # Project: BroBots
  - To address the negative impacts of toxic online behavior by developing a multi-agent system that can identify and counter harmful content.
  - The internet is increasingly populated by bots and trolls that spread misinformation and engage in harassment. This has a negative impact on online discourse and can lead to real-world harm.
  - We propose to build a multi-agent system that can:
		- **Identify harmful content:** Use natural language processing (NLP) to identify toxic language, hate speech, and misinformation.
		- **Counter harmful content:** Generate counter-narratives and engage with users in a positive and constructive way.
		- **Promote healthy online communities:** Encourage positive online behavior and create a more welcoming and inclusive online environment.
  - **Large Language Models:** Llama 3 70B, Mixtral 8B
  - **Fine-tuning:** Fine-tune a smaller model on a corpus of Reddit data to identify and classify harmful content.
  - **Agent Framework:** Use the Agentic Alliance tech stack to build and deploy the multi-agent system.
  - **Data Sources:** Reddit API (if available), other social media platforms.
  - **Data availability:** Access to social media data is becoming increasingly restricted.
  - **Defining "harmful content":** What constitutes harmful content is subjective and can vary depending on the context.
  - **Ethical considerations:** It is important to ensure that the multi-agent system is used in a responsible and ethical way.
  - [[Digital Society Harms]]
  - [[Death of the Internet]]
  - [[Agents]]
  - [[Decentralised Agent Coordination Initiative]]

  - ## Mission Statement
  - ## Problem Space
  - ## Proposed Solution
  - ## Tech Stack
  - ## Challenges
  - ## See Also

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
