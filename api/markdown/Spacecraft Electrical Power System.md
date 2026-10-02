A spacecraft electrical power system generates or receives electrical energy, stores it when required, conditions it into usable voltages, distributes it to platform and payload loads, contains electrical faults and reports its state. Solar cells are one possible source; batteries are one possible store. Regulators, converters, switches, protection and telemetry connect them into a system that must remain safe through launch, deployment, sunlight, eclipse, manoeuvres and contingencies.[^1]

## Power and energy budgets

Power and energy answer different design questions. **Power**, measured in watts (W), is the rate at which a load consumes or a source supplies energy. It sets instantaneous current, converter, switch, wiring and thermal requirements. **Energy**, often expressed in watt-hours (Wh), is power integrated over time. It determines whether generation and stored charge can support a load through an eclipse, safe-mode recovery or a scheduled payload duty cycle.

ECSS therefore requires separate analyses of power demand against power available and energy demand against energy available throughout every mission phase. The analyses include peak and inrush loads, eclipse, solar aspect angle and depointing. Peak values inform the power budget; average power over the operating interval informs the energy budget.[^1] A spacecraft can have enough peak power yet exhaust its battery before eclipse ends. It can also have ample stored energy but lack the discharge rate or converter capacity for a short transmitter or propulsion pulse.

Every quoted figure needs a defined boundary. NASA notes that a supplier's “power” may mean solar-array peak output at beginning of life (BOL), power available to a payload, orbit-average power, or a battery-assisted peak.[^2] These quantities cannot be substituted for one another. For example, SSTL's MICRO reference platform quotes up to 63 W of orbit-average payload power for a specified 550 km Sun-synchronous case and up to 200 W peak.[^7] Neither figure alone states the continuous array output or the stored energy available in another orbit.

## Architecture and control

A solar-powered system normally joins four functional layers:

- the array converts incident sunlight to direct-current electricity;
- a battery stores energy for launch, eclipse and transient demand;
- power conditioning controls the array operating point, charges and discharges the battery, and converts voltage where necessary;
- protected distribution switches loads, limits faults and provides measurements to onboard control.

Array regulation commonly uses direct energy transfer (DET) or maximum-power-point tracking (MPPT). DET couples the array more directly to the bus and controls surplus generation by switching or shunting sections. MPPT changes the electrical operating point to extract the available maximum from the array before conversion to the bus or battery. Neither method removes conversion, diode, cabling or thermal losses, and neither guarantees a particular payload allocation.

Bus architectures may be regulated or unregulated and may provide secondary rails. Airbus Crisa lists solar-array regulators, battery charge and discharge regulation, battery management, secondary conversion, protected distribution, heater control and deployment chains across 28–120 V buses.[^9] That is European supplier capability based in Spain, rather than evidence of Airbus UK manufacture.

At smaller scale, Glasgow-founded AAC Clyde Space markets its STARBUCK-NANO family with MPPT or DET, 3.3, 5 and 12 V regulated buses, configurable current limiters, telemetry and autonomous protection for LEO CubeSats.[^5] Its associated OPTIMUS batteries are offered in 30, 40 and 80 Wh variants with heaters and under-voltage, over-voltage and string over-current protection.[^6] These are supplier specifications. Their stated qualification and heritage do not replace the configuration records and acceptance evidence for a particular spacecraft.

## Storage, protection and fault response

Rechargeable batteries carry the spacecraft while an array is stowed, shadowed or unable to meet a transient load. Usable capacity falls with repeated charge and discharge, temperature, charge rate, depth of discharge and storage history.[^2] Capacity in Wh does not state maximum current, minimum bus voltage or life after thousands of cycles. Battery sizing therefore follows the mission load profile and eclipse pattern, with ageing and thermal limits applied through end of life (EOL).

Power distribution has to prevent one failing unit from disabling the source or main bus. ESA identifies short circuits as a particular threat to this shared spacecraft resource.[^3] Protection can include blocking diodes, current limiters, fuses, redundant isolation, over-voltage control and staged disconnection of non-essential loads. ECSS also requires measures against a solar-array-section short propagating to the power subsystem or battery.[^1]

