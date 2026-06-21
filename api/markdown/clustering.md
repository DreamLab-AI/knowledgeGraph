- ### Definition
  - Clustering is a foundational [[Unsupervised Learning]] task that organises a collection of objects into groups — called clusters — such that members within a cluster are more similar to one another than to members of other clusters, as measured by a chosen [[Distance Metric]] or similarity function. Unlike [[Classification]], which assigns inputs to predefined label categories using labelled training data, clustering operates purely on unlabelled observations, discovering latent structure directly from the distributional geometry of the data. The problem is formally stated as: given a dataset X = {x₁, …, xₙ} where each xᵢ ∈ ℝᵈ, find a partition C = {C₁, …, Cₖ} (or a soft assignment) that optimises a cluster-quality criterion such as the within-cluster sum of squared distances (k-means objective), a likelihood function over a probabilistic generative model ([[Gaussian Mixture Model]]), or a graph-cut criterion ([[Spectral Clustering]]). Algorithms differ substantially in the cluster shape they can represent — centroid methods like [[K-Means]] assume convex, isotropic clusters; density-based methods like [[DBSCAN]] discover arbitrarily shaped dense regions while labelling sparse outliers as noise; [[Hierarchical Clustering]] produces a dendrogram of nested partitions; and probabilistic methods like the [[Gaussian Mixture Model]] yield soft, overlapping memberships. Modern practice supplements classical geometric algorithms with deep representational approaches: [[Autoencoder]] networks learn compact [[Embedding]] spaces in which classical algorithms achieve much higher quality, while [[Self-Supervised Learning]] and [[Contrastive Learning]] objectives train [[Neural Network]] encoders whose output [[Embedding Space]] is shaped to benefit downstream clustering. [[Dimensionality Reduction]] techniques — [[Principal Component Analysis]], [[t-SNE]], and [[UMAP]] — are routinely applied before clustering both to eliminate noise dimensions and to enable visual inspection of cluster geometry. Cluster quality is assessed without ground-truth labels using internal indices such as the [[Silhouette Score]] and the Davies-Bouldin index, or against known label sets using external metrics such as normalised mutual information. Clustering is a cornerstone of [[Data Mining]] and [[Exploratory Data Analysis]], enabling [[Customer Segmentation]], [[Anomaly Detection]], [[Topic Modelling]], [[Community Detection]] in networks and social graphs, and bioinformatics applications including single-cell RNA sequencing cell-type identification. It also serves as a preprocessing step that compresses continuous representations for [[Predictive Analytics]] and [[Representation Learning]], and increasingly runs directly on high-dimensional [[Large Language Model]] [[Embedding]] outputs stored in a [[Vector Database]].

- ### Semantic Classification
  - owl-class:: machine-learning:Clustering
  - owl-role:: LearningParadigm | DataMiningTechnique | UnsupervisedMethod
  - owl-inferred:: ml:PartitioningMethod, ml:ExploratoryTechnique, ml:RepresentationUtility
  - belongs-to-domain:: [[Machine Learning]], [[Data Mining]], [[Natural Language Processing]], [[Bioinformatics]]
  - implemented-in-layer:: [[Unsupervised Learning]]

