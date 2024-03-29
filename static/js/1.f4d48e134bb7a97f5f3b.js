webpackJsonp([1],{835:function(e,t,n){function o(e){n(857)}var i=n(66)(n(847),n(872),o,"data-v-014f466e",null);e.exports=i.exports},841:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(87),i=n.n(o),a=n(67);t.default={props:{commentsUrl:{type:String,required:!0}},data:function(){return{isWrite:!0,newComment:null,renderedMarkdown:"",isCommitting:!1}},computed:i()({},n.i(a.b)(["accessToken","loginLink"]),{commentBtnDisabled:function(){return null==this.accessToken||this.isCommitting||null==this.newComment||0===this.newComment.trim().length}}),methods:i()({},n.i(a.a)(["setAccessToken","setTokenUser"]),{renderMarkdown:function(){this.renderedMarkdown="Nothing to preview",this.newComment&&(this.renderedMarkdown=this.$marked(this.newComment)),this.isWrite=!1},fetchAccessToken:function(){var e=this,t=this.$queryParse();if(t.code){var n=t.code;delete t.code;var o=""+window.location.origin+window.location.pathname+this.$queryStringify(t)+window.location.hash;history.replaceState(null,null,o),this.$gitHubApi.getAccessToken(this,n).then(function(t){t.data&&t.data.access_token&&e.setAccessToken(t.data.access_token)})}},addComment:function(){var e=this;this.isCommitting=!0,this.$gitHubApi.addComment(this,this.commentsUrl,this.newComment.trim()).then(function(t){t.data&&t.data&&(e.$emit("addCommentSuccess",t.data),e.isWrite=!0,e.newComment=null,e.renderedMarkdown="",e.isCommitting=!1)}).catch(function(t){e.isCommitting=!1,t.response&&401===t.response.status&&e.setAccessToken(null)})}}),mounted:function(){var e=this;this.$nextTick(function(){e.fetchAccessToken()})}}},842:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{renderedMarkdown:""}},props:["comment"],methods:{renderMarkdown:function(){this.renderedMarkdown="",this.comment.body_html?this.renderedMarkdown=this.comment.body_html:this.comment.body&&(this.renderedMarkdown=this.$marked(this.comment.body))},openGitHub:function(){window.open(this.comment.user.html_url)}},mounted:function(){var e=this;this.$nextTick(function(){e.renderMarkdown()})}}},847:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(87),i=n.n(o),a=n(67),s=n(869),r=n.n(s),c=n(868),d=n.n(c);t.default={data:function(){return{issue:null,number:null,comments:[],newComment:null}},components:{Comment:r.a,AddComment:d.a},methods:i()({},n.i(a.a)(["updateActiveLabel"]),{setActiveLabel:function(e){this.updateActiveLabel(e),this.$router.push("/")},getComments:function(){var e=this;this.issue&&this.issue.comments>0&&this.$gitHubApi.getComments(this,this.issue.comments_url).then(function(t){e.comments=t.data})},getIssue:function(){var e=this;this.$gitHubApi.getIssue(this,this.number).then(function(t){e.issue=t.data,e.getComments()})},back:function(){this.$router.go(-1)},handleAddCommentSuccess:function(e){var t=this;this.comments.push(e),this.$nextTick(function(){setTimeout(function(){var e=t.$refs.commentContainer;e.scrollTop=e.scrollHeight-e.clientHeight},16)})}}),created:function(){this.$route.params.issue?this.issue=this.$route.params.issue:this.$route.params.number?this.number=this.$route.params.number:this.$router.replace("/")},mounted:function(){var e=this;this.$nextTick(function(){e.issue?e.getComments():e.getIssue()})}}},849:function(e,t,n){t=e.exports=n(830)(!1),t.push([e.i,".blog-detail-container[data-v-014f466e]{-ms-flex-positive:1;flex-grow:1;display:-ms-flexbox;display:flex;overflow-y:auto;-ms-flex-direction:column;flex-direction:column}.title-container[data-v-014f466e]{-ms-flex:0 0 48px;flex:0 0 48px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:#f9fafc;padding:0 50px;border-top:1px solid #eee;border-bottom:1px solid #eee}.title-container .title[data-v-014f466e]{font-size:22px;color:#4b595f;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.title-container ul[data-v-014f466e]{list-style:none;display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;margin:0 30px}.title-container .back[data-v-014f466e]{-ms-flex:0 0 65px;flex:0 0 65px;font-size:14px;color:#4b595f;margin-right:30px;cursor:pointer}.title-container .back img[data-v-014f466e]{display:inline-block;margin-right:10px;width:18px;height:12px;-o-object-fit:contain;object-fit:contain}.comment-container[data-v-014f466e]{-ms-flex-positive:1;flex-grow:1;overflow-y:auto;padding:0 50px}@media screen and (max-width:800px){.title-container[data-v-014f466e]{padding:0 15px;position:relative}.title-container .back[data-v-014f466e]{margin:0;position:absolute;right:15px}.title-container ul[data-v-014f466e]{display:none}.comment-container[data-v-014f466e]{padding:0 15px}}",""])},853:function(e,t,n){t=e.exports=n(830)(!1),t.push([e.i,".comment[data-v-21549840]{margin-top:30px;border-radius:4px;border:1px solid #eee}.comment-title[data-v-21549840]{height:48px;line-height:48px;background-color:#f9fafc;border-bottom:1px solid #eee;padding:0 30px}.comment-title div[data-v-21549840]{cursor:pointer;float:left}.comment-title div img[data-v-21549840]{float:left;width:30px;height:30px;margin-top:9px;border-radius:15px;margin-right:12px}.comment-title div span[data-v-21549840]{font-size:14px;color:#4b595f}.comment-title .time[data-v-21549840]{float:right;margin-right:20px;font-size:12px;color:#849aa4}.comment-body[data-v-21549840]{padding:15px;font-size:14px}",""])},856:function(e,t,n){t=e.exports=n(830)(!1),t.push([e.i,".add-comment-container[data-v-6c5ceaad]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border-radius:4px;border:1px solid #eee;margin:30px 0}.add-comment-container .tab-container[data-v-6c5ceaad]{padding:0 10px;border-bottom:1px solid #eee;background-color:#f9fafc;display:-ms-flexbox;display:flex}.add-comment-container .tab-container ul[data-v-6c5ceaad]{margin-top:8px;list-style:none;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;margin-right:10px}.add-comment-container .tab-container li[data-v-6c5ceaad]{padding:10px;font-size:14px;cursor:pointer;margin-bottom:-1px;color:#586069;-webkit-user-select:none;-ms-user-select:none;user-select:none}.add-comment-container .tab-container li.active[data-v-6c5ceaad]{color:#24292e;background-color:#fff;border-top-left-radius:4px;border-top-right-radius:4px;border-top:1px solid #eee;border-left:1px solid #eee;border-right:1px solid #eee}.add-comment-container .tab-container div[data-v-6c5ceaad]{-ms-flex-negative:0;flex-shrink:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-ms-user-select:none;user-select:none}.add-comment-container .tab-container div a[data-v-6c5ceaad]{color:#2196f3}.add-comment-container .tab-container div a[data-v-6c5ceaad]:hover{text-decoration:underline}.add-comment-container textarea[data-v-6c5ceaad]{margin:10px;border-radius:3px;padding:15px 30px 15px 15px;border:1px solid #eee;background-color:#fff;font-size:14px;color:#4b595f;outline:none}.add-comment-container textarea[data-v-6c5ceaad]:disabled{cursor:not-allowed}.add-comment-container .markdown-body[data-v-6c5ceaad]{margin:15px;min-height:107px}.add-comment-container .add-comment-btn[data-v-6c5ceaad]{cursor:pointer;-webkit-user-select:none;-ms-user-select:none;margin:0 15px 15px 0;border-radius:4px;float:right;background-color:#34d058;color:#fff;-ms-flex-item-align:end;align-self:flex-end;padding:8px 12px;font-size:14px;font-weight:600;line-height:20px;white-space:nowrap;vertical-align:middle;user-select:none;border:none;outline:none}.add-comment-container .add-comment-btn[data-v-6c5ceaad]:hover{background-color:#34c058}.add-comment-container .add-comment-btn[data-v-6c5ceaad]:disabled{background-color:#94d3a2;cursor:not-allowed}.width-match-parent-btn[data-v-6c5ceaad]{cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;margin:30px 0;height:50px;line-height:50px;text-align:center;border-radius:4px;font-size:16px;background-color:#eff7ff;color:#3593f2}.width-match-parent-btn[data-v-6c5ceaad]:hover{background-color:#3593f2;color:#fff}",""])},857:function(e,t,n){var o=n(849);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(831)("50e19376",o,!0,{})},861:function(e,t,n){var o=n(853);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(831)("38c97742",o,!0,{})},864:function(e,t,n){var o=n(856);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(831)("7fa02145",o,!0,{})},865:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDE4IDEyIj4NCiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8cGF0aCBkPSJNLTMtNmgyNHYyNEgtM3oiLz4NCiAgICAgICAgPHBhdGggZmlsbD0iIzRCNTk1RiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTggNUgzLjgzbDMuNTgtMy41OUw2IDAgMCA2bDYgNiAxLjQxLTEuNDFMMy44MyA3SDE4eiIvPg0KICAgIDwvZz4NCjwvc3ZnPg0K"},868:function(e,t,n){function o(e){n(864)}var i=n(66)(n(841),n(879),o,"data-v-6c5ceaad",null);e.exports=i.exports},869:function(e,t,n){function o(e){n(861)}var i=n(66)(n(842),n(876),o,"data-v-21549840",null);e.exports=i.exports},872:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.issue?o("div",{staticClass:"blog-detail-container"},[o("div",{staticClass:"title-container"},[o("span",{staticClass:"title"},[e._v(e._s(e.issue.title))]),e._v(" "),o("ul",e._l(e.issue.labels,function(t){return o("li",{key:t.id,staticClass:"tag tag-small",style:{backgroundColor:"#"+t.color},on:{click:function(n){return e.setActiveLabel(t)}}},[e._v(e._s(t.name)+"\n      ")])}),0),e._v(" "),o("span",{staticClass:"back",on:{click:e.back}},[o("img",{staticClass:"back-icon",attrs:{src:n(865)}}),e._v("返回\n    ")])]),e._v(" "),o("div",{ref:"commentContainer",staticClass:"comment-container bga-back-top"},[o("comment",{attrs:{comment:e.issue}}),e._v(" "),e._l(e.comments,function(e){return o("comment",{key:e.id,attrs:{comment:e}})}),e._v(" "),o("add-comment",{attrs:{commentsUrl:e.issue.comments_url},on:{addCommentSuccess:e.handleAddCommentSuccess}})],2)]):e._e()},staticRenderFns:[]}},876:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comment"},[n("div",{staticClass:"comment-title"},[n("div",{on:{click:function(t){return e.openGitHub()}}},[n("img",{attrs:{src:e.comment.user.avatar_url}}),e._v(" "),n("span",[e._v(e._s(e.comment.user.login))])]),e._v(" "),n("span",{staticClass:"time"},[e._v(e._s(e.$moment(e.comment.created_at).format("YYYY-MM-DD HH:mm")))])]),e._v(" "),n("article",{staticClass:"comment-body markdown-body",domProps:{innerHTML:e._s(e.renderedMarkdown)}})])},staticRenderFns:[]}},879:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-comment-container"},[n("div",{staticClass:"tab-container"},[n("ul",[n("li",{class:e.isWrite?"active":"",on:{click:function(t){e.isWrite=!0}}},[e._v("Write")]),e._v(" "),n("li",{class:e.isWrite?"":"active",on:{click:e.renderMarkdown}},[e._v("Preview")])]),e._v(" "),null==e.accessToken?n("div",[n("a",{attrs:{href:e.loginLink}},[e._v("Login")]),e._v(" with GitHub\n    ")]):e._e()]),e._v(" "),e.isWrite?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newComment,expression:"newComment"}],attrs:{disabled:null==e.accessToken,rows:"5",placeholder:"说点什么？「支持 MarkDown 语法」"},domProps:{value:e.newComment},on:{input:function(t){t.target.composing||(e.newComment=t.target.value)}}}):n("article",{staticClass:"markdown-body",domProps:{innerHTML:e._s(e.renderedMarkdown)}}),e._v(" "),n("button",{staticClass:"add-comment-btn",attrs:{disabled:e.commentBtnDisabled},on:{click:e.addComment}},[e._v("Comment\n  ")])])},staticRenderFns:[]}}});