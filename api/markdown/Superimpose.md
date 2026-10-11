Superimpose is a SWEET class for drawing one data layer over another so that both stay legible, and the ontology files it as a kind of visualisation rather than as a data-processing step.[^1][^2]

SWEET gives the class a label and a visualisation parent class but no definition text, and it lists Overlay as a separate sibling under the same parent.[^1] Retained sources do not establish how superimposition differs from overlay in SWEET, and this page does not claim a difference.

Desktop GIS documentation shows the working behaviour. In QGIS, two layers drawn at 50% opacity leave the underlying features visible but semi-masked by the layer on top.[^2] A blend mode on a group flattens its child layers first, with upper ones obscuring lower ones, and the result is then blended with the layers beneath the group.[^2]

Both behaviours describe how pixels are shown, so superimposition is treated here as a display operation on layers that already share a coordinate frame. Retained sources do not say whether it ever alters stored values, and they give no accuracy or registration requirement.

[^1]: ESIP Federation, “SWEET ontology, representation data service analysis module”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceAnalysis.ttl
[^2]: QGIS Project, “QGIS User Manual, General Tools”. https://docs.qgis.org/latest/en/docs/user_manual/introduction/general_tools.html

