public:: true

# Bayesian Deep Learning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8acb9606ce3489bec4f345a7e368b1dc8865ecb881aaebceffcdb3a7c552051d",
  "@type": "Page",
  "vc:slug": "bayesian-deep-learning",
  "title": "Bayesian Deep Learning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:linked:bayesian-inference",
      "vc:label": "Bayesian Inference"
    },
    {
      "@id": "urn:visionflow:linked:uncertainty-quantification",
      "vc:label": "Uncertainty Quantification"
    },
    {
      "@id": "urn:visionflow:linked:variational-inference",
      "vc:label": "Variational Inference"
    },
    {
      "@id": "urn:visionflow:linked:probabilistic-inference",
      "vc:label": "Probabilistic Inference"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Bayesian Deep Learning"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bayesian-deep-learning",
  "@type": "Class",
  "label": "Bayesian Deep Learning",
  "definition": "Bayesian deep learning combines neural networks with Bayesian inference to represent uncertainty over model parameters and predictions. It treats network weights as random variables with prior and posterior distributions rather than fixed point estimates, enabling calibrated uncertainty quantification over both model parameters and outputs.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:deep-learning",
      "label": "Deep Learning"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:probabilistic-inference",
        "label": "Probabilistic Inference"
      },
      {
        "@id": "urn:ngm:class:prior-distribution",
        "label": "Prior Distribution"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      },
      {
        "@id": "urn:ngm:class:active-learning",
        "label": "Active Learning"
      },
      {
        "@id": "urn:ngm:class:out-of-distribution-detection",
        "label": "Out-of-Distribution Detection"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:variational-inference",
        "label": "Variational Inference"
      },
      {
        "@id": "urn:ngm:class:markov-chain-monte-carlo",
        "label": "Markov Chain Monte Carlo"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:posterior-approximation",
        "label": "Posterior Approximation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:gaussian-process",
        "label": "Gaussian Process"
      },
      {
        "@id": "urn:ngm:class:model-calibration",
        "label": "Model Calibration"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:probabilistic-deep-learning",
      "label": "Probabilistic Deep Learning"
    },
    {
      "@id": "urn:ngm:class:stochastic-deep-learning",
      "label": "Stochastic Deep Learning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bayesian-deep-learning:503d5ee648c5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8acb9606ce3489bec4f345a7e368b1dc8865ecb881aaebceffcdb3a7c552051d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:linked:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bayesian Inference]]",
      "resolved": "urn:visionflow:linked:bayesian-inference",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Uncertainty Quantification]]",
      "resolved": "urn:visionflow:linked:uncertainty-quantification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Variational Inference]]",
      "resolved": "urn:visionflow:linked:variational-inference",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Probabilistic Inference]]",
      "resolved": "urn:visionflow:linked:probabilistic-inference",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Bayesian deep learning (BDL) is a principled probabilistic framework that marries the representational power of [[Deep Learning]] with the uncertainty-quantification machinery of [[Bayesian Inference]], treating the weights of a [[Neural Network]] as random variables endowed with [[Prior Distribution]] and [[Posterior Distribution]] rather than fixed point estimates. Whereas classical deep learning optimises a single best-fit parameter vector via [[Backpropagation]] and [[Gradient Descent]], BDL maintains a full distribution over weight space, encoding the learner's uncertainty about which parameter settings are consistent with the training data. This posterior over weights propagates through the network to produce a posterior predictive distribution over outputs, so that every prediction carries a statistically meaningful confidence interval that distinguishes [[Aleatoric Uncertainty]] (irreducible noise in the data) from [[Epistemic Uncertainty]] (uncertainty due to limited training data or model misspecification). Because exact posterior inference is computationally intractable for all but the smallest networks, practical BDL relies on approximation strategies: [[Variational Inference]] (particularly the Bayes by Backprop algorithm, which uses the [[Reparameterisation Trick]] to optimise an [[Evidence Lower Bound]]) recasts posterior inference as optimisation over a parametric family; [[Markov Chain Monte Carlo]] methods such as Stochastic Gradient Langevin Dynamics draw approximate posterior samples by injecting calibrated noise into gradient updates; [[Monte Carlo Dropout]] interprets dropout masks at inference time as Bernoulli posterior samples in a deep Gaussian process approximation; [[Laplace Approximation]] fits a Gaussian centred at the maximum a posteriori (MAP) solution using the Hessian of the loss; and [[Deep Ensembles]] train multiple deterministic networks from different random seeds, whose disagreement functions as an implicit Bayesian model average. BDL is foundational to [[Active Learning]] (selecting the most informative data points via posterior entropy), [[Out-of-Distribution Detection]] (flagging inputs where the posterior is flat), [[Model Calibration]], and safety-critical deployment across [[Autonomous Vehicles]], [[Medical AI]], and [[Robotics]]. It connects the representation-learning strengths of [[Convolutional Neural Network]] and [[Transformer Architecture]] with the epistemic rigour of classical [[Probabilistic Graphical Model]], and is increasingly recognised as an essential component of trustworthy and [[Responsible AI]].

- ### Semantic Classification
  - owl-class:: machine-learning:BayesianDeepLearning
  - owl-role:: LearningParadigm
  - owl-inferred:: machine-learning:ProbabilisticModel, machine-learning:UncertaintyAwareSystem
  - belongs-to-domain:: [[Machine Learning Domain]]
  - implemented-in-layer:: [[Algorithmic Layer]]

- ### Relationships
  - is-subclass-of:: [[Deep Learning]], [[Bayesian Inference]], [[Probabilistic Machine Learning]]
  - has-part:: [[Prior Distribution]], [[Posterior Distribution]], [[Likelihood Function]], [[Evidence Lower Bound]], [[Monte Carlo Dropout]], [[Deep Ensembles]], [[Laplace Approximation]]
  - requires:: [[Neural Network]], [[Bayesian Inference]], [[Probabilistic Inference]], [[Prior Distribution]], [[Backpropagation]], [[Gradient Descent]]
  - enables:: [[Uncertainty Quantification]], [[Active Learning]], [[Out-of-Distribution Detection]], [[Model Calibration]], [[Safe AI]], [[Anomaly Detection]], [[Continual Learning]]
  - implements:: [[Posterior Approximation]], [[Variational Inference]], [[Markov Chain Monte Carlo]], [[Evidence Lower Bound]]
  - uses:: [[Variational Inference]], [[Markov Chain Monte Carlo]], [[Monte Carlo Dropout]], [[Reparameterisation Trick]], [[Stochastic Gradient Descent]], [[Laplace Approximation]]
  - supports:: [[Federated Learning]], [[Robotics]], [[Medical AI]], [[Autonomous Vehicles]], [[Scientific Computing]]
  - depends-on:: [[Loss Function]], [[Activation Function]], [[Convolutional Neural Network]], [[Transformer Architecture]]
  - contrasts-with:: [[Maximum Likelihood Estimation]], [[Maximum A Posteriori Estimation]], [[Frequentist Statistics]], [[Dropout Regularisation]]
  - related-to:: [[Gaussian Process]], [[Probabilistic Graphical Model]], [[Normalising Flow]], [[Diffusion Model]], [[Generative Adversarial Network]], [[Variational Autoencoder]], [[Neural Architecture Search]]
  - standardized-by:: [[ISO/IEC 22989:2022]], [[NIST AI RMF]]
  - bridges-to:: [[Causal Inference]], [[Scientific Computing]], [[Continual Learning]], [[Foundation Model]]
  - has-benchmark:: [[CIFAR-10]], [[UCI Regression Benchmarks]], [[WILDS Benchmark]], [[ImageNet]]
  - evaluated-by:: [[Expected Calibration Error]], [[Negative Log-Likelihood]], [[AUROC]], [[Brier Score]]

