public:: true

# Liberal Radicalism
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:liberal-radicalism",
  "@type": "Page",
  "vc:slug": "liberal-radicalism",
  "title": "Liberal Radicalism",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:liberal-radicalism",
  "@type": "Class",
  "label": "Liberal Radicalism",
  "definition": "Liberal Radicalism (LR) is a mechanism-design framework, introduced by Buterin, Hitzig, and Weyl, for optimally funding public goods through a matching scheme in which contributions are pooled and the matching amount allocated to each project grows with the square of the sum of the square roots of individual contributions. This mathematical structure rewards the breadth of support — the number of distinct contributors — over the concentration of large donations, aligning funding with collective preference. It is the theoretical basis for quadratic funding as deployed in real-world grants programmes.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:mechanism-design",
      "label": "Mechanism Design"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:quadratic-funding",
        "label": "Quadratic Funding"
      },
      {
        "@id": "urn:ngm:class:public-goods-funding",
        "label": "Public Goods Funding"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:quadratic-voting",
        "label": "Quadratic Voting"
      }
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Liberal Radicalism is a mechanism-design framework for funding public goods in which matched funding grows with the square of the sum of the square roots of contributions, rewarding breadth of support over large individual donations.

- ### Relationships
  - Liberal Radicalism is a subclass of [[Mechanism Design]] and provides the formal foundation that enables [[Quadratic Funding]] and, more broadly, optimal [[Public Goods Funding]]. It relates to [[Quadratic Voting]], with which it shares the square-root mathematical structure for aggregating intensity of preference democratically.

- ### Content
  - Liberal Radicalism was proposed to solve the classic free-rider problem of public goods: things that benefit everyone — open-source software, public infrastructure, research — are chronically underfunded because each individual has little incentive to pay for what others can use freely. Private markets undersupply them and centralised funding struggles to know what people actually value. LR offers a mechanism that elicits and aggregates genuine collective preference while supplying matching funds to correct the shortfall.

  - The mechanism's defining formula allocates to each project a matched amount equal to the square of the sum of the square roots of its individual contributions. The mathematical effect is decisive: a project supported by many small contributors receives far more matching than one supported by a few large donors contributing the same total. The number of distinct people who care is what drives funding, so the scheme approximates the democratic ideal of funding goods in proportion to how many people benefit.

  - LR is the theory; quadratic funding is its practical name and deployment. A matching pool — supplied by a sponsor, foundation, or community treasury — is distributed across projects according to the LR formula based on the small contributions each project attracts. This has been implemented at scale in ecosystem grants rounds, most prominently in blockchain communities funding open-source and public-goods projects, where it has directed substantial sums toward broadly-valued work that traditional grant committees might overlook.

  - The mechanism's elegance is matched by real vulnerabilities that deployments must manage. Its reliance on counting distinct contributors makes it acutely susceptible to collusion and Sybil attacks, where one actor masquerades as many identities to capture matching funds, which is why real systems layer on identity verification, pairwise-bounded matching, and other anti-fraud measures. Liberal Radicalism thus sits at the intersection of economic theory and practical governance, illustrating both the promise of mechanism design for collective funding and the difficulty of implementing idealised mechanisms in adversarial environments.
