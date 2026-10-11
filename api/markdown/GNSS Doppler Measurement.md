
A GNSS Doppler measurement is an estimate of the received carrier-frequency shift caused chiefly by satellite-receiver line-of-sight motion and modified by clock-frequency error.

For carrier frequency f0 and range rate rho-dot defined positive when the separation is increasing, the first-order geometric contribution is fD ≈ −(f0/c) rho-dot, with receiver and satellite oscillator terms also present. Thus a receding satellite gives a negative geometric shift under this convention, while an approaching satellite gives a positive one. RINEX uses the latter convention: positive Doppler means approaching. Its D observation type is a frequency observable, conventionally expressed in hertz; receiver APIs and tracking-loop NCO signs may differ.[^1][^2]

Doppler is not itself a range or a complete velocity solution. A velocity estimate also needs satellite geometry, satellite states, clock terms and a measurement estimator. RINEX's receiver-clock drift correction is scaled by carrier frequency, so time-tag and frequency conventions must be kept consistent when correcting or exchanging observations.[^1]

Receivers may use frequency-locked loops to follow Doppler, and may combine frequency and phase tracking. Measurement error depends on signal conditions and receiver design; ESA characterises Doppler response under controlled multipath, interference and dynamic stress rather than specifying a universal receiver accuracy.[^3][^4]

[^1]: https://files.igs.org/pub/data/format/rinex_4.02.pdf
[^2]: https://gssc.esa.int/navipedia/index.php/GNSS_Basic_Observables
[^3]: https://gssc.esa.int/navipedia/index.php?title=Tracking_Loops
[^4]: https://www.esa.int/Applications/Satellite_navigation/Characterization_of_receivers

