- ### Definition
  - A probabilistic localization algorithm that represents the robot's belief about its position using a set of weighted particles (samples), where each particle represents a hypothesis of the robot's pose. It implements a particle filter to recursively estimate the robot's pose distribution.

- ### Semantic Classification
  - owl-class:: robotics:MonteCarloLocalization
  - owl-role:: Algorithm
  - belongs-to-domain:: [[Robotics]], [[Probabilistic Methods]], [[Localization]]

- ### Relationships
  - is-subclass-of:: [[RB-1013-localization]]
  - requires:: [[Sensor Measurements]]
  - enables:: [[Global Localization]], [[Kidnapped Robot Problem]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[RB-1013-localization]]
  - is-instance-of:: [[Particle Filter]]
  - requires:: [[Map]]
  - requires:: [[Sensor Measurements]]
  - requires:: [[Motion Model]]
  - uses:: [[Importance Sampling]]
  - characterized-by:: [[Non-Parametric]], [[Global Localization Capability]]

  - #### Relationships
  - is-subclass-of:: [[RB-1013-localization]]
  - is-instance-of:: [[Particle Filter]], [[Bayes Filter]]
  - uses:: [[RB-1008-odometry]], [[Sensor Fusion]]
  - alternative-to:: [[RB-1015-kalman-filter]]
  - applied-in:: [[Mobile Robots]], [[SLAM]]
  - enables:: [[Global Localization]], [[Kidnapped Robot Problem]]

  - **Algorithm Overview**
  1. **Initialization**: Generate initial particle set
  2. **Prediction** (Motion Update): Move particles based on motion model
  3. **Update** (Measurement Update): Weight particles by measurement likelihood
  4. **Resampling**: Draw new particles proportional to weights
  5. **Iteration**: Repeat prediction-update-resampling

  - **Key Components**
  - **Particles**: Set of pose hypotheses {x₁, x₂, ..., xₙ}
  - **Weights**: Importance factors {w₁, w₂, ..., wₙ}
  - **Motion Model**: p(xₜ | xₜ₋₁, uₜ)
  - **Sensor Model**: p(zₜ | xₜ, m)
  - **Map**: Environmental representation

  - **Particle Representation**
  - Each particle: (x, y, θ, w)
  - x, y: Position coordinates
  - θ: Orientation (heading)
  - w: Weight (importance)
  - Typically 100-10,000 particles

  - **Motion Model (Prediction)**
  - Based on odometry or control inputs
  - Add noise to account for uncertainty
  - Sample from motion distribution
  - Particles spread according to motion

  - **Sensor Model (Update)**
  - Compute likelihood of sensor measurements
  - Compare expected vs actual sensor readings
  - Assign weights to particles
  - Higher weights for more likely poses

  - **Resampling**
  - **Purpose**: Focus particles on high-probability regions
  - **Methods**:
    - Multinomial Resampling
    - Stratified Resampling
    - Systematic Resampling
    - Low Variance Resampling (most efficient)
  - **Adaptive Resampling**: Only when needed (KLD-sampling)

  - **Advantages**
  - Solves global localization problem
  - Handles multi-modal distributions
  - Non-parametric (no Gaussian assumption)
  - Handles non-linear models naturally
  - Robust to sensor noise
  - Can recover from localization failures

  - **Limitations**
  - Computational cost (many particles needed)
  - Particle deprivation (all particles in wrong area)
  - Sensitive to motion and sensor models
  - Random resampling can lose diversity
  - Requires pre-existing map

  - **Variants and Improvements**
  - **Adaptive MCL**: Dynamic particle count
  - **KLD-Sampling**: Kullback-Leibler divergence-based sampling
  - **Mixture MCL**: Adds random particles to prevent divergence
  - **Augmented MCL**: Handles unexpected obstacles
  - **FastSLAM**: MCL extended to SLAM problem

  - **Parameter Tuning**
  - Number of particles (balance accuracy vs computation)
  - Motion noise parameters
  - Sensor noise parameters
  - Resampling threshold
  - Recovery mechanisms

  - **Applications**
  - Indoor mobile robot navigation
  - Museum tour guide robots
  - Warehouse automation
  - Service robots
  - RoboCup competition
  - Educational robotics

  - **Performance Characteristics**
  - Time Complexity: O(M) per iteration (M = particles)
  - Convergence: Usually within seconds
  - Accuracy: Centimeter-level with good sensors
  - Robustness: Handles ambiguous environments

  - **Comparison with Kalman Filter**
  - MCL: Multi-modal, non-parametric, global
  - KF: Unimodal, Gaussian, local tracking
  - MCL: Higher computational cost
  - KF: Requires linear/linearizable models

  - **Implementation Considerations**
  - Particle count vs available compute
  - Map resolution and representation
  - Sensor update frequency
  - Motion model accuracy
  - Handling symmetry in environment

  - **Quality Metrics**
  - authority-score:: 0.96
  - completeness:: 0.93
  - accuracy:: 0.95

- ### Provenance
  - sources:: [[Probabilistic Robotics]], [[Particle Filter Theory]]
  - migration-date:: 2026-04-26T00:00:00Z