"""The actual public build must not leak through any export or stale output."""
import json
from pathlib import Path
import pytest
from pipeline.build import build
from pipeline.public_projection import PublicationBlocked

def write(pages, slug, public, parent=None, mention=None):
    pages.mkdir(parents=True, exist_ok=True)
    block = {'@type':'Page','@id':'urn:visionflow:page:'+slug,'vc:slug':slug,
             'title':slug,'vc:public':public,'vc:schemaVersion':2}
    entity = {'@type':'Class','@id':'urn:ngm:class:'+slug,'label':slug,
              'definition':'Definition '+(mention or slug),'domain':'governance',
              'subClassOf':([{'@id':'urn:ngm:class:'+parent,'label':parent}] if parent else [])}
    (pages/(slug+'.md')).write_text('```json-ld\n'+json.dumps(block)+'\n```\n```json-ld\n'+json.dumps(entity)+'\n```\nProse '+(mention or slug))

def assert_no_marker(out, marker):
    for path in out.rglob('*'):
        if path.is_file():
            assert marker not in path.name
            assert marker.encode() not in path.read_bytes(), str(path)

def test_all_build_exports_hide_private_ancestry_body_and_raw_fields(tmp_path):
    pages=tmp_path/'pages';out=tmp_path/'out'
    write(pages,'private-grandparent',False)
    write(pages,'private-parent',False,parent='private-grandparent')
    write(pages,'public-child',True,parent='private-parent',mention='private-grandparent')
    build(pages,out)
    assert_no_marker(out,'private-parent');assert_no_marker(out,'private-grandparent')
    assert (out/'data/ontology.ttl').exists()

@pytest.mark.parametrize('flag',['false',0,None])
def test_non_boolean_publication_is_rejected_before_outputs(tmp_path,flag):
    pages=tmp_path/'pages';out=tmp_path/'out';write(pages,'test',flag)
    with pytest.raises(PublicationBlocked):build(pages,out)
    assert not out.exists()

def test_malformed_fence_is_accounted_and_build_blocked(tmp_path):
    pages=tmp_path/'pages';out=tmp_path/'out';write(pages,'public',True)
    (pages/'private-secret-name.md').write_text('```json-ld\n{bad\n```')
    with pytest.raises(PublicationBlocked, match='invalid_input') as exc:build(pages,out)
    assert 'private-secret-name' not in str(exc.value)
    assert not out.exists()

def test_successful_rebuild_removes_newly_private_page(tmp_path):
    pages=tmp_path/'pages';out=tmp_path/'out'
    write(pages,'public-remains',True);write(pages,'newly-private',True)
    build(pages,out)
    write(pages,'newly-private',False)
    build(pages,out)
    assert_no_marker(out,'newly-private')

def test_failure_preserves_previous_bundle_and_public_assets(tmp_path):
    pages=tmp_path/'pages';out=tmp_path/'out';write(pages,'valid',True)
    build(pages,out);before=(out/'data/ontology.ttl').read_bytes()
    (out/'index.html').write_text('static site')
    write(pages,'bad','false')
    with pytest.raises(PublicationBlocked):build(pages,out)
    assert (out/'data/ontology.ttl').read_bytes()==before
    assert (out/'index.html').read_text()=='static site'


def test_private_intermediate_cannot_infer_public_ancestor(tmp_path):
    from rdflib import Graph, RDFS
    pages = tmp_path / "pages"; out = tmp_path / "out"
    write(pages, "public-grandparent", True)
    write(pages, "secret-middle", False, parent="public-grandparent")
    write(pages, "public-child", True, parent="secret-middle")
    build(pages, out)
    for path in (out / "data").glob("*.ttl"):
        graph = Graph().parse(path, format="turtle")
        assert not any(str(subject).endswith("public-child") and str(obj).endswith("public-grandparent")
                       for subject, _, obj in graph.triples((None, RDFS.subClassOf, None)))


def test_namespace_markdown_aliases_share_privacy_boundary(tmp_path):
    pages = tmp_path / "pages"; out = tmp_path / "out"
    write(pages, "secret-private", False)
    write(pages / "Namespace", "public-page", True, mention="secret-private")
    build(pages, out)
    for name in ("Namespace___public-page.md", "Namespace%2Fpublic-page.md"):
        assert (out / "api" / "markdown" / name).is_file()
    assert_no_marker(out, "secret-private")


def test_excluded_dot_page_cannot_reappear_as_public_reference(tmp_path):
    pages = tmp_path / "pages"; out = tmp_path / "out"
    write(pages / ".held", "hidden-parent", True)
    write(pages, "public-page", True, parent="hidden-parent", mention="hidden-parent")
    build(pages, out)
    assert_no_marker(out, "hidden-parent")


def test_promotion_failure_restores_all_previous_generated_trees(tmp_path, monkeypatch):
    import pipeline.public_projection as projection
    pages = tmp_path / "pages"; out = tmp_path / "out"
    write(pages, "existing", True)
    build(pages, out)
    before = {p.relative_to(out): p.read_bytes() for p in out.rglob("*") if p.is_file()}
    write(pages, "new-page", True)
    replace = projection.os.replace
    promoted = 0
    def fail_second_install(src, dest):
        nonlocal promoted
        if Path(src).parent.name.startswith(".publication-") and not Path(src).parent.name.startswith(".publication-recovery-") and Path(dest).parent == out:
            promoted += 1
            if promoted == 2:
                raise OSError("injected promotion failure")
        return replace(src, dest)
    monkeypatch.setattr(projection.os, "replace", fail_second_install)
    with pytest.raises(OSError, match="injected promotion failure"):
        build(pages, out)
    after = {p.relative_to(out): p.read_bytes() for p in out.rglob("*") if p.is_file()}
    assert after == before
    assert not list(tmp_path.glob(".publication-recovery-*"))
