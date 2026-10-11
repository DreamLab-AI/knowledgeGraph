Pointing accuracy describes how closely a spacecraft axis or payload line of sight meets its required direction or target under a declared metric. A useful value states what is being compared, the reference frame and target, the operational interval, axes or boresight, statistic and confidence. An angular number labelled only `accuracy` cannot distinguish knowledge, control or achieved end-to-end performance.[^1][^2]

## Knowledge, control and achieved performance

ECSS separates actual, estimated and target outputs. Absolute knowledge error compares the actual output with its estimate. Absolute pointing error or performance compares the target with the achieved output and therefore includes estimation, guidance, control, alignment and disturbance contributions.[^1][^2] A star tracker's knowledge specification cannot be substituted for spacecraft performance, and bus performance cannot be substituted for instrument line-of-sight accuracy.[^1][^2]

Absolute and relative errors answer different questions. Absolute error is referred to a target or frame. Relative knowledge or pointing error concerns change between states or over a specified interval, so correlation and time separation matter.[^1][^2][^4] [[Pointing Stability]] addresses variation over a defined interval or frequency band and should remain separate from a fixed offset.[^2][^3]

## Requirement definition

A pointing requirement should identify the axis, boresight or image-plane quantity; operational mode and target; evaluation start, duration and sampling; error index such as per-axis, radial half-cone, RMS or percentile; probability or confidence; and whether the interpretation is over time, an ensemble of cases or both.[^1][^2][^3] Values derived under different geometries or confidence rules are not directly comparable.[^1][^2]

Payload and data-product needs normally determine the required angular performance. For an imager, angular displacement interacts with focal length, detector sampling, exposure time, scanning and scene geometry to produce position error or smear.[^4][^5] Earth-observation geolocation also depends on orbit knowledge, instrument alignment, atmosphere and terrain data.[^9] Pointing accuracy is therefore one contribution to product accuracy, not a synonym for it.[^4][^5][^9]

## Error budget and uncertainty

An end-to-end budget can contain sensor noise and bias, estimator error, timing, frame transformations, thermoelastic alignment change, assembly tolerances, structural motion, quantisation, actuator disturbances and control residuals.[^1][^2][^3] Terms can be correlated or frequency-dependent. Root-sum-square combination is appropriate only where the assumed statistics and independence support it; deterministic biases and bounded worst cases need their own treatment.[^3]

Confidence labels must remain attached to their geometry and population. One sigma, three sigma, a 90th percentile, worst-case and circular error at 90% probability are different statements. Converting between them requires an explicit distribution and dimensional model.[^1][^2] A CE90 geolocation value must not be silently converted into a one-sigma angular pointing value.[^1][^2][^8]

## Verification and calibration

Verification can combine error-budget analysis, time- and frequency-domain simulation, sensor and actuator tests, optical alignment measurement, integrated hardware tests, thermal and disturbance tests, and on-orbit calibration.[^1][^2][^5] A requirement, prediction, qualification result and flight measurement should be labelled separately. The reported result should preserve the input data, estimator and filter settings, excluded intervals and confidence calculation.[^1][^2][^5]

Webb commissioning illustrates the calibration chain. Transformations among the attitude-control system, fine-guidance sensor and science focal planes had to be calibrated before science pointing could be interpreted, and structural changes continue to be monitored.[^6] The case shows why an end-to-end optical measurement can reveal alignment behaviour that a bus-attitude estimate alone does not contain.[^6]

Euclid exposed a different verification problem: energetic particles caused false signals in its fine-guidance sensor during commissioning. ESA reports that the software change was first tested with an electrical model and simulator, then exercised in orbit for ten days.[^7] This is dated evidence of a diagnosed fault and reported recovery, rather than a claim that later pointing performance is free of all anomalies.[^7]

## Bounded UK example

SSTL's 2025 Precision platform data sheet specifies absolute pointing error of 0.03° at one sigma and nadir geolocation pointing knowledge of 45 m CE90, with all specifications tied to a reference 500 km Sun-synchronous orbit.[^8] It also lists ±45° off-pointing and a 60° slew in 60 seconds. These are manufacturer specifications for an offered platform, not independent flight measurements.[^8]

The SSTL angular and geolocation figures describe different quantities and confidence conventions. They should be retained exactly as published rather than combined or converted. A mission using the platform would still need its own orbit, terrain, payload-alignment, observation-mode and acceptance evidence.[^8][^9]

## Reporting

A defensible result records the target and frames, mode, observation interval, axes and geometry, calibration state, error contributors, statistic, probability or confidence, and whether the value is required, predicted, measured on the ground or achieved in flight.[^1][^2][^4] This context permits a valid comparison and prevents precise-looking figures from being applied outside their test conditions.[^1][^2]

## References

[^1]: European Cooperation for Space Standardization, [ECSS-E-ST-60-30C: Satellite attitude and orbit control system requirements](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-60-30C30August2013.pdf), 30 August 2013.
[^2]: European Cooperation for Space Standardization, [ECSS-E-ST-60-10C: Control performance](https://ecss.nl/wp-content/uploads/2008/11/ECSS-E-ST-60-10C(15November2008).pdf), 15 November 2008.
[^3]: European Cooperation for Space Standardization, [ECSS-E-HB-60-10A: Control performance guidelines](https://ecss.nl/wp-content/uploads/handbooks/ecss-e-hb/ECSS-E-HB-60-10A14Dec2010.pdf), 14 December 2010.
[^4]: NASA Jet Propulsion Laboratory, [Instrument Pointing Capabilities and Pointing Requirement Definitions](https://ntrs.nasa.gov/citations/20120000672).
[^5]: NASA Engineering and Safety Center, [GN&C workshop on image motion, pointing analysis and requirements](https://ntrs.nasa.gov/citations/20210019262), 15 September 2021.
[^6]: McElwain et al., [James Webb Space Telescope optical performance](https://ntrs.nasa.gov/api/citations/20230010809/downloads/9_McElwain_2023_PASP_135_058001.pdf), 2023.
[^7]: European Space Agency, [Guide stars found as Euclid's navigation fine-tuned](https://www.esa.int/Science_Exploration/Space_Science/Euclid/Guide_stars_found_as_Euclid_s_navigation_fine_tuned?app=true), 5 October 2023.
[^8]: Surrey Satellite Technology Ltd, [SSTL Precision data sheet 2025](https://www.sstl.co.uk/getmedia/b40f8df8-5b74-470c-8de5-52adf5b2c1cc/SSTL-Precision-Data-Sheet-2025_2pages.pdf).
[^9]: European Space Agency, [Earth Observation Pointing Library user manual](https://opensf.esa.int/Repo/PUBLIC/DOCUMENTATION/CFI/EOCFI/BRANCH_4X/latest/CPP-Docs/SUM/PointingSUM/index.html).

