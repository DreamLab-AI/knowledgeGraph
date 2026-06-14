public:: true

# Variational Autoencoder
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3fb76ec1edb17091aa0e04cb340282c2bb7ba6e935007bc4084d4bbd6c4e8d92",
  "@type": "Page",
  "vc:slug": "variational-autoencoder",
  "title": "Variational Autoencoder",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:variational-inference",
      "vc:label": "Variational Inference"
    },
    {
      "@id": "urn:visionflow:linked:backpropagation",
      "vc:label": "Backpropagation"
    },
    {
      "@id": "urn:visionflow:linked:image-generation",
      "vc:label": "Image Generation"
    },
    {
      "@id": "urn:visionflow:linked:generative-model",
      "vc:label": "Generative Model"
    },
    {
      "@id": "urn:visionflow:linked:autoencoder",
      "vc:label": "Autoencoder"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Variational Autoencoder"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:variational-autoencoder",
  "@type": "Class",
  "label": "Variational Autoencoder",
  "definition": "A generative model that pairs an encoder mapping inputs to a probability distribution over a latent space with a decoder that reconstructs inputs, trained to maximise a variational lower bound on the data likelihood.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:autoencoder",
      "label": "Autoencoder"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:variational-inference",
        "label": "Variational Inference"
      },
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:image-generation",
        "label": "Image Generation"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:variational-autoencoder:594c43ad7dee",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3fb76ec1edb17091aa0e04cb340282c2bb7ba6e935007bc4084d4bbd6c4e8d92"
  },
  "vc:resolutions": [
    {
      "raw": "[[Variational Inference]]",
      "resolved": "urn:visionflow:linked:variational-inference",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Backpropagation]]",
      "resolved": "urn:visionflow:linked:backpropagation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Image Generation]]",
      "resolved": "urn:visionflow:linked:image-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative Model]]",
      "resolved": "urn:visionflow:linked:generative-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autoencoder]]",
      "resolved": "urn:visionflow:linked:autoencoder",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A generative model that pairs an encoder mapping inputs to a probability distribution over a latent space with a decoder that reconstructs inputs, trained to maximise a variational lower bound on the data likelihood.

- ### Semantic Classification
  - owl-class:: deep-learning:VariationalAutoencoder
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Autoencoder]]
  - bridges-to:: [[Generative Model]]
  - requires:: [[Variational Inference]], [[Backpropagation]]
  - enables:: [[Image Generation]]

- ### Content
  - A variational autoencoder (VAE) treats the latent representation as a random variable with a prior, usually a standard Gaussian. The encoder outputs the parameters of an approximate posterior, and the reparameterisation trick allows gradients to flow through the sampling step during training.
  - The training objective combines a reconstruction term with a Kullback-Leibler divergence that keeps the approximate posterior close to the prior. This regularised latent space supports smooth interpolation and sampling, making VAEs useful for generation, representation learning and anomaly detection, though samples are often blurrier than those from adversarial methods.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
