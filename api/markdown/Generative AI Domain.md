public:: true
alias:: GenerativeAIDomain

# Generative AI Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:77fa707b36071b67253ccbaf3b9f94b29a97e82092907830a82fb69ffdacd96e",
  "@type": "Page",
  "vc:slug": "generative-ai-domain",
  "title": "Generative AI Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:large-language-model",
      "vc:label": "Large Language Model"
    },
    {
      "@id": "urn:visionflow:linked:text-to-image-generation",
      "vc:label": "Text-to-Image Generation"
    },
    {
      "@id": "urn:visionflow:linked:prompt-engineering",
      "vc:label": "Prompt Engineering"
    },
    {
      "@id": "urn:visionflow:linked:retrieval-augmented-generation",
      "vc:label": "Retrieval-Augmented Generation"
    },
    {
      "@id": "urn:visionflow:linked:fine-tuning",
      "vc:label": "Fine-Tuning"
    },
    {
      "@id": "urn:visionflow:linked:generative-modelling-domain",
      "vc:label": "Generative Modelling Domain"
    },
    {
      "@id": "urn:visionflow:linked:natural-language-processing-domain",
      "vc:label": "Natural Language Processing Domain"
    },
    {
      "@id": "urn:visionflow:linked:compute-layer",
      "vc:label": "Compute Layer"
    },
    {
      "@id": "urn:visionflow:linked:content-generation",
      "vc:label": "Content Generation"
    },
    {
      "@id": "urn:visionflow:linked:code-assistance",
      "vc:label": "Code Assistance"
    },
    {
      "@id": "urn:visionflow:linked:conversational-agents",
      "vc:label": "Conversational Agents"
    },
    {
      "@id": "urn:visionflow:linked:agentic-systems-domain",
      "vc:label": "Agentic Systems Domain"
    },
    {
      "@id": "urn:visionflow:linked:creative-ai-domain",
      "vc:label": "Creative AI Domain"
    },
    {
      "@id": "urn:visionflow:linked:ai-governance-domain",
      "vc:label": "AI Governance Domain"
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
      "vc:value": "Generative AI Domain"
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
  "@id": "urn:ngm:class:generative-ai-domain",
  "@type": "Class",
  "label": "Generative AI Domain",
  "definition": "The Generative AI Domain covers the application of generative models to produce text, images, audio, code and other content for end users. Its scope includes prompting, fine-tuning, retrieval augmentation and the integration of generative models into products and workflows. It is an applied sub-area of the Artificial Intelligence Domain that builds on the Generative Modelling Domain. The boundary excludes the formal study of the underlying distributions, which belongs to generative modelling.",
  "domain": "generative-ai",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence-domain",
      "label": "Artificial Intelligence Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:text-to-image-generation",
        "label": "Text-to-Image Generation"
      },
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      },
      {
        "@id": "urn:ngm:class:fine-tuning",
        "label": "Fine-Tuning"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:generative-modelling-domain",
        "label": "Generative Modelling Domain"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing-domain",
        "label": "Natural Language Processing Domain"
      },
      {
        "@id": "urn:ngm:class:compute-layer",
        "label": "Compute Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:content-generation",
        "label": "Content Generation"
      },
      {
        "@id": "urn:ngm:class:code-assistance",
        "label": "Code Assistance"
      },
      {
        "@id": "urn:ngm:class:conversational-agents",
        "label": "Conversational Agents"
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
  "@id": "urn:visionflow:annotation:link-resolutions:generative-ai-domain:88df274438b6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:77fa707b36071b67253ccbaf3b9f94b29a97e82092907830a82fb69ffdacd96e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Large Language Model]]",
      "resolved": "urn:visionflow:linked:large-language-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[Text-to-Image Generation]]",
      "resolved": "urn:visionflow:linked:text-to-image-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Prompt Engineering]]",
      "resolved": "urn:visionflow:linked:prompt-engineering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Retrieval-Augmented Generation]]",
      "resolved": "urn:visionflow:linked:retrieval-augmented-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fine-Tuning]]",
      "resolved": "urn:visionflow:linked:fine-tuning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Generative Modelling Domain]]",
      "resolved": "urn:visionflow:linked:generative-modelling-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Natural Language Processing Domain]]",
      "resolved": "urn:visionflow:linked:natural-language-processing-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Compute Layer]]",
      "resolved": "urn:visionflow:linked:compute-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Content Generation]]",
      "resolved": "urn:visionflow:linked:content-generation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Code Assistance]]",
      "resolved": "urn:visionflow:linked:code-assistance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Conversational Agents]]",
      "resolved": "urn:visionflow:linked:conversational-agents",
      "kind": "StubLink"
    },
    {
      "raw": "[[Agentic Systems Domain]]",
      "resolved": "urn:visionflow:linked:agentic-systems-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Creative AI Domain]]",
      "resolved": "urn:visionflow:linked:creative-ai-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Governance Domain]]",
      "resolved": "urn:visionflow:linked:ai-governance-domain",
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
  - The Generative AI Domain covers the application of generative models to produce text, images, audio, code and other content for end users. Its scope includes prompting, fine-tuning, retrieval augmentation and the integration of generative models into products and workflows. It is an applied sub-area of the Artificial Intelligence Domain that builds on the Generative Modelling Domain. The boundary excludes the formal study of the underlying distributions, which belongs to generative modelling.

- ### Semantic Classification
  - owl-class:: genai:GenerativeAIDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence Domain]]
  - bridges-to:: [[Agentic Systems Domain]], [[Creative AI Domain]], [[AI Governance Domain]]
  - has-part:: [[Large Language Model]], [[Text-to-Image Generation]], [[Prompt Engineering]], [[Retrieval-Augmented Generation]], [[Fine-Tuning]]
  - requires:: [[Generative Modelling Domain]], [[Natural Language Processing Domain]], [[Compute Layer]]
  - enables:: [[Content Generation]], [[Code Assistance]], [[Conversational Agents]]

- ### Content
  - The Generative AI Domain concerns the practical deployment of generative models to create content on demand. Its scope spans the foundation model lifecycle, including pre-training, adaptation through fine-tuning and prompting, and serving at scale. The boundary is application and integration, so the formal training theory remains in the Generative Modelling Domain while product-facing behaviour, evaluation and safety controls sit here.
  - Member concepts include the Large Language Model and Text-to-Image Generation as headline capabilities, with Prompt Engineering, Retrieval-Augmented Generation and Fine-Tuning as the principal adaptation techniques. These require the generative modelling methods that produce the base models, natural language processing for text interfaces and the Compute Layer for inference.
  - The domain bridges to the Agentic Systems Domain, which uses generative models as reasoning engines, to the Creative AI Domain for authored output, and to the AI Governance Domain for the policy and provenance controls that responsible deployment demands. It enables content generation, code assistance and conversational agents.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
