# Ontology Visualization Fix - Implementation Guide

**Issue**: Mixed content error preventing graph rendering
**Root Cause**: HTTP font import in CSS served over HTTPS
**Priority**: CRITICAL - Graph completely broken
**Estimated Fix Time**: 5 minutes

## Quick Fix - Immediate Implementation

### Step 1: Update publish.yml

Add this step to `.github/workflows/publish.yml` after line 95 (after WebVOWL cloning):

```yaml
- name: Fix mixed content in WebVOWL CSS
  run: |
    # Replace HTTP with HTTPS in CSS font import
    sed -i 's|http://fonts.googleapis.com|https://fonts.googleapis.com|g' \
      webvowl-deploy/css/webvowl.app.css

    # Verify the fix
    if grep -q "https://fonts.googleapis.com" webvowl-deploy/css/webvowl.app.css; then
      echo "✅ Fixed CSS font import to use HTTPS"
    else
      echo "⚠️ Warning: Fix may not have applied correctly"
    fi
```

**Insert location**: Between "Clone WebVOWL" step and "Configure WebVOWL" step

### Step 2: Commit and Push

```bash
cd /home/devuser/workspace/logseq

# Edit the workflow file
# (Add the fix step at line 96)

git add .github/workflows/publish.yml
git commit -m "Fix: Replace HTTP font import with HTTPS in WebVOWL CSS

Resolves mixed content error preventing ontology graph rendering.
Changes http://fonts.googleapis.com to https://fonts.googleapis.com
in webvowl.app.css to comply with HTTPS security policy.

Fixes #[issue-number]"

git push origin main
```

### Step 3: Monitor Deployment

```bash
# Watch GitHub Actions
# https://github.com/flossverse/logseq/actions

# Deployment takes ~5-10 minutes
# Check for: ✅ Fixed CSS font import to use HTTPS
```

### Step 4: Verify Fix

Once deployed, test:

1. **Check CSS File**:
```bash
curl -s https://narrativegoldmine.com/ontology/css/webvowl.app.css | head -1
# Expected: @import url(https://fonts.googleapis.com/css?family=Open+Sans);
```

2. **Test Browser**:
- Open: https://narrativegoldmine.com/ontology/
- Open DevTools Console (F12)
- Check: No mixed content errors
- Verify: Graph renders with 1,008+ nodes

3. **Network Tab**:
- Check: All resources load over HTTPS
- Verify: No blocked requests
- Confirm: fonts.googleapis.com loads successfully

## Complete Fix with Auto-Load Enhancement (Optional)

If you want to also add the auto-load script enhancement:

### Updated publish.yml Section

