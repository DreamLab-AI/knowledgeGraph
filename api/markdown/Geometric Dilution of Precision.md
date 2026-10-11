
Geometric Dilution of Precision (GDOP) is the conventional combined position-and-receiver-clock geometry factor for a basic three-dimensional pseudorange solution.

For Q = (GᵀG)⁻¹ and clock bias expressed in range units as cδt, GDOP = sqrt(qxx + qyy + qzz + qtt). It includes the three Cartesian position components and the receiver-clock component of that selected state vector. The numerical value therefore depends on the observed satellites and on which unknowns the solution estimates.[^1][^2]

GDOP is dimensionless geometry scaling under the simplified model of independent, equal-variance range errors. It is not a position-plus-timing error in physical units. The range-error scale remains separate; a weighted or correlated-observation estimator, or one with extra constellation-specific clock states, needs its own covariance description. State the clock units/convention when deriving or comparing GDOP values, since an unscaled trace cannot combine clock seconds and position metres.[^1]

[^1]: https://gssc.esa.int/navipedia/index.php?title=Positioning_Error
[^2]: https://gssc.esa.int/navipedia/index.php/Code_Based_Positioning_(SPS)

