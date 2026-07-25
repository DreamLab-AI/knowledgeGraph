# Licensing

Authoritative scope declaration for this repository. Where any other file in this
repository disagrees with this one about which licence covers which path, this file
governs.

Copyright (c) 2024–2026 Dr John O'Hare / DreamLab AI Consulting Ltd, except for the
third-party material identified in [`NOTICE`](NOTICE).

This repository is **not** under a single licence. It contains three kinds of thing:
original software, a vendored MIT-licensed derivative, and a machine-generated
database. Each is licensed on its own terms.

## Scope table

| Path | Licence | SPDX | Full text |
|---|---|---|---|
| `pipeline/` | GNU Affero General Public License v3.0 or later | `AGPL-3.0-or-later` | [`LICENSE`](LICENSE) |
| `.github/` (repository root only) | GNU Affero General Public License v3.0 or later | `AGPL-3.0-or-later` | [`LICENSE`](LICENSE) |
| `static/` | GNU Affero General Public License v3.0 or later | `AGPL-3.0-or-later` | [`LICENSE`](LICENSE) |
| `docs/` (original prose) | GNU Affero General Public License v3.0 or later | `AGPL-3.0-or-later` | [`LICENSE`](LICENSE) |
| `examples/` | GNU Affero General Public License v3.0 or later | `AGPL-3.0-or-later` | [`LICENSE`](LICENSE) |
| `README.md`, `LICENSING.md`, `COMMERCIAL.md`, `CONTRIBUTING.md`, `NOTICE` | GNU Affero General Public License v3.0 or later | `AGPL-3.0-or-later` | [`LICENSE`](LICENSE) |
| `explorer/` | MIT License | `MIT` | [`LICENSE-EXPLORER`](LICENSE-EXPLORER) |
| `ontology/` | Open Database License v1.0 | `ODbL-1.0` | [`LICENSE-DATA`](LICENSE-DATA) |
| `dist/` | Open Database License v1.0 | `ODbL-1.0` | [`LICENSE-DATA`](LICENSE-DATA) |

`LICENSE` at the repository root is the AGPL-3.0 text. GitHub's licence detector reads
that file and will label the whole repository "AGPL-3.0". That label is wrong for
`explorer/` and `ontology/` and `dist/`. This table is the correct statement.

The `.github/` row covers the repository-root workflow directory only. The explorer
carries its own `explorer/.github/workflows/wasm-publish.yml`; that file is inside
`explorer/` and is MIT, like the rest of that tree.

Paths not listed (`CNAME`, `.gitignore`) are configuration with no meaningful
authorship and are not claimed. `dist-ci/` is not a repository path either: it exists
only inside a CI run, as the build target and upload artefact of
`.github/workflows/build.yml`, and is never committed.

### What is in each path

File counts are of files Git will track: `git ls-files --cached --others
--exclude-standard <path>`. The `node_modules/`, `target/`, `pkg/`, `__pycache__/` and
`dist/api/` trees excluded by `.gitignore` are excluded here too. Verified against the
working tree on 2026-07-25.

- **`pipeline/`**: 13 files. Python 3 / rdflib. Seven stages: parse, validate, Turtle,
  WebVOWL JSON, Page API, search index, graph tiers (NGG1 binary). Entry points are
  `pipeline.build`, `pipeline.validate`, `pipeline.jsonld_to_turtle`. Wholly original
  work; no vendored code.
- **`static/`**: `ns/v2.jsonld`, the JSON-LD `@context` document that maps the corpus
  vocabulary onto `owl:`, `rdfs:`, `skos:`, `prov:` and the local `vc:` namespace
  (`https://narrativegoldmine.com/ns/v1#`). Original work.
- **`explorer/`**: WasmVOWL. Subtrees: `modern/` (React + TypeScript SPA),
  `rust-wasm/` (Rust → WebAssembly layout engine and NGG1 reader), `docs/`, `tests/`,
  `scripts/`, `.github/workflows/wasm-publish.yml`, plus the design and format notes at
  the tree root (`FORMAT-NGG1.md`, `VOWL-SPEC.md`, `CAPABILITIES.md` and others) and
  `license.txt`. A derivative of WebVOWL. See "Why the explorer is MIT" below. No file
  count is stated here because the tree is under active development; the licence covers
  the whole subtree regardless of its size.
