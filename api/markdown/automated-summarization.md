- ### Definition
  Automated Summarization is an NLP task in which a system produces a condensed representation of one or more source documents that preserves salient information and is significantly shorter than the original. Extractive approaches select and concatenate verbatim sentences or passages from the source; abstractive approaches generate novel text that may paraphrase, fuse, or infer content not explicitly stated in the source. Modern large language model-based summarizers are predominantly abstractive, achieving strong performance on long-form documents, meeting transcripts, scientific papers, and news articles, but remain susceptible to hallucination, factual inconsistency, and salience mismatch relative to the reader's intent.

- ### Relationships
  - hasPart:: [[Text Generation]], [[Language Modeling]]
  - requires:: [[Large Language Models]], [[Transformer Architecture]], [[Natural Language Understanding]]
  - enables:: [[Knowledge Base]], [[Documentation Generation]], [[Meeting AI Assistant]]
  - uses:: [[Information Retrieval]], [[Retrieval-Augmented Generation]]
  - relatedTo:: [[Question Answering]], [[Knowledge Graph Construction]], [[Meeting Transcription]], [[Sentiment Analysis]]
  - bridgesTo:: [[Meeting Recording]]

- ### Content
  Automated summarization spans two primary paradigms that differ in how the output text is generated. Extractive summarization scores and ranks source sentences using criteria such as TF-IDF salience, graph centrality (TextRank), or neural sentence embeddings, then selects the top-ranked sentences as the summary. Extractive approaches are factually faithful because they reuse verbatim source text, but they cannot fuse information across sentences, cannot handle redundancy elegantly, and produce outputs that may be grammatically disjointed.

  Abstractive summarization uses sequence-to-sequence models — originally LSTM-based encoder-decoder architectures with copy mechanisms, and now predominantly transformer-based models such as BART, T5, Pegasus, and GPT-series models — to generate fluent summaries that may rephrase, compress, or combine source information. The shift to large language models has dramatically improved abstraction quality and multilingual generalisation, but introduced new failure modes: models hallucinate entities, dates, and statistics not present in the source, and exhibit length and positional biases (favouring content near the beginning of documents).

  Evaluation of automated summarization relies on automatic metrics and human judgement. ROUGE measures n-gram overlap between generated and reference summaries; BERTScore computes semantic similarity using contextual embeddings; QAEval assesses factual consistency by checking whether a QA model can answer questions about the source using only the summary. Human evaluation along dimensions of fluency, coherence, faithfulness, and coverage remains the gold standard but is expensive to scale.

  Applied domains include legal document summarisation for contract review, biomedical literature summarisation for evidence synthesis, meeting and call summarisation for asynchronous collaboration, and news summarisation for media monitoring. Retrieval-augmented summarization combines document retrieval with abstractive generation, grounding the model in retrieved evidence to reduce hallucination in knowledge-intensive summarisation tasks.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z