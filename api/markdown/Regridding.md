Regridding is the process of changing the grid that underlies gridded data values, also called remapping or interpolation, while preserving the qualities of the original data.[^1][^2]

Earth system modelling software splits the operation into two stages: first an interpolation weight matrix is generated to describe how points in the source grid contribute to points in the destination grid, then source values are multiplied by that matrix to give destination values.[^1] Climate-analysis guidance adds that quantitative evaluation of data held on different grids requires regridding to a common grid.[^2]

No single method suits every field. Bilinear interpolation is easy to apply when both grids are rectilinear but may be inappropriate for discontinuous variables, while first-order conservative regridding is designed to preserve the integral of the field from source to destination.[^2][^1] Nearest-neighbour methods map each point to the nearest corresponding point on the other grid, and the guidance is that the choice should follow the intended use of the data and the structure of the original variable.[^1][^2]

Both retained sources come from the Earth system modelling and climate-analysis communities. They do not establish how a space agency specifies regridding when instrument measurements are mapped onto a uniform grid, a step that NASA places at processing Level 3, described there as variables mapped on uniform space-time grid scales.[^3]

[^1]: Earth System Modeling Framework, “Overview, ESMPy documentation”. https://earthsystemmodeling.org/esmpy_doc/release/latest/html/intro.html
[^2]: NCAR Climate Data Guide, “Regridding Overview”. https://climatedataguide.ucar.edu/climate-tools/regridding-overview
[^3]: NASA Earthdata, “Data Processing Levels”. https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/data-processing-levels

