public:: true

# Sound Money
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sound-money",
  "@type": "Page",
  "vc:slug": "sound-money",
  "title": "Sound Money",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sound-money",
  "@type": "Class",
  "label": "Sound Money",
  "definition": "Sound Money refers to a monetary medium characterised by a stable, predictable supply that cannot be arbitrarily expanded by a government or central authority, thereby preserving purchasing power over time and functioning as a reliable store of value. The concept is historically associated with commodity-backed currencies—particularly the classical gold standard—and in the contemporary context with Bitcoin's algorithmically fixed supply schedule. Sound money theorists, drawing heavily on the Austrian School, argue that monetary expansion through credit creation distorts price signals, misallocates capital, and produces inflationary cycles that systematically transfer wealth from savers to debtors and from the public to the financial sector. The notion stands in direct opposition to the discretionary monetary policy frameworks of modern central banking.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:monetary-system", "label": "Monetary System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:austrian-economics", "label": "Austrian Economics"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-standard", "label": "Bitcoin Standard"},
      {"@id": "urn:ngm:class:inflation", "label": "Inflation"},
      {"@id": "urn:ngm:class:gold", "label": "Gold"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-value-proposition", "label": "Bitcoin Value Proposition"},
      {"@id": "urn:ngm:class:hyperbitcoinization", "label": "Hyperbitcoinization"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:monetary-policy-implementation", "label": "Monetary Policy Implementation"},
      {"@id": "urn:ngm:class:central-bank-digital-currency", "label": "Central Bank Digital Currency"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Sound Money]] is a monetary medium with a fixed or highly constrained supply that preserves purchasing power over time, historically associated with the [[Gold]] standard and contemporaneously with [[Bitcoin Standard]] theory, standing in direct opposition to [[Monetary Policy Implementation]] through discretionary central bank expansion.
- ### Relationships
  - [[Sound Money]] is the practical monetary expression of [[Austrian Economics]] theory, which holds that supply-capped money prevents the malinvestment cycles caused by credit expansion. [[Gold]] served as the classical sound money for centuries before the Bretton Woods system dissolved in 1971. The [[Bitcoin Standard]] adapts sound money principles to digital scarcity, with advocates arguing that the 21 million coin cap replicates gold's supply properties without the logistical constraints of physical commodities. [[Inflation]] is the primary antagonist to sound money, eroding the savings of those holding the currency. [[Central Bank Digital Currency]] systems are critiqued by sound money advocates as potentially enabling programmable inflation and spending controls antithetical to sound money properties. [[Hyperbitcoinization]] describes the speculative scenario in which Bitcoin displaces fiat currencies as the global reserve asset.
- ### Content
  - The philosophical foundations of sound money trace to classical economic thought, which distinguished between money as a commodity with intrinsic value and money as a state-issued token whose value rests on legal compulsion and public confidence. The gold standard, which pegged major currencies to a fixed quantity of gold from roughly 1870 to 1914, is the canonical historical implementation. Under the gold standard, governments were constrained in their ability to run sustained deficits because money creation required acquiring physical gold—a discipline that advocates credit with limiting government spending growth and maintaining price stability over multi-decade periods.

  - The collapse of the Bretton Woods system in 1971—when President Nixon suspended US dollar convertibility to gold—is treated by sound money advocates as a decisive turning point. Since then, central banks have operated under a pure fiat standard, with money supply constrained only by institutional mandates and political will. Austrian economists such as Murray Rothbard argued that this transition transferred seigniorage revenue from the public to the banking sector and systematically debased savings, particularly harming savers in the lower and middle income deciles who hold relatively more of their wealth in cash and fixed-income instruments rather than real assets that hedge [[Inflation]].

  - Bitcoin is the most significant contemporary implementation of sound money principles. Its supply schedule—hardcoded to produce 21 million coins through a halving mechanism that reduces the block reward every 210,000 blocks—is enforced by consensus rules that no central authority can unilaterally override. Saifedean Ammous's 2018 book "The Bitcoin Standard" articulated the argument that Bitcoin replicates the scarcity properties of [[Gold]] while eliminating the physical storage and transport costs of commodity money. This framing attracted significant institutional interest from investors seeking [[Inflation]] hedges, particularly during the 2020–2021 period of unprecedented quantitative easing.

  - Critics of sound money point to the historical correlation between gold standard adherence and deflationary crises, arguing that monetary rigidity prevented effective counter-cyclical policy during the Great Depression and that sound money's distributional benefits accrue primarily to creditors at the expense of debtors. Modern monetary economists argue that the discretionary [[Monetary Policy Implementation]] frameworks of independent central banks represent a superior institutional technology—capable of both price stability and counter-cyclical stabilisation—compared to the rigid supply constraints of commodity or Bitcoin standards. The debate remains live and politically charged, intersecting with questions of institutional trust, financial sovereignty, and the long-run trajectory of [[Central Bank Digital Currency]] architectures.
