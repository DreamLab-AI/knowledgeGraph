public:: true

# cost function
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:168122e0a1ee7f4b39cf2ede8e7acc4713aa5d9ca5047bc2bb3e55252aa98284",
  "@type": "Page",
  "vc:slug": "cost-function",
  "title": "cost function",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cost-function",
  "@type": "Class",
  "label": "Cost Function",
  "definition": "A cost function is a scalar-valued mathematical function that maps a model's parameters or a system's state to a real number representing the magnitude of error, resource expenditure, or divergence from a desired outcome. In supervised machine learning, the cost function (also called a loss function) measures the aggregate discrepancy between predicted and ground-truth outputs across a training set, providing the objective that optimisation algorithms such as gradient descent minimise. In control theory and robotics, cost functions encode trajectory quality criteria including path length, energy consumption, and collision risk, enabling optimal control policies via formulations such as LQR and model predictive control. The design of the cost function is one of the most consequential decisions in any learning or optimisation system, as misspecified objectives lead to reward hacking, degenerate solutions, or physically unrealisable behaviours.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:regularisation",
        "label": "Regularisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:training-data",
        "label": "Training Data"
      },
      {
        "@id": "urn:ngm:class:differentiability",
        "label": "Differentiability"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:optimal-control",
        "label": "Optimal Control"
      },
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      },
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:loss-landscape",
        "label": "Loss Landscape"
      },
      {
        "@id": "urn:ngm:class:parametric-design-methodology-modeling",
        "label": "Parametric Model"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:maximum-likelihood-estimation",
        "label": "Maximum Likelihood Estimation"
      },
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      },
      {
        "@id": "urn:ngm:class:automatic-differentiation",
        "label": "Automatic Differentiation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:reward-function",
        "label": "Reward Function"
      },
      {
        "@id": "urn:ngm:class:utility-function",
        "label": "Utility Function"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:convex-optimisation",
        "label": "Convex Optimisation"
      },
      {
        "@id": "urn:ngm:class:overfitting",
        "label": "Overfitting"
      },
      {
        "@id": "urn:ngm:class:hyperparameter-tuning",
        "label": "Hyperparameter Tuning"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:inverse-reinforcement-learning",
        "label": "Inverse Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:mechanism-design",
        "label": "Mechanism Design"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:loss-function",
      "label": "Loss Function"
    },
    {
      "@id": "urn:ngm:class:objective-loss",
      "label": "Objective Loss"
    }
  ],
  "quality": 0.73,
  "qualityScore": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A **cost function** (also called a [[Loss Function]] or [[Objective Function]]) is a scalar-valued mathematical mapping from model parameters or system states to a real number that quantifies how far the system is from a desired outcome. In [[Machine Learning]], it measures the aggregate prediction error across a training dataset; in [[Optimal Control]] and [[Robotics]], it encodes trajectory quality criteria such as energy expenditure and collision risk. The entire process of [[Model Training]] is the iterative minimisation of this function, making its design one of the most consequential modelling decisions in any learned or optimised system. Misspecified cost functions lead to [[Reward Hacking]], degenerate local minima, or physically unrealisable solutions.

- ### Overview
  - Cost functions occupy the conceptual centre of both [[Supervised Learning]] and [[Optimal Control]] theory. They convert the informal notion of "the model should be good" into a precise mathematical target that algorithms can pursue through iterative parameter updates.
  - In [[Supervised Learning]] the cost function aggregates a per-sample [[Loss Function]] (e.g., squared error, cross-entropy) over the training set. Minimising this aggregate via [[Gradient Descent]] or its stochastic variants drives parameter updates that improve generalisation.
  - In [[Reinforcement Learning]] the cost function appears as the negation of the cumulative reward signal. An agent that maximises discounted return is equivalently minimising a discounted cumulative cost, connecting both frameworks under a unified optimisation view.
  - In [[Control Theory]], the cost function (or performance index) is integrated over time: for a [[Linear-Quadratic Regulator]] (LQR) it is a quadratic form in state deviations and control effort, yielding a closed-form optimal policy via the algebraic Riccati equation.
  - The geometry of the cost function — its [[Loss Landscape]] — determines the tractability of optimisation. Convex cost functions (e.g., mean squared error for linear regression) have a unique global minimum; non-convex surfaces (e.g., those induced by deep [[Neural Network]] architectures) contain saddle points, plateaus, and multiple local minima that motivate adaptive optimisers and [[Regularisation]].

- ### Key Components
  - **Data-fidelity term** — measures fit to observations (e.g., [[Mean Squared Error]], [[Cross-Entropy Loss]], [[Huber Loss]]). The dominant driver of parameter updates.
  - **[[Regularisation]] term** — penalises model complexity (L1 / L2 norms on weights) to prevent [[Overfitting]]. Acts as a prior in [[Bayesian Inference]] interpretations.
  - **[[Penalty Term]]** — encodes hard or soft constraints (collision avoidance, actuator limits, fairness budgets) as additive terms that increase cost when constraints are violated.
  - **Weighting / scalarisation** — when multiple objectives exist (e.g., accuracy vs. latency), a weighted sum or Pareto scalarisation converts them into a single scalar cost suitable for [[Convex Optimisation]] methods.
  - **Surrogate losses** — [[Hinge Loss]] (SVM), [[Kullback-Leibler Divergence]], and [[Wasserstein Distance]] are differentiable proxies for non-differentiable metrics like accuracy or perceptual quality, enabling [[Backpropagation]].

