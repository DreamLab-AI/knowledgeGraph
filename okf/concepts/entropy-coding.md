---
okf_version: "0.2"
type: Class
title: Entropy Coding
resource: urn:ngm:class:entropy-coding
domain: infrastructure
description: Entropy coding is a class of lossless data-compression techniques that assign shorter codewords to more frequent symbols and longer codewords to rarer ones, approaching the information-theoretic entropy limit of a source. Methods such as Huffman coding and arithmetic coding form the final, lossless stage of most image, audio, and video codecs, packing quantised data into a compact bitstream. Becau
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:lossless-compression
hasPart:
  - urn:ngm:class:data-encoding
requires:
  - urn:ngm:class:entropy
enables:
  - urn:ngm:class:video-compression
  - urn:ngm:class:image-compression
implements:
  - urn:ngm:class:lossless-compression
contrastsWith:
  - urn:ngm:class:lossy-compression
bridgesTo:
  - urn:ngm:class:image-compression
uses:
  - urn:ngm:class:entropy
  - urn:ngm:class:statistics
supports:
  - urn:ngm:class:video-codec
  - urn:ngm:class:bitrate
partOf:
  - urn:ngm:class:data-compression
  - urn:ngm:class:video-compression
relatedTo:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:codec
  - urn:ngm:class:data-encoding
---

# Entropy Coding

Entropy coding is a class of lossless data-compression techniques that assign shorter codewords to more frequent symbols and longer codewords to rarer ones, approaching the information-theoretic entropy limit of a source. Methods such as Huffman coding and arithmetic coding form the final, lossless stage of most image, audio, and video codecs, packing quantised data into a compact bitstream. Because it discards no information, entropy coding can be perfectly reversed during decoding.
