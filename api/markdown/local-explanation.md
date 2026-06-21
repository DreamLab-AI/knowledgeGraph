- ### Definition
  - Interpretability techniques that explain individual model predictions for specific instances, providing insight into why a particular input produced a given output without necessarily characterising the model's global behaviour. Methods such as LIME and SHAP generate feature-attribution scores scoped to the neighbourhood of a single query point.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:LocalExplanation
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - **partOf** [[Explainable AI]] — local explanation techniques are a core component of the XAI toolbox
  - **contrastsWith** [[Global Explanation]] — local explanations scope to one instance; global explanations characterise the full model
  - **uses** [[Feature Importance]] — local methods compute per-instance feature attributions as their primary output
  - **enables** [[Accountability]] — instance-level explanations provide the evidentiary basis for challenging individual decisions
  - **enables** [[Fairness]] — local explanations reveal whether individual decisions are driven by protected attributes

- ### Content
  - Interpretability techniques that explain individual model predictions for specific instances, providing insight into why a particular input produced a given output without necessarily characterising the model's global behaviour.

  ## Related Terms

  - **Broader**: [[Model Interpretability]], [[Explainable AI]]
  - **Narrower**: [[LIME]], [[SHAP]], [[Counterfactual Explanation]]
  - **Related**: [[Feature Attribution]], [[Instance-Level Analysis]]
  - **Contrasts**: [[Global Explanation]]

  ## Formal Specification

  ### Core Concept

  Given a trained model `f: X → Y` and an instance `x ∈ X`, a local explanation `E(f, x)` characterises:

  ```
  E(f, x) → {feature contributions, decision boundary, local model}
  ```

  **Scope**: Neighbourhood `N(x)` around instance `x`
  **Objective**: Understand `f` behaviour in `N(x)` without global characterisation

  ### Mathematical Framework

  **Local Fidelity**:
  ```
  argmin L(f, g, π_x) + Ω(g)
  g∈G
  ```

  Where:
  - `g` is the local interpretable model
  - `π_x` is proximity measure defining locality
  - `Ω(g)` is complexity penalty
  - `L` is loss function measuring fidelity

  ## Key Methods

  ### LIME (Local Interpretable Model-agnostic Explanations)

  **Algorithm** (Ribeiro et al., 2016):

  1. **Perturb instance**: Generate `N` samples around `x`
   ```
   Z = {z₁, z₂, ..., zₙ} where zᵢ ~ Perturb(x)
   ```

  2. **Get predictions**: Evaluate black-box model
   ```
   F = {f(z₁), f(z₂), ..., f(zₙ)}
   ```

  3. **Weight by proximity**: Closer samples matter more
   ```
   w_i = π_x(z_i) = exp(-D(x, z_i)² / σ²)
   ```

  4. **Fit interpretable model**: Weighted linear regression
   ```
   g(z) = argmin Σ w_i(f(z_i) - g(z_i))² + Ω(g)
           g   i
   ```

  5. **Extract explanation**: Coefficients as feature importance

  **Properties**:
  - Model-agnostic
  - Fast computation
  - Intuitive explanations

  **Limitations**:
  - Instability across similar instances
  - Perturbation sampling sensitivity
  - Locality radius selection

  ### SHAP (SHapley Additive exPlanations)

  **Local SHAP Values** (Lundberg & Lee, 2017):

  ```
  φᵢ(f, x) = Σ |S|!(|N|-|S|-1)! / |N|! [f(S∪{i}) - f(S)]
           S⊆N\{i}
  ```

  **Interpretation**: Feature `i`'s contribution to prediction for instance `x`

  **Decomposition Property**:
  ```
  f(x) = φ₀ + φ₁ + φ₂ + ... + φₙ
  ```

  **Advantages**:
  - Theoretically grounded (Shapley values)
  - Satisfies local accuracy, missingness, consistency
  - Additive decomposition

  **Variants**:
  - **Kernel SHAP**: Model-agnostic approximation
  - **Tree SHAP**: Exact for tree models (polynomial time)
  - **Deep SHAP**: DeepLIFT-based for neural networks

  ### Counterfactual Explanations

  **Definition**: Minimal change to input resulting in different prediction

  **Optimisation**:
  ```
  CF(x) = argmin d(x, x')
        x'∈X
        subject to: f(x') ≠ f(x)
                    x' is valid (domain constraints)
  ```

  **Distance Metrics**:
  - **L1 norm**: |x' - x|₁ (sparse changes)
  - **L2 norm**: |x' - x|₂ (smooth changes)
  - **Categorical distance**: Weighted feature changes

  **Examples**:
  - "Your loan was denied. If your income were £5,000 higher, it would be approved."
  - "Diagnosis: malignant. If tumour size were 2mm smaller, benign."

  **Benefits**:
  - Actionable insights
  - Causal reasoning support
  - User-friendly format

  **Challenges**:
  - Multiple valid counterfactuals
  - Feasibility of suggested changes
  - Stability of counterfactual predictions

  ### Integrated Gradients

  **Formula** (Sundararajan et al., 2017):

  ```
  IG_i(x) = (x_i - x'_i) × ∫₀¹ ∂f(x' + α(x - x'))/∂x_i dα
  ```

  **Components**:
  - **Baseline** `x'`: Reference point (e.g., zero vector, mean)
  - **Path integral**: Accumulate gradients along straight line
  - **Attribution**: Scaled integral as feature importance

  **Properties**:
  - **Sensitivity**: Zero attribution ⇔ no influence
  - **Implementation invariance**: Identical explanations for equivalent networks
  - **Completeness**: Sum of attributions equals output difference from baseline

  **Applications**:
  - Neural network explanations
  - Computer vision (pixel attribution)
  - NLP (token importance)

  ### Attention Visualisation

  **Mechanism** (for Transformers):

  **Attention Weights**:
  ```
  Attention(Q, K, V) = softmax(QK^T / √d_k)V
  ```

  **Interpretation**: Weight `α_ij` indicates importance of token `j` for token `i`

  **Visualisation**:
  - Heatmaps showing attention patterns
  - Token-to-token influence graphs
  - Layer-wise attention flow

  **Limitations**:
  - Attention ≠ explanation (Jain & Wallace, 2019)
  - Multiple attention heads complicate interpretation
  - Task-specific meaningfulness varies

  ## Application Domains

  ### Healthcare

  **Medical Diagnosis**:
  - Explain individual patient risk scores
  - Identify key diagnostic features
  - Support clinical decision-making

  **Example**:
  "Patient X has 78% pneumonia risk due to: age (65) +12%, fever (102°F) +25%, chest X-ray opacity +41%."

  **Requirements**:
  - IEEE P2802 compliance
  - Clinical validation
  - Physician-understandable format

  ### Finance

  **Credit Scoring**:
  - Adverse action explanations
  - GDPR Article 22 compliance
  - Customer transparency

  **Example**:
  "Loan denied. Primary factors: debt-to-income ratio (42%, threshold 36%), recent missed payment (-18%), short credit history (-8%)."

  **Regulatory Context**:
  - Fair lending laws
  - Right to explanation
  - Non-discriminatory justifications

  ### Criminal Justice

  **Risk Assessment**:
  - Pretrial detention decisions
  - Parole eligibility
  - Sentencing recommendations

  **Example**:
  "Recidivism risk: High (72%). Key factors: prior convictions (4) +35%, age at first offense (16) +22%, employment status (unemployed) +15%."

  **Ethical Considerations**:
  - Due process requirements
  - Avoiding discriminatory proxies
  - Judicial review capability

  ### Computer Vision

  **Image Classification**:
  - Pixel/region importance
  - Object detection justification
  - Diagnostic imaging analysis

  **Methods**:
  - Grad-CAM for localization
  - Integrated gradients for pixel attribution
  - LIME with superpixel segmentation

  **Example**:
  "Image classified as 'dog' based on: ear region (42%), snout (31%), fur texture (27%)."

  ## Implementation Approaches

  ### LIME Implementation

  **Tabular Data**:
  ```python
  from lime.lime_tabular import LimeTabularExplainer

  explainer = LimeTabularExplainer(
    training_data=X_train,
    mode='classification',
    feature_names=feature_names
  )

  explanation = explainer.explain_instance(
    data_row=instance,
    predict_fn=model.predict_proba,
    num_features=10
  )
  ```

  **Image Data**:
  ```python
  from lime import lime_image

  explainer = lime_image.LimeImageExplainer()

  explanation = explainer.explain_instance(
    image=img,
    classifier_fn=model.predict,
    top_labels=5,
    num_samples=1000
  )
  ```

  ### SHAP Implementation

  **Kernel SHAP** (model-agnostic):
  ```python
  import shap

  explainer = shap.KernelExplainer(
    model=model.predict,
    data=shap.sample(X_train, 100)  # background dataset
  )

  shap_values = explainer.shap_values(instance)
  ```

  **Tree SHAP** (for tree ensembles):
  ```python
  explainer = shap.TreeExplainer(model)
  shap_values = explainer.shap_values(X_test)
  ```

  **Deep SHAP** (for neural networks):
  ```python
  explainer = shap.DeepExplainer(
    model=model,
    data=X_train[:100]  # background dataset
  )

  shap_values = explainer.shap_values(instance)
  ```

  ### Counterfactual Generation

  **DiCE** (Diverse Counterfactual Explanations):
  ```python
  from dice_ml import Dice

  dice = Dice(model, data_interface)

  counterfactuals = dice.generate_counterfactuals(
    query_instance=instance,
    total_CFs=5,
    desired_class="opposite"
  )
  ```

  **Optimization-based**:
  ```python
  def generate_counterfactual(x, model, target_class):
    x_cf = x.clone().requires_grad_(True)
    optimizer = torch.optim.Adam([x_cf], lr=0.01)

    for _ in range(1000):
        loss = (
            cross_entropy(model(x_cf), target_class) +
            lambda_distance * torch.norm(x_cf - x, p=1)
        )
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

    return x_cf.detach()
  ```

  ## Evaluation Metrics

  ### Fidelity Metrics

  **Local Accuracy**:
  ```
  LA(x) = 1{f(x) == g(x)}
  ```
  Explanation model agrees with black-box on explained instance.

  **Local Fidelity**:
  ```
  LF(x) = R²(f(N(x)), g(N(x)))
  ```
  Explanation model approximates black-box in neighbourhood.

  ### Stability Metrics

  **Lipschitz Continuity**:
  ```
  |E(x₁) - E(x₂)| ≤ L|x₁ - x₂|
  ```
  Small input changes yield small explanation changes.

  **Consistency**:
  ```
  Consistency = 1 - (1/n)Σ |E(xᵢ) - E(xⱼ)|
                        i,j: |xᵢ-xⱼ|<ε
  ```
  Similar instances receive similar explanations.

  ### User-Centric Metrics

  **Comprehensibility** (user study):
  - Time to understand explanation
  - Accuracy of interpretation
  - Cognitive load assessment

  **Actionability**:
  - Percentage of counterfactuals deemed feasible
  - User ability to act on recommendations
  - Satisfaction with explanation utility

  ## Challenges & Limitations

  ### Methodological Challenges

  **Locality Definition**:
  - How to define neighbourhood `N(x)`?
  - Perturbation distribution choice
  - Kernel width selection

  **Instability**:
  - LIME sensitive to random sampling
  - Explanations vary across runs
  - Solution: Multiple runs, aggregation

  **Computational Cost**:
  - SHAP exact calculation exponential
  - Real-time constraints in production
  - Approximations sacrifice accuracy

  ### Interpretation Challenges

  **Multiple Valid Explanations**:
  - Rashomon effect: many models fit data
  - No ground truth explanation
  - Context-dependent validity

  **Feature Dependence**:
  - Correlated features complicate attribution
  - Marginalisation vs. conditioning
  - Shapley assumes feature independence

  **Audience Appropriateness**:
  - Technical vs. lay users
  - Domain-specific terminology
  - Granularity preferences

  ## Research Directions

  ### Emerging Areas

  **Causal Local Explanations**:
  - Interventional reasoning
  - Counterfactual causal graphs
  - Beyond correlational attribution

  **Robust Local Explanations**:
  - Adversarial robustness
  - Certified stability
  - Manipulation resistance

  **Interactive Local Explanations**:
  - User-guided refinement
  - Dialogue-based exploration
  - Personalised explanation generation

  **Multi-modal Local Explanations**:
  - Cross-modal consistency
  - Vision-language alignment
  - Unified frameworks

  ### Industry Innovation

  **Microsoft InterpretML**:
  - Individual conditional expectation (ICE) plots
  - Local feature importance
  - Interactive visualisation

  **Google Cloud Explainable AI**:
  - Integrated local explanations
  - What-If Tool for counterfactuals
  - TensorFlow Model Analysis integration

  **IBM AI Explainability 360**:
  - Comprehensive local explanation suite
  - Prototypes and criticisms
  - Contrastive explanations

  ## Best Practices

  ### Method Selection

  **Decision Criteria**:
  1. **Model type**: Neural → gradients/Deep SHAP; Trees → Tree SHAP; Any → Kernel SHAP/LIME
  2. **Data modality**: Images → CAM/saliency; Text → attention; Tabular → SHAP/LIME
  3. **Real-time requirement**: Strict → pre-computed; Flexible → on-demand
  4. **Explanation format**: Additive → SHAP; Sparse → L1 counterfactuals; Visual → heatmaps

  ### Implementation Guidelines

  **Pre-deployment**:
  - Validate explanation fidelity on test set
  - Stability analysis across similar instances
  - User testing for comprehensibility
  - Computational performance benchmarking

  **Production**:
  - Cache common instance explanations
  - Monitor explanation quality metrics
  - Track user engagement
  - A/B test explanation formats

  **Post-deployment**:
  - Collect user feedback
  - Refine based on utility
  - Update as model evolves
  - Periodic audits

  ### Documentation

  **Model Cards** should include:
  - Local explanation methods employed
  - Fidelity and stability metrics
  - Computational requirements
  - Example explanations

  **User-Facing**:
  - Plain language explanations
  - Visual aids (plots, heatmaps)
  - Contextual information
  - Limitations disclosure

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z