- **`ontology/`**: `pages/`, 7457 Markdown files and nothing else, each a Logseq page
  carrying an embedded JSON-LD block. This is the corpus. 7457 is a contract, not a
  statistic: `.github/workflows/build.yml` gate 3 fails the build if the compiled class
  count is anything other than `EXPECTED_CLASSES: '7457'`.
- **`docs/`, `examples/`**: original prose. `examples/` is present in the working tree
  but currently holds no files; the AGPL row above covers it if and when it is
  populated, and licenses nothing today.
- **`dist/`**: the built dataset, 11 files. `dist/data/` holds `ontology.ttl`
  (12,301,363 bytes of Turtle, 252,974 triples), `ontology.json` (39,337,821 bytes of
  WebVOWL) and `dist/data/graph/` (seven NGG1 binary tiers: `full.bin` and one per
  domain, plus `overview.json` and `stats.json`). These are derived from `ontology/` and
  carry the same licence as their source. `dist/api/` is not committed (see
  `.gitignore`); it is rebuilt by `python -m pipeline.build ontology/pages dist`.

## Why the software is AGPL-3.0-or-later

`pipeline/` is wholly original. The AGPL's network clause (§13) is the point: this is
build-and-publish machinery whose natural deployment is as a service that never
distributes a binary. Under GPL-3.0 a hosted derivative would carry no obligation to
release corresponding source. Under AGPL-3.0 it does.

"or later" is deliberate. It permits users to move to a future AGPL version without
seeking permission.

## Why the corpus is ODbL-1.0

### Rights being licensed

ODbL-1.0 is a database licence. It grants share-alike terms over three things at once,
which matters here because at least one of them is contested:

1. **Copyright in the database** as a compilation: the selection and arrangement of the
   7457 pages, the class hierarchy, the relation vocabulary.
2. **Sui generis database right** under the Copyright and Rights in Databases Regulations
   1997 (SI 1997/3032), which subsists where there has been substantial investment in
   obtaining, verifying or presenting the contents. Term: 15 years from the end of the
   year of making, or of first publication if within that period (reg. 17).
3. **Contract**, for users who accept the licence, independent of whether any of the
   above subsists.

**Contents grant.** The ODbL preamble states that ODbL "only governs the rights over the
Database, and not the contents of the Database individually", and advises licensors to
pair it with a contents licence. DreamLab AI additionally and expressly licenses the
individual contents of `ontology/` and `dist/` (the page prose, definitions, labels and
axioms) on the same ODbL-1.0 terms. Attribution and share-alike therefore apply to
extracts as well as to the database as a whole.

### Rights basis: UK CDPA 1988 s.9(3)

The corpus is mostly AI-generated. Under UK law that is not fatal to authorship.

> **CDPA 1988 s.9(3):** "In the case of a literary, dramatic, musical or artistic work
> which is computer-generated, the author is the person by whom the arrangements
> necessary for the creation of the work are undertaken."

> **CDPA 1988 s.178:** "'computer-generated', in relation to a work, means that the work
> is generated by computer in circumstances such that there is no human author of the
> work."

The arrangements necessary for the creation of this corpus (the schema design, the
prompt and generation harness, the domain and category taxonomy, the validation gates, <!-- slop-ignore -->
the selection of which pages are published) were undertaken by DreamLab AI. On that
basis DreamLab AI is the author under s.9(3) and licenses accordingly. Duration for a
computer-generated work is fifty years from the end of the calendar year in which the
work was made (s.12(7)), shorter than the life-plus-70 term for human-authored works.

### Position differs by jurisdiction

**s.9(3) has no US equivalent, and US law points the other way.** In *Thaler v.
Perlmutter*, No. 23-5233 (D.C. Cir., decided 18 March 2025), the Court of Appeals
affirmed the refusal of registration, holding that "the Copyright Act of 1976 requires
all eligible work to be authored in the first instance by a human being". The court
expressly declined to reach Thaler's separate argument that he was the author by virtue
of making and using the generating machine, so the precise treatment of a
"made-the-arrangements" claimant remains open in the US, but the human-authorship floor
is settled at the D.C. Circuit.

The practical consequence: **the copyright layer of the ODbL grant may be worth little or
nothing in the United States.** What survives there is the contract layer: ODbL is
drafted as an agreement, and its terms bind a user who accepts them regardless of whether
copyright subsists. What does not survive is the sui generis database right, which has no
US analogue at all.

**The EEA position differs again.** Following the Intellectual Property (Copyright and
Related Rights) (Amendment) (EU Exit) Regulations 2019, UK citizens, residents and
businesses are not eligible to hold sui generis database right in the EEA for databases
created on or after 1 January 2021. This database was created after that date by a UK
company. Its sui generis database right therefore subsists **in the UK only**.

