Geoid undulation is the separation between the geoid and the reference ellipsoid at a given latitude and longitude, which Ordnance Survey calls the geoid-ellipsoid separation N.[^1]

Ordnance Survey relates ellipsoid height to orthometric height by adding N to the orthometric height, under simplifying assumptions about the level surfaces through the points.[^1] N varies in a complex way with latitude and longitude, and a lookup table of N values is called a geoid model.[^1] None of the opened sources uses the word undulation itself, so the page relies on the separation wording.

In practice GNSS supplies the ellipsoid height and a geoid model supplies N, so the two together give orthometric height.[^1] The OSGM15 model is described as a grid of separation values at 1 kilometre resolution from which a value is found by bilinear interpolation.[^1] Height differences between nearby points are more accurate than absolute heights because much of the error is common to both.[^1]

N is measured to an equipotential surface that best fits mean sea level.[^2][^3] Sign and accuracy depend on the geoid model and datum chosen, and the accuracy figures Ordnance Survey gives belong to its own model and edition.[^1]

[^1]: Ordnance Survey, *A Guide to Coordinate Systems in Great Britain*, version 3.6, 2020. https://www.ordnancesurvey.co.uk/documents/resources/guide-coordinate-systems-great-britain.pdf
[^2]: Open Geospatial Consortium, *Geographic information: Spatial referencing by coordinates*, OGC Abstract Specification Topic 2, 18-005r5. https://docs.ogc.org/as/18-005r5/18-005r5.html
[^3]: NOAA National Ocean Service, “What is the geoid?”. https://oceanservice.noaa.gov/facts/geoid.html

