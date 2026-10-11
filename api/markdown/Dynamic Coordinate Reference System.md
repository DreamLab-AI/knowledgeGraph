A dynamic coordinate reference system is a coordinate reference system that is based on a dynamic reference frame, so that coordinates of points on or near the Earth's crust may change with time.[^1]

The OGC specification says such changes usually arise from crustal deformation, giving tectonic motion and glacial isostatic adjustment as examples. The definition of the coordinate reference system itself does not change with time. What varies is the coordinate values of points, which is why a dataset referenced to a dynamic system should record the epoch of its coordinates.[^1]

A frame can be realised with parameters stated at a particular epoch. ITRF2020, a realisation of the International Terrestrial Reference System, sets its translation and rotation conditions at an epoch. The ITRF page does not itself use the OGC term, so this page does not classify any named frame beyond what the specification states.[^2]

Regional or national frames are sometimes fixed to a tectonic plate instead, so that coordinates of stable locations stay constant. The specification notes that such a frame coincides with a global frame only at its chosen epoch and that the relationship then changes slowly.[^1]

[^1]: Open Geospatial Consortium, *Topic 2: Referencing by coordinates*, Abstract Specification 18-005r5. https://docs.ogc.org/as/18-005r5/18-005r5.html
[^2]: IERS ITRS Center, “ITRF2020”. https://itrf.ign.fr/en/solutions/ITRF2020

