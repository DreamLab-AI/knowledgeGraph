Power conditioning and distribution controls electrical energy between the source, battery, main bus and loads. Conditioning regulates the array and battery interfaces and creates usable rails. Distribution switches and protects load branches, measures their state and prevents a fault on one branch from collapsing the shared source or bus.[^1]

## Architecture

A solar-powered architecture may use direct energy transfer (DET) or maximum-power-point tracking (MPPT). DET couples the array more directly to the bus and controls surplus power by switching or shunting sections. MPPT uses a converter to hold the array near its maximum-power operating point. MPPT can improve energy capture under changing illumination, temperature or mismatch, but adds conversion and control losses. Neither method guarantees that rated array power reaches a payload connector.[^8]

Battery charge and discharge regulation then controls current and voltage within cell and bus limits. A regulated bus holds a defined voltage across its operating range; an unregulated bus follows the source or battery more closely and may require conversion at the load. Both are legitimate architecture choices. MetOp, for example, distributes an unregulated primary bus while providing a dedicated regulated 28 V interface for some instruments.[^2] The choice affects converter mass, cable current, fault energy, electromagnetic compatibility and heat rejection.

Secondary converters can provide isolated or non-isolated rails. Deployment circuits, payload peaks and heaters may use dedicated feeds. The architecture must state where each quoted efficiency and power figure is measured. Watts describe the instantaneous rate through converters, switches and wiring; watt-hours describe the energy transferred over an interval. Battery capacity in ampere-hours cannot establish either without voltage, current and time limits.

## Protection boundaries

Distribution typically uses latching current limiters (LCLs), retriggerable limiters, fuses or electronic switches. A persistent overcurrent may be isolated permanently until commanded reset, while a retriggerable channel can attempt recovery. Blocking, over-voltage control, undervoltage load shedding, launch inhibits and redundant isolation protect different faults. Reset behaviour and priority shedding form part of system safety, rather than a component setting considered alone.

ECSS-E-ST-20-20C has a deliberately narrow scope: it covers main-bus distribution by LCL, retriggerable LCL and high-current LCL to external loads. It excludes internal protections within the power subsystem.[^4] Compliance with that standard therefore does not demonstrate complete battery, array or converter fault containment. The system analysis must trace short circuits, open circuits, sneak paths, common returns, stored energy and a failed protection channel across the entire architecture.

## Hardware examples and evidence limits

Glasgow-founded AAC Clyde Space markets STARBUCK-NANO units with MPPT or DET options, regulated 3.3, 5 and 12 V rails, configurable current limiters, telemetry, watchdogs and autonomous protection for low-Earth-orbit CubeSats.[^7] These are supplier specifications and heritage claims. A mission still needs the installed configuration, component lot, interface records and acceptance evidence.

Airbus's 2018 high-power PCDU sheet illustrates another architecture: MPPT array regulation, lithium-ion battery control, regulated and unregulated buses, latching current limiters and autonomous undervoltage load shedding. It draws a radar peak directly from the battery so the array and conditioning path need not carry that brief maximum.[^6] The sheet is non-contractual, product-specific and does not establish a current Airbus UK manufacturing capability. Airbus Crisa lists wider power-electronics functions, but Crisa is based in Spain.[^5]

A peer-reviewed study compared regulation techniques for low-Earth orbit and tested sequential maximum-power tracking through simulation and an automotive-component breadboard.[^8] That evidence supports the control concept. It is not radiation qualification, acceptance of flight hardware or operational heritage.

## Sizing and verification

The PCDU is sized against credible simultaneous loads, inrush and peak current, converter efficiency, battery recharge, thermal dissipation and end-of-life source voltage. A short peak may be supplied from the battery, but only if its current, voltage sag, temperature and subsequent recharge remain within limits. Average orbital power cannot size a switch or cable, while a peak in watts cannot establish energy adequacy.

Verification starts with analysis and component characterisation, then qualification of a controlled design and acceptance of delivered hardware. Integrated spacecraft testing must exercise representative loads, operating envelopes, predicted failure modes and injected faults.[^3] It should cover array transitions, charge and discharge, overload isolation, load shedding, reset, telemetry accuracy and recovery after loss of a rail. Qualification of a product family and supplier flight heritage do not demonstrate correct sequencing or fault containment in a new spacecraft configuration.

## References

[^1]: European Cooperation for Space Standardization, [ECSS-E-ST-20C Rev.2: Electrical and electronic](https://ecss.nl/wp-content/uploads/2022/04/ECSS-E-ST-20C-Rev.2(8April2022).pdf), 8 April 2022.
[^2]: European Space Agency, [MetOp electrical power](https://www.esa.int/Applications/Observing_the_Earth/Meteorological_missions/MetOp/Electrical_power2).
[^3]: NASA Johnson Space Center, [Power Subsystems](https://www.nasa.gov/reference/jsc-power-subsystems/).
[^4]: European Cooperation for Space Standardization, [ECSS-E-ST-20-20C: Electrical design and interface requirements for power supply](https://ecss.nl/standard/ecss-e-st-20-20c-space-engineering-electrical-design-and-interface-requirements-for-power-supply-15-april-2016-2/), 15 April 2016.
[^5]: Airbus Crisa, [Power electronics](https://www.crisa.airbus.com/en/airbus-crisas-solutions/power-electronics).
[^6]: Airbus Defence and Space, [High Power PCDU](https://mediaassets.airbus.com/pm_38_551_551599-pg6kvfe3la.pdf), 2018.
[^7]: AAC Clyde Space, [STARBUCK-NANO CubeSat electrical power system](https://www.aac-clyde.space/what-we-do/space-products-components/%20pcdu/cubesat-eps-starbuck-nano).
[^8]: Schirone et al., [Power Bus Management Techniques for Spacecraft Equipped with Solar Arrays and Lithium-Ion Batteries](https://iris.unipa.it/retrieve/handle/10447/553770/1339565/energies-14-07932.pdf), *Energies* 14, 7932, 2021, doi:10.3390/en14237932.

