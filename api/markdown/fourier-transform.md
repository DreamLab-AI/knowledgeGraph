- ### Definition
  - The [[Fourier Transform]] decomposes a signal into its constituent sinusoidal frequency components, mapping between the time/space domain and the frequency domain.
  - It is foundational to [[Signal Processing]], enabling filtering, convolution, spectral analysis, and compression through frequency-domain manipulation.
  - The Fast Fourier Transform (FFT) algorithm computes the Discrete Fourier Transform in O(n log n) time, making it computationally tractable via [[Tensor Computation]] frameworks and [[Python Programming Language]] libraries such as NumPy.

- ### Overview
  - Jean-Baptiste Joseph Fourier introduced the transform in 1822 to solve heat conduction equations; it subsequently became ubiquitous across physics, engineering, and computing.
  - The Discrete Fourier Transform (DFT) operates on sampled sequences, converting N time-domain samples into N complex frequency-domain coefficients.
  - The Cooley-Tukey FFT (1965) reduced the naive O(n²) DFT computation to O(n log n), enabling real-time [[Signal Processing]] in audio, telecommunications, and image processing.
  - The 2D DFT extends the transform to images and spatial data, underpinning JPEG compression, MRI reconstruction, and convolution in early convolutional neural networks.

- ### Key Aspects
  - Linearity and the convolution theorem: convolution in the time domain equals point-wise multiplication in the frequency domain, reducing expensive convolutions to element-wise operations.
  - The Nyquist-Shannon sampling theorem defines the minimum sampling rate required to faithfully represent a signal's frequency content without aliasing.
  - The Short-Time Fourier Transform (STFT) provides time-frequency analysis for non-stationary signals by applying the DFT over sliding windows.
  - The inverse Fourier Transform reconstructs the time-domain signal from its frequency spectrum, enabling synthesis and filtering workflows.

- ### Mechanisms
  - FFT algorithms exploit the recursive structure of DFT computation by splitting the problem into smaller sub-problems (divide and conquer).
  - Windowing functions (Hanning, Hamming, Blackman) reduce spectral leakage arising from the assumption of signal periodicity.
  - [[Linear Algebra]] matrix representations of the DFT allow [[Tensor Computation]] frameworks to batch-transform multiple signals efficiently on GPU hardware.
  - Frequency-domain filtering multiplies the spectrum by a filter transfer function before inverse-transforming to the time domain.

- ### Applications
  - Audio processing: pitch detection, noise removal, equalisation, and audio codec design using frequency-domain filtering.
  - [[Ultra Wideband]] pulse shaping and channel estimation in wireless systems.
  - [[Machine Learning]] spectral features (log-mel spectrograms) as input to audio classification and speech recognition models.
  - Scientific computing: solving partial differential equations, [[Data Modelling]] of periodic phenomena, and crystallography.

- ### Relationships
  - subClassOf:: [[Signal Processing]]
  - hasPart:: [[Numerical Methods]]
  - hasPart:: [[Statistical Analysis]]
  - requires:: [[Linear Algebra]]
  - requires:: [[Tensor Computation]]
  - uses:: [[Python Programming Language]]
  - uses:: [[Tensor]]
  - enables:: [[Machine Learning]]
  - enables:: [[Data Modelling]]
  - implements:: [[Signal Processing]]
  - relatedTo:: [[Ultra Wideband]]
  - relatedTo:: [[Euclidean Distance]]
  - bridgesTo:: [[Artificial Intelligence]]

- ### Provenance
  - updated:: 2026-06-15