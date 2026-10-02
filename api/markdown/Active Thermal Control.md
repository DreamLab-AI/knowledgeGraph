Active thermal control uses electrical power or commanded actuation to change heat generation, transport or rejection. It is used when passive geometry and material properties cannot maintain the required temperature range, stability or heat-removal rate through every mission mode. Resistance heaters, thermoelectric coolers, cryocoolers and mechanically pumped fluid loops are common active devices.[^1]

## Control modes

Heaters replace heat lost during eclipse, survival states or low-power operation. A mechanical thermostat can switch a heater autonomously; a temperature sensor and controller can offer adjustable set points, narrower control or command from the ground.[^1][^2] The design must state operating and survival set points, thermostat tolerance and deadband, maximum duty cycle, sensor placement, control sampling, power availability and safe-mode behaviour.

Powered cooling does not remove the need for a heat sink. A thermoelectric cooler pumps heat from its cold side to its hot side and adds electrical dissipation. A cryocooler maintains cryogenic instruments but brings power, vibration and lifetime constraints. NASA notes that thermoelectric devices lose efficiency across large temperature differences and can be vulnerable to thermal-expansion stress.[^1]

Mechanically pumped loops collect heat at cold plates or payload interfaces, carry it through a working fluid and reject it through radiators. ESA's Orion European Service Module illustrates this architecture with two independent loops, cold plates and six radiators, supplemented by heaters and insulation.[^3] ESA's heat-transport taxonomy distinguishes single-phase and two-phase pumped loops from passive heat pipes and capillary loops.[^4]

## Sizing and integration

Active equipment is sized with the rest of the thermal architecture. Heater power follows the cold case and needs duty-cycle margin. A pump or cooler is sized against heat load, lift, sink temperature, pressure loss and transient demand. Radiator capacity, electrical power, start-up, control authority and rejected parasitic heat must be closed together. ECSS applies thermal-control requirements across definition, analysis, manufacture, verification and in-service operation rather than treating the controller as an isolated component.[^5]

Small spacecraft make these trades acute. Heaters have extensive flight use, while many miniaturised pumped systems and cryogenic devices remain limited by mass, volume, radiator area and available power.[^1] A component's heritage on a large spacecraft does not establish the maturity of a scaled or newly integrated SmallSat subsystem.

## Failure modes and protection

An active system can fail cold through an open heater circuit, loss of power, pump stoppage, a stuck valve or a bad low-temperature command. It can fail hot through a stuck-on heater, failed-closed thermostat, false sensor value or loss of flow to a radiator. Fluid systems add leakage, freezing, vapour management and contamination risks; moving machinery can add vibration.

Redundancy must match the failure being controlled. NASA's guidebook explains that two thermostats in series protect against one device sticking on but allow either device stuck open to disable the heater. Parallel paths protect differently.[^2] Independent sensors, limit thermostats, cross-strapped power and redundant pumps can help, but each adds interfaces and common-cause possibilities. Verification must exercise control, authority, transitions and credible faults, not only steady nominal operation.[^2][^5]

## Technology status

Status labels require care. ESA records a heat-controlled accumulator project as completed in June 2020, but its result was a designed and tested engineering model rather than a flight-qualified system.[^6] A separate centrifugal-compressor heat-pump project was still marked ongoing at 21 December 2024 and described design and test-bench work.[^7] Both are development evidence. Neither supports a claim of operational flight service.

## References

[^1]: NASA Small Spacecraft Systems Virtual Institute, [Thermal Control](https://www.nasa.gov/smallsat-institute/sst-soa/thermal-control/).
[^2]: NASA, [Passive Thermal Control Engineering Guidebook, revision 5.1](https://ntrs.nasa.gov/api/citations/20220006584/downloads/NASAPassiveThermalGuidebookv5%201Public.pdf).
[^3]: European Space Agency, [European Service Module: Temperature control](https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Orion/European_Service_Module_Temperature_control).
[^4]: European Space Agency, [Heat Transport Equipment and Systems](https://technology.esa.int/page/harmonisation/3).
[^5]: European Cooperation for Space Standardization, [ECSS-E-ST-31C: Thermal control](https://ecss.nl/standard/ecss-e-st-31c-thermal-control/).
[^6]: European Space Agency, [Heat Controlled Accumulator](https://resilience.esa.int/archives/projects/hca-artes-51).
[^7]: European Space Agency, [Heat Pump Centrifugal Compressor System for Spacecraft Cooling](https://resilience.esa.int/archives/projects/heat-pump-centrifugal-compressor-system-spacecraft-cooling).

