# Quick Reference Card

## VDaily Format WordPress Plugin

### Installation
```bash
# Upload to WordPress plugins directory
wp-content/plugins/vdaily-format/

# Or via WordPress admin
Plugins > Add New > Upload Plugin
```

### Activation
```
WordPress Admin > Plugins > VDaily Format > Activate
```

### Usage in Posts

#### 1. Add Code Block with Language
```html
<pre><code class="language-javascript">
// Your JavaScript code here
console.log("Hello World");
</code></pre>
```

#### 2. Supported Language Classes
- `language-javascript` or `language-js`
- `language-php`
- `language-python` or `language-py`
- `language-css`
- `language-html`
- `language-java`
- `language-cpp` or `language-c`
- `language-csharp` or `language-cs`
- `language-go`
- `language-rust`
- `language-sql`
- `language-json`
- `language-markdown` or `language-md`
- `language-bash` or `language-sh`
- `language-yaml` or `language-yml`

#### 3. Inline Code
```html
Use <code>inline code</code> for single line snippets
```

#### 4. Other Styled Elements

**Blockquotes:**
```html
<blockquote>Your quote here</blockquote>
```

**Tables:**
```html
<table>
  <thead><tr><th>Header</th></tr></thead>
  <tbody><tr><td>Data</td></tr></tbody>
</table>
```

**Links:**
```html
<a href="url">Link text</a>
```

### Customization

#### Change CodeMirror Theme
Edit `vdaily-format.php`, find:
```php
wp_enqueue_style('codemirror-theme', ...theme/monokai.min.css...);
```
Replace `monokai` with: `dracula`, `material`, `solarized`, etc.

#### Modify Styles
Edit `assets/css/style.css` to customize colors, fonts, spacing.

#### Add More Languages
Edit `assets/js/script.js`, update the `getModeForLanguage()` function.

### Features Auto-Applied

✓ Modern typography for all text
✓ Styled headings with borders
✓ Clean paragraph spacing
✓ Hover effects on links
✓ Beautiful blockquotes
✓ Responsive images with shadows
✓ Professional tables
✓ Syntax-highlighted code blocks
✓ Mobile-responsive design

### Files Modified by Plugin

**On Frontend:**
- Wraps content in `.vdaily-format-content` div
- Initializes CodeMirror on code blocks
- Applies modern CSS styling

**On Admin:**
- Loads CodeMirror in post editor (optional)

### Troubleshooting

**Code not highlighting?**
- Check if language class is added: `class="language-xxx"`
- View browser console for JavaScript errors
- Clear cache and refresh

**Styles not applying?**
- Clear WordPress cache
- Clear browser cache
- Check if plugin is activated

**Want to disable on specific pages?**
Add to your theme's functions.php:
```php
add_filter('the_content', function($content) {
    if (is_page('my-page-slug')) {
        remove_filter('the_content', array(VDaily_Format::get_instance(), 'format_post_content'), 20);
    }
    return $content;
}, 1);
```

### Technical Details

- **Plugin Version:** 1.0.0
- **WordPress Required:** 5.0+
- **PHP Required:** 7.0+
- **CodeMirror Version:** 5.65.2
- **License:** GPL v2 or later

### Support

- GitHub: https://github.com/np2023v2/vdaily-format
- Issues: https://github.com/np2023v2/vdaily-format/issues

---
*For full documentation, see README.md*
*For installation guide, see INSTALL.md*
