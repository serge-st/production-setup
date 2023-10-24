(self.webpackChunkproduction_setup=self.webpackChunkproduction_setup||[]).push([[697,662],{"./src/pages/MainPage/UI/MainPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _MainPage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/pages/MainPage/UI/MainPage.tsx"),shared_config_storybook_decorators_TranslationsDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/config/storybook/decorators/TranslationsDecorator.tsx"),shared_config_storybook_decorators_PageWrapperDecorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/config/storybook/decorators/PageWrapperDecorator.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"pages/MainPage",component:_MainPage__WEBPACK_IMPORTED_MODULE_0__.default,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{}},Default={args:{},decorators:[(0,shared_config_storybook_decorators_PageWrapperDecorator__WEBPACK_IMPORTED_MODULE_2__.U)(),(0,shared_config_storybook_decorators_TranslationsDecorator__WEBPACK_IMPORTED_MODULE_1__.K)()]};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {},\n  decorators: [PageWrapperDecorator(), TranslationsDecorator()]\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/pages/MainPage/UI/MainPage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MainPage=()=>{const{t}=(0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.$G)("pages/main");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1",{children:t("Title")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{style:{color:"var(--secondary-color)"},children:t("Body")})]})};MainPage.displayName="MainPage";const __WEBPACK_DEFAULT_EXPORT__=MainPage;try{MainPage.displayName="MainPage",MainPage.__docgenInfo={description:"",displayName:"MainPage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/MainPage/UI/MainPage.tsx#MainPage"]={docgenInfo:MainPage.__docgenInfo,name:"MainPage",path:"src/pages/MainPage/UI/MainPage.tsx#MainPage"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/config/storybook/decorators/PageWrapperDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>PageWrapperDecorator});var lib=__webpack_require__("./src/shared/lib/index.ts"),PageWrapper_module=__webpack_require__("./src/pages/PageWrapper/UI/PageWrapper.module.scss"),PageWrapper_module_default=__webpack_require__.n(PageWrapper_module),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PageWrapper=props=>{const{className,children,...misc}=props;return(0,jsx_runtime.jsx)("main",{className:(0,lib.A)(PageWrapper_module_default().PageWrapper,{},[className]),...misc,children})};PageWrapper.displayName="PageWrapper";try{PageWrapper.displayName="PageWrapper",PageWrapper.__docgenInfo={description:"",displayName:"PageWrapper",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/PageWrapper/UI/PageWrapper.tsx#PageWrapper"]={docgenInfo:PageWrapper.__docgenInfo,name:"PageWrapper",path:"src/pages/PageWrapper/UI/PageWrapper.tsx#PageWrapper"})}catch(__react_docgen_typescript_loader_error){}function PageWrapperDecorator(){return Story=>(0,jsx_runtime.jsx)("div",{style:{height:"100dvh",display:"flex"},children:(0,jsx_runtime.jsx)(PageWrapper,{style:{flex:1},children:(0,jsx_runtime.jsx)(Story,{})})})}},"./src/shared/config/storybook/decorators/TranslationsDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>TranslationsDecorator});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js");const translations_namespaceObject=JSON.parse('{"en":{"translation":{"Language toggle text":"ru","Nav route name /":"Main Page","Nav route name /about":"About Page","Page not found":"Not sure what you are looking for... 😬","Page Error":"Ooops, something went wrong 😬","Reload Page":"Reload The Page 🔄"},"pages/about":{"Title":"About Page","Body":"Flizzle snazzle about gloxum, wibber zorble borp mibber florb blip wibble, quizzle sprong zarfle mib."},"pages/main":{"Title":"Main Page","Body":"Zibber blazzle Main page flurgle, snorfle dribber zorp wobble glibber, squizzle frizzle yarble zib."}},"ru":{"translation":{"Language toggle text":"en","Nav route name /":"Главная Страница","Nav route name /about":"О Сайте","Page not found":"Хммм, не уверен что именно ты ищешь... 😬","Page Error":"Ой, что-то пошло не так 😬","Reload Page":"Перезагрузить страницу 🔄"},"pages/about":{"Title":"О Сайте","Body":"Флорб блип о странице заргл, миббер виббл кварц, флиззле сназзле воплер морф."},"pages/main":{"Title":"Главная Страница","Body":"Зорбле блорф Главная страница флиббер, снорфле дриббер жорп воббле глиббер, сквиззле фриззле ярбле зиб."}}}');i18next.ZP.use(es.Db).init({lng:"en",fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1},resources:translations_namespaceObject});const i18nForTests=i18next.ZP;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function TranslationsDecorator(){return(Story,context)=>{const{locale}=context.globals;return(0,react.useEffect)((()=>{i18nForTests.changeLanguage(locale)}),[locale]),(0,jsx_runtime.jsx)(react.Suspense,{fallback:(0,jsx_runtime.jsx)("div",{children:"Loading Translations..."}),children:(0,jsx_runtime.jsx)(es.a3,{i18n:i18nForTests,children:(0,jsx_runtime.jsx)(Story,{})})})}}},"./src/shared/lib/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>classNames,F:()=>useTheme});var react=__webpack_require__("./node_modules/react/index.js"),ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.ts");const useTheme=()=>{const{theme,setTheme}=(0,react.useContext)(ThemeProvider.Ni);return{theme,toggleTheme:()=>{const newTheme="regular"===theme?"dark":"regular";setTheme(newTheme),localStorage.setItem(ThemeProvider.a1,newTheme)},setTheme:themeName=>{setTheme(themeName),localStorage.setItem(ThemeProvider.a1,themeName)}}};function classNames(mainClass){let mods=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return[mainClass,...(arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]).filter(Boolean),...Object.entries(mods).filter((_ref=>{let[_key,value]=_ref;return Boolean(value)})).map((_ref2=>{let[key]=_ref2;return key}))].join(" ")}},"./src/pages/PageWrapper/UI/PageWrapper.module.scss":module=>{module.exports={PageWrapper:"PageWrapper__cAKKRM"}}}]);