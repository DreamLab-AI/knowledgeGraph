Spectral unmixing is the estimation, from the spectrum of a mixed pixel, of the spectral signatures of the materials present (endmembers) and of their relative contributions to that pixel (abundances) [^1] [^2].

A pixel is a mixture when it covers more than one pure material, which arises from limited spatial resolution or from strong mixing of materials [^2]. A mixing model describes analytically how the endmembers combine to form the measured spectrum, and unmixing amounts to inverting that formation process, so the abundances parametrise the model [^1].

Each endmember should ideally be the spectrum of a pure material in the scene, although what counts as pure depends on the task [^2]. The unmixing problem is naturally ill-posed and admits a wide range of admissible solutions, so results depend on the model and constraints chosen [^1].

NASA's processing-level description does not mention unmixing, so the retained sources do not assign it to a data level [^3]. They also do not establish an accuracy range or a preferred algorithm.

[^1]: arXiv (Dobigeon et al.), “Nonlinear Unmixing of Hyperspectral Images: Models and Algorithms”. https://arxiv.org/pdf/1304.1875
[^2]: arXiv (Gimenez Zapiola et al.), “Hyper-spectral Unmixing algorithms for remote compositional surface mapping: a review of the state of the art”. https://arxiv.org/pdf/2507.14260v1
[^3]: NASA Earthdata, “Data Processing Levels”. https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/data-processing-levels

