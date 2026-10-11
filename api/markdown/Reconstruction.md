Reconstruction is the analysis service that estimates an image or a set of data values from other measurements when the quantity of interest was not recorded directly.[^1][^2]

SWEET declares Reconstruct equivalent to Reconstruction and places it under DataAnalysisService, without definition text.[^3] In nuclear medicine tomography, a Journal of Imaging article states that the reconstruction task is an inverse problem in which the underlying cause must be estimated from the observed data.[^1] That is a nuclear medicine imaging sense, retained here only to show the inverse-problem meaning of the word.

In Earth observation the nearest use is filling cloud-induced gaps. A Scientific Reports study begins from the point that cloud cover creates frequent data gaps in Sentinel-2 imagery, and it tests gap-filling methods on simulated cloud scenarios.[^2] In that study the spatio-temporal category, especially clustering and linear regression, showed the highest accuracy and robustness across the gap scenarios, which is a result for one evaluation and not a ranking for all sensors.[^2]

A second class of the same name sits in the provenance module, as a subclass of ExperimentActivity.[^4] Retained sources do not establish that the two are the same concept, or a single agreed method.

[^1]: Journal of Imaging (MDPI) via Europe PMC, “Iterative Reconstruction with Dynamic ElasticNet Regularization for Nuclear Medicine Imaging”. https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12294920/fullTextXML
[^2]: Scientific Reports (Nature Portfolio) via Europe PMC, “Evaluating Sentinel-2 gap filling techniques for cloud removal and data reconstruction”. https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13004938/fullTextXML
[^3]: ESIP SWEET ontology (GitHub mirror), “reprDataServiceAnalysis.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceAnalysis.ttl
[^4]: ESIP SWEET ontology (GitHub mirror), “reprSciProvenance.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprSciProvenance.ttl

