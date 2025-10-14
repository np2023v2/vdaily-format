/**
 * VDaily Format - CodeMirror Integration
 * Version: 1.0.0
 */

(function($) {
    'use strict';
    
    /**
     * Initialize CodeMirror on page load
     */
    $(document).ready(function() {
        initializeCodeMirror();
    });
    
    /**
     * Initialize CodeMirror for all code blocks
     */
    function initializeCodeMirror() {
        // Check if CodeMirror is available
        if (typeof CodeMirror === 'undefined') {
            console.warn('CodeMirror is not loaded');
            return;
        }
        
        // Find all code blocks within the formatted content
        $('.vdaily-format-content pre code').each(function() {
            var $code = $(this);
            var $pre = $code.parent('pre');
            
            // Skip if already initialized
            if ($pre.hasClass('codemirror-initialized')) {
                return;
            }
            
            // Get the code content
            var codeContent = $code.text();
            
            // Detect language from class name (e.g., language-javascript)
            var language = detectLanguage($code);
            
            // If no language detected, default to plain text
            if (!language) {
                language = 'text';
            }
            
            // Create a wrapper for the code block
            var $wrapper = $('<div class="code-block-wrapper"></div>');
            $pre.wrap($wrapper);
            
            // Add language indicator if language is not plain text
            if (language && language !== 'text') {
                $pre.before('<span class="code-block-language">' + language + '</span>');
            }
            
            // Add copy button
            var $copyButton = $('<button class="code-copy-button" title="Copy code">Copy</button>');
            $pre.before($copyButton);
            
            // Copy button click handler
            $copyButton.on('click', function(e) {
                e.preventDefault();
                copyToClipboard(codeContent, $(this));
            });
            
            // Replace the pre/code with a textarea for CodeMirror
            var $textarea = $('<textarea></textarea>');
            $textarea.val(codeContent);
            $pre.replaceWith($textarea);
            
            // Initialize CodeMirror
            var editor = CodeMirror.fromTextArea($textarea[0], {
                mode: getModeForLanguage(language),
                theme: 'dracula',
                lineNumbers: true,
                readOnly: true,
                lineWrapping: true,
                viewportMargin: Infinity
            });
            
            // Mark as initialized
            $(editor.getWrapperElement()).addClass('codemirror-initialized');
        });
    }
    
    /**
     * Detect language from code element classes
     */
    function detectLanguage($code) {
        var classes = $code.attr('class');
        
        if (!classes) {
            return null;
        }
        
        // Look for language- or lang- prefix
        var match = classes.match(/(?:language|lang)-(\w+)/);
        
        if (match && match[1]) {
            return match[1].toLowerCase();
        }
        
        return null;
    }
    
    /**
     * Get CodeMirror mode for a given language
     */
    function getModeForLanguage(language) {
        if (!language || language === 'text') {
            return 'text/plain';
        }
        
        var modeMap = {
            'javascript': 'javascript',
            'js': 'javascript',
            'typescript': 'javascript',
            'ts': 'javascript',
            'jsx': 'jsx',
            'tsx': 'jsx',
            'css': 'css',
            'scss': 'css',
            'sass': 'css',
            'less': 'css',
            'html': 'htmlmixed',
            'xml': 'xml',
            'php': 'php',
            'python': 'python',
            'py': 'python',
            'ruby': 'ruby',
            'rb': 'ruby',
            'java': 'text/x-java',
            'c': 'text/x-csrc',
            'cpp': 'text/x-c++src',
            'csharp': 'text/x-csharp',
            'cs': 'text/x-csharp',
            'go': 'go',
            'rust': 'rust',
            'sql': 'sql',
            'json': 'application/json',
            'markdown': 'markdown',
            'md': 'markdown',
            'bash': 'shell',
            'sh': 'shell',
            'shell': 'shell',
            'yaml': 'yaml',
            'yml': 'yaml'
        };
        
        return modeMap[language] || 'text/plain';
    }
    
    /**
     * Copy text to clipboard
     */
    function copyToClipboard(text, $button) {
        // Use modern Clipboard API if available
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                showCopySuccess($button);
            }).catch(function(err) {
                // Fallback method
                fallbackCopyToClipboard(text, $button);
            });
        } else {
            // Fallback method for older browsers
            fallbackCopyToClipboard(text, $button);
        }
    }
    
    /**
     * Fallback copy method for older browsers
     */
    function fallbackCopyToClipboard(text, $button) {
        var $temp = $('<textarea>');
        $('body').append($temp);
        $temp.val(text).select();
        try {
            document.execCommand('copy');
            showCopySuccess($button);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
        $temp.remove();
    }
    
    /**
     * Show copy success feedback
     */
    function showCopySuccess($button) {
        var originalText = $button.text();
        $button.text('Copied!').addClass('copied');
        setTimeout(function() {
            $button.text(originalText).removeClass('copied');
        }, 2000);
    }
    
    /**
     * Refresh CodeMirror instances when needed
     */
    window.vdailyFormatRefresh = function() {
        $('.CodeMirror').each(function() {
            if (this.CodeMirror) {
                this.CodeMirror.refresh();
            }
        });
    };
    
})(jQuery);
