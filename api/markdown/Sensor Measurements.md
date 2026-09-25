Sensor measurements are the time-stamped observations produced by physical or virtual sensors, each carrying a value, a unit, and an associated uncertainty or noise model. In probabilistic robotics they form the observation stream that estimators condition on to infer latent state such as pose or velocity. Their statistical characterisation is essential for filtering, fusion, and localisation.

### Content

- Each measurement is modelled by an observation likelihood that maps hidden state to expected readings plus noise. Accurate measurement models, calibration, and time synchronisation are prerequisites for correct Bayesian updates and convergence of recursive state estimators.

