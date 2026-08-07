public:: true

# Disinformation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:66cebabe65797a1219cb76d85a7cd1e819339055c85b571e0a5c090b6ad58b19",
  "@type": "Page",
  "vc:slug": "disinformation",
  "title": "Disinformation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:information-integrity",
      "vc:label": "Information Integrity"
    },
    {
      "@id": "urn:visionflow:linked:synthetic-media",
      "vc:label": "Synthetic Media"
    },
    {
      "@id": "urn:visionflow:linked:deepfakes",
      "vc:label": "Deepfakes"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:disinformation",
  "@type": "Class",
  "label": "Disinformation",
  "definition": "Disinformation is false or misleading information created and spread deliberately to deceive, manipulate, or cause harm — typically to advance a political, financial, or strategic objective. Its defining feature is intent: unlike misinformation, which is false content shared without the awareness that it is wrong, disinformation is engineered and disseminated in bad faith, often through coordinated inauthentic behaviour, fabricated sources, or synthetic media such as deepfakes. It threatens information integrity and media authenticity by corrupting the shared factual basis on which public discourse and democratic decision-making depend, and it is a central concern of trust-and-safety, electoral-security, and content-provenance work.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:trust-and-safety",
    "label": "Trust and Safety"
  },
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:information-integrity",
        "label": "Information Integrity"
      },
      {
        "@id": "urn:ngm:class:media-authenticity",
        "label": "Media Authenticity"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:synthetic-media",
        "label": "Synthetic Media"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:deepfakes",
        "label": "Deepfakes"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "Disinformation is false or misleading information created and spread deliberately to deceive, manipulate, or cause harm — typically to advance a political, financial, or strategic objective. Its defining feature is intent: unlike misinformation, which is false content shared without the awareness that it is wrong, disinformation is engineered and disseminated in bad faith, often through coordinated inauthentic behaviour, fabricated sources, or synthetic media such as deepfakes. It threatens information integrity and media authenticity by corrupting the shared factual basis on which public discourse and democratic decision-making depend, and it is a central concern of trust-and-safety, electoral-security, and content-provenance work."

- ### Semantic Classification
  - owl-class:: governance:Disinformation
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Trust and Safety]]
  - contrasts-with:: [[Information Integrity]]
  - contrasts-with:: [[Media Authenticity]]
  - related-to:: [[Deepfakes]]

- ### Content

  ## Definition

  **Disinformation** is false or misleading content that is deliberately produced and circulated to deceive. The word turns on intent. Misinformation is wrong information passed on innocently — someone shares a false claim believing it true. Disinformation is manufactured and pushed in bad faith by an actor who knows, or does not care, that it is false and who seeks a specific effect: swaying an election, discrediting an institution, moving a market, or sowing confusion. Treating the two as interchangeable erases the actor and the intent that make disinformation a security and governance problem rather than a mere accuracy problem.

  Because it is engineered, disinformation tends to exploit the mechanics of distribution. Coordinated inauthentic accounts amplify it, fabricated or spoofed sources lend it false authority, and increasingly capable synthetic media — including deepfakes — supply fabricated evidence that is hard to distinguish from the genuine article. This directly attacks information integrity and media authenticity, the properties a healthy information ecosystem relies on.

  ## Current Landscape

  Countering disinformation has become a substantial field spanning platform trust-and-safety teams, electoral authorities, national-security agencies, and researchers. Detection combines behavioural signals — coordinated posting, network structure, account provenance — with content analysis, though the arms race with generative tooling keeps detection perpetually uncertain. A complementary strategy shifts from detecting falsehood to proving authenticity: content-provenance standards such as C2PA attach verifiable origin metadata so that genuine media can be cryptographically attested, narrowing the space in which fabricated content can pass unchallenged. Governance responses range from platform policy and transparency reporting to statutory duties, all navigating the tension between limiting deliberate deception and protecting legitimate expression.
