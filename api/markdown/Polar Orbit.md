A polar orbit is an orbit whose plane passes close to both poles of the body being orbited; for an Earth-equatorial reference plane, an ideal polar orbit has an inclination of 90°.[^nasa-orbits][^esa-orbit-types]

Inclination is measured from the chosen reference plane, not from the surface track alone. NASA uses 90° for the ideal polar case, while ESA’s public explainer treats tracks within about 10° of the poles as polar. That is a practical category, not a universal mathematical boundary.[^nasa-orbits][^esa-orbit-types]

As the body rotates beneath a near-fixed orbital plane, successive passes can cover a broad range of latitudes. A polar orbit does not provide complete surface coverage in one revolution: altitude, sensor swath, inclination, orbital period, repeat cycle and perturbations set the actual coverage. Mapping and Earth observation use these geometries because repeated ground tracks can reach high latitudes as well as lower latitudes.[^nasa-orbits][^esa-vega-programme]

## Polar and sun-synchronous are different conditions

A polar orbit describes the orientation of the orbital plane. A sun-synchronous orbit (SSO) adds a precession requirement: the ascending node must move at about the same mean rate as the apparent Sun so the spacecraft crosses a location at a consistent local solar time. Earth’s oblateness supplies much of the required nodal drift through the J2 perturbation. At exactly 90° the first-order J2 term is zero, so common Earth SSOs are slightly retrograde rather than exactly polar.[^esa-napeos]

Lighting, thermal conditions and repeat imaging all depend on this distinction. A polar orbit may have a changing local solar time; an SSO is designed to preserve it within operational tolerances. Neither name alone specifies altitude, eccentricity, local-time choice or revisit interval.[^esa-orbit-types][^esa-napeos]

## Launch and mission constraints

A launcher’s reachable inclination depends on launch site, azimuth, vehicle configuration and mission profile. European launch documentation gives polar and SSO missions as established service cases, but performance and injection accuracy remain specific to the selected vehicle and orbit. Ariane 6, for example, lists an 800 km SSO example at 98.6°; that is an example target, not the definition of an SSO.[^esa-vega-programme][^ariane6-manual]

A mission description should state the central body, reference plane, inclination and epoch, then add altitude or orbital elements, local solar time and repeat-ground-track conditions where relevant. Predictions should identify their force model and uncertainty, since nodal drift, drag and manoeuvres change the actual orbit over time.[^nasa-orbits][^esa-napeos]

## References

[^nasa-orbits]: NASA Science, [Chapter 5: Planetary Orbits](https://science.nasa.gov/learn/basics-of-space-flight/chapter5-1/).
[^esa-orbit-types]: European Space Agency, [Types of orbits](https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits).
[^ariane6-manual]: Arianespace, [Ariane 6 User’s Manual, issue 2 revision 0](https://ariane.group/app/uploads/sites/4/2024/10/Mua-6_Issue-2_Revision-0_March-2021-1.pdf), March 2021.
[^esa-vega-programme]: European Space Agency, [Vega programme](https://www.esa.int/Enabling_Support/Space_Transportation/Vega/Vega_programme).
[^esa-napeos]: ESA Navigation Support Office, [NAPEOS Mathematical Models and Algorithms, issue 1.0](https://dgnl7.esoc.esa.int/attachments/32834429/1/NAPEOS_MathModels_Algorithms.pdf), 5 November 2009.

