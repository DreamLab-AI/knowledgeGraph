id:: interpretability-ontology

- ### OntologyBlock
  id:: Interpretability
  - ontology:: true
  - public-access:: true
  - term-id:: MV-0064
  - preferred-term:: Interpretability
  - source-domain:: ai
  - status:: draft
  - definition:: The degree to which a human can understand the internal mechanics, decision-making processes, and cause-effect relationships within an AI system, independent of external explanation tools.

### Relationships
- is-subclass-of:: [[ArtificialIntelligence]]
- enables:: [[Trust]]
- enables:: [[Model Validation]]
- enables:: [[Debugging]]

### Primary Sources
1. **ISO/IEC TR 24029-1:2021** - Assessment of the robustness of neural networks — Part 1: Overview
   - Section 4.3.1: "Interpretability"
   - "The degree to which a human can consistently predict the model's result"
   - Source: ISO/IEC JTC 1/SC 42

2. **NIST AI Risk Management Framework (AI RMF 1.0)**, January 2023
   - Section 2.2: "Explainable and Interpretable"
   - Interpretability as understanding internal functions
   - Source: National Institute of Standards and Technology

3. **Rudin, C. (2019)** - "Stop Explaining Black Box Machine Learning Models for High Stakes Decisions and Use Interpretable Models Instead"
   - *Nature Machine Intelligence*, 1, 206-215
   - Foundational argument for interpretable models

### Supporting Standards
4. **ISO/IEC 23894:2023** - Guidance on risk management
   - Section 7.4.4: "Interpretability in risk assessment"

5. **Doshi-Velez, F. & Kim, B. (2017)** - "Towards A Rigorous Science of Interpretable Machine Learning"
   - Comprehensive taxonomy of interpretability
   - arXiv:1702.08608

## Key Characteristics

### Dimensions of Interpretability
1. **Transparency**
   - Algorithmic transparency: How the algorithm works
   - Decomposability: Understanding each component
   - Simulatability: Can a human simulate the model?

2. **Comprehensibility**
   - Feature interpretability
   - Parameter interpretability
   - Decision boundary clarity

3. **Complexity**
   - Model size (number of parameters)
   - Computational depth
   - Rule/decision path length

### Levels of Interpretability
1. **Global Interpretability**
   - Understanding entire model logic
   - Overall decision-making process
   - Complete model behaviour

2. **Local Interpretability**
   - Understanding individual predictions
   - Instance-specific reasoning
   - Decision for single input

3. **Modular Interpretability**
   - Understanding specific components
   - Subsystem comprehension
   - Layer or module-level insight

## Interpretability Spectrum

### High Interpretability Models
1. **Linear Regression**
   ```
   y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ
   ```
   - **Interpretability**: Each coefficient shows feature contribution
   - **Limitation**: Assumes linear relationships

2. **Decision Trees**
   ```
   IF (credit_score > 700) AND (income > 50000)
       THEN approve_loan
   ELSE deny_loan
   ```
   - **Interpretability**: Clear if-then rules
   - **Limitation**: Can become very large

3. **Rule-Based Systems**
   ```
   Rule 1: IF age < 25 THEN risk = "high"
   Rule 2: IF accidents > 2 THEN risk = "high"
   ```
   - **Interpretability**: Explicit logical rules
   - **Limitation**: May not capture complex patterns

4. **GAMs** (Generalized Additive Models)
   ```
   g(E[y]) = β₀ + f₁(x₁) + f₂(x₂) + ... + fₙ(xₙ)
   ```
   - **Interpretability**: Visualise each feature's effect
   - **Limitation**: No feature interactions

### Low Interpretability Models
1. **Deep Neural Networks**
   - Millions of parameters
   - Non-linear transformations
   - Distributed representations
   - **Challenge**: Internal mechanism opaque

2. **Random Forests**
   - Ensemble of many trees
   - Aggregated decisions
   - **Challenge**: No single decision path

3. **Gradient Boosting Machines**
   - Sequential ensemble
   - Complex feature interactions
   - **Challenge**: Cumulative complexity

4. **Support Vector Machines (nonlinear)**
   - Kernel transformations
   - High-dimensional space
   - **Challenge**: Decision boundary in transformed space

