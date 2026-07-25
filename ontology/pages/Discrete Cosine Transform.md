public:: true

# Discrete Cosine Transform

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:discrete-cosine-transform",
  "@type": "Page",
  "title": "Discrete Cosine Transform",
  "vc:slug": "discrete-cosine-transform",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:discrete-cosine-transform",
  "@type": "Class",
  "label": "Discrete Cosine Transform",
  "definition": "The discrete cosine transform, DCT, is an integral transform, closely related to the discrete Fourier transform, that expresses a finite sequence of data points as a sum of cosine functions oscillating at different frequencies, concentrating most signal energy into a small number of low-frequency coefficients. This energy-compaction property makes it the core building block of lossy image and video codecs such as JPEG and MPEG, which quantise and discard high-frequency coefficients to achieve compression. Video codecs apply the DCT, or block-based variants of it, to spatial blocks of pixel data before entropy coding.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:fourier-transform",
      "label": "Fourier Transform"
    }
  ],
  "relations": {},
  "sameAs": [],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- The discrete cosine transform, DCT, is an integral transform, closely related to the discrete Fourier transform, that expresses a finite sequence of data points as a sum of cosine functions oscillating at different frequencies, concentrating most signal energy into a small number of low-frequency coefficients. This energy-compaction property makes it the core building block of lossy image and video codecs such as JPEG and MPEG, which quantise and discard high-frequency coefficients to achieve compression. Video codecs apply the DCT, or block-based variants of it, to spatial blocks of pixel data before entropy coding.
	- It is a [[Fourier Transform]] concept.
- ### Relationships
	- subClassOf:: [[Fourier Transform]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
