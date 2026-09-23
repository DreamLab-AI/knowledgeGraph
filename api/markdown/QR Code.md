
A QR code (Quick Response code) is a two-dimensional matrix barcode that encodes data in a grid of black and white modules readable by a camera from any orientation. It carries substantially more information than a one-dimensional barcode and includes Reed-Solomon error correction that allows reliable decoding despite damage or partial occlusion. QR codes are standardised under ISO/IEC 18004 and are widely used to bridge physical objects to digital resources, including payment requests, product identifiers and verifiable credentials.

- ### Overview
  - QR codes encode text, URLs, payment instructions or structured payloads in a square grid of modules. Their built-in error correction and orientation-independent finder patterns make them robust to scuffing, partial occlusion and skewed camera angles, which is why they became ubiquitous for connecting print and physical goods to online experiences.
  - In blockchain and payments contexts, QR codes commonly carry addresses, invoices or credential references, letting a phone camera initiate a transaction or verification without manual entry.
- ### Key aspects
  - Capacity: versions scale from tiny payloads to several kilobytes of alphanumeric or binary data.
  - Error correction: Reed-Solomon coding recovers data across four selectable robustness levels.
  - Structure: finder, alignment and timing patterns enable fast, rotation-invariant detection.
  - Standardisation: ISO/IEC 18004 defines symbol structure, encoding and decoding.
- ### Mechanisms
  - Encoders map payload bytes into the module grid with masking to balance light and dark regions.
  - A scanner locates finder patterns, normalises perspective and reads modules into a bitstream.
  - Error-correction decoding reconstructs the original payload even with damaged modules.
- ### Applications
  - Cryptocurrency address and invoice sharing, payment initiation, product authentication, supply-chain tracking, digital product passports and credential presentation.
- ### Provenance

