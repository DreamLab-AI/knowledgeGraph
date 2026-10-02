Spacecraft thermal control keeps equipment, structures, fluids and payloads within their survival and operating temperature limits throughout the mission. It manages environmental heat, internally dissipated power, stored energy and radiative rejection. The subsystem commonly combines passive surfaces and heat paths with active heaters, coolers or fluid transport.[^1]

## Architecture and boundaries

A top-level energy balance accounts for absorbed sunlight, reflected sunlight and planetary infrared radiation; internal dissipation; heat stored in thermal mass; and heat radiated to space.[^1] At steady state the storage term approaches zero. During eclipse entry, warm-up, a slew or a change in payload duty cycle, stored energy matters and temperatures follow a transient response.

A global balance cannot show whether a particular battery, detector or joint stays within limits. A thermal mathematical model divides the spacecraft into nodes linked by conductive and radiative couplings. It represents structure, interfaces, insulation, wiring looms, heat pipes, radiators, dissipation and thermal mass. Environmental flux and view factors depend on trajectory and attitude. ECSS treats definition, analysis, design, manufacture, verification and in-service operation as one thermal-engineering discipline.[^2]

Architecture therefore crosses subsystem boundaries. Power state sets internal dissipation and heater capacity. Attitude sets solar, planetary and deep-space views. Structures and fasteners form heat paths. Mechanisms change geometry. Payload stability can impose tighter requirements than bus survival. Safe mode must protect hardware with reduced sensing, pointing, communications or software support.

## Design and sizing

Requirements should separate operating, non-operating and survival ranges and state permitted gradients, rates and stability. Engineers analyse bounding hot and cold combinations, eclipses, attitudes, mission modes, beginning- and end-of-life properties, dissipation tolerances, uncertain interfaces and credible failures.[^1][^3] A supposed worst case must remain physically possible; combining incompatible extremes can oversize hardware without improving assurance.

Hot-case design sets radiator and transport capacity. Cold-case design sets insulation, isolation and heater need. More radiator area can solve the hot case while increasing survival power in a cold, quiet mode. MLI that saves heater energy can raise the temperature of high-dissipation electronics. Thermal architecture is therefore iterated with mass, power, pointing, reliability and operations rather than sized once.[^1][^3]

## Analysis and verification

ECSS describes thermal analysis as a verification method used from concept design to final flight prediction.[^3] Models need documented geometry, properties, boundary conditions, solver settings, uncertainty and configuration control. Their purpose changes through the project: early models compare architecture; detailed models predict local temperatures and test response; correlated models support final flight cases.

Verification combines analysis, inspection and test. Thermal-vacuum cycling demonstrates function and survival through repeated temperature extremes and screens workmanship. Thermal-balance cases hold controlled hot and cold boundaries to check heater operation, radiator sizing, critical heat paths and the analytical model.[^4][^5] The activities can share a chamber campaign, but their evidence is not interchangeable. Test correlation reduces uncertainty only within the represented boundaries; untested seasons, attitudes and ageing states still require analysis.

## Limitations, failure and operations

Thermal control can be lost through changed surface properties, damaged insulation, a poor interface, heat-pipe leakage or dry-out, stuck heaters, failed sensors, loss of electrical power, pump failure or an attitude excursion. A model can also be wrong because dissipation, contact conductance or a chamber boundary was misrepresented. Margins, redundancy and test instrumentation should follow the consequence of each failure rather than a uniform rule.[^1][^4]

Flight operations remain part of the system. Temperature telemetry can trigger heater commands, duty-cycle changes, attitude constraints or instrument safing. A published spacecraft temperature without sensor location, operational mode, epoch and applicable limit is not enough to judge thermal health.

## UK capability and evidence

RAL Space lists current thermal-engineering, MLI and thermal-vacuum capability. Its National Satellite Test Facility officially opened in May 2024 and supports satellites up to seven tonnes; the large chamber is seven metres in diameter and twelve metres long.[^6][^7] This is a deployed UK test capability, not evidence that every thermal-control technology is designed there.

MicroCarb provides a bounded flight example. RAL Space and Thales Alenia Space UK conducted thermal-vacuum testing, and RAL made some MLI blankets before the spacecraft launched on 26 July 2025.[^8] Those facts establish UK integration, test and blanket contributions, not ownership of the complete satellite architecture.

## References

[^1]: NASA Small Spacecraft Systems Virtual Institute, [Thermal Control](https://www.nasa.gov/smallsat-institute/sst-soa/thermal-control/).
[^2]: European Cooperation for Space Standardization, [ECSS-E-ST-31C: Thermal control](https://ecss.nl/standard/ecss-e-st-31c-thermal-control/).
[^3]: European Cooperation for Space Standardization, [ECSS-E-HB-31-03A: Thermal analysis handbook](https://ecss.nl/home/ecss-e-hb-31-03a-15november2016/).
[^4]: NASA, [NASA-STD-7002B with Change 1: Payload Test Requirements](https://standards.nasa.gov/sites/default/files/standards/NASA/B/1/NASA-STD-7002B-w-Change-1.pdf).
[^5]: NASA Goddard Space Flight Center, [GSFC-STD-7000B: General Environmental Verification Standard](https://standards.nasa.gov/sites/default/files/standards/GSFC/B/0/gsfc-std-7000b_signature_cycle_04_28_2021_fixed_links.pdf).
[^6]: UK Research and Innovation, [RAL Space](https://www.ukri.org/who-we-are/stfc/facilities/rutherford-appleton-laboratory/ral-space/).
[^7]: UK Research and Innovation, [National Satellite Test Facility](https://www.ukri.org/what-we-do/browse-our-areas-of-investment-and-support/national-satellite-test-facility/).
[^8]: UK Research and Innovation, [UK-French satellite launches to transform climate monitoring](https://www.ukri.org/news/uk-french-satellite-launches-to-transform-climate-monitoring/).