## Interpretability vs. Explainability

| Interpretability | Explainability |
|------------------|----------------|
| **Nature**: Intrinsic property | **Nature**: External addition |
| **Timing**: Design-time | **Timing**: Post-hoc or runtime |
| **Approach**: Model architecture | **Approach**: Explanation methods |
| **Goal**: Understand mechanism | **Goal**: Justify outputs |
| **Question**: "How does it work?" | **Question**: "Why this result?" |
| **Dependency**: Model-inherent | **Dependency**: Explanation tool |

## Relationships

- **Component Of**: AI Trustworthiness (AI-0061)
- **Related To**: Explainability (AI-0063), Transparency (AI-0062)
- **Enables**: Model Validation, Debugging, Trust
- **Trade-off With**: Model Complexity, Performance (sometimes)

## Measuring Interpretability

### Objective Measures
1. **Model Complexity Metrics**
   - Number of parameters
   - Depth of network
   - Number of rules/nodes
   - Decision path length

2. **Simulatability**
   - Can human trace through model?
   - Time to understand model
   - Cognitive load assessment

3. **Decomposability**
   - Number of interpretable components
   - Component interaction complexity
   - Modularity score

### Subjective Measures
1. **Human Evaluation**
   - User studies on comprehension
   - Expert assessment
   - Task-based evaluation

2. **Predictive Accuracy of Human Simulation**
   - Can humans predict model outputs?
   - Agreement rate between human understanding and model

3. **Trust Calibration**
   - Appropriate trust levels
   - Understanding of limitations
   - Confidence alignment

## Design Principles for Interpretable Models

### Christoph Molnar's Criteria
1. **Simplicity**
   - Fewer features
   - Fewer parameters
   - Shorter decision paths

2. **Decomposability**
   - Individual components understandable
   - Clear component roles
   - Minimal interactions

3. **Algorithmic Transparency**
   - Known mathematical properties
   - Provable characteristics
   - Well-understood behaviour

### Inherently Interpretable Architectures
1. **Sparse Linear Models**
   - LASSO regularization
   - Feature selection
   - Coefficient interpretation

2. **Shallow Decision Trees**
   - Depth limits (e.g., max depth 3-5)
   - Minimum samples per leaf
   - Pruning strategies

3. **Rule Lists and Sets**
   - Sequential rules
   - Non-overlapping conditions
   - Ordered decision logic

4. **Prototype-Based Models**
   - k-Nearest Neighbours
   - Case-based reasoning
   - Exemplar models

5. **Attention-Based Models**
   - Self-attention mechanisms
   - Attention weight visualization
   - Learned focus areas

## Domain-Specific Interpretability

### Healthcare
- **Requirement**: Clinical interpretability
- **Rationale**: Life-critical decisions, regulatory requirements
- **Approach**: Inherently interpretable models or rigorous validation
- **Example**: Risk scores with clear factor weights

### Finance
- **Requirement**: Regulatory compliance (e.g., SR 11-7)
- **Rationale**: Fair lending laws, consumer protection
- **Approach**: Explainable credit models
- **Example**: Linear models or shallow trees for credit scoring

### Criminal Justice
- **Requirement**: Due process, constitutional protections
- **Rationale**: Fundamental rights implications
- **Approach**: Transparent risk assessments
- **Example**: Point-based scoring systems

### Autonomous Systems
- **Requirement**: Safety validation
- **Rationale**: Real-time decision verification
- **Approach**: Verifiable controllers
- **Example**: Formal methods, decision trees for critical functions

## Trade-offs and Considerations

### Accuracy vs. Interpretability
**Traditional View**:
- Complex models (neural networks) → Higher accuracy
- Simple models (linear, trees) → Lower accuracy

**Modern Research**:
- For many problems, interpretable models achieve comparable accuracy
- High-stakes domains should prioritize interpretability
- "Stop explaining black boxes, use interpretable models" (Rudin, 2019)

### When to Prioritize Interpretability
1. **High-Stakes Decisions**
   - Healthcare diagnosis
   - Criminal sentencing
   - Loan approvals

2. **Safety-Critical Systems**
   - Autonomous vehicles
   - Medical devices
   - Aviation systems

