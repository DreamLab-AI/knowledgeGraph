
GNSS multipath is the reception of reflected copies of a satellite signal alongside its direct path, which changes the composite waveform and can bias the receiver’s signal-tracking measurements.

Reflections from buildings, ground, vehicles or nearby structures arrive with different delays, amplitudes and phases. Their interaction with the direct component can distort code tracking and carrier-phase observations; the resulting bias depends on the signal, reflector geometry, antenna and receiver tracking design.[^1]

Code and carrier-phase multipath are distinct observable errors. Their response depends on correlator and tracking-loop behaviour as well as signal wavelength and path geometry, so a numerical bound or code-to-carrier ratio from one model is not a general limit for all constellations and receivers.[^1]

Low-elevation signals often have greater exposure to reflections and antenna-pattern effects. Antenna pattern and polarisation can suppress some reflected energy, but installation, ground plane, radome and platform reflections remain relevant; mitigation does not guarantee removal.[^1][^2]

Multipath acts on measurements before the receiver estimates position, velocity or time. A position error is the downstream result of processing a set of measurements and other error sources, not another name for the multipath observable bias.[^1]

[^1]: https://gssc.esa.int/navipedia/index.php?title=Multipath
[^2]: https://gssc.esa.int/navipedia/index.php/Antennas

