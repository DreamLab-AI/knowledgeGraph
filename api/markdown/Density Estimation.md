Density estimation is the statistical problem of inferring the underlying probability density function of a random variable from a finite set of observed samples. Parametric approaches assume a fixed functional form whose parameters are fitted by maximum likelihood, while non-parametric approaches such as kernel density estimation and histograms make minimal distributional assumptions. Modern deep density estimation uses normalizing flows, autoregressive models, and variational methods to model complex high-dimensional distributions, making it foundational to generative modelling, anomaly detection, and unsupervised learning.

### Overview

- Given a dataset assumed to be drawn independently from some unknown distribution, density estimation seeks a function that assigns plausible probability mass or density to any point in the input space. The estimate can then be sampled, evaluated, or compared against new observations.
- Parametric estimation chooses a family (Gaussian, exponential, mixture) and fits parameters, typically by maximising likelihood. It is data-efficient when the assumed form is correct but biased when it is not.
- Non-parametric estimation, including histograms and kernel density estimation, lets the data dictate the shape, trading model bias for higher variance and sensitivity to bandwidth or bin width.
- Deep density estimation extends these ideas to high dimensions using normalizing flows (exact likelihoods via invertible transforms), autoregressive models, and variational autoencoders (which provide a lower bound on the likelihood).

### Key aspects

- Bias-variance trade-off governed by smoothing parameters such as kernel bandwidth.
- The curse of dimensionality, which makes naive non-parametric estimation impractical in high dimensions.
- Likelihood evaluation versus sampling: some models give tractable likelihoods, others only easy sampling.
- Connections to [[Entropy]] and [[Information Theory]] for measuring distributional divergence.

### Applications

- Generative modelling of images, audio, and text.
- [[Anomaly Detection]] and [[Outlier Detection]] by flagging low-density regions.
- Density-based clustering and mode discovery.
- Importance sampling and Monte Carlo integration.
- Distribution comparison for drift and calibration analysis.

### Provenance

