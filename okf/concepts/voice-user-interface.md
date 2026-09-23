---
okf_version: "0.2"
type: Class
title: Voice User Interface
resource: urn:ngm:class:voice-user-interface
domain: artificial-intelligence
description: A Voice User Interface (VUI) is a human-computer interaction modality in which users issue commands and receive responses through spoken language rather than visual controls. It chains automatic speech recognition, natural-language understanding, dialogue management and speech synthesis to turn utterances into actions and synthesised replies. VUIs power virtual assistants, in-car systems and acces
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:user-interface
hasPart:
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:speech-synthesis
  - urn:ngm:class:intent-classification
  - urn:ngm:class:dialogue-system
  - urn:ngm:class:speech-synthesis
requires:
  - urn:ngm:class:automatic-speech-recognition
  - urn:ngm:class:natural-language-understanding
  - urn:ngm:class:text-to-speech
enables:
  - urn:ngm:class:conversational-ai
  - urn:ngm:class:voice-assistant
dependsOn:
  - urn:ngm:class:speech-recognition
bridgesTo:
  - urn:ngm:class:conversational-ai
uses:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:intent-classification
supports:
  - urn:ngm:class:human-computer-interaction
  - urn:ngm:class:accessibility
partOf:
  - urn:ngm:class:user-interface
relatedTo:
  - urn:ngm:class:chatbot
  - urn:ngm:class:voice-assistant
  - urn:ngm:class:user-experience
---

# Voice User Interface

A Voice User Interface (VUI) is a human-computer interaction modality in which users issue commands and receive responses through spoken language rather than visual controls. It chains automatic speech recognition, natural-language understanding, dialogue management and speech synthesis to turn utterances into actions and synthesised replies. VUIs power virtual assistants, in-car systems and accessibility tools where hands-free or eyes-free operation is valuable.
