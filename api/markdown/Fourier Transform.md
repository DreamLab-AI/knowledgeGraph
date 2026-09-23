
The Fourier Transform is a mathematical operation that decomposes a function of time or space into its constituent frequency components, expressing the function as a sum of sinusoids weighted by complex amplitudes. It establishes a bijective mapping between the time domain and the frequency domain, enabling analysis, filtering, compression, and convolution of signals. The Discrete Fourier Transform (DFT) and its fast algorithm (FFT) are the computational workhorses of digital signal processing, image analysis, and frequency-domain machine learning.

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

- ### Provenance

