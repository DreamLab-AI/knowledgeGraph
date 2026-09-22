public:: true

# iProov
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a8d8d259e1c46824f654bae3b118c45547d6802094636a88cdc4f77f2d7ce30b",
  "@type": "Page",
  "vc:slug": "i-proov",
  "title": "iProov",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:facial-recognition",
      "vc:label": "Facial Recognition"
    },
    {
      "@id": "urn:visionflow:linked:identity-verification-system",
      "vc:label": "Identity Verification System"
    },
    {
      "@id": "urn:visionflow:linked:onfido",
      "vc:label": "Onfido"
    },
    {
      "@id": "urn:visionflow:linked:biometric-authentication",
      "vc:label": "Biometric Authentication"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "iProov"
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
  "@id": "urn:ngm:class:i-proov",
  "@type": "Class",
  "label": "iProov",
  "definition": "iProov is a British biometric technology company founded in 2011 that specialises in remote face verification and liveness detection for digital identity assurance. Its core technology, Genuine Presence Assurance, uses controlled illumination sequences to verify that a real, live person is present during an online authentication event, distinguishing genuine users from spoofing attacks using photographs, videos, or synthetic deepfakes. iProov is deployed by governments, financial institutions, and healthcare providers to underpin Know Your Customer (KYC) onboarding, border control systems, and high-assurance remote authentication. The platform integrates with broader identity document verification and identity orchestration frameworks, providing a biometric binding layer within electronic identity (eID) and digital wallet schemes.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:biometric-authentication",
      "label": "Biometric Authentication"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:facial-recognition",
        "label": "Facial Recognition"
      },
      {
        "@id": "urn:ngm:class:liveness-detection",
        "label": "Liveness Detection"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:identity-verification-system",
        "label": "Identity Verification System"
      },
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:digital-onboarding",
        "label": "Digital Onboarding"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:onfido",
        "label": "Onfido"
      },
      {
        "@id": "urn:ngm:class:jumio",
        "label": "Jumio"
      },
      {
        "@id": "urn:ngm:class:face-id",
        "label": "Face ID"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:deepfake-detection",
        "label": "Deepfake Detection"
      },
      {
        "@id": "urn:ngm:class:presentation-attack-detection",
        "label": "Presentation Attack Detection"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      },
      {
        "@id": "urn:ngm:class:e-idas",
        "label": "eIDAS"
      },
      {
        "@id": "urn:ngm:class:iso-30107",
        "label": "ISO 30107"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:iproov-biometrics",
      "label": "iProov Biometrics"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:i-proov:e06b11b611b5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a8d8d259e1c46824f654bae3b118c45547d6802094636a88cdc4f77f2d7ce30b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Facial Recognition]]",
      "resolved": "urn:visionflow:linked:facial-recognition",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Verification System]]",
      "resolved": "urn:visionflow:linked:identity-verification-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Onfido]]",
      "resolved": "urn:visionflow:linked:onfido",
      "kind": "StubLink"
    },
    {
      "raw": "[[Biometric Authentication]]",
      "resolved": "urn:visionflow:linked:biometric-authentication",
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
  - iProov is a British [[Biometric Authentication]] and face verification company, founded in 2011, whose proprietary technology confirms that a real, live human being is present during a remote [[Identity Verification System]] event. Its Genuine Presence Assurance technology uses server-controlled, dynamic illumination sequences projected onto the user's face to distinguish a physically present person from spoofing artefacts such as photographs, replayed videos, or AI-generated [[Deepfake Detection]] attacks. By binding a confirmed live face to a trusted identity document, iProov provides a high-assurance biometric layer within [[Know Your Customer]] onboarding, [[Electronic Identity]] schemes, and border-control automation programmes.

- ### Overview
  - iProov was founded in London in 2011 by Andrew Bud CBE and has grown into a leading provider of remote face biometric assurance, operating across government, banking, healthcare, and travel verticals.
  - The company's core differentiator is its patented Flashmark and Genuine Presence Assurance (GPA) approach, which generates a one-time, server-side illumination challenge that is impossible to replay or synthesise in real time, making it resistant to both presentation attacks (printed photos, masks, video replays) and digital injection attacks (virtual cameras, deepfakes injected at the API layer).
  - iProov operates as a cloud-based biometric service: the user faces their device camera, the iProov SDK captures facial imagery under the challenge illumination, and the cloud server determines whether a genuine human face was present, returning a pass/fail result along with confidence scores.
  - Because processing occurs server-side, iProov can update threat models centrally without requiring client-side updates, providing continuous resilience against evolving attack vectors.
  - The platform is used in production by the UK Home Office, NHS Login, the US Department of Homeland Security, Singapore's Singpass, the European Union digital identity trials, and numerous banks deploying [[Digital Onboarding]] at scale.

- ### Key Components
  - **Genuine Presence Assurance (GPA)**
    - iProov's signature product; uses a one-time dynamic light sequence generated server-side, reflected off the live human face and captured by the device camera.
    - Ensures both passive liveness (the user is real) and active freshness (the biometric was captured in this session, not replayed).
    - Provides the highest assurance tier against [[Presentation Attack Detection]] including 3D masks and injected synthetic streams.
  - **Flashmark**
    - The specific patented illumination-based watermarking technique within GPA.
    - The server issues a unique colour-sequence pattern; the client face must reflect those colours in the expected temporal order.
    - The sequence is cryptographically seeded and single-use, making pre-recording attacks computationally infeasible.
  - **Liveness Detection Engine**
    - Implements both passive and active [[Liveness Detection]] modes.
    - Passive liveness analyses facial texture and micro-features using [[Computer Vision]] and [[Deep Learning]] without requiring the user to perform head movements.
    - Active liveness (the GPA mode) adds the dynamic illumination challenge for higher assurance contexts.
  - **Biometric Security Operations Centre (iSOC)**
    - A dedicated threat intelligence function that monitors attack patterns globally, feeds threat data back into model updates, and issues alerts to customers when novel attack vectors emerge.
    - Enables rapid response without client SDK updates.
  - **SDK and API Integration Layer**
    - Available for iOS, Android, and web (JavaScript/WebAssembly).
    - Integrates with [[Identity Orchestration]] platforms, document verification providers, and customer identity and access management (CIAM) systems.
    - Supports standards-aligned token flows for interoperability with [[Electronic Identity]] frameworks.

- ### Mechanisms
  - **Enrolment flow**: the user submits a live selfie under the GPA challenge; the biometric template is stored (encrypted, server-side) and linked to their verified identity record.
  - **Authentication flow**: on subsequent logins, a new GPA challenge is issued; the captured face is compared against the enrolled template using a [[Neural Network]] matching model; a match with liveness confirmation grants access.
  - **Injection attack resistance**: iProov monitors the camera data stream for signs of virtual camera substitution or API-layer injection of synthetic imagery, a threat class invisible to passive liveness approaches.
  - **Presentation attack resistance**: calibrated to ISO 30107-3 PAD (Presentation Attack Detection) methodology, validated under NIST FRVT and iBeta testing protocols.

- ### Applications
  - **Government digital identity and border control**
    - UK Home Office e-gates and visa application biometric matching.
    - US Department of Homeland Security Trusted Traveller Programme integration.
    - Singapore Singpass face verification for government service access.
    - EU digital identity wallet pilots under the [[eIDAS]] Regulation 2.0 framework.
  - **Financial services and KYC**
    - Remote [[Know Your Customer]] onboarding for retail banks, challenger banks, and investment platforms.
    - [[Anti-Money Laundering]] compliance workflows where identity assurance must meet regulatory standards.
    - Credit card and loan application verification where document plus biometric confirmation is required.
  - **Healthcare**
    - NHS Login biometric verification for patient access to health records.
    - Prescription management and telehealth consultation identity assurance.
  - **Digital wallets and credentials**
    - Binding of [[Digital Wallet]] credentials to verified biometric identities.
    - Verifiable credential issuance workflows where a live-face check anchors the credential to a real person.
  - **Travel and hospitality**
    - Airport self-service check-in and boarding gate biometric matching.
    - Hotel and car-rental pre-arrival identity verification.

- ### Relationships
  - subClassOf:: [[Biometric Authentication]]
  - requires:: [[Facial Recognition]]
  - requires:: [[Liveness Detection]]
  - requires:: [[Camera Hardware]]
  - enables:: [[Identity Verification System]]
  - enables:: [[Know Your Customer]]
  - enables:: [[Digital Onboarding]]
  - enables:: [[Remote Authentication]]
  - hasPart:: [[Genuine Presence Assurance]]
  - hasPart:: [[Flashmark]]
  - partOf:: [[Identity Orchestration]]
  - uses:: [[Deep Learning]]
  - uses:: [[Computer Vision]]
  - uses:: [[Neural Network]]
  - contrastsWith:: [[Onfido]]
  - contrastsWith:: [[Jumio]]
  - contrastsWith:: [[Face ID]]
  - supports:: [[Electronic Identity]]
  - supports:: [[Anti-Money Laundering]]
  - supports:: [[Digital Wallet]]
  - bridgesTo:: [[Deepfake Detection]]
  - bridgesTo:: [[Presentation Attack Detection]]
  - relatedTo:: [[GDPR]]
  - relatedTo:: [[eIDAS]]
  - relatedTo:: [[ISO 30107]]

- ### Standards & Context
  - **ISO/IEC 30107-3** — the international standard for Presentation Attack Detection (PAD), against which iProov's liveness technology is independently tested by iBeta Quality Assurance (a NIST-accredited lab).
  - **NIST Face Recognition Vendor Test (FRVT)** — US government benchmark for face recognition accuracy; iProov participates to demonstrate performance across demographic groups.
  - **eIDAS Regulation (EU) 2016/679 and eIDAS 2.0** — the EU regulatory framework for electronic identity; iProov's face verification is deployed in member-state eID wallet pilots requiring high-assurance (LoA High) biometric binding.
  - **GDPR** — iProov processes biometric data classified as a special category under Article 9 of the [[GDPR]]; it holds ISO/IEC 27001 certification and publishes a biometric data processing impact assessment model.
  - **UK DIATF (Digital Identity and Attributes Trust Framework)** — iProov is certified under the UK Government's trust framework for digital identity services, enabling use by government and regulated-sector customers.
  - **SOC 2 Type II** — annual third-party audit of iProov's security controls and operational practices.
  - The rise of AI-generated [[Deepfake Detection]] threats and [[Presentation Attack Detection]] improvements represent the principal technology frontier driving iProov's ongoing research investment.
  - [[Identity Orchestration]] platforms (e.g. ForgeRock, Ping Identity, Okta) integrate iProov via SDKs to compose full identity journeys combining document verification, biometric liveness, and risk scoring.

- ### Competitive Landscape
  - iProov competes primarily with [[Onfido]] (document + selfie liveness, now part of Entrust), [[Jumio]] (document AI plus liveness), and specialised liveness vendors such as FaceTec and BioID.
  - Its differentiator is the server-controlled illumination challenge, which no commodity selfie-liveness product replicates, making it the preferred choice for high-assurance government and regulated financial use cases where injection attacks are a significant threat model.
  - [[Face ID]] (Apple) and equivalent device-local biometrics offer passive liveness via structured-light sensors but are bound to a single device and cannot perform remote identity onboarding against a third-party identity document.
  - [[Biometric Authentication]] more broadly is converging toward multi-modal approaches; iProov's face-centric model is complemented by [[Identity Orchestration]] layers that may add voice, behavioural, or document signals.

- ### Provenance
  - sources:: iProov corporate documentation; UK Home Office published deployment announcements; ISO/IEC 30107-3 PAD standard; NIST FRVT published reports; eIDAS Regulation (EU) 2019/1157 and 2024/1183; NHS Digital (NHS Login) published technical specifications
  - updated:: 2026-06-13
