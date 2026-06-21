- ### Definition
  - Feature attribution is a family of [[Explainable AI]] techniques that assign a quantified contribution score to each input feature for a given prediction made by a [[Machine Learning]] model, answering the question "how much did this particular input variable cause the model to produce this output?" Unlike global [[Feature Importance]] measures that summarise a model's behaviour across an entire dataset, feature attribution is fundamentally local and instance-specific: each attribution is relative to a single prediction and may flip sign or magnitude for a different data point. The field encompasses three principal methodological lineages — gradient-based methods (including vanilla gradient saliency, SmoothGrad, and [[Integrated Gradients]]), perturbation-based surrogate methods (notably [[LIME]] which fits an interpretable linear surrogate to perturbed neighbourhood samples), and game-theoretic Shapley value methods (pre-eminently [[SHAP]] and its tree, deep, and kernel variants). Attribution methods differ critically in whether they are model-agnostic or model-specific, local or global, additive or non-additive, and whether they satisfy formal axioms such as completeness (attributions sum to the prediction gap), dummy (null-effect features receive zero attribution), symmetry, and linearity. The choice of reference baseline — the uninformative input against which attributions are measured — is a crucial design decision that profoundly affects which features appear important, a subtlety that has driven active research into optimal baseline selection. Beyond supervised classification and regression, feature attribution is now routinely applied to [[Deep Learning]] architectures including [[Convolutional Neural Network]]s (where gradient-based maps highlight pixel regions), [[Attention Mechanism]] heads in [[Transformer Architecture]]s, and the classification heads of [[Large Language Model]]s. Attribution scores underpin [[Model Interpretability]], regulatory compliance under frameworks such as the EU AI Act, and the emerging discipline of [[Mechanistic Interpretability]] that seeks circuit-level understanding of neural computation.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FeatureAttribution
  - owl-role:: Concept | ExplainabilityMethod | LocalExplanation
  - owl-inferred:: artificial-intelligence:PostHocExplanation, artificial-intelligence:ModelDiagnosticTool, artificial-intelligence:TrustworthinessFramework
  - belongs-to-domain:: [[AI-GroundedDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]]

