# Contributing

Read [`LICENSING.md`](LICENSING.md) first. This repository is split across three licences
and the contribution terms differ by path.

There is one structural constraint that shapes everything below.
[`COMMERCIAL.md`](COMMERCIAL.md) offers terms other than AGPL-3.0 for the pipeline and
terms other than ODbL share-alike for the corpus. **Only the holder of the rights can
make those offers.** If a contributor retains copyright in a patch and grants nothing
more than AGPL-3.0-or-later, DreamLab AI can no longer relicense the file containing that
patch, and the dual-licensing option dies file by file. So contributions to the parts
DreamLab AI owns require more than a DCO sign-off.

That is a real cost imposed on contributors and it is stated here plainly rather than
buried. If you do not want to grant it, you can still contribute: see
"Contributing without granting rights" at the end.

## Two things every contribution needs

### 1. DCO sign-off (all paths, no exceptions)

Every commit must carry a `Signed-off-by:` trailer matching the author identity:

```
Signed-off-by: Jane Developer <jane@example.com>
```

`git commit -s` adds it. Real name and a working email address; no pseudonyms, no
`noreply` addresses.

The sign-off is a certification under the Developer Certificate of Origin 1.1
(<https://developercertificate.org/>):

> **Developer's Certificate of Origin 1.1**
>
> By making a contribution to this project, I certify that:
>
> (a) The contribution was created in whole or in part by me and I have the right to
> submit it under the open source license indicated in the file; or
>
> (b) The contribution is based upon previous work that, to the best of my knowledge, is
> covered under an appropriate open source license and I have the right under that
> license to submit that work with modifications, whether created in whole or in part by
> me, under the same open source license (unless I am permitted to submit under a
> different license), as indicated in the file; or
>
> (c) The contribution was provided directly to me by some other person who certified
> (a), (b) or (c) and I have not modified it.
>
> (d) I understand and agree that this project and the contribution are public and that a
> record of the contribution (including all personal information I submit with it,
> including my sign-off) is maintained indefinitely and may be redistributed consistent
> with this project or the open source license(s) involved.

Unsigned commits are not merged. If you forget, `git rebase --signoff <base>` fixes the
branch history.

### 2. A licence grant (paths DreamLab AI owns)

Required for `pipeline/`, `static/`, `docs/`, `examples/`, `ontology/`, `dist/` and the
root Markdown files.

Add this trailer to the pull request description, not to individual commits. Once per
PR is enough:

```
Copyright-Grant: I grant DreamLab AI Consulting Ltd a perpetual, worldwide,
non-exclusive, royalty-free, irrevocable licence to use, reproduce, modify,
distribute and sublicense my contribution, under any licence terms, including
proprietary terms, and to relicense it. I retain copyright in my contribution
and may use it elsewhere however I wish. I confirm I have the right to grant
this, and that if I made the contribution in the course of employment my
employer has authorised it or has waived any claim.
```

Note what this is and is not:

- It is a **licence grant, not an assignment.** You keep your copyright. You can reuse
  your own code anywhere, under any terms, including in a competing project. Nothing here
  is exclusive.
- It is what makes [`COMMERCIAL.md`](COMMERCIAL.md) honest. Without it, DreamLab AI would
  be offering to license code it cannot license. <!-- slop-ignore: verb "license", not the noun "licence" -->
- Your contribution is also published under the repository's public licence for that path
  (AGPL-3.0-or-later or ODbL-1.0). The grant is in addition, not instead.

A **copyright assignment** is accepted as an alternative if you prefer to transfer
outright rather than license: <!-- slop-ignore: verb "license", not the noun "licence" -->
ask in the pull request and it will be handled in writing rather than by trailer. Most
contributors should use the licence grant.

**Employer authorisation.** If you are contributing work made in the course of
employment, your employer likely owns it (UK: CDPA 1988 s.11(2)). Get written
authorisation before adding the trailer. A signed-off commit from a personal email does
not launder employer-owned code.

### `explorer/` is different

`explorer/` is MIT and is a derivative of WebVOWL by Vincent Link, Steffen Lohmann,
Eduard Marbach, Stefan Negru and Vitalis Wiens. Contributions there need the **DCO
sign-off only** (no `Copyright-Grant` trailer). MIT already permits everything the grant
would add, and DreamLab AI does not own the upstream in any case.

Contributions to `explorer/` are published under MIT and the upstream copyright notice in
[`LICENSE-EXPLORER`](LICENSE-EXPLORER) <!-- slop-ignore: filename, not prose spelling --> must survive. If your change is generally useful to
WebVOWL rather than specific to this corpus, send it upstream instead, to
[DreamLab-AI/WasmVOWL](https://github.com/DreamLab-AI/WasmVOWL) (branch `master`) or to
[VisualDataWeb/WebVOWL](https://github.com/VisualDataWeb/WebVOWL). It will reach more
people there.

## Code contributions

### Before you open a pull request

The pipeline is pure Python on rdflib. No npm, no build step.

```bash
pip install "rdflib>=7.0.0"

# validate the corpus — must report 0 errors
python -m pipeline.validate ontology/pages

# full build into a scratch directory
python -m pipeline.build ontology/pages /tmp/kg-build

# unit tests (requires pytest)
pip install pytest
pytest pipeline/tests
```

`python -m pipeline.validate ontology/pages` reported **0 errors, 961 warnings** on
2026-07-25. Warnings are tolerated; errors are not. If your change increases the error
count, the pull request will not be merged. If it materially changes the warning count in
either direction, say so in the description and explain why.

A full build takes about 18 seconds and produces 252,974 triples across 7457 classes.
If your change alters any of the counts in the table below, state the new numbers in the
pull request description:

| Quantity | Value at 2026-07-25 |
|---|---|
| Public pages | 7457 (of 7471 parsed; 14 withheld as `vc:public` false) |
| OWL classes | 7457 |
| Triples (Turtle) | 252,974 |
| Graph nodes / edges emitted | 7457 / 96,377 |
| Declared edges / backbone | 110,617 / 8,616 |
| Domains / categories | 6 / 34 |
| Validation | 0 errors, 961 warnings |

### Scope of what is welcome

- Bug fixes in `pipeline/`, with a test in `pipeline/tests/` that fails before and passes
  after.
- Emitter improvements: correctness of the Turtle, WebVOWL JSON, page API, search index
  or NGG1 tier output against its specification. `explorer/FORMAT-NGG1.md` is the NGG1
  format reference.
- Validation rules that catch a real class of corpus defect, with the count of existing
  pages they would flag.

### Not welcome

- Regenerated build artefacts. `dist/data/*` is committed but is machine output; the build
  regenerates it. Do not hand-edit `ontology.ttl`, `ontology.json` or
  `dist/data/graph/*.bin`. A pull request that edits them by hand will be rejected on
  sight. Change the input or the emitter.
- Reformatting-only diffs across many files.
- New runtime dependencies in `pipeline/` without a stated reason. The only current
  requirement is `rdflib>=7.0.0`, and that is a feature.

## Corpus corrections

**The pages in `ontology/` are generated, and this repository is not where they are
authored.** Read this before opening a pull request against `ontology/pages/`.

The corpus is mostly AI-generated synthetic content produced under human direction, by
design: an ontology testbed, not an encyclopaedia. The authoring source is a private
Logseq graph. The pages here are an extracted snapshot of the subset marked
`vc:public true`, and the published site at <https://narrativegoldmine.com/> is built and
pushed by an automated action running in that private source repository.

The practical consequence: **an edit to a `.md` file under `ontology/pages/` will be
overwritten at the next extraction.** It will look merged and then quietly vanish. That
is not a policy choice about your patch; it is how the flow runs.

So corrections flow upstream. Open an **issue**, not a pull request:

1. Title it `corpus: <page title>`.
2. Give the exact file path, for example `ontology/pages/1inch.md`.
3. Quote the text or the JSON-LD field that is wrong.
4. State what it should be, and why. A citation to a primary source carries far more
   weight than an assertion, because the generated text has no human author to defer to.
5. For a relation error, such as a wrong `subClassOf` or a spurious `requires`, say which
   direction is wrong. Hierarchy errors propagate through 8,616 backbone edges and are
   worth more than prose fixes.

Corrections are applied in the private source and appear here at the next extraction.
There is no faster route, and a pull request is not one.

**Structural problems are different and are welcome as pull requests**, because they live
in the pipeline rather than in the pages: a validation rule that would have caught a
whole class of error, a domain or category taxonomy defect, a JSON-LD context bug in
`static/ns/v2.jsonld`. Those are code, and code is authored here.

Do not open issues asking for the corpus to be replaced with human-authored content.
Its synthetic nature is the point of the testbed and is stated in every layer of the
documentation.

## Reporting security issues

Do not open a public issue for a security problem. Use GitHub's private vulnerability
reporting on
[DreamLab-AI/knowledgeGraph](https://github.com/DreamLab-AI/knowledgeGraph/security).
This is a static-site pipeline with no server-side execution, so the realistic surface is
the explorer's handling of untrusted graph data and any injection through generated page
content into the published HTML.

## Contributing without granting rights

If the `Copyright-Grant` trailer is unacceptable to you (a reasonable position), these
routes stay open and need only the DCO sign-off:

- **Issues.** A precise bug report against `pipeline/` is worth more than most patches
  and grants nothing.
- **`explorer/`.** MIT, DCO only, no grant required.
- **Upstream.** Send WebVOWL-general work to
  [VisualDataWeb/WebVOWL](https://github.com/VisualDataWeb/WebVOWL) under its own terms.
- **Fork.** `pipeline/` is AGPL-3.0-or-later. Fork it, keep it copyleft, and owe nothing
  to anyone. That is what the licence is for.

## Review

DreamLab AI reviews pull requests. There is no service-level commitment on
response time and none is implied. A pull request may be declined for scope reasons even
when the code is correct. If you are about to spend real time on something, open an
issue first and check that it is wanted.
