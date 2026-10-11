Spatiotemporal interpolation estimates a quantity at unsampled places and times from nearby observations, with time treated as an explicit dimension alongside space.[^1][^2]

Satellite observations can be non-contiguous and noisy, so interpolation is used to organise them onto a regular grid, to query a chosen location, to estimate data at unsampled times or locations and to map the underlying signal.[^1] A spatio-temporal approach, by contrast with a purely spatial one, models covariances among data as a function of time.[^1] Kriging is the method both retained research papers use, described as a best linear unbiased estimator that represents correlations among data with covariance functions.[^1]

For spatiotemporal kriging, Hurkmans and colleagues obtain a two-dimensional sample semi-variogram from a distance lag and a time lag.[^2] They report that it improves estimates in periods with data gaps because it can use data from adjacent epochs.[^2]

Gridded, interpolated maps are commonly named Level 3 data, and NASA describes Level 3 as variables mapped on a uniform space-time grid with some completeness and consistency.[^1][^3] That does not make every Level 3 product an interpolation. The retained sources cover trace-gas column and ice-sheet altimetry cases, do not establish one canonical method, and give no accuracy figure that transfers between them.

[^1]: Geoscientific Model Development (Copernicus), “Spatio-temporal approach to moving window block kriging of satellite data”. https://gmd.copernicus.org/articles/10/709/2017/gmd-10-709-2017.pdf
[^2]: NASA Technical Reports Server (Hurkmans et al.), “Spatiotemporal interpolation of elevation changes derived from satellite altimetry for Jakobshavn Isbrae, Greenland”. https://ntrs.nasa.gov/api/citations/20140008937/downloads/20140008937.pdf
[^3]: NASA Earthdata, “Data Processing Levels”. https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/data-processing-levels