- ### Relationships
  - is-subclass-of:: [[Explainable AI]], [[Model Interpretability]]
  - has-part:: [[SHAP]], [[LIME]], [[Integrated Gradients]], [[Gradient Saliency]], [[DeepLIFT]], [[Grad-CAM]], [[SmoothGrad]], [[Permutation Importance]]
  - requires:: [[Machine Learning Discipline]], [[Backpropagation]], [[Loss Function]], [[Neural Network]]
  - enables:: [[Interpretability]], [[Model Interpretability]], [[Mechanistic Interpretability]], [[AI Safety]], [[Algorithmic Transparency]], [[Model Debugging]]
  - implements:: [[Shapley Value]], [[Game Theory]], [[Gradient Descent]], [[Surrogate Model]]
  - depends-on:: [[Gradient Descent]], [[Neural Network]], [[Deep Learning]], [[Feature Engineering]]
  - supports:: [[Feature Importance]], [[Feature Selection]], [[Feature Engineering]], [[Regulatory Compliance]], [[Bias Detection]]
  - uses:: [[Backpropagation]], [[Attention Mechanism]], [[Loss Function]], [[Convolutional Neural Network]]
  - contrasts-with:: [[Feature Importance]], [[Global Explanation]], [[Intrinsic Interpretability]], [[Black-Box Model]]
  - related-to:: [[Attention Mechanism]], [[Deep Learning]], [[Convolutional Neural Network]], [[Transformer Architecture]], [[Large Language Model]], [[Sparse Autoencoder]], [[Activation Patching]]
  - standardized-by:: [[IEEE P2976 (XAI)]], [[ISO/IEC 22989:2022]], [[EU AI Act]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:hasPart ai:SHAP))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:hasPart ai:LIME))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:hasPart ai:IntegratedGradients))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:hasPart ai:GradientSaliency))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:hasPart ai:DeepLIFT))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:hasPart ai:GradCAM))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:hasPart ai:SmoothGrad))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:hasPart ai:PermutationImportance))

  ## Dependency Relationships
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:requires ai:MachineLearningDiscipline))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:requires ai:Backpropagation))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:requires ai:LossFunction))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:dependsOn ai:GradientDescent))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:dependsOn ai:NeuralNetwork))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:dependsOn ai:DeepLearning))

  ## Capability Relationships
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:enables ai:Interpretability))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:enables ai:ModelInterpretability))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:enables ai:MechanisticInterpretability))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:enables ai:AISafety))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:enables ai:AlgorithmicTransparency))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:supports ai:FeatureImportance))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:supports ai:FeatureSelection))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:supports ai:RegulatoryCompliance))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:supports ai:BiasDetection))

  ## Implementation Relationships
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:implements ai:ShapleyValue))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:implements ai:GameTheory))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:implements ai:SurrogateModel))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:uses ai:Backpropagation))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:uses ai:AttentionMechanism))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:uses ai:ConvolutionalNeuralNetwork))

  ## Reduction Relationships
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:reducesTo ai:FeatureImportance))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:reducesTo ai:LocalExplanation))
      SubClassOf(ai:FeatureAttribution
        ObjectSomeValuesFrom(ai:reducesTo ai:ScalarAttributionScore))

  ## About
    Feature attribution sits at the interface between statistical machine learning and human-centred AI transparency. The field traces to two independent intellectual traditions. The first is the classical statistical tradition of assigning variance decompositions — familiar from ANOVA and regression coefficient interpretation — to input variables. The second is the computational tradition of computing input gradients of neural outputs, which predates modern explainability by decades and was originally motivated by visualising what convolutional filters detect. Lundberg and Lee's 2017 unification of these lineages via Shapley values — culminating in the SHAP framework — constituted a major theoretical achievement: it demonstrated that a wide class of attribution methods, including earlier approaches such as LIME and DeepLIFT, can be viewed as approximations of the unique additive feature attribution satisfying the Shapley axioms of efficiency, symmetry, dummy, and additivity.

    A critical distinction that remains poorly understood in applied practice is the difference between instance-level attribution and dataset-level feature importance. Attribution produces a signed, magnitude-ranked vector of contributions for one prediction; importance aggregates these (or computes model-structure-based quantities such as tree split gains) across the full training distribution. Both are complementary but answer different questions: attribution asks "why did the model predict X for this instance?" whilst importance asks "which variables does this model rely on most?" A third related concept is attribution consistency — the degree to which the same attribution method produces stable rankings across multiple runs with different random seeds. Research published in 2025 benchmarking attribution methods on UK Biobank genomic data showed that recall, precision, and stability vary substantially across methods, with Integrated Gradients consistently outperforming vanilla gradient saliency but falling behind carefully tuned SHAP on tabular data.

    The rise of large language models since 2022 has created novel demands for feature attribution at the token level. Integrated Gradients applied to transformer classification heads provides token-level attributions that identify which input tokens most drove an output logit. More ambitiously, the emerging discipline of [[Mechanistic Interpretability]], pursued at Anthropic, Google DeepMind, and several UK universities, seeks to decompose LLM computations into interpretable circuits and features using techniques such as [[Sparse Autoencoder]] decomposition of residual stream activations and [[Activation Patching]] to causally isolate computational subgraphs. This represents a qualitative shift from correlation-based attribution to causal mechanistic understanding.

  ## Components / Architecture

    **Gradient-Based Methods**
    - Vanilla gradient saliency: compute ∂f(x)/∂x at the input; fast but can highlight irrelevant high-frequency inputs
    - SmoothGrad (Smilkov et al., 2017): average gradients over Gaussian-perturbed input copies to reduce noise
    - [[Integrated Gradients]] (Sundararajan, Taly, Yan, 2017): accumulate gradients along a straight-line path from a baseline x' to the actual input x; satisfies completeness and sensitivity axioms; path integral: IG_i(x) = (x_i − x'_i) × ∫₀¹ ∂f(x' + α(x−x'))/∂x_i dα
    - Grad-CAM: spatially pool gradient magnitudes over [[Feature Map]] channels in [[Convolutional Neural Network]]s to generate class-discriminative localisation maps
    - [[DeepLIFT]]: propagate difference-from-reference signals layer-by-layer; computes contribution scores by comparing each neuron activation to a reference activation; shown to be equivalent to modified backpropagation

    **Perturbation-Based (Surrogate) Methods**
    - [[LIME]]: locally fit an interpretable linear model to the predictions of the black-box model on perturbed neighbourhood samples; model-agnostic; efficient for tabular, text, and image domains; limited to local linear approximations that can miss nonlinear associations
    - Occlusion sensitivity: systematically mask regions of the input and measure prediction change; intuitive but computationally expensive for high-dimensional inputs
    - Kernel SHAP: the LIME objective with SHAP weighting kernel and appropriate feature subset representation; provably recovers Shapley values

    **Game-Theoretic Methods (Shapley)**
    - [[SHAP]] (SHapley Additive exPlanations): computes the exact or approximate Shapley value for each feature; satisfies efficiency (attributions sum to f(x) − E[f(x)]), symmetry, dummy, and additivity; variants include TreeSHAP (exact, polynomial-time for tree ensembles), DeepSHAP (gradient approximation for neural networks), KernelSHAP (model-agnostic approximation), and LinearSHAP (closed-form for linear models)
    - Permutation Shapley: Monte Carlo approximation of Shapley values by random feature coalition sampling; scales to high-dimensional inputs at the cost of statistical variance

    **Mechanistic Attribution**
    - [[Activation Patching]]: surgically replace a model's intermediate activations with those from a reference run to causally localise which components mediate a behaviour
    - [[Sparse Autoencoder]] decomposition: project residual stream activations into overcomplete sparse dictionaries; individual dictionary features correspond to human-interpretable monosemantic concepts

  ## Use Cases / Major Families

    **Regulatory Compliance and Auditing**
    Under the EU AI Act (enforceable from 2025-2026 for high-risk systems), operators of high-risk AI must provide human-interpretable explanations of system decisions. Feature attribution is the primary technical mechanism enabling this, with SHAP and LIME tooling embedded in compliance platforms such as Fiddler AI, Arize AI, and WhyLabs. The UK's AI Safety Institute has cited attribution-based auditing in its model evaluation framework.

    **Medical Diagnosis and Clinical Decision Support**
    Feature attribution is used to highlight which image regions or clinical variables drove diagnostic model predictions in radiology (chest X-ray pathology detection), pathology (cancer grading), and genomics. The NHS AI Lab has evaluated attribution-quality standards for AI diagnostic tools deployed in clinical pathways, requiring attribution explanations before clinician sign-off.

    **Natural Language Processing and LLMs**
    Token-level integrated gradients explain classification decisions in sentiment analysis, toxicity detection, and document classification. For decoder-only LLMs, attention attribution (noting that attention weights are not true attributions) and gradient-based logit lens approaches both see use.

    **Financial Services and Credit Decisions**
    UK Financial Conduct Authority guidance on model risk management references explainability obligations; feature attribution tools enable banks to explain loan decisions to regulators and customers, satisfying Consumer Duty obligations.

    **Bias Detection and Model Debugging**
    Comparing attribution distributions across demographic subgroups reveals whether a model relies on protected attributes as proxies (e.g., postcode as a proxy for ethnicity in credit models). Attribution-driven debugging identifies spurious correlations captured during training.

    **Computer Vision and Scientific Imaging**
    Grad-CAM and [[Integrated Gradients]] applied to [[Convolutional Neural Network]]s localise the discriminative image regions, supporting quality assurance for medical imaging, satellite analysis, and materials science classification.

  ## Academic Context

    The formal study of feature attribution in neural networks begins with the gradient-based saliency work of Baehrens et al. (2010) and Simonyan et al. (2013), which computed input-space gradients of classification scores. DeepLIFT (Shrikumar et al., 2017) introduced a layer-wise propagation of difference-from-reference signals that avoided gradient saturation. The seminal Integrated Gradients paper by Sundararajan, Taly, and Yan (ICML 2017) provided the first axiomatic treatment of gradient-based attribution, characterising the unique method satisfying completeness and implementation invariance. Concurrently, Ribeiro, Singh, and Guestrin (KDD 2016) proposed LIME as a model-agnostic local surrogate approach. Lundberg and Lee (NeurIPS 2017) unified additive feature attribution methods under the Shapley framework, proving that SHAP values constitute the unique attribution satisfying the four Shapley axioms and that LIME and DeepLIFT are both special cases.

    Subsequent theoretical work addressed shortcomings: Heo et al. (NeurIPS 2019) demonstrated that gradient-based attributions are vulnerable to adversarial manipulation even when the model's predictions are unchanged, questioning their reliability as explanations. Slack et al. (AAAI 2020) showed LIME and SHAP can be fooled by classifiers that behave differently on distribution-shifted perturbed inputs. Arrieta et al. (Information Fusion, 2020) produced a comprehensive taxonomy of XAI methods that situates feature attribution within the broader landscape. Research groups at Edinburgh (Kurt Butler, 2025), Oxford's Future of Humanity Institute, and Imperial College London's Data Science Institute have made significant theoretical contributions to higher-order attribution, topological extensions, and causal attribution.

    The unification of feature attribution, data-centric AI, and mechanistic interpretability has become a major research theme in 2025-2026. An Oxford AIGI paper on automated interpretability-driven model auditing (2026) proposes systematic attribution-based auditing pipelines connecting token-level attributions to circuit-level causal maps as a safety-critical control mechanism.

  ## Current Landscape (2026)

    As of mid-2026, feature attribution has transitioned from a research curiosity to a standard component of production ML systems. Key developments include:

    - **Regulatory mandation**: The EU AI Act requires high-risk AI systems to provide attribution-quality explanations. UK AI regulation under the AI Safety Institute extends similar expectations via voluntary commitments from frontier model developers.
    - **Tooling consolidation**: Captum (Meta/PyTorch), SHAP (Lundberg's open-source library, now version 0.45+), and InterpretML (Microsoft) are the dominant open-source stacks. Commercial platforms including Fiddler AI and Arize AI embed these in enterprise MLOps pipelines with drift-aware attribution monitoring.
    - **LLM-specific attribution**: Integrated gradients applied to transformer classification heads are standard; logit lens and tuned lens provide token-level attribution of intermediate layers. Anthropic's Sparse Autoencoder research (2024) produces feature-level attributions in LLMs that exceed gradient-based methods in human interpretability.
    - **Higher-order attribution**: Kurt Butler (University of Edinburgh, 2025) proposes a general theory of higher-order feature attribution rooted in Integrated Gradients that captures interaction effects between feature pairs and triples, bridging attribution and topological data analysis.
    - **Manifold-constrained attribution**: Work on on-manifold Shapley values via optimal generative flows (arXiv 2026) addresses the fundamental problem that SHAP attributions are computed for feature coalitions that may lie off the data manifold, producing spurious attribution signals.
    - **Genomics benchmark**: A 2025 study benchmarked attribution recall, precision, and stability for deep learning models trained on UK Biobank genotypes, finding substantial variability across methods and highlighting the need for standardised attribution evaluation protocols.

  ## UK Context

    Feature attribution research in the UK is concentrated at several institutions:

    - **University of Edinburgh**: Kurt Butler's work on higher-order attribution (2025) and the Alan Turing Institute's "Doing AI Differently" initiative, co-led by Edinburgh and the AHRC, places interpretive depth — including attribution quality — at the centre of a research agenda for AI systems that engage with cultural complexity.
    - **Oxford University (AIGI)**: The AI Governance and Interpretability group published a research agenda on automated interpretability-driven model auditing and control (January 2026), advocating for attribution pipelines as regulatory control mechanisms for AI systems in high-stakes domains.
    - **Imperial College London**: The Data Science Institute and the Centre for AI Safety have contributed to causal attribution research and adversarial robustness of attribution methods.
    - **NHS AI Lab**: The NHS has established requirements for attribution-quality explanations as part of AI clinical assurance frameworks; diagnostic AI tools require attribution-based justification for regulatory approval.
    - **UK Financial Conduct Authority**: Model explainability requirements under Consumer Duty (effective 2023-2024) and model risk management guidance make feature attribution a compliance necessity for UK financial services AI systems. Lloyds Banking Group, Barclays, and HSBC all deploy SHAP-based attribution in credit and fraud models.
    - **Northern England industrial context**: Sheffield Hallam's AI in Manufacturing programme and Newcastle University's Digital Economy group have piloted attribution tools for quality-control models in steel production and pharmaceutical manufacturing, integrating attribution with human-in-the-loop inspection workflows.

  ## Future Directions (2026-2030)

    - **Causal attribution**: Moving from correlational attribution (which features co-vary with predictions) to causal attribution (which features causally determine predictions), building on causal inference frameworks (Pearl, 2009) and activation patching techniques from mechanistic interpretability.
    - **Unified attribution frameworks**: Convergence of XAI attribution, data-centric AI (which features are most informative to label), and mechanistic interpretability (circuit-level causal understanding) into a single formal framework; this research direction is active at Oxford, Stanford, and several Anthropic researchers.
    - **Attribution under distribution shift**: Methods that remain stable and meaningful when deployed models encounter covariate-shifted inputs, addressing the manifold problem in Shapley computation.
    - **Real-time attribution**: Low-latency attribution for streaming inference, essential for high-frequency financial trading models, autonomous vehicle decision support, and real-time clinical monitoring.
    - **Attribution-guided training**: Using attribution signals during training to steer models away from spurious correlations, integrating attribution into the loss function as a regularisation term.
    - **Multimodal attribution**: Extending attribution to vision-language models where contributions span image regions and text tokens jointly, a challenge for current gradient-based methods that treat modalities independently.
    - **Standardisation**: ISO and IEEE are developing attribution evaluation standards; the IEEE P2976 XAI standard includes provisions for attribution method characterisation. UK BSI participation in these standards will shape domestic procurement requirements.

  ## Benchmarks and Evaluation

    Evaluating feature attribution methods is fundamentally harder than evaluating predictive models because ground-truth attributions are rarely available. Several evaluation paradigms have emerged:

    **Faithfulness metrics**
    - *Sufficiency*: If only the highly-attributed features are retained as input, model performance should be preserved.
    - *Necessity (comprehensiveness)*: Removing the highly-attributed features should maximally degrade model performance.
    - *Pixel-flipping / ROAR (RemOve And Retrain)*: Iteratively remove the most-attributed features and measure the resulting performance drop; retrain the model on the modified data to avoid distribution shift artefacts.
    - *Area Under the Perturbation Curve (AUPC)*: Aggregates sufficiency/necessity across all attribution thresholds into a single scalar metric.

    **Stability and consistency metrics**
    - *Max-Sensitivity*: The maximum change in attribution for the smallest perturbation of the input (Yeh et al., 2019); lower is better.
    - *Infidelity*: Expected squared error between the attribution-predicted prediction change and the actual prediction change under random input perturbations (Yeh et al., 2019).
    - *Rank correlation across seeds*: For stochastic methods (SmoothGrad, Monte Carlo Shapley), the Kendall τ between attribution rankings across multiple runs; the 2025 UK Biobank genomic benchmark reported median Kendall τ of 0.71 for SmoothGrad vs 0.91 for TreeSHAP on tabular data.

    **Localisation metrics (image domain)**
    - *Pointing game accuracy*: Whether the maximally-attributed pixel falls within the ground-truth object bounding box.
    - *IoU of attribution saliency mask with ground-truth segmentation*: Used in COCO-attribution benchmarks for comparing Grad-CAM, Integrated Gradients, and LIME on image classifiers.

    **Human evaluation**
    - *Forward simulation*: Can a human correctly predict the model's output when shown only the attribution explanation?
    - *Trust calibration*: Do attributions increase trust proportionally to model accuracy (i.e., do correct predictions receive trustworthy attributions)?

    Key benchmark datasets include MNIST (simple digit recognition, well-understood ground-truth feature dependencies), COMPAS (recidivism prediction, where attribution of race-correlated features exposes bias), and the UK Biobank genomic height prediction dataset (Benchmarking XAI for genomics, 2025, PMC12680242).

  ## Formal Detail

    **Shapley value formulation**: For a model f and feature set N = {1, …, n}, the Shapley value for feature i is:
      φᵢ(f, x) = Σ_{S ⊆ N\{i}} [|S|!(|N|−|S|−1)!/|N|!] × [f_x(S∪{i}) − f_x(S)]
    where f_x(S) is the model's expected output when only features in S are observed (others marginalised). Computing exact Shapley values requires 2ⁿ model evaluations; TreeSHAP achieves exact computation for tree ensembles in polynomial time O(TLD²) where T is the number of trees, L is the maximum number of leaves, and D is the maximum tree depth.

    **Integrated Gradients path integral**: For neural network f with input x and baseline x':
      IG_i(x) = (x_i − x'_i) × ∫₀¹ [∂f(x' + α(x − x'))/∂x_i] dα
    Approximated by Riemann sum with m steps (typically m=300). Completeness: Σᵢ IG_i(x) = f(x) − f(x').

    **Kernel SHAP as weighted linear regression**: Lundberg and Lee (2017) show that Shapley values can be recovered by solving the weighted least-squares problem:
      min_{φ} Σ_{S ⊆ N} [f_x(S) − φ₀ − Σᵢ∈S φᵢ]² × π_x(S)
    with Shapley kernel weights π_x(S) = (|N|−1) / (C(|N|,|S|) × |S| × (|N|−|S|)).

  ## Research & Literature

    1. Lundberg, S. M., & Lee, S.-I. (2017). A unified approach to interpreting model predictions. *Advances in Neural Information Processing Systems (NeurIPS)*, 30.
    2. Sundararajan, M., Taly, A., & Yan, Q. (2017). Axiomatic attribution for deep networks. *Proceedings of ICML 2017*, PMLR 70:3319–3328.
    3. Ribeiro, M. T., Singh, S., & Guestrin, C. (2016). "Why should I trust you?": Explaining the predictions of any classifier. *KDD 2016*, pp. 1135–1144.
    4. Shrikumar, A., Greenside, P., & Kundaje, A. (2017). Learning important features through propagating activation differences (DeepLIFT). *ICML 2017*, PMLR 70:3145–3153.
    5. Selvaraju, R. R., Cogswell, M., Das, A., Vedantam, R., Parikh, D., & Batra, D. (2017). Grad-CAM: Visual explanations from deep networks via gradient-based localization. *ICCV 2017*, pp. 618–626.
    6. Simonyan, K., Vedaldi, A., & Zisserman, A. (2013). Deep inside convolutional networks: Visualising image classification models and saliency maps. *arXiv:1312.6034*.
    7. Smilkov, D., Thorat, N., Kim, B., Viégas, F., & Wattenberg, M. (2017). SmoothGrad: Removing noise by adding noise. *arXiv:1706.03825*.
    8. Heo, J., Joo, S., & Moon, T. (2019). Fooling neural network interpretations via adversarial model manipulation. *NeurIPS 2019*, pp. 2925–2936.
    9. Slack, D., Hilgard, S., Jia, E., Singh, S., & Lakkaraju, H. (2020). Fooling LIME and SHAP: Adversarial attacks on post hoc explanation methods. *AAAI 2020*, pp. 180–187.
    10. Arrieta, A. B., Díaz-Rodríguez, N., Del Ser, J., et al. (2020). Explainable artificial intelligence (XAI): Concepts, taxonomies, opportunities and challenges toward responsible AI. *Information Fusion*, 58, 82–115.
    11. Baehrens, D., Schroeter, T., Harmeling, S., Kawanabe, M., Hansen, K., & Müller, K.-R. (2010). How to explain individual classification decisions. *Journal of Machine Learning Research*, 11, 1803–1831.
    12. Lundberg, S. M., Erion, G., Chen, H., et al. (2020). From local explanations to global understanding with explainable AI for trees. *Nature Machine Intelligence*, 2, 56–67.
    13. Chen, H., Lundberg, S., & Lee, S.-I. (2020). True to the model or true to the data? *arXiv:2006.16234*.
    14. Yeh, C.-K., Hsieh, C.-Y., Suggala, A., Inouye, D. I., & Ravikumar, P. K. (2019). On the (in)fidelity and sensitivity of explanations. *NeurIPS 2019*, pp. 10967–10978.
    15. Janzing, D., Minorics, L., & Blöbaum, P. (2020). Feature relevance quantification in explainable AI: A causal problem. *AISTATS 2020*, pp. 2907–2916.
    16. Sundararajan, M., & Najmi, A. (2020). The many Shapley values for model explanation. *ICML 2020*, PMLR 119:9269–9278.
    17. Covert, I., Lundberg, S. M., & Lee, S.-I. (2021). Explaining by removing: A unified framework for model explanation. *Journal of Machine Learning Research*, 22(209), 1–90.
    18. Jain, S., & Wallace, B. C. (2019). Attention is not explanation. *NAACL 2019*, pp. 3543–3556.
    19. Wiegreffe, A., & Pinter, Y. (2019). Attention is not not explanation. *EMNLP 2019*, pp. 11–20.
    20. Butler, K. (2025). Higher-order feature attribution: Bridging statistics, explainable AI, and topological signal processing. *arXiv:2510.06165*. University of Edinburgh.
    21. Elhage, N., Nanda, N., Olsson, C., et al. (2021). A mathematical framework for transformer circuits. *Transformer Circuits Thread*, Anthropic.
    22. Conmy, A., Mavor-Parker, A. N., Lynch, A., Heimersheim, S., & Garriga-Alonso, A. (2023). Towards automated circuit discovery for mechanistic interpretability. *NeurIPS 2023*.
    23. Towards Unified Attribution in Explainable AI, Data-Centric AI, and Mechanistic Interpretability. (2025). *arXiv:2501.18887*.
    24. Oxford AIGI. (2026). Automated interpretability-driven model auditing and control: A research agenda. *Oxford University Future of Humanity Institute Technical Report*.
    25. Benchmarking interpretability of deep learning for predictive genomics: Recall, precision, and variability of feature attribution. (2025). *NCBI/PMC12680242*, UK Biobank cohort study.
    26. Axiomatic On-Manifold Shapley via Optimal Generative Flows. (2026). *arXiv:2603.05093*.
    27. Prospector Heads: Generalised Feature Attribution for Large Models and Data. (2024). *NCBI/PMC11213143*.
    28. Danilevsky, M., Qian, K., Aharonov, R., Katsis, Y., Kawas, B., & Sen, P. (2020). A survey of the state of explainable AI for natural language processing. *AACL 2020*.

  ## Key Terminology

    - **Attribution score**: A scalar value assigned to each input feature for a specific prediction, indicating direction (sign) and magnitude of influence.
    - **Baseline / reference input**: An uninformative or neutral input (e.g., zero-vector, blurred image, UNK token) used as the counterfactual from which attribution is measured; choice of baseline critically determines attribution values.
    - **Completeness axiom**: Attribution scores must sum to the difference between the model's output at the input and at the baseline: Σᵢ aᵢ(x) = f(x) − f(x').
    - **Sensitivity axiom**: If the model's output differs at two inputs that differ in only one feature, that feature must receive a non-zero attribution.
    - **Shapley value**: A coalition game-theoretic fair-division solution that assigns each player (feature) their marginal contribution averaged over all possible orderings of the other players (features).
    - **Model-agnostic**: Applicable to any machine learning model without requiring access to model internals; LIME and Kernel SHAP are model-agnostic; Integrated Gradients and Grad-CAM are model-specific (require gradient access).
    - **Local explanation**: Explains a single prediction rather than the model's global behaviour.
    - **Global explanation**: Summarises a model's behaviour across the dataset; aggregated SHAP values constitute one bridge between local and global explanation.
    - **Saliency map**: A spatial heatmap overlaid on an input (image, text) highlighting regions with high attribution magnitude; the canonical output of gradient-based and Grad-CAM attribution applied to CNNs.
    - **Attribution faithfulness**: The degree to which the attribution actually reflects the model's causal decision process, as opposed to correlational artefacts of the explanation method.
    - **Manifold problem**: The issue that Shapley attributions require evaluating the model on feature coalitions that may lie off the data manifold (i.e., inputs the model was never trained on), potentially producing unreliable attributions.

- ### Provenance
  - sources:: https://arxiv.org/abs/1703.01365, https://arxiv.org/abs/1602.04938, https://proceedings.neurips.cc/paper/2017/hash/8a20a8621978632d76c43dfd28b67767-Abstract.html, https://arxiv.org/pdf/2510.06165, https://arxiv.org/pdf/2501.18887, https://aigi.ox.ac.uk/wp-content/uploads/2026/01/Automated_interp_Research_Agenda.pdf, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12680242/, https://arxiv.org/pdf/2603.05093, https://futureagi.com/blog/ai-explainability-tools-techniques-2025/
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm