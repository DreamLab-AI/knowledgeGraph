Reconstructed data state is the SWEET data-processing state of data that have had some reconstruction process in their history.[^1]

In the SWEET state module the class Reconstructed is a subclass of DataState restricted through hadProcess to sorepsp:Reconstruction, which the provenance module places under ExperimentActivity.[^1][^2] The analysis module holds a different class, Reconstruct, equivalent to Reconstruction and placed under DataAnalysisService.[^3] The state therefore points at the provenance class, and the retained files do not say whether the two are one concept.

Reconstruction appears in the sources in two senses. A Journal of Imaging article describes tomographic reconstruction as an inverse problem of estimating a cause from observed data, and a Scientific Reports study evaluates methods for restoring cloud-induced gaps in Sentinel-2 imagery.[^4][^5] In both, values in the product are estimates produced by a method and not direct measurements.

Retained sources do not establish how a reconstructed state is flagged in product metadata, what uncertainty it implies, or how it maps to the NASA processing levels.

[^1]: ESIP SWEET ontology (GitHub mirror), “stateDataProcessing.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/stateDataProcessing.ttl
[^2]: ESIP SWEET ontology (GitHub mirror), “reprSciProvenance.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprSciProvenance.ttl
[^3]: ESIP SWEET ontology (GitHub mirror), “reprDataServiceAnalysis.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceAnalysis.ttl
[^4]: Journal of Imaging (MDPI) via Europe PMC, “Iterative Reconstruction with Dynamic ElasticNet Regularization for Nuclear Medicine Imaging”. https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12294920/fullTextXML
[^5]: Scientific Reports (Nature Portfolio) via Europe PMC, “Evaluating Sentinel-2 gap filling techniques for cloud removal and data reconstruction”. https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13004938/fullTextXML

