Transparency and Explainability is a core AI trustworthiness dimension requiring that AI systems disclose sufficient information about their operation, decision logic, data provenance, and limitations to enable appropriate understanding and oversight by developers, deployers, and affected users. It encompasses traceability (audit trails, dataset documentation), explainability (global and local model explanations, counterfactuals), and communication transparency (disclosing AI involvement and system boundaries). Regulatory frameworks such as the EU AI Act Article 13 mandate transparency obligations for high-risk AI systems, driving demand for methods such as SHAP, LIME, and AI model cards.

### Semantic Classification

### Content

### Definition

Transparency and Explainability is a core AI trustworthiness dimension requiring that AI systems disclose sufficient information about their operation, decision logic, data provenance, and limitations to enable appropriate understanding and oversight. It encompasses three interlocking sub-dimensions: traceability (dataset provenance, audit trails, reproducibility), explainability (global model explanations, local per-prediction explanations, counterfactual "what-if" queries), and communication transparency (disclosure of AI involvement, honest statement of capabilities and limitations, and labelling of AI-generated content).

### Relationships

Transparency and Explainability is a constituent part of AI Trustworthiness and sits within the broader AI Governance and Ethics hierarchy. It requires both technical Explainable AI methods (SHAP, LIME, saliency maps) and procedural AI Audit regimes to be operationalised. It enables Accountability and Algorithmic Accountability by producing the evidence needed for post-hoc review. Decision Transparency, Post Hoc Explanation, and Feature Importance are closely related implementation mechanisms, while Intrinsic Interpretability represents a contrasting design philosophy (building transparency in from the start rather than adding it post-hoc).

### Content

The EU AI Act Article 13 obliges providers of high-risk AI systems to ensure that outputs are sufficiently transparent for deployers to interpret and use them appropriately, creating significant demand for structured explanation tooling. SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations) emerged as de-facto industry standards for post-hoc explanation, though empirical research has demonstrated that poorly designed explanations can create false confidence and degrade human decision quality by highlighting spurious correlations. The AI model card format — originally proposed by Google in 2019 — has become a widely adopted mechanism for communicating model capabilities, limitations, and intended use cases in a standardised way.

Effective transparency implementations typically layer three levels of explanation: executive summaries for non-technical stakeholders, feature importance visualisations for domain experts, and comprehensive technical documentation including hyperparameters, training data lineage, and known failure modes for auditors and regulators. Interactive interfaces enabling "what-if" exploration and counterfactual generation are increasingly considered best practice. Audit trails that record model version, input data, and prediction with timestamps provide the evidentiary foundation for regulatory compliance and post-incident investigation.

### Provenance