```yaml
- name: Clone WebVOWL stable release
  run: |
    git clone --depth 1 --branch 1.1.6 https://github.com/VisualDataWeb/WebVOWL.git webvowl-src

    mkdir -p webvowl-deploy
    if [ -d "webvowl-src/deploy" ]; then
      echo "Using pre-built deploy folder from v1.1.6"
      cp -r webvowl-src/deploy/* webvowl-deploy/
    else
      echo "Building WebVOWL v1.1.6 from source"
      cd webvowl-src
      npm install
      npm run-script release
      cd ..
      cp -r webvowl-src/deploy/* webvowl-deploy/
    fi

    ls -lh webvowl-deploy/
    echo "✅ WebVOWL v1.1.6 ready"

- name: Fix mixed content and enhance WebVOWL
  run: |
    # Fix 1: Replace HTTP with HTTPS in CSS font import (CRITICAL)
    sed -i 's|http://fonts.googleapis.com|https://fonts.googleapis.com|g' \
      webvowl-deploy/css/webvowl.app.css

    # Verify CSS fix
    if grep -q "https://fonts.googleapis.com" webvowl-deploy/css/webvowl.app.css; then
      echo "✅ Fixed CSS font import to use HTTPS"
    else
      echo "❌ ERROR: CSS fix failed"
      exit 1
    fi

    # Fix 2: Add auto-load script (OPTIONAL ENHANCEMENT)
    if [ -f ".github/workflows/webvowl-autoload.js" ]; then
      # Copy autoload script to js directory
      cp .github/workflows/webvowl-autoload.js webvowl-deploy/js/webvowl-autoload.js

      # Inject script tag into index.html before </body>
      sed -i 's|</body>|    <script src="js/webvowl-autoload.js"></script>\n</body>|' \
        webvowl-deploy/index.html

      echo "✅ Auto-load script integrated"
    else
      echo "⚠️ Auto-load script not found, skipping enhancement"
    fi

    echo "✅ WebVOWL enhancements complete"

- name: Configure WebVOWL with custom ontology
  run: |
    mkdir -p webvowl-deploy/data

    # Replace FOAF (default) with our ontology
    cp /tmp/narrativegoldmine-ontology.json webvowl-deploy/data/foaf.json
    cp /tmp/narrativegoldmine-ontology.ttl webvowl-deploy/data/foaf.ttl

    # Also keep our ontology under its own name for reference
    cp /tmp/narrativegoldmine-ontology.json webvowl-deploy/data/narrativegoldmine-ontology.json
    cp /tmp/narrativegoldmine-ontology.ttl webvowl-deploy/data/narrativegoldmine-ontology.ttl

    # Verify files exist and show sizes
    ls -lh webvowl-deploy/data/foaf.json
    ls -lh webvowl-deploy/data/narrativegoldmine-ontology.json
    echo "✅ WebVOWL configured - our ontology replaces FOAF as default"
```

## Testing Checklist

After deployment, verify:

### Browser Console
- [ ] No mixed content errors
- [ ] No JavaScript errors
- [ ] Console shows: "WebVOWL initialized"
- [ ] Console shows: "Loaded X classes, Y properties"

### Visual Verification
- [ ] Graph renders (not blank)
- [ ] Nodes are visible (circles/shapes)
- [ ] Links connect nodes (lines)
- [ ] Labels are readable
- [ ] Font loads correctly (Open Sans)

### Functionality
- [ ] Can drag nodes
- [ ] Can zoom in/out
- [ ] Can pan graph
- [ ] Can click nodes to see details
- [ ] Can use search
- [ ] Can filter by namespace

### Network Tab
- [ ] All CSS files load (200 OK)
- [ ] All JS files load (200 OK)
- [ ] fonts.googleapis.com loads (200 OK)
- [ ] foaf.json loads (200 OK, 532KB)
- [ ] No failed requests (4xx/5xx)

### Performance
- [ ] Initial load < 5 seconds
- [ ] Graph renders < 10 seconds
- [ ] Smooth interaction (no lag)
- [ ] No memory leaks

## Rollback Plan

If fix causes issues:

### Option 1: Revert Commit
```bash
git revert HEAD
git push origin main
```

### Option 2: Manual Rollback
```bash
git reset --hard HEAD~1
git push --force origin main
```

### Option 3: Emergency Fix
If graph still broken, check:
1. CSS syntax error introduced
2. Script injection broke HTML
3. File permissions issues
4. Cache issues (clear browser cache)

## Alternative Solutions (If Needed)

### Solution A: Local Font Hosting

If Google Fonts is blocked by organization:

```yaml
- name: Download and host Open Sans locally
  run: |
    # Download font files
    mkdir -p webvowl-deploy/fonts
    cd webvowl-deploy/fonts

    # Download Open Sans from Google Fonts
    wget https://fonts.gstatic.com/s/opensans/v34/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.woff2 \
      -O opensans-regular.woff2

    cd ../..

    # Update CSS to use local font
    sed -i '1d' webvowl-deploy/css/webvowl.app.css  # Remove @import line

    # Add @font-face rule
    cat > webvowl-deploy/css/webvowl-fonts.css << 'EOF'
    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      src: url(../fonts/opensans-regular.woff2) format('woff2');
    }
    EOF

    # Reference in HTML
    sed -i 's|<link rel="stylesheet" type="text/css" href="css/webvowl.app.css" />|<link rel="stylesheet" type="text/css" href="css/webvowl-fonts.css" />\n    <link rel="stylesheet" type="text/css" href="css/webvowl.app.css" />|' \
      webvowl-deploy/index.html
```

