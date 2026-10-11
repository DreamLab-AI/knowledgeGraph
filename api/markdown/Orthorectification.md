Orthorectification is a process that corrects geometric distortion in remotely sensed or aerial imagery, including that caused by terrain relief, to produce a map-accurate orthoimage.[^1][^2]

ESA’s SNAP documentation describes orthorectified images as corrected for acquisition conditions such as viewing geometry, platform attitude and Earth rotation, and for relief effects described as parallax.[^3] A university course text describes the relief effect on aerial photographs as relief displacement, which depends on terrain elevation and on distance from the principal point.[^2]

Correction requires a model of the terrain. Esri documentation lists known sensor positions, attitudes and a calibrated sensor model together with a digital terrain model as inputs, and states that the accuracy of the orthoimage depends on triangulation, off-nadir angle, source resolution and elevation-model accuracy.[^1] SNAP notes that geolocation otherwise rests on the intersection of the viewing direction with the WGS-84 ellipsoid, which is why a terrain model changes the position.[^3]

These sources are software documentation and teaching material, not a standard, so they do not fix a single algorithm. They also do not establish which vertical reference an elevation model should use; the distinction between geoid-related and ellipsoidal heights is covered by the OGC standard.[^4]

[^1]: Esri, “What is photogrammetry?”, ArcGIS Pro documentation. https://doc.esri.com/en/arcgis-pro/latest/help/data/imagery/introduction-to-ortho-mapping.html
[^2]: Penn State University, “GEOG 160: 7.8 Orthoimagery”. https://courses.ems.psu.edu/geog160/node/1963
[^3]: ESA SNAP, “Orthorectification Algorithm”, help version 9.0.0. https://step.esa.int/main/wp-content/help/versions/9.0.0/snap/org.esa.snap.snap.help/desktop/OrthorectificationAlgo.html
[^4]: Open Geospatial Consortium, *Abstract Specification Topic 2: Referencing by coordinates*, document 18-005r5. https://docs.ogc.org/as/18-005r5/18-005r5.html

