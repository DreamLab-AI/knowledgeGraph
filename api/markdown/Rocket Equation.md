Ideal velocity capability relates to effective exhaust velocity and mass ratio through the rocket equation:

`delta-v = c ln(m0 / mf) = Isp g0 ln(m0 / mf)`.[^1]

`m0` is total vehicle mass at the start of the burn segment, `mf` is total mass at its end, `c` is effective exhaust velocity, `Isp` is its conventional seconds form, `g0` is standard acceleration and `ln` is the natural logarithm. Both masses must refer to the same vehicle boundary and segment.

## Derivation and assumptions

Conservation of momentum for a variable-mass vehicle that expels material produces the equation. In its common ideal form, effective exhaust velocity is constant within the segment and external forces are absent. NASA's technical derivation also identifies idealised instantaneous start-up and shutdown, complete propellant expenditure and omission of drag, gravity, heating and trajectory as limiting assumptions.[^2]

This result is velocity capability, often called ideal delta-v. It is not automatically the achieved change in inertial speed. NASA defines delta-v in this context as the maximum change available without external forces.[^3] Real position and velocity follow from integrating thrust direction, mass, gravity, atmosphere and other forces through time.

Mass ratio is dimensionless. Rearranging the equation gives

`m0 / mf = exp(delta-v / c)`.

Exponential growth explains why small increases in required delta-v can demand large increases in initial mass. A high effective exhaust velocity reduces ideal propellant demand. Nothing in this relation says how large a thrust must be or how long the burn takes.

## Mass definitions and residuals

Initial mass includes structure, payload, propellant, pressurant and all other material aboard at segment start. Final mass includes everything still attached at segment end, including reserve or unusable propellant. ECSS distinguishes initial, loaded, ejected, final, dry and residual masses; substituting one for another changes the result.[^4]

Loaded propellant does not all become useful ejected mass. Liquid can remain trapped or unavailable at an outlet, mixture-ratio errors can strand one bipropellant component, and feed pressure or thermal limits can end a burn before a tank is empty. Reserves and statistical margin should remain explicit in the mass budget rather than be hidden in a tuned `Isp`.

## Losses and finite burns

Launch and landing trajectories incur gravity, aerodynamic drag and steering losses. Pressure and performance change with altitude. A simple `g0 tb` gravity subtraction is only a restricted vertical, constant-gravity illustration; general gravity loss is the integral of the gravity component along the trajectory. Drag depends on density, velocity, reference area and attitude, while steering loss depends on thrust-vector direction.[^1][^2]

Finite burns matter whenever the state or force direction changes appreciably during firing. A low-thrust electric-propulsion arc can span a large fraction of an orbit, so replacing it with one instantaneous impulse can produce the wrong final state even if its ideal mass-ratio arithmetic is correct.[^5] Numerical trajectory propagation accounts for thrust, power or eclipse constraints, changing mass and perturbations.

Delivered manoeuvre delta-v also carries execution error: thrust and mass-flow scatter, alignment, valve timing, navigation error and residual uncertainty. ECSS requires mission thrust and flow histories, standard deviations and qualification over modelling, manufacture, measurement and facility scatter.[^4]

## Staging

Staging breaks a mission into segments with their own `m0`, `mf` and effective exhaust velocity. Jettisoning empty tanks, engines or structures improves the mass ratio of later segments. Ideal stage delta-v values can be added after each segment boundary has been defined consistently.[^2]

Benefits depend on the complete vehicle. Interstages, separation systems, duplicated engines, residual propellant and reliability penalties consume mass and complexity. A detached stage is absent from the next segment's initial mass, while an upper stage and payload were part of the lower stage's final accelerated mass until separation. Applying one mass ratio to the complete vehicle without these boundaries is a common misuse.

## Interpretation controls

Lift-off still requires initial thrust to exceed opposing force with adequate control authority. Rocket-equation output supplies no trajectory, burn duration, power, thermal limits, tank volume or structural feasibility. High `Isp` helps the ideal propellant term but does not guarantee better energy efficiency or a shorter mission. State the propulsion boundary, reference performance, stage endpoints, losses, reserves and uncertainties before using a delta-v result for design.

## References

[^1]: NASA Glenn Research Center, [Ideal Rocket Equation](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/ideal-rocket-equation/).
[^2]: NASA, [Exergy Analysis for Aerospace Applications](https://www.nasa.gov/wp-content/uploads/2018/09/nasa_tp_20205003644_interactive2.pdf), Appendix A.
[^3]: NASA Science, [Basics of Space Flight, Chapter 3](https://science.nasa.gov/learn/basics-of-space-flight/chapter3-2/).
[^4]: European Cooperation for Space Standardization, [ECSS-E-ST-35C Rev.1: Propulsion general requirements](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-35C_Rev.16March2009.pdf).
[^5]: ESA, [What is Electric Propulsion?](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/What_is_Electric_propulsion).

