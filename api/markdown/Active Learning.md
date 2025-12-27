- ### OntologyBlock
  - ontology:: true
  - public-access:: true
  - term-id:: AI-1013
  - preferred-term:: Active Learning
  - source-domain:: ai
  - status:: draft
  - owl:class:: ai:ActiveLearning

### Relationships
- is-subclass-of:: [[Machine Learning]]
- skos:related:: [[Semi-Supervised Learning]]
- skos:related:: [[Online Learning]]
- skos:related:: [[Human-in-the-Loop]]
- uses:: [[Uncertainty Sampling]]
- enables:: [[Data-Efficient Learning]]
- reduces:: [[Labeling Cost]]

### Definition
Active learning is a machine learning paradigm where the algorithm actively selects which unlabeled examples to query for labels, rather than passively accepting randomly labeled data. By intelligently choosing the most informative examples to label, active learning can achieve high performance with significantly fewer labeled instances, dramatically reducing annotation costs and expert time.

### Core Premise
- Labeled data is expensive to obtain
- Not all examples are equally informative
- Algorithm can query an oracle (human annotator)
- Strategic selection improves learning efficiency
- Can achieve same performance with 10-100x less labeled data

### Query Strategies
**Uncertainty Sampling:**
- Select examples where model is least confident
- Variants:
  - Least confidence
  - Margin sampling (smallest difference between top 2 predictions)
  - Entropy (highest prediction entropy)

**Query-by-Committee:**
- Maintain ensemble of models
- Select examples with highest disagreement
- Measures: vote entropy, KL divergence

**Expected Model Change:**
- Choose examples that would most change model
- Gradient-based selection

**Expected Error Reduction:**
- Select examples that minimize expected generalization error
- Computationally expensive

**Variance Reduction:**
- Minimize prediction variance on unlabeled pool

**Density-Weighted Methods:**
- Balance informativeness with representativeness
- Avoid outliers that are uncertain but not typical

### Learning Scenarios
**Pool-Based:**
- Large pool of unlabeled data available
- Select batch of queries from pool
- Most common in practice

**Stream-Based:**
- Examples arrive sequentially
- Decide whether to query each one
- Binary decision: query or skip

**Query Synthesis:**
- Generate artificial examples to query
- Rarely used (unnatural examples)

### Practical Considerations
**Batch Mode:**
- Select multiple queries at once
- Reduce human wait time
- Consider diversity to avoid redundancy

**Cold Start Problem:**
- How to initialize with few labels
- Random sampling or heuristic selection

**Stopping Criteria:**
- Budget exhausted
- Performance plateau
- Uncertainty threshold

### Applications
- Medical image annotation (expensive expert time)
- Named entity recognition in NLP
- Drug discovery (expensive experiments)
- Sentiment analysis
- Document classification
- Speech recognition
- Object detection in computer vision

### Benefits
- Reduces labeling costs by 50-99%
- Focuses expert effort on hard cases
- Faster model development
- Practical for domains with expensive labels

### Challenges
- Oracle may be imperfect or inconsistent
- Biased sampling can hurt generalization
- Computational cost of query selection
- Assumes oracle can label anything (not always true)
- May focus on outliers rather than representative examples

### Modern Developments
- Deep active learning (neural networks)
- Bayesian active learning
- Multi-armed bandit formulations
- Active learning with adversarial robustness
- Active learning for deep generative models
