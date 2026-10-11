Radar layover is the displacement of the top of a tall feature towards the sensor in a side-looking radar image, because the return from the top arrives before the return from the base.[^1][^2]

This effect follows from slant-range imaging, in which position in the image depends on distance from the radar. Natural Resources Canada describes layover as most severe at small incidence angles, near range and in mountainous terrain, and as visually similar to foreshortening. A processing guide adds that returns from the front and back slopes can arrive together, so the front slope is projected onto the back side and its data cannot be extracted.[^1][^2]

Terrain correction uses a digital elevation model to treat foreshortened areas, but layover areas have no separable returns to correct. The Alaska Satellite Facility sets such pixels to no data and supplies a layover and shadow mask, and it does not interpolate the gaps. That is one product's choice; other processors may handle masks differently.[^2][^3]

Layover is a geometric property of the terrain and viewing direction, not a sensor fault or a radiometric error. It should be kept apart from radar shadow, in which the beam does not reach the ground at all. The sources do not give a threshold incidence angle or slope at which layover begins.[^1][^2][^3]

[^1]: Natural Resources Canada, “Radar Image Distortions”. https://natural-resources.canada.ca/maps-tools-publications/satellite-elevation-air-photos/radar-image-distortions
[^2]: Alaska Satellite Facility, “Product Guide - HyP3”. https://hyp3-docs.asf.alaska.edu/guides/rtc_product_guide/
[^3]: NASA Earthdata, “Synthetic Aperture Radar (SAR)”. https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/sar

