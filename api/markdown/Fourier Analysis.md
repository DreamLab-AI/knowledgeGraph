Fourier analysis is the branch of mathematics that decomposes functions or signals into sums of sinusoidal components, representing them in terms of frequency rather than time or space. Its central tool, the Fourier transform, maps a signal to its spectrum, revealing periodicities and enabling operations such as filtering and convolution to be performed efficiently in the frequency domain. It is foundational to signal processing, communications, and many numerical and learning methods.

- Fourier analysis decomposes signals into sinusoidal components, representing them by frequency rather than time or space. Its core tool, the Fourier transform, underpins [[Signal Processing]] and [[Digital Signal Processing]], makes [[Convolution]] efficient, and relies on [[Linear Algebra]].

### Overview

- The central insight is that a wide class of functions can be expressed as a superposition of sinusoids of different frequencies, amplitudes, and phases.
- The forward transform maps a signal to its spectrum, and the inverse transform reconstructs the signal, allowing analysis and manipulation in whichever domain is more convenient.
- Many operations that are awkward in the time domain, notably convolution, become simple multiplications in the frequency domain.

### Key aspects

- The Fourier series represents periodic functions as discrete harmonic components.
- The continuous and discrete Fourier transforms extend the idea to non-periodic and sampled signals.
- The fast Fourier transform computes the discrete transform efficiently, making large-scale spectral analysis practical.
- The convolution theorem links filtering in the time domain to multiplication in the frequency domain.

### Applications

- Filtering, denoising, and spectral analysis of audio, images, and sensor data.
- Communications, where signals are designed and analysed in the frequency domain.
- Feature extraction for classification and machine-learning pipelines.
- Solving differential equations and accelerating numerical convolutions.

### Provenance

