
A GNSS receiver is user equipment that processes one or more satellite navigation signals to form measurements or estimate position, velocity and time.

A common receiver chain uses an antenna, radio-frequency front end and baseband processing to acquire and track signals. The receiver can derive code-phase pseudorange, carrier-phase and Doppler observables, decode navigation data, and pass these measurements to a navigation or timing application. Designs vary: a receiver may output raw observations or time without computing a position fix.[^1][^2][^3]

Pseudorange is an apparent range, not a direct geometric-distance reading. It contains satellite and receiver clock offsets and can include atmospheric and instrumental delays, multipath and receiver noise. Carrier-phase measurements can be more precise, but contain an unknown integer ambiguity that can jump after loss of lock. Doppler measurement is part of signal tracking and reflects relative motion and receiver clock-frequency error.[^3]

Receiver performance depends on the antenna, signal conditions, implementation and use case. ESA characterises code, carrier and Doppler response under multipath, interference and dynamic stress. GPS service standards describe signal-in-space performance; they do not guarantee identical PVT performance for every receiver or environment.[^2][^4][^5]

[^1]: https://gssc.esa.int/navipedia/index.php/GPS_Receivers
[^2]: https://www.esa.int/Applications/Satellite_navigation/Characterization_of_receivers
[^3]: https://gssc.esa.int/navipedia/index.php/GNSS_Basic_Observables
[^4]: https://archive.gps.gov/technical/ps/2020-SPS-performance-standard.pdf
[^5]: https://archive.gps.gov/technical/ps/

