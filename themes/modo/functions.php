<?php
	add_action('wp_enqueue_scripts', function() {
		$manifest = json_decode(file_get_contents(get_theme_file_path('dist/.vite/manifest.json')), true)['src/js/main.js'];
		wp_enqueue_script('modo-js', get_theme_file_uri('dist/assets/' . basename($manifest['file'])), [], null, true);
		if (!empty($manifest['css'][0])) wp_enqueue_style('modo-css', get_theme_file_uri('dist/assets/' . basename($manifest['css'][0])));
	});