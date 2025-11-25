id:: bias-ontology

- ### OntologyBlock
  id:: Bias
  - ontology:: true
  - public-access:: true
  - term-id:: MV-0919
  - preferred-term:: Bias
  - source-domain:: ai
  - status:: draft
  - definition:: Systematic deviation from fairness, objectivity, or expected outcomes in an AI system that leads to prejudiced results favouring or disfavouring particular groups, individuals, or outcomes, arising from data, algorithms, or deployment contexts.

### Primary Sources
1. **ISO/IEC TR 24027:2021** - Information technology — Artificial intelligence (AI) — Bias in AI systems and AI aided decision making
   - Comprehensive framework for understanding and addressing bias
   - Section 4: "Sources of bias"
   - Source: ISO/IEC JTC 1/SC 42

2. **NIST AI Risk Management Framework (AI RMF 1.0)**, January 2023
   - Section 2.3: "AI risks and bias"
   - "Bias in AI systems can emerge from...data, algorithms, or implementation"
   - Source: National Institute of Standards and Technology

3. **EU AI Act** (Regulation 2024/1689), June 2024
   - Article 10(2): Requirements to minimise bias
   - Recital 44: Bias mitigation obligations
   - Source: European Parliament and Council

### Supporting Standards
4. **ISO/IEC 23894:2023** - Guidance on risk management
   - Section 7.5.2: "Bias as AI risk"

5. **Mehrabi, N., et al. (2021)** - "A Survey on Bias and Fairness in Machine Learning"
   - *ACM Computing Surveys*, 54(6), 1-35
   - Comprehensive taxonomy of bias types

## Key Characteristics

### Types of Bias by Source
#### 1. Data Bias

**Historical Bias**
- **Definition**: Bias in data reflecting past societal prejudices
- **Example**: Historical hiring data showing gender imbalance in tech
- **Cause**: Systemic discrimination in the real world
- **Mitigation**: Cannot be solved by sampling alone; requires awareness

**Representation Bias**
- **Definition**: Underrepresentation or overrepresentation of populations
- **Example**: Facial recognition trained mostly on light-skinned faces
- **Cause**: Sampling from non-representative population
- **Mitigation**: Stratified sampling, data augmentation

**Measurement Bias**
- **Definition**: Systematic error in how features are measured
- **Example**: Self-reported data with social desirability bias
- **Cause**: Imperfect proxies, measurement tools
- **Mitigation**: Improved measurement, multiple indicators

**Aggregation Bias**
- **Definition**: Inappropriate combination of data from different groups
- **Example**: Diabetes model combining all ages (different physiology)
- **Cause**: One-size-fits-all approach to heterogeneous populations
- **Mitigation**: Stratified models, personalization

**Labelling Bias**
- **Definition**: Systematic errors in ground truth labels
- **Example**: Biased human annotators labelling training data
- **Cause**: Annotator prejudices, unclear guidelines
- **Mitigation**: Multiple annotators, bias training, clear guidelines

#### 2. Algorithmic Bias

**Selection Bias**
- **Definition**: Bias from selecting features or data
- **Example**: Using zip code (proxy for race) in credit scoring
- **Cause**: Feature engineering choices
- **Mitigation**: Careful feature selection, remove proxies

**Optimization Bias**
- **Definition**: Bias from objective function design
- **Example**: Optimizing for average accuracy (ignoring minorities)
- **Cause**: Objective function doesn't include fairness
- **Mitigation**: Fairness-aware objectives, constrained optimization

**Evaluation Bias**
- **Definition**: Bias in how model is evaluated
- **Example**: Testing on unrepresentative data
- **Cause**: Inappropriate benchmarks, biased test sets
- **Mitigation**: Diverse evaluation data, fairness metrics

**Inductive Bias**
- **Definition**: Assumptions built into learning algorithm
- **Example**: Linear models assuming linear relationships
- **Cause**: Model architecture choices
- **Impact**: May be beneficial (enables generalization) or harmful

#### 3. Interaction Bias

**User Interaction Bias**
- **Definition**: Bias introduced through user interactions
- **Example**: Microsoft Tay chatbot learning offensive language
- **Cause**: Users gaming or poisoning system
- **Mitigation**: Content filtering, rate limiting, human oversight

