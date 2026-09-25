An explainable-AI method that accounts for a model's decision by presenting the smallest realistic change to the input that would have produced a different outcome — for example, 'the loan would have been approved had annual income been £5,000 higher' — giving affected individuals actionable recourse without requiring disclosure of the model's internal structure.

### Semantic Classification

### Content

## Definition

A **counterfactual explanation** answers the question "what would have had to be different for the model to decide otherwise?". Rather than attributing importance to input features, as [[LIME]] and [[SHAP]] do, it exhibits a concrete alternative input — as close as possible to the original — that crosses the model's decision boundary. The canonical formulation by Wachter, Mittelstadt and Russell (2017) framed this as an optimisation problem: find the nearest point to the query instance, under a chosen distance metric, whose prediction matches the desired outcome. The result is inherently contrastive and human-oriented, matching how people naturally explain events ("it happened because X, and would not have happened without X").

Counterfactuals occupy a distinctive position in AI governance because they provide **recourse**: a rejected applicant learns not merely which features mattered, but what achievable change would alter the decision. Wachter et al. argued that counterfactuals can satisfy the spirit of the GDPR's provisions on automated decision-making without forcing model disclosure, which has made them prominent in regulatory discussion of credit scoring, hiring, and insurance. They thereby operationalise [[Decision Transparency]] for the affected individual rather than for the model auditor.

Generating good counterfactuals is harder than the definition suggests. Useful counterfactuals must be **plausible** (lying on the data manifold, not adversarial noise), **actionable** (changing income is possible; changing age or ethnicity is not), **sparse** (altering few features), and ideally **diverse** (offering several distinct routes to the desired outcome, as in the DiCE method). Causal validity is a further concern: naive counterfactuals treat features as independently mutable, whereas real interventions propagate through causal relationships — connecting the field to formal [[Counterfactual Reasoning]] in the Pearl tradition.

## Current Landscape

- **Methods**: Wachter-style gradient optimisation; DiCE (diverse counterfactuals); FACE (feasible paths through the data manifold); CEM (pertinent negatives); prototype-guided and generative-model-based approaches for plausibility. DiCE-Extended (arXiv:2504.19027, 2025) adds a Dice-Sørensen robustness metric and multi-objective weighting to stabilise counterfactuals under input perturbation, benchmarked on COMPAS, Lending Club, German Credit, and Adult Income.
- **Tooling**: open-source libraries including Microsoft's DiCE, Alibi (Seldon), CARLA (benchmarking suite), and IBM's AIX360 ship counterfactual generators alongside attribution methods
- **Regulatory relevance**: the EU AI Act's Article 86 grants affected persons a right to "clear and meaningful explanations" of decisions based on high-risk AI output (applying from 2 August 2026), complementing GDPR Articles 15 and 22; counterfactual statements are among the explanation types recommended in the UK ICO/Turing Institute "Explaining decisions made with AI" guidance, and legal scholarship (e.g. SAFE Frankfurt working papers, 2025) treats counterfactuals as a leading candidate for satisfying these duties in credit scoring
- **Robustness of recourse**: a FAccT 2025 study showed recourse can be invalidated simply by the passage of time as distributions drift, extending earlier findings that minor model updates break promised counterfactuals; Verma et al.'s ACM Computing Surveys review (October 2024) consolidates the field's evaluation criteria — validity, proximity, sparsity, actionability, and causal consistency
- **Open problems**: gaming and strategic behaviour, causal feasibility, computational cost of robust generation, and fair distribution of recourse cost across demographic groups

  **Sources**:

- https://arxiv.org/abs/2504.19027
- https://dl.acm.org/doi/10.1145/3677119
- https://facctconference.org/static/docs/facct2025-206archivalpdfs/facct2025-final48-acmpaginated.pdf
- https://safe-frankfurt.de/fileadmin/user_upload/editor_common/Policy_Center/LawLab_Fintech_AI/Langenbucher_Explainable_AI_as_a_Component_of_Building_Trust.pdf

