An orbital perturbation is a force or dynamical effect that causes an orbit to depart over time from an ideal two-body Keplerian trajectory.

Earth-orbit perturbations include departures from spherical gravity, the gravitational attraction of the Sun and Moon, atmospheric drag, solar radiation pressure, tides and spacecraft thrust. These effects can change orbital energy, plane orientation, eccentricity and the timing of orbital events. Their relative importance depends on the orbit, the prediction span and the accuracy the mission requires.[^1260][^1265]

Earth’s equatorial bulge, represented chiefly by the J2 gravity coefficient, produces secular changes in the ascending node and the line of apsides. The precession rates depend on orbital size, eccentricity and inclination. Mission designers use this effect in sun-synchronous orbit design; the formulas and numerical rates must use a declared gravity model and current constants.[^1283]

A force model should include the effects that materially affect the required result. NASA conjunction-assessment guidance gives useful regime-based recommendations for geopotential, third-body gravity, drag and solar radiation pressure, but these are general guidelines rather than universal model orders. An integrator can solve the selected equations accurately while the selected forces or inputs remain inadequate.[^1262][^1263]

Prediction uncertainty therefore includes more than numerical integration error. Initial-state uncertainty, force-model bias, uncertain drag properties, observations and future space-weather inputs can all move the propagated state. Record the force assumptions and estimation choices with the state and its covariance, and limit conclusions to the orbit regime and time span for which they were assessed.[^1264][^1265]

[^1260]: [CCSDS, Orbit Data Messages, 502.0-B-3](https://ccsds.org/Pubs/502x0b3e1.pdf).
[^1262]: [NASA NPR 8079.1, Orbit Conjunction Assessment Plan, Appendix D](https://nodis3.gsfc.nasa.gov/displayDir.cfm?Internal_ID=N_PR_8079_0001_&page_name=AppendixD).
[^1263]: [GMAT, Propagator documentation](https://documentation.help/GMAT/Propagator.html).
[^1264]: [ESA Advanced Concepts Team, Hybrid Propagation](https://www.esa.int/gsp/ACT/projects/HybridPropagation/).
[^1265]: [NASA Ames Flight Dynamics, Trajectory Design](https://www.nasa.gov/ames-engineering/spaceflight-division/flight-dynamics/trajectory-design/).
[^1283]: [NASA NTRS, Orbital mechanics and Earth oblateness perturbations](https://ntrs.nasa.gov/api/citations/19830024557/downloads/19830024557.pdf).

