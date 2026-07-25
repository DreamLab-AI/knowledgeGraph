public:: true

# Chunking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:chunking",
  "@type": "Page",
  "vc:slug": "chunking",
  "title": "Chunking",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:rag-pipeline",
      "vc:label": "RAG Pipeline"
    },
    {
      "@id": "urn:visionflow:linked:retrieval-augmented-generation",
      "vc:label": "Retrieval-Augmented Generation"
    },
    {
      "@id": "urn:visionflow:linked:embedding-model",
      "vc:label": "Embedding Model"
    },
    {
      "@id": "urn:visionflow:linked:information-retrieval",
      "vc:label": "Information Retrieval"
    },
    {
      "@id": "urn:visionflow:linked:vector-database",
      "vc:label": "Vector Database"
    },
    {
      "@id": "urn:visionflow:linked:large-language-models",
      "vc:label": "Large Language Models"
    },
    {
      "@id": "urn:visionflow:linked:natural-language-processing",
      "vc:label": "Natural Language Processing"
    },
    {
      "@id": "urn:visionflow:linked:semantic-search",
      "vc:label": "Semantic Search"
    }
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:chunking",
  "@type": "Class",
  "label": "Chunking",
  "definition": "Chunking is the process of segmenting source documents into smaller, semantically coherent passages before they are embedded and indexed for retrieval-augmented generation. Strategies range from fixed-size and overlapping windows to recursive, sentence-aware, and semantic chunking that respects document structure. It matters because chunk size and boundaries directly govern retrieval precision and the relevance of context supplied to a language model, making chunking a primary lever for RAG quality.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"}
  ],
  "sameAs": [
    {"@id": "urn:ngm:class:document-chunking", "label": "Document Chunking"},
    {"@id": "urn:ngm:class:text-segmentation", "label": "Text Segmentation"},
    {"@id": "urn:ngm:class:document-splitting", "label": "Document Splitting"}
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:document-parser", "label": "Document Parser"},
      {"@id": "urn:ngm:class:tokeniser", "label": "Tokeniser"},
      {"@id": "urn:ngm:class:embedding-model", "label": "Embedding Model"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:dense-retrieval", "label": "Dense Retrieval"},
      {"@id": "urn:ngm:class:hallucination-reduction", "label": "Hallucination Mitigation"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:chunk-overlap", "label": "Chunk Overlap"},
      {"@id": "urn:ngm:class:chunk-metadata", "label": "Chunk Metadata"},
      {"@id": "urn:ngm:class:chunk-boundary", "label": "Chunk Boundary"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:rag-pipeline", "label": "RAG Pipeline"},
      {"@id": "urn:ngm:class:vector-database", "label": "Vector Database"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rag-pipeline", "label": "RAG Pipeline"},
      {"@id": "urn:ngm:class:gpts-and-custom-assistants", "label": "GPTs and Custom Assistants"},
      {"@id": "urn:ngm:class:context-window", "label": "Context Window"},
      {"@id": "urn:ngm:class:information-extraction", "label": "Information Extraction"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:full-document-indexing", "label": "Full-Document Indexing"},
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine-Tuning"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:sentence-transformers", "label": "Sentence Transformers"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:question-answering", "label": "Question Answering"},
      {"@id": "urn:ngm:class:enterprise-search", "label": "Enterprise Search"},
      {"@id": "urn:ngm:class:source-attribution", "label": "Source Attribution"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Chunking is the systematic process of decomposing source documents into smaller, semantically bounded text passages — known as chunks — prior to embedding and vector-database indexing for use in [[Retrieval-Augmented Generation]] and [[Semantic Search]] systems. Named by analogy to George Miller's 1956 cognitive psychology concept of chunking as the cognitive grouping of information into manageable units, the technique in the context of [[Natural Language Processing]] and [[Information Retrieval]] refers specifically to the engineering decision about how to partition a corpus so that each retrievable passage is dense enough to carry meaning independently, yet compact enough to be precisely matched to a query by an [[Embedding Model]]. Chunking strategies range from the simplest fixed-size character or token windows to advanced adaptive approaches — sentence-aware splitting, recursive hierarchical splitting, semantics-based boundary detection via embedding cosine distance, layout-aware parsing of PDF and HTML structure, and vision-guided multimodal chunking that processes document pages as images to preserve table and figure context. The choice of strategy and hyperparameters (chunk size, overlap, splitting hierarchy) is among the most consequential engineering decisions in building a [[RAG Pipeline]]: too-small chunks fragment meaning and reduce the coherence of evidence supplied to the generator; too-large chunks dilute retrieval precision and exhaust [[Context Window]] budget without proportional benefit. Overlapping windows — where successive chunks share a fixed number of tokens at their boundaries — reduce boundary artefacts that arise when a key phrase or sentence is split across two non-overlapping chunks. By mid-2026, the practitioner consensus converges on chunk sizes in the range of 256-512 tokens with 10-20% overlap as a broadly effective baseline, with semantic or recursive strategies providing measurable gains — up to 70% improvement in retrieval benchmarks compared to naive fixed-size baselines — for structured or domain-specific corpora at the cost of additional embedding computation. Chunking is a foundational data-engineering primitive of the contemporary AI stack, sitting upstream of [[Embedding Model]] encoding, [[Vector Database]] indexing, and ultimately the retrieval-conditioned language model generation that defines the [[Retrieval-Augmented Generation]] paradigm.

- ### Semantic Classification
  - owl-class:: ai:Chunking
  - owl-role:: DataEngineeringPrimitive | TextProcessingStep | ExecutableProtocol
  - owl-inferred:: ai:DocumentSegmentation, ai:TextSplitting, ai:IndexingPreprocessing
  - belongs-to-domain:: [[Information Retrieval]]
  - implemented-in-layer:: [[RAG Pipeline]]

- ### Relationships
  - is-subclass-of:: [[Information Retrieval]]
  - is-subclass-of:: [[Text Segmentation]]
  - has-part:: [[Chunk Overlap]]
  - has-part:: [[Chunk Metadata]]
  - has-part:: [[Chunk Boundary]]
  - has-part:: [[Token Window]]
  - has-part:: [[Splitting Strategy]]
  - has-part:: [[Document Parser]]
  - requires:: [[Document Parser]]
  - requires:: [[Tokeniser]]
  - requires:: [[Embedding Model]]
  - enables:: [[Semantic Search]]
  - enables:: [[Retrieval-Augmented Generation]]
  - enables:: [[Dense Retrieval]]
  - enables:: [[Hallucination Mitigation]]
  - enables:: [[Source Attribution]]
  - enables:: [[Question Answering]]
  - enables:: [[Hybrid Retrieval]]
  - implements:: [[RAG Pipeline]]
  - implements:: [[Document Indexing Pipeline]]
  - depends-on:: [[RAG Pipeline]]
  - depends-on:: [[Vector Database]]
  - depends-on:: [[Embedding Model]]
  - supports:: [[Question Answering]]
  - supports:: [[Enterprise Search]]
  - supports:: [[Source Attribution]]
  - supports:: [[Knowledge Grounding]]
  - supports:: [[Document Intelligence]]
  - uses:: [[Natural Language Processing]]
  - uses:: [[Sentence Transformers]]
  - uses:: [[Large Language Models]]
  - uses:: [[Tokeniser]]
  - uses:: [[Embedding Model]]
  - uses:: [[Vector Database]]
  - contrasts-with:: [[Full-Document Indexing]]
  - contrasts-with:: [[Fine-Tuning]]
  - contrasts-with:: [[Parametric Knowledge]]
  - related-to:: [[Context Window]]
  - related-to:: [[Information Extraction]]
  - related-to:: [[Knowledge Graph]]
  - related-to:: [[GPTs and Custom Assistants]]
  - related-to:: [[Prompt Engineering]]
  - related-to:: [[Approximate Nearest Neighbour Search]]
  - related-to:: [[Embedding Search]]
  - related-to:: [[Semantic Search]]
  - related-to:: [[Chatbot]]
  - standardized-by:: [[LangChain]]
  - standardized-by:: [[LlamaIndex]]
  - standardized-by:: [[Haystack]]

- ### Content
  ## Compositional Relationships (Components)
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

  ## Dependency Relationships
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

  ## Capability Relationships
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
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:supports ai:ContextualRetrieval))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:enables ai:HybridRetrieval))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:supports ai:DocumentIntelligence))

  ## Implementation Relationships
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
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:uses ai:EmbeddingModel))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:uses ai:VectorDatabase))

  ## Reduction Relationships
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:reducesTo ai:FixedSizeTextWindow))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:reducesTo ai:SentenceSplitter))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:reducesTo ai:TokenSplitter))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:reducesTo ai:CharacterSplitter))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:reducesTo ai:ParagraphSplitter))
      SubClassOf(ai:Chunking
        ObjectSomeValuesFrom(ai:reducesTo ai:StructuredElementExtractor))

  ## About
    The term "chunking" derives from George A. Miller's landmark 1956 paper "The Magical Number Seven, Plus or Minus Two: Some Limits on our Capacity for Processing Information" (Psychological Review), which described how human working memory groups perceptual or cognitive items into higher-order units — chunks — to overcome the 7±2 item capacity limit. In psycholinguistics and knowledge representation, chunking refers to the cognitive organisation of information into bounded, meaningful units that can be processed as atomic items. The application of this concept to document preprocessing in AI systems was a natural extension: just as human working memory cannot hold an entire text simultaneously but can process a meaningful paragraph, a language model's attention mechanism operates most effectively on passages small enough to preserve semantic coherence while large enough to carry self-contained meaning.

    In the context of modern [[Retrieval-Augmented Generation]], chunking emerged as a distinct engineering concern with the publication of the original RAG paper (Lewis et al., Facebook AI Research, 2020), which split a Wikipedia dump into 100-word passages for dense retrieval. As RAG systems proliferated through LangChain (2022) and LlamaIndex (2022), the diversity of real-world document types — PDFs with complex layouts, HTML pages with navigation elements, code repositories, spreadsheets, slide decks, scanned images — made fixed-size splitting inadequate. The field rapidly developed a taxonomy of chunking strategies, each trading off computation, semantic fidelity, and retrieval performance differently.

    By 2025-2026 chunking has become a mature sub-discipline with empirical benchmarking, framework standardisation, and published research characterising performance trade-offs across strategy families. A February 2026 benchmark of seven strategies across 50 academic papers placed recursive 512-token splitting first at 69% accuracy for document Q&A tasks, while semantic chunking achieved the highest accuracy in clinical settings (87% in an MDPI Bioengineering study) at substantially higher computational cost. Vision-guided multimodal chunking (Tripathi et al., arXiv 2506.16035, June 2025) and MultiDocFusion (arXiv 2604.12352, 2025) represent the frontier for complex structured documents with tables, figures, and multi-page layouts.

    The conceptual connection between Miller's cognitive psychology insight and AI document processing is more than metaphorical. Miller observed that human working memory does not have a fixed capacity in terms of raw information bits — rather, it has a fixed capacity in terms of chunks, where each chunk can encode an arbitrary amount of information through recoding. This is precisely the trade-off that chunking in RAG systems navigates: a chunk is the atomic unit of retrieval, and its information density (the ratio of semantically relevant content to total token count) directly determines retrieval quality. A chunk that is too small contains too little information to be semantically distinctive; a chunk that is too large contains too much information for the embedding to represent faithfully in a single fixed-dimensional vector. The optimal chunk size is the point at which the embedding space most faithfully captures the semantic unit — a question that depends on the embedding model's architecture, training data, and the nature of the document corpus.

  ## Chunking Strategy Taxonomy

    Six principal chunking strategies have emerged from the RAG engineering literature, each optimised for different trade-offs between computational cost, semantic fidelity, and retrieval performance.

    **Fixed-Size (Character or Token Window).** The simplest and most computationally efficient strategy: split source text into windows of a fixed character count or token count, with optional overlap between successive windows. Tokeniser-based splitting (counting tokens according to the target embedding model's vocabulary) is preferred over character-based splitting because embedding models have token-count context limits, not character limits. Advantages include determinism, speed, and zero model dependency for the splitting step itself. Disadvantages: arbitrarily cuts across sentence and paragraph boundaries, fragmenting meaning; a key phrase or entity may be split between two non-overlapping chunks, degrading both retrieval and generation; insensitive to document structure. Default hyperparameters as of 2026: 256-512 tokens, 50-100 token overlap (10-20%). LlamaIndex default chunk_size is 1024 with chunk_overlap of 20; LangChain's RecursiveCharacterTextSplitter defaults to 1000 characters with 200 overlap. Use as the baseline to beat before investing in more sophisticated approaches.

    **Sentence-Based Splitting.** Uses sentence boundary detection (full stop + capitalisation heuristics, or a dedicated sentence tokeniser such as spaCy's sentencizer) to preserve grammatical completeness at chunk boundaries. Each chunk contains one or more complete sentences up to the size limit, with sentence-level overlap. A February 2026 benchmark found sentence-based splitting matched semantic chunking performance up to approximately 5,000 tokens at a fraction of the computational cost, making it a practical first upgrade from fixed-size splitting for most workloads. Well-suited for: narrative prose, news articles, academic paper abstracts, customer support transcripts. Less effective for: lists, code, tables, or highly fragmented technical documentation.

    **Recursive Hierarchical Splitting.** Attempts to split at the highest structural level available, progressively descending to lower-level separators when a section is too long. The separator hierarchy for prose is typically: paragraph boundaries (\n\n), line breaks (\n), sentence boundaries, word boundaries. For code: class/function definitions, method bodies, line boundaries. LangChain's RecursiveCharacterTextSplitter is the canonical implementation; LlamaIndex provides a SentenceSplitter with similar recursive logic. A February 2026 benchmark placed recursive 512-token splitting first overall at 69% accuracy across 50 academic papers, making it the recommended default for general-purpose RAG. Advantages: preserves document structure better than fixed-size splitting; no embedding model required for splitting itself; fast and deterministic. Disadvantages: relies on textual cues (whitespace, punctuation) that may be absent or unreliable in converted PDFs and OCR output.

    **Semantic Chunking.** Uses an [[Embedding Model]] to compute the semantic similarity between consecutive sentences or passages, identifying breakpoints where cosine similarity drops sharply — indicating a topic shift. Chunks are formed by grouping sentences that share a coherent topic, regardless of their character or token count. LlamaIndex's SemanticSplitterNodeParser is the reference implementation; the Databricks "ultimate guide" and DigitalApplied (2026) benchmark report up to ~70% lift in retrieval accuracy over naive fixed-size baselines for well-structured, topically diverse documents. Disadvantages: requires embedding every candidate sentence during the splitting phase (for a 10,000-word document this may generate 200-300 embedding API calls or local model inferences), making it approximately 14x slower than recursive splitting; chunk size varies, complicating context-window budgeting. Best suited for long documents with clear topic transitions (textbooks, research reports, legal agreements), where the precision gain from topic-coherent chunks justifies the embedding overhead. Should be adopted only after profiling shows precision/recall gains exceeding the added cost on the target corpus.

    **Structure-Aware / Layout-Aware Splitting.** Parses document structure explicitly — using HTML element hierarchy (h1/h2/section/p), Markdown heading levels (#/##/###), LaTeX section commands (\section/\subsection), or PDF logical structure tags — and uses structural boundaries as primary split points. [[LangChain]] provides HTMLHeaderTextSplitter, MarkdownHeaderTextSplitter, and related structure-aware splitters. Ensures that chunk boundaries align with document-level logical units (a section, a subsection, a numbered item) rather than arbitrary character positions. Particularly effective for technical documentation, product manuals, and regulatory filings where section structure carries semantic meaning. When combined with metadata propagation (each chunk inherits its parent section heading as a metadata field), structure-aware splitting enables precision retrieval filtered to specific document sections without requiring separate indices per section.

    **Agentic / LLM-Based Chunking.** Uses a [[Large Language Models|language model]] to autonomously determine optimal chunk boundaries, potentially generating summarised metadata for each chunk, extracting key entities, or proposing contextualising headings. LlamaIndex's "Propositions" chunker (Chen et al., 2023) decomposes documents into atomic factual propositions rather than passage-level chunks, improving fine-grained retrieval precision. The proposition chunker approach was shown to substantially improve recall at fine granularity on multi-hop Q&A benchmarks, at the cost of significantly higher preprocessing compute (requiring an LLM inference call per source passage during indexing). This approach is typically cost-justified only for high-value, low-volume corpora (e.g., a set of authoritative regulatory documents or clinical guidelines) where retrieval precision is safety-critical.

    **Multimodal / Vision-Guided Chunking.** Processes document pages as images using large multimodal models (LMMs) to detect and preserve the layout context of tables, figures, headers, and multi-column text that is lost during PDF-to-text conversion. "Vision-Guided Chunking Is All You Need" (Tripathi et al., arXiv:2506.16035, June 2025) demonstrated superior accuracy versus traditional vanilla RAG for complex technical PDFs, with cross-batch context preservation enabling accurate handling of tables spanning multiple pages. MultiDocFusion (arXiv:2604.12352, 2025) combines visual region detection, OCR, and LLM-based hierarchical parsing for long industrial documents. Particularly important for engineering specifications, clinical trial reports, financial statements, and scientific papers where tables and figures carry critical structured information that text-only parsing discards or garbles.

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

  ## Framework Implementations

    The major open-source RAG frameworks each provide multiple chunking implementations with different capability profiles:

    **LangChain** (Python / JavaScript) is the most widely deployed RAG framework and provides the richest set of text splitters:
    - `CharacterTextSplitter` — splits on a single configurable character (default: newline), the simplest possible splitter
    - `RecursiveCharacterTextSplitter` — the recommended default; recursively splits on paragraph, sentence, word boundaries in order
    - `TokenTextSplitter` — splits by token count using tiktoken (OpenAI tokeniser), ensuring precise token budgeting
    - `MarkdownHeaderTextSplitter` — splits at Markdown heading boundaries (#, ##, ###), propagating heading metadata to chunks
    - `HTMLHeaderTextSplitter` — splits HTML documents at header element boundaries (h1, h2, h3), preserving page section structure
    - `PythonCodeTextSplitter` / `LanguageCodeSplitter` — AST-aware code splitters for Python, JavaScript, TypeScript, Java, C, C++, Go, Ruby, Rust, Scala, Swift
    - `SemanticChunker` — embedding-based semantic boundary detection using cosine similarity breakpoints

    **LlamaIndex** (Python) frames all chunks as "nodes" in a document graph, preserving richer inter-chunk relationships:
    - `TokenTextSplitter` — default chunk_size=1024, chunk_overlap=20; token-based splitting using tiktoken
    - `SentenceSplitter` — sentence boundary-aware splitting; default chunk_size=1024, with sentence context window
    - `SemanticSplitterNodeParser` — embedding-based semantic chunking with configurable breakpoint percentile threshold
    - `HierarchicalNodeParser` — creates parent-child node hierarchies at multiple chunk sizes simultaneously (e.g., 2048 / 512 / 128)
    - `SimpleFileNodeParser` — dispatches to format-specific parsers (Markdown, HTML, JSON) based on file type
    - `PropositionNodeParser` — LLM-based decomposition into atomic factual propositions (Chen et al., 2023)
    - `LlamaParse` — managed multimodal PDF parsing service with table and figure extraction, feeding structured text to downstream splitters

    **Haystack** provides `DocumentSplitter` with configurable `split_by` (word/sentence/passage/page), `split_length`, and `split_overlap`, integrated directly with Haystack's document store and retrieval components.

    **Unstructured.io** is a pre-processing library for complex document types (PDF, DOCX, PPTX, HTML, images) that extracts structured elements (titles, narrative text, list items, tables, images) before chunking, enabling structure-aware splitting even from PDFs lacking logical structure tags.

    **Chonkie** (2025) is a dedicated chunking library designed for RAG, providing recursive, sentence-based, semantic, and token-based chunkers with a unified API and performance-optimised implementation, benchmarked to outperform LangChain splitters in speed and accuracy on standard corpora.

  ## Use Cases / Major Applications

    Chunking is deployed across every major domain where [[Retrieval-Augmented Generation]] and [[Semantic Search]] are applied:

    **Enterprise Knowledge Management.** Large organisations index proprietary documentation (policies, procedures, product manuals, support histories) through [[RAG Pipeline|RAG pipelines]] built on chunked and embedded corpora. Chunking is the first and often most consequential parameter set: different document types require different strategies. Narrative policy documents respond well to sentence-based splitting; structured technical manuals respond to structure-aware splitting at section boundaries; support ticket logs may use short fixed-size windows to preserve incident-level granularity. Metadata enrichment at chunk creation time enables department- or role-level access control at retrieval time, ensuring that a finance department query retrieves only finance-relevant chunks even when the underlying vector index spans the whole enterprise corpus.
    - Key considerations: update frequency (chunking granularity affects re-indexing cost), access control (metadata filtering for multi-tenant corpora), multilingual corpora (different splitters needed for CJK, RTL, and Latin-script languages), document version management (chunk IDs must be stable across document versions for incremental updates)

    **Legal and Regulatory Research.** Legal AI systems (Harvey, CoCounsel, Lexis+ AI, Kira Systems) chunk case law, statutes, and contracts using structure-aware splitters that respect section hierarchy, clause numbering, and cross-reference patterns. Sentence-level overlap is critical to avoid clause fragmentation at boundaries. Source attribution requires chunk-level metadata tracking the originating document, jurisdiction, publication date, and amendment history.
    - Key challenges: cross-references between sections of the same document (a clause that modifies an earlier provision) require multi-hop retrieval to surface both the original and the modifying provision; legislative amendment histories require temporal metadata to retrieve the version applicable at a given date; jurisdictional filtering requires metadata-based pre-filtering before vector similarity search

    **Medical and Clinical Information Retrieval.** Clinical decision support systems chunk clinical guidelines (NICE, WHO, SIGN), drug formularies, BNF monographs, and medical literature. An adaptive chunking approach aligned to logical topic boundaries achieved 87% accuracy versus 13% for fixed-size baselines in a 2025 MDPI Bioengineering study (MDPI Bioengineering, November 2025). Patient safety requirements demand high precision and recall; a missed contraindication or incorrectly attributed adverse effect could cause patient harm. Every chunk must carry authorship, date, and version metadata to support clinical governance and audit.
    - Key design requirements: guideline section boundaries (indication, dosage, contraindications, adverse effects, drug interactions) must be preserved as chunk boundaries; drug name and dosage tables require table-aware chunking; clinical terminology normalisation (mapping synonym surface forms to canonical drug names, ICD-10 codes) improves retrieval recall

    **Code and Technical Documentation Retrieval.** Coding assistant systems (GitHub Copilot, Cursor, Claude Code, Amazon Q Developer) chunk codebases and API documentation using code-aware splitters that respect function, class, and module boundaries. LangChain provides language-specific code splitters using tree-sitter AST parsing for Python, JavaScript, TypeScript, Java, C, C++, Go, Ruby, Rust, Scala, Swift, and Markdown.
    - Key insight: splitting within a function body breaks the logical code unit, causing the generator to produce calls with incorrect signatures or missing dependencies; AST-level splitting preserves function boundaries as the natural chunk unit for code retrieval

    **Multimodal Document Corpora.** Financial reports, engineering specifications, and scientific papers contain tables, charts, and figures alongside prose. Vision-guided chunking (Tripathi et al., 2025) processes these as images, preserving the spatial structure and cross-references between tables and surrounding text that text-only extraction destroys.
    - Key challenge: a table caption appears several paragraphs before its data in the extracted text stream, but in the original document is visually adjacent; vision-guided chunking preserves this proximity relationship

    **Conversational AI Memory.** [[Chatbot]] and virtual assistant systems that maintain long-term user memory chunk and embed conversation history or user-provided documents, enabling the bot to retrieve relevant past context or document passages during future sessions. [[Retrieval-Augmented Generation]] with chunked conversation history is the primary architecture for extending [[Large Language Models|LLM]] context beyond the in-session [[Context Window]].
    - Specific pattern: each conversation turn (or turn-pair) is chunked and embedded at session close; at session start, recent and relevant turn embeddings are retrieved and injected as context, simulating long-term memory within the token budget

  ## Academic Context

    The intellectual origins of chunking in NLP and IR lie in passage retrieval research extending back to the TREC evaluations of the 1990s.

    Kaszkiel and Zobel (1997) examined passage-level retrieval within TREC, demonstrating through empirical evaluation across multiple TREC collections that sub-document passage retrieval outperformed full-document retrieval for most information needs, particularly when documents were long and topically heterogeneous. Their work identified the fundamental tension between retrieval precision (short passages, precise matching) and indexing coverage (must index all relevant passages), which remains the core chunking trade-off today.

    Hearst (1997) introduced TextTiling as an unsupervised algorithm for linear text segmentation based on vocabulary cohesion, computing lexical similarity between successive text blocks and identifying sharp similarity drops as topic boundaries. TextTiling is an early form of semantic chunking; modern embedding-based semantic chunkers replace the bag-of-words vocabulary cohesion measure with dense cosine similarity computed by transformer encoders, but the boundary detection principle is identical.

    Ponte and Croft (1998) established language modelling for IR, treating document retrieval as computing the probability that a document's language model generated the query. This probabilistic framework for passage retrieval informed the development of BM25 (Robertson & Zaragoza, 2009) and subsequent probabilistic retrieval models, providing the theoretical foundation against which dense retrieval was later compared.

    Karpukhin et al. (2020) "Dense Passage Retrieval for Open-Domain Question Answering" (Facebook AI Research) trained a bi-encoder (DPR) on question-passage pairs from Wikipedia and demonstrated that dense vector retrieval substantially outperformed BM25 for open-domain Q&A. DPR used 100-word passages as chunks — a deliberate design choice made after ablating passage length — that influenced subsequent practice. The Lewis et al. (2020) RAG paper used the same 100-word passage corpus, cementing this as an early industry default and implicitly establishing 100 words (~130-150 tokens) as the reference chunk size for the dense retrieval era.

    Chen et al. (2023) "Dense X Retrieval: What Retrieval Granularity Should We Use?" systematically examined retrieval granularity, comparing sentence-level, passage-level, and proposition-level (atomic factual statement) chunks across multiple Q&A benchmarks. The proposition-level approach yielded superior recall for fine-grained factoid questions at the cost of higher indexing compute, establishing the proposition as a useful alternative granularity for high-precision retrieval tasks. This work directly inspired LlamaIndex's PropositionNodeParser.

    The "Chunking Strategies for Multimodal AI Systems" preprint (arXiv:2512.00185, December 2024) established the first systematic taxonomy of multimodal chunking approaches — text-only, image-parallel, layout-aware, and modality-fusion strategies — finding that modality-aware strategies significantly outperformed text-only baselines on mixed-content corpora, with layout-aware strategies providing the greatest gains on structured documents containing tables and figures.

    The ACL 2025 paper "The Chunking Paradigm: Recursive Semantic for RAG Optimization" (ICNLSP 2025) demonstrated that Recursive Semantic Chunking (RSC) — combining recursive hierarchical splitting with semantic boundary detection at each recursion level — consistently outperformed both Recursive Character Text Splitter and standard semantic chunking across multiple document types and query categories, providing the most comprehensive empirical validation of any chunking strategy family to date.

  ## Current Landscape (2026)

    As of mid-2026, chunking has evolved from an ad-hoc preprocessing step into a structured engineering discipline with benchmarks, evaluation frameworks, and published strategy comparisons.
    - **Semantic chunking mainstream adoption** — LlamaIndex and LangChain both provide stable SemanticChunker implementations; Databricks' "Ultimate Guide to Chunking Strategies" (2024) documents enterprise adoption patterns; semantic chunking is recommended for high-value, structured corpora while recursive splitting remains the default for mixed or unstructured content.
    - **Multimodal chunking at the frontier** — vision-guided chunking (arXiv:2506.16035, June 2025) and MultiDocFusion (arXiv:2604.12352, 2025) demonstrated that LMM-based chunking substantially improves RAG accuracy for financial, scientific, and engineering documents; LlamaParse operationalises this commercially.
    - **Hierarchical parent-child indexing in production** — the small-to-big retrieval pattern has become a standard architectural pattern in LlamaIndex-based systems, balancing the dual-granularity problem without multiple independent indices.
    - **Long-context models changing the calculus** — Gemini 1.5 Pro (1M tokens), Claude 3.5 (200k tokens), and similar long-context models enable very large chunks or even full-document context for small-to-medium corpora; evidence suggests retrieval remains superior for precision and auditability, but optimal chunk size is increasing.
    - **Evaluation tooling maturing** — RAGAS, TruLens, and ARES now provide automated chunking-sensitive RAG evaluation, enabling practitioners to empirically compare strategies on their own corpora.
    - **Specialised chunking libraries emerging** — dedicated chunking packages (Chonkie, semantic-text-splitter) focus exclusively on this problem domain, providing performance-optimised implementations and comprehensive strategy APIs beyond what general RAG frameworks offer.
    - **Graph RAG integration** — Microsoft's Graph RAG pattern (2024) establishes chunking as the first step in a pipeline that additionally extracts entities and relationships from chunks to build a knowledge graph, requiring chunking strategies that preserve entity co-occurrence context.

  ## UK Context

    Chunking as a technical concern is embedded in UK AI research and enterprise AI deployments across multiple sectors.
    - **University of Edinburgh** — the informatics group has published on text segmentation and passage retrieval extending back to the TREC era; the institute was a key venue for early work on probabilistic passage retrieval and topic segmentation. The TREC participation of Edinburgh's groups in the 2000s directly informed passage-level indexing approaches.
    - **University of Cambridge Language Technology Group** — contributed to early passage retrieval and NLP text segmentation research; current work on document intelligence and multilingual NLP is relevant to structure-aware chunking for non-English corpora.
    - **Alan Turing Institute** — the AI for Science programme covers document intelligence including layout-aware parsing and chunking for scientific literature; the institute also funds research on trustworthy AI in healthcare, where chunking quality directly impacts clinical decision support safety.
    - **NHS applications** — NHS Trusts are experimenting with RAG over clinical guidelines (NICE, BNF), where chunking alignment to clinical section structure directly affects safety-relevant retrieval accuracy. The NHS Greater Manchester Integrated Care Board has piloted RAG-based clinical decision support; Sheffield Teaching Hospitals NHS Foundation Trust and Leeds Teaching Hospitals NHS Trust have evaluated LLM assistants over clinical documentation.
    - **Legal and professional services** — UK law firms (Allen & Overy, Clifford Chance, Linklaters) and Big Four professional services firms (KPMG UK, Deloitte UK, PwC UK) deploy chunking-based knowledge retrieval for case law research, tax advisory, and compliance systems.
    - **UK Government Digital Service (GDS)** — has published guidance on AI in public sector digital services referencing [[Retrieval-Augmented Generation]] architectures including chunking design; the UK AI Safety Institute monitors RAG pipeline design as part of frontier AI evaluation.
    - **Media and publishing** — the BBC, Guardian, and major UK publishers are exploring RAG over their archive corpora, where paragraph- or section-level chunking of structured archive content and handling of historical language variation are primary design challenges.

  ## Future Directions (2026-2030)

    The trajectory of chunking research and engineering points toward five major developments over the 2026-2030 horizon:
    - **Adaptive Dynamic Chunking** — future systems will automatically select chunking strategy and hyperparameters based on document type, content structure, and query characteristics, eliminating manual strategy selection; model-driven chunking configuration will be learned from downstream retrieval performance signals in end-to-end feedback loops.
    - **Fully Multimodal Corpora** — as document corpora increasingly contain mixed text, image, audio, and video, chunking will generalise to segment and embed multimodal content units, with modality-aware boundary detection; tables, charts, diagrams, and voice recordings will be chunked with the same sophistication as text.
    - **Knowledge Graph-Integrated Chunking** — chunks will be enriched at creation time with entity-linking to a [[Knowledge Graph]], enabling hybrid retrieval combining vector similarity with graph-structure traversal; this convergence (Graph RAG, Microsoft, 2024) will require chunking strategies that preserve entity co-occurrence within chunks.
    - **Regulatory-Compliant Provenance Tracking** — in regulated industries, every chunk will carry full provenance metadata (source document, version, author, jurisdiction, validation date) enabling complete audit trails from generated answer back through retrieved chunk to authoritative source; this is a prerequisite for healthcare and financial services RAG under evolving EU and UK regulatory frameworks.
    - **On-Device Chunking for Privacy** — as edge AI matures, chunking and embedding of sensitive personal documents (health records, financial documents, personal notes) will execute on-device without transmitting source content to cloud services, enabling privacy-preserving RAG for sensitive personal data applications under GDPR and UK GDPR constraints.

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

  - ## Chunking and Evaluation: The RAGAS Framework in Practice
    - Chunking quality cannot be assessed in isolation; it must be evaluated through the downstream RAG pipeline metrics it affects. The RAGAS framework (Es et al., 2023; arXiv:2309.15217) has become the dominant open-source toolkit for automated RAG evaluation, and understanding its metrics in relation to chunking decisions is essential for data-driven chunking optimisation:
    - **Context Precision** measures the fraction of retrieved chunk content that is actually relevant to the question. High context precision indicates that the chunking strategy produces tightly scoped chunks that are retrieved when relevant and not retrieved when irrelevant. A fixed-size chunk that includes both the relevant sentence and three irrelevant paragraphs will score lower on context precision than a semantic chunk that contains exactly the topically coherent passage answering the query.
    - **Context Recall** measures the fraction of the ground-truth answer content that appears in the retrieved chunks. If the answer requires information split across a chunk boundary (due to insufficient overlap), context recall will be low even if each individual chunk is internally coherent. Insufficient overlap, overly small chunks, and poor boundary placement are primary causes of low context recall.
    - **Faithfulness** measures the degree to which the generated answer is supported by (entailed by) the retrieved context. Chunking affects faithfulness indirectly: if retrieved chunks provide insufficient context (too small) or irrelevant noise (too large or poorly bounded), the generator is more likely to hallucinate beyond the retrieved evidence. Semantic chunks that provide topically coherent context tend to produce higher faithfulness scores.
    - **Answer Relevance** measures how directly the generated answer addresses the question, independent of factual accuracy. Chunking affects answer relevance primarily through context provision quality: rich, on-topic retrieved context enables the generator to produce focused, relevant answers; diffuse, noisy context leads to hedging, topic drift, or incomplete answers.
    - **Practical evaluation workflow**: (1) define a representative evaluation question set (50-200 questions) and corresponding ground-truth answers from the target corpus; (2) run the full RAG pipeline with the candidate chunking strategy; (3) compute RAGAS metrics; (4) compare against baseline (typically recursive splitting); (5) identify bottleneck metric (context precision vs. recall) to diagnose whether chunks are too coarse (low precision) or too fine (low recall); (6) adjust strategy or hyperparameters accordingly. This loop typically requires 3-5 iterations to reach a stable optimum for a given corpus type.
    - **Benchmark corpora** for chunking evaluation include: BEIR (Thakur et al., 2021) — 18 heterogeneous retrieval datasets spanning biomedical, financial, legal, and news domains; Natural Questions (NQ) and TriviaQA for open-domain factoid retrieval; MS MARCO Passage Ranking for general web passage retrieval; and QMSum / MeetingBank for conversational transcript retrieval.

  - ## Chunking Economics and Scaling Considerations
    - At production scale, chunking decisions have significant cost implications across multiple dimensions of the AI infrastructure stack:
    - **Index storage cost** — the vector index size is proportional to the number of chunks times the embedding dimension (typically 768-3072 float32 values per chunk = 3-12 KB per chunk). A corpus of 1 million 512-token chunks with 10% overlap generates approximately 1.1 million vectors; at 3072 dimensions (4 bytes each), this is ~13.5 GB of raw vector data before the ANN index overhead. Quantisation (reducing float32 to int8 or binary) can compress this 4-32× at modest quality cost. Pinecone, Weaviate, and Qdrant charge by vector count and dimension; chunking granularity directly affects monthly index hosting cost.
    - **Embedding compute cost** — embedding each chunk requires one forward pass through the embedding model. For API-based embedding (OpenAI text-embedding-3-large at $0.00013 per 1000 tokens as of mid-2026), a 10-million-token corpus with 512-token non-overlapping chunks costs approximately $2.60 to embed. With 10% overlap (~19,500 chunks), the cost is $1.30 (overlap reduces document coverage per chunk but increases chunk count by 11%). Semantic chunking requires embedding every sentence for breakpoint detection — potentially 10-50× more tokens than the final chunk count, substantially increasing indexing cost for large corpora.
    - **Retrieval latency** — a larger index (more chunks) increases ANN query latency. HNSW-indexed corpora with millions of vectors typically query in 1-10ms; above 100 million vectors, query latency increases and requires distributed index sharding. Smaller chunk sizes (more chunks per corpus) increase index size and query latency; larger chunks reduce chunk count but increase the chunk embedding inference latency (longer inputs to process per chunk).
    - **Re-indexing cost at update time** — when source documents are updated, affected chunks must be re-embedded and re-indexed. Smaller chunk sizes localise this cost: updating a 100-word paragraph requires re-embedding one small chunk; with 2048-token chunks, the same update may require re-embedding a large section, consuming 4-8× more compute. For frequently updated knowledge bases, finer-grained chunking reduces update cost proportionally.
    - **LLM context cost at generation time** — the top-k retrieved chunks are concatenated into the generation context. Larger chunks consume more context tokens, increasing the per-query LLM inference cost. At $15 per million input tokens (GPT-4 class models, mid-2026 pricing), retrieving 5 chunks of 1024 tokens each (5120 tokens context) costs $0.077 per query at 100 queries per second. Reducing chunk size to 256 tokens saves $0.059 per query — a significant saving at scale — if context recall does not suffer.

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

  - ## Strategy Selection Decision Matrix
    - Practitioners selecting a chunking strategy should use the following criteria. Each criterion maps to a recommended strategy or hyperparameter choice:
    - **Document type = prose (articles, reports, policies)** → Recursive splitting (512 tokens, 10% overlap) as baseline; upgrade to semantic chunking if RAGAS context precision is below 0.7 on evaluation set
    - **Document type = structured (technical manuals, legal contracts, regulatory filings)** → Structure-aware splitting (Markdown/HTML/legal hierarchy-aware); preserve section heading as chunk metadata
    - **Document type = mixed (PDFs with tables and figures)** → Vision-guided chunking (LlamaParse or equivalent multimodal parser) before recursive text splitting of extracted prose
    - **Document type = code** → Language-specific AST splitter (LangChain code splitters) at function/class boundaries; 512-1024 token chunks for inline documentation
    - **Query type = factoid (single-fact lookup)** → Smaller chunks (128-256 tokens) or proposition chunking; prioritise context precision
    - **Query type = analytical (multi-step synthesis)** → Larger chunks (512-1024 tokens) or parent-child hierarchy; prioritise context recall
    - **Query type = multi-hop (requires multiple passages)** → Hierarchical indexing with recursive retriever; Graph RAG for community-level synthesis
    - **Corpus size < 10k documents** → Try semantic chunking; compute cost is manageable
    - **Corpus size > 100k documents** → Recursive splitting as default; semantic chunking only for highest-value document subsets
    - **Update frequency = high (daily/hourly)** → Smaller chunks (256 tokens); re-indexing cost is proportional to chunk count but localised to updated passages
    - **Context window = large (>100k tokens)** → Can afford larger chunks and more chunks per query; experiment with 1024-2048 token chunks
    - **Context window = small (<8k tokens)** → Tight chunk size budget; prioritise precision, use 256-384 token chunks with 10% overlap, retrieve top-3 rather than top-5
    - **Regulatory/audit requirements** → Ensure every chunk carries document version, author, date, and section hierarchy metadata for complete provenance chains
    - **Privacy-sensitive data** → Prefer on-device embedding with local models; avoid cloud-based embedding APIs for chunks containing PII or confidential information
    - **Starting point for any new RAG project**: RecursiveCharacterTextSplitter at 512 tokens / 50 token overlap; evaluate with RAGAS; only invest in more complex strategies when empirical evidence justifies the additional complexity and cost

  - ## Chunking Anti-Patterns
    - Several common mistakes in chunking design consistently degrade RAG performance and should be avoided:
    - **Ignoring chunk overlap entirely** — zero overlap causes boundary artefacts where key phrases split between chunks are retrieved in neither; always use at least 5% overlap for any fixed-size splitting strategy
    - **Using character count instead of token count** — character-based chunk size estimates are unreliable because tokeniser vocabulary determines actual token count; a 1000-character chunk may be 200 tokens in English but 400+ tokens for tokeniser-dense languages or code
    - **Same chunk size for all document types** — a 512-token chunk works well for narrative prose but destroys table structure; a function-boundary chunk works for code but fragments prose; use type-appropriate strategies per document category
    - **Chunking PDFs without addressing text extraction quality** — raw pdfminer or pypdf extraction of complex PDFs frequently garbles column order, inserts page numbers mid-sentence, and loses table structure; pre-processing with a dedicated PDF parser is non-optional for production quality
    - **Embedding metadata alongside text in the same string** — including "Source: document_title.pdf" as a prefix in the chunk text contaminates the embedding with source-identification tokens that have no semantic relevance to the passage content; store metadata as separate structured fields, not as chunk text prefixes
    - **Using a different tokeniser for chunk size estimation and embedding** — if chunk size is estimated using GPT tokeniser (tiktoken) but the embedding model uses a BERT tokeniser (WordPiece), actual token counts per chunk will differ; truncation will occur for chunks exceeding the embedding model's actual limit
    - **Not evaluating chunking strategy changes empirically** — changing chunk size or strategy without measuring RAGAS metrics before and after; intuitions about "better" chunking are frequently wrong; always A/B evaluate against a question set that is representative of real production queries
    - **Chunking conversational text with document-oriented splitters** — dialogue transcripts should be chunked by speaker turn or episode boundary, not by paragraph; applying a Markdown splitter to a conversation log produces nonsensical chunk boundaries that destroy the Q&A adjacency structure
    - **Over-splitting for cost optimisation** — very small chunks (32-64 tokens) reduce embedding cost per chunk but dramatically increase index size, retrieval latency, and the number of irrelevant chunks returned per query; cost optimisation through chunk size reduction has diminishing returns and eventual negative returns
    - **Not re-chunking when upgrading embedding models** — when switching to a new embedding model with a different tokeniser or context window, the existing index must be rebuilt from scratch with the new model; mixed-model indices where some chunks were embedded with model A and others with model B produce unreliable retrieval because the embedding spaces are incompatible

  - ## Chunk Overlap in Depth
    - Overlap is the mechanism by which adjacent chunks share a boundary region, ensuring that phrases, sentences, or logical units that straddle a chunk boundary appear fully in at least one retrievable chunk. Understanding overlap in detail allows practitioners to configure it precisely rather than accepting defaults:
    - **Why overlap exists** — without overlap, a two-sentence phrase where the first sentence falls at the end of chunk N and the second at the start of chunk N+1 appears fragmented in both chunks. A query for the concept expressed across both sentences matches neither chunk precisely. Overlap ensures the complete phrase appears in either chunk N (extended beyond its nominal end) or chunk N+1 (starting before its nominal begin), or both.
    - **Symmetric vs. trailing overlap** — in most implementations, overlap is applied as trailing overlap: chunk N is extended by `overlap` tokens beyond its nominal endpoint, and chunk N+1 starts `overlap` tokens before its nominal startpoint (both point to the same token window). Some implementations use only trailing overlap on the preceding chunk; others use leading overlap on the following chunk; most use both (symmetric windowed overlap).
    - **Optimal overlap as a function of average sentence length** — if sentences average S tokens, setting overlap to S ensures that any complete sentence that straddles a boundary appears in full in at least one adjacent chunk. For English text with typical sentence length of 15-25 tokens, this suggests 20-30 token overlap for 256-token chunks, or 50-100 token overlap for 512-token chunks. The commonly cited 10-20% rule of thumb is consistent with this reasoning.
    - **Overlap and index size** — every token in the overlap region is stored twice (in both adjacent chunks). An overlap of 10% increases effective index size by approximately 10% relative to non-overlapping chunks (each additional overlap token adds to the total stored corpus). At 20% overlap, index size increases by approximately 20%. This cost is generally acceptable given the retrieval quality improvement, but must be accounted for in storage budget calculations.
    - **Overlap and duplicate retrieval** — with overlap, the same concept may appear in both chunk N (near its end) and chunk N+1 (near its beginning). If both chunks are retrieved for a query, the LLM context contains duplicate or near-duplicate information, wasting context window budget. De-duplication of retrieved chunks by cosine similarity (removing chunks with >0.95 cosine similarity to another retrieved chunk) addresses this at retrieval time.
    - **No overlap for time-series or sequential data** — for chunking sequential data where order must be strictly preserved (financial time series, IoT sensor streams, sequential log files), overlap may be undesirable as it creates temporal ambiguity. In these cases, non-overlapping fixed-size chunks with explicit sequence position metadata are preferred.

  - ## Cross-Reference: Chunking and Related Ontology Concepts
    - Chunking connects to several adjacent ontology concepts that practitioners using this knowledge graph should understand in relation to chunking:
    - [[Embedding Model]] — the model whose tokeniser determines chunk size limits; the model that converts chunk text to the dense vectors stored in the index; must be the same model used at query embedding time
    - [[Vector Database]] — the storage and retrieval system that indexes chunk embeddings; the target destination of the chunking and embedding pipeline output; examples: FAISS (in-process), Weaviate, Pinecone, Qdrant, pgvector, Chroma, Milvus
    - [[Retrieval-Augmented Generation]] — the broader pipeline architecture that chunking serves as the first stage of the offline indexing phase; chunking quality directly determines the ceiling of achievable RAG quality
    - [[RAG Pipeline]] — the end-to-end system that operationalises retrieval-augmented generation; chunking is one of the first stages of the offline pipeline component
    - [[Embedding Search]] — the retrieval mechanism that uses chunk embeddings to find semantically similar passages in response to an embedded query; depends on chunk embeddings generated from chunking output
    - [[Information Retrieval]] — the discipline within which passage-level retrieval (the parent concept of chunking-based RAG retrieval) was formalised; classical IR provides theoretical foundations (TF-IDF, BM25, language models) that inform how chunk representations are ranked
    - [[Context Window]] — the fundamental constraint that motivates chunking: LLMs cannot process arbitrarily long inputs; chunking ensures each retrievable unit fits within the embedding model context limit and contributes efficiently to the generator context budget
    - [[Knowledge Graph]] — an alternative or complementary knowledge representation to flat vector indices; Graph RAG combines chunking-based dense retrieval with knowledge graph traversal for multi-hop reasoning over structured entity relationships
    - [[Semantic Search]] — the retrieval modality enabled by chunking + embedding; contrasts with keyword-based search (BM25); chunking granularity directly determines the semantic specificity of retrievable units
    - [[Natural Language Processing]] — the broader discipline within which chunking sits as a text segmentation sub-task; NLP tools (sentence tokenisers, POS taggers, NER models) provide the linguistic analysis that informs structure-aware and semantic chunking strategies
    - [[GPTs and Custom Assistants]] — the application context where chunking-based RAG is most commonly deployed; custom GPTs and domain-specific assistants use chunked enterprise knowledge bases as their primary factual grounding mechanism
    - [[Document Indexing Pipeline]] — the broader system context within which chunking operates; the pipeline includes ingestion, parsing, chunking, embedding, indexing, and metadata storage as sequential or parallel stages
    - [[Approximate Nearest Neighbour Search]] — the core retrieval algorithm that operates over chunk embeddings at query time; HNSW, IVF, and ScaNN are common ANN index structures; chunk size affects the ANN index build time and query latency characteristics

- ### Provenance
  - sources:: Miller (1956) Psychological Review; Hearst (1997) Computational Linguistics; Karpukhin et al. (2020) EMNLP; Lewis et al. (2020) NeurIPS; Chen et al. (2023) arXiv:2312.06648; Tripathi et al. (2025) arXiv:2506.16035; https://www.firecrawl.dev/blog/best-chunking-strategies-rag; https://langcopilot.com/posts/2025-10-11-document-chunking-for-rag-practical-guide; https://www.digitalapplied.com/blog/rag-chunking-strategies-2026-retrieval-quality-playbook; https://community.databricks.com/t5/technical-blog/the-ultimate-guide-to-chunking-strategies-for-rag-applications/ba-p/113089; https://aclanthology.org/2025.icnlsp-1.15.pdf; https://developers.llamaindex.ai/python/framework/module_guides/loading/node_parsers/modules/; https://docs.langchain.com/oss/python/integrations/splitters
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
