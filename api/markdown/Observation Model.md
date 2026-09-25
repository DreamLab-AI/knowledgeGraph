An observation model (or measurement model) is the probabilistic relationship that specifies the likelihood of a sensor measurement given the underlying state of a system. In recursive Bayesian estimation it provides the likelihood term used to correct a predicted state belief against incoming data. Its accuracy, including the noise characteristics it encodes, directly governs the quality of state estimation.

### Content

- During the update step, the model weights candidate states by how well they explain the latest sensor reading, with measurement noise typically modelled as Gaussian or via a learned likelihood. A mis-specified observation model causes overconfident or biased estimates, so calibrating sensor noise and handling outliers are central to reliable localisation and tracking.

