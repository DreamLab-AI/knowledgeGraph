Crop monitoring uses repeated observations to identify crops, follow their development and detect changes within a growing season. Satellite instruments extend coverage beyond what field visits can provide, but they do not read a crop label directly. A usable product combines sensor measurements with parcel boundaries, field declarations or inspections, seasonal features and a classification or retrieval model.

## From sensor measurements to crop information

Optical sensors record reflected sunlight in several spectral bands. Changes in colour and infrared response follow canopy emergence, growth and senescence, allowing a time series to help distinguish crops with different calendars. Sentinel-2 supplies 13 bands, vegetation mapping at 10-20 m and a nominal five-day revisit at the equator.[^1] Revisit describes an opportunity to acquire an image. Cloud and shadow can still remove the observations needed at a particular growth stage.

Synthetic-aperture radar supplies a complementary measurement of surface structure and moisture through cloud and darkness. Its backscatter is influenced by canopy geometry, water content, soil and viewing conditions, so it is not a direct measurement of crop health or yield. Combining radar and optical time series can reduce weather-related gaps. A 2025 peer-reviewed Belgian study used Sentinel-1 features and earlier Sentinel-2-derived Green Area Index values to estimate missing canopy measurements. Unseen-year validation across 228 maize parcels produced an R² of 0.88 and RMSE of 0.71.[^2] The result applies to that regional, single-crop study over 2018-2021; it establishes a research method rather than an operational UK accuracy.

## UK products and operational use

The Rural Payments Agency's Crop Map of England (CROME) is an annual production dataset. Its 2025 record describes about 32 million hexagonal cells classified into more than 15 crop types, grassland and non-agricultural covers. It records supervised Random Forest classification, ground observations for training and independent ground points for validation.[^3] The catalogue description names Sentinel-1 time series, while its lineage also names multispectral imagery and Planet Fusion. The exact 2025 sensor recipe should therefore be taken from the edition's specification rather than inferred from either short field alone.

Defra's 2023 Earth Observation Centre of Excellence roadmap reports that CROME supported agricultural payment checks, reduced rapid field visits and follow-ups, and yielded annual savings. It calls the Crop Map of England an operational agricultural system and says it was being adapted for newer agri-environment schemes.[^4] The roadmap's classification figure is “up to 95%”. That qualified, agency-reported figure should not be assigned to every class or automatically carried forward to the 2025 edition.

UKCEH Land Cover Plus: Crops is a separate annual Great Britain product built on a field-parcel framework. UKCEH lists maps from partial 2015 coverage through 2024, normally released each autumn. The method uses Sentinel-1 radar and, from 2016, Sentinel-2 optical observations; its standard specification assigns crop information to agricultural parcels larger than 2 ha.[^5] Smaller fields, narrow strips and mixed parcels therefore need separate treatment.

## Validation and limits

Validation must be tied to an edition, reference sample and metric. UKCEH intersected its 2015 and 2016 maps with agricultural-payment records, excluding ambiguous boundary matches and parcels registered with several crops. It reported 95% overall correct classification for 2015 and 87% for 2016, while kappa was about 0.82 in both years.[^6] The samples differed in coverage and class balance, and the common grass class affected the headline percentage. Per-class user and producer accuracy are more informative than overall accuracy when a decision concerns one crop.

Pixel size also matters. A pixel on a field boundary can mix crop, hedge, track and neighbouring land. ESA's research on small Hungarian parcels reports that 8% of claims could not be monitored with Sentinel-2 and cites an operational lower parcel limit of 800 m². The project tests sub-pixel methods against farmer claims and on-site checks.[^7] Its status is research and development, and the Hungarian limit is not a rule for UK products.

A crop-monitoring output should therefore state its crop year, mapping unit, sensor dates, cloud treatment, model version and validation sample. Classification confidence describes how the model separated its available classes. It does not prove crop condition, management practice or yield without further measurements and a model designed for that quantity.

## References

[^1]: European Space Agency, [Copernicus Land services](https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Land_services).
[^2]: European Space Agency Science Hub, [AI for Near Real-Time Crop Monitoring—A New Method](https://sciencehub.esa.int/2025/11/27/ai-for-near-real-time-crop-monitoring-a-new-method/).
[^3]: Rural Payments Agency, [Crop Map of England (CROME) 2025](https://environment.data.gov.uk/dataset/04dc895b-e25d-485d-9b0c-d912a0259da8).
[^4]: Department for Environment, Food & Rural Affairs, [Roadmap for the Defra Earth Observation Centre of Excellence 2023 to 2028](https://www.gov.uk/government/publications/defra-earth-observation-centre-of-excellence-roadmap-2023-to-2028/roadmap-for-the-defra-earth-observation-centre-of-excellence-2023-to-2028-accessible-version).
[^5]: UK Centre for Ecology & Hydrology, [Land Cover Plus: Crops](https://www.ceh.ac.uk/data/ceh-land-cover-plus-crops-2015).
[^6]: UK Centre for Ecology & Hydrology, [Land Cover Plus Crop Map: Quality Assurance](https://www.ceh.ac.uk/ceh-land-cover-plus-crop-map-quality-assurance).
[^7]: European Space Agency, [Sentinel-2 Based Crop Class Monitoring of Small and Narrow Parcels](https://eo4society.esa.int/projects/sentinel-2-based-crop-class-monitoring-of-small-and-narrow-parcels-based-on-modelling-pixel-composition/).

