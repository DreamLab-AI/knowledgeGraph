Proximity is the geospatial analysis of how near features are to one another, expressed as nearest features, distances between features or zones within a set distance.[^1][^2]

Esri describes its Proximity toolset as a set of tools that determine the proximity of features within one or more feature classes or between two feature classes.[^1] These tools can identify features that are closest to one another or calculate the distances between or around them.[^1] In SWEET, Proximity is a subclass of GeospatialService, and Buffer is declared beneath Proximity.[^3]

Distance is a convention of the tool rather than a universal. Esri calculates the distance between any two features as the shortest separation between them, takes distance to the boundary of a polygon and not to its centroid, and sets the distance to zero when one feature contains or is within another.[^2] Those rules come from one vendor's documentation, so another package may measure from centres or by another path.

None of the retained sources establishes an Earth observation specific method, an error model for distance on a projected or geodetic surface, or any threshold at which features count as near.

[^1]: Esri, “An overview of the Proximity toolset”. https://doc.esri.com/en/arcgis-pro/latest/tool-reference/analysis/an-overview-of-the-proximity-toolset.html
[^2]: Esri, “How proximity tools calculate distance”. https://doc.esri.com/en/arcgis-pro/latest/tool-reference/analysis/how-near-analysis-works.html
[^3]: ESIP Federation (SWEET), “reprDataServiceGeospatial.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceGeospatial.ttl

