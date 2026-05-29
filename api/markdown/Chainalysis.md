public:: true

# Chainalysis
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:chainalysis",
  "@type": "Page",
  "vc:slug": "chainalysis",
  "title": "Chainalysis",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:chainalysis",
  "@type": "Class",
  "label": "Chainalysis",
  "definition": "Chainalysis is a blockchain data and analytics company that provides investigative, compliance, and intelligence tools to government agencies, financial institutions, and cryptocurrency businesses for monitoring, tracing, and understanding blockchain transaction flows. Founded in 2014 and headquartered in New York, it maintains the largest proprietary database of attributed blockchain addresses — linking pseudonymous on-chain addresses to real-world entities through OSINT, exchange data, and investigative techniques — and offers products including Reactor (investigation graph tool), KYT (Know Your Transaction compliance monitoring), and market intelligence services. Chainalysis is a primary contractor to agencies including the US Department of Justice, IRS, and OFAC for cryptocurrency-related investigations.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:blockchain-analytics", "label": "Blockchain Analytics"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:transaction-monitoring", "label": "Transaction Monitoring"},
      {"@id": "urn:ngm:class:blockchain-compliance", "label": "Blockchain Compliance"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:aml-kyc-compliance", "label": "AML KYC Compliance"},
      {"@id": "urn:ngm:class:sanctions-compliance", "label": "Sanctions Compliance"},
      {"@id": "urn:ngm:class:digital-forensics", "label": "Digital Forensics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:fatf-travel-rule", "label": "FATF Travel Rule"},
      {"@id": "urn:ngm:class:know-your-customer", "label": "Know Your Customer"},
      {"@id": "urn:ngm:class:sanctions-screening", "label": "Sanctions Screening"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Chainalysis is the leading commercial [[Blockchain Analytics]] firm, providing software and data services that de-anonymise cryptocurrency transactions by clustering pseudonymous addresses into entity groups and attributing them to known services, individuals, or criminal operations. Its core value proposition rests on a proprietary address attribution database built through data partnerships, legal processes, and open-source intelligence. The platform enables [[AML KYC Compliance]] for virtual asset service providers (VASPs), supports [[Sanctions Compliance]] screening against OFAC designated addresses, and provides investigative infrastructure for law enforcement pursuing cryptocurrency-related financial crime through [[Digital Forensics]] methodologies.

- ### Relationships
  - Chainalysis operationalises [[Transaction Monitoring]] and [[Blockchain Compliance]] at scale for regulators and financial institutions. It enables [[AML KYC Compliance]], [[Sanctions Compliance]], and [[Digital Forensics]] investigations by attributing blockchain addresses to real entities. Its products directly support compliance with [[FATF Travel Rule]] obligations and [[Know Your Customer]] requirements imposed on VASPs. [[Sanctions Screening]] against OFAC's specially designated nationals list is a core use case, particularly after OFAC sanctions against Tornado Cash (2022) created obligations for VASPs to screen user activity against sanctioned smart contract addresses.

- ### Content
  - Chainalysis was founded in 2014 by Michael Gronager and Jonathan Levin in the aftermath of the Mt. Gox hack, which demonstrated the traceability of Bitcoin flows on a public ledger. The company's early work traced the movement of stolen Mt. Gox funds, establishing proof-of-concept for blockchain forensics. It secured early contracts with the US Drug Enforcement Administration (DEA) and other law enforcement agencies, positioning itself at the intersection of cryptocurrency and law enforcement. The company grew rapidly through subsequent years, raising over $500 million in venture funding and reaching a $8.6 billion valuation in 2022 before broader market corrections.

  - Chainalysis's technical methods are centred on heuristic clustering: transaction graph analysis combined with UTXO (unspent transaction output) co-spend heuristics, common input ownership heuristics, and change address detection. These clustering techniques group addresses likely controlled by the same entity into "clusters" — essentially entity proxies on the blockchain. Attribution then associates clusters with known services (exchanges, mixers, darknet markets) through direct data relationships or investigative techniques. The resulting attributed address database, covering Bitcoin, Ethereum, and dozens of other chains, is the foundation of Reactor (the investigation tool used by law enforcement) and KYT (Know Your Transaction, the compliance API used by VASPs to screen incoming and outgoing transfers).

  - The company's government contracts — obtained through vehicles including the US General Services Administration (GSA) Schedule and sole-source awards — have attracted both commercial success and controversy. Critics from the civil liberties and privacy communities argue that Chainalysis's methods involve probabilistic attribution that may incorrectly link addresses to individuals, and that the company's market position as an unaccountable private actor with significant influence over law enforcement cryptocurrency investigations lacks adequate oversight. Academic researchers have challenged the reliability of clustering heuristics. Privacy advocates note that the existence of companies like Chainalysis fundamentally undermines the pseudonymity premise of public blockchains, accelerating adoption of privacy-preserving alternatives.

  - By 2025, Chainalysis publishes the annual Crypto Crime Report — the most cited source of data on ransomware, darknet market, and scam volumes in the cryptocurrency ecosystem — and has expanded into market intelligence products serving institutional investors. Competition has intensified from Elliptic, TRM Labs, Nansen, and blockchain-native analytics tools. The regulatory landscape has expanded Chainalysis's addressable market: MiCA in the EU, the travel rule globally, and expanding VASP licensing regimes create compliance mandates that require transaction monitoring tools. However, the rise of zero-knowledge proof privacy systems (Zcash, Aztec, privacy-preserving rollups) poses a fundamental technical challenge to graph-analysis-based attribution, as these systems cryptographically delink transaction graphs.

