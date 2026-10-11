Spectral synthesis, in the SWEET ontology, is a data analysis service that sits beside spectral analysis rather than beneath it [^1]. It is best read as the inverse of spectral analysis, rebuilding a signal from its spectral components.

In Fourier terms, analysis decomposes a signal into sinusoids, and the summation that reconstructs the signal from those sinusoids is called Fourier synthesis [^2]. SWEET places the class under the general analysis service and gives it no further definition or axioms, so the reading above is an inference from the name and from signal processing practice [^1] [^2].

NASA's processing levels use the word synthesised in a narrower sense, for Level 1C channels created from Level 1B data to describe the spectra [^3]. The retained sources do not establish whether SWEET intends that sense, and they give no Earth observation workflow for spectral synthesis.

[^1]: ESIP SWEET ontology (GitHub), “SWEET Representation Data Service Analysis (Turtle)”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceAnalysis.ttl
[^2]: Ludwig-Maximilians-Universität München (Harrington), “Chapter 8. Spectral analysis”. https://www.phonetik.uni-muenchen.de/~jmh/research/pasc010808/old/ch8n2.pdf
[^3]: NASA Earthdata, “Data Processing Levels”. https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/data-processing-levels

