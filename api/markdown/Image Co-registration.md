Image co-registration is the alignment of two or more images, or bands of one image, so that corresponding pixels refer to the same ground location [^1].

Evidence retained comes from one source family, the Sentinel-2 processing documentation of the European Space Agency [^1]. There a reference band is registered with a reference image, and registration between the VNIR and SWIR focal planes is also described, although the latter is deactivated in operational processing [^1].

Its method resamples the reference image and the band to be refined on a common geometry grid, collects and filters tie-points and refines the viewing model [^1]. ESA says the refinement has highly improved the absolute geolocation and the multi-temporal co-registration of Sentinel-2 products [^1].

Nothing in the retained sources establishes a general definition across sensors, a tolerance for acceptable misregistration, or how co-registration relates to geocoding in other missions. This page rests on one witness and the Sentinel-2 chain should be read as an example, not as the whole class.

[^1]: ESA Copernicus SentiWiki, “Sentinel-2 Processing”. https://sentiwiki.copernicus.eu/web/s2-processing

