An interpolation method is an algorithm for estimating values at unsampled locations from values at known locations, and SWEET models it as a kind of Algorithm tied to the Interpolation data service.[^1][^2]

SWEET's Turtle file makes InterpolationMethod a subclass of Algorithm with a restriction on the Interpolation data service, and lists distance weighting and nearest neighbour as individual methods.[^1] The USACE HEC documentation describes nearest neighbour as assigning each grid cell the value of the closest gauge, and inverse distance weighting as computing a weight for each contributing gauge.[^3] Both sources name these methods, one as ontology individuals and the other as computations.

A textbook chapter explains why more than one method exists: infinitely many functions pass through the given points, so additional conditions must be imposed, and these conditions define the character of each technique.[^4] QGIS's manual draws the practical consequence that the choice should depend on the sample data, the type of surface to be generated and the tolerance of estimation errors.[^2]

Resampling a raster is a related but distinct operation, since the same chapter lists it among the uses of interpolation.[^4] Retained sources do not establish a ranking of methods, accuracy comparisons or error bounds. SWEET's file defines the class by structure only and adds no definition text.[^1]

[^1]: ESIP Federation, “SWEET reprDataServiceAnalysis.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceAnalysis.ttl
[^2]: QGIS Project, “Spatial Analysis (Interpolation)”. https://docs.qgis.org/3.44/en/docs/gentle_gis_introduction/spatial_analysis_interpolation.html
[^3]: USACE Hydrologic Engineering Center, “Spatial Interpolation Method”. https://www.hec.usace.army.mil/confluence/metdoc/metum/3.2/processing-data/metinterp/computational-methods/spatial-interpolation-method
[^4]: L. Mitas and H. Mitasova, “Spatial interpolation (GIS book chapter 34)”. https://www.geos.ed.ac.uk/~gisteac/gis_book_abridged/files/ch34.pdf

