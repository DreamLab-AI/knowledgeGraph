A Sun-synchronous orbit (SSO) is an Earth orbit whose orbital plane precesses at approximately the same mean rate that the Sun appears to move around Earth, about 0.9856 degrees per day. This keeps the plane at an approximately fixed orientation to the Sun and gives successive observations at a controlled local solar time.[^1]

## Nodal precession

Earth's equatorial bulge perturbs an inclined orbit. Its dominant J2 gravity term produces a secular change in the right ascension of the ascending node, rotating the orbital plane in inertial space. SSO design selects semi-major axis, eccentricity and inclination so this nodal rate matches the Sun's mean apparent rate.[^1] The required inclination is usually retrograde and near-polar for common low-altitude Earth-observation missions.

Sun synchronism is therefore a dynamical relationship, not an altitude or inclination label. ESA gives 600–800 km as a usual SSO altitude range, but this is a common design region rather than a definition.[^2] A nominal altitude alone cannot demonstrate that an orbit is Sun-synchronous; the other orbital parameters and their epoch are required.

## Local time and repeat coverage

Missions commonly specify local time of ascending node (LTAN) or local time of descending node (LTDN). Holding that crossing near a target local solar time gives more consistent illumination and shadow geometry for repeat imaging. Dawn-dusk designs keep the plane near the day-night terminator for particular lighting or power objectives.[^1][^2]

Consistent local time does not guarantee that a spacecraft passes over the exact same ground point every day. Sun synchronism controls plane precession. A repeating ground track additionally requires a suitable relationship between orbital period and Earth's rotation, and actual revisit also depends on swath width, latitude and pointing.[^1] ESA's public description of passing the same place at the same local time is useful shorthand for the observation benefit, not a universal exact-repeat rule.[^2]

## Maintenance and uncertainty

Injection error, drag, higher-order gravity, lunisolar perturbations and manoeuvre error can shift the orbit away from its target local time and repeat cycle. Propagation and mission design therefore need declared force and atmosphere models, and an operational mission may use station-keeping to control the drift.[^3] Local-time performance should be reported as a target and tolerance at an epoch, rather than as an exact timeless value.

A reproducible SSO description records semi-major axis or apogee and perigee, eccentricity, inclination, right ascension of the ascending node, epoch, frame and time system; LTAN or LTDN with its convention; repeat-cycle requirements; force models; maintenance status; and uncertainty. Near-polar orbit, constant illumination and daily revisit are associated design features, not substitutes for the nodal-precession condition.

## References

[^1]: European Space Agency Navigation Support Office, [NAPEOS Mathematical Models and Algorithms](https://navigation-office.esa.int/attachments/32834429/1/NAPEOS_MathModels_Algorithms.pdf).
[^2]: European Space Agency, [Types of orbits](https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits).
[^3]: European Space Agency, [Network of Models: Trajectory](https://nom.esa.int/models/trajectory).

