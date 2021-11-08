<?php

class FrontPageController
{
    public function __construct()
    {
        if (is_front_page()) {
            add_filter('body_class', [$this, 'removeBodyClasses']);
        }
    }
    
    public function removeBodyClasses($classes)
    {
        $key = array_search('page', $classes);
        
        unset($classes[$key]);
        
        return $classes;
    }
}

new FrontPageController();