id:: fairness-ontology

- ### OntologyBlock
  id:: Fairness
  - ontology:: true
  - public-access:: true
  - term-id:: MV-0065
  - preferred-term:: Fairness
  - source-domain:: ai
  - status:: draft
  - definition:: The property of an AI system whereby it produces equitable outcomes and avoids creating or reinforcing unjustifiable disparities across different demographic groups or individuals, measured through various mathematical definitions and ethical principles.

### Relationships
- is-subclass-of:: [[Metaverse]]
- requires:: [[Bias Detection]]
- requires:: [[Bias Mitigation]]
- enables:: [[Non-discrimination]]
- enables:: [[Equal Treatment]]

### Primary Sources
1. **ISO/IEC TR 24027:2021** - Information technology — Artificial intelligence (AI) — Bias in AI systems and AI aided decision making
   - Section 5: "Fairness in AI"
   - Defines fairness concepts and metrics
   - Source: ISO/IEC JTC 1/SC 42

2. **NIST AI Risk Management Framework (AI RMF 1.0)**, January 2023
   - Section 2.2: "Fair — with harmful bias managed"
   - Multiple fairness definitions and context-dependency
   - Source: National Institute of Standards and Technology

3. **EU AI Act** (Regulation 2024/1689), June 2024
   - Article 10: "Data and data governance" (bias mitigation)
   - Recital 44: Fairness requirements
   - Source: European Parliament and Council

### Supporting Standards
4. **ISO/IEC 23894:2023** - Guidance on risk management
   - Section 7.5: "Fairness considerations in risk management"

5. **Mehrabi, N., et al. (2021)** - "A Survey on Bias and Fairness in Machine Learning"
   - *ACM Computing Surveys*, 54(6), 1-35
   - Comprehensive fairness taxonomy

## Key Characteristics

### Types of Fairness
#### 1. Group Fairness (Statistical Parity)

**Demographic Parity**
- Equal positive prediction rates across groups
- $$P(\hat{Y}=1|A=0) = P(\hat{Y}=1|A=1)$$
- Where A is protected attribute (e.g., gender)

**Example**: Equal loan approval rates for men and women

**Equalized Odds**
- Equal true positive and false positive rates across groups
- $$P(\hat{Y}=1|Y=1,A=0) = P(\hat{Y}=1|Y=1,A=1)$$
- $$P(\hat{Y}=1|Y=0,A=0) = P(\hat{Y}=1|Y=0,A=1)$$

**Example**: Recidivism prediction equally accurate for all races

**Equal Opportunity**
- Equal true positive rates (recall) across groups
- $$P(\hat{Y}=1|Y=1,A=0) = P(\hat{Y}=1|Y=1,A=1)$$

**Example**: Qualified candidates equally likely to be hired regardless of gender

**Calibration**
- Predicted probabilities match actual outcomes across groups
- $$P(Y=1|\hat{Y}=p,A=0) = P(Y=1|\hat{Y}=p,A=1)$$

**Example**: 70% risk score means 70% probability for all groups

#### 2. Individual Fairness

**Similarity-Based Fairness**
- Similar individuals receive similar outcomes
- Dwork et al.: "Treat similar individuals similarly"
- Lipschitz condition: $$d(f(x_1), f(x_2)) \leq L \cdot d(x_1, x_2)$$

**Example**: Two applicants with same qualifications get similar loan terms

**Counterfactual Fairness**
- Decision unchanged if protected attribute were different
- Kusner et al.: Causal definition of fairness

**Example**: Loan decision same regardless of applicant's race

#### 3. Procedural Fairness

- Transparency in decision-making process
- Ability to contest decisions
- Right to explanation
- Human oversight and appeal mechanisms

#### 4. Distributive Fairness

- Equitable distribution of benefits and burdens
- Consideration of existing inequalities
- Justice in outcomes

## Fairness Metrics

### Classification Metrics
1. **Demographic Parity Difference (DPD)**
   ```
   DPD = |P(Ŷ=1|A=0) - P(Ŷ=1|A=1)|
   ```
   - Range: [0, 1]
   - Threshold: Often < 0.1 for "fairness"

2. **Disparate Impact (DI)**
   ```
   DI = P(Ŷ=1|A=0) / P(Ŷ=1|A=1)
   ```
   - Range: [0, ∞]
   - 80% rule: DI ≥ 0.8 (EEOC guideline)

3. **Equalized Odds Difference (EOD)**
   ```
   EOD = |TPR₀ - TPR₁| + |FPR₀ - FPR₁|
   ```

4. **Average Odds Difference (AOD)**
   ```
   AOD = (|TPR₀ - TPR₁| + |FPR₀ - FPR₁|) / 2
   ```

