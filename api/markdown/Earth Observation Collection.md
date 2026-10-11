An Earth observation collection is a set of data items that share the same properties and higher-level metadata, typically coming from one sensor or constellation.[^1]

In the SpatioTemporal Asset Catalog specification, a collection describes a group of related items and adds licence, spatial and temporal extent, providers, keywords and summaries to the fields of a catalogue. Each item links back to its collection, so the items implicitly share the collection's fields.[^1] The specification says this corresponds to a dataset series in ESA and ISO 19115 usage, a collection in CNES and NASA usage, and a dataset in JAXA and DCAT usage, and it calls the construct deliberately flexible.[^1] The Copernicus Data Space Ecosystem STAC browser presents its holdings in this way, with Sentinel-2 Level 2A as one collection that has its own description, extent and filters.[^2]

That word has a second meaning in Landsat. Landsat Collection 2 is a reprocessing generation, characterised in the product guide by use of a Sentinel-2 reference image for ground control points, updated elevation sources and calibration and validation updates.[^3] That sense concerns processing baseline and should not be merged with a catalogue grouping, although a provider might also expose Landsat Collection 2 as a catalogue collection.[^1][^3]

[^1]: Radiant Earth Foundation, “STAC Overview”. https://raw.githubusercontent.com/radiantearth/stac-spec/master/overview.md
[^2]: Copernicus Data Space Ecosystem, “STAC product catalogue”. https://documentation.dataspace.copernicus.eu/APIs/STAC.html
[^3]: US Geological Survey, *Landsat 8-9 Collection 2 Level 2 Science Product Guide*, LSDS-1619, version 6.0, May 2024. https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/media/files/LSDS-1619_Landsat8-9-Collection2-Level2-Science-Product-Guide-v6.pdf

