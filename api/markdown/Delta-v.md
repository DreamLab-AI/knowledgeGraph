Delta-v is a change in velocity, represented as a vector with a magnitude, direction, reference frame and epoch.

In trajectory design, a manoeuvre delta-v specifies the velocity change sought at a particular time. Its direction matters: two equal burns in opposite directions can cancel as vectors. Mission budgets usually add burn magnitudes because they estimate propulsion resources, but that scalar sum is not the vector difference between the initial and final states. A useful budget separates planned manoeuvres, correction allowances, disposal, reserves and propellant that cannot be used, and states the confidence and correlation assumptions behind statistical margins.[^1227][^1234]

Ideal rocket-equation analysis estimates the velocity-change capability associated with a propellant mass ratio: Δv = vₑ ln(m₀/mf) = Isp g₀ ln(m₀/mf). Here vₑ is effective exhaust velocity, Isp is specific impulse, g₀ is standard gravity, and m₀ and mf are the defined initial and final masses. The result depends on consistent mass boundaries, propulsion operating conditions and any staging. It describes ideal propulsion capability; it does not by itself predict a launch or manoeuvre outcome.[^1225][^1226][^1253]

Required, available, commanded and achieved delta-v refer to different stages of a mission. A navigation solution supplies the current state; guidance and trajectory design set the target change; propulsion capability and vehicle constraints limit what can be delivered. The achieved change is reconstructed from estimated states and burn data. Thrust, mass flow, pointing, timing, external forces and navigation error can all separate the reconstructed result from the command.[^1227][^1229][^1231]

An impulsive burn is modelled as an instantaneous velocity jump with no position change during execution. It is useful for preliminary design and for burns short relative to the orbital timescale. A finite burn integrates thrust over time while the vehicle moves, its mass falls, attitude changes and gravity continues to act. Long or low-thrust manoeuvres can alter the trajectory substantially; an impulsive solution may provide an initial guess, but the finite-burn path needs its own targeting or optimisation.[^1228][^1230][^1232][^1233]

A delta-v estimate should carry uncertainty in the vector components and the state from which it was derived. Taking the magnitude is nonlinear, especially when the expected vector is near zero, so a scalar allowance can hide directional correlations. Covariance and samples should be tied to a stated frame and epoch. Gravity assists and atmospheric drag can also change a spacecraft’s velocity without onboard propellant, by exchanging momentum and energy with another body or the atmosphere; calling that “free delta-v” omits the exchange and the trajectory constraints.[^1227][^1231][^1234][^1252]

[^1225]: [NASA Glenn, Ideal Rocket Equation](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/ideal-rocket-equation/).
[^1226]: [NASA Glenn, Specific Impulse](https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/specific-impulse/).
[^1227]: [NASA, Basics of Space Flight: Navigation](https://science.nasa.gov/learn/basics-of-space-flight/chapter13-1/).
[^1228]: [GMAT, FiniteBurn documentation](https://documentation.help/GMAT/FiniteBurn.html).
[^1229]: [GMAT, ImpulsiveBurn documentation](https://documentation.help/GMAT/ImpulsiveBurn.html).
[^1230]: [GMAT, Target a Finite Burn to Raise Apogee](https://documentation.help/GMAT/Tut_TargetFiniteBurn.html).
[^1231]: [NASA, Delta-v covariance and numerical uncertainty](https://ntrs.nasa.gov/api/citations/20240000610/downloads/Woffinden_LincovDeltav_PREPRINT.pdf).
[^1232]: [ESA ICATT, Lunar CubeSat low-thrust design](https://indico.esa.int/event/111/contributions/372/attachments/379/422/ICATT6_PAPER-Lunar_CubeSat_Trajectory_Design-Mathur.pdf).
[^1233]: [ESA ACT, Impulsive delta-v transcription](https://www.esa.int/gsp/ACT/doc/MAD/pub/ACT-RPR-MAD-2009-GlobalOptLowThrust.pdf).
[^1234]: [CCSDS, Orbit Data Messages, 502.0-B-3 Corrigendum 1](https://ccsds.org/Pubs/502x0b3e1.pdf).
[^1252]: [NASA, Catalog of Earth Satellite Orbits](https://science.nasa.gov/earth/earth-observatory/catalog-of-earth-satellite-orbits/).
[^1253]: [NASA, Basics of Space Flight: Gravity and Mechanics](https://science.nasa.gov/learn/basics-of-space-flight/chapter3-2/).

