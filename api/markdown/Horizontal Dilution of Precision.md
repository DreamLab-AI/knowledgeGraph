
Horizontal Dilution of Precision (HDOP) is the horizontal east-and-north component of position geometry in a local East-North-Up frame at the user location.

After rotating the position covariance into local ENU axes, HDOP = sqrt(qEE + qNN); the Up component is excluded. The local origin, ellipsoid and frame orientation matter. HDOP is not simply a sum of latitude and longitude uncertainties, which are angular coordinates, nor an arbitrary map-grid east/north covariance.[^1][^2]

HDOP is a dimensionless geometry factor, not horizontal accuracy in metres. In the simple equal-variance model, a compatible range-error standard deviation can scale it to a formal horizontal uncertainty. Actual horizontal error additionally depends on measurement quality, bias, weighting, propagation, receiver processing and environment. Galileo reports PDOP availability separately from horizontal-position error performance.[^1][^3][^4]

HDOP covers only the two local horizontal components: it does not describe vertical geometry, receiver-clock uncertainty or full three-dimensional position performance. VDOP represents the local Up component and PDOP the three-dimensional position summary within the same covariance convention; these quantities are not interchangeable.[^1]

[^1]: https://gssc.esa.int/navipedia/index.php?title=Positioning_Error
[^2]: https://gssc.esa.int/navipedia/index.php/Transformations_between_ECEF_and_ENU_coordinates
[^3]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo-OS-SDD_in_force.pdf
[^4]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo-OS-Quarterly-Performance_Report-Q2-2026.pdf

