Orbital inclination is the angle between an orbital plane and a defined reference plane.

Equivalently, inclination `i` is the angle between the positive normal to the orbital plane, set by the angular-momentum direction, and the positive normal to the reference plane. Operational formats usually express it in degrees over `0–180°`.[^2][^3] A value without the reference plane, frame and epoch does not fully specify the orbit plane.

## Direction and range

Under the usual convention, `i = 0°` is prograde equatorial, `0° < i < 90°` is prograde, `i = 90°` is polar, `90° < i < 180°` is retrograde, and `i = 180°` is retrograde equatorial.[^1]

NASA uses these limiting cases for planetary orbits.[^1] “Prograde” and “retrograde” are relative to the adopted positive pole; they are not intrinsic labels detached from a frame. An inclination near `90°` is near-polar, but only an exactly polar orbital plane contains the reference axis. Ground-track coverage also depends on body rotation, altitude, eccentricity and perturbations.

## Reference plane and axes

Earth-centred spacecraft elements commonly use Earth's equatorial plane. Heliocentric elements commonly use an ecliptic plane, while a spacecraft around another planet may use that body's equator.[^1] These are distinct geometries. JPL's approximate planetary elements, for example, refer inclination to the mean ecliptic and equinox of J2000.[^5] An Earth-equatorial inclination and a J2000-ecliptic inclination cannot be compared as if they used the same plane.

A complete reference system identifies the origin, orientation and date convention. “Equator of date”, a fixed J2000 equator, ICRF-related axes and body-fixed axes are not interchangeable. Inclination itself does not need an equinox direction within the plane, but its companion node angle does. Messages should therefore carry the full reference frame rather than a bare phrase such as “equatorial”. CCSDS requires `REF_FRAME`, `TIME_SYSTEM` and epoch metadata alongside orbit data.[^3]

## Singular and near-singular cases

Inclination remains meaningful for a circular orbit because the angular-momentum vector still defines a plane. Circularity removes the periapsis direction, not the plane. At `i = 0°` or `180°`, however, the orbital plane coincides with the reference plane and there is no unique line of nodes. RAAN is then undefined even though inclination can be reported.[^4]

NAIF's conic routine sets longitude of ascending node to zero at exactly `0°` or `180°` and warns that the value can be inaccurate nearby.[^4] That inserted zero is a coordinate convention. Near the equatorial singularity, a plane-normal vector or nonsingular element set preserves the physical orientation more reliably than RAAN. NASA's equinoctial-element work and the University of Dundee co-authored SGP4 orbit-determination study both describe classical-element problems at small inclination.[^6][^7]

## Osculating, mean and changing inclination

Osculating inclination comes from the instantaneous position and velocity at an epoch. Perturbations can give it short-period variations. Mean inclination removes selected variations under a named theory and therefore depends on that theory. CCSDS separates osculating elements in an Orbit Parameter Message from mean elements in an Orbit Mean-Elements Message.[^3]

A TLE contains SGP4-specific mean elements and uses the TEME frame. It should be propagated with the corresponding SGP4 model rather than converted into an assumed osculating state with a two-body formula. Vallado and the University of Dundee's Paul Crawford describe fitting such data in TEME and recommend conversion to a standard frame before interchange with external ephemerides.[^7]

Inclination can also evolve physically. Non-spherical gravity, third-body forces, thrust and manoeuvres rotate the orbit plane. ESA's NAPEOS manual treats inclination and ascending-node changes as coupled operational quantities.[^8] Comparing plane orientation at different times therefore requires propagation to a common epoch, including the force model appropriate to the mission.

## Uncertainty and reporting

Report inclination with its unit, central body, reference frame and plane, epoch and time system, and whether it is osculating or a named mean element. Include covariance and parameter ordering where the value supports navigation, conjunction assessment or manoeuvre design. Angle wrapping is not an issue over `0–180°`, but covariance becomes poorly behaved when combined with RAAN near an equatorial singularity.[^3][^4]

Precision should match evidence. A printed inclination does not by itself establish ground-track repeatability, latitude coverage or Sun synchronicity. Those claims also need altitude or semi-major axis, eccentricity, node evolution, body rotation and the applicable force model.[^1][^8]

## References

[^1]: NASA Science, [Chapter 5: Planetary Orbits](https://science.nasa.gov/learn/basics-of-space-flight/chapter5-1/).
[^2]: NASA Technical Reports Server, [Orbital Debris Assessment Report appendix](https://ntrs.nasa.gov/api/citations/20190027721/downloads/20190027721.pdf).
[^3]: Consultative Committee for Space Data Systems, [Orbit Data Messages, CCSDS 502.0-B-3, Issue 3](https://ccsds.org/wp-content/uploads/gravity_forms/5-448e85c647331d9cbaf66c096458bdd5/2025/11/502x0b3e2.pdf).
[^4]: NASA Navigation and Ancillary Information Facility, [`oscelt_c`: osculating conic elements](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/cspice/oscelt_c.html).
[^5]: JPL Solar System Dynamics, [Approximate Positions of the Planets](https://ssd.jpl.nasa.gov/planets/approx_pos.html).
[^6]: NASA Technical Reports Server, [Low-thrust trajectory analysis using equinoctial elements](https://ntrs.nasa.gov/api/citations/19900012491/downloads/19900012491.pdf).
[^7]: David Vallado and Paul Crawford, University of Dundee, [SGP4 Orbit Determination](https://celestrak.org/publications/AIAA/2008-6770/AIAA-2008-6770.pdf).
[^8]: European Space Agency Navigation Support Office, [NAPEOS Mathematical Models and Algorithms](https://navigation-office.esa.int/attachments/32834429/1/NAPEOS_MathModels_Algorithms.pdf).

