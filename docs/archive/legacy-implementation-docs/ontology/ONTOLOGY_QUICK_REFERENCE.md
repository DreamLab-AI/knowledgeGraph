# Ontology Deployment - Quick Reference Card

**Last Updated**: November 9, 2025 | **Status**: 🔴 BROKEN (Fix Available)

## The Problem (One-Liner)

HTTP font import in CSS on HTTPS page → Browser blocks → Graph broken

## The Fix (One-Liner)

Change `http://fonts.googleapis.com` to `https://fonts.googleapis.com` in `webvowl.app.css`

## Implementation (Copy-Paste Ready)

Add to `.github/workflows/publish.yml` after line 95:

```yaml
- name: Fix mixed content in WebVOWL CSS
  run: |
    sed -i 's|http://fonts.googleapis.com|https://fonts.googleapis.com|g' \
      webvowl-deploy/css/webvowl.app.css
    echo "✅ Fixed CSS font import to use HTTPS"
```

Then:
```bash
git add .github/workflows/publish.yml
git commit -m "Fix: Replace HTTP font import with HTTPS in WebVOWL CSS"
git push origin main
```

## Verification (30 Seconds)

```bash
# 1. Check CSS
curl -s https://narrativegoldmine.com/ontology/css/webvowl.app.css | head -1
# Expected: @import url(https://fonts.googleapis.com/...)

# 2. Open browser
open https://narrativegoldmine.com/ontology/

# 3. Check console (F12)
# Expected: No errors, graph renders
```

## Architecture (Visual Summary)

```
BROKEN FLOW:
───────────
https://narrativegoldmine.com/ontology/
  ↓
CSS loads (HTTPS) ✓
  ↓
@import url(http://fonts.googleapis.com...) ✗
  ↓
🚫 BROWSER BLOCKS (Mixed Content)
  ↓
Graph fails to render


FIXED FLOW:
──────────
https://narrativegoldmine.com/ontology/
  ↓
CSS loads (HTTPS) ✓
  ↓
@import url(https://fonts.googleapis.com...) ✓
  ↓
✅ BROWSER ALLOWS
  ↓
Graph renders successfully
```

## Key Files

| File | Purpose | Status |
|------|---------|--------|
| `.github/workflows/publish.yml` | CI/CD pipeline | 🔧 Needs fix |
| `css/webvowl.app.css` | Styles + font import | 🔴 HTTP import |
| `data/foaf.json` | Ontology data | ✅ Working |
| `js/webvowl.app.js` | Visualization engine | ✅ Working |

## URLs

| Endpoint | Content | Status |
|----------|---------|--------|
| `/ontology/` | WebVOWL app | 🔴 Broken |
| `/ontology/data/foaf.json` | Ontology (532KB) | ✅ Working |
| `/ontology/css/webvowl.app.css` | Styles | 🔴 HTTP import |
| `/ontology/js/webvowl.app.js` | JavaScript | ✅ Working |

## Statistics

- **Ontology Size**: 1,008 classes, 273 properties, 34,865 triples
- **JSON File**: 532,460 bytes
- **Markdown Pages**: 2,519 files
- **Deployment Time**: 5-10 minutes (GitHub Actions)
- **Fix Time**: 20-25 minutes (total)

## Deployment Pipeline

```
Markdown → Python → TTL → JSON → WebVOWL → GitHub Pages
(2,519)   (regex)  (34K) (532KB)  (v1.1.6)  (HTTPS)
```

## Error Message

```
Mixed Content: The page at 'https://narrativegoldmine.com/ontology/'
was loaded over HTTPS, but requested an insecure resource
'http://fonts.googleapis.com/css?family=Open+Sans'.
This request has been blocked; the content must be served over HTTPS.
```

## Success Checklist

After fix:
- [ ] No console errors
- [ ] Graph renders (1,008 nodes visible)
- [ ] Can drag nodes
- [ ] Can zoom/pan
- [ ] Search works
- [ ] Filter works

## Rollback

If needed:
```bash
git revert HEAD
git push origin main
```

## Documentation

- **Full Analysis**: `/docs/ONTOLOGY_DEPLOYMENT_ARCHITECTURE.md` (15 pages)
- **C4 Diagrams**: `/docs/ONTOLOGY_C4_DIAGRAMS.md` (20 pages)
- **Fix Guide**: `/docs/ONTOLOGY_FIX_IMPLEMENTATION.md` (12 pages)
- **Summary**: `/docs/ONTOLOGY_ANALYSIS_SUMMARY.md` (11 pages)
- **Quick Ref**: `/docs/ONTOLOGY_QUICK_REFERENCE.md` (this file)

## Contact

- **Repo**: https://github.com/flossverse/logseq
- **Issues**: https://github.com/flossverse/logseq/issues
- **Site**: https://narrativegoldmine.com/ontology

## Timeline

| Task | Time |
|------|------|
| Edit publish.yml | 2 min |
| Commit & push | 2 min |
| GitHub Actions | 5-10 min |
| Deployment | 2-5 min |
| Testing | 5 min |
| **TOTAL** | **16-24 min** |

---

**TL;DR**: One-line change from HTTP to HTTPS fixes everything. Total time: ~20 minutes.
