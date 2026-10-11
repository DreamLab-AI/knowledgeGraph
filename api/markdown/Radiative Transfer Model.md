A radiative transfer model is a numerical model of how radiation propagates through the atmosphere and interacts with the surface, used in Earth observation to relate the signal at a sensor to the reflectance of the ground.[^1][^2]

The 6S code simulates the effect of the atmosphere on radiation in the spectral range 0.25-4.00µm and accounts for combined surface-atmosphere effects, computing top-of-atmosphere reflectance from inputs for viewing and illumination geometry, gaseous and aerosol models, sensor and band information, and surface reflectance.[^1] It can also be run in an atmospheric correction mode, which returns the bottom-of-atmosphere reflectance for a given at-sensor measurement.[^1] NASA states that the Land Surface Reflectance Code used for Harmonized Landsat Sentinel-2 is based on the 6SV radiative transfer model.[^2]

A radiative transfer model is therefore the physics inside atmospheric correction and not the correction itself. In correction mode Nunes and Marçal report that no directional reflectance is considered beyond a Lambertian target and that the surface is assumed homogeneous, so a corrected value carries those assumptions.[^1]

Only 6S and 6SV appear in the retained sources. They do not establish how other models such as MODTRAN compare, and they give no accuracy figure for any model that this page relies on.

[^1]: Nunes and Marçal, “Atmospheric correction of high resolution multi-spectral satellite images using a simplified method based on the 6S code”. https://www.fc.up.pt/pessoas/andre.marcal/papers/RSPSoc_20047.pdf
[^2]: NASA HLS, “Atmospheric Correction”. https://hls.gsfc.nasa.gov/atmospheric-correction/

