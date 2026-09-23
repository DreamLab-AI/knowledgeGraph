---
okf_version: "0.2"
type: Class
title: BERT
resource: urn:ngm:class:bert
domain: ai
description: BERT (Bidirectional Encoder Representations from Transformers) is a pre-trained deep language representation model developed by Google AI Language, published in 2018, which applies a bidirectional Transformer encoder trained with masked language modelling (MLM) and next sentence prediction (NSP) objectives on large text corpora to produce contextualised word embeddings. Unlike prior unidirectional
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:language-model
  - urn:ngm:class:ai-model-architecture
  - urn:ngm:class:pre-trained-language-model
hasPart:
  - urn:ngm:class:cls-token
  - urn:ngm:class:sep-token
  - urn:ngm:class:masked-language-modelling
  - urn:ngm:class:next-sentence-prediction
  - urn:ngm:class:subword-tokenisation
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:self-attention
requires:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:pre-training
  - urn:ngm:class:large-scale-corpus
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:attention-mechanism
enables:
  - urn:ngm:class:natural-language-understanding
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:semantic-search
  - urn:ngm:class:question-answering
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:sentiment-analysis
  - urn:ngm:class:dense-retrieval
  - urn:ngm:class:dense-passage-retrieval
  - urn:ngm:class:knowledge-graph-embedding
dependsOn:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:backpropagation
  - urn:ngm:class:large-scale-corpus
  - urn:ngm:class:neural-network-text-tokenisation
implements:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:masked-language-modelling
  - urn:ngm:class:pre-training
contrastsWith:
  - urn:ngm:class:gpt
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:elmo
  - urn:ngm:class:recurrent-neural-network
bridgesTo:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:knowledge-graph-embedding
  - urn:ngm:class:large-language-models
uses:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:self-attention
  - urn:ngm:class:embeddings
  - urn:ngm:class:masked-language-modelling
  - urn:ngm:class:subword-tokenisation
  - urn:ngm:class:subword-tokenisation
  - urn:ngm:class:backpropagation
supports:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:semantic-search
  - urn:ngm:class:information-retrieval
standardizedBy:
  - urn:ngm:class:transformers
  - urn:ngm:class:glue-benchmark
relatedTo:
  - urn:ngm:class:ro-berta
  - urn:ngm:class:albert
  - urn:ngm:class:m-bert
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:gpt
  - urn:ngm:class:t5
  - urn:ngm:class:glue-benchmark
  - urn:ngm:class:distilbert
  - urn:ngm:class:deberta
  - urn:ngm:class:squad
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:bleu-score
---

# BERT

BERT (Bidirectional Encoder Representations from Transformers) is a pre-trained deep language representation model developed by Google AI Language, published in 2018, which applies a bidirectional Transformer encoder trained with masked language modelling (MLM) and next sentence prediction (NSP) objectives on large text corpora to produce contextualised word embeddings. Unlike prior unidirectional models, BERT conditions each token on its full left and right context simultaneously, enabling a richer semantic representation that generalises across diverse NLP tasks via fine-tuning. It established the pre-train-then-fine-tune paradigm for natural language processing, achieving state-of-the-art performance across eleven NLP benchmarks upon release, including GLUE and SQuAD. Its architecture directly underpins a large family of subsequent encoder models including RoBERTa, ALBERT, DistilBERT, and multilingual mBERT.
