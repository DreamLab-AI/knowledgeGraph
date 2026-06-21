- ### Definition
  - Chunking is the systematic process of decomposing source documents into smaller, semantically bounded text passages — known as chunks — prior to embedding and vector-database indexing for use in [[Retrieval-Augmented Generation]] and [[Semantic Search]] systems. Named by analogy to George Miller's 1956 cognitive psychology concept of chunking as the cognitive grouping of information into manageable units, the technique in the context of [[Natural Language Processing]] and [[Information Retrieval]] refers specifically to the engineering decision about how to partition a corpus so that each retrievable passage is dense enough to carry meaning independently, yet compact enough to be precisely matched to a query by an [[Embedding Model]]. Chunking strategies range from the simplest fixed-size character or token windows to advanced adaptive approaches — sentence-aware splitting, recursive hierarchical splitting, semantics-based boundary detection via embedding cosine distance, layout-aware parsing of PDF and HTML structure, and vision-guided multimodal chunking that processes document pages as images to preserve table and figure context. The choice of strategy and hyperparameters (chunk size, overlap, splitting hierarchy) is among the most consequential engineering decisions in building a [[RAG Pipeline]]: too-small chunks fragment meaning and reduce the coherence of evidence supplied to the generator; too-large chunks dilute retrieval precision and exhaust [[Context Window]] budget without proportional benefit. Overlapping windows — where successive chunks share a fixed number of tokens at their boundaries — reduce boundary artefacts that arise when a key phrase or sentence is split across two non-overlapping chunks. By mid-2026, the practitioner consensus converges on chunk sizes in the range of 256-512 tokens with 10-20% overlap as a broadly effective baseline, with semantic or recursive strategies providing measurable gains — up to 70% improvement in retrieval benchmarks compared to naive fixed-size baselines — for structured or domain-specific corpora at the cost of additional embedding computation. Chunking is a foundational data-engineering primitive of the contemporary AI stack, sitting upstream of [[Embedding Model]] encoding, [[Vector Database]] indexing, and ultimately the retrieval-conditioned language model generation that defines the [[Retrieval-Augmented Generation]] paradigm.

- ### Semantic Classification
  - owl-class:: ai:Chunking
  - owl-role:: DataEngineeringPrimitive | TextProcessingStep | ExecutableProtocol
  - owl-inferred:: ai:DocumentSegmentation, ai:TextSplitting, ai:IndexingPreprocessing
  - belongs-to-domain:: [[Information Retrieval]]
  - implemented-in-layer:: [[RAG Pipeline]]

- ### Relationships
  - is-subclass-of:: [[Information Retrieval]], [[Text Segmentation]]
  - has-part:: [[Chunk Overlap]], [[Chunk Metadata]], [[Chunk Boundary]], [[Token Window]]
  - requires:: [[Document Parser]], [[Tokeniser]], [[Embedding Model]]
  - enables:: [[Semantic Search]], [[Retrieval-Augmented Generation]], [[Dense Retrieval]], [[Hallucination Mitigation]], [[Source Attribution]], [[Question Answering]]
  - implements:: [[RAG Pipeline]], [[Document Indexing Pipeline]]
  - depends-on:: [[RAG Pipeline]], [[Vector Database]], [[Embedding Model]]
  - supports:: [[Question Answering]], [[Enterprise Search]], [[Source Attribution]], [[Knowledge Grounding]]
  - uses:: [[Natural Language Processing]], [[Sentence Transformers]], [[Large Language Models]], [[Tokeniser]]
  - contrasts-with:: [[Full-Document Indexing]], [[Fine-Tuning]], [[Parametric Knowledge]]
  - related-to:: [[Context Window]], [[Information Extraction]], [[Knowledge Graph]], [[GPTs and Custom Assistants]], [[Prompt Engineering]], [[Approximate Nearest Neighbour Search]], [[Embedding Search]]
  - standardized-by:: [[LangChain]], [[LlamaIndex]], [[Haystack]]

