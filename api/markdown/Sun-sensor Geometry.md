Sun-sensor geometry is the relative arrangement of the Sun and the sensor viewing direction at an observed point, described by solar and viewing angles.[^1]

Sentinel-2 supplies Sun and viewing angles in tile metadata, in degrees. Zenith angles are computed from the normal to the reference ellipsoid at each grid node and azimuth angles clockwise from north, with viewing angles given per band and detector. That is one product's convention, not a general standard.[^1]

Illumination also depends on orbit choice. Near-polar sun-synchronous orbits cross each latitude at a constant local solar time, which gives consistent illumination for images of the same season or area. The tutorial notes that an early morning crossing gives low Sun angles and long shadows in high relief, and describes mid-morning as a common compromise.[^2]

The Sentinel-2 documentation states that the conversion to top-of-atmosphere reflectance uses the Sun zenith angle. The sources do not establish how other missions treat angular effects, and this page does not cover surface anisotropy.[^1]

[^1]: Copernicus SentiWiki, “Sentinel-2 Processing”. https://sentiwiki.copernicus.eu/web/s2-processing
[^2]: Natural Resources Canada, “Satellite Characteristics: Orbits and Swaths”, *Fundamentals of Remote Sensing*. https://natural-resources.canada.ca/maps-tools-publications/satellite-elevation-air-photos/satellite-characteristics-orbits-swaths

