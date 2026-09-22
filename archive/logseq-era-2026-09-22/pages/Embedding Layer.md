public:: true

# Embedding Layer

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:embedding-layer",
  "@type": "Page",
  "title": "Embedding Layer",
  "vc:slug": "embedding-layer",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:embedding-layer",
  "@type": "Class",
  "label": "Embedding Layer",
  "definition": "An embedding layer is a trainable component of a neural network that maps discrete tokens or categorical indices to dense, continuous vector representations. It is implemented as a lookup table whose rows are learned vectors, transforming sparse one-hot inputs into low-dimensional embeddings that capture semantic and relational structure. Embedding layers are the standard entry point for language, recommendation, and sequence models.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:neural-network",
      "label": "Neural Network"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:vocabulary",
        "label": "Vocabulary"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenization"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:one-hot-encoding",
        "label": "One Hot Encoding"
      },
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:representation-learning",
        "label": "Representation Learning"
      },
      {
        "@id": "urn:ngm:class:word-embedding",
        "label": "Word Embedding"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:embedding",
        "label": "Embedding"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:encoder",
        "label": "Encoder"
      },
      {
        "@id": "urn:ngm:class:positional-encoding",
        "label": "Positional Encoding"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:one-hot-encoding",
        "label": "One Hot Encoding"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - An embedding layer is a trainable lookup-table component within a [[Neural Network]] that maps discrete tokens, categorical indices, or entity identifiers to dense, continuous, low-dimensional vector representations in a learned [[Latent Space]]. Rather than operating on sparse [[One Hot Encoding]] vectors of vocabulary size V—which would require V-dimensional weight multiplications for every input—the embedding layer parameterises the mapping as a weight matrix E of shape (V, d), where d is the embedding dimension (typically 64–4096). Each input index i directly selects row i of E without any multiplication, making the forward pass an O(1) table lookup per token. The rows of E are initialised randomly (or from pretrained vectors such as [[Word2Vec]] or [[GloVe]]) and updated end-to-end via [[Backpropagation]]: only the rows corresponding to tokens seen in a given training batch receive gradient updates, providing a form of sparse gradient descent that scales gracefully to very large vocabularies. This learned geometric structure encodes semantic and syntactic relationships: tokens that co-occur in similar contexts are pushed to nearby regions of the d-dimensional space, so that vector arithmetic such as king − man + woman ≈ queen becomes approximately valid. The embedding layer is the standard first stage of language models, sequence classifiers, recommendation engines, knowledge graph encoders, and multimodal architectures, serving as the interface that translates the discrete symbolic world of tokens and identifiers into the continuous numerical world required by downstream [[Deep Learning]] components including [[Attention Mechanism]] layers, [[Convolutional Neural Network]] blocks, and feed-forward networks. Modern embedding layers extend the basic lookup with [[Positional Encoding]] to inject order information, weight-tying with the output unembedding matrix to reduce parameter count while improving perplexity, and subword tokenisation via [[Byte Pair Encoding]] or WordPiece to handle out-of-vocabulary morphology while keeping V tractable.

- ### Semantic Classification
  - owl-class:: machine-learning:EmbeddingLayer
  - owl-role:: ExecutableProtocol | NeuralComponent | RepresentationMethod
  - owl-inferred:: machine-learning:TrainableLayer, machine-learning:LookupTable, machine-learning:FeatureEncoder
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]
  - implemented-in-layer:: [[Neural Network]]

