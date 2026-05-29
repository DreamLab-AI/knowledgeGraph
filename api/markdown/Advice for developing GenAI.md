public:: true

# Advice for developing GenAI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b81219ae10f30dd35ba8192cd01dac43744d0575731907b3abeab8fcb38bd74e",
  "@type": "Page",
  "vc:slug": "advice-for-developing-gen-ai",
  "title": "Advice for developing GenAI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:q-lo-ra",
      "vc:label": "qLoRA"
    },
    {
      "@id": "urn:visionflow:linked:runway",
      "vc:label": "Runway"
    },
    {
      "@id": "urn:visionflow:linked:vercel",
      "vc:label": "Vercel"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-video",
      "vc:label": "AI Video"
    },
    {
      "@id": "urn:visionflow:owl:class:lo-ra-do-ra-etc",
      "vc:label": "LoRA DoRA etc"
    },
    {
      "@id": "urn:visionflow:owl:class:midjourney",
      "vc:label": "Midjourney"
    },
    {
      "@id": "urn:visionflow:owl:class:music-and-audio",
      "vc:label": "Music and Audio"
    },
    {
      "@id": "urn:visionflow:owl:class:open-ai-whisper",
      "vc:label": "OpenAI Whisper"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Advice for developing GenAI"
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
  "@id": "urn:ngm:class:advice-for-developing-gen-ai",
  "@type": "Class",
  "label": "Advice for developing GenAI",
  "definition": "A practitioner's phased methodology for building generative AI applications, progressing from proof-of-concept (using the best available models and rapid prototyping tools) through stakeholder validation to a robust production build, with explicit guidance on iterative evaluation, legal risk deferral, and avoidance of premature fine-tuning.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:ai-video", "label": "AI Video"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"},
      {"@id": "urn:ngm:class:lo-ra-do-ra-etc", "label": "LoRA DoRA etc"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-governance-and-ethics", "label": "AI Governance and Ethics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:music-and-audio", "label": "Music and Audio"},
      {"@id": "urn:ngm:class:ai-agent-system", "label": "AI Agent System"}
    ]
  },
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:advice-for-developing-gen-ai:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b81219ae10f30dd35ba8192cd01dac43744d0575731907b3abeab8fcb38bd74e"
  },
  "vc:resolutions": [
    {
      "raw": "[[qLoRA]]",
      "resolved": "urn:visionflow:linked:q-lo-ra",
      "kind": "StubLink"
    },
    {
      "raw": "[[Runway]]",
      "resolved": "urn:visionflow:linked:runway",
      "kind": "StubLink"
    },
    {
      "raw": "[[Vercel]]",
      "resolved": "urn:visionflow:linked:vercel",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Video]]",
      "resolved": "urn:visionflow:owl:class:ai-video",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[LoRA DoRA etc]]",
      "resolved": "urn:visionflow:owl:class:lo-ra-do-ra-etc",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Midjourney]]",
      "resolved": "urn:visionflow:owl:class:midjourney",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Music and Audio]]",
      "resolved": "urn:visionflow:owl:class:music-and-audio",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[OpenAI Whisper]]",
      "resolved": "urn:visionflow:owl:class:open-ai-whisper",
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
  - A practitioner's phased methodology for building generative AI applications: start with the best available model, prototype rapidly, validate with stakeholders, then build robustly—deferring fine-tuning and legal risk until each phase is proven.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AdviceForDevelopingGenAI
  - owl-role:: Concept

- ### Relationships
  - bridges-to:: [[AI Agent System]]
  - uses:: [[Generative AI]], [[Large Language Models]], [[AI Video]]
  - enables:: [[Fine Tuning]], [[LoRA DoRA etc]]
  - supports:: [[AI Governance and Ethics]]
  - relatedTo:: [[Music and Audio]]

