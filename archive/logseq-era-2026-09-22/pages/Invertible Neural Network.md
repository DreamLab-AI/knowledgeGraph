public:: true

# Invertible Neural Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:invertible-neural-network",
  "@type": "Page",
  "title": "Invertible Neural Network",
  "vc:slug": "invertible-neural-network",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:invertible-neural-network",
  "@type": "Class",
  "label": "Invertible Neural Network",
  "definition": "An invertible neural network is a neural network architecture constructed so that its forward mapping has an explicit, tractable inverse, allowing outputs to be mapped back to inputs without approximation. This is achieved through coupling-layer designs that keep the Jacobian easy to compute and invert. Invertible architectures are the structural building block of normalising flows, where exact invertibility and tractable Jacobian determinants are required to compute likelihoods in a change-of-variables formulation.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:neural-network",
      "label": "Neural Network"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:normalising-flow",
        "label": "Normalising Flow"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - An invertible neural network is a neural network architecture constructed so that its forward mapping has an explicit, tractable inverse, allowing outputs to be mapped back to inputs without approximation.
  - It is a subclass of [[Neural Network]].
- ### Content
  - An invertible neural network is a neural network architecture constructed so that its forward mapping has an explicit, tractable inverse, allowing outputs to be mapped back to inputs without approximation. This is achieved through coupling-layer designs that keep the Jacobian easy to compute and invert. Invertible architectures are the structural building block of normalising flows, where exact invertibility and tractable Jacobian determinants are required to compute likelihoods in a change-of-variables formulation.