- ### Content
  - ## Compositional Relationships (Components)
    - ```
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:hasPart ai:ChunkBoundary))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:hasPart ai:ChunkOverlap))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:hasPart ai:ChunkMetadata))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:hasPart ai:TokenWindow))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:hasPart ai:SplittingStrategy))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:hasPart ai:DocumentParser))
      ```
  - ## Dependency Relationships
    - ```
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:requires ai:DocumentParser))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:requires ai:Tokeniser))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:requires ai:EmbeddingModel))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:dependsOn ai:RAGPipeline))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:dependsOn ai:VectorDatabase))
      ```
  - ## Capability Relationships
    - ```
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:enables ai:SemanticSearch))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:enables ai:RetrievalAugmentedGeneration))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:enables ai:DenseRetrieval))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:enables ai:HallucinationMitigation))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:enables ai:SourceAttribution))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:enables ai:QuestionAnswering))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:supports ai:EnterpriseSearch))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:supports ai:KnowledgeGrounding))
      ```
  - ## Implementation Relationships
    - ```
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:implements ai:RAGPipeline))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:uses ai:NaturalLanguageProcessing))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:uses ai:SentenceTransformers))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:uses ai:LargeLanguageModels))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:uses ai:Tokeniser))
      ```
  - ## Reduction Relationships
    - ```
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:reducesTo ai:FixedSizeTextWindow))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:reducesTo ai:SentenceSplitter))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:reducesTo ai:TokenSplitter))
      ```

  - ## About
    - The term "chunking" derives from George A. Miller's landmark 1956 paper "The Magical Number Seven, Plus or Minus Two: Some Limits on our Capacity for Processing Information" (Psychological Review), which described how human working memory groups perceptual or cognitive items into higher-order units — chunks — to overcome the 7±2 item capacity limit. In psycholinguistics and knowledge representation, chunking refers to the cognitive organisation of information into bounded, meaningful units that can be processed as atomic items. The application of this concept to document preprocessing in AI systems was a natural extension: just as human working memory cannot hold an entire text simultaneously but can process a meaningful paragraph, a language model's attention mechanism operates most effectively on passages small enough to preserve semantic coherence while large enough to carry self-contained meaning.
    - In the context of modern [[Retrieval-Augmented Generation]], chunking emerged as a distinct engineering concern with the publication of the original RAG paper (Lewis et al., Facebook AI Research, 2020), which split a Wikipedia dump into 100-word passages for dense retrieval. As RAG systems proliferated through LangChain (2022) and LlamaIndex (2022), the diversity of real-world document types — PDFs with complex layouts, HTML pages with navigation elements, code repositories, spreadsheets, slide decks, scanned images — made fixed-size splitting inadequate. The field rapidly developed a taxonomy of chunking strategies, each trading off computation, semantic fidelity, and retrieval performance differently.
    - By 2025-2026 chunking has become a mature sub-discipline with empirical benchmarking, framework standardisation, and published research characterising performance trade-offs across strategy families. A February 2026 benchmark of seven strategies across 50 academic papers placed recursive 512-token splitting first at 69% accuracy for document Q&A tasks, while semantic chunking achieved the highest accuracy in clinical settings (87% in an MDPI Bioengineering study) at substantially higher computational cost. Vision-guided multimodal chunking (Tripathi et al., arXiv 2506.16035, June 2025) and MultiDocFusion (arXiv 2604.12352, 2025) represent the frontier for complex structured documents with tables, figures, and multi-page layouts.

  - ## Chunking Strategy Taxonomy
    - ### Fixed-Size (Character or Token Window)
      - The simplest and most computationally efficient strategy: split source text into windows of a fixed character count or token count, with optional overlap between successive windows. Tokeniser-based splitting (counting tokens according to the target embedding model's vocabulary) is preferred over character-based splitting because embedding models have token-count context limits, not character limits.
      - Advantages: deterministic, fast, no model dependency for the splitting step itself, easy to implement with any tokeniser library.
      - Disadvantages: arbitrarily cuts across sentence and paragraph boundaries, fragmenting meaning. A key phrase or entity may be split between two non-overlapping chunks, degrading both retrieval and generation. Insensitive to document structure.
      - Default hyperparameters as of 2026: 256-512 tokens, 50-100 token overlap (10-20%). LlamaIndex default chunk_size is 1024 with chunk_overlap of 20; LangChain's RecursiveCharacterTextSplitter defaults to 1000 characters with 200 overlap.

    - ### Sentence-Based Splitting
      - Uses sentence boundary detection (full stop + capitalisation heuristics, or a dedicated sentence tokeniser such as spaCy's sentencizer) to preserve grammatical completeness at chunk boundaries. Each chunk contains one or more complete sentences up to the size limit, with sentence-level overlap.
      - A February 2026 benchmark found sentence-based splitting matched semantic chunking performance up to approximately 5,000 tokens at a fraction of the computational cost, making it a practical first upgrade from fixed-size splitting for most workloads.
      - Well-suited for: narrative prose, news articles, academic paper abstracts, customer support transcripts. Less effective for: lists, code, tables, or highly fragmented technical documentation.

    - ### Recursive Hierarchical Splitting
      - Attempts to split at the highest structural level available, progressively descending to lower-level separators when a section is too long. The separator hierarchy for prose is typically: paragraph boundaries (\n\n), line breaks (\n), sentence boundaries, word boundaries. For code: class/function definitions, method bodies, line boundaries.
      - LangChain's RecursiveCharacterTextSplitter is the canonical implementation; LlamaIndex provides a SentenceSplitter with similar recursive logic. A February 2026 benchmark placed recursive 512-token splitting first overall at 69% accuracy across 50 academic papers, making it the recommended default for general-purpose RAG.
      - Advantages: preserves document structure better than fixed-size splitting; no embedding model required for splitting itself; fast and deterministic.
      - Disadvantages: relies on textual cues (whitespace, punctuation) that may be absent or unreliable in converted PDFs and OCR output.

    - ### Semantic Chunking
      - Uses an [[Embedding Model]] to compute the semantic similarity between consecutive sentences or passages, identifying breakpoints where cosine similarity drops sharply — indicating a topic shift. Chunks are formed by grouping sentences that share a coherent topic, regardless of their character or token count.
      - LlamaIndex's SemanticSplitterNodeParser is the reference implementation; the Databricks "ultimate guide" and DigitalApplied (2026) benchmark report up to ~70% lift in retrieval accuracy over naive fixed-size baselines for well-structured, topically diverse documents.
      - Disadvantages: requires embedding every candidate sentence during the splitting phase (for a 10,000-word document this may generate 200-300 embedding API calls or local model inferences), making it approximately 14x slower than recursive splitting. Chunk size varies, complicating context-window budgeting. Should be adopted only after profiling shows precision/recall gains exceeding cost.
      - Best suited for: long documents with clear topic transitions (textbooks, research reports, legal agreements), where the precision gain from topic-coherent chunks justifies the embedding overhead.

    - ### Structure-Aware / Layout-Aware Splitting
      - Parses document structure explicitly — using HTML element hierarchy (h1/h2/section/p), Markdown heading levels (#/##/###), LaTeX section commands (\section/\subsection), or PDF logical structure tags — and uses structural boundaries as primary split points. [[LangChain]] provides HTMLHeaderTextSplitter, MarkdownHeaderTextSplitter, and related structure-aware splitters.
      - Ensures that chunk boundaries align with document-level logical units (a section, a subsection, a numbered item) rather than arbitrary character positions. Particularly effective for technical documentation, product manuals, and regulatory filings where section structure carries semantic meaning.

    - ### Agentic / LLM-Based Chunking
      - Uses a [[Large Language Models|language model]] to autonomously determine optimal chunk boundaries, potentially generating summarised metadata for each chunk, extracting key entities, or proposing contextualising headings. LlamaIndex's "Propositions" chunker (Chen et al., 2023) decomposes documents into atomic factual propositions rather than passage-level chunks, improving fine-grained retrieval precision.
      - The proposition chunker approach was shown to substantially improve recall at fine granularity on multi-hop Q&A benchmarks, at the cost of significantly higher preprocessing compute (requiring an LLM inference call per source passage during indexing).

    - ### Multimodal / Vision-Guided Chunking
      - Processes document pages as images using large multimodal models (LMMs) to detect and preserve the layout context of tables, figures, headers, and multi-column text that is lost during PDF-to-text conversion. "Vision-Guided Chunking Is All You Need" (Tripathi et al., arXiv:2506.16035, June 2025) demonstrated superior accuracy versus traditional vanilla RAG for complex technical PDFs. MultiDocFusion (arXiv:2604.12352, 2025) combines visual region detection, OCR, and LLM-based hierarchical parsing for long industrial documents.
      - Particularly important for: engineering specifications, clinical trial reports, financial statements, and scientific papers where tables and figures carry critical structured information that text-only parsing discards or garbles.

  - ## Chunk Overlap and Boundary Artefacts
    - Overlap is the degree to which successive chunks share tokens at their edges. Without overlap, a sentence or entity straddling a chunk boundary appears in neither chunk in its complete form, causing retrieval failure for queries about that entity. With overlap, the boundary region appears in both adjacent chunks, ensuring that any query phrase matching content near a boundary can retrieve at least one fully-contextualised chunk.
    - Standard practice: 10-20% overlap (50-100 tokens for 512-token chunks). Too little overlap leaves boundary artefacts; too much overlap increases index size, embedding cost, and the number of redundant chunks retrieved per query, raising context-window cost at generation time.
    - Metadata enrichment at chunk creation time — attaching document title, section heading, page number, document date, and source URL as structured metadata fields alongside the text vector — enables hybrid retrieval combining vector similarity with metadata filtering (e.g., "retrieve only chunks from documents published after 2023 in the compliance domain"). This is a standard practice in production RAG deployments.

  - ## The Dual-Granularity Problem
    - A structural tension underlies all chunking design: semantic matching for retrieval requires smaller, precise chunks (100-256 tokens) that produce tight embedding signals; context provision for generation requires larger passages (512-2048 tokens) that give the [[Large Language Models|language model]] sufficient surrounding context to generate a coherent answer. No single chunk size simultaneously optimises both objectives.
    - Solutions include:
      - **Small-to-big retrieval** (LlamaIndex ParentDocumentRetriever pattern): embed and index small child chunks for high-precision retrieval; at query time, expand retrieved child chunks to their parent section before passing context to the generator.
      - **Hierarchical indexing**: index at multiple granularities (sentence, paragraph, section) and retrieve at the finest granularity that exceeds a relevance threshold, then expand to parent context for generation.
      - **Hypothetical Document Embeddings (HyDE)**: instead of embedding the raw query, prompt an LLM to generate a hypothetical answer document, embed that, and retrieve chunks similar to the hypothetical answer. This bridges the vocabulary gap between short queries and longer passage representations.
      - **Recursive Semantic Chunking (RSC)**: the ICNLSP 2025 paper "The Chunking Paradigm: Recursive Semantic for RAG Optimization" demonstrated that RSC consistently outperforms both standard recursive character splitting and other approaches across multiple document types.

  - ## Evaluation of Chunking Quality
    - Chunking quality is not directly measurable in isolation but is assessed through downstream [[RAG Pipeline]] metrics:
      - **Context Precision** (RAGAS): fraction of retrieved chunk tokens that are actually relevant to the question. A well-chunked corpus yields high context precision; poorly-bounded chunks include irrelevant surrounding material that dilutes relevance.
      - **Context Recall** (RAGAS): fraction of ground-truth answer information present in the retrieved chunks. Excessively small chunks may achieve high precision but miss the full answer context, yielding low recall.
      - **Faithfulness** (RAGAS): degree to which the generated answer is supported by the retrieved chunks. Poor chunking leads to the generator hallucinating from insufficient or incoherent context.
      - **Recall@k** (IR standard): fraction of relevant passages appearing in the top-k retrieved results. A function of both embedding model quality and chunk granularity.
    - Evaluation frameworks such as RAGAS (Exploding Gradients, 2023), TruLens, and ARES provide automated, reference-free pipeline evaluation. The BEIR benchmark provides zero-shot heterogeneous retrieval evaluation across diverse domain corpora.

  - ## Framework Implementations
    - **LangChain** (Python / JavaScript): provides CharacterTextSplitter, RecursiveCharacterTextSplitter (recommended default), TokenTextSplitter, MarkdownHeaderTextSplitter, HTMLHeaderTextSplitter, PythonCodeTextSplitter, and SemanticChunker. The RecursiveCharacterTextSplitter is the most widely used splitter in production deployments as of 2026.
    - **LlamaIndex** (Python): provides TokenTextSplitter (default chunk_size=1024, overlap=20), SentenceSplitter, SemanticSplitterNodeParser, HierarchicalNodeParser (multi-granularity parent-child indexing), SimpleFileNodeParser (structure-aware parsing per file type), and the PropositionNodeParser for atomic fact extraction. LlamaIndex's node abstraction preserves rich metadata and parent-child relationships between chunks.
    - **Haystack**: provides DocumentSplitter with configurable split_by (word/sentence/passage/page), split_length, and split_overlap. Integrates with Haystack's document store and retrieval pipeline components.
    - **Unstructured.io**: a pre-processing library for complex document types (PDF, DOCX, PPTX, HTML, images) that extracts structured elements (titles, narrative text, list items, tables, images) before chunking, enabling structure-aware splitting even from PDFs that lack logical structure tags.
    - **LlamaParse**: a managed PDF parsing service from LlamaIndex that uses LMM-based parsing to accurately extract tables, figures, and complex layouts, feeding cleanly structured content into downstream chunking.

  - ## Use Cases
    - **Enterprise Knowledge Management** — large organisations index proprietary documentation (policies, procedures, product manuals, support histories) using [[RAG Pipeline|RAG pipelines]]. Chunking is the first and often most consequential parameter set: different document types (narrative policy documents versus structured manuals versus support ticket logs) typically require different chunking strategies, with metadata enrichment enabling department- or role-level access control at retrieval time.
    - **Legal and Regulatory Research** — legal AI systems (Harvey, CoCounsel, Lexis+ AI) chunk case law, statutes, and contracts using structure-aware splitters that respect section hierarchy, clause numbering, and cross-reference patterns. Sentence-level overlap is critical to avoid clause fragmentation. Source attribution requires chunk-level metadata tracking the originating document, jurisdiction, and date.
    - **Medical and Clinical Information Retrieval** — clinical decision support systems chunk clinical guidelines (NICE, WHO, SIGN), drug formularies, and medical literature. An adaptive chunking approach aligned to logical topic boundaries achieved 87% accuracy versus 13% for fixed-size baselines in a 2025 MDPI Bioengineering study. Patient safety requirements demand high precision and recall.
    - **Code and Technical Documentation Retrieval** — coding assistant systems (GitHub Copilot, Cursor, Claude Code) chunk codebases and API documentation using code-aware splitters that respect function, class, and module boundaries. LangChain provides language-specific code splitters (PythonCodeTextSplitter, JavaScriptCodeTextSplitter) that use AST-level syntax boundaries rather than text heuristics.
    - **Multimodal Document Corpora** — financial reports, engineering specifications, and scientific papers contain tables, charts, and figures alongside prose. Vision-guided chunking (Tripathi et al., 2025) processes these as images, preserving the spatial structure and cross-references between tables and surrounding text that text-only extraction destroys.
    - **Conversational AI Memory** — chatbot and virtual assistant systems that maintain long-term user memory chunk and embed conversation history or user-provided documents, enabling the bot to retrieve relevant past context or document passages during future sessions. [[Retrieval-Augmented Generation]] with chunked conversation history is the primary architecture for extending [[Large Language Models|LLM]] context beyond the in-session [[Context Window]].

  - ## Academic Context
    - The intellectual origins of chunking in NLP and IR lie in passage retrieval research. Kaszkiel and Zobel (1997) examined passage-level retrieval within TREC, demonstrating that sub-document passage retrieval outperformed full-document retrieval for most information needs. Hearst (1997) introduced TextTiling as an unsupervised algorithm for linear text segmentation based on vocabulary cohesion, an early form of semantic chunking. Ponte and Croft (1998) and the subsequent development of language modelling for IR established probabilistic frameworks for passage retrieval that inform contemporary dense retrieval.
    - The dense passage retrieval era opened with Karpukhin et al. (2020) "Dense Passage Retrieval for Open-Domain Question Answering" (Facebook AI Research), which trained a bi-encoder (DPR) on question-passage pairs from Wikipedia and demonstrated that dense vector retrieval substantially outperformed BM25 for open-domain Q&A. DPR used 100-word passages, a deliberate chunking design choice that influenced subsequent practice. The Lewis et al. (2020) RAG paper used the same 100-word passage corpus, cementing this as an early industry default.
    - The proposition chunker (Chen et al., 2023, "Dense X Retrieval: What Retrieval Granularity Should We Use?") systematically examined retrieval granularity, finding that proposition-level (atomic factual statement) chunks yielded superior recall for fine-grained questions compared to sentence- or passage-level chunks. Semantic chunking formalisation in library implementations (LlamaIndex, LangChain SemanticChunker) drew on this work. The "Chunking Strategies for Multimodal AI Systems" preprint (arXiv:2512.00185, December 2024) established the first systematic taxonomy of multimodal chunking approaches, finding that modality-aware strategies significantly outperformed text-only baselines on mixed-content corpora.

  - ## Current Landscape (2026)
    - As of mid-2026, chunking has evolved from an ad-hoc preprocessing step into a structured engineering discipline with benchmarks, evaluation frameworks, and published strategy comparisons. Key developments include:
    - **Semantic chunking mainstream adoption**: LlamaIndex and LangChain both provide stable SemanticChunker implementations; Databricks' "Ultimate Guide to Chunking Strategies" (2024) documents enterprise adoption patterns. Semantic chunking is recommended for high-value, structured corpora; recursive splitting remains the recommended default for mixed or unstructured content due to its superior speed/accuracy ratio.
    - **Multimodal chunking at the frontier**: Vision-guided chunking (arXiv:2506.16035, June 2025) and MultiDocFusion (arXiv:2604.12352, 2025) have demonstrated that multimodal models can extract structural information from complex PDFs that text-only parsers miss, achieving meaningfully better downstream RAG accuracy for financial, scientific, and engineering documents. LlamaParse's commercial offering operationalises this.
    - **Hierarchical / parent-child indexing in production**: The small-to-big retrieval pattern (embed small child chunks for precision; expand to parent on retrieval) has become a standard architectural pattern in LlamaIndex-based systems, balancing the dual-granularity problem without requiring multiple independent indices.
    - **Long-context models changing the calculus**: As Gemini 1.5 Pro (1M tokens), Claude 3.5 (200k tokens), and similar long-context models become production-standard, some organisations are experimenting with very large chunks (or even full-document context) for small-to-medium corpora. Evidence suggests retrieval remains superior for precision and auditability, but the optimal chunk size may increase as context windows grow.
    - **Evaluation tooling maturing**: RAGAS, TruLens, and ARES now provide automated chunking-sensitive RAG evaluation, enabling practitioners to empirically compare chunking strategies on their own corpora rather than relying on generic benchmarks.

  - ## UK Context
    - Chunking as a technical concern is addressed within UK AI engineering research and enterprise AI deployments. The University of Edinburgh's informatics group has published on text segmentation and passage retrieval extending back to the TREC era. Cambridge's Language Technology Group contributed to early passage retrieval and NLP text segmentation research. The Alan Turing Institute's AI for Science programme covers document intelligence including layout-aware parsing and chunking for scientific literature.
    - In industry, UK-based organisations are significant consumers of RAG pipeline technology. Regulatory sectors (KPMG UK, Deloitte UK, PwC UK) deploy chunking-based knowledge retrieval for tax, audit, and compliance advisory systems. NHS Trusts are experimenting with RAG over clinical guidelines (NICE, BNF), where chunking alignment to clinical section structure directly affects safety-relevant retrieval accuracy. UK Government Digital Service (GDS) has published guidance on AI in public sector digital services referencing [[Retrieval-Augmented Generation]] architectures including chunking design. In the Northern English context, the NHS Greater Manchester Integrated Care Board has piloted RAG-based clinical decision support; Sheffield Teaching Hospitals NHS Foundation Trust and Leeds Teaching Hospitals NHS Trust have evaluated LLM assistants over clinical documentation. The BBC and major UK publishers are exploring RAG over their archive corpora, where paragraph- or section-level chunking of structured archive content is a primary design challenge.

  - ## Future Directions (2026-2030)
    - **Adaptive Dynamic Chunking** — future systems will automatically select chunking strategy and hyperparameters based on document type, content structure, and query characteristics, eliminating manual strategy selection. Model-driven chunking configuration will be learned from downstream retrieval performance signals in feedback loops.
    - **Fully Multimodal Corpora** — as document corpora increasingly contain mixed text, image, audio, and video, chunking will generalise to segment and embed multimodal content units, with modality-aware boundary detection. Tables, charts, diagrams, and voice recordings will be chunked with the same sophistication as text.
    - **Knowledge Graph-Integrated Chunking** — chunks will be enriched at creation time with entity-linking to a [[Knowledge Graph]], enabling hybrid retrieval that combines vector similarity with graph-structure traversal. This convergence of RAG and knowledge graph approaches (Graph RAG, Microsoft, 2024) will require chunking strategies that preserve entity co-occurrence within chunks.
    - **Regulatory-Compliant Provenance Tracking** — in regulated industries, every chunk will carry full provenance metadata (source document, version, author, jurisdiction, validation date) enabling complete audit trails from generated answer back through retrieved chunk to authoritative source. This is a prerequisite for healthcare and financial services RAG deployments under evolving EU and UK regulatory frameworks.
    - **On-Device Chunking for Privacy** — as edge AI matures, chunking and embedding of sensitive personal documents (health records, financial documents, personal notes) will execute on-device without transmitting source content to cloud services, enabling privacy-preserving RAG for sensitive personal data applications.

  - ## Indexing Architecture and Pipeline Integration
    - Chunking sits within a broader document processing pipeline that conditions both its input and its output. Understanding where chunking fits within the full RAG indexing architecture is essential for optimising each stage in concert:
    - **Document ingestion and parsing** — before chunking can occur, source documents must be loaded and their content extracted in a structured form. The ingestion layer handles file format parsing (PDF, DOCX, PPTX, HTML, Markdown, plain text, code), encoding normalisation, language detection, and content cleaning (removing boilerplate headers/footers, page numbers, navigation elements). The quality of this parsing stage directly constrains the maximum achievable chunking quality: broken character encodings, mis-parsed PDF columns, or OCR errors in scanned documents will propagate into chunk content and degrade embedding quality regardless of chunking strategy.
    - **Pre-chunking processing** — some pipelines apply document-level pre-processing before chunking: language filtering (routing non-English documents to language-specific splitters), PII detection and redaction (removing personal information from chunks before indexing), sentence boundary correction (fixing sentence splitting errors in automated extraction), and de-duplication (identifying and removing duplicate or near-duplicate passages that would generate duplicate chunks and inflate index size).
    - **Chunking execution** — the core segmentation step, as described in the strategy taxonomy above. The chunking component receives the cleaned, parsed document text and produces an ordered sequence of chunk objects, each containing: chunk text, chunk index within document, character offsets (start, end), and any structure metadata (section heading, parent section, document region).
    - **Metadata enrichment** — immediately after chunking, each chunk is enriched with document-level metadata from the ingestion step (source URL, document title, author, creation date, access tier) and may be further enriched with chunk-level signals such as automatically detected entity mentions, auto-generated section summaries, or quality scores (estimated readability, information density).
    - **Embedding generation** — the enriched chunk texts are passed to the [[Embedding Model]] to generate dense vector representations. For large corpora this step is parallelised across multiple GPU inference instances. The embedding model's maximum input token length imposes a hard ceiling on chunk size (most current bi-encoders support 512 tokens; newer models such as NV-Embed-v2 and E5-Mistral support up to 4096 tokens, enabling larger semantic chunks without truncation).
    - **Vector storage and indexing** — the (chunk_id, metadata, vector) tuples are upserted into the [[Vector Database]], which builds or updates an Approximate Nearest Neighbour (ANN) index structure (HNSW, IVF, ScaNN) to support sub-linear query time retrieval. The ANN index must be configured with parameters (M, ef_construction for HNSW; nlist for IVF) that balance index build time, query latency, and recall. Periodic index compaction and defragmentation are required for high-churn corpora.
    - **Full-text index synchronisation** — in hybrid retrieval pipelines, a sparse keyword index (BM25 / inverted index, typically in Elasticsearch or Opensearch) is updated in parallel with the vector index, indexing the same chunk texts for keyword search. The hybrid retrieval system fuses sparse and dense scores at query time (reciprocal rank fusion being the most common fusion strategy).

  - ## Formal Chunking Algorithms
    - Understanding chunking at the algorithmic level clarifies why different strategies produce different retrieval outcomes and guides principled hyperparameter selection.
    - ### Fixed-Size Token Chunking Algorithm
      - Given a document D tokenised into a sequence T = [t₁, t₂, …, tₙ], fixed-size chunking produces chunks C = {c₁, c₂, …, cₘ} where:
      - cᵢ = T[i·(size - overlap) : i·(size - overlap) + size]
      - for i = 0, 1, …, ⌈(n - overlap) / (size - overlap)⌉ - 1
      - The final chunk is truncated to the document boundary. With size = 512 tokens and overlap = 51 (10%), successive chunks share 51 tokens at their boundary. This ensures any 51-token phrase straddling a boundary appears in at least one fully-contextualised chunk. The index size grows by factor 1/(1 - overlap/size) relative to a non-overlapping index; at 10% overlap, index size increases by ~11%.
    - ### Recursive Hierarchical Splitting Algorithm
      - Given a document D and a separator hierarchy S = [s₁, s₂, …, sₖ] (e.g., ["\n\n", "\n", ". ", " "]) and target size limit L:
      - 1. Attempt to split D at s₁ (paragraph boundaries). If any resulting segment exceeds L, recursively apply the algorithm to that segment using S[1:].
      - 2. Accumulate adjacent segments into chunks that maximally fit within L, preserving the original segment order.
      - 3. Repeat until all chunks satisfy |chunk| ≤ L.
      - This greedy accumulation preserves maximum document structure at each level: paragraphs are kept intact if possible; sentences are separated only when a paragraph exceeds the size limit; words are separated only when a sentence exceeds the limit. The result is semantically coherent chunks aligned to natural language boundaries.
    - ### Semantic Chunking Algorithm (Embedding Cosine Distance)
      - Given document D segmented into sentences S = [s₁, s₂, …, sₙ] by a sentence splitter:
      - 1. Compute embedding eᵢ = encode(sᵢ) for all i using a bi-encoder [[Embedding Model]].
      - 2. Compute similarity sim(i, i+1) = cosine(eᵢ, eᵢ₊₁) for adjacent pairs.
      - 3. Identify breakpoints where sim(i, i+1) drops below a threshold θ (typically the 95th percentile of distribution of all pairwise cosine distances), indicating a topic shift.
      - 4. Form chunks by grouping consecutive sentences between breakpoints.
      - The threshold θ is the primary hyperparameter: a lower θ produces fewer, larger topic-coherent chunks; a higher θ produces more, smaller chunks with tighter topical coherence. The embedding computation for n sentences requires O(n) encoder forward passes, making this O(n) in computation — approximately 14x slower than recursive splitting for typical document lengths.
    - ### Parent-Child (Small-to-Big) Retrieval Pattern
      - Index: For each document section P (paragraph or logical section), generate a set of child chunks {c₁, c₂, …, cₖ} of size S_child (e.g., 128 tokens) by fixed-size splitting P. Store child chunks in the vector index with a pointer to parent P.
      - Retrieval: Embed query q and retrieve top-k child chunks c* by vector similarity. Expand each retrieved child chunk to its parent passage P*. Pass P* (not c*) as context to the language model.
      - This pattern achieves dual-granularity optimisation: child chunk embeddings carry tight semantic signals for precise retrieval; parent passage context provides sufficient surrounding information for coherent generation. The index size is O(|D| / S_child) — larger than a single-granularity parent index, but the generation context quality is substantially better than if child-level chunks were passed directly to the generator.

  - ## Metadata Enrichment and Filtering
    - Chunking is not merely about text segmentation; metadata attached to each chunk during indexing is equally important for production RAG pipeline quality. Well-designed chunk metadata enables several critical capabilities that pure vector similarity cannot provide:
    - **Source document metadata** — document title, author, creation date, version, and URL enable the generator to cite its sources with specificity and allow users to verify generated claims. Without source metadata, RAG systems cannot attribute statements to specific documents.
    - **Section and position metadata** — section heading, page number, and character offset within the source document allow the system to reconstruct document context around a retrieved chunk, support hierarchical retrieval (retrieve section, not just paragraph), and enable position-aware re-ranking.
    - **Access control metadata** — department, classification level, and user role tags enable pre-filtering at retrieval time, ensuring that users only retrieve chunks from documents they are authorised to access. This is a prerequisite for enterprise RAG deployments handling multi-tenant or multi-security-tier document corpora.
    - **Domain and content type metadata** — tags indicating document category (policy, procedure, FAQ, incident report), content modality (prose, table, code, diagram description), and domain (finance, HR, engineering) enable targeted retrieval restricted to relevant document subsets, improving precision.
    - **Temporal freshness metadata** — document ingestion date and content expiry date allow retrieval systems to deprioritise or exclude stale chunks, critical for domains where information currency is safety-relevant (drug formularies, regulatory guidance, software version documentation).
    - **Embedding model metadata** — the name and version of the embedding model used to produce each vector must be stored alongside the vector. When embedding models are upgraded, re-indexing the corpus with the new model is required; mixed-model indices produce degraded retrieval due to embedding space incompatibility.
    - Production RAG frameworks (LlamaIndex, Haystack, Weaviate, Pinecone) support rich metadata schemas on document nodes and provide pre-filtering primitives that execute as metadata constraints before vector similarity search, combining the precision of structured filtering with the recall of semantic search.

  - ## Chunking for Specialised Content Types
    - Different document modalities present distinct chunking challenges that generic text splitters inadequately address:
    - **Tables** — tabular data loses its meaning when the row-column relationship is destroyed by linear text extraction. Fixed-size splitters frequently cut across rows, producing chunks containing partial table rows without column headers. Strategies include: rendering tables as Markdown pipe notation to preserve row-column structure in the text stream; extracting tables as separate structured data objects with their own embedding pathway; or using vision-guided chunking to process tables from document images. For financial and scientific documents, table-aware chunking is among the most impactful quality improvements available.
    - **Code** — source code has AST-level structure that should govern splitting. Function and class boundaries are the natural chunk units for code retrieval; splitting within a function body breaks the logical unit that a developer would need to understand a code reference. LangChain provides language-specific code splitters that use tree-sitter AST parsing to identify function and class boundaries as split points for Python, JavaScript, TypeScript, Java, C, C++, Go, Ruby, Rust, Scala, Swift, and Markdown.
    - **Multi-page PDFs** — PDF text extraction often loses paragraph structure, hyphenation across line breaks, header/footer repetition, and page number injection. Pre-processing with dedicated PDF parsers (PyMuPDF, pdfplumber, LlamaParse) that reconstruct logical paragraph flow and remove non-content elements is a prerequisite for high-quality chunking of PDF corpora.
    - **Conversational transcripts** — dialogue data (customer service logs, meeting transcripts, interview recordings) should be chunked by speaker turn or by conversational episode rather than arbitrary token windows, to preserve the question-answer or instruction-response adjacency pairs that carry semantic meaning in dialogue context.
    - **Legal documents** — contracts, statutes, and regulatory filings have clause, section, and article hierarchies that must be preserved as chunk boundaries. A clause fragment retrieved without its governing section heading loses essential contextual information about what obligation or right it establishes. Structure-aware splitting using legal XML schemas (Akoma Ntoso, LegalRuleML) or section-heading detection is required.
    - **Medical and clinical documents** — clinical guidelines (NICE, WHO) have section structures (indication, dosage, contraindications, adverse effects) that must be preserved as chunk boundaries for patient safety. Drug interaction tables, dosage tables, and clinical decision trees require specialised table-aware processing.

  - ## Key Terminology
    - **Chunk** — a bounded segment of source document text produced by the chunking process, typically 128-1024 tokens, stored in a vector index as a retrievable unit. Each chunk is the atomic unit of retrieval: the system returns chunks, not documents, in response to a query.
    - **Chunk Size** — the maximum number of tokens (or characters, in character-based splitters) contained in a single chunk. The primary hyperparameter governing the precision/context trade-off. Smaller chunks (128-256 tokens) improve retrieval precision; larger chunks (512-2048 tokens) improve generation context quality.
    - **Chunk Overlap** — the number of tokens shared between the end of one chunk and the beginning of the next. Overlap prevents boundary artefacts where a key phrase is split between non-overlapping chunks. Standard values are 10-20% of chunk size (50-100 tokens for a 512-token chunk).
    - **Token** — the atomic text unit processed by a [[Large Language Models|language model's]] tokeniser. Tokens are sub-word units typically 3-5 characters in English; token count differs from word count and character count. Chunking by token count (rather than character count) is preferred because [[Embedding Model|embedding models]] have token-count context limits.
    - **Tokeniser** — the component that converts raw text into token sequences. BPE (Byte Pair Encoding), WordPiece, and SentencePiece tokenisers are common; the tokeniser must match that of the target embedding model, as different models use different vocabularies and produce different token counts for the same text.
    - **Embedding** — the dense vector representation of a chunk, produced by passing the chunk text through an [[Embedding Model]]. Chunks with similar semantic content produce embeddings with high cosine similarity, enabling semantic retrieval.
    - **Index** — the data structure storing pre-computed chunk embeddings and metadata, enabling efficient approximate nearest-neighbour search at query time. Implemented by [[Vector Database|vector databases]] such as FAISS, Pinecone, Weaviate, Qdrant, pgvector, and Chroma.
    - **Retrieval Granularity** — the level at which retrieval operates: token, sentence, paragraph, section, or document. The optimal retrieval granularity depends on query type (factoid vs. analytical) and document type.
    - **Context Window Budget** — the total number of tokens available in the [[Context Window]] of the reader LLM for the combined prompt (system instructions + retrieved chunks + user query). Effective chunking must ensure that the top-k retrieved chunks, when concatenated, fit within this budget. At 512-token chunks with k=5, retrieval consumes 2,560 tokens of context window budget.
    - **Proposition Chunking** — an advanced strategy in which chunks are not passage boundaries but atomic factual propositions extracted by an LLM (Chen et al., 2023). Each proposition is a self-contained, verifiable factual statement that can be independently retrieved and verified. Maximises retrieval precision for factoid queries at high indexing compute cost.
    - **Sliding Window** — the fixed-size chunking approach where successive windows overlap by a fixed stride, equivalent to sliding a fixed-width frame across the document token sequence. The term is used interchangeably with "overlapping fixed-size chunking".
    - **BM25** — Best Match 25, a probabilistic sparse retrieval function that ranks chunks by term frequency, inverse document frequency, and document length normalisation. Often combined with dense vector retrieval in hybrid RAG systems to improve recall on keyword-specific queries.

  - ## Research and Literature
    - 1. Miller, G. A. (1956). The Magical Number Seven, Plus or Minus Two: Some Limits on our Capacity for Processing Information. *Psychological Review*, 63(2), 81-97.
    - 2. Hearst, M. A. (1997). TextTiling: Segmenting Text into Multi-Paragraph Subtopic Passages. *Computational Linguistics*, 23(1), 33-64.
    - 3. Kaszkiel, M., & Zobel, J. (1997). Passage Retrieval Revisited. *SIGIR 1997*.
    - 4. Ponte, J. M., & Croft, W. B. (1998). A Language Modeling Approach to Information Retrieval. *SIGIR 1998*.
    - 5. Robertson, S. E., & Zaragoza, H. (2009). The Probabilistic Relevance Framework: BM25 and Beyond. *Foundations and Trends in Information Retrieval*, 3(4), 333-389.
    - 6. Karpukhin, V., Oguz, B., Min, S., Lewis, P., Wu, L., Edunov, S., … Yih, W. (2020). Dense Passage Retrieval for Open-Domain Question Answering. *EMNLP 2020*.
    - 7. Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., … Kiela, D. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. *NeurIPS 2020*.
    - 8. Reimers, N., & Gurevych, I. (2019). Sentence-BERT: Sentence Embeddings Using Siamese BERT-Networks. *EMNLP 2019*.
    - 9. Chen, T., Wong, H., Zhao, Y., Cheng, P., & Krishna, R. (2023). Dense X Retrieval: What Retrieval Granularity Should We Use? *arXiv:2312.06648*.
    - 10. Shi, W., Min, S., Yasunaga, M., Seo, M., James, R., Lewis, M., … Yih, W. (2023). REPLUG: Retrieval-Augmented Language Model Pre-Training. *NAACL 2023*.
    - 11. Asai, A., Wu, Z., Wang, Y., Sil, A., & Hajishirzi, H. (2024). Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection. *ICLR 2024*.
    - 12. Gao, Y., Xiong, Y., Gao, X., Jia, K., Pan, J., Bi, Y., … Wang, H. (2024). Retrieval-Augmented Generation for Large Language Models: A Survey. *arXiv:2312.10997*.
    - 13. Tripathi, A., Odapally, R., et al. (2025). Vision-Guided Chunking Is All You Need: Enhancing RAG with Multimodal Document Understanding. *arXiv:2506.16035*.
    - 14. MultiDocFusion Authors (2025). MultiDocFusion: Hierarchical and Multimodal Chunking Pipeline for Enhanced RAG on Long Industrial Documents. *arXiv:2604.12352*.
    - 15. Chunking Strategies for Multimodal AI Systems. (2024). *arXiv:2512.00185*.
    - 16. Mukherjee, K. (2026). The Complete Guide to Document Chunking for RAG. *Medium, April 2026*.
    - 17. DigitalApplied (2026). RAG Chunking Strategies: A 2026 Retrieval Playbook. https://www.digitalapplied.com/blog/rag-chunking-strategies-2026-retrieval-quality-playbook
    - 18. Firecrawl (2026). Best Chunking Strategies for RAG (and LLMs) in 2026. https://www.firecrawl.dev/blog/best-chunking-strategies-rag
    - 19. LangCopilot (2026). Document Chunking for RAG: 9 Strategies, Chunk Size & Overlap. https://langcopilot.com/posts/2025-10-11-document-chunking-for-rag-practical-guide
    - 20. Databricks Technical Blog (2024). The Ultimate Guide to Chunking Strategies for RAG Applications. https://community.databricks.com/t5/technical-blog/the-ultimate-guide-to-chunking-strategies-for-rag-applications/ba-p/113089
    - 21. ACL Anthology (2025). The Chunking Paradigm: Recursive Semantic for RAG Optimization. *ICNLSP 2025*, https://aclanthology.org/2025.icnlsp-1.15.pdf
    - 22. Enhancing RAG System Performance Through Semantic Layout Chunking. (2025). *AI 2025: Advances in Artificial Intelligence*, Springer. ACM DL: https://dl.acm.org/doi/10.1007/978-981-95-4969-6_3
    - 23. Es, S., James, J., Anke, L. E., & Schockaert, S. (2023). RAGAS: Automated Evaluation of Retrieval Augmented Generation. *arXiv:2309.15217*.
    - 24. LlamaIndex Documentation (2026). Node Parser Modules. https://developers.llamaindex.ai/python/framework/module_guides/loading/node_parsers/modules/
    - 25. LangChain Documentation (2026). Text Splitter Integrations. https://docs.langchain.com/oss/python/integrations/splitters
    - 26. Thakur, N., Reimers, N., Rücklé, A., Srivastava, A., & Gurevych, I. (2021). BEIR: A Heterogeneous Benchmark for Zero-Shot Evaluation of Information Retrieval Models. *NeurIPS 2021 Datasets and Benchmarks Track*.
    - 27. Knowledge Compression via Question Generation: Enhancing Multihop Document Retrieval without Fine-tuning. (2025). *arXiv:2506.13778*.

  - ## Design Decisions and Practical Guidance
    - Selecting a chunking strategy for a production RAG system requires evaluating several interconnected factors, not just retrieval accuracy benchmarks:
    - **Document corpus characteristics** — what types of documents does the system ingest? Prose-heavy corpora (policy documents, support articles, news) are well-served by recursive or sentence-based splitting. Highly structured corpora (technical manuals, legal agreements, financial filings) benefit from structure-aware splitting. Mixed corpora require a multi-strategy approach or a unified structure-aware parser.
    - **Query characteristics** — are queries factoid (single-fact lookups) or analytical (requiring synthesis across multiple passages)? Factoid queries benefit from smaller, precise chunks; analytical queries benefit from larger passages that provide surrounding context for synthesis.
    - **Downstream model context window** — larger context windows allow more retrieved chunks to be included in the prompt. With a 128k token context window, the practitioner can afford 25 chunks of 512 tokens each (12,800 tokens), enabling broader retrieval. With a 4k window (legacy models), a maximum of 7-8 chunks of 512 tokens is feasible, placing a premium on retrieval precision.
    - **Indexing compute budget** — semantic chunking requires one embedding model inference call per sentence during splitting (not just per chunk). For a corpus of 10 million tokens with average sentence length of 20 tokens, this is 500,000 inference calls during indexing, versus approximately 20,000 chunks for a 512-token fixed-size split. The cost differential is substantial for large corpora at continuous ingestion scale.
    - **Update frequency** — corpora with frequent updates (news feeds, live knowledge bases, real-time compliance updates) benefit from fine-grained chunk sizes that minimise re-indexing cost when documents change. Chunking at the paragraph level means that an updated paragraph requires only one chunk to be re-embedded and re-indexed, rather than all chunks derived from the document.
    - **Evaluation-driven iteration** — the definitive guide is empirical: chunk with one strategy, evaluate RAGAS metrics on a representative question set, adjust strategy or hyperparameters, repeat. Databricks' DBRX engineering blog documents this iterative process for their production RAG pipelines. Starting with recursive splitting at 512 tokens / 10% overlap provides a strong baseline to beat.
    - **Vendor platform considerations** — many commercial RAG platforms (Microsoft Azure AI Search, AWS Bedrock Knowledge Bases, Google Vertex AI Search) provide built-in chunking with fixed or configurable parameters. Understanding the platform's default chunking behaviour is essential for evaluating retrieval quality; several platforms have moved toward semantic chunking defaults as of 2025.

  - ## Integration with Graph RAG
    - A significant 2024-2026 development in the chunking landscape is the emergence of Graph RAG (Microsoft Research, 2024) as a complementary architecture that addresses a fundamental limitation of standard chunking-based RAG: the inability to answer questions that require synthesising information across many disparate passages from a large corpus.
    - Standard chunking-based RAG excels at targeted factual retrieval but struggles with questions like "What are the main themes across this 500-document corpus?" or "Which entities appear in contradictory claims across multiple sources?" — questions that require holistic understanding rather than local passage retrieval.
    - Graph RAG addresses this by augmenting the chunking and embedding pipeline with: (1) entity and relationship extraction from each chunk using an LLM, building a [[Knowledge Graph]] from the corpus; (2) community detection over the knowledge graph to identify clusters of related entities; (3) community-level summarisation by LLM to produce hierarchical abstractions at multiple granularities; (4) at query time, using both the knowledge graph community summaries and the original chunk embeddings to answer different types of queries optimally.
    - The chunking step in Graph RAG remains critical but serves a dual purpose: producing retrievable chunks for local factual queries, and providing the text context from which entity/relation extraction generates knowledge graph edges. Optimal chunk sizes for Graph RAG entity extraction (256-512 tokens) may differ from optimal sizes for pure retrieval (512-1024 tokens), creating a design tension that hierarchical indexing partially resolves.
    - As of mid-2026, Graph RAG has been adopted by enterprise customers across Microsoft's Azure AI platform and has inspired open implementations in LlamaIndex (Property Graph Index) and Neo4j's GraphRAG toolkit. The integration of chunking with knowledge graph construction is becoming a standard pattern for large-scale enterprise document intelligence.

  - ## Chunking in Agentic RAG Systems
    - Agentic [[Retrieval-Augmented Generation|RAG]] systems, where an AI agent autonomously determines retrieval strategies during task execution, add a new dimension to chunking design. In contrast to static RAG pipelines where chunking is a fixed preprocessing step, agentic RAG may dynamically adjust the granularity and scope of retrieval during a multi-step reasoning task:
    - **Query decomposition and targeted retrieval** — an agent may decompose a complex query into sub-queries, each targeting different document sections at different granularities. The agent may request sentence-level chunks for one sub-query and section-level context for another, requiring an index that supports variable-granularity retrieval (as provided by LlamaIndex's recursive retriever).
    - **Iterative retrieval and re-chunking** — in multi-hop reasoning tasks, an agent may retrieve an initial passage, identify an entity of interest within it, and then issue a targeted retrieval for that entity across the full corpus. The chunk that introduced the entity functions as a navigation node into a more targeted sub-search.
    - **Tool-driven chunk expansion** — agentic systems can implement the parent-child retrieval pattern as a tool call: the agent retrieves a precise child chunk, then optionally calls a "expand_context" tool to fetch the parent section if additional context is needed. This on-demand expansion pattern allows the agent to control context window usage dynamically.
    - **Feedback-driven re-indexing** — in continuously operating agentic systems, retrieval failures (low-confidence retrievals, queries returning no relevant chunks) can trigger re-indexing of specific document sections with finer-grained chunking, creating a self-improving index that adapts to observed query patterns.

- ### Provenance
  - sources:: Miller (1956) Psychological Review; Hearst (1997) Computational Linguistics; Karpukhin et al. (2020) EMNLP; Lewis et al. (2020) NeurIPS; Chen et al. (2023) arXiv:2312.06648; Tripathi et al. (2025) arXiv:2506.16035; https://www.firecrawl.dev/blog/best-chunking-strategies-rag; https://langcopilot.com/posts/2025-10-11-document-chunking-for-rag-practical-guide; https://www.digitalapplied.com/blog/rag-chunking-strategies-2026-retrieval-quality-playbook; https://community.databricks.com/t5/technical-blog/the-ultimate-guide-to-chunking-strategies-for-rag-applications/ba-p/113089; https://aclanthology.org/2025.icnlsp-1.15.pdf; https://developers.llamaindex.ai/python/framework/module_guides/loading/node_parsers/modules/; https://docs.langchain.com/oss/python/integrations/splitters
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm