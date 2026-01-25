- ### OntologyBlock
  id:: post-hoc-explanation-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0299
	- preferred-term:: Post Hoc Explanation
	- source-domain:: mv
	- status:: draft
- definition:: Interpretability techniques applied after a machine learning model has been trained, providing explanations for model behaviour and predictions without modifying the model's architecture or requiring retraining.


## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :PostHocExplanation))

;; Annotations
(AnnotationAssertion rdfs:label :PostHocExplanation "Post Hoc Explanation"@en)
(AnnotationAssertion rdfs:comment :PostHocExplanation "Interpretability techniques applied after a machine learning model has been trained, providing explanations for model behaviour and predictions without modifying the model's architecture or requiring retraining."@en)

;; Semantic Relationships
(SubClassOf :PostHocExplanation
  (ObjectSomeValuesFrom :relatedTo :Shap))
(SubClassOf :PostHocExplanation
  (ObjectSomeValuesFrom :relatedTo :Lime))
(SubClassOf :PostHocExplanation
  (ObjectSomeValuesFrom :relatedTo :FeatureAttribution))
(SubClassOf :PostHocExplanation
  (ObjectSomeValuesFrom :relatedTo :CounterfactualExplanation))
(SubClassOf :PostHocExplanation
  (ObjectSomeValuesFrom :relatedTo :IntrinsicInterpretability))

;; Data Properties
(AnnotationAssertion dcterms:identifier :PostHocExplanation "AI-0299"^^xsd:string)
(DataPropertyAssertion :isAITechnology :PostHocExplanation "true"^^xsd:boolean)
```

## Related Terms

- **Broader**: [[Explainable AI]], [[Model Interpretability]]
- **Narrower**: [[SHAP]], [[LIME]], [[Grad-CAM]], [[Saliency Map]]
- **Related**: [[Intrinsic Interpretability]], [[Model-Agnostic Explanations]], [[Feature Attribution]]
- **Contrasts**: [[Intrinsic Interpretability]]

## Formal Specification

### Core Characteristics

1. **Temporal Independence**: Applied after model training completion
2. **Architecture Agnosticism**: Typically model-agnostic or adaptable
3. **Non-invasive**: Does not alter original model parameters
4. **Explanatory Focus**: Describes rather than redesigns decision-making

### Formal Framework

Given a trained model `f: X → Y`, a post-hoc explanation method `E` produces:

```
E(f, x) → explanation
```

Where:
- `f` is the black-box model
- `x` is the input instance
- `explanation` is a human-interpretable representation

## Categories

### By Scope

#### Local Post-Hoc Methods

Explain individual predictions:

**LIME (Local Interpretable Model-agnostic Explanations)**:
```
ξ(x) = argmin L(f, g, πₓ) + Ω(g)
       g∈G
```
- Fits interpretable model locally around instance
- Uses perturbation sampling
- Model-agnostic applicability

**SHAP (SHapley Additive exPlanations)**:
```
φᵢ(f, x) = Σ |S|!(|N|-|S|-1)! / |N|! [f(S∪{i}) - f(S)]
           S⊆N\{i}
```
- Game-theoretic feature attribution
- Satisfies desirable properties (local accuracy, missingness, consistency)
- Computationally expensive

**Counterfactual Explanations**:
```
CF(x) = argmin d(x, x') subject to f(x') ≠ f(x)
        x'∈X
```
- Minimal input changes to alter prediction
- Actionable insights for users
- Causal reasoning support

#### Global Post-Hoc Methods

Explain overall model behaviour:

**Partial Dependence Plots (PDP)**:
```
PDₛ(xₛ) = 𝔼ₓₓ[f(xₛ, Xₓ)]
```
- Marginal effect of features
- Averages over other features
- Assumes feature independence

**Permutation Feature Importance**:
```
FI(j) = Score(original) - 𝔼[Score(permuted feature j)]
```
- Global feature relevance
- Model-agnostic
- Handles feature interactions

**Surrogate Models**:
```
g* = argmin L(f(X), g(X))
     g∈G_interpretable
