public:: true

# Digital Dualism
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eddecfa06478b1c60af9fdc5a2d788effa50f884f647325d3b75147c27841ec9",
  "@type": "Page",
  "vc:slug": "digital-dualism",
  "title": "Digital Dualism",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blended-reality",
      "vc:label": "Blended Reality"
    },
    {
      "@id": "urn:visionflow:linked:digital-embodiment",
      "vc:label": "Digital Embodiment"
    },
    {
      "@id": "urn:visionflow:linked:hybrid-space",
      "vc:label": "Hybrid Space"
    },
    {
      "@id": "urn:visionflow:linked:phygital-experience",
      "vc:label": "Phygital Experience"
    },
    {
      "@id": "urn:visionflow:owl:class:augmented-reality",
      "vc:label": "Augmented Reality"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "Metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": ""
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Dualism"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:digital-dualism",
  "@type": "Class",
  "label": "Digital Dualism",
  "definition": "Digital Dualism is the conceptual framework positing a fundamental, hierarchical separation between digital/virtual and physical/offline experience domains, treating them as mutually exclusive rather than mutually constitutive. Critiqued by Nathan Jurgenson (2011), who proposed an augmented reality perspective recognising that digital and physical are increasingly entangled: digital interactions produce physical consequences, and physical activities generate digital traces. The critique is particularly relevant to metaverse and telecollaboration design, where dualist assumptions lead to poorly integrated hybrid experiences.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:metaverse",
      "label": "Metaverse"
    }
  ],
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:telecollaboration", "label": "Telecollaboration"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:metaverse", "label": "Metaverse"},
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:digital-dualism:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:eddecfa06478b1c60af9fdc5a2d788effa50f884f647325d3b75147c27841ec9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blended Reality]]",
      "resolved": "urn:visionflow:linked:blended-reality",
      "kind": "StubLink"
    },
    {
      "raw": "[[Digital Embodiment]]",
      "resolved": "urn:visionflow:linked:digital-embodiment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hybrid Space]]",
      "resolved": "urn:visionflow:linked:hybrid-space",
      "kind": "StubLink"
    },
    {
      "raw": "[[Phygital Experience]]",
      "resolved": "urn:visionflow:linked:phygital-experience",
      "kind": "StubLink"
    },
    {
      "raw": "[[Augmented Reality]]",
      "resolved": "urn:visionflow:owl:class:augmented-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Digital Dualism is a concept within the mv domain.

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalDualism
  - owl-role:: Concept

- ### Relationships
  - **contrastsWith**: Augmented Reality, Telecollaboration (AR and telecollaboration assume integration, not separation)
  - **relatedTo**: Metaverse, Digital Identity (metaverse design and identity continuity are directly affected by dualist assumptions)
  - **bridgesTo**: Digital Twin (digital twins exemplify the physical-digital integration that refutes strong dualism)

  - is-subclass-of:: [[Metaverse]]

- ### Content

  #### Key Characteristics
  - **Binary Opposition**: Digital vs. physical as exclusive categories
  - **Hierarchical Valuation**: Physical often privileged as "real"
  - **Temporal Separation**: "Online" and "offline" as discrete states
  - **Identity Fragmentation**: Digital self vs. physical self
  - **Experiential Dichotomy**: Virtual experiences seen as less authentic

  ## Theoretical Origins

  ### Cartesian Mind-Body Dualism
  - Extension of mind-matter separation to digital-physical
  - Virtual spaces as "mental" vs. physical as "material"
  - Problematic parallel with historical dualist thinking

  ### Early Internet Culture
  - "Cyberspace" as separate realm (Gibson, Barlow)
  - "Logging in/out" metaphors reinforcing separation
  - Virtual communities as alternative to physical

  ### Academic Critiques
  - Nathan Jurgenson's critique (2011)
  - Call for "augmented reality" perspective
  - Recognition of blended experiences

  ## Arguments Against Digital Dualism

  ### Empirical Refutation
  - Constant connectivity blurs boundaries
  - Digital interactions have physical consequences
  - Physical activities generate digital traces

  ### Phenomenological Integration
  - Experience is unified, not compartmentalized
  - Digital extends rather than replaces physical
  - Blended reality as default contemporary mode

  ### Social Construction
  - "Real" is socially defined, not inherent
  - Virtual relationships are "real" relationships
  - Digital labor is "real" labor

  ### Economic Realities
  - Virtual goods have monetary value
  - Digital economy intertwined with physical
  - Metaverse real estate has real-world implications

  ## Manifestations of Digital Dualism

  ### Language
  - "IRL" (In Real Life) vs. online
  - "Logging off" to return to reality
  - "Virtual" as synonym for "not real"

  ### Social Hierarchies
  - Dismissing online friendships as lesser
  - Privileging face-to-face over mediated interaction
  - Devaluing virtual labor and achievements

  ### Policy & Law
  - Delayed regulation of digital harms
  - Virtual property rights ambiguity
  - Treating cybercrimes as less serious

  ### Design Assumptions
  - Separating digital from physical services
  - Assuming offline as default, online as supplement
  - Ignoring hybrid/blended use cases

  ## Alternative Framework: Augmented Reality Perspective

  ### Integrated Ontology
  - Digital and physical as mutually constitutive
  - Neither subordinate to the other
  - Experience as inherently hybrid

  ### Continuous Spectrum
  - Rather than binary, recognize gradations
  - Varying degrees of digital mediation
  - Context-dependent integration

  ### Situated Experience
  - All experience is "real" to experiencer
  - Materiality takes multiple forms
  - Authenticity not determined by medium

  #### Related Concepts
  - [[Augmented Reality]]
  - [[Blended Reality]]
  - [[Digital Embodiment]]
  - [[Hybrid Space]]
  - [[Phygital Experience]]

  ## Implications for Metaverse Design

  ### Avoid Dualist Assumptions
  - Don't treat metaverse as "escape" from reality
  - Recognize physical consequences of virtual actions
  - Design for blended experiences

  ### Identity Continuity
  - Enable fluid identity across contexts
  - Avoid forced separation of digital/physical selves
  - Support integrated social graphs

  ### Economic Integration
  - Seamless virtual-physical transactions
  - Recognize virtual labor value
  - Interoperable digital-physical assets

  ### Policy & Governance
  - Consistent standards across realms
  - Equal protection for virtual harms
  - Recognition of hybrid rights

  ## Critiques of Anti-Dualism

  ### Overcorrection Risk
  - Ignoring meaningful differences between mediated and unmediated
  - Obscuring power dynamics in digital capitalism
  - Flattening distinct phenomenological qualities

  ### Practical Utility
  - Boundaries useful for work-life balance
  - "Unplugging" as legitimate need
  - Mental health benefits of separation

  ## Future Trajectories

  ### Brain-Computer Interfaces
  - Ultimate challenge to digital dualism
  - Direct neural integration of digital
  - Obsolescence of "interface" concept

  ### Persistent Metaverse
  - Always-on presence blurs boundaries
  - Digital events with physical gravity
  - Reputation systems spanning realms

  ### Legal Recognition
  - Virtual property rights
  - Metaverse citizenship
  - Cross-realm identity verification

  #### References
  - Jurgenson, N. (2011). "Digital Dualism versus Augmented Reality"
  - Jurgenson, N. (2012). "When Atoms Meet Bits: Social Media, the Mobile Web and Augmented Revolution"
  - Boellstorff, T. (2008). *Coming of Age in Second Life*
  - Ito, M. et al. (2009). *Hanging Out, Messing Around, and Geeking Out*

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
