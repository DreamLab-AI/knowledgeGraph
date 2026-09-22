#!/usr/bin/env python3
"""Inference-visibility policy for public derived exports.

Filtering whole *pages* out of an export is not sufficient to keep a private
page out of the published artefacts. Every public page carries references —
``subClassOf`` parents, twelve relation kinds, outbound wikilinks — and a
downstream export that copies those references verbatim republishes the
identifier, and often the label, of a page the author marked private. The
estate review reproduced exactly that: a public child whose declared parent was
private surfaced the private ancestor's identifier in the page API, the search
index and the inferred Turtle.

This module supplies the single decision procedure every exporter consults.

Policy
------
A reference is **redacted** from a public export if, and only if, it resolves to
an entity this corpus knows to be private. A reference that resolves to nothing
(a dangling link to a page that does not exist, which the corpus uses
deliberately for SKOS stubs and forward links) is left alone: it names no
private page, so redacting it would silently change 8,138 pages' worth of
published semantics for no privacy benefit.

Resolution is by exact IRI in any of the corpus's namespaces, and by terminal
slug. Slug matching is guarded: a slug that is *also* claimed by a public entity
is not treated as private, so an ambiguous name can never redact public content.
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Iterable, Optional

from .jsonld_parser import PageData, WikilinkRef


#: IRI prefixes the corpus mints, longest first so ``urn:ngm:class:`` is not
#: shadowed by a shorter sibling.
_URN_PREFIXES = (
    "urn:ngm:class:",
    "urn:ngm:individual:",
    "urn:visionflow:owl:class:",
    "urn:visionflow:linked:",
    "urn:visionflow:page:",
)

_HTTP_PREFIXES = (
    "https://narrativegoldmine.com/class/",
    "https://narrativegoldmine.com/individual/",
    "https://narrativegoldmine.com/linked/",
    "https://narrativegoldmine.com/page/",
)


def terminal_slug(iri: str) -> str:
    """Reduce an IRI to the identifying slug at its tail.

    Handles both the authored URN forms and the HTTP forms the Turtle and
    WebVOWL exporters remap them to, so a policy built from source pages still
    recognises an already-remapped reference.
    """
    if not iri:
        return ""
    for prefix in _URN_PREFIXES + _HTTP_PREFIXES:
        if iri.startswith(prefix):
            return iri[len(prefix):]
    if "/" in iri:
        return iri.rsplit("/", 1)[-1]
    if ":" in iri:
        return iri.rsplit(":", 1)[-1]
    return iri


@dataclass(frozen=True)
class VisibilityPolicy:
    """Which identifiers may cross the public boundary.

    Build one with :meth:`from_pages` and pass it to every exporter. The
    exporters default to building their own from the pages they are handed, so
    the safe behaviour is the behaviour you get by not thinking about it.
    """

    private_iris: frozenset[str]
    private_slugs: frozenset[str]
    public_iris: frozenset[str]
    public_slugs: frozenset[str]

    # ------------------------------------------------------------------ #
    # construction
    # ------------------------------------------------------------------ #
    @classmethod
    def from_pages(cls, pages: Iterable[PageData]) -> "VisibilityPolicy":
        private_iris: set[str] = set()
        private_slugs: set[str] = set()
        public_iris: set[str] = set()
        public_slugs: set[str] = set()

        for page in pages:
            iris: set[str] = set()
            slugs: set[str] = set()
            if page.page_iri:
                iris.add(page.page_iri)
            if page.slug:
                slugs.add(page.slug)
            oc = page.ontology_class
            if oc is not None and oc.iri:
                iris.add(oc.iri)
                slugs.add(terminal_slug(oc.iri))
            slugs.discard("")

            if page.is_public:
                public_iris |= iris
                public_slugs |= slugs
            else:
                private_iris |= iris
                private_slugs |= slugs

        return cls(
            private_iris=frozenset(private_iris),
            private_slugs=frozenset(private_slugs),
            public_iris=frozenset(public_iris),
            public_slugs=frozenset(public_slugs),
        )

    @classmethod
    def permissive(cls) -> "VisibilityPolicy":
        """A policy that redacts nothing — for building a private/full export."""
        return cls(frozenset(), frozenset(), frozenset(), frozenset())

    # ------------------------------------------------------------------ #
    # decisions
    # ------------------------------------------------------------------ #
    def is_private_iri(self, iri: str) -> bool:
        if not iri:
            return False
        # The ambiguity guard applies to the exact-IRI match too: when a public
        # and a private page both claim one identifier, the identifier is
        # published, so redacting references to it would remove public content.
        # Such a collision is itself a DUPLICATE_IRI validation error.
        if iri in self.public_iris:
            return False
        if iri in self.private_iris:
            return True
        slug = terminal_slug(iri)
        if not slug:
            return False
        # Guard: a slug that a public entity also claims is not private. An
        # ambiguous name must never redact published content.
        return slug in self.private_slugs and slug not in self.public_slugs

    def is_private_slug(self, slug: str) -> bool:
        if not slug:
            return False
        return slug in self.private_slugs and slug not in self.public_slugs

    def is_private_ref(self, ref: WikilinkRef) -> bool:
        return self.is_private_iri(ref.iri)

    def filter_refs(self, refs: Optional[Iterable[WikilinkRef]]) -> list[WikilinkRef]:
        """Drop every reference that resolves to a private entity."""
        if not refs:
            return []
        return [r for r in refs if not self.is_private_ref(r)]

    def redacted_refs(self, refs: Optional[Iterable[WikilinkRef]]) -> list[WikilinkRef]:
        """The complement of :meth:`filter_refs` — useful for diagnostics."""
        if not refs:
            return []
        return [r for r in refs if self.is_private_ref(r)]

    # ------------------------------------------------------------------ #
    # reporting
    # ------------------------------------------------------------------ #
    def summary(self) -> dict:
        return {
            "policy": "redact-references-to-known-private-entities",
            "private_entities": len(self.private_slugs),
            "public_entities": len(self.public_slugs),
            "private_iris": len(self.private_iris),
            "public_iris": len(self.public_iris),
        }

    def private_identifier_probe(self) -> list[str]:
        """Identifiers that must not occur anywhere in a public artefact.

        Used by the release gate to scan built exports for leakage.
        """
        probe = set(self.private_iris)
        for slug in self.private_slugs:
            if slug in self.public_slugs:
                continue
            probe.add(slug)
        return sorted(probe)


def build_policy(pages: Iterable[PageData], policy: Optional[VisibilityPolicy] = None) -> VisibilityPolicy:
    """Return *policy*, or derive one from *pages* when none was supplied."""
    return policy if policy is not None else VisibilityPolicy.from_pages(pages)
