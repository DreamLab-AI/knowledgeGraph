Radar shadow is the part of a radar image where the beam cannot illuminate the ground, so no energy is backscattered and the area appears dark.[^1][^2]

Natural Resources Canada places shadow in the down-range direction, behind vertical features or steeply sided slopes. It adds that shadow effects grow as incidence angle increases from near to far range, because the radar looks more obliquely at the surface. A processing guide describes the same condition as a back slope angled so that the sensor cannot image it.[^1][^2]

Because shadowed ground returns no signal, terrain correction has nothing to recover there. The Alaska Satellite Facility sets such pixels to no data, records them in a layover and shadow mask, and does not interpolate. A shadowed area is therefore missing information, which differs from a valid surface with low backscatter.[^2][^3]

Shadow and layover both depend on terrain and viewing geometry, and a NASA overview notes that either may occur in SAR imagery depending on the illuminated terrain. They affect the image in different ways: layover mixes returns from different ground positions, while shadow removes returns. The sources do not give numerical limits for when shadow begins.[^1][^2][^3]

[^1]: Natural Resources Canada, “Radar Image Distortions”. https://natural-resources.canada.ca/maps-tools-publications/satellite-elevation-air-photos/radar-image-distortions
[^2]: Alaska Satellite Facility, “Product Guide - HyP3”. https://hyp3-docs.asf.alaska.edu/guides/rtc_product_guide/
[^3]: NASA Earthdata, “Synthetic Aperture Radar (SAR)”. https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/sar