A radar-spacecraft PCDU illustrates how the functions interact. Airbus's 2018 product sheet describes MPPT array regulation, Li-ion battery control, regulated and unregulated buses, latching current limiters and autonomous undervoltage load shedding. Its radar peak is drawn from the battery so that the array and conditioning electronics need not be sized for that brief maximum.[^11] The document describes a named equipment family and is explicitly non-contractual; it is an example of a design trade rather than a current universal specification.

## Life-cycle performance

A BOL balance is insufficient for a mission expected to operate for years. Array output changes with radiation, contamination, temperature, pointing and electrical or mechanical faults. Battery energy and internal resistance change with cycling and storage. Converter efficiency, line loss, heater demand and credible failed-string or failed-load cases also affect the bus. EOL analysis applies these losses and margins to the mission's least favourable operational conditions.[^1][^2]

Electrical and thermal models are coupled because cell and battery temperature affect performance while conversion and loads create heat. Airbus's Systema tool, for example, models arrays, batteries and regulators together with radiation, seasonal geometry, trajectory and thermal behaviour.[^10] Such a model depends on its input data and degradation assumptions. It does not establish qualification or flight performance by itself.

## Verification and operational evidence

Verification proceeds through component characterisation, qualification of a controlled design, acceptance of delivered hardware, integrated spacecraft tests and finally flight evidence. NASA Johnson describes integrated tests using representative loads and running conditions, including envelope limits, predicted failure modes and fault injection.[^4] A supplier's TRL, product-family heritage or compliance statement belongs to a different evidence level from the test report for the installed unit.

Flight operations expose interactions that a product rating cannot show. RAL Space managed science operations for ESA's four Cluster spacecraft for more than 24 years, including periods complicated by Earth eclipses of the arrays and battery failures.[^8] This is strong evidence that energy scheduling and fault management persist throughout a mission, but it does not make RAL Space the manufacturer of Cluster's power hardware. Status and organisational role should travel with every heritage claim.

## References

[^1]: European Cooperation for Space Standardization, [ECSS-E-ST-20C Rev.2: Electrical and electronic](https://ecss.nl/wp-content/uploads/2022/04/ECSS-E-ST-20C-Rev.2(8April2022).pdf), 8 April 2022.
[^2]: NASA Small Spacecraft Systems Virtual Institute, [State of the Art of Small Spacecraft Technology: Power Systems](https://www.nasa.gov/wp-content/uploads/2026/05/3-soa-power-2026-final.pdf), May 2026.
[^3]: European Space Agency, [Power Systems, EMC and Space Environment Division](https://technology.esa.int/division/power-systems-emc-and-space-environment-division).
[^4]: NASA Johnson Space Center, [Power Subsystems](https://www.nasa.gov/reference/jsc-power-subsystems/).
[^5]: AAC Clyde Space, [STARBUCK-NANO CubeSat electrical power system](https://www.aac-clyde.space/what-we-do/space-products-components/%20pcdu/cubesat-eps-starbuck-nano).
[^6]: AAC Clyde Space, [OPTIMUS CubeSat batteries](https://www.aac-clyde.space/what-we-do/space-products-components/cubesat-batteries).
[^7]: Surrey Satellite Technology Ltd, [SSTL-MICRO platform datasheet](https://www.sstl.co.uk/getmedia/78c3ae88-0f17-40a1-9448-8c3c7e9f6944/SSTL-MICRO.pdf).
[^8]: RAL Space, [Cluster II operations](https://www.ralspace.stfc.ac.uk/case-studies/cluster-ii-operations).
[^9]: Airbus Crisa, [Power electronics](https://www.crisa.airbus.com/en/airbus-crisas-solutions/power-electronics).
[^10]: Airbus, [Systema Power](https://www.airbus.com/en/products-services/space/space-customer-support/systema/power).
[^11]: Airbus Defence and Space, [High Power PCDU](https://mediaassets.airbus.com/pm_38_551_551599-pg6kvfe3la.pdf), 2018.