- ### Relationships
  - is-subclass-of:: [[Unsupervised Learning]], [[Machine Learning]], [[Data Mining]]
  - has-part:: [[K-Means]], [[DBSCAN]], [[Hierarchical Clustering]], [[Spectral Clustering]], [[Gaussian Mixture Model]], [[Distance Metric]], [[Silhouette Score]]
  - requires:: [[Distance Metric]], [[Feature Engineering]], [[Embedding]], [[Embedding Space]]
  - enables:: [[Anomaly Detection]], [[Community Detection]], [[Customer Segmentation]], [[Exploratory Data Analysis]], [[Topic Modelling]]
  - depends-on:: [[Dimensionality Reduction]], [[Feature Engineering]], [[Density Estimation]]
  - supports:: [[Predictive Analytics]], [[Representation Learning]], [[Dimensionality Reduction]], [[Transfer Learning]], [[Graph Analytics]]
  - uses:: [[Embedding]], [[Embedding Space]], [[Gaussian Mixture Model]], [[Neural Network]], [[Autoencoder]], [[t-SNE]], [[UMAP]], [[Principal Component Analysis]], [[Graph Neural Network]], [[Self-Supervised Learning]], [[Contrastive Learning]], [[Vector Database]], [[Large Language Model]]
  - contrasts-with:: [[Classification]], [[Regression]]
  - related-to:: [[Graph Analytics]], [[Data Mining]], [[Natural Language Processing]], [[Bioinformatics]], [[Self-Supervised Learning]], [[Contrastive Learning]], [[Representation Learning]], [[Transfer Learning]]
  - standardized-by:: [[Unsupervised Learning]]

