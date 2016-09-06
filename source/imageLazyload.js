/**
 * auther sunqw
 * date   2015/4/24
 * 杀死 javascript
 */
;
(function (w, $) {
    /**
     * 图片懒加载公共模块
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
         * 是否使用webp格式图片，降低资源请求体积，默认不支持
         */
        useWebp: "disabled",
        /**
         * 图片质量
         */
        QUALITY: 100,
        /**
         * 图片懒加载的存储属性
         */
        IMG_SOURCE: "srcset",
        /**
         * 图片懒加载入口
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
         * 测试当前运行环境是否支持webp格式
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
         * 获取cookie中的useWebp的值
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
         * 设置cookie的useWebp值
         */
        setCookie: function () {
            document.cookie = "useWebp=" + this.useWebp;
        },
        /**
         * 获取懒加载图片节点
         */
        fixedNodes: function () {
            this.imgNodes = $(this.opts.node);
        },
        /**
         * 加载使用的图片
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
         * 设置图片的宽高尺寸
         * @param target
         * @returns {{width: *, height: *}}
         */
        setWidthAndHeight: function (target) {
            var width = target.parent().width(),
                height;
            /**
             * 商品方形图加伪属性img-type="product"
             * 图片高度与宽度相等
             */
            if (target.attr('img-type') == 'product') {
                height = target.parent().width();

                /**
                 * 更新图片处理的高度和宽度数据对象
                 * @type {{height: *, width: *}}
                 */
                this.imgSize.width = Math.ceil(width * 2.7);
                this.imgSize.height = Math.ceil(height * 2.7);
            }
            /**
             * 商品长图加伪属性img-type="long"
             * 图片
             */
            else if (target.attr('img-type') == 'long') {
                height = width * 282 / 220;
            }
            /**
             * 其他
             */
            else {
                height = target.parent().height();

                /**
                 * 更新图片处理的高度和宽度数据对象
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
         * 检测 element 是否在可视区域，包括横向和纵向
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
         * 对图片地址做预处理
         */
        disposeImgUrl: function (img) {
            var imgUrl = img.attr("data-src"),
                network = this.checkNetwork();

            if (!imgUrl) {
                return null;
            }

            imgUrl = this.getAbsultUrl(img, imgUrl);
            /**
             * 判断是否在编辑器页面
             */
            if (window.location.href.indexOf('content') <= -1) {
                if (this.useWebp == "enabled") {
                    imgUrl = imgUrl + ".webp";
                }
                else {
                    /**
                     * 通过验证网络情况，调整降质处理的值
                     * 目前设置是：wifi：30，非wifi：30
                     * 最合理的是根据当前用户的网络好坏情况处理
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
         * 针对不同来源地址的图片做区分处理
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
         * 设置图片需要加载的质量
         */
        setQuality: function (value) {
            this.QUALITY = value || 80;
        },
        /**
         * 检测网络类型
         */
        checkNetwork: function () {
            return "wifi";
        },
        /**
         * 添加时间
         */
        addEvent: function () {
            var self = this;
            this.$win.bind("scroll resize", function () {
                self.fixedNodes();
                self.loadImg();
            });
        },
        /**
         * 新加载节点触发图片懒加载
         */
        reload: function () {
            this.fixedNodes();
            this.loadImg();
        }
    };

    /**
     * 暴露全局对象
     */
    if (!w.imageLazyload) {
        w.imageLazyload = imageLazyload;
    }

    /**
     * 入口初始化
     */
    $(function () {
        imageLazyload.init({
            node: '[lazy-img="jd-app"]'
        });
    });

})(this, Zepto);