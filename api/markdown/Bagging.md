- ### OntologyBlock
  - ontology:: true
  - public-access:: true
  - term-id:: AI-1016
  - preferred-term:: Bagging
  - source-domain:: ai
  - status:: draft

### Relationships
- is-subclass-of:: [[Ensemble Methods]]
- is-subclass-of:: [[Machine Learning]]
- skos:related:: [[Bootstrap Sampling]]
- skos:related:: [[Random Forest]]
- reduces:: [[Variance]]
- reduces:: [[Overfitting]]
- enables:: [[Parallel Training]]

### Definition
Bagging (Bootstrap Aggregating) is a parallel ensemble learning technique that trains multiple models independently on different random subsets of the training data created through bootstrap sampling (sampling with replacement). By averaging predictions from diverse models, bagging reduces variance and prevents overfitting, making it particularly effective with high-variance, low-bias models like decision trees.

### Algorithm Overview
1. **Bootstrap Sampling:**
   - Create B bootstrap samples from training set
   - Each sample: randomly select N instances with replacement
   - ~63.2% unique instances per sample
   - ~36.8% out-of-bag (OOB) instances

2. **Parallel Training:**
   - Train independent model on each bootstrap sample
   - Same learning algorithm for all models
   - No communication between models

3. **Aggregation:**
   - Classification: majority voting
   - Regression: average predictions
   - Can use weighted or probability-based voting

### Mathematical Foundation
**Variance Reduction:**
- Individual model variance: σ²
- If models independent: ensemble variance ≈ σ²/B
- Practical reduction less due to correlation
- Goal: create diverse, low-correlation models

**Bootstrap Statistics:**
- Each bootstrap sample contains ~63.2% unique instances
- Probability of instance selected: 1 - (1-1/N)^N ≈ 1 - 1/e
- OOB instances serve as validation set

### Key Characteristics
**Advantages:**
- Reduces variance without increasing bias
- Prevents overfitting
- Parallel training (fast with multiple cores)
- Out-of-bag error estimation (built-in validation)
- Robust to noisy data
- Works well with unstable learners (high variance)

**Best Suited For:**
- Decision trees (highly unstable)
- Neural networks
- Regression models prone to overfitting
- High-dimensional data

**Limitations:**
- Doesn't help with high-bias models
- Less effective than boosting for bias reduction
- Increased computational cost
- Less interpretable than single model
- Can underfit if base learners too simple

### Out-of-Bag (OOB) Evaluation
- Each model has ~37% samples not in training
- Use OOB samples for unbiased error estimate
- No need for separate validation set
- Similar accuracy to cross-validation
- Computationally free

### Variants and Extensions
**Random Forest:**
- Bagging + random feature selection
- Further increases diversity
- Reduces correlation between trees

**Pasting:**
- Sampling without replacement
- Less diversity than bagging

**Random Subspaces:**
- Sample features instead of instances
- Useful for high-dimensional data

**Random Patches:**
- Sample both instances and features

### Hyperparameters
- Number of estimators (B): 50-500 typical
- Bootstrap sample size: usually same as training set
- Max features per model (if using feature sampling)
- Base learner hyperparameters

### Implementation Notes
```python
# Scikit-learn example
from sklearn.ensemble import BaggingClassifier
from sklearn.tree import DecisionTreeClassifier

bagging = BaggingClassifier(
    base_estimator=DecisionTreeClassifier(),
    n_estimators=100,
    max_samples=1.0,  # 100% of training size
    bootstrap=True,   # with replacement
    oob_score=True,   # compute OOB error
    n_jobs=-1         # parallel training
)
```

### Applications
- Credit risk assessment
- Medical diagnosis
- Image classification
- Anomaly detection
- Time series forecasting
- Customer segmentation

### Comparison with Boosting
| Aspect | Bagging | Boosting |
|--------|---------|----------|
| Training | Parallel | Sequential |
| Focus | Reduce variance | Reduce bias |
| Weighting | Equal weights | Adaptive weights |
| Speed | Faster (parallelizable) | Slower |
| Overfitting | Less prone | More prone |
| Outliers | Robust | Sensitive |

### Historical Note
Introduced by Leo Breiman in 1994, bagging laid the foundation for Random Forests and demonstrated that model diversity through randomization could significantly improve generalization.
