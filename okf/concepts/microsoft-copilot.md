---
okf_version: "0.2"
type: Class
title: Microsoft Copilot
resource: urn:ngm:class:microsoft-copilot
domain: ai
description: "Microsoft Copilot is a family of AI-powered assistant products developed by Microsoft and embedded across its software ecosystem, including Windows, Microsoft 365, the Edge browser, GitHub, and Azure. The system builds on large language models from OpenAI (GPT-4 series) combined with Microsoft's own retrieval augmentation over Microsoft Graph, enabling context-aware responses grounded in a user's "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:generative-ai
requires:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:large-language-model
  - urn:ngm:class:microsoft-graph
enables:
  - urn:ngm:class:code-generation
  - urn:ngm:class:document-summarisation
  - urn:ngm:class:conversational-ai
  - urn:ngm:class:automated-meeting-notes
implements:
  - urn:ngm:class:responsible-ai
  - urn:ngm:class:prompt-engineering
contrastsWith:
  - urn:ngm:class:google-ai-technology-corporation-gemini
  - urn:ngm:class:chatgpt
  - urn:ngm:class:amazon-q
bridgesTo:
  - urn:ngm:class:azure
  - urn:ngm:class:role-based-access-control
  - urn:ngm:class:azure
uses:
  - urn:ngm:class:gpt-4
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:semantic-search
partOf:
  - urn:ngm:class:microsoft
  - urn:ngm:class:azure
  - urn:ngm:class:microsoft
  - urn:ngm:class:azure
relatedTo:
  - urn:ngm:class:github-copilot
  - urn:ngm:class:openai-research-organisation
  - urn:ngm:class:enterprise-ai
  - urn:ngm:class:openai-research-organisation
---

# Microsoft Copilot

Microsoft Copilot is a family of AI-powered assistant products developed by Microsoft and embedded across its software ecosystem, including Windows, Microsoft 365, the Edge browser, GitHub, and Azure. The system builds on large language models from OpenAI (GPT-4 series) combined with Microsoft's own retrieval augmentation over Microsoft Graph, enabling context-aware responses grounded in a user's documents, emails, meetings, and calendar data. Enterprise deployments offer tenancy-scoped data access with existing permission boundaries, distinguishing Copilot from general-purpose chatbots. GitHub Copilot, a precursor product launched in 2021, provides AI-assisted code completion, chat, and pull-request summarisation inside developer environments.
