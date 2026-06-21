- ### Definition
  - Decision transparency is the structural property of an [[Artificial Intelligence]] or [[Automated Decision-Making]] system whereby the basis, logic, contributing factors, and limitations of its outputs are made accessible and comprehensible to all relevant stakeholders at an appropriate level of detail. It encompasses three nested layers of disclosure: (1) the technical layer, where model weights, feature attributions, attention patterns, and decision boundaries can be inspected and described using tools such as [[SHAP]], [[LIME]], and [[Counterfactual Explanation]] methods; (2) the process layer, where organisational practices around data collection, model training, evaluation criteria, deployment scope, and known failure modes are documented in structured artefacts such as [[AI Model Card]] disclosures and [[Audit Trail]] records; and (3) the societal layer, where affected individuals, regulators, and civil society receive audience-adapted explanations sufficient to understand, contest, and where appropriate override AI-driven decisions. Decision transparency sits at the intersection of [[Explainable AI]] as a technical subdiscipline, [[Model Interpretability]] as a property of model architecture, [[AI Governance]] as an institutional practice, and [[Regulatory Compliance]] as a legal obligation. It is a necessary but not sufficient condition for [[Accountability]] — a system may be transparent yet still produce unfair or harmful outcomes — but without transparency, neither [[Algorithmic Accountability]] nor meaningful [[Human Oversight]] is achievable. As of 2026, decision transparency has become a mandatory regulatory requirement for high-risk AI systems under the EU AI Act and a key principle in UK AI governance as reformed by the Data (Use and Access) Act 2025, making it one of the most practically consequential concepts in the [[AI Ethics]] landscape.

- ### Semantic Classification
  - owl-class:: ai:DecisionTransparency
  - owl-role:: Concept | GovernancePrinciple | RegulatoryRequirement
  - owl-inferred:: ai:AIGovernanceAndEthics, ai:ResponsibleAI, ai:ExplainableAI
  - belongs-to-domain:: [[AI Governance and Ethics]]
  - implemented-in-layer:: [[Conceptual Layer]]

- ### Relationships
  - is-subclass-of:: [[AI Governance and Ethics]], [[Responsible AI]], [[AI Ethics]]
  - requires:: [[Explainable AI]], [[Interpretability]], [[Audit Trail]], [[Feature Importance]], [[Post Hoc Explanation]], [[Model Interpretability]], [[SHAP]], [[LIME]]
  - enables:: [[Accountability]], [[Algorithmic Accountability]], [[AI Trustworthiness]], [[Contestability]], [[Human Oversight]], [[Regulatory Compliance]], [[AI Fairness]], [[Stakeholder Engagement in AI]], [[Responsible AI]]
  - supports:: [[AI Governance]], [[Data Governance]], [[Risk Management]], [[Stakeholder Engagement in AI]], [[AI Model Card]], [[Algorithmic Transparency Index]], [[Knowledge Graph]]
  - implements:: [[AI Governance Framework]], [[Ethical Framework]], [[Regulatory Compliance]], [[Algorithmic Accountability]]
  - uses:: [[SHAP]], [[LIME]], [[Counterfactual Explanation]], [[AI Model Card]], [[Algorithmic Transparency Index]], [[Decision Tree]], [[Feature Importance]], [[Confusion Matrix]], [[Model Evaluation]]
  - depends-on:: [[Machine Learning]], [[Neural Network]], [[Decision Tree]], [[Automated Decision-Making]], [[Training Data]], [[Loss Function]], [[Supervised Learning]]
  - contrasts-with:: [[Black Box AI]], [[Opaque Model]], [[Deep Learning]]
  - related-to:: [[AI Ethics]], [[AI Fairness]], [[GDPR]], [[EU AI Act]], [[Algorithmic Transparency Index]], [[Random Forest]], [[Gradient Boosted Trees]], [[Algorithmic Bias]], [[Right to Explanation]], [[Responsible AI]], [[Knowledge Graph]], [[Sentiment Analysis]]
  - standardized-by:: [[EU AI Act]], [[GDPR]], [[IEEE P2976 (XAI)]], [[NIST AI RMF]]

