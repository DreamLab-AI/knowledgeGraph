public:: true

# Copyright

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:copyright", "@type":"Page", "title":"Copyright", "vc:slug":"copyright", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:copyright",
  "@type":"Class",
  "label":"Copyright",
  "definition":"Copyright is a legal right that grants the creator of an original work exclusive control over its reproduction, distribution, adaptation and public performance for a limited term. It arises automatically upon fixation of an expressive work and may be licensed, assigned or waived by the rights holder. Within governance it anchors how digital content, software and creative outputs are owned, shared and monetised.",
  "domain":"governance",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:intellectual-property-rights-framework","label":"Intellectual Property Rights Framework"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:intellectual-property-rights-framework","label":"Intellectual Property Rights Framework"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:licensing","label":"Licensing"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:provenance","label":"Provenance"},
      {"@id":"urn:ngm:class:regulation","label":"Regulation"}
    ],
    "enforcedBy":[
      {"@id":"urn:ngm:class:digital-rights-management","label":"Digital Rights Management"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:open-source-licence","label":"Open Source Licence"},
      {"@id":"urn:ngm:class:creative-commons","label":"Creative Commons"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:patent","label":"Patent"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:licensing","label":"Licensing"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:non-fungible-token","label":"Non-Fungible Token"},
      {"@id":"urn:ngm:class:content-moderation","label":"Content Moderation"},
      {"@id":"urn:ngm:class:compliance","label":"Compliance"},
      {"@id":"urn:ngm:class:governance","label":"Governance"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Copyright]] is a legal right granting a creator exclusive control over the reproduction, distribution and adaptation of an original work for a limited term. It is a core component of the [[Intellectual Property Rights Framework]] and is exercised through [[Licensing]] that defines permitted uses.
	- It arises automatically when an expressive work is fixed in a tangible form, and can be assigned, licensed or waived by the rights holder.
- ### Overview
	- Copyright protects original expression, text, software, images, audio and video, rather than ideas, facts or functional methods, which fall to other regimes such as the [[Patent]]. The protection is time-bounded and subject to exceptions and limitations that vary by jurisdiction.
	- Rights holders monetise and govern works through [[Licensing]], ranging from restrictive proprietary terms to permissive frameworks like an [[Open Source Licence]] or [[Creative Commons]] grant. Enforcement increasingly relies on [[Digital Rights Management]] and on clear [[Provenance]] records.
	- In digital ecosystems copyright intersects with [[Content Moderation]], platform liability and emerging tokenised ownership models such as the [[Non-Fungible Token]], all framed by broader [[Governance]] and [[Compliance]] requirements.
- ### Key aspects
	- Exclusive economic rights: reproduction, distribution, adaptation and communication to the public.
	- Moral rights of attribution and integrity in many jurisdictions.
	- Limited term followed by entry into the public domain.
	- Exceptions and limitations balancing rights against public interest.
	- Transfer and licensing instruments that allocate permitted uses.
- ### Applications
	- Governing ownership and reuse of software, datasets and media.
	- Structuring permissive sharing through [[Open Source Licence]] and [[Creative Commons]] terms.
	- Underpinning royalty and rights management in creative industries.
	- Anchoring authenticity and ownership claims for digital assets.
- ### Relationships
	- partOf:: [[Intellectual Property Rights Framework]]
	- hasPart:: [[Licensing]]
	- requires:: [[Provenance]]
	- requires:: [[Regulation]]
	- enforcedBy:: [[Digital Rights Management]]
	- enables:: [[Open Source Licence]]
	- enables:: [[Creative Commons]]
	- contrastsWith:: [[Patent]]
	- uses:: [[Licensing]]
	- relatedTo:: [[Non-Fungible Token]]
	- relatedTo:: [[Content Moderation]]
	- relatedTo:: [[Compliance]]
	- relatedTo:: [[Governance]]
- ### Provenance
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
	- updated:: 2026-06-15