```
- Train interpretable model to mimic black-box
- Global approximation
- Inherent interpretability of surrogate

### By Method Type

#### Perturbation-Based

- **LIME**: Local perturbations with interpretable model fitting
- **Permutation Importance**: Feature shuffling impact assessment
- **Occlusion Sensitivity**: Masking input regions (computer vision)

#### Gradient-Based

- **Integrated Gradients**: Path integral of gradients
- **Saliency Maps**: First-order gradient visualisation
- **Grad-CAM**: Class activation mapping with gradients

#### Decomposition-Based

- **Layer-wise Relevance Propagation (LRP)**: Backpropagation of relevance scores
- **DeepLIFT**: Difference from reference activation
- **SHAP**: Shapley value decomposition

## Key Properties

### Desirable Characteristics

**Fidelity**:
- Accurate representation of model behaviour
- High correlation with actual model reasoning
- Minimal approximation error

**Stability**:
- Consistent explanations for similar inputs
- Robustness to minor perturbations
- Reproducibility across runs

**Comprehensibility**:
- Human-understandable format
- Appropriate for target audience
- Actionable insights

**Efficiency**:
- Computational feasibility
- Scalability to production systems
- Real-time explanation capability (where needed)

### Trade-offs

**Accuracy vs. Interpretability**:
- Complex models require more sophisticated explanations
- Simplified explanations may sacrifice fidelity
- Context-dependent balance required

**Local vs. Global**:
- Local methods: High fidelity, limited generalisability
- Global methods: Broader insights, potential inaccuracies
- Complementary use recommended

## Implementation Approaches

### SHAP Implementations

**Kernel SHAP**:
- Model-agnostic approximation
- Weighted linear regression
- Slower but universally applicable

**Tree SHAP**:
- Optimised for tree ensembles
- Polynomial time complexity
- Exact Shapley values

**Deep SHAP**:
- DeepLIFT-based approximation for neural networks
- Faster than kernel SHAP
- Leverages network structure

### LIME Implementation

**Algorithm**:
1. Generate perturbed samples around instance
2. Weight samples by proximity to original
3. Train interpretable model (e.g., linear regression)
4. Extract coefficients as feature importance

**Parameters**:
- Kernel width (locality)
- Number of samples
- Feature selection threshold
- Interpretable model type

### Gradient-Based Methods

**Integrated Gradients**:
```
IG(x)ᵢ = (xᵢ - x'ᵢ) × ∫₀¹ ∂f(x' + α(x - x'))/∂xᵢ dα
```
- Baseline-dependent
- Path integral accumulates gradients
- Satisfies sensitivity and implementation invariance

**Grad-CAM**:
```
L^c_Grad-CAM = ReLU(Σₖ αₖ^c Aᵏ)
```
- Weighted combination of activation maps
- Visual explanations for CNNs
- Class-discriminative localisation

## Application Domains

### Computer Vision

**Methods**:
- Grad-CAM, Grad-CAM++, Score-CAM
- Saliency maps
- Occlusion sensitivity

**Use Cases**:
- Medical image diagnosis explanation
- Autonomous vehicle perception
- Security and surveillance analysis

### Natural Language Processing

**Methods**:
- Attention visualisation
- LIME for text
- Integrated gradients

**Applications**:
- Sentiment analysis justification
- Machine translation quality assessment
- Hate speech detection transparency

### Tabular Data

**Methods**:
- SHAP (Kernel, Tree variants)
- LIME
- Partial dependence plots

**Domains**:
- Credit scoring (finance)
- Healthcare risk prediction
- Fraud detection

## Standards & Compliance

### IEEE Standards

**IEEE P2976 (XAI)**:
- Post-hoc methods as XAI implementation
- Partially explainable AI classification
- Optional explainability constraints

**IEEE P2863 (Governance)**:
- Post-hoc explanations for transparency
- Accountability through interpretability
- Bias detection via explanation analysis

### Regulatory Context

**GDPR Article 22**:
- Right to explanation for automated decisions
- Post-hoc methods as compliance mechanism
- Meaningful information requirement

**IEEE P2802 (Medical AI)**:
- Clinical validation of explanations
- Post-hoc analysis for device transparency
- Safety-critical explanation standards

## Evaluation Metrics

### Quantitative Measures

**Fidelity Metrics**:
- **Local Accuracy**: Agreement with model on explained instance
- **Global Fidelity**: R² between explanation model and black-box
- **Consistency**: Stability across similar inputs

**Efficiency Metrics**:
- Computation time
- Number of model queries
- Memory requirements

**Robustness Metrics**:
- Sensitivity to input perturbations
- Explanation variance across runs
- Adversarial robustness

### Qualitative Assessment

**User Studies**:
- Task performance with explanations
- Trust calibration
- Decision-making improvement

**Expert Validation**:
- Domain specialist agreement
- Alignment with ground truth (where available)
- Utility for debugging and model improvement

## Challenges & Limitations

### Methodological Challenges

**Approximation Errors**:
- LIME may not faithfully represent model in complex regions
- Surrogate models sacrifice accuracy for interpretability
- Sampling-based methods have stochastic variance

**Computational Cost**:
- SHAP requires exponential evaluations (exact)
- Real-time constraints in production
- Scalability to high-dimensional inputs

**Instability**:
- LIME sensitive to perturbation sampling
- Gradient-based methods affected by saturation
- Explanation variance across runs

### Conceptual Limitations

**Rashomon Effect**:
- Multiple valid explanations possible
- No ground truth for explanation correctness
- Context-dependent interpretation

**Oversimplification**:
- Complex models may not reduce to simple explanations
- Feature interactions lost in additive models
- Non-linear relationships linearised

**Audience Dependence**:
- Technical vs. lay explanations differ
- Cultural interpretation variations
- Expertise-appropriate granularity

## Research Directions

### Emerging Areas

**Causal Post-Hoc Explanations**:
- Interventional reasoning
- Counterfactual causal models
- Beyond correlational attribution

**Multi-modal Explanations**:
- Cross-modal consistency
- Vision-language explanation alignment
- Unified multimodal frameworks

**Interactive Explanations**:
- Dialogue-based refinement
- User-guided exploration
- Personalised explanation generation

**Adversarial Robustness**:
- Explanations under adversarial attack
- Robust feature attribution
- Manipulation-resistant methods

### Industry Innovation

**Microsoft InterpretML**:
- Unified API for multiple methods
- Performance optimisation
- Production-ready implementations

**Google Cloud Explainable AI**:
- Integrated with Vertex AI
- Feature attributions at scale
- What-If Tool for counterfactuals

**SHAP Library** (Lundberg):
- Comprehensive implementations
- GPU acceleration
- Interactive visualisations

## Best Practices

### Method Selection

**Decision Tree**:
1. **Black-box model type**: Neural network → gradient methods; Trees → SHAP TreeExplainer
2. **Explanation scope**: Local → LIME/SHAP; Global → PDP/surrogate
3. **Computational budget**: Limited → sampling-based; Ample → exact methods
4. **Data modality**: Images → CAM variants; Text → attention; Tabular → SHAP/LIME

### Implementation Guidelines

**Pre-deployment**:
- Validate explanation fidelity on test set
- Benchmark computational performance
- Test stability across input distribution
- Verify regulatory compliance

**Production**:
- Cache explanations where appropriate
- Monitor explanation quality metrics
- Track user engagement with explanations
- A/B test explanation formats

**Post-deployment**:
- Collect user feedback
- Refine methods based on utility
- Update as model evolves
- Audit explanation accuracy

### Documentation

**Model Cards** should include:
- Post-hoc methods employed
- Fidelity metrics
- Computational requirements
- Known limitations

## References

### Academic Literature

- Lundberg, S. M., & Lee, S. I. (2017). "A unified approach to interpreting model predictions." *NeurIPS*
- Ribeiro, M. T., Singh, S., & Guestrin, C. (2016). "'Why should I trust you?': Explaining predictions of any classifier." *KDD*
- Sundararajan, M., Taly, A., & Yan, Q. (2017). "Axiomatic attribution for deep networks." *ICML*
- Selvaraju, R. R., et al. (2017). "Grad-CAM: Visual explanations from deep networks via gradient-based localization." *ICCV*

### Standards

- IEEE. (2023). *IEEE P2976: Standard for eXplainable Artificial Intelligence*
- IEEE. (2020). *IEEE P2863: Recommended Practice for Organisational Governance of AI*

### Tools & Frameworks

- Lundberg, S. M. (2023). *SHAP: A game theoretic approach to explain the output of any machine learning model*
- Molnar, C. (2022). *Interpretable Machine Learning*

## See Also

- [[Intrinsic Interpretability]]
- [[SHAP]]
- [[LIME]]
- [[Grad-CAM]]
- [[Counterfactual Explanation]]
- [[Feature Attribution]]
- [[Saliency Map]]
	- maturity:: draft
	- owl:class:: mv:PostHocExplanation
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
	- #### Relationships
	  id:: post-hoc-explanation-relationships
- ## About Post Hoc Explanation
	- Interpretability techniques applied after a machine learning model has been trained, providing explanations for model behaviour and predictions without modifying the model's architecture or requiring retraining.

	- #### Pear credit
		- One slow moving contender at this stage is Pear Credit from Hypercore. This section needs a full explanation later. For now a [blog post on thesubject](https://medium.com/@observer1/tether-announced-the-launch-of-pear-credit-8d4f66ccd97b)will have to do.

	- ### A Workflow for 3D Character Creation and Animation: A Step-by-Step Guide
		- This section outlines a comprehensive workflow for creating and animating 3D characters, leveraging a variety of tools and techniques.
		  
		  * [LinkedIn Post detailing the workflow](https://www.linkedin.com/posts/lovis-odin-7a751360_how-to-create-this-3d-animation-for-free-activity-7179810196922257409-8PcO?utm_source=share&utm_medium=member_desktop): A LinkedIn post outlining the workflow in detail.
		  * Tools used in the workflow:
		    * [Midjourney](https://www.midjourney.com/): For generating initial character concepts.
		    * [Tripo3d.ai](https://tripo3d.ai/): For creating 3D models from images.
		    * [AI Digimans' PBR Texture Generation Tool](https://lnkd.in/gBvGH_PH): For generating realistic textures.
		    * [Mixamo](https://mixamo.com/): For animating the 3D models.
		    * [Spline.design](https://spline.design/): For further customisation and enhancement.

	- #### Pear credit
		- One slow moving contender at this stage is Pear Credit from Hypercore. This section needs a full explanation later. For now a [blog post on thesubject](https://medium.com/@observer1/tether-announced-the-launch-of-pear-credit-8d4f66ccd97b)will have to do.

	- ### A Workflow for 3D Character Creation and Animation: A Step-by-Step Guide
		- This section outlines a comprehensive workflow for creating and animating 3D characters, leveraging a variety of tools and techniques.
		  
		  * [LinkedIn Post detailing the workflow](https://www.linkedin.com/posts/lovis-odin-7a751360_how-to-create-this-3d-animation-for-free-activity-7179810196922257409-8PcO?utm_source=share&utm_medium=member_desktop): A LinkedIn post outlining the workflow in detail.
		  * Tools used in the workflow:
		    * [Midjourney](https://www.midjourney.com/): For generating initial character concepts.
		    * [Tripo3d.ai](https://tripo3d.ai/): For creating 3D models from images.
		    * [AI Digimans' PBR Texture Generation Tool](https://lnkd.in/gBvGH_PH): For generating realistic textures.
		    * [Mixamo](https://mixamo.com/): For animating the 3D models.
		    * [Spline.design](https://spline.design/): For further customisation and enhancement.

	- ### A Workflow for 3D Character Creation and Animation: A Step-by-Step Guide
		- This section outlines a comprehensive workflow for creating and animating 3D characters, leveraging a variety of tools and techniques.
		  
		  * [LinkedIn Post detailing the workflow](https://www.linkedin.com/posts/lovis-odin-7a751360_how-to-create-this-3d-animation-for-free-activity-7179810196922257409-8PcO?utm_source=share&utm_medium=member_desktop): A LinkedIn post outlining the workflow in detail.
		    * [Mixamo](https://mixamo.com/): For animating the 3D models.
		    * [Spline.design](https://spline.design/): For further customisation and enhancement.

- ## Closed source Large Language Models: and [[AI Companies]]
	- ![1712680210067.jpeg](assets/1712680210067_1712686278817_0.jpeg)
	- [LinkedIn post from Peter Gostev](https://www.linkedin.com/posts/peter-gostev_we-are-seeing-some-clear-categories-emerge-activity-7183501457684365314-iihT?)
	-
		- I have a [[Prompt Engineering]] section too.
		- The GPT "store" / app experience.
		- A note about GPTs. They really are quite powerful. Think of them as an app builder, containing an AI agent, in a box, with [bidirectional internet](https://medium.com/@michaelev3/connecting-custom-gpts-to-google-apis-726dc2cdb54d), and the ability to build code. (such as which is an excellent coding assistant [Grimoire](https://chat.openai.com/g/g-n7Rs0IK86-grimoire)). - 🟢 They are the most advantage you can get for $20 a month, if you have tasks that you repeat, and you're not a coder. **
		- Note they now want $25 if you want to keep your data out of their training set.**

- ## Closed source Large Language Models: and [[AI Companies]]
	- ![1712680210067.jpeg](assets/1712680210067_1712686278817_0.jpeg)
	- [LinkedIn post from Peter Gostev](https://www.linkedin.com/posts/peter-gostev_we-are-seeing-some-clear-categories-emerge-activity-7183501457684365314-iihT?)
	-

- ## Closed source Large Language Models: and [[AI Companies]]
	- ![1712680210067.jpeg](assets/1712680210067_1712686278817_0.jpeg)
	- [LinkedIn post from Peter Gostev](https://www.linkedin.com/posts/peter-gostev_we-are-seeing-some-clear-categories-emerge-activity-7183501457684365314-iihT?)
	-

## Related Terms

- **Broader**: [[Explainable AI]], [[Model Interpretability]]
- **Narrower**: [[SHAP]], [[LIME]], [[Grad-CAM]], [[Saliency Map]]
- **Related**: [[Intrinsic Interpretability]], [[Model-Agnostic Explanations]], [[Feature Attribution]]
- **Contrasts**: [[Intrinsic Interpretability]]

## Formal Specification

### Core Characteristics

1. **Temporal Independence**: Applied after model training completion
2. **Architecture Agnosticism**: Typically model-agnostic or adaptable
3. **Non-invasive**: Does not alter original model parameters
4. **Explanatory Focus**: Describes rather than redesigns decision-making

### Formal Framework

Given a trained model `f: X → Y`, a post-hoc explanation method `E` produces:

```
E(f, x) → explanation
```

Where:
- `f` is the black-box model
- `x` is the input instance
- `explanation` is a human-interpretable representation

## Categories

### By Scope

#### Local Post-Hoc Methods

Explain individual predictions:

**LIME (Local Interpretable Model-agnostic Explanations)**:
```
ξ(x) = argmin L(f, g, πₓ) + Ω(g)
       g∈G
```
- Fits interpretable model locally around instance
- Uses perturbation sampling
- Model-agnostic applicability

**SHAP (SHapley Additive exPlanations)**:
```
φᵢ(f, x) = Σ |S|!(|N|-|S|-1)! / |N|! [f(S∪{i}) - f(S)]
           S⊆N\{i}
```
- Game-theoretic feature attribution
- Satisfies desirable properties (local accuracy, missingness, consistency)
- Computationally expensive

**Counterfactual Explanations**:
```
CF(x) = argmin d(x, x') subject to f(x') ≠ f(x)
        x'∈X
```
- Minimal input changes to alter prediction
- Actionable insights for users
- Causal reasoning support

#### Global Post-Hoc Methods

Explain overall model behaviour:

**Partial Dependence Plots (PDP)**:
```
PDₛ(xₛ) = 𝔼ₓₓ[f(xₛ, Xₓ)]
```
- Marginal effect of features
- Averages over other features
- Assumes feature independence

**Permutation Feature Importance**:
```
FI(j) = Score(original) - 𝔼[Score(permuted feature j)]
```
- Global feature relevance
- Model-agnostic
- Handles feature interactions

**Surrogate Models**:
```
g* = argmin L(f(X), g(X))
     g∈G_interpretable
```
- Train interpretable model to mimic black-box
- Global approximation
- Inherent interpretability of surrogate

### By Method Type

#### Perturbation-Based

- **LIME**: Local perturbations with interpretable model fitting
- **Permutation Importance**: Feature shuffling impact assessment
- **Occlusion Sensitivity**: Masking input regions (computer vision)

#### Gradient-Based

- **Integrated Gradients**: Path integral of gradients
- **Saliency Maps**: First-order gradient visualisation
- **Grad-CAM**: Class activation mapping with gradients

#### Decomposition-Based

- **Layer-wise Relevance Propagation (LRP)**: Backpropagation of relevance scores
- **DeepLIFT**: Difference from reference activation
- **SHAP**: Shapley value decomposition

## Key Properties

### Desirable Characteristics

**Fidelity**:
- Accurate representation of model behaviour
- High correlation with actual model reasoning
- Minimal approximation error

**Stability**:
- Consistent explanations for similar inputs
- Robustness to minor perturbations
- Reproducibility across runs

**Comprehensibility**:
- Human-understandable format
- Appropriate for target audience
- Actionable insights

**Efficiency**:
- Computational feasibility
- Scalability to production systems
- Real-time explanation capability (where needed)

### Trade-offs

**Accuracy vs. Interpretability**:
- Complex models require more sophisticated explanations
- Simplified explanations may sacrifice fidelity
- Context-dependent balance required

**Local vs. Global**:
- Local methods: High fidelity, limited generalisability
- Global methods: Broader insights, potential inaccuracies
- Complementary use recommended

## Implementation Approaches

### SHAP Implementations

**Kernel SHAP**:
- Model-agnostic approximation
- Weighted linear regression
- Slower but universally applicable

**Tree SHAP**:
- Optimised for tree ensembles
- Polynomial time complexity
- Exact Shapley values

**Deep SHAP**:
- DeepLIFT-based approximation for neural networks
- Faster than kernel SHAP
- Leverages network structure

### LIME Implementation

**Algorithm**:
1. Generate perturbed samples around instance
2. Weight samples by proximity to original
3. Train interpretable model (e.g., linear regression)
4. Extract coefficients as feature importance

**Parameters**:
- Kernel width (locality)
- Number of samples
- Feature selection threshold
- Interpretable model type

### Gradient-Based Methods

**Integrated Gradients**:
```
IG(x)ᵢ = (xᵢ - x'ᵢ) × ∫₀¹ ∂f(x' + α(x - x'))/∂xᵢ dα
```
- Baseline-dependent
- Path integral accumulates gradients
- Satisfies sensitivity and implementation invariance

**Grad-CAM**:
```
L^c_Grad-CAM = ReLU(Σₖ αₖ^c Aᵏ)
```
- Weighted combination of activation maps
- Visual explanations for CNNs
- Class-discriminative localisation

## Application Domains

### Computer Vision

**Methods**:
- Grad-CAM, Grad-CAM++, Score-CAM
- Saliency maps
- Occlusion sensitivity

**Use Cases**:
- Medical image diagnosis explanation
- Autonomous vehicle perception
- Security and surveillance analysis

### Natural Language Processing

**Methods**:
- Attention visualisation
- LIME for text
- Integrated gradients

**Applications**:
- Sentiment analysis justification
- Machine translation quality assessment
- Hate speech detection transparency

### Tabular Data

**Methods**:
- SHAP (Kernel, Tree variants)
- LIME
- Partial dependence plots

**Domains**:
- Credit scoring (finance)
- Healthcare risk prediction
- Fraud detection

## Standards & Compliance

### IEEE Standards

**IEEE P2976 (XAI)**:
- Post-hoc methods as XAI implementation
- Partially explainable AI classification
- Optional explainability constraints

**IEEE P2863 (Governance)**:
- Post-hoc explanations for transparency
- Accountability through interpretability
- Bias detection via explanation analysis

### Regulatory Context

**GDPR Article 22**:
- Right to explanation for automated decisions
- Post-hoc methods as compliance mechanism
- Meaningful information requirement

**IEEE P2802 (Medical AI)**:
- Clinical validation of explanations
- Post-hoc analysis for device transparency
- Safety-critical explanation standards

## Evaluation Metrics

### Quantitative Measures

**Fidelity Metrics**:
- **Local Accuracy**: Agreement with model on explained instance
- **Global Fidelity**: R² between explanation model and black-box
- **Consistency**: Stability across similar inputs

**Efficiency Metrics**:
- Computation time
- Number of model queries
- Memory requirements

**Robustness Metrics**:
- Sensitivity to input perturbations
- Explanation variance across runs
- Adversarial robustness

### Qualitative Assessment

**User Studies**:
- Task performance with explanations
- Trust calibration
- Decision-making improvement

**Expert Validation**:
- Domain specialist agreement
- Alignment with ground truth (where available)
- Utility for debugging and model improvement

## Challenges & Limitations

### Methodological Challenges

**Approximation Errors**:
- LIME may not faithfully represent model in complex regions
- Surrogate models sacrifice accuracy for interpretability
- Sampling-based methods have stochastic variance

**Computational Cost**:
- SHAP requires exponential evaluations (exact)
- Real-time constraints in production
- Scalability to high-dimensional inputs

**Instability**:
- LIME sensitive to perturbation sampling
- Gradient-based methods affected by saturation
- Explanation variance across runs

### Conceptual Limitations

**Rashomon Effect**:
- Multiple valid explanations possible
- No ground truth for explanation correctness
- Context-dependent interpretation

**Oversimplification**:
- Complex models may not reduce to simple explanations
- Feature interactions lost in additive models
- Non-linear relationships linearised

**Audience Dependence**:
- Technical vs. lay explanations differ
- Cultural interpretation variations
- Expertise-appropriate granularity

## Research Directions

### Emerging Areas

**Causal Post-Hoc Explanations**:
- Interventional reasoning
- Counterfactual causal models
- Beyond correlational attribution

**Multi-modal Explanations**:
- Cross-modal consistency
- Vision-language explanation alignment
- Unified multimodal frameworks

**Interactive Explanations**:
- Dialogue-based refinement
- User-guided exploration
- Personalised explanation generation

**Adversarial Robustness**:
- Explanations under adversarial attack
- Robust feature attribution
- Manipulation-resistant methods

### Industry Innovation

**Microsoft InterpretML**:
- Unified API for multiple methods
- Performance optimisation
- Production-ready implementations

**Google Cloud Explainable AI**:
- Integrated with Vertex AI
- Feature attributions at scale
- What-If Tool for counterfactuals

**SHAP Library** (Lundberg):
- Comprehensive implementations
- GPU acceleration
- Interactive visualisations

## Best Practices

### Method Selection

**Decision Tree**:
1. **Black-box model type**: Neural network → gradient methods; Trees → SHAP TreeExplainer
2. **Explanation scope**: Local → LIME/SHAP; Global → PDP/surrogate
3. **Computational budget**: Limited → sampling-based; Ample → exact methods
4. **Data modality**: Images → CAM variants; Text → attention; Tabular → SHAP/LIME

### Implementation Guidelines

**Pre-deployment**:
- Validate explanation fidelity on test set
- Benchmark computational performance
- Test stability across input distribution
- Verify regulatory compliance

**Production**:
- Cache explanations where appropriate
- Monitor explanation quality metrics
- Track user engagement with explanations
- A/B test explanation formats

**Post-deployment**:
- Collect user feedback
- Refine methods based on utility
- Update as model evolves
- Audit explanation accuracy

### Documentation

**Model Cards** should include:
- Post-hoc methods employed
- Fidelity metrics
- Computational requirements
- Known limitations

## References

### Academic Literature

- Lundberg, S. M., & Lee, S. I. (2017). "A unified approach to interpreting model predictions." *NeurIPS*
- Ribeiro, M. T., Singh, S., & Guestrin, C. (2016). "'Why should I trust you?': Explaining predictions of any classifier." *KDD*
- Sundararajan, M., Taly, A., & Yan, Q. (2017). "Axiomatic attribution for deep networks." *ICML*
- Selvaraju, R. R., et al. (2017). "Grad-CAM: Visual explanations from deep networks via gradient-based localization." *ICCV*

### Standards

- IEEE. (2023). *IEEE P2976: Standard for eXplainable Artificial Intelligence*
- IEEE. (2020). *IEEE P2863: Recommended Practice for Organisational Governance of AI*

### Tools & Frameworks

- Lundberg, S. M. (2023). *SHAP: A game theoretic approach to explain the output of any machine learning model*
- Molnar, C. (2022). *Interpretable Machine Learning*

## See Also

- [[Intrinsic Interpretability]]
- [[SHAP]]
- [[LIME]]
- [[Grad-CAM]]
- [[Counterfactual Explanation]]
- [[Feature Attribution]]
- [[Saliency Map]]
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Post-Hoc Explanation
		  
		  **Term ID**: AI-0299
		  **Category**: XAI Methods
		  **Status**: Established
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  Interpretability techniques applied after a machine learning model has been trained, providing explanations for model behaviour and predictions without modifying the model's architecture or requiring retraining.
		  
		  ## Related Terms
		  
		  - **Broader**: [[Explainable AI]], [[Model Interpretability]]
		  - **Narrower**: [[SHAP]], [[LIME]], [[Grad-CAM]], [[Saliency Map]]
		  - **Related**: [[Intrinsic Interpretability]], [[Model-Agnostic Explanations]], [[Feature Attribution]]
		  - **Contrasts**: [[Intrinsic Interpretability]]
		  
		  ## Formal Specification
		  
		  ### Core Characteristics
		  
		  1. **Temporal Independence**: Applied after model training completion
		  2. **Architecture Agnosticism**: Typically model-agnostic or adaptable
		  3. **Non-invasive**: Does not alter original model parameters
		  4. **Explanatory Focus**: Describes rather than redesigns decision-making
		  
		  ### Formal Framework
		  
		  Given a trained model `f: X → Y`, a post-hoc explanation method `E` produces:
		  
		  ```
		  E(f, x) → explanation
		  ```
		  
		  Where:
		  - `f` is the black-box model
		  - `x` is the input instance
		  - `explanation` is a human-interpretable representation
		  
		  ## Categories
		  
		  ### By Scope
		  
		  #### Local Post-Hoc Methods
		  
		  Explain individual predictions:
		  
		  **LIME (Local Interpretable Model-agnostic Explanations)**:
		  ```
		  ξ(x) = argmin L(f, g, πₓ) + Ω(g)
		         g∈G
		  ```
		  - Fits interpretable model locally around instance
		  - Uses perturbation sampling
		  - Model-agnostic applicability
		  
		  **SHAP (SHapley Additive exPlanations)**:
		  ```
		  φᵢ(f, x) = Σ |S|!(|N|-|S|-1)! / |N|! [f(S∪{i}) - f(S)]
		             S⊆N\{i}
		  ```
		  - Game-theoretic feature attribution
		  - Satisfies desirable properties (local accuracy, missingness, consistency)
		  - Computationally expensive
		  
		  **Counterfactual Explanations**:
		  ```
		  CF(x) = argmin d(x, x') subject to f(x') ≠ f(x)
		          x'∈X
		  ```
		  - Minimal input changes to alter prediction
		  - Actionable insights for users
		  - Causal reasoning support
		  
		  #### Global Post-Hoc Methods
		  
		  Explain overall model behaviour:
		  
		  **Partial Dependence Plots (PDP)**:
		  ```
		  PDₛ(xₛ) = 𝔼ₓₓ[f(xₛ, Xₓ)]
		  ```
		  - Marginal effect of features
		  - Averages over other features
		  - Assumes feature independence
		  
		  **Permutation Feature Importance**:
		  ```
		  FI(j) = Score(original) - 𝔼[Score(permuted feature j)]
		  ```
		  - Global feature relevance
		  - Model-agnostic
		  - Handles feature interactions
		  
		  **Surrogate Models**:
		  ```
		  g* = argmin L(f(X), g(X))
		       g∈G_interpretable
		  ```
		  - Train interpretable model to mimic black-box
		  - Global approximation
		  - Inherent interpretability of surrogate
		  
		  ### By Method Type
		  
		  #### Perturbation-Based
		  
		  - **LIME**: Local perturbations with interpretable model fitting
		  - **Permutation Importance**: Feature shuffling impact assessment
		  - **Occlusion Sensitivity**: Masking input regions (computer vision)
		  
		  #### Gradient-Based
		  
		  - **Integrated Gradients**: Path integral of gradients
		  - **Saliency Maps**: First-order gradient visualisation
		  - **Grad-CAM**: Class activation mapping with gradients
		  
		  #### Decomposition-Based
		  
		  - **Layer-wise Relevance Propagation (LRP)**: Backpropagation of relevance scores
		  - **DeepLIFT**: Difference from reference activation
		  - **SHAP**: Shapley value decomposition
		  
		  ## Key Properties
		  
		  ### Desirable Characteristics
		  
		  **Fidelity**:
		  - Accurate representation of model behaviour
		  - High correlation with actual model reasoning
		  - Minimal approximation error
		  
		  **Stability**:
		  - Consistent explanations for similar inputs
		  - Robustness to minor perturbations
		  - Reproducibility across runs
		  
		  **Comprehensibility**:
		  - Human-understandable format
		  - Appropriate for target audience
		  - Actionable insights
		  
		  **Efficiency**:
		  - Computational feasibility
		  - Scalability to production systems
		  - Real-time explanation capability (where needed)
		  
		  ### Trade-offs
		  
		  **Accuracy vs. Interpretability**:
		  - Complex models require more sophisticated explanations
		  - Simplified explanations may sacrifice fidelity
		  - Context-dependent balance required
		  
		  **Local vs. Global**:
		  - Local methods: High fidelity, limited generalisability
		  - Global methods: Broader insights, potential inaccuracies
		  - Complementary use recommended
		  
		  ## Implementation Approaches
		  
		  ### SHAP Implementations
		  
		  **Kernel SHAP**:
		  - Model-agnostic approximation
		  - Weighted linear regression
		  - Slower but universally applicable
		  
		  **Tree SHAP**:
		  - Optimised for tree ensembles
		  - Polynomial time complexity
		  - Exact Shapley values
		  
		  **Deep SHAP**:
		  - DeepLIFT-based approximation for neural networks
		  - Faster than kernel SHAP
		  - Leverages network structure
		  
		  ### LIME Implementation
		  
		  **Algorithm**:
		  1. Generate perturbed samples around instance
		  2. Weight samples by proximity to original
		  3. Train interpretable model (e.g., linear regression)
		  4. Extract coefficients as feature importance
		  
		  **Parameters**:
		  - Kernel width (locality)
		  - Number of samples
		  - Feature selection threshold
		  - Interpretable model type
		  
		  ### Gradient-Based Methods
		  
		  **Integrated Gradients**:
		  ```
		  IG(x)ᵢ = (xᵢ - x'ᵢ) × ∫₀¹ ∂f(x' + α(x - x'))/∂xᵢ dα
		  ```
		  - Baseline-dependent
		  - Path integral accumulates gradients
		  - Satisfies sensitivity and implementation invariance
		  
		  **Grad-CAM**:
		  ```
		  L^c_Grad-CAM = ReLU(Σₖ αₖ^c Aᵏ)
		  ```
		  - Weighted combination of activation maps
		  - Visual explanations for CNNs
		  - Class-discriminative localisation
		  
		  ## Application Domains
		  
		  ### Computer Vision
		  
		  **Methods**:
		  - Grad-CAM, Grad-CAM++, Score-CAM
		  - Saliency maps
		  - Occlusion sensitivity
		  
		  **Use Cases**:
		  - Medical image diagnosis explanation
		  - Autonomous vehicle perception
		  - Security and surveillance analysis
		  
		  ### Natural Language Processing
		  
		  **Methods**:
		  - Attention visualisation
		  - LIME for text
		  - Integrated gradients
		  
		  **Applications**:
		  - Sentiment analysis justification
		  - Machine translation quality assessment
		  - Hate speech detection transparency
		  
		  ### Tabular Data
		  
		  **Methods**:
		  - SHAP (Kernel, Tree variants)
		  - LIME
		  - Partial dependence plots
		  
		  **Domains**:
		  - Credit scoring (finance)
		  - Healthcare risk prediction
		  - Fraud detection
		  
		  ## Standards & Compliance
		  
		  ### IEEE Standards
		  
		  **IEEE P2976 (XAI)**:
		  - Post-hoc methods as XAI implementation
		  - Partially explainable AI classification
		  - Optional explainability constraints
		  
		  **IEEE P2863 (Governance)**:
		  - Post-hoc explanations for transparency
		  - Accountability through interpretability
		  - Bias detection via explanation analysis
		  
		  ### Regulatory Context
		  
		  **GDPR Article 22**:
		  - Right to explanation for automated decisions
		  - Post-hoc methods as compliance mechanism
		  - Meaningful information requirement
		  
		  **IEEE P2802 (Medical AI)**:
		  - Clinical validation of explanations
		  - Post-hoc analysis for device transparency
		  - Safety-critical explanation standards
		  
		  ## Evaluation Metrics
		  
		  ### Quantitative Measures
		  
		  **Fidelity Metrics**:
		  - **Local Accuracy**: Agreement with model on explained instance
		  - **Global Fidelity**: R² between explanation model and black-box
		  - **Consistency**: Stability across similar inputs
		  
		  **Efficiency Metrics**:
		  - Computation time
		  - Number of model queries
		  - Memory requirements
		  
		  **Robustness Metrics**:
		  - Sensitivity to input perturbations
		  - Explanation variance across runs
		  - Adversarial robustness
		  
		  ### Qualitative Assessment
		  
		  **User Studies**:
		  - Task performance with explanations
		  - Trust calibration
		  - Decision-making improvement
		  
		  **Expert Validation**:
		  - Domain specialist agreement
		  - Alignment with ground truth (where available)
		  - Utility for debugging and model improvement
		  
		  ## Challenges & Limitations
		  
		  ### Methodological Challenges
		  
		  **Approximation Errors**:
		  - LIME may not faithfully represent model in complex regions
		  - Surrogate models sacrifice accuracy for interpretability
		  - Sampling-based methods have stochastic variance
		  
		  **Computational Cost**:
		  - SHAP requires exponential evaluations (exact)
		  - Real-time constraints in production
		  - Scalability to high-dimensional inputs
		  
		  **Instability**:
		  - LIME sensitive to perturbation sampling
		  - Gradient-based methods affected by saturation
		  - Explanation variance across runs
		  
		  ### Conceptual Limitations
		  
		  **Rashomon Effect**:
		  - Multiple valid explanations possible
		  - No ground truth for explanation correctness
		  - Context-dependent interpretation
		  
		  **Oversimplification**:
		  - Complex models may not reduce to simple explanations
		  - Feature interactions lost in additive models
		  - Non-linear relationships linearised
		  
		  **Audience Dependence**:
		  - Technical vs. lay explanations differ
		  - Cultural interpretation variations
		  - Expertise-appropriate granularity
		  
		  ## Research Directions
		  
		  ### Emerging Areas
		  
		  **Causal Post-Hoc Explanations**:
		  - Interventional reasoning
		  - Counterfactual causal models
		  - Beyond correlational attribution
		  
		  **Multi-modal Explanations**:
		  - Cross-modal consistency
		  - Vision-language explanation alignment
		  - Unified multimodal frameworks
		  
		  **Interactive Explanations**:
		  - Dialogue-based refinement
		  - User-guided exploration
		  - Personalised explanation generation
		  
		  **Adversarial Robustness**:
		  - Explanations under adversarial attack
		  - Robust feature attribution
		  - Manipulation-resistant methods
		  
		  ### Industry Innovation
		  
		  **Microsoft InterpretML**:
		  - Unified API for multiple methods
		  - Performance optimisation
		  - Production-ready implementations
		  
		  **Google Cloud Explainable AI**:
		  - Integrated with Vertex AI
		  - Feature attributions at scale
		  - What-If Tool for counterfactuals
		  
		  **SHAP Library** (Lundberg):
		  - Comprehensive implementations
		  - GPU acceleration
		  - Interactive visualisations
		  
		  ## Best Practices
		  
		  ### Method Selection
		  
		  **Decision Tree**:
		  1. **Black-box model type**: Neural network → gradient methods; Trees → SHAP TreeExplainer
		  2. **Explanation scope**: Local → LIME/SHAP; Global → PDP/surrogate
		  3. **Computational budget**: Limited → sampling-based; Ample → exact methods
		  4. **Data modality**: Images → CAM variants; Text → attention; Tabular → SHAP/LIME
		  
		  ### Implementation Guidelines
		  
		  **Pre-deployment**:
		  - Validate explanation fidelity on test set
		  - Benchmark computational performance
		  - Test stability across input distribution
		  - Verify regulatory compliance
		  
		  **Production**:
		  - Cache explanations where appropriate
		  - Monitor explanation quality metrics
		  - Track user engagement with explanations
		  - A/B test explanation formats
		  
		  **Post-deployment**:
		  - Collect user feedback
		  - Refine methods based on utility
		  - Update as model evolves
		  - Audit explanation accuracy
		  
		  ### Documentation
		  
		  **Model Cards** should include:
		  - Post-hoc methods employed
		  - Fidelity metrics
		  - Computational requirements
		  - Known limitations
		  
		  ## References
		  
		  ### Academic Literature
		  
		  - Lundberg, S. M., & Lee, S. I. (2017). "A unified approach to interpreting model predictions." *NeurIPS*
		  - Ribeiro, M. T., Singh, S., & Guestrin, C. (2016). "'Why should I trust you?': Explaining predictions of any classifier." *KDD*
		  - Sundararajan, M., Taly, A., & Yan, Q. (2017). "Axiomatic attribution for deep networks." *ICML*
		  - Selvaraju, R. R., et al. (2017). "Grad-CAM: Visual explanations from deep networks via gradient-based localization." *ICCV*
		  
		  ### Standards
		  
		  - IEEE. (2023). *IEEE P2976: Standard for eXplainable Artificial Intelligence*
		  - IEEE. (2020). *IEEE P2863: Recommended Practice for Organisational Governance of AI*
		  
		  ### Tools & Frameworks
		  
		  - Lundberg, S. M. (2023). *SHAP: A game theoretic approach to explain the output of any machine learning model*
		  - Molnar, C. (2022). *Interpretable Machine Learning*
		  
		  ## See Also
		  
		  - [[Intrinsic Interpretability]]
		  - [[SHAP]]
		  - [[LIME]]
		  - [[Grad-CAM]]
		  - [[Counterfactual Explanation]]
		  - [[Feature Attribution]]
		  - [[Saliency Map]]
		  
		  ```

- public-access:: true
	- definition:: Interpretability techniques applied after a machine learning model has been trained, providing explanations for model behaviour and predictions without modifying the model's architecture or requiring retraining.



## Academic Context

- Post hoc explanation methods are interpretability techniques applied after a machine learning (ML) model has been trained, aiming to elucidate model behaviour and predictions without altering the model’s architecture or requiring retraining.
  - These methods contrast with inherently interpretable models (e.g., decision trees) by working with complex “black-box” models such as neural networks or ensemble methods.
  - The academic foundation lies in providing *statistical understanding*—mapping input variations to output predictions—rather than full mechanistic transparency of the model internals.
  - Philosophically, post hoc explanations resemble human expert rationalisations: approximative, bounded, and subject to empirical validation, offering a rigorous yet inherently limited form of scientific insight (Oh, 2024)[2].

## Current Landscape (2025)

- Industry adoption of post hoc explanation techniques is widespread across sectors relying on complex ML models, including finance, healthcare, and climate science.
  - Common methods include LIME (Local Interpretable Model-agnostic Explanations), SHAP (SHapley Additive exPlanations), surrogate models, and saliency or attention maps.
  - These methods are model-agnostic, enabling application across diverse architectures without internal access.
- Notable organisations and platforms integrating post hoc explanations include major AI providers and open-source toolkits, facilitating transparency and trust in AI systems.
- In the UK, and particularly in North England, institutions such as the University of Manchester and the Alan Turing Institute collaborate with industry partners to advance explainable AI (XAI) research and deployment.
- Technical limitations persist:
  - Post hoc explanations provide correlations rather than causations, necessitating cautious interpretation.
  - They offer *statistical understanding* but not *component-level understanding* of model internals, which can limit their explanatory power in safety-critical applications (Molina et al., 2025)[3].
- Standards and frameworks for explainability are evolving, with increasing emphasis on empirical validation and ethical transparency.

## Research & Literature

- Key academic contributions include:
  - Oh, N. (2024). *In Defence of Post-hoc Explainability*. Socius Labs. arXiv:2412.17883.  
    - Argues for the legitimacy of post hoc methods as scientific tools, highlighting their epistemic value despite approximations[2].
  - Molina, et al. (2025). *Moving beyond post hoc explainable artificial intelligence*. Geoscientific Model Development, 18, 787–805.  
    - Reviews limitations of post hoc methods in climate science, emphasising statistical vs. mechanistic understanding[3].
  - Ribeiro, M.T., Singh, S., & Guestrin, C. (2016). *“Why Should I Trust You?” Explaining the Predictions of Any Classifier*. Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining.  
    - Introduced LIME, a foundational post hoc explanation technique.
  - Lundberg, S.M., & Lee, S.-I. (2017). *A Unified Approach to Interpreting Model Predictions*. Advances in Neural Information Processing Systems.  
    - Developed SHAP, a game-theoretic method for feature attribution.
- Ongoing research focuses on improving explanation fidelity, mitigating biases in explanations, and integrating causal inference to move beyond correlation.

## UK Context

- The UK is a leader in XAI research, with significant contributions from universities and research centres in North England.
  - The University of Manchester’s AI group explores post hoc interpretability in healthcare diagnostics.
  - Leeds Institute for Data Analytics collaborates on explainability frameworks for financial services.
  - Newcastle University investigates post hoc methods in environmental modelling.
  - Sheffield’s Advanced Manufacturing Research Centre applies explainability to industrial AI systems.
- Regional innovation hubs foster industry-academic partnerships, promoting practical deployment of post hoc explanations in sectors vital to the North, such as healthcare, finance, and manufacturing.
- The Alan Turing Institute, headquartered in London but with strong North England collaborations, supports national efforts to standardise and improve explainability practices.

## Future Directions

- Emerging trends include:
  - Integration of causal inference techniques to enhance the explanatory power beyond mere correlations.
  - Development of standardised benchmarks and empirical validation protocols to assess explanation quality and reliability.
  - Increased focus on fairness and bias mitigation within explanations to ensure equitable AI outcomes.
  - Expansion of user-centric explanation methods tailored to diverse stakeholders, from data scientists to regulators and end-users.
- Anticipated challenges:
  - Balancing explanation complexity with user comprehensibility.
  - Addressing the epistemic limits of post hoc methods while maintaining practical utility.
  - Navigating regulatory requirements, especially in the UK’s evolving AI governance landscape.
- Research priorities include:
  - Formalising theoretical frameworks for explanation validity.
  - Enhancing robustness of explanations against adversarial manipulation.
  - Exploring regional and sector-specific needs, particularly in the UK’s North England context.

## References

1. Oh, N. (2024). *In Defence of Post-hoc Explainability*. Socius Labs. arXiv:2412.17883.  
2. Molina, et al. (2025). *Moving beyond post hoc explainable artificial intelligence*. Geoscientific Model Development, 18, 787–805. https://doi.org/10.5194/gmd-18-787-2025  
3. Ribeiro, M.T., Singh, S., & Guestrin, C. (2016). “Why Should I Trust You?” Explaining the Predictions of Any Classifier. *Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining*, 1135–1144. https://doi.org/10.1145/2939672.2939778  
4. Lundberg, S.M., & Lee, S.-I. (2017). A Unified Approach to Interpreting Model Predictions. *Advances in Neural Information Processing Systems*, 30, 4765–4774.  
5. Molina, et al. (2023). *Statistical vs. Causal Understanding in Explainable AI*. TechRxiv.  

*If post hoc explanations were a pub quiz, they’d be the clever friend who can’t quite remember the answer but gives a plausible and entertaining guess—still, better than silence.*


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
