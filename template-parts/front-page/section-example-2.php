<?php $promo = get_field('promo'); ?>
<section class="promo-section section section--violete">
    <div class="container-small">
        <div class="promo-section__content">
            <?php if ($promo['text']): ?>
                <p class="promo-section__paragraph paragraph"><?= $promo['text']; ?></p>
            <?php endif;
            if ($promo['headline']): ?>
                <h2 class="promo-section__title title"><?= $promo['headline']; ?></h2>
            <?php endif;
            if ($promo['link']): ?>
                <a href="<?= $promo['link']['url']; ?>" class="promo-section__btn btn btn--white">
                    <span class="btn__text"><?= $promo['link']['title']; ?></span>
                </a>
            <?php endif; ?>
        </div>
    </div>
</section>