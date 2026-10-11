Speckle filtering is the spatial filtering of synthetic aperture radar imagery to suppress speckle, the grainy salt and pepper pattern produced by coherent imaging.[^1][^2]

Speckle is inherent to narrow-banded coherent imaging systems and results from interference among the many scattering echoes within a resolution cell.[^1] ESA's STEP documentation describes it as random constructive and destructive interference of coherent return waves from the elementary scatterers in each cell.[^2] The SAR Handbook adds that speckle depends on image brightness, unlike most other noise sources, which is why it is difficult to treat as simple additive noise.[^1]

Reduction can be applied either by spatial filtering or by multilook processing, and only the first is speckle filtering in the narrow sense.[^2] The STEP operator offers Boxcar, Median, Frost, Lee, Refined Lee, Gamma-MAP, Lee Sigma and IDAN filters.[^2] The SAR Handbook says that Lee and similar sigma filters, unlike Gaussian or boxcar filters, preserve image sharpness and detail while suppressing noise.[^1]

None of the retained sources gives speckle filtering a NASA processing level, a preferred filter or a window size, and none offers a quantitative comparison of filters.

[^1]: NASA Earthdata, “The SAR Handbook, Chapter 2, Spaceborne Synthetic Aperture Radar”. https://earthdata.nasa.gov/s3fs-public/2025-04/SARHB_CH2_Content.pdf
[^2]: ESA STEP, “Speckle Filter Operator”. https://step.esa.int/main/wp-content/help/versions/9.0.0/snap-toolboxes/org.esa.s1tbx.s1tbx.op.sar.processing.ui/operators/SpeckleFilterOp.html

