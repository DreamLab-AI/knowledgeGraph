- ### Definition
  - A Dynamic Model is a mathematical or computational representation of a system that explicitly captures how the system's state evolves over time in response to inputs, internal dynamics, and environmental disturbances—formulated as [[Ordinary Differential Equation]]s for continuous systems, difference equations for discrete-time systems, or learned neural representations trained end-to-end from observational data. Distinguished from static models, which describe equilibrium relationships without temporal evolution, dynamic models encode the causal mechanism by which the present state determines the future state, parameterised by a vector of physical constants, mass properties, stiffness coefficients, or neural network weights. They are the computational core underlying [[Model Based Control]], [[Physics Simulation]], and [[Digital Twin]] architectures, enabling prediction of system trajectories over a planning horizon. Dynamic models span a spectrum from first-principles derivations—Newton-Euler rigid-body equations, Maxwell's electromagnetic field equations, Navier-Stokes fluid dynamics—through hybrid grey-box models that combine physical structure with data-fitted residual terms, to fully black-box [[Neural Network]] dynamics learnt from trajectory data. [[Bayesian Inference]] techniques extend dynamic models to handle noisy sensor observations, yielding [[Kalman Filter]]s for linear Gaussian systems and particle filters for nonlinear non-Gaussian dynamics. In [[Reinforcement Learning]], a learned dynamic model of the environment constitutes a [[World Model]] that enables agents to plan by imagined rollouts, dramatically improving sample efficiency relative to model-free approaches. [[System Identification]] is the discipline dedicated to estimating dynamic model parameters or model structure from measured input-output data, bridging data-driven and physics-driven paradigms. The accuracy and coverage of a dynamic model—how well it reproduces system behaviour across its operating range and under novel conditions—is the dominant factor determining the quality of downstream decisions in robotics, climate science, aerospace, neuroscience, and economics.

- ### Semantic Classification
  - owl-class:: ai:DynamicModel
  - owl-role:: Concept | SimulationArtifact | LearnedRepresentation
  - owl-inferred:: ai:PhysicsModel, ai:StateSpaceModel, ai:LearnedDynamics, ai:WorldModel
  - belongs-to-domain:: [[Simulation]], [[Control Theory]], [[Machine Learning Discipline]], [[Robotics]]
  - implemented-in-layer:: [[Physics Simulation Engine]], [[Model Predictive Control]], [[World Model]]

- ### Relationships
  - is-subclass-of:: [[Simulation]], [[Mathematical Model]], [[Predictive Model]], [[Probabilistic Model]]
  - has-part:: [[State Space Representation]], [[Ordinary Differential Equation]], [[Numerical Integration]], [[System Identification]], [[State Estimator]], [[Inertia Tensor]], [[Jacobian Computation]]
  - requires:: [[State Machine]], [[Bayesian Inference]], [[Training Data]], [[Numerical Integration]], [[Optimisation Solver]]
  - enables:: [[Model Based Control]], [[Model Predictive Control]], [[Digital Twin]], [[Physics Simulation]], [[Cyber Physical Systems]], [[Simulation Engine]], [[World Model]], [[Trajectory Optimisation]]
  - implements:: [[Ordinary Differential Equation]], [[Neural ODEs]], [[Kalman Filter]], [[Particle Filter]], [[State Space Control]]
  - depends-on:: [[System Identification]], [[Lagrangian Mechanics]], [[Bayesian Inference]], [[Deep Learning]], [[Numerical Integration]]
  - supports:: [[Autonomous Driving]], [[Legged Locomotion]], [[Aerial Robotics]], [[Surgical Robotics]], [[Reinforcement Learning]], [[Process Control]], [[Climate Modelling]]
  - uses:: [[MuJoCo]], [[Physics Simulation Engine]], [[Probabilistic Model]], [[Gaussian Processes]], [[Variational Autoencoder]]
  - contrasts-with:: [[Static Model]], [[Model Free Reinforcement Learning]], [[Reactive Control]]
  - related-to:: [[World Model]], [[Digital Twin]], [[Physics Simulation]], [[Probabilistic Model]], [[Reinforcement Learning]], [[Model Based Reinforcement Learning]], [[Embodied AI Simulation]], [[Sim to Real Transfer]]
  - standardized-by:: [[IEEE Control Systems Society]], [[IFAC]]

