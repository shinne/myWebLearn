/**
 * auther sunqw
 * date   2015/4/24
 * ɱ�� javascript
 */
;
(function (w, $) {
    /**
     * ͼƬ�����ع���ģ��
     */
    var imageLazyload = {
        url: "",
        imgNodes: [],
        imgUrls: ["//img10.360buyimg.com/", "//img11.360buyimg.com/", "//img12.360buyimg.com/", "//img13.360buyimg.com/", "//img14.360buyimg.com/", "//img20.360buyimg.com/", "//img30.360buyimg.com/"],
        $win: null,
        $body: null,
        imgSize: {
            width: 175,
            height: 175
        },
        opts: {
            node: null
        },
        /**
         * �Ƿ�ʹ��webp��ʽͼƬ��������Դ���������Ĭ�ϲ�֧��
         */
        useWebp: "disabled",
        /**
         * ͼƬ����
         */
        QUALITY: 100,
        /**
         * ͼƬ�����صĴ洢����
         */
        IMG_SOURCE: "srcset",
        /**
         * ͼƬ���������
         * @param opts
         */
        init: function (opts) {
            var self = this;

            this.opts = $.extend(this.opts, opts);
            this.$win = $(window);
            this.$body = $(document.body);
            this.testWebp(function () {
                self.fixedNodes();
                self.loadImg();
                self.addEvent();
            });
        },
        /**
         * ���Ե�ǰ���л����Ƿ�֧��webp��ʽ
         * @param callback
         * @returns {boolean}
         */
        testWebp: function (callback) {
            if (this.getCookie()) {
                callback();
                return false;
            }

            var self = this;
            var image = new Image();
            image.onerror = function () {
                self.useWebp = "disabled";
                self.setCookie();
                callback();
            };
            image.onload = function () {
                self.useWebp = "enabled";
                self.setCookie();
                callback();
            };
            image.src = "data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAUAgCdASoBAAEAL/3+/3+CAB/AAAFzrNsAAP5QAAAAAA==";
        },
        /**
         * ��ȡcookie�е�useWebp��ֵ
         * @returns {boolean}
         */
        getCookie: function () {
            var arrCookie = document.cookie.split(";");

            for(var i = 0; i < arrCookie.length; i++) {
                var arr = arrCookie[i].split("=");

                if (arr[0].trim() == "useWebp") {
                    this.useWebp = arr[1];
                    return true;
                }
            }
            return false;
        },
        /**
         * ����cookie��useWebpֵ
         */
        setCookie: function () {
            document.cookie = "useWebp=" + this.useWebp;
        },
        /**
         * ��ȡ������ͼƬ�ڵ�
         */
        fixedNodes: function () {
            this.imgNodes = $(this.opts.node);
        },
        /**
         * ����ʹ�õ�ͼƬ
         */
        loadImg: function () {
            var self = this;
            this.imgNodes.each(function () {
                var target = $(this);
                if (target.attr("data-img-hide") == "true") {
                    return;
                }
                target.css(self.setWidthAndHeight(target));
                if (!target.attr("load")) {
                    if (self.inviewport(target)) {
                        if (self.disposeImgUrl(target)) {
                            target.attr("src", self.disposeImgUrl(target));
                        }
                        target.attr("load", true);
                        target.removeAttr('lazy-img');
                    }
                }
            });
        },
        /**
         * ����ͼƬ�Ŀ�߳ߴ�
         * @param target
         * @returns {{width: *, height: *}}
         */
        setWidthAndHeight: function (target) {
            var width = target.parent().width(),
                height;
            /**
             * ��Ʒ����ͼ��α����img-type="product"
             * ͼƬ�߶��������
             */
            if (target.attr('img-type') == 'product') {
                height = target.parent().width();

                /**
                 * ����ͼƬ����ĸ߶ȺͿ�����ݶ���
                 * @type {{height: *, width: *}}
                 */
                this.imgSize.width = Math.ceil(width * 2.7);
                this.imgSize.height = Math.ceil(height * 2.7);
            }
            /**
             * ��Ʒ��ͼ��α����img-type="long"
             * ͼƬ
             */
            else if (target.attr('img-type') == 'long') {
                height = width * 282 / 220;
            }
            /**
             * ����
             */
            else {
                height = target.parent().height();

                /**
                 * ����ͼƬ����ĸ߶ȺͿ�����ݶ���
                 * @type {{height: *, width: *}}
                 */
                this.imgSize.width = Math.ceil(width * 2.7);
                this.imgSize.height = Math.ceil(height * 2.7);
            }

            var _sizeObj = {
                width: width,
                height: height
            };

            return _sizeObj;
        },
        /**
         * ��� element �Ƿ��ڿ������򣬰������������
         * @param element
         * @returns {boolean}
         */
        inviewport: function (element) {
            var ele = element;
            if (ele.offset().top - this.$body.scrollTop() < this.$win.height() && ele.offset().left - this.$body.scrollLeft() < this.$win.width() + 100) {
                return true;
            } else {
                return false;
            }
        },
        /**
         * ��ͼƬ��ַ��Ԥ����
         */
        disposeImgUrl: function (img) {
            var imgUrl = img.attr("data-src"),
                network = this.checkNetwork();

            if (!imgUrl) {
                return null;
            }

            imgUrl = this.getAbsultUrl(img, imgUrl);
            /**
             * �ж��Ƿ��ڱ༭��ҳ��
             */
            if (window.location.href.indexOf('content') <= -1) {
                if (this.useWebp == "enabled") {
                    imgUrl = imgUrl + ".webp";
                }
                else {
                    /**
                     * ͨ����֤����������������ʴ����ֵ
                     * Ŀǰ�����ǣ�wifi��30����wifi��30
                     * �������Ǹ��ݵ�ǰ�û�������û��������
                     */
                    if (network == "wifi") {
                        this.setQuality(30);
                    } else {
                        this.setQuality(30);
                    }
                    if (img.attr('img-type') == 'long') {
                        imgUrl = imgUrl + "!q90.jpg";
                    }
                    else {
                        imgUrl = imgUrl + "!q" + this.QUALITY + ".jpg";
                    }
                }
            }

            return imgUrl;
        },
        /**
         * ��Բ�ͬ��Դ��ַ��ͼƬ�����ִ���
         * @param target
         * @param imgUrl
         * @returns {*}
         */
        getAbsultUrl: function (target, imgUrl) {
            var size = "s" + this.imgSize.width + "x" + this.imgSize.height + "_";
            if (imgUrl.indexOf('360buyimg.com') != -1) {
                return imgUrl;
            }
            else if (imgUrl.indexOf('jshopm') != -1) {
                imgUrl = imgUrl.replace('jfs', size + "jfs");
                return imgUrl;
            }
            else {
                var random = this.random(0, 6);

                if (target.attr('img-type') == 'long') {
                    return this.imgUrls[random] + "n8/" + imgUrl;
                }
                else {
                    return this.imgUrls[random] + "n1/" + size + imgUrl;
                }
            }
        },
        random: function (n, m) {
            var c = m - n + 1;
            return Math.floor(Math.random() * c + n);
        },
        /**
         * ����ͼƬ��Ҫ���ص�����
         */
        setQuality: function (value) {
            this.QUALITY = value || 80;
        },
        /**
         * �����������
         */
        checkNetwork: function () {
            return "wifi";
        },
        /**
         * ���ʱ��
         */
        addEvent: function () {
            var self = this;
            this.$win.bind("scroll resize", function () {
                self.fixedNodes();
                self.loadImg();
            });
        },
        /**
         * �¼��ؽڵ㴥��ͼƬ������
         */
        reload: function () {
            this.fixedNodes();
            this.loadImg();
        }
    };

    /**
     * ��¶ȫ�ֶ���
     */
    if (!w.imageLazyload) {
        w.imageLazyload = imageLazyload;
    }

    /**
     * ��ڳ�ʼ��
     */
    $(function () {
        imageLazyload.init({
            node: '[lazy-img="jd-app"]'
        });
    });

})(this, Zepto);