### Ranking Metrics
1. **Normalized Discounted Cumulative Gain (NDCG) Parity**
2. **Exposure Parity**
3. **Representation Metrics**

### Impossibility Theorems
**Key Insight**: Multiple fairness definitions cannot be simultaneously satisfied (except in trivial cases)

**Chouldechova (2017)**: Cannot simultaneously achieve:
- Calibration
- Equal false positive rates
- Equal false negative rates

**Kleinberg et al. (2017)**: Cannot simultaneously satisfy:
- Calibration
- Balance for positive class
- Balance for negative class

**Implication**: Fairness requires trade-offs and context-specific choices

## Relationships

- **Component Of**: AI Trustworthiness (AI-0061)
- **Opposed To**: Bias (AI-0067), Harmful Bias (AI-0084)
- **Enables**: Non-discrimination, Equal Treatment
- **Requires**: Bias Detection, Bias Mitigation
- **Related To**: Accountability (AI-0068), Transparency (AI-0062)

## Sources of Unfairness

### Data-Related
1. **Historical Bias**
   - Past discrimination in training data
   - Example: Hiring data reflects historical gender imbalance

2. **Representation Bias**
   - Underrepresentation of certain groups
   - Example: Facial recognition trained primarily on one ethnicity

3. **Measurement Bias**
   - Systematic errors in data collection
   - Example: Arrest records as proxy for crime (subject to policing bias)

4. **Aggregation Bias**
   - Inappropriate data aggregation
   - Example: One-size-fits-all model for diverse populations

### Algorithm-Related
1. **Feature Selection Bias**
   - Use of proxy variables for protected attributes
   - Example: Zip code as proxy for race

2. **Optimization Bias**
   - Objective function doesn't include fairness
   - Optimization for majority group

3. **Evaluation Bias**
   - Metrics evaluated on non-representative data
   - Fairness not measured

### Deployment-Related
1. **Automation Bias**
   - Over-reliance on system outputs
   - Reduced human oversight

2. **Feedback Loops**
   - System reinforces existing biases
   - Example: Predictive policing creates more arrests in over-policed areas

3. **Population Shift**
   - Model deployed on different population than training
   - Fairness not maintained across contexts

## Bias Mitigation Strategies

### Pre-Processing (Data)
1. **Re-sampling**
   - Oversample minority groups
   - Undersample majority groups
   - Synthetic data generation (SMOTE)

2. **Re-weighting**
   - Assign weights to instances
   - Balance group representation

3. **Data Augmentation**
   - Generate additional examples
   - Balance across attributes

4. **Fair Representation Learning**
   - Learn bias-free representations
   - Remove protected attribute information

### In-Processing (Algorithm)
1. **Fairness Constraints**
   - Add fairness as optimization constraint
   - Constrained optimization

2. **Adversarial Debiasing**
   - Train model to be invariant to protected attributes
   - Adversarial network removes bias

3. **Prejudice Remover**
   - Regularization term for fairness
   - Penalize discrimination

4. **Fair Regularization**
   - Add fairness penalty to loss function
   - Balance accuracy and fairness

### Post-Processing (Outputs)
1. **Threshold Optimization**
   - Group-specific decision thresholds
   - Achieve demographic parity or equalized odds

2. **Calibration**
   - Adjust probabilities across groups
   - Ensure calibration fairness

3. **Reject Option Classification**
   - Withhold predictions near decision boundary
   - Request human review for borderline cases

## Domain-Specific Fairness

### Employment
- **Regulation**: Equal Employment Opportunity laws
- **Metric**: 80% rule (disparate impact)
- **Approach**: Remove protected attributes, monitor outcomes
- **Example**: Resume screening systems

### Credit and Lending
- **Regulation**: Equal Credit Opportunity Act, Fair Lending laws
- **Metric**: Demographic parity in approval rates
- **Approach**: Explainable models, disparate impact testing
- **Example**: Credit scoring, loan approval

### Criminal Justice
- **Regulation**: Constitutional protections, due process
- **Metric**: Equalized odds (equal accuracy across races)
- **Approach**: Transparent risk scores, human oversight
- **Example**: Recidivism prediction (COMPAS controversy)

### Healthcare
- **Regulation**: Anti-discrimination laws, medical ethics
- **Metric**: Equal opportunity (equal benefit)
- **Approach**: Clinical validation across populations
- **Example**: Diagnostic algorithms, treatment recommendations

### Education
- **Regulation**: Title IX, disability rights laws
- **Metric**: Individual fairness, equal opportunity
- **Approach**: Personalized learning, accommodation
- **Example**: Admissions, student assessment

## Regulatory Requirements

