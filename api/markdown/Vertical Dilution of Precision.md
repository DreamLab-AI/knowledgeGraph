
Vertical Dilution of Precision (VDOP) is the dimensionless geometry factor for the vertical coordinate in a GNSS position solution.

In a conventional linearised least-squares model with equal, independent range-measurement variance, form the geometry matrix G and covariance-shape matrix Q = (G^T G)^-1; after rotating the position covariance into the local east-north-up frame, VDOP = sqrt(Q_uu). With a common one-sigma range error sigma_r, the corresponding formal vertical standard deviation is approximately VDOP × sigma_r.[^1]

VDOP therefore describes how the selected satellite directions amplify an assumed measurement uncertainty into the up component of the solution. It changes with the satellites used, their geometry, the elevation mask, and the coordinate frame. Weighted or differently parameterised solutions use the covariance model actually adopted by that estimator.[^1]

VDOP is not a measured height error and does not include a complete error budget by itself. Multipath, atmospheric residuals, clock and orbit errors, receiver noise, antenna effects and datum or modelling errors can all separate observed vertical accuracy from the formal geometry factor. State the observation-noise assumptions and the accuracy statistic before translating VDOP into an uncertainty claim.[^1][^2]

Service metrics also keep geometry and accuracy separate: Galileo’s Q2 2026 report lists PDOP availability independently from positioning accuracy and measured positioning results. Its PDOP service measure does not establish a universal VDOP limit or the realised height accuracy of an individual receiver.[^3]

[^1]: https://gssc.esa.int/navipedia/index.php?title=Positioning_Error
[^2]: https://gssc.esa.int/navipedia/index.php/Accuracy
[^3]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo-OS-Quarterly-Performance_Report-Q2-2026.pdf

