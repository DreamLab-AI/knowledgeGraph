- ### OntologyBlock
  - ontology:: true
  - public-access:: true
  - term-id:: AI-1011
  - preferred-term:: Semi-Supervised Learning
  - source-domain:: ai
  - status:: draft
  - owl:class:: ai:SemiSupervisedLearning

### Relationships
- is-subclass-of:: [[Machine Learning]]
- skos:related:: [[Supervised Learning]]
- skos:related:: [[Unsupervised Learning]]
- skos:related:: [[Active Learning]]
- uses:: [[Self-Training]]
- uses:: [[Co-Training]]
- enables:: [[Data-Efficient Learning]]

### Definition
Semi-supervised learning is a machine learning paradigm that combines small amounts of labeled data with large amounts of unlabeled data during training. It addresses the practical challenge that labeling data is expensive and time-consuming, while unlabeled data is abundant, by leveraging the structure and patterns in unlabeled data to improve model performance beyond what labeled data alone could achieve.

### Core Assumptions
**Smoothness Assumption:**
- Points close together likely share same label
- Decision boundaries in low-density regions

**Cluster Assumption:**
- Data forms distinct clusters
- Points in same cluster share labels

**Manifold Assumption:**
- High-dimensional data lies on lower-dimensional manifold
- Learn manifold structure from unlabeled data

### Common Techniques
**Self-Training:**
1. Train on labeled data
2. Predict labels for unlabeled data
3. Add high-confidence predictions to training set
4. Retrain iteratively

**Co-Training:**
- Split features into independent views
- Train separate classifiers on each view
- Exchange high-confidence predictions
- Effective when views are conditionally independent

**Graph-Based Methods:**
- Represent data as graph
- Propagate labels through edges
- Label spreading/propagation algorithms

**Generative Models:**
- Model joint distribution P(X,Y)
- Use unlabeled data to improve P(X)
- Examples: Gaussian mixture models, VAEs

**Consistency Regularization:**
- Model should give consistent predictions for perturbed versions of same input
- Used in modern deep learning (MixMatch, FixMatch)

### Modern Deep Learning Approaches
- Pseudo-labeling
- Mean Teacher
- MixMatch / FixMatch / FlexMatch
- Contrastive learning with labels
- Pre-training + fine-tuning

### Applications
- Text classification (limited labeled documents)
- Image recognition (few labeled images)
- Speech recognition
- Medical diagnosis (limited expert annotations)
- Natural language processing
- Computer vision

### Advantages
- Reduces labeling costs dramatically
- Improves performance with limited labels
- Leverages abundant unlabeled data
- Practical for real-world scenarios

### Challenges
- Risk of confirmation bias in self-training
- Quality depends on initial labeled data
- Can amplify errors if assumptions violated
- Computational cost of iterative methods
