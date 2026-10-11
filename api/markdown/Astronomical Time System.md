An astronomical time system is a scheme for assigning times to events in astronomy and spacecraft navigation, covering scales tied to Earth rotation, such as mean solar time, and uniform scales such as atomic time, Terrestrial Time and Barycentric Dynamical Time.[^1][^2]

NASA describes mean solar time as an average of the variations caused by the non-circular orbit of the Earth.[^1] SPICE documentation describes atomic time as a count of atomic seconds from an instant in 1958, says Terrestrial Time changes at the same rate as atomic time as far as measurement can detect, and uses Terrestrial Time for motions near the Earth and Barycentric Dynamical Time for the motions of the planets, sun and moon.[^2]

SPICE documentation treats Coordinated Universal Time as a representation that names instants of atomic time, not a separate uniform scale, and says it is occasionally adjusted to stay close to Earth rotation.[^2] GNSS system time scales differ on this point: Navipedia says GLONASS time implements leap seconds like UTC, unlike GPS, Galileo or BeiDou.[^3]

A time value is only meaningful with its scale named. The sources are explanatory and toolkit documentation, and they do not give conversion offsets or settle which scale a particular mission should adopt.

[^1]: NASA Science, *Basics of Space Flight*, Chapter 2: Reference Systems. https://science.nasa.gov/learn/basics-of-space-flight/chapter2-1/
[^2]: NASA JPL NAIF, *SPICE Time Subsystem*, required reading, revised 2021. https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/req/time.html
[^3]: ESA Navipedia, “Time References in GNSS”. https://gssc.esa.int/navipedia/index.php/Time_References_in_GNSS

