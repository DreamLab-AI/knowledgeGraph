public:: true

# Transfer Impact Assessment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:transfer-impact-assessment",
  "@type": "Page",
  "vc:slug": "transfer-impact-assessment",
  "title": "Transfer Impact Assessment",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:transfer-impact-assessment",
  "@type": "Class",
  "label": "Transfer Impact Assessment",
  "definition": "A Transfer Impact Assessment (TIA) is a documented evaluation organisations conduct before transferring personal data across borders to determine whether the destination jurisdiction provides protection essentially equivalent to that of the originating data-protection regime. Required in the EU following the Schrems II ruling, a TIA examines the destination's surveillance laws, the legal remedies available to data subjects, and any supplementary technical and organisational measures needed to make the transfer lawful. It is a core compliance artefact for international data flows under the GDPR.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:data-protection", "label": "Data Protection"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:compliance", "label": "Compliance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:gdpr", "label": "GDPR"},
      {"@id": "urn:ngm:class:privacy", "label": "Privacy"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A Transfer Impact Assessment is a documented evaluation of whether a cross-border personal-data transfer reaches a destination offering essentially equivalent protection, identifying any supplementary measures needed to make it lawful.

- ### Relationships
  - Transfer Impact Assessment is a subclass of [[Regulatory Compliance]] and uses [[Data Protection]] law as its evaluative standard. It supports an organisation's broader [[Compliance]] programme and relates directly to the [[GDPR]] regime that mandates it and to the [[Privacy]] rights it is designed to safeguard.

- ### Content
  - The Transfer Impact Assessment arose from the Court of Justice of the European Union's 2020 Schrems II judgment, which invalidated the EU-US Privacy Shield and held that organisations relying on standard contractual clauses to export personal data must verify, case by case, that the destination country actually affords equivalent protection in practice. The TIA is the documented expression of that verification duty, transforming an abstract legal requirement into a repeatable assessment process.

  - A TIA proceeds through structured steps: map the transfer (what data, to whom, where, and why), identify the transfer mechanism relied upon, assess the destination's law and practice with particular attention to government access and surveillance powers, evaluate whether those powers undermine the safeguards in the contractual clauses, and where they do, determine supplementary measures — such as strong encryption with keys held only in the EU, pseudonymisation, or split processing — that restore an essentially equivalent level of protection.

  - The hard part is assessing foreign surveillance regimes and the practical remedies available to data subjects, which requires legal analysis of laws like the US FISA Section 702 and an honest judgement about whether technical measures genuinely neutralise the identified risks. A TIA that concludes no adequate safeguards are possible obliges the organisation to suspend or not proceed with the transfer, making it a substantive gate rather than a paperwork exercise.

  - As a compliance artefact, the TIA must be documented, kept current, and produced on request by supervisory authorities, demonstrating the accountability principle at the heart of the GDPR. Its prominence has grown with the proliferation of cloud services and global data flows, and it interacts with newer adequacy arrangements such as the EU-US Data Privacy Framework — which may simplify some transfers while leaving the underlying obligation to assess and document risk firmly in place.
