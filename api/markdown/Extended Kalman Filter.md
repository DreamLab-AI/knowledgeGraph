
The Extended Kalman Filter is a recursive state estimator that applies the Kalman filter to non-linear systems by linearising the process and measurement models about the current estimate using first-order Taylor expansion via Jacobian matrices.

- ### Semantic Classification

- ### Content
  - The Extended Kalman Filter handles non-linear dynamics and observation models by computing Jacobians to form local linear approximations, then applying the standard Kalman predict and update equations to a Gaussian estimate of state. It maintains a mean and covariance that summarise current uncertainty.
  - It is a workhorse of robotic localisation, navigation and sensor fusion, combining noisy measurements with a motion model to track pose and other states. Accuracy depends on the validity of the linearisation, and strongly non-linear problems may favour unscented or particle methods.

- ### Provenance

