Thermal balance is the accounting relationship between heat entering, generated within, stored by and rejected from a system. For a spacecraft, incoming terms include absorbed solar and planetary radiation and equipment dissipation; outgoing heat is mainly radiated to space. During a transient, the difference changes stored thermal energy and therefore temperature. At a stable steady state, net storage approaches zero.[^1]

Thermal balance also names a verification test. A spacecraft thermal-balance test places an instrument, subsystem or vehicle in vacuum under controlled thermal boundaries, waits for defined stabilisation and measures temperatures and powers. The data show whether the thermal-control design meets its limits and whether the analytical thermal and power models predict the article adequately.[^2]

## Test boundary and cases

Test planning starts from the model and verification needs. Boundary equipment can include temperature-controlled shrouds or plates, a solar simulator, conductive interfaces, simulated neighbouring hardware and heaters that reproduce internal dissipation. Sensors must cover critical components and both sides of uncertain heat paths. Electrical power, heater duty cycle and chamber conditions are recorded with temperature.

NASA's payload standard requires at least worst-case hot and cold predictions and project-defined stabilisation criteria. It states that balance data should demonstrate temperature compliance, check the analytical thermal and power models and support design-margin assessment.[^2] The precise environment, duration and margin remain mission-specific. NASA rules are evidence of engineering practice, not automatic ECSS requirements.

## Balance and cycling

Thermal balance and thermal-vacuum cycling have distinct primary objectives. Balance cases seek well-characterised boundaries and sufficiently stable temperatures for design verification and model correlation. Cycling repeatedly exposes hardware to hot and cold extremes to demonstrate function, survival and workmanship and to stimulate latent defects.[^2][^3] Both can occur in one chamber campaign, but cycling alone does not supply a steady correlation case.

ESA's YPSat-1 campaign combined the purposes. Steady phases examined MLI efficiency and internal conductance, while transient phases tested thermal inertia and a phase-change heat capacitor. Independently controlled heaters represented equipment dissipation because the protoflight spacecraft was inactive.[^4] The campaign is a useful method example, not a universal set of pass criteria.

## Model correlation

Correlation compares pre-test predictions with measured steady and transient response. Engineers may adjust uncertain physical parameters such as interface conductance, MLI effective emissivity, heat capacity or applied dissipation when test evidence supports the change.[^5] They should preserve the original prediction, each adjustment, residual statistics and acceptance rule. Tuning individual nodes without a physical cause can fit one case while degrading prediction elsewhere.

Boundary fidelity is decisive. A UCL-led PLATO electronics test was created after earlier cycling did not represent the unit's radiative cavity and conductive mounting well enough for successful correlation.[^5] The dedicated balance setup reproduced both couplings and instrumented them. This does not show that cycling is ineffective; it shows that a model cannot be judged against a test with the wrong heat paths.

NASA's four MMS observatories illustrate a programme-specific verification reduction. The first received a complete balance test and later near-identical spacecraft received smaller balance tests for comparison.[^6] Such similarity-based evidence needs an explicit rationale and configuration control before it can replace full testing.

## Uncertainty and limitations

A correlated model is not exact. Temperature-sensor calibration, chamber shroud properties, support fixtures, wiring looms, parasitic heat leaks, uncertain dissipation and gravity-sensitive fluid behaviour affect the comparison. JWST instrument testing used dedicated heat-flow meters with stated uncertainty; their measurements exposed a serious hardware issue that was then corrected.[^7] Quantified test uncertainty can therefore change the design as well as the model.

No ground test reproduces every attitude, season, degradation state, eclipse and operational sequence at once. ECSS consequently treats thermal analysis as a verification method throughout development, including cases that are too expensive or impractical to test.[^8] Final flight predictions should use the correlated model within its justified domain and retain residual model uncertainty and design margin.

## UK evidence

The UK Space Agency's 2017 facilities review described RAL Space thermal-balance testing with controlled plates allowed to stabilise around a test item while monitored temperatures were compared with its mathematical model.[^9] This is direct historical evidence of the UK method. Current facility status should be taken from current RAL and National Satellite Test Facility records rather than inferred from the 2017 review.

## References

[^1]: NASA Small Spacecraft Systems Virtual Institute, [Thermal Control](https://www.nasa.gov/smallsat-institute/sst-soa/thermal-control/).
[^2]: NASA, [NASA-STD-7002B with Change 1: Payload Test Requirements](https://standards.nasa.gov/sites/default/files/standards/NASA/B/1/NASA-STD-7002B-w-Change-1.pdf).
[^3]: NASA Goddard Space Flight Center, [GSFC-STD-7000B: General Environmental Verification Standard](https://standards.nasa.gov/sites/default/files/standards/GSFC/B/0/gsfc-std-7000b_signature_cycle_04_28_2021_fixed_links.pdf).
[^4]: European Space Agency, [YPSat-1 thermal-vacuum test campaign](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/ESA_Young_Professionals_Satellites/YPSat-1_successfully_completed_the_initial_thermal_vacuum_test_campaign).
[^5]: European Space Agency workshop, [Thermal balance test and model correlation of the PLATO front-end electronics unit](https://indico.esa.int/event/406/contributions/7174/).
[^6]: NASA, [Thermal Testing and Model Correlation of the Magnetospheric Multiscale Observatories](https://ntrs.nasa.gov/citations/20150018320).
[^7]: NASA, [JWST Integrated Science Instrument Module Thermal Vacuum Thermal Balance Test Campaign](https://ntrs.nasa.gov/citations/20160013540).
[^8]: European Cooperation for Space Standardization, [ECSS-E-HB-31-03A: Thermal analysis handbook](https://ecss.nl/home/ecss-e-hb-31-03a-15november2016/).
[^9]: UK Space Agency, [UK Space Facilities Review 2017](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/665552/UK_Space_Facilities_Review_December_2017.pdf).

