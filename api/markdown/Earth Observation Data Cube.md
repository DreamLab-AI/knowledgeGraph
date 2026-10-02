An Earth observation data cube presents variables across spatial, temporal or thematic dimensions and supplies ways to discover, select and process them. The cube is a logical model and service boundary. It does not require a literal three-dimensional array or prescribe whether the underlying bytes live in files, object storage or a database.

OGC and GEO discussions describe a geospatial data cube through its cells and variables, its structural metadata and the functions available for discovery, access, visualisation and analysis.[^1] An operational cube can expose raw observations, analysis-ready data or derived information. Being accessible through a cube does not itself make the content analysis ready; the processing level and quality controls must be stated.

## Implementations and interoperability

Open Data Cube is one implementation. Its core combines Python libraries with a PostgreSQL index for geospatial raster data.[^2] Other platforms make different choices about data models, temporal semantics, interfaces and execution. Those differences can prevent the same workflow from moving cleanly between services even when both are called data cubes.

The OGC openEO Community Standard addresses part of this problem with a common API and defined processes for cloud-based Earth observation analysis.[^3] A process description can be sent to more than one provider, reducing dependence on a single interface. Reproducibility still depends on the providers exposing equivalent datasets, versions, parameters and execution behaviour.

Provenance therefore belongs with cube processing. It should identify source assets, algorithms, software versions, parameters, processing facility and execution time. OGC's 2025 GeoDataCube provenance demonstrator tested machine-readable records using workflow and STAC metadata, but also found that consistent guidance for remote process chains and identifiers remained incomplete.[^4] The report is an engineering result, not an OGC standard.

## Scaling and UK infrastructure

Data cubes support large-area and long time-series analysis by taking computation to organised archives rather than repeatedly moving complete collections to each user. This changes the engineering problem rather than removing it. Systems must still index and chunk data, schedule compute, manage intermediate results and control storage and transfer costs.

JASMIN provides a UK example. The CEDA Archive's Earth observation holdings are directly accessible within JASMIN, while collaborative workspaces, batch processing and several storage tiers support data-intensive environmental science.[^5] Co-location reduces bulk transfer, but catalogue visibility is not the same as immediate online access. CEDA documentation notes that very large collections, including Sentinel data, may reside on tape and require restoration to disk before use.[^6]

A cube should therefore be evaluated by its variables, metadata, quality and provenance as well as its API. Storage layout, cache state, data rights and compute quotas determine whether a formally supported query is practical at the intended scale.

## References

[^1]: Open Geospatial Consortium and Group on Earth Observations, [Towards Data Cube Interoperability](https://www.ogc.org/initiatives/gdc/); formal publication as [OGC Discussion Paper 21-067](https://docs.ogc.org/dp/21-067.html), which is not an OGC standard.
[^2]: Open Data Cube, [Project overview](https://www.opendatacube.org/home).
[^3]: Open Geospatial Consortium, [openEO Community Standard](https://www.ogc.org/standards/openeo/).
[^4]: Open Geospatial Consortium, [Testbed 20 GeoDataCube Provenance Demonstration Report](https://docs.ogc.org/per/24-036.html), published 2025; this engineering report is not an OGC standard.
[^5]: JASMIN, [Services](https://www.jasmin.ac.uk/about/services/) and [accessing the CEDA Archive](https://help.jasmin.ac.uk/docs/long-term-archive-storage/ceda-archive/).
[^6]: Centre for Environmental Data Analysis, [Near-line archive](https://help.ceda.ac.uk/article/265-nla).

