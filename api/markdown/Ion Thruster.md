An ion thruster, in the narrow engineering sense used here, is a gridded electrostatic thruster. It creates a plasma inside a discharge chamber, extracts positive ions through closely spaced grids and accelerates them with a high electric potential. A neutraliser injects electrons into the exhaust so that the outgoing beam and spacecraft remain close to charge balance.[^1][^2]

Public mission material often uses “ion engine” for any system that ejects ions. SMART-1, for example, used a Hall-effect thruster, while GOCE's T5 and BepiColombo's T6 are gridded ion thrusters. Hall devices use a magnetic field and Hall current to establish the accelerating field without ion grids. Preserving that physical distinction prevents flight heritage and wear mechanisms being assigned to the wrong technology.

## Discharge, ion optics and subsystem

Electron-bombardment and radio-frequency thrusters form the discharge differently, but both present ions to the ion optics. A positive screen grid extracts ions and a negative accelerator grid suppresses electron backstreaming while accelerating the beam. The sub-millimetre-scale grid gap and aperture alignment set current density, beam divergence and impingement.

A flight system adds xenon storage, pressure regulation, precision flow control, one or more cathodes, a power-processing unit (PPU), control electronics, wiring and possibly a gimbal. The PPU creates the discharge, grid, neutraliser and heater supplies from the spacecraft bus. It also sequences start-up, controls throttle points and responds to grid arcs. High-purity propellant, clean feed hardware and limited cathode exposure before launch matter to cathode life.[^2]

QinetiQ's T6 system on BepiColombo shows the organisational and interface boundaries. The UK company supplied the gridded ion thrusters; Airbus Crisa in Spain supplied the PPUs, Bradford Engineering in the Netherlands supplied flow-control units and an Austrian organisation supplied the gimbals. Two T6 units could operate together for up to about 250 mN, with high-voltage wiring and flexible fluid connections crossing the moving interface.[^4][^5]

## Performance and mission use

Thrust, specific impulse and efficiency belong to a stated voltage, beam current, propellant flow and power. NASA's NEXT development system operated across 0.5–6.9 kW. At its maximum-power point it demonstrated more than 236 mN, more than 4,170 s specific impulse and peak thruster efficiency above 70%.[^7] Those maxima describe the thruster at a defined point; system efficiency is lower after PPU and feed losses, and the same values cannot be assumed at minimum power.

Low thrust can be controlled finely and sustained for long periods. GOCE used two redundant QinetiQ T5 units, throttled between 1 and 20 mN, to counter changing atmospheric drag in closed loop.[^6] Deep Space 1 validated the NSTAR thruster and PPU in interplanetary flight, accumulating 16,246 operating hours.[^10] These are operational records for their flown configurations, rather than guarantees for another thruster or mission.

BepiColombo launched in October 2018 with four QinetiQ T6 units. ESA records that the solar-electric-propulsion cruise ended with its final thrust arc on 15 June 2026.[^3] Long, throttleable arcs enabled the Mercury transfer, but the propulsion module also relied on planetary flybys and was discarded before chemical-propulsion manoeuvres at arrival.

## Lifetime and integration

Charge-exchange ions formed between and downstream of the grids can strike and erode the accelerator grid. Enlarged apertures change beam properties; severe web loss can cause structural failure or electron backstreaming. Misalignment from assembly, transport, vibration or thermal expansion increases grid impingement. Conductive flakes or foreign debris can bridge the small grid gap and cause a short. Cathode orifice and keeper erosion, emitter depletion and deposits inside the discharge chamber add further life limits.[^2][^8]

NEXT's ground evidence illustrates how lifetime claims mature. An early assessment linked a 450 kg xenon qualification requirement to roughly 22,000 hours at the highest throttle point and predicted candidate failure mechanisms.[^8] A later long-duration test stopped voluntarily after 51,184 hours and 918 kg of xenon. Post-test inspection improved the service-life model, although some accelerator-grid analyses remained outstanding at publication.[^9] Duration alone is not a qualification statement; throttle history, throughput, starts and the tested configuration all matter.

Main-beam ions, un-ionised propellant, charge-exchange ions and sputtered grid material all enter the plume. Backflow can charge or erode spacecraft surfaces, deposit material, affect scientific instruments and disturb radio links. Multiple operating thrusters can have overlapping plumes. Integration therefore covers field of view, solar-array exposure, surface potential, thermal soak-back, conducted and radiated electromagnetic compatibility and the thrust vector throughout propellant depletion.

Ground chambers can distort these measurements through residual gas, limited pumping and wall interactions. Test reports should identify facility pressure, flow, probe method and correction. Qualification verifies a controlled design against environmental and life requirements; acceptance screens each flight unit; neither is operational flight evidence.

## UK evidence boundary

QinetiQ's UK lineage and role are supported by GOCE and BepiColombo mission records, not merely supplier claims. T5 delivered operational drag compensation, and T6 completed BepiColombo's cruise-propulsion phase.[^3]-[^6] This evidence applies to those gridded ion products and missions. It should not be recast as UK Hall-effect, arcjet or complete-subsystem manufacture where partner organisations supplied the other elements.

## References

[^1]: European Space Agency, [What is Electric propulsion?](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/What_is_Electric_propulsion).
[^2]: NASA Small Spacecraft Systems Virtual Institute, [State of the Art of Small Spacecraft Technology: In-Space Propulsion](https://www.nasa.gov/smallsat-institute/sst-soa/in-space_propulsion/), 2026.
[^3]: European Space Agency, [BepiColombo turns off solar electric propulsion for Mercury arrival](https://www.esa.int/Enabling_Support/Operations/End_of_the_blue_glow_BepiColombo_turns_off_solar_electric_propulsion_for_Mercury_arrival), 24 June 2026.
[^4]: European Space Agency, [Electric blue thrusters propelling BepiColombo to Mercury](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Electric_blue_thrusters_propelling_BepiColombo_to_Mercury), 2018.
[^5]: UK Space Agency, [BepiColombo case study](https://www.gov.uk/government/case-studies/bepicolombo), updated 18 October 2018.
[^6]: European Space Agency, [GOCE's electric ion propulsion engine switched on](https://www.esa.int/Applications/Observing_the_Earth/FutureEO/GOCE/GOCE_s_electric_ion_propulsion_engine_switched_on), 6 April 2009.
[^7]: NASA, [Technology Readiness of the NEXT Ion Propulsion System](https://ntrs.nasa.gov/api/citations/20080003888/downloads/20080003888.pdf), 2007.
[^8]: NASA, [Lifetime Assessment of the NEXT Ion Thruster](https://ntrs.nasa.gov/citations/20110000530), NASA/TM-2010-216915.
[^9]: NASA, [Update of the NEXT Ion Thruster Service Life Assessment](https://ntrs.nasa.gov/citations/20180001538), IEPC-2017-061.
[^10]: NASA, [Deep Space 1 validated the promise of ion thrusters](https://www.nasa.gov/history/nasa-history-deep-space-1-validated-the-promise-of-ion-thrusters/), 18 December 2019.

