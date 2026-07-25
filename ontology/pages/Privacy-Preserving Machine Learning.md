public:: true

# Privacy-Preserving Machine Learning

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:privacy-preserving-machine-learning", "@type":"Page", "title":"Privacy-Preserving Machine Learning", "vc:slug":"privacy-preserving-machine-learning", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:privacy-preserving-machine-learning",
  "@type":"Class",
  "label":"Privacy-Preserving Machine Learning",
  "definition":"Privacy-preserving machine learning is the set of techniques that train, evaluate, and serve machine-learning models while limiting exposure of sensitive training data and model internals. It combines cryptographic protocols, statistical guarantees, and distributed training architectures to bound what an adversary can learn about individual records. The goal is to retain predictive utility while satisfying confidentiality, regulatory, and trust constraints.",
  "domain":"security",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:privacy-enhancing-technologies","label":"Privacy-Enhancing Technologies"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:privacy-enhancing-technologies","label":"Privacy-Enhancing Technologies"}],
    "hasPart":[{"@id":"urn:ngm:class:differential-privacy","label":"Differential Privacy"},{"@id":"urn:ngm:class:federated-learning","label":"Federated Learning"}],
    "uses":[{"@id":"urn:ngm:class:homomorphic-encryption","label":"Homomorphic Encryption"},{"@id":"urn:ngm:class:cryptography","label":"Cryptography"},{"@id":"urn:ngm:class:trusted-execution-environment","label":"Trusted Execution Environment"}],
    "requires":[{"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"}],
    "enables":[{"@id":"urn:ngm:class:data-privacy","label":"Data Privacy"}],
    "supports":[{"@id":"urn:ngm:class:edge-computing","label":"Edge Computing"}],
    "bridgesTo":[{"@id":"urn:ngm:class:security","label":"Security"}],
    "relatedTo":[{"@id":"urn:ngm:class:privacy","label":"Privacy"},{"@id":"urn:ngm:class:encryption","label":"Encryption"},{"@id":"urn:ngm:class:model-training","label":"Model Training"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Privacy-preserving machine learning protects sensitive data throughout the [[Machine Learning]] lifecycle using [[Cryptography]], [[Differential Privacy]], and distributed training such as [[Federated Learning]]. It is a specialisation of [[Privacy-Enhancing Technologies]] applied to model training and inference.
- ### Overview
- Standard machine learning concentrates raw data and exposes models to membership-inference and reconstruction attacks; privacy-preserving variants limit this exposure by design.
- The field spans formal guarantees (differential privacy), cryptographic computation over encrypted data, hardware isolation, and architectural decentralisation.
- Practitioners trade off utility, computational cost, and privacy budget, choosing techniques to match a threat model and regulatory regime.
- ### Mechanisms
- [[Differential Privacy]] injects calibrated noise so that any single record has bounded influence on outputs.
- [[Federated Learning]] keeps data on-device and aggregates only model updates across participants.
- [[Homomorphic Encryption]] allows computation directly on ciphertext, while a [[Trusted Execution Environment]] isolates computation in attested hardware.
- Secure aggregation combines client updates so the server never sees any individual contribution in the clear.
- ### Applications
- Cross-institution medical and financial modelling without pooling raw records.
- On-device personalisation that supports [[Edge Computing]] and mobile keyboards.
- Regulated analytics that must demonstrate [[Data Privacy]] compliance.
- Collaborative model building among mutually distrustful organisations.
- ### Relationships
- partOf:: [[Privacy-Enhancing Technologies]]
- hasPart:: [[Differential Privacy]]
- hasPart:: [[Federated Learning]]
- uses:: [[Homomorphic Encryption]]
- uses:: [[Cryptography]]
- uses:: [[Trusted Execution Environment]]
- requires:: [[Machine Learning]]
- enables:: [[Data Privacy]]
- supports:: [[Edge Computing]]
- bridgesTo:: [[Security]]
- relatedTo:: [[Privacy]]
- relatedTo:: [[Encryption]]
- relatedTo:: [[Model Training]]
- ### Provenance
- updated:: 2026-06-15
