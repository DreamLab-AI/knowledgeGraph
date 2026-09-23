
A neural ordinary differential equation (Neural ODE) is a class of deep learning model that parameterises the derivative of a hidden state with a neural network and obtains outputs by numerically integrating this learned dynamics. Rather than stacking a fixed number of discrete layers, it treats the transformation of representations as a continuous trajectory governed by an ODE, with depth replaced by integration time. This continuous-depth formulation enables memory-efficient training via the adjoint method and natural modelling of time-series and continuous dynamics.

- ### Overview
	- Conventional deep networks transform data through a fixed sequence of layers; a Neural ODE instead defines an instantaneous rate of change learned by a network.
	- The model output is obtained by integrating this learned dynamics from an input state over a notion of depth expressed as integration time.
	- This perspective was motivated by the observation that residual networks resemble discretised steps of a continuous flow.
	- Training uses the adjoint sensitivity method to compute gradients with constant memory cost, decoupling memory from effective depth.
- ### Key aspects
	- Continuous depth: layers are replaced by integration over a continuous variable.
	- Learned dynamics: a neural network specifies the derivative of the hidden state.
	- Adjoint method: gradients are computed by solving an augmented ODE backwards in time.
	- Adaptive computation: ODE solvers allocate effort according to required accuracy.
	- Natural time-series modelling: irregularly sampled sequences fit the continuous formulation.
- ### Mechanisms
	- A numerical solver integrates the network-defined derivative from input to output.
	- The adjoint method propagates gradients through the solver with bounded memory.
	- Gradient-based optimisation updates the network parameters that define the dynamics.
- ### Applications
	- Modelling continuous-time [[Dynamical Systems]] and irregular time series.
	- Building memory-efficient deep models as an alternative to a deep [[Residual Network]].
	- Bridging [[Deep Learning]] with [[Scientific Computing]] and physical modelling.
	- Supporting [[Simulation]] of learned continuous processes.
- ### Provenance

