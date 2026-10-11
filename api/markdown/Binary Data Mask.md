A binary data mask is a per-pixel raster layer in which each value takes one of two states, such as cloud present or absent, used to include or exclude pixels from an analysis.[^1][^2]

In Harmonized Landsat Sentinel-2 products the labels for cloud, cloud shadow, snow or ice, water and adjacency to cloud or shadow are stored in bits of a per-pixel quality assessment band, with the aerosol optical thickness level recorded in further bits. A single band therefore packs several flags, and a binary mask can be derived by reading one of them.[^1]

Google Earth Engine documents a Sentinel-2 bitmask band with separate bits for opaque and cirrus clouds, each zero or one, and classification bands in which zero means absent and one means present. It also records that the cloud-mask polygons stopped being produced in February 2022 and that later bands are built from the classification bands, so masks from different dates are not produced in the same way.[^2]

The Harmonized Landsat Sentinel-2 documentation says the dilated area around cloud and shadow can be treated as clear if data loss is a concern, which leaves the choice of how a mask is applied with the user.[^1] A mask is the output of a detection algorithm, Fmask in the Harmonized Landsat Sentinel-2 case, and the retained sources give no accuracy figures for it.

[^1]: NASA, “Harmonized Landsat Sentinel-2 (HLS) Algorithms”. https://hls.gsfc.nasa.gov/algorithms/
[^2]: Google Earth Engine, “Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-1C (TOA)”. https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED

