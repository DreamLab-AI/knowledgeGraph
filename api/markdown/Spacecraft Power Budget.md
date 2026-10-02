A spacecraft power budget is the controlled account of electrical demand, generation, storage, conditioning and distribution across mission modes and life. It records where each value applies, when loads operate together and how measured losses, uncertainty and margin affect the balance. A single total in watts cannot show whether a spacecraft survives a peak, an eclipse or repeated charge cycles.[^1]

## Power, energy and electrical boundaries

Power in watts (W) is an instantaneous rate. It sizes array operating points, battery discharge, converters, switches, wiring and thermal dissipation. Energy in watt-hours (Wh) is power accumulated over time. It closes eclipse, safe-mode recovery and payload duty-cycle cases. Ampere-hours (Ah) express charge; conversion to Wh requires the voltage profile.

Every number needs an electrical boundary. A supplier's “power” may mean array peak output at beginning of life (BOL), conditioned bus power, orbit-average payload allocation or a battery-assisted peak.[^2] Converter and wiring losses lie between these points. A short transmitter or propulsion pulse may exceed array output while remaining supportable from the battery, but battery current, voltage sag, temperature and recharge then govern feasibility.

## Building the budget

Mission modes and timelines turn the equipment list into an operational budget. Each row records nominal, standby, peak and inrush power, duty cycle, duration, source of the value and maturity. Modes include launch, commissioning, routine payload operation, communications, manoeuvre, eclipse, safe mode and fault recovery. The analysis then determines which loads can coincide and which are switched, thermostatically controlled or sequenced.

Known conversion and distribution losses are modelled separately from uncertainty and margin. ECSS calls for power-demand versus power-available and energy-demand versus energy-available analyses through all mission phases.[^1] Its system-engineering standard treats the technical budget as a controlled engineering record subject to project tailoring and verification.[^10] Margin is explicit headroom for uncertainty and design maturity; it should not conceal an omitted load or optimistic efficiency. There is no universal percentage suitable for every project phase.

## Life state and worst cases

A useful budget states BOL and end-of-life (EOL) conditions. Array output changes with temperature, Sun distance, incidence angle, radiation, contamination and failed strings. Battery capacity falls and internal resistance rises with calendar time, temperature and cycling. Heater demand and converter efficiency couple the electrical and thermal designs.

Candidate worst cases include maximum eclipse, minimum solar flux, an unfavourable permitted attitude, cold-case heater duty, degraded EOL array and battery performance, peak operations, safe mode and recovery after a fault. Conditions should be combined when physically concurrent. Combining every independent extreme can over-size the system, while missing correlated events can prevent recovery. NASA reliability guidance recommends energy-balance margin under adverse attitude and beta-angle conditions.[^5]

Eclipse analysis covers both discharge and recharge. The battery must support required loads throughout darkness, then the array must run sunlit loads and replenish the removed energy before the next eclipse. Charge-current and thermal limits may prevent all apparent array surplus reaching the battery. ESA design studies show the value of naming assumptions: a space-weather concept used a 2.2-hour load case with added margin and a conservative DoD, while an asteroid sample-return study sized for a 4.5-hour contingency eclipse.[^3][^4] These figures are study baselines, not qualified or flown capability.

## UK evidence with bounded claims

Surrey Satellite Technology Ltd's MICRO datasheet distinguishes up to 63 W of orbit-average payload power in a specified 550 km Sun-synchronous case from a 200 W peak, and offers 12 or 28 V battery options.[^7] Those platform figures are configuration and orbit dependent. They do not state a continuous array rating or a general payload entitlement.

RAL Space managed science operations for ESA's Cluster fleet for more than 24 years, including periods affected by solar-array eclipses and battery failures.[^8] This is operational evidence that budgets and load rules continue to evolve with telemetry and ageing. It does not identify RAL Space as the manufacturer of Cluster's power hardware.

Airbus's Systema Power models electrical and thermal behaviour together, including arrays, batteries, regulators, radiation, seasonal geometry and trajectory.[^9] It is evidence of a modelling capability. The result remains dependent on input data and degradation assumptions and does not, by itself, qualify hardware or validate flight performance.

## Verification and control

Budget verification compares predicted values with equipment measurements, converter efficiency tests, battery characterisation and integrated spacecraft modes. NASA Johnson describes testing with actual or simulated hardware, representative loads, envelope limits, predicted failures and fault injection.[^6] Tests should exercise peak demand, inrush, eclipse transition, load shedding, restart, safe-mode recovery and battery recharge.

Flight telemetry then checks load, bus, array and battery behaviour across seasons and ageing. Agreement at one operating point does not validate every attitude, temperature or fault case. Discrepancies should update the analytical model, uncertainty and operating rules. The current budget should preserve traceability to the source measurement, configuration and review state so that qualification, acceptance and operational evidence are not conflated with supplier estimates.

## References

[^1]: European Cooperation for Space Standardization, [ECSS-E-ST-20C Rev.2: Electrical and electronic](https://ecss.nl/wp-content/uploads/2022/04/ECSS-E-ST-20C-Rev.2(8April2022).pdf), 8 April 2022.
[^2]: NASA Small Spacecraft Systems Virtual Institute, [State of the Art of Small Spacecraft Technology: Power Systems](https://www.nasa.gov/wp-content/uploads/2026/05/3-soa-power-2026-final.pdf), May 2026.
[^3]: European Space Agency Concurrent Design Facility, [Space Weather report](https://swe.ssa.esa.int/TECEES/spweather/esa_initiatives/spweatherstudies/CDF_study/SpaceWeatherReport.pdf).
[^4]: European Space Agency Concurrent Design Facility, [Near-Earth Asteroid sample-return overview](https://sci.esa.int/documents/34923/36148/1567256261418-NEA_SR_TRS_Overview.pdf), 31 May 2007.
[^5]: NASA Small Spacecraft Reliability Initiative, [Electrical Power](https://s3vi.ndc.nasa.gov/ssri-kb/topics/30/), updated June 2024.
[^6]: NASA Johnson Space Center, [Power Subsystems](https://www.nasa.gov/reference/jsc-power-subsystems/).
[^7]: Surrey Satellite Technology Ltd, [SSTL-MICRO platform datasheet](https://www.sstl.co.uk/getmedia/78c3ae88-0f17-40a1-9448-8c3c7e9f6944/SSTL-MICRO.pdf).
[^8]: RAL Space, [Cluster II operations](https://www.ralspace.stfc.ac.uk/case-studies/cluster-ii-operations).
[^9]: Airbus, [Systema Power](https://www.airbus.com/en/products-services/space/space-customer-support/systema/power).
[^10]: European Cooperation for Space Standardization, [ECSS-E-ST-10C Rev.1: System engineering general requirements](https://ecss.nl/standard/ecss-e-st-10c-rev-1-system-engineering-general-requirements-15-february-2017/), 15 February 2017.

