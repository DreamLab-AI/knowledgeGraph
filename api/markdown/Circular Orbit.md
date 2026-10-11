A circular orbit is a bound orbit with constant radius and zero eccentricity in the ideal two-body model.

A circle is the zero-eccentricity member of the ellipse family: its two foci coincide.[^1] The word `circular` describes shape. It does not specify the central body, orbital plane, direction, radius, altitude or dynamical model.

## Two-body conditions

For a circular solution under Newtonian point-mass gravity, radial velocity is zero and transverse speed has the exact value required at that separation. Zero radial velocity alone is insufficient because every elliptical orbit has zero radial velocity at periapsis and apoapsis. The state must also produce an eccentricity of zero through its energy and angular momentum.[^2][^4]

General two-body dynamics uses the relative separation of both masses and gravitational parameter `G(m1+m2)`. Spacecraft analysis usually neglects spacecraft mass and uses the central body's `GM`. That approximation is excellent for ordinary artificial satellites, but it should not be silently transferred to comparable-mass binaries.[^4]

Specific mechanical energy and specific angular momentum stay constant in the ideal model. The circular speed, period and energy then follow from the gravitational parameter and radius.[^2][^4] These formulae require consistent distance and time units and a stated origin.

## Elements and singularity

An exact circle has no unique periapsis or apoapsis direction. Classical argument of periapsis and true anomaly measured from periapsis are therefore undefined. ESA Navipedia uses argument of latitude as an alternative.[^3] JPL SPICE sets argument of periapsis to zero by convention at exactly zero eccentricity and warns that the value becomes inaccurate near zero.[^5]

Software output must be read with that convention in mind. A zero angle can be a placeholder rather than a measured physical direction. Equinoctial elements, mean longitude, argument of latitude or Cartesian position and velocity avoid the circular singularity in different contexts. A Dundee co-authored SGP4 orbit-determination study describes equinoctial variables as a more stable option for singular orbit types.[^8]

## Real and osculating circles

JPL's conic propagator describes the nominal orbit followed in the absence of other bodies and non-gravitational forces.[^6] Real spacecraft experience non-spherical gravity, third-body attraction, atmospheric drag, radiation pressure, relativity and manoeuvres. Their instantaneous osculating eccentricity and radius can vary even when mission language calls the orbit circular.

Operational use should define a tolerance, such as an eccentricity limit or permitted radial variation over an interval. `Near-circular` is usually more precise than claiming mathematical equality. The tolerance should match the application: communications coverage, imaging geometry and formation flying can demand different bounds.

Osculating elements describe a tangent conic at one epoch. JPL warns that two-body propagation of those elements can diverge substantially from the actual path when perturbations matter, with error generally growing away from the epoch.[^7] A circular-orbit record therefore needs the central body, origin, frame, epoch, gravitational parameter, force model, interval and uncertainty. The word alone is not a propagator specification.

## References

[^1]: NASA Science, [Basics of Space Flight: Ellipses and eccentricity](https://science.nasa.gov/learn/basics-of-space-flight/chapter3-1/).
[^2]: European Space Agency, [GODOT: Two-body propagation and orbital quantities](https://godot.io.esa.int/docs/tutorials2/fundamentals/astro/02-two-body-propagation-and-orbital-quantities.html).
[^3]: ESA Navipedia, [Two-body Problem](https://gssc.esa.int/navipedia/index.php?title=Two-body_Problem).
[^4]: NASA, [Introduction to Orbital Mechanics and Spacecraft Attitudes for Thermal Engineers](https://ntrs.nasa.gov/api/citations/20205003902/downloads/Introduction%20to%20Orbital%20Mechanics%20and%20Spacecraft%20Attitudes%20for%20Thermal%20Engineers%20CHARTS%20PDF.pdf), 2020.
[^5]: NASA Jet Propulsion Laboratory, [CSPICE `oscelt_c`: osculating elements from a state](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/cspice/oscelt_c.html).
[^6]: NASA Jet Propulsion Laboratory, [CSPICE `conics_c`: state from conic elements](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/cspice/conics_c.html).
[^7]: NASA Jet Propulsion Laboratory, [Solar System Dynamics frequently asked questions](https://ssd.jpl.nasa.gov/faq.html).
[^8]: David A. Vallado and Paul Crawford, [SGP4 Orbit Determination](https://celestrak.org/publications/AIAA/2008-6770/AIAA-2008-6770.pdf), 2008.

