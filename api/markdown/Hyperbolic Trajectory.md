A hyperbolic trajectory is an open two-body conic with eccentricity greater than one and positive specific orbital energy relative to a named central body.[^1351][^1365]

## Energy and excess velocity

For a two-body state at radius `r` with speed `v`, the specific orbital energy is `ε = v²/2 − μ/r`, where `μ = GM` is the selected body’s gravitational parameter. A hyperbola has `ε > 0`; at the parabolic boundary, `e = 1` and `ε = 0`.[^1351][^1365]

Hyperbolic excess speed `v∞` is the limiting relative speed as the two-body trajectory recedes to infinite distance. Taking the asymptotic potential term to zero gives `ε = v∞²/2`. Mission design often reports characteristic energy `C3 = v∞² = 2ε`. “At infinity” is a mathematical boundary convention, not the local speed at a finite sphere-of-influence boundary. At a finite matching radius, retain the state and gravitational potential term.[^1361][^1365]

## Asymptotes and reference body

An incoming or outgoing asymptote represents the limiting direction and velocity of the spacecraft relative to the selected body. A scalar `v∞` gives speed but not direction. A flyby or launch boundary condition should preserve the inbound/outbound label, central body, epoch and reference frame for the vector. NASA’s patched-conic design description uses inbound and outbound excess vectors to set the required hyperbolic turn and periapsis.[^1362][^1365]

“Escaping” is body-relative. A spacecraft can leave Earth on a hyperbolic Earth-centred trajectory and still remain bound to the Sun on a heliocentric ellipse. To conclude that it escaped the Solar System requires a separate solar-relative energy and trajectory assessment, with the effects of other bodies and manoeuvres considered.[^1346][^1365]

## Uses and validity

Engineers use the hyperbolic model for planetary departure, arrival, flyby and gravity-assist design. Characteristic energy is not a delta-v: converting it to a launch or capture manoeuvre also requires the parking orbit, asymptote orientation, target body, burn geometry and propulsion assumptions.[^1361][^1362][^1365]

Two-body energy and conic elements are useful locally, but are not conserved across a real interplanetary path under arbitrary multi-body forces, thrust or radiation pressure. Use patched-conic values as design variables and match them to ephemerides and higher-fidelity propagation when accuracy, navigation or safety requires it.[^1346][^1362][^1363]

## References

[^1346]: NASA, [*Astrodynamics Convention & Modeling Reference*, version 1.1](https://ntrs.nasa.gov/api/citations/20220014814/downloads/NASA%20TP%2020220014814%20final.pdf), 2022.
[^1351]: European Space Agency, [“Types of orbits”](https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits).
[^1361]: NASA/JPL, [Trajectory Browser User Guide](https://trajbrowser.arc.nasa.gov/user_guide.php).
[^1362]: NASA, [*Patched Conic and Gravity Assist Model*](https://ntrs.nasa.gov/api/citations/20140011510/downloads/20140011510.pdf), 2014.
[^1363]: NASA Science, [“Gravity Assists”](https://science.nasa.gov/mission/cassini/gravity-assists/), Cassini mission.
[^1365]: NASA/JPL CNEOS, [NHATS trajectory solution definitions](https://cneos.jpl.nasa.gov/nhats/details.html).