3. **Regulated Domains**
   - Fair lending
   - Employment
   - Insurance

4. **Scientific Discovery**
   - Understanding phenomena
   - Hypothesis generation
   - Knowledge extraction

### When Complex Models May Be Acceptable
1. **Low-Stakes Applications**
   - Content recommendations
   - Image search
   - Translation

2. **With Rigorous Validation**
   - Extensive testing
   - Post-hoc explanation validation
   - Human oversight

3. **Where Interpretable Models Fail**
   - Proven accuracy gap
   - Complex patterns require complexity
   - Alternative safeguards in place

## Technical Implementation

### Designing Interpretable Neural Networks
1. **Constrained Architectures**
   ```python
   class InterpretableNN:
       def __init__(self, input_dim, hidden_dim):
           # Shallow network
           self.layer1 = nn.Linear(input_dim, hidden_dim)
           self.layer2 = nn.Linear(hidden_dim, 1)
           # Sparse connections
           self.apply_sparsity_constraint()

       def forward(self, x):
           # Monotonic activation for interpretability
           h = F.relu(self.layer1(x))
           return self.layer2(h)
   ```

2. **Prototype-Based Deep Learning**
   - ProtoPNet: Learns interpretable prototypes
   - Decisions based on similarity to prototypes
   - "This looks like [prototype] therefore [class]"

3. **Attention Mechanisms**
   - Visualise what model focuses on
   - Weight-based interpretation
   - Alignment with human reasoning

### Interpretability-Enhancing Techniques
1. **Feature Engineering**
   - Use meaningful, interpretable features
   - Avoid opaque transformations
   - Domain-informed features

2. **Regularization for Sparsity**
   - L1 (LASSO) for feature selection
   - Encourage zero coefficients
   - Reduce model complexity

3. **Monotonicity Constraints**
   - Enforce logical relationships
   - "Higher income → higher credit score"
   - Align with domain knowledge

4. **Structural Constraints**
   - Limit model depth/width
   - Impose tree structure
   - Use additive models

## Evaluation and Validation

### Formal Verification
1. **Completeness**
   - All possible inputs covered
   - No undefined behaviours
   - Full decision space specified

2. **Consistency**
   - No contradictory rules
   - Logical coherence
   - Deterministic outputs

3. **Soundness**
   - Correct reasoning
   - Valid inference
   - Mathematically proven properties

### Human-Centered Evaluation
1. **User Studies**
   - Task performance with model
   - Comprehension tests
   - Trust calibration

2. **Expert Review**
   - Domain expert validation
   - Alignment with expert knowledge
   - Identification of errors

3. **Cognitive Walkthrough**
   - Step-by-step decision tracing
   - Understanding verification
   - Complexity assessment

## Best Practices

1. **Start with Interpretable Models**
   - Baseline with simple models
   - Only increase complexity if necessary
   - Document rationale for complexity

2. **Use Domain Knowledge**
   - Incorporate expert insights
   - Align features with domain concepts
   - Validate against domain understanding

3. **Design for Users**
   - Consider stakeholder technical level
   - Match interpretability to use case
   - Provide multiple views

4. **Document Limitations**
   - Be clear about what is not interpretable
   - Explain assumptions
   - Acknowledge uncertainty

5. **Validate Understanding**
   - Test human comprehension
   - Verify correct interpretation
   - Measure alignment with model behaviour

6. **Iterative Refinement**
   - Gather user feedback
   - Improve based on comprehension issues
   - Simplify where possible

## Related Terms

- **AI Trustworthiness** (AI-0061)
- **Transparency** (AI-0062)
- **Explainability** (AI-0063)
- **Model Validation** (AI-0095)
- **Accountability** (AI-0068)

## Version History

- **1.0** (2025-10-27): Initial definition based on ISO/IEC TR 24029-1:2021 and interpretability research

---

*This definition aligns with the growing consensus that interpretability should be a design goal for high-stakes AI systems.*
	- maturity:: draft
	- owl:class:: mv:Interpretability
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
	- #### Relationships
	  id:: interpretability-relationships
		- is-subclass-of:: [[ArtificialIntelligence]]
		- enables:: [[Model Validation]], [[Debugging]], [[Trust]]
