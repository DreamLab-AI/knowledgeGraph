public:: true

# BERT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bert",
  "@type": "Page",
  "vc:slug": "bert",
  "title": "BERT",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bert",
  "@type": "Class",
  "label": "BERT",
  "definition": "BERT (Bidirectional Encoder Representations from Transformers) is a pre-trained deep language representation model developed by Google AI Language and published in 2018. It applies a bidirectional Transformer encoder trained with masked language modelling (MLM) and next sentence prediction (NSP) objectives on large text corpora, producing contextualised word embeddings. BERT established a new paradigm of pre-train-then-fine-tune for natural language processing tasks, achieving state-of-the-art performance across eleven NLP benchmarks upon release. Its architecture underpins a large family of subsequent models including RoBERTa, ALBERT, and multilingual mBERT.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:language-model", "label": "Language Model"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"},
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"},
      {"@id": "urn:ngm:class:self-attention", "label": "Self Attention"},
      {"@id": "urn:ngm:class:embeddings", "label": "Embeddings"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:natural-language-understanding", "label": "Natural Language Understanding"},
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ro-berta", "label": "RoBERTa"},
      {"@id": "urn:ngm:class:albert", "label": "ALBERT"},
      {"@id": "urn:ngm:class:m-bert", "label": "mBERT"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[BERT]] (Bidirectional Encoder Representations from Transformers) is a landmark pre-trained [[Language Model]] from Google AI that introduced bidirectional context modelling via masked self-attention, enabling superior [[Natural Language Understanding]] across classification, question answering, and named-entity recognition tasks through [[Fine Tuning]] on task-specific data.

- ### Relationships
  - BERT is an instance of the [[Language Model]] class built on the [[Transformer Architecture]] and its [[Attention Mechanism]], specifically using [[Self Attention]] in a bidirectional encoder stack to produce rich contextualised [[Embeddings]]. Fine-tuning BERT on labelled datasets enables [[Natural Language Understanding]] and downstream [[Natural Language Processing]] tasks. Direct successors include [[RoBERTa]] (which removes NSP and trains longer), [[ALBERT]] (parameter-efficient factorisation), and [[mBERT]] (multilingual variant covering 104 languages).

- ### Content
  - BERT was introduced by Jacob Devlin, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova at Google AI Language in October 2018 (arXiv:1810.04805). Before BERT, most NLP systems used unidirectional language models (left-to-right or shallow bidirectional via concatenation), which limited the ability to incorporate full context. BERT's key insight was to apply the Transformer encoder architecture with a masked language modelling objective: randomly masking 15% of input tokens and training the model to predict them using both left and right context simultaneously. The model was pre-trained on BooksCorpus (800M words) and English Wikipedia (2.5B words).

  - BERT comes in two standard configurations: BERT-Base (12 Transformer encoder layers, 12 attention heads, 768 hidden dimensions, 110M parameters) and BERT-Large (24 layers, 16 heads, 1024 hidden dimensions, 340M parameters). Pre-training used two tasks: Masked Language Modelling (MLM) and Next Sentence Prediction (NSP). During fine-tuning, a task-specific output layer is appended to the [CLS] token representation and the whole model is trained end-to-end on the labelled target dataset for a small number of epochs. This pre-train-then-fine-tune paradigm proved highly efficient, requiring far less task-specific labelled data than training from scratch.

  - Upon release, BERT achieved state-of-the-art results on 11 NLP tasks including GLUE, SQuAD v1.1, and MultiNLI, outperforming prior systems by large margins and demonstrating that deep bidirectionality was the critical ingredient. It catalysed an era of transfer learning in NLP and directly influenced the design of GPT-2, T5, and subsequent large language models. Domain-specific variants proliferated rapidly: BioBERT (biomedical text), SciBERT (scientific literature), FinBERT (financial sentiment), LegalBERT, and dozens of others, demonstrating the general utility of contextualised pre-training.

  - By 2024–2025, BERT-scale models are no longer frontier systems but remain workhorses for production NLP. Their relatively compact size (110M–340M parameters) makes them cost-effective for embedding generation, semantic search (powering dense retrieval in RAG pipelines), and classification tasks where latency and infrastructure cost constrain deployment of larger models. Quantised BERT variants run on-device on mobile and edge hardware. The model continues to be fine-tuned for regulatory document classification, clinical coding, and enterprise search within organisations that cannot afford larger model inference costs.