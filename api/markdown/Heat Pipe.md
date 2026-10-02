A heat pipe moves thermal energy through evaporation and condensation inside a sealed enclosure. A conventional spacecraft design has an evaporator at the heat source, a vapour passage, a condenser coupled to a cooler sink and a porous or grooved wick. Heat vaporises the working fluid; the vapour flows down its pressure gradient and condenses; capillary pressure in the wick returns liquid to the evaporator.[^1][^2]

## Design boundary

A viable design treats pipe, working fluid and wick as one thermodynamic system. Fluid saturation pressure and latent heat set the useful temperature range. The envelope and wick must remain compatible with that fluid through manufacture, storage and life, without corrosion, decomposition or enough non-condensable gas to obstruct the condenser. Geometry then sets vapour and liquid pressure losses, while the wick's pore size and permeability trade capillary head against flow resistance.[^2]

Constant-conductance heat pipes have a fixed working geometry. A variable-conductance heat pipe commonly adds a non-condensable gas reservoir so that changing gas occupation varies the active condenser length. It can regulate temperature over changing load or sink conditions, but its reservoir, gas inventory and control behaviour add design variables absent from a simple fixed pipe.[^4]

“Passive” describes circulation without a continuously driven mechanical pump. The wider assembly may still contain survival heaters, thermostats or valves. A heat pipe transports heat to a sink; it cannot compensate for a radiator that lacks area, emissivity or a suitable view to space.[^1][^4]

## Sizing and performance limits

Sizing begins with the operating and survival temperature ranges, heat load, heat flux, evaporator and condenser lengths, transport distance, orientation or acceleration, allowed temperature drop and required life. Fluid, envelope and wick follow from those conditions. Pipe diameter and number are then checked against several distinct limits rather than one catalogue conductance.[^2]

- **Capillary limit:** liquid and vapour pressure losses, plus adverse acceleration head, exceed the wick's capillary pressure. Liquid return fails and the evaporator can dry out.
- **Boiling limit:** excessive radial heat flux forms vapour within the wick and interrupts liquid supply.
- **Entrainment limit:** fast vapour strips returning liquid from the wick or liquid-vapour interface.
- **Sonic limit:** vapour reaches a choked-flow condition, usually most relevant at low vapour density during start-up or low-temperature operation.
- **Viscous limit:** vapour pressure is too low to overcome viscous losses, again principally at low temperature.[^2][^3]

Freezing needs separate treatment. A frozen charge may block liquid return, expand locally or produce difficult thaw transients. Survival at a quoted temperature therefore does not establish restart performance after freeze/thaw. Local heat input, sink condition and fluid distribution determine whether dry-out recovers when load is reduced.[^2]

## Integration, qualification and failure

Thermal interfaces at the evaporator and condenser can dominate the measured temperature drop. Contact pressure, bondline, flatness, fasteners and any spreader plate need representation in the model and test article. Bends, flattening and embedded configurations alter mechanical stress and internal geometry. Leakage, wick damage, trapped gas, fluid loss, corrosion and an inadequate condenser path are credible faults even though there are no rotating parts.[^1][^2]

Gravity complicates ground verification. An evaporator below its condenser receives gravity-assisted liquid return, whereas an adverse tilt can oppose the wick. Testing should state attitude, load, boundary temperatures and instrumentation, then correlate the ground result to the flight acceleration environment. ECSS-E-ST-31-02C Rev.1 sets qualification and acceptance requirements for new two-phase heat-transport equipment and explicitly excludes mechanically pump-driven loops from its scope.[^4][^5]

## UK evidence and maturity

The UK Space Agency documented University of Brighton pulsating-heat-pipe experiments during parabolic flights, where each reduced-gravity interval lasted about 22 seconds.[^6] UKRI records a £722,093 EPSRC award for hybrid heat-pipe research running from March 2017 to March 2020.[^7] These records establish funded research and short-duration reduced-gravity tests. A pulsating heat pipe is a wickless oscillating device, so this work is neither qualification evidence for a conventional wicked pipe nor proof of sustained orbital performance.

## References

[^1]: NASA Small Spacecraft Systems Virtual Institute, [Thermal Control](https://www.nasa.gov/smallsat-institute/sst-soa/thermal-control/).
[^2]: Jentung Ku, NASA Thermal and Fluids Analysis Workshop, [Introduction to Heat Pipes](https://ntrs.nasa.gov/api/citations/20150018080/downloads/20150018080.pdf?attachment=true).
[^3]: NASA, [Heat Pipe Heat Exchanger for Nuclear Electric Propulsion Power Conversion System](https://ntrs.nasa.gov/api/citations/20220013111/downloads/Heat%20Pipe%20Heat%20Exchanger%20for%20Nuclear%20Electric%20Propulsion%20Power%20Conversion%20System.pdf). The numerical case is sodium hardware for nuclear electric propulsion; the cited limit mechanisms are general.
[^4]: ESA Bulletin 87, [Current and Future Techniques for Spacecraft Thermal Control](https://www.esa.int/esapub/bulletin/bullet87/paroli87.htm).
[^5]: European Cooperation for Space Standardization, [ECSS-E-ST-31-02C Rev.1: Two-phase heat transport equipment](https://ecss.nl/standard/18891/).
[^6]: UK Space Agency, [Microgravity Science in the Sky](https://space.blog.gov.uk/2018/01/19/microgravity-science-in-the-sky/).
[^7]: UK Research and Innovation Gateway to Research, [Novel Hybrid Heat Pipe for space and ground applications](https://gtr.ukri.org/organisation/0A75AC03-48A0-46DD-BAD3-AA9731002B84?fetchSize=25&fields=&page=1&selectedFacets=&selectedSortOrder=ASC&selectedSortableField=pro.sd&term=&type=).

