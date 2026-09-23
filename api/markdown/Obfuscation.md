
Obfuscation is the deliberate transformation of data, code, or communication into a form that is difficult to understand or analyse while preserving its function, used to protect intellectual property, hinder reverse engineering, and conceal sensitive information. Unlike encryption, which renders data unreadable without a key, obfuscation aims to raise the effort required to comprehend an artefact rather than to guarantee secrecy. It is widely applied in software protection and privacy engineering.

- ### Overview
  - Obfuscation transforms an artefact into an equivalent but opaque form, deterring casual inspection and slowing skilled analysis.
  - In software it renames symbols, restructures control flow, and inserts decoys to hinder reverse engineering.
  - In data handling it masks or tokenises sensitive fields so that their meaning is not directly exposed.
  - It complements, but does not replace, cryptographic protection.
- ### Mechanisms
  - **Code transformation**: control-flow flattening, dead-code insertion, and symbol renaming.
  - **Data masking**: replacing sensitive values with structurally similar surrogates.
  - **Tokenisation**: substituting identifiers with non-sensitive tokens via [[Tokenization]].
  - **Layering**: combining with [[Encryption]] and [[Steganography]] for defence in depth.
- ### Applications
  - Protecting intellectual property in distributed software.
  - Hindering malware analysis and tampering.
  - Masking sensitive data for privacy compliance.
  - Reducing the attack surface exposed to reverse engineering.
- ### Provenance

