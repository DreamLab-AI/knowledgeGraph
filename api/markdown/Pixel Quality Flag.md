A pixel quality flag is a per-pixel indicator, often packed into a bit field, that records the condition of a pixel or the reliability of its value.[^1][^2]

The Harmonized Landsat Sentinel-2 guide describes per-pixel masking of cloud, cloud shadow, snow, water and aerosol optical thickness levels, stored in a bit-packed quality assessment band. Because several Fmask labels can apply to one output pixel, a single pixel may have multiple bits set in its QA byte.[^1]

The MODIS surface reflectance guide separates two kinds of flag. Band quality datasets describe the quality of the atmospheric correction of each pixel, while the State QA dataset describes the state of the pixel itself and not the quality of any of the surface reflectance data.[^2]

A flag can therefore denote a pixel condition such as cloud, or the reliability of a retrieval, and the two are not interchangeable. The retained sources describe two products only; they do not establish a common bit layout across missions, and they give no accuracy figures for the flags.[^1][^2]

[^1]: NASA LP DAAC, “Harmonized Landsat And Sentinel-2 (HLS) Product User Guide”. https://lpdaac.usgs.gov/documents/1698/HLS_User_Guide_V2.pdf
[^2]: MODIS Land Surface Reflectance Science Computing Facility, “MODIS Surface Reflectance User’s Guide Collection 6”. https://modis-land.gsfc.nasa.gov/pdf/MOD09_UserGuide_v1.4.pdf