### EU AI Act
**Article 10: Data and Data Governance**
- Training datasets free from bias
- Examination of possible biases
- Appropriate data governance measures

**Recital 44**: Fairness as core requirement for high-risk systems

### GDPR
**Article 22**: Automated Decision-Making
- Right not to be subject to solely automated decisions
- Safeguards including right to explanation

**Recital 71**: Protection against discriminatory effects

### US Equal Employment Opportunity Commission (EEOC)
**Four-Fifths Rule (80% Rule)**
- Selection rate for protected group ≥ 80% of highest group
- Adverse impact threshold

## Challenges and Debates

### Philosophical Tensions
1. **Formal vs. Substantive Fairness**
   - Mathematical definitions vs. justice principles
   - Metrics vs. meaningful equity

2. **Individual vs. Group Fairness**
   - Treating individuals fairly vs. achieving group parity
   - Tensions between approaches

3. **Fairness vs. Accuracy**
   - Performance costs of fairness constraints
   - When to trade accuracy for fairness

4. **Procedural vs. Outcome Fairness**
   - Fair process vs. fair results
   - Which takes priority?

### Practical Challenges
1. **Defining Protected Groups**
   - Which attributes to protect
   - Intersectionality (multiple protected attributes)
   - Proxy variables

2. **Choosing Fairness Metric**
   - Context-dependent appropriateness
   - Impossibility of satisfying all metrics
   - Stakeholder disagreement

3. **Measuring Fairness**
   - Data availability for subgroups
   - Statistical significance
   - Temporal stability

4. **Balancing Multiple Objectives**
   - Accuracy, fairness, privacy, interpretability
   - Multi-objective optimization
   - Pareto frontiers

## Best Practices

1. **Multi-Stakeholder Input**
   - Include affected communities
   - Diverse development teams
   - External audits

2. **Context-Appropriate Metrics**
   - Choose fairness definition based on domain
   - Document rationale for metric selection
   - Consider multiple metrics

3. **Intersectional Analysis**
   - Examine fairness across intersections
   - Not just single protected attributes
   - Example: Black women, elderly disabled

4. **Continuous Monitoring**
   - Track fairness metrics over time
   - Detect fairness degradation
   - Feedback loop management

5. **Transparency and Documentation**
   - Document fairness considerations
   - Report fairness metrics
   - Enable external review

6. **Human Oversight**
   - Human-in-the-loop for critical decisions
   - Appeal mechanisms
   - Contestability

7. **Proactive Bias Testing**
   - Test before deployment
   - Red-team for fairness
   - Adversarial testing

## Tools and Frameworks

1. **AI Fairness 360 (IBM)**
   - 70+ fairness metrics
   - 10+ bias mitigation algorithms
   - Open source

2. **Fairlearn (Microsoft)**
   - Fairness assessment
   - Mitigation algorithms
   - Integration with scikit-learn

3. **What-If Tool (Google)**
   - Visual fairness exploration
   - Counterfactual analysis
   - Interactive interface

4. **Aequitas (University of Chicago)**
   - Fairness auditing
   - Bias report generation
   - Multiple metrics

## Related Terms

- **AI Trustworthiness** (AI-0061)
- **Bias** (AI-0067)
- **Harmful Bias** (AI-0084)
- **Accountability** (AI-0068)
- **Transparency** (AI-0062)
- **Non-discrimination** (AI-0038)

## Version History

- **1.0** (2025-10-27): Initial definition based on ISO/IEC TR 24027:2021 and NIST AI RMF

---

*This definition reflects the multifaceted and context-dependent nature of fairness in AI systems, acknowledging both mathematical formalizations and ethical considerations.*

## 2024-2025: From Theory to Regulatory Mandate
id:: fairness-recent-developments

The period from 2024 to 2025 represented a pivotal transition whereby algorithmic fairness evolved from an academic and voluntary concern into a **legally mandated requirement** across multiple jurisdictions, whilst simultaneously revealing the profound practical challenges of implementing fairness metrics in production AI systems at scale.

### Regulatory Codification of Fairness
The **EU AI Act**, which entered into force on 1st August 2024, established the world's first comprehensive legal framework explicitly requiring fairness in high-risk AI systems. **Article 10** mandates that training datasets for high-risk systems must be "free from errors and complete" and subject to "appropriate data governance and management practices." Crucially, **Recital 44** identifies fairness as a "core requirement" for high-risk AI, with system providers facing penalties up to **€35 million or 7% of worldwide annual turnover** for non-compliance.

