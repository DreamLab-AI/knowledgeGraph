public:: true

# Coreference Resolution
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:coreference-resolution",
  "@type": "Page",
  "title": "Coreference Resolution",
  "vc:slug": "coreference-resolution",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:owl:class:natural-language-processing", "vc:label": "Natural Language Processing"},
    {"@id": "urn:visionflow:owl:class:natural-language-understanding", "vc:label": "Natural Language Understanding"},
    {"@id": "urn:visionflow:owl:class:named-entity-recognition", "vc:label": "Named Entity Recognition"},
    {"@id": "urn:visionflow:owl:class:information-extraction", "vc:label": "Information Extraction"},
    {"@id": "urn:visionflow:owl:class:question-answering", "vc:label": "Question Answering"},
    {"@id": "urn:visionflow:owl:class:knowledge-graph", "vc:label": "Knowledge Graph"},
    {"@id": "urn:visionflow:owl:class:transformer-architecture", "vc:label": "Transformer Architecture"},
    {"@id": "urn:visionflow:owl:class:large-language-model", "vc:label": "Large Language Model"},
    {"@id": "urn:visionflow:owl:class:machine-translation", "vc:label": "Machine Translation"},
    {"@id": "urn:visionflow:owl:class:entity-resolution", "vc:label": "Entity Resolution"},
    {"@id": "urn:visionflow:owl:class:semantic-parsing", "vc:label": "Semantic Parsing"},
    {"@id": "urn:visionflow:owl:class:text-mining", "vc:label": "Text Mining"},
    {"@id": "urn:visionflow:owl:class:relation-extraction", "vc:label": "Relation Extraction"},
    {"@id": "urn:visionflow:owl:class:document-summarisation", "vc:label": "Document Summarisation"},
    {"@id": "urn:visionflow:owl:class:bert", "vc:label": "BERT"},
    {"@id": "urn:visionflow:owl:class:anaphora-resolution", "vc:label": "Anaphora Resolution"},
    {"@id": "urn:visionflow:owl:class:word-embeddings", "vc:label": "Word Embeddings"},
    {"@id": "urn:visionflow:owl:class:mention-detection", "vc:label": "Mention Detection"},
    {"@id": "urn:visionflow:owl:class:span-representation", "vc:label": "Span Representation"},
    {"@id": "urn:visionflow:owl:class:retrieval-augmented-generation", "vc:label": "Retrieval Augmented Generation"},
    {"@id": "urn:visionflow:owl:class:slot-filling", "vc:label": "Slot Filling"},
    {"@id": "urn:visionflow:owl:class:dependency-parsing", "vc:label": "Dependency Parsing"},
    {"@id": "urn:visionflow:owl:class:part-of-speech-tagging", "vc:label": "Part-of-Speech Tagging"},
    {"@id": "urn:visionflow:owl:class:entity-linking", "vc:label": "Entity Linking"},
    {"@id": "urn:visionflow:owl:class:knowledge-graph-construction", "vc:label": "Knowledge Graph Construction"},
    {"@id": "urn:visionflow:owl:class:sentiment-analysis", "vc:label": "Sentiment Analysis"}
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:coreference-resolution",
  "@type": "Class",
  "label": "Coreference Resolution",
  "definition": "Coreference resolution is the natural language processing task of identifying all expressions in a text that refer to the same real-world entity, grouping noun phrases, pronouns, definite descriptions, and other referring expressions into coreference clusters so that downstream systems can maintain coherent entity representations across sentences and documents. It is a foundational subtask of information extraction, question answering, summarisation, and knowledge graph population, enabling models to track entities without re-identifying them from scratch at each mention.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:natural-language-processing",
      "label": "Natural Language Processing"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:natural-language-understanding", "label": "Natural Language Understanding"},
      {"@id": "urn:ngm:class:information-extraction", "label": "Information Extraction"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:mention-detection", "label": "Mention Detection"},
      {"@id": "urn:ngm:class:antecedent-scoring", "label": "Antecedent Scoring"},
      {"@id": "urn:ngm:class:mention-clustering", "label": "Mention Clustering"},
      {"@id": "urn:ngm:class:anaphora-resolution", "label": "Anaphora Resolution"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:named-entity-recognition", "label": "Named Entity Recognition"},
      {"@id": "urn:ngm:class:semantic-parsing", "label": "Semantic Parsing"},
      {"@id": "urn:ngm:class:dependency-parsing", "label": "Dependency Parsing"},
      {"@id": "urn:ngm:class:span-representation", "label": "Span Representation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"},
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
      {"@id": "urn:ngm:class:bert", "label": "BERT"},
      {"@id": "urn:ngm:class:word-embeddings", "label": "Word Embeddings"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:information-extraction", "label": "Information Extraction"},
      {"@id": "urn:ngm:class:question-answering", "label": "Question Answering"},
      {"@id": "urn:ngm:class:knowledge-graph-construction", "label": "Knowledge Graph Construction"},
      {"@id": "urn:ngm:class:document-summarisation", "label": "Document Summarisation"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval Augmented Generation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:entity-resolution", "label": "Entity Resolution"},
      {"@id": "urn:ngm:class:machine-translation", "label": "Machine Translation"},
      {"@id": "urn:ngm:class:sentiment-analysis", "label": "Sentiment Analysis"},
      {"@id": "urn:ngm:class:slot-filling", "label": "Slot Filling"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:named-entity-recognition", "label": "Named Entity Recognition"},
      {"@id": "urn:ngm:class:text-mining", "label": "Text Mining"},
      {"@id": "urn:ngm:class:entity-linking", "label": "Entity Linking"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:natural-language-understanding", "label": "Natural Language Understanding"},
      {"@id": "urn:ngm:class:relation-extraction", "label": "Relation Extraction"},
      {"@id": "urn:ngm:class:part-of-speech-tagging", "label": "Part-of-Speech Tagging"}
    ]
  },
  "sameAs": [],
  "quality": 0.91,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "FullEnrichment"
  }
}
```

- ### Definition
  - [[Coreference Resolution]] is the [[Natural Language Processing]] task of identifying all expressions in a text — noun phrases, pronouns, proper names, and definite descriptions — that refer to the same real-world entity, and grouping those expressions into coreference clusters called coreference chains. When a document states "Dr Jane Smith published her results, and the lead researcher later defended the methodology at the conference," a coreference resolution system must determine that "her," "the lead researcher," and any subsequent pronoun all refer to the same entity as "Dr Jane Smith." This seemingly simple act of co-indexing is a prerequisite for coherent document-level semantic understanding: without it, downstream systems must re-identify each entity from scratch at every mention, losing the narrative thread and producing errors in tasks ranging from [[Question Answering]] and [[Document Summarisation]] to [[Machine Translation]] (where pronoun gender and number depend on the antecedent) and [[Knowledge Graph Construction]] (where entity nodes must be consistently identified across a corpus). Modern coreference resolution systems decompose the task into two subtasks — mention detection and antecedent ranking — and use end-to-end neural models based on learned span representations from [[Transformer Architecture]] encoders such as [[BERT]] and SpanBERT. The task encompasses nominal coreference (a name coreferring with a noun phrase), pronominal coreference (pronoun coreferring with any mention), bridging references (a part coreferring with the whole), and zero anaphora (in pro-drop languages, where null subjects corefer with previously introduced entities). Coreference resolution is a component of [[Information Extraction]] pipelines and a direct prerequisite for accurate [[Relation Extraction]] and [[Slot Filling]] across sentence boundaries, and it is increasingly important in [[Retrieval Augmented Generation]] (RAG) pipelines where chunks of long documents must have entity references resolved before retrieval matching to avoid the "Chicago" / "the city" disambiguation failure mode.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:CoreferenceResolution
  - owl-role:: Concept | NLPTask | InformationExtractionSubtask
  - owl-inferred:: artificial-intelligence:DiscoursePhenomenon, artificial-intelligence:EntityTrackingMechanism, artificial-intelligence:StructuredPredictionTask
  - belongs-to-domain:: [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - is-subclass-of:: [[Natural Language Processing]], [[Natural Language Understanding]]
  - has-part:: [[Mention Detection]], [[Antecedent Scoring]], [[Mention Clustering]], [[Anaphora Resolution]], [[Span Representation]]
  - requires:: [[Named Entity Recognition]], [[Semantic Parsing]], [[Dependency Parsing]], [[Span Representation]], [[Word Embeddings]]
  - enables:: [[Information Extraction]], [[Question Answering]], [[Knowledge Graph Construction]], [[Document Summarisation]], [[Retrieval Augmented Generation]], [[Knowledge Graph]]
  - implements:: [[Entity Tracking]], [[Discourse Coherence]], [[Anaphora Resolution]]
  - depends-on:: [[Transformer Architecture]], [[BERT]], [[Named Entity Recognition]]
  - supports:: [[Entity Resolution]], [[Machine Translation]], [[Sentiment Analysis]], [[Slot Filling]], [[Relation Extraction]]
  - uses:: [[Transformer Architecture]], [[Large Language Model]], [[BERT]], [[Word Embeddings]], [[Part-of-Speech Tagging]]
  - contrasts-with:: [[Text Mining]], [[Entity Linking]], [[Named Entity Recognition]]
  - related-to:: [[Natural Language Processing]], [[Natural Language Understanding]], [[Relation Extraction]], [[Dependency Parsing]], [[Part-of-Speech Tagging]], [[Knowledge Graph]], [[Entity Linking]]
  - standardized-by:: [[CoNLL-2012 Shared Task]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:hasPart ai:MentionDetection))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:hasPart ai:AntecedentScoring))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:hasPart ai:MentionClustering))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:hasPart ai:AnaphoraResolution))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:hasPart ai:SpanRepresentation))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:hasPart ai:CoreferenceChain))
  ## Dependency Relationships
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:requires ai:NamedEntityRecognition))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:requires ai:DependencyParsing))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:requires ai:SpanRepresentation))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:dependsOn ai:TransformerArchitecture))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:dependsOn ai:WordEmbeddings))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:dependsOn ai:Tokenisation))
  ## Capability Relationships
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:enables ai:InformationExtraction))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:enables ai:QuestionAnswering))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:enables ai:KnowledgeGraphConstruction))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:enables ai:DocumentSummarisation))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:enables ai:RetrievalAugmentedGeneration))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:supports ai:MachinTranslation))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:supports ai:EntityResolution))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:supports ai:SentimentAnalysis))
  ## Implementation Relationships
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:implements ai:EntityTracking))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:implements ai:DiscourseCoherence))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:uses ai:TransformerArchitecture))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:uses ai:LargeLanguageModel))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:uses ai:SpanBERT))
  ## Reduction Relationships
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:reducesTo ai:BinaryAntecedentClassification))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:reducesTo ai:MentionRankingProblem))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:reducesTo ai:ClusteringProblem))
  ## Variant Relationships
      SubClassOf(ai:PronominalCoreferenceResolution
        ObjectSomeValuesFrom(ai:isVariantOf ai:CoreferenceResolution))
      SubClassOf(ai:EventCoreferenceResolution
        ObjectSomeValuesFrom(ai:isVariantOf ai:CoreferenceResolution))
      SubClassOf(ai:CrossDocumentCoreferenceResolution
        ObjectSomeValuesFrom(ai:isVariantOf ai:CoreferenceResolution))
      SubClassOf(ai:ZeroAnaphoraResolution
        ObjectSomeValuesFrom(ai:isVariantOf ai:CoreferenceResolution))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:evaluatedBy ai:CoNLLF1Metric))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:evaluatedBy ai:MUCMetric))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:evaluatedOn ai:OntoNotes50))
      SubClassOf(ai:CoreferenceResolution
        ObjectSomeValuesFrom(ai:evaluatedOn ai:CorefUD12))

  ## About

  ### Linguistic and Cognitive Foundations

  Human language is fundamentally efficient: rather than restating an entity's full name at every mention, speakers use pronouns, definite descriptions, and demonstratives that refer back to previously introduced entities. This economy of reference is possible because both speaker and hearer maintain a shared mental model of the entities discussed in a conversation or text — a discourse model or situation model in the terminology of cognitive science. Coreference resolution is the computational task of reconstructing this discourse model from the surface form of text, identifying which expressions are co-referential (i.e., pick out the same real-world entity) so that downstream processing can operate on the entity level rather than the surface string level.

  The linguistic study of reference and anaphora has a long history. Noam Chomsky's Government and Binding theory (1981) provided a formal account of which noun phrases can be bound by (i.e., corefer with) which antecedents in a syntactic structure, formulated as Principles A, B, and C of binding theory: reflexive pronouns (Principle A) must be locally bound; personal pronouns (Principle B) must be locally free; R-expressions like proper names (Principle C) must be globally free (not bound by anything). These syntactic constraints prune the space of possible antecedents and are incorporated into rule-based coreference systems. Centering Theory (Grosz, Joshi & Weinstein, 1995) provided a discourse-level complement: it models entity salience (which entity is most "in focus" at each point in a discourse) and shows that pronoun use preferentially tracks the most salient entity (the "backward-looking centre"), explaining why definite pronoun use and discourse coherence are correlated.

  From a cognitive science perspective, coreference resolution is part of the broader problem of situation model construction — maintaining a representation of who is doing what to whom where and when throughout a text. Psycholinguistic experiments (Kintsch, 1998; Zwaan & Radvansky, 1998) show that readers build multi-dimensional situation models that integrate coreference with causal, spatial, temporal, and intentional information. NLP systems typically operationalise only the identity dimension (which expressions pick out the same entity) while leaving spatial, causal, and intentional tracking to other modules, making coreference resolution a partial implementation of the full cognitive process.

  ### The Task in NLP Practice

  In practical NLP systems, coreference resolution typically proceeds over tokenised, sentence-segmented text that has been processed by a syntactic parser or part-of-speech tagger. The task is to produce a set of coreference clusters (also called coreference chains or entity clusters), where each cluster is a set of text spans that all refer to the same discourse entity. The key decisions are: (1) which spans are valid mentions (mention detection); (2) for each mention, which earlier mentions are potential antecedents (antecedent candidate generation); (3) which antecedent, if any, each mention resolves to (antecedent ranking); and (4) how individual pairwise links are aggregated into globally consistent clusters (clustering).

  The interaction between [[Named Entity Recognition]] and coreference resolution is intimate. Named entities (persons, organisations, locations) are the most common participants in coreference chains in news and formal text; NER identifies the "anchor" mentions (first full mentions of entities) that pronouns and descriptions subsequently refer back to. Modern end-to-end systems jointly learn NER-like mention detection and coreference antecedent scoring, making the pipeline implicit. However, in domain-specific settings (clinical notes, legal documents), explicit NER with domain ontologies (UMLS, FIBO) provides higher-precision mention detection than joint models trained on general-domain corpora.

  The relationship between coreference resolution and [[Entity Linking]] (also called entity disambiguation or named entity linking) is complementary: entity linking maps a mention to a canonical knowledge base entry (a Wikidata QID, a UMLS concept) without necessarily identifying other mentions that corefer with it; coreference resolution clusters mentions within a document without necessarily grounding them in an external knowledge base. In production [[Information Extraction]] pipelines, the two are often combined: coreference resolution clusters document-internal mentions, and entity linking grounds the representative mention of each cluster to an external KB, enabling cross-document entity aggregation for [[Knowledge Graph Construction]].

  Coreference resolution is a core discourse-level phenomenon: language is efficient precisely because speakers rely on shared context and previously introduced referents, using pronouns and descriptions in place of full noun phrases. A document might introduce "the British Prime Minister" and then refer to them as "she," "the PM," "the official," and "her" across subsequent paragraphs. A coreference resolution system must build and update an entity model that connects all these surface forms to a single discourse entity, distinct from other entities in the text. This capacity for entity tracking is what separates superficial text processing from genuine document-level understanding.

  The task has a long history in linguistics and artificial intelligence. Jerry Hobbs (1978) proposed one of the earliest computational algorithms for pronoun resolution, using syntactic tree structure to rank candidate antecedents by tree-traversal proximity. The research field was galvanised by US government-sponsored MUC (Message Understanding Conference) evaluations in the 1990s, which introduced the first coreference annotation guidelines and defined the CoNLL evaluation metrics (precision, recall, F1 over mention clusters). The shift from rule-based and feature-engineered systems to neural approaches occurred gradually through the 2010s, culminating in the end-to-end neural coreference resolution model of Lee et al. (2017), which jointly learned mention detection and antecedent scoring using LSTMs and attention over span representations without any hand-crafted features. The adoption of pretrained contextual representations (ELMo, then BERT and SpanBERT) dramatically improved span encoding quality, with SpanBERT (Joshi et al., 2020) achieving 79.6 F1 on OntoNotes 5.0 by pretraining specifically on span boundary prediction tasks.

  The central challenge of coreference is the combinatorial explosion: a document with n candidate mentions yields O(n²) candidate antecedent pairs to score, making exact inference prohibitively expensive. Modern systems address this through aggressive mention pruning (retaining only the top-λn spans by a learned mention score), antecedent truncation (scoring only the k most recent candidates per mention), and efficient clustering heuristics that trade small accuracy losses for orders-of-magnitude inference speedup. The Maverick system (Martinelli & Barba, ACL 2024) demonstrated that a carefully designed pipeline with 500 million parameters achieves 83.6 CoNLL-F1 on OntoNotes — matching or exceeding systems with 13 billion parameters — with 170× faster inference and 167× lower memory usage, while remaining competitive with large generative LLMs under gold mention conditions.

  ## Components / Architecture

  ### Mention Detection
  The first stage identifies candidate referring expressions (mentions) in the text. A span-based approach enumerates all spans up to a maximum length L and scores each using a learned function over the span's contextual embedding (typically the concatenation of start token, end token, and attention-weighted span content from a [[BERT]]-family encoder). Spans above a threshold or in the top-k by score are retained as candidate mentions. The challenge is balancing recall (retaining genuine mentions) against precision (pruning spurious spans), since downstream clustering inherits mention detection errors. Modern systems achieve mention F1 of ~85–90% on OntoNotes for gold-boundary evaluation.

  ### Antecedent Scoring
  For each candidate mention m_i, a compatibility score is computed for each preceding candidate mention m_j (j < i) as a potential antecedent. The scoring function combines a mention score for m_i, a mention score for m_j, and a pairwise compatibility score s_a(m_i, m_j) computed from the concatenation, element-wise product, and distance features of the two span embeddings. A dummy antecedent (representing no coreference link, i.e. the mention is a singleton) is included to allow the model to abstain. Training uses log-likelihood of the highest-scoring gold antecedent for each mention.

  ### Mention Clustering
  The cluster assignment is induced greedily from pairwise antecedent links: mention m_i is assigned to the cluster of its highest-scoring antecedent (if that score exceeds the dummy), and singletons form their own clusters. Globally consistent clustering can be imposed via integer linear programming or graph partitioning, but greedy approaches with antecedent pruning are standard in practice. Word-level coreference (Dobrovolskii, 2021) reformulates clustering at the word level rather than the span level, reducing quadratic complexity significantly.

  ### Span Representation
  The quality of mention embeddings is the dominant factor in system performance. SpanBERT improved upon BERT by adding a span boundary objective during pretraining, encouraging the model's token representations at span boundaries to encode the span's full content. Span embeddings are typically formed as g(m) = [x_start; x_end; hat_x_m; phi(m)], where x_start and x_end are boundary token representations, hat_x_m is a soft head attention over the span, and phi(m) contains width and speaker features. In LLM-based systems, the full document or a long-context window is processed by a GPT-4 class model with chain-of-thought prompting to enumerate clusters directly.

  ### Zero Anaphora and Pro-Drop Languages
  In pro-drop languages (Japanese, Chinese, Italian, Spanish), subjects are frequently omitted from surface form, requiring the system to predict empty nodes (null subjects) before they can be linked to antecedents. The CRAC 2025 Shared Task on Multilingual Coreference Resolution, using CorefUD 1.2, includes languages with varying levels of zero anaphora and evaluates end-to-end systems that handle empty node prediction as an integrated step before coreference linking.

  ## Use Cases / Major Families

  ### Approaches by Era

  **Rule-Based (pre-2000)**: Hobbs' algorithm (1978) traversed parse trees in a left-to-right breadth-first order to find the nearest matching NP as antecedent. Subsequent rule-based systems (Lappin & Leass 1994, the Markov Logic Network approach) incorporated features such as syntactic binding constraints (Principles A, B, C from Government and Binding theory), gender/number agreement, and animacy. Stanford's Sieve system (Lee et al., 2011) combined high-precision deterministic rules in a cascade, achieving strong performance without any learning.

  **Statistical Feature-Based (2000–2015)**: Conditional random fields and maximum entropy classifiers over rich feature sets (distance, head match, gender/number agreement, syntactic path, named entity class). The CoNLL-2012 shared task (Pradhan et al., 2012) established OntoNotes 5.0 as the canonical benchmark and accelerated statistical system comparison.

  **Neural Mention-Ranking (2015–2018)**: Clark & Manning (2015, 2016) introduced neural mention-ranking models with entity-level global features. Lee et al. (2017) eliminated the pipeline with an end-to-end model that jointly learned mentions and antecedents; this architecture remained dominant for three years.

  **Pretrained Transformer Systems (2018–2022)**: Fine-tuning BERT and SpanBERT on OntoNotes gave large accuracy improvements (SpanBERT: 79.6 F1, Joshi et al. 2020). Wu et al. (2020) reformulated coreference as machine reading comprehension, achieving 83.1 F1 at high computational cost. Dobrovolskii (2021) introduced word-level coreference to reduce O(n²) to near-linear in token count.

  **LLM-Augmented and Efficient Systems (2022–2025)**: Maverick (Martinelli & Barba, ACL 2024) achieves 83.6 CoNLL-F1 with ~500M parameters via a two-stage pipeline that scores mentions efficiently using a task-adapted encoder, outperforming 13B parameter baselines. CorefInst (2025) demonstrated instruction-tuned multilingual coreference resolution, the first LLM fine-tuned in a controlled inference manner for both overt and zero mentions across 30+ languages. xCoRe (EMNLP 2025) addressed cross-context coreference where entity mentions span multiple documents or dialogue turns.

  ### Applications

  - **Information Extraction / Knowledge Graph Population**: Accurate [[Relation Extraction]] across sentence boundaries requires coreference resolution to link "Google" in sentence 1 with "the company" in sentence 3 before extracting a relation. [[Knowledge Graph Construction]] pipelines (Wikidata, enterprise KGs) rely on coreference to avoid creating duplicate entity nodes from variant surface forms.
  - **[[Question Answering]] and Reading Comprehension**: Multi-hop QA (HotpotQA, MuSiQue) requires tracking entities across multiple supporting passages; coreference resolution is a prerequisite for correct cross-passage entity grounding.
  - **[[Document Summarisation]]**: Abstractive summarisers must track entities to produce coherent summaries with appropriate pronoun and description choices; missing coreference links lead to summaries with dangling pronouns or unnecessary entity re-introductions.
  - **[[Machine Translation]]**: Pronoun translation between languages with grammatical gender or case inflection requires knowing the antecedent's gender, number, animacy, and formality. English "they" may translate differently depending on antecedent number; French "elle" vs "il" depends on antecedent grammatical gender.
  - **[[Retrieval Augmented Generation]] (RAG)**: When a long document is chunked for vector retrieval, coreference-unresolved chunks become ambiguous ("the city" without "Chicago" co-occurring). Coreference resolution or contextual chunk expansion (prepending the antecedent mention to each chunk) substantially improves retrieval precision and downstream QA accuracy (arXiv:2507.07847, 2025).
  - **Dialogue and Conversational AI**: In multi-turn dialogues, entities introduced in early turns are referred to by pronoun or description in later turns. End-to-End Dialog Neural Coreference systems (2025) balance model size and accuracy for large-scale real-time conversational deployment.
  - **Biomedical Literature Mining**: Clinical notes and research papers use complex entity reference patterns; biomedical coreference resolution enables accurate drug-disease relation extraction and adverse event detection across clinical paragraphs.

  ## Academic Context

  The study of coreference and anaphora has dual roots in formal linguistics and computational pragmatics. In formal linguistics, binding theory (Chomsky, 1981) established formal constraints on which NPs can corefer with which antecedents based on syntactic configuration (Principles A, B, C). Centering Theory (Grosz, Joshi & Weinstein, 1995) provided a discourse model connecting entity salience to coherence, predicting that pronoun use tracks the most salient entity (the "backward-looking centre"). Both theories informed early computational systems.

  The NLP community's engagement with coreference intensified through the MUC (Message Understanding Conference) evaluations (1987–1998), which first operationalised the task for information extraction. MUC-6 (1995) introduced named entity and coreference annotation; MUC-7 (1997) refined the task. The ACE (Automatic Content Extraction) evaluations (2000–2008) extended coreference to include entity type constraints and relation argument tracking. The SemEval-2010 Task 1 addressed coreference in multiple languages. The CoNLL-2012 Shared Task (Pradhan et al., 2012) on the OntoNotes 5.0 corpus established the current gold-standard benchmark: OntoNotes 5.0 contains 2,802 training / 343 validation / 348 test documents totalling approximately 1 million words of English newswire, broadcast news, web text, and conversation, annotated with coreference chains.

  The transition from rule-based to statistical learning occurred with the Berkeley Coreference Resolution System (Haghighi & Klein, 2009, 2010), which used generative models over mention features. The neural revolution began with Clark & Manning (2015, 2016), who applied deep learning to mention-pair and entity-level scoring. The end-to-end model of Lee, He, Lewis & Zettlemoyer (2017) — trained entirely on raw text with no syntactic pre-processing — became the field's canonical neural architecture. SpanBERT (Joshi, Chen, Liu, Weld & Zettlemoyer, 2020) delivered the largest single accuracy jump by adopting pretrained contextual span representations. The Maverick paper (Martinelli & Barba, ACL 2024) demonstrated that architectural efficiency, not parameter count, governs practical performance, achieving SOTA with 500M parameters vs. 13B alternatives.

  Key benchmarks beyond OntoNotes include: CoNLL-2012 (English), CorefUD 1.2 (17+ languages, used in CRAC 2025), PreCo (predicate coreference, 38k documents), Litbank (literary text, 100 novels), and ECB+ (event coreference in news). The OntoNotes CoNLL-F1 metric averages MUC, B3, and CEAFe to give a balanced evaluation of precision and recall across both mention detection and cluster assignment quality.

  ## Current Landscape (2026)

  Coreference resolution in 2026 is characterised by a bifurcation between (a) efficient purpose-built systems for production deployment and (b) large language model prompting approaches for zero-shot or few-shot generalisation.

  On the efficient-system front, Maverick (ACL 2024) set the efficiency frontier: 83.6 CoNLL-F1 on OntoNotes with 500M parameters, 170× faster inference, and 167× lower memory vs. prior SOTA. The CorPipe system (ÚFAL Prague) has consistently led multilingual shared tasks (CRAC 2024, CRAC 2025), using multilingual encoder fine-tuning (mDeBERTa-v3, XLM-RoBERTa) with joint empty node prediction and antecedent maximisation; CorPipe24-single achieved best single-model performance on CorefUD 1.2.

  On the LLM front, CorefInst (2025, TACL) demonstrated that instruction-tuning a multilingual LLM for coreference with a controlled inference method (structuring outputs as ordered cluster lists) outperforms prior unsupervised and multilingual-encoder systems and, under gold mention conditions, approaches supervised neural SOTA — though fine-tuned span-based systems remain superior in precision for English. ImCoref-CeS (2025) improved lightweight pipeline performance via LLM-based checker-splitter post-processing that corrects obvious cluster errors.

  The application of coreference to RAG pipelines has become a significant research direction in 2025–2026, driven by the observation that naive chunking of long documents for vector retrieval breaks coreference chains, degrading retrieval recall and QA accuracy for entities referred to by pronoun or short description in retrieved chunks (arXiv:2507.07847).

  Long-document coreference remains partially unsolved: current models exhibit quadratic or near-quadratic memory in document length, making them impractical for 10,000+ token technical documents without windowing or streaming heuristics (Learning to Ignore, Xia et al., 2020). The xCoRe (EMNLP 2025) cross-context coreference task extends the problem to multi-document and dialogue settings where entity chains span multiple input contexts.

  Zero anaphora handling in pro-drop languages is an open frontier: CRAC 2025 explicitly targets zero anaphora in languages such as Japanese, Chinese, Spanish, and Turkish, requiring systems to predict empty subject nodes before linking them, adding a generative component to otherwise discriminative pipelines.

  Evaluation validity concerns have emerged: Zeldes et al. (2025) demonstrated that OntoNotes-F1 scores are inflated by the benchmark's specific genre composition and annotation inconsistencies, calling for broader evaluation over PreCo, Litbank, and CorefUD to assess genuine generalisation.

  ## UK Context

  UK academic contributions to coreference and discourse processing span several decades and institutions.

  **Edinburgh**: The University of Edinburgh has been a long-standing centre for computational pragmatics and discourse processing. The School of Informatics hosts researchers in dialogue systems and natural language generation who study how entity reference patterns interact with dialogue coherence. Grosz, Joshi & Weinstein's Centering Theory, which underpins many coreference models' entity salience assumptions, is directly related to Edinburgh's discourse coherence research tradition. The Edinburgh NLP Group has contributed to multilingual coreference through CoNLL shared task participation and resources for low-resource languages.

  **Cambridge**: The Cambridge Language Technology Laboratory has produced work on neural discourse models and entity-level text understanding, contributing to the theoretical underpinnings of cross-sentence coreference in neural language models. The joint Cambridge/DeepMind effort on language model interpretability has probed how BERT-family models internally represent coreference chains.

  **UCL (University College London)**: UCL's NLP group (under Mirella Lapata and colleagues) has contributed to document-level NLP tasks including coreference-dependent summarisation and discourse parsing, demonstrating how coreference resolution quality directly impacts abstractive summarisation coherence.

  **Oxford**: The Natural Language Processing group at Oxford has worked on cross-lingual and low-resource information extraction, including coreference, for the medical and legal domains relevant to UK public services.

  **Manchester**: The University of Manchester's text mining group has applied coreference resolution to biomedical literature, particularly for clinical NLP in the context of NHS electronic health records — a high-stakes deployment environment with significant UK government investment through the Turing Health Programme.

  **Northern English Industrial Context**: The Turing Institute's Health Data Research UK (HDRUK) programme funds NLP work at Leeds, Newcastle, and Sheffield that relies on coreference resolution for extracting structured information from clinical notes and discharge summaries. Sheffield's NLP group (historically associated with the GATE framework) has contributed to production-grade information extraction tools that include coreference components deployed in NHS-connected research pipelines. The GATE framework (Cunningham et al., Sheffield) included one of the earliest production-ready coreference components for English clinical text. Newcastle University's Digital Institute applies entity tracking and coreference in its smart data analytics work for regional public sector organisations.

  ## Discourse-Level Context: Why Coreference Matters for Understanding

  ### The Entity Grid Model and Discourse Coherence

  An influential theoretical framework for understanding the role of coreference in discourse coherence is the Entity Grid model (Barzilay & Lapata, 2008). The entity grid represents a document as a matrix where rows are sentences and columns are entities (identified by coreference clusters), with each cell indicating the entity's grammatical role (Subject, Object, Other, Absent) in that sentence. A coherent document should exhibit smooth entity transitions — entities that are mentioned as subjects in one sentence are likely to appear as subjects or objects in the next, rather than disappearing and reappearing unpredictably. The entity grid model was shown to predict human coherence judgements significantly better than bag-of-words baselines, demonstrating that entity reference patterns (and therefore coreference resolution) are integral to discourse coherence — not merely a convenience for downstream tasks.

  This insight motivates the use of coreference resolution in text quality evaluation, machine translation quality estimation, and automatic essay scoring: a text that correctly manages entity reference (using pronouns efficiently for recently mentioned salient entities, reintroducing entities by full name after long gaps) will score higher on entity grid-based coherence metrics than a text that randomly alternates between full name repetition and pronoun use without regard to salience.

  ### Coreference and Discourse Parsing

  Coreference resolution interacts with other discourse-level phenomena studied in Discourse Parsing, including discourse connectives (therefore, however, because), discourse relations (Elaboration, Contrast, Cause, Condition), and rhetorical structure (RST, PDTB frameworks). Entities that are the subjects of causally related clauses across a discourse segment tend to form coreference chains that cross clause boundaries; tracking these cross-clause entity chains is a prerequisite for identifying the agents and patients of discourse-level causal relations (e.g., "The strike disrupted production. The company lost £50M. Shareholders called for the CEO to resign" — all three sentences are causally connected through shared entity chains). Discourse parsers that incorporate entity tracking from coreference resolution achieve significantly better relation classification than those operating on surface text alone.

  In the context of [[Document Summarisation]], summarisation quality metrics that account for entity coherence (such as the SUPERT metric and the EntitySumm evaluation framework) require accurate coreference resolution to assess whether a system summary correctly tracks the same entities as the source document and maintains consistent referential form (not over-introducing entities by full name in every sentence, nor over-using pronouns that a reader might not resolve without the full document context).

  ## Practical Engineering Considerations

  ### Deployment Architecture for Production Coreference

  Deploying coreference resolution in production NLP pipelines requires careful attention to latency, throughput, and memory constraints that differ substantially from research benchmarks (which typically evaluate on a fixed test set without time constraints). Key engineering decisions include:

  **Model Selection**: For latency-sensitive applications (real-time dialogue, chat), lightweight models (FCoref, FastCoref using DeBERTa-small backbones ~180M parameters) achieve sub-100ms latency per document with 78–80% CoNLL-F1, a reasonable trade-off. For batch processing (corpus-scale [[Knowledge Graph Construction]], overnight processing of legal documents), Maverick-class models (83+ F1) are appropriate. For highest accuracy in low-volume, high-value settings (clinical note processing, contract analysis), SpanBERT-large fine-tuned models maximise precision at the cost of 3–5× higher inference time.

  **Document Windowing**: Standard models have a maximum context window (typically 512 tokens for BERT-based models, 4096 for long-context variants). For long documents, models either process overlapping windows and merge cluster assignments across windows (requiring post-processing to reconcile entities that span window boundaries), or use streaming inference with bounded-memory approaches (Xia et al., 2020) that maintain a fixed-size entity memory and drop low-salience mentions. The "Chunked Coref" approach segments documents at paragraph boundaries and runs inference per paragraph, then applies cross-paragraph entity linking as a post-processing step — simple and parallelisable but loses very long-range coreference signals.

  **Post-Processing and Error Correction**: Neural coreference systems produce clusters from span embeddings, which can include obvious errors (singleton proper name clusters that should be merged, or spurious pronoun links to implausible antecedents). LLM-based checker-splitter post-processing (ImCoref-CeS, 2025) uses a small number of targeted LLM calls to verify and correct borderline cluster assignments, improving precision without requiring end-to-end retraining. Rule-based sieve post-processing (speaker constraints: "I" always refers to the current speaker in dialogue; appositive merging: "Dr Smith, the cardiologist" creates a two-mention cluster) adds reliable high-precision links.

  **RAG Integration Pattern**: In [[Retrieval Augmented Generation]] pipelines, coreference resolution is applied to source documents before indexing. The canonical approach is "context carryforward": for each retrieved chunk, if the chunk contains a pronoun or short definite description with an unresolved antecedent, the antecedent mention is prepended to the chunk text before embedding. This increases chunk text length by 10–20% but dramatically improves retrieval recall for pronoun-heavy documents. A recent alternative is "entity-annotated chunks": each chunk is augmented with a structured entity register (e.g., "{PERSON: Jane Smith | POSITION: CEO | ORG: Acme Corp}") derived from coreference resolution plus [[Named Entity Recognition]], giving the retriever entity-level features beyond raw text similarity.

  **Evaluation in Domain-Specific Deployments**: OntoNotes-trained models degrade significantly in domain transfer — a model achieving 83% F1 on OntoNotes news text may achieve only 68–72% F1 on clinical notes (different pronoun density, different entity type distribution, abbreviations) or 65–70% on legal contracts (passive constructions, nested entity references, boilerplate pronoun patterns). Domain adaptation via continued pretraining on unlabelled domain text followed by fine-tuning on a small annotated domain corpus (50–500 documents) is the standard approach, with active learning (selecting the most informative documents for annotation) reducing annotation cost substantially.

  ### Integration with Knowledge Graph Pipelines

  Coreference resolution is a first-class component in the [[Knowledge Graph Construction]] pipeline architecture. The standard four-stage IE pipeline for KG population is: (1) Document preprocessing (tokenisation, sentence splitting, co-reference resolution); (2) [[Named Entity Recognition]]; (3) [[Relation Extraction]]; (4) Entity linking and KB population. Without step 1, [[Relation Extraction]] in step 3 is limited to within-sentence entity pairs, missing the majority of long-range cross-sentence relations (which are estimated to account for 40–60% of all relations in newswire corpora by DocRED benchmark analysis). Coreference resolution substitutes pronoun and description mentions with their canonical entity names before relation extraction, allowing relation extractors to operate on consistently-named entity pairs regardless of the surface form of the original text.

  Enterprise KG construction tools (IBM Watson Knowledge Studio, SpaCy's relation extraction pipelines, Amazon Comprehend's entity-relation pipeline) include integrated coreference resolution as a preprocessing step. Open-source pipelines (NLP4Science, GROBID for scientific literature) either include lightweight coreference (Stanford CoreNLP's Sieve system) or provide hooks for external coreference annotators. The [[Wikidata]] automated editing bot ecosystem relies on coreference-resolved entity mentions for safely linking article text to QID entities.

  ## Future Directions (2026–2030)

  - **Integrated Mention-Free Coreference**: Rather than detecting and scoring explicit mention spans, future systems may operate directly over continuous token representations, using attention patterns in transformer layers as implicit coreference signals — effectively learning to resolve coreference as a latent variable during LLM pretraining rather than a supervised downstream task. Initial evidence from mechanistic interpretability research suggests that specific attention heads in [[Transformer Architecture]] models specialise in tracking entity references across context windows.
  - **Multilingual and Cross-Lingual Generalisation**: The CorefUD dataset and CRAC shared tasks are driving development of unified multilingual coreference models. By 2028, a single system with >75 CoNLL-F1 across 30+ languages (including pro-drop languages with zero anaphora) is a realistic target using massively multilingual pretrained encoders with language-adaptive fine-tuning.
  - **Long-Document and Cross-Document Coreference**: Extending reliable coreference resolution to 50,000+ token documents and to cross-document chains (where the same entity appears across a corpus of related articles) remains a major open challenge. Memory-efficient architectures using streaming mention clustering and bounded-memory approaches (Xia et al., 2020) are the leading research direction.
  - **Event Coreference and Predicate Coreference**: Beyond entity coreference, event coreference — determining that "the 2022 London Bridge incident" and "the attack on London Bridge" refer to the same event — is a closely related task with distinct challenges (no clear "head" for clustering) that is gaining attention through PreCo and ECB+ benchmarks.
  - **Coreference in Multimodal Contexts**: As [[Large Language Model]] systems become multimodal, coreference between visual entities (a person shown in an image) and textual mentions ("she," "the woman") requires cross-modal entity tracking — an emerging frontier in vision-language model research.
  - **RAG Pipeline Integration**: As retrieval-augmented systems become the dominant architecture for enterprise LLM deployment, coreference resolution pre-processing of document chunks is expected to become a standard component of production RAG stacks, with purpose-built lightweight models (DistilBERT-scale) serving as the coreference resolution microservice.
  - **Formal Evaluation Reform**: The NLP community is moving towards multi-dataset evaluation protocols that combine OntoNotes, PreCo, Litbank, CorefUD, and domain-specific benchmarks to give more robust assessments of generalisation, replacing single-benchmark leaderboard rankings that may overfit to OntoNotes annotation conventions.

  ## Research & Literature

  1. Hobbs, J. R. (1978). Resolving pronoun references. *Lingua*, 44(4), 311–338.
  2. Grosz, B. J., Joshi, A. K., & Weinstein, S. (1995). Centering: A framework for modeling the local coherence of discourse. *Computational Linguistics*, 21(2), 203–225.
  3. Lappin, S., & Leass, H. J. (1994). An algorithm for pronominal anaphora resolution. *Computational Linguistics*, 20(4), 535–561.
  4. Pradhan, S., et al. (2012). CoNLL-2012 shared task: Modeling multilingual unrestricted coreference in OntoNotes. *EMNLP-CoNLL 2012*, 1–40.
  5. Lee, H., et al. (2011). Stanford's multi-pass sieve coreference resolution system at the CoNLL-2011 shared task. *CoNLL 2011*, 28–34.
  6. Haghighi, A., & Klein, D. (2010). Coreference resolution in a modular, entity-centered model. *NAACL 2010*, 385–393.
  7. Clark, K., & Manning, C. D. (2016). Deep reinforcement learning for mention-ranking coreference models. *EMNLP 2016*, 2256–2262.
  8. Lee, K., He, L., Lewis, M., & Zettlemoyer, L. (2017). End-to-end neural coreference resolution. *EMNLP 2017*, 188–197. arXiv:1707.07045.
  9. Lee, K., He, L., & Zettlemoyer, L. (2018). Higher-order coreference resolution with coarse-to-fine inference. *NAACL 2018*, 687–692.
  10. Joshi, M., Chen, D., Liu, Y., Weld, D. S., & Zettlemoyer, L. (2020). SpanBERT: Improving pre-training by representing and predicting spans. *Transactions of the Association for Computational Linguistics*, 8, 64–77.
  11. Wu, W., Wang, F., Yuan, A., Wu, F., & Li, J. (2020). CorefQA: Coreference resolution as query-based span prediction. *ACL 2020*, 6953–6963.
  12. Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). BERT: Pre-training of deep bidirectional transformers for language understanding. *NAACL 2019*, 4171–4186.
  13. Dobrovolskii, V. (2021). Word-level coreference resolution. *EMNLP 2021*, 7670–7675. arXiv:2109.04127.
  14. Xia, P., Sedoc, J., & Van Durme, B. (2020). Learning to ignore: Long document coreference with bounded memory neural networks. *EMNLP 2020*. arXiv:2010.02807.
  15. Cattan, A., et al. (2021). Realistic evaluation principles for cross-document coreference resolution. *EMNLP 2021 Findings*, 3412–3427. arXiv:2106.04192.
  16. Martinelli, F., & Barba, E. (2024). Maverick: Efficient and accurate coreference resolution defying recent trends. *ACL 2024*. arXiv:2407.21489.
  17. Novák, M., & Žabokrtský, Z. (2025). CorPipe at CRAC 2025: Evaluating multilingual encoders for multilingual coreference resolution. arXiv:2509.17858.
  18. Gupta, A., et al. (2025). CorefInst: Leveraging LLMs for multilingual coreference resolution. *Transactions of the Association for Computational Linguistics*. doi:10.1162/TACL.a.593.
  19. Huang, Y., et al. (2025). Improving LLMs' learning of coreference resolution. arXiv:2509.11466.
  20. Zhang, H., et al. (2025). xCoRe: Cross-context coreference resolution. *EMNLP 2025*. arXiv from ACL Anthology:2025.emnlp-main.1737.
  21. Li, R., et al. (2025). From ambiguity to accuracy: The transformative effect of coreference resolution on retrieval-augmented generation systems. arXiv:2507.07847.
  22. Zeldes, A., et al. (2025). The validity of coreference-based evaluations of natural language understanding. arXiv:2602.16200.
  23. Cunningham, H., et al. (2002). GATE: A framework and graphical development environment for robust NLP tools and applications. *ACL 2002*, 168–175.
  24. Jurafsky, D., & Martin, J. H. (2023). *Speech and Language Processing* (3rd ed. draft). Chapter 22: Coreference Resolution. Stanford University.
  25. Pradhan, S., et al. (2011). CoNLL-2011 shared task: Modeling unrestricted coreference in OntoNotes. *CoNLL 2011*, 1–27.
  26. Chomsky, N. (1981). *Lectures on Government and Binding*. Foris Publications. (Binding theory foundation.)
  27. Xia, P., & Van Durme, B. (2021). What do we expect from multiple-choice QA systems? Potential and limits of multi-hop reasoning with coreference. *ACL 2021 Findings*.

  ## Formal Analysis

  ### Computational Formulation

  The core computational problem in coreference resolution can be formalised as follows. Given a document D consisting of tokens w_1, ..., w_n, a candidate mention set M = {m_1, ..., m_T} is defined as all contiguous token spans up to a maximum width L (typically L=10 to 30 in practice). The task is to partition M ∪ {ε} (where ε is a dummy "no antecedent" option) into coreference clusters C_1, ..., C_k such that each mention in a cluster refers to the same discourse entity.

  In the end-to-end neural formulation of Lee et al. (2017), a scoring function decomposes into three components:

      s(m_i, m_j) = s_m(m_i) + s_m(m_j) + s_a(m_i, m_j)

  where s_m(m) is the "mention score" (the probability that span m is a valid mention, vs spurious), and s_a(m_i, m_j) is the "antecedent score" (the pairwise compatibility between m_i and candidate antecedent m_j). The dummy antecedent ε has score s(m_i, ε) = 0; m_i is assigned to the highest-scoring antecedent if max_{j<i} s(m_i, m_j) > 0, else it forms a new singleton cluster.

  Training minimises the negative log-likelihood of the marginalized probability of the gold coreference partition:

      L = -Σ_i log Σ_{j ∈ GOLD(m_i)} exp(s(m_i, m_j)) / Σ_{j' ∈ CAND(m_i)} exp(s(m_i, m_j'))

  This jointly trains mention detection and antecedent ranking end-to-end, without separate pipeline stages.

  ### Evaluation Metrics

  The standard evaluation uses three complementary cluster-level metrics, averaged into the CoNLL-F1 score:

  - **MUC** (Message Understanding Conference): Counts the minimum number of link cuts needed to transform the predicted clusters into the gold clusters; essentially a link-level F1. Biased towards large clusters (missing singletons are not penalised).
  - **B³ (B-cubed)**: For each mention, computes precision and recall relative to the intersection of its predicted cluster and its gold cluster, then averages over all mentions. More balanced than MUC for varying cluster sizes.
  - **CEAFe (Constrained Entity-Aligned F-Measure)**: Finds the one-to-one mapping between predicted and gold entity clusters that maximises overlap, using entity-level F1. Penalises over-splitting (too many small clusters) more strongly than B³.
  - **CoNLL-F1**: Simple average of MUC, B³, and CEAFe F1 scores. The de facto standard for OntoNotes comparisons since CoNLL-2012.
  - **LEA (Link-based Entity Aware)**: A newer metric (Moosavi & Strube, 2016) that weights each cluster by its importance (size) while measuring both the coverage of entity mentions and the quality of cluster boundaries; more robust to annotation inconsistencies than CoNLL-F1.

  ### Linguistic Typology of Reference

  Coreference resolution must handle a rich typology of reference phenomena that differ in their linguistic marking and computational difficulty:

  - **Nominal coreference**: A proper name or noun phrase refers to an entity previously introduced by a different proper name or noun phrase. "The Prime Minister" coreferring with "Rishi Sunak." Largely handled well by modern systems when both mentions are in the same genre.
  - **Pronominal coreference**: A pronoun (he, she, it, they, this) refers to a previously introduced entity. Requires gender, number, and animacy agreement checking plus pragmatic salience estimation. Singular "they" for gender-neutral antecedents is a known challenge for agreement-based systems.
  - **Demonstrative coreference**: Demonstrative pronouns (this, that, these, those) refer to entities or propositions in prior discourse; propositional coreference (where "that" refers to a whole clause, not just an NP) requires event-level entity tracking.
  - **Zero anaphora**: Present in pro-drop languages (Japanese, Chinese, Spanish, Italian, Turkish) where subject NPs are omitted when recoverable from context. Requires systems to first predict empty nodes (null subjects) before linking them, adding a generative step to discriminative pipelines.
  - **Bridging (associative anaphora)**: "We entered the hall. The ceiling was very high." Here "the ceiling" does not corefer with "the hall" but refers to the ceiling of the hall — an entity that is inferable from but not identical to the antecedent. Bridging is rarely addressed in standard benchmarks but is critical for complete document understanding.
  - **Event coreference**: "The explosion destroyed three buildings. The incident left 15 injured." Here "the incident" coreferres with "the explosion." Event coreference is evaluated on ECB+ and is increasingly important for news analysis and [[Knowledge Graph Construction]].

  ## Challenges and Open Problems

  ### Annotation Disagreement and Gold Standard Quality

  A persistent challenge in coreference resolution is the inherent subjectivity and complexity of coreference annotation. Even expert annotators achieve inter-annotator agreement (IAA) of only 82–90% Cohen's kappa on OntoNotes-style coreference, meaning that approximately 10–18% of annotation decisions are genuinely ambiguous by human standards. This annotation noise constitutes a ceiling on supervised model performance: a model that perfectly learned the annotation patterns of one annotator would score ~90% against another annotator's annotations. The OntoNotes annotation guidelines make specific decisions (not annotating singletons, not annotating predicative nominals, specific rules for appositives and copula constructions) that affect which mentions are in scope and therefore what the CoNLL-F1 metric actually measures. Zeldes et al. (2025, arXiv:2602.16200) systematically demonstrated that OntoNotes CoNLL-F1 scores are poor predictors of performance on downstream tasks that depend on coreference, calling for domain-specific evaluation to replace single-benchmark rankings.

  ### Rare and Hard Coreference Phenomena

  Standard benchmark models perform well on frequent, straightforward coreference patterns (pronouns to nearby named entities in newswire) but degrade substantially on rare or structurally complex phenomena:

  - **Split antecedents**: "John and Mary left the building. They were arguing." Here "they" has a split antecedent (the collective of John and Mary), requiring the system to form a set-level representation rather than a single-mention antecedent.
  - **Implicit reference**: "The company went bankrupt. Employees lost their savings." Here "employees" does not explicitly corefer with anything but implicitly refers to the employees of the bankrupt company — a form of bridging that requires world knowledge and commonsense inference rather than surface matching.
  - **Quantifier scope and generic reference**: "No doctor prescribes medicine without considering the patient" — "the patient" is a generic non-referential use that should NOT be placed in a coreference chain with any specific patient mention in the discourse, but surface-form matchers often incorrectly link it.
  - **Singletons**: Mentions that refer to an entity mentioned only once in a document. Standard datasets omit singleton annotation, but singletons are common in real-world documents. Systems that lack explicit singleton modelling tend to incorrectly link singletons to spurious antecedents when fine-tuned to avoid false negatives on the training distribution.

  ### Computational Scalability

  The quadratic O(n²) complexity of standard span-ranking coreference models (in the number of candidate mention spans n) makes them impractical for very long documents. A 10,000-token document might have 50,000 candidate spans (all spans up to width 10), giving 2.5 billion candidate antecedent pairs before pruning — even with aggressive pruning to the top 3,000 mentions, the antecedent scoring matrix is 9M entries. This memory cost (several GB for SpanBERT-large models) and quadratic compute time have limited deployment to documents of 1,000–3,000 tokens for most production systems. Long-document approaches (Xia et al., 2020; streaming coreference with bounded entity registers) accept approximation in exchange for practical scalability, but introduce errors when entity references span the streaming window boundary. This remains one of the most important open engineering challenges in the field as document lengths in LLM-era applications grow.

  ## Benchmarks, Datasets, and Shared Tasks

  ### Primary English Benchmarks

  - **OntoNotes 5.0 (CoNLL-2012 split)**: The gold standard benchmark for English coreference since the CoNLL-2012 shared task. Contains ~1M tokens from newswire (Wall Street Journal, Reuters), broadcast news (CNN), broadcast conversation (MSNBC), web blogs, telephone conversation (Switchboard), and Bible (religious text). Annotated with identity coreference chains for named entities, common noun phrases, and pronouns. The CoNLL-2012 train/dev/test split (2802/343/348 documents) is used by all modern systems. Best F1 in 2026: ~83.6% (Maverick).
  - **PreCo**: A large-scale English coreference dataset with 38,000 documents from primary-school reading passages, designed to test systems on commonsense knowledge and predicate coreference. Less training-set-overfit than OntoNotes due to different domain and style.
  - **Litbank**: Coreference annotations on 100 literary novels from Project Gutenberg; tests generalisation to literary language with long-range reference, complex character interactions, and non-standard pronoun usage. OntoNotes-trained systems degrade significantly on Litbank, revealing genre dependence.
  - **ECB+**: Event coreference benchmark based on English news; 982 documents from newsclusters.com, annotated for both entity and event coreference.
  - **GAP (Gendered Ambiguous Pronoun)**: Evaluation set focused on challenging gender-ambiguous pronoun coreference (Wikipedia text), used to test bias in coreference systems with respect to gendered language.

  ### Multilingual Benchmarks

  - **CorefUD 1.2**: The primary multilingual coreference dataset used in CRAC 2024/2025 shared tasks. Contains 17+ languages including Czech, German, Polish, Turkish, Japanese, Spanish, and English, in Universal Dependencies format. Each corpus has different annotation conventions and levels of zero anaphora.
  - **ARRAU**: Anaphora Resolution and Understanding corpus; multilingual, with fine-grained annotation including bridging and discourse deixis.
  - **SemEval-2010 Task 1**: Multilingual coreference (Dutch, English, German, Italian, Spanish) that established early cross-lingual benchmarking.

  ### Key Shared Tasks

  - **MUC-6 / MUC-7 (1995, 1997)**: First operational coreference evaluation, defining the MUC metric.
  - **ACE (2000–2008)**: Extended coreference to typed entities within information extraction.
  - **CoNLL-2011 / CoNLL-2012**: Established OntoNotes as the canonical benchmark; the 2012 task included English, Arabic, and Chinese.
  - **CRAC 2022/2023/2024/2025**: EMNLP shared tasks on multilingual coreference using CorefUD data, progressively expanding language coverage and zero anaphora handling.

  ## Standards and Toolkits

  ### Production Toolkits

  - **Stanford CoreNLP**: The longest-running production-grade NLP suite, including the Sieve-based coreference resolution system (Lee et al., 2011) for English. Though superseded in accuracy by neural systems, it remains widely deployed in industry pipelines due to its Java/REST API accessibility and comprehensive output format.
  - **spaCy**: Python NLP framework with a neural coreference extension (spaCy-experimental, Coreferee component); designed for production deployment with streaming document processing. NeuralCoref (HuggingFace) was the popular precursor; spaCy's neural coref component is its successor.
  - **AllenNLP (Allen Institute for AI)**: Research framework that hosted the end-to-end neural coreference model (Lee et al., 2017/2018) as a reference implementation; widely used for research prototyping and as a benchmark comparison target.
  - **Hugging Face Transformers**: The primary fine-tuning platform for SpanBERT, LingMess, and Maverick-class models; model cards on the Hugging Face Hub include sapienzanlp/maverick-mes-ontonotes for deployment-ready coreference inference.
  - **GATE (General Architecture for Text Engineering)**: Sheffield-developed open-source framework including ANNIE (coreference resolution component) for production text engineering; widely deployed in UK public sector and NHS NLP pipelines.
  - **FastCoref**: Lightweight fast coreference resolution library optimised for long documents, using FCoref and LingMess models; designed for the RAG use case of resolving coreference in chunked document retrieval.

  ### Annotation Tools and Schemes

  - **CATMA (Computer Assisted Text Markup and Analysis)**: Annotation framework used in digital humanities coreference annotation projects.
  - **Brat**: Web-based annotation tool used extensively for CoNLL and OntoNotes-style coreference annotation on new domains.
  - **OntoNotes annotation guidelines (Hovy et al., 2006)**: Define the annotation scope (which types of NPs are annotated, singleton treatment, copula handling, appositives) that governs OntoNotes and most English coreference datasets.
  - **Universal Anaphora (UA) guidelines**: An effort to harmonise coreference annotation across languages and corpora, enabling the CorefUD 1.2 multilingual resource.

  ## Key Terminology

  - **Coreference**: The linguistic relation in which two or more expressions in a text refer to the same real-world entity; distinct from co-indexing in formal semantics, which has broader scope.
  - **Mention**: A text span (noun phrase, pronoun, proper name, or definite description) that can potentially refer to an entity; candidate mentions are all such spans enumerated by the system.
  - **Antecedent**: The earlier mention (in textual order) to which a later mention is resolved; the antecedent "anchors" the coreference chain.
  - **Coreference Chain (Cluster)**: The equivalence class of all mentions linked to the same discourse entity; the output of a coreference resolution system is a set of non-overlapping chains.
  - **Anaphora**: A general term for expressions that depend on prior context for their interpretation; pronouns are the prototypical anaphors; coreference is the relation established between an anaphor and its antecedent.
  - **Zero Anaphora**: Omitted subject NPs in pro-drop languages (Japanese, Chinese, Spanish) that must be resolved to previous mentions; requires empty node prediction before coreference linking.
  - **Bridging Reference**: A reference to an entity that is inferable from but not identical to a previously mentioned entity (e.g. "the door" after mention of "the house"); less commonly addressed than identity coreference.
  - **CoNLL-F1**: The standard evaluation metric, averaging MUC, B³, and CEAFe F1 scores across predicted coreference clusters, balancing mention-level and cluster-level precision and recall.
  - **Mention Detection**: The subtask of identifying and scoring all candidate referring expression spans; a prerequisite for both pairwise antecedent scoring and end-to-end neural systems.
  - **Span-Ranking**: The dominant neural architecture paradigm (Lee et al., 2017): score all mention spans, prune to top-k, then score antecedent pairs for retained mentions; jointly trained end-to-end.
  - **Singleton**: A mention that does not corefer with any other mention in the document; forms a cluster of size one. Many datasets omit singletons from annotation, creating a training-evaluation mismatch when systems encounter them at inference time.
  - **Mention Pruning**: The step that reduces the O(n²) candidate span set to a tractable size by retaining only the top-λn spans by mention score; λ is typically 0.3–0.4 of document tokens. This trades recall for efficiency and is a key hyperparameter in span-based systems.
  - **Higher-Order Inference**: Updating entity cluster representations iteratively by re-encoding each mention given its current cluster's centroid embedding; Lee et al. (2018) showed marginal accuracy gains but high computational cost; subsequent work (Kirstain et al., 2021) showed the gain is largely illusory when using SpanBERT.
  - **Pro-drop Language**: A language (e.g. Japanese, Spanish, Italian) where subject pronouns can be omitted when inferable from context, creating zero anaphora that must be recovered before coreference linking; a major challenge for multilingual coreference systems.
  - **Discourse Entity**: A representation of a real-world entity as maintained in a reader's (or model's) mental model during text processing; the theoretical referent of coreference chains in discourse semantics (Heim, 1982; Kamp & Reyle, 1993).
  - **Entity Tracking**: The cognitive and computational process of maintaining and updating the salience and properties of discourse entities across a text; coreference resolution is the primary mechanism by which NLP systems implement entity tracking.
  - **SpanBERT**: A pretrained transformer model (Joshi et al., 2020, TACL) that extended BERT pretraining with a span boundary objective — training the model to predict the content of masked contiguous spans from their boundary token representations — yielding substantially better span-level representations than BERT for coreference, NER, and QA tasks; achieved 79.6 CoNLL-F1 on OntoNotes and became the dominant backbone for span-based coreference systems from 2020 to 2023.
  - **End-to-End Coreference**: A coreference resolution paradigm (Lee et al., 2017) where mention detection and antecedent scoring are jointly trained without a separate NER or parsing pipeline; the model learns to identify valid mentions and resolve them in a single forward pass, simplifying the system architecture and allowing gradients to flow through the mention detection into the encoder.
  - **OntoNotes 5.0**: The primary coreference benchmark corpus, part of the OntoNotes project (Weischedel et al.), containing ~1 million words of English text from six genres annotated with coreference chains, named entities, parse trees, and semantic roles; the CoNLL-2012 train/dev/test split of OntoNotes defines the standard evaluation setting for English coreference.
  - **CoNLL-2012 Shared Task**: The competition (Pradhan et al., 2012) that established OntoNotes 5.0 as the canonical coreference benchmark, defined the CoNLL-F1 metric, and attracted submissions from 24 teams; the winning system achieved 60.17 CoNLL-F1, compared to ~83.6 for Maverick (2024), illustrating 12 years of progress.
  - **Centering Theory**: A discourse model (Grosz, Joshi & Weinstein, 1995) that formalises entity salience — which entity is most in focus at each discourse point — and predicts that the most salient entity (the backward-looking centre, Cb) is typically realised by the most reduced referring expression (pronoun > definite NP > full name); a theoretical foundation for pronoun resolution heuristics.
  - **Maverick**: The state-of-the-art efficient coreference system (Martinelli & Barba, ACL 2024) that achieves 83.6 CoNLL-F1 on OntoNotes with 500M parameters, 170× faster inference and 167× lower memory compared to prior SOTA, by using a two-stage pipeline with efficient mention extraction and a lightweight antecedent scorer that avoids the quadratic bottleneck of earlier span-ranking systems.
  - **Coreferee**: A production-oriented coreference module for spaCy (v3+) that provides a lightweight neural coreference component compatible with spaCy's pipeline API, enabling easy integration of coreference into existing spaCy-based NLP pipelines; trained on OntoNotes and supports English, French, German, and Polish.

  ## Multilingual and Cross-Lingual Coreference

  ### Language-Specific Challenges

  Coreference resolution presents qualitatively different challenges across languages, reflecting underlying differences in grammar, reference convention, and morphological marking:

  - **Germanic languages (German, Dutch, Swedish)**: Grammatical gender (masculine, feminine, neuter) must agree between pronouns and their antecedents, providing strong agreement features that constrain resolution. However, German has three grammatical genders that often diverge from natural gender ("das Mädchen" — the girl — is grammatically neuter), creating traps for agreement-based systems. German also allows longer-range topicalisation and scrambling of sentence constituents, making syntactic distance-based heuristics less reliable.
  - **Romance languages (French, Spanish, Italian, Portuguese)**: Pro-drop phenomena are moderate in Spanish and Italian (subject pronoun can be dropped), severe in Portuguese (very high zero-anaphora frequency), and absent in French (obligatory subject pronoun). Agreement in number and gender is marked on verbs and adjectives, providing rich feature signals. Clitic object pronouns (Spanish "lo vi" — I saw him) require syntactic analysis to locate the clitic and identify the entity it modifies.
  - **Slavic languages (Czech, Polish, Russian)**: Rich morphological case systems provide explicit syntactic role information (nominative, accusative, genitive, dative, instrumental, locative) that constrains antecedent selection; the same noun can appear in radically different surface forms depending on case. OntoNotes-style coreference resolution for Czech (PDT-Coref dataset) achieves ~10% lower F1 than English models of similar architectural complexity, reflecting the harder morphological matching problem.
  - **East Asian languages (Chinese, Japanese, Korean)**: Very high pro-drop rates (up to 60% of subject NPs are omitted in Japanese conversation), no grammatical gender, no morphological number agreement on pronouns. Chinese has very few dedicated pronoun forms; entity tracking relies almost entirely on discourse salience and zero anaphora. Coreference in these languages requires robust empty node prediction and discourse coherence modelling beyond what English training data provides. The CRAC shared tasks explicitly target these challenges through the CorefUD 1.2 multilingual corpus.

  ### Cross-Lingual Transfer

  Cross-lingual coreference resolution asks whether models trained on resource-rich languages (English, German) transfer to low-resource languages. The CorPipe approach (Novák & Žabokrtský, 2025) uses a massively multilingual encoder (mDeBERTa-v3) fine-tuned on all available CorefUD languages jointly, achieving substantially better performance on low-resource languages than monolingual models trained on the individual language corpora alone. The key finding is that grammatical universals (agreement features, syntactic binding constraints) transfer across languages within the same typological family, but zero anaphora handling requires language-specific adaptation.

  CorefInst (Gupta et al., 2025) extended multilingual LLM-based coreference to 30+ languages by instruction-tuning, demonstrating that a single LLM with multilingual instruction following can resolve coreference across languages without any language-specific training data — at the cost of lower absolute F1 than specialised multilingual encoders, but with much simpler deployment (a single model for all languages rather than per-language fine-tuned variants).

  ## Worked Examples and Model Behaviour

  ### Standard OntoNotes Coreference Example

  Consider the following excerpt typical of OntoNotes newswire text:

  > "Apple Inc announced its new product line yesterday. CEO Tim Cook described the company's vision for the future. Cook said the devices would transform how consumers interact with technology. He dismissed concerns about the pricing strategy."

  A correctly functioning coreference system should produce the following clusters:
  - Cluster 1: {Apple Inc, its, the company's, the company}
  - Cluster 2: {CEO Tim Cook, Cook, He}
  - Cluster 3: {the new product line, the devices} (nominal coreference based on context)

  The first cluster illustrates nominal-pronominal coreference across four mentions spanning three sentences. The second cluster illustrates that "Cook" (a surname) coreferring with "CEO Tim Cook" (a title-plus-full-name) requires the model to match both surface forms and to recognise that "He" (which could plausibly refer to any male entity mentioned) is more likely to corefer with the most recently mentioned male singular entity (Cook, per Centering Theory's backward-looking centre prediction).

  ### Common Error Types

  Neural coreference systems make characteristic error types that differ from human annotation patterns:

  - **Pronoun attachment errors**: Attaching "he" or "she" to the wrong entity when two entities of the same gender are in the same sentence or paragraph. Syntactic binding constraints (Principle B: a pronoun cannot be co-indexed with a c-commanding NP in its local binding domain) would rule out many such errors, but end-to-end neural models often violate binding theory when the learned antecedent score from contextual embeddings overrides the constraint.
  - **Long-distance misses**: Failing to link a pronoun to an antecedent that is many sentences or paragraphs earlier, particularly when an intervening same-gender entity mention creates a "competitor." The bounded receptive field of sliding-window systems exacerbates this error type for antecedent distances beyond the window size.
  - **Over-merging**: Incorrectly merging two distinct entities into a single cluster, particularly when they have similar surface forms (e.g., two organisations in the same industry, two people with the same surname). Organisation coreference is particularly error-prone when "the company" or "the organisation" appears without clear disambiguating context.
  - **Singletons in complex sentences**: In sentences with complex relative clauses or embedded propositions, systems often create spurious coreference links between noun phrases in different embedded clauses that happen to have compatible agreement features but are semantically distinct.
  - **Cataphora**: References where a pronoun precedes its antecedent (e.g., "As she entered the room, Dr Smith smiled") are handled by some systems but missed by purely left-to-right antecedent-ranking models that only consider preceding mentions. Bidirectional span encoders (SpanBERT) handle this better than unidirectional models.

  ### Integration in an NLP Pipeline: End-to-End Example

  A production [[Information Extraction]] pipeline for processing financial news might proceed as follows:

  1. **Input**: "Goldman Sachs reported record profits on Thursday. The bank's CEO David Solomon said the firm would increase its dividend. Solomon added that the investment bank was well-positioned for regulatory changes."
  2. **[[Named Entity Recognition]]**: Identifies {Goldman Sachs: ORG}, {Thursday: DATE}, {David Solomon: PERSON}, {Solomon: PERSON}
  3. **Coreference Resolution**: Produces clusters: {Goldman Sachs, The bank, its, the firm, the investment bank}, {David Solomon, Solomon}
  4. **Pronoun/Description Substitution**: Rewrites the text as: "Goldman Sachs reported record profits on Thursday. Goldman Sachs's CEO David Solomon said Goldman Sachs would increase Goldman Sachs's dividend. David Solomon added that Goldman Sachs was well-positioned for regulatory changes."
  5. **[[Relation Extraction]]**: Now extracts: (David Solomon, CEO-of, Goldman Sachs), (Goldman Sachs, increases, dividend), (Goldman Sachs, positioned-for, regulatory changes) — cross-sentence relations only possible because coreference linked "the firm" back to Goldman Sachs.
  6. **[[Knowledge Graph Construction]]**: Populates or updates entity nodes Goldman_Sachs (Q182449) and David_Solomon (Q7199498) with the extracted relations and event timestamps.

  This pipeline illustrates why coreference resolution is not an academic exercise: without step 3, steps 5 and 6 miss all cross-sentence relations, dramatically reducing the completeness of the extracted knowledge graph.

  ## Coreference in the Age of Large Language Models

  The emergence of [[Large Language Model]] systems (GPT-4, Claude, Gemini, Llama 3) with very large context windows (128K–1M tokens as of 2026) has fundamentally changed the relationship between coreference resolution and language understanding. These models process entire long documents within a single attention window, and the multi-head [[Attention Mechanism]] within the [[Transformer Architecture]] implicitly tracks entity references without explicit coreference annotation — studies of attention patterns in BERT and GPT-class models show that specific attention heads specialise in tracking referential dependencies, with heads at intermediate layers disproportionately attending from pronoun tokens to their antecedent noun phrase tokens.

  However, implicit LLM coreference is not equivalent to explicit coreference resolution in several important ways:

  - **Extractability**: Standard LLMs do not produce structured coreference cluster output; to extract clusters, either prompting (asking the model to enumerate all entities and their mentions) or integration with dedicated span-scoring heads (as in specialised fine-tuned models) is required. Prompting approaches achieve high precision but lower recall than span-based systems on OntoNotes, because LLMs tend to identify only salient mentions and miss peripheral pronouns and descriptions.
  - **Consistency**: LLM implicit coreference can be inconsistent across generations — the same document run through an LLM twice may produce different entity attributions due to sampling temperature or subtle prompt formulation differences. Deterministic span-ranking models produce perfectly consistent outputs for a given document, which matters for reproducibility in production [[Knowledge Graph Construction]] pipelines.
  - **Interpretability**: Explicit coreference clusters are human-interpretable data structures: auditors can inspect which spans are linked and why. LLM implicit coreference is distributed across attention weights in 32–128 transformer layers, making it opaque and difficult to audit — a concern in regulated deployments (clinical NLP under NHS data governance, financial NLP under FCA/SEC oversight).
  - **Controllability**: Domain adaptation of explicit coreference models is well-understood (annotate ~200 documents, fine-tune the span encoder). Domain adaptation of LLMs for coreference requires either continued pretraining (expensive) or few-shot prompting with domain-specific examples (effective but prompt-sensitive).

  The emerging integration pattern in production systems (2025–2026) is a hybrid: use a lightweight explicit coreference model for pre-processing and structured cluster extraction, then pass resolved text (or entity-register-annotated text) to an LLM for downstream tasks (question answering, summarisation, [[Information Extraction]]). This decoupling allows independent optimisation of coreference quality and LLM task performance, and provides interpretable coreference audit logs separate from the LLM's reasoning process.

  Research on LLM-based coreference (CorefInst 2025, ImCoref-CeS 2025) shows that instruction-tuned LLMs achieve near-SOTA performance under gold mention conditions and for multilingual settings where annotated training data is scarce, suggesting that LLMs will become the default system for zero-shot or low-resource multilingual coreference while dedicated span-based models retain the accuracy advantage for high-resource English and well-resourced European languages.

- ### Provenance
  - sources:: Lee et al. 2017 EMNLP (end-to-end neural coref); Joshi et al. 2020 TACL (SpanBERT); Martinelli & Barba 2024 ACL (Maverick); Gupta et al. 2025 TACL (CorefInst); Li et al. 2025 arXiv:2507.07847 (RAG); Zeldes et al. 2025 arXiv:2602.16200; Novak & Zabokrtsky 2025 CRAC (CorPipe); Pradhan et al. 2012 CoNLL-2012; Jurafsky & Martin Speech and Language Processing 3rd ed.; GATE framework Cunningham et al. 2002; Grosz Joshi Weinstein 1995 Centering Theory; Chomsky 1981 Government and Binding; Hobbs 1978 pronoun resolution; xCoRe EMNLP 2025
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