- ### Relationships
  - is-subclass-of:: [[Neural Network]], [[Trainable Layer]]
  - has-part:: [[Weight Matrix]], [[Vocabulary]], [[Gradient Update]]
  - requires:: [[Tokenization]], [[Vocabulary]], [[Backpropagation]], [[Loss Function]]
  - enables:: [[Representation Learning]], [[Word Embedding]], [[Semantic Search]], [[Natural Language Processing]], [[Recommendation System]], [[Knowledge Graph Completion]]
  - implements:: [[Embedding]], [[Lookup Table]], [[Feature Encoding]]
  - depends-on:: [[Machine Learning]], [[Gradient Descent]], [[Training Data]]
  - supports:: [[Natural Language Processing]], [[Computer Vision]], [[Transformer Architecture]], [[Large Language Models]]
  - uses:: [[One Hot Encoding]], [[Backpropagation]], [[Byte Pair Encoding]], [[Stochastic Gradient Descent]]
  - contrasts-with:: [[One Hot Encoding]], [[TF-IDF]], [[Sparse Representation]]
  - related-to:: [[Encoder]], [[Positional Encoding]], [[Attention Mechanism]], [[Word2Vec]], [[GloVe]], [[Embedding Model]]
  - standardized-by:: [[Hugging Face]], [[PyTorch]], [[TensorFlow]]
  - part-of:: [[Transformer Architecture]], [[Recurrent Neural Network]], [[Convolutional Neural Network]], [[Language Model]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:hasPart ai:WeightMatrix))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:hasPart ai:Vocabulary))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:hasPart ai:GradientUpdate))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:hasPart ai:EmbeddingDimension))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:hasPart ai:TokenIndex))
  ## Dependency Relationships
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:requires ai:Tokenization))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:requires ai:Vocabulary))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:requires ai:Backpropagation))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:requires ai:LossFunction))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:requires ai:TrainingData))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:dependsOn ai:GradientDescent))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:dependsOn ai:MachineLearning))
  ## Capability Relationships
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:enables ai:RepresentationLearning))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:enables ai:WordEmbedding))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:enables ai:SemanticSearch))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:enables ai:NaturalLanguageProcessing))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:enables ai:RecommendationSystem))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:enables ai:KnowledgeGraphCompletion))
  ## Implementation Relationships
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:implements ai:Embedding))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:implements ai:LookupTable))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:implements ai:FeatureEncoding))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:partOf ai:TransformerArchitecture))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:partOf ai:NeuralNetwork))
  ## Reduction Relationships
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:reducesTo ai:DenseVector))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:reducesTo ai:ContinuousRepresentation))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:contrastsWith ai:OneHotEncoding))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:contrastsWith ai:SparseRepresentation))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:contrastsWith ai:TF-IDF))
  ## Support Relationships
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:supports ai:NaturalLanguageProcessing))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:supports ai:TransformerArchitecture))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:supports ai:RecommendationSystem))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:supports ai:KnowledgeGraphEncoding))
  ## Relational Relationships
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:relatedTo ai:PositionalEncoding))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:relatedTo ai:AttentionMechanism))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:relatedTo ai:WordEmbedding))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:uses ai:BytePairEncoding))
      SubClassOf(ai:EmbeddingLayer
        ObjectSomeValuesFrom(ai:uses ai:StochasticGradientDescent))

  ## About
    The embedding layer is one of the oldest and most fundamental components in modern [[Deep Learning]], with origins traceable to the neural language model of Bengio et al. (2003), which first proposed learning word representations jointly with a probabilistic language model objective. The landmark Word2Vec work of Mikolov et al. (2013) demonstrated that standalone embedding layers could be pre-trained on massive corpora using shallow architectures (CBOW and Skip-gram) to produce transferable semantic representations with striking algebraic properties. GloVe (Pennington et al., 2014) complemented this by grounding embeddings in global co-occurrence statistics rather than local context windows. FastText (Bojanowski et al., 2017) extended static embeddings to sub-character n-gram bags, enabling morphologically rich languages and out-of-vocabulary generalisation.

    The [[Transformer Architecture]] (Vaswani et al., 2017) elevated the embedding layer from a preprocessing step to a central architectural element: the input embedding matrix and the output unembedding matrix are now typically shared (weight-tied) in language models, with the embedding layer also serving as the entry point for [[Positional Encoding]] — either via sinusoidal additive encodings (the original Transformer), learned absolute positional embeddings (BERT, GPT-2), relative position biases (T5), ALiBi (linear biases), or Rotary Position Embedding (RoPE) used in LLaMA and Qwen. Weight tying, introduced by Press and Wolf (2017) and Inan et al. (2017), shares the E matrix with the output softmax projection, reducing parameter count significantly — in small models such as Pythia-70M, embedding matrices account for over 73% of total parameters — while improving language model perplexity. At multi-billion parameter scales, however, large recent models including LLaMA 3, OLMo 2, DeepSeek-V3, and Qwen3 decouple input and output embeddings for performance reasons.

    The computational and representational properties of the embedding layer are deeply interlocked with the tokenisation strategy that feeds it. Subword tokenisation algorithms — [[Byte Pair Encoding]] (BPE, used in GPT series), WordPiece (used in [[BERT]]), and SentencePiece (used in LLaMA, T5) — partition text into variable-length subword units that balance vocabulary coverage against sequence length, directly controlling the shape of the embedding weight matrix and the out-of-vocabulary rate. The embedding layer thus forms a tightly coupled pair with the tokeniser: changing the vocabulary requires reinitialising the embedding matrix or transferring only overlapping embeddings.

  ## Components and Architecture
    - **Weight Matrix E**: shape (V, d), where V is vocabulary size (typically 32,000–250,000 for modern LLMs) and d is embedding dimension (64–4096+). Each row is the embedding vector for one token.
    - **Lookup Operation**: a forward pass selects matrix rows by integer index, equivalent to multiplying E by a one-hot vector but implemented as O(1) indexing.
    - **Sparse Gradient Updates**: during backpropagation, gradients flow only to rows corresponding to tokens present in the batch, creating a sparse update pattern. PyTorch implements this via `nn.Embedding` with optional sparse gradient mode.
    - **Positional Encoding**: injected after the embedding lookup, either additively (sinusoidal, learned absolute) or by modifying attention scores (RoPE, ALiBi). Without positional information, the embedding layer treats input as a bag-of-tokens.
    - **Weight Tying**: the transposed embedding matrix E^T is reused as the output projection matrix (V × d → V logits), reducing parameters and enforcing consistency between input and output token representations.
    - **Padding and Masking**: embedding layers support a `padding_idx` parameter; padding tokens receive zero embedients and do not receive gradient updates.
    - **Dimensionality**: embedding dimension d trades off representational capacity (higher d captures more nuanced relationships) against parameter count and computational cost. ALBERT-style models factorised the embedding matrix into a smaller inner dimension × full model dimension product to reduce parameters.

  ## Formal Algorithm
    Given vocabulary V = {w₁, …, w_V} and embedding dimension d:
    - Initialise E ∈ ℝ^(V×d) (random or pretrained)
    - Forward pass: for input token index i, output e_i = E[i, :] (row selection)
    - Loss computed downstream: L = f(e_i, …)
    - Backward pass via chain rule: ∂L/∂E[i,:] = ∂L/∂e_i (only row i updated)
    - Weight update: E[i,:] ← E[i,:] − η · ∂L/∂E[i,:]
    - All other rows E[j≠i,:] remain unchanged in this batch step

  ## Variants and Families
    - **Static / Pretrained Embeddings (Word2Vec, GloVe, FastText)**: trained once on a large corpus and frozen during downstream task training; efficient but context-insensitive (the same vector for "bank" in financial and river contexts).
    - **Contextualised Embeddings (ELMo, BERT, GPT)**: produced by running the full model up to a given layer; context-sensitive but require inference rather than a simple lookup.
    - **Factorised Embedding (ALBERT)**: decomposes the E matrix into two smaller matrices to reduce parameter count while maintaining a large vocabulary.
    - **Sparse Embeddings (SPLADE, CSRv2)**: produce sparse representations instead of dense vectors, enabling efficient inverted-index retrieval and interpretable token-level scoring.
    - **Categorical Feature Embeddings (TabNet, SAINT)**: apply the embedding layer idiom to non-textual categorical features in tabular data; entity IDs, product codes, and geographic identifiers all map to learned dense vectors.
    - **Knowledge Graph Embeddings (TransE, RotatE, ComplEx)**: treat entity and relation IDs as tokens; the embedding layer maps graph nodes/edges to continuous space for link prediction and completion tasks.
    - **Multimodal Embedding Layers**: vision-language models (CLIP, LLaVA) apply separate embedding layers to image patches (via patch projection) and text tokens before aligning them in a shared space.

  ## Use Cases
    - **Language Modelling and Generation**: the embedding layer is the universal entry point for autoregressive and masked language models (GPT, LLaMA, BERT, T5), encoding input token sequences for [[Transformer Architecture]] processing.
    - **Recommendation Systems**: user IDs and item IDs are embedded into dense vectors via two-tower architectures; at inference, item embeddings are precomputed and retrieved by [[Approximate Nearest Neighbour]] search given a user query embedding.
    - **Tabular Deep Learning**: categorical columns in structured datasets (product category, postal code, user tier) are replaced by learned embedding vectors, enabling gradient-based feature learning without one-hot explosion.
    - **Knowledge Graph Completion**: entity and relation embeddings trained on triple facts enable link prediction — predicting missing edges in knowledge graphs such as Wikidata or Freebase via scoring functions like TransE's distance heuristic.
    - **Code and Technical Search**: code embedding models (CodeBERT, UniXcoder) embed source code tokens and documentation tokens into a shared space via specialised embedding layers trained on code-text pairs.
    - **Speech and Audio**: discrete speech units from codecs such as EnCodec are embedded via lookup tables before sequence modelling with transformers in text-to-speech and speech language models (VALL-E, VoiceCraft).

  ## Academic Context
    The embedding layer concept bridges connectionist linguistics and modern deep learning. The foundational insight — that discrete symbols should be mapped to continuous representations for gradient-based learning — appears in Rumelhart's PDP volumes (1986) but crystallised in practice with Bengio et al.'s Neural Probabilistic Language Model (2003), which learned word embeddings jointly with a language model. The term "embedding" was popularised by the word2vec paper (Mikolov et al., 2013), which showed that a shallow two-layer network trained on a prediction objective over a corpus produces vectors with emergent analogical structure.

    Subsequent theoretical analysis by Levy and Goldberg (2014) showed that word2vec implicitly factorises a shifted pointwise mutual information (PMI) matrix, connecting the embedding layer to classical matrix-factorisation methods from information retrieval and collaborative filtering. The extension to subwords by Bojanowski et al. (2017, FastText) and to character-level encodings revealed the embedding layer's role in morphological generalisation. The contextualised turn — from static to dynamic embeddings — came with ELMo (Peters et al., 2018) and BERT (Devlin et al., 2018), which demonstrated that intermediate representations produced by deeper layers of the model carry richer contextual information than the initial embedding layer alone. This shifted the locus of representational power upward in the model stack while the embedding layer retained its role as the discrete-to-continuous interface.

  ## Current Landscape (2026)
    By 2026, embedding layers are ubiquitous and highly optimised. Key developments include: (1) Rotary Position Embedding (RoPE) has become the dominant positional encoding scheme for large autoregressive models (LLaMA 2/3, Mistral, Qwen), replacing sinusoidal and learned absolute approaches due to its extrapolation properties and compatibility with efficient attention patterns. (2) Weight-tying remains standard for smaller models but is increasingly untied at billion-parameter scales (LLaMA 3, DeepSeek-V3, Qwen3) where specialised input and output embedding spaces improve performance. (3) Vocabulary sizes have grown substantially — LLaMA 3 uses 128,256-token vocabulary vs. GPT-2's 50,257 — increasing embedding matrix size and memory footprint but improving multilingual coverage and tokenisation efficiency. (4) Flash Attention and other IO-aware kernels have made the attention layers efficient, but embedding layers remain a significant memory bandwidth bottleneck for large-vocabulary models, driving research into embedding compression, quantisation, and sparse approaches such as CSRv2 (ultra-sparse embeddings). (5) Tabular embedding layers have matured with frameworks such as TabPFN v2 and SAINT demonstrating state-of-the-art performance on structured data, while multimodal embedding projectors (linear layers mapping image patch features to token embedding space) have become standard in vision-language models like LLaVA-1.5 and InternVL.

  ## UK Context
    UK academia has made significant contributions to the mathematical foundations and applications of embedding layers. The University of Edinburgh's School of Informatics — historically renowned for computational linguistics — hosts active groups working on neural language model representations, including participation in shared tasks (SemEval-2024) and biomedical NLP using embedding models for electronic health records. The Alan Turing Institute, jointly funded and co-located with UCL and Imperial College London, co-ordinates research on representation learning across tabular, language, and graph domains. Imperial College London's AI research group has contributed to physics-informed neural networks where embedding layers encode spatial or temporal coordinates. University of Manchester's AI Centre for Doctoral Training includes projects on embedding-based knowledge graph reasoning for healthcare ontologies; their collaborations with NHS trusts investigate clinical concept embedding for ICD-10 code mapping and phenotype extraction from free-text EHR notes. In Northern England, University of Leeds hosts the Centre for Computational Imaging and Simulation Technologies in Biomedicine (CISTIB), which applies graph and entity embedding layers to medical image analysis and clinical data integration; University of Sheffield's speech and language group has long-standing expertise in word-level and character-level embedding representations for spoken language understanding and ASR. The UK's AI ecosystem, including SMEs clustered around Manchester's MediaCityUK and the Leeds-Sheffield AI corridor, increasingly adopts embedding layers as the foundation for enterprise knowledge retrieval and recommendation systems deployed in retail, logistics, and financial services.

  ## Future Directions (2026–2030)
    - **Long-context and document-level embeddings**: extending the effective context window of embedding-augmented architectures via sparse attention and memory mechanisms to handle book-length or code-repository-level inputs.
    - **Continuous tokenisation and tokeniser-free models**: research into replacing the discrete vocabulary / embedding layer pair with continuous patch representations directly from raw bytes or audio samples (MegaByte, BYTELATENT) could fundamentally alter the embedding layer's role.
    - **Multimodal unified embedding spaces**: single embedding projectors that unify text, image, video, audio, and structured data tokens (as demonstrated by Google's Gemini Embedding 2 and Qwen3-VL-Embedding) will become standard, collapsing separate modality-specific embedding layers into a unified architecture.
    - **Hardware-aware embedding optimisation**: as model vocabulary sizes grow past 250,000 tokens, embedding matrices occupy multiple GiB; techniques including vector quantisation, product quantisation, and ultra-sparse representations (CSRv2) will be needed to fit embedding layers on edge devices.
    - **Interpretability and probing**: the geometry of embedding spaces is increasingly subject to mechanistic interpretability research; linear representation hypotheses and probing classifiers applied to embedding layers reveal structured subspaces for syntactic, semantic, and factual attributes.
    - **Federated and privacy-preserving embedding learning**: embedding layers trained on distributed healthcare or financial data without centralising sensitive records, using federated gradient averaging or differential privacy mechanisms.

  ## Research and Literature
    1. Bengio, Y., Ducharme, R., Vincent, P., & Jauvin, C. (2003). A neural probabilistic language model. *Journal of Machine Learning Research*, 3, 1137–1155.
    2. Mikolov, T., Chen, K., Corrado, G., & Dean, J. (2013). Efficient estimation of word representations in vector space. *arXiv:1301.3781*.
    3. Pennington, J., Socher, R., & Manning, C. D. (2014). GloVe: Global vectors for word representation. *EMNLP*, 1532–1543.
    4. Bojanowski, P., Grave, E., Joulin, A., & Mikolov, T. (2017). Enriching word vectors with subword information. *TACL*, 5, 135–146.
    5. Press, O., & Wolf, L. (2017). Using the output embedding to improve language models. *EACL*, 157–163.
    6. Inan, H., Khosravi, K., & Socher, R. (2017). Tying word vectors and word classifiers: A loss framework for language modeling. *ICLR 2017*.
    7. Vaswani, A., Shazeer, N., Parmar, N., et al. (2017). Attention is all you need. *NeurIPS*, 30.
    8. Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2018). BERT: Pre-training of deep bidirectional transformers for language understanding. *arXiv:1810.04805*.
    9. Peters, M., Neumann, M., Iyyer, M., et al. (2018). Deep contextualised word representations (ELMo). *NAACL-HLT*, 2227–2237.
    10. Levy, O., & Goldberg, Y. (2014). Neural word embedding as implicit matrix factorisation. *NeurIPS*.
    11. Lan, Z., Chen, M., Goodman, S., et al. (2019). ALBERT: A lite BERT for self-supervised learning of language representations. *ICLR 2020*.
    12. Su, J., Lu, Y., Pan, S., et al. (2021). RoFormer: Enhanced transformer with rotary position embedding. *arXiv:2104.09864*.
    13. Press, O., Smith, N. A., & Lewis, M. (2021). Train short, test long: Attention with linear biases enables input length extrapolation (ALiBi). *ICLR 2022*.
    14. Bordes, A., Usunier, N., Garcia-Duran, A., et al. (2013). Translating embeddings for modelling multi-relational data (TransE). *NeurIPS*.
    15. Sun, Z., Deng, Z.-H., Nie, J.-Y., & Tang, J. (2019). RotatE: Knowledge graph embedding by relational rotation in complex space. *ICLR 2019*.
    16. Brown, T. B., Mann, B., Ryder, N., et al. (2020). Language models are few-shot learners (GPT-3). *NeurIPS*, 33, 1877–1901.
    17. Touvron, H., Lavril, T., Izacard, G., et al. (2023). LLaMA: Open and efficient foundation language models. *arXiv:2302.13971*.
    18. Meta AI (2024). LLaMA 3 technical report. *arXiv:2407.21783*.
    19. Lample, G., & Conneau, A. (2019). Cross-lingual language model pretraining. *NeurIPS*.
    20. Kim, Y. (2014). Convolutional neural networks for sentence classification. *EMNLP*, 1746–1751.
    21. Zhang, S., Roller, S., Goyal, N., et al. (2022). OPT: Open pre-trained transformer language models. *arXiv:2205.01068*.
    22. Huang, K., Altosaar, J., & Ranganath, R. (2019). ClinicalBERT: Modelling clinical notes and predicting hospital readmission. *arXiv:1904.05342*.
    23. Reimers, N., & Gurevych, I. (2019). Sentence-BERT: Sentence embeddings using siamese BERT-networks. *EMNLP 2019*, 3982–3992.
    24. Nguyen, T., Rosenberg, M., Song, X., et al. (2016). MS MARCO: A human generated machine reading comprehension dataset. *NIPS 2016 Workshop*.
    25. Gu, A., & Dao, T. (2023). Mamba: Linear-time sequence modeling with selective state spaces. *arXiv:2312.00752*.
    26. Zhu, D., Yang, J., et al. (2025). CSRv2: Unlocking ultra-sparse embeddings for retrieval. *arXiv:2602.05735*.
    27. Edinburgh Clinical NLP (2024). Edinburgh Clinical NLP at SemEval-2024 Task 2. *arXiv:2404.00484*.
    28. Neelakantan, A., Xu, T., Puri, R., et al. (2022). Text and code embeddings by contrastive pre-training (OpenAI text-embedding-ada-002). *arXiv:2201.10005*.

- ### Provenance
  - sources:: Bengio et al. 2003 (JMLR); Mikolov et al. 2013 (arXiv:1301.3781); Pennington et al. 2014 (GloVe); Press & Wolf 2017 (EACL); Vaswani et al. 2017 (NeurIPS); Devlin et al. 2018 (arXiv:1810.04805); Su et al. 2021 (RoPE arXiv:2104.09864); ICLR Blogposts 2025 positional-embedding survey; mbrenndoerfer.com weight-tying analysis; arXiv:2603.26663 (weight tying biases); Zhu et al. 2025 CSRv2 arXiv:2602.05735; Edinburgh Clinical NLP arXiv:2404.00484
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
