
GNSS positioning error is the difference between a receiver's estimated position and the corresponding true or reference position, evaluated in a stated frame, epoch and error metric.

It is a state-estimation result, not an individual pseudorange residual, satellite signal-in-space range error, formal covariance, protection level or availability statistic. A code pseudorange is an apparent range derived from signal travel time: satellite and receiver clock offsets, propagation and instrument terms mean it need not equal geometric distance. Carrier-phase observations have different ambiguity and bias terms, so comparisons should identify observable, frequency combination, corrections and reference point.[^1][^2][^3]

Contributors can include orbit and clock errors, signal distortion, ionospheric and tropospheric delays, multipath and obstruction, receiver thermal noise, interference and receiver design. Some effects are satellite-dependent or shared by users; others are local. Corrections and differencing may reduce selected terms under their assumptions, but do not remove every error in all configurations.[^2][^4][^5]

Satellite geometry, weighting, correlations, model choices and estimated parameters determine how the estimator maps measurement errors into state error. Formal covariance quantifies uncertainty conditional on the adopted observation model; measured error requires comparison with a truth or reference. The simplified DOP scaling assumes independent, equal-variance range errors and should not be applied blindly to biased, correlated or unequally weighted data.[^1][^2]

Published service figures also depend on their definitions. GPS SPS distinguishes SIS URE from user PVT accuracy and specifies conditions and statistics. Galileo's system-level assessment excludes propagation and user-equipment contributions in its stated metric, while the Q2 2026 receiver analysis is complementary and selected for PDOP, signal health and ephemeris age, with some local outliers removed. Report the system, edition/period, percentile, geography, receiver conditions and included error terms before comparing numbers.[^6][^7][^8]

[^1]: https://gssc.esa.int/navipedia/index.php?title=Positioning_Error
[^2]: https://gssc.esa.int/navipedia/index.php/GNSS_Measurements_Modelling
[^3]: https://gssc.esa.int/navipedia/index.php/Code_Based_Positioning_(SPS)
[^4]: https://gssc.esa.int/navipedia/index.php/EGNOS_User_Segment
[^5]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo-OS-SDD_in_force.pdf
[^6]: https://www.gps.gov/performance-standards-specifications
[^7]: https://www.gps.gov/sites/default/files/2025-07/2020-SPS-performance-standard.pdf
[^8]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo-OS-Quarterly-Performance_Report-Q2-2026.pdf

