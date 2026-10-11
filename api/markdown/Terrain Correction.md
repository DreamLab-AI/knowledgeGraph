Terrain correction is the processing of synthetic aperture radar imagery that uses a digital elevation model to remove geometric distortions caused by terrain and to place the image in a map coordinate system.[^1][^2]

The ESA tutorial describes it as geocoding that converts an image from slant range or ground range geometry into a map coordinate system. The distortions it addresses are foreshortening, layover and shadow, which come from the side-looking geometry of the sensor acting on sloping ground.[^1][^3]

ASF describes a radiometric variant that also normalises backscatter values by the area contributing returns, so that the product aligns with other geospatial data and suits time-series analysis. It states that the quality of the correction is related to the quality of the elevation model used.[^2]

A correction cannot restore information that was never recorded. In ASF's account, layover mixes returns from front and back slopes and shadow leaves steep back slopes with no information. These sources describe SAR products, so they do not establish how the same term is used for optical image orthorectification.[^2][^3]

[^1]: ESA, *SAR Basics Tutorial*, Sentinel-1 Toolbox. https://step.esa.int/docs/tutorials/S1TBX%20SAR%20Basics%20Tutorial.pdf
[^2]: Alaska Satellite Facility, “Radiometric Terrain Correction Workflow”, HyP3 RTC product guide. https://hyp3-docs.asf.alaska.edu/guides/rtc_product_guide/
[^3]: NASA NISAR, “SAR overview”. https://nisar.jpl.nasa.gov/mission/get-to-know-sar/overview/

