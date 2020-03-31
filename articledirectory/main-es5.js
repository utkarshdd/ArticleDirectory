function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: '/articles',
      pathMatch: 'full'
    }, {
      path: 'articles',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | articles-articles-module */
        "articles-articles-module").then(__webpack_require__.bind(null,
        /*! ./articles/articles.module */
        "./src/app/articles/articles.module.ts")).then(function (m) {
          return m.ArticlesModule;
        });
      }
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | auth-auth-module */
        "auth-auth-module").then(__webpack_require__.bind(null,
        /*! ./auth/auth.module */
        "./src/app/auth/auth.module.ts")).then(function (m) {
          return m.AuthModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.autoLogin();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [[1, "container"], [1, "row"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/articles/article.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/articles/article.service.ts ***!
    \*********************************************/

  /*! exports provided: ArticleService */

  /***/
  function srcAppArticlesArticleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleService", function () {
      return ArticleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ArticleService =
    /*#__PURE__*/
    function () {
      function ArticleService() {
        _classCallCheck(this, ArticleService);

        this.searchkeyword = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.categorySelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editArticle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resetList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /*public articles:Article[]=[
          new Article('Beet Hummus Recipe','This recipe for beet hummus is a fun and delicious way to enhance and improve this amazing mediterranean spread. Infused with colorful beets, this hummus tastes as good as it looks.The slight sweetness of the beets mixes very well with the nutty, spicy, and citrusy flavors in the hummus. Follow the recipe below and enjoy!',
          'food',
          'https://img.ehowcdn.com/630x/clsd/1/22/6368003dbccc441794b757b239009d93.jpg','KRISTAN RAINES',
          'When I was a little girl I discovered my love for baking, and it has remained a passion of mine ever since. Cooking lets my creativity run wild; a few simple ingredients can be turned into a meal that can express love, spark a memory, or set the stage for a lovely gathering. So I created The Broken Bread, a place where I could share my love for seasonal baking and cooking.',
          '31-1-2020','If the hummus appears too thick, simply blend in a few teaspoons of chickpea liquid until desired texture is achieved.',
          [new Thing('food processor'),
        new Thing('baking sheet'),
        new Thing('tin foil'),
        new Thing('2 small beets (about 7 oz), tops removed and scrubbed'),
        new Thing('1 can chickpeas, drained and liquid reserved'),
        new Thing('4 tbs tahini'),
        new Thing('1 garlic clove'),
        new Thing('2 tsp olive oil, plus extra for drizzling'),
        new Thing('3/4 tsp cumin'),
        new Thing('chickpeas, optional garnish'),
        new Thing('assorted veggies and pita slices, for serving'),
        ],
        [new Step('Heat oven to 400°F, with the rack arranged in the center. Drizzle each beet with a little olive oil, and place each one on a square piece of tin foil. Wrap the beets tightly in the tin foil, then place on a baking sheet. Roast for 30-40 minutes, or until the beets are fork tender.',
        'https://img.ehowcdn.com/630x/clsd/1/22/9cb2ffa50ce54040a2eb2afe94dd17ff.jpg'),
        new Step('Once beets have cooled, rub their skin off with a paper towel. Roughly chop the beets, then add them to a food processor along with the chickpeas, tahini, garlic, 2 tsp olive oil, juice from 1/2 a lemon, cumin and salt.',
        'https://img.ehowcdn.com/630x/clsd/1/22/27e29f6435274132a22321c612024847.jpg'),
        new Step('Process everything together for 2-3 minutes, or until smooth. Taste and season with additional salt and lemon juice as needed.',
        'https://img.ehowcdn.com/630x/clsd/1/22/15eb856d5b064eca8b203050e79128e0.jpg'),
        new Step('Transfer the beet hummus to a bowl and garnish with a few chickpeas and a light sprinkle of sumac. Serve with pita or sliced veggies and enjoy right away.',
        'https://img.ehowcdn.com/630x/clsd/1/22/7f331a8e2a4e41d3a93a230790b3e2f4.jpg'),
        ],
        ),
        new Article('DIY Pineapple Nail Art','Summer is the perfect time to indulge in tropical nail art — its the perfect theme for vacations, holidays and special occasions! Novelty designs are great fun to paint and never fail to draw attention. This pineapple design is on trend and easier than you may imagine to paint. Ill show you how to create this look in a few easy steps!',
        'fashion',
        'https://img.ehowcdn.com/630x/ppds/c538b8de-169b-4be1-a971-6fc57c16dde9.jpg','CAROLINE BURKE',
        'Caroline Burke is the founder of the DIY and craft blog burkatron. Burkes creative passion started at school when she began to experiment with painting and textiles. After graduating with a Bachelor of Arts in fine arts from Central Saint Martins she began creating contemporary DIY projects influenced by her love of modern interiors and minimal design.',
        '17-4-2017','Before you start coating your nails with polish, keep in mind that you only need three strokes to cover your nail.',
        [new Thing('White, yellow, brown and green nail polishes'),
        new Thing('Fine nail art or painters brush'),
        new Thing('Nail polish remover (for cleaning)'),
        ],
        [new Step('Paint a base coat. Ive opted to use white here, but pastels are a good choice too! Let dry.',
        'https://img.ehowcdn.com/630x/ppds/8a79fd68-5190-419e-b878-f8c0cbb80b28.jpg'),
        new Step('Take a yellow polish and paint small yellow ovals onto each nail. This will be the pineapple body.',
        'https://img.ehowcdn.com/630x/ppds/368c4176-b58c-4540-8573-72c9704cae53.jpg'),
        new Step('Dip a fine brush into brown nail polish and stroke lines in a crosshatch pattern over the pineapple body. Repeat on all nails, then clean the brush with nail polish remover.',
        'https://img.ehowcdn.com/630x/ppds/2c3ca32f-5b14-4355-929b-730d60631f21.jpg'),
        new Step('Dip a fine brush into green nail polish and brush on 3–4 light strokes to create the spiky pineapple leaves. Repeat on all nails to finish!',
        'https://img.ehowcdn.com/630x/ppds/f08cf679-3839-4b4d-8a52-322cdadabd24.jpg'),
        ],
        ),
              new Article('Remove Scratches From Silverware','Silverware can become scratched up over time, and removing those scratches can help your silverware last much longer without rusting or becoming tarnished. The good news is, you can easily remove scratches from silverware using two household ingredients and water!',
        'home-decor',
        'https://img.ehowcdn.com/630x/clsd/5/22/35d371dce3394835bd4300c3133ba2f1.jpg','JESSICA KIELMAN',
        'Jessica owns two blogs, Mom 4 Real and Pour Me a Cocktail. She has been sharing easy cleaning tips, recipes and ideas with her readers for over 7 years. She has been featured on the Rachel Ray Show, TODAY Parenting, MSN, Country Woman Magazine and more.',
        '30-5-2019','It’s important to remove excess food as quickly as possible after eating as the salt and acids will cause gradual damage.',
        [new Thing('1 cup of baking soda'),
        new Thing('2 tablespoons of Castile soap'),
        new Thing('a large bowl of water'),
        new Thing('two clean cloths'),
        ],
        [new Step('Make a paste by combining the baking soda and Castile soap.',
        'https://img.ehowcdn.com/630x/clsd/5/22/e4b27aa7a8f84b27837a3b0045cc3d33.jpg'),
        new Step('Dab a little of the cleaning paste onto a clean cloth and work it into the silverware. Wipe the paste on with the grain of the silverware, typically in an up and down motion.',
        'https://img.ehowcdn.com/630x/clsd/5/22/98f5f0a76c1f48a4bdf94a4dbfe36c9d.jpg'),
        new Step('Rinse each piece of silverware in cold water, making sure to remove all of the cleaning paste.',
        'https://img.ehowcdn.com/630x/clsd/5/22/fe80c3f5f6e1461e8ae62fe3e054432c.jpg'),
        new Step('Use a clean, soft cloth to polish each piece of silverware, going with the grain again. Your silverware will look like new and last much longer if you polish it at least once every few months.',
        'https://img.ehowcdn.com/630x/clsd/5/22/18ccdcb2395c45d7baf0ad5ea35d66a8.jpg'),
        ],
        ),
        new Article('Split Pea Soup Recipe','Split pea soup is a classic dish thats the epitome of cozy and hearty. And while its often available in a can, nothing beats making it from scratch. All you need to do is toss the ingredients in a pot and simmer until the peas are soft. Top it off with chopped or shredded ham, or skip the meat for a vegetarian version. Either way, we think youll love this warm and comforting bowl of homemade goodness.',
        'food',
        'https://img.ehowcdn.com/630x/clsd/1/17/202f2636164f44b9a4647238e3842905.jpg','KIRSTEN NUNEZ',
        'Kirsten Nunez is a lifestyle journalist and author focusing on food, health, and DIY projects. In May 2014, she published a craft book, "Studs & Pearls: 30 Creative Projects for Customized Fashion." Her work has appeared on websites such as Bustle, Brit + Co, DIY Lifestyle, and VegNews. She lives in Beacon, New York.',
        '22-1-2020','Split peas and lentils do not require soaking. They take a short amount of time to cook',
        [new Thing('2 tablespoons unsalted butter (or olive oil)'),
        new Thing('1 cup yellow onion, diced'),
        new Thing('2 large carrots, peeled and diced'),
        new Thing('3 celery stalks, diced'),
        new Thing('3 teaspoons jarred minced garlic (or 2 minced garlic cloves)'),
        new Thing('1 pound dried green split peas'),
        new Thing('1 large potato, peeled and cubed'),
        new Thing('Ham bone or 1/2 teaspoon smoked paprika'),
        new Thing('Salt and pepper'),
        ],
        [new Step('In a large pot over medium heat, warm the butter or olive oil. Add the diced onions, carrots and celery. Mix well and cook until the onions are clear and soft, about 5 to 7 minutes. Add the minced garlic and cook for another 30 seconds.',
        'https://img.ehowcdn.com/630x/clsd/1/17/98633a236b0f436abf6c661961e53807.jpg'),
        new Step('To the pot, add the split peas, spices and bay leaves.Mix until fully combined.',
        'https://img.ehowcdn.com/630x/clsd/1/17/98633a236b0f436abf6c661961e53807.jpg'),
        new Step('Add the broth and potatoes. If using ham bone, add it now. Mix well, bring to a boil then reduce the heat.',
        'https://img.ehowcdn.com/630x/clsd/1/17/230dbc8e25e948c0842c14069e77b07a.jpg'),
        new Step('Simmer uncovered for about 1 hour. As it cooks, occassionally check the soup. Skim off any foam then stir. As it nears one hour, the peas will soften and become creamy.',
        'https://img.ehowcdn.com/630x/clsd/1/17/e8fdaf1fcf654618a7389aa62e8ceecd.jpg'),
        new Step('When the soup reaches your desired consistency, mix in the ham, if using. Keep in mind that the soup will thicken considerably as it cools. Simmer for another 10 to 15 minutes then turn off the heat.',
        'https://img.ehowcdn.com/630x/clsd/1/17/cda22a663a0c48ddb0c7a337facc0e63.jpg'),
        ],
        ),
              new Article('Sweet Potato Nachos Recipe','Nachos are pretty much always delicious, but are just as often not so healthy. This recipe combines the great taste of this beloved snack without making you feel too guilty for indulging. Crispy, oven-baked sweet potato slices take the place of chips, and when mixed with cheese, beans, jalapeños and more, theyre just as good as any other basket of nachos youve ever had.',
        'food',
        'https://img.ehowcdn.com/630x/clsd/1/22/c9a7c977a5964ccba0c2b393f877a814.jpg','KRISTAN RAINES',
        'When I was a little girl I discovered my love for baking, and it has remained a passion of mine ever since. Cooking lets my creativity run wild; a few simple ingredients can be turned into a meal that can express love, spark a memory, or set the stage for a lovely gathering. So I created The Broken Bread, a place where I could share my love for seasonal baking and cooking.',
        '24-1-2020','To keep your nachos interesting from top to bottom, layer your ingredients more than once.',
        [new Thing('2 baking sheets'),
        new Thing('parchment paper'),
        new Thing('2-3 small sweet potatoes, scrubbed and sliced into ¼ inch rounds'),
        new Thing('1 tbs olive oil'),
        new Thing('1/2 cup canned black beans, drained and rinsed'),
        new Thing('1/2-3/4 cup shredded Mexican cheese'),
        new Thing('1 jalapeño, de-seeded and thinly sliced'),
        new Thing('sour cream or Mexican Crema, for drizzling'),
        ],
        [new Step('Heat oven to 400°F. Arrange the rack in the center of the oven.Add the sweet potato slices to a large bowl and toss with the olive oil, salt and a few cracks of pepper; continue to toss to coat.',
        'https://img.ehowcdn.com/630x/clsd/1/22/beff1c379123477f8d3093164e6fd1aa.jpg'),
        new Step('Arrange the slices on two large baking sheets lined with parchment paper.',
        'https://img.ehowcdn.com/630x/clsd/1/22/2928fb3aacb94fe3acb4c48ccc50560e.jpg'),
        new Step('Place the pans in the oven and roast for 20 minutes. Flip and cook for an additional 5-10 minutes, or until the slices appear crisp.',
        'https://img.ehowcdn.com/630x/clsd/1/22/58c25dfe659b40c4b18f41308ae3cd46.jpg'),
        new Step('To assemble the nachos, transfer the sweet potato rounds to a medium cast iron skillet, or some other oven safe dish. Scatter the beans and cheese over the top and place back into the oven for about 5 minutes, or until the cheese has melted.',
        'https://img.ehowcdn.com/630x/clsd/1/22/e9b8c301d5854160bf9b391e81c64ba6.jpg'),
        new Step('Carefully remove from oven, garnish with remaining toppings and enjoy right away.',
        'https://img.ehowcdn.com/630x/clsd/1/22/253c0861a3844ef2a24c8354c2337014.jpg'),
        ],
        ),
              new Article('DIY Natural Whitening Mint Toothpaste','Making your own natural whitening mint toothpaste is so easy to do, and you only need 3 ingredients that you may already have in your pantry. This toothpaste is non-toxic and extremely safe to use to whiten your teeth without harsh chemicals found in many store-bought products.',
        'crafts',
        'https://img.ehowcdn.com/630x/clsd/8/29/89470696b6df44d693d5c180f626374d.jpg','JESSICA KIELMAN',
        'Jessica owns two blogs, Mom 4 Real and Pour Me a Cocktail. She has been sharing easy cleaning tips, recipes and ideas with her readers for over 7 years. She has been featured on the Rachel Ray Show, TODAY Parenting, MSN, Country Woman Magazine and more.',
        '12-9-2019','Keep in mind that your homemade toothpaste won’t contain fluoride.',
        [new Thing('1/2 cup coconut oil (room temperature, not melted)'),
        new Thing('4 tablespoons baking soda'),
        new Thing('15 drops of peppermint essential oil'),
        ],
        [new Step('Place 1/2 cup of coconut oil in a bowl. The coconut oil should be room temperature. If the coconut oil is cold, its going to be very hard to mix with the other ingredients. If the coconut oil is melted, it may not thicken back up to form a paste.',
        'https://img.ehowcdn.com/630x/clsd/8/29/7d404738038a4c9f8cd42cb0a2dbf7d3.jpg'),
        new Step('Add 4 tablespoons of baking soda.',
        'https://img.ehowcdn.com/630x/clsd/8/29/72b43eaea0b649b6b2fdfaa0ff93bc22.jpg'),
        new Step('Add 15 drops of peppermint essential oil.',
        'https://img.ehowcdn.com/630x/clsd/8/29/1c0a6e5e00334de891ec671d917b4c71.jpg'),
        new Step('Mix well and store in an airtight container.',
        'https://img.ehowcdn.com/630x/clsd/8/29/96310da15fba45a58d3fb5f7eae92333.jpg'),
        ],
        ),
              new Article('DIY Non-Toxic Mouthwash Recipe','Store-bought mouthwashes often contain lots of ingredients and sometimes even toxic chemicals. If you are looking for more natural, non-toxic ingredients in your mouthwash, heres how to easily make your own with just a few ingredients that you may already have in your pantry.',
        'crafts',
        'https://img.ehowcdn.com/630x/clsd/8/29/8626acf206a3445695ced5dff28f0b4c.jpg','JESSICA KIELMAN',
        'Jessica owns two blogs, Mom 4 Real and Pour Me a Cocktail. She has been sharing easy cleaning tips, recipes and ideas with her readers for over 7 years. She has been featured on the Rachel Ray Show, TODAY Parenting, MSN, Country Woman Magazine and more.',
        '12-9-2019','Shake well before each use. There are no chemical binders in this mouthwash recipe, so the baking soda will most likely sink to the bottom.',
        [new Thing('2 cups of distilled water'),
        new Thing('2 tablespoons of baking soda'),
        new Thing('8 drops of peppermint essential oil'),
        new Thing('8 drops of tea tree essential oil'),
        ],
        [new Step('Add 2 tablespoons of baking soda to 2 cups of distilled water.',
        'https://img.ehowcdn.com/630x/clsd/8/29/ad002df0f7234a22a2076f8031400c08.jpg'),
        new Step('Add 8 drops of peppermint essential oil.',
        'https://img.ehowcdn.com/630x/clsd/8/29/67303af4523b45f6b0ff3d17f1becd50.jpg'),
        new Step('Add 8 drops of tea tree essential oil.',
        'https://img.ehowcdn.com/630x/clsd/8/29/0c6aed82866744569f940a98b4b71aea.jpg'),
        new Step('Store the mouthwash in an airtight container like a glass jar or bottle.',
        'https://img.ehowcdn.com/630x/clsd/8/29/fdd73185b23342b38e7fdf431c75b749.jpg'),
        ],
        ),
              new Article('Lemon Artichoke Skillet Chicken Recipe','When I need a great recipe for a quick-but-healthy weeknight meal, I reach for the cast iron skillet. The way it renders fat leaving behind crispy skin and juicy chicken is nothing short of miraculous, delicious and healthy — such a win/win! This recipe is great if you arent on a diet at all, but it also fits for all your loved ones who are dairy free, gluten free, paleo and even those Whole30 people! Its also perfect for just a busy person who wants a great meal.',
        'food',
        'https://img.ehowcdn.com/630x/clsd/1/6/c24f71da71f24c9494d6d10034948793.jpg','JACKIE DODD',
        'Jackie Dodd’s beer-infused​ recipes earned her a spot as a finalist for Saveur Magazines Best Original Recipes, as well as the ​crowned winner for Best Beer Coverage. her website, The Beeroness, was also a finalist for Better Homes and Gardens Best Food Blogs. She has been seen on The Today Show, Lifetime Network, CBS News, and NBC. She is also the author of The Craft Beer Cookbook and the Craft Beer Bites Cookbook.',
        '15-1-2020','This method of using a cold pan and low heat renders more fat, and makes the skin super crispy. If the skin sticks to the pan, dont worry — it will release once it has browned, given that your skillet is properly seasoned.',
        [new Thing('2 lbs chicken thighs (bone in, skin on) about 6'),
        new Thing('1 teaspoon salt'),
        new Thing('1 teaspoon pepper'),
        new Thing('1 cup chicken broth'),
        new Thing('2 tablespoons cornstarch (or tapioca flour)'),
        new Thing('1 small lemon, thinly sliced and seeded'),
        new Thing('1 (15oz) can quartered artichoke hearts in water, drained'),
        ],
        [new Step('Season the chicken on all sides with salt and pepper. Put in a cast iron skillet, off heat, skin side down.Add to medium-heat, cooking until the skin has browned and the fat has rendered, 15 to 20 minutes then flip the chicken over. Use a splatter guard if you have one.',
        'https://img.ehowcdn.com/630x/clsd/1/6/3435990de0a24aa587db86e2197e3871.jpg'),
        new Step('While the chicken cooks, make the sauce. Stir together the chicken broth and cornstarch, then stir in the olive oil, garlic powder, onion powder and honey mustard. Then add the lemon slices.',
        'https://img.ehowcdn.com/630x/clsd/1/6/67fe030419f04d3a855a241a72b833dd.jpg'),
        new Step('Pour off the fat that has rendered (this method will render a considerable amount of fat) then add the sauce to the pan.',
        'https://img.ehowcdn.com/630x/clsd/1/6/456b8bf066ba4d81b290002a820d3249.jpg'),
        new Step('Add the artichoke hearts and simmer over medium heat until the chicken is cooked through and the sauce has thickened, about 6 minutes.',
        'https://img.ehowcdn.com/630x/clsd/1/6/f9ecc60d44ad4f0186d64d0209059275.jpg'),
        new Step('Top with chopped parsley. Serve and enjoy!',
        'https://img.ehowcdn.com/630x/clsd/1/6/bb23887176334a06908665adb55f7be4.jpg'),
        ],
        ),
              new Article('DIY T-Shirt Yarn Wall Hanging','Would you like to add some texture and color to one of your walls? Are your drawers and closets overflowing with old t-shirts? Are you trying to live a more no-waste lifestyle? Then youre in luck. Dont throw away your old shirts — create this stylish wall hanging with yarn made from them instead. Trifecta! Use t-shirt yarn just like regular yarn. You can knit, crochet, make a latch hook rug, and even create this trendy wall hanging with t-shirt yarn. Your friends and family will be surprised to know this started out as some old pullovers.',
        'crafts',
        'https://img.ehowcdn.com/630x/clsd/2/5/060781a170ae4271bd1a1a0d0aafc177.jpg','BETH HUNTINGTON',
        'Beth is founder and designer of The Renegade Seamstress, a blog known for its simple , stylish, and straightforward refashion tutorials. She wants to teach and inspire even the most inexperienced sewists to try this environmentally friendly and economical way to transform thrift store finds into fashionable pieces of clothing that can be worn anywhere.',
        '6-2-2020','Depending on the weight of what youre hanging, sometimes simple tape can do the trick!',
        [new Thing('Various colors of t-shirt yarn'),
        new Thing('Sharp scissors'),
        new Thing('Measuring tape'),
        new Thing('Dowel rod or branch'),
        ],
        [new Step('Cut t-shirt yarn into 64-inch pieces.',
        'https://img.ehowcdn.com/630x/clsd/2/5/0c46393dc375406cb8f5a3fd70f7ac21.jpg'),
        new Step('Place the strips of yarn into your desired color design.',
        'https://img.ehowcdn.com/630x/clsd/2/5/c53c598637c94a138dfd0e9263012958.jpg'),
        new Step('Fold the strip of t-shirt yarn in half and wrap the loop around the top of the branch.',
        'https://img.ehowcdn.com/630x/clsd/2/5/752f88fd5248474698d2d811cee08c94.jpg'),
        new Step('Continue to loop each piece of the t-shirt yarn around the branch until you have created your desired design.',
        'https://img.ehowcdn.com/630x/clsd/2/5/32915d2ef6644c92b3ce5b9e25e6b687.jpg'),
        new Step('Cut a 25-inch piece of t-shirt yarn and tie it to each end of the branch.',
        'https://img.ehowcdn.com/630x/clsd/2/5/84fc1ed07b1e4d0a86d51d9ad01e6e93.jpg'),
        ],
        ),
              new Article('How to Turn Any Photo Into a Paint','Give your brain a break and create some beautiful art with a paint by number you made yourself. Upload one of your special photos and turn it into your very own paint by numbers project. Its a fun, relaxing and personalized way to create some new art for your home.',
        'crafts',
        'https://img.ehowcdn.com/630x/clsd/2/10/b149f675d82447b19c400cecacf2e534.jpg','BETH HUNTINGTON',
        'Beth is founder and designer of The Renegade Seamstress, a blog known for its simple , stylish, and straightforward refashion tutorials. She wants to teach and inspire even the most inexperienced sewists to try this environmentally friendly and economical way to transform thrift store finds into fashionable pieces of clothing that can be worn anywhere.',
        '13-2-2020','The only rule you have is to relax, lose yourself in the page and lay down some color',
        [new Thing('Computer'),
        new Thing('Printer'),
        new Thing('Canvas paper'),
        new Thing('Paints'),
        new Thing('Brushes'),
        ],
        [new Step('Go to PBNify.com and click on the browse button to upload a photo.',
        'https://img.ehowcdn.com/630x/clsd/2/10/f6b194eca03249d285432cf566637de1.jpg'),
        new Step('Click on the different colors in the photo to create a color palette.',
        'https://img.ehowcdn.com/630x/clsd/2/10/2c193ef599244eeb9256193d51744bd7.jpg'),
        new Step('Click the PBNify button to create a paint by number template.',
        'https://img.ehowcdn.com/630x/clsd/2/10/0fa9acdc635f44f7b4528611d85328f2.jpg'),
        new Step('Save the outline and palette, then print them out.',
        'https://img.ehowcdn.com/630x/clsd/2/10/37031560f53b4afca789e352b3630939.jpg'),
        new Step('Match the paints with the color palette.',
        'https://img.ehowcdn.com/630x/clsd/2/10/b8546e79a4414a05b3a243736f76c44d.jpg'),
        ],
        ),
              new Article('Rustic Rataouille Recipe','Ratatouille is a classic French dish thats packed with vegetables. There are many variations, but it often features tasty ingredients like eggplant, zucchini and garlic. You can toss the veggies into a stew or layer them on top of tomato sauce, just like we did in the following recipe. After you bake the vegetables and add fresh herbs, theyll pair perfectly with pasta or rice.',
        'food',
        'https://img.ehowcdn.com/630x/clsd/2/9/485ed07e2acd4c93a92236bd42a97109.jpg','KIRSTEN NUNEZ',
        'Kirsten Nunez is a lifestyle journalist and author focusing on food, health, and DIY projects. In May 2014, she published a craft book, "Studs & Pearls: 30 Creative Projects for Customized Fashion." Her work has appeared on websites such as Bustle, Brit + Co, DIY Lifestyle, and VegNews. She lives in Beacon, New York.',
        '14-2-2020','Its best to use vegetables that are about the same width. But since this isnt always possible, you can trim the vegetables to size.',
        [new Thing('28 ounces canned crushed tomatoes'),
        new Thing('1 medium red bell pepper, deseeded and diced'),
        new Thing('1 medium white or yellow onion, diced'),
        new Thing('2 tablespoons fresh basil, chopped'),
        new Thing('2 teaspoons fresh thyme, chopped'),
        new Thing('3 medium zucchini, sliced'),
        new Thing('2 to 3 baby eggplants (or 1 large standard eggplant), sliced'),
        new Thing('Balsamic vinegar'),
        ],
        [new Step('Preheat the oven to 375° Fahrenheit. In a large pot over medium heat, warm the olive oil. Cook the onion and red bell pepper for 5 to 7 minutes, or until the onion is tender and translucent. Add the minced garlic and cook for another 30 seconds.',
        'https://img.ehowcdn.com/630x/clsd/2/9/4c6bd39bf7ad43c8b8f8ac060ffc8872.jpg'),
        new Step('Add the canned tomatoes and fresh herbs. Mix well and cook for 2 to 3 minutes.',
        'https://img.ehowcdn.com/630x/clsd/2/9/814bddedf2cc480daa3462c7326bdfb5.jpg'),
        new Step('Carefully transfer the tomato sauce to a greased 9x13" casserole dish.',
        'https://img.ehowcdn.com/630x/clsd/2/9/a0373edc899d4dc99d59ff3d0ddc3788.jpg'),
        new Step('Place the sliced vegetables into a dish, stacking them in a horizontal layer. Continue until the dish is full.',
        'https://img.ehowcdn.com/630x/clsd/2/9/f360dd23684e4643994c5c7eebcf652c.jpg'),
        new Step('Drizzle balsamic vinegar on top of the vegetables.',
        'https://img.ehowcdn.com/630x/clsd/2/9/c58fb238052d4356af529a67dcde883e.jpg'),
        new Step('Bake for 45 to 55 minutes, or until the sauce is bubbling and the vegetables are browned. Garnish with fresh herbs and serve with pasta, rice or quinoa. For even more flavor, top the dish with goat cheese.',
        'https://img.ehowcdn.com/630x/clsd/2/9/453d52bf7b5e4274b50846f98a913039.jpg'),
        ],
        ),
              new Article('Old-Fashioned Chocolate Chess Pie','Chocolate chess pie is a rich Southern classic. It tastes like brownie in a crust, thanks to its fudgy filling made of evaporated milk, cocoa powder and eggs. If youre an avid baker, you might even already have all the ingredients on hand! Top it off with whipped cream and chocolate shavings for a dessert every chocolate lover will adore. There are also many ways to make this classic recipe; heres our go-to version.',
        'food',
        'https://img.ehowcdn.com/630x/clsd/2/7/ba314f00a66a4bdd8dcd621c6c71baf0.jpg','KIRSTEN NUNEZ',
        'Kirsten Nunez is a lifestyle journalist and author focusing on food, health, and DIY projects. In May 2014, she published a craft book, "Studs & Pearls: 30 Creative Projects for Customized Fashion." Her work has appeared on websites such as Bustle, Brit + Co, DIY Lifestyle, and VegNews. She lives in Beacon, New York.',
        '14-2-2020','If you prefer a sweeter pie, add another 1/4 cup of sugar. But if youd like to cut back on the sweetness, use just 1 cup of sugar (or even less).',
        [new Thing('1 9-inch pre-prepared or homemade pie crust'),
        new Thing('15 ounces evaporated milk'),
        new Thing('1/4 cup unsweetened cocoa powder'),
        new Thing('1 1/4 cups granulated sugar'),
        new Thing('2 tablespoons corn starch or all-purpose flour'),
        new Thing('1 teaspoon vanilla extract'),
        new Thing('1/4 cup unsalted butter, melted'),
        new Thing('2 eggs, lightly beaten'),
        ],
        [new Step('Preheat the oven to 350° Fahrenheit. In a large bowl, combine the cocoa powder, sugar, flour and salt. Stir until combined.',
        'https://img.ehowcdn.com/630x/clsd/2/7/72710e3a0e9c40498c517b8b954f2b0d.jpg'),
        new Step('Add the evaporated milk, melted butter and vanilla extract.',
        'https://img.ehowcdn.com/630x/clsd/2/7/709d7de9bd4a4f6d86688d79f64a9c9f.jpg'),
        new Step('Add the eggs. Mix well.',
        'https://img.ehowcdn.com/630x/clsd/2/7/ae6f50527117427d80f760e038e56dd1.jpg'),
        new Step('Press the pie crust into a pie dish, making sure the edges are secure. You can use a fork to press the edges into place. Carefully pour the chocolate filling into the crust.',
        'https://img.ehowcdn.com/630x/clsd/2/7/e2ddfa3d2ed34b21b6adb2bc6074dbe1.jpg'),
        new Step('Bake for 45 to 50 minutes or until the crust is golden brown. Let cool completely before slicing and serving. After the pie reaches room temperature, you can pop it in the refrigerator to chill.',
        'https://img.ehowcdn.com/630x/clsd/2/7/3a960ebc95434640b989cde8eb7435c8.jpg'),
        ],
        ),
              ];*/

        this.articles = [];
      }

      _createClass(ArticleService, [{
        key: "getRandomArticle",
        value: function getRandomArticle() {
          return Math.floor(Math.random() * this.articles.length);
        }
      }, {
        key: "setArticles",
        value: function setArticles(articles) {
          this.articles = articles;
        }
      }, {
        key: "getArticle",
        value: function getArticle(index) {
          return this.articles[index];
        }
      }, {
        key: "addArticle",
        value: function addArticle(article) {
          this.articles.push(article);
        }
      }, {
        key: "updateArticle",
        value: function updateArticle(index, newarticle) {
          this.articles[index] = newarticle;
        }
      }, {
        key: "deleteArticle",
        value: function deleteArticle(index) {
          this.articles.splice(index, 1);
        }
      }]);

      return ArticleService;
    }();

    ArticleService.ɵfac = function ArticleService_Factory(t) {
      return new (t || ArticleService)();
    };

    ArticleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ArticleService,
      factory: ArticleService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user.model */
    "./src/app/auth/user.model.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.user = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AuthService, [{
        key: "signup",
        value: function signup(username, password) {
          var _this = this;

          return this.http.post('http://localhost:8080/register', {
            "username": username,
            "password": password,
            "valid": true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (resData) {
            if (resData.valid) {
              var user = new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"](resData.username, true);

              _this.user.emit(user);

              sessionStorage.setItem('userData', JSON.stringify(user));
            }
          }));
        }
      }, {
        key: "login",
        value: function login(username, password) {
          var _this2 = this;

          return this.http.post('http://localhost:8080/login', {
            "username": username,
            "password": password,
            "valid": true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (resData) {
            if (resData.valid) {
              var user = new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"](resData.username, true);

              _this2.user.emit(user);

              sessionStorage.setItem('userData', JSON.stringify(user));
            }
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.user.emit(null);
          sessionStorage.removeItem('userData');
        }
      }, {
        key: "autoLogin",
        value: function autoLogin() {
          var user = JSON.parse(sessionStorage.getItem('userData'));

          if (!user) {
            return;
          } else {
            this.user.emit(user);
          }
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/user.model.ts":
  /*!************************************!*\
    !*** ./src/app/auth/user.model.ts ***!
    \************************************/

  /*! exports provided: User */

  /***/
  function srcAppAuthUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User(username, valid) {
      _classCallCheck(this, User);

      this.username = username;
      this.valid = valid;
    };
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _articles_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../articles/article.service */
    "./src/app/articles/article.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/alert/alert.component */
    "./src/app/shared/alert/alert.component.ts");

    function FooterComponent_app_alert_36_Template(rf, ctx) {
      if (rf & 1) {
        var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-alert", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function FooterComponent_app_alert_36_Template_app_alert_close_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105);

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r104.onClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", ctx_r102.error);
      }
    }

    function FooterComponent_app_alert_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-alert", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function FooterComponent_app_alert_37_Template_app_alert_close_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107);

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r106.onClose();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", ctx_r103.success);
      }
    }

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(articleService, http) {
        _classCallCheck(this, FooterComponent);

        this.articleService = articleService;
        this.http = http;
        this.error = null;
        this.success = null;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onReset",
        value: function onReset() {
          this.articleService.resetList.emit();
          window.scrollTo(0, 0);
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.error = null;
          this.success = null;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this3 = this;

          console.log(form);
          var email = form.value.email;
          this.http.post('http://localhost:8080/subscribe', {
            "email": email,
            "existing": false
          }).subscribe(function (resData) {
            if (resData.existing) {
              _this3.success = null;
              _this3.error = "You have already subscribed to our newsletter";
            } else {
              _this3.error = null;
              _this3.success = "You have successfully subscribed to our newsletter";
            }
          });
          form.reset();
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_articles_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 38,
      vars: 3,
      consts: [[1, "footer-container"], [1, "left-col"], ["routerLink", "/articles", 2, "cursor", "pointer", "text-decoration", "none", 3, "click"], [2, "font-family", "Bungee Shade", "color", "#DC143C", "font-size", "7vh"], [1, "social-media"], ["href", ""], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-instagram"], [1, "fab", "fa-youtube"], [1, "fab", "fa-linkedin-in"], [1, "rights-text", 2, "font-family", "Gugi"], [1, "right-col"], [2, "font-size", "8vh", "color", "#DC143C", "font-family", "Monofett"], [1, "border"], [2, "font-family", "Gugi"], [1, "newsletter-form", 3, "ngSubmit"], ["subscribeform", "ngForm"], ["type", "email", "id", "email", "placeholder", "Enter Your Email", "spellcheck", "false", "ngModel", "", "name", "email", "email", "", "required", "", 1, "txtb"], ["email", "ngModel"], ["type", "submit", 1, "btn", 3, "disabled"], [3, "message", "close", 4, "ngIf"], [3, "message", "close"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_7_listener($event) {
            return ctx.onReset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Krafty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Copyright \xA9 Krafty India,Inc. All rights reserved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Our Newsletter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Enter Your Email to get our news and updates.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FooterComponent_Template_form_ngSubmit_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108);

            var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

            return ctx.onSubmit(_r100);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, FooterComponent_app_alert_36_Template, 1, 1, "app-alert", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, FooterComponent_app_alert_37_Template, 1, 1, "app-alert", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r100.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]],
      styles: ["@import url('https://fonts.googleapis.com/css?family=Gugi&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Fascinate&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Monofett&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Bungee+Inline|Monoton|Saira+Stencil+One&display=swap');\r\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n  border: 1px solid tomato;\r\n}\r\nfooter[_ngcontent-%COMP%]{\r\n    background: -webkit-gradient(linear, left top, right top, from(#ee9ca7), to(#ffdde1));\r\n    background: linear-gradient(to right, #ee9ca7, #ffdde1);\r\n    padding: 50px 0;\r\n  }\r\n.footer-container[_ngcontent-%COMP%] {\r\n    max-width: 1300px;\r\n    margin: auto;\r\n    padding: 0 20px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    flex-wrap: wrap;\r\n  }\r\n.social-media[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n  }\r\n.social-media[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #B22222;\r\n    margin-right: 25px;\r\n    font-size: 22px;\r\n    text-decoration: none;\r\n    -webkit-transition: .3s linear;\r\n    transition: .3s linear;\r\n  }\r\n.social-media[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: darkslategrey;\r\n  }\r\n.fa-twitter[_ngcontent-%COMP%] {\r\n    color: #4099FF;\r\n}\r\n.fa-facebook-f[_ngcontent-%COMP%] {\r\n    color: #3B5998;\r\n}\r\n.fa-youtube[_ngcontent-%COMP%] {\r\n    color: #e52d27;\r\n}\r\n.fa-instagram[_ngcontent-%COMP%] {\r\n    color: hotpink;\r\n}\r\n.fa-linkedin-in[_ngcontent-%COMP%] {\r\n    color: #007bb6;\r\n}\r\n.border[_ngcontent-%COMP%]{\r\n    border: 3px solid #B22222;\r\n    border-radius: 5px;\r\n  }\r\n.newsletter-form[_ngcontent-%COMP%]{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    flex-wrap: wrap;\r\n  }\r\n.txtb[_ngcontent-%COMP%]{\r\n    padding: 18px 40px;\r\n    font-size: 16px;\r\n    color: #293043;\r\n    background: #ddd;\r\n    font-weight: bold;\r\n    border:none;\r\n    outline: none;\r\n    border-radius: 30px;\r\n    min-width: 260px;\r\n  }\r\n.btn[_ngcontent-%COMP%]{\r\n    padding: 18px 40px;\r\n    font-size: 16px;\r\n    color: #f1f1f1;\r\n    background: #DC143C;\r\n    font-weight: bold;\r\n    border-radius: 30px;\r\n    margin-left: 20px;\r\n    -webkit-transition: opacity .3s linear;\r\n    transition: opacity .3s linear;\r\n  }\r\n.btn[_ngcontent-%COMP%]:hover{\r\n    opacity: .7;\r\n  }\r\n.btn[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n  }\r\nbutton[disabled][_ngcontent-%COMP%]{\r\n    opacity: 1;\r\n  }\r\n@media screen and (max-width:960px) {\r\n    .footer-container[_ngcontent-%COMP%]{\r\n      max-width: 600px;\r\n    }\r\n    .right-col[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n      margin-bottom: 60px;\r\n    }\r\n  \r\n    .left-col[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n      text-align: center;\r\n    }\r\n  }\r\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    color:#DC143C\t;\r\n    font-family: 'Bungee Inline';\r\n    }\r\n[_ngcontent-%COMP%]::-moz-placeholder {\r\n    color:#DC143C\t;\r\n    font-family: 'Bungee Inline';\r\n    }\r\n[_ngcontent-%COMP%]::-ms-input-placeholder {\r\n    color:#DC143C\t;\r\n    font-family: 'Bungee Inline';\r\n    }\r\n[_ngcontent-%COMP%]::placeholder, select[_ngcontent-%COMP%] {\r\n    color:#DC143C\t;\r\n    font-family: 'Bungee Inline';\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdFQUF3RTtBQUN4RSw2RUFBNkU7QUFDN0UsNEVBQTRFO0FBQzVFLDJHQUEyRztBQUUzRztFQUNFLHdCQUF3QjtBQUMxQjtBQUVFO0lBQ0UscUZBQXVEO0lBQXZELHVEQUF1RDtJQUN2RCxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLDhCQUFzQjtJQUF0QixzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUVBO0lBQ0UsY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUlFO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsc0NBQThCO0lBQTlCLDhCQUE4QjtFQUNoQztBQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNBO0lBQ0U7TUFDRSxnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLFdBQVc7TUFDWCxtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsa0JBQWtCO0lBQ3BCO0VBQ0Y7QUFDQTtJQUNFLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUI7QUFIRjtJQUNFLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUI7QUFIRjtJQUNFLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUI7QUFIRjtJQUNFLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUd1Z2kmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmFzY2luYXRlJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbm9mZXR0JmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJ1bmdlZStJbmxpbmV8TW9ub3RvbnxTYWlyYStTdGVuY2lsK09uZSZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdG9tYXRvO1xyXG59XHJcblxyXG4gIGZvb3RlcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VlOWNhNywgI2ZmZGRlMSk7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgfVxyXG4gIC5mb290ZXItY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTMwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG5cclxuICAuc29jaWFsLW1lZGlhIHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gIH1cclxuICBcclxuICAuc29jaWFsLW1lZGlhIGEge1xyXG4gICAgY29sb3I6ICNCMjIyMjI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgbGluZWFyO1xyXG4gIH1cclxuICBcclxuICAuc29jaWFsLW1lZGlhIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogZGFya3NsYXRlZ3JleTtcclxuICB9XHJcblxyXG4gIC5mYS10d2l0dGVyIHtcclxuICAgIGNvbG9yOiAjNDA5OUZGO1xyXG59XHJcblxyXG4uZmEtZmFjZWJvb2stZiB7XHJcbiAgICBjb2xvcjogIzNCNTk5ODtcclxufVxyXG5cclxuLmZhLXlvdXR1YmUge1xyXG4gICAgY29sb3I6ICNlNTJkMjc7XHJcbn1cclxuXHJcbi5mYS1pbnN0YWdyYW0ge1xyXG4gICAgY29sb3I6IGhvdHBpbms7XHJcbn1cclxuXHJcbi5mYS1saW5rZWRpbi1pbiB7XHJcbiAgICBjb2xvcjogIzAwN2JiNjtcclxufVxyXG5cclxuICBcclxuICBcclxuICAuYm9yZGVye1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI0IyMjIyMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLm5ld3NsZXR0ZXItZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIC50eHRie1xyXG4gICAgcGFkZGluZzogMThweCA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMyOTMwNDM7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyNjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bntcclxuICAgIHBhZGRpbmc6IDE4cHggNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gICAgYmFja2dyb3VuZDogI0RDMTQzQztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgbGluZWFyO1xyXG4gIH1cclxuICBcclxuICAuYnRuOmhvdmVye1xyXG4gICAgb3BhY2l0eTogLjc7XHJcbiAgfVxyXG4gIC5idG46Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgYnV0dG9uW2Rpc2FibGVkXXtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTYwcHgpIHtcclxuICAgIC5mb290ZXItY29udGFpbmVye1xyXG4gICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0LWNvbHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubGVmdC1jb2x7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIDo6cGxhY2Vob2xkZXIsc2VsZWN0IHtcclxuICAgIGNvbG9yOiNEQzE0M0NcdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQnVuZ2VlIElubGluZSc7XHJcbiAgICB9XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [{
          type: _articles_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _articles_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../articles/article.service */
    "./src/app/articles/article.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/data-storage.service */
    "./src/app/shared/data-storage.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_li_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_37_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r94);

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r93.onLogout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign-out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_38_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r95.onLogin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LOGIN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_39_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r97.onRegister();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SIGN-UP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(articleService, router, authService, dataStorageService) {
        var _this4 = this;

        _classCallCheck(this, HeaderComponent);

        this.articleService = articleService;
        this.router = router;
        this.authService = authService;
        this.dataStorageService = dataStorageService;
        this.isAuthenticated = false;
        authService.user.subscribe(function (user) {
          _this4.isAuthenticated = user ? true : false;
        });
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSelection",
        value: function onSelection(select) {
          this.router.navigate(['/articles']);
          this.articleService.categorySelection.emit(select);
          window.scrollBy(0, 520);
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.articleService.resetList.emit();
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authService.logout();
          this.router.navigate(['/articles']);
        }
      }, {
        key: "onRegister",
        value: function onRegister() {
          this.router.navigate(['/auth', 'signup']);
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          this.router.navigate(['/auth']);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var keyword = form.value.keyword;
          this.router.navigate(['/articles']);
          this.articleService.searchkeyword.emit(keyword);
          window.scrollBy(0, 520);
          form.reset();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_articles_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 40,
      vars: 4,
      consts: [[1, "navbar", "navbar-default"], [1, "container-fluid"], [1, "navbar-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#myNavbar", 1, "navbar-toggle"], [1, "icon-bar"], ["routerLink", "/articles", 1, "navbar-brand", 3, "click"], ["id", "myNavbar", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], [1, "dropdown"], ["data-toggle", "dropdown", "role", "button", 1, "dropdown-toggle", 2, "cursor", "pointer", "color", "black"], [1, "caret"], [1, "dropdown-menu"], [2, "cursor", "pointer", 3, "click"], ["routerLink", "/articles/mypost", 2, "cursor", "pointer", "color", "black"], [1, "col-sm-4", "col-md-4"], [3, "ngSubmit"], ["searchform", "ngForm"], ["type", "text", "id", "keyword", "ngModel", "", "name", "keyword", "required", "", "placeholder", "type keywords.."], ["type", "submit", "value", "Search", 3, "disabled"], [1, "nav", "navbar-nav", "navbar-right"], [4, "ngIf"], [2, "cursor", "pointer", "color", "black", 3, "click"], [2, "cursor", "pointer", "color", "black", "text-transform", "uppercase", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_7_listener($event) {
            return ctx.onReset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Krafty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Discover ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_17_listener($event) {
            return ctx.onSelection("food");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Food & Drink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_20_listener($event) {
            return ctx.onSelection("home-decor");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Home decor & repair");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_23_listener($event) {
            return ctx.onSelection("crafts");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Crafts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_26_listener($event) {
            return ctx.onSelection("fashion");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Fashion & beauty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "My-Posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HeaderComponent_Template_form_ngSubmit_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);

            var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

            return ctx.onSubmit(_r89);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HeaderComponent_li_37_Template, 3, 0, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, HeaderComponent_li_38_Template, 3, 0, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, HeaderComponent_li_39_Template, 3, 0, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r89.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["@import url('https://fonts.googleapis.com/css?family=Bungee+Shade&display=swap');\r\n@import url('https://fonts.googleapis.com/css?family=Zilla+Slab+Highlight&display=swap');\r\n.navbar[_ngcontent-%COMP%]{   \r\n    font-size: xx-large;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#ffafbd), to(#ffc3a0));\r\n    background: linear-gradient(to bottom, #ffafbd, #ffc3a0);\r\n    border: none;\r\n}\r\n.navbar-brand[_ngcontent-%COMP%]{\r\nfont-size: xx-large;\r\ncolor: maroon;\r\ncursor: pointer;\r\nfont-family: 'Bungee Shade';\r\nbackground: -webkit-gradient(linear, left top, right top, from(#200122), to(#6f0000));\r\nbackground: linear-gradient(to right, #200122, #6f0000);\r\n-webkit-background-clip: text;\r\n        background-clip: text;\r\n-webkit-text-fill-color: transparent;\r\n}\r\n.navbar-header[_ngcontent-%COMP%] {\r\n    font-family: 'Pacifico', cursive;\r\n    font-weight: bolder;\r\n}\r\n.navbar-collapse[_ngcontent-%COMP%] {\r\n    font-family: 'Luckiest Guy', cursive;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    font-size: 20px;\r\n    box-sizing: border-box;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%] {\r\n    background-color: whitesmoke;\r\n    border: none;\r\n    outline: none;\r\n    height: 40px;\r\n    border-radius: 25px 0 0 25px;\r\n    padding: 0 25px;\r\n}\r\ninput[type=\"submit\"][_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    width: 100px;\r\n    border-radius: 0 25px 25px 0;\r\n    border:none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    background-color: salmon;\r\n    color: black;\r\n}\r\ninput[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\nbackground-color: crimson;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdGQUFnRjtBQUNoRix3RkFBd0Y7QUFFeEY7SUFDSSxtQkFBbUI7SUFDbkIsdUZBQXdEO0lBQXhELHdEQUF3RDtJQUN4RCxZQUFZO0FBQ2hCO0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIsYUFBYTtBQUNiLGVBQWU7QUFDZiwyQkFBMkI7QUFDM0IscUZBQXVEO0FBQXZELHVEQUF1RDtBQUN2RCw2QkFBcUI7UUFBckIscUJBQXFCO0FBQ3JCLG9DQUFvQztBQUNwQztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0EsYUFBYTtBQUNiO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHdCQUFnQjtJQUFoQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QnVuZ2VlK1NoYWRlJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVppbGxhK1NsYWIrSGlnaGxpZ2h0JmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLm5hdmJhcnsgICBcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZhZmJkLCAjZmZjM2EwKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZHtcclxuZm9udC1zaXplOiB4eC1sYXJnZTtcclxuY29sb3I6IG1hcm9vbjtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG5mb250LWZhbWlseTogJ0J1bmdlZSBTaGFkZSc7XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIwMDEyMiwgIzZmMDAwMCk7XHJcbmJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubmF2YmFyLWhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2tpZXN0IEd1eScsIGN1cnNpdmU7XHJcbn1cclxuLypzZWFyY2gtYm94Ki9cclxuaW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAwIDAgMjVweDtcclxuICAgIHBhZGRpbmc6IDAgMjVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDI1cHggMjVweCAwO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2FsbW9uO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _articles_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _shared_data_storage_service__WEBPACK_IMPORTED_MODULE_4__["DataStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/alert/alert.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/alert/alert.component.ts ***!
    \*************************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcAppSharedAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlertComponent =
    /*#__PURE__*/
    function () {
      function AlertComponent() {
        _classCallCheck(this, AlertComponent);

        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AlertComponent, [{
        key: "onClose",
        value: function onClose() {
          this.close.emit();
        }
      }]);

      return AlertComponent;
    }();

    AlertComponent.ɵfac = function AlertComponent_Factory(t) {
      return new (t || AlertComponent)();
    };

    AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlertComponent,
      selectors: [["app-alert"]],
      inputs: {
        message: "message"
      },
      outputs: {
        close: "close"
      },
      decls: 7,
      vars: 1,
      consts: [[1, "backdrop", 3, "click"], [1, "alert-box"], [1, "alert-box-action"], [1, "btn", "btn-primary", 3, "click"]],
      template: function AlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_div_click_0_listener($event) {
            return ctx.onClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_5_listener($event) {
            return ctx.onClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      styles: [".backdrop[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top:0;\r\n    left:0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: rgba(0, 0, 0, 0.75);\r\n    z-index: 50;\r\n}\r\n\r\n.alert-box[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 40vh;\r\n    left: 20vw;\r\n    width: 60vw;\r\n    padding: 16px;\r\n    z-index: 100;\r\n    background: -webkit-gradient(linear, left top, right top, from(#ece9e6), to(#ffffff));\r\n    background: linear-gradient(to right, #ece9e6, #ffffff);\r\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.30)\r\n\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    background-color: salmon;\r\n}\r\n\r\n.alert-box-action[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsS0FBSztJQUNMLE1BQU07SUFDTixZQUFZO0lBQ1osYUFBYTtJQUNiLCtCQUErQjtJQUMvQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixxRkFBdUQ7SUFBdkQsdURBQXVEO0lBQ3ZEOztBQUVKOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Ryb3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIHotaW5kZXg6IDUwO1xyXG59XHJcblxyXG4uYWxlcnQtYm94IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNDB2aDtcclxuICAgIGxlZnQ6IDIwdnc7XHJcbiAgICB3aWR0aDogNjB2dztcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlY2U5ZTYsICNmZmZmZmYpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zMClcclxuXHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcclxufVxyXG5cclxuLmFsZXJ0LWJveC1hY3Rpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alert',
          templateUrl: './alert.component.html',
          styleUrls: ['./alert.component.css']
        }]
      }], null, {
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/data-storage.service.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/data-storage.service.ts ***!
    \************************************************/

  /*! exports provided: DataStorageService */

  /***/
  function srcAppSharedDataStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataStorageService", function () {
      return DataStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _articles_article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../articles/article.service */
    "./src/app/articles/article.service.ts");

    var DataStorageService =
    /*#__PURE__*/
    function () {
      function DataStorageService(http, articleService) {
        _classCallCheck(this, DataStorageService);

        this.http = http;
        this.articleService = articleService;
      }

      _createClass(DataStorageService, [{
        key: "storeArticles",
        value: function storeArticles() {
          var articles = this.articleService.articles;
          this.http.put('http://localhost:8080/save', articles).subscribe(function (response) {
            console.log(response);
          });
        }
      }, {
        key: "fetchArticles",
        value: function fetchArticles() {
          var _this5 = this;

          return this.http.get('http://localhost:8080/fetch').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (articles) {
            _this5.articleService.setArticles(articles);
          }));
        }
      }]);

      return DataStorageService;
    }();

    DataStorageService.ɵfac = function DataStorageService_Factory(t) {
      return new (t || DataStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_articles_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"]));
    };

    DataStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataStorageService,
      factory: DataStorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _articles_article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/loading-spinner/loading-spinner.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
    \*********************************************************************/

  /*! exports provided: LoadingSpinnerComponent */

  /***/
  function srcAppSharedLoadingSpinnerLoadingSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function () {
      return LoadingSpinnerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoadingSpinnerComponent = function LoadingSpinnerComponent() {
      _classCallCheck(this, LoadingSpinnerComponent);
    };

    LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) {
      return new (t || LoadingSpinnerComponent)();
    };

    LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoadingSpinnerComponent,
      selectors: [["app-loading-spinner"]],
      decls: 3,
      vars: 0,
      consts: [[1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]],
      template: function LoadingSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".spinner[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n  \r\n    position: relative;\r\n    margin: 100px auto;\r\n  }\r\n  \r\n  .double-bounce1[_ngcontent-%COMP%], .double-bounce2[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    background-color: lightcoral;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    \r\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\r\n    animation: sk-bounce 2.0s infinite ease-in-out;\r\n  }\r\n  \r\n  .double-bounce2[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: -1.0s;\r\n    animation-delay: -1.0s;\r\n  }\r\n  \r\n  @-webkit-keyframes sk-bounce {\r\n    0%, 100% { -webkit-transform: scale(0.0) }\r\n    50% { -webkit-transform: scale(1.0) }\r\n  }\r\n  \r\n  @keyframes sk-bounce {\r\n    0%, 100% { \r\n      transform: scale(0.0);\r\n      -webkit-transform: scale(0.0);\r\n    } 50% { \r\n      transform: scale(1.0);\r\n      -webkit-transform: scale(1.0);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztJQUVaLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTzs7SUFFUCxzREFBc0Q7SUFDdEQsOENBQThDO0VBQ2hEOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVcsOEJBQThCO0lBQ3pDLE1BQU0sOEJBQThCO0VBQ3RDOztFQUVBO0lBQ0U7TUFDRSxxQkFBcUI7TUFDckIsNkJBQTZCO0lBQy9CLEVBQUU7TUFDQSxxQkFBcUI7TUFDckIsNkJBQTZCO0lBQy9CO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXIge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5kb3VibGUtYm91bmNlMSwgLmRvdWJsZS1ib3VuY2UyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5kb3VibGUtYm91bmNlMiB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlIHtcclxuICAgIDAlLCAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMCkgfVxyXG4gICAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCkgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgICAwJSwgMTAwJSB7IFxyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgfSA1MCUgeyBcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIH1cclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loading-spinner',
          template: "<div class=\"spinner\">\n    <div class=\"double-bounce1\"></div>\n    <div class=\"double-bounce2\"></div>\n  </div>",
          styleUrls: ['./loading-spinner.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./loading-spinner/loading-spinner.component */
    "./src/app/shared/loading-spinner/loading-spinner.component.ts");
    /* harmony import */


    var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alert/alert.component */
    "./src/app/shared/alert/alert.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\DELL\Documents\Angular\articledirectory\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map