- ### Common Cost Function Families
  - **Regression losses**
    - [[Mean Squared Error]] (MSE) — quadratic, sensitive to outliers, used in linear regression and LQR.
    - [[Mean Absolute Error]] (MAE) — robust to outliers; non-differentiable at zero, requires subgradient methods.
    - [[Huber Loss]] — smooth quadratic near zero, linear in tails; balances robustness and differentiability.
  - **Classification losses**
    - [[Cross-Entropy Loss]] — derived from [[Maximum Likelihood Estimation]] under categorical distributions; standard for [[Softmax]] outputs.
    - [[Hinge Loss]] — margin-based; underpins support vector machines; not differentiable everywhere.
    - [[Focal Loss]] — variant of cross-entropy that down-weights easy examples; used in dense object detection.
  - **Generative / probabilistic losses**
    - [[Kullback-Leibler Divergence]] — measures distributional discrepancy; core to [[Variational Autoencoders]] and [[RLHF]].
    - [[Wasserstein Distance]] — geometrically meaningful probability metric; central to [[Wasserstein GAN]] stability.
    - [[Evidence Lower Bound]] (ELBO) — maximised (negated as cost) in [[Variational Inference]].
  - **Control / planning losses**
    - Quadratic performance index — state-cost matrix Q, control-cost matrix R; standard in [[Linear-Quadratic Regulator]].
    - Time-optimal cost — minimises task completion time subject to dynamics constraints; used in [[Model Predictive Control]].
    - Trajectory smoothness cost — penalises jerk or curvature; used in [[CHOMP]] and [[TrajOpt]] for [[Motion Planning]].

- ### Applications
  - **[[Deep Learning]] model training** — [[Backpropagation]] computes the gradient of the cost with respect to all parameters via the chain rule; [[Stochastic Gradient Descent]] and variants (Adam, RMSProp) use these gradients to update weights across billions of parameters.
  - **[[Reinforcement Learning]] agent training** — Policy gradient methods (PPO, TRPO) and value-based methods (DQN) optimise a cost defined on accumulated reward signals; the cost function design determines convergence speed and policy quality.
  - **[[Inverse Reinforcement Learning]]** — infers the cost function from expert demonstrations, enabling robots and agents to learn task objectives without hand-coded reward engineering.
  - **[[Model Predictive Control]]** — a receding-horizon optimiser solves a finite-horizon cost minimisation at each timestep, replanning as the system evolves; widely used in autonomous vehicles and process control.
  - **[[Neural Architecture Search]]** — validation loss serves as the cost function driving architecture optimisation via evolutionary algorithms or differentiable NAS.
  - **[[Large Language Models]] fine-tuning** — [[RLHF]] uses a KL-regularised reward-model score as the cost, balancing human preference alignment against divergence from the pre-trained distribution.
  - **[[Supply Chain]] optimisation** — total logistics cost (transport, inventory holding, penalty for stockouts) is minimised over decision variables such as order quantities and routing.
  - **[[Finance]] — portfolio optimisation** — mean-variance and CVaR objectives define cost functions over portfolio weights; solved via quadratic or convex programmes.
  - **[[Computer Vision]] — image segmentation** — [[Dice Loss]] and combined cross-entropy/Dice costs are minimised to train pixel-level classifiers in medical imaging.

- ### Relationships
  - partOf:: [[Objective Function]]
  - enables:: [[Gradient Descent]]
  - enables:: [[Optimal Control]]
  - enables:: [[Motion Planning]]
  - enables:: [[Model Training]]
  - requires:: [[Training Data]]
  - requires:: [[Differentiability]]
  - hasPart:: [[Regularisation]]
  - hasPart:: [[Penalty Term]]
  - implements:: [[Maximum Likelihood Estimation]]
  - implements:: [[Bayesian Inference]]
  - uses:: [[Reinforcement Learning]]
  - uses:: [[Backpropagation]]
  - uses:: [[Automatic Differentiation]]
  - dependsOn:: [[Loss Landscape]]
  - dependsOn:: [[Parametric Model]]
  - contrastsWith:: [[Reward Function]]
  - contrastsWith:: [[Utility Function]]
  - relatedTo:: [[Convex Optimisation]]
  - relatedTo:: [[Overfitting]]
  - relatedTo:: [[Hyperparameter Tuning]]
  - relatedTo:: [[Neural Network]]
  - bridges-to:: [[Inverse Reinforcement Learning]]
  - bridges-to:: [[Mechanism Design]]

- ### Standards & Context
  - Cost function design is covered extensively in foundational texts (Bishop's *Pattern Recognition and Machine Learning*; Goodfellow, Bengio & Courville's *Deep Learning*) and is a core component of every major ML framework: [[PyTorch]] (`torch.nn.functional`), [[TensorFlow]] (`tf.keras.losses`), and [[JAX]] (`optax`).
  - The [[OpenAI Gym]] and [[DeepMind Control Suite]] standardise reward (negative cost) signals for [[Reinforcement Learning]] benchmarking.
  - For control applications, the LQR cost formulation is specified in IEEE and IEC control standards and implemented in MATLAB's Control System Toolbox.
  - [[ISO/IEC 22989:2022]] (AI concepts and terminology) references objective functions and loss functions as core AI vocabulary.
  - Responsible AI guidelines (e.g., EU AI Act, NIST AI RMF) increasingly require documentation of cost function choices in high-risk AI systems, as cost function specification directly determines system behaviour and potential for discriminatory outcomes.

- ### Provenance
  - sources:: Bishop (2006) *PRML*; Goodfellow et al. (2016) *Deep Learning*; Sutton & Barto (2018) *Reinforcement Learning*; Bertsekas (2012) *Dynamic Programming and Optimal Control*
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
