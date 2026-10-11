
Position Dilution of Precision (PDOP) is the three-dimensional position component of the conventional DOP covariance, excluding the receiver-clock diagonal component.

For Q = (GᵀG)⁻¹ in an orthogonal Cartesian position frame, PDOP = sqrt(qxx + qyy + qzz). It summarises geometry for the estimated three-dimensional position under the covariance convention used. Although the clock term is absent from this component sum, position and clock estimates can remain coupled through off-diagonal covariance terms.[^1]

PDOP is not position error in metres. A formal uncertainty needs a compatible range-domain covariance or error scale and the relevant state model; realised error also depends on measurement quality, bias, propagation, receiver processing and environment. Galileo's PDOP ≤ 6 availability threshold is a geometry/service metric; its documents report horizontal and vertical positioning performance separately.[^1][^2][^3]

For reproducible values, give the satellite set, state parameterisation, observation weights, coordinate frame and epoch. IGS products use specified terrestrial-frame realisations and time-tagged station coordinates; a generic constellation label alone does not define the precise geometry calculation or reference frame.[^1][^4][^5]

[^1]: https://gssc.esa.int/navipedia/index.php?title=Positioning_Error
[^2]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo-OS-SDD_in_force.pdf
[^3]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo-OS-Quarterly-Performance_Report-Q2-2026.pdf
[^4]: https://www.igs.org/products/
[^5]: https://igs.org/itrf/

