Cold-gas propulsion produces thrust by opening a valve and expanding stored propellant through a nozzle. It uses no combustion or catalytic decomposition: the available pressure and enthalpy of the stored fluid provide the exhaust energy.[^1] Cold gas is therefore a non-reacting, pneumatic form of [[Spacecraft Propulsion]] in a mechanism-based ontology.

NASA and ESA technology catalogues nevertheless often place cold gas beside monopropellant and bipropellant systems under a broad `chemical propulsion` heading, while ECSS applies liquid-propulsion requirements except those specific to combustion.[^2][^3][^4] These are useful programme and standards groupings. They do not mean that a pure cold-gas thruster releases chemical-reaction energy.

## Storage and feed architecture

Propellant can be stored as compressed gas, a saturated liquid that vaporises during discharge, or a solid that sublimes when heated. The system typically includes a pressure vessel, isolation and flow-control valves, a regulator or blowdown feed, lines, filters and one or more nozzles.[^1][^2] The storage state, rather than the name `cold gas`, determines whether the tank contains gas, liquid and vapour, or solid propellant.

Compressed gas gives simple single-phase operation but needs pressure-vessel volume. A lower-molecular-mass gas can improve specific impulse while worsening volumetric storage. A self-pressurising saturated liquid is denser and can suit a small spacecraft, but pressure and mass flow then depend on temperature and two-phase behaviour.[^1]

GomX-4B illustrates the latter architecture. ESA's pre-flight design used two tanks feeding two pairs of nominal 1 mN thrusters. Butane was stored as a liquid and vaporised as it left, providing dense storage without combustion.[^5] NASA's current review records that the system subsequently flew in 2018; the pre-flight article itself is evidence for design intent rather than achieved on-orbit performance.[^1]

Warm-gas or electrothermal thrusters sit at the boundary with electric propulsion. They heat the propellant electrically without causing a chemical reaction, raising exhaust performance at the cost of spacecraft power and thermal hardware.[^1] Their power demand and heated flow should not be attributed to a pure cold-gas system.

## Performance and applications

Cold gas is attractive for fine attitude control and other manoeuvres needing a small, repeatable impulse bit. Its simple flow path and potential use of inert, low-toxicity propellants can ease integration with a primary payload. Low specific impulse and limited stored mass usually constrain large orbit changes and total impulse.[^1]

NASA's current Small Spacecraft survey covers cold-gas devices from 10 µN to 3.6 N and from 40 to 110 seconds specific impulse.[^1] These figures aggregate unlike products, propellants and operating conditions. They are not universal bounds or a performance promise for one design; pressure, temperature, molecular mass, nozzle, duty cycle and blowdown state must accompany a selected value.

Euclid provides a larger precision-pointing example. Before launch, ESA documented six nitrogen cold-gas microthrusters supplied from four high-pressure tanks containing 70 kg of nitrogen, sized for at least six years of planned operation.[^6] This establishes the flight configuration and design life, not an already achieved lifetime.

## Qualification, failure and operations

Cold-gas verification covers proof and leak testing, regulator and valve behaviour, thrust and impulse-bit repeatability across the pressure and temperature envelope, lifetime cycling, plume effects, vibration and thermal-vacuum operation.[^2] Blowdown operation needs characterisation across the declining tank pressure; a saturated-liquid system also needs representative heat transfer and phase behaviour.

Removing combustion removes ignition and catalyst risks but leaves stored-pressure hazards, leakage, blockage, contamination and valve failure. NASA's BioSentinel cold-gas system flew in 2022 with six reaction-control thrusters; one valve failed closed during checkout. Operations used the remaining five thrusters and had accumulated 408 firings by May 2023.[^1] MarCO-B suffered a tank-to-plenum leak accepted before launch and another leak through a thruster valve in flight, creating a continuous disturbance torque even though the mission completed its relay objective.[^1]

Propellant choice also sets ground and end-of-life hazards. `Inert` or `low-toxicity` does not remove pressure-vessel rupture, asphyxiation, refrigerant, leakage or passivation concerns. Redundancy, isolation and fault response should follow the mission consequence rather than the apparent simplicity of the device.[^1][^2]

## UK capability

Nammo's current Westcott facility page lists cold-gas thruster acceptance work in its mini high-altitude facility.[^7] This is a bounded UK test capability. Acceptance at a facility is not the same as qualification or flight heritage; those claims require the named hardware, configuration, campaign and mission evidence.

## References

[^1]: NASA Small Spacecraft Systems Virtual Institute, [In-Space Propulsion](https://www.nasa.gov/smallsat-institute/sst-soa/in-space_propulsion/).
[^2]: European Cooperation for Space Standardization, [ECSS-E-ST-35-01C: Liquid and electric propulsion for spacecraft](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-35-01C15November2008.pdf).
[^3]: European Space Agency, [Technology Harmonisation: CubeSat Propulsion](https://technology.esa.int/page/harmonisation/2).
[^4]: European Space Agency, [Anatomy of a spacecraft](https://www.esa.int/Science_Exploration/Space_Science/Anatomy_of_a_spacecraft).
[^5]: European Space Agency, [ESA's next satellite propelled by butane](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/ESA_s_next_satellite_propelled_by_butane).
[^6]: European Space Agency, [Euclid fuelled for launch](https://www.esa.int/Science_Exploration/Space_Science/Euclid/Euclid_fuelled_for_launch).
[^7]: Nammo, [Westcott](https://www.nammo.com/locations/westcott/).

