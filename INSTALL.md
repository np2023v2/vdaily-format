# Installation Guide

## Quick Start

### Method 1: Upload via WordPress Admin

1. Download the plugin files as a ZIP archive
2. Log in to your WordPress admin panel
3. Navigate to **Plugins > Add New**
4. Click **Upload Plugin** button at the top
5. Choose the ZIP file and click **Install Now**
6. Once installed, click **Activate Plugin**

### Method 2: Manual Installation

1. Download the plugin files
2. Upload the entire `vdaily-format` folder to `/wp-content/plugins/` directory via FTP or file manager
3. Log in to your WordPress admin panel
4. Navigate to **Plugins**
5. Find "VDaily Format" in the plugin list
6. Click **Activate**

## Verification

After activation:

1. Create or edit a post
2. Add some code blocks using the WordPress code block or HTML:
   ```html
   <pre><code class="language-javascript">
   console.log("Hello World");
   </code></pre>
   ```
3. View the post on the frontend
4. The code blocks should now have syntax highlighting with CodeMirror

## Usage Examples

### Adding a JavaScript Code Block

In the WordPress block editor, add a **Code** block and enter:

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

Add the language class by editing the block's HTML:

```html
<pre><code class="language-javascript">
function greet(name) {
    return `Hello, ${name}!`;
}
</code></pre>
```

### Adding a PHP Code Block

```html
<pre><code class="language-php">
<?php
echo "Hello, World!";
?>
</code></pre>
```

### Adding a Python Code Block

```html
<pre><code class="language-python">
def hello():
    print("Hello, World!")
</code></pre>
```

## Supported Languages

The plugin automatically detects and highlights the following languages:

- JavaScript/TypeScript (js, javascript, ts, typescript, jsx, tsx)
- PHP (php)
- Python (py, python)
- CSS/SCSS/SASS (css, scss, sass, less)
- HTML/XML (html, xml)
- Java (java)
- C/C++ (c, cpp)
- C# (csharp, cs)
- Go (go)
- Rust (rust)
- SQL (sql)
- JSON (json)
- Markdown (md, markdown)
- Shell/Bash (bash, sh, shell)
- YAML (yaml, yml)

## Customization

### Changing the CodeMirror Theme

Edit `vdaily-format.php` and change the theme in the enqueue functions:

```php
// Change from 'monokai' to another theme
wp_enqueue_style(
    'codemirror-theme',
    'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.2/theme/dracula.min.css',
    array('codemirror'),
    '5.65.2'
);
```

Available themes: monokai, dracula, material, solarized, etc.

### Customizing Styles

Edit `/assets/css/style.css` to customize:
- Colors
- Font sizes
- Spacing
- Border styles
- And more

### Modifying JavaScript Behavior

Edit `/assets/js/script.js` to:
- Change CodeMirror options
- Add new language modes
- Customize initialization logic

## Troubleshooting

### Code blocks not highlighting

1. Check if JavaScript is enabled in your browser
2. Check browser console for errors
3. Ensure jQuery is loaded (WordPress includes it by default)
4. Try deactivating other plugins that might conflict

### Styles not applying

1. Clear your browser cache
2. Clear WordPress cache (if using a caching plugin)
3. Check if the plugin files are uploaded correctly
4. Ensure the plugin is activated

### CDN Resources Not Loading

The plugin uses CDN resources for CodeMirror. If your site is behind a firewall or CDN is blocked:

1. Download CodeMirror files
2. Place them in the plugin's assets folder
3. Update the URLs in `vdaily-format.php` to use local files

## Uninstallation

1. Deactivate the plugin from the Plugins page
2. Click "Delete" to remove all plugin files
3. No database cleanup is needed as the plugin doesn't create any database tables

## Support

For issues, questions, or contributions:
- GitHub: https://github.com/np2023v2/vdaily-format
- Create an issue on GitHub for bug reports or feature requests
