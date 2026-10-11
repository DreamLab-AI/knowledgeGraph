Reanalyzed data state is the SWEET data-processing state of data that have been through a reanalysis process.[^1]

In the SWEET state module the class Reanalyzed is a subclass of DataState with a restriction that some Reanalysis process lies in the history of its members, linked by the hadProcess property.[^1] The analysis module declares Reanalysis equivalent to Reanalyze, a data analysis service.[^2] The class is defined by that process history alone and carries no definition text.

Data in this state inherit the character of the method. NCAR notes that the changing observation mix can produce artificial variability and spurious trends, while ECMWF points out that using the same model and assimilation system throughout means the same processes are resolved in a consistent manner.[^3][^4]

Retained sources do not establish how a reanalysed state is recorded in product metadata, or how it relates to the NASA processing levels.

[^1]: ESIP SWEET ontology (GitHub mirror), “stateDataProcessing.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/stateDataProcessing.ttl
[^2]: ESIP SWEET ontology (GitHub mirror), “reprDataServiceAnalysis.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceAnalysis.ttl
[^3]: NCAR Climate Data Guide, “Atmospheric Reanalysis: Overview & Comparison Tables”. https://climatedataguide.ucar.edu/climate-data/atmospheric-reanalysis-overview-comparison-tables
[^4]: ECMWF, “ERA5: the new reanalysis of weather and climate data”. https://www.ecmwf.int/en/about/media-centre/science-blog/2017/era5-new-reanalysis-weather-and-climate-data

