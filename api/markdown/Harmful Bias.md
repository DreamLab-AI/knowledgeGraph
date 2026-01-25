- ### OntologyBlock
  id:: harmful-bias-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0083
	- preferred-term:: Harmful Bias
	- source-domain:: mv
	- status:: draft
- public-access:: true
	- definition:: Systematic and unjust discrimination in AI system outcomes that disadvantages individuals or groups based on protected characteristics (race, gender, age, disability, religion, etc.) or other sensitive attributes, resulting in material harm, dignity violations, or perpetuation of societal inequalities.
	- maturity:: draft
	- owl:class:: mv:HarmfulBias
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :HarmfulBias))

;; Annotations
(AnnotationAssertion rdfs:label :HarmfulBias "Harmful Bias"@en)
(AnnotationAssertion rdfs:comment :HarmfulBias "Systematic and unjust discrimination in AI system outcomes that disadvantages individuals or groups based on protected characteristics (race, gender, age, disability, religion, etc.) or other sensitive attributes, resulting in material harm, dignity violations, or perpetuation of societal inequalities."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :HarmfulBias "AI-0083"^^xsd:string)
(DataPropertyAssertion :isAITechnology :HarmfulBias "true"^^xsd:boolean)
```

- ## About Harmful Bias
	- Systematic and unjust discrimination in AI system outcomes that disadvantages individuals or groups based on protected characteristics (race, gender, age, disability, religion, etc.) or other sensitive attributes, resulting in material harm, dignity violations, or perpetuation of societal inequalities.
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Harmful Bias
		  
		  **Term ID**: AI-0083
		  **Category**: Foundational Concept
		  **Status**: Active
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  Systematic and unjust discrimination in AI system outcomes that disadvantages individuals or groups based on protected characteristics (race, gender, age, disability, religion, etc.) or other sensitive attributes, resulting in material harm, dignity violations, or perpetuation of societal inequalities.
		  
		  ## Formal Specification
		  
		  ```yaml
		  term: Harmful Bias
		  definition: "Systematic unjust discrimination causing material harm or dignity violations"
		  domain: AI Ethics
		  type: System Defect
		  protected_characteristics: [race, ethnicity, gender, age, disability, religion, sexual_orientation, national_origin]
		  harm_types: [material, dignitary, representational, opportunity]
		  sources: [data, algorithm, deployment]
		  ```
		  
		  ## Authoritative References
		  
		  1. **ISO/IEC TR 24027:2021** - Bias in AI systems and AI-aided decision making
		  2. **NIST AI RMF 1.0** - "Fair — with harmful bias managed"
		  3. **EU AI Act** - Article 10(2)(f): Examination of biases
		  
		  ## Harmful vs. Benign Bias
		  
		  ### Harmful Bias
		  - Causes unjust discrimination
		  - Violates rights or dignity
		  - Perpetuates inequality
		  - **Example**: Hiring algorithm biased against women
		  
		  ### Benign/Neutral Bias
		  - Inductive bias (enables learning)
		  - Domain knowledge incorporation
		  - Not causing unjust harm
		  - **Example**: Image classifier assuming spatial locality
		  
		  ## Types of Harm from Bias
		  
		  ### 1. Material Harm
		  - Economic loss
		  - Physical harm
		  - Reduced access to services
		  - **Example**: Biased credit scoring denying loans
		  
		  ### 2. Dignitary Harm
		  - Insult to dignity
		  - Stereotyping
		  - Demeaning treatment
		  - **Example**: Facial recognition misgendering individuals
		  
		  ### 3. Representational Harm
		  - Under-representation or misrepresentation
		  - Erasure from datasets
		  - **Example**: Image search reinforcing stereotypes
		  
		  ### 4. Opportunity Harm
		  - Denied opportunities
		  - Barriers to advancement
		  - **Example**: Biased recruitment screening
		  
		  ## Detecting Harmful Bias
		  
		  1. **Fairness Metrics**: Demographic parity, equalized odds violations
		  2. **Disparate Impact Analysis**: 80% rule violation
		  3. **Subgroup Analysis**: Performance gaps across groups
		  4. **Qualitative Assessment**: Stakeholder feedback, expert review
		  
		  ## Addressing Harmful Bias
		  
		  ### Pre-Processing
		  - Balanced data collection
		  - Bias auditing of training data
		  - Re-sampling or re-weighting
		  
		  ### In-Processing
		  - Fairness constraints in optimization
		  - Adversarial debiasing
		  - Regularization for fairness
		  
		  ### Post-Processing
		  - Threshold optimization by group
		  - Calibration across groups
		  
		  ### Organizational
		  - Diverse development teams
		  - Stakeholder engagement
		  - Bias testing requirements
		  
		  ## Relationships
		  
		  - **Type Of**: Bias (AI-0067)
		  - **Opposed To**: Fairness (AI-0066)
		  - **Component Of**: AI Risk (AI-0076)
		  - **Causes**: Discrimination, Inequality
		  - **Detected By**: Fairness Metrics, Bias Audits
		  
		  ## Regulatory Context
		  
		  **EU AI Act**: High-risk systems must examine and address biases
		  
		  **Equal Opportunity Laws**: Various jurisdictions prohibit discrimination in employment, housing, credit, etc.
		  
		  **GDPR Recital 71**: Protection against discriminatory effects
		  
		  ## Best Practices
		  
		  1. **Proactive bias testing** across protected groups
		  2. **Intersectional analysis** (multiple characteristics)
		  3. **Stakeholder involvement** from affected communities
		  4. **Regular audits** throughout lifecycle
		  5. **Mitigation and monitoring** not just detection
		  6. **Transparency** about limitations and biases
		  
		  ## Related Terms
		  
		  - Bias (AI-0067)
		  - Fairness (AI-0066)
		  - AI Risk (AI-0076)
		  - Discrimination
		  
		  ## Version History
		  
		  - **1.0** (2025-10-27): Initial definition based on ISO/IEC TR 24027:2021 and NIST AI RMF
		  
		  ```

