public:: true

# Statistical Hypothesis Testing

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:statistical-hypothesis-testing", "@type":"Page", "title":"Statistical Hypothesis Testing", "vc:slug":"statistical-hypothesis-testing", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:statistical-hypothesis-testing",
  "@type":"Class",
  "label":"Statistical Hypothesis Testing",
  "definition":"Statistical hypothesis testing is a formal procedure for determining whether an observed difference between two outcomes, such as the performance of two models, is unlikely to have arisen by chance under a stated null hypothesis. It computes a test statistic and associated p-value from sample data and compares it against a significance threshold to accept or reject the null hypothesis. In machine learning it is used to compare model or benchmark scores across runs, guarding against overinterpreting differences that fall within noise. Common tests include the paired t-test, Wilcoxon signed-rank test, and bootstrap resampling for non-normal score distributions.",
  "domain":"ai",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"}],
  "relations":{}
}
```

- ### Definition
	- Statistical hypothesis testing is a formal procedure for determining whether an observed difference between two outcomes, such as the performance of two models, is unlikely to have arisen by chance under a stated null hypothesis. It computes a test statistic and associated p-value from sample data and compares it against a significance threshold to accept or reject the null hypothesis. In machine learning it is used to compare model or benchmark scores across runs, guarding against overinterpreting differences that fall within noise. Common tests include the paired t-test, Wilcoxon signed-rank test, and bootstrap resampling for non-normal score distributions.
- ### Relationships
	- subClassOf:: [[Model Evaluation]]
