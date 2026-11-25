---
okf_version: "0.2"
type: Class
title: mT5
resource: urn:ngm:class:m-t5
domain: artificial-intelligence
description: mT5 (Multilingual T5) is a massively multilingual pre-trained text-to-text transformer model developed by Google Research, covering 101 languages through pre-training on the mC4 multilingual Common Crawl corpus. It extends the T5 architecture's unified text-to-text framework to multilingual settings, treating all NLP tasks as sequence-to-sequence problems. mT5 enables strong cross-lingual transfer
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:ai-model-architecture
enables:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:information-retrieval
dependsOn:
  - urn:ngm:class:pre-trained-model
  - urn:ngm:class:embedding-model
bridgesTo:
  - urn:ngm:class:fine-tuning
uses:
  - urn:ngm:class:tokenization
  - urn:ngm:class:transfer-learning
relatedTo:
  - urn:ngm:class:transformer
  - urn:ngm:class:encoder-decoder
  - urn:ngm:class:large-language-model
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# mT5

mT5 (Multilingual T5) is a massively multilingual pre-trained text-to-text transformer model developed by Google Research, covering 101 languages through pre-training on the mC4 multilingual Common Crawl corpus. It extends the T5 architecture's unified text-to-text framework to multilingual settings, treating all NLP tasks as sequence-to-sequence problems. mT5 enables strong cross-lingual transfer and zero-shot performance on low-resource languages, making it a foundational model for multilingual NLP applications including translation, question answering, and information retrieval.