# Harmful Bias in AI Systems – Updated Ontology Entry

## Academic Context

- Systematic unfair discrimination embedded within artificial intelligence systems that produces inaccurate or discriminatory outcomes
  - Affects decisions across criminal justice, healthcare, hiring, lending, and facial recognition domains
  - Represents a fundamental challenge to equitable AI deployment rather than a peripheral concern
  - Originates from interconnected sources: training data, algorithmic design, and evaluation methodologies
  - Can amplify existing societal inequalities at unprecedented speed and scale[1]

## Current Landscape (2025)

- Manifestations across critical sectors
  - Criminal justice: Risk assessment algorithms disproportionately label individuals from minority groups as "high-risk," perpetuating systemic racial bias[4]
  - Healthcare: AI systems demonstrate reduced effectiveness for Black patients when trained on historical spending patterns rather than health needs[2]
  - Hiring and recruitment: Algorithms trained on historical data favour male candidates over female candidates, replicating embedded gender discrimination[4]
  - Facial recognition: Documented error rates significantly higher for people of colour compared to white individuals, with particular disparities affecting darker-skinned women[3]
  - Generative AI systems: Text and image generators amplify gender and racial stereotypes, with text-to-image models showing only 16% female representation in financial analyst outputs despite women comprising 43.9% of the profession[5]

- Technical sources of bias
  - Historical bias: AI systems trained on historical datasets inherently reflect societal biases embedded within those datasets[6]
  - Representation bias: Sampling and availability biases introduce distortions when datasets underrepresent women, disabled individuals, and other populations[6]
  - Algorithmic bias: Design choices and proxy variables can introduce discrimination independent of training data quality[4]
  - Evaluation bias: Assessment methodologies may fail to detect disparities across demographic groups

- Governance and standards development
  - NIST Special Publication 1270 (March 2022): "Towards a Standard for Identifying and Managing Bias in Artificial Intelligence" established foundational methods for identifying, measuring, and reducing harmful bias[1]
  - European Data Protection Board frameworks: Comprehensive bias evaluation guidance addressing data, algorithmic, and evaluation sources[6]
  - Ongoing development of assurance and governance practices across regulatory jurisdictions

