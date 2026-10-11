An ephemeris is a representation of an object's position and velocity, or quantities derived from them, as a function of time.

It may be a table of states at discrete epochs, polynomial segments, an observer product such as apparent direction, or a kernel used by flight-dynamics software. The word identifies a data product; it does not by itself specify the dynamical model, reference frame, accuracy or prediction horizon. JPL describes fitted trajectories and ephemerides whose usable interval depends on the object and its observation history.[^1404][^1385]

A usable ephemeris states the target, centre or origin, frame and realisation, epoch, time system, units, covered interval and interpolation or propagation method. These details are essential when exchanging files. CCSDS Orbit Data Messages define distinct products: OPM for a single state, OMM for mean elements, OEM for a state-vector history and OCM for broader orbit data. An OMM's mean-element theory must be known before selecting a compatible propagator.[^1380][^1381][^1382]

Time tags are not interchangeable. SPICE uses TDB when a CSPICE function requests ephemeris time and measures it from the J2000 epoch. JPL Horizons allows product-dependent input and output time scales; observer, vector and element products do not all accept the same choices. UTC, TT, TDB and UT1 have distinct roles, and Earth rotation data are needed when converting between celestial and terrestrial descriptions.[^1384][^1386][^1389]

SPICE uses SPK kernels for ephemerides, with separate kernels for attitude, reference-frame definitions, body orientation and time conversion. A requested state can depend on kernel coverage and additional frame or clock data, so record the kernel set and intended accuracy alongside its name.[^1383]

Covariance may accompany a state or ephemeris history. Interpret it with the epoch, frame, state ordering and units of the nominal solution. CCSDS supports covariance at one epoch or over a time history and warns that direct component interpolation can produce invalid matrices; covariance is conditional uncertainty information, not a frame-independent accuracy score.[^1380][^1382]

[^1380]: [CCSDS, Orbit Data Messages, 502.0-B-3](https://ccsds.org/Pubs/502x0b3e1.pdf).
[^1381]: [CCSDS, Orbit Data Messages publication record](https://ccsds.org/publications/allpubs/entry/3073/).
[^1382]: [CCSDS, Navigation Data Messages Overview, 500.2-G-3](https://ccsds.org/Pubs/500x2g3.pdf).
[^1383]: [NASA NAIF, SPK Required Reading](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/req/spk.html).
[^1384]: [NASA NAIF, SPICE Time Subsystem](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/req/time.html).
[^1385]: [NASA JPL, Horizons System Manual](https://ssd.jpl.nasa.gov/horizons/manual.html).
[^1386]: [NASA JPL, Horizons API Documentation](https://ssd-api.jpl.nasa.gov/doc/horizons.html).
[^1387]: [IERS, International Celestial Reference Frame](https://www.iers.org/iers/en/dataproducts/icrf/icrf).
[^1389]: [US Naval Observatory, UT1-UTC data products](https://crf.usno.navy.mil/ut1-utc).
[^1404]: [NASA JPL Solar System Dynamics, Description of Orbits and Ephemerides](https://ssd.jpl.nasa.gov/orbits_doc.html).

