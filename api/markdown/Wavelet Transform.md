The wavelet transform is a signal-processing technique that represents a signal as a sum of scaled and translated copies of a localised oscillating basis function called a wavelet. Unlike the Fourier transform, which trades all time resolution for frequency resolution, the wavelet transform provides simultaneous time and frequency localisation through multiresolution analysis. It is widely used for compression, denoising and feature extraction in machine-learning pipelines.

### Overview

- The wavelet transform decomposes a signal across a hierarchy of scales: coarse scales capture slow trends while fine scales capture transient detail, each localised in time. This multiresolution view makes it well suited to non-stationary signals whose frequency content changes over time, where a single global spectrum would be misleading. The discrete wavelet transform implements this efficiently with a cascade of filters and downsampling, yielding sparse representations that are easy to compress, threshold for denoising, or feed as features to a learner.

### Mechanisms

- Mother wavelet that is scaled and translated to form the analysis basis.
- Multiresolution analysis decomposing the signal into approximation and detail coefficients across scales.
- Filter-bank implementation of the discrete wavelet transform using paired high- and low-pass filters with downsampling.
- Time-frequency localisation giving better transient resolution than the Fourier transform.
- Sparsity of the coefficients, exploited for compression and threshold-based denoising.

### Applications

- Image and signal compression, including the basis of the JPEG 2000 standard.
- Denoising of noisy measurements via coefficient thresholding.
- Feature extraction for classification of biomedical and vibration signals.
- Multiscale texture analysis in computer vision.

### Provenance