**s.9(3) is itself under review.** The UK IPO's 2021–22 consultation on AI and IP
concluded to make no change to s.9(3). The December 2024 "Copyright and AI" consultation
reopened it, and the subsequent government Report on Copyright and Artificial
Intelligence records both majority respondent support for removing s.9(3) and "minimal
evidence that CGWs protection is being used". Removal is a live policy option. s.9(3)
remains in force as at the date of this document. If it is repealed, the copyright basis
for the ODbL grant weakens in the UK too, and the contract and database-right layers
carry more of the load.

None of this is hedging for its own sake. It is the actual state of the law, and anyone
relying on the corpus should know which layer of the grant is doing the work in their
jurisdiction.

### What the corpus is

Mostly AI-generated synthetic content, produced under human direction, **by design**. It
is an ontology testbed built to exercise the pipeline at medium scale: 7457 OWL classes,
110,617 declared edges of which 96,377 resolve and are emitted, 252,974 triples. It is
not an authoritative encyclopaedia and should not be cited as one.

The provenance metadata attests **traceable generation under human direction**, not human
authorship. Do not read it as the latter. It lives in two places, and they differ:

- the JSON-LD blocks under `ontology/pages/` carry `did:nostr` identifiers, URNs and
  `prov:generatedAtTime` timestamps, though not on every page: at 2026-07-25, 6169 of the
  7457 pages carry a `did:nostr` and 3966 carry a `prov:generatedAtTime`;
- `dist/data/graph/stats.json` carries `attributedTo: "did:nostr:jjohare"`,
  `provenance.did`, and `corpus.nature: "synthetic"`. The pipeline emits the framing as
  data rather than leaving it to prose.

`dist/data/ontology.ttl` carries none of it: the Turtle writer emits no `prov:` terms at
all. If you are reading the corpus as Turtle, the provenance is in `stats.json` and in
the source pages, not in the triples.

## Why the explorer is MIT