- UK and North England context
  - Growing awareness among UK research institutions and technology policy bodies regarding algorithmic fairness
  - Manchester, Leeds, and Newcastle host significant AI research communities increasingly focused on bias mitigation
  - UK regulatory landscape evolving to address algorithmic accountability, particularly within public sector deployments

## Research & Literature

- Foundational studies and current research
  - Buolamwini, J. (2017). "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification." Presented at the Conference on Fairness, Accountability and Transparency. Demonstrated significant accuracy disparities in commercial gender classification systems, with highest error rates affecting darker-skinned females[3]
  - Nicoletti, L. & Bass, D. (2023). Analysis of Stable Diffusion image generation revealing simultaneous amplification of gender and racial stereotypes[3]
  - Luccioni, A. S., et al. (2023). Research on risks of biased generative AI in police "virtual sketch artist" applications, highlighting potential for increased harm to over-targeted populations[3]
  - Garg, S., et al. (2018). "Word Embeddings Quantify 100 Years of Gender and Ethnic Stereotypes." Proceedings of the 2018 Conference on Empirical Methods in Natural Language Processing. Demonstrated historical bias embedded within word embeddings used in text generation systems[6]
  - Paullada, A., et al. (2021). Research on availability bias in dataset selection and out-of-context reuse of datasets[6]

- Ongoing research directions
  - Linguistic bias in large language models and mitigation strategies
  - Intersectional approaches to bias evaluation across multiple demographic dimensions
  - Trust gaps in generative AI adoption, particularly among underrepresented groups
  - Real-world consequences of biased outputs in high-stakes decision-making contexts

## UK Context

- British research contributions
  - UK universities increasingly conducting fairness and bias research within AI systems
  - Growing policy attention to algorithmic accountability within public sector (NHS, criminal justice, benefits administration)
  - Manchester and Leeds emerging as regional hubs for AI ethics research and responsible AI development

- Regional considerations
  - North England institutions collaborating on fairness-aware machine learning research
  - Public sector organisations in Manchester, Leeds, Newcastle, and Sheffield exploring bias auditing frameworks for algorithmic decision systems
  - Particular attention to bias in welfare and social care algorithms affecting vulnerable populations

## Future Directions

- Emerging priorities
  - Development of robust, standardised bias evaluation methodologies applicable across diverse AI applications
  - Integration of fairness considerations into AI development lifecycles rather than post-hoc remediation
  - Improved transparency mechanisms to address "black box" decision-making and enable meaningful audit trails
  - Clearer accountability frameworks assigning responsibility among developers, deploying organisations, and regulators

- Anticipated challenges
  - Tension between model performance optimisation and fairness constraints
  - Difficulty in defining and measuring fairness across intersecting demographic categories
  - Resource constraints for comprehensive bias testing, particularly among smaller organisations
  - Risk that technological framing of bias obscures underlying structural inequalities

- Research priorities
  - Longitudinal studies tracking real-world harms from biased AI systems
  - Development of bias mitigation techniques that maintain model utility
  - Interdisciplinary approaches combining computer science, social science, and ethics
  - Investigation of how biased AI systems shape public perception and behaviour over time[5]

## References

[1] National Institute of Standards and Technology (2022). "Towards a Standard for Identifying and Managing Bias in Artificial Intelligence." NIST Special Publication 1270.

[2] AIMultiple Research (2024). "Bias in AI: Examples and 6 Ways to Fix it." Available at: research.aimultiple.com/ai-bias/

[3] MIT Sloan EdTech (2024). "When AI Gets It Wrong: Addressing AI Hallucinations and Bias." Available at: mitsloanedtech.mit.edu/ai/basics/addressing-ai-hallucinations-and-bias/

[4] TIME (2024). "The Definition of AI Bias." Available at: time.com/collections/the-ai-dictionary-from-allbusiness-com/7273920/definition-of-ai-bias/

[5] TechPolicy.Press (2024). "AI bias is not ideological. It's science."

[6] European Data Protection Board (2025). "Bias evaluation." Available at: edpb.europa.eu/system/files/2025-01/d1-ai-bias-evaluation_en.pdf


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
