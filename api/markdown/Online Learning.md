- ### OntologyBlock
  - ontology:: true
  - public-access:: true
  - term-id:: AI-1012
  - preferred-term:: Online Learning
  - source-domain:: ai
  - status:: draft

### Relationships
- is-subclass-of:: [[Machine Learning]]
- skos:related:: [[Reinforcement Learning]]
- skos:related:: [[Continual Learning]]
- skos:related:: [[Incremental Learning]]
- uses:: [[Stochastic Gradient Descent]]
- enables:: [[Adaptive Systems]]
- enables:: [[Real-Time Learning]]

### Definition
Online learning is a machine learning paradigm where the model learns incrementally from a stream of data, updating itself after each example or small batch, rather than training on a complete dataset at once. This approach is essential for applications where data arrives continuously, storage is limited, or the underlying distribution changes over time (concept drift).

### Key Characteristics
- Sequential data processing
- Immediate model updates
- Single-pass through data
- Constant memory requirements
- Adaptation to distribution shifts
- No need to store entire dataset

### Learning Protocol
1. Receive new example x_t
2. Predict output ŷ_t
3. Receive true label y_t
4. Suffer loss ℓ(ŷ_t, y_t)
5. Update model parameters
6. Repeat for next example

### Common Algorithms
**Linear Models:**
- Perceptron
- Online gradient descent
- Follow-the-regularized-leader (FTRL)
- Adaptive learning rate methods (AdaGrad, Adam)

**Online Ensemble Methods:**
- Online bagging
- Online boosting
- Streaming Random Forests

**Bandit Algorithms:**
- Upper Confidence Bound (UCB)
- Thompson Sampling
- Exp3 (exponential-weight algorithm)

### Performance Metrics
**Regret:**
- Cumulative loss compared to best fixed strategy
- Goal: minimize regret over time
- Sublinear regret indicates learning

**Mistake Bounds:**
- Maximum errors before convergence
- Theoretical guarantees for specific algorithms

### Challenges
**Concept Drift:**
- Data distribution changes over time
- Requires detection and adaptation mechanisms
- Types: sudden, gradual, incremental, recurring

**Catastrophic Forgetting:**
- New data overwrites old knowledge
- Balance plasticity vs. stability

**Limited Feedback:**
- May not receive labels immediately
- Delayed feedback complicates learning

### Applications
- Online advertising (click-through rate prediction)
- Financial trading (adaptive strategies)
- Spam filtering (evolving spam patterns)
- Recommendation systems (user preference changes)
- Network intrusion detection
- Social media trend analysis
- Robotics (environmental adaptation)

### Advantages
- Memory efficient
- Adapts to changing data
- Low latency predictions
- Suitable for streaming data
- Can handle infinite data streams

### Related Concepts
- Incremental learning (similar, often used interchangeably)
- Lifelong learning (retaining knowledge across tasks)
- Continual learning (learning new tasks without forgetting)
