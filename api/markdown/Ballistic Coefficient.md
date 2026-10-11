A ballistic coefficient is a parameter that combines an object’s aerodynamic drag properties with its mass for use in a drag model.

For spacecraft dynamics, one common convention is B = C_D A/m, with units of area per mass. Under that convention the drag acceleration is a_D = -1/2 rho B |v_rel| v_rel. The area is projected normal to the flow, and the relative velocity is measured against the atmosphere. NASA conjunction guidance and the ANDE density study use this convention.[^1269][^1271]

Because B does not identify the convention by itself, a NASA technical report instead defines B = C_D A/(2m), placing the factor of one-half inside the coefficient; its acceleration equation then omits that factor. These two B values differ by a factor of two. State the defining equation, units, reference area, mass convention and drag equation whenever a value is reported or exchanged.[^1270]

Attitude, projected area, drag coefficient, mass and surface conditions can change the effective coefficient. Orbit determination may estimate a fitted coefficient that absorbs density-model error as well as spacecraft-property error. Such an estimate is not automatically a physical measurement of C_D, area or mass.[^1269][^1271][^1272]

TLE BSTAR is a field in a specific mean-element data format. It should not be equated directly with a spacecraft’s physical C_D A/m without the associated propagation theory and reference assumptions. Preserve the distinction between a physical coefficient, an estimated parameter and a format-specific fitted term.[^1260][^1280]

[^1260]: [CCSDS, Orbit Data Messages, 502.0-B-3](https://ccsds.org/Pubs/502x0b3e1.pdf).
[^1269]: [NASA, Spacecraft Conjunction Assessment and Collision Avoidance Best Practices Handbook](https://www.nasa.gov/wp-content/uploads/2018/01/oce_51-nasa_spacecraft_conjunction_assessment_and_collision_avoidance_best_practices_handbook.pdf).
[^1270]: [NASA NTRS, Osculating-to-mean element conversion and ballistic coefficient](https://ntrs.nasa.gov/api/citations/19960035775/downloads/19960035775.pdf).
[^1271]: [NASA/ILRS, Atmospheric density from the ANDE mission](https://ilrs.gsfc.nasa.gov/docs/ANDE_AAS_07-265.pdf).
[^1272]: [GMAT, Spacecraft Ballistic/Mass Properties](https://documentation.help/GMAT/SpacecraftBallisticMass.html).
[^1280]: [CelesTrak, NORAD Two-Line Element Set Format](https://celestrak.org/NORAD/documentation/tle-fmt.php).

