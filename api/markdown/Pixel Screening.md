Pixel screening is the per-pixel assessment of observations, such as flags for missing data, saturation, cloud and cloud shadow, which lets users choose observations by their suitability for an application.[^1]

The CARD4L surface reflectance specification lists per-pixel metadata items for no data, incomplete testing, saturation, cloud, cloud shadow, land and water, snow and ice, terrain shadow and terrain occlusion. It also asks the metadata to identify which per-pixel tests have and have not been completed. A pixel without a flag is therefore not by itself shown to be free of cloud or shadow, since the metadata only reports the tests that were run.[^1]

Operational products deliver this information as quality masks and indicators beside the image data. Sentinel-2 products include quality masks and reports, and the formats of those masks changed between processing baselines. In synthetic aperture radar terrain correction, a layover and shadow mask shows which no-data pixels come from imaging geometry rather than from missing acquisitions.[^2][^3]

Which tests exist, and how they are defined, depends on the product and its algorithms. The sources opened here do not give a single standard list of screening tests.[^1][^2]

[^1]: CEOS, *CARD4L Product Family Specification: Surface Reflectance*, version 5.0. https://ceos.org/ard/files/PFS/SR/v5.0/CARD4L_Product_Family_Specification_Surface_Reflectance-v5.0.pdf
[^2]: ESA SentiWiki, “S2 Products”. https://sentiwiki.copernicus.eu/web/s2-products
[^3]: Alaska Satellite Facility, “HyP3 Product Guide: RTC”. https://hyp3-docs.asf.alaska.edu/guides/rtc_product_guide/

