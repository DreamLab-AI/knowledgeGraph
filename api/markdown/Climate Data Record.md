A climate data record is a time series designed to support analysis of climate variability and change. Length matters because climate signals sit within much larger weather fluctuations, but a long archive is not sufficient on its own. The record also needs stable calibration, known provenance, consistent processing, documented uncertainty and enough continuity to distinguish a physical trend from changes in instruments or methods.

## Climate-quality requirements

The Global Climate Observing System sets principles for sustained observations of Essential Climate Variables. Measurements should be traceable to recognised standards, with quantified uncertainty and regular calibration. Changes in instruments or observing systems need assessment and, where possible, an overlap period that reveals inter-instrument bias. Metadata must preserve the history of instruments, sites, algorithms, errors and corrections. GCOS also calls for routine checks of quality and homogeneity, long-term preservation, open access and reprocessing as methods improve.[^1]

For satellite records, calibration converts sensor response into a physical measurement, and retrieval algorithms derive the environmental variable. Atmospheric correction, retrieval, gridding and interpolation can each add uncertainty. ESA's Climate Change Initiative therefore expects transparent documentation, comparison with independent data, per-pixel quality flags and traceable uncertainty estimates. It distinguishes unknown measurement error from uncertainty, which describes the quantified doubt around a result.[^6]

These requirements explain why a rapid or provisional feed can be useful without yet being a consolidated climate record. Reprocessing an entire series with one improved method can revise earlier values, but it also reduces artificial discontinuities between years or sensors.

## UK records and stewardship

HadCRUT5 blends land-surface air temperature and sea-surface temperature from January 1850 onwards on a 5-degree grid. The Met Office publishes a non-infilled form, which leaves grid cells without observations empty, and a statistical reconstruction for more complete global coverage. Both come as 200-member ensembles. These sample uncertainty from measurement practice, station homogenisation and urbanisation; the reconstructed form also includes sampling and reconstruction uncertainty.[^2] The two forms should be chosen according to the analysis rather than treated as interchangeable maps.

The Centre for Environmental Data Analysis provides long-term UK stewardship for more than 20 PB of atmospheric and Earth-observation holdings, including Met Office, NCEO, ESA Climate Change Initiative and satellite collections.[^3] Archive infrastructure preserves and serves a record, while the dataset's own catalogue entry establishes its version, lineage, quality controls and fitness for use.

HadUK-Grid shows the distinction between timeliness and consolidation. Its provisional gridded observations are produced monthly from near-real-time stations for routine monitoring. They use fewer stations than the annual release, have only basic checks, omit some variables and can be revised. CEDA explicitly describes the feed as a best-efforts resource rather than an operational service.[^4]

MIDAS Open daily temperature version 202607 provides a contrasting archived release. It is completed and citable, covers 1853-2025, supersedes the previous version and includes a change log and quality flags. Calibration and changes in measurement practice are documented in its user guide. The open dataset represents about 95% of the observations in the fuller restricted collection, and its catalogue identifies commissioning-trial records that users should omit.[^5]

## Latency and revision

Climate quality commonly adds latency. Copernicus extends its satellite greenhouse-gas climate records once a year after additional processing, while CAMS products cover the intervening near-real-time period. When Copernicus reprocessed the full satellite ensemble, its consolidated estimate of mean methane concentration for 2023 changed from the earlier preliminary value of 1902 ppb to 1894 ppb.[^7] Such a revision is part of maintaining a consistent record. Published analysis should name the dataset, version or release date and should not combine preliminary and consolidated absolute values without reconciliation.

## References

[^1]: Global Climate Observing System, [About Essential Climate Variables](https://gcos.wmo.int/site/global-climate-observing-system-gcos/essential-climate-variables/about-essential-climate-variables).
[^2]: Met Office Hadley Centre, [HadCRUT5](https://hadleyserver.metoffice.gov.uk/hadcrut5/).
[^3]: Centre for Environmental Data Analysis, [The CEDA Archive](https://archive.ceda.ac.uk/).
[^4]: Met Office and CEDA, [HadUK-Grid Gridded Climate Observations: latest provisional data](https://catalogue.ceda.ac.uk/uuid/4507b91bf5094c82b43f2f546cc224e0/).
[^5]: Met Office and CEDA, [MIDAS Open: UK daily temperature data, v202607](https://catalogue.ceda.ac.uk/uuid/1854bb17ec454841b04e243a1352f25a/).
[^6]: ESA Climate Change Initiative, [How CCI ECVs are generated](https://climate.esa.int/en/about-us-new/climate-change-initiative/essential-climate-variables/how-cci-ecvs-are-generated/).
[^7]: Copernicus Climate Change Service, [About the data and methods](https://climate.copernicus.eu/about-data-and-methods).

