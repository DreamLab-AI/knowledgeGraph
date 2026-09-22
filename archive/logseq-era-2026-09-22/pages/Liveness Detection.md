public:: true

# Liveness Detection
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:liveness-detection", "@type":"Page", "title":"Liveness Detection", "vc:slug":"liveness-detection", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:liveness-detection",
  "@type":"Class",
  "label":"Liveness Detection",
  "definition":"Liveness detection is a set of techniques used during biometric capture to verify that the presented sample originates from a live, present human rather than a spoof such as a photograph, mask, recording or deepfake. It distinguishes genuine presentations from presentation attacks by analysing physiological signals, motion, texture and challenge responses, and is standardised under ISO/IEC 30107 as presentation attack detection. Liveness detection is essential to the integrity of remote identity verification, biometric authentication and onboarding flows.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:biometric-verification","label":"Biometric Verification"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:biometric-authentication","label":"Biometric Authentication"},
      {"@id":"urn:ngm:class:identity-verification","label":"Identity Verification"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:anomaly-detection","label":"Anomaly Detection"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:facial-recognition","label":"Facial Recognition"},
      {"@id":"urn:ngm:class:image-processing","label":"Image Processing"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:authentication","label":"Authentication"},
      {"@id":"urn:ngm:class:fraud-detection","label":"Fraud Detection"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"},
      {"@id":"urn:ngm:class:convolutional-neural-network","label":"Convolutional Neural Network"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:kyc","label":"Know Your Customer"},
      {"@id":"urn:ngm:class:multi-factor-authentication","label":"Multi-Factor Authentication"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:access-control","label":"Access Control"},
      {"@id":"urn:ngm:class:cybersecurity","label":"Cybersecurity"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Liveness Detection]] verifies that a biometric sample comes from a live, present person rather than a spoof.
	- It is a defensive layer within [[Biometric Verification]] and [[Biometric Authentication]], standardised as presentation attack detection.
	- It protects [[Identity Verification]] and onboarding flows against photos, masks, replays and deepfakes.
- ### Overview
	- Liveness detection addresses the core weakness of biometrics: a captured face or fingerprint can be presented by an attacker.
	- Approaches split into passive methods, which require no user action, and active methods, which issue a challenge.
	- ISO/IEC 30107 formalises presentation attack detection and its evaluation metrics.
	- Modern systems combine multiple cues and increasingly rely on [[Deep Learning]] classifiers.
- ### Mechanisms
	- **Texture and reflectance analysis**: distinguishing genuine skin from printed or screen-rendered surfaces.
	- **Motion and depth cues**: detecting micro-movements, 3D structure and parallax that flat spoofs lack.
	- **Challenge-response**: prompting blinks, head turns or random expressions to defeat static attacks.
	- **Anti-spoof classification**: [[Convolutional Neural Network]] models trained on attack and genuine samples.
- ### Applications
	- Remote [[Know Your Customer]] onboarding for financial services.
	- Face unlock and [[Biometric Authentication]] on mobile devices.
	- Border control and high-assurance [[Access Control]].
	- [[Fraud Detection]] in account recovery and high-value transactions.
- ### Relationships
	- partOf:: [[Biometric Authentication]]
	- partOf:: [[Identity Verification]]
	- hasPart:: [[Anomaly Detection]]
	- requires:: [[Facial Recognition]]
	- requires:: [[Image Processing]]
	- enables:: [[Authentication]]
	- enables:: [[Fraud Detection]]
	- uses:: [[Deep Learning]]
	- uses:: [[Convolutional Neural Network]]
	- supports:: [[Know Your Customer]]
	- supports:: [[Multi-Factor Authentication]]
	- relatedTo:: [[Access Control]]
	- relatedTo:: [[Cybersecurity]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
