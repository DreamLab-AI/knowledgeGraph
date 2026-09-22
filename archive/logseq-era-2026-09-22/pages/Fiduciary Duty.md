public:: true

# Fiduciary Duty

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:fiduciary-duty", "@type":"Page", "title":"Fiduciary Duty", "vc:slug":"fiduciary-duty", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:fiduciary-duty",
  "@type":"Class",
  "label":"Fiduciary Duty",
  "definition":"A fiduciary duty is a legal and ethical obligation requiring one party, the fiduciary, to act in the best interests of another, the beneficiary, with loyalty, prudence, and good faith. It typically encompasses a duty of loyalty that prohibits self-dealing and conflicts of interest, and a duty of care that demands competent, diligent management of the beneficiary's affairs. Fiduciary duties arise in relationships such as those between directors and shareholders, trustees and beneficiaries, and asset managers and clients.",
  "domain":"governance",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:corporate-governance","label":"Corporate Governance"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:accountability","label":"Accountability"},{"@id":"urn:ngm:class:trust","label":"Trust"}],
    "dependsOn":[{"@id":"urn:ngm:class:legal-framework","label":"Legal Framework"}],
    "enables":[{"@id":"urn:ngm:class:investor-protection","label":"Investor Protection"}],
    "supports":[{"@id":"urn:ngm:class:corporate-governance","label":"Corporate Governance"}],
    "implements":[{"@id":"urn:ngm:class:ethics","label":"Ethics"}],
    "uses":[{"@id":"urn:ngm:class:compliance","label":"Compliance"}],
    "partOf":[{"@id":"urn:ngm:class:corporate-governance","label":"Corporate Governance"}],
    "bridgesTo":[{"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"}],
    "relatedTo":[{"@id":"urn:ngm:class:asset-management","label":"Asset Management"},{"@id":"urn:ngm:class:ethics","label":"Ethics"},{"@id":"urn:ngm:class:governance","label":"Governance"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A fiduciary duty obliges a fiduciary to act in a beneficiary's best interests with loyalty and prudence. It combines a duty of loyalty and a duty of care, is grounded in a [[Legal Framework]], demands [[Accountability]] and [[Trust]], and is central to [[Corporate Governance]].
- ### Overview
- The relationship places one party in a position of trust over another's interests, property, or affairs, and imposes heightened obligations beyond ordinary contractual dealing.
- The duty of loyalty forbids the fiduciary from profiting at the beneficiary's expense and requires disclosure and avoidance of conflicts of interest.
- The duty of care requires the fiduciary to act with the competence and diligence a prudent person would exercise in like circumstances.
- ### Key aspects
- Loyalty and the avoidance of self-dealing and undisclosed conflicts of interest.
- Care, skill, and diligence in managing the beneficiary's interests.
- Good faith and candour, including timely disclosure of material information.
- Remedies for breach, which can include disgorgement of profits and personal liability.
- ### Applications
- Directors and officers owing duties to a company and its shareholders.
- Trustees administering assets for the benefit of named beneficiaries.
- Investment advisers and asset managers acting for clients.
- Agents, partners, and guardians acting on behalf of principals or dependants.
- ### Relationships
- requires:: [[Accountability]]
- requires:: [[Trust]]
- dependsOn:: [[Legal Framework]]
- enables:: [[Investor Protection]]
- supports:: [[Corporate Governance]]
- implements:: [[Ethics]]
- uses:: [[Compliance]]
- partOf:: [[Corporate Governance]]
- bridgesTo:: [[Regulatory Compliance]]
- relatedTo:: [[Asset Management]]
- relatedTo:: [[Ethics]]
- relatedTo:: [[Governance]]
- ### Provenance
- updated:: 2026-06-15
