public:: true

# Rotary Position Embedding
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:rotary-position-embedding", "@type":"Page", "title":"Rotary Position Embedding", "vc:slug":"rotary-position-embedding", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:rotary-position-embedding",
  "@type":"Class",
  "label":"Rotary Position Embedding",
  "definition":"Rotary Position Embedding (RoPE) is a method for injecting positional information into transformer attention by rotating the query and key vectors by an angle proportional to each token's absolute position, so that their dot product depends only on relative position. Because the rotation is applied multiplicatively in feature pairs rather than added to the embeddings, RoPE unifies absolute and relative positional encoding while preserving the inner-product structure that attention relies on. It is the dominant positional scheme in modern large language models such as Llama, and its frequency basis can be rescaled to extrapolate context windows far beyond the training length.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:positional-encoding","label":"Positional Encoding"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:relative-positional-encoding","label":"Relative Positional Encoding"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:transformer-architecture","label":"Transformer Architecture"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:relative-positional-encoding","label":"Relative Positional Encoding"},
      {"@id":"urn:ngm:class:absolute-positional-encoding","label":"Absolute Positional Encoding"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:self-attention","label":"Self Attention"},
      {"@id":"urn:ngm:class:attention-mechanism","label":"Attention Mechanism"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:long-context-modelling","label":"Long Context Modelling"},
      {"@id":"urn:ngm:class:extrapolation","label":"Extrapolation"},
      {"@id":"urn:ngm:class:context-length","label":"Context Length"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:llama","label":"Llama"},
      {"@id":"urn:ngm:class:large-language-models","label":"Large Language Models"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:sinusoidal-positional-encoding","label":"Sinusoidal Positional Encoding"},
      {"@id":"urn:ngm:class:alibi","label":"ALiBi"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:absolute-positional-encoding","label":"Absolute Positional Encoding"}
    ]
  },
  "sameAs":[
    {"@id":"urn:ngm:class:rope","label":"RoPE"}
  ],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Rotary Position Embedding]] (RoPE) injects positional information into [[Self Attention]] by rotating query and key vectors by an angle proportional to token position.
	- It is a form of [[Positional Encoding]] that makes the attention dot product depend on relative position.
	- It is the dominant positional scheme in models such as [[Llama]] and supports context-window [[Extrapolation]].
- ### Overview
	- Transformers are permutation-invariant by default, so position must be encoded explicitly. Earlier schemes either added fixed sinusoidal signals or learned absolute position embeddings, both added to the token representations.
	- RoPE instead rotates pairs of features in the query and key vectors. Because a rotation by the difference of two positions falls out of the inner product, the resulting attention score depends only on the relative offset between tokens, giving relative-position behaviour through an absolute-position construction.
	- This property preserves the linear structure attention relies on, integrates cleanly with optimised kernels, and degrades gracefully when sequences exceed the training length. Frequency rescaling techniques such as position interpolation and NTK-aware scaling extend the usable context window.
- ### Mechanisms
	- Pairwise rotation of feature dimensions by a position-dependent angle.
	- A geometric series of rotation frequencies spanning short to long wavelengths.
	- Relative-offset dependence emerging from the inner product of rotated vectors.
	- Frequency-base rescaling for context-length [[Extrapolation]].
- ### Applications
	- Positional encoding in modern decoder-only [[Large Language Models]].
	- Long-context model variants with extended windows.
	- Multimodal and code models that inherit transformer attention.
	- Efficient attention kernels that fold rotation into the dot product.
- ### Relationships
	- hasPart:: [[Relative Positional Encoding]]
	- partOf:: [[Transformer Architecture]]
	- implements:: [[Relative Positional Encoding]]
	- implements:: [[Absolute Positional Encoding]]
	- uses:: [[Self Attention]]
	- uses:: [[Attention Mechanism]]
	- enables:: [[Long Context Modelling]]
	- enables:: [[Extrapolation]]
	- enables:: [[Context Length]]
	- supports:: [[Llama]]
	- supports:: [[Large Language Models]]
	- relatedTo:: [[Sinusoidal Positional Encoding]]
	- relatedTo:: [[ALiBi]]
	- contrastsWith:: [[Absolute Positional Encoding]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
