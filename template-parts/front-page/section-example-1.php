<?php $about = get_field('about'); ?>
<section class="home-about section section--gray">
    <div class="container-small">
        <?php if ($about['text']): ?>
            <div class="home-about__description">
                <?= $about['text']; ?>
            </div>
        <?php endif; ?>
        <div class="home-about__buttons">
            <?php if ($about['link_1']): ?>
                <a href="<?= $about['link_1']['url']; ?>" class="btn btn--main">
                    <span class="btn__text"><?= $about['link_1']['title']; ?></span>
                </a>
            <?php endif;
            if ($about['link_2']): ?>
                <a href="<?= $about['link_2']['url']; ?>" class="btn btn--gradient btn--gradient-gray">
                    <span class="btn__text"><?= $about['link_2']['title']; ?></span>
                </a>
            <?php endif; ?>
        </div>
    </div>
</section>