- ### Content

  ## Compositional Relationships (Components)
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:hasPart ml:KMeansAlgorithm))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:hasPart ml:DBSCAN))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:hasPart ml:HierarchicalClustering))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:hasPart ml:SpectralClustering))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:hasPart ml:GaussianMixtureModel))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:hasPart ml:DistanceMetric))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:hasPart ml:ClusterQualityIndex))

  ## Dependency Relationships
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:requires ml:DistanceMetric))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:requires ml:FeatureEngineering))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:requires ml:EmbeddingSpace))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:dependsOn ml:DimensionalityReduction))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:dependsOn ml:DensityEstimation))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:dependsOn ml:FeatureEngineering))

  ## Capability Relationships
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:enables ml:AnomalyDetection))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:enables ml:CommunityDetection))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:enables ml:CustomerSegmentation))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:enables ml:ExploratoryDataAnalysis))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:enables ml:TopicModelling))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:supports ml:PredictiveAnalytics))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:supports ml:RepresentationLearning))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:supports ml:GraphAnalytics))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:supports ml:BioinformaticsAnalysis))

  ## Implementation Relationships
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:uses ml:EmbeddingSpace))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:uses ml:NeuralNetworkEncoder))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:uses ml:Autoencoder))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:uses ml:ContrastiveLearningObjective))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:uses ml:SelfSupervisedRepresentation))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:uses ml:tSNEProjection))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:uses ml:UMAPProjection))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:uses ml:GraphNeuralNetwork))

  ## Reduction Relationships
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:reducesTo ml:PartitioningProblem))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:reducesTo ml:DensityEstimationProblem))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:reducesTo ml:GraphCutProblem))
      SubClassOf(ml:Clustering
        ObjectSomeValuesFrom(ml:reducesTo ml:LatentSpaceOrganisation))

  ## About

  Clustering is one of the oldest and most practically impactful techniques in [[Machine Learning]] and [[Data Mining]]. Its core intuition — that structure in data can be revealed by grouping similar items together without any labels — appears across statistics, combinatorics, and information theory simultaneously in the 1950s and 1960s, predating the modern ML canon by decades. The term itself was consolidated by Tryon (1939) in psychological trait analysis, while MacQueen's 1967 formalisation of k-means and Ward's 1963 hierarchical agglomerative criterion established the algorithmic foundations that persist today. The enduring appeal of clustering rests on a fundamental empirical observation: most real-world high-dimensional datasets are not uniformly distributed but instead concentrate on lower-dimensional manifolds with intrinsic categorical or graded structure that an unsupervised partition can approximate. This manifold hypothesis connects clustering directly to [[Representation Learning]] and [[Dimensionality Reduction]], making the three disciplines mutually reinforcing.

  The distinction between cluster paradigms is best understood through their structural assumptions. Centroid methods like [[K-Means]] minimise the sum of squared [[Distance Metric]] from each point to its nearest cluster representative; they are computationally efficient (O(nkdt) per iteration for n points, k clusters, d dimensions, t iterations) and scale to billions of data points, but assume spherical, equal-variance clusters. Density-based methods like [[DBSCAN]] define clusters as maximal sets of density-connected points, using two parameters (ε radius, min-points threshold) to separate core, border, and noise points; they handle arbitrary cluster shapes, detect outliers natively, and require no pre-specified k, but are sensitive to parameter choice and struggle in varying-density regimes — a limitation that motivated HDBSCAN's hierarchical density extension. [[Hierarchical Clustering]] builds a dendrogram through repeated agglomeration (Ward, complete-linkage, single-linkage) or division, allowing post-hoc selection of any granularity level, at the cost of O(n² log n) time for most linkages. [[Spectral Clustering]] embeds the graph Laplacian of a similarity matrix before applying k-means in the resulting eigenspace, capturing complex manifold-structured clusters at O(n³) eigen-decomposition cost. Probabilistic model-based clustering, principally via the [[Gaussian Mixture Model]] fitted with the Expectation-Maximisation algorithm, provides soft cluster assignments with calibrated uncertainty, interpretable covariance geometry, and a principled model-selection criterion (BIC/AIC). [[Density Estimation]] is the generative counterpart: rather than assigning points to clusters, a density model assigns each point a likelihood under a learned distribution, enabling outlier detection by thresholding.

  The 2015-2025 decade saw the rise of deep clustering, in which the [[Embedding]] produced by a [[Neural Network]] encoder is jointly optimised with a clustering objective, collapsing the sequential pipeline of dimensionality reduction followed by classical clustering into a single end-to-end trainable system. Xie et al. (2016) introduced Deep Embedded Clustering (DEC), using soft cluster assignments to refine a [[Autoencoder]] representation iteratively. [[Contrastive Learning]] methods (SimCLR, MoCo) trained with self-supervised objectives on unlabelled data produce embeddings in which semantically similar instances are proximity-mapped, giving k-means dramatically better structure to exploit. By 2024-2025, the dominant trend in bioinformatics was applying these methods to single-cell RNA sequencing (scRNA-seq): methods like scAGCL (adversarial [[Graph Neural Network]] contrastive clustering, 2025), scDCCA (deep contrastive clustering with autoencoders), and scSCCNIA (similarity-matrix contrastive clustering with neighbour information aggregation) each achieve substantial gains over classical k-means on cell-type identification benchmarks. Separately, [[Large Language Model]] embeddings from models like BERT, GPT-4, and Llama-3 have replaced bag-of-words and TF-IDF as inputs to clustering pipelines for [[Natural Language Processing]] tasks, with 2025 studies demonstrating LLM-based k-means consistently outperforming traditional text features on customer segmentation and [[Topic Modelling]] tasks. The ERASMO method (2024) combines LLM cluster descriptions with iterative segmentation to produce human-readable, actionable cluster summaries automatically.

  ## Components / Architecture

  - **Distance / Similarity Layer**: computes pairwise affinity using Euclidean, cosine, Manhattan, or learned [[Distance Metric]]s; cosine dominates [[Large Language Model]] [[Embedding Space]] settings because embeddings live on the unit hypersphere.
  - **Representation Layer**: [[Feature Engineering]], [[Dimensionality Reduction]] (PCA → t-SNE → UMAP for visualisation; PCA alone for scaling), or a trained [[Autoencoder]] / [[Self-Supervised Learning]] encoder that maps raw inputs to a latent [[Embedding]].
  - **Partition Layer**: the core algorithm — [[K-Means]], [[DBSCAN]], [[Hierarchical Clustering]], [[Spectral Clustering]], [[Gaussian Mixture Model]], or a deep clustering network.
  - **Evaluation Layer**: [[Silhouette Score]], Davies-Bouldin index, Calinski-Harabasz index (internal); Adjusted Rand Index, Normalised Mutual Information (external, when labels available).
  - **Post-Processing Layer**: cluster labelling, merging, outlier filtering, and soft-to-hard assignment thresholding — feeds into [[Predictive Analytics]] and downstream models.
  - **Indexing Layer (2024+)**: in production systems handling millions of embeddings, approximate nearest-neighbour indices (FAISS, ScaNN, HNSW) backed by a [[Vector Database]] replace naive pairwise distance computation, enabling sub-linear k-means and DBSCAN execution.

  ## Use Cases / Major Families

  - **Customer and Market Segmentation**: [[K-Means]] and [[Gaussian Mixture Model]] on behavioural and transactional [[Embedding]]s identify customer cohorts for personalised marketing, pricing optimisation, and churn prediction. 2025 LLM-based segmentation pipelines (ERASMO, survey-analysis tools) expand this to unstructured text reviews.
  - **[[Anomaly Detection]]**: data points that fall outside any dense cluster (DBSCAN noise points) or carry low likelihood under a fitted [[Gaussian Mixture Model]] are flagged as anomalies; widely deployed in fraud detection, network intrusion detection, and predictive maintenance.
  - **Document Organisation and [[Topic Modelling]]**: k-means and hierarchical methods on BERT / LLM [[Embedding]]s cluster document corpora into topics; [[Community Detection]] algorithms extend this to citation and co-authorship networks.
  - **[[Bioinformatics]]**: clustering cell populations in scRNA-seq and scATAC-seq data is the canonical high-dimensional biology task; deep clustering methods (scAGCL, scDCCA) now dominate leaderboards.
  - **Image and Video Organisation**: clustering in CNN feature spaces or CLIP [[Embedding Space]]s supports deduplication, visual search, and dataset curation for training large models.
  - **[[Community Detection]] in Graphs**: spectral and modularity-based clustering on graph adjacency matrices identify communities in social networks, protein-interaction networks, and knowledge graphs — closely related to [[Graph Analytics]] and [[Graph Neural Network]] methods.
  - **Recommendation Systems**: clustering users and items in shared [[Embedding Space]] enables coarse candidate retrieval before fine-grained scoring; used at billion-user scale by YouTube, Spotify, and Amazon.

  ## Academic Context

  The theoretical foundations of clustering span statistical mechanics (Potts model, mean-field theory), combinatorial optimisation (NP-hard graph partitioning), information theory (minimum description length), and Bayesian nonparametrics (Dirichlet Process Mixture Models). Key intellectual lineages include:

  - **Centroid / K-Means**: MacQueen (1967), Lloyd (1982, online algorithm), Arthur & Vassilvitskii (2007, k-means++ initialisation), Sculley (2010, mini-batch k-means for web scale).
  - **Density-Based**: Ester, Kriegel, Sander & Xu (1996, DBSCAN, KDD Best Paper), Campello, Moulavi & Sander (2013, HDBSCAN).
  - **Hierarchical**: Ward (1963), Murtagh & Contreras (2012 review).
  - **Spectral**: Shi & Malik (2000, normalised cuts), Ng, Jordan & Weiss (2002, spectral clustering).
  - **Probabilistic**: Dempster, Laird & Rubin (1977, EM), Reynolds (2009, GMM tutorial).
  - **Deep Clustering**: Xie, Girshick & Farhadi (2016, DEC), Guo et al. (2017, DCEC), Van Gansbeke et al. (2020, SCAN), Li et al. (2021, contrastive clustering), Chen & He (2021, SimSiam).
  - **LLM-enhanced**: Mao et al. (2023, CARP), Viswanathan et al. (2024, ERASMO), Zhang et al. (2025, LLM-k-means for customer segmentation).
  - **Graph / scRNA-seq**: Xu & Su (2015, SIMLR), scAGCL (2025, Oxford Bioinformatics), scDCCA (2023, Briefings in Bioinformatics).

  Benchmark datasets include the UCI clustering repository (Iris, Wine, Seeds), the MNIST image digit set, the 20 Newsgroups text corpus, and the Human Cell Atlas for single-cell data. Key venues: NeurIPS, ICML, KDD, ICLR, Bioinformatics, and IEEE TPAMI.

  ## Current Landscape (2026)

  By mid-2026, clustering has bifurcated into two operational regimes. In the classical regime, sk-learn-compatible implementations of k-means, HDBSCAN, and [[Gaussian Mixture Model]] remain the dominant daily-use tools for tabular and moderate-scale data; comparative analyses published in 2025 (ArXiv 2503.23215) confirm that algorithm selection should be guided by data geometry: k-means excels in speed for compact spherical clusters; DBSCAN handles irregular shapes and noise natively; and spectral clustering captures complex manifold relationships at higher computational cost. The 2025 trend of combining these classical algorithms with [[Principal Component Analysis]] or [[UMAP]] pre-reduction and automated hyperparameter search (via silhouette-score grid search or Bayesian optimisation) has become standard practice.

  In the deep-learning regime, embedding-first clustering dominates: LLM embeddings (OpenAI text-embedding-3-large, Cohere Embed v3, BGE-M3) are produced, stored in a [[Vector Database]] (Pinecone, Weaviate, Qdrant), and clustered with approximate-nearest-neighbour k-means or HDBSCAN. This pipeline underlies production customer segmentation at firms including Zalando, Klarna, and Spotify. A 2025 study (MDPI Electronics, LLM-based customer representation) found LLM-embedding-based clustering surpassed hand-crafted feature baselines on downstream retention prediction tasks by 12-18 percentage points. The LLM-as-cluster-labeller pattern, in which a frontier model is prompted with a sample of cluster members to generate a human-readable description, has also become widespread in enterprise analytics tooling (Hex, Comet ML, DataRobot) by 2026.

  The scRNA-seq bioinformatics community published the Human Cell Atlas v2 in 2025, cataloguing over 50 million cells across 30 organ systems — a dataset that has become the canonical large-scale clustering benchmark, driving adoption of scAGCL, Seurat v5, and other deep graph-clustering methods designed for high-dimensional sparse count data.

  ## UK Context

  UK universities hold prominent positions in both the theoretical and applied clustering literature. The University of Edinburgh hosts the Informatics school's Machine Learning and Bioinformatics groups, which contribute to the Human Cell Atlas project; Edinburgh also installed the largest Cerebras CS-3 supercomputing cluster in Europe in 2024, accelerating large-scale clustering experiments on genomics and NLP data. The University of Manchester's Department of Computer Science maintains strong traditions in [[Data Mining]] and pattern recognition stretching back to the work of the Manchester Statistical Machine group; Manchester is also a co-lead of the UKRI North West Research and Innovation Cluster, which funds applied ML in healthcare and manufacturing. UCL's Centre for Computational Statistics and Machine Learning (CSML) has made fundamental contributions to Bayesian nonparametric clustering, including Dirichlet Process Mixture Models and Indian Buffet Process methods. Cambridge's MRC Biostatistics Unit leads statistical clustering methodology for clinical trial subgroup identification and cohort stratification. Imperial College London's Data Science Institute deploys large-scale spatial clustering for urban analytics and transport network analysis. In the Northern England industrial context, Leeds and Sheffield apply clustering to materials science and manufacturing quality control; Newcastle upon Tyne's Digital Institute uses clustering for health-data patient stratification in the NHS, leveraging the North East Patient Data Research Hub. The Alan Turing Institute (London, with partners at all above universities) funds research into scalable and privacy-preserving clustering under federated and differential-privacy constraints.

  ## Future Directions (2026-2030)

  - **Foundation Model Clustering**: as embedding models become increasingly universal, clustering in [[Large Language Model]] embedding spaces will displace task-specific feature engineering; prompt-conditioned clustering — clustering that respects user-specified semantic axes — is an active 2026 research direction.
  - **Federated and Privacy-Preserving Clustering**: clustering across distributed, sensitive datasets (NHS patient records, financial transaction logs) without centralising data; differential-privacy k-means (2024-2025 NeurIPS papers) and federated HDBSCAN are early prototypes.
  - **Streaming and Online Clustering**: incremental algorithms that update cluster assignments as data arrives in real time, without full re-runs; critical for IoT sensor streams, financial market microstructure, and social media monitoring.
  - **Cluster Interpretability**: integrating [[Large Language Model]] summarisation to auto-generate cluster descriptions and drift alerts; closes the human-AI loop in customer analytics and clinical decision support.
  - **Multimodal Clustering**: joint clustering of text, image, audio, and tabular modalities in a shared [[Embedding Space]], driven by multimodal foundation models (GPT-4o, Gemini Ultra, Claude); early results show cross-modal clusters significantly outperform unimodal baselines on product catalogue and medical imaging tasks.
  - **Scalable Deep Graph Clustering**: extending [[Graph Neural Network]] deep-clustering methods from the million-cell regime (scRNA-seq) to trillion-node regimes (social graphs, knowledge graphs) using sparse attention and sub-graph sampling.
  - **Theory of Deep Clustering**: deriving generalisation bounds for jointly trained encoder-clustering objectives; connecting deep clustering convergence to the manifold hypothesis and information-geometric analysis of the [[Embedding Space]].

  ## Key Terminology Glossary

  - **Cluster**: a subset of data points judged mutually similar under a chosen metric; the output unit of any clustering algorithm.
  - **Centroid**: the mean representative of a cluster in centroid-based methods; not necessarily a real data point.
  - **Dendrogram**: the tree structure produced by hierarchical clustering, showing nested merge/split history.
  - **Silhouette Coefficient**: per-point internal quality measure: (b − a) / max(a, b), where a = mean intra-cluster distance, b = mean nearest-cluster distance; ranges from −1 (wrong cluster) to +1 (well-clustered).
  - **ε-neighbourhood** (DBSCAN): the ball of radius ε around a point; core points have at least min-points neighbours within this ball.
  - **Soft Assignment**: probabilistic cluster membership, as in [[Gaussian Mixture Model]]; a point has a fractional membership in multiple clusters summing to 1.
  - **Inertia**: the k-means objective function value — total within-cluster sum of squared distances to centroids; lower is better.
  - **Davies-Bouldin Index**: ratio of within-cluster scatter to between-cluster distance, averaged over clusters; lower is better.
  - **Normalised Mutual Information (NMI)**: external evaluation metric measuring agreement between predicted cluster labels and ground-truth labels using information theory.

  ## Research & Literature

  1. MacQueen, J. B. (1967). Some methods for classification and analysis of multivariate observations. *Proceedings of 5th Berkeley Symposium on Mathematical Statistics and Probability*, 1, 281-297.
  2. Ward, J. H. (1963). Hierarchical grouping to optimize an objective function. *Journal of the American Statistical Association*, 58(301), 236-244.
  3. Ester, M., Kriegel, H. P., Sander, J., & Xu, X. (1996). A density-based algorithm for discovering clusters in large spatial databases with noise. *KDD*, 96(34), 226-231.
  4. Shi, J., & Malik, J. (2000). Normalized cuts and image segmentation. *IEEE TPAMI*, 22(8), 888-905.
  5. Ng, A. Y., Jordan, M. I., & Weiss, Y. (2002). On spectral clustering: analysis and an algorithm. *NeurIPS*, 14.
  6. Arthur, D., & Vassilvitskii, S. (2007). k-means++: the advantages of careful seeding. *SODA*, 1027-1035.
  7. Dempster, A. P., Laird, N. M., & Rubin, D. B. (1977). Maximum likelihood from incomplete data via the EM algorithm. *Journal of the Royal Statistical Society B*, 39(1), 1-38.
  8. Campello, R. J. G. B., Moulavi, D., & Sander, J. (2013). Density-based clustering based on hierarchical density estimates. *PAKDD*, 160-172.
  9. Xie, J., Girshick, R., & Farhadi, A. (2016). Unsupervised deep embedding for clustering analysis. *ICML*, 48, 478-487.
  10. Van Gansbeke, W., Vandeghen, S., Van den Berghe, E., & Blaschko, M. B. (2020). SCAN: Learning to classify images without labels. *ECCV*, 268-285.
  11. Li, Y., Hu, P., Liu, Z., Peng, D., Zhou, J. T., & Peng, X. (2021). Contrastive clustering. *AAAI*, 35(10), 8547-8555.
  12. Chen, X., & He, K. (2021). Exploring simple Siamese representation learning. *CVPR*, 15750-15758.
  13. Guo, X., Liu, X., Zhu, E., & Yin, J. (2017). Deep clustering with convolutional autoencoders. *ICONIP*, 373-382.
  14. Reynolds, D. (2009). Gaussian mixture models. *Encyclopedia of Biometrics*, 1, 827-832.
  15. Lloyd, S. (1982). Least squares quantization in PCM. *IEEE Transactions on Information Theory*, 28(2), 129-137.
  16. Sculley, D. (2010). Web-scale k-means clustering. *WWW*, 1177-1178.
  17. Murtagh, F., & Contreras, P. (2012). Algorithms for hierarchical clustering: an overview. *WIREs Data Mining and Knowledge Discovery*, 2(1), 86-97.
  18. Viswanathan, V., Gashteovski, K., Lawrence, C., Wu, T., & Neubig, G. (2024). ERASMO: Leveraging large language models for enhanced clustering segmentation. *ArXiv*, 2410.03738.
  19. Xu, J., & Su, Z. (2015). SIMLR: a tool for large-scale genomic analyses by multi-kernel learning. *Genome Biology*.
  20. scAGCL: Deep clustering of single-cell RNA-seq using adversarial graph contrastive learning. (2025). *Briefings in Bioinformatics*, bbaf423.
  21. scDCCA: Deep contrastive clustering for single-cell RNA-seq data based on auto-encoder network. (2023). *Briefings in Bioinformatics*, 24(1), bbac625.
  22. ArXiv (2025). Unsupervised learning: comparative analysis of clustering techniques on high-dimensional data. ArXiv:2503.23215.
  23. ArXiv (2024). SHADE: Deep density-based clustering. ArXiv:2410.06265.
  24. Zhang, Y. et al. (2025). LLM-based embeddings for clustering and predicting integrated reporting quality levels. *Discover Computing*, Springer. https://link.springer.com/article/10.1007/s10791-025-09590-6
  25. University of Edinburgh Newsroom (2024). University of Edinburgh installs largest CS-3 cluster in Europe to accelerate AI research. https://edinburghuni-newsroom.prgloo.com/news/university-of-edinburgh-installs-largest-cs-3-cluster-in-europe
  26. UKRI (2024). Research and innovation clusters to boost UK regional growth. https://www.ukri.org/news/research-and-innovation-clusters-to-boost-uk-regional-growth/
  27. Hastie, T., Tibshirani, R., & Friedman, J. (2009). *The Elements of Statistical Learning* (2nd ed.). Springer.
  28. Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*. MIT Press. Chapter 14 (Autoencoders) and Chapter 15 (Representation Learning).

- ### Provenance
  - sources:: https://arxiv.org/html/2503.23215v1, https://arxiv.org/pdf/2410.06265, https://academic.oup.com/bib/article/26/4/bbaf423/8239083, https://link.springer.com/article/10.1007/s10791-025-09590-6, https://arxiv.org/pdf/2410.03738, https://edinburghuni-newsroom.prgloo.com/news/university-of-edinburgh-installs-largest-cs-3-cluster-in-europe, https://www.ukri.org/news/research-and-innovation-clusters-to-boost-uk-regional-growth/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm