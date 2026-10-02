A spacecraft solar array is the complete assembly that converts sunlight into electrical power: photovoltaic cells and their interconnects are arranged into strings on one or more panels, with cabling, mounting hardware and any hinges, hold-down devices, release mechanisms or pointing drives. The array feeds a [[Spacecraft Electrical Power System]], which controls its operating point, stores energy and distributes power. Cell efficiency, panel power density and power delivered to a spacecraft bus describe different boundaries and should not be quoted as though they were the same.[^1][^2]

## Cells, strings, panels and arrays

A photovoltaic cell produces current when illuminated. Multi-junction space cells stack semiconductor junctions tuned to different parts of the solar spectrum. A solar-cell assembly can add an interconnector, coverglass and bypass diode. Cells connected in series form a string: their voltages add, but a weak, shaded or open cell can constrain that current path. Parallel strings increase current and allow some fault tolerance.

A panel mounts interconnected assemblies on a substrate. The complete array adds supporting structure and associated hardware. ECSS-E-ST-20-08C Rev.2 governs qualification and procurement of photovoltaic assemblies, cells, coverglass and protection diodes, but explicitly excludes qualification of the complete panel, structure and array mechanism.[^2] Passing a cell-level test therefore does not qualify the deployed wing.

Coverglass reduces radiation damage and optical loss, while bypass diodes give current a path around cells driven into reverse bias by partial shadow. ESA describes reverse bias as a damage mechanism for series-connected multi-junction cells during manoeuvres or seasonal shadowing.[^14] A peer-reviewed accelerated test of commercial triple-junction cells found that reverse bias produced the tested high-temperature degradation mode faster than forward bias. The authors' reported life estimate covered high-temperature stress only and explicitly excluded radiation, so it is not an array lifetime prediction.[^15]

## From BOL rating to EOL output

Beginning-of-life (BOL) power commonly means peak output under stated illumination and temperature conditions before mission ageing. It is useful for comparison only when the electrical boundary and test conditions match. NASA notes that commercial figures may instead describe payload allocation, orbit-average output or a peak supported by the battery.[^3]

End-of-life (EOL) capability is the design quantity needed to close the mission energy balance. The calculation applies the expected operating temperature and incidence angle, radiation fluence, coverglass and adhesive darkening, surface contamination, wiring and diode loss, conversion loss, credible string failures and other mission-specific degradation. ECSS requires the array to meet requested power and energy balance throughout operational life under worst-case conditions, including the customer's string-loss tolerance.[^1]

Temperature alters cell voltage and maximum power. Repeated sunlight-to-eclipse transitions also cycle cells, interconnects, adhesive and panel structure. NASA identifies radiation, optical darkening, contamination and mechanical or electrical faults as contributors to array degradation, and calls EOL performance at operating temperature a critical metric.[^3] A generic annual degradation percentage cannot replace an orbit-, shielding-, cell- and temperature-specific model.

## Geometry, shadow and pointing

Output depends on projected area towards the Sun rather than physical area alone. Body-mounted panels avoid a one-shot deployment but their illumination changes with spacecraft attitude. Deployable wings provide more collecting area for a given launch envelope, at the cost of hinges, release devices, moving cables and possible pointing mechanisms. A drive can track the Sun, but it consumes mass and power, affects attitude dynamics and may introduce a single-point failure.

Shadow has two effects. A planetary eclipse removes generation from the whole array and transfers the load to stored energy. Local shadow from the spacecraft, another panel or an unfavourable orientation can mismatch cells within a string and cause reverse bias. Energy and thermal analysis must represent both. The safe pointing direction may also differ from maximum illumination when heat limits, payload viewing or communications constrain attitude.

BepiColombo provides an extreme example. Airbus states that the Mercury Planetary Orbiter's 2 kW array uses optical reflectors over part of the panel, rotates continuously and changes tilt to remain within its temperature range. The transfer module's wings are tilted once the array reaches about 190 °C near 0.5 AU, reducing projected area and limiting output.[^8] The arrays were supplied from Ottobrunn and Leiden. Airbus Stevenage contributed spacecraft structure, propulsion and transfer-module thermal design, so the photovoltaic wings should not be described as UK-built.

## Deployment and qualification

A deployable array must survive launch while restrained, release on command, reach a usable geometry and carry current through every moving interface. NASA advises testing mechanisms at subsystem and integrated-system level, including their power demand, dependencies, environment and required life.[^4] Qualification demonstrates that a controlled design can withstand specified margins. Acceptance checks the delivered flight item for workmanship. Neither is the same as flight success.

NASA's Lucy mission shows the distinction. Before launch, its two 7.3 m arrays completed thermal-vacuum deployment testing with a gravity-offload fixture.[^11] In flight, one wing did not fully unfold and latch. Engineers combined spacecraft current data, mechanical models, ground tests and risk analysis because there was no sensor that directly reported its deployed state. Eight recovery attempts left the wing about 99% deployed, producing the expected power at the then-current solar distance with enough analysed margin for the nominal mission.[^12][^13] The case supports continued testing and telemetry; it does not imply the same failure mode for another mechanism.

