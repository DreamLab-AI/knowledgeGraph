An interpolated data state is the SWEET data-processing state of data that have been through an interpolation process.[^1]

In the SWEET Turtle file, the class Interpolated is a subclass of DataState with a restriction that its members have had some Interpolation process, linked by the hadProcess property.[^1] The file gives the class a label and no definition text, so the meaning of the state is carried only by that restriction.[^1]

Interpolation itself is described in agency and project documentation as the estimation of values at unsampled points from points with known values. The USACE HEC documentation describes interpolating or extrapolating to gridded points from irregularly spaced gauges, and the QGIS manual describes using known points to estimate values at unknown points.[^2][^3] A dataset in the interpolated state would therefore be expected to contain values estimated by a method rather than measured at those locations, though the sources do not say so directly.

Retained sources do not establish how an interpolated state is recorded in product metadata, what uncertainty it implies, or how it relates to the NASA processing levels. SWEET's file was opened from the ESIP mirror and the licence statement on the catalogue seed was not used.[^1]

[^1]: ESIP Federation, “SWEET stateDataProcessing.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/stateDataProcessing.ttl
[^2]: USACE Hydrologic Engineering Center, “Spatial Interpolation Method”. https://www.hec.usace.army.mil/confluence/metdoc/metum/3.2/processing-data/metinterp/computational-methods/spatial-interpolation-method
[^3]: QGIS Project, “Spatial Analysis (Interpolation)”. https://docs.qgis.org/3.44/en/docs/gentle_gis_introduction/spatial_analysis_interpolation.html

