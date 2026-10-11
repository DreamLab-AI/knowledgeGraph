Topographic correction adjusts reflectance for the effect of terrain on illumination, usually with a digital elevation model, so that the product approximates what a flat surface would have returned.[^1][^2]

Training material from ESA lists topographic normalisation under two main approaches, a numeric normalisation such as the cosine correction and a BRDF-based correction, and names illumination-corrected surface reflectance as the typical analysis-ready target.[^1] The CEOS Analysis Ready Data specification lists terrain illumination correction as a goal requirement, with per-pixel coefficients, and it does not make it a threshold requirement.[^2]

A review explains why the step is separate: most atmospheric correction routines assume a horizontal Lambertian surface, and the scaled result converts to surface reflectance once topography is known from a digital elevation model.[^3] Errors in that elevation model carry through, because a strong terrain correction may be applied in shaded areas, which the Sentinel-2 documentation links to bluish colours and inaccurate surface reflectance.[^4]

Retained sources use the names topographic normalisation and terrain illumination correction without stating that they are identical, and they do not rank the correction methods or give accuracy figures.

[^1]: ESA EO4Society, “Optical remote sensing and atmospheric correction”. https://eo4society.esa.int/wp-content/uploads/2021/04/2018Land_D1A8_Bunting_Optical_Intro_LTC.pdf
[^2]: Committee on Earth Observation Satellites, “CEOS-ARD Product Family Specification: Surface Reflectance, version 5.0.2”. https://ceos.org/ard/files/PFS/SR/v5.0.2/CEOS-ARD-PFS-SR-v5.0.2.pdf
[^3]: SciELO México, “Atmospheric Correction for Remote Sensing Imagery”. https://www.scielo.org.mx/scielo.php?pid=S0016-71692026000202187&script=sci_arttext
[^4]: Copernicus SentiWiki, “S2 Products”. https://sentiwiki.copernicus.eu/web/s2-products