The **Colorado AI Act**, enacted on 17th May 2024 and effective February 2026, became the first U.S. state law mandating fairness assessments for "high-risk" automated decision systems in employment, education, financial services, healthcare, housing, and legal contexts. The Act requires **algorithmic discrimination impact assessments** and affords consumers the right to opt out of profiling for consequential decisions.

**New York City's Local Law 144**, which took effect in July 2023 but saw active enforcement intensify throughout 2024, requires annual **bias audits** of automated employment decision tools, with results publicly disclosed, making NYC the first U.S. jurisdiction to mandate fairness auditing with transparency requirements.

### Fairness-Accuracy Trade-offs in Practice
Whilst fairness metrics have been well-theorised, 2024-2025 revealed the stark **operational challenges** of implementing fairness constraints in production systems. Research demonstrated that achieving demographic parity or equalised odds often requires **significant accuracy degradation**, particularly for minority groups the fairness constraints aim to protect.

A significant debate emerged around **fairness gerrymandering**: organisations selecting specific fairness metrics that produce favourable scores whilst ignoring metrics that would reveal bias. For instance, a hiring algorithm might satisfy demographic parity (equal hiring rates across groups) whilst violating equalised odds (unequal accuracy across groups), and organisations might publicly report only the favourable metric.

The **impossibility theorems** established by Chouldechova (2017) and Kleinberg et al. (2017) moved from theoretical curiosities to practical dilemmas. Organisations discovered they could not simultaneously satisfy calibration, balance for positive class, and balance for negative class except in trivial cases, forcing explicit **value judgements** about which fairness definition to prioritise.

### ISO Fairness Standards Adoption
**ISO/IEC 42001:2023**, published in December 2023, gained widespread adoption throughout 2024 as the first international standard for AI management systems, with fairness and non-discrimination as core requirements. **ISO/IEC TR 24027:2021**, focusing specifically on bias in AI systems, became the de facto reference for fairness metric selection and bias mitigation strategies.

Many organisations pursuing ISO 42001 certification discovered that achieving **demonstrable fairness** required substantial architectural changes, not merely post-processing adjustments. This drove adoption of **fairness-aware machine learning** techniques during model training rather than relying solely on threshold adjustments after training.

### Intersectional Fairness and Compounding Bias
2024 witnessed increased focus on **intersectional fairness**—examining AI system performance across intersections of multiple protected attributes (e.g., Black women, elderly disabled persons). Research consistently demonstrated that examining single attributes in isolation masked substantial disparities at intersections.

Fairness tools such as **AI Fairness 360**, **Fairlearn**, and **Aequitas** added intersectional analysis capabilities, allowing practitioners to compute fairness metrics across multiple demographic intersections simultaneously. However, intersectional analysis exacerbated the **small sample problem**: many intersectional subgroups had insufficient data for statistically meaningful fairness assessment, creating a tension between comprehensiveness and statistical validity.

### Contextual and Cultural Fairness
The global deployment of AI systems in 2024-2025 highlighted that fairness is **culturally contextual**. What constitutes "fair" treatment varies across societies, legal traditions, and cultural values. For instance, demographic parity is legally required in some EU contexts, whilst U.S. law emphasises individual merit and may reject group-based fairness metrics as discriminatory.

This created challenges for multinational AI systems: a single model deployed globally might satisfy fairness requirements in one jurisdiction whilst violating them in another. Some organisations developed **region-specific models** with different fairness constraints, whilst others sought "universal" fairness criteria that satisfied multiple jurisdictions simultaneously (often at the cost of reduced accuracy).

### Automated Fairness Monitoring
By late 2024, **continuous fairness monitoring** became a standard practice for high-risk AI systems. Rather than one-time fairness audits, organisations implemented real-time dashboards tracking fairness metrics in production, with automated alerts when metrics degraded below thresholds.

This shift was driven by recognition that fairness is not static: models degrade over time due to **distribution shift**, **feedback loops**, and **changing demographics**. What was fair at deployment may become unfair months later without ongoing vigilance.

### The Fairness Washing Problem
Regulators and civil society organisations raised concerns about **fairness washing**—superficial claims of fairness without substantive evidence. In response, the EU AI Act's **Article 13** requires **technical documentation** demonstrating how fairness was achieved, whilst NYC's bias audit law requires specific methodological disclosure.

Academic research in 2025 proposed **fairness certification schemes** analogous to security certifications, with independent third parties verifying fairness claims against standardised criteria, though widespread adoption remained nascent.
	- maturity:: draft
	- owl:class:: mv:Fairness
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
	- #### Relationships
	  id:: fairness-relationships
		- is-subclass-of:: [[Metaverse]]
		- requires:: [[Bias Detection]], [[Bias Mitigation]]
		- enables:: [[Non-discrimination]], [[Equal Treatment]]
