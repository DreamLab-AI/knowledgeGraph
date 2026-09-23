
A neural ordinary differential equation (Neural ODE) is a deep learning model that parameterises the continuous-time derivative of a hidden state with a neural network, so the forward pass becomes the solution of an ODE by a numerical integrator. This replaces a discrete stack of layers with a continuous-depth transformation and trains efficiently via the adjoint sensitivity method, giving constant memory cost. Neural ODEs are well suited to modelling continuous dynamics, irregularly sampled time series, and continuous normalising flows.

- ### Overview
	- Standard deep networks apply a fixed sequence of discrete layers. A neural ODE observes that a residual block updates the hidden state by a small increment, and takes the limit where these increments become an infinitesimal differential, so the hidden state evolves continuously according to a learned vector field.
	- The forward pass calls an off-the-shelf ODE solver, which adaptively chooses step sizes and trades accuracy for compute at inference time. Gradients are obtained by solving a second, adjoint ODE backwards in time, giving constant memory cost regardless of the effective number of integration steps.
	- This continuous formulation handles irregularly sampled and missing-time observations gracefully, and underpins continuous normalising flows where the change-of-variables formula becomes a tractable trace integral.
- ### Mechanisms
	- Defines the hidden-state derivative as a learned [[Neural Network]] vector field.
	- Evaluates the forward pass with an adaptive numerical ODE solver.
	- Trains via the adjoint method, a constant-memory variant of [[Backpropagation]].
	- Treats network depth as continuous integration time rather than a fixed layer count.
	- Extends to continuous normalising flows and latent dynamics models.
- ### Applications
	- Modelling continuous physical and biological dynamics for [[System Identification]].
	- Forecasting and interpolation of irregularly sampled time series.
	- Continuous normalising flows for flexible generative density estimation.
	- Memory-constrained deep learning where constant-memory training is valuable.
- ### Provenance