- ### Content
  - ## Compositional Relationships (Components)
    - ```
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:hasPart ai:ExplainableAI))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:hasPart ai:AuditTrail))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:hasPart ai:ModelInterpretability))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:hasPart ai:AIModelCard))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:hasPart ai:FeatureImportance))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:hasPart ai:PostHocExplanation))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:hasPart ai:Contestability))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:hasPart ai:CounterfactualExplanation))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:hasPart ai:AlgorithmicTransparencyIndex))
      ```
  - ## Dependency Relationships
    - ```
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:requires ai:Interpretability))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:requires ai:ExplainableAI))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:requires ai:AuditTrail))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:requires ai:FeatureImportance))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:requires ai:PostHocExplanation))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:dependsOn ai:AutomatedDecisionMaking))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:dependsOn ai:MachineLearning))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:dependsOn ai:SHAP))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:dependsOn ai:LIME))
      ```
  - ## Capability Relationships
    - ```
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:enables ai:Accountability))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:enables ai:AlgorithmicAccountability))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:enables ai:AITrustworthiness))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:enables ai:Contestability))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:enables ai:HumanOversight))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:enables ai:RegulatoryCompliance))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:enables ai:AIFairness))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:enables ai:StakeholderEngagementInAI))
      ```
  - ## Implementation Relationships
    - ```
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:implements ai:AIGovernancePrinciple))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:implements ai:RegulatoryRequirement))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:implements ai:EthicalFramework))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:supports ai:ResponsibleAI))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:supports ai:AIGovernance))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:supports ai:DataGovernance))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:supports ai:RiskManagement))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:uses ai:AIModelCard))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:uses ai:SHAP))
      ```
  - ## Reduction Relationships
    - ```
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:reducesTo ai:Interpretability))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:reducesTo ai:ExplainableAI))
      SubClassOf(ai:DecisionTransparency
        ObjectSomeValuesFrom(ai:reducesTo ai:ModelInterpretability))
      ```
  - ## About
    - Decision transparency operates at multiple levels of an AI system's lifecycle and is best understood not as a single binary property but as a multi-dimensional spectrum calibrated to audience, risk level, and regulatory context.
    - At its most fundamental level it is a technical property: can the internal workings of a [[Machine Learning]] model — its weights, activation patterns, decision boundaries, or feature attributions — be described in a way that connects a given output to identifiable input characteristics?
    - This is the domain of [[Interpretability]] and [[Explainable AI]], which provide tools such as [[SHAP]] (SHapley Additive exPlanations), [[LIME]] (Local Interpretable Model-agnostic Explanations), and [[Counterfactual Explanation]] methods to decompose predictions into contributing factors.
    - Without these mechanisms, a model may produce accurate outputs but remain a black box, leaving users unable to verify whether a correct answer was reached for the right reasons.
    - The distinction between intrinsically interpretable models and post-hoc explanation methods is central to decision transparency as a technical discipline:
      - **Intrinsically interpretable models**: [[Decision Tree]] instances, linear models, and rule-based systems are transparent by construction — the model's structure directly encodes the decision logic, and each prediction maps to a human-readable path of conditions. No additional explanation mechanism is required; the model itself is the explanation.
      - **Post-hoc explanation methods**: Complex models such as deep [[Neural Network]] architectures, large language models, and gradient-boosted tree ensembles require separate explanation generation. Methods such as [[SHAP]], [[LIME]], [[Counterfactual Explanation]], and Integrated Gradients are applied to the model after training to approximate or describe its behaviour. Post-hoc explanations carry inherent fidelity limitations: they approximate rather than directly read the model's internal reasoning.
    - The faithfulness problem is a central challenge in decision transparency: a post-hoc explanation may be plausible and human-coherent but not accurately reflect the model's actual computational process. Jain and Wallace (2019) demonstrated that attention weights in neural models do not reliably indicate feature importance. Mittelstadt et al. (2019) formalised the conditions under which explanations are misleading rather than informative. This problem motivates Rudin's (2019) strong advocacy for inherently interpretable models in high-stakes settings.
    - At the process level, decision transparency requires that organisations systematically document the data sources, training procedures, evaluation criteria, known failure modes, and deployment contexts for each deployed model.
    - [[AI Model Card]] frameworks, originally developed at Google and now widely adopted, operationalise this by providing structured disclosure templates that capture performance across demographic subgroups, intended use cases, and ethical considerations.
    - When disclosed to regulators or the public, model cards transform abstract commitments to transparency into verifiable artefacts that support [[Audit Trail]] construction.
    - The [[Algorithmic Transparency Index]], published by research organisations and regulators, provides comparative benchmarking across organisations and systems, creating reputational and competitive incentives for disclosure.
    - At the societal level, decision transparency interfaces with legal rights and institutional mandates.
    - The [[GDPR]]'s Article 22, read alongside Articles 13–15, creates a de facto right to an explanation for individuals subject to solely automated decisions with significant effects.
    - The [[EU AI Act]], with high-risk system requirements entering full force in August 2026, mandates that providers and deployers of high-risk AI systems ensure that outputs are "sufficiently transparent to enable users to interpret the system output and use it appropriately" — with penalties up to €35 million for non-compliance.
    - The UK's Data (Use and Access) Act 2025, in force from 12 May 2026, replaced the GDPR Article 22 prohibition on solely automated decisions with a conditions-based framework administered by the ICO, requiring meaningful information about decision logic.
    - [[AI Fairness]] is inextricably linked to decision transparency: without knowing how a decision was made, it is impossible to assess whether it was made equitably — and without transparency, discriminatory patterns embedded in training data or model design cannot be detected and challenged.
    - The temporal dimension of decision transparency is often overlooked: transparency must be maintained not just at the moment of deployment but across the entire model lifecycle, including data collection, training, evaluation, deployment, monitoring, updating, and decommissioning. [[Audit Trail]] systems capture this longitudinal record, enabling retrospective investigation of decisions made in the past.
  - ## Architecture and Levels
    - Decision transparency is typically modelled across three architectural levels, each addressing a different set of stakeholder needs and requiring different technical implementations.
    - **Model-level transparency**:
      - Concerns the intrinsic intelligibility of model structure — can the model itself be understood without external explanation tools?
      - Intrinsically interpretable models — [[Decision Tree]] instances (especially shallow configurations with depth 3–7), linear and logistic regression, generalised additive models, rule sets, and scoring systems — are transparent by construction. Their predictions can be read directly from the model representation by domain experts without specialised ML knowledge.
      - Deep [[Neural Network]] models, large language models, and complex ensembles ([[Random Forest]], [[Gradient Boosted Trees]]) are not intrinsically interpretable at any practically meaningful scale and require post-hoc techniques to approximate reasoning.
      - Model architecture choices directly determine what transparency is achievable: choosing an interpretable model architecture is the most reliable path to decision transparency; choosing a complex architecture creates a permanent dependency on post-hoc explanation tools whose fidelity cannot be fully guaranteed.
      - The Explainable Boosting Machine (EBM, Microsoft interpretml) represents a significant advance: it achieves near-random-forest accuracy on tabular data while maintaining full additive interpretability — each feature's contribution is a learned shape function that can be visualised and inspected directly.
    - **Prediction-level transparency (instance-level explanation)**:
      - Concerns explanations of individual predictions — why did the model assign this score/label to this specific input?
      - Tools and their properties:
        - [[SHAP]] values: axiomatic feature attribution grounded in cooperative game theory. Consistent, additive, satisfying efficiency (attributions sum to the difference between prediction and expected value). Exact for tree models via TreeExplainer; approximate for neural networks via DeepExplainer and GradientExplainer.
        - [[LIME]]: local linear approximations fitted around each instance by sampling perturbed inputs. Model-agnostic; provides a different perspective from SHAP; less consistent across runs due to sampling stochasticity.
        - [[Counterfactual Explanation]]: smallest actionable change to the input that would change the prediction. Provides directly actionable recourse information; satisfies [[Contestability]] requirements under EU AI Act and GDPR.
        - [[Feature Importance]] at instance level: which features most strongly influenced this specific prediction? Computed per-instance by SHAP values; can also be approximated by occlusion, partial feature masking, or gradient-based methods.
      - Each method provides a different lens on model behaviour and carries different fidelity guarantees. No single method is universally best; choosing the appropriate explanation method depends on the stakeholder, the model type, and the regulatory requirement.
    - **System-level transparency**:
      - Concerns the broader sociotechnical context of the AI system's deployment: data provenance, training methodology, evaluation across subgroups, deployment constraints, governance structures, monitoring and incident response.
      - [[AI Model Card]] and Data Sheets artefacts operationalise this level: structured documentation templates that capture intended use, performance characteristics across demographic subgroups, known failure modes, and ethical considerations. Google's original model card format (Mitchell et al. 2019), the IEEE Ethically Aligned Design (EAD) templates, and the EU AI Act's technical documentation requirements all specify variants of system-level transparency artefacts.
      - [[Audit Trail]] mechanisms provide temporal accountability: chronological logs of decision inputs, outputs, model versions, data updates, human review actions, and system configuration changes. Necessary for post-hoc accountability and regulatory inspection. UK GDPR Article 30 records of processing activities provide the legal basis for audit trail requirements for automated decision-making.
      - Algorithmic Impact Assessments (AIAs): structured pre-deployment evaluations of an AI system's anticipated effects on affected groups, analogous to Data Protection Impact Assessments (DPIAs) under GDPR. The ICO's guidance and the EU AI Act's fundamental rights impact assessment requirements for Annex III systems both constitute forms of system-level transparency obligation.
    - **Audience adaptation**:
      - Effective decision transparency requires audience-calibrated communication strategies alongside the underlying technical infrastructure.
      - Technical developers require: precise numerical [[Feature Importance]] rankings; model architecture documentation; training methodology and hyperparameters; evaluation metrics across subgroups; failure mode analysis.
      - Domain experts (clinicians, credit analysts, immigration officers) require: decision path explanations in domain language; comparison with known decision rules; confidence levels and uncertainty indicators; identification of cases at the model's performance boundary.
      - Affected individuals require: plain-language summaries of factors influencing the decision; comparison with what would have led to a different outcome ([[Counterfactual Explanation]]); information about how to challenge the decision ([[Contestability]] mechanisms); clear indication of whether a human reviewed the automated decision.
  - ## XAI Methods and Techniques
    - The technical apparatus for decision transparency comprises both intrinsic model properties and post-hoc explanation methods. The landscape is structured by four dimensions: scope (local/individual vs. global/model-wide), model-specificity (model-agnostic vs. model-specific), modality (tabular, text, image, time series), and output type (feature attribution, counterfactual, example-based, natural language).
    - **SHAP (SHapley Additive exPlanations)**:
      - Lundberg and Lee (2017) ground feature attribution in cooperative game theory, producing additive explanations satisfying efficiency, dummy, symmetry, and linearity axioms.
      - A SHAP value phi_j for feature j represents the average marginal contribution of feature j across all possible feature coalitions, computed as a weighted average.
      - SHAP TreeExplainer runs in O(TLD^2) time for tree models, making it tractable on gradient-boosted ensembles including XGBoost, LightGBM, and [[Random Forest]].
      - Global SHAP summaries (mean absolute SHAP values per feature) provide model-wide [[Feature Importance]] ranking; individual SHAP values explain single predictions.
      - SHAP interaction values decompose predictions into main effects and pairwise interaction effects, identifying joint feature dependencies.
    - **LIME (Local Interpretable Model-agnostic Explanations)**:
      - Ribeiro et al. (2016) fit a locally faithful interpretable model (typically a linear model or [[Decision Tree]]) around each prediction by sampling perturbed instances and weighting them by proximity to the instance of interest.
      - Model-agnostic: can be applied to any classifier or regressor by treating it as a black box.
      - Computationally accessible but sensitive to the choice of neighbourhood kernel, sampling distribution, and perturbation scheme — two runs on the same instance can produce different explanations.
      - Used in production for text and tabular classification transparency; less reliable for high-dimensional structured data.
    - **Counterfactual Explanations**:
      - Wachter et al. (2017) propose actionable recourse statements of the form "if feature X had been Y, the decision would have changed to the desired outcome."
      - Directly address the [[Contestability]] requirement under GDPR and EU AI Act: they provide a basis for challenging and potentially reversing an adverse automated decision.
      - Constrained optimisation problem: find the minimal perturbation to the input such that the model's predicted class changes. Constraints encode actionability (only mutable features), proximity (prefer small changes), and sparsity (prefer few feature changes).
      - Multiple algorithmic implementations: DICE (Mothilal et al. 2020) generates diverse counterfactual sets; FACE (Poyiadzi et al. 2020) constrains counterfactuals to plausible data manifold regions.
    - **Integrated Gradients**:
      - Sundararajan et al. (2017) attribute a prediction to input features by integrating gradients along a path from a baseline (e.g., zero vector or black image) to the input, satisfying completeness and implementation invariance axioms.
      - Widely used for [[Neural Network]] transparency in computer vision and NLP; provides pixel-level or token-level attribution maps.
      - Sensitive to baseline choice; different baselines produce different attribution patterns.
    - **Attention Visualisation**:
      - In transformer-based models, attention weight distributions are used as proxy explanations for which input tokens influenced a prediction.
      - Jain and Wallace (2019) demonstrate that attention weights do not reliably identify the features most causally important to the prediction — attention is not a faithful explanation of the model's reasoning process.
      - More faithful alternatives for transformer models include attention rollout, gradient-weighted attention, and mechanistic interpretability methods (activation patching, sparse autoencoders).
    - **Intrinsic Interpretability via [[Decision Tree]] and Rule Sets**:
      - A [[Decision Tree]] trained directly on the task provides the most direct form of decision transparency — each prediction corresponds to an auditable path of logical conditions expressible in natural language.
      - The trade-off with accuracy motivates hybrid approaches: shallow surrogate trees fitted to approximate deep models, or Explainable Boosting Machine (EBM) architectures that achieve near-ensemble accuracy while maintaining additive interpretability.
    - **Global Explanations and Model Summaries**:
      - Partial Dependence Plots (PDPs): show the marginal effect of one or two features on the predicted outcome, averaging over all values of other features. Globally interpretable but may miss important feature interactions.
      - Accumulated Local Effects (ALE): Apley and Zhu (2020) address the extrapolation problem of PDPs by computing local effects within narrow feature bins, providing unbiased global feature effect estimates even when features are correlated.
  - ## Regulatory Landscape (2026)
    - The regulatory pressure on decision transparency intensified significantly in 2025–2026, converting it from an aspirational best practice into a legally enforceable obligation across multiple jurisdictions simultaneously.
    - **EU AI Act (August 2026 enforcement)**:
      - Annex III high-risk systems — credit scoring, employment screening, education, healthcare (medical devices, clinical decision support), critical infrastructure, biometrics, law enforcement, immigration, administration of justice — must provide:
        - Technical documentation sufficient for conformity assessment by a notified body;
        - User instructions enabling users to interpret the system output and use it appropriately;
        - [[Human Oversight]] mechanisms allowing operators to intervene in, override, or refuse to act on outputs;
        - Logging and [[Audit Trail]] of system operation;
        - Transparency information for persons subject to AI-assisted decisions under Annex III para. 8 (additional [[Contestability]] obligations).
      - Penalties: up to €35 million or 7% of global annual turnover for serious breaches; up to €15 million or 3% for other violations; up to €7.5 million or 1.5% for providing incorrect information to authorities.
      - Enforcement: national market surveillance authorities in each EU member state, coordinated by the European AI Office.
    - **UK Data (Use and Access) Act 2025 / SI 2026/425**:
      - Replaced the GDPR Article 22 general prohibition on solely automated decisions with legal effects or similarly significant effects with a conditions-based approach.
      - SI 2026/425, in force 12 May 2026, specifies the conditions under which solely automated decisions are permissible and the transparency obligations that accompany them.
      - The ICO now writes and enforces the UK AI decisions rulebook as the lead regulator, with reach extending to non-UK controllers and processors handling UK persons' data. The ICO's guidance on "Explaining decisions made with AI" is the practical implementation reference.
      - The UK AI Safety Institute (AISI) provides technical evaluation of frontier AI transparency properties, informing the ICO's regulatory interpretations.
    - **FCA Consumer Duty and Model Risk Management**:
      - Updated FCA SS1/23 Supervisory Statement on Model Risk Management (published 2023, effective 2026 for all firms) requires firms to provide "meaningful information" about AI-driven decisions affecting consumer outcomes.
      - Consumer Duty (FCA PS22/9) requires firms to deliver good outcomes for retail customers, which the FCA interprets as requiring that AI decision logic be explicable and auditable.
      - SM&CR accountability: a named Senior Manager must take responsibility for model risk, including AI transparency. Board-level non-executive directors are expected to challenge management on AI explainability.
    - **NIST AI Risk Management Framework**:
      - NIST AI RMF 1.0 (2023) and sector-specific profiles (NIST AI 100-1 for general AI; upcoming sector profiles for financial services, healthcare, critical infrastructure) embed transparency as a core function across the Map, Measure, and Manage domains.
      - Voluntary in the US context but widely adopted in US federal government AI procurement, defence, and finance sectors, with growing uptake in UK public sector AI procurement processes.
      - The NIST RMF's GOVERN function addresses organisational transparency obligations including documentation, disclosure, and accountability structures.
    - **ISO/IEC AI Standards**:
      - ISO/IEC 42001 (AI Management System standard, 2023): specifies governance requirements including transparency obligations for AI system operators.
      - ISO/IEC 22989 (AI concepts and terminology), ISO/IEC 23053 (framework for AI systems using ML), and ISO/IEC TR 24368 (AI overview of ethical and societal concerns) collectively provide definitional and conceptual grounding for decision transparency in standardisation contexts.
  - ## Use Cases
    - Decision transparency is applied across every domain where [[Automated Decision-Making]] affects human welfare, with regulatory requirements varying by risk tier and jurisdiction.
    - **Credit and lending decisions**:
      - Regulatory requirements under GDPR Article 22 and the Consumer Credit Act mean that credit refusals in the UK must be accompanied by meaningful information about the decision logic.
      - Gradient-boosted tree models with [[SHAP]] explanations have become the dominant architecture in UK retail banking credit scoring, combining predictive accuracy with post-hoc transparency that satisfies FCA and GDPR requirements.
      - The explanation format must be audience-appropriate: a domain expert in a credit risk team requires technical [[Feature Importance]] rankings, while an affected consumer requires a plain-language summary of the factors that led to a refusal.
    - **Healthcare and clinical decision support**:
      - NHS AI procurement guidance requires that clinical decision support systems be explainable to clinicians, patients, and the multidisciplinary teams responsible for care decisions.
      - NICE's AI evidence standards framework emphasises transparency as a prerequisite for adoption, requiring model cards and performance documentation across relevant patient subgroups.
      - Clinical AI transparency failures — such as systems performing well on training data but poorly on underrepresented ethnic minorities — are only discoverable through systematic transparency auditing of subgroup performance.
    - **Criminal justice, bail, and immigration**:
      - Algorithmic risk scores used in bail decisions, parole determination, immigration assessment, and recidivism prediction face the most stringent transparency requirements in any jurisdiction.
      - In the UK, Home Office immigration AI tools and DWP Universal Credit fraud models have both faced legal challenges and Parliamentary scrutiny on transparency grounds.
      - Lack of transparency in these systems directly undermines the rule of law: affected individuals cannot challenge decisions they do not understand; courts cannot meaningfully review automated determinations whose reasoning is opaque.
    - **Employment screening**:
      - Automated CV screening, psychometric assessment tools, and performance management systems used by employers must provide explanations to candidates under GDPR Article 22 and EU AI Act Annex III.
      - Significant enforcement actions by data protection authorities against opaque employment AI are anticipated in 2026–2027 as the EU AI Act enforcement regime matures.
    - **Public sector benefit determination**:
      - Universal Credit assessments, social care resource allocation decisions, and benefits fraud detection at the UK DWP are subject to transparency obligations under the Data (Use and Access) Act 2025 and the UK GDPR.
      - Parliamentary scrutiny of DWP algorithmic tools led to commitments to publish algorithmic impact assessments, though implementation has been uneven.
    - **Autonomous and safety-critical systems**:
      - Autonomous vehicle control systems, aircraft autopilot decision systems, and medical device AI must provide transparency to safety engineers and regulatory bodies for certification purposes.
      - The EU's AI Act classifies these as high-risk (critical infrastructure, transport, medical devices under Annex III), mandating technical documentation, conformity assessment, and post-market monitoring with full traceability of decisions.
  - ## Academic Context
    - Decision transparency as a formal research programme emerged from the intersection of machine learning interpretability and AI ethics in the mid-2010s, accelerated by the GDPR's enactment in 2018 and the subsequent EU AI Act legislative process.
    - Lipton (2016) provided the first rigorous conceptual analysis of model interpretability, distinguishing simulatability (can a human mentally simulate the model?), decomposability (can each component be explained independently?), and algorithmic transparency (can the training algorithm be understood?). This taxonomy remains the standard framework for characterising what decision transparency means technically.
    - Doshi-Velez and Kim (2017) proposed a rigorous framework for evaluating explanations, distinguishing application-grounded evaluation (domain expert assessment on real tasks), human-grounded evaluation (lay user assessment on simplified tasks), and functionally-grounded evaluation (proxy metrics without human subjects). This work highlighted that most XAI research has relied on functionally-grounded proxies (e.g., fidelity to model predictions) rather than evidence of actual usefulness to affected humans.
    - Wachter, Mittelstadt, and Floridi (2017) made the key legal argument — still contested — that a right to explanation under GDPR encompasses a right to [[Counterfactual Explanation]]s sufficient to enable contestation of adverse decisions, even where the full model logic cannot be disclosed. This framing has been highly influential in shaping both regulatory and research agendas around decision transparency.
    - Mittelstadt et al. (2019) extended this to identify the conditions under which explanations are meaningful versus misleading, distinguishing faithful explanations (accurately reflecting model reasoning) from plausible but unfaithful explanations (narratively coherent but not causally connected to the model's actual computation).
    - Rudin (2019) made a strong and influential case for inherently interpretable models in high-stakes decisions, arguing that post-hoc explanations of black-box models are inherently unreliable for life-affecting decisions and that the research community should invest in developing intrinsically interpretable models with competitive accuracy rather than approximating complex models post-hoc.
    - Key academic institutions advancing decision transparency research include: the Alan Turing Institute (cross-institutional, UK) on algorithmic accountability and AI governance; the Oxford Internet Institute and Oxford Ethics in AI Institute on legal and philosophical foundations; the University of Edinburgh CHAI (Centre for Technomoral Futures) on normative frameworks for contestability; UCL's AI Centre on fair and interpretable ML; CMU's Software Engineering Institute on assurance cases for AI transparency; and Stanford's Human-Centred AI Institute on human factors in explanation effectiveness.
    - The IEEE P2976 (XAI) standard, under development, is working towards technical specifications for explainability requirements across different deployment contexts, with a goal of providing enforceable technical benchmarks that can be referenced in regulatory compliance frameworks.
  - ## Current Landscape (2026)
    - The year 2026 represents a watershed moment for decision transparency, with regulatory enforcement transforming it from aspirational principle to contractual and legal obligation.
    - **Regulatory enforcement wave**: The EU AI Act's Annex III provisions entered force in August 2026 with penalties up to €35 million or 7% of global annual turnover for non-compliant high-risk AI systems. This is forcing large-scale enterprise AI deployments to implement explainability infrastructure across financial services, healthcare, and public administration simultaneously.
    - **Consumer expectations vs. deployment reality**: Seekr's 2026 enterprise survey found that 85% of consumers expect explanations when AI affects them, yet 60% of production models remain effectively unexplainable black boxes — the XAI reckoning gap that the regulatory framework is designed to close.
    - **Platform XAI tooling**: Major cloud providers have embedded explainability as a standard platform component:
      - AWS SageMaker Clarify: SHAP-based feature attribution, bias detection, and model explainability reports integrated into the SageMaker ML pipeline.
      - Google Vertex Explainable AI: SHAP, integrated gradients, and XRAI (eXplanation with Ranked Area Integrals) attribution methods for structured and unstructured data.
      - Microsoft Azure Responsible AI Dashboard: combines [[Feature Importance]], counterfactual analysis, causal analysis, and error analysis in a unified interface for model auditing.
    - **Five mandatory XAI capabilities**: Industry analysis identifies five capabilities that enterprise-grade XAI must provide: (1) training data attribution (linking predictions back to influential training examples); (2) influence scoring (identifying which training instances most affected a given prediction); (3) complete [[Audit Trail]] (full decision logs with model versioning); (4) [[Contestability]] mechanisms (actionable recourse information for affected individuals); (5) model certification (third-party verified compliance with transparency standards).
    - **UK-specific regulatory developments**: The ICO's new AI decisions rulebook, published under the Data (Use and Access) Act 2025 mandate, and the FCA's updated model risk management guidance (SS1/23) both create concrete enforcement levers for transparency obligations, with the FCA explicitly requiring board-level accountability for AI decision transparency in consumer-facing financial products.
  - ## UK Context
    - The UK has adopted a principles-based, sector-led approach to AI transparency governance, contrasting with the EU's prescriptive risk-classification framework.
    - **Regulatory architecture**:
      - The ICO is the primary regulator for algorithmic decision-making transparency, empowered by the Data (Use and Access) Act 2025 and the UK GDPR.
      - SI 2026/425 (in force 12 May 2026) creates new conditions for permissible automated decision-making and expressly requires meaningful information about the logic, significance, and envisaged consequences of decisions.
      - The FCA's updated Consumer Duty and model risk management principles obligate financial firms to demonstrate that AI-driven decisions are transparent, auditable, and aligned with consumer outcomes, with board-level accountability under the Senior Managers and Certification Regime (SM&CR).
      - The ICO's "Explaining decisions made with AI" guidance (2020, updated 2025) remains the practical reference for implementing transparency obligations under UK law.
    - **Academic research landscape**:
      - The Alan Turing Institute (London, cross-institutional): published extensive research on decision transparency and algorithmic accountability, including the "Understanding artificial intelligence ethics and safety" guide for public sector practitioners.
      - Oxford Internet Institute: Wachter, Mittelstadt, and colleagues on GDPR explainability obligations and counterfactual recourse.
      - University of Edinburgh CHAI (Centre for Technomoral Futures): normative frameworks for AI contestability, value alignment, and ethical AI governance.
      - King's College London: Explainable Machine Learning module teaching SHAP, LIME, and decision tree-based interpretation to MSc and MEng students.
      - UCL AI Centre: fairness, accountability, and transparency in deployed machine learning systems.
    - **Northern English industry context**:
      - Leeds financial services cluster: Asda Money, Yorkshire Bank (part of Virgin Money), Leeds Building Society, and Lloyds Banking Group's Leeds operations are all subject to FCA model risk management requirements and actively implementing SHAP-based credit decision transparency.
      - Sheffield cooperative and mutual sector: Co-operative Group's financial services arm and Barnsley Building Society operate credit scoring models subject to Consumer Duty transparency obligations.
      - Newcastle: Virgin Money head office and Sage Group financial software (Newcastle upon Tyne) are both advancing algorithmic transparency in consumer-facing AI applications.
      - Manchester: Manchester University NHS Foundation Trust's extensive NHS digital health AI deployment — including sepsis early warning, frailty scoring, and diagnostic support — creates a live operational challenge for [[Decision Transparency]] in clinical AI at population scale. The Greater Manchester Integrated Care System is a test case for region-wide algorithmic accountability in NHS settings.
  - ## Future Directions (2026–2030)
    - The frontier of decision transparency research and practice from 2026 onward is defined by several converging pressures, each requiring new technical methods, institutional infrastructure, and regulatory frameworks.
    - **LLM transparency challenge**: The proliferation of large language model (LLM) deployments in high-stakes domains creates severe transparency challenges that existing XAI methods do not adequately address. Attention-based explanations are unreliable (Jain and Wallace 2019). Chain-of-thought reasoning may be post-hoc rationalisation rather than faithful causal explanation of the model's token prediction process. The sheer scale (70B–400B parameters) makes formal verification intractable. New research directions include:
      - Mechanistic interpretability: identifying specific circuits, features, and algorithms within transformer networks (Anthropic and DeepMind research groups, 2023–2026).
      - Activation patching: systematically perturbing internal representations to identify causal structures.
      - Sparse autoencoder decompositions of model residual stream representations, producing interpretable feature dictionaries.
    - **Certified explanation faithfulness**: The faithfulness problem — distinguishing plausible-but-misleading explanations from accurate reflections of model reasoning — is attracting formal treatment. Research directions include: certified local explanations (provably accurate within a specified neighbourhood), verification of SHAP consistency against model behaviour, and mechanistic verification of explanation methods against model internals.
    - **Contestability infrastructure**: [[Contestability]] is emerging as a distinct engineering discipline, not merely a property to be certified but a system to be built. The full contestability stack includes: real-time explanation generation at inference time; actionable [[Counterfactual Explanation]] systems specifying achievable recourse; automated escalation to human review; appeals management and case tracking; audit logging for regulatory inspection; and outcome monitoring to detect systematic errors in challenged decisions.
    - **Agentic and multimodal AI transparency**: When an AI agent reasons across multiple modalities and tools over extended interactions — as in agentic LLM deployments, robotic systems, and multi-modal clinical AI — tracing the basis of a final action recommendation becomes far more complex than explaining a single-input [[Classification]]. New frameworks for agentic transparency are needed, distinguishing the transparency of individual inference steps from the transparency of the overall reasoning trajectory.
    - **Regulatory convergence**: The EU AI Act, UK Data (Use and Access) Act, US Executive Order on AI (October 2023), and emerging Asian frameworks (China's generative AI regulations, India's proposed AI governance framework) will likely converge towards international technical standards for explanation formats, coverage requirements, and audit protocols by 2028. ISO/IEC JTC 1/SC 42 is the primary standardisation venue for this convergence.
    - **Privacy-transparency tension**: [[Federated Learning]], [[Differential Privacy]], and secure multi-party computation create tension between data transparency (disclosing training data to enable auditing) and data privacy (protecting individual training records). New techniques for privacy-preserving explanation generation — providing accurate explanations without exposing training data — are an active research frontier. This tension is particularly acute in NHS [[Medical Diagnosis AI]] deployments where patient data cannot be centralised, yet transparency obligations under GDPR and the EU AI Act require model behaviour to be auditable by regulators.
    - **Human-AI teaming transparency**: As AI systems move from batch decision-making to real-time human-AI collaboration — in intensive care monitoring, autonomous vehicle co-driving, and [[Robotic Systems]] operation — the transparency requirements shift from post-hoc explanation to real-time communicative transparency: the system must communicate its current state, confidence, and reasoning to the human partner continuously during operation, not just when a specific decision is made. This is a frontier problem connecting decision transparency to [[Human-Computer Interaction]], [[Cognitive Science]], and [[Autonomous Systems]] design.
  - ## Measurement and Benchmarking
    - Measuring decision transparency is challenging because transparency is not a single quantifiable property but a multidimensional one dependent on audience, task, and evaluation paradigm. The research community has proposed multiple evaluation frameworks building on the foundations of [[Model Evaluation]] and [[AI Governance]]:
    - **Functionally-grounded evaluation**: Using proxy metrics without human subjects — fidelity of the explanation to the model's predictions, stability across similar instances, sparsity of the explanation. Computationally accessible but may not predict actual usefulness to humans. Applied in the context of [[Supervised Learning]] explanation method benchmarking.
    - **Human-grounded evaluation**: Lay users assess the quality of explanations on simplified or abstract tasks — typically forward simulation (predict model output given explanation) or counterfactual simulation (predict how output changes if input changes). More ecologically valid but expensive; results vary by user population and task framing. Connected to research on [[Human-Computer Interaction]] and cognitive load in AI-assisted decision-making.
    - **Application-grounded evaluation**: Domain experts assess explanation quality on the actual deployment task — e.g., clinicians using explanations to make treatment decisions, fraud analysts using [[SHAP]] attributions to investigate flagged transactions. Most ecologically valid but requires access to real deployment environments and subject matter experts.
    - **[[Algorithmic Transparency Index]]**: A comparative organisational benchmarking instrument that scores organisations on their transparency disclosures — documentation quality, audit accessibility, [[Stakeholder Engagement in AI]] processes, governance mechanisms, and complaint handling. Used by civil society organisations and policymakers to compare AI transparency across sectors and jurisdictions.
    - **User study metrics**: Accuracy of user prediction of model behaviour (forward simulation accuracy), correctness of user assessment of model reasoning (explanation fidelity perception), user trust calibration (whether trust in the model is appropriately calibrated to model accuracy), and user decision quality (whether explanations improve decision-making in [[Human-AI Collaboration]] settings).
    - **Faithfulness metrics**: For post-hoc explanation methods, faithfulness can be measured by sufficiency (if the explanation features are sufficient, model output should not change when other features are masked) and comprehensiveness (if the explanation features are removed, model output should change significantly). Violations of either property indicate low-faithfulness explanations. Closely related to [[Model Evaluation]] methodology and [[Algorithmic Bias]] detection.
    - **Robustness and stability**: A good explanation method should produce consistent explanations for semantically equivalent inputs — small perturbations to the input that do not change the prediction should not dramatically change the explanation. Robustness failures indicate that the explanation method is capturing sampling noise rather than stable model features.
    - **Coverage and selectivity**: [[Feature Importance]] explanations should cover all relevant features contributing to a prediction (coverage) while assigning low attribution to irrelevant features (selectivity). The precision-recall analogy from [[Classification]] evaluation applies: coverage = recall (all important features identified), selectivity = precision (no spurious features included).
    - **Contrastive explanations**: Why did the model produce prediction X rather than prediction Y? Contrastive explanations answer counterfactual questions directly and are more useful to affected individuals and [[Regulatory Compliance]] processes than absolute attributions. Connected to the theory of [[Counterfactual Explanation]] and causal inference in [[Machine Learning]]. The key paper here is Mothilal et al. (2020) on diverse counterfactual explanations (DiCE).
  - ## Research and Literature
    - 1. Lipton, Z.C. (2016). The mythos of model interpretability. ICML Workshop on Human Interpretability in Machine Learning. arXiv:1606.03490. Foundational taxonomy distinguishing simulatability, decomposability, and algorithmic transparency as distinct interpretability properties.
    - 2. Doshi-Velez, F. and Kim, B. (2017). Towards a rigorous science of interpretable machine learning. arXiv:1702.08608. Proposed the application-grounded / human-grounded / functionally-grounded evaluation framework for assessing explanations.
    - 3. Ribeiro, M.T., Singh, S., and Guestrin, C. (2016). "Why Should I Trust You?": Explaining the Predictions of Any Classifier. Proceedings of KDD 2016. doi:10.1145/2939672.2939778. Introduced LIME, the first widely-adopted model-agnostic local explanation method.
    - 4. Lundberg, S.M. and Lee, S-I. (2017). A unified approach to interpreting model predictions. Advances in Neural Information Processing Systems 30 (NIPS 2017). Introduced SHAP values grounded in cooperative game theory; the most widely adopted feature attribution method in production deployments.
    - 5. Wachter, S., Mittelstadt, B., and Floridi, L. (2017). Transparent, explainable, and accountable AI for robotics. Science Robotics 2(6): eaan6080. doi:10.1126/scirobotics.aan6080. Early interdisciplinary framing of transparency, explainability, and accountability as distinct but related requirements.
    - 6. Wachter, S., Mittelstadt, B., and Russell, C. (2017). Counterfactual explanations without opening the black box: Automated decisions and the GDPR. Harvard Journal of Law and Technology 31(2). Foundational paper proposing counterfactual explanations as the operationally appropriate transparency mechanism for GDPR compliance.
    - 7. Mittelstadt, B., Russell, C., and Wachter, S. (2019). Explaining explanations in AI. Proceedings of FAT* 2019. doi:10.1145/3287560.3287574. Formalised the conditions under which explanations are meaningful versus misleading; introduced the faithfulness criterion.
    - 8. Rudin, C. (2019). Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead. Nature Machine Intelligence 1: 206–215. doi:10.1038/s42256-019-0048-x. Most cited argument for inherently interpretable models; challenged the post-hoc explanation paradigm.
    - 9. Sundararajan, M., Taly, A., and Yan, Q. (2017). Axiomatic attribution for deep networks. Proceedings of ICML 2017. arXiv:1703.01365. Introduced Integrated Gradients; formal treatment of attribution axioms (completeness, implementation invariance) for neural networks.
    - 10. Arrieta, A.B., Díaz-Rodríguez, N., et al. (2020). Explainable Artificial Intelligence (XAI): Concepts, taxonomies, opportunities and challenges toward responsible AI. Information Fusion 58: 82–115. doi:10.1016/j.inffus.2019.12.012. Comprehensive survey and taxonomy of XAI methods, applications, and open challenges.
    - 11. Jain, S. and Wallace, B.C. (2019). Attention is not Explanation. Proceedings of NAACL 2019. arXiv:1902.10186. Demonstrated that attention weights in transformer models do not reliably indicate feature importance; challenged attention-based transparency approaches.
    - 12. Adadi, A. and Berrada, M. (2018). Peeking inside the black-box: A survey on Explainable Artificial Intelligence (XAI). IEEE Access 6: 52138–52160. doi:10.1109/ACCESS.2018.2870052. Survey categorising XAI by scope (local/global), model specificity, and output type.
    - 13. Guidotti, R., Monreale, A., et al. (2018). A survey of methods for explaining black box models. ACM Computing Surveys 51(5): 93. doi:10.1145/3236009. Comprehensive survey structuring XAI methods by the problem, data type, and explanation type.
    - 14. European Commission. (2021). Proposal for a Regulation on Artificial Intelligence (EU AI Act). COM(2021) 206 final. Brussels. The primary legislative text creating the EU's risk-based AI transparency framework.
    - 15. ICO. (2020, updated 2025). Explaining decisions made with AI. Information Commissioner's Office, UK. ico.org.uk. Practical guidance on implementing algorithmic transparency obligations under UK GDPR and successor legislation.
    - 16. NIST. (2023). AI Risk Management Framework (AI RMF 1.0). National Institute of Standards and Technology. doi:10.6028/NIST.AI.100-1. Voluntary framework embedding transparency as a cross-cutting function across AI risk management practices.
    - 17. Floridi, L., Cowls, J., et al. (2018). An ethical framework for a good AI society: Opportunities, risks, principles, and recommendations. Minds and Machines 28: 689–707. doi:10.1007/s11023-018-9482-5. The AI4People ethical framework positioning transparency as one of five core principles for trustworthy AI.
    - 18. Selbst, A.D. and Barocas, S. (2018). The intuitive appeal of explainable machines. Fordham Law Review 87: 1085. Critical analysis of the limits of explainability as a legal and ethical solution; argued that transparency can create a false sense of accountability.
    - 19. Binns, R. (2018). Fairness in machine learning: Lessons from political philosophy. Proceedings of FAT* 2018. arXiv:1712.03586. Explored the connection between transparency and fairness through the lens of political philosophy.
    - 20. Edwards, L. and Veale, M. (2017). Slave to the algorithm? Why a right to an explanation is probably not the remedy you are looking for. Duke Law and Technology Review 16(1): 18–84. Sceptical analysis of the practical limits of a right to explanation under GDPR; argued for structural regulation over individual rights.
    - 21. Goodman, B. and Flaxman, S. (2017). European Union regulations on algorithmic decision-making and a "right to explanation." AI Magazine 38(3): 50–57. doi:10.1609/aimag.v38i3.2741. Early analysis of GDPR Article 22 as creating a de facto right to explanation for automated decisions.
    - 22. Mitchell, S., Wu, S., Zaldivar, A., et al. (2019). Model cards for model reporting. Proceedings of FAccT 2019. doi:10.1145/3287560.3287596. Introduced the model card framework as the primary process-level transparency artefact; widely adopted since.
    - 23. Busuioc, M. (2021). Accountable artificial intelligence: Holding algorithms to account. Public Administration Review 81(5): 825–836. doi:10.1111/puar.13293. Analysis of accountability frameworks for AI in public administration; grounded decision transparency in accountability theory.
    - 24. Schwalbe, G. and Finzel, B. (2023). A comprehensive taxonomy for explainability in machine learning. ACM Computing Surveys. doi:10.1145/3607538. Systematic taxonomy of XAI dimensions including scope, model specificity, algorithm class, and evaluation paradigm.
    - 25. Apley, D.W. and Zhu, J. (2020). Visualizing the effects of predictor variables in black box supervised learning models. Journal of the Royal Statistical Society Series B 82(4): 1059–1086. doi:10.1111/rssb.12377. Introduced Accumulated Local Effects (ALE) plots as an unbiased alternative to Partial Dependence Plots for correlated features.
    - 26. Theodorou, A. and Dignum, V. (2020). Towards ethical and socio-legal governance in AI. Nature Machine Intelligence 2: 10–12. doi:10.1038/s42256-019-0136-y. Socio-legal governance perspective on AI transparency requirements.
    - 27. HM Government / DSIT. (2025). UK AI Safety Institute: Explainability and Transparency Evaluation Framework. Department for Science, Innovation and Technology, London. Practical framework for evaluating AI system transparency properties in UK public sector procurement and deployment contexts.

- ### Key Terminology
  - **Faithful explanation**: an explanation that accurately reflects the actual reasoning of the underlying model, as opposed to a plausible but potentially misleading rationalisation. Faithfulness is distinct from plausibility: a faithful explanation may be technically complex; a plausible but unfaithful explanation may be narratively satisfying but causally disconnected from the model's actual computation. Faithfulness is the property required for regulatory compliance; plausibility alone is insufficient.
  - **Post-hoc explanation**: an explanation generated after and separately from the model's prediction, using a separate explanation method (such as [[SHAP]] or [[LIME]]) to approximate model behaviour. Contrasted with intrinsic interpretability. Post-hoc explanations carry fidelity limitations: they approximate the model's decision surface without direct access to its internal reasoning. In regulated settings, the fidelity of post-hoc explanations must be verified and documented.
  - **Counterfactual explanation**: a statement of the form "if feature X had been Y instead of Z, the decision would have been positive" — providing an actionable basis for [[Contestability]] and recourse. Counterfactual explanations are required to be actionable (the specified change must be achievable by the affected individual), proximate (the change should be minimal), and sparse (few features should need to change). Under GDPR and EU AI Act frameworks, counterfactual recourse is the most direct operationalisation of the right to contest an automated decision.
  - **Right to explanation**: the legal entitlement under GDPR Articles 13–15 and 22 and EU AI Act provisions for individuals subject to significant automated decisions to receive meaningful information about the decision logic. The precise scope of this right has been contested since Wachter et al. (2017): whether it requires explanation of the specific decision (ex post) or only general information about system logic (ex ante) varies by jurisdiction and regulatory interpretation. UK GDPR and the Data (Use and Access) Act 2025 create an ex post explanation right; the EU AI Act creates both ex ante transparency documentation requirements and ex post individual notification rights.
  - **Contestability**: the ability of an affected individual to challenge, query, and seek correction of an automated decision that affects their legal status, interests, or welfare. Operationally dependent on decision transparency — without access to decision logic, meaningful contestation is impossible. The EU AI Act and UK GDPR both establish contestability rights for individuals subject to high-impact automated decisions. Engineering contestability requires not just explanation generation but complete contestability infrastructure: notification, explanation, recourse specification, appeals management, human review escalation, and outcome monitoring.
  - **Model card**: a structured documentation template covering model purpose, intended use cases, performance characteristics across demographic subgroups, limitations, evaluation methodology, and ethical considerations. The primary artefact operationalising process-level decision transparency. Originally proposed by Mitchell et al. (2019) at Google; now adopted as a quasi-standard in AI transparency documentation. Required as part of the technical documentation under EU AI Act Annex IV for high-risk systems.
  - **Audit trail**: a chronological record of decision inputs, model versions, prediction outputs, confidence scores, human review actions, and system configuration changes for each automated decision. Supports post-hoc accountability, regulatory inspection, and dispute resolution. Legally required under GDPR Article 30 (records of processing activities), EU AI Act Annex IV (logging requirements), and UK DUA Act 2025 for automated decision-making systems. Must be retained for a defined period and made available to supervisory authorities on request.
  - **SHAP value (SHapley Additive exPlanation)**: a feature attribution quantity derived from cooperative game theory that assigns each input feature j a contribution phi_j to the deviation of a prediction from the expected value over the training distribution. SHAP values satisfy four desirable axioms: efficiency (contributions sum to the total prediction deviation), dummy (features that do not contribute receive zero attribution), symmetry (features with equal contributions receive equal attribution), and linearity (consistent combination of multiple models). The unique allocation satisfying all four axioms, making SHAP values a theoretically grounded and auditable form of [[Feature Importance]].
  - **Simulatability**: the property of a model by which a human can mentally trace and verify the full prediction for a given input in a reasonable amount of time. Shallow [[Decision Tree]] instances satisfy simulatability; deep trees, ensembles, and neural networks do not. Lipton (2016) identifies simulatability as the strongest interpretability property, and Rudin (2019) argues it is the appropriate standard for life-affecting automated decisions.
  - **Decomposability**: the property of a model by which each component (feature, node, rule) can be described and assessed independently. Linear models and shallow [[Decision Tree]] instances are decomposable: each coefficient or split condition can be understood in isolation. Non-decomposable models (deep networks, ensembles with complex interactions) require holistic explanation approaches.
  - **Recourse**: the set of actions available to an individual to change an automated decision outcome, derived from [[Counterfactual Explanation]]. Actionable recourse specifies changes that are (a) within the individual's control, (b) achievable within a reasonable time horizon, and (c) sufficient to achieve the desired outcome. A complete decision transparency system generates recourse recommendations alongside adverse decisions in regulated high-risk contexts.

- ### Provenance
  - sources:: https://arxiv.org/abs/2505.20311, https://cogentinfo.com/resources/the-xai-reckoning-turning-explainability-into-a-compliance-requirement-by-2026, https://www.formiti.com/data-privacy-news/the-fca-s-ai-reckoning-how-uk-financial-services-can-navigate-the-2026-accountability-crisis, https://themodernregulator.com/icos-new-ai-rulebook-for-automated-decisions/, https://www.sciencedirect.com/science/article/pii/S2212473X25001191, https://arxiv.org/pdf/2304.11218, https://www.techpolicy.press/understanding-right-to-explanation-and-automated-decisionmaking-in-europes-gdpr-and-ai-act/, https://www.glacis.io/guide-ai-explainability, https://www.frontiersin.org/journals/human-dynamics/articles/10.3389/fhumd.2024.1421273/full
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm