public:: true

# Chain of Custody
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:chain-of-custody",
  "@type": "Page",
  "vc:slug": "chain-of-custody",
  "title": "Chain of Custody",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:chain-of-custody",
  "@type": "Class",
  "label": "Chain of Custody",
  "definition": "Chain of Custody is a documented, unbroken sequence of records that tracks the possession, handling, transfer, analysis, and disposition of physical or digital items from their point of origin to their ultimate use—most critically in legal proceedings and regulated industries. Each handoff event must be recorded with the identity of the parties involved, the time and location of transfer, and the state of the item, ensuring that the integrity and authenticity of the item can be demonstrated to any subsequent examiner. In digital contexts the concept extends to data provenance, AI training datasets, and blockchain-based asset transfer records.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:provenance-tracking", "label": "Provenance Tracking"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-evidence-chain-of-custody", "label": "Digital Evidence Chain of Custody"},
      {"@id": "urn:ngm:class:digital-forensics", "label": "Digital Forensics"},
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"},
      {"@id": "urn:ngm:class:data-provenance", "label": "Data Provenance"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:supply-chain-traceability", "label": "Supply Chain Traceability"},
      {"@id": "urn:ngm:class:compliance-verification", "label": "Compliance Verification"},
      {"@id": "urn:ngm:class:provenance-verification", "label": "Provenance Verification"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:audit-logging", "label": "Audit Logging"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Chain of Custody is the continuous, tamper-evident documentation of who held or controlled an item at every stage of its lifecycle, providing legal and operational assurance that evidence, data, or assets have not been altered or substituted—a foundation of [[Digital Forensics]] and [[Supply Chain Traceability]].

- ### Relationships
  - Chain of Custody is a form of [[Provenance Tracking]] that intersects with [[Digital Evidence Chain of Custody]] in criminal and civil litigation contexts, and with [[Data Provenance]] in AI and data science workflows. It relies on [[Audit Logging]] systems to create immutable records and depends on [[Compliance Verification]] processes to confirm the chain has not been broken. In supply chain contexts it directly supports [[Supply Chain Traceability]] by ensuring that goods and raw materials can be traced back to verified sources. Blockchain-based implementations are increasingly used to make chain-of-custody records tamper-resistant.

- ### Content
  - The chain of custody concept originated in legal and forensic contexts, where courts required prosecutors to demonstrate that physical evidence—fingerprints, biological samples, digital media—had not been contaminated or substituted between crime scene collection and courtroom presentation. Formalised procedures emerged in law enforcement agencies during the twentieth century, specifying sealed evidence bags, witness signatures, evidence locker access logs, and laboratory receipt confirmations. Failure to maintain an unbroken chain could render evidence inadmissible regardless of its probative value.

  - The mechanism works by requiring documentation at every transfer event: who gave the item, who received it, under what conditions, and in what state. In physical forensics this involves tamper-evident packaging and hash values of digital copies. In digital forensics the chain extends to computing hash checksums of disk images, logging who accessed analysis workstations, and recording every tool run against the evidence. The goal is to enable any third party—defence counsel, expert witnesses, appellate courts—to independently verify the provenance of every finding.

  - Modern supply chains and pharmaceutical distribution networks have adopted chain-of-custody principles to meet regulatory requirements such as the US Drug Supply Chain Security Act, which mandates serialisation and lot-level traceability for prescription medicines. In the art market, provenance documentation prevents the laundering of stolen or looted cultural property. In AI development, analogous concepts apply to training data lineage: knowing which datasets were used, under what licences, and whether they have been modified is essential for copyright compliance and bias auditing.

  - From 2023 to 2025, distributed ledger technology has been adopted in several sectors to automate chain-of-custody documentation. Smart contracts on permissioned blockchains enforce transfer rules and record provenance immutably, reducing the risk of fraudulent record alteration. Verifiable credentials issued by certifying bodies are embedded in custody records, enabling automated compliance checks. In AI governance, proposals for mandatory training data chain-of-custody—mirroring pharmaceutical batch records—have appeared in EU AI Act implementing regulations and US executive orders on AI, reflecting growing recognition that data integrity is foundational to model trustworthiness.