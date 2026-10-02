A magnetorquer is a spacecraft actuator that creates a commanded magnetic dipole with an electrical coil or a magnetised core. The dipole interacts with the local ambient magnetic field to generate an external control torque. For dipole `m` and field `B`, the relationship is `torque = m x B`.[^1]

## Torque authority and null direction

Cross-product geometry fixes a central limitation: torque is perpendicular to both the commanded dipole and the local field. No magnetorquer command can produce an instantaneous torque component parallel to `B`. Three orthogonal rods or coils allow the controller to command a three-dimensional dipole, but they do not remove this null direction.[^1]

As an Earth-orbiting spacecraft moves, the magnetic-field direction changes and control authority can accumulate over time. Coarse three-axis stabilisation may be possible over suitable orbits, but it depends on inclination, field variation, disturbance torque and available time. ESA's SSETI Express description shows a bounded case: two magnetorquers detumbled and stabilised two axes while leaving one characterised degree of freedom about the field-aligned axis.[^5] Claims of magnetic three-axis control should state whether they mean instantaneous torque, controllability over an orbit or achieved pointing in a flight test.

## Uses and environmental dependence

Magnetorquers commonly detumble a spacecraft after separation, support coarse or safe-mode control, and unload momentum from reaction wheels. During unloading, magnetic torque changes the spacecraft-wheel system's total angular momentum while wheel control maintains the desired attitude and moves stored wheel momentum back towards its operating range.[^1] ESA describes this pairing on Proba-2, where magnetorquers unload four reaction wheels.[^3]

Operation depends on a sufficiently strong and adequately modelled external field. Earth-orbit performance does not transfer automatically to cislunar, interplanetary or weak-field environments. NASA advises investigating other control methods where a useful local field may be absent.[^1] Torque also varies with position and attitude because field strength and direction change, so a quoted dipole moment is not a constant torque specification.

## Magnetic cleanliness and calibration

A controller needs a field estimate to choose the dipole command. A spacecraft magnetometer measures all local contributions, including the desired environmental field, remanent spacecraft magnetism, currents, wiring, reaction wheels and the torquer itself.[^1] Mounting the magnetometer farther away can reduce interference. Cable routing, materials, calibration and command timing influence the remaining contamination. Some designs alternate magnetometer sampling and torquer activation; any such scheme must meet the mission's control bandwidth and measurement needs.

Calibration and verification should cover the commanded-current-to-dipole relationship, axis alignment, remanence, temperature, power and switching behaviour, interaction with magnetometers, and field-dependent closed-loop performance. AAC Clyde Space states that its MTQ800 dipole is directly controllable and that the series has flown since 2020 at TRL 9.[^2] Those are manufacturer heritage claims for the named product rather than independent evidence for every integrated spacecraft.

## Evidence boundaries

Design studies, planned demonstrations and flight results must remain distinct. The University of Surrey CubeSail page describes a planned architecture using magnetorquers and a momentum wheel for detumbling and solar-sail control, but its future-tense text and milestone list do not document a completed CubeSail flight demonstration.[^4] SSETI Express and Proba-2 pages describe specific flight architectures.[^3][^5] None establishes a universal pointing accuracy for magnetorquers; performance belongs to the mission, orbit, sensors, estimator and controller.

## References

[^1]: NASA Small Spacecraft Systems Virtual Institute, [Guidance, Navigation, and Control](https://www.nasa.gov/smallsat-institute/sst-soa/guidance-navigation-and-control/).
[^2]: AAC Clyde Space, [MTQ800 magnetorquers](https://www.aac-clyde.space/what-we-do/space-products-components/adcs/mtq800-10).
[^3]: European Space Agency, [Proba-2 spacecraft](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Proba_Missions/Proba-2_Spacecraft).
[^4]: University of Surrey, [CubeSail mission](https://www.surrey.ac.uk/surrey-space-centre/missions/cubesail).
[^5]: European Space Agency, [SSETI Express subsystems](https://www.esa.int/Education/SSETI_Express/SSETI_Express_sub-systems).

