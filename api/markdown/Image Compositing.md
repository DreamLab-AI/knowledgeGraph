Image compositing is the per-pixel combination or selection of observations from a gridded satellite time series into one representative image, used to reduce cloud and aerosol contamination.[^1]

USGS's algorithm document for Global Web Enabled Landsat Data says compositing procedures run independently on each pixel and offer a practical way to fill missing values and reduce data volume.[^1] It traces the method to AVHRR time series, where it produced representative n-day data sets, and lists selection criteria such as maximum NDVI, maximum brightness temperature and minimum scan angle.[^1] That product applies compositing to top-of-atmosphere reflectance, before atmospheric correction.[^1]

Compositing works along the time axis, whereas mosaicking joins scenes side by side, and the vocabulary overlaps. ESA's SNAP Mosaic operator, for example, describes its output as a single composite product built from overlapping products.[^2] NASA describes Level 3 products as variables mapped on a uniform space-time grid, usually with some completeness and consistency, but its page does not name compositing.[^3]

Retained sources do not establish a single standard selection rule, a comparison of criteria, or a processing level that all composites share. One product's algorithm document is the only compositing specification opened, so its criteria describe that product and not the term in general.[^1]

[^1]: USGS LP DAAC, “Algorithm Theoretical Basis Document, Global Web Enabled Landsat Data (GWELD) Products”. https://lpdaac.usgs.gov/documents/2085/GWELD_ATBD_V32.pdf
[^2]: ESA STEP, “Mosaic Operator”. https://step.esa.int/main/wp-content/help/versions/9.0.0/snap-toolboxes/org.esa.s1tbx.s1tbx.op.sar.processing.ui/operators/MosaicOp.html
[^3]: NASA Earthdata, “Data Processing Levels”. https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/data-processing-levels

