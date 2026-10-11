Atmospheric drag is the aerodynamic force that opposes a spacecraft’s motion relative to the surrounding atmosphere.

In a simple model, drag acceleration is a_D = -1/2 rho (C_D A/m) |v_rel| v_rel. Here rho is local atmospheric mass density, C_D is the drag coefficient, A is projected area normal to the flow, m is spacecraft mass and v_rel is velocity relative to the atmosphere. Atmospheric co-rotation and winds mean this velocity need not equal inertial velocity.[^1271]

Thermospheric density varies with altitude, location, local time, solar activity and geomagnetic activity. Models such as NASA’s NRLMSISE-00 and ESA’s DTM2013-based service use different formulations and space-weather inputs. A forecast must therefore identify the model, input indices and forecast horizon; density cannot be treated as a fixed function of altitude alone.[^1266][^1267]

Drag also depends on attitude, shape, surface properties and the changing projected area and drag coefficient. A cannonball model assumes area does not change with orientation, while a geometry-based aerodynamic model can represent attitude-dependent area. Which approximation is suitable depends on the mission and prediction accuracy. An estimated drag scale can absorb both density and spacecraft-property errors, so tracking data alone do not uniquely identify either one.[^1268][^1271][^1272]

For low-Earth-orbit prediction, density and drag-property uncertainty can dominate orbit error. Carry those uncertainties into the propagated state and covariance, and distinguish measured past space weather from forecast future conditions. ESA’s GOCE operations show the practical consequence at very low altitude: interruptions to drag-free control caused rapid decay and could complicate reacquisition at the next ground-station pass.[^1268][^1269][^1273]

[^1266]: [NASA CCMC, NRLMSISE-00](https://ccmc.gsfc.nasa.gov/models/NRLMSIS~00/).
[^1267]: [ESA Space Weather, Atmospheric Estimates for Drag Calculations](https://swe.ssa.esa.int/en/sst_atm).
[^1268]: [ESA Space Debris Conference, Atmospheric density estimation for orbit determination](https://conference.sdo.esoc.esa.int/proceedings/sdc8/paper/25).
[^1269]: [NASA, Spacecraft Conjunction Assessment and Collision Avoidance Best Practices Handbook](https://www.nasa.gov/wp-content/uploads/2018/01/oce_51-nasa_spacecraft_conjunction_assessment_and_collision_avoidance_best_practices_handbook.pdf).
[^1271]: [NASA/ILRS, Atmospheric density from the ANDE mission](https://ilrs.gsfc.nasa.gov/docs/ANDE_AAS_07-265.pdf).
[^1272]: [GMAT, Spacecraft Ballistic/Mass Properties](https://documentation.help/GMAT/SpacecraftBallisticMass.html).
[^1273]: [ESA, GOCE operations](https://www.esa.int/Enabling_Support/Operations/GOCE_operations).

