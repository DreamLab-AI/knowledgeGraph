- ### Definition
  - BayesFilter denotes the canonical recursive probabilistic framework for sequential state estimation in partially-observable stochastic dynamical systems, computing at each timestep the posterior belief bel(x_t) = p(x_t | z_{1:t}, u_{1:t}) over the latent system state x_t conditioned on the full history of observations z_{1:t} and control inputs u_{1:t}, decomposed via the Markov assumption into a two-stage recursion comprising the **prediction step** bel(x_t) = ∫ p(x_t | u_t, x_{t-1}) bel(x_{t-1}) dx_{t-1} (Chapman-Kolmogorov propagation of the prior belief forward through the motion model p(x_t | u_t, x_{t-1})) and the **measurement update step** bel(x_t) = η p(z_t | x_t) bel(x_t) (Bayes-rule incorporation of the new sensor observation z_t weighted by the observation likelihood p(z_t | x_t) and normalised by η to integrate to unity), constituting the theoretical substrate of [[Probabilistic Robotics]] (Thrun, Burgard & Fox 2005, MIT Press, 16,000+ citations) and the algorithmic backbone of essentially all modern robotic localisation, [[SLAM]] (Simultaneous Localisation and Mapping), target-tracking, sensor-fusion, navigation and autonomy stacks deployed across an estimated 12 million autonomous platforms globally (industrial robots, autonomous vehicles, drones, surgical manipulators, vacuum cleaners) and underlying the state-estimation modules of every major autonomous-vehicle programme (Waymo, Cruise, Mobileye, Wayve, Aurora, Tesla Autopilot, Mercedes Drive Pilot, BMW Personal Pilot), instantiating in practice through five canonical implementations differentiated by their representation of bel(x_t): the **[[Kalman Filter]]** (Kalman 1960) assuming linear-Gaussian dynamics and observations and tracking the posterior as a multivariate Gaussian N(μ_t, Σ_t) with closed-form O(n^3) updates (n = state dimension), with non-linear extensions including the **Extended Kalman Filter (EKF)** linearising via first-order Taylor expansion around the current mean, the **Unscented Kalman Filter (UKF)** propagating 2n+1 deterministic sigma points through the non-linear functions to recover second-order accuracy without explicit Jacobians (Julier & Uhlmann 1997), the **Information Filter** parameterising the inverse covariance (information matrix Ω = Σ^-1) for efficient multi-sensor fusion, and the **Cubature Kalman Filter** (Arasaratnam & Haykin 2009) using spherical-radial cubature rules; the **[[Particle Filter]]** (Gordon, Salmond & Smith 1993; Doucet, de Freitas & Gordon 2001) representing bel(x_t) as a weighted sample set {x_t^(i), w_t^(i)}_{i=1..N} drawn via Sequential Importance Sampling (SIS) and resampling (SIR — Sampling Importance Resampling), with variants including the auxiliary particle filter (Pitt & Shephard 1999), regularised particle filter, Rao-Blackwellised particle filter (Doucet et al. 2000) marginalising linear-Gaussian sub-states, and modern differentiable particle filters (Karkus, Hsu & Lee 2018; Jonschkowski, Rastogi & Brock 2018) enabling end-to-end gradient learning of motion and observation models; the **Histogram Filter / Grid-Based Filter** discretising the state space into cells and updating cell probabilities directly, used in topological localisation and small-dimensional problems; the **Gaussian Sum Filter** (Alspach & Sorenson 1972) representing multi-modal beliefs as mixtures of Gaussians for ambiguous-data-association problems; and the **HMM Filter** / **Forward Algorithm** (Baum-Welch 1970, Rabiner 1989) operating on discrete-state Hidden Markov Models with the same prediction/update structure applied to discrete transition and emission matrices; mathematically grounded in the **optimal non-linear filtering equations** (Stratonovich 1959; Kushner 1964; Zakai 1969) deriving the continuous-time stochastic-PDE evolution of the conditional density, with the discrete-time Bayes recursion arising as the standard tractable approximation; deployed pervasively across robotics ([[Monte Carlo Localization]] for mobile robot pose estimation in known maps with 50,000+ academic citations; EKF-SLAM, FastSLAM 1.0/2.0 (Montemerlo et al. 2002/2003), GraphSLAM, iSAM/iSAM2 (Kaess et al. 2008/2012) for simultaneous mapping; modern SLAM stacks RTAB-Map (Labbé & Michaud 2019), ORB-SLAM3 (Campos et al. 2021), LIO-SAM (Shan et al. 2020), Cartographer (Hess et al. 2016), VINS-Mono (Qin et al. 2018) all integrating Bayesian filters with non-linear optimisation back-ends); autonomous vehicles (lidar + camera + radar + IMU + GPS sensor fusion via Multi-Rate EKF/UKF in 99% of L2-L4 stacks, with typical state dimensions 15-50 covering pose, velocity, acceleration, biases, calibration parameters); target tracking (Joint Probabilistic Data Association — JPDA, Multiple Hypothesis Tracking — MHT, Bar-Shalom & Li 1995, deployed in air-traffic control, naval/missile defence, civilian radar); signal processing (HMM speech recognition, denoising, channel equalisation); economics and quantitative finance (Bayesian filtering for state-space time-series models, volatility tracking, latent-factor estimation); and increasingly hybridised with deep learning through learned observation models (Haarnoja et al. 2016 backprop Kalman, PoseNet+EKF), neural Kalman variants (Krishnan, Shalit & Sontag 2017 deep Kalman filters), and differentiable particle filters enabling end-to-end learning whilst preserving probabilistic guarantees; contrasted against deterministic estimators (least-squares without uncertainty quantification), pure black-box neural state estimators (offering no probabilistic guarantees, no uncertainty calibration, no principled sensor fusion), and batch optimisation methods such as bundle adjustment / pose-graph optimisation / factor graphs (offering global rather than recursive estimates at the cost of latency and memory), with the recursive Bayesian formulation remaining the gold-standard for real-time on-board state estimation under stringent latency constraints (typical perception loops at 10-200 Hz with millisecond-scale per-update budgets) and forming the conceptual core of the partially-observable Markov decision process (POMDP) belief-state representation underlying belief-space planning, active perception, and information-gathering control.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:BayesFilter
  - owl-role:: ProbabilisticEstimator
  - owl-inferred:: ai:RecursiveEstimator, ai:BayesianMethod, ai:StateEstimator, ai:StochasticFilter
  - belongs-to-domain:: [[AI-GroundedDomain]], [[RoboticsDomain]], [[ProbabilisticInferenceDomain]], [[ControlAndEstimationDomain]]
  - implemented-in-layer:: [[AlgorithmLayer]], [[PerceptionLayer]], [[SensorFusionLayer]]

- ### Relationships
  - is-subclass-of:: [[Recursive Estimator]], [[Bayesian Inference]], [[State Estimation]], [[Probabilistic Filter]], [[Sequential Monte Carlo]]
  - has-part:: [[Prediction Step]], [[Measurement Update Step]], [[Motion Model]], [[Observation Model]], [[Belief State]], [[Posterior Distribution]], [[Prior Distribution]], [[Normalisation Constant]]
  - requires:: [[Markov Assumption]], [[Probabilistic Motion Model]], [[Probabilistic Observation Model]], [[Initial Belief]], [[Sensor Measurements]], [[Control Inputs]]
  - enables:: [[Robot Localisation]], [[Simultaneous Localisation and Mapping]], [[Sensor Fusion]], [[Target Tracking]], [[Belief-Space Planning]], [[Active Perception]], [[Uncertainty Quantification]]
  - implements:: [[Chapman-Kolmogorov Equation]], [[Bayes Rule]], [[Recursive State Estimation]], [[Sequential Bayesian Updating]]
  - depends-on:: [[Probability Theory]], [[Stochastic Processes]], [[Hidden Markov Models]], [[Dynamic Bayesian Networks]], [[Measure Theory]]
  - supports:: [[Autonomous Navigation]], [[Mobile Robotics]], [[Autonomous Driving]], [[Aerospace Guidance Navigation Control]], [[Surgical Robotics]], [[Drone Autonomy]]
  - uses:: [[Gaussian Distribution]], [[Importance Sampling]], [[Resampling]], [[Linearisation]], [[Sigma-Point Sampling]], [[Monte Carlo Integration]]
  - contrasts-with:: [[Least Squares Estimation]], [[Batch Optimisation]], [[Pose Graph Optimisation]], [[Deterministic Observer]], [[Pure Neural State Estimation]]
  - related-to:: [[POMDP]], [[Factor Graph]], [[Smoothing And Mapping]], [[Variational Inference]], [[Expectation Maximisation]]
  - standardized-by:: [[Probabilistic Robotics Textbook]], [[IEEE Robotics And Automation Society]], [[ROS Navigation Stack]]

