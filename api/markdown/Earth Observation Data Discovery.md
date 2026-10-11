Earth observation data discovery is the process of finding datasets or scenes of interest by searching catalogue metadata on criteria such as keywords, location, time and quality attributes.[^1][^2]

NASA describes Earthdata Search as backed by its Common Metadata Repository and as a tool that makes it simple to discover and interact with Earth observation data created or distributed by NASA.[^1] STAC represents each item as GeoJSON so that it can be searched, and the Copernicus Data Space Ecosystem STAC browser filters items by attributes within a chosen collection.[^2][^3]

Discovery works on the metadata a provider supplies. The CEOS Analysis Ready Data specification for surface reflectance asks for machine-readable metadata, including overall quality such as cloud cover extent, which lets users select products before downloading them.[^4] Those quality items are goal requirements, and a catalogue that omits them offers fewer filters.[^4]

A scene-level filter selects candidate scenes and does not show where cloud or gaps fall within them. Each service describes its own holdings, so these sources do not show that any one portal covers all Earth observation data.

[^1]: NASA Earthdata, “Earthdata Search”. https://www.earthdata.nasa.gov/data/tools/earthdata-search
[^2]: Radiant Earth Foundation, “STAC Overview”. https://raw.githubusercontent.com/radiantearth/stac-spec/master/overview.md
[^3]: Copernicus Data Space Ecosystem, “STAC product catalogue”. https://documentation.dataspace.copernicus.eu/APIs/STAC.html
[^4]: Committee on Earth Observation Satellites, *CEOS-ARD Product Family Specification: Surface Reflectance*, version 5.0.2, May 2026. https://ceos.org/ard/files/PFS/SR/v5.0.2/CEOS-ARD-PFS-SR-v5.0.2.pdf

