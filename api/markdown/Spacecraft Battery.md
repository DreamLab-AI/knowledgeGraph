A spacecraft battery stores electrical energy for launch, eclipse, contingencies and demands above the generating source's instantaneous capability. Its nameplate capacity is only one design input. Voltage, permissible current, temperature, usable depth of discharge (DoD), ageing, protection and the required cycle life determine what the spacecraft can use.[^1]

## Capacity, power and charge

Watts (W) measure the rate of energy transfer and size cells, switches, conductors and converters for an instantaneous load. Watt-hours (Wh) measure energy over time and support an eclipse or duty cycle. Ampere-hours (Ah) measure charge. Converting Ah to Wh requires integration over the battery's voltage profile; multiplying by a nominal voltage can misstate usable energy near cutoff or under a high-current load.

Nameplate Wh is not EOL usable Wh. The battery must remain above its minimum bus voltage and below current, temperature and DoD limits after calendar ageing and cycling. Internal resistance causes voltage sag and heat, especially at high current or low temperature. A pack can therefore contain enough nominal energy yet fail to support a transmitter peak, or meet the peak but run out of energy before eclipse ends.

## Chemistry, ageing and thermal control

Lithium-ion families offer high specific energy but contain energetic materials and flammable electrolyte. NASA guidance treats cell selection, mechanical and electrical design, handling, hazard controls and verification as one safety problem.[^2] Charge control, cell monitoring, balancing, over-current and over-voltage protection, venting or containment and fault tolerance depend on the mission and safety context.

DoD is the fraction of available capacity removed during discharge. Lower DoD often extends cycle life, but requires a larger battery for the same eclipse energy. No universal safe percentage applies: chemistry, cell construction, temperature, charge rate, cycle count, calendar time and reliability target all matter. ESA reliability work identifies capacity loss and increasing internal resistance as related but distinct ageing effects, driven by temperature, state of charge, DoD and rate history.[^7]

Temperature changes charge acceptance, resistance, available capacity, degradation and safety. Heaters may improve discharge performance before eclipse but consume stored energy and can restrict recharge time. Qualification and mission tests must cover expected storage, ground handling, launch and flight profiles. The numerical limits in a launch-range manual or supplier sheet apply to the system and context stated in that document; they are not generic limits for all lithium-ion cells.[^4]

## Protection and monitoring

Battery management measures pack and, where required, cell voltage, current and temperature. It controls charge and discharge and can isolate a fault or shed loads before destructive over-discharge. Telemetry can support estimates of state of charge and health, particularly when interpreted with a known current, temperature and model. Terminal voltage alone cannot reveal every internal fault, and a capacity estimate at one operating point does not validate the full envelope.

Safety assurance depends on applicability. NASA's JSC-20793_D addresses crewed-vehicle battery safety and verification, but NASA marks the record non-mandatory and not endorsed.[^3] The Wallops range manual contains local, tailorable range-safety requirements, including charging safeguards and monitoring.[^4] These sources demonstrate hazard-control and verification methods; their numerical provisions should not be copied into an unrelated uncrewed mission without an applicability decision. ECSS-E-HB-20-02A supplies Li-ion characterisation and testing guidance rather than a mission qualification certificate.[^5]

## Flight and UK-linked evidence

Flight history must name the chemistry. ERS-1 operated nickel-cadmium batteries cold and reported a mean DoD of about 20%, with end-of-discharge voltage used in performance assessment over four years.[^8] It provides useful evidence about telemetry and life management, but its voltage, degradation and cycling results are not transferable to a modern lithium-ion pack.

AAC Clyde Space offers OPTIMUS lithium-polymer batteries in 30, 40 and 80 Wh variants, with heaters and voltage and current protection for low-Earth-orbit applications up to the stated 850 km limit.[^6] This is a current UK-linked supplier example. Capacity, temperature range, qualification and mission-count statements remain manufacturer claims until tied to the ordered configuration and its acceptance records; the supplier also identifies additional testing for some crewed-flight integrations.

UK Space Agency and National Nuclear Laboratory work on americium-241 is sometimes described publicly as an atomic space battery.[^9] It is a radioisotope power system: decay heat is used directly or converted to electricity over a long mission. It is not a rechargeable electrochemical battery and has no eclipse recharge, charge rate or DoD. Keeping that boundary explicit prevents a generation technology being mistaken for stored energy.

## Sizing and verification

Sizing begins with mode-specific eclipse energy and peak current, then accounts for conversion loss, temperature, allowable DoD, capacity fade, resistance growth, cell imbalance and contingency reserve. The sunlit case must also show that the array can power loads and recharge the battery within charge-current and thermal limits. Worst cases should use credible concurrent conditions and EOL performance.

Verification progresses from cell characterisation through pack-level environmental, electrical and abuse testing, qualification of a controlled design, acceptance of the delivered unit, spacecraft integration and flight telemetry. Supplier heritage does not substitute for configuration control or acceptance. Operational limits and health models should be updated when measured capacity, resistance, temperature or load behaviour differs from the design assumptions.

## References

[^1]: NASA Small Spacecraft Systems Virtual Institute, [State of the Art of Small Spacecraft Technology: Power Systems](https://www.nasa.gov/wp-content/uploads/2026/05/3-soa-power-2026-final.pdf), May 2026.
[^2]: NASA, [Guidelines on Lithium-ion Battery Use in Space Applications](https://ntrs.nasa.gov/citations/20090023862), NASA/TM-2009-215751, May 2009.
[^3]: NASA, [JSC-20793_D: Crewed Space Vehicle Battery Safety Requirements](https://standards.nasa.gov/standard/JSC/JSC-20793_D), 2017.
[^4]: NASA Goddard Space Flight Center, [GSFC-STD-8009: Range Safety Manual](https://www.nasa.gov/wp-content/uploads/2023/09/gsfc-std-8009-range-safety-manual.pdf).
[^5]: European Cooperation for Space Standardization, [ECSS-E-HB-20-02A: Li-ion battery testing handbook](https://ecss.nl/hbstms/ecss-e-hb-20-02a-li-ion-battery-testing-handbook-1-october-2015/), 1 October 2015.
[^6]: AAC Clyde Space, [OPTIMUS CubeSat batteries](https://www.aac-clyde.space/what-we-do/space-products-components/cubesat-batteries).
[^7]: European Space Agency, [Validated reliability-based models for satellite life extension](https://nebula.esa.int/sites/default/files/neb_tec_studies/3105/public/109665.pdf).
[^8]: European Space Agency, [ERS-1: four years of operational experience](https://www.esa.int/esapub/bulletin/bullet83/mckay83.htm), ESA Bulletin 83.
[^9]: UK Space Agency and National Nuclear Laboratory, [UK Space Agency and NNL work on world's first space battery](https://www.gov.uk/government/news/uk-space-agency-and-nnl-work-on-worlds-first-space-battery), 9 December 2022.

