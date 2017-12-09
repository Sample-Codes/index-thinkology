<?php
/**
 * Template Name: No Title
 */
get_header(vibe_get_header());
?>
<!--kurskii-->
<section id="content">
<!--<section id="content"  style="background-color: #ed6c63; color: #fff;">-->
    <div class="<?php echo vibe_get_container(); ?>">
            <?php
            if ( have_posts() ) : while ( have_posts() ) : the_post();
                the_content();
            endwhile;
            endif;
            ?>
    </div>
</section>
<?php
get_footer(vibe_get_footer());
?>