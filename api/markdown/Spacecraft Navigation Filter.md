A spacecraft navigation filter estimates a state by combining a propagated model with measurements and explicit uncertainty assumptions. The state can contain position and velocity, attitude and angular rate, clock terms, sensor biases, force-model parameters or a target-relative pose. The associated covariance describes uncertainty within the estimator's model. It is not measured truth and can be badly overconfident when the dynamics, sensor errors or linearisation assumptions are wrong.[^1][^4]

## State, measurement and propagation models

Defining the state fixes the frame, origin, units and epoch of every element. A Cartesian inertial state, orbital elements, a local relative state and a target-body pose have different nonlinearities and singularities. Attitude needs a representation and error convention; clock offset and drift need a time scale; sensor biases need a stochastic model. These choices affect the transition and measurement sensitivities and the meaning of the covariance.

Between observations, the filter propagates the state through a dynamics model. For orbit navigation this can include non-spherical gravity, third bodies, drag, solar radiation pressure, manoeuvres and clock dynamics. For relative navigation it can include target motion and chaser control. NASA's GEONS software, for example, implements a UD-factorised extended Kalman filter with configurable force, clock and process-noise models and accepts GPS, ground, crosslink, camera, accelerometer and attitude observations.[^2]

A measurement model predicts what a sensor should report from the current state: a camera pixel or line of sight, radio range or Doppler, GNSS pseudorange, lidar return, star direction or inertial increment. The innovation, also called a pre-fit residual, is the observed value minus that prediction. Its expected covariance combines projected state uncertainty and measurement uncertainty. A post-fit residual is computed after an adjustment and is useful for checking the resulting fit.

## Batch, sequential and smoothing methods

A batch least-squares estimator processes an observation arc together. It linearises predicted observations with respect to the solve-for parameters, weights their residuals and iterates corrections until a convergence rule is met. Batch processing suits ground reconstruction because analysts can change the fit span, edit data, add parameters and repeat the solution. ESA's GODOT orbit-determination interface represents free and consider parameters, observation equations, a square-root information solution and covariance mapping.[^5]

A sequential filter propagates a state and covariance forward, then updates them as each measurement or measurement set arrives. This supports real-time onboard navigation and low-latency ground products. The extended Kalman filter (EKF) propagates nonlinear dynamics while linearising the state transition and measurement relationships about the current estimate. Large initial errors or strong nonlinearities can make those local approximations inconsistent or divergent.[^1]

An unscented Kalman filter (UKF) sends a deterministic set of sigma points through the nonlinear functions and reconstructs a mean and covariance. It avoids explicit first-order measurement partial derivatives, but adds propagation cost and still depends on distribution, noise and tuning assumptions. A JPL comparison describes these differences for Mars navigation scenarios; it is a preprint analysis, not proof that one method wins across missions.[^3]

A smoother uses measurements later than an estimated epoch to refine an earlier state. A fixed-interval smoother can reconstruct a completed arc; a fixed-lag or sliding-window smoother trades delay and memory for recent-history improvement. ESA-funded RODDAS research assessed a sliding-window smoother alongside sequential and particle methods.[^7] Smoothing cannot supply a zero-latency control state because the future observations do not yet exist.

## Process and measurement covariance

Process covariance, usually written **Q**, represents uncertainty accumulated during propagation. It can approximate unmodelled accelerations, imperfect manoeuvres, clock wander or bias evolution. Measurement covariance, **R**, describes admitted uncertainty in sensor observations and their correlations. Initial covariance, **P**, represents uncertainty in the starting state and estimated parameters.

These matrices are engineering models, rather than knobs that can safely absorb every discrepancy. Inflating **Q** makes the filter less confident in propagation and more responsive to observations. Inflating **R** reduces a measurement's influence. Either can improve apparent residual behaviour while masking a known bias, a wrong frame, mistimed data or omitted physics. Correlated or slowly varying errors should be represented through augmented bias states, consider parameters or coloured-noise models where warranted.

NASA's Orion development work treated process and measurement noise, residual-edit thresholds and measurement underweighting as separate tuning tools. Its Monte Carlo analysis checked whether simulated errors remained within the filter's reported three-sigma bounds under the tested cases.[^6] Those results belong to the documented development configuration and phases; they are not current performance figures for every Orion mission.

## Observability and consistency

Observability asks whether the available measurements over their geometry and time span distinguish the chosen state parameters. Repeated observations along nearly the same line of sight may be precise yet leave transverse position or correlated biases weak. A larger batch or faster update rate cannot repair a measurement geometry that contains little information about a parameter. Conditioning, parameter correlation, sensitivity to priors and covariance growth reveal these weak directions.

