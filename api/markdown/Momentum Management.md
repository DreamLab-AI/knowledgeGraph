
Momentum management keeps the angular momentum stored in spacecraft attitude actuators within a usable envelope. Reaction and momentum wheels exchange momentum internally with the spacecraft. They can reject a short disturbance or execute a slew, but cannot remove angular momentum from the closed spacecraft-wheel system. A persistent external torque therefore drives wheel speed and stored momentum towards a limit.[^nasa-actuators-2024]

Angular momentum is measured in newton metre seconds (N m s); torque is its time derivative and is measured in newton metres (N m). A wheel's momentum capacity says how much disturbance impulse it can absorb. Its torque-speed envelope says how quickly it can change that stored momentum. Treating the two ratings as interchangeable leads to incorrect sizing.

## Sources and limits

Solar radiation pressure, aerodynamic force, gravity-gradient torque, residual magnetic dipole and moving appendages can all contribute to momentum build-up. Their effects may be cyclic, secular or both, depending on orbit, attitude, appendage motion and offsets between force and mass centres.[^nasa-disturbance-momentum] Commanded slews and propulsion activity add further terms.

“Saturation” should name the actual constraint. A wheel may reach maximum speed or momentum, its current or voltage limit, a thermal boundary or an unfavourable part of its torque-speed curve. A [[Control Moment Gyroscope]] cluster can instead meet a gimbal-travel limit or a steering singularity. Recovery depends on which boundary was reached.

Momentum analysis propagates the complete state through representative activity timelines. Dawn's ground tool, for example, checked reaction-wheel speeds and body-frame momentum while accounting for solar pressure, gravity-gradient and ion-engine torques. It supported frequent desaturations and operational planning; it was a mission-specific tool rather than a universal controller.[^nasa-dawn-momentum]

## Unloading stored momentum

An external torque is required to unload internal wheels. Thrusters exchange momentum through expelled propellant. Magnetorquers exchange it with the local planetary magnetic field. During an unload, the external actuator supplies torque while the wheels are commanded towards a safer momentum state. Thrusters consume propellant and may disturb the orbit or payload. Magnetic unloading is propellantless but weak, varies with position, and has no instantaneous torque component along the local field.[^nasa-smallsat-gnc]

Spacecraft attitude can also be scheduled so environmental torque changes direction. A 2024 Lunar Reconnaissance Orbiter paper described off-nadir momentum slews intended to reduce propulsive unloading and extend fuel life. The planning had to satisfy spacecraft, ground and science constraints, and the record labelled its lifetime benefit as projected.[^nasa-lro-momentum]

Integral provides flight evidence of both the problem and an unusual workaround. Solar pressure on its large arrays drove its reaction wheels to maximum speed every two to three days, normally followed by thruster-assisted unloading. After the propulsion system became unusable, operators simulated and flight-tested a slower “Z-flip” sequence that redistributed wheel momentum and constrained observation planning.[^esa-integral]

Momentum management can also avoid low-speed regions. Cassini's wheel-bias optimisation kept wheel speeds below a hard maximum while reducing time where bearing lubrication became ineffective. A bias may improve control through zero speed, but it consumes part of the available positive or negative momentum range and changes power, bearing and jitter conditions.[^nasa-cassini-wheel-bias]

## Evidence and verification

A defensible budget records inertia and centre-of-mass uncertainty, actuator axes, usable speed range, torque-speed curves, disturbance histories, manoeuvres, unloading authority, sensor latency and fault cases. Monte Carlo or dispersive propagation should preserve correlations between attitude, environment and actuator state. A catalogue momentum capacity cannot establish control authority by itself.

Operational records demonstrate a solution only for their mission geometry and constraints. Dawn's predictor, LRO's planned slews, Integral's flight-tested Z-flip and Cassini's bearing-aware bias optimiser address different combinations of disturbance, hardware and consumables. Their methods should not be transferred without rebuilding the momentum model.

[^nasa-actuators-2024]: NASA, *Spacecraft Modeling, Attitude Determination, and Control: Quaternion-Based Approach* (2024), Chapter 10, https://ntrs.nasa.gov/api/citations/20240009554/downloads/Space%20Attitude%20Development%20Control.pdf
[^nasa-disturbance-momentum]: B. P. Robertson and M. L. Heck, *Spacecraft Attitude Control Momentum Requirements Analysis*, NASA-CR-178219 (1987), https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19870007431.pdf
[^nasa-dawn-momentum]: E. R. Swenka, B. A. Smith and C. A. Vanelli, “Momentum Management Tool for Low-Thrust Missions”, NASA Tech Brief (2010), https://ntrs.nasa.gov/citations/20100033575
[^nasa-lro-momentum]: T. F. Deboeck, J. Halverson and Y. Tedla, “Control of the Lunar Reconnaissance Orbiter Reaction Wheel Angular Momentum Using Attitude Slews” (2024), https://ntrs.nasa.gov/citations/20240009215
[^esa-integral]: ESA, “Rescuing Integral: No thrust? No problem” (16 July 2021), https://www.esa.int/Enabling_Support/Operations/Rescuing_Integral_No_thrust_No_problem
[^nasa-cassini-wheel-bias]: C. Lee and A. Lee, “Optimization of Angular-Momentum Biases of Reaction Wheels”, NASA Tech Brief (2008), https://ntrs.nasa.gov/search.jsp?R=20080048167
[^nasa-smallsat-gnc]: NASA Small Spacecraft Systems Virtual Institute, “Guidance, Navigation, and Control”, https://www.nasa.gov/smallsat-institute/sst-soa/guidance-navigation-and-control/

