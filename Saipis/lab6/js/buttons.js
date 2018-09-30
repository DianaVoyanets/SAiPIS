/**
 * Created by Dasha on 07.11.2017.
 */
$(document).ready(function () {


    jQuery('#firstButton').click(function () {
       let new1H= jQuery('li.firstH').text();
        jQuery('li.firstH').empty();
        jQuery('li.firstH').append(' <h1>'+new1H+'</h1>');

        let new2H= jQuery('li.secondH').text();
        jQuery('li.secondH').empty();
        jQuery('li.secondH').append(' <h2>'+new2H+'</h2>');

        let new3H= jQuery('li.thirdH').text();
        jQuery('li.thirdH').empty();
        jQuery('li.thirdH').append(' <h3>'+new3H+'</h3>');



        jQuery('li.keyWord').after('<ol class="new"></ol>');
        jQuery('li.words').each(function () {

            if (jQuery(this).text().substr(0, 1).toUpperCase() == 'A') {
            let aaa = jQuery(this).text();
                jQuery('ol.new').append(' <li class="a">'+aaa+'</li>');
            }
        });
    });



    jQuery('#secondButton').click(function () {
        jQuery("li.a:odd").each(function ()

        {
            let bbb = jQuery(this).text();
           if (jQuery("bbb:contains('Good')"))
           {jQuery(this).css('color', ' rgb(173, 28, 80)');
               jQuery(this).css('font-size', '24px');}
           else alert('whithout word Good');

        }  )
    });


    jQuery('#thirdButton').click(function () {
        jQuery("li.a:contains('Good')").each(function ()
        {
            jQuery(this).css('color', ' rgb(12, 32, 195)');
                jQuery(this).css('font-size', '20px');


        }  )
    });

});