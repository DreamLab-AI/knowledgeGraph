public:: true

# BIS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bis",
  "@type": "Page",
  "vc:slug": "bis",
  "title": "BIS",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bis",
  "@type": "Class",
  "label": "BIS",
  "definition": "The Bank for International Settlements (BIS) is an international financial institution owned by member central banks, founded in 1930 and headquartered in Basel, Switzerland. It serves as a bank for central banks, providing financial services, research, and a forum for monetary and financial cooperation at the global level. The BIS hosts the Basel Committee on Banking Supervision, which produces globally influential prudential standards such as the Basel Accords, and runs the BIS Innovation Hub, which actively researches central bank digital currencies and financial technology. Through its publications and policy recommendations, the BIS exerts significant influence over global financial regulation and stability frameworks.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:central-bank", "label": "Central Bank"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:financial-stability", "label": "Financial Stability"},
      {"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"},
      {"@id": "urn:ngm:class:central-bank-digital-currency", "label": "Central Bank Digital Currency"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:monetary-policy-implementation", "label": "Monetary Policy Implementation"},
      {"@id": "urn:ngm:class:cross-border-payments", "label": "Cross-Border Payments"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:financial-infrastructure", "label": "Financial Infrastructure"},
      {"@id": "urn:ngm:class:financial-system", "label": "Financial System"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cbdcs", "label": "CBDCs"},
      {"@id": "urn:ngm:class:financial-technology", "label": "Financial Technology"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The BIS (Bank for International Settlements) is the central institution for [[Financial Stability]] cooperation between [[Central Bank]] members, acting as banker to central banks and producing the prudential standards that underpin global [[Financial Infrastructure]].

- ### Relationships
  - The BIS occupies a pivotal position in the global [[Financial System]], providing settlement services and liquidity to its member [[Central Bank]] institutions. Its Basel Committee drives [[Financial Regulation]] through capital adequacy frameworks that every major banking jurisdiction adopts. The BIS Innovation Hub directly researches [[Central Bank Digital Currency]] and [[CBDCs]], publishing influential reports that shape national CBDC roadmaps. Through Project Nexus and similar multilateral experiments, the BIS advances [[Cross-Border Payments]] interoperability, while its Monetary and Economic Department produces research that informs [[Monetary Policy Implementation]] worldwide. The institution also engages with [[Financial Technology]] through sandbox programmes testing digital ledgers, tokenisation, and programmable money.

- ### Content
  - The BIS was established in 1930, initially to manage reparations payments arising from the First World War under the Young Plan. Its mandate quickly broadened into general central bank cooperation, and it survived the Second World War as a neutral institution. Today it counts 63 central banks among its shareholders, representing economies responsible for approximately 95 per cent of world GDP.

  - The Basel Committee on Banking Supervision, secretariat hosted by the BIS, produced the Basel I, II, and III accords that define how banks worldwide must calculate and hold regulatory capital. Basel III, substantially finalised after the 2008 financial crisis, introduced liquidity coverage ratios, net stable funding ratios, and leverage ratio requirements that fundamentally reshaped global banking risk management. Implementation deadlines from Basel III reforms continue to affect bank balance sheets well into the 2020s.

  - The BIS Innovation Hub, established in 2019, operates centres in Basel, Hong Kong, Singapore, London, Stockholm, and other cities. Its research agenda covers tokenisation of financial assets, wholesale and retail CBDC design, cyber security for financial market infrastructure, and RegTech applications. The Hub collaborates with the IMF, World Bank, and national central banks on prototype systems, publishing findings openly to inform policy without being constrained by commercial interests.

  - In the domain of digital currencies, the BIS has published extensive research analysing the monetary policy implications of [[CBDCs]], including concerns about bank disintermediation and financial stability risks from rapid adoption. The institution generally advocates for two-tier CBDC architectures where commercial banks maintain customer relationships, preserving existing financial intermediation while enabling the benefits of digital sovereign currency.

  - The BIS's quarterly reviews and annual reports are amongst the most widely cited publications in international macroeconomics, covering topics from shadow banking and asset price cycles to the implications of AI and distributed ledger technologies for [[Financial Infrastructure]] resilience.