Consistency asks whether actual estimation errors behave like the reported covariance. In simulation, ensembles can compare errors with predicted dispersions; in flight, independent truth, overlapping solutions and prediction errors provide partial checks. NASA's filter guidance stresses Monte Carlo, error budgets and sensitivity analysis because nonlinear-filter covariance can understate true error.[^1] NASA's operational planning requirements similarly state that propagated covariance seldom represents actual state error realistically without initial tuning, monitoring and refinement.[^8]

CCSDS orbit messages preserve distinctions that prevent false comparisons. A trajectory or covariance can be predicted, determined from observations, empirical or simulated. The covariance has its own reference frame, frame epoch, element ordering, units, scale information and confidence description.[^4] Rotating or propagating a covariance incorrectly can change both its orientation and magnitude even when the state numbers look unchanged.

## Residuals, outliers and faults

Residuals should be plotted and grouped by sensor, station, geometry, mode and time. Bias, drift, periodicity, non-Gaussian tails and correlations point to calibration, dynamics, timing or association faults. Weighted residual root-mean-square, accepted-data fraction and innovation tests can support a decision, but none proves state accuracy on its own.[^8]

Measurement editing rejects observations outside a rule; underweighting retains them with less influence; an outlier-resistant loss changes the cost gradually. RODDAS reports Huber loss and other methods intended to improve convergence and covariance realism in space-object tracking.[^7] These defences can protect a solution from bad data, yet they can also suppress the evidence of a shared model error. Rejected measurements and the reason for rejection should remain auditable.

Fault handling needs more than a residual threshold. A bad sensor can pass a gate when the predicted covariance is already inflated, while a good measurement can fail during a manoeuvre omitted from the model. Cross-sensor comparison, persistence logic, mode awareness and safe reinitialisation are needed for onboard autonomy.

## Ground and onboard operation

Ground estimators can use long arcs, delayed calibrations, high-fidelity models and analyst review. Onboard filters trade some of that depth for immediate estimates used by guidance and control. GEONS has more than two decades of core software heritage and identified Earth-orbit flight uses, including GPS-based and experimental pulsar-navigation applications.[^2] That heritage does not qualify every possible sensor combination, orbit regime or host computer.

Operational validation should cover truth-model mismatch, dispersed initial conditions, sensor dropouts and biases, mistimed observations, manoeuvre errors, numerical precision, long propagation gaps and reset logic. Software testing, processor-in-the-loop and hardware-in-the-loop work should lead into flight comparison where the risk warrants it. A library demonstration, simulation, ground test and mission-qualified onboard filter are distinct evidence states.

Autonomous manoeuvring also creates an external reporting duty. NASA requires operators to explain how autonomous actions, updated ephemerides, covariances and stopping mechanisms reach the ground and conjunction-assessment process.[^8] A locally consistent onboard state is insufficient if other operators cannot learn the spacecraft's planned trajectory.

## References

[^1]: NASA, [Navigation Filter Best Practices](https://ntrs.nasa.gov/api/citations/20250002787/downloads/20250002787.pdf), second edition, 2025.
[^2]: NASA Goddard Space Flight Center, [Goddard Enhanced Onboard Navigation System](https://etd.gsfc.nasa.gov/capabilities/capabilities-listing/geons/).
[^3]: Todd Ely and Jeffrey Stuart, [Comparison of EKF and UKF for Robotic Missions to Mars](https://ntrs.nasa.gov/citations/20210007687), JPL preprint, 2017.
[^4]: Consultative Committee for Space Data Systems, [Orbit Data Messages](https://ccsds.org/Pubs/502x0b3e1.pdf), CCSDS 502.0-B-3 Corrigendum 1, October 2023.
[^5]: ESA Flight Dynamics, [GODOT: Orbit Determination and Estimation](https://godot.io.esa.int/docs/guides/cosmos/estimation.html), version 1.20.0.
[^6]: NASA, [Tuning and Robustness Analysis for the Orion Absolute Navigation System](https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20130008967.pdf), 2013.
[^7]: European Space Agency proceedings, [RODDAS orbit-determination and data-association library](https://conference.sdo.esoc.esa.int/proceedings/sdc9/paper/311).
[^8]: NASA, [NPR 8079.1 Appendix D](https://nodis3.gsfc.nasa.gov/displayDir.cfm?Internal_ID=N_PR_8079_0001_&page_name=AppendixD), orbit determination, covariance and autonomous-manoeuvring planning requirements.