- ### Content
  **DO:**
  - **Pick the best model available**: While GPT-4 is a leader for language tasks, for broader GenAI applications, consider the leading models in each category (e.g., vision, speech, etc.). Don't reinvent the wheel.
  - [[Midjourney]] v6 for images
  - [Suno AI](https://www.suno.ai/) for [[Music and Audio]].
  - [[Runway]] for [[AI Video]] and [[AI Video]]
  - [[OpenAI Whisper]] for speech.
  - **Build a Custom GPT on Test Playground**: Beyond LLMs, experiment with customizable versions of leading models in other domains, like custom vision models on platforms like Azure, AWS, or Google Cloud.
  - **Use public data or generate synthetic with LLMs**: This extends to other AI types as well. Use or generate synthetic data relevant to the task—images for vision AI, sound for audio AI, etc.
  **DON'T DO:**
  - **Experiment with lower performant models**: This remains a standard guideline across all AI types. Always start with the best available technology to understand the potential ceiling of your application.
  - **Build a polished custom app**: Stay lean and focus on the core functionality of your AI application, whether it's LLM, computer vision, or any other AI technology.
  - **Fine-tune a model**: In early stages, it's more about understanding capabilities and limitations broadly. Specific tuning can come later and might involve more domain-specific models. You **can** start looking into tuning modules like [[LoRA DoRA etc]] and [[qLoRA]] if you understand this stuff well enough.
  **DO:**
  - **Build a simple app (e.g., Streamlit, or [[Vercel]] v0: This applies to all AI applications. Use tools that allow rapid prototyping and sharing with stakeholders, whether for LLMs, computer vision apps, or others.
  - **Experiment with new user experiences**: Regardless of the AI technology, consider how it changes or enhances the user experience. This might involve interactive elements, novel data visualizations, or automating previously manual tasks.
  - **Develop strong product evaluation & testing**: This is critical across all AI domains to ensure the application is reliable, ethical, and effective.
  - **Consult legal experts** You will almost certainly need to get your project signed off by a specialist AI lawyer at some point, because this defers the risk. It's expensive. Make sure you have excellent records of everything you have done.
  - **DON'T DO:**
  - **Build-out a full featured & integrated app**: Keep the proof of concept focused and manageable, whether you're working with natural language understanding, image recognition, or any other AI capability.
  - **Spend too much time on re-usable assets**: Stay agile and ready to pivot or adapt based on feedback and findings.
  - **Ignore LLM risks (e.g., prompt injection, hallucinations)**: Similarly, be aware of and mitigate risks specific to other types of AI, such as adversarial attacks in computer vision or privacy concerns in voice AI.
  **DO:**
  - **Iterate through implementation techniques**: As with LLMs, try different architectures, data sets, or integration methods relevant to the specific AI type.
  - **Try a cheaper model and possibly fine-tuning**: Once the base functionality is proven, optimize for cost and efficiency, which may include moving to smaller, more specialized models or fine-tuning.
  **DON'T DO:**
  - **Get stuck with the first implementation attempt**: Be prepared to iterate and evolve as you learn more about the AI's performance and the users' needs.
  - **Forget about data quality (incl. for RAG)**: High-quality, diverse, and relevant data is crucial for training any AI model effectively.
  - **Adaptability**: Different AI fields evolve at different rates. Stay updated with the latest in each specific domain.
  - **Interdisciplinary Integration**: Combining AI types (e.g., LLMs for chatbots with voice recognition) can create more sophisticated solutions.
  - **Ethical and Responsible AI**: Ensure ethical considerations and responsible use are central, especially as models impact different domains differently.
  - **Scalability and Infrastructure**: Different AI models have varying demands on infrastructure. Plan scalability from the start.

  #### **Key Question: Can Gen AI help solve my use case?**
  - ### Proof of Concept
  - #### **Key Question: Are my stakeholders interested?**
  - ### Build
  - #### **Key Question: How do I build a robust Gen AI app?**
  - ### **Additional Considerations for Generalizing to All GenAI:**

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
