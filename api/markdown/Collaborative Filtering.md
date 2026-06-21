public:: true

# Collaborative Filtering
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:collaborative-filtering",
  "@type": "Page",
  "vc:slug": "collaborative-filtering",
  "title": "Collaborative Filtering",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:recommendation-system", "vc:label": "Recommendation System"},
    {"@id": "urn:visionflow:linked:recommendation-engine", "vc:label": "Recommendation Engine"},
    {"@id": "urn:visionflow:linked:recommendation-systems", "vc:label": "Recommendation Systems"},
    {"@id": "urn:visionflow:linked:machine-learning-technique", "vc:label": "Machine Learning Technique"},
    {"@id": "urn:visionflow:linked:machine-learning-discipline", "vc:label": "Machine Learning Discipline"},
    {"@id": "urn:visionflow:linked:matrix-factorisation", "vc:label": "Matrix Factorisation"},
    {"@id": "urn:visionflow:linked:embeddings", "vc:label": "Embeddings"},
    {"@id": "urn:visionflow:linked:deep-learning", "vc:label": "Deep Learning"},
    {"@id": "urn:visionflow:linked:neural-network", "vc:label": "Neural Network"},
    {"@id": "urn:visionflow:linked:graph-neural-network", "vc:label": "Graph Neural Network"},
    {"@id": "urn:visionflow:linked:transformer-architecture", "vc:label": "Transformer Architecture"},
    {"@id": "urn:visionflow:linked:federated-learning", "vc:label": "Federated Learning"},
    {"@id": "urn:visionflow:linked:differential-privacy", "vc:label": "Differential Privacy"},
    {"@id": "urn:visionflow:linked:data-privacy", "vc:label": "Data Privacy"},
    {"@id": "urn:visionflow:linked:privacy-preserving-data-mining", "vc:label": "Privacy Preserving Data Mining"},
    {"@id": "urn:visionflow:linked:hyper-personalisation", "vc:label": "Hyper personalisation"},
    {"@id": "urn:visionflow:linked:gradient-descent", "vc:label": "Gradient Descent"},
    {"@id": "urn:visionflow:linked:stochastic-gradient-descent", "vc:label": "Stochastic Gradient Descent"},
    {"@id": "urn:visionflow:linked:large-language-model", "vc:label": "Large Language Model"},
    {"@id": "urn:visionflow:linked:vector-database", "vc:label": "Vector Database"},
    {"@id": "urn:visionflow:linked:approximate-nearest-neighbour-search", "vc:label": "Approximate Nearest Neighbour Search"},
    {"@id": "urn:visionflow:linked:information-retrieval", "vc:label": "Information Retrieval"},
    {"@id": "urn:visionflow:linked:user-behaviour-data", "vc:label": "User Behaviour Data"},
    {"@id": "urn:visionflow:linked:content-based-filtering", "vc:label": "Content-Based Filtering"},
    {"@id": "urn:visionflow:linked:knowledge-graph", "vc:label": "Knowledge Graph"},
    {"@id": "urn:visionflow:linked:reinforcement-learning", "vc:label": "Reinforcement Learning"},
    {"@id": "urn:visionflow:linked:loss-function", "vc:label": "Loss Function"},
    {"@id": "urn:visionflow:linked:regularisation", "vc:label": "Regularisation"},
    {"@id": "urn:visionflow:linked:sparse-data", "vc:label": "Sparse Data"},
    {"@id": "urn:visionflow:linked:variational-autoencoder", "vc:label": "Variational Autoencoder"},
    {"@id": "urn:visionflow:linked:attention-mechanism", "vc:label": "Attention Mechanism"},
    {"@id": "urn:visionflow:linked:cold-start-problem", "vc:label": "Cold-Start Problem"},
    {"@id": "urn:visionflow:linked:filter-bubble", "vc:label": "Filter Bubble"},
    {"@id": "urn:visionflow:linked:data-pipeline", "vc:label": "Data Pipeline"},
    {"@id": "urn:visionflow:linked:e-commerce", "vc:label": "E-Commerce"},
    {"@id": "urn:visionflow:linked:natural-language-processing", "vc:label": "Natural Language Processing"},
    {"@id": "urn:visionflow:linked:drug-discovery", "vc:label": "Drug Discovery"},
    {"@id": "urn:visionflow:linked:gdpr", "vc:label": "GDPR"},
    {"@id": "urn:visionflow:linked:a-b-testing", "vc:label": "A/B Testing"},
    {"@id": "urn:visionflow:linked:alternating-least-squares", "vc:label": "Alternating Least Squares"},
    {"@id": "urn:visionflow:linked:machine-learning-model", "vc:label": "Machine Learning Model"},
    {"@id": "urn:visionflow:linked:search-engine", "vc:label": "Search Engine"},
    {"@id": "urn:visionflow:linked:social-media-platform-infrastructure", "vc:label": "Social Media Platform Infrastructure"}
  ],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:collaborative-systems-modality-filtering",
  "@type": "Class",
  "label": "Collaborative Filtering",
  "definition": "Collaborative filtering is a machine learning technique for building recommendation systems that generates predictions about user preferences by aggregating the behaviour or ratings of many users, without requiring explicit knowledge of item content. Memory-based approaches compute similarity between users (user-based) or items (item-based) using rating vectors; model-based approaches such as matrix factorisation decompose the user-item interaction matrix into latent factor spaces. The method operates on the assumption that users who agreed in the past will agree in the future, and is the foundational algorithm behind recommendation engines at Netflix, Spotify, and Amazon.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-discipline-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:matrix-factorisation", "label": "Matrix Factorisation"},
      {"@id": "urn:ngm:class:user-item-interaction-matrix", "label": "User-Item Interaction Matrix"},
      {"@id": "urn:ngm:class:latent-factor-model", "label": "Latent Factor Model"},
      {"@id": "urn:ngm:class:neighbourhood-method", "label": "Neighbourhood Method"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:recommendation-engine", "label": "Recommendation Engine"},
      {"@id": "urn:ngm:class:recommendation-system", "label": "Recommendation System"},
      {"@id": "urn:ngm:class:hyper-personalisation", "label": "Hyper personalisation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:user-behaviour-data", "label": "User Behaviour Data"},
      {"@id": "urn:ngm:class:embeddings", "label": "Embeddings"},
      {"@id": "urn:ngm:class:sparse-data", "label": "Sparse Data"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning Discipline"},
      {"@id": "urn:ngm:class:gradient-descent", "label": "Gradient Descent"},
      {"@id": "urn:ngm:class:approximate-nearest-neighbour-search", "label": "Approximate Nearest Neighbour Search"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:content-based-filtering", "label": "Content-Based Filtering"},
      {"@id": "urn:ngm:class:search-engine", "label": "Search Engine"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:recommendation-systems", "label": "Recommendation Systems"},
      {"@id": "urn:ngm:class:data-privacy", "label": "Data Privacy"},
      {"@id": "urn:ngm:class:privacy-preserving-data-mining", "label": "Privacy Preserving Data Mining"},
      {"@id": "urn:ngm:class:filter-bubble", "label": "Filter Bubble"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}
    ]
  },
  "quality": 0.90,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "PhaseEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:collaborative-filtering:e2a91fc7d30b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {"@id": "urn:visionflow:page:collaborative-filtering"},
  "vc:resolutions": [
    {"raw": "[[Recommendation System]]", "resolved": "urn:visionflow:linked:recommendation-system", "kind": "ResolvedLink"},
    {"raw": "[[Recommendation Engine]]", "resolved": "urn:visionflow:linked:recommendation-engine", "kind": "ResolvedLink"},
    {"raw": "[[Recommendation Systems]]", "resolved": "urn:visionflow:linked:recommendation-systems", "kind": "ResolvedLink"},
    {"raw": "[[Machine Learning Technique]]", "resolved": "urn:visionflow:linked:machine-learning-technique", "kind": "ResolvedLink"},
    {"raw": "[[Machine Learning Discipline]]", "resolved": "urn:visionflow:linked:machine-learning-discipline", "kind": "ResolvedLink"},
    {"raw": "[[Matrix Factorisation]]", "resolved": "urn:visionflow:linked:matrix-factorisation", "kind": "StubLink"},
    {"raw": "[[Embeddings]]", "resolved": "urn:visionflow:linked:embeddings", "kind": "ResolvedLink"},
    {"raw": "[[Deep Learning]]", "resolved": "urn:visionflow:linked:deep-learning", "kind": "ResolvedLink"},
    {"raw": "[[Neural Network]]", "resolved": "urn:visionflow:linked:neural-network", "kind": "StubLink"},
    {"raw": "[[Graph Neural Network]]", "resolved": "urn:visionflow:linked:graph-neural-network", "kind": "ResolvedLink"},
    {"raw": "[[Transformer Architecture]]", "resolved": "urn:visionflow:linked:transformer-architecture", "kind": "StubLink"},
    {"raw": "[[Federated Learning]]", "resolved": "urn:visionflow:linked:federated-learning", "kind": "ResolvedLink"},
    {"raw": "[[Differential Privacy]]", "resolved": "urn:visionflow:linked:differential-privacy", "kind": "ResolvedLink"},
    {"raw": "[[Data Privacy]]", "resolved": "urn:visionflow:linked:data-privacy", "kind": "ResolvedLink"},
    {"raw": "[[Privacy Preserving Data Mining]]", "resolved": "urn:visionflow:linked:privacy-preserving-data-mining", "kind": "StubLink"},
    {"raw": "[[Hyper personalisation]]", "resolved": "urn:visionflow:linked:hyper-personalisation", "kind": "StubLink"},
    {"raw": "[[Gradient Descent]]", "resolved": "urn:visionflow:linked:gradient-descent", "kind": "StubLink"},
    {"raw": "[[Stochastic Gradient Descent]]", "resolved": "urn:visionflow:linked:stochastic-gradient-descent", "kind": "StubLink"},
    {"raw": "[[Large Language Model]]", "resolved": "urn:visionflow:linked:large-language-model", "kind": "StubLink"},
    {"raw": "[[Vector Database]]", "resolved": "urn:visionflow:linked:vector-database", "kind": "StubLink"},
    {"raw": "[[Approximate Nearest Neighbour Search]]", "resolved": "urn:visionflow:linked:approximate-nearest-neighbour-search", "kind": "StubLink"},
    {"raw": "[[Information Retrieval]]", "resolved": "urn:visionflow:linked:information-retrieval", "kind": "StubLink"},
    {"raw": "[[User Behaviour Data]]", "resolved": "urn:visionflow:linked:user-behaviour-data", "kind": "StubLink"},
    {"raw": "[[Content-Based Filtering]]", "resolved": "urn:visionflow:linked:content-based-filtering", "kind": "StubLink"},
    {"raw": "[[Knowledge Graph]]", "resolved": "urn:visionflow:linked:knowledge-graph", "kind": "StubLink"},
    {"raw": "[[Reinforcement Learning]]", "resolved": "urn:visionflow:linked:reinforcement-learning", "kind": "ResolvedLink"},
    {"raw": "[[Loss Function]]", "resolved": "urn:visionflow:linked:loss-function", "kind": "StubLink"},
    {"raw": "[[Regularisation]]", "resolved": "urn:visionflow:linked:regularisation", "kind": "StubLink"},
    {"raw": "[[Sparse Data]]", "resolved": "urn:visionflow:linked:sparse-data", "kind": "StubLink"},
    {"raw": "[[Variational Autoencoder]]", "resolved": "urn:visionflow:linked:variational-autoencoder", "kind": "StubLink"},
    {"raw": "[[Attention Mechanism]]", "resolved": "urn:visionflow:linked:attention-mechanism", "kind": "StubLink"},
    {"raw": "[[Cold-Start Problem]]", "resolved": "urn:visionflow:linked:cold-start-problem", "kind": "StubLink"},
    {"raw": "[[Filter Bubble]]", "resolved": "urn:visionflow:linked:filter-bubble", "kind": "StubLink"},
    {"raw": "[[Data Pipeline]]", "resolved": "urn:visionflow:linked:data-pipeline", "kind": "StubLink"},
    {"raw": "[[E-Commerce]]", "resolved": "urn:visionflow:linked:e-commerce", "kind": "StubLink"},
    {"raw": "[[Natural Language Processing]]", "resolved": "urn:visionflow:linked:natural-language-processing", "kind": "StubLink"},
    {"raw": "[[Drug Discovery]]", "resolved": "urn:visionflow:linked:drug-discovery", "kind": "StubLink"},
    {"raw": "[[GDPR]]", "resolved": "urn:visionflow:linked:gdpr", "kind": "StubLink"},
    {"raw": "[[A/B Testing]]", "resolved": "urn:visionflow:linked:a-b-testing", "kind": "StubLink"},
    {"raw": "[[Alternating Least Squares]]", "resolved": "urn:visionflow:linked:alternating-least-squares", "kind": "StubLink"},
    {"raw": "[[Machine Learning Model]]", "resolved": "urn:visionflow:linked:machine-learning-model", "kind": "ResolvedLink"},
    {"raw": "[[Search Engine]]", "resolved": "urn:visionflow:linked:search-engine", "kind": "StubLink"},
    {"raw": "[[Social Media Platform Infrastructure]]", "resolved": "urn:visionflow:linked:social-media-platform-infrastructure", "kind": "StubLink"}
  ],
  "prov:wasAttributedTo": {"@id": "did:nostr:enrichment-swarm"},
  "prov:generatedAtTime": {"@value": "2026-06-21T00:00:00Z", "@type": "xsd:dateTime"}
}
```

- ### Definition
  - [[Collaborative Filtering]] is a [[Machine Learning Technique]] that infers and predicts user preferences by identifying latent patterns across the aggregated behavioural data of many users — ratings, clicks, purchases, or implicit dwell-time signals — to power [[Recommendation System]] engines without requiring analysis of item content. The paradigm rests on the neighbour hypothesis: users who have historically agreed on the value of items will continue to agree in the future, allowing the preferences of one user to be extrapolated from the collective judgements of a population of similar users. Memory-based implementations compute pairwise similarities between user rating vectors (user-based collaborative filtering) or between item rating vectors (item-based collaborative filtering) using metrics such as cosine similarity or Pearson correlation, and aggregate the ratings of the k most similar neighbours to produce ranked predictions for unseen items. Model-based implementations — now dominant in industry — learn compact latent representations by decomposing the sparse [[User Behaviour Data]] matrix into low-rank factors through [[Matrix Factorisation]], [[Deep Learning]] extensions including [[Neural Network]] architectures and [[Variational Autoencoder]] models, and sequence-aware transformers that leverage the [[Attention Mechanism]] to model ordered interaction histories. Modern hybrid systems fuse collaborative signals with item content features encoded as [[Embeddings]], [[Knowledge Graph]] structure for structural reasoning, and [[Large Language Model]] representations to address the [[Cold-Start Problem]] for new users or items. Collaborative filtering is the algorithmic foundation of [[Recommendation Engine]] infrastructure at Netflix, Spotify, Amazon, and YouTube, and extends beyond consumer media into scientific domains including [[Drug Discovery]] compound repurposing and materials informatics. Privacy compliance with [[GDPR]] and analogous regulation is addressed through [[Federated Learning]] and [[Differential Privacy]] mechanisms that decouple model training from centralised access to raw behavioural logs; however, unresolved concerns around [[Filter Bubble]] effects and popularity bias persist as active research challenges.

- ### Semantic Classification
  - owl-class:: ai:CollaborativeFiltering
  - owl-role:: Concept | LearningParadigm | InformationFilteringProtocol
  - owl-inferred:: ai:RecommendationAlgorithm, ai:MatrixDecompositionMethod, ai:UserBehaviourModel
  - belongs-to-domain:: [[Machine Learning Discipline]]
  - implemented-in-layer:: [[Recommendation System]]

- ### Relationships
  - is-subclass-of:: [[Machine Learning Technique]], [[Information Retrieval]]
  - has-part:: [[Matrix Factorisation]], [[User Behaviour Data]], [[Embeddings]], [[Approximate Nearest Neighbour Search]]
  - requires:: [[Sparse Data]], [[User Behaviour Data]], [[Loss Function]], [[Regularisation]]
  - enables:: [[Recommendation Engine]], [[Recommendation System]], [[Hyper personalisation]], [[E-Commerce]]
  - implements:: [[Machine Learning Model]], [[Gradient Descent]], [[Stochastic Gradient Descent]], [[Alternating Least Squares]]
  - depends-on:: [[Deep Learning]], [[Neural Network]], [[Graph Neural Network]], [[Transformer Architecture]]
  - supports:: [[Federated Learning]], [[Differential Privacy]], [[Privacy Preserving Data Mining]], [[A/B Testing]]
  - uses:: [[Embeddings]], [[Vector Database]], [[Knowledge Graph]], [[Large Language Model]], [[Variational Autoencoder]], [[Attention Mechanism]], [[Reinforcement Learning]]
  - contrasts-with:: [[Content-Based Filtering]], [[Search Engine]]
  - related-to:: [[Data Privacy]], [[Filter Bubble]], [[Natural Language Processing]], [[Drug Discovery]], [[GDPR]], [[Social Media Platform Infrastructure]], [[Data Pipeline]]
  - standardized-by:: [[Recommendation Systems]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:hasPart ai:MatrixFactorisation))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:hasPart ai:LatentFactorModel))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:hasPart ai:NeighbourhoodMethod))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:hasPart ai:UserItemInteractionMatrix))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:hasPart ai:UserBehaviourData))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:hasPart ai:Embeddings))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:hasPart ai:ApproximateNearestNeighbourSearch))
  ## Dependency Relationships
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:requires ai:SparseData))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:requires ai:LossFunction))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:requires ai:Regularisation))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:requires ai:UserBehaviourData))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:dependsOn ai:DeepLearning))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:dependsOn ai:GraphNeuralNetwork))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:dependsOn ai:TransformerArchitecture))
  ## Capability Relationships
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:enables ai:RecommendationEngine))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:enables ai:RecommendationSystem))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:enables ai:HyperPersonalisation))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:enables ai:ECommerce))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:supports ai:FederatedLearning))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:supports ai:DifferentialPrivacy))
  ## Implementation Relationships
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:implements ai:GradientDescent))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:implements ai:AlternatingLeastSquares))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:implements ai:StochasticGradientDescent))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:uses ai:KnowledgeGraph))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:uses ai:LargeLanguageModel))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:uses ai:VectorDatabase))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:uses ai:AttentionMechanism))
  ## Reduction Relationships
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:reducesTo ai:MatrixFactorisation))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:contrastsWith ai:ContentBasedFiltering))
      SubClassOf(ai:CollaborativeFiltering
        ObjectSomeValuesFrom(ai:contrastsWith ai:SearchEngine))

  ## About
    Collaborative filtering is the dominant paradigm in information filtering for personalised recommendation, operating purely on the structure of historical user-item interactions rather than on properties of the items themselves. This design choice produces a self-reinforcing feedback loop: as more users interact with the system, the behavioural signal matrix becomes denser, improving prediction accuracy while simultaneously presenting harder privacy trade-offs. The approach originated in the 1992 Tapestry email-filtering system at Xerox PARC (Goldberg et al.) and was formalised for large-scale deployment by the GroupLens project at the University of Minnesota (Resnick et al., 1994), which applied it to Usenet article recommendation. The defining assumption is that the [[User Behaviour Data]] matrix R (users × items) is approximately low-rank: most of its information can be captured by a small number of latent dimensions k that represent abstract taste axes such as genre, tempo, or narrative style. [[Matrix Factorisation]] algorithms decompose R into two matrices — a user factor matrix P (users × k) and an item factor matrix Q (items × k) — whose product approximates R. The Frobenius-norm reconstruction error with L2 [[Regularisation]] is minimised by [[Stochastic Gradient Descent]] or [[Alternating Least Squares]]. The Netflix Prize (2006–2009) catalysed a decade of algorithmic refinement; the winning BellKor ensemble combined [[Matrix Factorisation]] with temporal drift modelling and neighbourhood methods, improving RMSE by 10.06% over the incumbent system.

    Contemporary collaborative filtering systems integrate [[Deep Learning]] heavily. He et al.'s 2017 Neural Collaborative Filtering framework replaced the inner product of matrix factorisation with a multi-layer perceptron, demonstrating improved accuracy on implicit feedback data. [[Variational Autoencoder]] approaches (Liang et al., 2018) treat the user-item matrix as a bag-of-words and learn probabilistic latent codes, showing strong performance on sparse datasets. [[Graph Neural Network]] methods — particularly LightGCN (He et al., 2020) — encode the bipartite user-item interaction graph through iterative neighbourhood aggregation, capturing higher-order connectivity patterns that matrix factorisation misses. Sequence-aware models using [[Attention Mechanism]] and [[Transformer Architecture]] layers model the order and recency of interactions, enabling prediction of the next item in a session. In 2024–2025, integration with [[Large Language Model]] representations became widespread: LLMs encode item descriptions into dense semantic [[Embeddings]] that supplement collaborative signals, partially solving the [[Cold-Start Problem]] for items with rich textual metadata but sparse interaction histories. Hybrid frameworks (ELMRec, LLMRank, BIGRec) report 15–40% improvements in recall metrics on cold-start benchmarks relative to pure collaborative filtering baselines.

  ## Components / Architecture
    - **Memory-Based CF (Neighbourhood Methods)**: Compute user-user or item-item similarity matrices from rating vectors. User-based CF predicts item ratings by aggregating weighted ratings from k nearest user neighbours. Item-based CF (Amazon, 2003) computes item similarity offline; similarity matrices update slowly, enabling real-time inference. Cosine similarity and Pearson correlation are standard metrics; shrunk correlation addresses sparsity artefacts.
    - **Model-Based CF — Matrix Factorisation**: Decompose interaction matrix R into P (users × k) and Q (items × k) by minimising ||R – PQ^T||²_F + λ(||P||²_F + ||Q||²_F) via [[Stochastic Gradient Descent]] or [[Alternating Least Squares]]. Latent dimension k ranges from 20 to 512 in production systems. Biased MF extends with per-user and per-item baseline offsets; temporal SVD++ adds time-stamped interaction drift.
    - **Neural Collaborative Filtering**: Replace PQ^T inner product with a feed-forward [[Neural Network]], enabling learning of non-linear user-item interaction functions from implicit binary feedback signals (clicks, plays, purchases).
    - **Graph-Based CF**: Construct bipartite user-item interaction graph; apply [[Graph Neural Network]] message passing (LightGCN, NGCF) to propagate collaborative signals through the neighbourhood structure. Captures multi-hop relationships invisible to matrix factorisation.
    - **Sequence-Aware CF**: Use [[Transformer Architecture]] or RNN-based encoders (SASRec, BERT4Rec) to model the temporal order of interactions and predict the next most likely item in a session.
    - **[[Variational Autoencoder]] CF**: Treat each user's interaction history as a bag-of-items; encode to probabilistic latent code and decode to reconstruct the full item distribution. Multinomial VAE (MultVAE) is a strong baseline on many benchmarks.
    - **Retrieval Pipeline**: Two-stage architecture standard in production. Stage 1 — candidate generation using [[Approximate Nearest Neighbour Search]] over a [[Vector Database]] of item [[Embeddings]]. Stage 2 — pointwise or listwise ranking model that scores each candidate with full feature context, using a [[Loss Function]] such as BPR, binary cross-entropy, or listwise softmax.
    - **[[Federated Learning]] CF**: Train local models on-device; aggregate only gradient updates or model parameters, never raw [[User Behaviour Data]]. FELLRec and FELLAS frameworks (2024–2025) combine federated training with [[Large Language Model]] augmentation for privacy-preserving sequential recommendation under [[GDPR]] constraints.

  ## Use Cases / Major Families
    - **Streaming Media**: Netflix reports approximately 80% of streamed content is recommended via its CF-based system. Spotify Discover Weekly trains user-item [[Embeddings]] on billions of listening events, generating personalised weekly playlists. YouTube Watch Next combines collaborative signals with engagement prediction models.
    - **E-Commerce**: Amazon's item-to-item CF (Linden, Smith, York 2003) was documented to drive 35% of total revenue in early studies. Modern Amazon recommendation stacks combine neural CF with [[Knowledge Graph]] product taxonomy and [[Reinforcement Learning]] for session-level optimisation.
    - **Social Media**: TikTok's FYP algorithm uses collaborative signals from an extremely high-density implicit feedback matrix (video completion rate, shares, re-watches) combined with content features. Facebook and LinkedIn use CF in feed ranking and people-you-may-know.
    - **Scientific Discovery**: Drug-target interaction prediction as matrix completion over a compound × target affinity matrix. Materials discovery by treating synthesis condition and property measurements as a sparse user-item matrix. Scholarly paper recommendation in Semantic Scholar and Microsoft Academic.
    - **Enterprise Search and Productivity**: Microsoft Search and Google Workspace use collaborative signals from co-access patterns to rank documents. GitHub Copilot code completion incorporates collaborative code-usage signals.

  ## Academic Context
    The field was shaped by three waves of research. The first wave (1992–2004) established memory-based methods through foundational work at Xerox PARC (Tapestry, Goldberg et al. 1992) and the University of Minnesota (GroupLens, Resnick et al. 1994; Sarwar et al. 2001 on item-based CF). The second wave (2006–2014) was dominated by [[Matrix Factorisation]] following the Netflix Prize: Koren, Bell, and Volinsky's 2009 survey in IEEE Computer established matrix factorisation as the canonical approach; Hu, Koren, and Volinsky's ALS-WR for implicit feedback (2008) became the de facto benchmark algorithm. The third wave (2016–present) is characterised by deep learning integration: He et al.'s Neural Collaborative Filtering (WWW 2017), Liang et al.'s Variational Autoencoders for CF (WWW 2018), He et al.'s LightGCN (SIGIR 2020), and Sun et al.'s BERT4Rec (CIKM 2019) are the most-cited papers.

    Key theoretical questions concern generalisation from biased observational data — users only rate items they have interacted with, creating selection bias that naive MF ignores (Schnabel et al., 2016 on unbiased estimators). Causal inference methods (Inverse Propensity Scoring, Doubly Robust estimation) are applied to CF to correct for exposure bias. The Bayesian Pairwise Ranking (BPR) loss (Rendle et al., 2009) is widely used for implicit feedback settings where positive examples are observed and negatives must be sampled. Popularity bias in GNN-based CF has attracted substantial 2024–2025 research: LightGCN trained with BPR exhibits systematic embedding-space distortion favouring popular items (arxiv:2510.12959, 2025).

    Top publication venues: ACM RecSys, SIGIR, WWW/TheWebConf, KDD, NeurIPS, ICML. Key journals: ACM TOIS, IEEE TKDE.

  ## Current Landscape (2026)
    As of mid-2026, collaborative filtering is mature but rapidly evolving. Pure CF baselines remain competitive on dense benchmark datasets but are displaced in production by hybrid systems combining collaborative, content, and contextual signals. The leading trend is LLM augmentation: systems such as BIGRec (Bing, 2024), LLMRank, and ELMRec inject collaborative knowledge from pretrained CF models into [[Large Language Model]] rankers, achieving strong zero-shot and few-shot generalisation on new items. AMEM4Rec (2026) leverages cross-user similarity for memory evolution in agentic LLM recommenders, demonstrating the convergence of agentic and collaborative paradigms.

    [[Federated Learning]] CF has progressed from research prototypes to production deployment at scale. FedCIA (2025) introduces federated collaborative information aggregation for privacy-preserving recommendation on heterogeneous data distributions across edge devices. The EU AI Act (effective August 2024) and [[GDPR]] enforcement actions in 2023–2024 have accelerated demand for privacy-by-design CF architectures. On-device CF inference for mobile recommendation (e.g., iOS and Android personalisation) using quantised MF models is now standard practice at Apple and Google.

    [[Graph Neural Network]]-based CF (LightGCN, SimGCL, XSimGCL) dominates RecSys leaderboards as of 2025; post-hoc popularity debiasing methods (DAP, causality-aware aggregation weight estimators, CIKM 2025) address the Matthew effect in GNN-based recommendation. Conversational recommendation — where users express preferences through natural language dialogue, bridging [[Natural Language Processing]] and CF — is an active frontier, with systems deployed in Amazon Alexa, Google Assistant, and Bing Copilot.

  ## UK Context
    The UK has strong academic presence in recommendation systems research. The University of Glasgow's Information Retrieval group (Iadh Ounis, Craig Macdonald) has long worked on CF in the context of search and social recommendation, contributing to the Terrier framework. University College London's Machine Learning group has published on Bayesian approaches to CF and [[Differential Privacy]] mechanisms for recommendation. The University of Edinburgh's Informatics group contributes to scalable ML and distributed training relevant to large-scale CF deployment. Oxford's Department of Statistics has contributed causal inference methods applicable to debiasing CF systems.

    In industry, BT (British Telecom) and Sky UK apply CF to TV and broadband content recommendation at scale. BBC iPlayer's recommendation system applies CF across its licence-fee-funded content catalogue, subject to particular scrutiny around filter bubbles and public-service content diversity mandates. Deliveroo and ASOS use CF for item and restaurant recommendation in high-velocity [[E-Commerce]] contexts. DeepMind (London) has published on [[Reinforcement Learning]]-based recommendation optimising long-horizon user value rather than click-through rate. The Alan Turing Institute coordinates cross-institutional CF and responsible recommendation research, with particular focus on [[Fairness in Machine Learning]] concerns around popularity bias, [[Filter Bubble]] effects, and minority community under-representation in recommendation outputs.

    Northern England industrial context: Manchester-based Co-op Digital uses data-driven recommendation for its grocery platform. Leeds- and Sheffield-based retail analytics companies apply CF to customer personalisation in fashion retail. GCHQ's National Cyber Security Centre has published guidance on responsible AI that encompasses recommendation system transparency requirements applicable to UK platform operators.

  ## Future Directions (2026-2030)
    The convergence of collaborative filtering with agentic AI is the dominant near-term trend: LLM-based agents that maintain conversational user preference models and execute multi-step recommendation dialogues will gradually displace single-turn ranking systems. Personalised [[Large Language Model]] fine-tuning using CF-derived user representations (personalised LoRA, prefix-tuning per user cluster) is an active research area. Causal recommendation — explicitly modelling the intervention effect of showing an item on user utility, not merely predicting click probability — is expected to become the theoretical foundation for the next generation of CF systems.

    On the privacy axis, the combination of [[Federated Learning]] and [[Differential Privacy]] with secure multi-party computation will enable CF at scale without any single party ever observing raw interaction logs. Regulatory pressure from the EU AI Act's transparency and explanation requirements for high-impact recommendation systems will drive adoption of explainable CF — techniques that surface human-readable explanations for why a particular item was recommended, drawing on neighbourhood-based justifications and counterfactual reasoning.

    Hardware specialisation for CF inference — dedicated matrix multiplication accelerators, in-memory DRAM-based [[Approximate Nearest Neighbour Search]] engines — will bring real-time collaborative filtering to edge devices by 2027-2028. The integration of [[Knowledge Graph]] reasoning into CF is expected to mature, enabling recommendation that tracks and explicitly models multi-hop semantic relationships between items, users, and contextual factors.

  ## Research & Literature
    1. Goldberg, D., Nichols, D., Oki, B. M., & Terry, D. (1992). Using collaborative filtering to weave an information tapestry. *Communications of the ACM*, 35(12), 61–70. https://doi.org/10.1145/138859.138867
    2. Resnick, P., Iacovou, N., Suchak, M., Bergstrom, P., & Riedl, J. (1994). GroupLens: An open architecture for collaborative filtering of netnews. *ACM CSCW 1994*, 175–186. https://doi.org/10.1145/192844.192905
    3. Sarwar, B., Karypis, G., Konstan, J., & Riedl, J. (2001). Item-based collaborative filtering recommendation algorithms. *WWW 2001*, 285–295. https://doi.org/10.1145/371920.372071
    4. Linden, G., Smith, B., & York, J. (2003). Amazon.com recommendations: Item-to-item collaborative filtering. *IEEE Internet Computing*, 7(1), 76–80. https://doi.org/10.1109/MIC.2003.1167344
    5. Hu, Y., Koren, Y., & Volinsky, C. (2008). Collaborative filtering for implicit feedback datasets. *ICDM 2008*, 263–272. https://doi.org/10.1109/ICDM.2008.22
    6. Koren, Y., Bell, R., & Volinsky, C. (2009). Matrix factorization techniques for recommender systems. *IEEE Computer*, 42(8), 30–37. https://doi.org/10.1109/MC.2009.263
    7. Rendle, S., Freudenthaler, C., Gantner, Z., & Schmidt-Thieme, L. (2009). BPR: Bayesian personalized ranking from implicit feedback. *UAI 2009*, 452–461. https://arxiv.org/abs/1205.2618
    8. Mnih, A., & Salakhutdinov, R. (2008). Probabilistic matrix factorization. *NeurIPS 2008*, 1257–1264.
    9. Salakhutdinov, R., & Mnih, A. (2008). Bayesian probabilistic matrix factorization using Markov chain Monte Carlo. *ICML 2008*, 880–887. https://doi.org/10.1145/1390156.1390267
    10. He, X., Liao, L., Zhang, H., Nie, L., Hu, X., & Chua, T.-S. (2017). Neural collaborative filtering. *WWW 2017*, 173–182. https://doi.org/10.1145/3038912.3052569
    11. Liang, D., Krishnan, R. G., Hoffman, M. D., & Jebara, T. (2018). Variational autoencoders for collaborative filtering. *WWW 2018*, 689–698. https://doi.org/10.1145/3178876.3186150
    12. Kang, W.-C., & McAuley, J. (2018). Self-attentive sequential recommendation. *ICDM 2018*, 197–206. https://doi.org/10.1109/ICDM.2018.00035
    13. Sun, F., Liu, J., Wu, J., Pei, C., Lin, X., Ou, W., & Jiang, P. (2019). BERT4Rec: Sequential recommendation with bidirectional encoder representations from transformer. *CIKM 2019*, 1441–1450. https://doi.org/10.1145/3357384.3357895
    14. He, X., Deng, K., Wang, X., Li, Y., Zhang, Y., & Wang, M. (2020). LightGCN: Simplifying and powering graph convolution network for recommendation. *SIGIR 2020*, 639–648. https://doi.org/10.1145/3397271.3401063
    15. Schnabel, T., Swaminathan, A., Singh, A., Chandak, N., & Joachims, T. (2016). Recommendations as treatments: Debiasing learning and evaluation. *ICML 2016*, 1670–1679. https://arxiv.org/abs/1602.05352
    16. Rao, N., Yu, H.-F., Ravikumar, P., & Dhillon, I. S. (2015). Collaborative filtering with graph information: Consistency and scalable methods. *NeurIPS 2015*, 2107–2115.
    17. Wang, X., He, X., Wang, M., Feng, F., & Chua, T.-S. (2019). Neural graph collaborative filtering. *SIGIR 2019*, 165–174. https://doi.org/10.1145/3331184.3331267
    18. Covington, P., Adams, J., & Sargin, E. (2016). Deep neural networks for YouTube recommendations. *RecSys 2016*, 191–198. https://doi.org/10.1145/2959100.2959190
    19. Zhang, S., Yao, L., Sun, A., & Tay, Y. (2019). Deep learning based recommender system: A survey and new perspectives. *ACM Computing Surveys*, 52(1), 5. https://doi.org/10.1145/3285029
    20. Bao, K., Zhang, J., Zhang, Y., Wang, W., Feng, F., & He, X. (2023). TALLRec: An effective and efficient tuning framework to align large language model with recommendation. *RecSys 2023*. https://arxiv.org/abs/2305.00447
    21. Hou, Y., Mu, S., Zhao, W. X., Li, Y., Ding, B., & Wen, J.-R. (2022). Towards universal sequence recommenders. *KDD 2022*. https://arxiv.org/abs/2206.05941
    22. Adomavicius, G., & Tuzhilin, A. (2005). Toward the next generation of recommender systems: A survey of the state-of-the-art and possible extensions. *IEEE TKDE*, 17(6), 734–749. https://doi.org/10.1109/TKDE.2005.99
    23. Herlocker, J. L., Konstan, J. A., Terveen, L. G., & Riedl, J. T. (2004). Evaluating collaborative filtering recommender systems. *ACM TOIS*, 22(1), 5–53. https://doi.org/10.1145/963770.963772
    24. Shi, Y., Larson, M., & Hanjalic, A. (2014). Collaborative filtering beyond the user-item matrix: A survey of the state of the art. *ACM Computing Surveys*, 47(1), 3. https://doi.org/10.1145/2556270
    25. He, X., Zhang, H., Kan, M.-Y., & Chua, T.-S. (2016). Fast matrix factorization for online recommendation with implicit feedback. *SIGIR 2016*, 549–558. https://doi.org/10.1145/2911451.2911489
    26. Zhao, T., McAuley, J., & King, I. (2014). Leveraging social connections to improve personalized ranking for collaborative filtering. *CIKM 2014*, 261–270. https://doi.org/10.1145/2661829.2661998
    27. Chen, J., Wang, X., Hang, C., Zhang, Y., & He, X. (2025). Post-hoc popularity bias correction in GNN-based collaborative filtering. *arXiv preprint*, arXiv:2510.12959. https://arxiv.org/abs/2510.12959
    28. FedCIA Team (2025). FedCIA: Federated collaborative information aggregation for privacy-preserving recommendation. *arXiv preprint*, arXiv:2504.14208. https://arxiv.org/abs/2504.14208

  ## Key Terminology Glossary
    - **Latent Factor**: An abstract dimension of taste or preference learned implicitly from interaction data rather than specified by a content expert.
    - **Matrix Factorisation**: Decomposition of the sparse user-item rating matrix R into lower-rank matrices P and Q that encode user and item factor vectors respectively.
    - **Implicit Feedback**: Behavioural signals (clicks, plays, purchases, dwell-time) that indicate preference without explicit rating, requiring specialised loss functions (BPR, weighted square loss).
    - **Cold-Start Problem**: Difficulty making accurate predictions for new users or items that have little or no interaction history in the system.
    - **Filter Bubble**: The tendency of collaborative filtering systems to reinforce pre-existing preferences, reducing exposure to diverse or serendipitous content.
    - **Popularity Bias**: Systematic over-recommendation of popular items caused by their over-representation in training data, amplified by GNN neighbourhood aggregation.
    - **BPR Loss**: Bayesian Pairwise Ranking loss; optimises relative order of observed positive items over unobserved negatives in implicit feedback settings.
    - **ALS**: Alternating Least Squares; optimisation algorithm that fixes one factor matrix and solves for the other in closed form, alternating until convergence.
    - **Two-Stage Retrieval**: Production CF architecture separating fast approximate candidate generation (embedding ANN search) from accurate re-ranking (full feature scoring model).

- ### Provenance
  - sources:: https://dl.acm.org/doi/10.1145/138859.138867, https://arxiv.org/abs/2404.11343, https://arxiv.org/abs/2504.14208, https://arxiv.org/html/2510.12959v1, https://dl.acm.org/doi/10.1145/3383313.3412488, https://www.frontiersin.org/journals/big-data/articles/10.3389/fdata.2025.1599704/full
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
