<?php
get_header();

wp_list_categories(
    array(
        'orderby'    => 'count',
        'order'      => 'DESC',
        'show_count' => 1,
        'title_li'   => '',
        'number'     => 10,
    )
);

get_footer();
