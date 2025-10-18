<?php
/**
 * Plugin Name: VDaily Format
 * Plugin URI: https://github.com/np2023v2/vdaily-format
 * Description: Format WordPress posts with modern style and code blocks using CodeMirror
 * Version: 1.0.0
 * Author: VDaily
 * Author URI: https://github.com/np2023v2
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: vdaily-format
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('VDAILY_FORMAT_VERSION', '1.0.0');
define('VDAILY_FORMAT_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('VDAILY_FORMAT_PLUGIN_URL', plugin_dir_url(__FILE__));

/**
 * Main VDaily Format Plugin Class
 */
class VDaily_Format {
    
    /**
     * Instance of this class
     */
    private static $instance = null;
    
    /**
     * Get instance of this class
     */
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    /**
     * Constructor
     */
    private function __construct() {
        $this->init_hooks();
    }
    
    /**
     * Initialize hooks
     */
    private function init_hooks() {
        // Enqueue scripts and styles for frontend
        add_action('wp_enqueue_scripts', array($this, 'enqueue_frontend_assets'));
        
        // Enqueue scripts and styles for admin
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_assets'));
        
        // Add filter to format post content
        add_filter('the_content', array($this, 'format_post_content'), 20);
    }
    
    /**
     * Enqueue frontend assets
     */
    public function enqueue_frontend_assets() {
        // Enqueue custom CSS
        wp_enqueue_style(
            'vdaily-format-style',
            VDAILY_FORMAT_PLUGIN_URL . 'assets/css/style.css',
            array(),
            VDAILY_FORMAT_VERSION
        );
        
        // Enqueue custom JS
        wp_enqueue_script(
            'vdaily-format-script',
            VDAILY_FORMAT_PLUGIN_URL . 'assets/js/script.js',
            array('jquery'),
            VDAILY_FORMAT_VERSION,
            true
        );
    }
    
    /**
     * Enqueue admin assets
     */
    public function enqueue_admin_assets($hook) {
        // Only load on post editor pages
        if (!in_array($hook, array('post.php', 'post-new.php'))) {
            return;
        }
        
        // No admin assets needed for now
    }
    
    /**
     * Format post content with modern styling
     */
    public function format_post_content($content) {
        if (!is_singular()) {
            return $content;
        }
        
        // Wrap content in our custom container
        $formatted_content = '<div class="vdaily-format-content">' . $content . '</div>';
        
        return $formatted_content;
    }
}

/**
 * Initialize the plugin
 */
function vdaily_format_init() {
    return VDaily_Format::get_instance();
}

// Start the plugin
add_action('plugins_loaded', 'vdaily_format_init');
