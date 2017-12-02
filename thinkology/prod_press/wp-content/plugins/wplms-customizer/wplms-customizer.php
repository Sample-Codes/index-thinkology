<?php
/*
Plugin Name: WPLMS Customizer Plugin
Plugin URI: http://www.Vibethemes.com
Description: A simple WordPress plugin to modify WPLMS template
Version: 1.0
Author: VibeThemes
Author URI: http://www.vibethemes.com
License: GPL2
*/
/*
Copyright 2014  VibeThemes  (email : vibethemes@gmail.com)

wplms_customizer program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License, version 2, as 
published by the Free Software Foundation.

wplms_customizer program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with wplms_customizer program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/


include_once 'classes/customizer_class.php';


if (class_exists('WPLMS_Customizer_Plugin_Class')) {
    // instantiate the plugin class
    $wplms_customizer = new WPLMS_Customizer_Plugin_Class();
}

/*kurskii*/
add_action('bp_directory_course_item', function () {

    $course_id = get_the_ID();

    $terms = get_the_terms($course_id, 'course-cat');

    if (empty($terms)) {

        return;

    }

    $category = array();

    $cat = '';

    foreach ($terms as $term) {

        $category[] = $term->name;

    }
    /*kurskii_links*/
    $links = array();

    foreach ($terms as $term) {
        $link = get_term_link($term, $taxonomy);
        if (is_wp_error($link)) {
            return $link;
        }
        $links[] = '<a href="' . esc_url($link) . '" rel="tag" class="tag is-small color-white">' . $term->name . '</a>';
    }

    echo '<ul class="course_categories"> <span>' . implode('</span><span>', $links) . '</span> </ul>';


    echo '<style>.course_categories span{
            padding-right:10px;
            }</style>';


});



