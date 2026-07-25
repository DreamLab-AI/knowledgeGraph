public:: true

# Lossless Compression

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:lossless-compression",
  "@type": "Page",
  "title": "Lossless Compression",
  "vc:slug": "lossless-compression",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:lossless-compression",
  "@type": "Class",
  "label": "Lossless Compression",
  "definition": "Lossless compression is a class of data compression in which the original data can be reconstructed exactly, bit for bit, from the compressed representation. It exploits statistical redundancy through techniques such as entropy coding and dictionary substitution, contrasting with lossy compression which discards perceptually insignificant information for higher ratios. It is essential where fidelity must be preserved, such as for text, executables, and archival data.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-compression",
      "label": "Data Compression"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:lossy-compression",
        "label": "Lossy Compression"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-compression",
        "label": "Data Compression"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:entropy-coding",
        "label": "Entropy Coding"
      },
      {
        "@id": "urn:ngm:class:information-theory",
        "label": "Information Theory"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:codec",
        "label": "Codec"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:file-format",
        "label": "File Format"
      },
      {
        "@id": "urn:ngm:class:backup",
        "label": "Backup"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-warehouse",
        "label": "Data Warehouse"
      },
      {
        "@id": "urn:ngm:class:data-storage",
        "label": "Data Storage"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:image-compression",
        "label": "Image Compression"
      },
      {
        "@id": "urn:ngm:class:video-compression",
        "label": "Video Compression"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:data-compression",
        "label": "Data Compression"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:information-theory",
        "label": "Information Theory"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Lossless Compression]] reduces data size while guaranteeing exact, bit-for-bit reconstruction of the original.
  - It is a form of [[Data Compression]] that contrasts with [[Lossy Compression]], which sacrifices fidelity for higher ratios.
  - It relies on [[Entropy Coding]] and dictionary methods to remove statistical redundancy.
- ### Overview
  - Lossless schemes model the probability distribution of symbols and assign shorter codes to more frequent ones, approaching the Shannon entropy limit.
  - Dictionary methods replace repeated substrings with references to earlier occurrences, the basis of the LZ family used by DEFLATE, gzip, and zstd.
  - Because no information is discarded, the same algorithm both compresses and exactly restores the source.
- ### Key aspects
  - Exact reconstruction guarantee, with no perceptual or numerical loss.
  - Lower achievable ratios than lossy methods on natural media.
  - Reversible transforms such as Burrows-Wheeler followed by [[Entropy Coding]].
  - Wide use in general-purpose archive [[Codec]] and [[File Format]] designs.
- ### Mechanisms
  - Huffman and arithmetic/range coding for near-optimal symbol coding.
  - Dictionary substitution (LZ77/LZ78/LZW) for repeated sequences.
  - Run-length encoding for long constant runs.
  - Predictive and context modelling to sharpen symbol distributions.
- ### Applications
  - Compressing text, source code, and executables where corruption is unacceptable.
  - Archival storage and backups feeding a [[Data Warehouse]].
  - PNG and FLAC media containers requiring exact pixels or samples.
  - General-purpose archive formats (ZIP, gzip, zstd).
- ### Relationships
  - contrastsWith:: [[Lossy Compression]]
  - partOf:: [[Data Compression]]
  - uses:: [[Entropy Coding]]
  - uses:: [[Information Theory]]
  - hasPart:: [[Codec]]
  - enables:: [[File Format]]
  - enables:: [[Backup]]
  - supports:: [[Data Warehouse]]
  - supports:: [[Data Storage]]
  - requires:: [[Data Quality]]
  - relatedTo:: [[Image Compression]]
  - relatedTo:: [[Video Compression]]
  - implements:: [[Data Compression]]
  - dependsOn:: [[Information Theory]]
- ### Provenance
  - inferenceRule:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
  - updated:: 2026-06-15
