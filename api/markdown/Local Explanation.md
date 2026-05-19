schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#LocalExplanation
legacy_uri:: urn:visionclaw:concept:spatial-computing:local-explanation
public:: true

# Local Explanation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8cf00a254498d68ddf48450c31f016ec211c197803798ef73657bd15e105f8fa",
  "@type": "Page",
  "vc:slug": "local-explanation",
  "title": "Local Explanation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:counterfactual-explanation",
      "vc:label": "Counterfactual Explanation"
    },
    {
      "@id": "urn:visionflow:linked:feature-attribution",
      "vc:label": "Feature Attribution"
    },
    {
      "@id": "urn:visionflow:linked:instance-level-analysis",
      "vc:label": "Instance-Level Analysis"
    },
    {
      "@id": "urn:visionflow:linked:integrated-gradients",
      "vc:label": "Integrated Gradients"
    },
    {
      "@id": "urn:visionflow:linked:lime",
      "vc:label": "LIME"
    },
    {
      "@id": "urn:visionflow:linked:shap",
      "vc:label": "SHAP"
    },
    {
      "@id": "urn:visionflow:owl:class:explainable-ai",
      "vc:label": "Explainable AI"
    },
    {
      "@id": "urn:visionflow:owl:class:global-explanation",
      "vc:label": "Global Explanation"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:model-interpretability",
      "vc:label": "Model Interpretability"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-7016cb717394"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#LocalExplanation"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0301"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Local Explanation"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:local-explanation"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:local-explanation"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:8cf00a254498d68ddf48450c31f016ec211c197803798ef73657bd15e105f8fa@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:local-explanation",
  "@type": "Class",
  "label": "Local Explanation",
  "definition": "Interpretability techniques that explain individual model predictions for specific instances, providing insight into why a particular input produced a given output without necessarily characterising the model's global behaviour.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-interpretability",
      "label": "Model Interpretability"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:local-explanation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8cf00a254498d68ddf48450c31f016ec211c197803798ef73657bd15e105f8fa"
  },
  "vc:resolutions": [
    {
      "raw": "[[Counterfactual Explanation]]",
      "resolved": "urn:visionflow:linked:counterfactual-explanation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Feature Attribution]]",
      "resolved": "urn:visionflow:linked:feature-attribution",
      "kind": "StubLink"
    },
    {
      "raw": "[[Instance-Level Analysis]]",
      "resolved": "urn:visionflow:linked:instance-level-analysis",
      "kind": "StubLink"
    },
    {
      "raw": "[[Integrated Gradients]]",
      "resolved": "urn:visionflow:linked:integrated-gradients",
      "kind": "StubLink"
    },
    {
      "raw": "[[LIME]]",
      "resolved": "urn:visionflow:linked:lime",
      "kind": "StubLink"
    },
    {
      "raw": "[[SHAP]]",
      "resolved": "urn:visionflow:linked:shap",
      "kind": "StubLink"
    },
    {
      "raw": "[[Explainable AI]]",
      "resolved": "urn:visionflow:owl:class:explainable-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Global Explanation]]",
      "resolved": "urn:visionflow:owl:class:global-explanation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Interpretability]]",
      "resolved": "urn:visionflow:owl:class:model-interpretability",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:8cf00a254498d68ddf48450c31f016ec211c197803798ef73657bd15e105f8fa@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Interpretability techniques that explain individual model predictions for specific instances, providing insight into why a particular input produced a given output without necessarily characterising the model's global behaviour.

- ### Semantic Classification
  - owl-class:: spatial-computing:LocalExplanation
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - Interpretability techniques that explain individual model predictions for specific instances, providing insight into why a particular input produced a given output without necessarily characterising the model's global behaviour.

  - # other links
  - Setup Continue for VSCode
  - [How to use a local LLM as a free coding copilot in VS Code | by Simon Fraser | Dec, 2023 | Medium](https://medium.com/@smfraser/how-to-use-a-local-llm-as-a-free-coding-copilot-in-vs-code-6dffc053369d)
  - [LoneStriker/code-millenials-34b-6.0bpw-h6-exl2 · Hugging Face](https://huggingface.co/LoneStriker/code-millenials-34b-6.0bpw-h6-exl2)

  - # LLM and multimodal local

  - # other links
  - Setup Continue for VSCode
  - [How to use a local LLM as a free coding copilot in VS Code | by Simon Fraser | Dec, 2023 | Medium](https://medium.com/@smfraser/how-to-use-a-local-llm-as-a-free-coding-copilot-in-vs-code-6dffc053369d)
  - [LoneStriker/code-millenials-34b-6.0bpw-h6-exl2 · Hugging Face](https://huggingface.co/LoneStriker/code-millenials-34b-6.0bpw-h6-exl2)

  - # LLM and multimodal local

  - ### Tutorials and tips
  - [Omniverse Local Nucleus Server Setup Tutorial - YouTube](https://www.youtube.com/watch?v=xnUTCp_vN8I)

  - ### Tutorials and tips
  - [Omniverse Local Nucleus Server Setup Tutorial - YouTube](https://www.youtube.com/watch?v=xnUTCp_vN8I)

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

  #### References
  ### Academic Literature

  - Ribeiro, M. T., Singh, S., & Guestrin, C. (2016). "'Why should I trust you?': Explaining predictions of any classifier." *KDD*
  - Lundberg, S. M., & Lee, S. I. (2017). "A unified approach to interpreting model predictions." *NeurIPS*
  - Sundararajan, M., Taly, A., & Yan, Q. (2017). "Axiomatic attribution for deep networks." *ICML*
  - Wachter, S., Mittelstadt, B., & Russell, C. (2017). "Counterfactual explanations without opening the black box." *Harvard Journal of Law & Technology*, 31(2)

  ### Standards

  - IEEE. (2023). *IEEE P2976: Standard for eXplainable Artificial Intelligence*
  - IEEE. (2021). *IEEE 7001-2021: Standard for Transparency of Autonomous Systems*

  ### Tools & Frameworks

  - Lundberg, S. M. (2023). *SHAP: A game theoretic approach to explain the output of any machine learning model*
  - Ribeiro, M. T. (2023). *LIME: Local Interpretable Model-Agnostic Explanations*
  - Mothilal, R. K., Sharma, A., & Tan, C. (2020). *DiCE: Diverse Counterfactual Explanations*

  ## See Also

  - [[Global Explanation]]
  - [[SHAP]]
  - [[LIME]]
  - [[Counterfactual Explanation]]
  - [[Feature Attribution]]
  - [[Integrated Gradients]]
  - ### Original Content
		- ```
  # Local Explanation

		  **Term ID**: AI-0301
		  **Category**: XAI Methods
		  **Status**: Established
		  **Last Updated**: 2025-10-27

		  ## Definition

		  Interpretability techniques that explain individual model predictions for specific instances, providing insight into why a particular input produced a given output without necessarily characterising the model's global behaviour.

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
