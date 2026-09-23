
A factor graph is a bipartite graphical model that factorises a global function into a product of local factors, connecting variable nodes to the factor nodes that constrain them. It makes the structure of an inference problem explicit and supports efficient message-passing algorithms. In robotics it is the dominant representation for state estimation problems such as SLAM and sensor fusion.

- ### Overview
  - Variable nodes hold unknown states; factor nodes encode measurements and priors.
  - Belief propagation and nonlinear least-squares exploit the sparse structure.
  - Generalises Bayesian networks and Markov random fields for inference.
- ### Mechanisms
  - Factorisation exposes conditional independence and sparsity.
  - Message passing propagates beliefs between variables and factors.
  - Maximum-a-posteriori estimation solves a sparse nonlinear optimisation.
  - Incremental smoothing reuses computation as new measurements arrive.
- ### Applications
  - Pose-graph and landmark-based SLAM.
  - Multi-sensor fusion for localisation.
  - Calibration and trajectory estimation.
- ### Provenance