**Automation Bias**
- **Definition**: Over-reliance on automated decisions
- **Example**: Judges adopting risk scores without scrutiny
- **Cause**: Human deferral to algorithmic authority
- **Mitigation**: Training, appropriate skepticism, human oversight

**Presentation Bias**
- **Definition**: Bias from how results are displayed
- **Example**: Ranking bias in search results
- **Cause**: UI/UX design choices
- **Mitigation**: Randomization, awareness of defaults

#### 4. Systemic Bias

**Feedback Loop Bias**
- **Definition**: System reinforces its own biases over time
- **Example**: Predictive policing → more arrests → training data bias
- **Cause**: Circular causality, self-fulfilling prophecies
- **Mitigation**: Break feedback loops, diverse data sources

**Deployment Bias**
- **Definition**: Mismatch between development and deployment contexts
- **Example**: Model trained in one country deployed in another
- **Cause**: Distribution shift, population differences
- **Mitigation**: Context-specific validation, localization

## Bias Detection Methods

### Statistical Testing
1. **Disparate Impact Analysis**
   ```python
   # Four-fifths rule
   disparate_impact = (positive_rate_protected /
                      positive_rate_reference)
   # DI < 0.8 suggests bias
   ```

2. **Fairness Metrics**
   - Demographic parity difference
   - Equalized odds difference
   - See Fairness (AI-0066) for comprehensive metrics

3. **Subgroup Analysis**
   - Performance across demographics
   - Error rate disparities
   - Calibration across groups

### Model Inspection
1. **Feature Importance Analysis**
   - Identify proxy variables
   - Correlation with protected attributes
   - Causal pathways

2. **Residual Analysis**
   - Unexplained variance by group
   - Systematic prediction errors

3. **Counterfactual Testing**
   - Change protected attribute, observe output
   - Measure sensitivity to demographics

### Data Auditing
1. **Representation Analysis**
   - Distribution across groups
   - Sample sizes
   - Coverage gaps

2. **Label Distribution**
   - Class balance across demographics
   - Labelling consistency
   - Annotator agreement by subgroup

## Bias Mitigation Strategies

### Pre-Processing (Data)
1. **Re-sampling**
   - Balance representation
   - Oversample minorities
   - Undersample majorities

2. **Re-weighting**
   - Instance-level weights
   - Inverse probability weighting
   - Fairness-aware sampling

3. **Data Augmentation**
   - Synthetic minority samples (SMOTE)
   - Generative models
   - Perturbations

4. **Fair Representation Learning**
   - Learn unbiased encodings
   - Adversarial debiasing
   - Remove protected information

### In-Processing (Algorithm)
1. **Fairness Constraints**
   - Add to optimization
   - Constrained learning
   - Multi-objective optimization

2. **Adversarial Debiasing**
   - GAN-style debiasing
   - Predictor cannot use protected attributes
   - Invariant representations

3. **Regularization**
   - Fairness penalty terms
   - Prejudice remover
   - Calibrated equalized odds

### Post-Processing (Output)
1. **Threshold Optimization**
   - Group-specific thresholds
   - ROC curve adjustment
   - Achieve desired fairness metric

2. **Calibration**
   - Platt scaling by group
   - Isotonic regression
   - Probability adjustment

3. **Output Modification**
   - Reject option classification
   - Preferential treatment
   - Quota-based selection

## Relationships

- **Opposed To**: Fairness (AI-0065)
- **Leads To**: Harmful Bias (AI-0084), Discrimination
- **Component Of**: AI Risk (AI-0077)
- **Addressed By**: Bias Mitigation, Fairness-Aware ML
- **Related To**: Transparency (AI-0062), Accountability (AI-0068)

## Domain-Specific Bias

### Healthcare
**Example**: Pulse oximeter bias
- Less accurate for darker skin tones
- Historical focus on lighter-skinned patients in development
- **Impact**: Misdiagnosis, unequal care

**Example**: Diagnostic algorithm bias
- Trained on non-diverse patient populations
- Different disease presentation by demographics
- **Impact**: Missed diagnoses in minorities

### Criminal Justice
**Example**: COMPAS recidivism prediction
- Higher false positive rate for Black defendants
- Historical bias in arrest data
- **Impact**: Unjust sentencing recommendations

### Employment
**Example**: Amazon hiring algorithm
- Penalized resumes with "women's" keywords
- Trained on historical (male-dominated) hiring
- **Impact**: Discrimination in recruitment