- ### Content
  ## Compositional Relationships (Components)
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:hasPart ai:PriorDistribution))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:hasPart ai:PosteriorDistribution))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:hasPart ai:LikelihoodFunction))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:hasPart ai:EvidenceLowerBound))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:hasPart ai:MonteCarloDropout))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:hasPart ai:DeepEnsembles))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:hasPart ai:LaplaceApproximation))
  ## Dependency Relationships
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:requires ai:NeuralNetwork))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:requires ai:BayesianInference))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:requires ai:ProbabilisticInference))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:requires ai:Backpropagation))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:requires ai:PriorDistribution))
  ## Capability Relationships
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:enables ai:UncertaintyQuantification))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:enables ai:ActiveLearning))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:enables ai:OutOfDistributionDetection))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:enables ai:ModelCalibration))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:enables ai:SafeAI))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:enables ai:AnomalyDetection))
  ## Implementation Relationships
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:implements ai:PosteriorApproximation))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:implements ai:VariationalInference))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:implements ai:MarkovChainMonteCarlo))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:implements ai:EvidenceLowerBound))
  ## Reduction Relationships
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:reducesTo ai:DeepLearning))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:reducesTo ai:BayesianInference))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:reducesTo ai:MaximumLikelihoodEstimation))
  ## Support Relationships
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:supports ai:FederatedLearning))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:supports ai:Robotics))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:supports ai:MedicalAI))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:supports ai:AutonomousVehicles))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:supports ai:ScientificComputing))
  ## Contrast Relationships
      SubClassOf(ai:BayesianDeepLearning
        ObjectAllValuesFrom(ai:contrastsWith ai:MaximumLikelihoodEstimation))
      SubClassOf(ai:BayesianDeepLearning
        ObjectAllValuesFrom(ai:contrastsWith ai:MaximumAPosterioriEstimation))
      SubClassOf(ai:BayesianDeepLearning
        ObjectAllValuesFrom(ai:contrastsWith ai:DropoutRegularisation))
  ## Uses Relationships
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:uses ai:MonteCarloDropout))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:uses ai:ReparameterisationTrick))
      SubClassOf(ai:BayesianDeepLearning
        ObjectSomeValuesFrom(ai:uses ai:StochasticGradientDescent))
  ## About
    Bayesian deep learning emerged from a long-standing aspiration to combine two of the most powerful paradigms in computational intelligence: the hierarchical representation learning of neural networks, and the principled probabilistic reasoning of [[Bayesian Inference]]. The theoretical foundations trace to the seminal work of David MacKay (1992), who proposed placing Gaussian priors over network weights and using the [[Laplace Approximation]] for posterior inference, and to Radford Neal (1995), who showed that infinite-width neural networks converge in distribution to [[Gaussian Process]] and developed full [[Hamiltonian Monte Carlo]] sampling for neural networks. For a decade these ideas remained computationally prohibitive, but the confluence of [[GPU Compute]], large datasets, and improved [[Variational Inference]] algorithms triggered a renaissance. Alex Graves (2011) introduced practical stochastic variational inference for BNNs at NeurIPS, and Blundell et al. (2015) scaled this into the Bayes by Backprop algorithm, published at ICML, which uses the [[Reparameterisation Trick]] to compute unbiased [[Stochastic Gradient Descent]] estimates of the variational objective. Yarin Gal and Zoubin Ghahramani (2016) provided a crucial simplification: standard dropout applied at inference time — [[Monte Carlo Dropout]] — is equivalent to approximate [[Bayesian Inference]] in a deep [[Gaussian Process]], making [[Uncertainty Quantification]] available in any pre-trained dropout network at near-zero additional cost; Gal's subsequent 2016 Cambridge PhD thesis formalised this connection comprehensively.

    Lakshminarayanan et al. (2017) demonstrated that an ensemble of deterministic networks trained with random seeds and proper scoring rules achieves [[Uncertainty Quantification]] competitive with or superior to more expensive Bayesian methods, despite lacking an explicit prior. This result — that [[Deep Ensembles]] work surprisingly well — prompted substantial theoretical investigation: Pitas and Arbel (2025, arXiv 2501.17917) proved that deep ensembles secretly perform empirical Bayes under mild assumptions, partially reconciling the ensembles vs. BDL debate that had divided the community for nearly a decade. The position paper "Bayesian Deep Learning is Needed in the Age of Large-Scale AI" (Immer et al., 2024, arXiv 2402.00809) argues that as AI systems grow to trillion-parameter scale, calibrated uncertainty becomes existentially important for [[Safe AI]] and alignment, reinvigorating research interest that had waned in the era of large deterministic language models. By 2025-2026, BDL methods are embedded in production [[Medical AI]] systems, [[Autonomous Vehicles]] platforms, and [[Scientific Computing]] pipelines, and underpin regulatory requirements in the EU AI Act (2024/1689) and US FDA adaptive trial guidance (2024).

    The core formal object of BDL is the posterior distribution over weights W given training data D: P(W | D) ∝ P(D | W) × P(W). The [[Prior Distribution]] P(W) encodes structural beliefs about network weights — isotropic Gaussian for general regularisation, log-uniform or Horseshoe for sparsity-inducing priors, or informative priors from similar tasks in [[Transfer Learning]] settings. The [[Likelihood Function]] P(D | W) = ∏_{i} P(y_i | x_i, W) connects weights to observed labels via [[Activation Function]] and [[Loss Function]] (typically cross-entropy for classification, Gaussian for regression). The predictive distribution for a new input x* is the posterior predictive: P(y* | x*, D) = ∫ P(y* | x*, W) P(W | D) dW. This integral is intractable for all but the smallest networks, motivating the family of approximation methods surveyed above. The quality of a BDL system is evaluated not merely on predictive accuracy but on calibration (whether predicted confidences match empirical frequencies, measured by ECE), sharpness (whether uncertainties are not unnecessarily diffuse), [[Out-of-Distribution Detection]] (AUROC against held-out negative sets), and coverage (whether credible intervals contain the truth at the stated rate on UCI benchmarks). Standard evaluation benchmarks include [[CIFAR-10]] and ImageNet for vision, UCI regression datasets for tabular [[Uncertainty Quantification]], and corrupted versions of these datasets (CIFAR-10-C, CIFAR-100-C) created by Hendrycks and Dietterich (2019) for robustness evaluation under [[Distribution Shift]]. The WILDS benchmark (Koh et al., 2021) evaluates worst-group generalisation under natural distribution shifts across medical imaging, satellite imagery, and [[Natural Language Processing]] domains.

    The relationship between BDL and classical [[Regularisation]] is important to understand: maximum a posteriori (MAP) estimation, which returns only the posterior mode argmax_W P(W | D), is equivalent to L2 regularisation (ridge regression) with a Gaussian prior, or L1 regularisation (Lasso) with a Laplacian prior. BDL goes further by maintaining the full posterior rather than collapsing to its mode, thereby preserving [[Epistemic Uncertainty]] information that MAP throws away. This distinction matters practically: MAP-trained networks are systematically overconfident, assigning near-certainty to predictions even on inputs far from the training distribution, whereas BDL systems maintain wide posteriors on unfamiliar inputs. The [[Model Calibration]] literature (Guo et al., 2017; Ovadia et al., 2019) has extensively documented this overconfidence failure of [[Deep Learning]], particularly after [[Batch Normalisation]] and advanced optimisers like [[Adam Optimiser]] were introduced, establishing BDL as the theoretically principled remedy.

    A particularly important practical development is the connection between BDL and [[Neural Architecture Search]] (NAS) via Bayesian optimisation. Treating the architecture as a discrete hyperparameter and the weights as continuous parameters, [[Bayesian Optimisation]] with Gaussian process surrogates or ensemble models can efficiently search the architecture space, reducing the thousands of GPU-hours required by standard NAS methods to tens. This BDL-NAS synergy is actively deployed at major research laboratories for discovering architectures for [[Computer Vision]], [[Natural Language Processing]], and [[Reinforcement Learning]] tasks.

  ## Components / Architecture
    - **Prior Distribution** — encodes beliefs about [[Neural Network]] weights before seeing data; common choices include isotropic Gaussian p(W) = N(0, σ²I) (equivalent to L2 regularisation at the MAP), log-uniform (scale-mixture) priors for sparsity (related to [[Dropout Regularisation]]), and Horseshoe priors for aggressive feature selection; informative priors from pre-trained models enable efficient [[Transfer Learning]] in Bayesian settings.
    - **Likelihood Function** — p(D | W) links weights to observed labels through the network forward pass; for classification, the categorical likelihood with softmax [[Activation Function]]; for regression, a Gaussian or Student-t likelihood with learnable aleatoric noise variance σ²; for structured prediction, a CRF likelihood combined with BDL features.
    - **Posterior Approximation** — the central computational challenge; the exact posterior is intractable so one of several approximate inference algorithms is used:
      - *Variational Inference (Bayes by Backprop)* — approximates p(W | D) with a parametric family q(W; φ) by maximising the [[Evidence Lower Bound]] ELBO = E_q[log p(D|W)] − KL[q(W;φ) || p(W)]; uses the [[Reparameterisation Trick]] for unbiased gradient estimates via the local reparameterisation of Kingma et al. (2015); implemented in Pyro, TensorFlow Probability, and the pytorch-bayesian-nn library.
      - *Monte Carlo Dropout (MC-Dropout)* — Gal and Ghahramani (2016) showed that applying dropout masks at inference time and averaging T stochastic forward passes approximates the posterior predictive; requires no architectural change, making it the most widely deployed BDL method in practice; used in production [[Medical AI]] systems by Google Health and DeepMind.
      - *Deep Ensembles* — trains M independent [[Neural Network]] from different random initialisations using adversarial training or random-prior functions (Osband et al., 2018); ensemble disagreement proxies [[Epistemic Uncertainty]]; shown in 2025 analysis (Pitas & Arbel, arXiv 2501.17917) to secretly perform empirical Bayes; 5 ensemble members provide 90% of the uncertainty benefit; state-of-the-art under distribution shift.
      - *Stochastic Gradient Langevin Dynamics (SGLD)* — Welling and Teh (2011) add calibrated Gaussian noise to [[Stochastic Gradient Descent]] updates: Δθ = (ε/2)(∇ log p(θ) + ∇ log p(D|θ)) + η, η ~ N(0,ε); asymptotically samples from the posterior; variants include SGHMC (Chen et al., 2014) and SWAG (Maddox et al., 2019) which fits a Gaussian to the SGD trajectory.
      - *Laplace Approximation* — fits a Gaussian N(θ_MAP, Σ) centred at the MAP solution using the Hessian (or Kronecker-factored K-FAC Hessian) of the negative log-posterior; the `laplace-torch` library (Daxberger et al., 2021) makes last-layer [[Laplace Approximation]] practical for large [[Convolutional Neural Network]] and [[Transformer Architecture]] networks; competitive with Deep Ensembles at a fraction of the cost.
      - *Subnetwork Inference* (Daxberger et al., 2021) — identifies a sparse subnetwork (bottom layers at MAP, last layer Bayesian) whose posterior is tractable; reduces memory by 10-100x while preserving [[Uncertainty Quantification]] expressiveness; an emerging standard for deploying BDL in [[Federated Learning]] and edge settings.
      - *Normalising Flow Posterior* — uses expressive [[Normalising Flow]] to model the weight posterior, going beyond mean-field Gaussian; captures complex multi-modal posteriors at higher computational cost; connected to [[Diffusion Model]] methods for posterior sampling.
    - **Posterior Predictive Distribution** — obtained by Monte Carlo integration over the posterior; the mean gives the point prediction; the variance decomposes into aleatoric σ²_aleatoric (from [[Likelihood Function]] noise parameter) and epistemic σ²_epistemic (from posterior weight variance) components.
    - **Calibration Layer** — optional post-hoc recalibration using temperature scaling (divides logits by T > 1), Platt scaling (learned logistic transform), or isotonic regression applied to the posterior predictive; Guo et al. (2017) showed [[Convolutional Neural Network]] trained with [[Batch Normalisation]] are severely miscalibrated and benefit substantially from temperature scaling even without full BDL.

  ## Use Cases / Major Families

    ### Autonomous Driving and Safety-Critical Perception
    Autonomous vehicle perception systems face a fundamental reliability challenge: they must communicate not just what they perceive but how confident they are in that perception, so that downstream planning modules can act appropriately when sensors are degraded or scenarios are novel. [[Monte Carlo Dropout]] and [[Deep Ensembles]] are deployed in production systems to produce uncertainty-annotated object detection, semantic segmentation, and lane-estimation outputs. Waymo's research publications document the use of probabilistic prediction modules; Mobileye's EyeQ chips are designed for parallel inference enabling ensemble averaging at 30fps. The Bayesian Driver Agent Model (MDPI Sensors, 2021) encodes prior road knowledge from HERE maps alongside real-time sensor data in a Bayesian filtering framework. High-uncertainty detections automatically trigger conservative fallback manoeuvres, reduced speed, or driver handover, directly addressing the safety requirements of ISO 26262 (automotive functional safety) and SOTIF (Safety of the Intended Functionality). Research from 2024 using physics-guided BNNs (PMC article 10825337) demonstrates 14% improvement in uncertainty calibration for trajectory prediction under adverse weather, which is exactly the [[Out-of-Distribution Detection]] scenario where classical deep learning fails silently.

    ### Medical Imaging and Clinical Decision Support
    The single highest-impact application domain for BDL is medicine, where the cost of overconfident predictions is measured in patient harm. Bayesian convolutional segmentation models for MRI brain tumour delineation (glioblastoma GTV/CTV contours) produce voxel-wise uncertainty maps that clinical physicists use to identify regions where manual review is needed before radiation treatment planning. The amygdala subnuclei segmentation work (arXiv 1902.07289) demonstrated that [[Bayesian Deep Learning]] uncertainty maps correctly highlighted image regions with lower tissue contrast where inter-expert disagreement was highest — a form of automatic quality control. Diabetic retinopathy grading systems at Google Health and Moorfields Eye Hospital deploy MC-Dropout to flag images with high epistemic uncertainty for review by ophthalmologists, rather than issuing confident but wrong automated grades. A 2024 PMC study on BDL for image classification (10825337) showed that ranking-based Bayesian ensemble approaches achieved better ECE and Brier scores than point-estimate baselines across 12 medical imaging datasets. The US FDA's 2024 adaptive trial guidance explicitly references Bayesian posterior probability updating for interim analyses, validating the regulatory acceptability of Bayesian uncertainty quantification in medical AI.

    ### Scientific Machine Learning and Physics-Informed BDL
    Physics-guided BNNs combine the inductive biases of physical laws with the data-driven flexibility of deep learning, while BDL uncertainty quantification correctly reflects the contribution of measurement noise (aleatoric) and model inadequacy (epistemic). Applications include: surrogate models for computational fluid dynamics simulations (replacing expensive finite-element solvers with uncertainty-aware neural emulators); molecular dynamics force fields for materials science where BDL uncertainty flags extrapolation beyond training configurations (relevant to battery design, drug discovery); quantum chemistry property prediction where uncertainty guides active selection of new DFT calculations to run. BayesFlow (Radev et al., 2022) provides a [[Simulation-Based Inference]] framework for scientific models where the likelihood is intractable, using conditional neural density estimators amortised over many simulations. A 2025 MDPI paper on BNNs for solute transport in porous media demonstrates that BDL correctly quantifies the parametric uncertainty in subsurface flow predictions, outperforming [[Monte Carlo]] ensemble approaches based on Latin hypercube sampling.

    ### Active Learning and Annotation Efficiency
    [[Active Learning]] with BDL uncertainty is one of the most practically impactful applications: rather than labelling a large random dataset, BDL systems select the most informative unlabelled data points to annotate by querying inputs with highest [[Epistemic Uncertainty]] (BALD criterion — Bayesian Active Learning by Disagreement, Houlsby et al., 2011). In medical imaging annotation, where expert labelling costs hundreds of dollars per image, BALD-based active learning with MC-Dropout achieves 70-90% of the accuracy of full-corpus training with only 10-20% of the labels. The same principle applies to natural language annotation for information extraction, legal document classification, and scientific literature curation. Batch-mode active learning using BDL (BatchBALD; Kirsch et al., 2019) jointly selects diverse, informative batches rather than greedy single samples, addressing the correlation structure of deep feature spaces.

    ### Out-of-Distribution Detection and Safe Deployment
    A fundamental requirement for deploying [[Deep Learning]] systems in the real world is detecting when an input lies outside the training distribution — so the system can abstain, escalate, or apply a more conservative decision policy. Inputs far from the training manifold produce flat (high-entropy) [[Posterior Distribution]] in BDL, with high [[Epistemic Uncertainty]] providing a natural OOD detection signal. Unlike softmax confidence, which remains high even for random inputs in [[Convolutional Neural Network]] (Guo et al., 2017 calibration failure), BDL epistemic uncertainty correctly decreases confidence for novel inputs. This is particularly valuable for: industrial inspection (flagging never-seen-before defect types rather than misclassifying them); autonomous driving (detecting unusual weather, construction zones, or novel object classes); and medical AI (flagging patient scans with image acquisition artefacts). The Ovadia et al. (2019) NeurIPS benchmark established that [[Deep Ensembles]] achieve the best OOD detection across CIFAR-10-C corruption types, with MC-Dropout competitive at lower computational cost.

    ### Federated Learning with Bayesian Aggregation
    [[Federated Learning]] distributes training across edge devices without sharing raw data, but standard FedAvg aggregation discards uncertainty information and is vulnerable to data heterogeneity. Bayesian federated learning maintains posterior distributions locally and aggregates them in a principled way: Probabilistic Federated Neural Matching (pFedMe) uses variational posteriors to personalise models per client; Federated Bayesian learning (Yurochkin et al., 2019) matches neurons across clients before averaging, based on their posterior similarity; and BDL uncertainty is used at the server to detect anomalous client updates (potential model poisoning attacks) via posterior surprise. These approaches are directly applicable to healthcare federations (NHS hospital networks) where patient data cannot leave individual trusts.

    ### Hyperparameter Optimisation via Bayesian Optimisation
    [[Bayesian Optimisation]] (BO) treats hyperparameter tuning as a black-box optimisation problem: a surrogate model (typically a [[Gaussian Process]] over the hyperparameter space) is fitted to observed performance evaluations, and an acquisition function (Expected Improvement, Upper Confidence Bound, Thompson Sampling) selects the next evaluation point to maximise information gain. This loop achieves the same final performance as random or grid search in 5-20x fewer evaluations, making it the standard approach for tuning [[Deep Learning]] systems. BoTorch (Balandat et al., 2020, Meta FAIR) provides a PyTorch-based BO library with GPU acceleration and batch acquisition functions; Optuna v4.4 (2024) added Gaussian process multi-objective BO; Google Vizier (2017) deploys BO at scale for Google's internal ML systems. A 2024 benchmark reported 40% reduction in total LLM training time for cloud setups using Optuna Bayesian hyperparameter search (MLPerf 2024).

    ### Natural Language Processing and Bayesian LLMs
    Bayesian methods have a long history in [[Natural Language Processing]]: Latent Dirichlet Allocation (Blei et al., 2003) remains one of the most widely deployed probabilistic models; Bayesian word embeddings (Vilnis & McCallum, 2015) represent words as Gaussian distributions rather than point vectors, enabling uncertainty-aware similarity computation. With the rise of [[Transformer Architecture]], Bayesian approaches to [[Large Language Models]] address calibration and hallucination: MC-Dropout applied to GPT-2 level models produces uncertainty estimates for generated text; ensemble-based uncertainty correlates with factual error rates. The Multi-Task Bayesian In-Context Learning paper (arXiv 2606.20538, June 2026) demonstrates that maintaining a posterior over task identity and exploiting Bayesian updating during few-shot inference achieves higher accuracy than standard in-context learning, showing the relevance of BDL to the frontier of [[Foundation Model]] research.

  ## Academic Context
    Bayesian deep learning sits at the intersection of the [[Bayesian Inference]] tradition (pioneered by Jeffreys, de Finetti, Savage, and Lindley) and the [[Neural Network]] tradition (Rosenblatt, Rumelhart, Hinton). The intellectual lineage is rich and spans six decades:

    The foundational period (1992-2000) established the theoretical possibility of BDL. David MacKay's 1992 Caltech doctoral thesis (supervised by John Hopfield) introduced BNNs with Laplace approximation, proposed the Occam's Razor model selection principle via marginal likelihood, and connected neural networks to [[Gaussian Process]] through the kernel interpretation. Radford Neal's 1995 Toronto doctoral thesis (supervised by Geoffrey Hinton) proved analytically that infinite-width single-hidden-layer neural networks converge in distribution to [[Gaussian Process]] as the number of hidden units grows — a result that directly inspired the Neural Tangent Kernel (NTK) theory of 2019 — and developed full [[Hamiltonian Monte Carlo]] posterior sampling for BNNs, showing in principle that exact Bayesian inference was possible at small network scales.

    The scalability era (2011-2017) overcame computational barriers. Alex Graves' 2011 NeurIPS paper introduced practical stochastic variational inference for BNNs using mean-field Gaussian posteriors, showing that [[Backpropagation]]-like algorithms could be derived for the ELBO objective. Kingma and Welling's 2014 ICLR paper "Auto-Encoding Variational Bayes" provided the [[Reparameterisation Trick]] for differentiating through stochastic sampling operations, which became the universal gradient estimator for BDL variational methods. Blundell, Cornebise, Kavukcuoglu, and Wierstra's 2015 ICML paper "Weight Uncertainty in Neural Networks" (Bayes by Backprop) combined Graves' ideas with improved gradient estimators and scale-mixture priors, establishing the standard variational BNN baseline. Gal and Ghahramani's 2016 ICML paper "Dropout as a Bayesian Approximation" was transformative: by proving that standard [[Dropout Regularisation]] at inference corresponds to approximate [[Bayesian Inference]] in a deep [[Gaussian Process]], they made BDL uncertainty estimates available in any existing dropout network at zero additional training cost, leading to an explosion of BDL applications. Lakshminarayanan, Pritzel, and Blundell's 2017 NeurIPS paper "Simple and Scalable Predictive Uncertainty Estimation using Deep Ensembles" challenged the necessity of explicit Bayesian priors, showing that ensemble disagreement achieved competitive or superior calibration.

    The consolidation era (2018-2023) systematised and generalised BDL. Welling and Teh's 2011 ICML SGLD paper was retroactively recognised as opening the MCMC-via-SGD paradigm; variants SGHMC (Chen et al., 2014), SGLD with momentum, and SWAG (Maddox et al., 2019) made posterior sampling practical for [[Convolutional Neural Network]] scale models. Ritter, Botev, and Barber's 2018 ICLR paper "A Scalable Laplace Approximation for Neural Networks" used Kronecker-factored Fisher information to scale the [[Laplace Approximation]] to ImageNet-scale networks. Daxberger et al.'s 2021 NeurIPS "Laplace Redux" paper systematically compared Laplace variants, finding that last-layer Laplace matches ensemble performance at 10x lower cost — a landmark practical result. Wilson and Izmailov's 2020 NeurIPS paper "Bayesian Deep Learning and a Probabilistic Perspective of Generalisation" argued that BDL with posterior marginalisation explains the benign overfitting of large neural networks (why [[Stochastic Gradient Descent]] finds flat minima that generalise well), connecting [[Loss Landscape]] theory to Bayesian model averaging. The 2023 Mukhoti et al. arXiv 2309.16314 "Primer on Bayesian Neural Networks" provides a comprehensive review of the debates around prior choice, posterior quality, and computational cost.

    The current era (2024-2026) addresses large-scale AI integration. Immer et al.'s 2024 position paper (arXiv 2402.00809) argues the case for BDL at [[Foundation Model]] scale. Function-space MCMC (Wu et al., ICML 2024) lifts BNN inference to [[Gaussian Process]] function space for better posterior geometry. HybridFlow (arXiv 2510.05054, 2025) trains a single model that simultaneously quantifies aleatoric and epistemic uncertainty without requiring separate model components. Bayesian Topological CNNs (arXiv 2510.11704, 2025) combine persistent homology priors with Bayesian neural architectures for topology-aware uncertainty. Stochastic weight sharing for BNNs (AISTATS 2025) enables parameter-efficient BDL for large [[Transformer Architecture]]. The empirical Bayes interpretation of [[Deep Ensembles]] (Pitas & Arbel, arXiv 2501.17917, 2025) provides theoretical grounding for the most practically successful BDL method.

    The academic community is served by several annual venues: the workshop on Bayesian Deep Learning at NeurIPS, the AABI (Advances in Approximate Bayesian Inference) workshop, the Uncertainty in Artificial Intelligence (UAI) conference (AAAI and ACM sponsored), and dedicated sessions at ICML and ICLR. The Alan Turing Institute (London) and the Max Planck Institute for Intelligent Systems (Tübingen) are the two most active institutional hubs for BDL research; Cambridge, UCL, Oxford, and Imperial College London are the primary UK academic contributors.

  ## Current Landscape (2026)
    By mid-2026, Bayesian deep learning has transitioned from a predominantly academic pursuit to a standard component of production ML pipelines in safety-critical domains. The landscape is characterised by three parallel developments: regulatory pull, computational accessibility, and theoretical consolidation.

    **Regulatory pull**: ISO/IEC 22989:2022 (AI Concepts and Terminology) explicitly references [[Uncertainty Quantification]] as an AI quality attribute; the EU AI Act (Regulation (EU) 2024/1689) mandates that high-risk AI systems (Class A in autonomous systems, Class B in medical devices) document predictive reliability and calibration, which BDL methods directly address via ECE and NLL reporting. The US FDA issued adaptive trial guidance in January 2024 formally accepting Bayesian posterior probability methods for rare disease and oncology trial designs, creating regulatory precedent that accelerates medical AI adoption. The UK Medicines and Healthcare Products Regulatory Agency (MHRA) AI roadmap (2024) references calibrated uncertainty as a prerequisite for AI as a Medical Device (AIaMD) approval.

    **Computational accessibility**: PyTorch 2.4 (2024) introduced `torch.nn.BayesianLinear` and `torch.uncertainty` modules providing standardised BDL layers; Hugging Face pipelines now expose calibrated confidence scores via uncertainty-aware sampling in generation and classification pipelines; TensorFlow Probability v0.24 (2025) added improved Laplace and Flipout layers compatible with Keras 3; the `laplace-torch` library (Daxberger et al.) has 3,000+ GitHub stars and is used in production systems at Bosch Research and Siemens Technology. JAX-based NumPyro achieves 11x speedup over CPU Stan for HMC, enabling posterior sampling over moderately large [[Convolutional Neural Network]] in minutes rather than days. SWAG (Stochastic Weight Averaging-Gaussian) provides effectively free uncertainty estimates by repurposing the multi-checkpoint averaging of standard [[Stochastic Gradient Descent]] training, with no additional training epochs required.

    **Theoretical consolidation**: The 2025 empirical Bayes result (Pitas & Arbel, arXiv 2501.17917) proved that deep ensembles secretly perform empirical Bayes under mild regularity assumptions, reconciling the decade-long debate between explicit Bayesian methods and ensemble heuristics. HybridFlow (arXiv 2510.05054, October 2025) introduced a single-model architecture that simultaneously estimates aleatoric and epistemic uncertainty through a novel hybrid normalising flow-ensemble approach, outperforming separate aleatoric/epistemic decompositions on CIFAR-10-C benchmarks. Bayesian Topological CNNs (arXiv 2510.11704, October 2025) demonstrate that persistent homology can serve as a prior structure, enabling topology-aware uncertainty quantification for medical image segmentation. Function-space MCMC (Wu et al., ICML 2024) provides a theoretically cleaner alternative to weight-space MCMC for BNNs, avoiding the weight-space pathologies (symmetries, volume effects) that hamper standard HMC.

    **Industrial deployment snapshot (2026)**:
    - Google DeepMind's medical imaging systems use ensemble-based BDL for retinal disease screening, deployed via NHS partnership with Moorfields Eye Hospital
    - Bosch Research uses last-layer Laplace approximation in automotive perception systems for production-grade [[Uncertainty Quantification]] in [[Autonomous Vehicles]]
    - Rolls-Royce (Derby) applies physics-guided BNNs to jet engine prognostics, predicting remaining useful life with calibrated uncertainty bounds
    - ARM Research (Cambridge) publishes on efficient BDL for edge hardware, targeting sub-milliwatt uncertainty inference for [[Internet of Things]] sensors
    - NHS England's AI Lab funds uncertainty-aware diagnostic AI via the National AI Strategy, requiring calibration evidence for clinical deployment approval

  ## UK Context
    The UK is one of the world's two primary academic centres for Bayesian deep learning (alongside Germany's Max Planck Institute for Intelligent Systems in Tübingen), with a research culture shaped by decades of investment in probabilistic machine learning at Cambridge, UCL, Oxford, Edinburgh, and Imperial College London.

    **University of Cambridge** — Cambridge's Machine Learning Group (MLG) is the single most influential source of BDL theory: Zoubin Ghahramani (MLG head until 2016, now Google DeepMind Chief Scientist) co-invented the Gaussian Process Latent Variable Model (GP-LVM), the Infinite Gaussian Mixture Model, and supervised Yarin Gal's landmark MC-Dropout thesis; Carl Rasmussen co-authored the definitive [[Gaussian Process]] reference ("Gaussian Processes for Machine Learning", MIT Press, 2006) and the PILCO model-based RL system. The Department of Computer Science and Technology offers a dedicated "Machine Learning and Bayesian Inference" course (2024-25 academic year) covering variational inference, MCMC, and [[Bayesian Deep Learning]]. The Engineering Department's Computational and Biological Learning (CBL) group continues active BDL research. Cambridge is also home to the Accelerate Programme for Scientific Discovery, which funds BDL applications in molecular biology, materials science, and climate modelling.

    **University College London (UCL)** — UCL Centre for Inverse Problems holds concurrent EPSRC grants on "Robust Foundations for Bayesian Inference" (2024-25) and "Bayesian Robustness in Filtering Algorithms" (Alan Turing Institute, 2024-25); Prof. Benjamin Guedj (UCL/ATI/INRIA) leads post-Bayesian and PAC-Bayes research; Dr. Harita Dellaporta contributes to likelihood-free inference and approximate Bayesian computation. The Alan Turing Institute (ATI), located in the British Library adjacent to UCL, funds a flagship probabilistic AI programme and the "Data-Centric Engineering" initiative applying Bayesian [[Structural Health Monitoring]] to UK civil infrastructure via BDL surrogate models. UCL's Medical Physics department applies BDL to radiotherapy dose planning and PET reconstruction.

    **University of Oxford** — teaches Bayesian Statistical Probabilistic Programming as a core course (2024-25); the Oxford Applied and Theoretical Machine Learning Group contributes to variational inference; Frank Wood's former group developed the Anglican and Probabilistic C probabilistic programming languages, influential in BDL tooling; Yee Whye Teh (Oxford/DeepMind) is a key contributor to Bayesian non-parametrics and scalable approximate inference.

    **Imperial College London** — the Bayesian Methods and Optimisation group (Data Science Institute) actively accelerates MCMC and SMC (Sequential Monte Carlo) inference via FPGAs and GPUs, relevant to BDL deployment on specialised hardware; the Machine Learning group (Department of Computing) publishes on BDL for engineering systems, material property prediction, and fluid dynamics surrogates; the EPSRC-funded project "Hardware-Aware Sparsity Search" (HASS, 2024) targets sparse Laplace approximations implementable on embedded AI accelerators.

    **University of Edinburgh** — the School of Informatics contributes to probabilistic programming language research (the Edinburgh team's work on effect handlers in probabilistic programs underlies NumPyro); Heriot-Watt University published on Bayesian inverse problems with deep generative priors (2025, PMC article); the Edinburgh Centre for Robotics applies Bayesian filtering and [[Bayesian Deep Learning]] to mobile robot navigation and manipulation.

    **UK Industrial Ecosystem** — the Alan Turing Institute's BridgeAI programme (2024-2026) specifically funds [[Uncertainty Quantification]] adoption for UK SMEs, providing technical assistance with BDL deployment for manufacturing, retail, and agriculture; Rolls-Royce (Derby) uses physics-informed BNNs for jet engine component prognostics, quantifying uncertainty in remaining-useful-life predictions to optimise maintenance scheduling (partnership with University of Nottingham); ARM Research (Cambridge) publishes on efficient Bayesian inference for edge hardware, targeting sub-milliwatt uncertainty at IoT scale; Genomics England applies BDL uncertainty to variant pathogenicity classification in the NHS Genomics Programme, with uncertain variants flagged for expert review; the National Physical Laboratory (Teddington) uses Bayesian calibration for measurement science, providing metrological uncertainty quantification for AI-driven measurement instruments.

  ## Future Directions (2026-2030)

    The trajectory of Bayesian deep learning over the coming four years is shaped by four converging forces: the scaling of AI systems to trillion parameters, the regulatory demand for calibrated AI, the proliferation of AI into safety-critical physical systems, and the maturation of hardware for efficient probabilistic inference.

    **Scalable posterior inference for foundation models** is the central research challenge: extending BDL from networks of millions of parameters to billion- and trillion-parameter [[Foundation Model]] and [[Large Language Models]]. Current approaches include: low-rank Laplace approximations targeting only a subspace of the parameter space (projected BNNs; Kristiadi et al., 2022); function-space methods that bypass weight-space pathologies entirely (Wu et al., 2024); SWAG applied to AdamW-trained [[Transformer Architecture]] (currently limited to GPT-2 scale); and LoRA-Bayesian (Efficient LoRA-based Bayesian hyperparameter search, arXiv 2602.11171, 2026) which applies Bayesian inference only over low-rank adapter parameters. Solving this problem would enable calibrated uncertainty in GPT-4/Claude-scale models, addressing the hallucination problem from first principles rather than via heuristic filters.

    **Hallucination detection in LLMs via BDL** is an immediate near-term application: if LLM weight posteriors can be approximated efficiently, then high posterior predictive entropy over token sequences would signal uncertain or unreliable generation, enabling automatic self-censorship or escalation. Current proxy methods (multi-sample temperature sampling, semantic similarity clustering of outputs) are informal ensemble approximations; formal BDL would ground these in posterior probability theory and provide calibrated confidence thresholds.

    **Neurosymbolic BDL** combines [[Deep Learning]] likelihood functions with symbolic [[Knowledge Representation]] priors encoded as probabilistic logic programs or [[Probabilistic Graphical Model]]; systems such as DeepProbLog and Scallop already demonstrate this integration at small scale. Scaling to large [[Neural Network]] with expressive symbolic priors would enable: scientific hypothesis testing with neural likelihoods and structured priors from domain knowledge; legal AI with probabilistic rule sets as priors; and medical diagnostic AI where clinical guidelines encode prior expectations about symptom-disease relationships.

    **Continual Bayesian Learning** addresses [[Catastrophic Forgetting]] — the failure of [[Deep Learning]] to retain previous knowledge when fine-tuned on new data — by using the posterior from previous tasks as a prior for new tasks (online Bayesian updating). Elastic Weight Consolidation (EWC; Kirkpatrick et al., 2017) is an approximation of this principle using the diagonal Fisher information as a Laplace-like constraint; full BDL continual learning with expressive posteriors would naturally prevent forgetting without explicit memory replay, foundational for lifelong learning agents in [[Robotics]] and personalised AI assistants.

    **Bayesian Reinforcement Learning for safe exploration** uses the [[Epistemic Uncertainty]] from BDL posteriors to implement Thompson Sampling — selecting actions according to their posterior probability of being optimal — and Bayesian model-based RL with uncertainty-aware planning. This enables agents to explore efficiently (visiting high-uncertainty regions) while remaining safe (avoiding actions whose uncertainty exceeds acceptable risk thresholds). Applications include drug discovery (safe wet-lab experiment selection), industrial process control, and autonomous navigation in novel environments.

    **Edge BDL** addresses the deployment of uncertainty-aware AI on resource-constrained hardware: ARM Research (Cambridge), Intel Labs, and neuromorphic computing groups are investigating FPGA and Loihi/TrueNorth implementations of approximate Bayesian inference that achieve milliwatt-level power consumption. Key techniques include: binarised or ternary BNNs (quantised weight posteriors); hardware-aware sparse Laplace approximations (subnetwork inference); and spiking neural network implementations of MCMC sampling. This research direction aligns with the EU Green Deal's requirements for energy-efficient AI and the UK government's Net Zero Technology Centre AI programme.

    **Causal BDL** merges structural causal models (Pearl's do-calculus) with [[Bayesian Deep Learning]] posterior inference for: counterfactual prediction ("what would this patient's outcome have been under treatment A instead of treatment B?"); heterogeneous treatment effect estimation from observational data; and causal feature attribution in [[Computer Vision]] (identifying which parts of an image causally determine the prediction, rather than merely correlating with it). This direction is particularly important for [[Responsible AI]] and explainability requirements under the EU AI Act's transparency provisions.

  ## Theoretical Foundations — Generative Process View
    To understand BDL from the generative process perspective, consider a classification task with inputs x ∈ R^d and labels y ∈ {1,...,C}. The generative model specifies:
    - **Prior over weights**: p(W) = N(0, σ_p² I) for each weight parameter; encodes the belief that weights are small and approximately exchangeable before seeing data.
    - **Generative likelihood**: for each training example (x_i, y_i): P(y_i | x_i, W) = Categorical(softmax(f_W(x_i))), where f_W is the [[Neural Network]] forward pass with weights W.
    - **Joint distribution**: P(D, W) = P(W) × ∏_{i=1}^n P(y_i | x_i, W).
    - **Posterior**: P(W | D) ∝ P(D | W) × P(W) = [∏_{i=1}^n P(y_i | x_i, W)] × P(W); this is the fundamental BDL inference target.

    The posterior encodes all information about which weight configurations are compatible with the training data. For a 1000-parameter network, the posterior is a distribution over R^{1000}; for a modern [[Transformer Architecture]] with 7 billion parameters, it is a distribution over R^{7×10⁹} — a space so vast that only approximate characterisation is computationally feasible.

    The posterior predictive for a test input x*:
    P(y* | x*, D) = ∫ P(y* | x*, W) P(W | D) dW ≈ (1/T) Σ_{t=1}^T P(y* | x*, W^(t)), W^(t) ~ P(W | D)

    This Monte Carlo approximation is the fundamental prediction algorithm for all practical BDL methods; the difference between methods lies in how they approximate the posterior samples W^(t):
    - **Variational inference (VI)**: W^(t) ~ q(W; φ*) where q is the optimised variational approximation.
    - **MC-Dropout**: W^(t) are Bernoulli-masked versions of the MAP weight vector.
    - **Deep Ensembles**: W^(t) are the t-th ensemble member's weights (MAP estimates from different random initialisations).
    - **SGLD**: W^(t) are iterates of the Langevin dynamics chain, asymptotically distributed as P(W | D).
    - **Laplace Approximation**: W^(t) ~ N(W_MAP, Σ_Laplace).

    Each method makes a different approximation to P(W | D), with different computational costs and accuracy trade-offs. The key insight is that all practical BDL methods are approximations to the same ideal Bayesian posterior, enabling principled comparison using calibration metrics and coverage statistics that measure approximation quality.

    **The asymptotic Bayesian Neural Network as Gaussian Process**: Neal (1995) proved that for a single-hidden-layer network with n hidden units, as n → ∞ (with weights scaled by 1/√n), the output f_W(x) converges in distribution to a Gaussian process GP(0, K) with kernel K(x, x') = E_{W ~ p(W)}[f_W(x) f_W(x')]. This NNGP (Neural Network Gaussian Process) correspondence was empirically confirmed and extended to deep networks by Lee et al. (2018) and Novak et al. (2018), and forms the theoretical bedrock connecting BDL to [[Gaussian Process]] regression. In practice, finite-width networks deviate significantly from the NNGP limit, and BDL trained by gradient descent can capture features that GP methods cannot.

  ## Connections to the Broader Ontology
    Bayesian deep learning occupies a pivotal position in the AI concept graph, bridging several major research communities:

    Relative to **[[Deep Learning]]** (its parent class), BDL adds probabilistic weight distributions to what are otherwise standard [[Neural Network]] architectures trained by [[Backpropagation]]. Any [[Deep Learning]] system can be converted to a BDL system by adding a [[Prior Distribution]] over weights and choosing an inference method; conversely, BDL reduces to standard [[Deep Learning]] when the posterior concentrates at the MAP estimate (zero-temperature limit). BDL inherits all [[Deep Learning]] representation capabilities — [[Convolutional Neural Network]] for spatial data, [[Transformer Architecture]] for sequences, [[Graph Neural Network]] for relational data — while adding epistemic tracking.

    Relative to **[[Bayesian Inference]]** (its other parent class), BDL specialises the abstract inference framework to the case where the model is a deep neural network with millions or billions of parameters. Classical [[Bayesian Inference]] with conjugate priors or MCMC over 10-100 parameters is exact or near-exact; BDL scales the framework to 10⁶-10¹² parameters through radical approximation. The [[Gaussian Process]] limit (Neal, 1995) shows that BDL and classical Bayesian function estimation are connected in the infinite-width limit, providing theoretical grounding.

    Relative to **[[Variational Inference]]** (a key algorithmic component), BDL is the primary application domain that drove the development of the [[Reparameterisation Trick]] (Kingma & Welling, 2014) and amortised inference (encoder networks that output posterior parameters) — foundational contributions that then flowed back to enrich [[Variational Autoencoder]], [[Latent Diffusion Model]], and [[Normalising Flow]] research. The [[Evidence Lower Bound]] ELBO, central to [[Variational Inference]], is the training objective for variational BNNs.

    Relative to **[[Active Learning]]** (a key enabled capability), BDL provides the uncertainty estimates that power data-efficient labelling strategies. The BALD criterion (mutual information between predictions and weights) is computable from the posterior predictive variance, making BDL the natural uncertainty quantification engine for [[Active Learning]] pipelines in [[Medical AI]], scientific discovery, and document intelligence.

    Relative to **[[Gaussian Process]]** (a related concept), BDL and GP modelling represent two different approaches to Bayesian non-parametric function estimation: GP places a distribution directly over functions via a kernel, enabling exact posterior inference; BDL places a distribution over [[Neural Network]] weights, enabling much richer function families but requiring approximate inference. Sparse GP approximations (inducing point methods) and variational BNNs have converging algorithmic structures, and the Neural Network Gaussian Process (NNGP) literature (Lee et al., 2018; Novak et al., 2018) explicitly analyses the GP limit of BNNs.

    Relative to **[[Federated Learning]]** (a supported paradigm), BDL provides the posterior aggregation mechanism that standard FedAvg lacks: instead of averaging weight vectors, Bayesian federated learning aggregates local posteriors, naturally handling data heterogeneity across clients and propagating uncertainty about the true global posterior. This connection is increasingly important as [[Federated Learning]] is deployed in healthcare, finance, and IoT settings where per-client data distributions differ substantially.

    Relative to **[[Reinforcement Learning]]** (a supported paradigm), BDL enables principled exploration via [[Epistemic Uncertainty]]: Thompson Sampling selects actions by sampling from the posterior over Q-values (or reward models), achieving optimal exploration rates asymptotically; Bayesian model-based RL uses posterior uncertainty over dynamics models to plan risk-aversely, achieving higher sample efficiency and safety than model-free [[Reinforcement Learning]].

    Relative to **[[Responsible AI]]** and [[Safe AI]] (enabled capabilities), BDL provides the principled uncertainty quantification that is increasingly mandated by regulators and demanded by users of AI systems in safety-critical domains. The EU AI Act requires documentation of predictive reliability for high-risk AI; BDL calibration metrics (ECE, NLL, AUROC for OOD detection) are the natural evidence base for such documentation, making BDL a key enabling technology for the compliance ecosystem that the EU AI Act is creating.

  ## Formal Algorithm — Variational BNN (Bayes by Backprop)
    The Bayes by Backprop algorithm (Blundell et al., 2015) trains a [[Bayesian Neural Network]] by optimising the variational lower bound with respect to the parameters φ of the variational posterior q(W; φ):
    - **Objective**: Maximise ELBO = E_{q(W;φ)}[log p(D | W)] − KL[q(W; φ) || p(W)]
    - **Parametrisation**: Each weight w_i ~ N(μ_i, σ_i²); φ = {μ_i, ρ_i} where σ_i = softplus(ρ_i) > 0.
    - **Reparameterisation**: w_i = μ_i + σ_i · ε, ε ~ N(0, 1); enables unbiased gradient estimation through the sampling operation.
    - **Gradient estimation**: Unbiased stochastic gradient of ELBO via mini-batch subsampling and the local reparameterisation trick (Kingma et al., 2015) for variance reduction.
    - **Prediction**: At test time, draw T weight samples {W^(t)} ~ q(W; φ), compute predictions {ŷ^(t) = f(x*; W^(t))}, return the Monte Carlo posterior predictive mean (1/T Σ ŷ^(t)) and variance decomposed into aleatoric and epistemic components.
    - **Key property**: The KL divergence term acts as a regulariser; with Gaussian prior p(W) = N(0, I), the KL term reduces to L2 regularisation in the limit of a very narrow posterior, recovering standard MAP training.

    The Monte Carlo Dropout interpretation (Gal & Ghahramani, 2016) provides an alternative algorithm requiring no architectural modification:
    - Train the network with standard dropout at rate p.
    - At inference, keep dropout active and run T stochastic forward passes: {ŷ^(t) = f(x*; W^(t))}_{t=1}^T where W^(t) are Bernoulli-masked weight realisations.
    - Compute the predictive mean μ* = (1/T) Σ ŷ^(t) and variance Var[ŷ] = (1/T) Σ (ŷ^(t))² − (μ*)².
    - The epistemic uncertainty component can be separated via: σ²_epistemic ≈ (p/(1-p)) × (1/T) Σ (ŷ^(t) − μ*)² × τ^{-1}, where τ is a precision hyperparameter.

  ## Connections to Regularisation and Generalisation Theory
    The Bayesian perspective on [[Deep Learning]] regularisation provides crucial theoretical grounding for why neural networks generalise in practice:

    - **L2 regularisation = Gaussian prior MAP**: Minimising ‖W‖² alongside the cross-entropy loss is identical to MAP inference with a Gaussian prior p(W) = N(0, λ^{-1} I); the regularisation strength λ is the prior precision. Full BDL goes beyond MAP by maintaining the full posterior over W.
    - **Dropout = Bernoulli posterior sampling**: Training with [[Dropout Regularisation]] is equivalent to variational inference under a Bernoulli distribution over weight masks (Gal & Ghahramani, 2016); the dropout rate p corresponds to the prior on weight retention; MC-Dropout at inference implements approximate Bayesian inference.
    - **Weight decay = Bayesian Occam's razor**: The weight regularisation implicit in L2 loss implements a soft version of the Bayesian model complexity penalty; the [[Evidence Lower Bound]] formulation makes this explicit: the KL divergence term KL[q(W) || p(W)] is the prior regularisation term, penalising posterior distributions that deviate from the prior.
    - **Flat minima = wide posteriors**: The Loss Landscape [[Stochastic Gradient Descent]] literature (Keskar et al., 2017; Hochreiter & Schmidhuber, 1997) observed empirically that flat minima generalise better; Wilson and Izmailov (2020) provided a BDL explanation: SWAG and posterior marginalisation naturally select solutions at the centres of wide loss basins, and Bayesian model averaging down-weights solutions at sharp minima that assign low probability to slight weight perturbations.
    - **PAC-Bayes bounds**: The PAC-Bayes framework (McAllester, 1999; Catoni, 2007) provides non-vacuous generalisation bounds for BDL: for any prior P and posterior Q trained on n examples, the expected generalisation error is bounded by KL(Q || P) / n + log(1/δ) / n with probability 1 - δ. Deep ensemble and VI posteriors have been shown to achieve sub-0.01 PAC-Bayes bounds on MNIST and CIFAR-10, validating the theoretical coherence of BDL regularisation.

  ## Comparison of Approximate Inference Methods
    A systematic comparison of the major BDL approximation methods, based on 2019-2025 benchmark literature:

    | Method | Training cost | Inference cost | Posterior quality | OOD detection | Calibration | Practical deployment |
    |--------|--------------|----------------|-------------------|---------------|-------------|---------------------|
    | MC-Dropout | 1x | T×1x (T forward passes) | Low (Bernoulli family) | Moderate | Moderate | Very high (zero arch. change) |
    | Deep Ensembles | M×1x | M×1x (parallel) | Medium (M MAP modes) | High | High | High (M models) |
    | SWAG | 1x + 20ep | 1x (mean) or T×1x | Medium (low-rank Gaussian) | Moderate | High | High (free uncertainty) |
    | Last-Layer Laplace | 1x + Hessian | 1x | Medium (Gaussian at MAP) | Moderate | High | Very high (post-hoc) |
    | Full Laplace | 1x + Hessian | 1x | Medium (Kronecker Gaussian) | Moderate-High | High | Moderate (Hessian memory) |
    | VI (Bayes by Backprop) | 2x (double params) | T×1x | Low-Medium (mean-field) | Moderate | Moderate | Moderate (arch. change) |
    | SGLD | 1x + sampling | T×1x | Medium-High (ergodic) | High | High | Low (tuning required) |
    | Subnetwork Inference | 1x + selection | 1x | Medium (sparse posterior) | Moderate | High | High (efficient) |

    Key findings from the literature (Ovadia et al., 2019; Daxberger et al., 2021; Mukhoti et al., 2023):
    - Under **in-distribution** calibration: Deep Ensembles > SWAG ≈ Laplace > VI > MC-Dropout in most benchmarks
    - Under **distribution shift** (CIFAR-10-C): Deep Ensembles significantly outperform all other methods; Laplace degrades gracefully; MC-Dropout degrades sharply at high corruption severity
    - **Computational budget**: For equivalent compute, 5-member Deep Ensemble outperforms T=50 MC-Dropout; Last-Layer Laplace matches Deep Ensemble quality at 1/5 the inference cost
    - **Training stability**: VI requires careful prior and learning rate selection; SWAG requires only a cyclic learning rate schedule modification; Laplace requires only a post-hoc Hessian computation

  ## Benchmark Datasets and Evaluation Metrics
    Evaluation of BDL methods requires specialised metrics beyond accuracy:
    - **UCI Regression Benchmarks** — Boston Housing, Concrete Strength, Energy Efficiency, Yacht Hydrodynamics, Wine Quality, Kin8nm, Naval, Power Plant; standard for comparing predictive log-likelihood and RMSE across [[Bayesian Neural Network]] variants.
    - **CIFAR-10 and CIFAR-100** — used with corruptions (CIFAR-10-C, CIFAR-100-C; Hendrycks & Dietterich, 2019) to evaluate uncertainty under [[Distribution Shift]]; expected calibration error (ECE) is the primary metric.
    - **ImageNet-C** — 15 corruption types at 5 severity levels; tests whether BDL systems degrade gracefully vs. catastrophically when [[Out-of-Distribution Detection]] is needed.
    - **WILDS Benchmark** (Koh et al., 2021) — distribution shift across real-world domains (medical imaging, satellite imagery, natural language); evaluates worst-group generalisation enabled by [[Uncertainty Quantification]].
    - **Metrics**: Expected Calibration Error (ECE), Negative Log-Likelihood (NLL), Brier Score, Area Under ROC for OOD detection (AUROC), uncertainty decomposition into aleatoric and epistemic components via [[Information Theory]] mutual information measures.
    - **BNN vs. Ensemble comparison**: Ovadia et al. (2019) found deep ensembles outperform MC-Dropout on CIFAR-10-C; Daxberger et al. (2021) showed last-layer Laplace approximation matches ensembles at a fraction of the cost; consensus in 2024-2025 literature (Pitas & Arbel, arXiv 2501.17917) is that deep ensembles provide the best practical uncertainty for most tasks.

  ## Key Terminology
    - **Aleatoric Uncertainty** — irreducible randomness in the data-generating process; captured by the [[Likelihood Function]] variance parameter σ²; does not decrease with more training data; present even with perfect model specification; examples include measurement noise in sensors, intrinsic variability in biological processes, and stochastic outcomes in quantum systems.
    - **Epistemic Uncertainty** — uncertainty due to limited knowledge of the true model or insufficient training data; captured by the spread of the [[Posterior Distribution]] over weights; decreases as training data grows (Bayesian consistency); can be reduced by acquiring more informative data (the goal of [[Active Learning]]).
    - **Evidence Lower Bound (ELBO)** — the variational lower bound ℒ(φ) = E_{q(W;φ)}[log p(D|W)] − KL[q(W;φ) || p(W)] on the log marginal likelihood log p(D); maximising ELBO is equivalent to minimising KL divergence from the variational posterior q(W;φ) to the true posterior p(W|D); the KL term acts as a regulariser penalising departure from the prior.
    - **Posterior Predictive Distribution** — the distribution over outputs p(y* | x*, D) = ∫ p(y* | x*, W) p(W | D) dW obtained by marginalising predictions over the [[Posterior Distribution]]; the fundamental output of BDL; decomposes variance into aleatoric (within each weight sample) and epistemic (across weight samples) components.
    - **Calibration** — alignment between predicted confidences and empirical frequencies; a well-calibrated model's 70% confidence predictions are correct 70% of the time; measured by Expected Calibration Error (ECE) and reliability diagrams; [[Deep Learning]] models with [[Batch Normalisation]] are typically overconfident (Guo et al., 2017), while BDL methods improve calibration by propagating weight uncertainty.
    - **Temperature Scaling** — post-hoc recalibration dividing logits by a scalar temperature parameter T > 1 to soften overconfident predictions; cheapest calibration method (single parameter); does not improve [[Out-of-Distribution Detection]] performance; recommended as a final step after BDL training for additional calibration refinement.
    - **Bayes by Backprop** — the Blundell et al. (2015) ICML algorithm for training [[Bayesian Neural Network]] via stochastic [[Variational Inference]] using the [[Reparameterisation Trick]]; parameterises each weight as a Gaussian with mean μ_i and variance σ²_i; adds O(2N) parameter overhead over a standard network (N weights).
    - **Stochastic Weight Averaging-Gaussian (SWAG)** — Maddox et al. (2019) NeurIPS method that approximates the posterior by fitting a low-rank plus diagonal Gaussian to the trajectory of SGD iterates near the end of training; provides free uncertainty as a byproduct of standard [[Stochastic Gradient Descent]] training without any additional epochs; low-rank component captures covariance between parameters that pure diagonal approximations miss.
    - **Deep Ensembles** — Lakshminarayanan et al. (2017) NeurIPS method training M independent [[Neural Network]] from different random initialisations using proper scoring rules (NLL) plus adversarial training; ensemble variance between M predictions proxies [[Epistemic Uncertainty]]; 5 members provides 90% of the benefit; empirical Bayes interpretation proved by Pitas & Arbel (2025).
    - **Monte Carlo Dropout (MC-Dropout)** — Gal and Ghahramani (2016) ICML method applying [[Dropout Regularisation]] at inference time and averaging T stochastic forward passes; no architectural modification required; interprets each stochastic pass as sampling a weight mask from a Bernoulli posterior; computationally cheap (T additional forward passes at inference).
    - **Laplace Approximation** — second-order approximation to the posterior p(W | D) ≈ N(W_MAP, Σ), where W_MAP = argmax p(W | D) and Σ = (-∇²_W log p(W | D)|_{W_MAP})^{-1} (inverse Hessian of negative log-posterior); last-layer variant (only approximating final layer) is practical for large networks; implemented in laplace-torch library.
    - **BALD (Bayesian Active Learning by Disagreement)** — [[Active Learning]] criterion selecting inputs x* = argmax_{x} I(y; W | x, D) = argmax_{x} H[y | x, D] − E_{p(W|D)}[H[y | x, W]] that maximise mutual information between predictions and weights; equivalent to the expected information gain; maximally informative for [[Epistemic Uncertainty]] reduction.
    - **Neural Tangent Kernel (NTK)** — the kernel that governs the training dynamics of infinitely-wide neural networks in the lazy training regime; connects BDL to [[Gaussian Process]] theory in the infinite-width limit; shows that gradient descent on infinite networks is equivalent to kernel regression; theoretically important but practically limited by the lazy-training assumption.
    - **Prior Network** — Sensoy et al. (2018) alternative to BDL that outputs parameters of a Dirichlet distribution over class probabilities rather than class probabilities directly; places a distribution over distributions (second-order uncertainty); efficient single forward pass; used in [[Federated Learning]] uncertainty aggregation.
    - **Predictive Variance Decomposition** — total variance Var[y*|x*,D] = E_{p(W|D)}[Var[y*|x*,W]] + Var_{p(W|D)}[E[y*|x*,W]]; the first term is aleatoric variance (averaged over posterior); the second is epistemic variance (variance of posterior mean predictions); this decomposition is only meaningful for BDL methods that explicitly maintain both components.

  ## Prior Design in Bayesian Deep Learning
    The choice of prior distribution P(W) is a fundamental modelling decision in BDL with significant impact on the quality of uncertainty estimates:

    **Isotropic Gaussian (weight decay)**: p(w_i) = N(0, σ_p²); the most widely used default; corresponds to L2 regularisation in the MAP limit; σ_p² controls the effective regularisation strength and the scale of epistemic uncertainty; too-narrow priors prevent the posterior from moving far from zero, while too-wide priors provide insufficiently regularised uncertainty.

    **Log-uniform / scale-mixture priors**: p(w_i) = ∫ N(w_i; 0, σ²) p(σ²) dσ²; fat-tailed priors that place more mass on both very small and very large weights; equivalent to dropout regularisation in specific parameterisations; used in Blundell et al. (2015) with a mixture of two Gaussians.

    **Spike-and-slab priors**: p(w_i) = π × δ(0) + (1-π) × N(w_i; 0, σ_slab²); explicit sparsity-inducing prior placing mass at exactly zero (spike) and a diffuse slab; produces exact sparse solutions but requires discrete latent inclusion indicators; implemented via continuous relaxations (hard concrete, binary concrete; Louizos et al., 2017).

    **Horseshoe prior**: p(w_i | τ, λ_i) = N(w_i; 0, τ² λ_i²), p(λ_i) = Half-Cauchy(0,1), p(τ) = Half-Cauchy(0, 1/√n); state-of-the-art sparse prior for Bayesian linear regression; adapted to BNNs in Ghosh et al. (2019); produces near-black-hole shrinkage for irrelevant weights while leaving relevant weights unshrunk.

    **Structured priors from pre-trained models**: p(W) = N(W_pretrained, σ_fine²I); uses a pre-trained model's weights as prior mean, encoding learned representations as prior knowledge; equivalent to [[Transfer Learning]] in a Bayesian framework; reduces the amount of task-specific data needed to achieve accurate posteriors; relevant for Bayesian fine-tuning of [[Foundation Model]].

    **Function-space priors via NNGP**: Rather than specifying priors directly over weights, function-space priors place distributions directly over the input-output function f ~ GP(m(x), K(x,x')) using the Neural Network Gaussian Process kernel; eliminates weight-space pathologies (symmetry groups, multi-modality) but requires kernel computation, limiting scalability to large datasets.

    The prior's choice determines: (1) the posterior's behaviour in low-data regimes (prior dominates); (2) the effective capacity of the model (tighter priors reduce effective capacity); (3) the [[Model Calibration]] of the posterior predictive (well-specified priors produce better-calibrated uncertainty); (4) computational tractability (conjugate priors enable analytic updates; spike-and-slab requires MCMC or continuous relaxations).

  ## Research & Literature
    1. MacKay, D.J.C. (1992). "A practical Bayesian framework for backpropagation networks." *Neural Computation*, 4(3), 448-472.
    2. Neal, R.M. (1995). *Bayesian Learning for Neural Networks*. PhD Thesis, University of Toronto. Springer, 1996.
    3. Graves, A. (2011). "Practical variational inference for neural networks." *NeurIPS 24*, 2348-2356.
    4. Kingma, D.P. & Welling, M. (2014). "Auto-encoding variational Bayes." *ICLR 2014*. arXiv:1312.6114.
    5. Blundell, C., Cornebise, J., Kavukcuoglu, K. & Wierstra, D. (2015). "Weight uncertainty in neural networks." *ICML 2015*. arXiv:1505.05424.
    6. Gal, Y. & Ghahramani, Z. (2016). "Dropout as a Bayesian approximation: Representing model uncertainty in deep learning." *ICML 2016*. arXiv:1506.02142.
    7. Welling, M. & Teh, Y.W. (2011). "Bayesian learning via stochastic gradient Langevin dynamics." *ICML 2011*.
    8. Lakshminarayanan, B., Pritzel, A. & Blundell, C. (2017). "Simple and scalable predictive uncertainty estimation using deep ensembles." *NeurIPS 30*.
    9. Maddox, W., Izmailov, P., Garipov, T., Vetrov, D. & Wilson, A.G. (2019). "A simple baseline for Bayesian uncertainty in deep learning (SWAG)." *NeurIPS 32*.
    10. Daxberger, E., Kristiadi, A., Immer, A., Eschenhagen, R., Bauer, M. & Hennig, P. (2021). "Laplace Redux – Effortless Bayesian Deep Learning." *NeurIPS 34*. arXiv:2106.14806.
    11. Wilson, A.G. & Izmailov, P. (2020). "Bayesian deep learning and a probabilistic perspective of generalisation." *NeurIPS 33*. arXiv:2002.08791.
    12. Wen, Y., Vicol, P., Ba, J., Tran, D. & Grosse, R. (2018). "Flipout: Efficient pseudo-independent weight perturbations on mini-batches." *ICLR 2018*.
    13. Osband, I., Aslanides, J. & Cassirer, A. (2018). "Randomized prior functions for deep reinforcement learning." *NeurIPS 31*.
    14. Ritter, H., Botev, A. & Barber, D. (2018). "A scalable Laplace approximation for neural networks." *ICLR 2018*.
    15. Pearce, T., Leibfried, F. & Brintrup, A. (2020). "Uncertainty in neural networks: Approximately Bayesian ensembling." *AISTATS 2020*.
    16. Ovadia, Y., Fertig, E., Ren, J., et al. (2019). "Can you trust your model's uncertainty? Evaluating predictive uncertainty under dataset shift." *NeurIPS 32*.
    17. Gal, Y. (2016). *Uncertainty in Deep Learning*. PhD Thesis, University of Cambridge.
    18. Dusenberry, M., Jerfel, G., Wen, Y., et al. (2020). "Efficient and scalable Bayesian neural nets with rank-1 factors." *ICML 2020*.
    19. Mitros, J. & Mac Namee, B. (2019). "On the validity of Bayesian neural networks for uncertainty estimation." *AICS 2019*. arXiv:1912.01530.
    20. Immer, A., Korzepa, M. & Bauer, M. (2021). "Improving predictions of Bayesian neural nets at OOD points by repulsive ensembles." *ICLR 2021*.
    21. Sharma, M., Bauer, M., Gordon, A. & Durkan, C. (2023). "Bayesian neural network priors revisited." *ICLR 2023*. arXiv:2102.06571.
    22. Mukhoti, J., Kirsch, A., van Amersfoort, J., Torr, P. & Gal, Y. (2023). "A Primer on Bayesian Neural Networks: Review and Debates." arXiv:2309.16314.
    23. Immer, A., van der Ouderaa, T., Rätsch, G. & van der Wilk, M. (2024). "Position: Bayesian Deep Learning is Needed in the Age of Large-Scale AI." arXiv:2402.00809.
    24. Wu, D., Niu, R. & van der Wilk, M. (2024). "Function-space regularisation in neural networks: A probabilistic perspective." *ICML 2024*.
    25. Shridhar, K., Laumann, F. & Liwicki, M. (2025). "Stochastic weight sharing for Bayesian neural networks." *AISTATS 2025*.
    26. Pitas, K. & Arbel, J. (2025). "Deep Ensembles Secretly Perform Empirical Bayes." arXiv:2501.17917.
    27. Dellaporta, H. et al. (2025). "Advances in post-Bayesian methods." Workshop at UCL, NeurIPS 2025.
    28. HybridFlow Authors (2025). "HybridFlow: Quantification of Aleatoric and Epistemic Uncertainty with a Single Hybrid Model." arXiv:2510.05054.

  ## Standards and Software Ecosystem
    Bayesian deep learning is supported by a rich ecosystem of libraries, standards, and community resources that enable reproducible research and production deployment:

    **Core probabilistic programming libraries**: Stan (HMC-NUTS, ADVI; mc-stan.org), PyMC v5.27.1 (NUTS, ADVI, particle VI; pymc.io), NumPyro (JAX-accelerated HMC, SVI; num.pyro.ai), TensorFlow Probability v0.24 (TFP; tensorflow.org/probability), Pyro (PyTorch/JAX-based; pyro.ai), Turing.jl (Julia; turing.ml) — each offering different trade-offs between flexibility, performance, and API ergonomics.

    **BDL-specific libraries**: laplace-torch (pip: laplace; last-layer and full Laplace; aleximmer.github.io/Laplace), torchuncertainty (PyTorch-native BDL layers, 2024; github.com/ENSTA-U2IS/torch-uncertainty), uncertainty-toolbox (numpy-based calibration metrics; github.com/uncertainty-toolbox), pytorch-bayesian (variational BNN layers with Flipout and Bayes by Backprop; github.com/wang-chen/pytorch-bayesian), BayesFlow (neural SBI; bayesflow.org).

    **Standards context**: ISO/IEC 22989:2022 "Artificial intelligence — Concepts and terminology" (Section 6.9: Uncertainty in AI systems); ISO/IEC 23053:2022 "Framework for AI systems using machine learning"; NIST AI RMF (AI Risk Management Framework) Govern/Map/Measure/Manage functions reference uncertainty quantification as a core risk management capability. The EU AI Act (Regulation (EU) 2024/1689) Article 9 mandates risk management systems for high-risk AI that include accuracy, robustness, and cybersecurity metrics — all of which BDL calibration directly addresses. The IEEE P7001 standard on Transparency in Autonomous Systems references calibrated confidence measures as a form of AI transparency.

    **Annual conferences and workshops**: NeurIPS Workshop on Bayesian Deep Learning (annual since 2016), NeurIPS Workshop on Uncertainty in Deep Learning, UAI (Conference on Uncertainty in Artificial Intelligence; AUAI), AABI (Advances in Approximate Bayesian Inference; aabi.cc), ICLR probabilistic modelling track, ICML approximate inference and [[Gaussian Process]] workshop. The Probabilistic Numerics community (probnum.org) addresses Bayesian uncertainty in numerical computation itself (ODE solvers, quadrature, optimisation), an emerging adjacent research programme.

    **Community resources**: The BDL Benchmark repository (github.com/cambridge-mlg/bnn-benchmarks) maintains standardised UCI regression evaluations; the laplace-torch tutorials provide practical last-layer Laplace guides; the "Probabilistic Machine Learning" series by Kevin Murphy (MIT Press, 2022/2023) is the current definitive reference for both [[Bayesian Inference]] and [[Bayesian Deep Learning]]; Yarin Gal's uncertainty blog (https://www.cs.ox.ac.uk/people/yarin.gal/website/blog.html) provides accessible tutorials on MC-Dropout and BDL best practices.

    **Hardware acceleration**: NVIDIA's cuBLAS and cuSPARSE underlie all GPU-accelerated BDL via PyTorch/JAX; Google's TPUs provide tensor parallelism for amortised VI at foundation model scale; Intel's Loihi 2 neuromorphic chip is being explored for spike-based approximate Bayesian inference at milliwatt power; ARM Cortex-M55 + Ethos U55 (ML NPU) are targeted for on-device last-layer Laplace approximation for edge [[Uncertainty Quantification]].

- ### Provenance
  - sources:: https://arxiv.org/pdf/2402.00809; https://arxiv.org/pdf/1505.05424; https://arxiv.org/pdf/2309.16314; https://arxiv.org/pdf/2106.14806; https://arxiv.org/pdf/2002.08791; https://arxiv.org/pdf/2501.17917; https://arxiv.org/pdf/2510.05054; https://pmc.ncbi.nlm.nih.gov/articles/PMC10825337/; https://www.imperial.ac.uk/a-z-research/data-driven-engineering/research/bayesian-methods-and-optimization/; https://www.cl.cam.ac.uk/teaching/2425/MLBayInfer/; https://www.researchgate.net/publication/277959098_Dropout_as_a_Bayesian_Approximation_Representing_Model_Uncertainty_in_Deep_Learning; https://arxiv.org/html/2501.17917v1; https://arxiv.org/pdf/2510.11704
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