`explorer/` is a derivative of WebVOWL, copyright (c) 2014–2019 Vincent Link, Steffen
Lohmann, Eduard Marbach, Stefan Negru and Vitalis Wiens, licensed MIT. The upstream is
[VisualDataWeb/WebVOWL](https://github.com/VisualDataWeb/WebVOWL); the immediate parent is
[DreamLab-AI/WasmVOWL](https://github.com/DreamLab-AI/WasmVOWL/tree/master) (branch
`master`), an MIT fork of it.

MIT permits sublicensing. DreamLab AI could relicense this derivative under
AGPL-3.0-or-later, and an earlier draft of `NOTICE` said it had. That has been reversed.
The reason is that the relicence would be hollow: substantially identical code is
published under MIT one repository away at DreamLab-AI/WasmVOWL. Anyone wanting the
explorer without copyleft obligations can take the MIT copy and reimplement the delta.
An AGPL claim over `explorer/` would impose obligations on honest readers of this
repository while restricting nobody who cared to look, so it would raise the cost of
compliance without raising the cost of appropriation. It is not asserted.

The MIT grant is therefore passed through unchanged. `LICENSE-EXPLORER` is a byte-exact
copy of `explorer/license.txt`, which is itself the upstream text. The copyright notice
above must be preserved in all copies and substantial portions.

Internal manifests corroborate this: `explorer/package.json` declares `"license": "MIT"`
and `explorer/rust-wasm/Cargo.toml` declares `license = "MIT"`.
`explorer/modern/package.json` carries no `license` field; it is covered by this
declaration and by `LICENSE-EXPLORER`.

`explorer/` is not a verbatim copy of WasmVOWL: the upstream `legacy/` tree (the
original D3 WebVOWL implementation) is not vendored here.

Third-party runtime dependencies of the explorer are declared, not vendored, in
`explorer/package.json`, `explorer/modern/package.json` and
`explorer/rust-wasm/Cargo.toml`. Each remains under its own licence, held by its own
copyright holders. Nothing in this document supersedes those licences.

## Licence compatibility

The three licences coexist because they cover disjoint paths and the combined work is not
a single program:

- `pipeline/` (AGPL) **reads** `ontology/` (ODbL) and **writes** `dist/` (ODbL). Reading
  and writing data does not make the data a part of the program, nor the program a
  derivative of the data. The ODbL's share-alike attaches to derived databases, not to
  the software that derives them.
- `explorer/` (MIT) **loads** `dist/data/*` (ODbL) at runtime over HTTP. MIT code is
  compatible with being distributed alongside AGPL code; they are separate works
  aggregated in one repository, not linked into one binary.
- MIT is one-way compatible with AGPL-3.0. If you combine `explorer/` with `pipeline/`
  into a single derived program, the result is AGPL-3.0-or-later and the MIT notice must
  be preserved. The reverse combination is not permitted.

If you redistribute only part of this repository, carry the licence for that part, and
carry `NOTICE`.

## Text and data mining, and model training

Read this section before assuming a licence stops anyone training on this corpus. In most
jurisdictions it does not.

- **EU.** Directive (EU) 2019/790 Art. 4(1) permits reproductions for text and data
  mining of lawfully accessible works, for any purpose including commercial. Art. 4(3)
  makes that exception conditional: it applies "on condition that the use of works and
  other subject matter referred to in that paragraph has not been expressly reserved by
  their rightholders in an appropriate manner, such as machine-readable means in the case
  of content made publicly available online." Recital 18 confirms that for content made
  publicly available online, machine-readable means (including metadata and the terms and
  conditions of a website or service) are the appropriate way to reserve. A licence file
  in a Git repository is unlikely, on its own, to satisfy that standard.
- **UK.** The exception in force is CDPA s.29A, and it is narrow: copies for
  computational analysis "for the sole purpose of research for a non-commercial purpose",
  by a person with lawful access. Commercial AI training is not covered by s.29A. Note
  s.29A(5): a contract term purporting to restrict copying that s.29A permits is
  unenforceable, so the ODbL cannot override the non-commercial research exception. A
  broader "any purpose" exception was announced in the 2022 government response and was
  not enacted. The December 2024 "Copyright and AI" consultation proposed an exception
  coupled with a rights-reservation mechanism; the subsequent government report states
  that a broad exception with opt-out is no longer the preferred way forward. Nothing new
  is in force.
- **US.** Fair use is asserted for training by most model developers and is being
  litigated. Combined with *Thaler*, the copyright layer over machine-generated corpus
  text is weak there in both directions.

### Express reservation

**DreamLab AI Consulting Ltd expressly reserves the rights of text and data mining,
including the use of any part of `ontology/` or `dist/` for training, fine-tuning,
evaluating or otherwise developing machine-learning models, under Article 4(3) of
Directive (EU) 2019/790 and under any equivalent national provision. This reservation
applies to the whole of the database and to any substantial part of it, and to every
distribution channel through which it is made available, including
`https://narrativegoldmine.com/` and this repository. It does not restrict acts permitted
by CDPA s.29A.**

Licences for such use are available. See [`COMMERCIAL.md`](COMMERCIAL.md).

**Current machine-readable coverage.** The reservation above is carried in this file and
is intended to be quotable verbatim. As at 2026-07-25 the published site serves no
`robots.txt` (`https://narrativegoldmine.com/robots.txt` returns HTTP 404 with the SPA
fallback page, `content-type: text/html`, not a robots file), no `TDM-Reservation-Path`
header on `https://narrativegoldmine.com/`, and no `/.well-known/tdmrep.json` (also
404). The emitted `dist/data/ontology.ttl` binds `http://purl.org/dc/terms/` to the
prefix `dc1:` and uses it for `dc1:creator` only: there is no `dc1:license` and no
`dc1:rights` triple in the file. Those are the signals a machine-readable reservation
under Art. 4(3) would normally need, and they are absent. Anyone relying on the absence
of a signal should read this section instead; anyone auditing the reservation should
treat the missing signals as a known gap in this repository rather than as evidence
that no reservation was made.

## Contact and alternative terms

The split above is what is granted publicly. Terms other than AGPL-3.0 for the pipeline,
and terms other than ODbL share-alike for the corpus, are available by negotiation. See
[`COMMERCIAL.md`](COMMERCIAL.md).

Contributions are accepted only on terms that keep alternative licensing possible. See
[`CONTRIBUTING.md`](CONTRIBUTING.md).

## Disclaimer

This document explains the licensing position DreamLab AI has adopted and the reasoning
behind it. It is not legal advice, and it is not a warranty that any particular right
subsists in any particular jurisdiction: the sections above say plainly where it may
not. The operative grants are the licence texts in `LICENSE`, `LICENSE-DATA` and
`LICENSE-EXPLORER`, each of which disclaims warranties in its own terms. If you need
certainty for your use, take your own advice or ask for a written licence.
