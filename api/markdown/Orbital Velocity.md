Orbital velocity is the velocity vector of an orbiting object at a stated epoch, relative to a specified origin and reference frame.

Velocity has magnitude and direction. A quoted “orbital velocity” may instead give speed, the scalar magnitude, so a usable state description identifies which quantity is meant. It should also give the coordinate origin, axes, epoch and time scale, units, and whether the state is geometric or apparent. A spacecraft can have different velocity vectors in a planet-centred, Sun-centred, barycentric or rotating frame at the same instant.[^1234][^1241][^1245]

In the ideal two-body model, vis-viva gives speed from the gravitational parameter μ, distance r from the central mass and semimajor axis a: v² = μ(2/r − 1/a). For a circular orbit, r = a and v = √(μ/r). These equations need centre-to-centre distance and a declared body and μ; altitude above a chosen surface is not the radius. Vis-viva determines magnitude, while the state geometry determines direction.[^1235][^1240][^1242][^1243]

On an elliptic orbit, speed is greatest at periapsis and least at apoapsis. This follows from the exchange between kinetic and gravitational potential energy as the object moves around the conic. An impulse in the direction of travel at periapsis raises orbital energy and apoapsis, and immediately increases speed. After coast to the higher apoapsis, the spacecraft is slower; once circularised, that higher orbit has a lower circular speed than the original lower orbit. These statements compare different points and orbital states.[^1236][^1252]

Surface-relative and inertial velocities also differ. A vehicle resting on a rotating Earth has zero velocity relative to the ground but moves in an inertial frame; latitude and launch azimuth determine how Earth’s rotation contributes to its departure state. Atmospheric drag depends on motion relative to the atmosphere, which may co-rotate with the planet. A quoted speed without its frame can therefore misstate both launch conditions and orbital dynamics.[^1241][^1250]

Operational trajectories include forces omitted from the point-mass model. Oblateness, third-body gravity, atmospheric drag and radiation pressure can change the velocity and orbit over time. Numerical predictions depend on the initial-state estimate, force model, parameters and propagation interval. The two-body equations remain useful as a scale check; they do not provide an operational ephemeris by themselves. Uncertainty belongs to the frame and epoch of the state, so additional displayed digits do not establish equivalent accuracy. University of Surrey work on SGP4 supports a bounded UK point: fast, widely used orbit propagation can have a precision gap relative to higher-fidelity methods.[^1234][^1241][^1251][^1249]

[^1234]: [CCSDS, Orbit Data Messages, 502.0-B-3 Corrigendum 1](https://ccsds.org/Pubs/502x0b3e1.pdf).
[^1235]: [JPL Technical Memorandum 33-451, orbital mechanics appendix](https://ntrs.nasa.gov/api/citations/19710015676/downloads/19710015676.pdf).
[^1236]: [NASA Science, Orbits and Kepler’s Laws](https://science.nasa.gov/solar-system/orbits-and-keplers-laws/).
[^1240]: [NASA GSFC, Kepler’s Third Law for Earth satellites](https://pwg.gsfc.nasa.gov/stargaze/Skepl3rd.htm).
[^1241]: [JPL, Horizons System manual](https://ssd.jpl.nasa.gov/horizons/manual.html).
[^1242]: [JPL NAIF SPICE, CONICS](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/FORTRAN/spicelib/conics.html).
[^1243]: [ESA pykep, Orbital Elements](https://esa.github.io/kep3/elements.html).
[^1245]: [NASA, GMAT Mathematical Specifications](https://ntrs.nasa.gov/citations/20080031744).
[^1249]: [University of Surrey, Differentiable SGP4](https://openresearch.surrey.ac.uk/esploro/outputs/journalArticle/Closing-the-gap-between-SGP4-and/99940266502346).
[^1250]: [ESA, Types of Orbits](https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits).
[^1251]: [ESA ACT, Hybrid Propagation](https://www.esa.int/gsp/ACT/projects/HybridPropagation/).
[^1252]: [NASA, Catalog of Earth Satellite Orbits](https://science.nasa.gov/earth/earth-observatory/catalog-of-earth-satellite-orbits/).

