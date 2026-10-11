
Time Dilution of Precision (TDOP) is the dimensionless geometry factor for the receiver-clock component of a GNSS solution.

For a conventional linearised solution, Q = (G^T G)^-1 gives the covariance shape for the selected measurement geometry; TDOP = sqrt(Q_tt), where t denotes the clock parameter in the model. If that parameter is expressed as range-equivalent clock bias, an assumed common one-sigma range error sigma_r gives a formal clock-range standard deviation of approximately TDOP × sigma_r, or a time standard deviation of TDOP × sigma_r / c. Weighting and parameter conventions change the covariance calculation, so implementations must use their actual estimator model.[^1]

Receiver clock offset is an estimated state solved alongside position. TDOP describes how the geometry conditions that estimate; it is not the clock offset itself, a satellite clock correction, or the timing error measured against UTC.[^1][^3]

A favourable TDOP cannot remove residual satellite-clock modelling error, propagation delay, hardware delay, multipath or receiver noise. Timing accuracy must be stated with its reference timescale, statistic, interval and operating assumptions. Galileo’s quarterly report reports UTC dissemination/determination and time-offset measures separately from its positioning and DOP metrics.[^2][^4]

[^1]: https://gssc.esa.int/navipedia/index.php?title=Positioning_Error
[^2]: https://gssc.esa.int/navipedia/index.php/Accuracy
[^3]: https://gssc.esa.int/navipedia/index.php/Clock_Modelling
[^4]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo-OS-Quarterly-Performance_Report-Q2-2026.pdf

