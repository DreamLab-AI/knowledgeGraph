A data processing state is the condition of a dataset with respect to the processing it has undergone, which SWEET models as a kind of system state with named states such as calibrated, gridded and archived.[^1]

NASA describes its products as processed at levels, from raw instrument data at full resolution through derived geophysical variables and gridded variables up to model output or results from analyses of lower-level data.[^2] These levels are one widely used convention for expressing how far a product has been processed. Not every instrument has every intermediate level, so the level of a product should be read from the product documentation.[^2]

Data state is also used in a second sense. NASA dataset metadata include a data state field that describes the production status of the dataset, using a controlled vocabulary.[^3] That status concerns whether production is under way or complete, and it is a different question from which processing steps have been applied.[^3]

SWEET lists states by label and hierarchy and does not give prose definitions, so the precise meaning of a state such as regridded or reconstructed depends on how a data provider uses the term.[^1] A processing state is also separate from the version of a product, which distinguishes releases made with different algorithms or calibrations.

[^1]: ESIP, SWEET ontology, stateDataProcessing module (Turtle source). https://raw.githubusercontent.com/ESIPFed/sweet/master/src/stateDataProcessing.ttl
[^2]: NASA Earthdata, “Data Processing Levels”. https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/data-processing-levels
[^3]: NASA Earthdata, “Earth Observation Data Basics”. https://www.earthdata.nasa.gov/learn/earth-observation-data-basics

