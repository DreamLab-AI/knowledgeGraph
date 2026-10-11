An observation timestamp is the recorded date and time at which an Earth observation was collected, held in a product's metadata so that data can be placed in time.[^1]

The CARD4L surface reflectance specification asks for the data collection time to be given in date and time to the second, with the offset from UTC stated unambiguously, and for the acquisition time of each pixel to be identified or reliably determinable from the metadata. That is a requirement of one analysis-ready-data specification and does not set the precision of every product.[^1]

Products record time in different forms. Sentinel-2 product names carry a datatake start sensing time, and the product documentation notes that a time in one name field can be earlier or slightly later than the datatake sensing time. Harmonized Landsat and Sentinel-2 filenames carry a date and a time of acquisition as part of the naming convention. A time in a filename is therefore a labelling convention and should not be read as the exact instant at which every pixel was observed.[^2][^3]

No source opened here establishes a general tolerance for scene time against pixel time, or which time scale a product uses when none is stated. A timestamp should be read together with the product's own metadata definition.[^1][^2]

[^1]: CEOS, *CARD4L Product Family Specification: Surface Reflectance*, version 5.0. https://ceos.org/ard/files/PFS/SR/v5.0/CARD4L_Product_Family_Specification_Surface_Reflectance-v5.0.pdf
[^2]: ESA SentiWiki, “S2 Products”. https://sentiwiki.copernicus.eu/web/s2-products
[^3]: NASA Earthdata, “Harmonized Landsat and Sentinel-2 (HLS)”. https://www.earthdata.nasa.gov/data/projects/hls

