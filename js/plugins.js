(function() {
    var method;
    var noop = function() {};

    //Avoid console errors in browsers that lack a console.
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info',
        'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time',
        'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace',
        'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }

    //Kaleidoscope script
    var DragDrop, Kaleidoscope, c, dragger, gui, i, image, len, onChange, onMouseMoved, options, ref, tr, tx, ty, update, bind = function (fn, me) {
            return function () {
                return fn.apply(me, arguments);
            };
        };
    Kaleidoscope = function () {
        Kaleidoscope.prototype.HALF_PI = Math.PI / 2;
        Kaleidoscope.prototype.TWO_PI = Math.PI * 2;
        function Kaleidoscope(options1) {
            var key, ref, ref1, val, resp;
            if (window.innerHeight < window.innerWidth) resp = window.innerHeight / 2 - 60;
            else resp = window.innerWidth / 2;
            this.options = options1 != null ? options1 : {};
            this.defaults = {
                offsetRotation: 0,
                offsetScale: 1,
                offsetX: 0,
                offsetY: 0,
                radius: resp,
                slices: 16,
                zoom: 1
            };
            ref = this.defaults;
            for (key in ref) {
                val = ref[key];
                this[key] = val;
            }
            ref1 = this.options;
            for (key in ref1) {
                val = ref1[key];
                this[key] = val;
            }
            if (this.domElement == null) {
                this.domElement = document.createElement('canvas');
            }
            if (this.context == null) {
                this.context = this.domElement.getContext('2d');
            }
            if (this.image == null) {
                this.image = document.createElement('img');
            }
        }
        Kaleidoscope.prototype.draw = function () {
            var cx, i, index, ref, results, scale, step;
            this.domElement.width = this.domElement.height = this.radius * 2;
            this.context.fillStyle = this.context.createPattern(this.image, "repeat");
            scale = this.zoom * (this.radius / Math.min(this.image.width, this.image.height));
            step = this.TWO_PI / this.slices;
            cx = this.image.width / 2;
            results = [];
            for (index = i = 0, ref = this.slices; 0 <= ref ? i <= ref : i >= ref; index = 0 <= ref ? ++i : --i) {
                this.context.save();
                this.context.translate(this.radius, this.radius);
                this.context.rotate(index * step);
                this.context.beginPath();
                this.context.moveTo(-0.5, -0.5);
                this.context.arc(0, 0, this.radius, step * -0.5, step * 0.5);
                this.context.lineTo(0.5, 0.5);
                this.context.closePath();
                this.context.rotate(this.HALF_PI);
                this.context.scale(scale, scale);
                this.context.scale([
                    -1,
                    1
                ][index % 2], 1);
                this.context.translate(this.offsetX - cx, this.offsetY);
                this.context.rotate(this.offsetRotation);
                this.context.scale(this.offsetScale, this.offsetScale);
                this.context.fill();

                results.push(this.context.restore());
            }
            return results;
        };
        Kaleidoscope.prototype.resize = function () {
            window.overlay.height = window.kaleidoscope.domElement.height;
            window.overlay.width = window.kaleidoscope.domElement.width;
            window.overlay.style.marginLeft = -window.kaleidoscope.radius + 'px';
            window.overlay.style.marginTop = -window.kaleidoscope.radius + 'px';
            window.kaleidoscope.domElement.style.marginLeft = -window.kaleidoscope.radius + 'px';
            window.kaleidoscope.domElement.style.marginTop = -window.kaleidoscope.radius + 'px';
        };
        // FB Share script
        Kaleidoscope.prototype.shareFB = function () {
            var sharerUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href);
            var winProps = 'width=626,height=436,left=' + window.screenX + (window.outerWidth - 626) / 2 + ',top=' + window.screenY + (window.outerHeight - 436) / 2 + 'resizable=yes,toolbar=no,scrollbars=yes,menubar=no,description=Kliedo%20-%20Create%20Collaborate.%20Grow.%20Our%20mission%20is%20simple:%20To%20be%20a%20Hadron%20Collider%20of%20creativity,%20bringing%20together%20game-changing%20ideas%20and%20powerful%20talent,%20and%20propelling%20them%20to%20grow%20into%20something%20extraordinary,%20something%20beautiful,%20something%20good.%20Much%20like%20a%20kaleidoscope%20of%20creativity%20–Kliedo%20is%20where%20ideas%20dance%20together%20in%20delightful%20harmony%20to%20the%20beats%20of%20different%20cultures,%20needs%20and%20talents.';
            window.open(sharerUrl, 'facebook-share-dialog', winProps);
        }
        // Tweet script
        Kaleidoscope.prototype.shareTW = function () {
            window.open( "http://twitter.com/intent/tweet?url=" + encodeURIComponent(location.href) + "&text=" + "Create. Collaborate. Grow. Become a kliedo friend and join a plethora of powerful talent." + "&via=kliedo_com&", "twitterwindow", "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0" );
        }
        return Kaleidoscope;
    }();
    /*DragDrop = function () {
        function DragDrop(callback, context, filter) {
            var disable;
            this.callback = callback;
            this.context = context != null ? context : document;
            this.filter = filter != null ? filter : /^image/i;
            this.onDrop = bind(this.onDrop, this);
            disable = function (event) {
                event.stopPropagation();
                return event.preventDefault();
            };
            this.context.addEventListener('dragleave', disable);
            this.context.addEventListener('dragenter', disable);
            this.context.addEventListener('dragover', disable);
            this.context.addEventListener('drop', this.onDrop, false);
        }
        DragDrop.prototype.onDrop = function (event) {
            var file, reader;
            event.stopPropagation();
            event.preventDefault();
            file = event.dataTransfer.files[0];
            if (this.filter.test(file.type)) {
                reader = new FileReader();
                reader.onload = function (_this) {
                    return function (event) {
                        return typeof _this.callback === 'function' ? _this.callback(event.target.result) : void 0;
                    };
                }(this);
                return reader.readAsDataURL(file);
            }
        };
        return DragDrop;
    }();*/
    image = new Image();
    window.overlay = new Image()
    image.onload = function (_this) {
        return function () {
            return window.kaleidoscope.draw();
        };
    }(this);
    window.overlay.onload = function () {
        window.overlay.height = window.kaleidoscope.domElement.height;
        window.overlay.width = window.kaleidoscope.domElement.width;
        window.overlay.style.position = 'absolute';
        window.overlay.style.marginLeft = -window.kaleidoscope.radius + 'px';
        window.overlay.style.marginTop = -window.kaleidoscope.radius + 'px';
        window.overlay.style.top = '50%';
        window.overlay.style.left = window.kaleidoscope.radius + 60 + 'px';//'50%';
        document.body.appendChild(window.overlay);
    }
    image.src = 'img/kal-pattern-00.png';
    window.overlay.src = 'img/overlay.png';
    window.kaleidoscope = new Kaleidoscope({
        image: image,
        slices: 6
    });
    window.kaleidoscope.domElement.style.position = 'absolute';
    window.kaleidoscope.domElement.style.marginLeft = -window.kaleidoscope.radius + 'px';
    window.kaleidoscope.domElement.style.marginTop = -window.kaleidoscope.radius + 'px';
    window.kaleidoscope.domElement.style.left = window.kaleidoscope.radius + 60 + 'px';//'50%';
    window.kaleidoscope.domElement.style.top = '50%';
    document.body.appendChild(window.kaleidoscope.domElement);
    /*dragger = new DragDrop(function (data) {
        return window.kaleidoscope.image.src = data;
    });*/
    tx = window.kaleidoscope.offsetX;
    ty = window.kaleidoscope.offsetY;
    tr = window.kaleidoscope.offsetRotation;
    onMouseMoved = function (_this) {
        return function (event) {
            var cx, cy, dx, dy, hx, hy;
            cx = window.innerWidth / 2;
            cy = window.innerHeight / 2;
            dx = event.pageX / window.innerWidth;
            dy = event.pageY / window.innerHeight;
            hx = dx - 0.5;
            hy = dy - 0.5;
            tx = hx * window.kaleidoscope.radius * -2;
            ty = hy * window.kaleidoscope.radius * 2;
            return tr = Math.atan2(hy, hx);
        };
    }(this);
    window.addEventListener('mousemove', onMouseMoved, false);
    options = {
        interactive: true,
        ease: 0.01
    };
    (update = function (_this) {
        return function () {
            var delta, theta;
            if (options.interactive) {
                delta = tr - window.kaleidoscope.offsetRotation;
                theta = Math.atan2(Math.sin(delta), Math.cos(delta));
                window.kaleidoscope.offsetX += (tx - window.kaleidoscope.offsetX) * options.ease;
                window.kaleidoscope.offsetY += (ty - window.kaleidoscope.offsetY) * options.ease;
                window.kaleidoscope.offsetRotation += (theta - window.kaleidoscope.offsetRotation) * options.ease;
                window.kaleidoscope.draw();
            }
            return setTimeout(update, 1000 / 120);
        };
    }(this))();

    /*gui = new dat.GUI();
    gui.add(kaleidoscope, 'zoom').min(0.25).max(2);
    gui.add(kaleidoscope, 'slices').min(6).max(32).step(2);
    gui.add(kaleidoscope, 'radius').min(200).max(500);
    gui.add(kaleidoscope, 'offsetX').min(-kaleidoscope.radius).max(kaleidoscope.radius).listen();
    gui.add(kaleidoscope, 'offsetY').min(-kaleidoscope.radius).max(kaleidoscope.radius).listen();
    gui.add(kaleidoscope, 'offsetRotation').min(-Math.PI).max(Math.PI).listen();
    gui.add(kaleidoscope, 'offsetScale').min(0.5).max(4);
    gui.add(options, 'interactive').listen();
    gui.close();
    onChange = function (_this) {
        return function () {
            kaleidoscope.domElement.style.marginLeft = -kaleidoscope.radius + 'px';
            kaleidoscope.domElement.style.marginTop = -kaleidoscope.radius + 'px';
            options.interactive = false;
            return kaleidoscope.draw();
        };
    }(this);
    ref = gui.__controllers;
    for (i = 0, len = ref.length; i < len; i++) {
        c = ref[i];
        if (c.property !== 'interactive') {
            c.onChange(onChange);
        }
    }*/

}());
