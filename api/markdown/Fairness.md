public:: true

# Fairness
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7ac386bbf1125d59473f2497226874cd514386615337c34b307b5d70c7bc0eb2",
  "@type": "Page",
  "vc:slug": "fairness",
  "title": "Fairness",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bias-detection",
      "vc:label": "Bias Detection"
    },
    {
      "@id": "urn:visionflow:linked:bias-mitigation",
      "vc:label": "Bias Mitigation"
    },
    {
      "@id": "urn:visionflow:linked:equal-treatment",
      "vc:label": "Equal Treatment"
    },
    {
      "@id": "urn:visionflow:linked:non-discrimination",
      "vc:label": "Non-discrimination"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0065"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Fairness"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fairness",
  "@type": "Class",
  "label": "Fairness",
  "definition": "The property of an AI system whereby it produces equitable outcomes and avoids creating or reinforcing unjustifiable disparities across different demographic groups or individuals, measured through various mathematical definitions and ethical principles including demographic parity, equalized odds, equal opportunity, calibration, and individual fairness.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:ai-governance-and-ethics",
    "label": "AI Governance and Ethics"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bias-detection-methods",
        "label": "Bias Detection"
      },
      {
        "@id": "urn:ngm:class:bias-mitigation-techniques",
        "label": "Bias Mitigation"
      },
      {
        "@id": "urn:ngm:class:protected-attribute",
        "label": "Protected Attribute"
      },
      {
        "@id": "urn:ngm:class:fairness-metric",
        "label": "Fairness Metric"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:equal-treatment",
        "label": "Equal Treatment"
      },
      {
        "@id": "urn:ngm:class:non-discrimination",
        "label": "Non-discrimination"
      },
      {
        "@id": "urn:ngm:class:algorithmic-accountability",
        "label": "Algorithmic Accountability"
      },
      {
        "@id": "urn:ngm:class:trustworthy-ai",
        "label": "Trustworthy AI"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:group-fairness",
        "label": "Group Fairness"
      },
      {
        "@id": "urn:ngm:class:group-vs-individual-fairness",
        "label": "Individual Fairness"
      },
      {
        "@id": "urn:ngm:class:procedural-fairness",
        "label": "Procedural Fairness"
      },
      {
        "@id": "urn:ngm:class:distributive-fairness",
        "label": "Distributive Fairness"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:representative-training-data",
        "label": "Representative Training Data"
      },
      {
        "@id": "urn:ngm:class:explainability",
        "label": "Explainability"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:eu-ai-act-regulatory-instrument",
        "label": "EU AI Act"
      },
      {
        "@id": "urn:ngm:class:nist-ai-rmf",
        "label": "NIST AI RMF"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:human-rights",
        "label": "Human Rights"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:bias",
        "label": "Bias"
      },
      {
        "@id": "urn:ngm:class:harmful-bias",
        "label": "Harmful Bias"
      },
      {
        "@id": "urn:ngm:class:disparate-impact",
        "label": "Disparate Impact"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:ai-regulation",
        "label": "AI Regulation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:demographic-parity",
        "label": "Demographic Parity"
      },
      {
        "@id": "urn:ngm:class:equalized-odds",
        "label": "Equalized Odds"
      },
      {
        "@id": "urn:ngm:class:counterfactual-fairness",
        "label": "Counterfactual Fairness"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:algorithmic-fairness",
      "label": "Algorithmic Fairness"
    },
    {
      "@id": "urn:ngm:class:equitable-ai",
      "label": "Equitable AI"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:fairness:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7ac386bbf1125d59473f2497226874cd514386615337c34b307b5d70c7bc0eb2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bias Detection]]",
      "resolved": "urn:visionflow:linked:bias-detection",
      "kind": "StubLink"
    },
    {
      "raw": "[[Bias Mitigation]]",
      "resolved": "urn:visionflow:linked:bias-mitigation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Equal Treatment]]",
      "resolved": "urn:visionflow:linked:equal-treatment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Non-discrimination]]",
      "resolved": "urn:visionflow:linked:non-discrimination",
      "kind": "StubLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The property of an AI system whereby it produces equitable outcomes and avoids creating or reinforcing unjustifiable disparities across different demographic groups or individuals, measured through various mathematical definitions and ethical principles.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Fairness
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - requires:: [[Bias Detection]], [[Bias Mitigation]]
  - enables:: [[Non-discrimination]], [[Equal Treatment]]

- ### Content
  - The property of an AI system whereby it produces equitable outcomes and avoids creating or reinforcing unjustifiable disparities across different demographic groups or individuals, measured through various mathematical definitions and ethical principles.

		- ### **1. Cooperation**
			- Respectful cooperation between standards organizations, whereby each respects the autonomy, integrity, processes, and intellectual property rules of the others.
				- **Due process.** Decisions are made with equity and fairness among participants. No one party dominates or guides standards development. Standards processes are transparent and opportunities exist to appeal decisions. Processes for periodic standards review and updating are well defined.
				- **Broad consensus.** Processes allow for all views to be considered and addressed, such that agreement can be found across a range of interests.
				- **Openness.** Standards processes are open to all interested and informed parties.

  ## Formal Specification

  ```yaml
  term: Fairness
  definition: "Equitable treatment and outcomes across groups and individuals in AI systems"
  domain: AI Ethics
  type: Quality Attribute
  dimensions:
  - individual_fairness
  - group_fairness
  - procedural_fairness
  - distributive_fairness
  metrics:
  - demographic_parity
  - equalized_odds
  - equal_opportunity
  - calibration
  - individual_fairness_metrics
  protected_attributes: [race, gender, age, disability, religion, nationality]
  ```

  ## Formal Ontology

  #### Key Characteristics
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

		  ```

  - public-access:: true
  - definition:: The property of an AI system whereby it produces equitable outcomes and avoids creating or reinforcing unjustifiable disparities across different demographic groups or individuals, measured through various mathematical definitions and ethical principles.


  # Updated Ontology Entry: Fairness

  ## Academic Context

  - Fairness in artificial intelligence represents a multifaceted endeavour to ensure AI systems treat all individuals and demographic groups equitably[1][2]
  - Encompasses prevention of discriminatory outcomes linked to protected characteristics including ethnicity, gender, religion, and socioeconomic status[1][3]
  - Rooted in longstanding principles of non-discrimination spanning moral philosophy, human rights frameworks, and legal protections[3]
  - Fundamentally distinct from mere accuracy or performance metrics—a system can be technically proficient whilst remaining profoundly unfair[3]

  - The field emerged as a formal discipline following high-profile cases demonstrating algorithmic bias in consequential systems
  - COMPAS recidivism prediction software exemplified how ostensibly objective algorithms perpetuate racial disparities[1]
  - Prompted recognition that training data devoid of undesirable biases remains exceptionally difficult to obtain[3]

  ## Current Landscape (2025)

  - Definitional plurality remains the field's defining characteristic
  - No universally accepted definition of fairness exists across machine learning applications[1]
  - Fairness can be interpreted through frameworks of equality, equity, and justice, each emphasising distinct aspects of equitable treatment[1]
  - What constitutes fairness in one domain may differ substantially in another—a rather inconvenient truth for those seeking universal solutions[1]

  - High-stakes deployment contexts drive urgency
  - Predictive policing, employment screening, and credit scoring represent domains where algorithmic decisions profoundly affect individuals[3]
  - AI healthcare market valued at $20.9 billion in 2024, forecast to reach $148.4 billion by 2029, necessitating robust fairness frameworks[4]
  - Medical diagnostics increasingly employ AI-assisted systems where fairness considerations intersect with clinical accuracy requirements[4]

  - Technical measurement approaches
  - Researchers have developed metrics comparing predicted outcomes against actual outcomes and associated likelihoods[1]
  - Fairness metrics scrutinise relationships between predictive results and sensitive attributes within machine learning models[1]
  - Multiple competing fairness definitions create mathematical incompatibility—no single model can simultaneously satisfy all fairness criteria[4]

  - Regulatory environment (2025)
  - United States: No comprehensive federal AI legislation; existing frameworks including Fair Credit Reporting Act (FCRA) and Equal Credit Opportunity Act (ECOA) address AI fairness indirectly[5]
  - Federal Trade Commission (FTC) actively warns against racially biased algorithms and discriminatory deployment practices[5]
  - European Union: AI Act (adopted 2024) establishes binding requirements for transparency, accountability, and non-discrimination in high-risk AI systems[5]
  - Canada: Directive on Automated Decision-Making mandates transparency, risk assessment, user notification, and human intervention options for government-deployed AI[5]

  - UK and North England context
  - Information Commissioner's Office (ICO) guidance emphasises handling personal data in ways people reasonably expect, avoiding unjustified adverse effects[8]
  - UK GDPR framework requires fairness considerations in automated decision-making affecting individuals[8]
  - Manchester and Leeds emerging as UK AI ethics research hubs, with institutional focus on fairness frameworks applicable to public sector deployment
  - Newcastle and Sheffield contributing to regional AI governance discussions, particularly regarding employment and public service applications

  ## Research & Literature

  - Foundational works and current scholarship
  - Koombea AI Research (2024). "Bias and Fairness in AI: Understanding the Challenges and Solutions." Available at: https://ai.koombea.com/blog/bias-and-fairness-in-ai
  - GeeksforGeeks (2024). "Fairness and Bias in Artificial Intelligence." Technical documentation addressing definitional frameworks and mitigation strategies.
  - Selbst, A. D., & Barocas, S. (2019). "The Intuitive Appeal of Explainable Machines." *Fordham L. Rev.*, 87, 1085. Addresses limitations of technical formalism in fairness approaches.
  - Buolamwini, B., & Gebru, T. (2018). "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification." *Conference on Fairness, Accountability and Transparency*, 77–91. Seminal work demonstrating intersectional bias in commercial systems.

  - Recent critical perspectives
  - Communications of the ACM (2025). "Inherent Limitations of AI Fairness." Identifies eight fundamental constraints limiting technical fairness approaches' practical efficacy[3]
  - Contrary Research (2025). "Bias & Fairness in AI Models—Deep Dive." Explores contextual fairness standards and domain-specific approaches[4]

  - Ongoing research directions
  - Contextual fairness standards tailored to specific application domains rather than universal metrics[4]
  - Intersection of fairness with explainability and interpretability in high-stakes decision systems
  - Cross-cultural fairness definitions and their implications for global AI deployment[4]

  ## Technical Considerations and Limitations

  - Inherent constraints of current approaches
  - Assessment of fairness performance remains contested; no agreed benchmarks exist across domains[3]
  - Sensitive demographic data requirements create privacy tensions with fairness objectives[3]
  - Technical formalisation possesses limited power in high-impact decision processes requiring nuanced human judgment[3]
  - Mathematical incompatibility between competing fairness definitions prevents simultaneous optimisation[4]

  - The fairness-accuracy trade-off
  - Prioritising certain fairness definitions may reduce overall predictive accuracy[4]
  - Domain-specific choices require explicit value judgments about acceptable trade-offs[4]

  ## Future Directions

  - Emerging trajectories (2025 onwards)
  - Contextual fairness standards: Different domains will likely adopt tailored fairness metrics rather than universal approaches[4]
    - Medical AI may prioritise predictive parity ensuring accurate positive and negative predictions[4]
    - Generative AI for cultural representation may emphasise equitable demographic reflection over training data fidelity[4]

  - Globalisation of fairness standards
    - Different societies hold distinct intuitions about fairness; US emphasis on group fairness and human rights may diverge from collectivist cultural perspectives[4]
    - International AI companies will require adaptive fairness parameters complying with varied legal and cultural environments[4]

  - Regulatory consolidation
    - Patchwork of domain-specific standards emerging across jurisdictions[4]
    - Increasing coordination between technical developers, regulators, and ethicists to establish domain-appropriate fairness principles[4]

  - Anticipated challenges
  - Fairness remains inherently political and social, requiring ongoing negotiation and trade-off acceptance[4]
  - Resistance to acknowledging fairness as value-laden rather than purely technical problem
  - Implementation gaps between regulatory requirements and practical deployment capabilities

  ## References

  [1] Koombea AI Research. "Bias and Fairness in AI: Understanding the Challenges and Solutions." Available at: https://ai.koombea.com/blog/bias-and-fairness-in-ai

  [2] GeeksforGeeks. "Fairness and Bias in Artificial Intelligence." Technical documentation on fairness frameworks and mitigation strategies.

  [3] Communications of the ACM. "Inherent Limitations of AI Fairness." Research article examining eight fundamental constraints of technical fairness approaches. Available at: https://cacm.acm.org/research/inherent-limitations-of-ai-fairness/

  [4] Contrary Research. "Bias & Fairness in AI Models—Deep Dive." Analysis of contextual fairness standards and domain-specific approaches. Available at: https://research.contrary.com/deep-dive/bias-fairness

  [5] Tabor, F. "AI Evaluation Metrics—Bias & Fairness." Comprehensive overview of regulatory landscape including FCRA, ECOA, FTC guidance, EU AI Act, and Canadian frameworks. Available at: https://www.francescatabor.com/articles/2025/7/10/ai-evaluation-metrics-bias-amp-fairness

  [6] Information Commissioner's Office (ICO). "What about fairness, bias and discrimination?" UK GDPR guidance on fairness in AI systems. Available at: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/how-do-we-ensure-fairness-in-ai/what-about-fairness-bias-and-discrimination/

  [7] UNESCO. "Ethics of Artificial Intelligence—Recommendation on the Ethics of Artificial Intelligence." Global standard established November 2021. Available at: https://www.unesco.org/en/artificial-intelligence/recommendation-ethics


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

  ## Formal Specification

  ```yaml
  term: Fairness
  definition: "Equitable treatment and outcomes across groups and individuals in AI systems"
  domain: AI Ethics
  type: Quality Attribute
  dimensions:
  - individual_fairness
  - group_fairness
  - procedural_fairness
  - distributive_fairness
  metrics:
  - demographic_parity
  - equalized_odds
  - equal_opportunity
  - calibration
  - individual_fairness_metrics
  protected_attributes: [race, gender, age, disability, religion, nationality]
  ```

  ## Formal Ontology

  #### References
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

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
