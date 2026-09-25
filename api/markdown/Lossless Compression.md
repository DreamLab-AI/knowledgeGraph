Lossless compression is a class of data compression in which the original data can be reconstructed exactly, bit for bit, from the compressed representation. It exploits statistical redundancy through techniques such as entropy coding and dictionary substitution, contrasting with lossy compression which discards perceptually insignificant information for higher ratios. It is essential where fidelity must be preserved, such as for text, executables, and archival data.

### Overview

- Lossless schemes model the probability distribution of symbols and assign shorter codes to more frequent ones, approaching the Shannon entropy limit.
- Dictionary methods replace repeated substrings with references to earlier occurrences, the basis of the LZ family used by DEFLATE, gzip, and zstd.
- Because no information is discarded, the same algorithm both compresses and exactly restores the source.

### Key aspects

- Exact reconstruction guarantee, with no perceptual or numerical loss.
- Lower achievable ratios than lossy methods on natural media.
- Reversible transforms such as Burrows-Wheeler followed by [[Entropy Coding]].
- Wide use in general-purpose archive [[Codec]] and [[Data Format]] designs.

### Mechanisms

- Huffman and arithmetic/range coding for near-optimal symbol coding.
- Dictionary substitution (LZ77/LZ78/LZW) for repeated sequences.
- Run-length encoding for long constant runs.
- Predictive and context modelling to sharpen symbol distributions.

### Applications

- Compressing text, source code, and executables where corruption is unacceptable.
- Archival storage and backups feeding a [[Data Warehouse]].
- PNG and FLAC media containers requiring exact pixels or samples.
- General-purpose archive formats (ZIP, gzip, zstd).

### Provenance

