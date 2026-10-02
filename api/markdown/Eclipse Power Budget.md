A spacecraft eclipse power budget demonstrates that stored energy can support required loads throughout darkness and that the following sunlit interval can restore the battery. It is an energy balance in watt-hours (Wh), coupled to instantaneous power limits in watts (W). Ampere-hours (Ah) measure charge; converting Ah to Wh requires the battery voltage over the discharge, rather than an arbitrary nominal voltage.

## Closing the eclipse cycle

Budgeting begins by integrating every active load over the eclipse. A 100 W load sustained for one hour requires 100 Wh at the load interface. The battery must supply more because wiring, protection and power conversion dissipate energy. Heater cycling, bus voltage limits, cell imbalance and reserve further reduce the usable fraction of nameplate capacity. ECSS requires power-demand and energy-demand analyses across all mission phases, including eclipse, peak and inrush loads, solar aspect and depointing.[^1]

Leaving shadow does not close the budget. During sunlight, the array must run the current loads and recharge the energy removed from the battery before the next eclipse. Charge-current and battery-temperature limits can restrict how quickly that energy returns. Array output also changes with Sun distance, incidence angle, temperature, contamination, radiation damage and failed strings. A credible repeated-orbit case therefore couples the maximum relevant dark interval to the available recharge interval and end-of-life (EOL) array and battery performance.[^2]

## Cases and assumptions

Mission modes and timelines organise the analysis. Each load records its electrical boundary, power, duty cycle and duration, with known losses kept separate from uncertainty margin. At minimum, candidate cases include:

- the longest nominal or seasonal eclipse;
- contingency or safe-mode darkness, including recovery and equipment restart;
- minimum credible solar input and an unfavourable but permitted attitude;
- peak thermal-control demand during a cold eclipse;
- EOL battery capacity, internal resistance and discharge-current limits;
- EOL array output and the minimum usable sunlit recharge period.

These conditions should be combined only where they can occur together. Stacking unrelated extremes can add needless mass, while overlooking correlated events can leave the spacecraft unable to recover. NASA's small-spacecraft reliability guidance calls for energy-balance margin under adverse attitudes and beta angles, but it does not prescribe a universal percentage.[^7]

Depth of discharge (DoD) is the fraction of available capacity removed, not a fixed property of the battery. The admissible DoD depends on chemistry, cell design, temperature, ageing, cycle count and reliability objective. An ESA space-weather concept, for example, assumed a 170 W average load for 2.2 hours, added margin and used a conservative 40% DoD.[^5] An asteroid sample-return study instead sized for a 4.5-hour contingency eclipse that its nominal geometry sought to avoid.[^6] These are traceable design-study assumptions, rather than flight-proven sizing rules.

## Operational evidence

Mars Express shows why darkness and recharge must be assessed together. In its difficult 2006 eclipse season, shadow periods reached 75 minutes near aphelion, when available solar power was about 20% lower. Operators reduced spacecraft loads and communications to preserve battery recharge and survival margin.[^3] That response also reflected a known spacecraft anomaly, so its numbers should not be transferred to another Mars mission.

Ageing can change the operating rule after launch. Before long eclipses, Cluster operators had to trade battery pre-heating against the energy needed to recharge. They reduced an expected eclipse load of roughly 92 W towards 45 W as the silver-cadmium batteries aged.[^4] The case supports conservative prediction, telemetry review and load shedding. Its numerical thresholds do not describe modern lithium-ion batteries or a typical low-Earth orbit.

## Verification and reporting

Source values, uncertainty, losses and reserve should remain visible instead of being buried in one margin. Reports should state whether array ratings are beginning-of-life or EOL, whether loads are measured or estimated, and whether a quoted peak is array output, bus input or payload power. Each battery result should include chemistry, temperature, capacity basis, voltage limits, current limit, DoD and ageing state.

Verification compares the analysis with cell and battery characterisation, measured converter efficiency, equipment load tests, integrated mode tests and flight telemetry. Tests need representative sequences: eclipse entry, undervoltage load shedding, restart, safe-mode recovery and recharge. A supplier capacity or qualification claim does not establish the usable energy of the installed battery in those conditions. The budget remains a controlled operational model and should be updated when telemetry reveals different loads, temperatures, degradation or recharge efficiency.

## References

[^1]: European Cooperation for Space Standardization, [ECSS-E-ST-20C Rev.2: Electrical and electronic](https://ecss.nl/wp-content/uploads/2022/04/ECSS-E-ST-20C-Rev.2(8April2022).pdf), 8 April 2022.
[^2]: NASA Small Spacecraft Systems Virtual Institute, [State of the Art of Small Spacecraft Technology: Power Systems](https://www.nasa.gov/wp-content/uploads/2026/05/3-soa-power-2026-final.pdf), May 2026.
[^3]: European Space Agency, [Mars Express successfully powers through eclipse season](https://www.esa.int/Science_Exploration/Space_Science/Mars_Express/Mars_Express_successfully_powers_through_eclipse_season), 26 September 2006.
[^4]: European Space Agency, [Cluster survives the eclipses](https://www.esa.int/esapub/bulletin/bulletin129/bul129c_volpp.pdf), ESA Bulletin 129, February 2007.
[^5]: European Space Agency Concurrent Design Facility, [Space Weather report](https://swe.ssa.esa.int/TECEES/spweather/esa_initiatives/spweatherstudies/CDF_study/SpaceWeatherReport.pdf).
[^6]: European Space Agency Concurrent Design Facility, [Near-Earth Asteroid sample-return overview](https://sci.esa.int/documents/34923/36148/1567256261418-NEA_SR_TRS_Overview.pdf), 31 May 2007.
[^7]: NASA Small Spacecraft Reliability Initiative, [Electrical Power](https://s3vi.ndc.nasa.gov/ssri-kb/topics/30/), updated June 2024.

