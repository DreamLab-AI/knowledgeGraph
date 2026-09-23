---
okf_version: "0.2"
type: Class
title: Optical Character Recognition
resource: urn:ngm:class:optical-character-recognition
domain: ai
description: Optical Character Recognition (OCR) is a technology that converts images of typed, printed, or handwritten text into machine-encoded character sequences, enabling downstream search, editing, and automated processing of scanned documents and photographs. Classical approaches segment character glyphs and classify them against trained feature descriptors; contemporary deep-learning pipelines — typica
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:computer-vision
hasPart:
  - urn:ngm:class:text-detection
  - urn:ngm:class:layout-analysis
  - urn:ngm:class:character-segmentation
  - urn:ngm:class:language-model
requires:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:image-preprocessing
  - urn:ngm:class:convolutional-neural-network
enables:
  - urn:ngm:class:document-intelligence
  - urn:ngm:class:information-extraction
  - urn:ngm:class:legal-research
  - urn:ngm:class:accessibility
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:accessibility
contrastsWith:
  - urn:ngm:class:intelligent-character-recognition
  - urn:ngm:class:optical-mark-recognition
bridgesTo:
  - urn:ngm:class:robotic-process-automation
  - urn:ngm:class:supply-chain-visibility
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:transformer-architecture
standardizedBy:
  - urn:ngm:class:unicode-standard
  - urn:ngm:class:pdf-ua
relatedTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:named-entity-recognition
---

# Optical Character Recognition

Optical Character Recognition (OCR) is a technology that converts images of typed, printed, or handwritten text into machine-encoded character sequences, enabling downstream search, editing, and automated processing of scanned documents and photographs. Classical approaches segment character glyphs and classify them against trained feature descriptors; contemporary deep-learning pipelines — typically convolutional neural networks paired with sequence models such as CTC or Transformer decoders — recognise whole text lines end-to-end without explicit segmentation. OCR is a foundational building block of document intelligence, information extraction, and accessibility tooling, and underlies virtually every large-scale digitisation effort from cultural heritage archives to enterprise content management.
