(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/wodewenjian/add-or-update"],{"365d":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return i}));var i={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"1e28"))}},a=function(){var e=this,n=e.$createElement;e._self._c},r=[]},"759e":function(e,n,t){},"9cbd":function(e,n,t){"use strict";t.r(n);var i=t("365d"),a=t("ef17");for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);t("bc24");var s,u=t("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"70c4ea30",null,!1,i["a"],s);n["default"]=o.exports},a3ab:function(e,n,t){"use strict";(function(e){t("7312");i(t("66fd"));var n=i(t("9cbd"));function i(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},bc24:function(e,n,t){"use strict";var i=t("759e"),a=t.n(i);a.a},e677:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e,n,t,i,a,r,s){try{var u=e[r](s),o=u.value}catch(c){return void t(c)}u.done?n(o):Promise.resolve(o).then(i,a)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(i,a){var s=e.apply(n,t);function u(e){r(s,i,a,u,o,"next",e)}function o(e){r(s,i,a,u,o,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("1e28"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{cross:"",ro:{wenjianName:!1,wenjianTypes:!1,wenjianPhoto:!1,wenjianFile:!1,wenjianJifenNumber:!1,zanNumber:!1,caiNumber:!1,yonghuId:!1,wenjianStatusTypes:!1,biaoshiStatusTypes:!1,wenjianContent:!1,insertTime:!1,createTime:!1},ruleForm:{wenjianName:"",wenjianTypes:"",wenjianValue:"",wenjianPhoto:"",wenjianFile:"",wenjianJifenNumber:"",zanNumber:"0",caiNumber:"0",yonghuId:"",wenjianStatusTypes:"",wenjianStatusValue:"",biaoshiStatusTypes:"1",biaoshiStatusValue:"",wenjianContent:"",insertTime:"",createTime:""},user:{},wenjianTypesOptions:[],wenjianTypesIndex:0,wenjianStatusTypesOptions:[],wenjianStatusTypesIndex:0,biaoshiStatusTypesOptions:[],biaoshiStatusTypesIndex:0}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var n=this;return s(i.default.mark((function t(){var a,r,s,u,o,c,l;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={page:1,limit:100,dicCode:"wenjian_types"},t.next=3,n.$api.page("dictionary",a);case 3:return r=t.sent,n.wenjianTypesOptions=r.data.list,s={page:1,limit:100,dicCode:"wenjian_status_types"},t.next=8,n.$api.page("dictionary",s);case 8:return u=t.sent,n.wenjianStatusTypesOptions=u.data.list,o={page:1,limit:100,dicCode:"biaoshi_status_types"},t.next=13,n.$api.page("dictionary",o);case 13:if(c=t.sent,n.biaoshiStatusTypesOptions=c.data.list,!e.id){t.next=21;break}return n.ruleForm.id=e.id,t.next=19,n.$api.info("wenjian",n.ruleForm.id);case 19:l=t.sent,n.ruleForm=l.data;case 21:e.wenjianId&&(n.ruleForm.wenjianId=e.wenjianId);case 22:case"end":return t.stop()}}),t)})))()},methods:{wenjianTypesChange:function(e){this.wenjianTypesIndex=e.target.value,this.ruleForm.wenjianValue=this.wenjianTypesOptions[this.wenjianTypesIndex].indexName,this.ruleForm.wenjianTypes=this.wenjianTypesOptions[this.wenjianTypesIndex].codeIndex},wenjianStatusTypesChange:function(e){this.wenjianStatusTypesIndex=e.target.value,this.ruleForm.wenjianStatusValue=this.wenjianStatusTypesOptions[this.wenjianStatusTypesIndex].indexName,this.ruleForm.wenjianStatusTypes=this.wenjianStatusTypesOptions[this.wenjianStatusTypesIndex].codeIndex},biaoshiStatusTypesChange:function(e){this.biaoshiStatusTypesIndex=e.target.value,this.ruleForm.biaoshiStatusValue=this.biaoshiStatusTypesOptions[this.biaoshiStatusTypesIndex].indexName,this.ruleForm.biaoshiStatusTypes=this.biaoshiStatusTypesOptions[this.biaoshiStatusTypesIndex].codeIndex},wenjianPhotoTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.wenjianPhoto=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){}))}))},wenjianFileTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.wenjianFile=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){}))}))},insertTimeConfirm:function(e){console.log(e),this.ruleForm.insertTime=e.result,this.$forceUpdate()},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return s(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.wenjianName){t.next=3;break}return n.$utils.msg("文件名称不能为空"),t.abrupt("return");case 3:if(n.ruleForm.wenjianPhoto){t.next=6;break}return n.$utils.msg("文件图片不能为空"),t.abrupt("return");case 6:if(n.ruleForm.wenjianJifenNumber||n.$validate.isIntNumer(n.ruleForm.wenjianJifenNumber)||!(n.ruleForm.wenjianJifenNumber>0)){t.next=9;break}return n.$utils.msg("下载积分不能为空，不能小于0 格式为数字"),t.abrupt("return");case 9:if(n.ruleForm.wenjianStatusTypes){t.next=12;break}return n.$utils.msg("文件状态不能为空"),t.abrupt("return");case 12:if(!n.ruleForm.id){t.next=17;break}return t.next=15,n.$api.update("wenjian",n.ruleForm);case 15:t.next=19;break;case 17:return t.next=19,n.$api.save("wenjian",n.ruleForm);case 19:e.setStorageSync("pingluenStateState",!0),n.$utils.msgBack("提交成功");case 21:case"end":return t.stop()}}),t)})))()},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,t("543d")["default"])},ef17:function(e,n,t){"use strict";t.r(n);var i=t("e677"),a=t.n(i);for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);n["default"]=a.a}},[["a3ab","common/runtime","common/vendor"]]]);