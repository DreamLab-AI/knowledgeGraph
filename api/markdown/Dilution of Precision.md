
Dilution of Precision (DOP) is a dimensionless geometry factor describing how satellite line-of-sight geometry maps range-measurement uncertainty into estimated-state uncertainty under a specified model.

For a linearised observation model with design matrix G and observation covariance R, the formal least-squares covariance is P = (Gᵀ R⁻¹ G)⁻¹ when the model is full-rank and its assumptions hold. With independent, equal-variance observations, R = sigma^2 I and P = sigma^2 Q, where Q = (GᵀG)⁻¹. Conventional DOP values are square roots of selected sums of diagonal entries of Q.[^1]

This familiar unweighted DOP convention describes geometry, not the measurement-error scale. Converting it to a formal uncertainty requires a compatible range-error standard deviation and parameterisation. Unequal weights, correlations, biases, added clock states or other estimated parameters require the corresponding covariance model; rank deficiency or poor geometry can make a solution unstable or unavailable.[^1]

Lower DOP generally means more favourable geometry for the same state vector and observation model. It does not establish lower realised position error, accuracy in metres, integrity, service availability or a performance guarantee. Galileo documentation, for example, treats PDOP-threshold availability separately from position-error accuracy and receiver measurements.[^1][^2][^3]

[^1]: https://gssc.esa.int/navipedia/index.php?title=Positioning_Error
[^2]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo-OS-SDD_in_force.pdf
[^3]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo-OS-Quarterly-Performance_Report-Q2-2026.pdf

