public:: true

# Biometric Identification

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:biometric-identification", "@type":"Page", "title":"Biometric Identification", "vc:slug":"biometric-identification", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:biometric-identification",
  "@type":"Class",
  "label":"Biometric Identification",
  "definition":"Biometric identification is the recognition of an individual by measuring and matching distinctive physiological or behavioural characteristics, such as fingerprints, facial geometry, iris patterns, voice or gait. It captures a sample, extracts a feature template and compares it against enrolled templates to verify a claimed identity (one-to-one) or identify an unknown subject (one-to-many). It underpins access control, border management and device authentication, and raises significant privacy considerations.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:identity-verification","label":"Identity Verification"}],
  "relations":{
    "uses":[
      {"@id":"urn:ngm:class:facial-recognition","label":"Facial Recognition"},
      {"@id":"urn:ngm:class:fingerprint-recognition","label":"Fingerprint Recognition"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:authentication","label":"Authentication"},
      {"@id":"urn:ngm:class:identity-verification","label":"Identity Verification"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:privacy-preserving","label":"Privacy Preserving"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:authentication","label":"Authentication"},
      {"@id":"urn:ngm:class:liveness-detection","label":"Liveness Detection"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:liveness-detection","label":"Liveness Detection"},
      {"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:iris-recognition","label":"Iris Recognition"},
      {"@id":"urn:ngm:class:facial-recognition","label":"Facial Recognition"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:neural-network","label":"Neural Network"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:identity-verification","label":"Identity Verification"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:privacy-preserving","label":"Privacy Preserving"},
      {"@id":"urn:ngm:class:liveness-detection","label":"Liveness Detection"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Biometric Identification]] recognises an individual by measuring distinctive physiological or behavioural traits and matching them against enrolled templates.
	- It is a form of [[Identity Verification]] that uses [[Facial Recognition]], [[Fingerprint Recognition]] and other modalities.
	- It enables [[Authentication]] while raising tensions with [[Privacy Preserving]] design.
- ### Overview
	- Biometric systems operate in two modes: verification confirms a claimed identity by a one-to-one template comparison, while identification searches a gallery for a one-to-many match.
	- A typical pipeline captures a sample, assesses quality, extracts a compact feature template, and computes a similarity score against stored references using a decision threshold.
	- Modalities vary in permanence, distinctiveness and collectability: fingerprints and iris patterns are highly distinctive; face and voice are convenient but more variable.
	- Modern systems use deep neural networks to learn discriminative embeddings, paired with liveness detection to resist spoofing with photos, masks or recordings.
- ### Mechanisms
	- Enrolment: capturing reference samples and building a template database.
	- Feature extraction: deriving a stable, compact representation of the trait.
	- Matching: scoring similarity and applying a threshold balancing false accept and false reject rates.
	- Liveness detection: distinguishing a live subject from a spoof artefact.
	- Template protection: securing biometric data against reconstruction.
- ### Applications
	- Smartphone and device unlocking.
	- Border control and e-passport gates.
	- Physical and logical access control.
	- Payment authorisation and customer onboarding.
- ### Relationships
	- uses:: [[Facial Recognition]]
	- uses:: [[Fingerprint Recognition]]
	- bridgesTo:: [[Authentication]]
	- bridgesTo:: [[Identity Verification]]
	- contrastsWith:: [[Privacy Preserving]]
	- enables:: [[Authentication]]
	- enables:: [[Liveness Detection]]
	- requires:: [[Liveness Detection]]
	- requires:: [[Deep Learning]]
	- hasPart:: [[Iris Recognition]]
	- hasPart:: [[Facial Recognition]]
	- dependsOn:: [[Neural Network]]
	- supports:: [[Identity Verification]]
	- relatedTo:: [[Privacy Preserving]]
	- relatedTo:: [[Liveness Detection]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