### Finance
**Example**: Credit scoring bias
- Proxy variables (zip code) encode race
- Historical lending discrimination in data
- **Impact**: Unequal access to credit

## Intersectionality and Compound Bias

### Intersectional Bias
- Bias affecting individuals with multiple protected attributes
- **Example**: Black women face unique bias not captured by race or gender alone
- **Challenge**: Small sample sizes at intersections
- **Approach**: Intersectional fairness metrics, subgroup analysis

### Compound Effects
- Multiple bias sources combining
- **Example**: Historical bias + representation bias + automation bias
- **Impact**: Amplified discrimination
- **Mitigation**: Holistic approach addressing all sources

## Harmful vs. Benign Bias

### Potentially Harmful Bias
- Leads to discrimination
- Violates rights or dignity
- Causes material harm
- **Example**: Loan denial based on protected characteristics

### Benign Bias
- Inductive bias enabling learning
- Domain knowledge incorporation
- **Example**: Assuming spatial locality in image processing

**Key**: Context determines whether bias is harmful

## Regulatory and Legal Context

### EU AI Act
**Article 10(2): Bias Mitigation Requirements**
- Examine possible biases
- Appropriate data governance measures
- Ensure training datasets free from bias

### GDPR
**Recital 71**: Protection against discriminatory effects
- Prevent discrimination based on protected characteristics

### US Civil Rights Laws
- Title VII (Employment)
- Fair Housing Act
- Equal Credit Opportunity Act
- **Standard**: Disparate impact doctrine

## Challenges in Addressing Bias

### Technical Challenges
1. **Trade-offs**
   - Fairness vs. accuracy
   - Individual vs. group fairness
   - Multiple fairness definitions incompatible

2. **Measurement**
   - Protected attributes not available
   - Proxy variable identification
   - Statistical significance with small samples

3. **Causality**
   - Distinguishing causation from correlation
   - Identifying legitimate vs. illegitimate factors
   - Confounding variables

### Social Challenges
1. **Defining "Fairness"**
   - No universal definition
   - Cultural variations
   - Stakeholder disagreement

2. **Conflicting Interests**
   - Accuracy vs. equity
   - Privacy vs. bias detection (need demographics)
   - Individual vs. collective fairness

3. **Unintended Consequences**
   - Well-intentioned fixes cause new problems
   - Gaming of fairness measures
   - Perverse incentives

## Best Practices

1. **Bias Awareness from Design**
   - Consider bias from project inception
   - Diverse development teams
   - Stakeholder engagement

2. **Comprehensive Bias Auditing**
   - Test for multiple bias types
   - Intersectional analysis
   - Regular monitoring

3. **Multi-Method Mitigation**
   - Address bias at all stages (pre, in, post)
   - Use multiple mitigation techniques
   - Validate effectiveness

4. **Documentation and Transparency**
   - Document bias analysis
   - Report limitations
   - Enable external audit

5. **Human Oversight**
   - Human-in-the-loop for high-stakes decisions
   - Appeal mechanisms
   - Continuous learning from errors

6. **Context-Specific Approaches**
   - No one-size-fits-all solution
   - Domain expertise required
   - Stakeholder input essential

## Tools for Bias Detection and Mitigation

1. **AI Fairness 360 (IBM)**
   - Bias metrics and mitigation algorithms

2. **Fairlearn (Microsoft)**
   - Fairness assessment and mitigation

3. **What-If Tool (Google)**
   - Interactive bias exploration

4. **Aequitas (U. Chicago)**
   - Bias auditing framework

5. **FairML**
   - Model auditing for bias

## Related Terms

- **Fairness** (AI-0065)
- **Harmful Bias** (AI-0084)
- **AI Trustworthiness** (AI-0061)
- **Accountability** (AI-0068)
- **Non-discrimination** (AI-0038)
- **Data Quality** (AI-0053)

## Version History

- **1.0** (2025-10-27): Initial definition based on ISO/IEC TR 24027:2021 and NIST AI RMF

---

*This definition provides a comprehensive framework for understanding the multifaceted nature of bias in AI systems and approaches to address it.*
	- maturity:: draft
	- owl:class:: mv:Bias
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- is-subclass-of:: [[Metaverse]]
	- belongsToDomain:: [[MetaverseDomain]]
