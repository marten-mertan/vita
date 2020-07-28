'use strict';

function CCatalog(opts) {
    var s = this;

    var self = {
        opts: {},
        vars: {}
    };

    if (typeof opts == 'object')
        $.extend(self.opts, opts);


    s.onlyUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };

    s.checkFav = function () {
        var obj = new Array();
        $('.wish_item').each(function (i, item) {
            obj.push($(item).data('item'));
        });
        $('.product-card').each(function (i, item) {
            obj.push($(item).data('item'));
        });
        if (obj.length == 0)
            return false;

        let unique = obj.filter(s.onlyUnique);
        $.ajax({
            url: '/ajax/favorite.php',
            type: "post",
            dataType: 'json',
            data: {
                items: unique,
                action: 'check'
            },
            success: function (res) {
                let j = 0;
                for (var i in res.items) {
                    if (res.items.hasOwnProperty(i)) {
                        let fav = res.items[i];
                        if (fav) {
                            ++j;
                            $('.wish_item.to[data-item="' + i + '"]').hide();
                            $('.wish_item.in[data-item="' + i + '"]').show();
                        } else {
                            $('.wish_item.to[data-item="' + i + '"]').show();
                            $('.wish_item.in[data-item="' + i + '"]').hide();
                        }
                    }
                }
                $('#header .basket_fly .opener .wish_count .count').addClass('empty_items');
                if (j > 0)
                    $('#header .basket_fly .opener .wish_count .count').removeClass('empty_items');

                $('#header .basket_fly .opener .wish_count .items span').text(j);

            }
        });
    };

    s.favoriteAjax = function () {
        if (!$("#basket_line .basket_fly").hasClass('wish')) {
            $('#basket_line .basket_fly').removeClass('loaded').find('.basket_sort, form').remove();
            $.ajax({
                url: '/ajax/favorite.php',
                type: "post",
                dataType: 'html',
                data: {
                    action: 'list'
                },
                success: function (res) {
                    $('#basket_line .basket_fly').addClass('loaded').addClass('wish').html(res);
                }
            });
        }
    };

    s.getFavoriteList = function (e) {

        let self = e.data.catalog;
        if (parseInt($("#basket_line .basket_fly").css("right")) < 0) {
            $("#basket_line .basket_fly").stop().animate({"right": "0"}, 333, function () {
                self.favoriteAjax();
            });
        } else if ($("#basket_line .basket_fly").hasClass('wish')) {
            $("#basket_line .basket_fly").stop().animate({"right": -$("#basket_line .basket_fly").outerWidth()}, 150);
            $("#basket_line .basket_fly .opener > div.clicked").addClass('small');
        } else {
            self.favoriteAjax();
        }

    };

    s.addProduct = function (e) {
        let target = e.target, th = $(target).parents('tr');
        var product_id = $(target).parents('tr').attr("product-id");
        $.post(arOptimusOptions['SITE_DIR'] + 'ajax/item.php', 'add_item=Y&item=' + product_id + '&quantity=1', $.proxy(function (data) {
            $('.opener .basket_count').click();
            //basketFly('open');
            getActualBasket(th.attr('data-iblockid'));
        }));
    };

    s.deleteFavorite = function (e) {
        let product_id = e.target.dataset.item, self = e.data.catalog;
        $.post(arOptimusOptions['SITE_DIR'] + 'ajax/item.php', 'wish_item=Y&item=' + product_id, $.proxy(function (data) {
            e.data = {catalog: self};
            $("#basket_line .basket_fly").removeClass('wish');
            self.getFavoriteList(e);

            $('.wish_item.to[data-item="' + product_id + '"]').show();
            $('.wish_item.in[data-item="' + product_id + '"]').hide();
        }));
    };
    $(document).on('click', '.remove-cell .remove i', {catalog: this}, s.deleteFavorite);
    $(document).on('click', '.wish_count', {catalog: this}, s.getFavoriteList);
    $(document).on('click', '.delay-cell .to_basket', s.addProduct);
    s.checkFav();
    //s.lastActivity();
};