- ### Content

  ## Compositional Relationships (Components)
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:hasPart ai:StateSpaceRepresentation))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:hasPart ai:SystemIdentification))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:hasPart ai:NumericalIntegration))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:hasPart ai:StateEstimator))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:hasPart ai:OrdinaryDifferentialEquation))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:hasPart ai:JacobianComputation))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:hasPart ai:InertiaTensor))

  ## Dependency Relationships
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:requires ai:TrainingData))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:requires ai:BayesianInference))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:requires ai:NumericalIntegration))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:requires ai:SystemIdentification))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:requires ai:StateMachine))

  ## Capability Relationships
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:enables ai:ModelBasedControl))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:enables ai:ModelPredictiveControl))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:enables ai:DigitalTwin))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:enables ai:PhysicsSimulation))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:enables ai:WorldModel))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:enables ai:TrajectoryOptimisation))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:enables ai:CyberPhysicalSystems))

  ## Implementation Relationships
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:implements ai:NeuralODE))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:implements ai:KalmanFilter))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:implements ai:ParticleFilter))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:implements ai:StateSpaceControl))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:implements ai:OrdinaryDifferentialEquation))

  ## Reduction Relationships
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:reducesTo ai:StaticModel))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:reducesTo ai:LinearStateSpaceModel))
      SubClassOf(ai:LearnedDynamicModel
        ObjectSomeValuesFrom(ai:reducesTo ai:NeuralNetwork))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:reducesTo ai:ProbabilisticModel))
      SubClassOf(ai:NeuralODEModel
        ObjectSomeValuesFrom(ai:reducesTo ai:OrdinaryDifferentialEquation))
      SubClassOf(ai:KoopmanDynamicModel
        ObjectSomeValuesFrom(ai:reducesTo ai:LinearStateSpaceModel))

  ## Relationship-Axiom Extensions
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:supports ai:AutonomousDriving))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:supports ai:LeggedLocomotion))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:supports ai:AerialRobotics))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:supports ai:ReinforcementLearning))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:contrasts ai:StaticModel))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:contrasts ai:ModelFreeReinforcementLearning))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:uses ai:GaussianProcesses))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:uses ai:PhysicsSimulationEngine))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:isSubclassOf ai:MathematicalModel))
      SubClassOf(ai:DynamicModel
        ObjectSomeValuesFrom(ai:isSubclassOf ai:PredictiveModel))

  ## About

  Dynamic models have a long history at the intersection of mathematics, physics, and engineering, predating the digital computer by centuries and constituting the foundational language through which scientists express their understanding of how systems change over time. Isaac Newton's equations of motion, published in Principia Mathematica (1687), are dynamic models in ordinary differential equation form, describing the time-evolution of position and momentum under applied forces and enabling analytical prediction of planetary orbits, projectile trajectories, and pendulum oscillations with then-unprecedented precision. James Clerk Maxwell's electromagnetic field equations (1865) constitute a system of coupled partial differential equations—a dynamic model of propagating electric and magnetic field waves whose solutions correctly predicted the speed of light from purely electrical measurements, unifying optics and electromagnetism under a single mathematical framework. The development of classical thermodynamics produced dynamic models of heat flow, chemical reaction kinetics, and phase transitions that remain in daily use across the chemical process industries.

  Classical control theory, formalised through Laplace transform methods and the state-space formulation introduced by Rudolf Kalman (1960), made dynamic modelling systematic and computationally tractable for engineering design at a moment when aerospace, chemical, and electrical engineering were demanding ever-more-precise control of complex systems. Norbert Wiener's cybernetics programme (1948) had already established the conceptual link between feedback, information, and dynamic models of purposive behaviour, while the control-theoretic tradition formalised this in the mathematically rigorous state-space framework that persists today. The Apollo guidance computer used dynamic models of orbital mechanics to compute trajectory corrections in real time—an early demonstration of embedded dynamic modelling under severe computational constraints, operating on a machine with a 4 kHz clock and 4 kB of RAM—while the Kalman filter provided optimal state estimation by fusing noisy sensor data with a linear dynamic model of vehicle motion. The Apollo applications of control theory demonstrated that formal dynamic modelling was not merely an academic exercise but an enabling technology for the most complex engineering systems humanity had built.

  The mechanisms of dynamic modelling depend critically on whether the system evolves in continuous or discrete time, and on the spatial extent and complexity of the phenomena being modelled:

  - **Continuous-time ODE systems**: Described by ordinary differential equations of the form dx/dt = f(x(t), u(t), θ)—where x is the state vector, u is the control input, and θ encodes model parameters. Integrated numerically using explicit Runge-Kutta methods (RK4 for non-stiff problems; Dormand-Prince RK45 with adaptive step-size for smooth trajectories) or implicit methods (BDF, Radau, SDIRK) for stiff chemical, electrical, and thermal systems where explicit methods require impractically small time steps. MATLAB/Simulink, Julia's DifferentialEquations.jl, and the SciPy integration library provide widely used ODE solvers for engineering applications.
  - **Partial differential equation (PDE) systems**: Generalise ODE dynamics to spatially distributed systems. The Navier-Stokes equations describe fluid velocity and pressure fields; the heat equation describes temperature distributions; Maxwell's equations describe electromagnetic fields; the Schrödinger equation describes quantum probability amplitudes. PDE models are discretised spatially by finite difference (structured grids), finite element (unstructured meshes for complex geometries), or finite volume (conservation-law-preserving, used in computational fluid dynamics) methods before numerical time integration, converting the infinite-dimensional PDE into a finite-dimensional ODE system.
  - **Discrete-time systems**: Use difference equations x_{t+1} = f(x_t, u_t, θ) directly amenable to digital computation, making them natural for real-time embedded controllers operating at fixed sampling rates. Linear discrete-time models (ARMAX, state-space) underpin the classical system identification literature and digital control design via discrete pole placement, deadbeat, and optimal LQR methods.
  - **Hybrid systems**: Combine continuous-time dynamics with discrete mode switches, capturing phenomena such as impact events in mechanical systems (bouncing ball, legged robot foot strike), switching power electronics, and piecewise-linear approximations of nonlinear dynamics. Hybrid system modelling frameworks include Hybrid Automata and Mixed Logical Dynamical (MLD) systems used in hybrid MPC.

  [[System Identification]] bridges the physics-driven and data-driven paradigms: given measured input-output sequences from an experiment, prediction-error methods, subspace identification (N4SID, MOESP), and maximum-likelihood estimation fit the parameter vector θ of a postulated model structure without requiring full first-principles derivation. The choice of model structure—ARX, ARMAX, state-space, Hammerstein-Wiener, neural network—encodes prior knowledge about the system's characteristics. Modern machine learning complements classical system identification with [[Neural ODEs]] (Chen et al., NeurIPS 2018)—continuous-depth networks whose hidden state dynamics are parameterised by a neural network and integrated using ODE solvers, enabling gradient computation through the integration operation via the adjoint sensitivity method—and physics-informed neural networks (PINNs) that embed known conservation laws, symmetry constraints, and boundary conditions as soft constraints in the training loss, achieving 5x improvement in prediction error in low-data regimes according to PINODE benchmarks (2023).

  The significance of dynamic models spans an extraordinary breadth of application domains that collectively constitute a significant fraction of modern technological civilisation:

  - **Robotics**: Accurate rigid-body dynamic models of arm kinematics, inertia tensors, and contact forces underpin [[Model Predictive Control]] that plans collision-free trajectories in real time and Whole Body Control that distributes torques across a humanoid robot's joints to simultaneously achieve multiple Cartesian tasks while respecting contact constraints. The ETH Zurich ANYmal quadruped, Boston Dynamics Spot, and unitree H1 humanoid all rely on high-fidelity dynamic models validated against physical hardware.
  - **Aerospace**: Flight-dynamics models of aerodynamic coefficients, propulsion characteristics, structural modes, and actuator saturation enable fly-by-wire control law design, pilot-in-the-loop simulation for certification, and autonomous urban air mobility vehicle control. Orion and Artemis spacecraft use high-fidelity 6DOF dynamic models for guidance, navigation, and control design and verification.
  - **Climate science**: Global circulation models are multi-physics dynamic models of atmospheric, oceanic, cryospheric, and land-surface processes running on petascale HPC clusters, integrating coupled PDEs at resolutions from kilometres to hundreds of metres over multi-decadal simulation periods. These models are the primary scientific tool for projecting climate change under different emissions scenarios, informing IPCC assessments and national climate policy.
  - **Neuroscience**: Computational dynamic models of neural circuits—Hodgkin-Huxley conductance models of single neuron action potentials, Wilson-Cowan mean-field equations for neural population dynamics, Dynamic Causal Models (DCM) for effective connectivity analysis in fMRI data—enable hypothesis testing about mechanisms of cognition, memory consolidation, and neurological disease.
  - **Finance and economics**: Dynamic stochastic general equilibrium (DSGE) models at central banks (Bank of England, ECB, Federal Reserve) describe how macroeconomic aggregates—output, inflation, employment, interest rates—evolve over time under rational expectations and optimal agent behaviour, informing monetary policy decisions worth trillions of pounds sterling in impact.

  ## Components and Architecture

  A dynamic model system comprises several tightly coupled components, each with its own design decisions and trade-offs:

  - **State Vector (x)**: The minimal set of variables sufficient to determine the future evolution of the system, given inputs—positions and velocities in mechanics, charge and magnetic flux in electrical systems, chemical species concentrations in biochemical networks, neural firing rates in population models. State selection involves physical modelling judgment: including unnecessary state variables inflates computational cost and identification difficulty; omitting relevant state variables leads to unmodelled dynamics that degrade model accuracy and control performance. Dimensionality reduction via principal component analysis, autoencoders, or physical mode truncation is used when the natural state dimension is too large for real-time computation.
  - **Dynamics Function (f)**: The core of the dynamic model—the mapping from current state and input to state time-derivative (continuous) or next state (discrete). May be expressed as:
    - Analytical equations derived from first principles (Newton-Euler, Lagrange-Euler, Maxwell's equations)
    - Sparse symbolic expressions identified from data (SINDy—Sparse Identification of Nonlinear Dynamics—framework of Brunton et al., 2016)
    - Gradient-boosted decision trees or neural network approximators fitted to trajectory data
    - Gaussian process posteriors over function space, providing calibrated uncertainty alongside point predictions
    - Hybrid combinations: physics structure with neural residual corrections (grey-box models)
  - **Output Equation (g)**: Maps the latent state x to observable measurements y = g(x, u, θ) + ε, enabling comparison with sensor data during system identification and state estimation. Output models range from simple linear observation (y = Cx) through nonlinear observation functions (range-bearing measurements from LIDAR) to deep neural network decoders (pixel observations in visual world models).
  - **Numerical Integrator**: Propagates state forward in time from x(t) to x(t + Δt) by numerically approximating the integral of f. Choice of integrator is driven by:
    - **System stiffness**: Fixed-step explicit RK4 for non-stiff robotics dynamics; variable-step implicit Radau or BDF for stiff chemical, thermal, or electrical systems where eigenvalue ratios exceed 10³.
    - **Accuracy vs. speed**: Higher-order methods (RK4: fourth-order accuracy) reduce step count for a given error tolerance; lower-order methods (Euler: first-order) are faster per step but require smaller steps.
    - **Real-time constraints**: Embedded MPC on microcontrollers requires fixed-step integrators with statically allocated memory; offline simulation can use adaptive-step integrators with error control.
    - **Adjoint sensitivity**: Neural ODE training requires integrators that support the continuous adjoint method for gradient computation without storing the full trajectory in memory.
  - **State Estimator**: Reconciles dynamic model predictions with noisy measurements to produce the minimum-variance estimate of the current state. Architecture choices:
    - **Kalman Filter (KF)**: Optimal for linear Gaussian systems (LTI model, Gaussian process and measurement noise). O(n³) prediction and update steps in state dimension n.
    - **Extended Kalman Filter (EKF)**: Linearises nonlinear f and g around the current estimate via first-order Taylor expansion; widely used in robotics localisation (EKF-SLAM), INS/GPS integration, and spacecraft attitude estimation. Can diverge for highly nonlinear systems.
    - **Unscented Kalman Filter (UKF)**: Propagates a set of deterministically chosen sigma points through the exact nonlinear function and recomputes mean and covariance, achieving third-order accuracy for Gaussian distributions without Jacobian computation.
    - **Particle Filter**: Represents the posterior state distribution as a weighted set of particles propagated through the nonlinear model, capable of handling multimodal and non-Gaussian distributions; O(N·n) per step for N particles. Used in terrain-aided navigation and target tracking.
    - **Moving Horizon Estimation (MHE)**: Solves a fixed-window constrained optimisation problem to estimate the most likely state trajectory given measurements, naturally handling state and noise constraints—used in process control applications.
  - **[[System Identification]] Module**: Estimates parameter vector θ from input-output data using prediction-error minimisation (PEM), subspace methods (N4SID, MOESP), or Bayesian posterior inference. Key approaches:
    - **Offline batch SysID**: All data available; minimise sum-of-squared prediction errors over the dataset using gradient-based or Gauss-Newton optimisation. Standard in process industry for model commissioning.
    - **Online recursive SysID**: Recursive Least Squares (RLS) with forgetting factor; Extended Kalman Filter-based parameter estimation. Updates model parameters continuously as new data arrives—used for adaptive controllers, wear tracking in manufacturing, and in-service flight envelope expansion.
    - **Neural SysID**: Deep networks (LSTM, Transformer, Neural ODE) trained to predict future outputs from input-output histories; parameters are the network weights. Requires careful regularisation and validation to avoid overfitting to training conditions.

  ## Model Families and Variants

  A principled taxonomy of dynamic model families, ordered from maximum physical interpretability to maximum data-driven flexibility:

  **Tier 1: Physics-Derived White-Box Models**
  - Full first-principles formulation from conservation laws, constitutive relations, and physical symmetries
  - Examples: Newton-Euler rigid-body dynamics, Lagrangian mechanics, Maxwell's equations, Navier-Stokes, Hodgkin-Huxley
  - Highest interpretability: every parameter has a physical meaning (mass, spring constant, viscosity, capacitance)
  - Best extrapolation: valid across the full operating envelope if physical assumptions hold
  - Requires detailed mechanical or physical knowledge and precise parameter measurement or experimental identification
  - Computational cost scales with model complexity: rigid-body dynamics for a 30-DOF humanoid requires O(n) recursive Newton-Euler computation

  **Tier 2: Grey-Box Hybrid Models**
  - Known model structure (physics equations) with unknown parameters fitted to data, or physics structure augmented by data-fitted residual terms
  - Used extensively in process control (ARX, ARMAX, state-space subspace models from N4SID), structural mechanics, pharmacokinetics (PK/PD), and aerospace aerodynamics
  - Physics residual networks: f(x,u) = f_phys(x,u,θ) + f_neural(x,u,φ), combining guaranteed physics constraints with data-driven correction of modelling errors
  - Balances interpretability with flexibility to handle unmodelled dynamics

  **Tier 3: Neural ODE and Physics-Informed Neural Network Models**
  - Learned dynamics function parameterised entirely by a deep network h_θ: dx/dt = h_θ(x(t), t)
  - **Neural ODEs** (Chen et al., NeurIPS 2018): gradient-based training via the continuous adjoint sensitivity method; memory-efficient (O(1) vs O(T) for backpropagation through time); adaptive-step integration
  - **Physics-Informed Neural Networks (PINNs)** (Raissi et al., 2019): embed known PDE residuals as soft constraints in the loss function L = L_data + λ·L_physics; enables training from sparse and noisy data
  - **Physics-Informed Neural ODEs (PINODEs)** (Zhuang et al., 2023): combine collocation-based physics constraints with latent-space dynamics, achieving 5x prediction error improvement in low-data regimes and 10x gains under high observation noise per PINODE benchmarks
  - Application to mosquito population dynamics (2024, PLOS ONE / PMC) demonstrated improved ODE optimisation for epidemiological modelling
  - Application to electro-mechanical systems (USPTO patent 2024): non-Euclidean coordinate dynamics for energy-based controller synthesis

  **Tier 4: Gaussian Process Dynamics Models**
  - Non-parametric Bayesian models that maintain a posterior distribution p(f | data) over the dynamics function
  - Calibrated uncertainty estimates: posterior variance quantifies model confidence, enabling risk-sensitive planning
  - Used in **PILCO** (Deisenroth and Rasmussen, 2011) and **GP-MPC** for model-based control with formal uncertainty propagation
  - Limitation: cubic scaling O(N³) in training data size N; sparse GP approximations (inducing point methods) extend to larger datasets
  - **Deep Kernel Learning**: combine neural feature extractors with GP kernel for scalable deep probabilistic dynamics

  **Tier 5: Koopman Operator Models**
  - Lift nonlinear dynamics x_{t+1} = f(x_t) into a higher-dimensional linear space z_{t+1} = K z_t using observable functions Φ(x)
  - The (infinite-dimensional) Koopman operator K acts linearly on observable functions even when the underlying system is nonlinear
  - Finite-rank approximation via **Extended Dynamic Mode Decomposition (EDMD)** from trajectory data
  - Enables standard linear MPC tools (QP-based optimisation, Kalman filtering) on intrinsically nonlinear systems
  - **Deep Koopman Networks**: learn the observable map Φ end-to-end; applied to soft robot arms, chemical reactors, biological networks
  - Limitation: quality of linear approximation degrades for systems with bifurcations or chaotic dynamics

  **Tier 6: Stochastic Differential Equation (SDE) Models**
  - Augment deterministic dynamics with a diffusion term capturing process noise: dx = f(x, u)dt + σ(x)dW
  - W is a standard Wiener process (Brownian motion); σ(x) is the diffusion coefficient (state-dependent noise)
  - Applications: financial modelling (Black-Scholes option pricing, Heston stochastic volatility), neural SDE world models, score-based diffusion generative models (where the SDE defines the forward noising process)
  - Itô calculus provides the mathematical framework for integrating and differentiating SDE solutions

  **Tier 7: Latent State-Space Models for High-Dimensional Observations**
  - Generalise linear state-space models to nonlinear, high-dimensional observation spaces (pixels, point clouds, language)
  - Learn a compact latent representation z_t and dynamics z_{t+1} = f_θ(z_t, a_t) in latent space, with decoder observations p(o_t | z_t)
  - **Recurrent State-Space Models (RSSM)**: used in Dreamer family (Ha and Schmidhuber 2018, Hafner et al. 2020/2021/2023), combining deterministic GRU cells with stochastic latent variables
  - **DreamerV3** (Hafner et al., 2023): achieves human-level performance across 150 tasks from pixels using a universal world model trained with a single set of hyperparameters
  - **Mamba-based SSMs** (2024-2025): replace RNN dynamics with selective state-space models (S4, Mamba) that process sequences in linear time; GLAM world model (2025) demonstrates strong DMControl performance with improved parameter efficiency
  - **MuZero** (Schrittwieser et al., 2020): learns a latent dynamics model for planning in board games and Atari without access to the true environment dynamics or rules

  ## Use Cases and Major Application Domains

  **Robotics and Autonomous Systems**
  - Rigid-body dynamic models of arm kinematics, inertia tensors, and contact forces underpin [[Model Predictive Control]] for real-time collision-free trajectory planning
  - [[Trajectory Optimisation]] methods (iLQR, DDP, DIRCOL) use dynamic models to compute open-loop optimal trajectories for manipulation, locomotion, and aerial manoeuvres
  - [[Whole Body Control]] distributes torques across a humanoid robot's joints to simultaneously achieve multiple Cartesian tasks (end-effector position, CoM acceleration, foot placement) while respecting contact constraints
  - Major deployments: ETH Zurich ANYmal, Boston Dynamics Spot and Atlas, Unitree H1 humanoid, Toyota HSR, Franka Panda manipulator
  - [[Sim to Real Transfer]] pipelines depend critically on dynamic model fidelity: simulation-to-reality gaps in contact dynamics, actuator delays, and sensor noise cause trained policies to fail on physical hardware
  - Physics-Informed Bayesian Digital Twin (PI-BDT) frameworks (2025) encode wear and thermal dynamics for industrial robots, producing RUL predictions with decomposed uncertainty

  **Aerospace and Flight Control**
  - 6DOF rigid-body flight-dynamics models (aerodynamic coefficients, propulsion, structural flexibility, actuator dynamics) underpin fly-by-wire control law design for commercial and military aircraft
  - Pilot-in-the-loop simulation using high-fidelity dynamic models for regulatory certification (CS-25 / FAA Part 25 flight simulator qualification)
  - Guidance, navigation, and control (GN&C) for space missions: Orion and Artemis spacecraft use validated dynamic models for trajectory planning and abort guidance
  - Electric vertical take-off and landing (eVTOL) vehicles for urban air mobility require novel dynamic models coupling aerodynamics, electric motor dynamics, and structural modes

  **Climate and Earth System Modelling**
  - Coupled atmosphere-ocean-land-surface-cryosphere dynamic models (CESM, UKESM, ICON, IFS) run on petascale HPC clusters, integrating coupled PDEs over multi-decadal periods
  - UK Met Office Unified Model: one of the world's most sophisticated operational weather and climate systems, used for global weather forecasting and UKCP18 climate projections informing UK government policy
  - Ensemble prediction: multiple dynamic model realisations with perturbed initial conditions quantify forecast uncertainty; European Centre for Medium-Range Weather Forecasts (ECMWF) runs 51-member ensembles at 9 km resolution
  - Destination Earth (DestinE): EU initiative to build a digital twin of Earth at kilometre-scale resolution, coupling atmospheric, oceanic, and human infrastructure dynamic models

  **[[Digital Twin]] Construction and Industrial Applications**
  - Live-updating dynamic models paired with [[IoT Sensor Data]] streams create digital twin instances that mirror physical assets in real time
  - Applications: predictive maintenance (detecting bearing wear from vibration signatures), process optimisation (real-time setpoint adjustment in chemical plants), virtual commissioning (validating PLC logic against dynamic plant model before physical installation)
  - Platforms: Siemens Xcelerator, GE Predix, PTC ThingWorx, Rockwell FactoryTalk — all embed dynamic models as the computational core of their twin representations
  - Battery manufacturing: PI-BDT systems (2025, ScienceDirect) integrate robot dynamic models with prognostics to control pipeline, improving cell quality and reducing unplanned downtime

  **Biomedical Modelling**
  - Pharmacokinetic/pharmacodynamic (PK/PD) dynamic models describe drug absorption, distribution, metabolism, and elimination (ADME) across physiological compartments, informing dose-response relationships and regulatory submissions
  - Computational haemodynamic models (CFD of blood flow in patient-specific arterial geometries from CT/MRI) support cardiovascular device design and surgical planning
  - Neural dynamic models: Hodgkin-Huxley conductance models of individual neurons, coupled Wilson-Cowan population models, Dynamic Causal Models for fMRI connectivity analysis used at UCL and Oxford in cognitive neuroscience
  - COVID-19 pandemic SIR/SEIR dynamic models informed UK government policy responses, demonstrating the high-stakes policy relevance of epidemiological dynamic modelling

  **Economic and Financial Modelling**
  - Dynamic Stochastic General Equilibrium (DSGE) models at the Bank of England (COMPASS), ECB (NAWM), Federal Reserve (EDO) encode macroeconomic dynamic relationships for monetary policy analysis
  - Agent-based dynamic models simulate emergent market behaviour from heterogeneous agent interactions, used in financial stability analysis and systemic risk assessment
  - Energy market dynamic models: power grid frequency dynamics (swing equations), battery energy storage dispatch optimisation, wholesale electricity price dynamics

  ## Formal Mathematical Treatment

  A general continuous-time dynamic model in state-space form:

  ```
  dx/dt = f(x(t), u(t), θ)      [state equation]
  y(t)  = g(x(t), u(t), θ) + ε  [observation equation]
  x(0)  = x₀                     [initial condition]
  ```

  where:
  - x(t) ∈ ℝⁿ is the state vector at time t (positions, velocities, temperatures, concentrations…)
  - u(t) ∈ ℝᵐ is the exogenous control input or external forcing
  - y(t) ∈ ℝᵖ is the measured output available to the estimator or controller
  - θ ∈ ℝq is the parameter vector (masses, stiffnesses, time constants, neural weights…)
  - ε ~ N(0, R) is measurement noise with covariance R
  - Process noise can be added: dx = f(x,u,θ)dt + G·dW for stochastic dynamics

  **Linear Time-Invariant (LTI) Case**

  When f(x, u, θ) = Ax + Bu and g(x, u, θ) = Cx + Du, the system is fully characterised by system matrices (A, B, C, D):
  - A ∈ ℝⁿˣⁿ: state transition matrix; eigenvalues determine stability (all Re(λᵢ) < 0 for asymptotic stability)
  - B ∈ ℝⁿˣᵐ: input matrix; determines how inputs affect state evolution
  - C ∈ ℝᵖˣⁿ: output matrix; determines which state combinations are measured
  - D ∈ ℝᵖˣᵐ: direct feedthrough matrix (often D = 0)

  The Kalman filter provides the minimum-variance linear unbiased estimate x̂(t|t) for LTI systems with Gaussian noise, with prediction step x̂(t+1|t) = Ax̂(t|t) + Bu(t) and update step x̂(t+1|t+1) = x̂(t+1|t) + K·(y(t+1) - Cx̂(t+1|t)), where K is the Kalman gain matrix computed from the Riccati equation.

  **Nonlinear Extensions**

  For nonlinear f and g, the optimal filter is intractable in general:
  - **EKF**: linearises f and g via first-order Taylor expansion at each time step; O(n²) per step; can diverge for highly curved dynamics
  - **UKF**: propagates 2n+1 sigma points through the exact nonlinear function; achieves third-order accuracy for Gaussian distributions; more numerically robust than EKF
  - **Cubature Kalman Filter (CKF)**: uses 2n cubature points; equivalent to UKF with specific weight choices; numerically stable for high-dimensional state spaces
  - **Particle Filter (Sequential Monte Carlo)**: represents posterior p(x_t | y_{1:t}) as N weighted particles; exact for any noise distribution at O(N·n) cost; resampling required to prevent weight degeneracy

  **Neural ODE Parameterisation**

  Neural ODEs parameterise the dynamics function as a neural network: dx/dt = h_θ(x(t), t, u(t)). Training minimises a loss L(x(T), y) evaluated at integration endpoint T. Gradients ∂L/∂θ are computed via the **continuous adjoint sensitivity method**:
  - Forward pass: integrate dx/dt = h_θ(x, t) from t₀ to T
  - Define adjoint a(t) = -∂L/∂x(t); a(T) = ∂L/∂x(T)
  - Backward pass: integrate da/dt = -aᵀ·(∂h_θ/∂x) from T to t₀ simultaneously with ∂L/∂θ = -∫a(t)ᵀ·(∂h_θ/∂θ)dt
  - Memory cost: O(1) in trajectory length (vs. O(T) for backpropagation through time)
  - Enables training through ODE solvers of arbitrary precision and adaptive step-size

  ## Academic Context

  Dynamic modelling has deep roots across multiple disciplines, with foundational contributions spanning three centuries:

  - **Classical mechanics and control theory**: Newton (1687), Euler (1736), and Lagrange (1788) established the mathematical foundations of dynamics. Laplace (1814), Nyquist (1932), Bode (1945), and Ziegler-Nichols (1942) developed frequency-domain analysis and controller design. Kalman (1960) established the state-space framework and optimal filtering for LTI systems with Gaussian noise—arguably the most important single paper in the history of control systems.
  - **Stability theory and optimality**: Lyapunov (1892) established conditions for stability of nonlinear systems. Bellman (1957) introduced dynamic programming and the principle of optimality, providing the theoretical foundation for optimal control. Pontryagin et al. (1962) derived the minimum principle for constrained optimal control.
  - **System identification**: Åström and Bohlin (1965) and Box and Jenkins (1970) developed parametric time-series identification. Ljung (1987) unified system identification theory. Ho and Kalman (1966) introduced subspace methods.
  - **Data-driven dynamics**: Koopman (1931) introduced the operator-theoretic framework for nonlinear dynamics, later operationalised computationally by Mezić (2005) and Rowley et al. (2009) via Dynamic Mode Decomposition. Brunton et al. (2016) introduced SINDy (Sparse Identification of Nonlinear Dynamics) for parsimonious dynamic model discovery from data.
  - **Gaussian process dynamics**: Deisenroth and Rasmussen (2011) introduced PILCO—a GP-dynamics model-based policy search method achieving remarkable sample efficiency on inverted pendulum, cart-pole, and double pendulum tasks with minutes of physical interaction data.
  - **Neural ODE framework**: Chen et al. (NeurIPS 2018) introduced Neural ODEs as continuous-depth networks trained via the adjoint method, catalysing a generation of continuous-time deep learning architectures including Latent ODEs for irregular time-series and Neural SDEs.
  - **Physics-informed learning**: Raissi, Perdikaris, and Karniadakis (JCP 2019) introduced PINNs embedding PDE residuals as loss constraints. PINODE (Zhuang et al., Scientific Reports 2023) extended this to latent-space dynamics with collocation-based physics constraints, demonstrating 5-10x improvements in low-data and high-noise regimes.
  - **World models for reinforcement learning**: Ha and Schmidhuber (NeurIPS 2018 Workshop) introduced the World Models architecture (VAE encoder + MDN-RNN dynamics + controller) trained to dream in latent space. Hafner et al. progressed through DreamerV1 (ICLR 2020), DreamerV2 (ICLR 2021, discrete latents), and DreamerV3 (2023, universal hyperparameters across 150 tasks). MuZero (Schrittwieser et al., Nature 2020) demonstrated model-based planning without access to the true environment dynamics, achieving superhuman performance in chess, shogi, Go, and all 57 Atari games simultaneously.
  - **State-space models and Mamba**: Gu et al. (ICLR 2022) introduced S4 (Structured State Spaces for Sequences) enabling efficient long-range sequence modelling. Gu and Dao (2023) introduced Mamba with selective state spaces for adaptive, input-dependent computation. Deng et al. (ICLR 2024) demonstrated S4WM as the first SSM-based world model, with GLAM (2025) extending this with global-local variation awareness.

  ## Current Landscape (2026)

  As of mid-2026, the frontier of dynamic modelling has shifted along three converging trajectories:

  **Foundation World Models (Internet-Scale Training)**
  - Large-scale video generation models trained on internet data are emerging as general-purpose interactive simulators
  - Genie 2 (Google DeepMind, 2024): interactive world model generating novel environments from a single image and action sequence
  - VideoWorld (2025): demonstrates learning visual planning from video without explicit reward signals
  - Dreamer-CDP (2026, arXiv:2603.07083): improves reconstruction-free world models via continuous deterministic representation prediction
  - PIN-WM (2025, arXiv:2504.16693): Physics-INformed World Models for non-prehensile manipulation, embedding contact physics into latent dynamics
  - Implications: may reduce the cost of domain-specific dynamic model engineering by enabling general-purpose simulation of any environment described in natural language

  **Mamba and State-Space Model Architectures**
  - Mamba-based SSMs are displacing RNNs as the backbone of learned latent dynamics models, processing sequences in linear time
  - GLAM (Global-Local Variation Awareness Mamba) world model (2025, arXiv:2501.11949): achieves strong DMControl benchmark results with improved parameter efficiency vs Transformer alternatives
  - S-Mamba: scalable state space model variants enabling larger world model training
  - Survey paper (arXiv:2503.11224, 2025): comprehensive review of SSM effectiveness and efficiency for temporal modelling

  **Physics-Informed Hybrid and Digital Twin Convergence**
  - Physics-Informed Bayesian Digital Twin (PI-BDT) frameworks (ScienceDirect, 2025): operationalise robotics-integrated prognostics-to-control pipelines in battery manufacturing, encoding wear and thermal dynamics with decomposed uncertainty via Bayesian ensembles
  - Neural compensation methods for outdoor mobile robot nonlinear dynamics (PMC, 2024): addressing position precision challenges for inspection robots in hazardous environments
  - Survey: "From Digital Twins to World Models: Opportunities, Challenges, and Applications for Mobile Edge General Intelligence" (arXiv:2603.17420, 2026): documents convergence of digital twin and world model frameworks for edge intelligence
  - Nonlinear time-varying systems identification with uncertain information (arXiv:2601.10379, 2026): online identification methods for systems with time-varying parameters

  **Adaptive and Data-Driven Parameter Learning**
  - Data-Driven Dynamic Parameter Learning for manipulator robots (arXiv:2512.08767, 2024): compensating for parameter uncertainty in real-time
  - Digital twin-based parameter compensation and control strategy for mobile robots (PMC, 2024): integrating digital twin update loops with dynamic model correction
  - Online identification of nonlinear time-varying systems with uncertain information (arXiv:2601.10379): Bayesian approaches to adaptive model updating under bounded uncertainty

  ## UK Context

  The UK has significant depth in dynamic modelling across academic and industrial domains:

  **Academic Institutions**
  - **University of Edinburgh** (School of Informatics): world-leading research in probabilistic state-space models and Gaussian process dynamics. Contributions include the GPML toolbox (Rasmussen and Williams), the Latent Force Model framework combining mechanistic ODE priors with GP inference, and the Bayesian Quadrature methods of Michael Osborne's group (also Oxford).
  - **University of Manchester** (Department of Computer Science): Wei Pan (Associate Professor in Machine Learning, Centre for AI Fundamentals and Centre for Robotics and AI) works on machine learning-enabled dynamics modelling for robotics and cyber-physical systems.
  - **University of Cambridge** (Engineering Department, Computer Science): Long tradition in control systems and dynamic model identification. Amanda Prorok (Professor of Collective Intelligence and Robotics) applies foundation models and learned dynamics to robot coordination and cooperative perception. Fumiya Iida's Bio-Inspired Robotics Lab works on morphological computation and physical dynamics in soft robotics.
  - **Imperial College London** (Dyson Robotics Laboratory, Control and Power Group): Contributions to learned dynamics for dexterous manipulation and aerial robotics. The Aerial Robotics Lab under Stefan Leutenegger works on learned dynamics for micro aerial vehicles.
  - **University of Oxford** (Department of Engineering Science): Gaussian process dynamics and Bayesian filtering research; active in autonomous systems dynamic modelling for off-road vehicles and agricultural robotics.

  **Government and Industry**
  - **UK Met Office** (Exeter): Operates the Unified Model (UM), one of the world's most sophisticated coupled atmospheric-oceanic-land-surface dynamic models, used for global weather forecasting and UKCP18 climate projections informing UK government climate adaptation policy. Collaborating with ECMWF on the Destination Earth initiative to build a kilometre-scale digital twin of the Earth's climate system.
  - **Rolls-Royce plc** (Derby): Uses validated dynamic models of jet engine thermodynamics, rotor dynamics, and combustion for civil and military aero-engine design and digital twin certification for predictive maintenance across its TotalCare service fleet.
  - **BAE Systems** (Warton, Lancashire): Uses aircraft flight-dynamics models for Typhoon Eurofighter and next-generation combat air system (GCAP) design and virtual flight test validation.
  - **GKN Aerospace** and **Airbus UK** (Filton, Bristol): Dynamic simulation models in digital manufacturing pipelines for wing assembly, structural fatigue analysis, and composite manufacturing process optimisation.
  - **National Grid ESO**: Uses power system dynamic models for frequency stability analysis, grid restoration planning, and integration of renewable energy sources with unpredictable dynamics.

  **Northern England Industrial Context**
  - **Sheffield** (University of Sheffield AMRC, McLaren Composites Technology Centre): Dynamic models of composite material forming and cutting processes support advanced manufacturing process optimisation
  - **Leeds** (University of Leeds, Leeds City Region): Dynamic traffic flow models inform smart motorway and congestion management systems; dynamic structural models in civil engineering for bridge monitoring
  - **Newcastle** (Newcastle University, Siemens Digital Industries): Digital twin programmes for rail infrastructure using dynamic models of track degradation and rolling stock dynamics
  - **Manchester** (The University of Manchester, The Christie NHS Foundation Trust): Biological dynamic models in radiotherapy physics and pharmacokinetic models for cancer drug dosing

  ## Future Directions (2026–2030)

  - **Foundation World Models as General Simulators**: Large-scale video-trained world models are expected to become general-purpose interactive simulators generating physically plausible dynamic rollouts of any environment described in natural language, reducing the cost of domain-specific dynamic model engineering. The key challenge is learning causal dynamic structure—not just appearance correlation—from unlabelled video.
  - **Neurosymbolic Dynamic Models**: Combining neural dynamics learnt from data with symbolic physics priors encoded as logical constraints or differentiable equations. Structured prediction approaches (e.g., Learning with Differential Equations, Hamiltonian Neural Networks) embed conserved quantities (energy, momentum, charge) as hard constraints, enabling better extrapolation, interpretability, and sample efficiency than black-box neural models.
  - **Adaptive Online Identification and Lifelong Learning**: Real-time model adaptation using streaming sensor data will become standard. Continual learning methods that update dynamic models from new experience without catastrophic forgetting of previously acquired knowledge will enable robotic and autonomous systems to improve their internal models throughout their operational lifetimes.
  - **Uncertainty-Aware Risk-Sensitive Planning**: Propagating distributional uncertainty through ODE integration using moment-propagation, sigma-point methods, or sampling will mature as computationally tractable approaches. Risk-sensitive objectives (Conditional Value at Risk, chance constraints) combined with uncertainty-aware dynamics will enable formal safety guarantees in safety-critical autonomous systems.
  - **Quantum-Classical Hybrid Dynamic Simulation**: Quantum computers offer potential quadratic speedups for specific dynamic simulation problems—molecular dynamics, quantum chemistry, quantum material simulations—that are classically intractable. Hybrid variational quantum algorithms are beginning to demonstrate early advantage on small molecular system instances.
  - **Climate-Coupled Infrastructure Digital Twins**: The EU Destination Earth initiative and UK national digital twin programmes will couple building, city, and infrastructure digital twins with high-resolution climate dynamic models, enabling infrastructure lifecycle decisions informed by localised climate projections down to neighbourhood scale.
  - **Autonomous Scientific Discovery**: Dynamic model inference from sparse experimental data will increasingly be automated by AI systems that propose experiments, analyse results, and update hypotheses—accelerating discovery in pharmacology, materials science, and systems biology.

  ## Key Terminology

  - **State Space**: The set of all possible states x of a dynamic system; an n-dimensional vector space for continuous systems
  - **Phase Portrait**: Visualisation of trajectories in state space, revealing fixed points, limit cycles, and chaotic attractors
  - **Equilibrium Point**: A state x* where f(x*, u*, θ) = 0; may be stable (attracting), unstable (repelling), or saddle
  - **Linearisation**: First-order Taylor expansion of f around an equilibrium or nominal trajectory, producing a local linear model valid in a neighbourhood
  - **Bifurcation**: A qualitative change in dynamical behaviour as a parameter is varied; types include pitchfork, saddle-node, Hopf, and period-doubling bifurcations
  - **Stiffness**: The property of a system where some state variables change much faster than others, requiring small integration time steps for numerical stability with explicit methods
  - **Observability**: The property that any two distinct initial states x₀ ≠ x₁ produce distinguishable output trajectories, enabling state estimation from output measurements
  - **Controllability**: The property that any state can be reached from any initial state in finite time using appropriate inputs
  - **Model Fidelity**: The degree to which the dynamic model reproduces the true system behaviour across its operating range; limited by modelling assumptions, parameter uncertainty, and unmodelled dynamics

  ## Research and Literature

  1. Kalman, R.E. (1960). "A New Approach to Linear Filtering and Prediction Problems." *Journal of Basic Engineering*, 82(1), 35-45. https://doi.org/10.1115/1.3662552
  2. Bellman, R. (1957). *Dynamic Programming*. Princeton University Press.
  3. Ljung, L. (1987). *System Identification: Theory for the User*. Prentice-Hall.
  4. Deisenroth, M.P. and Rasmussen, C.E. (2011). "PILCO: A Model-Based and Data-Efficient Approach to Policy Search." *ICML 2011*, 465-472.
  5. Raissi, M., Perdikaris, P., and Karniadakis, G.E. (2019). "Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations." *Journal of Computational Physics*, 378, 686-707. https://doi.org/10.1016/j.jcp.2018.10.045
  6. Chen, R.T.Q., Rubanova, Y., Bettencourt, J., and Duvenaud, D. (2018). "Neural Ordinary Differential Equations." *NeurIPS 2018*. https://arxiv.org/abs/1806.07366
  7. Ha, D. and Schmidhuber, J. (2018). "World Models." *NeurIPS 2018 Deep RL Workshop*. https://arxiv.org/abs/1803.10122
  8. Hafner, D., Lillicrap, T., Fischer, I., Villegas, R., Ha, D., Lee, H., and Davidson, J. (2019). "Learning Latent Dynamics for Planning from Pixels." *ICML 2019*. https://arxiv.org/abs/1811.04551
  9. Hafner, D., Lillicrap, T., Ba, J., and Norouzi, M. (2020). "Dream to Control: Learning Behaviors by Latent Imagination." *ICLR 2020*. https://arxiv.org/abs/1912.01603
  10. Hafner, D., Lillicrap, T., Norouzi, M., and Ba, J. (2021). "Mastering Atari with Discrete World Models." *ICLR 2021*. https://arxiv.org/abs/2010.02193
  11. Hafner, D., Pasukonis, J., Ba, J., and Lillicrap, T. (2023). "Mastering Diverse Domains through World Models." https://arxiv.org/abs/2301.04104
  12. Schrittwieser, J. et al. (2020). "Mastering Atari, Go, chess and shogi by planning with a learned model." *Nature*, 588, 604-609. https://doi.org/10.1038/s41586-020-03051-4
  13. Nagabandi, A., Kahn, G., Fearing, R.S., and Levine, S. (2018). "Neural Network Dynamics for Model-Based Deep Reinforcement Learning with Model-Free Fine-Tuning." *ICRA 2018*. https://arxiv.org/abs/1708.02596
  14. Chua, K., Calandra, R., McAllister, R., and Levine, S. (2018). "Deep Reinforcement Learning in a Handful of Trials using Probabilistic Dynamics Models." *NeurIPS 2018*. https://arxiv.org/abs/1805.12114
  15. Janner, M., Fu, J., Zhang, M., and Levine, S. (2019). "When to Trust Your Model: Model-Based Policy Optimization." *NeurIPS 2019*. https://arxiv.org/abs/1906.08253
  16. Hansen, N., Su, H., and Wang, X. (2022). "TD-MPC: Temporal Difference Learning for Model Predictive Control." *ICLR 2022*. https://arxiv.org/abs/2203.04955
  17. Deng, Y., Park, T., and Ahn, P. (2024). "S4WM: A World Model Using State Space Models." *ICLR 2024*. https://arxiv.org/abs/2402.11674
  18. Gu, A., Goel, K., and Re, C. (2022). "Efficiently Modeling Long Sequences with Structured State Spaces." *ICLR 2022*. https://arxiv.org/abs/2111.00396
  19. Gu, A. and Dao, T. (2023). "Mamba: Linear-Time Sequence Modeling with Selective State Spaces." https://arxiv.org/abs/2312.00752
  20. Zhuang, J. et al. (2023). "PINODE: Physics-Informed Neural ODE for Embedding Physics into Models." *Scientific Reports*. https://www.nature.com/articles/s41598-023-36799-6
  21. Bruder, D. et al. (2019). "Nonlinear Model Predictive Control of a Soft Robot using Koopman Operator Theory." *IROS 2019*. https://doi.org/10.1109/IROS40897.2019.8967649
  22. Tassa, Y., Erez, T., and Todorov, E. (2012). "Synthesis and stabilization of complex behaviors through online trajectory optimization." *IROS 2012*. https://doi.org/10.1109/IROS.2012.6386025
  23. Bellicoso, C.D. et al. (2019). "Advances in real-world applications for legged robots." *Journal of Field Robotics*, 36(7), 1311-1337. https://doi.org/10.1002/rob.21839
  24. Prorok, A. (2023). "Foundation Models for Robot Coordination and Navigation." *Cambridge Robotics Laboratory Technical Report*.
  25. UK Met Office (2024). "DestinE: Destination Earth and the Digital Twin of Earth Programme." https://www.metoffice.gov.uk/research/approach/modelling-systems/earth-digital-twin
  26. Digital Twin Consortium (2025). "Dynamic Models in Industrial Digital Twins: Best Practices." https://www.digitaltwinconsortium.org/
  27. Andreangeli, A. (2025). "Pricing Algorithms and the Artificial Intelligence Act." *Law, Innovation and Technology*, Edinburgh Law School. https://www.research.ed.ac.uk/files/539254973/AndreangeliA2025LIEIPricingAlgorithms.pdf
  28. IEEE Control Systems Society (2025). "Special Issue on Learning-Based Dynamic Models." *IEEE Transactions on Automatic Control*.

- ### Provenance
  - sources:: https://arxiv.org/abs/1806.07366, https://arxiv.org/abs/1803.10122, https://www.nature.com/articles/s41598-023-36799-6, https://doi.org/10.1038/s41586-020-03051-4, https://www.metoffice.gov.uk/research/approach/modelling-systems/earth-digital-twin, https://doi.org/10.1016/j.jcp.2018.10.045, https://arxiv.org/abs/2312.00752, https://arxiv.org/abs/2301.04104
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm