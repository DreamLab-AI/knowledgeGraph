A data product version is an identifier that distinguishes one release of a data product from another, for example releases produced with different processing algorithms or updated calibration parameters.[^1]

In NASA dataset metadata, the version field serves this purpose, and users are encouraged to use the latest version of a data product.[^1] That advice comes from one catalogue's guidance. A newer release is not automatically the right choice for every analysis, because comparability with earlier work may matter and the source does not discuss that trade-off.[^1]

SWEET places version beneath its iteration class, which reflects the idea of a product being produced repeatedly with changes.[^2] The ontology gives only that hierarchy, so it does not set numbering schemes, compatibility rules or how versions relate to a persistent identifier.[^2]

A version is not the same as a processing state or a processing level. A product at a given level may exist in several versions, and the sources reviewed do not describe how any particular centre numbers them.

[^1]: NASA Earthdata, “Earth Observation Data Basics”. https://www.earthdata.nasa.gov/learn/earth-observation-data-basics
[^2]: ESIP, SWEET ontology, reprDataProduct module (Turtle source). https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataProduct.ttl

