public:: true

# Weight Sharing
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:weight-sharing", "@type":"Page", "title":"Weight Sharing", "vc:slug":"weight-sharing", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:weight-sharing",
  "@type":"Class",
  "label":"Weight Sharing",
  "definition":"Weight sharing is a neural-network design technique in which the same set of learnable parameters is reused across multiple positions, time steps, or model components rather than learning independent parameters for each. By tying parameters together it dramatically reduces model size, encodes structural priors such as translation invariance, and improves data efficiency and generalisation. It is the defining mechanism of convolutional layers, which apply one filter across all spatial locations, and of recurrent networks, which reuse the same transition weights across every time step. Weight sharing also appears in Siamese architectures, in neural architecture search, and in parameter-efficient model designs.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:neural-network","label":"Neural Network"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:parameter","label":"Parameter"},
      {"@id":"urn:ngm:class:convolution","label":"Convolution"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:parameter","label":"Parameter"},
      {"@id":"urn:ngm:class:convolution","label":"Convolution"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:convolutional-neural-network","label":"Convolutional Neural Network"},
      {"@id":"urn:ngm:class:recurrent-neural-network","label":"Recurrent Neural Network"},
      {"@id":"urn:ngm:class:attention-mechanism","label":"Attention Mechanism"},
      {"@id":"urn:ngm:class:transformer","label":"Transformer"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:neural-network","label":"Neural Network"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:convolutional-neural-network","label":"Convolutional Neural Network"},
      {"@id":"urn:ngm:class:transfer-learning","label":"Transfer Learning"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:overfitting","label":"Overfitting"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:model-architecture","label":"Model Architecture"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:neural-architecture-search","label":"Neural Architecture Search"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Weight sharing reuses one set of [[Parameter]] values across many positions or time steps in a [[Neural Network]] rather than learning separate parameters for each. It is a structural prior that reduces model size and improves generalisation.
- It is the mechanism that gives [[Convolutional Neural Network]] models translation invariance and lets [[Recurrent Neural Network]] models handle sequences of arbitrary length.
- ### Overview
- Tying parameters together means a pattern learned in one context is automatically applied in all equivalent contexts. This embeds an inductive bias matched to the structure of the data, such as spatial locality in images or temporal regularity in sequences.
- Fewer free parameters lower memory and computation cost and reduce the tendency to overfit, since the model has less capacity to memorise idiosyncratic detail.
- The same idea recurs across architectures, from Siamese twins that share an encoder to parameter-efficient designs explored by [[Neural Architecture Search]].
- ### Mechanisms
- Convolutional filters slide a single kernel across all spatial locations.
- Recurrent cells apply identical transition weights at every step of a sequence.
- Tied encoders in Siamese and twin networks ensure comparable representations.
- Cross-layer parameter tying reduces footprint in [[Transformer]] variants.
- ### Applications
- Image and video recognition with convolutional backbones.
- Sequence modelling for speech, text, and time series.
- Metric learning and verification with shared encoders.
- Compact on-device models constrained by memory.
- ### Relationships
- subClassOf:: [[Neural Network]]
- hasPart:: [[Parameter]]
- hasPart:: [[Convolution]]
- uses:: [[Convolution]]
- relatedTo:: [[Recurrent Neural Network]]
- relatedTo:: [[Attention Mechanism]]
- relatedTo:: [[Transformer]]
- dependsOn:: [[Neural Network]]
- enables:: [[Convolutional Neural Network]]
- enables:: [[Transfer Learning]]
- supports:: [[Deep Learning]]
- contrastsWith:: [[Overfitting]]
- implements:: [[Model Architecture]]
- partOf:: [[Neural Architecture Search]]
- ### Provenance
- updated:: 2026-06-15