### Solution B: Fork WebVOWL

For long-term maintenance:

1. Fork https://github.com/VisualDataWeb/WebVOWL
2. Create branch: `fix/https-fonts`
3. Fix `deploy/css/webvowl.app.css`
4. Commit and push to your fork
5. Update publish.yml to clone from fork:
```yaml
git clone --depth 1 --branch fix/https-fonts \
  https://github.com/[your-username]/WebVOWL.git webvowl-src
```

### Solution C: Remove Font Dependency

Simplest fallback:

```yaml
- name: Remove font import from CSS
  run: |
    # Remove the @import line entirely
    sed -i '1d' webvowl-deploy/css/webvowl.app.css

    # Browser will use system default font
    echo "✅ Removed font import, using system default"
```

## Monitoring Post-Fix

### Google Analytics
If you have GA set up:
- Monitor bounce rate on /ontology
- Track time on page (should increase)
- Check for error events

### GitHub Issues
Create issue template for ontology problems:
```markdown
## Ontology Visualization Issue

**URL**: https://narrativegoldmine.com/ontology/
**Browser**: [Chrome/Firefox/Safari] [version]
**OS**: [Windows/Mac/Linux]

### Problem Description
[Describe what's wrong]

### Console Errors
[Paste any errors from browser console]

### Screenshot
[Attach screenshot if possible]

### Expected Behavior
[What should happen]
```

### Automated Testing
Consider adding to workflow:
```yaml
- name: Test ontology endpoint
  run: |
    # Check CSS has HTTPS
    CSS_CONTENT=$(curl -s https://narrativegoldmine.com/ontology/css/webvowl.app.css)
    if echo "$CSS_CONTENT" | grep -q "https://fonts.googleapis.com"; then
      echo "✅ CSS uses HTTPS for fonts"
    else
      echo "❌ CSS still using HTTP for fonts"
      exit 1
    fi

    # Check JSON loads
    if curl -f -s https://narrativegoldmine.com/ontology/data/foaf.json > /dev/null; then
      echo "✅ Ontology JSON accessible"
    else
      echo "❌ Ontology JSON not accessible"
      exit 1
    fi
```

## Success Criteria

Fix is successful when:

1. ✅ No mixed content errors in console
2. ✅ Graph renders with all 1,008 classes
3. ✅ All fonts load correctly
4. ✅ Interactive features work (drag, zoom, click)
5. ✅ Search functionality works
6. ✅ Filter by namespace works
7. ✅ Export functions work
8. ✅ No performance degradation
9. ✅ Works on Chrome, Firefox, Safari
10. ✅ Works on mobile devices

## Timeline

| Phase | Duration | Tasks |
|-------|----------|-------|
| Implementation | 5 min | Add fix to publish.yml |
| Commit & Push | 2 min | Git operations |
| CI/CD Build | 5-10 min | GitHub Actions workflow |
| Deployment | 2-5 min | GitHub Pages propagation |
| Verification | 5 min | Browser testing |
| **Total** | **20-25 min** | **Complete fix** |

## Contact & Support

**Repository**: https://github.com/flossverse/logseq
**Issues**: https://github.com/flossverse/logseq/issues
**Website**: https://narrativegoldmine.com
**Ontology**: https://narrativegoldmine.com/ontology

---

**Document Version**: 1.0
**Last Updated**: November 9, 2025
**Status**: Ready for implementation
**Priority**: CRITICAL