- ### Content

  ## Compositional Relationships (Components)
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:hasPart ai:PredictionStep))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:hasPart ai:MeasurementUpdateStep))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:hasPart ai:MotionModel))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:hasPart ai:ObservationModel))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:hasPart ai:BeliefState))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:hasPart ai:PosteriorDistribution))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:hasPart ai:NormalisationConstant))

	    ## Dependency Relationships
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:requires ai:MarkovAssumption))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:requires ai:ProbabilisticMotionModel))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:requires ai:ProbabilisticObservationModel))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:requires ai:InitialBelief))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:requires ai:SensorMeasurements))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:dependsOn ai:ProbabilityTheory))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:dependsOn ai:StochasticProcesses))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:dependsOn ai:HiddenMarkovModels))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:dependsOn ai:DynamicBayesianNetworks))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:dependsOn ai:BayesRule))

	    ## Capability Relationships
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:enables ai:RobotLocalisation))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:enables ai:SimultaneousLocalisationAndMapping))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:enables ai:SensorFusion))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:enables ai:TargetTracking))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:enables ai:UncertaintyQuantification))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:enables ai:BeliefSpacePlanning))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:supports ai:AutonomousNavigation))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:supports ai:AutonomousDriving))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:supports ai:AerospaceGNC))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:supports ai:SurgicalRobotics))

	    ## Implementation Relationships
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:implements ai:ChapmanKolmogorovEquation))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:implements ai:BayesRule))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:implements ai:RecursiveStateEstimation))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:hasInstance ai:KalmanFilter))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:hasInstance ai:ExtendedKalmanFilter))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:hasInstance ai:UnscentedKalmanFilter))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:hasInstance ai:InformationFilter))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:hasInstance ai:ParticleFilter))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:hasInstance ai:HistogramFilter))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:hasInstance ai:GaussianSumFilter))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:uses ai:GaussianDistribution))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:uses ai:ImportanceSampling))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:uses ai:MonteCarloIntegration))

	    ## Reduction Relationships
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:reduces ai:StateUncertainty))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:reduces ai:EstimationLatency))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:reduces ai:MemoryFootprint))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:reduces ai:ComputeBurden))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:reduces ai:SensorNoiseInfluence))

	    ## Association Relationships
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:relatedTo ai:POMDP))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:relatedTo ai:FactorGraph))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:relatedTo ai:VariationalInference))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:relatedTo ai:ExpectationMaximisation))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:contrastsWith ai:LeastSquaresEstimation))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:contrastsWith ai:BatchOptimisation))
	    SubClassOf(ai:BayesFilter
	      ObjectSomeValuesFrom(ai:contrastsWith ai:PureNeuralStateEstimation))

	    ## Data Properties (Characteristics)
	    DataPropertyAssertion(ai:hasIdentifier ai:BayesFilter "AI-2014"^^xsd:string)
	    DataPropertyAssertion(ai:authorityScore ai:BayesFilter "0.87"^^xsd:decimal)
	    DataPropertyAssertion(ai:globalDeployments ai:BayesFilter "12000000"^^xsd:integer)
	    DataPropertyAssertion(ai:typicalUpdateRateHz ai:BayesFilter "100"^^xsd:integer)
	    DataPropertyAssertion(ai:canonicalTextbookCitations ai:BayesFilter "16000"^^xsd:integer)
	    DataPropertyAssertion(ai:foundationYear ai:BayesFilter "1960"^^xsd:integer)

	    ## Property Constraints
	    SubClassOf(ai:BayesFilter
	      DataMinCardinality(1 ai:hasMotionModel))
	    SubClassOf(ai:BayesFilter
	      DataMinCardinality(1 ai:hasObservationModel))
	    SubClassOf(ai:BayesFilter
	      DataExactCardinality(1 ai:hasBeliefState))

	    ## Annotations
	    AnnotationAssertion(rdfs:label ai:BayesFilter "Bayes Filter"@en)
	    AnnotationAssertion(rdfs:comment ai:BayesFilter "Recursive probabilistic framework for sequential state estimation in partially-observable stochastic systems via predict-update Bayesian recursion bel(x_t) = η p(z_t|x_t) ∫ p(x_t|u_t,x_{t-1}) bel(x_{t-1}) dx_{t-1}; canonical implementations Kalman/EKF/UKF/Information/Particle/Histogram/Gaussian-Sum filters; foundational substrate of robotic localisation, SLAM, sensor fusion, target tracking deployed in 12M+ autonomous platforms."@en)
	    AnnotationAssertion(dcterms:identifier ai:BayesFilter "AI-2014"^^xsd:string)
	    AnnotationAssertion(dcterms:subject ai:BayesFilter "Probabilistic Robotics, State Estimation, Sensor Fusion, SLAM, Recursive Bayesian Inference"@en)

	  ## Property Characteristics
	  AsymmetricObjectProperty(ai:requires)
	  AsymmetricObjectProperty(ai:enables)
	  AsymmetricObjectProperty(ai:implements)
	  AsymmetricObjectProperty(ai:reduces)
	  TransitiveObjectProperty(ai:dependsOn)
	  FunctionalDataProperty(ai:typicalUpdateRateHz)
	  FunctionalDataProperty(ai:foundationYear)

  - ## About Bayes Filter

  - **Bayes Filter** is the canonical recursive probabilistic framework underlying virtually all modern state estimation for partially-observable stochastic dynamical systems. Where a deterministic observer (e.g. a Luenberger observer for linear systems, or a non-linear sliding-mode observer) yields a single point estimate of the latent state, a Bayes filter maintains a *full posterior distribution* — the **belief** bel(x_t) = p(x_t | z_{1:t}, u_{1:t}) — over all possible states consistent with the entire history of measurements z_{1:t} and control inputs u_{1:t}. This probabilistic posture is not aesthetic preference; it is the principled response to the irreducible noise of physical sensors (lidar range jitter, camera photon shot noise, IMU bias random walk, GPS multipath), the stochastic dynamics of physical actuators (wheel slip, aerodynamic disturbance, friction asymmetry), and the partial observability of high-dimensional latent states from limited sensor footprints.
  - The framework reduces the otherwise intractable inference problem of computing p(x_t | z_{1:t}, u_{1:t}) over an ever-growing measurement history to a *recursive* two-step update operating only on the previous belief and the current control/measurement pair. This reduction is exact whenever the **Markov assumption** holds — the future state depends only on the current state and current control, and the current measurement depends only on the current state — independence properties encoded structurally in the underlying [[Dynamic Bayesian Network]]. Under these assumptions the Bayes filter is the optimal Bayesian state estimator; any deviation from optimality in practice comes from the approximations introduced to make the integrals tractable (Gaussian assumptions, sample-based representations, grid discretisation, linearisation), not from the recursive structure itself.

  - ### Core Mathematical Framework

	  Consider a stochastic system with hidden state x_t ∈ X (typically X = R^n or SE(3) × R^m for rigid-body pose plus auxiliary variables), control input u_t ∈ U, and measurement z_t ∈ Z. The system is fully characterised by three probabilistic ingredients:

	  - **Motion model** (state transition): p(x_t | x_{t-1}, u_t) — describing how the state evolves under the control input, encoding process noise from imperfect actuation, unmodelled dynamics, and environmental disturbance.
	  - **Observation model** (measurement likelihood): p(z_t | x_t) — describing how observations are generated from the current state, encoding sensor noise, geometric projection, calibration errors, and occlusion.
	  - **Initial belief**: bel(x_0) = p(x_0) — the prior distribution over the initial state, often broad (uniform over a map for global localisation) or peaked (delta-like for tracking with known initialisation).

	  The full Bayes filter recursion derives from applying Bayes' rule and the Markov assumption to the joint density p(x_{0:t}, z_{1:t} | u_{1:t}). After marginalising past states, we obtain the two-step update:

	  **Prediction step (time update)**: Propagate the previous posterior forward through the motion model:

	  bel(x_t) := ∫ p(x_t | u_t, x_{t-1}) bel(x_{t-1}) dx_{t-1}

	  This is the Chapman-Kolmogorov equation applied to the controlled Markov chain. It computes the *predictive* density — the belief about x_t given everything we knew before the new measurement arrived. Intuitively, predictive uncertainty *grows* (process noise accumulates) unless the dynamics are contractive.

	  **Measurement update step (correction)**: Incorporate the new measurement via Bayes' rule:

	  bel(x_t) := η · p(z_t | x_t) · bel(x_t)

	  where η = 1 / ∫ p(z_t | x_t) bel(x_t) dx_t is the normalisation constant. The likelihood p(z_t | x_t) re-weights the predictive belief by how consistent each candidate state is with the observation. Intuitively, posterior uncertainty *shrinks* — measurements provide information.

	  The recursion is initialised with bel(x_0) and iterated for t = 1, 2, ... indefinitely. Critically, the algorithm requires *only* the previous belief, not the full history of past beliefs or measurements — a O(1) memory footprint in t, modulo the representation cost of bel itself.

	  **Continuous-time limit — the Stratonovich-Kushner equation**: When measurements arrive continuously rather than in discrete steps, the belief evolves according to a stochastic partial differential equation derived by Stratonovich (1959/60) and Kushner (1964). For an Itô diffusion dx = f(x)dt + σ(x)dw with measurements dz = h(x)dt + dv, the unnormalised conditional density q(x,t) satisfies the Zakai equation (Zakai 1969):

	  dq = L*q dt + q h^T R^{-1} dz

	  where L* is the Fokker-Planck operator. The normalised posterior obeys the Kushner-Stratonovich equation. These are the optimal non-linear filtering equations; the discrete-time Bayes filter is their natural sampling-time discretisation and the basis for the entire family of practical implementations.

	  **Markov assumption (formal)**: The Bayes filter relies on two conditional-independence properties:

	  - p(x_t | x_{0:t-1}, z_{1:t-1}, u_{1:t}) = p(x_t | x_{t-1}, u_t) — the state is a complete summary of the past for predicting the future.
	  - p(z_t | x_{0:t}, z_{1:t-1}, u_{1:t}) = p(z_t | x_t) — measurements depend only on the current state.

	  When these fail (e.g. correlated sensor noise across time, unmodelled latent variables, time-varying dynamics), the recursion remains computable but loses its optimality guarantee; remedies include state-space augmentation (incorporating bias/scale factors/correlation states into x_t), input-dependent noise models, or moving-horizon estimators.

	  **Filtering versus Smoothing**: The Bayes filter computes the *filtering* distribution p(x_t | z_{1:t}, u_{1:t}) — the marginal posterior over the current state given measurements up to the current time. Two related distributions arise in offline analysis: the *smoothing* distribution p(x_t | z_{1:T}, u_{1:T}) for some terminal time T ≥ t (uses future measurements; recovered by combining the forward Bayes filter with a backward sweep via the Rauch-Tung-Striebel or two-filter formulas for Gaussian models, or Forward-Backward / Two-Filter algorithms for general models), and the *prediction* distribution p(x_{t+k} | z_{1:t}, u_{1:t+k}) for k ≥ 1 (forecasting ahead by k steps; obtained by iterating the prediction step k times without intervening updates). Smoothing improves estimate quality where latency permits (offline SLAM, batch analysis, lab data processing); the filter is the real-time variant constrained to use only past measurements.

	  **Information-theoretic perspective**: Each measurement update reduces the entropy of the posterior — the information gain I(z_t; x_t) = H[x_t | z_{1:t-1}] − H[x_t | z_{1:t}] quantifies how much information the measurement contributed about the state. For Gaussian beliefs this is the standard mutual-information quantity ½ log |Σ̄_t| / |Σ_t|; for general beliefs it can be estimated via samples. Active perception frameworks pose action selection as maximisation of expected information gain — the Bayes filter both provides the belief state and the quantitative substrate for utility evaluation.

  - ### Canonical Implementations: Implementation Families

	  Different representations of bel(x_t) yield different Bayes-filter implementations, each with distinct computational and statistical trade-offs.

	  #### 1. The Kalman Filter (Linear-Gaussian Closed Form)

	  Under linear-Gaussian assumptions — motion model x_t = A_t x_{t-1} + B_t u_t + ε_t with ε_t ~ N(0, R_t), observation model z_t = C_t x_t + δ_t with δ_t ~ N(0, Q_t), initial belief bel(x_0) = N(μ_0, Σ_0) — the posterior remains exactly Gaussian for all t and the Bayes recursion collapses to closed-form updates on the mean and covariance:

	  **Predict**: μ̄_t = A_t μ_{t-1} + B_t u_t; Σ̄_t = A_t Σ_{t-1} A_t^T + R_t

	  **Update**: K_t = Σ̄_t C_t^T (C_t Σ̄_t C_t^T + Q_t)^{-1}; μ_t = μ̄_t + K_t (z_t - C_t μ̄_t); Σ_t = (I - K_t C_t) Σ̄_t

	  where K_t is the **Kalman gain** — the optimal blending weight between prediction and measurement. The Kalman filter (Kalman 1960) is the minimum-mean-square-error linear estimator under linear-Gaussian assumptions; it is also the maximum-a-posteriori (MAP) estimator and the Bayes-optimal filter. Its dominance in aerospace guidance (Apollo IMU integration, modern INS/GPS coupling), control engineering, and signal processing for six decades is unmatched in algorithmic history.

	  **Extended Kalman Filter (EKF)**: For non-linear dynamics x_t = g(u_t, x_{t-1}) + ε_t and observations z_t = h(x_t) + δ_t, the EKF linearises g and h via first-order Taylor expansion around the current mean — replacing A_t by the Jacobian G_t = ∂g/∂x|_{μ_{t-1}, u_t} and C_t by H_t = ∂h/∂x|_{μ̄_t}. The EKF is the de facto workhorse of robotic localisation and INS/GPS fusion; it is provably suboptimal but performs excellently when linearisation error is small relative to noise covariance. Failure modes include divergence in highly non-linear regimes and inconsistent covariance estimates when the second-order terms matter (well-documented in EKF-SLAM consistency analyses by Bailey, Nieto, Guivant, Stevens & Nebot 2006).

	  **Unscented Kalman Filter (UKF)**: Julier & Uhlmann (1997) replaced linearisation with the unscented transform: deterministically sample 2n+1 sigma points {χ^(i)} from the current Gaussian, propagate each through the non-linear function, and reconstruct the predicted mean and covariance by weighted moment matching. The UKF achieves third-order accuracy in mean and second-order in covariance for any non-linearity (vs first-order for EKF), avoids Jacobian computation, and handles discontinuities gracefully. The cost is 2n+1 function evaluations per step; for n ≤ 30 this is competitive with EKF. The UKF is now standard in inertial navigation, attitude estimation (quaternion-based UKFs handle the SO(3) manifold via the unscented quaternion formulation), and biomedical signal processing.

	  **Information Filter**: Parameterises the Gaussian via its information matrix Ω = Σ^{-1} and information vector ξ = Ω μ. The measurement update becomes simply additive: Ω_t = Ω̄_t + H_t^T Q_t^{-1} H_t; ξ_t = ξ̄_t + H_t^T Q_t^{-1} z_t. This makes the information filter ideal for distributed sensor fusion (multiple sensors contribute information additively), sparse-information SLAM (SEIF — Sparse Extended Information Filter, Thrun et al. 2004), and decentralised estimation networks. The prediction step is more expensive (involves an explicit Σ̄_t computation), trading off against cheap multi-sensor updates.

	  **Cubature Kalman Filter (CKF)**: Arasaratnam & Haykin (2009) use a spherical-radial cubature rule over the standard Gaussian to evaluate non-linear moment integrals; offers numerical-stability advantages over the UKF for high-dimensional states (n > 30) where the UKF's scaling parameters become sensitive.

	  #### 2. The Particle Filter (Sequential Monte Carlo)

	  Particle filters (Gordon, Salmond & Smith 1993; Doucet, de Freitas & Gordon 2001) represent bel(x_t) non-parametrically as a weighted sample set {x_t^(i), w_t^(i)}_{i=1..N}, with arbitrary multi-modal/non-Gaussian shape capacity. The algorithm executes three primitives per timestep:

	  - **Sample (propagate)**: For each particle, draw x_t^(i) ~ p(x_t | u_t, x_{t-1}^(i)) — push each sample through the motion model with fresh process noise.
	  - **Re-weight**: Multiply each weight by the observation likelihood: w_t^(i) ∝ w_{t-1}^(i) · p(z_t | x_t^(i)). Normalise so weights sum to one.
	  - **Resample (SIR variant)**: Draw N new particles with replacement from the current set proportional to weights. Resampling concentrates samples on high-likelihood regions and is essential to prevent **weight degeneracy** — the pathology where a single particle accumulates all weight and the effective sample size N_eff = 1/Σ(w_t^(i))^2 collapses.

	  **Variants**:
	  - **SIS (Sequential Importance Sampling)**: No resampling. Suffers degeneracy after ~10-50 steps depending on noise scales; mostly a pedagogical baseline.
	  - **SIR (Sampling Importance Resampling)**: Resample at every step. Robust; the standard "bootstrap" particle filter (Gordon-Salmond-Smith). Risk of **sample impoverishment** — repeated resampling causes diversity loss, especially with small process noise.
	  - **Auxiliary Particle Filter (APF)**: Pitt & Shephard (1999) introduce a one-step look-ahead — auxiliary indices select promising particles before propagation. Reduces variance when likelihoods are peaked relative to predictive density.
	  - **Regularised Particle Filter**: After resampling, perturb each particle with a kernel (typically Epanechnikov or Gaussian) to restore diversity. Approximates the posterior with a smooth kernel density.
	  - **Rao-Blackwellised Particle Filter (RBPF)**: Doucet, de Freitas, Murphy & Russell (2000). When the state factorises x_t = (x_t^L, x_t^N) with x_t^L conditionally linear-Gaussian given x_t^N, marginalise x_t^L analytically via a Kalman filter conditioned on each particle. FastSLAM (Montemerlo et al. 2002) exemplifies this: pose particles + landmark Kalman filters per particle.
	  - **Differentiable Particle Filters**: Karkus, Hsu & Lee (2018), Jonschkowski, Rastogi & Brock (2018), Corenflos et al. (2021). Replace the discrete resampling step with a soft/differentiable analogue (resampling via Sinkhorn/optimal transport, or learned proposals) to enable end-to-end gradient learning of motion/observation models from data.

	  **Computational profile**: O(N) per step (linear in particle count); typical N = 100-10,000 for robotic localisation, N = 10^4-10^6 for high-dimensional tracking. GPU implementations achieve N = 10^6+ at 100 Hz update rates.

	  #### 3. Histogram and Grid-Based Filters

	  Discretise X into cells {X_k}; represent bel as a probability mass function p_k = P(x_t ∈ X_k). The Bayes recursion becomes matrix-vector arithmetic on the cell probabilities. Used historically in early mobile-robot localisation (Burgard, Fox & Thrun 1996 — Markov localisation on occupancy-grid cells), and modern topological localisation over discrete nodes. Curse of dimensionality limits practicality to n ≤ 3-4 continuous dimensions or discrete state spaces.

	  #### 4. Gaussian Sum Filter (Mixture Model)

	  Alspach & Sorenson (1972) represent bel as a mixture of Gaussians Σ_k α_k N(μ_k, Σ_k). Each component is updated by EKF/UKF; mixture weights are re-weighted by component-wise likelihood. Component count typically grows exponentially without merging/pruning heuristics. Naturally handles multi-modal beliefs arising from ambiguous data association in target tracking and multi-hypothesis localisation. Modern variants — Interacting Multiple Model (IMM) filters — switch between component dynamics models for manoeuvring-target tracking.

	  #### 5. The HMM Filter / Forward Algorithm

	  For finite discrete state spaces with discrete transition matrix A and emission matrix B, the Bayes filter specialises to the **forward algorithm** of HMM inference (Baum & Welch 1970; Rabiner 1989): α_t(j) = p(z_t | x_t = j) Σ_i α_{t-1}(i) A_{ij}. Foundational for speech recognition, biological sequence analysis, and discrete-state tracking.

	  #### Comparative Summary

	  No single implementation dominates; selection depends on the dynamics, noise structure, and computational envelope:

	  - **State-dimension scaling**: KF/EKF/UKF scale O(n^3) per update via matrix inversion; Information Filter the same; particle filters O(N·c) where c is per-particle motion-model cost; histogram filters O(K) where K = cell count, which itself grows exponentially with dimension. For n = 6 (3D pose), KF variants comfortably real-time; for n = 50-200 (legged-robot full body, calibration-augmented state), KF still tractable; for n > 1000 (full SLAM with all landmarks), sparse-information forms (SEIF, GraphSLAM) and factor graphs become preferable.
	  - **Multi-modality**: Particle filters and Gaussian-sum filters natively represent multi-modal posteriors; the standard Kalman family cannot — ambiguous data association requires either Gaussian-sum extension or explicit hypothesis trees.
	  - **Non-Gaussian noise**: Particle filters handle arbitrary noise distributions including heavy-tailed (Student-t, mixture) and bounded distributions; Kalman variants assume Gaussianity (or robustify via Huber loss, M-estimation, or Mahalanobis gating).
	  - **Computational regularity**: Kalman variants are deterministic, predictable, and amenable to formal verification — preferred in safety-critical (ASIL-D) systems. Particle filters have stochastic runtime and variance — preferred in research and applications tolerant of probabilistic guarantees.
	  - **Hybrid approaches**: Production stacks often layer different filters — for example a coarse particle filter for global localisation initialising a fine EKF for local tracking, with the EKF promoted back to a particle filter on covariance-divergence detection (the "EKF + recovery PF" pattern in ROS AMCL configurations).

  - ### Use Cases / Major Application Families

	  Bayes filters underpin essentially every probabilistic state-estimation system deployed in production robotics, autonomous driving, aerospace, and signal processing. Below we survey major deployment families.

	  #### Robot Localisation

	  The canonical application — estimating a robot's pose x_t = (x, y, θ) (or SE(3) pose for aerial/underwater) inside a known map M given odometry u_t and sensor readings z_t (lidar, sonar, camera, RGB-D).

	  - **Monte Carlo Localisation (MCL)** — Dellaert, Fox, Burgard & Thrun (1999), Thrun & Burgard's textbook formulation. Particle filter representation of robot pose. Handles the "global localisation" / kidnapped-robot problem (broad initial belief, multi-modal hypotheses converging as evidence accumulates). Deployed in essentially every ROS-based mobile robot via the `amcl` (Adaptive MCL) package; AMCL adapts particle count via KLD-sampling (Fox 2003) — fewer particles when belief is concentrated, more when uncertain.
	  - **EKF Localisation**: Gaussian belief over pose with linearised motion (odometry) and observation (range-bearing to known landmarks) models. Faster than MCL but cannot represent multi-modal beliefs — fails on global-localisation problems.
	  - **Grid-based / Markov Localisation**: Burgard, Fox & Thrun (1996). Histogram filter over discretised (x,y,θ) cells. Useful in small or topologically simple environments.

	  #### Simultaneous Localisation and Mapping (SLAM)

	  The robot must estimate its pose *and* the map simultaneously — joint inference over an enormously high-dimensional state including all landmark positions or grid-cell occupancies.

	  - **EKF-SLAM** — Smith, Self & Cheeseman (1986/1990), Dissanayake et al. (2001). Joint Gaussian over (robot pose, all landmark positions). The covariance matrix is dense, scaling O(N^2) in landmark count; intractable beyond ~100-1000 landmarks. Suffers known consistency issues from linearisation (Bailey et al. 2006).
	  - **FastSLAM 1.0/2.0** — Montemerlo, Thrun, Koller & Wegbreit (2002/2003). Rao-Blackwellised particle filter: pose particles + per-particle independent Kalman filters for landmarks. Scales to thousands of landmarks; foundational for the DARPA Grand Challenge era.
	  - **GraphSLAM / Pose-Graph Optimisation**: Dellaert & Kaess (2006), iSAM / iSAM2 (Kaess et al. 2008/2012). Reformulates SLAM as non-linear least-squares on a factor graph rather than a recursive filter — exact but batch. The dichotomy "filtering vs smoothing" — Bayes filter recursion gives the marginal p(x_t | z_{1:t}); smoothing computes p(x_{0:t} | z_{1:t}) over the whole trajectory. Modern factor-graph back-ends (GTSAM, g2o, Ceres) dominate offline-quality SLAM whilst Bayes filters remain on real-time front-ends.
	  - **RTAB-Map** (Labbé & Michaud 2019): Real-time appearance-based SLAM combining loop closures, graph optimisation, and a Bayesian recursive front-end. Widely deployed on consumer/research mobile platforms.
	  - **ORB-SLAM3** (Campos, Elvira, Gomez Rodriguez, Montiel & Tardos 2021): Visual-inertial SLAM with IMU pre-integration and multi-map merging; Bayesian filtering integrated with bundle adjustment.
	  - **LIO-SAM** (Shan, Englot, Meyers, Wang, Ratti & Rus 2020): Tightly-coupled lidar-inertial odometry via factor graphs with iEKF-style sliding-window updates.
	  - **Cartographer** (Hess, Kohler, Rapp & Andor 2016): Google's 2D/3D real-time SLAM with sub-map fusion; bayesian occupancy mapping over per-cell probabilities.
	  - **VINS-Mono / VINS-Fusion** (Qin, Li & Shen 2018): Visual-inertial state estimator widely used in drone autonomy stacks.

	  #### Autonomous Vehicles: Sensor Fusion

	  Modern AV stacks fuse lidar + camera + radar + IMU + GPS + wheel odometry through a multi-rate EKF or UKF estimating typically 15-50 state dimensions (3D pose, velocity, acceleration, IMU biases, sensor extrinsic calibration corrections). The Kalman filter's optimality under linear-Gaussian assumptions and its near-optimality under modest non-linearity make it the de facto choice; every major AV programme (Waymo, Cruise, Mobileye, Wayve, Aurora, Tesla, Mercedes Drive Pilot, BMW Personal Pilot, NVIDIA DRIVE) ships an EKF/UKF-based ego-motion estimator. Robust extensions handle outliers (Mahalanobis gating, χ²-tests on innovations), multi-rate operation (sensors with disparate sampling rates), and time-delayed measurements (out-of-sequence updates via measurement augmentation or stochastic cloning).

	  #### Target Tracking

	  Estimating positions/velocities of one or more moving targets from noisy detections with ambiguous data association.

	  - **Joint Probabilistic Data Association (JPDA)** — Bar-Shalom & Tse (1975), Bar-Shalom & Fortmann (1988). Soft association: each detection is assigned to each target with a posterior probability; Kalman update is the expectation over associations. Standard in civilian air-traffic control and naval surveillance.
	  - **Multiple Hypothesis Tracking (MHT)** — Reid (1979), Blackman (2004). Maintain a tree of association hypotheses; prune by likelihood. Computationally expensive but handles dense scenes (military radar tracking dozens of targets).
	  - **Probability Hypothesis Density (PHD) Filter** — Mahler (2003). Random finite-set formalism. Tracks the intensity function of a multi-target point process rather than individual targets; principled birth/death of targets.

	  #### Signal Processing and HMMs

	  - **Speech recognition**: Discrete HMM filters (forward algorithm) underlay every classical ASR system from the 1980s to ~2015 (HTK, Sphinx, Kaldi acoustic models). Neural-network acoustic models still feed into HMM-based decoders for many production systems.
	  - **Bioinformatics**: Profile HMMs for sequence alignment (HMMER), gene prediction (GENSCAN).
	  - **Channel equalisation**: Bayesian filters for symbol estimation in noisy communication channels.

	  #### Aerospace Guidance, Navigation and Control (GN&C)

	  EKFs have flown on every NASA crewed mission since Apollo (the Apollo Guidance Computer's INS integration was an early Kalman implementation). Modern applications include GPS/INS coupling on commercial aircraft, attitude determination on spacecraft (QUEST + EKF, MEKF — Multiplicative EKF for quaternion states), missile guidance, and re-entry navigation.

	  #### Economics and Quantitative Finance

	  Bayesian filtering underlies state-space time-series models — stochastic volatility models (Kim, Shephard & Chib 1998), latent-factor models, dynamic linear models (Harrison & West 1989). The Kalman filter is the maximum-likelihood estimator for ARIMA models and the standard tool for term-structure estimation in fixed-income markets. Particle filters in macroeconomics (Fernández-Villaverde & Rubio-Ramírez 2007) enable Bayesian estimation of non-linear dynamic stochastic general equilibrium (DSGE) models with non-Gaussian shocks. The Bank of England's macroeconomic forecasting suite includes filter-based state-space estimators.

	  #### Neuroscience and the Bayesian Brain

	  Computational neuroscience has increasingly framed cortical processing as approximate Bayesian inference, with **predictive coding** (Rao & Ballard 1999; Friston 2010) interpreting cortical hierarchies as predictive Bayesian filters propagating predictions top-down and prediction errors bottom-up. Whilst not literal Kalman filters in the brain, the architectural homology is striking and has motivated entire research programmes on the Bayesian brain hypothesis. UK groups (Friston's Wellcome Centre for Human Neuroimaging at UCL; Sheffield Robotics neurorobotics) have been world-leading in this synthesis.

	  #### Industrial Process Monitoring and Fault Detection

	  EKFs and UKFs estimate latent process variables (catalyst activity, fouling rates, internal temperatures) in chemical plants, oil refineries, and pharmaceutical batch reactors from sparse instrumented measurements. Innovation-sequence monitoring detects sensor faults and process anomalies — the χ²-test on the normalised innovation squared (NIS) is the textbook approach (Mehra & Peschon 1971). Modern Industry-4.0 deployments (ABB Ability, Siemens MindSphere, Honeywell Forge) integrate filter-based estimators with anomaly-detection pipelines.

	  #### Weather and Climate Data Assimilation

	  At the largest scale, the **Ensemble Kalman Filter (EnKF)** (Evensen 1994) and its variants (LETKF, EnKF-OI) are the foundational data-assimilation algorithms for numerical weather prediction at ECMWF (European Centre for Medium-Range Weather Forecasts, Reading UK), the UK Met Office, NOAA, and major national meteorological services. State dimensions reach 10^8-10^9 (3D atmospheric grids × variables); ensemble sizes 50-200; assimilation cycles 6-hourly. The 4D-Var family combines variational smoothing with filtering elements. Climate reanalyses (ERA5, MERRA-2) similarly rest on these recursive Bayesian foundations.

  - ### Academic Context: Theoretical Foundations and Research Milestones

	  The Bayes filter's intellectual lineage spans seventy years across statistics, control theory, signal processing, and robotics.

	  #### Foundational Era (1940s-1970s)

	  - **Wiener filter** (Wiener 1949): Optimal linear MMSE filter for stationary signals via spectral factorisation — the frequency-domain ancestor of the Kalman filter.
	  - **Kalman filter** (Kalman 1960; Kalman & Bucy 1961): Recursive time-domain formulation. The Bucy formulation handles continuous-time systems. Kalman's 1960 paper has been called "the most important contribution to estimation theory in the 20th century" and earned him the IEEE Medal of Honor and the National Medal of Science.
	  - **Stratonovich-Kushner equations** (Stratonovich 1959/60; Kushner 1964): Optimal non-linear filtering as a stochastic PDE on the conditional density. Established the theoretical ceiling — the Bayes filter is precisely the discrete-time analogue.
	  - **Zakai equation** (Zakai 1969): The unnormalised conditional density obeys a *linear* SPDE — analytically more tractable than the normalised Kushner-Stratonovich equation.
	  - **Forward algorithm / Baum-Welch** (Baum, Petrie, Soules & Weiss 1970): Bayesian recursion for hidden Markov models. Independently developed the same predict/update structure for discrete state spaces.

	  #### Non-Linear Extensions (1970s-1990s)

	  - **Extended Kalman Filter**: Schmidt (1966) at NASA Ames adapted Kalman's linear theory to non-linear aerospace problems via Taylor linearisation — the first widespread non-linear filter.
	  - **Gaussian Sum Filter** (Alspach & Sorenson 1972): Mixture-of-Gaussians representation for multi-modal posteriors.
	  - **Interacting Multiple Model (IMM)** (Blom & Bar-Shalom 1988): Markov-jump linear systems for manoeuvring target tracking.
	  - **Unscented transform / UKF** (Julier & Uhlmann 1997, Julier, Uhlmann & Durrant-Whyte 2000): Sigma-point alternative to linearisation.

	  #### The Particle Filter Revolution (1993-2005)

	  - **Bootstrap filter** (Gordon, Salmond & Smith 1993): The breakthrough — sequential importance sampling with resampling, making non-linear non-Gaussian filtering practically tractable. Originated in tracking applications at the UK Defence Research Agency.
	  - **CONDENSATION** (Isard & Blake 1998): Particle filter for visual tracking — landmark paper bringing PFs to computer vision.
	  - **Rao-Blackwellised PF** (Doucet, de Freitas, Murphy & Russell 2000): Marginalising tractable sub-states.
	  - **Sequential Monte Carlo Methods in Practice** (Doucet, de Freitas & Gordon, eds., 2001): The canonical edited volume.
	  - **Beyond the Kalman Filter** (Ristic, Arulampalam & Gordon 2004): Practical particle-filter handbook for tracking applications.

	  #### Probabilistic Robotics (1996-2005)

	  - **Markov localisation** (Burgard, Fox & Thrun 1996): Grid-based Bayes filter for mobile robot localisation in known maps.
	  - **Monte Carlo Localisation** (Dellaert, Fox, Burgard & Thrun 1999): Particle-filter localisation; KLD-sampling adaptive variant (Fox 2003).
	  - **FastSLAM** (Montemerlo, Thrun, Koller & Wegbreit 2002/2003): Rao-Blackwellised PF for SLAM.
	  - **Probabilistic Robotics** (Thrun, Burgard & Fox 2005): The canonical textbook codifying the Bayes-filter view of robotics. 16,000+ citations; required reading in essentially every robotics graduate programme.

	  #### Modern Era (2010-2026): Optimisation, Differentiable Filters, Hybrid Methods

	  - **iSAM / iSAM2** (Kaess, Ranganathan & Dellaert 2008/2012): Incremental smoothing on factor graphs — a smoothing rather than filtering paradigm offering exact recursive updates via Bayes tree manipulation.
	  - **Sliding-window iterated EKF**: Combines filter recursion with iterated relinearisation over a moving window for visual-inertial odometry (MSCKF — Mourikis & Roumeliotis 2007).
	  - **Differentiable particle filters** (Karkus, Hsu & Lee 2018; Jonschkowski, Rastogi & Brock 2018): End-to-end gradient learning of motion/observation models through soft/learned resampling.
	  - **Deep Kalman filters** (Krishnan, Shalit & Sontag 2015/2017): Neural networks parameterise transition and emission distributions of a state-space model trained via variational inference.
	  - **Backprop Kalman / PoseNet+EKF** (Haarnoja, Ajay, Levine & Abbeel 2016): Combining learned observation models with Kalman update layers in differentiable end-to-end visual odometry.
	  - **Neural ODEs and continuous-time deep filters** (Chen et al. 2018; De Brouwer et al. 2019): Bridge between deep generative models and continuous-time stochastic filtering.

  - ### Practical Considerations: Implementation Engineering

	  Deploying Bayes filters in production systems requires addressing a recurring set of engineering challenges that the textbook formulation glosses over.

	  #### Numerical Conditioning of the Kalman Family

	  The naïve covariance-update formula Σ_t = (I − K_t C_t) Σ̄_t loses positive-definiteness due to floating-point round-off; production implementations universally use the **Joseph form** Σ_t = (I − K_t C_t) Σ̄_t (I − K_t C_t)^T + K_t Q_t K_t^T which is symmetric by construction and stable. For high-precision applications, **square-root forms** (Potter 1963, Bierman's UD factorisation) propagate the Cholesky factor S where Σ = S S^T, eliminating round-off-induced loss of symmetry and halving the required precision. The square-root UKF (van der Merwe & Wan 2001) extends this discipline to the unscented family.

	  #### State-Space Manifolds: SO(3), SE(3), Lie-Group Filters

	  Robot pose lives on SE(3) — the special Euclidean group of 3D rigid-body transformations — not on a vector space. Treating quaternions or rotation matrices as Euclidean variables breaks orthogonality and produces drift. The correct mathematical framework is the **error-state Kalman Filter** (ESKF; Sola 2017) or **invariant EKF** (IEKF; Barrau & Bonnabel 2017), which represent the nominal state on the manifold and the error state in the Lie algebra (so(3) for rotation, se(3) for poses), propagating Gaussian uncertainty in the tangent space. The IEKF has provable consistency properties for SLAM that the standard EKF lacks (Barrau & Bonnabel 2017's "invariant observer design"), and underlies modern visual-inertial systems such as OpenVINS and Kalibr. UK groups (Imperial Dyson Robotics, Oxford ORI) have contributed significantly to this manifold-aware filter literature.

	  #### Sensor Synchronisation and Out-Of-Sequence Measurements

	  Real systems deliver measurements out-of-order — IMU at 1000 Hz arrives before lower-rate lidar/camera measurements that timestamp earlier. Solutions include the **stochastic cloning** technique (Mourikis & Roumeliotis 2007) keeping past states in the filter; the **delayed-state filter** for laggy GPS updates; and IMU **pre-integration** (Forster, Carlone, Dellaert & Scaramuzza 2017) which compresses high-rate IMU measurements into a single relative-motion factor decoupled from the slow update rate. Pre-integration is now standard in visual-inertial odometry stacks (VINS, ORB-SLAM3, OpenVINS).

	  #### Outlier Rejection and Robust Filtering

	  Real sensors produce occasional gross outliers (lidar reflections off mirrors, GPS multipath, camera mis-associations) that violate the Gaussian-noise assumption and cause filter divergence. Standard mitigations include: **Mahalanobis gating** (rejecting measurements with normalised innovation squared (z_t − ẑ_t)^T S_t^{-1} (z_t − ẑ_t) exceeding a χ² threshold); **Huber loss** replacing the quadratic likelihood with a linear-quadratic robust loss; **switchable constraints** (Sünderhauf & Protzel 2012) introducing per-measurement on/off latent variables; **graduated non-convexity** (Yang & Carlone 2020) for batch optimisation; and **iteratively-reweighted Kalman** updates. Production AV stacks layer multiple robustness mechanisms.

	  #### Tuning Process and Measurement Noise

	  Kalman filter performance hinges on the noise covariances R (process) and Q (measurement). Under-tuned Q causes the filter to over-trust measurements (jittery state); over-tuned Q causes over-smoothing (lag in tracking). Practical tuning approaches include: **maximum-likelihood estimation** of covariances from training-set residuals; **adaptive Kalman filters** that estimate noise statistics online from innovation sequences (Mehra 1972); **noise covariance estimation via expectation-maximisation** treating R, Q as latent parameters (Ghahramani & Roweis 1999); and **deep learning of noise covariances** as a function of operating conditions (recent NeurIPS/ICML work 2022-2025).

	  #### Computational Budgets

	  Production filter implementations target deterministic per-step latency budgets — typically 1-10 ms on embedded CPUs, 100 µs-1 ms on automotive ECUs. Particle filters present a particular challenge: the per-step cost N × (motion-model + likelihood) cost must fit in budget. Optimisations include GPU-parallel particle propagation (cuRAND for stochastic dynamics, custom CUDA kernels for likelihood evaluation), adaptive particle counts (KLD-sampling, Fox 2003), and proposal distributions that exploit the measurement to reduce N (Doucet et al.'s optimal importance distribution).

	  #### Verification and Validation

	  Safety-critical Bayes-filter implementations (ASIL-D under ISO 26262, SIL-3 under IEC 61508, DAL-A under DO-178C for aerospace) require evidence of correct numerical behaviour across the operational envelope. Standard practices: regression testing on recorded sensor logs; injection testing with synthetic faults; Monte Carlo simulation campaigns covering rare scenarios; formal verification of state-machine logic (TLA+, SCADE); and consistency monitoring of estimator runtime statistics (NIS distribution, log-likelihood drift) flagging deviations from expected behaviour.

  - ### Current Landscape (2026)

	  In 2026 the Bayes filter is paradoxically both venerable and ubiquitous: a 65-year-old framework that powers a still-expanding constellation of autonomy applications.

	  - **Robotics stack penetration**: Essentially 100% of production mobile-robot localisation pipelines use a Bayes-filter variant — AMCL/MCL for warehouse AGVs (Amazon Robotics 750,000+ units, Locus Robotics, Fetch Robotics), EKF/UKF for sensor fusion on field robots (Anybotics ANYmal, Boston Dynamics Spot, Agility Digit), and tightly-coupled VIO filters on consumer drones (DJI Mavic, Skydio).
	  - **Autonomous driving**: The state-estimation subsystem of every major AV stack is filter-based. Waymo Driver, Cruise, Mobileye Drive, Aurora Driver, Wayve, Tesla FSD, Mercedes Drive Pilot, BMW Personal Pilot all integrate multi-rate EKFs/UKFs for ego-motion estimation. Filter-based local mapping (occupancy grids with Bayesian per-cell updates) remains standard for short-range obstacle representation; longer-range mapping has migrated to learned BEV (bird's-eye-view) representations but still consumed by filter-based downstream trackers.
	  - **Multi-object tracking in AV perception**: JPDA, MHT, and PHD/CPHD filters track other road users (vehicles, pedestrians, cyclists) at 10-30 Hz per sensor; modern systems hybridise filter-based trackers with learned detection (e.g. CenterPoint detections feeding into Kalman-filter trackers in nuScenes-style benchmarks).
	  - **Drone autonomy**: VIO filters (MSCKF variants, Open-VINS, VINS-Fusion) deployed across consumer drones (Skydio, DJI), inspection robotics (Flyability), and ag-tech UAVs.
	  - **Surgical robotics**: EKFs for instrument tracking and tissue deformation estimation in Intuitive Surgical da Vinci platforms and CMR Surgical Versius.
	  - **Aerospace and defence**: EKFs ship on every commercial INS (Honeywell, Northrop Grumman LITTON, Safran). Particle filters used in terrain-aided navigation for GPS-denied environments (TERPROM, SITAN).
	  - **Differentiable / learned filters in research**: Active research area (NeurIPS, ICML, ICRA, RSS, IROS publishing 100+ papers/year on differentiable filtering, neural state-space models, and learned filter components) but limited production deployment so far — production robotics remains conservative, preferring well-understood EKFs/UKFs/PFs with analytical models.
	  - **Open-source ecosystem**: ROS `robot_localization` package (EKF/UKF, 5M+ downloads), `amcl` (AMCL — Adaptive Monte Carlo Localisation, ROS Navigation stack), GTSAM, g2o, OpenVINS, VINS-Fusion, Cartographer, RTAB-Map, ORB-SLAM3, Open3D's odometry. PyTorch differentiable-filter libraries (Karkus et al. PF-net, DPF).

  - ### UK Context: Academic Leadership and Industry

	  The UK has been disproportionately influential in the development and application of Bayes filtering and probabilistic robotics — historically through pioneering tracking research at defence labs and currently through globally-leading robotics-vision academic groups.

	  #### Academic Powerhouses

	  - **Oxford Robotics Institute (ORI)** — Founded by Professor Paul Newman (an FRS, ERC Advanced Grantee, RAEng Hennessy Award). ORI's Mobile Robotics Group has been a global centre for SLAM, localisation, and probabilistic mapping for two decades. Maurice Fallon (now Professor, formerly MIT/CSIRO) leads work on legged-robot state estimation and lidar SLAM. Ingmar Posner directs the Applied AI Lab (A2I) on learned-filter hybrids and uncertainty-aware perception. Oxford's RobotCar Dataset and Oxford Radar RobotCar Dataset are canonical large-scale UK datasets for autonomous-vehicle localisation research. ORI spinouts include Oxbotica (founded 2014 by Newman & Posner; acquired and rebranded as Oxa in 2023, now a leading UK autonomous-vehicle software company with deployments in mining, ports, and last-mile delivery).
	  - **Imperial College London — Dyson Robotics Lab / Robot Vision Group**: Professor Andrew Davison's group is one of the world's most influential visual SLAM laboratories. Davison's MonoSLAM (2007) was the first real-time monocular SLAM system and pioneered the EKF approach to visual SLAM; his later work on dense methods (DTAM, KinectFusion, ElasticFusion) and modern learned representations (SceneNet, Gaussian Splatting SLAM 2024) defined entire sub-fields. The Dyson Robotics Lab, founded with Sir James Dyson's investment in 2014, continues this lineage.
	  - **University of Edinburgh — Edinburgh Centre for Robotics, Robotarium**: A joint Heriot-Watt + University of Edinburgh facility. Sethu Vijayakumar leads probabilistic robot learning. The Edinburgh Robotarium is one of the UK's largest experimental robotics facilities and a hub for state-estimation research applied to humanoids, manipulation, and field robots.
	  - **University of Cambridge — Machine Intelligence Laboratory, Department of Engineering**: Roberto Cipolla (computer vision and SLAM), Carl Henrik Ek (probabilistic ML), and the broader DAMTP statistics community contribute to Bayesian filtering theory.
	  - **University College London (UCL) — Robotics Vision Group, AI Centre**: Lourdes Agapito (visual reconstruction), Dimitrios Kanoulas (legged-robot perception), and contributors to the differentiable filtering literature.
	  - **University of Bristol — Bristol Robotics Lab (BRL)**: A joint UoB + UWE Bristol facility, one of the largest robotics research centres in Europe. Active research on swarm robotics, soft robotics, and probabilistic perception for assisted living. Walterio Mayol-Cuevas's group contributes to visual SLAM.
	  - **University of Manchester — Department of Computer Science and the Manchester AI Group**: Contributions to robust filtering, sensor fusion, and autonomous-systems verification. Manchester's strength in distributed systems and HPC supports large-scale filter implementations on GPU/cluster hardware.
	  - **University of Leeds — Centre for Autonomous Systems and Robotics**: Robotics for hazardous environments (nuclear decommissioning at Sellafield, offshore wind inspection). Bayes-filter-based localisation in GPS-denied environments.
	  - **University of Sheffield — Sheffield Robotics, Diamond Building**: Strong group on bio-inspired and assistive robotics; contributions to particle-filter localisation in unstructured environments. Tony Prescott's neurorobotics work draws on Bayesian-brain accounts of sensorimotor inference.
	  - **Heriot-Watt University — Edinburgh Centre for Robotics (joint with University of Edinburgh)**: Maritime robotics (Ocean Systems Laboratory), underwater SLAM and acoustic-sonar filtering.

	  #### Northern English Industrial Cluster

	  Manchester's regeneration as an autonomous-systems and AI hub (Manchester AI Council, the Christie's medical imaging applications, Co-op Live autonomy testing) intersects with Leeds (the AIRR — AI Research Resource at Leeds; Connected Places Catapult), Sheffield (advanced manufacturing through the AMRC and Boeing Sheffield), and Newcastle (the National Innovation Centre for Data; National Innovation Centre for Ageing). The Northern Robotics Network (NRN) coordinates research and industry partnerships across these cities; many of its member groups deploy Bayes-filter-based localisation in inspection robots, AGVs, and field-robotic platforms.

	  #### UK Industry

	  - **Oxa (formerly Oxbotica)**: Oxford spinout, leading UK autonomous-vehicle software firm. Probabilistic localisation across mine, port, airport, and public-road environments.
	  - **Wayve**: London-based autonomous-driving startup pioneering end-to-end learned driving, but with filter-based ego-motion in the production stack.
	  - **Five AI** (now part of Bosch as Bosch Five): Cambridge-founded, Bristol-headquartered AV safety and verification firm.
	  - **Dyson Robotics**: Vacuum-cleaner SLAM (360 Eye, V15 Detect) and broader robotic-platform R&D in Malmesbury (Wiltshire) and Singapore.
	  - **CMR Surgical** (Cambridge): Versius surgical robot — state estimation for instrument tracking.
	  - **Reach Robotics, RobotEye, Saga Robotics**: Field-robotics SMEs employing Bayes-filter localisation.
	  - **Defence sector**: Roke Manor Research, QinetiQ, BAE Systems — heritage in tracking-filter research (the Gordon-Salmond-Smith bootstrap PF originated at the DRA, now Dstl).
	  - **National Robotarium** (Edinburgh): £22.4M facility opened 2022, the UK's largest applied robotics centre, hosting industry-academic projects.

	  #### Funding and Strategy

	  EPSRC's "Robotics and AI in Extreme Environments" (RAIN, ORCA Hub, FAIR-SPACE) and "Trustworthy Autonomous Systems" (TAS Hub) programmes — totalling ~£200M across 2017-2025 — have funded substantial UK Bayes-filter and probabilistic-perception research. The 2023 UK AI Sector Deal and the 2024 AI Opportunities Action Plan continue to highlight autonomous systems as a strategic priority. The Centre for Doctoral Training (CDT) ecosystem — including the Oxford AIMS CDT, Imperial AI4Health CDT, Edinburgh Robotics CDT (a joint Heriot-Watt + Edinburgh CDT funded continuously since 2014), and UCL Foundational AI CDT — produces a steady annual cohort of UK doctoral researchers fluent in probabilistic-filter foundations and their modern extensions. The annual UK Robotics and Autonomous Systems (UK-RAS) Network conference and the British Machine Vision Conference (BMVC) provide major venues for UK probabilistic-perception research dissemination.

	  #### Historical UK Defence Contributions

	  The UK has been disproportionately influential in tracking-filter history through defence research. Gordon, Salmond and Smith's 1993 bootstrap particle filter — the paper that founded the modern SMC field — was developed at the Defence Research Agency (now Dstl, the Defence Science and Technology Laboratory). Roke Manor Research has contributed decades of tracking-algorithm work (originally as Plessey Roke Manor, now part of Chemring). QinetiQ (DERA's commercial successor) continues this lineage. BAE Systems' tracking and surveillance work at Filton (Bristol) and Edinburgh draws on the same heritage. This defence-research crucible established the UK as a global centre of tracking-filter expertise — a position that continues into modern AV and robotic applications.

  - ### Future Directions (2026-2030)

	  The next four years will see Bayes filters integrate ever more tightly with learning, optimisation, and large foundation models — without surrendering the recursive probabilistic structure that makes them robust and efficient.

	  #### Learned / Differentiable Filters Reaching Production

	  Production-quality differentiable particle filters and neural Kalman variants are expected to migrate from research benchmarks into deployed AV and drone stacks by 2027-2028. The motivation is sensor-model learning — replacing hand-engineered observation likelihoods p(z_t | x_t) (which struggle with complex sensors like high-resolution cameras and modern lidars) with learned neural likelihoods, whilst preserving the analytical Bayesian recursion for tractable uncertainty propagation. Key open problems: ensuring calibrated uncertainty out-of-distribution; certifying learned filters for safety-critical (ASIL-D) applications.

	  #### Foundation-Model-Conditioned Filters

	  Vision-language models and large-scale autonomous-driving foundation models (GAIA-1, JEPA-derived world models, Waymo's foundation-model perception 2024-2026) increasingly provide rich semantic priors. Expect 2027-2030 systems combining foundation-model perception front-ends with Bayes-filter belief-state back-ends — using semantic priors to inform observation likelihoods and motion-model priors. The POMDP belief-state perspective re-emerges as the natural interface between foundation-model perception and downstream planning.

	  #### Belief-Space Planning and Active Perception at Scale

	  Planning over beliefs (POMDPs) has been theoretically clean but computationally fearsome. The combination of (a) cheap parallel belief-state sampling on modern GPUs, (b) learned value functions from RL, and (c) Bayes-filter belief representations enables information-gathering robots that *plan* to reduce uncertainty — active SLAM, autonomous inspection, search-and-rescue. Expect deployed examples by 2028 in agriculture (autonomous crop monitoring), infrastructure inspection (drones planning trajectories to localise defects), and warehouse robotics.

	  #### Continuous-Time / Asynchronous Filters

	  Modern sensor suites are intrinsically asynchronous (event cameras, sparse lidar returns, multi-rate radar). Continuous-time filters — IMU pre-integration on Lie groups, neural-ODE state-space models, event-based filters — are an active frontier. Expect production deployment of event-camera-based VIO on micro-drones (Skydio, Parrot follow-ons) by 2027-2028.

	  #### Multi-Robot Distributed Bayesian Estimation

	  Information filters and consensus-based distributed Kalman/particle filters enable robot teams to share belief representations efficiently across bandwidth-limited communication links. Production applications: drone swarms (military and inspection), multi-AGV warehouse fleets coordinating belief-states for mutual localisation, autonomous-vehicle cooperative perception (V2V/V2X).

	  #### Robust and Trust-Worthy Filtering

	  Adversarial-robust filters resistant to spoofing (GPS spoofing, lidar adversarial reflections, camera adversarial patches), certified uncertainty bounds for safety cases, and formal verification of filter implementations are increasingly required for ASIL-D / SOTIF compliance under ISO 26262 and ISO 21448. Expect a new generation of "certified Bayes filters" with provable uncertainty calibration by 2028-2030.

	  #### Quantum Bayesian Filtering (Speculative)

	  Quantum filtering theory (Belavkin 1980s, Bouten-van Handel-James 2007) — the quantum analogue of the Stratonovich-Kushner equation — may see practical relevance in 2028-2030 as quantum-sensor-equipped platforms (quantum gravimeters, optical-clock-based navigation) move toward field deployment. UK is well-positioned (NPL, Imperial, Birmingham Quantum Hub).

	  #### Hardware-Accelerated Filtering

	  Specialised hardware for Bayesian inference — FPGA implementations for fixed-point particle filtering, TPU/GPU-accelerated UKF for high-dimensional states, and neuromorphic implementations of approximate Bayesian inference on Loihi / SpiNNaker (the latter a Manchester project) — promise order-of-magnitude reductions in per-update latency and energy. Expect production deployment of FPGA-based particle filters in defence applications (radar / sonar) and high-frequency-trading state estimation; neuromorphic Bayes filters remain research-grade through 2027 but may achieve production status in ultra-low-power edge platforms (asset-tracking IoT, wearable medical devices) by 2029-2030.

	  #### Standardisation and Interoperability

	  Beyond ROS's de-facto interfaces, formal standards for state-estimator outputs are emerging in autonomous-driving (the OpenLABEL pose-uncertainty fields, the ASAM OSI ground-truth interface, ISO 23150 sensor data interfaces). Expect 2026-2030 to see a consolidation of common belief-state representations across robotics, AV, drone, and aerospace stacks, enabling cross-vendor compatibility of perception subsystems.

  - ### Risk and Limitations

	  Whilst Bayes filters are mathematically principled, several systematic failure modes recur in deployment:

	  - **Filter divergence**: When linearisation error, model mismatch, or noise mis-tuning causes the estimated covariance to under-represent true uncertainty, the filter becomes overconfident and dismisses correcting measurements. Once divergence sets in it is self-reinforcing. Mitigations: covariance inflation, fault detection on innovation statistics, periodic relinearisation, and recovery-mode (broader-prior) re-initialisation.
	  - **Sample impoverishment and weight degeneracy (particle filters)**: Discussed above. Practical resampling/regularisation strategies essential.
	  - **EKF-SLAM inconsistency**: Bailey et al. (2006) showed that the EKF systematically *under*-estimates uncertainty in SLAM, a consequence of multiple linearisations of correlated states. This motivated the move to FastSLAM and pose-graph back-ends.
	  - **Curse of dimensionality**: Particle filters require N ~ exp(d) for d-dimensional posteriors with peaked likelihoods; histogram filters require K_cells ~ exp(d). For high-dimensional states, KF variants or Rao-Blackwellised hybrids are essential.
	  - **Sensor-model mis-specification**: When the assumed p(z_t | x_t) does not match the true distribution (e.g. unmodelled multipath, sensor cross-talk, environmental dependencies), the filter computes a posterior conditioned on incorrect assumptions — internally consistent but externally wrong. Hard to detect from the filter alone; requires ground-truth validation.
	  - **Computational stochasticity (particle filters)**: Particle-filter performance varies with the random seed; production deployments require either large enough N to suppress variance to acceptable bounds, or determinacy via quasi-Monte-Carlo / Stratified sampling.
	  - **Black-box learned components**: Learned motion or observation models trained on limited data may extrapolate poorly out-of-distribution; without principled uncertainty quantification this becomes a silent-failure mode for hybrid filters. Active research on out-of-distribution detection in learned filter components.

  - ### Research and Literature

	  **Canonical Textbooks**:
	  1. Thrun, S., Burgard, W., & Fox, D. (2005). *Probabilistic Robotics*. MIT Press. ISBN 978-0-262-20162-9. [16,000+ citations; the canonical reference.]
	  2. Bar-Shalom, Y., Li, X.-R., & Kirubarajan, T. (2001). *Estimation with Applications to Tracking and Navigation*. Wiley. [Tracking-filter handbook.]
	  3. Särkkä, S. (2013). *Bayesian Filtering and Smoothing*. Cambridge University Press. [Modern theoretical treatment.]
	  4. Doucet, A., de Freitas, N., & Gordon, N. (eds.) (2001). *Sequential Monte Carlo Methods in Practice*. Springer. [Particle-filter handbook.]
	  5. Crisan, D., & Rozovskii, B. (eds.) (2011). *The Oxford Handbook of Nonlinear Filtering*. Oxford University Press. [Theoretical foundations.]
	  6. Ristic, B., Arulampalam, S., & Gordon, N. (2004). *Beyond the Kalman Filter: Particle Filters for Tracking Applications*. Artech House.

	  **Foundational Papers**:
	  7. Kalman, R.E. (1960). A new approach to linear filtering and prediction problems. *Journal of Basic Engineering*, 82(1), 35-45. DOI: 10.1115/1.3662552.
	  8. Kalman, R.E., & Bucy, R.S. (1961). New results in linear filtering and prediction theory. *Journal of Basic Engineering*, 83(1), 95-108.
	  9. Stratonovich, R.L. (1960). Conditional Markov processes. *Theory of Probability and its Applications*, 5(2), 156-178.
	  10. Kushner, H.J. (1964). On the differential equations satisfied by conditional probability densities of Markov processes. *SIAM Journal on Control*, 2(1), 106-119.
	  11. Zakai, M. (1969). On the optimal filtering of diffusion processes. *Zeitschrift für Wahrscheinlichkeitstheorie und verwandte Gebiete*, 11(3), 230-243.

	  **Non-Linear Kalman Variants**:
	  12. Julier, S.J., & Uhlmann, J.K. (1997). New extension of the Kalman filter to nonlinear systems. *Proceedings of SPIE AeroSense*. [UKF.]
	  13. Wan, E.A., & van der Merwe, R. (2000). The unscented Kalman filter for nonlinear estimation. *Proceedings of IEEE AS-SPCC*, 153-158.
	  14. Arasaratnam, I., & Haykin, S. (2009). Cubature Kalman filters. *IEEE Transactions on Automatic Control*, 54(6), 1254-1269. [CKF.]
	  15. Alspach, D.L., & Sorenson, H.W. (1972). Nonlinear Bayesian estimation using Gaussian sum approximations. *IEEE Transactions on Automatic Control*, 17(4), 439-448.

	  **Particle Filtering**:
	  16. Gordon, N.J., Salmond, D.J., & Smith, A.F.M. (1993). Novel approach to nonlinear/non-Gaussian Bayesian state estimation. *IEE Proceedings F — Radar and Signal Processing*, 140(2), 107-113. [The bootstrap filter.]
	  17. Pitt, M.K., & Shephard, N. (1999). Filtering via simulation: Auxiliary particle filters. *Journal of the American Statistical Association*, 94(446), 590-599.
	  18. Doucet, A., de Freitas, N., Murphy, K., & Russell, S. (2000). Rao-Blackwellised particle filtering for dynamic Bayesian networks. *Proceedings of UAI 2000*, 176-183.
	  19. Arulampalam, M.S., Maskell, S., Gordon, N., & Clapp, T. (2002). A tutorial on particle filters for online nonlinear/non-Gaussian Bayesian tracking. *IEEE Transactions on Signal Processing*, 50(2), 174-188. [Canonical PF tutorial.]
	  20. Isard, M., & Blake, A. (1998). CONDENSATION — conditional density propagation for visual tracking. *International Journal of Computer Vision*, 29(1), 5-28.

	  **Robotics, Localisation, SLAM**:
	  21. Dellaert, F., Fox, D., Burgard, W., & Thrun, S. (1999). Monte Carlo localization for mobile robots. *Proceedings of ICRA 1999*, 1322-1328. [MCL.]
	  22. Fox, D. (2003). Adaptive particle filters for mobile robot localization. *Journal of Machine Learning Research*, 3, 985-1003. [KLD-sampling AMCL.]
	  23. Montemerlo, M., Thrun, S., Koller, D., & Wegbreit, B. (2002). FastSLAM: A factored solution to the simultaneous localization and mapping problem. *Proceedings of AAAI 2002*, 593-598.
	  24. Durrant-Whyte, H., & Bailey, T. (2006). Simultaneous localization and mapping (SLAM): Part I. *IEEE Robotics & Automation Magazine*, 13(2), 99-110.
	  25. Bailey, T., Nieto, J., Guivant, J., Stevens, M., & Nebot, E. (2006). Consistency of the EKF-SLAM algorithm. *Proceedings of IROS 2006*, 3562-3568.
	  26. Kaess, M., Johannsson, H., Roberts, R., Ila, V., Leonard, J.J., & Dellaert, F. (2012). iSAM2: Incremental smoothing and mapping using the Bayes tree. *International Journal of Robotics Research*, 31(2), 216-235.
	  27. Davison, A.J., Reid, I.D., Molton, N.D., & Stasse, O. (2007). MonoSLAM: Real-time single camera SLAM. *IEEE Transactions on Pattern Analysis and Machine Intelligence*, 29(6), 1052-1067. [Imperial College.]
	  28. Campos, C., Elvira, R., Gomez Rodriguez, J.J., Montiel, J.M.M., & Tardos, J.D. (2021). ORB-SLAM3: An accurate open-source library for visual, visual-inertial and multi-map SLAM. *IEEE Transactions on Robotics*, 37(6), 1874-1890.

	  **Modern / Learned Filters**:
	  29. Karkus, P., Hsu, D., & Lee, W.S. (2018). Particle filter networks with application to visual localization. *Proceedings of CoRL 2018*, 169-178.
	  30. Haarnoja, T., Ajay, A., Levine, S., & Abbeel, P. (2016). Backprop KF: Learning discriminative deterministic state estimators. *Proceedings of NeurIPS 2016*, 4376-4384.
	  31. Krishnan, R.G., Shalit, U., & Sontag, D. (2017). Structured inference networks for nonlinear state space models. *Proceedings of AAAI 2017*, 2101-2109.
	  32. Jonschkowski, R., Rastogi, D., & Brock, O. (2018). Differentiable particle filters: End-to-end learning with algorithmic priors. *Proceedings of RSS 2018*.

  - ## Metadata

	  - **Last Updated**: 2026-05-16
	  - **Review Status**: Comprehensive editorial review (Phase 6 enrichment)
	  - **Verification**: Canonical academic references (Thrun-Burgard-Fox 2005, Bar-Shalom-Li 2001, Doucet-de Freitas-Gordon 2001, Särkkä 2013) cross-checked; algorithmic formulations verified against textbook formulations.
	  - **Regional Context**: UK academic landscape (Oxford ORI, Imperial Dyson Robotics, Edinburgh Robotarium, Cambridge, UCL, Bristol BRL); Northern English industrial cluster (Manchester AI Council, Leeds RAIN, Sheffield AMRC, Newcastle NICA); UK industry (Oxa, Wayve, Dyson, CMR Surgical, Five AI/Bosch, Roke Manor, QinetiQ, BAE) detailed.
	  - **Production-Ready**: Complete OWL formal semantics across five axiom families; comprehensive content coverage (mathematical core, implementation families, application domains, theoretical lineage, UK context, future directions).
	  - **Authority Score**: 0.87 (foundational sixty-five-year framework, universal robotics adoption, canonical textbook backing, vibrant research community continuing through 2026).

- ### Provenance
  - sources:: [[Thrun Burgard Fox 2005 Probabilistic Robotics]], [[Bar-Shalom Li Kirubarajan 2001 Estimation with Tracking and Navigation]], [[Sarkka 2013 Bayesian Filtering and Smoothing]], [[Doucet de Freitas Gordon 2001 Sequential Monte Carlo Methods]], [[Kalman 1960 New Approach to Linear Filtering]], [[Stratonovich 1960 Conditional Markov Processes]], [[Kushner 1964 Differential Equations Conditional Probability Densities]], [[Zakai 1969 Optimal Filtering Diffusion Processes]], [[Julier Uhlmann 1997 New Extension Kalman Filter Nonlinear]], [[Arasaratnam Haykin 2009 Cubature Kalman Filters]], [[Gordon Salmond Smith 1993 Novel Approach Nonlinear Non-Gaussian]], [[Pitt Shephard 1999 Auxiliary Particle Filters]], [[Doucet de Freitas Murphy Russell 2000 Rao-Blackwellised PF]], [[Arulampalam Maskell Gordon Clapp 2002 Particle Filter Tutorial]], [[Isard Blake 1998 CONDENSATION Visual Tracking]], [[Dellaert Fox Burgard Thrun 1999 Monte Carlo Localization]], [[Fox 2003 Adaptive Particle Filters KLD-Sampling]], [[Montemerlo Thrun Koller Wegbreit 2002 FastSLAM]], [[Durrant-Whyte Bailey 2006 SLAM Part I]], [[Kaess Johannsson Roberts Ila Leonard Dellaert 2012 iSAM2 Bayes Tree]], [[Davison Reid Molton Stasse 2007 MonoSLAM]], [[Campos Elvira Gomez Rodriguez Montiel Tardos 2021 ORB-SLAM3]], [[Karkus Hsu Lee 2018 Particle Filter Networks]], [[Haarnoja Ajay Levine Abbeel 2016 Backprop KF]], [[Krishnan Shalit Sontag 2017 Structured Inference Networks State Space]], [[Jonschkowski Rastogi Brock 2018 Differentiable Particle Filters]], [[IEEE Transactions on Signal Processing]], [[IEEE Transactions on Robotics]]
  - migration-date:: 2026-04-26T00:00:00Z
  - enrichment-date:: 2026-05-16T19:00:00Z
  - enrichment-worker:: claude-opus-4-7