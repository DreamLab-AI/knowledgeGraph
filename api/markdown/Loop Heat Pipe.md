A loop heat pipe is a sealed two-phase thermal-transport device driven by capillary pressure rather than a mechanical pump. Its primary wick sits in the evaporator. Heat vaporises working fluid at the wick surface; vapour passes through a dedicated line to the condenser; liquid returns through a separate line and compensation chamber. The physical separation of vapour and liquid paths permits routing and transport distances that are difficult for a conventional heat pipe.[^1][^2]

## Components and operating cycle

Evaporator, primary wick and compensation chamber together set the loop's operating state. The wick must generate enough capillary pressure to overcome vapour-line, condenser, liquid-line and porous-flow losses plus any acceleration head. The compensation chamber stores excess liquid and participates in setting saturation pressure and temperature. Heat leak from the evaporator into that chamber can change the operating point or prevent reliable start-up.[^1][^2]

Vapour condenses along the radiator-coupled condenser and releases latent heat. The returning subcooled liquid helps control the compensation chamber before entering the wick again. Multiple evaporators or condensers can share a loop, but their pressure drops, heat loads and fluid inventory interact. JPL's archived ST8 description proposed a multi-evaporator, multi-condenser system with thermoelectric temperature control; it is evidence of the architecture and its intended demonstration, not proof of completed flight heritage.[^3]

An LHP differs from a mechanically pumped loop. A mechanical loop uses pump work to establish flow and may offer commanded flow rate at the cost of electrical power, vibration and moving machinery. Orion's European Service Module, for example, uses two independent mechanically pumped loops, cold plates and six radiators; it is not a loop-heat-pipe system.[^2][^5]

## Sizing and operating envelope

Design inputs include heat load and flux, source temperature, sink range, transport distance, line routing and diameter, evaporator orientation, acceleration, condenser length, start-up time and allowable overshoot. The capillary-pressure budget must remain positive across steady, transient and off-nominal cases. Fluid and materials must also tolerate storage, survival and any freeze/thaw cycle.

Start-up deserves its own cases. Initial liquid distribution, evaporator heat leak, compensation-chamber temperature, condenser temperature and applied power can determine whether vapour flow establishes cleanly. A loop that transports its rated steady load may still start slowly, oscillate or fail to prime under a colder sink or different acceleration. Shutdown and restart after an eclipse, safe mode or payload duty-cycle change are therefore part of qualification, not extrapolations from one steady test.[^1]

Failure modes include loss of charge, leakage, wick de-priming or contamination, excessive non-condensable gas, condenser blockage, line damage, frozen fluid and control-heater or sensor failure. A parallel loop provides useful redundancy only when faults are isolated and the remaining condenser and radiator capacity cover the required case.

## Integration and qualification

Evaporator mounting resistance and condenser-to-radiator conductance remain in series with the loop. Flexible lines can ease accommodation but must survive launch loads, thermal strain and workmanship inspection. A direct-condensation radiator may reduce interfaces and temperature drop, while making the fluid path part of the exposed panel and complicating integration or repair.[^2]

Gravity changes the liquid inventory and pressure head during ground tests. Qualification should specify orientation, start-up state, heat input, sink boundary, temperatures, pressures where instrumented and measurement uncertainty. ECSS-E-ST-31-02C Rev.1 applies qualification and acceptance requirements to new two-phase heat-transport equipment and excludes mechanically pump-driven loops.[^1] RAL Space lists UK thermal-vacuum chambers spanning component and spacecraft scales, but access to a chamber does not by itself qualify an LHP design.[^6]

ESA's 2019 modular radiator activity assembled cold plates, LHP evaporators and up to four parallel radiator panels and reported a 100–500 W test range.[^4] This is a bounded built-system result. It should not be turned into a generic capacity for all loop geometries, fluids or environments.

## References

[^1]: European Cooperation for Space Standardization, [ECSS-E-ST-31-02C Rev.1: Two-phase heat transport equipment](https://ecss.nl/standard/18891/).
[^2]: ESA Bulletin 87, [Current and Future Techniques for Spacecraft Thermal Control](https://www.esa.int/esapub/bulletin/bullet87/paroli87.htm).
[^3]: NASA Jet Propulsion Laboratory, [ST8 Thermal Loop](https://www.jpl.nasa.gov/nmp/st8/tech/heat_pipe_tech2.html).
[^4]: ESA, [A modular scalable radiator for space](https://www.esa.int/ESA_Multimedia/Images/2019/11/A_modular_scalable_radiator_for_space).
[^5]: ESA, [European Service Module Temperature Control](https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Orion/European_Service_Module_Temperature_control).
[^6]: RAL Space, [Small-scale test facilities](https://www.ralspace.stfc.ac.uk/facilities/small-scale-test-facilities).

