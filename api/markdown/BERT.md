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
  "definition": "BERT (Bidirectional Encoder Representations from Transformers) is a pre-trained deep language representation model developed by Google AI Language, published in 2018, which applies a bidirectional Transformer encoder trained with masked language modelling (MLM) and next sentence prediction (NSP) objectives on large text corpora to produce contextualised word embeddings. Unlike prior unidirectional models, BERT conditions each token on its full left and right context simultaneously, enabling a richer semantic representation that generalises across diverse NLP tasks via fine-tuning. It established the pre-train-then-fine-tune paradigm for natural language processing, achieving state-of-the-art performance across eleven NLP benchmarks upon release, including GLUE and SQuAD. Its architecture directly underpins a large family of subsequent encoder models including RoBERTa, ALBERT, DistilBERT, and multilingual mBERT.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:language-model", "label": "Language Model"}],
  "sameAs": [
    {"@id": "urn:ngm:class:bidirectional-encoder-representations-from-transformers", "label": "Bidirectional Encoder Representations from Transformers"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"},
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"},
      {"@id": "urn:ngm:class:self-attention", "label": "Self Attention"},
      {"@id": "urn:ngm:class:embeddings", "label": "Embeddings"},
      {"@id": "urn:ngm:class:masked-language-modelling", "label": "Masked Language Modelling"},
      {"@id": "urn:ngm:class:next-sentence-prediction", "label": "Next Sentence Prediction"},
      {"@id": "urn:ngm:class:wordpiece-tokenisation", "label": "WordPiece Tokenisation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:natural-language-understanding", "label": "Natural Language Understanding"},
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"},
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"},
      {"@id": "urn:ngm:class:question-answering", "label": "Question Answering"},
      {"@id": "urn:ngm:class:named-entity-recognition", "label": "Named Entity Recognition"},
      {"@id": "urn:ngm:class:sentiment-analysis", "label": "Sentiment Analysis"},
      {"@id": "urn:ngm:class:dense-retrieval", "label": "Dense Retrieval"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:transfer-learning", "label": "Transfer Learning"},
      {"@id": "urn:ngm:class:pre-training", "label": "Pre-Training"},
      {"@id": "urn:ngm:class:large-scale-corpus", "label": "Large-Scale Corpus"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ro-berta", "label": "RoBERTa"},
      {"@id": "urn:ngm:class:albert", "label": "ALBERT"},
      {"@id": "urn:ngm:class:m-bert", "label": "mBERT"},
      {"@id": "urn:ngm:class:distil-bert", "label": "DistilBERT"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:gpt", "label": "GPT"},
      {"@id": "urn:ngm:class:t5", "label": "T5"},
      {"@id": "urn:ngm:class:glue-benchmark", "label": "GLUE Benchmark"},
      {"@id": "urn:ngm:class:squad", "label": "SQuAD"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:gpt", "label": "GPT"},
      {"@id": "urn:ngm:class:autoregressive-language-model", "label": "Autoregressive Language Model"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval Augmented Generation"},
      {"@id": "urn:ngm:class:knowledge-graph-embedding", "label": "Knowledge Graph Embedding"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:cls-token", "label": "CLS Token"},
      {"@id": "urn:ngm:class:sep-token", "label": "SEP Token"}
    ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[BERT]] (Bidirectional Encoder Representations from Transformers) is a landmark pre-trained [[Language Model]] from Google AI that introduced deep bidirectional context modelling via masked self-attention, enabling superior [[Natural Language Understanding]] across classification, question answering, and named-entity recognition tasks through [[Fine Tuning]] on task-specific labelled data. It leverages the [[Transformer Architecture]] with a bidirectional encoder stack to produce rich contextualised [[Embeddings]] for every input token, conditioning on the full sentence context rather than a unidirectional prefix. BERT's pre-train-then-fine-tune paradigm — inherited from [[Transfer Learning]] — fundamentally changed how [[Natural Language Processing]] systems are built and deployed.

- ### Overview
  - BERT was introduced by Jacob Devlin, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova at Google AI Language in October 2018 (arXiv:1810.04805).
  - Before BERT, most NLP systems relied on unidirectional language models (left-to-right, or shallow bidirectional via concatenation of two separate passes), limiting the depth of context available to each token representation.
  - BERT's key insight was to apply the [[Transformer Architecture]] encoder with a [[Masked Language Modelling]] objective: randomly masking 15% of input tokens and training the model to predict them using both left and right context simultaneously.
  - A second pre-training task, [[Next Sentence Prediction]] (NSP), trained the model to classify whether two sentences appear consecutively in the original corpus, building discourse-level representations.
  - Pre-training was conducted on BooksCorpus (800 million words) and English Wikipedia (2.5 billion words).
  - The resulting model captures deep bidirectional semantics: the representation of each token is informed by every other token in the sequence, not just preceding tokens.
  - This made BERT substantially more powerful than earlier contextualised embeddings such as ELMo, which used a shallow concatenation of independent left-to-right and right-to-left LSTMs.
  - Upon release, BERT set new state-of-the-art on 11 NLP tasks, demonstrating that bidirectionality, scale, and the pre-train-fine-tune framework were the decisive factors.

- ### Key Components
  - **Transformer Encoder Stack**: BERT uses only the encoder portion of the original [[Transformer Architecture]], discarding the decoder. This makes it suited for understanding tasks rather than generation.
    - BERT-Base: 12 encoder layers, 12 [[Attention Mechanism]] heads, 768 hidden dimensions, 110 million parameters.
    - BERT-Large: 24 encoder layers, 16 attention heads, 1024 hidden dimensions, 340 million parameters.
  - **[[Self Attention]]**: Each layer applies multi-head self-attention across the full input sequence, producing contextualised representations that integrate global context.
  - **[[Embeddings]]**: Input representations are the sum of three learned embedding types:
    - Token embeddings: learned representations from the [[WordPiece Tokenisation]] vocabulary (~30,000 sub-word units).
    - Segment embeddings: distinguish sentence A from sentence B in paired-sentence tasks.
    - Position embeddings: encode the absolute position of each token in the sequence.
  - **[[CLS Token]]**: A special classification token prepended to every input; its final hidden state serves as the aggregate sequence representation used for classification tasks.
  - **[[SEP Token]]**: A separator token delimiting sentence boundaries in paired-sentence inputs.
  - **Pre-training objectives**:
    - [[Masked Language Modelling]]: 15% of tokens are masked; the model predicts the original tokens from bidirectional context. Of these, 80% receive a [MASK] token, 10% a random token, and 10% the unchanged original token, preventing over-reliance on the mask token.
    - [[Next Sentence Prediction]]: Given two sentences, predict whether sentence B follows sentence A in the source corpus. Motivates cross-sentence understanding needed for [[Question Answering]] and natural language inference.
  - **[[Fine Tuning]]**: A lightweight task-specific head (typically a single linear layer) is appended to the [CLS] or token-level outputs, and the full model is trained end-to-end on the target task's labelled data for a few epochs, typically with a low learning rate to avoid catastrophic forgetting.

- ### Applications / Use Cases
  - **[[Question Answering]]**: Fine-tuned BERT models extract answer spans from passages; the SQuAD v1.1 benchmark demonstrated human-level performance. Widely deployed in enterprise FAQ and search systems.
  - **[[Named Entity Recognition]]**: Token-level classification using BERT representations identifies persons, organisations, locations, dates, and custom entity types in clinical notes, legal documents, and news text.
  - **[[Sentiment Analysis]]**: Sentence-level classification of polarity and nuanced sentiment in product reviews, social media, and financial news. FinBERT is a widely used domain-adapted variant for financial sentiment.
  - **[[Semantic Search]] and [[Dense Retrieval]]**: BERT-derived bi-encoder models (e.g. Sentence-BERT, DPR) encode queries and documents into a shared embedding space, enabling approximate nearest-neighbour search — a core component of [[Retrieval Augmented Generation]] pipelines.
  - **Text Classification**: Topic classification, intent detection in dialogue systems, and regulatory document triage using the [CLS] representation.
  - **Natural Language Inference and textual entailment**: GLUE and SuperGLUE benchmarks include multi-genre NLI, where BERT-based models substantially outperform prior methods.
  - **Coreference Resolution**: Understanding which pronouns and noun phrases refer to the same entity across a document.
  - **Domain-specific variants**: BioBERT (biomedical literature), SciBERT (scientific papers), LegalBERT (legal documents), ClinicalBERT (clinical notes), FinBERT (financial text) demonstrate the generality of the pre-training approach.
  - **[[Knowledge Graph Embedding]]**: BERT representations are used to initialise or augment knowledge graph entity and relation embeddings, bridging unstructured text and structured knowledge.
  - **Edge and on-device deployment**: Quantised and pruned BERT variants (e.g. MobileBERT, TinyBERT) run inference on mobile hardware and edge devices where larger models are impractical.
  - **Production classification at scale**: With 110–340 million parameters, BERT-class models remain cost-effective relative to multi-billion parameter models for classification and embedding generation, widely used in enterprise search, compliance screening, and clinical coding.

- ### BERT Model Family
  - **[[RoBERTa]]** (Robustly Optimised BERT Approach, Facebook AI, 2019): Removes NSP, trains on more data with larger batches and dynamic masking. Consistently outperforms BERT-Base/Large on downstream tasks.
  - **[[ALBERT]]** (A Lite BERT, Google, 2019): Reduces parameters via factorised embedding parameterisation and cross-layer parameter sharing, enabling deeper models with lower memory footprint.
  - **[[DistilBERT]]** (Hugging Face, 2019): Knowledge distillation of BERT-Base to 40% fewer parameters at 60% of training time, retaining 97% of BERT's performance on GLUE. Widely used for latency-sensitive deployments.
  - **[[mBERT]]** (Multilingual BERT): Trained simultaneously on 104 languages; exhibits zero-shot cross-lingual transfer.
  - **XLM-RoBERTa**: Cross-lingual model trained on 100 languages with cleaner data than mBERT; stronger cross-lingual transfer.
  - **DeBERTa** (Microsoft, 2020): Disentangled attention separating content and position, achieving state-of-the-art on SuperGLUE.
  - **SpanBERT**: Contiguous span masking and span boundary objectives improve performance on extractive QA and coreference.

- ### Relationships
  - uses:: [[Transformer Architecture]]
  - uses:: [[Attention Mechanism]]
  - uses:: [[Self Attention]]
  - uses:: [[Embeddings]]
  - uses:: [[Masked Language Modelling]]
  - uses:: [[Next Sentence Prediction]]
  - uses:: [[WordPiece Tokenisation]]
  - enables:: [[Natural Language Understanding]]
  - enables:: [[Fine Tuning]]
  - enables:: [[Semantic Search]]
  - enables:: [[Question Answering]]
  - enables:: [[Named Entity Recognition]]
  - enables:: [[Sentiment Analysis]]
  - enables:: [[Dense Retrieval]]
  - requires:: [[Transfer Learning]]
  - requires:: [[Pre-Training]]
  - requires:: [[Large-Scale Corpus]]
  - relatedTo:: [[RoBERTa]]
  - relatedTo:: [[ALBERT]]
  - relatedTo:: [[mBERT]]
  - relatedTo:: [[DistilBERT]]
  - relatedTo:: [[Natural Language Processing]]
  - relatedTo:: [[GPT]]
  - relatedTo:: [[T5]]
  - relatedTo:: [[GLUE Benchmark]]
  - relatedTo:: [[SQuAD]]
  - contrastsWith:: [[GPT]] (autoregressive decoder-only vs. bidirectional encoder)
  - contrastsWith:: [[Autoregressive Language Model]]
  - bridges-to:: [[Retrieval Augmented Generation]]
  - bridges-to:: [[Knowledge Graph Embedding]]
  - hasPart:: [[CLS Token]]
  - hasPart:: [[SEP Token]]
  - partOf:: [[Pre-Trained Language Model]] family
  - subClassOf:: [[Language Model]]

- ### Historical Context & Impact
  - BERT catalysed the adoption of [[Transfer Learning]] in [[Natural Language Processing]], mirroring the impact that ImageNet pre-training had on computer vision.
  - It demonstrated that unsupervised pre-training on raw text at scale was sufficient to learn representations powerful enough to transfer to diverse supervised tasks with minimal labelled data.
  - The model's release as open weights (via Hugging Face Transformers and later the BERT GitHub repository) enabled rapid adoption across academia and industry.
  - It shifted the NLP community from task-specific architectures towards general-purpose pre-trained encoders fine-tuned per task, a paradigm now extended to instruction-tuned large language models.
  - BERT established benchmarks that structured subsequent progress: GLUE → SuperGLUE → BIG-Bench as models rapidly saturated earlier evaluations.
  - By 2020–2021, BERT-family models were the backbone of most commercial search engines, virtual assistants, and document understanding pipelines.
  - By 2024–2025, BERT-scale models remain production workhorses for embedding generation, retrieval, and classification, even as generative models dominate research frontiers.

- ### Standards & Context
  - Pre-training data: BooksCorpus and English Wikipedia (publicly available, not subject to specific standards but widely cited as reproducibility baselines).
  - Tokenisation: [[WordPiece Tokenisation]] with a vocabulary of approximately 30,000 subword tokens; compatible with the SentencePiece standard in many variants.
  - Fine-tuning conventions are codified in the original paper and in Hugging Face's `transformers` library, which serves as the de-facto implementation standard.
  - Benchmark evaluation: [[GLUE Benchmark]] (General Language Understanding Evaluation) and [[SQuAD]] (Stanford Question Answering Dataset) are the canonical evaluation suites.
  - Model card and responsible AI documentation norms have evolved around BERT as an exemplar for documenting training data, capabilities, and limitations.

- ### Provenance
  - sources:: Devlin et al. (2018) "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding" arXiv:1810.04805; Hugging Face Transformers documentation; GLUE Benchmark; SuperGLUE Benchmark
  - updated:: 2026-06-13
