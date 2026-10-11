SAR terrain correction is the use of a digital elevation model to remove the geometric distortions, and in its radiometric form the brightness effects, that terrain and the side-looking imaging geometry impose on a SAR image, so that pixels sit close to their true ground positions.[^1][^2]

ESA’s SNAP documentation says that topographical variation and sensor tilt distort distances in SAR images and that terrain corrections compensate so that the geometric representation is as close as possible to the real world.[^1] The SAR Handbook names foreshortening, layover and shadow as the most relevant distortions and says a DEM is needed to correct the location of topographically inclined pixels.[^2][^3] SNAP combines orbit and timing information with the reference DEM data to derive the precise geolocation information.[^1]

Radiometric terrain correction adds compensation for brightness. The Handbook says it includes both geometric terrain correction (geocoding) and radiometric compensation, and advises correcting both when SAR data are analysed with other image data or across varying incidence angles.[^2] The Alaska Satellite Facility describes the result as analysis-ready data suitable for GIS applications or time-series analysis.[^3]

Correction has limits. Areas affected by layover or shadow have no data returns to correct, and the quality of the correction is tied to the quality of the digital elevation model used.[^3] The retained sources do not give positional accuracy figures for any product.

[^1]: European Space Agency (SNAP help), “Orthorectification: Range Doppler Terrain Correction Operator”. https://step.esa.int/main/wp-content/help/versions/9.0.0/snap-toolboxes/org.esa.s1tbx.s1tbx.op.sar.processing.ui/operators/RangeDopplerGeocodingOp.html
[^2]: NASA Earthdata (SAR Handbook), “Spaceborne Synthetic Aperture Radar: Principles, Data Access, and Basic Processing Techniques”. https://earthdata.nasa.gov/s3fs-public/2025-04/SARHB_CH2_Content.pdf
[^3]: Alaska Satellite Facility, “Sentinel-1 RTC Product Guide”. https://hyp3-docs.asf.alaska.edu/guides/rtc_product_guide/