## UK capability and status

AAC Clyde Space markets its PHOTON family for 3U–12U CubeSats, with body-mounted, single-, double- and triple-deployable configurations. Its page specifies triple-junction cells, temperature and coarse Sun sensors, up to 9 W per populated 3U face, and illumination, thermal-cycle, deployment and sensor acceptance tests.[^5] These figures and TRL/heritage statements are supplier claims. The family-level size range should also be kept separate from its table of variant-specific dimensions and ratings.

SSTL reported that exactView-1's power system functioned and its solar panel deployed during initial commissioning in July 2012.[^9] This is dated flight evidence for that spacecraft, rather than a statement of current mission status. SSTL's 2019 Orbital Test Bed carried a solar-array payload, but its own record identifies the payload suite as technology demonstrations.[^10] A demonstration launch does not by itself establish a routinely available qualified product.

Airbus markets Sparkwing at up to 200 W/m² and a separate LEO constellation-array family at up to 7 kW.[^6] Those are manufacturer figures for different products manufactured outside the UK. A verified UK industrial contribution is more specific: Huddersfield-based Reliance Precision developed the NeoSMG gearbox for Airbus Stevenage solar-array drive mechanisms. Airbus records the first launch on Eutelsat HOTBIRD 13F in October 2022 and a follow-on contract for 26 units.[^7] This supports a UK gearbox and pointing-drive role, rather than UK manufacture of the cells or complete wings.

## References

[^1]: European Cooperation for Space Standardization, [ECSS-E-ST-20C Rev.2: Electrical and electronic](https://ecss.nl/wp-content/uploads/2022/04/ECSS-E-ST-20C-Rev.2(8April2022).pdf), 8 April 2022.
[^2]: European Cooperation for Space Standardization, [ECSS-E-ST-20-08C Rev.2: Photovoltaic assemblies and components](https://ecss.nl/standard/ecss-e-st-20-08c-rev-2-photovoltaic-assemblies-and-components-20-april-2023/), 20 April 2023.
[^3]: NASA Small Spacecraft Systems Virtual Institute, [State of the Art of Small Spacecraft Technology: Power Systems](https://www.nasa.gov/wp-content/uploads/2026/05/3-soa-power-2026-final.pdf), May 2026.
[^4]: NASA Small Spacecraft Systems Virtual Institute, [Structures, Materials and Mechanisms](https://www.nasa.gov/smallsat-institute/sst-soa/structures-materials-and-mechanisms/).
[^5]: AAC Clyde Space, [PHOTON CubeSat solar arrays](https://www.aac-clyde.space/what-we-do/space-products-components/photon-solar-arrays).
[^6]: Airbus, [Solar array products](https://www.airbus.com/en/products-services/space/equipment/power/solar-array-products).
[^7]: Airbus, [How Airbus partners to grow the UK space sector](https://www.airbus.com/en/newsroom/stories/2023-11-collaborating-for-success-how-airbus-partners-to-grow-the-uk-space-sector), November 2023.
[^8]: Airbus, [BepiColombo spacecraft and high-temperature arrays](https://www.airbus.com/sites/g/files/jlcbta136/files/7d81b8dd020c8d5b9ea060975efe467f_Press-Release-SPACE-SYSTEMS-02102018-EN.pdf), 2 October 2018.
[^9]: Surrey Satellite Technology Ltd, [exactView-1 operational in orbit](https://www.sstl.co.uk/media-hub/latest-news/2012/exactview-1-satellite-operational-in-orbit), 26 July 2012.
[^10]: Surrey Satellite Technology Ltd, [Orbital Test Bed mission](https://www.sstl.co.uk/space-portfolio/launched-missions/2010-2019/orbital-test-bed-(otb)-launched-2019).
[^11]: NASA, [Lucy stretches its wings in successful solar-panel deployment test](https://www.nasa.gov/solar-system/nasas-lucy-stretches-its-wings-in-successful-solar-panel-deployment-test/), 6 April 2021.
[^12]: NASA, [Lucy mission suspends further solar-array deployment activities](https://science.nasa.gov/blogs/lucy/2023/01/19/nasas-lucy-mission-suspending-further-solar-array-deployment-activities/), 19 January 2023.
[^13]: NASA Technical Reports Server, [Post-Launch Verification of Lucy Solar Array Deployment](https://ntrs.nasa.gov/citations/20250002257), 2025.
[^14]: European Space Agency, [Drinking in the Sun in space](https://www.esa.int/Enabling_Support/Preparing_for_the_Future/Space_for_Earth/Energy/Drinking_in_the_Sun_in_space).
[^15]: N. Núñez Mendoza et al., [Estimation of the reliability figures of space triple-junction solar cells from very-high-temperature accelerated life tests](https://oa.upm.es/81532/), *Solar Energy Materials and Solar Cells* 259 (2023), 112454.

