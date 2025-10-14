# VDaily Format - WordPress Plugin

A modern WordPress plugin that formats posts with beautiful styling and syntax-highlighted code blocks using CodeMirror.

## Features

- **Modern Post Styling**: Clean, readable typography with a modern design
- **Code Syntax Highlighting**: Beautiful code blocks with CodeMirror integration
- **Multiple Language Support**: Supports JavaScript, PHP, Python, CSS, HTML, and many more
- **Responsive Design**: Works perfectly on all screen sizes
- **Easy to Use**: Simply install and activate - no configuration needed
- **Read-Only Code Blocks**: Code blocks are displayed with line numbers and syntax highlighting

## Installation

1. Download the plugin files
2. Upload the `vdaily-format` folder to the `/wp-content/plugins/` directory
3. Activate the plugin through the 'Plugins' menu in WordPress
4. The plugin will automatically format your post content and code blocks

## Usage

### Basic Usage

Once activated, the plugin automatically applies modern styling to all single post pages.

### Adding Code Blocks

To add syntax-highlighted code blocks to your posts, use the standard WordPress code block or add HTML code blocks with language classes:

```html
<pre><code class="language-javascript">
function hello() {
    console.log("Hello, World!");
}
</code></pre>
```

### Supported Languages

The plugin supports syntax highlighting for:

- JavaScript (js, javascript, jsx, tsx)
- PHP
- Python (py, python)
- CSS (css, scss, sass, less)
- HTML (html, xml)
- Java
- C/C++
- C# (csharp, cs)
- Go
- Rust
- SQL
- JSON
- Markdown (md, markdown)
- Bash/Shell (bash, sh, shell)
- YAML (yaml, yml)
- And many more...

## Styling

The plugin applies modern styling to:

- Headings with bottom borders
- Optimized spacing (reduced margins and padding)
- Styled links with hover effects
- Beautiful blockquotes
- Responsive images with shadow
- Modern tables
- Code blocks with Dracula theme
- Copy button on code blocks
- Priority mode to prevent style overrides
- Lists and other content elements

## CodeMirror Integration

The plugin uses CodeMirror 5.65.2 for code syntax highlighting with:

- Line numbers
- Dracula theme
- Read-only mode (for display)
- Line wrapping
- Language detection from class names
- Copy code functionality

## Customization

You can customize the styling by editing:
- `/assets/css/style.css` - Main stylesheet
- `/assets/js/script.js` - JavaScript and CodeMirror configuration

## Requirements

- WordPress 5.0 or higher
- PHP 7.0 or higher
- jQuery (included with WordPress)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

GPL v2 or later

## Author

VDaily - [GitHub](https://github.com/np2023v2)

## Changelog

### 1.0.0
- Initial release
- Modern post formatting
- CodeMirror integration for code blocks
- Support for multiple programming languages
- Responsive design