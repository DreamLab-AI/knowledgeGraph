---
okf_version: "0.2"
type: Class
title: Chatbot
resource: urn:ngm:class:chatbot
domain: artificial-intelligence
description: A software application designed to simulate conversation with human users, processing natural-language input through rule-based, retrieval-based, or generative mechanisms to produce contextually appropriate responses. Modern chatbots are predominantly built on large language models, enabling open-domain dialogue, multi-turn context tracking, and task execution across text and voice interfaces. The
maturity: established
quality: 0.73
is-a:
  - urn:ngm:class:conversational-ai
  - urn:ngm:class:dialogue-system
hasPart:
  - urn:ngm:class:intent-recognition
  - urn:ngm:class:context-window
  - urn:ngm:class:response-generation
  - urn:ngm:class:dialogue-management
  - urn:ngm:class:natural-language-understanding
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:sentiment-analysis
  - urn:ngm:class:session-management
requires:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:intent-recognition
  - urn:ngm:class:dialogue-management
  - urn:ngm:class:language-model
enables:
  - urn:ngm:class:customer-service-automation
  - urn:ngm:class:virtual-assistant
  - urn:ngm:class:question-answering
  - urn:ngm:class:multi-turn-dialogue
  - urn:ngm:class:voice-interaction
  - urn:ngm:class:personalisation
dependsOn:
  - urn:ngm:class:language-model
  - urn:ngm:class:knowledge-base
  - urn:ngm:class:embedding-model
  - urn:ngm:class:context-window
implements:
  - urn:ngm:class:conversational-ai
  - urn:ngm:class:natural-language-understanding
contrastsWith:
  - urn:ngm:class:ai-agent
  - urn:ngm:class:rule-based-systems
  - urn:ngm:class:batch-processing
bridgesTo:
  - urn:ngm:class:robotic-process-automation
  - urn:ngm:class:api-gateway
  - urn:ngm:class:voice-interaction
  - urn:ngm:class:digital-twin
  - urn:ngm:class:autonomous-robot
uses:
  - urn:ngm:class:large-language-models
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:prompt-engineering
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:embedding-model
supports:
  - urn:ngm:class:multi-turn-dialogue
  - urn:ngm:class:personalisation
  - urn:ngm:class:multi-turn-dialogue
  - urn:ngm:class:sentiment-analysis
standardizedBy:
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:iso-iec-42001
  - urn:ngm:class:nist-ai-rmf
relatedTo:
  - urn:ngm:class:sentiment-analysis
  - urn:ngm:class:text-classification
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:semantic-search
  - urn:ngm:class:machine-translation
  - urn:ngm:class:information-extraction
  - urn:ngm:class:robotic-process-automation
  - urn:ngm:class:ai-safety
---

# Chatbot

A software application designed to simulate conversation with human users, processing natural-language input through rule-based, retrieval-based, or generative mechanisms to produce contextually appropriate responses. Modern chatbots are predominantly built on large language models, enabling open-domain dialogue, multi-turn context tracking, and task execution across text and voice interfaces. They serve as the primary user-facing layer of conversational AI systems, integrating intent recognition, dialogue management, and response generation into a coherent interaction loop. Deployment contexts range from narrow-domain customer support and virtual assistants to general-purpose AI agents capable of reasoning, tool use, and multi-step problem solving.
