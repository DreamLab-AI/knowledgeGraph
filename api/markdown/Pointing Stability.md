Pointing stability describes how pointing changes during a stated interval or within a stated frequency band. It is a property of a time history and its measurement chain, so a stability value needs the line of sight or axis, interval, sample and filter treatment, statistic, confidence and operating condition.[^1][^2] It does not replace [[Pointing Accuracy]], which describes closeness to a target or reference.[^1][^2]

## Accuracy, stability, jitter and drift

ECSS guidance expresses pointing-stability error as the difference between pointing errors at two times separated by a declared increment. A constant offset can therefore harm absolute accuracy while cancelling from the stability difference.[^2] Conversely, zero-mean motion can leave little long-term bias while degrading an exposure or communications link.[^2][^3]

`Jitter` usually refers to faster line-of-sight fluctuations and `drift` to slower change, but neither term defines its own cut-off. The distinction depends on exposure length, observation window, sensor sample rate, estimator filtering, controller bandwidth and the science or communications response.[^2][^3] A value reported over milliseconds cannot be compared directly with one reported over an orbit without a common metric and bandwidth.[^2][^3]

## Time, frequency and image metrics

Time-domain measures include peak deviation, RMS, covariance, percentile and the change over a specified interval. Frequency-domain measures include amplitude or power spectral density across a declared band.[^2][^3] Image-forming missions may instead evaluate displacement, smear, jitter or the resulting optical transfer function. Each measure answers a different question and none can be converted into another without the signal, exposure and statistical assumptions.[^3]

A requirement should state whether confidence refers to the fraction of time, an ensemble of spacecraft states or both. It should also identify axes or radial geometry, the permitted intervals or frequencies, and any removal of bias or trend.[^1][^2] `Three sigma` is not self-defining unless the distribution and population are known.[^1][^2]

## Disturbance and control chain

Stability depends on disturbance sources and the paths by which they reach the payload. Reaction-wheel imbalance and bearing imperfections, mechanisms, coolers, thruster events, thermoelastic motion and flexible structural modes can all contribute. Sensor noise, sampling and estimator filters shape what the control loop sees, while control bandwidth and actuator dynamics shape its response.[^1][^2][^3]

A disturbance above the star-tracker or controller bandwidth may be small in filtered attitude telemetry yet remain visible to a payload. Sampling can also alias higher-frequency content. The reported result should therefore preserve sensor locations, sample rates, filters, structural transfer functions, operating speeds and payload measurement bandwidth.[^2][^3]

## Analysis and verification

Verification can combine disturbance inventories, structural finite-element models, control simulation, frequency-response analysis, hardware disturbance tests, integrated optical measurements and on-orbit telemetry.[^2][^3] Model correlation against physical tests matters because bearing forces, damping, mount stiffness and cable or thermal paths can differ from their pre-test assumptions.[^2][^3]

A 2023 peer-reviewed record in the University of Surrey repository models reaction-wheel ball-bearing microvibration and cross-correlates transient finite-element results with physical test data. It identifies line-of-sight oscillation from wheel imbalance and bearing imperfections.[^6] This is UK institutional research evidence, not a flight-jitter value or a claim about a particular UK spacecraft product.[^6]

Airbus UK led an ESA activity on flexible-spacecraft attitude control using high-fidelity simulation and a DLR laboratory rig with one-metre suspension wires. ESA records closure in 2021 and says no mission was planned; some modes remained uncontrollable but lightly damped.[^8] A separate Airbus UK activity tested star-tracker safe-mode behaviour in high-rate and radiation-degraded cases and closed in 2022 at TRL 4 functional verification.[^7] Both are ground-development evidence.[^7][^8]

## Operational evidence

Webb couples fine guidance with passive isolation, reaction-wheel and cooler isolation, and structural damping. A post-launch technical paper reports typical on-orbit line-of-sight jitter of about 1–2 milliarcseconds for that observatory and architecture.[^5] NASA's November 2024 monitoring update reports measured pointing stability six times better than its design requirement.[^4] These values should not be generalised to other reaction-wheel spacecraft or detached from Webb's observing conditions and isolation system.[^4][^5]

Operational verification should state whether motion came from guide-sensor estimates, payload imagery or another optical observable, and whether manoeuvres, guide-star losses or flagged intervals were excluded.[^3][^5] Required, predicted, ground-tested and achieved flight values belong in separate fields.[^3][^5]

## Reporting

A defensible stability result records the target or line of sight, coordinate axes, operational mode, time interval and frequency band, sample rate and filtering, detrending or bias treatment, statistic and confidence interpretation, disturbance state and measurement location.[^1][^2][^3] These details expose whether a result measures slow drift, control residual, structural jitter or image motion and make comparisons technically meaningful.[^1][^2][^3]

## References

[^1]: European Cooperation for Space Standardization, [ECSS-E-ST-60-10C: Control performance](https://ecss.nl/wp-content/uploads/2008/11/ECSS-E-ST-60-10C(15November2008).pdf), 15 November 2008.
[^2]: European Cooperation for Space Standardization, [ECSS-E-HB-60-10A: Control performance guidelines](https://ecss.nl/wp-content/uploads/handbooks/ecss-e-hb/ECSS-E-HB-60-10A14Dec2010.pdf), 14 December 2010.
[^3]: NASA Engineering and Safety Center, [GN&C workshop on image motion, pointing analysis and requirements](https://ntrs.nasa.gov/citations/20210019262), 15 September 2021.
[^4]: NASA Science, [Monitoring Webb's Mirrors for Optimal Optics](https://science.nasa.gov/blogs/webb/2024/11/08/monitoring-webbs-mirrors-for-optimal-optics/), 8 November 2024.
[^5]: NASA, [Design, Verification, and On-Orbit Performance of the James Webb Space Telescope](https://ntrs.nasa.gov/api/citations/20230009106/downloads/Design%20of%20JWST%20Final%20in%20Publication.pdf), 2023.
[^6]: University of Surrey Open Research Repository, [Microvibration simulation of reaction-wheel ball bearings](https://openresearch.surrey.ac.uk/esploro/outputs/journalArticle/Microvibration-simulation-of-reaction-wheel-ball/99822132402346), 12 December 2023.
[^7]: European Space Agency, [Safeguarding Safe Mode with Star Trackers](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Shaping_the_Future/Safeguarding_Safe_Mode_with_Star_Trackers).
[^8]: European Space Agency, [Airbus UK flexible-spacecraft control activity](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Shaping_the_Future/Robust_Attitude_Guidance_and_Control_for_Flexible_Spacecraft).

