
A satellite navigation solution is an estimate of a receiver's navigation state formed from satellite measurements, navigation data and a measurement model.

In a basic single-constellation code solution, the unknowns are three receiver coordinates and receiver-clock offset. Each pseudorange supplies a range-like constraint; at least four suitable observations are needed for those four unknowns. A receiver may report position, velocity and time (PVT), but additional constellations, frequencies, clock biases, atmospheric states or carrier-phase ambiguities change the estimator's state vector and observation needs.[^1][^2][^3]

Because navigation equations are nonlinear, they are commonly linearised about an approximate position and solved iteratively or within an estimator/filter. Single Point Positioning, Precise Point Positioning, differential methods and receiver filters use different observables, corrections and stochastic models; the term “solution” alone does not specify which method or its performance.[^2][^3]

Coordinates require a terrestrial reference frame and epoch. Earth-Centred Earth-Fixed (ECEF) coordinates, latitude/longitude/height and local East-North-Up components are distinct representations. For reproducible error comparisons, state the frame realisation, epoch, local-frame origin and metric.[^4][^5]

Signal-in-space range performance, a system's modelled service accuracy and measured receiver accuracy are different evidence. GPS's SPS standard separates SIS user-range error from resulting PVT performance. Galileo's OS documents separately report system-contribution accuracy, PDOP availability and receiver-study results under specified selection conditions; none is a universal guarantee for arbitrary receivers or environments.[^6][^7][^8]

[^1]: https://gssc.esa.int/navipedia/index.php/Digital_Signal_Processing
[^2]: https://gssc.esa.int/navipedia/index.php/GNSS_Measurements_Modelling
[^3]: https://gssc.esa.int/navipedia/index.php/Code_Based_Positioning_(SPS)
[^4]: https://gssc.esa.int/navipedia/index.php?title=Positioning_Error
[^5]: https://gssc.esa.int/navipedia/index.php/Transformations_between_ECEF_and_ENU_coordinates
[^6]: https://www.gps.gov/sites/default/files/2025-07/2020-SPS-performance-standard.pdf
[^7]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo-OS-SDD_in_force.pdf
[^8]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo-OS-Quarterly-Performance_Report-Q2-2026.pdf

