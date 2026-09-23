
The Fast Fourier Transform (FFT) is a family of efficient algorithms for computing the discrete Fourier transform and its inverse, reducing the cost from quadratic to log-linear time in the number of samples. By exploiting symmetry and recursive divide-and-conquer factorisation, such as the Cooley-Tukey scheme, the FFT makes spectral analysis of large signals computationally practical. It is a foundational primitive in digital signal processing, communications, numerical methods and many machine learning and scientific computing workloads.

- ### Overview
	- The FFT exploits the symmetry and periodicity of complex roots of unity to recursively factorise the discrete Fourier transform.
	- The Cooley-Tukey radix-2 decomposition splits a transform of size N into two transforms of size N/2, yielding O(N log N) complexity.
	- Variants exist for non-power-of-two sizes (mixed-radix, Bluestein, prime-factor algorithms) and for real-valued input.
	- Highly optimised libraries (FFTW, cuFFT) and hardware accelerators make the FFT a ubiquitous building block.
- ### Mechanisms
	- **Divide and conquer**: recursively decompose the DFT into smaller DFTs over even and odd indexed samples.
	- **Butterfly operation**: combine sub-transform outputs with twiddle-factor multiplications.
	- **Fast convolution**: transform two signals, multiply pointwise, and inverse-transform to compute convolution efficiently.
	- **Inverse FFT**: the same machinery, with conjugated twiddle factors and normalisation, recovers the time-domain signal.
- ### Applications
	- Spectral analysis, filtering and equalisation in [[Audio Processing]] and communications.
	- Fast [[Convolution]] underpinning efficient [[Convolutional Neural Network]] operations and large-kernel filtering.
	- Compression transforms in image and video codecs.
	- Numerical solution of partial differential equations via spectral methods.
- ### Provenance

