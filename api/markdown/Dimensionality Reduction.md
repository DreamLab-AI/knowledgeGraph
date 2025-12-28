- ### OntologyBlock
  - ontology:: true
  - public-access:: true
  - term-id:: AI-1021
  - preferred-term:: Dimensionality Reduction
  - source-domain:: ai
  - status:: draft
  - owl:class:: ai:DimensionalityReduction

### Relationships
- is-subclass-of:: [[Machine Learning]]
- is-subclass-of:: [[Unsupervised Learning]]
  collapsed:: true
  - #### Inverse Relationships (Inferred by Reasoner)
    - PCA is-subclass-of Dimensionality Reduction
    - t-SNE is-subclass-of Dimensionality Reduction
    - UMAP is-subclass-of Dimensionality Reduction
- skos:related:: [[Feature Engineering]]
- skos:related:: [[Feature Selection]]
- skos:related:: [[Curse of Dimensionality]]
- enables:: [[Data Visualization]]
- improves:: [[Computational Efficiency]]

### Definition
Dimensionality reduction is the process of transforming high-dimensional data into a lower-dimensional representation while preserving important structural properties and relationships. It addresses the curse of dimensionality, reduces computational costs, enables visualization, removes noise, and often improves model performance by eliminating redundant or irrelevant features and revealing underlying patterns in data.

### Motivation
**Curse of Dimensionality:**
- Data becomes sparse in high dimensions
- Distance metrics lose meaning
- Exponential increase in required samples
- Visualization impossible beyond 3D

**Benefits:**
- Faster training and inference
- Reduced storage requirements
- Visualization of complex data
- Noise reduction
- Avoid overfitting
- Improved model performance

### Categories
**Feature Selection:**
- Choose subset of original features
- Preserves interpretability
- Filter/wrapper/embedded methods

**Feature Extraction:**
- Create new features (combinations of originals)
- May lose interpretability
- Can capture complex patterns

### Linear Methods
**Principal Component Analysis (PCA):**
- Projects data onto principal components
- Maximizes variance preserved
- Orthogonal transformations
- Assumes linear relationships
- Fast and interpretable
- Most popular method

**Linear Discriminant Analysis (LDA):**
- Supervised method
- Maximizes class separability
- Finds discriminative projections
- Used for classification

**Factor Analysis:**
- Model data as linear combination of factors
- Assumes latent variables
- Common in psychology/social sciences

**Independent Component Analysis (ICA):**
- Separates mixed signals
- Assumes statistical independence
- Used in signal processing

### Nonlinear Manifold Methods
**t-SNE (t-Distributed Stochastic Neighbor Embedding):**
- Preserves local structure
- Excellent for visualization (2D/3D)
- Non-parametric
- Computationally expensive
- Stochastic (different runs differ)
- Not for general dimensionality reduction (mainly visualization)

**UMAP (Uniform Manifold Approximation and Projection):**
- Faster than t-SNE
- Preserves global structure better
- Deterministic with seed
- Can reduce to higher dimensions (not just 2D/3D)
- State-of-the-art for visualization

**Isomap:**
- Geodesic distance preservation
- Manifold learning
- Sensitive to noise

**Locally Linear Embedding (LLE):**
- Preserves local neighborhood structure
- Assumes data on smooth manifold

**MDS (Multidimensional Scaling):**
- Preserves pairwise distances
- Classic method (1950s)

### Autoencoder-Based Methods
**Autoencoders (Deep Learning):**
- Neural network encoder-decoder
- Bottleneck layer = compressed representation
- Can learn nonlinear mappings
- Flexible architectures

**Variational Autoencoders (VAE):**
- Probabilistic approach
- Learn latent distribution
- Generative model

**Sparse Autoencoders:**
- Regularization for sparse activations
- Feature learning

### Matrix Factorization
**Singular Value Decomposition (SVD):**
- Matrix decomposition
- Foundation of PCA
- Recommender systems

**Non-negative Matrix Factorization (NMF):**
- Factors must be non-negative
- Interpretable (parts-based representation)
- Topic modeling, image analysis

**Truncated SVD:**
- Efficient for sparse matrices
- Used in text processing (LSA)

### Comparison of Methods
| Method | Linear | Speed | Preserves | Best For |
|--------|--------|-------|-----------|----------|
| PCA | Yes | Fast | Global structure | General purpose |
| t-SNE | No | Slow | Local structure | Visualization |
| UMAP | No | Medium | Both | Visualization |
| LDA | Yes | Fast | Class separation | Classification |
| Autoencoders | No | Medium | Flexible | Complex patterns |

### Choosing Dimensionality
**Elbow Method (PCA):**
- Plot explained variance vs. components
- Look for "elbow" point

**Cumulative Variance:**
- Choose components explaining 95%+ variance

**Cross-Validation:**
- Evaluate model performance at different dimensions

**Domain Knowledge:**
- Consider interpretability needs

### Practical Considerations
**Preprocessing:**
- Standardize features (crucial for PCA)
- Handle missing values
- Remove outliers (can distort projections)

**Interpretability:**
- Linear methods more interpretable
- PCA components hard to interpret
- Feature selection preserves meaning

**Computational Cost:**
- PCA: O(min(n²p, np²))
- t-SNE: O(n² log n) or O(n) with approximations
- UMAP: O(n log n)

**When to Use:**
- High-dimensional data (p > 100)
- Visualization needed
- Computational constraints
- Multicollinearity present
- Curse of dimensionality suspected

### Applications
**Visualization:**
- Explore high-dimensional datasets
- Cluster visualization
- Quality control

**Preprocessing:**
- Before classification/regression
- Image compression
- Text processing (LSA)

**Feature Engineering:**
- Create informative features
- Remove redundant information

**Anomaly Detection:**
- Reconstruction error (autoencoders)
- Outliers in reduced space

**Recommender Systems:**
- Matrix factorization (Netflix Prize)
- Collaborative filtering

**Bioinformatics:**
- Gene expression analysis
- Single-cell RNA sequencing
- Protein structure

**Computer Vision:**
- Face recognition (Eigenfaces)
- Image compression
- Feature extraction

### Common Pitfalls
- Applying PCA without standardization
- Using t-SNE for anything beyond visualization
- Ignoring information loss
- Over-reducing (losing important signals)
- Not validating on downstream task
- Assuming linear relationships when nonlinear

### Evaluation Metrics
**Reconstruction Error:**
- How well can we reconstruct original data

**Explained Variance:**
- Percentage of variance retained (PCA)

**Trustworthiness/Continuity:**
- Preservation of neighborhood structure (t-SNE/UMAP)

**Downstream Task Performance:**
- Classification/regression accuracy after reduction

**Visualization Quality:**
- Cluster separation
- Known structure preserved

### Modern Trends
- Deep learning autoencoders
- Self-supervised representation learning
- Contrastive learning (SimCLR)
- Transformers for representation
- Neural ODEs for continuous mappings
- Topological data analysis

Dimensionality reduction remains essential for handling modern high-dimensional datasets, enabling visualization, improving computational efficiency, and revealing hidden patterns in complex data across diverse domains from genomics to computer vision.
