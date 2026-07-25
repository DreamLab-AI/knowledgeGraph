# Commercial and alternative licensing

The public grants in [`LICENSING.md`](LICENSING.md) are the default: AGPL-3.0-or-later for
the pipeline, ODbL-1.0 for the corpus, MIT for the explorer. They are not the only terms
available.

DreamLab AI Consulting Ltd holds the rights in `pipeline/`, `static/`, `docs/`,
`examples/`, `ontology/` and `dist/`, and can therefore grant those parts on other terms.
This is the standard dual-licensing position: copyleft for everyone, negotiated terms for
those who need something else.

## Contact

**TO BE CONFIRMED.** No commercial contact address is published for this repository yet.
Until one is, open an issue on
[DreamLab-AI/knowledgeGraph](https://github.com/DreamLab-AI/knowledgeGraph/issues) titled
`licensing enquiry` and state which of the three tracks below applies. Do not put
confidential terms in a public issue. Ask for a private channel first.

This section will be replaced with a direct address. Treat the issue tracker as an interim
route, not as the intended long-term one.

## What can be negotiated

### 1. A proprietary licence for the pipeline

`pipeline/` is AGPL-3.0-or-later. §13 of that licence means that if you modify it and let
users interact with it over a network, you must offer those users the corresponding
source of your modified version. For a hosted product built on it, that is usually the
sticking point.

A proprietary licence can remove it. Typically negotiated:

- Use of `pipeline/` in a closed-source product or internal hosted service, with no
  §13 or §5 source-disclosure obligation.
- The right to sublicense the pipeline as an embedded component of your own product.
- A defined support or update window against a named version.
- Warranty and indemnity terms: the AGPL grants none, and a commercial licence is where
  those get negotiated if you need them.

The licence covers 13 files of Python built on rdflib: a JSON-LD-in-Markdown parser, a
validator, and six emitters (Turtle, WebVOWL JSON, page API, search index, NGG1 binary
graph tiers, backlinks). Read the source before enquiring: it is all in `pipeline/`, and
for many uses the AGPL is simply not a problem and you do not need to pay for anything.

### 2. Corpus use outside ODbL share-alike

ODbL-1.0 requires that if you publicly use a derived database, you offer that derived
database under ODbL as well (§4.4), and that you keep the attribution notice (§4.3). If
you produce a derivative and distribute it in a form that would be a Produced Work under
§4.6, the share-alike bites on the database behind it.

That is the obligation people most often want lifted. Negotiable:

- Use of `ontology/` or `dist/data/*` in a proprietary product without the obligation to
  publish the derived database.
- Removal or relaxation of the attribution requirement where a notice is impractical.
- Use for training, fine-tuning or evaluating machine-learning models. The rights of text
  and data mining are expressly reserved: see the reservation clause in
  [`LICENSING.md`](LICENSING.md). A licence for that use is available and is the
  intended route.
- Delivery in a form other than the published artefacts: a filtered subset, a different
  serialisation, or the private superset. The public corpus is the `vc:public true`
  subset: 7457 of 7471 pages parsed at the last build, 14 withheld.

Read the corpus honesty note in [`LICENSING.md`](LICENSING.md) before licensing it. It is
mostly AI-generated synthetic content produced under human direction, by design, and it
exists as an ontology testbed. If you need an authoritative human-authored knowledge base,
this is the wrong dataset and no licence will change that.

### 3. Consulting on similar builds

The method here is transferable: Logseq Markdown with embedded JSON-LD as the authoring
surface, rdflib as the build layer, OWL and a binary graph format as the outputs, and a
static site plus a WASM explorer as the delivery. The last full build produced 252,974
triples across 7457 classes in 18.0 seconds.

Engagements that have been scoped around this shape:

- Standing up an equivalent pipeline against an existing Markdown or wiki corpus.
- Schema and JSON-LD context design, and the validation gates that keep a corpus of this
  size consistent: the last build reported 0 errors and 961 warnings.
- Migration of an existing ontology into the JSON-LD-in-Markdown authoring model.
- Integration work against downstream consumers, including RDF stores and reasoners.
  [VisionClaw](https://github.com/DreamLab-AI/VisionClaw) is the reference second
  consumer of this corpus; its `GitHubSyncService` ingests the same pages into an
  embedded Oxigraph quad store behind SHACL gating.

Consulting is separate from the licences. It does not by itself grant rights in this
repository, and the licences do not by themselves buy any support.

## What is not negotiable

- **`explorer/` is MIT and stays MIT.** There is nothing to sell: the MIT grant already
  permits commercial and proprietary use, sublicensing and closed distribution. The only
  obligation is preserving the copyright notice of the WebVOWL authors, and that
  obligation is theirs to enforce, not DreamLab AI's to waive. See the reasoning in
  [`LICENSING.md`](LICENSING.md).
- **Third-party dependencies.** The packages declared in `explorer/package.json`,
  `explorer/modern/package.json` and `explorer/rust-wasm/Cargo.toml` are not DreamLab
  AI's to relicense. Neither is rdflib.
- **Warranties by default.** All three public licences disclaim warranties. A commercial
  agreement can add them; enquiring does not.

## What a licence cannot give you

Read the jurisdiction section of [`LICENSING.md`](LICENSING.md) before paying for corpus
rights. The rights basis for the corpus is UK CDPA 1988 s.9(3), which has no US
equivalent: *Thaler v. Perlmutter*, No. 23-5233 (D.C. Cir., 18 March 2025) holds that
the US Copyright Act requires human authorship. The UK sui generis database right does not
extend to the EEA for a database made by a UK company after 1 January 2021, and has no US
analogue at all.

A commercial licence from DreamLab AI is therefore worth most as (a) a contract, which
binds regardless of what subsists, (b) certainty about the reserved TDM rights, and (c)
access to material and delivery formats that are not published. It is not a guarantee
that a third party could not lawfully reach the same public data by another route in
another jurisdiction. Anyone selling you the opposite story about a machine-generated
corpus is overselling.
