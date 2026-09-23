---
okf_version: "0.2"
type: Class
title: Computer Use
resource: urn:ngm:class:computer-use
domain: artificial-intelligence
description: Computer Use is an AI capability that enables multimodal models to perceive, navigate, and interact with graphical user interfaces, desktop applications, and operating system environments to autonomously complete multi-step tasks. The model receives screenshot observations of the screen and emits mouse-click, keyboard, and scroll actions, effectively operating software as a human operator would. I
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-application
requires:
  - urn:ngm:class:multimodal-ai-architecture
  - urn:ngm:class:tool-use
enables:
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:workflow-automation
relatedTo:
  - urn:ngm:class:interface
---

# Computer Use

Computer Use is an AI capability that enables multimodal models to perceive, navigate, and interact with graphical user interfaces, desktop applications, and operating system environments to autonomously complete multi-step tasks. The model receives screenshot observations of the screen and emits mouse-click, keyboard, and scroll actions, effectively operating software as a human operator would. It extends conventional tool-use paradigms by treating the entire GUI surface as an action space rather than a structured API.
