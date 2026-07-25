public:: true

# Fast Fourier Transform
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:fast-fourier-transform", "@type":"Page", "title":"Fast Fourier Transform", "vc:slug":"fast-fourier-transform", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:fast-fourier-transform",
  "@type":"Class",
  "label":"Fast Fourier Transform",
  "definition":"The Fast Fourier Transform (FFT) is a family of efficient algorithms for computing the discrete Fourier transform and its inverse, reducing the cost from quadratic to log-linear time in the number of samples. By exploiting symmetry and recursive divide-and-conquer factorisation, such as the Cooley-Tukey scheme, the FFT makes spectral analysis of large signals computationally practical. It is a foundational primitive in digital signal processing, communications, numerical methods and many machine learning and scientific computing workloads.",
  "domain":"ai",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:signal-processing","label":"Signal Processing"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:digital-signal-processing","label":"Digital Signal Processing"},
      {"@id":"urn:ngm:class:numerical-methods","label":"Numerical Methods"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:algorithm","label":"Algorithm"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:algorithm","label":"Algorithm"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:convolution","label":"Convolution"},
      {"@id":"urn:ngm:class:data-compression","label":"Data Compression"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:matrix-multiplication","label":"Matrix Multiplication"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:audio-processing","label":"Audio Processing"},
      {"@id":"urn:ngm:class:image-processing","label":"Image Processing"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:signal-processing","label":"Signal Processing"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:convolutional-neural-network","label":"Convolutional Neural Network"},
      {"@id":"urn:ngm:class:gpu-acceleration","label":"GPU Acceleration"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- The [[Fast Fourier Transform]] is an efficient [[Algorithm]] for computing the discrete Fourier transform in log-linear time.
	- It is a core method of [[Signal Processing]] and [[Digital Signal Processing]], converting signals between time and frequency representations.
	- It enables fast [[Convolution]] and spectral analysis used across [[Audio Processing]] and [[Image Processing]].
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
- ### Relationships
	- partOf:: [[Digital Signal Processing]]
	- partOf:: [[Numerical Methods]]
	- hasPart:: [[Algorithm]]
	- requires:: [[Algorithm]]
	- enables:: [[Convolution]]
	- enables:: [[Data Compression]]
	- uses:: [[Matrix Multiplication]]
	- supports:: [[Audio Processing]]
	- supports:: [[Image Processing]]
	- implements:: [[Signal Processing]]
	- relatedTo:: [[Convolutional Neural Network]]
	- relatedTo:: [[GPU Acceleration]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
