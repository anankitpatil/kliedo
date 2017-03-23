$(window).bind('load', function() {
    $(document).ready(function() {

        // Global variables
        var fadeInterval = 600;

        // Fit objects
        var fitObjects = function() {
            if (($(window).width() - $(window).height() - 30) < 270) {
                $('.questions').addClass('mobile');//.css('margin-top', '-' + $('.questions').height() / 2 + 'px');
                $(window.kaleidoscope.domElement).animate({'opacity': 0}, fadeInterval, function() {
                    if ($(window).width() > $(window).height()) window.kaleidoscope.radius = $(window).height() / 2 - 60;
                    else window.kaleidoscope.radius = $(window).width() / 2;
                    window.overlay.style.left = '50%';
                    window.kaleidoscope.domElement.style.left = '50%';
                    window.kaleidoscope.draw();
                    window.kaleidoscope.resize();
                    $(window.kaleidoscope.domElement).animate({'opacity': 1}, fadeInterval);
                    $('.bg-pattern').css({'width': '', 'margin-left': ''});
                    $('.wrapper .questions').css('right', '');
                    $('.wrapper .name').css('left', '15px');
                    $('.wrapper .player').css('right', '15px');
                });
            } else {
                var space = ($(window).width() - window.kaleidoscope.radius * 2 - 390) / 2;
                $('.questions').removeClass('mobile');//.css('margin-top', '-' + $('.questions').height() / 2 + 'px');
                $(window.kaleidoscope.domElement).animate({'opacity': 0}, fadeInterval, function() {
                    if ($(window).width() > $(window).height()) window.kaleidoscope.radius = $(window).height() / 2 - 60;
                    else window.kaleidoscope.radius = $(window).width() / 2;
                    window.overlay.style.left = window.kaleidoscope.radius + space + 'px';
                    window.kaleidoscope.domElement.style.left = window.kaleidoscope.radius + space + 'px';
                    window.kaleidoscope.draw();
                    window.kaleidoscope.resize();
                    $(window.kaleidoscope.domElement).animate({'opacity': 1}, fadeInterval);
                    $('.bg-pattern').css({'width': (window.kaleidoscope.radius + 390 + space) * 2 + 'px'})
                    $('.wrapper .questions').css('right', space + 'px');
                    $('.wrapper .name').css('left', '60px');
                    $('.wrapper .player').css('right', '60px');
                });
            }
        };
        fitObjects();

        // Resize controls
        var resizeTimer;
        $(window).on('resize', function(e) {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() { fitObjects(); }, 300);
        });

        // Ready controls
        $('.bg-pattern').animate({'opacity': 1}, 1000);
        $(window.kaleidoscope.domElement).animate({'opacity': 1}, 1200, function() {
            $('.name').css('visibility', 'visible').addClass('fadeInDown');
        });

        // Slide function
        var slider = [{'colours': 'first', 'overlays': 'img/overlay-2.png', 'patterns': 'img/kal-pattern-00.png','backgrounds': 'img/bg-pattern.png', 'title': 'Music'},
            {'colours': 'second', 'overlays': 'img/overlay-b.png', 'patterns': 'img/kal-pattern-b0.png','backgrounds': 'img/bg-pattern-b.png', 'title': 'Fashion'},
            {'colours': 'third', 'overlays': 'img/overlay-c.png', 'patterns': 'img/kal-pattern-c0.png','backgrounds': 'img/bg-pattern-c.png', 'title': 'Architecture'},
            {'colours': 'fourth', 'overlays': 'img/overlay-d.png', 'patterns': 'img/kal-pattern-d0.png','backgrounds': 'img/bg-pattern-d.png', 'title': 'Arts'}];
        var i = 0;
        setInterval(function() {
            $(window.kaleidoscope.domElement).animate({'opacity': 0}, fadeInterval, function() {
                //$('.slide-name').removeClass('fadeInUp').addClass('fadeOutDown');
                setTimeout(function() {
                    //$('.slide-name').html(slider[i].title).css('margin-left', '-' + $('.slide-name').width() / 2 + 'px').removeClass('fadeOutDown').addClass('fadeInUp');
                    window.kaleidoscope.image.src = slider[i].patterns;
                    // $(window.overlay).css('opacity', 0);
                    // window.overlay.src = slider[i].overlays;
                    //window.kaleidoscope.draw();
                    //window.kaleidoscope.domElement.style.backgroundImage = 'url(' + slider[i].backgrounds + ')';
                    // $(window.overlay).delay(fadeInterval / 2).animate({'opacity': 1}, fadeInterval);
                    $(window.kaleidoscope.domElement).delay(fadeInterval).animate({'opacity': 1}, fadeInterval);
                    // $('body').animate({backgroundColor: slider[i].colours}, fadeInterval);
                }, fadeInterval);
            });
            if (i != 3) i++; else i = 0;
        }, 12000);

        // Content animation
        var content = [{'title': 'Grow.', 'tag': 'Grow with Kliedo.'},
            {'title': '', 'tag': 'Unbracket your dreams.'},
            {'title': '', 'tag': 'Imagine big - bigger than before.'},
            {'title': 'Grow.', 'tag': 'Grow with Kliedo.'},
            {'title': '', 'tag': 'Make some noise.'},
            {'title': '', 'tag': 'Blow your trumpet.<br />(And your bugle and bagpipe.)'},
            {'title': 'Grow.', 'tag': 'Grow with Kliedo.'},
            {'title': '', 'tag': 'Gather honeycombs.'},
            {'title': '', 'tag': 'Fly with other creative dragons.'},
            {'title': 'Grow.', 'tag': 'Grow with Kliedo.'},
            {'title': '', 'tag': 'Make awesomeness contagious.'},
            {'title': '', 'tag': 'Untame your imagination.'},
            {'title': 'Grow.', 'tag': 'Grow with Kliedo.'},
            {'title': '', 'tag': 'Make ordinary extra-ordinary.'},
            {'title': '', 'tag': 'Adopt the spotlight.'},
            {'title': '', 'tag': 'Be the cut above cutting edge.'}];
        setTimeout(function() {
            $('.scroll-title, .beside-title').addClass('fadeInUp').css('visibility', 'visible');
            $('.sub-title').addClass('fadeInUp').css('visibility', 'visible');
            var j = 0;
            setInterval(function() {
                // $('.beside-title').removeClass('fadeInUp bounceIn').addClass('fadeOut');
                $('.sub-title').removeClass('fadeInUp').addClass('fadeOut');
                setTimeout(function() {
                    // $('.beside-title').html(content[j].title).removeClass('fadeOut').addClass('bounceIn');
                    $('.sub-title').html(content[j].tag).removeClass('fadeOut').addClass('fadeInUp');
                }, 1000);
                if (j != 15) j++; else j = 0;
            }, 3000);
        }, 3000);

        // About control
        $('.info-about').click(function(e) {
            e.preventDefault();
            $('.about, .info-about').addClass('open');
            $('.about .container').removeClass('fadeOut').addClass('fadeInUp').css('visibility', 'visible');
            $('.about .boxclose').removeClass('fadeOut').addClass('bounceIn').css('visibility', 'visible');
        });
        $('.boxclose').click(function(e) {
            e.preventDefault();
            $('.about, .info-about').removeClass('open');
            $('.about .container').removeClass('fadeInUp').addClass('fadeOut');
            $('.about .boxclose').removeClass('bounceIn').addClass('fadeOut');
        });

        // Share on fb
        $('.info-fb').click(function(e) {
            e.preventDefault();
            window.kaleidoscope.shareFB();
        });

        // Share on tw
        $('.info-tw').click(function(e) {
            e.preventDefault();
            window.kaleidoscope.shareTW();
        });

        // Questionnaire
        window.formDataHolder = {};
        var inputHeight = $('.questions input').css('height');
        $('.questions p').addClass('fadeInUp').css('visibility', 'visible');
        setTimeout(function() {
            $('.questions .line').addClass('fadeIn').css('visibility', 'visible');
            $('.questions .enter').addClass('fadeInUp').css('visibility', 'visible');
            $('.questions .info-about, .questions .info-fb, .questions .info-tw').addClass('fadeInUp').css('visibility', 'visible');
            // Initial click/enter
            $(document).bind('click keyup', 'space, enter', function() {
                $(document).off('click keyup');
                $('.questions p').removeClass('fadeInUp').addClass('fadeOut');
                $('.questions .line').removeClass('fadeIn').addClass('fadeOut');
                $('.questions .enter').removeClass('fadeInUp').addClass('fadeOut');
                setTimeout(function() {
                    $('.questions p').removeClass('fadeOut').html('What <strong>name</strong> do you generally go by?').addClass('fadeInUp');
                    $('.questions .line').removeClass('fadeOut').addClass('fadeIn');
                    $('.questions .enter').removeClass('fadeOut').addClass('fadeInUp');
                    $('.questions input').css({'display': 'block'}).addClass('fadeInUp').css('visibility', 'visible').focus();
                    $('.questions .enter').html('Type in your name and press "Enter" to continue...');
                    //$('.questions').css('margin-top', '-' + $('.questions').height() / 2 + 'px');
                    // Name submit (enter)
                    $('.questions form').on('submit', function(e) {
            			e.preventDefault();
                        // If name empty
                        if (!$('.questions input').val()) {
                            $('.questions .enter').html('Hmm.. some questions cannot be answered, but this isn’t one of those. Please do share your reply...');
                            setTimeout(function() { $('.questions .enter').html('Type in your name and press "Enter" to continue...'); }, 3000);
            			} else {
                            $('.questions form').off('submit');
                            window.formDataHolder.name = $('.questions input').val();
                            $('.questions p').removeClass('fadeInUp').addClass('fadeOut');
                            $('.questions input').removeClass('fadeInUp').css('visibility', 'hidden').val('').attr('placeholder', 'Your email here...');
                            $('.questions .line').removeClass('fadeIn').css('visibility', 'hidden');
                            $('.questions .enter').removeClass('fadeInUp').css('visibility', 'hidden');
                            $('.questions .enter').html('Type in your email and press "Enter" to continue...');
                            setTimeout(function() {
                                $('.questions p').removeClass('fadeOut').html("We knew we’d hit it off! Now that we’re friends, we’d love to send you free vouchers and exciting updates. Do share your <strong>email id</strong>.").addClass('fadeInUp');
                                $('.questions input').addClass('fadeInUp').css('visibility', 'visible').focus();
                                $('.questions .line').addClass('fadeIn').css('visibility', 'visible');
                                $('.questions .enter').addClass('fadeInUp').css('visibility', 'visible');
                            }, fadeInterval);
                            // Email submit (enter)
                            $('.questions form').on('submit', function(e) {
                    			e.preventDefault();
                                if (/(.+)@(.+){2,}\.(.+){2,}/.test($('.questions input').val())) {
                                    $('.questions form').off('submit');
                                    window.formDataHolder.email = $('.questions input').val();
                                    $('.questions p').removeClass('fadeInUp').addClass('fadeOut');
                                    $('.questions input').removeClass('fadeInUp').css('visibility', 'hidden').val('').attr('placeholder', 'Your number here...');
                                    $('.questions .line').removeClass('fadeIn').css('visibility', 'hidden');
                                    $('.questions .enter').removeClass('fadeInUp').css('visibility', 'hidden').html('Type in your phone number and press "Enter" to continue...');
                                    setTimeout(function() {
                                        $('.questions p').css('visibility', 'hidden').removeClass('fadeOut').html("Psst.. want to be the first to know about deals and news? If so, share your <strong>phone number</strong> (don’t worry, it will be in safe hands).").addClass('fadeInUp').css('visibility', 'visible');
                                        $('.questions input').addClass('fadeInUp').css('visibility', 'visible').focus();
                                        $('.questions .line').addClass('fadeIn').css('visibility', 'visible');
                                        $('.questions .enter').addClass('fadeInUp').css('visibility', 'visible');
                                    }, fadeInterval);
                                    // Phone submit (enter)
                                    $('.questions form').on('submit', function(e) {
                            			e.preventDefault();
                                        /*if ($('.questions input').val().length >= 10 && $.isNumeric($('.questions input').val())) {*/
                                            $('.questions form').off('submit');
                                            window.formDataHolder.number = $('.questions input').val();
                                            $('.questions p').removeClass('fadeInUp').addClass('fadeOut');
                                            $('.questions input').removeClass('fadeInUp').css('visibility', 'hidden').val('').attr('placeholder', 'Your city here...');
                                            $('.questions .line').removeClass('fadeIn').css('visibility', 'hidden');
                                            $('.questions .enter').removeClass('fadeInUp').css('visibility', 'hidden').html('Type in your city and press "Enter" to continue...');
                                            setTimeout(function() {
                                                $('.questions p').css('visibility', 'hidden').removeClass('fadeOut').html(" Thanks for being awesome! Exciting updates shall soon be sent your way, but first, which <strong>city</strong> do you currently call home?").addClass('fadeInUp').css('visibility', 'visible');
                                                $('.questions input').addClass('fadeInUp').css('visibility', 'visible').focus();
                                                $('.questions .line').addClass('fadeIn').css('visibility', 'visible');
                                                $('.questions .enter').addClass('fadeInUp').css('visibility', 'visible');
                                            }, fadeInterval);
                                            // City submit (enter)
                                            $('.questions form').on('submit', function(e) {
                                    			e.preventDefault();
                                                // If city empty
                                                if (!$('.questions input').val()) {
                                                    $('.questions .enter').html('Ouch! Unanswered questions make us feel incomplete. Help us - leave a reply...');
                                                    setTimeout(function() { $('.questions .enter').html('Type in your city and press "Enter" to continue...'); }, 3000);
                                                } else {
                                                    $('.questions form').off('submit');
                                                    window.formDataHolder.city = $('.questions input').val();
                                                    $('.questions p').removeClass('fadeInUp').addClass('fadeOut');
                                                    $('.questions input').removeClass('fadeInUp').css('visibility', 'hidden').css('display', 'none');
                                                    $('.questions .line').removeClass('fadeIn').css('visibility', 'hidden');
                                                    $('.questions .enter').removeClass('fadeInUp').css('visibility', 'hidden').html('Select a field to continue...');
                                                    setTimeout(function() {
                                                        $('.questions p').css('visibility', 'hidden').removeClass('fadeOut').html("Gotcha! And if someone asks, you’d say you are a(n)").addClass('fadeInUp').css('visibility', 'visible');
                                                        $('.questions .expertise').css('display', 'block').addClass('fadeInUp').css('visibility', 'visible');
                                                        $('.questions .line').addClass('fadeIn').css('visibility', 'visible');
                                                        $('.questions .enter').addClass('fadeInUp').css('visibility', 'visible');
                                                    }, fadeInterval);
                                                    // Expertise select change
                                                    $('.questions .expertise').on('change', function() {
                                                        if (this.value == '') {
                                                            // If select empty
                                                            $('.questions .enter').html('Hmm.. some questions cannot be answered, but this isn’t one of those. Please do share your reply...');
                                                            setTimeout(function() { $('.questions .enter').html('Select a field to continue...'); }, 3000);
                                                        } else if (this.value == 'other') {
                                                            // Select 'other'
                                                            $('.questions input').removeClass('fadeOut').val('').attr('placeholder', 'What do you do?').css('display', 'block').addClass('fadeIn').css('visibility', 'visible').focus();
                                                            $('.questions .enter').html('Hmm, you’ve piqued our curiosity. Could you specify please?');
                                                            $('.questions form').on('submit', function(e) {
                                                    			e.preventDefault();
                                                                // If other field empty
                                                                if (!$('.questions input').val()) {
                                                                    $('.questions .enter').html('You can not leave this blank...');
                                                                    setTimeout(function() { $('.questions .enter').html('Hmm, you’ve piqued our curiosity. Could you specify please?'); }, 3000);
                                                                } else {
                                                                    $('.questions form').off('submit');
                                                                    window.formDataHolder.expertise = $('.questions input').val();
                                                                    $('.questions .expertise option').eq(1).prop('selected', true).trigger('change');
                                                                }
                                                            });
                                                        } else if (this.value == 'Artist') {
                                                            // Select 'artist'
                                                            $('.questions .expertise').off('change');
                                                            $('.questions .expertise').css('display', 'none');
                                                            if (!window.formDataHolder.expertise) window.formDataHolder.expertise = $('.questions .expertise').val();
                                                            $('.questions p').removeClass('fadeInUp').addClass('fadeOut');
                                                            $('.questions input').removeClass('fadeInUp').css('visibility', 'hidden').css('display', 'none');
                                                            $('.questions .line').removeClass('fadeIn').css('visibility', 'hidden');
                                                            $('.questions .enter').removeClass('fadeInUp').css('visibility', 'hidden').html('Select your field of interest to continue...');
                                                            setTimeout(function() {
                                                                $('.questions p').css('visibility', 'hidden').removeClass('fadeOut').html("Way to go, we’re proud of you. So what exactly is your cup of (creative)-tea?").addClass('fadeInUp').css('visibility', 'visible');
                                                                $('.questions .expertise-artist').css('display', 'block').addClass('fadeInUp').css('visibility', 'visible');
                                                                $('.questions .line').addClass('fadeIn').css('visibility', 'visible');
                                                                $('.questions .enter').addClass('fadeInUp').css('visibility', 'visible');
                                                                // Select artist - profession
                                                                $('.questions .expertise-artist').on('change', function() {
                                                                    if (this.value == '') {
                                                                        // If select empty
                                                                        $('.questions .enter').html('Hmm.. some questions cannot be answered, but this isn’t one of those. Please do share your reply...');
                                                                        setTimeout(function() { $('.questions .enter').html('Select a field to continue...'); }, 3000);
                                                                    } else if (this.value == 'other') {
                                                                        // Select 'other'
                                                                        $('.questions input').removeClass('fadeOut').val('').attr('placeholder', 'Your field of interest here...').css('display', 'block').addClass('fadeIn').css('visibility', 'visible').focus();
                                                                        $('.questions .enter').html('Oops, did we miss out on your field? Do help out by typing it in, thanks.');
                                                                        $('.questions form').on('submit', function(e) {
                                                                			e.preventDefault();
                                                                            // If other field empty
                                                                            if (!$('.questions input').val()) {
                                                                                $('.questions .enter').html('Hmm.. some questions cannot be answered, but this isn’t one of those. Please do share your reply...');
                                                                                setTimeout(function() { $('.questions .enter').html('Oops, did we miss out on your field? Do help out by typing it in, thanks.'); }, 3000);
                                                                            } else {
                                                                                $('.questions form').off('submit');
                                                                                window.formDataHolder.profession = $('.questions input').val();
                                                                                $('.questions .expertise-artist option').eq(1).prop('selected', true).trigger('change');
                                                                            }
                                                                        });
                                                                    } else {
                                                                        $('.questions .expertise-artist').off('change');
                                                                        $('.questions .expertise-artist').css('display', 'none');
                                                                        if (!window.formDataHolder.profession) window.formDataHolder.profession = $('.questions .expertise-artist').val();
                                                                        $('.questions p').removeClass('fadeInUp').addClass('fadeOut');
                                                                        $('.questions .line').removeClass('fadeIn').css('visibility', 'hidden');
                                                                        $('.questions .enter').removeClass('fadeInUp').css('visibility', 'hidden');
                                                                        setTimeout(function() {
                                                                            $('.questions p').css('visibility', 'hidden').removeClass('fadeOut').html("Amazing! Like to tell us a bit more about your work?").addClass('fadeInUp').css('visibility', 'visible');
                                                                            $('.questions input').val('').attr('placeholder', 'Few words about your work').css('display', 'block').addClass('fadeInUp').css('visibility', 'visible').focus();
                                                                            $('.questions .line').addClass('fadeIn').css('visibility', 'visible');
                                                                            $('.questions .enter').html('Tell us a little about your work and press "Enter" to continue...').addClass('fadeInUp').css('visibility', 'visible');
                                                                        }, fadeInterval);
                                                                        // Artist - profession - description (enter)
                                                                        $('.questions form').on('submit', function(e) {
                                                                            e.preventDefault();
                                                                            if (!$('.questions input').val()) {
                                                                                // Description left empty
                                                                                $('.questions .enter').html('Hmm.. some questions cannot be answered, but this isn’t one of those. Please do share your reply...');
                                                                                setTimeout(function() { $('.questions .enter').html('Tell us a little about your professsion(s) and press "Enter" to continue...'); }, 3000);
                                                                            } else {
                                                                                $('.questions form').off('submit');
                                                                                window.formDataHolder.description = $('.questions input').val();
                                                                                $('.questions p').removeClass('fadeInUp').addClass('fadeOut');
                                                                                $('.questions input').removeClass('fadeInUp').css('visibility', 'hidden');
                                                                                $('.questions .line').removeClass('fadeIn').css('visibility', 'hidden');
                                                                                $('.questions .enter').removeClass('fadeInUp').css('visibility', 'hidden');
                                                                                setTimeout(function() {
                                                                                    $('.questions p').css('visibility', 'hidden').removeClass('fadeOut').html("That’s it! We’re done for now, but the cool part is just about to begin, and when it does, you shall be the first to know. Thanks for stopping by!").addClass('fadeInUp').css('visibility', 'visible');
                                                                                    $('.questions input').css('display', 'none');
                                                                                    $('.questions .line').addClass('fadeIn').css('visibility', 'visible');
                                                                                    console.log(window.formDataHolder);
                                                                                    // Save on the db -- artist
                                                                                    $.ajax({
                                                                						data: 'name=' + window.formDataHolder.name +
                                                                                            '&email=' + window.formDataHolder.email +
                                                                                            '&number=' + window.formDataHolder.number +
                                                                                            '&city=' + window.formDataHolder.city +
                                                                                            '&expertise=' + window.formDataHolder.expertise +
                                                                                            '&profession=' + window.formDataHolder.profession +
                                                                                            '&description=' + window.formDataHolder.description,
                                                                						url: 'script/save.php',
                                                                						type: 'POST',
                                                                						beforeSend: function() {},
                                                                						success: function(data) {
                                                                							console.log(data);
                                                                						}
                                                                					});
                                                                                    $.post('script/mail.php', 'name=' + window.formDataHolder.name + '&email=' + window.formDataHolder.email, function(result) {  });
                                                                                }, fadeInterval);
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }, fadeInterval);
                                                        } else if (this.value == 'Vendor' || this.value == 'Fabricator' || this.value == 'Supplier') {
                                                            // Select 'vendor/fabricator/supplier'
                                                            $('.questions .expertise').off('change');
                                                            $('.questions .expertise').css('display', 'none');
                                                            if (!window.formDataHolder.expertise) window.formDataHolder.expertise = $('.questions .expertise').val();
                                                            $('.questions p').removeClass('fadeInUp').addClass('fadeOut');
                                                            $('.questions input').removeClass('fadeInUp').css('visibility', 'hidden').css('display', 'none');
                                                            $('.questions .line').removeClass('fadeIn').css('visibility', 'hidden');
                                                            $('.questions .enter').removeClass('fadeInUp').css('visibility', 'hidden').html('Select your mode to continue...');
                                                            setTimeout(function() {
                                                                $('.questions p').css('visibility', 'hidden').removeClass('fadeOut').html("Super, we need more folks like you! What do you provide?").addClass('fadeInUp').css('visibility', 'visible');
                                                                $('.questions .expertise-mode').css('display', 'block').addClass('fadeInUp').css('visibility', 'visible');
                                                                $('.questions .line').addClass('fadeIn').css('visibility', 'visible');
                                                                $('.questions .enter').addClass('fadeInUp').css('visibility', 'visible');
                                                                // Select vendor - product
                                                                $('.questions .expertise-mode').on('change', function() {
                                                                    if (this.value == '') {
                                                                        // If select empty
                                                                        $('.questions .enter').html('Hmm.. some questions cannot be answered, but this isn’t one of those. Please do share your reply...');
                                                                        setTimeout(function() { $('.questions .enter').html('Select a field to continue...'); }, 3000);
                                                                    } else {
                                                                        $('.questions .expertise-mode').off('change');
                                                                        $('.questions .expertise-mode').css('display', 'none');
                                                                        window.formDataHolder.mode = $('.questions .expertise-mode').val();
                                                                        $('.questions p').removeClass('fadeInUp').addClass('fadeOut');
                                                                        $('.questions .line').removeClass('fadeIn').css('visibility', 'hidden');
                                                                        $('.questions .enter').removeClass('fadeInUp').css('visibility', 'hidden');
                                                                        setTimeout(function() {
                                                                            $('.questions p').css('visibility', 'hidden').removeClass('fadeOut').html("Tell us more about your service/product?").addClass('fadeInUp').css('visibility', 'visible');
                                                                            $('.questions input').val('').attr('placeholder', 'Few words about your product/service').css('display', 'block').addClass('fadeInUp').css('visibility', 'visible').focus();
                                                                            $('.questions .line').addClass('fadeIn').css('visibility', 'visible');
                                                                            $('.questions .enter').html('Tell us a little more and press "Enter" to continue...').addClass('fadeInUp').css('visibility', 'visible');
                                                                        }, fadeInterval);
                                                                        // Vendor - product - description (enter)
                                                                        $('.questions form').on('submit', function(e) {
                                                                            e.preventDefault();
                                                                            if (!$('.questions input').val()) {
                                                                                // Description left empty
                                                                                $('.questions .enter').html('Hmm.. some questions cannot be answered, but this isn’t one of those. Please do share your reply...');
                                                                                setTimeout(function() { $('.questions .enter').html('Tell us a little about your professsion(s) and press "Enter" to continue...'); }, 3000);
                                                                            } else {
                                                                                $('.questions form').off('submit');
                                                                                window.formDataHolder.description = $('.questions input').val();
                                                                                $('.questions p').removeClass('fadeInUp').addClass('fadeOut');
                                                                                $('.questions input').removeClass('fadeInUp').css('visibility', 'hidden');
                                                                                $('.questions .line').removeClass('fadeIn').css('visibility', 'hidden');
                                                                                $('.questions .enter').removeClass('fadeInUp').css('visibility', 'hidden');
                                                                                setTimeout(function() {
                                                                                    $('.questions p').css('visibility', 'hidden').removeClass('fadeOut').html("That’s it! We’re done for now, but the cool part is just about to begin, and when it does, you shall be the first to know. Thanks for stopping by!").addClass('fadeInUp').css('visibility', 'visible');
                                                                                    $('.questions input').css('display', 'none');
                                                                                    $('.questions .line').addClass('fadeIn').css('visibility', 'visible');
                                                                                    console.log(window.formDataHolder);
                                                                                    // Save on the db -- vendor/fabricator/supplier
                                                                                    $.ajax({
                                                                						data: 'name=' + window.formDataHolder.name +
                                                                                            '&email=' + window.formDataHolder.email +
                                                                                            '&number=' + window.formDataHolder.number +
                                                                                            '&city=' + window.formDataHolder.city +
                                                                                            '&expertise=' + window.formDataHolder.expertise +
                                                                                            '&mode=' + window.formDataHolder.mode +
                                                                                            '&description=' + window.formDataHolder.description,
                                                                						url: 'script/save.php',
                                                                						type: 'POST',
                                                                						beforeSend: function() {},
                                                                						success: function(data) {
                                                                							console.log(data);
                                                                						}
                                                                					});
                                                                                    $.post('script/mail.php', 'name=' + window.formDataHolder.name + '&email=' + window.formDataHolder.email, function(result) {  });
                                                                                }, fadeInterval);
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }, fadeInterval);
                                                        } else if (this.value == 'Browser') {
                                                            // Select 'browser'
                                                            $('.questions .expertise').off('change');
                                                            $('.questions .expertise').css('display', 'none');
                                                            if (!window.formDataHolder.expertise) window.formDataHolder.expertise = $('.questions .expertise').val();
                                                            $('.questions p').removeClass('fadeInUp').addClass('fadeOut');
                                                            $('.questions input').removeClass('fadeInUp').css('visibility', 'hidden');
                                                            $('.questions .line').removeClass('fadeIn').css('visibility', 'hidden');
                                                            $('.questions .enter').removeClass('fadeInUp').css('visibility', 'hidden').html('Mention a few things and press "Enter" to continue...');
                                                            setTimeout(function() {
                                                                $('.questions p').css('visibility', 'hidden').removeClass('fadeOut').html(" We need more folks like you! What do you generally look for online?").addClass('fadeInUp').css('visibility', 'visible');
                                                                $('.questions input').val('').attr('placeholder', 'Things that interest you').css('display', 'block').addClass('fadeInUp').css('visibility', 'visible').focus();
                                                                $('.questions .line').addClass('fadeIn').css('visibility', 'visible');
                                                                $('.questions .enter').addClass('fadeInUp').css('visibility', 'visible');
                                                                // Browser - look for (enter)
                                                                $('.questions form').on('submit', function(e) {
                                                                    e.preventDefault();
                                                                    if (!$('.questions input').val()) {
                                                                        // Description left empty
                                                                        $('.questions .enter').html('Hmm.. some questions cannot be answered, but this isn’t one of those. Please do share your reply...');
                                                                        setTimeout(function() { $('.questions .enter').html('Mention a few things and press "Enter" to continue...'); }, 3000);
                                                                    } else {
                                                                        $('.questions form').off('submit');
                                                                        window.formDataHolder.description = $('.questions input').val();
                                                                        $('.questions p').removeClass('fadeInUp').addClass('fadeOut');
                                                                        $('.questions input').removeClass('fadeInUp').css('visibility', 'hidden');
                                                                        $('.questions .line').removeClass('fadeIn').css('visibility', 'hidden');
                                                                        $('.questions .enter').removeClass('fadeInUp').css('visibility', 'hidden');
                                                                        setTimeout(function() {
                                                                            $('.questions p').css('visibility', 'hidden').removeClass('fadeOut').html("That’s it! We’re done for now, but the cool part is just about to begin, and when it does, you shall be the first to know. Thanks for stopping by!").addClass('fadeInUp').css('visibility', 'visible');
                                                                            $('.questions input').css('display', 'none');
                                                                            $('.questions .line').addClass('fadeIn').css('visibility', 'visible');
                                                                            console.log(window.formDataHolder);
                                                                            // Save on the db -- browser
                                                                            $.ajax({
                                                                                data: 'name=' + window.formDataHolder.name +
                                                                                    '&email=' + window.formDataHolder.email +
                                                                                    '&number=' + window.formDataHolder.number +
                                                                                    '&city=' + window.formDataHolder.city +
                                                                                    '&expertise=' + window.formDataHolder.expertise +
                                                                                    '&description=' + window.formDataHolder.description,
                                                                                url: 'script/save.php',
                                                                                type: 'POST',
                                                                                beforeSend: function() {},
                                                                                success: function(data) {
                                                                                    console.log(data);
                                                                                }
                                                                            });
                                                                            $.post('script/mail.php', 'name=' + window.formDataHolder.name + '&email=' + window.formDataHolder.email, function(result) {  });
                                                                        }, fadeInterval);
                                                                    }
                                                                });
                                                            }, fadeInterval);
                                                        }
                                                    });
                                                }
                                            });
                                        /*} else {
                                            // If phone invalid
                                            $('.questions .enter').html('Try entering a valid 10 digit number...');
                                            setTimeout(function() { $('.questions .enter').html('Type in your number and press "Enter" to continue...'); }, 3000);
                                        }*/
                                    });
                    			} else {
                                    // If email invalid
                                    $('.questions .enter').html('Try entering a valid email...');
                                    setTimeout(function() { $('.questions .enter').html('Type in your email and press "Enter" to continue...'); }, 3000);
                                }
                            });
                        }
            		});
                }, fadeInterval);
            });
        }, 2 * fadeInterval);

        // Music player
        $('.player').addClass('bounceIn').css('visibility', 'visible');
        $('.player').click(function() {
    		$(this).toggleClass('active');
            var song = $('.player audio')[0];
            if(song.paused) song.play();
            else song.pause();
    	});

    });
});

// Animate background colour plugin
(function (d) {
    d.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "color", "outlineColor"], function (f, e) {
        d.fx.step[e] = function (g) {
            if (!g.colorInit) {
                g.start = c(g.elem, e);
                g.end = b(g.end);
                g.colorInit = true
            }
            g.elem.style[e] = "rgb(" + [Math.max(Math.min(parseInt((g.pos * (g.end[0] - g.start[0])) + g.start[0]), 255), 0), Math.max(Math.min(parseInt((g.pos * (g.end[1] - g.start[1])) + g.start[1]), 255), 0), Math.max(Math.min(parseInt((g.pos * (g.end[2] - g.start[2])) + g.start[2]), 255), 0)].join(",") + ")"
        }
    });

    function b(f) {
        var e;
        if (f && f.constructor == Array && f.length == 3) {
            return f
        }
        if (e = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)) {
            return [parseInt(e[1]), parseInt(e[2]), parseInt(e[3])]
        }
        if (e = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)) {
            return [parseFloat(e[1]) * 2.55, parseFloat(e[2]) * 2.55, parseFloat(e[3]) * 2.55]
        }
        if (e = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)) {
            return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
        }
        if (e = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)) {
            return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
        }
        if (e = /rgba\(0, 0, 0, 0\)/.exec(f)) {
            return a.transparent
        }
        return a[d.trim(f).toLowerCase()]
    }
    function c(g, e) {
        var f;
        do {
            f = d.css(g, e);
            if (f != "" && f != "transparent" || d.nodeName(g, "body")) {
                break
            }
            e = "backgroundColor"
        } while (g = g.parentNode);
        return b(f)
    }
    var a = {
        first: [236, 217, 193],
        second: [254, 220, 153],
        third: [182, 217, 177],
        fourth: [173, 219, 225]
    }
})(jQuery);
