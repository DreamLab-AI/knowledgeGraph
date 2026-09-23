
Parameter estimation is the process of inferring the unknown parameters of a mathematical or statistical model from observed data. In robotics and control it is central to fitting dynamic models, calibrating sensors, and identifying physical constants from measurements, typically by optimising a likelihood or least-squares criterion. It provides the model coefficients that downstream estimation, control, and prediction algorithms rely upon.

- ### Overview
	- Almost every model — a robot's dynamics, a sensor's bias, a chemical reaction rate — contains parameters that are not known a priori and must be recovered from data. Parameter estimation formalises this recovery as an optimisation or inference problem over the parameter space.
	- Frequentist approaches such as maximum likelihood and least squares choose the parameters that best explain the observations under a noise model. Bayesian approaches instead compute a posterior distribution over parameters, quantifying uncertainty and incorporating prior knowledge. The choice affects robustness, identifiability, and how confidence is reported.
	- Identifiability and observability determine whether the available data can uniquely pin down the parameters at all; poorly excited or noisy data lead to ill-conditioned estimates that regularisation or experiment design must address.
- ### Mechanisms
	- Formulates a likelihood or least-squares objective relating parameters to observations.
	- Optimises that objective via [[Maximum Likelihood Estimation]], gradient methods, or recursive filtering.
	- Quantifies uncertainty through [[Bayesian Inference]] posteriors or covariance estimates.
	- Checks [[Observability]] and identifiability to ensure the parameters are recoverable.
	- Feeds estimated parameters into [[Kalman Filter]] and [[State Estimation]] pipelines.
- ### Applications
	- Identifying mass, inertia, and friction parameters of robot manipulators and vehicles.
	- Calibrating camera, IMU, and lidar sensor models for [[Sensor Fusion]].
	- Fitting econometric, biological, and physical models to experimental data.
	- Tuning controller and plant models for model-based [[Control Theory]].
- ### Provenance

