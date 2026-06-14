public:: true

# system identification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:516c72a0bcf4cc916095c9ce8382f120cf33cc5132569d26aa21358075680bed",
  "@type": "Page",
  "vc:slug": "system-identification",
  "title": "system identification",
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
  "@id": "urn:ngm:class:system-identification",
  "@type": "Class",
  "label": "System Identification",
  "definition": "System identification is the discipline of constructing or refining a mathematical model of a dynamical system—parametric or non-parametric—from observed input-output experimental data, enabling accurate simulation and model-based control design. It spans classical methods such as prediction error minimisation, subspace identification, and autoregressive modelling for linear time-invariant systems, through to Gaussian process regression, neural ordinary differential equations, and physics-informed learning for nonlinear and hybrid systems. In robotics and mechatronics, system identification calibrates rigid-body dynamics parameters—link inertia tensors, joint friction coefficients, and actuator gains—required by whole-body controllers and model predictive controllers to generate physically consistent torque commands. The field occupies an intersection of statistical estimation theory, control engineering, and machine learning, and is foundational to closing the sim-to-real gap in data-driven robot learning.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:whole-body-control", "label": "Whole Body Control"},
      {"@id": "urn:ngm:class:model-predictive-control", "label": "Model Predictive Control"},
      {"@id": "urn:ngm:class:adaptive-control", "label": "Adaptive Control"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:excitation-trajectory", "label": "Excitation Trajectory"},
      {"@id": "urn:ngm:class:state-estimation", "label": "State Estimation"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:least-squares-regression", "label": "Least-Squares Regression"},
      {"@id": "urn:ngm:class:gaussian-process-regression", "label": "Gaussian Process Regression"},
      {"@id": "urn:ngm:class:kalman-filter", "label": "Kalman Filter"},
      {"@id": "urn:ngm:class:neural-ode", "label": "Neural ODE"},
      {"@id": "urn:ngm:class:maximum-likelihood-estimation", "label": "Maximum Likelihood Estimation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:physics-simulation", "label": "Physics Simulation"},
      {"@id": "urn:ngm:class:signal-processing", "label": "Signal Processing"},
      {"@id": "urn:ngm:class:experimental-design", "label": "Experimental Design"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:domain-randomisation", "label": "Domain Randomisation"},
      {"@id": "urn:ngm:class:model-free-control", "label": "Model-Free Control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:observer-design", "label": "Observer Design"},
      {"@id": "urn:ngm:class:parameter-estimation", "label": "Parameter Estimation"},
      {"@id": "urn:ngm:class:structural-dynamics", "label": "Structural Dynamics"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:physics-informed-neural-network", "label": "Physics-Informed Neural Network"},
      {"@id": "urn:ngm:class:sim-to-real-transfer", "label": "Sim-to-Real Transfer"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:plant-identification", "label": "Plant Identification"},
    {"@id": "urn:ngm:class:model-identification", "label": "Model Identification"}
  ],
  "quality": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - System identification is the discipline of constructing or refining a mathematical model of a [[Dynamical System]] from observed input-output experimental data, enabling accurate simulation and [[Model-Based Control]] design. It sits at the intersection of [[Statistical Estimation]], [[Control Engineering]], and [[Machine Learning]], encompassing classical approaches—[[Prediction Error Minimisation]], [[Subspace Identification]], [[ARX Modelling]]—through to data-driven methods such as [[Gaussian Process Regression]] and [[Neural ODE]]s for nonlinear and hybrid systems. The resulting model serves as the foundation for [[Model Predictive Control]], [[Adaptive Control]], and [[Digital Twin]] deployments across robotics, aerospace, process control, and structural engineering.

- ### Overview
  - System identification addresses the fundamental inverse problem in control: given a system that can be excited with known inputs and whose outputs can be measured, recover a mathematical description adequate for prediction and controller synthesis.
  - The field was formalised in the 1960s–70s through work on [[Prediction Error Minimisation]] and maximum likelihood formulations for [[Linear Time-Invariant System]]s. The canonical reference framework is Ljung's "System Identification: Theory for the User" (Prentice Hall), which remains the standard treatment.
  - A system identification workflow comprises four stages:
    - **Experiment design** — selecting an excitation signal (e.g., [[PRBS]], swept-sine, optimised trajectory) that maximises parameter observability while satisfying operational constraints.
    - **Data collection** — acquiring synchronised input-output time series with adequate sampling rate, low noise floor, and sufficient duration; [[Sensor Fusion]] and [[Signal Processing]] are prerequisites.
    - **Model structure selection** — choosing between parametric families (state-space, transfer function, ARX, ARMAX, OE) or non-parametric representations (frequency-response, [[Gaussian Process Regression]], [[Neural ODE]]).
    - **Estimation and validation** — fitting model parameters by minimising a prediction-error or likelihood criterion, then cross-validating on held-out data using residual analysis and fit-percentage metrics.
  - Why it matters:
    - Enables [[Model Predictive Control]] and [[Whole Body Control]] to generate torque commands that respect the actual physics of the plant.
    - Provides the simulation fidelity necessary for [[Reinforcement Learning]] policies to transfer from virtual to physical systems ([[Sim-to-Real Transfer]]).
    - Powers [[Digital Twin]] instances that mirror live assets in manufacturing, aerospace, and infrastructure.
    - Underpins structural health monitoring via [[Structural Dynamics]] identification of mode shapes and damping.

- ### Key Components
  - #### Linear System Methods
    - **Prediction Error Minimisation (PEM)** — minimises the sum of squared one-step-ahead prediction errors; subsumes least-squares as a special case for ARX models.
    - **Subspace identification (N4SID, MOESP, CVA)** — recovers state-space matrices directly from block-Hankel data matrices via SVD; consistent and numerically efficient for [[MIMO]] systems.
    - **ARX / ARMAX / OE / BJ models** — polynomial transfer-function families with incremental generality; ARX admits closed-form [[Least-Squares Regression]]; ARMAX / Box-Jenkins require iterative optimisation.
    - **Frequency-domain methods** — spectral analysis via Welch's method or empirical transfer function estimation (ETFE); useful when broadband excitation is available and direct time-domain data are noisy.
  - #### Nonlinear System Methods
    - **Nonlinear ARX (NARX)** — extends ARX with nonlinear static maps; used with radial basis functions or polynomial expansions.
    - **[[Gaussian Process Regression]] (GPR)** — Bayesian non-parametric approach; naturally provides predictive uncertainty estimates; computationally tractable for low-to-medium dimensional systems.
    - **[[Neural ODE]]s and [[Physics-Informed Neural Network]]s** — embed known physical structure (e.g., energy conservation) as soft constraints; bridge data-driven expressiveness with physics prior knowledge.
    - **Wiener-Hammerstein and block-structured models** — decompose nonlinear systems into linear dynamic blocks and static nonlinearities; interpretable and estimable with dedicated algorithms.
  - #### Robot-Specific Identification
    - **Rigid-body dynamics identification** — exploits the linear parameterisation of Newton-Euler equations in the inertial parameter vector (mass, first moment, inertia tensor components) of each link; enables [[Least-Squares Regression]] with condition-number-optimised excitation trajectories.
    - **Joint-level identification** — characterises motor constants, gear elasticity, Stribeck friction, and viscous damping for precise torque control by [[Whole Body Control]] and [[Model Predictive Control]] stacks.
    - **Deformable and flexible-body identification** — extends rigid-body methods to soft robots and flexible links using [[Finite Element Method]] priors and modal decomposition.
  - #### Statistical and Computational Tools
    - **[[Kalman Filter]] and Extended Kalman Filter** — provide the optimal linear state and parameter estimator for known noise covariance; widely used for joint state-parameter identification in real-time.
    - **Expectation-Maximisation (EM)** — handles latent-state models; alternates between estimating states (E-step) and maximising likelihood over parameters (M-step).
    - **[[Maximum Likelihood Estimation]]** — asymptotically efficient estimator; forms the statistical foundation of PEM.
    - **Regularisation (ridge, Lasso, elastic net)** — essential when parameter count exceeds data richness; sparse identification (SINDy) recovers governing equations from data using sparse regression over a library of candidate terms.

- ### Applications
  - #### Robotics and Mechatronics
    - Calibrating inertial parameters of humanoid robot limbs to enable [[Whole Body Control]] and whole-body torque distribution.
    - Identifying actuator models (motor constants, gear backlash) to improve feed-forward torque accuracy in high-speed manipulation.
    - Characterising soft-robot material properties for model-based deformation control.
    - Building data-driven residual models that augment nominal CAD-derived dynamics for [[Model Predictive Control]].
  - #### Aerospace and Automotive
    - Flight envelope identification for aircraft parameter estimation from flight test data; regulated under EASA and FAA airworthiness test procedures.
    - Vehicle dynamics identification for electronic stability control, path prediction, and autonomous driving systems ([[Model-Based Control]]).
    - Engine and gas-turbine identification for emissions optimisation and fault detection.
  - #### Process and Chemical Engineering
    - Industrial process identification for tuning PI/PID controllers and implementing [[Model Predictive Control]] in refinery and pharmaceutical manufacturing.
    - Subspace identification of large-scale [[MIMO]] processes with tens of inputs and outputs.
  - #### Structural Engineering and Civil Infrastructure
    - Operational modal analysis to identify natural frequencies and damping of bridges and buildings from ambient vibration ([[Structural Dynamics]]).
    - Structural health monitoring: detecting changes in identified modal parameters as indicators of damage.
  - #### Sim-to-Real Transfer in Robot Learning
    - Online or offline identification of simulator parameters (friction, actuator bandwidth, mass distribution) to reduce the [[Sim-to-Real Transfer]] gap for [[Reinforcement Learning]] policies.
    - Real-to-sim calibration pipelines: identify a differentiable simulator against real trajectories to produce a high-fidelity training environment.
    - Adaptive model estimation during deployment: continual identification with streaming data for systems that drift (wear, load changes, temperature).

- ### Relationships
  - enables:: [[Whole Body Control]]
  - enables:: [[Model Predictive Control]]
  - enables:: [[Adaptive Control]]
  - enables:: [[Digital Twin]]
  - requires:: [[Excitation Trajectory]]
  - requires:: [[State Estimation]]
  - requires:: [[Sensor Fusion]]
  - uses:: [[Least-Squares Regression]]
  - uses:: [[Gaussian Process Regression]]
  - uses:: [[Kalman Filter]]
  - uses:: [[Neural ODE]]
  - uses:: [[Maximum Likelihood Estimation]]
  - dependsOn:: [[Physics Simulation]]
  - dependsOn:: [[Signal Processing]]
  - dependsOn:: [[Experimental Design]]
  - contrastsWith:: [[Domain Randomisation]]
  - contrastsWith:: [[Model-Free Control]]
  - relatedTo:: [[Reinforcement Learning]]
  - relatedTo:: [[Observer Design]]
  - relatedTo:: [[Parameter Estimation]]
  - relatedTo:: [[Structural Dynamics]]
  - bridges-to:: [[Physics-Informed Neural Network]]
  - bridges-to:: [[Sim-to-Real Transfer]]

- ### Standards & Context
  - **MATLAB System Identification Toolbox** — de facto reference implementation; supports PEM, subspace, nonlinear ARX, and grey-box methods; widely used in academic and industrial practice.
  - **IEEE Control Systems Society** — publishes IEEE Transactions on Automatic Control and IEEE Control Systems Letters where system identification results are routinely peer-reviewed.
  - **IFAC (International Federation of Automatic Control)** — SYSID symposium is the leading specialised conference; standards documents and benchmarks (e.g., Draper benchmark, Silverbox dataset) provide community reference data.
  - **DO-178C / DO-331 (Model-Based Development)** — aerospace contexts require that identified models used in safety-critical flight control software meet model coverage and verification requirements.
  - **ISO 10218 and ISO/TS 15066** — robot safety standards that implicitly require verified dynamics models; system identification is a prerequisite for guaranteeing torque-limited safe operation in [[Collaborative Robotics]].
  - **DIN SPEC 91345 (Digital Twin)** — references model calibration (i.e., system identification) as a core [[Digital Twin]] lifecycle activity.
  - Benchmark datasets:
    - **Silverbox** — nonlinear electronic circuit; standard NARX/GP benchmark.
    - **Coupled Electric Drives** — classic MIMO benchmark from Ljung's group.
    - **AERO-MS** — aerospace flexible structure benchmark from ESA activities.

- ### Provenance
  - sources:: Ljung, L. (1999) System Identification: Theory for the User (2nd ed.), Prentice Hall; Verhaegen M. & Verdult V. (2007) Filtering and System Identification, Cambridge UP; Swevers J. et al. (1997) Optimal robot excitation and identification, IEEE T-RO.
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
