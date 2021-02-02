(this.webpackJsonpsimulationfactory=this.webpackJsonpsimulationfactory||[]).push([[0],{104:function(e,a){},106:function(e){e.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#fff","green":"rgba(57, 145, 67, 1)"},"background":{"paper":"#fff","default":"#fafafa"},"primary":{"light":"rgba(107, 194, 112, 1)","main":"rgba(57, 145, 67, 1)","dark":"rgba(0, 98, 24, 1)","contrastText":"#fff"},"secondary":{"light":"rgba(99, 166, 94, 1)","main":"rgba(51, 119, 51, 1)","dark":"rgba(0, 74, 8, 1)","contrastText":"#fff"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}}}')},112:function(e){e.exports=JSON.parse('{"$id":"FrameModification","type":"object","required":["frame_id","user"],"properties":{"user":{"$ref":"User"},"frame_id":{"type":"string"},"prompt":{"type":"string"},"default_action":{"type":"string"},"responses":{"type":"array","uniqueItems":true,"items":{"type":"string"}},"rounds":{"type":"array","uniqueItems":true,"items":{"type":"number"}},"effects":{"type":"array","uniqueItems":true,"items":{"$ref":"Effect"}}},"additionalProperties":false}')},113:function(e){e.exports=JSON.parse('{"$id":"User","type":"object","required":["username","password"],"properties":{"username":{"type":"string"},"password":{"type":"string"}},"additionalProperties":false}')},114:function(e){e.exports=JSON.parse('{"$id":"Effect","type":"object","required":["resource","operation","effects"],"properties":{"resource":{"type":"string"},"operation":{"type":"string"},"effects":{"type":"array","items":{"type":"array","items":{"type":"number"}}}},"additionalProperties":false}')},115:function(e){e.exports=JSON.parse('{"$id":"IdRequest","type":"object","required":["id","user"],"properties":{"id":{"type":"string"},"user":{"$ref":"User"}},"additionalProperties":false}')},116:function(e){e.exports=JSON.parse('{"$id":"IdResponse","type":"object","required":["id"],"properties":{"id":{"type":"string"}},"additionalProperties":false}')},117:function(e){e.exports=JSON.parse('{"$id":"State","type":"object","required":["user_waiting"],"properties":{"turn_number":{"type":"number","mimimum":"0"},"response_deadline":{"type":"string","format":"date-time"},"resources":{"type":"object","patternProperties":{"^.*$":{"type":"number"}}},"resource_deltas":{"type":"object","patternProperties":{"^.*$":{"type":"number"}}},"active_frame":{"type":"object","required":["prompt","responses"],"properties":{"prompt":{"type":"string"},"responses":{"type":"array","items":{"type":"string"}}}},"user_waiting":{"type":"boolean"}},"additionalProperties":false}')},118:function(e){e.exports=JSON.parse('{"$id":"UserResponse","type":"object","required":["user","response","simulation_id"],"properties":{"user":{"$ref":"User"},"response":{"type":"string"},"simulation_id":{"type":"string"}},"additionalProperties":false}')},119:function(e){e.exports=JSON.parse('{"$id":"SimulationModification","type":"object","required":["simulation_id","user"],"properties":{"user":{"$ref":"User"},"simulation_id":{"type":"string"},"name":{"type":"string"},"response_timeout":{"type":"number","minimum":0},"resources":{"type":"object","patternProperties":{"^.*$":{"type":"number"}}}},"additionalProperties":false}')},144:function(e,a,t){},189:function(e,a){},190:function(e,a){},191:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),l=t.n(i),o=(t(144),t(11)),c=t(34),s=t(15),u=t(14),m=t(27),p=t(105),d=t(16),f=new Map;function E(e,a){if(void 0===e)throw new Error("page in RouteBuilder.RegisterRoute has not been supplied");if(void 0===a)throw new Error("route in RouteBuilder.RegisterRoute has not been supplied");for(var t=arguments.length,n=new Array(t>2?t-2:0),r=2;r<t;r++)n[r-2]=arguments[r];var i,l=[a].concat(n),o=Object(p.a)(l);try{for(o.s();!(i=o.n()).done;){var c=i.value;if(f.has(c))throw new Error("RouteBuilder already contains route "+c);f.set(c,e)}}catch(s){o.e(s)}finally{o.f()}}function h(){var e=[];return f.forEach((function(a,t){return e.push(r.a.createElement(d.a,{exact:!0,path:t},r.a.createElement(a,null)))})),r.a.createElement(d.c,null,e)}var y=t(235),b=t(236),g=t(237),v=t(50),S=t(230),w=t(194),O=t(231),k=t(238),j=t(239),N=t(75),C=t(225),x=t(257),R=t(123),_=t(106),P=200;var T=Object(x.a)(Object(R.a)(_)),A=function(){return Object(C.a)((function(e){return{root:{flexGrow:1,display:"flex"},title:{color:e.palette.primary.main},card:{},drawer:Object(N.a)({},e.breakpoints.up("sm"),{width:P,flexShrink:0}),drawerPaper:{width:P},appBar:Object(N.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(P,"px)"),marginLeft:P}),menuButton:Object(N.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),blue:{color:"blue"},toolbar:e.mixins.toolbar,content:{flexGrow:1,padding:e.spacing(3)},noDecoration:{textDecoration:"none"},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}}}))()},B=t(110),F=t.n(B),J=t(255),I=t(256),M=t(31),U=t(229),D=t(232),L=t(233),$=t(234),z=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={open:!1},n.Styles=e.Styles,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderDrawer(),this.renderTopbar())}},{key:"renderDrawer",value:function(){var e=this;return r.a.createElement("nav",{className:this.Styles.drawer,"aria-label":"mailbox folders"},r.a.createElement(J.a,{smUp:!0,implementation:"css"},r.a.createElement(I.a,{variant:"temporary",anchor:"left",open:this.state.open,onClose:function(){return e.setState({open:!1})},onOpen:function(){return e.setState({open:!0})},Styles:{paper:this.Styles.drawerPaper},ModalProps:{keepMounted:!0}},this.renderDrawerContents())),r.a.createElement(J.a,{xsDown:!0,implementation:"css"},r.a.createElement(M.a,{classes:{paper:this.Styles.drawerPaper},variant:"permanent"},this.renderDrawerContents())))}},{key:"renderDrawerContents",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:this.Styles.toolbar}),r.a.createElement(U.a,null),r.a.createElement(S.a,null,r.a.createElement(w.a,null,r.a.createElement(m.b,{to:"/home"},"Home")),r.a.createElement(w.a,null,r.a.createElement(m.b,{to:"/factory"},"Create Simulation")),r.a.createElement(w.a,null,r.a.createElement(m.b,{to:"/player"},"Join Simulation")),r.a.createElement(w.a,null,r.a.createElement(m.b,{to:"/loginsignup"},"Login/SignUp")),r.a.createElement(w.a,null,r.a.createElement(m.b,{to:"/account"},"Your Account")),r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"My Simulations"})),r.a.createElement(w.a,null,r.a.createElement(m.b,{to:"/about"},"About"))))}},{key:"renderTopbar",value:function(){var e=this;return r.a.createElement(D.a,{position:"fixed",className:this.Styles.appBar},r.a.createElement(L.a,null,r.a.createElement($.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:function(){return e.setState({open:!0})},className:this.Styles.menuButton},r.a.createElement(F.a,null)),r.a.createElement(v.a,{variant:"h6",noWrap:!0},this.props.TopbarMessage),this.props.children))}}]),t}(r.a.Component);function q(e){var a=A();return r.a.createElement("div",{className:a.root},r.a.createElement(z,{TopbarMessage:"York College of Pennsylvania Simulation Tool",Styles:a}),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(y.a,{container:!0,spacing:3},r.a.createElement(y.a,{item:!0,xs:12,sm:6},r.a.createElement(b.a,{className:a.card},r.a.createElement(g.a,null,r.a.createElement(v.a,{className:a.title,variant:"h2"},"Simulation Factory"),r.a.createElement(S.a,null,r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"Create your simulation"})),r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"Run your simulation real-time or asyncronous"})),r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"Get analytics and feedback from participants"})),r.a.createElement(w.a,null,r.a.createElement(k.a,null,r.a.createElement(m.b,{to:"/factory",className:a.noDecoration},r.a.createElement(j.a,{color:"primary",variant:"contained",size:"medium"},"Create Simulation")))))))),r.a.createElement(y.a,{item:!0,xs:12,sm:6},r.a.createElement(b.a,{className:a.card},r.a.createElement(g.a,null,r.a.createElement(v.a,{className:a.title,variant:"h2"},"Join Simulation"),r.a.createElement(S.a,null,r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"Participate in Simulation"})),r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"Join with partner or run by yourself"})),r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"Contribute to research studies"})),r.a.createElement(w.a,null,r.a.createElement(k.a,null,r.a.createElement(m.b,{to:"/player",className:a.noDecoration},r.a.createElement(j.a,{variant:"contained",color:"primary",size:"medium"},"Join Simulation")))))))))))}E(q,"/","/home","/Home","/Homepage","/homepage","/HomePage","/homePage");var V=t(58),G=t(23),W=t(111),H=new(t.n(W).a)({coerceTypes:!0}),Y=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,null,[{key:"FromJSON",value:function(e){var a=JSON.parse(e);return this.Validate(a)}},{key:"Validate",value:function(e){if(H.validate(this.schema,e))return e;throw new Error("JavaScript object failed validation against schema ".concat(this.name,".\n                             Error: ").concat(JSON.stringify(H.errors),".\n                             Object: ").concat(JSON.stringify(e)))}},{key:"RegisterSchema",value:function(){H.addSchema(this.schema)}}]),e}();Y.schema={};var K=t(112),Q=t(113),X=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return t}(Y);X.schema=Q,Y.RegisterSchema.call(X);var Z=t(114),ee=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return t}(Y);ee.schema=Z,Y.RegisterSchema.call(ee);var ae=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return t}(Y);ae.schema=K,Y.RegisterSchema.call(ae);var te=t(251),ne=t(253),re=t(242),ie=t(243),le=t(244),oe=t(245),ce=t(246),se=t(247),ue=t(125),me=t(248),pe=t(258),de=t(252);var fe=function(e){var a=e.value,t=e.index,n=e.children,i=e.other;return r.a.createElement("div",i,a===t&&r.a.createElement(de.a,{p:3},n))},Ee=t(18),he=t.n(Ee),ye=t(38),be=t(115),ge=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return t}(Y);ge.schema=be,Y.RegisterSchema.call(ge);var ve=t(116),Se=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return t}(Y);Se.schema=ve,Y.RegisterSchema.call(Se);var we=t(117),Oe=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,null,[{key:"FromJSON",value:function(e){return Y.FromJSON.call(this,e)}}]),t}(Y);Oe.schema=we,Y.RegisterSchema.call(Oe);var ke=t(118),je=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return t}(Y);je.schema=ke,Y.RegisterSchema.call(je);var Ne=t(119),Ce=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return t}(Y);Ce.schema=Ne,Y.RegisterSchema.call(Ce);var xe=Object({NODE_ENV:"production",PUBLIC_URL:"/CS481.101_Fall20",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SIMULATION_FACTORY_URL;function Re(){return(Re=Object(ye.a)(he.a.mark((function e(a,t){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ie(a,t,"BeginSim",ge);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _e(){return(_e=Object(ye.a)(he.a.mark((function e(a,t){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ie(a,t,"GetSimState",ge,Oe);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Pe(){return(Pe=Object(ye.a)(he.a.mark((function e(a,t){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ie(a,t,"SubmitResponse",je);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Te(){return(Te=Object(ye.a)(he.a.mark((function e(a,t){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ie(a,t,"SimulationInitialization",X,Se);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ae(e,a){return Be.apply(this,arguments)}function Be(){return(Be=Object(ye.a)(he.a.mark((function e(a,t){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ie(a,t,"FrameInitialization",ge,Se);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fe(){return(Fe=Object(ye.a)(he.a.mark((function e(a,t){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ie(a,t,"FrameModification",ae);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Je(){return(Je=Object(ye.a)(he.a.mark((function e(a,t){return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ie(a,t,"SimulationModification",Ce);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ie(e,a,t,n){return Me.apply(this,arguments)}function Me(){return(Me=Object(ye.a)(he.a.mark((function e(a,t,n,r){var i,l,o,c,s=arguments;return he.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=s.length>4&&void 0!==s[4]?s[4]:null,r.Validate(a),l="".concat(xe,"/").concat(n,".php"),o={method:"POST",headers:new Headers,body:JSON.stringify(a)},e.next=6,fetch(l,o);case 6:if(!(c=e.sent).ok){e.next=21;break}if(null!=i){e.next=12;break}t(),e.next=19;break;case 12:return e.t0=t,e.t1=i,e.next=16,c.text();case 16:e.t2=e.sent,e.t3=e.t1.FromJSON.call(e.t1,e.t2),(0,e.t0)(e.t3);case 19:e.next=22;break;case 21:throw new Error("Error ".concat(c.status,": ").concat(c.statusText));case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ue=t(121),De=t.n(Ue),Le=t(124),$e=t(86);function ze(e){var a=Object(n.useCallback)((function(a){e.frame.effects=[],a.forEach((function(a){var t=new FileReader;t.onabort=function(){return console.log("file reading was aborted")},t.onerror=function(){return console.log("file reading has failed")},t.onload=function(a){var t=a.target.result,n=$e.read(t,{type:"binary"});n.SheetNames.forEach((function(a){var t=n.Sheets[a],r=$e.utils.sheet_to_json(t,{header:1,blankrows:!1});e.frame.effects.push({effects:r,operation:"*",resource:a}),console.log("File Data for workesheet "+a+": "+JSON.stringify(r))})),e.commit(e.frame)},t.readAsBinaryString(a)}))}),[]),t=Object(Le.a)({onDrop:a}),i=t.getRootProps,l=t.getInputProps;return r.a.createElement("div",i(),r.a.createElement("input",l()),r.a.createElement("p",null,"You may drag and drop a file here, or instead click to import the file."))}function qe(e){var a=r.a.useState([]),t=Object(G.a)(a,2),n=t[0],i=t[1];function l(e){var a=qe();a.responses.push(""),i(n.concat(r.a.createElement(te.a,{id:"response",label:"Response",variant:"filled",key:n.length,onChange:function(e){a.responses[n.length]=e.target.value;try{Ve(a),O("")}catch(t){console.log(t),O("One of the responses is invalid. Do you have duplicates?")}}})))}var o=A(),c=r.a.useState(0),s=Object(G.a)(c,2),u=s[0],m=s[1],p=r.a.useState(null),d=Object(G.a)(p,2),f=d[0],E=d[1],h=r.a.useState(""),S=Object(G.a)(h,2),w=S[0],O=S[1],N=r.a.useState([]),C=Object(G.a)(N,2),x=C[0],R=C[1],_=r.a.useState({resources:{},response_timeout:5e5}),P=Object(G.a)(_,2),T=P[0],B=(P[1],r.a.useState("")),F=Object(G.a)(B,2),J=F[0],I=F[1],M=r.a.useState(""),U=Object(G.a)(M,2),D=U[0],L=U[1],$=r.a.useState(0),q=Object(G.a)($,2),W=q[0],H=(q[1],r.a.useState(!1)),Y=Object(G.a)(H,2),K=Y[0],Q=Y[1],X=r.a.useState(!1),Z=Object(G.a)(X,2),ee=Z[0],de=Z[1],Ee=r.a.useState(!1),he=Object(G.a)(Ee,2),ye=he[0],be=he[1],ge=r.a.useState(""),ve=Object(G.a)(ge,2),Se=ve[0],we=ve[1],Oe=r.a.useState({username:"",password:""}),ke=Object(G.a)(Oe,2),je=ke[0],Ne=ke[1];function Ce(e){E(e.currentTarget)}function xe(){E(null)}function Re(e){Q(!0)}function _e(e){Q(!1)}function Pe(e){de(!0),E(null)}function Be(e){de(!1)}function Ie(e){be(!0),E(null)}function Me(e,a){return{key:e,id:e,type:a,default_action:"",responses:[],rounds:[],effects:[],firstRound:"",lastRound:""}}function Ue(){Ae({user:je,id:Se},(function(e){R([].concat(Object(V.a)(x),[Me(e.id,0)]))}))}function Le(){Ae({user:je,id:Se},(function(e){R([].concat(Object(V.a)(x),[Me(e.id,1)]))}))}function $e(){Ae({user:je,id:Se},(function(e){R([].concat(Object(V.a)(x),[Me(e.id,2)]))}))}function qe(){for(var e=0;e<x.length&&x.length>0;e++)if(x[e].key==u)return x[e]}function Ve(e){!function(e,a){Fe.apply(this,arguments)}(ae.Validate({user:je,frame_id:e.id,default_action:e.default_action,responses:e.responses,rounds:e.rounds,effects:e.effects,prompt:e.prompt}),(function(){}))}function Ge(){!function(e,a){Je.apply(this,arguments)}({user:je,simulation_id:Se,resources:T.resources,response_timeout:T.response_timeout},(function(){}))}function We(e,a){var t=qe();if(a?t.firstRound=e:t.lastRound=e,t.rounds=[],""!=t.firstRound&&""!=t.lastRound)for(var n=parseInt(t.firstRound),r=parseInt(t.lastRound);n<=r;)t.rounds.push(n),n++;Ve(t)}function He(e){if(e.stopPropagation(),1!==x.length){var a=parseInt(e.target.id),t=0,n=x.filter((function(e,n){return e.id===a&&(t=n),e.id!==a})),r=parseInt(W);r===a&&(r=0===t?x[t+1].id:x[t-1].id),setFrameValue(r),setFrameList(n)}}function Ye(){return r.a.createElement(b.a,{className:o.root},r.a.createElement(g.a,null,r.a.createElement(v.a,null,"Enter User Prompt:")),r.a.createElement(k.a,null,r.a.createElement("form",null,r.a.createElement(te.a,{id:"prompt",label:"Prompt",variant:"filled",multiline:!0,onChange:function(e){var a=qe();a.prompt=e.target.value,Ve(a)}})),r.a.createElement(y.a,null,r.a.createElement("div",null,r.a.createElement(j.a,{onClick:l},"Add Response")),r.a.createElement("div",null,n)),r.a.createElement(y.a,null,r.a.createElement(te.a,{id:"firstRound",label:"First Round",type:"number",variant:"filled",onChange:function(e){return We(e.target.value,!0)}}),r.a.createElement(te.a,{id:"lastRound",label:"Last Round",type:"number",variant:"filled",onChange:function(e){return We(e.target.value,!1)}})),r.a.createElement(y.a,null,r.a.createElement(v.a,{color:"error"},w))))}function Ke(){return r.a.createElement("div",{className:o.root},r.a.createElement(ne.a,{orientation:"vertical",variant:"scrollable",value:u,onChange:function(e,a){return m(a)},className:o.tabs},x.map((function(e){return r.a.createElement(re.a,{key:e.key.toString(),value:e.id,label:"Node "+e.id,icon:r.a.createElement(De.a,{id:e.id,onClick:He}),className:"mytab"})}))),x.map((function(e){return r.a.createElement(fe,{value:u,index:e.key},function(e){switch(e.type){default:case 1:case 2:return Ye()}}(e))})))}function Qe(){return r.a.createElement(ie.a,{open:ye,onClose:function(){return be(!1)},"aria-labelledby":"form-dialog-title"},r.a.createElement(le.a,{id:"form-dialog-title"},"Add a Resource"),r.a.createElement(oe.a,null,r.a.createElement(ce.a,null,"Enter the name of the resource"),r.a.createElement(te.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name of resource to add",fullWidth:!0,onChange:function(e){I(e.target.value)}}),r.a.createElement(ce.a,null,"Enter the starting amount of the resource:"),r.a.createElement(te.a,{autoFocus:!0,margin:"dense",id:"amount",label:"Starting amount",type:"number",fullWidth:!0,onChange:function(e){L(e.target.value)}})),r.a.createElement(se.a,null,r.a.createElement(j.a,{onClick:function(){return be(!1)},color:"primary"},"Cancel"),r.a.createElement(j.a,{color:"primary",onClick:function(){be(!1),""!=J&&""!=D&&(T.resources[J]=D),Ge()}},"Add Resource")))}return""==Se?r.a.createElement("main",{className:o.content},r.a.createElement("div",{className:o.toolbar})," ",r.a.createElement(b.a,{className:o.root},r.a.createElement(g.a,null,r.a.createElement(te.a,{id:"username_field",label:"Username",variant:"filled",onChange:function(e){return Ne({username:e.target.value,password:je.password})}}),r.a.createElement(te.a,{id:"password_field",label:"Password",variant:"filled",onChange:function(e){return Ne({password:e.target.value,username:je.username})}}))),r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement(j.a,{variant:"contained",color:"primary",size:"medium",onClick:function(){return function(e,a){return Te.apply(this,arguments)}(je,(function(e){return we(e.id)}))}},"Begin")))):r.a.createElement("div",{className:o.root},r.a.createElement("script",{src:"xlsx.full.min.js"}),r.a.createElement(z,{TopbarMessage:"Simulation Builder",Styles:o},r.a.createElement(j.a,{className:"SimMenuButton","aria-controls":"sim-menu","aria-haspopup":"true",onClick:Ce},"Simulation Settings"),r.a.createElement(ue.a,{id:"simple-menu",anchorEl:f,keepMounted:!0,open:Boolean(f),onClose:xe},r.a.createElement(me.a,{onClick:Re},"Import Lookup Table"),r.a.createElement(ie.a,{onClose:_e,"aria-labeledby":"lookup-table-dialog",open:K},r.a.createElement(le.a,{id:"lookup-table-title",onClose:_e},"Lookup Table Entry"),r.a.createElement(oe.a,{dividers:!0},r.a.createElement("div",{style:{width:"max-content"}},r.a.createElement(ze,{frame:qe(),commit:Ve})))),r.a.createElement(me.a,{onClick:Pe},"Add Player"),r.a.createElement(ie.a,{open:ee,onClose:Be,"aria-labelledby":"form-dialog-title"},r.a.createElement(le.a,{id:"form-dialog-title"},"Add a Player"),r.a.createElement(oe.a,null,r.a.createElement(ce.a,null,"Enter the name of the player."),r.a.createElement(te.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name of Player to add",fullWidth:!0})),r.a.createElement(se.a,null,r.a.createElement(j.a,{onClick:Be,color:"primary"},"Cancel"),r.a.createElement(j.a,{onClick:Be,color:"primary"},"Add Player"))),r.a.createElement(me.a,{onClick:Ie},"Add Resource"),Qe())),r.a.createElement("main",{className:o.content},r.a.createElement("div",{className:o.toolbar})," ",r.a.createElement(y.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(y.a,{container:!0,spacing:1,justify:"center"},r.a.createElement(y.a,{item:!0,xs:12,sm:1},r.a.createElement(j.a,{variant:"contained",color:"primary",size:"medium",onClick:$e},"Add event")),r.a.createElement(y.a,{item:!0,xs:12,sm:1},r.a.createElement(j.a,{variant:"contained",color:"primary",size:"medium",onClick:Ue},"Add prompt")),r.a.createElement(y.a,{item:!0,xs:12,sm:1},r.a.createElement(j.a,{variant:"contained",color:"primary",size:"medium",onClick:Le},"Add response")),r.a.createElement(y.a,{item:!0,xs:12,sm:1},r.a.createElement(pe.a,{title:"Participants need this id to run your simulation. Save it somewhere you won't lose it!"},r.a.createElement("div",null,"Your simulation id is ",Se)))),r.a.createElement(y.a,{item:!0,xs:12,sm:6},Ke()))))}E(qe,"/factory","/Factory","/factoryPage","/FactoryPage");var Ve=t(240),Ge=t(259),We=t(249),He=t(254);function Ye(e,a){for(var t=e.split(".");t.length>1;)a=a[t[0]],t=t.slice(1);return a[t[0]]}var Ke=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={radioValue:!1,logged_in:!1,simState:{user_waiting:!0}},n}return Object(c.a)(t,[{key:"render",value:function(){return this.state.logged_in?this.renderPlayer():this.renderLogin()}},{key:"getUser",value:function(){return{username:this.state.username,password:this.state.password}}},{key:"getSimulationInstance",value:function(){return{user:this.getUser(),id:this.state.simulation_id}}},{key:"beginSim",value:function(){var e=this;!function(e,a){Re.apply(this,arguments)}(this.getSimulationInstance(),(function(){e.setState({logged_in:!0}),e.setSimState()}))}},{key:"setSimState",value:function(){var e=this;!function(e,a){_e.apply(this,arguments)}(this.getSimulationInstance(),(function(a){return e.setState({simState:a})}))}},{key:"renderLogin",value:function(){var e=this,a=this.props.Styles;return r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar})," ",r.a.createElement(b.a,{className:a.root},r.a.createElement(g.a,null,r.a.createElement(te.a,{id:"username_field",label:"Username",variant:"filled",onChange:function(a){return e.setState({username:a.target.value})}}),r.a.createElement(te.a,{id:"password_field",label:"Password",variant:"filled",onChange:function(a){return e.setState({password:a.target.value})}}),r.a.createElement(te.a,{id:"simulation_id_field",label:"Simulation Id",variant:"filled",onChange:function(a){return e.setState({simulation_id:a.target.value})}}))),r.a.createElement(b.a,null,r.a.createElement(g.a,null,this.renderSubmitButton())))}},{key:"renderPlayer",value:function(){var e=this.props.Styles;return r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar})," ",r.a.createElement(b.a,{className:e.root},r.a.createElement(g.a,null,r.a.createElement(v.a,{variant:"h3",component:"p"},this.renderPrompt()))),r.a.createElement(b.a,{className:e.root},r.a.createElement(g.a,null,this.renderResponses(e))),r.a.createElement(b.a,null,r.a.createElement(g.a,null,this.renderSubmitButton())))}},{key:"renderResponses",value:function(){var e=this;return r.a.createElement(Ve.a,{component:"fieldset"},r.a.createElement(Ge.a,{"aria-label":"options",name:"options1",value:this.state.radioValue,onChange:function(a){e.setState({radioValue:a.target.value})}},this.renderResponseButtons()))}},{key:"renderResponseButtons",value:function(){var e=this;if(!this.state.simState.user_waiting)return this.state.simState.active_frame.responses.map((function(a){return r.a.createElement(We.a,{value:a,control:r.a.createElement(He.a,null),label:a,checked:e.state.radioValue===a})}))}},{key:"renderSubmitButton",value:function(){var e=this;return this.state.logged_in?this.state.simState.user_waiting?r.a.createElement(j.a,{variant:"contained",color:"primary",size:"medium",onClick:function(){return e.setSimState()}}," ","Refresh"):r.a.createElement(j.a,{variant:"contained",color:"primary",size:"medium",onClick:function(){return e.submitResponse()}}," ","Submit"):r.a.createElement(j.a,{variant:"contained",color:"primary",size:"medium",onClick:function(){return e.beginSim()}}," ","Begin")}},{key:"renderPrompt",value:function(){return this.state.simState.user_waiting?"Waiting...":function(e,a){var t=Object(V.a)(e.matchAll(/\$\{(.*?)\}/g)),n=e;for(var r in t){var i=t[r],l=Ye(i[1],a);n=n.replaceAll(i[0],l)}return n}(this.state.simState.active_frame.prompt,this.state.simState)}},{key:"submitResponse",value:function(){var e=this;this.state.radioValue&&function(e,a){Pe.apply(this,arguments)}({user:this.getUser(),response:this.state.radioValue,simulation_id:this.state.simulation_id},(function(){return e.setState({radioValue:!1,simState:{user_waiting:!0}})}))}}]),t}(r.a.Component);function Qe(){var e=A();return r.a.createElement("div",{className:e.root},r.a.createElement(z,{TopbarMessage:"Simulation Player",Styles:e}),r.a.createElement(Ke,{Styles:e})," ")}E(Qe,"/player","/playerpage","/Player","/Playerpage","/playerPage");function Xe(){var e=A();return r.a.createElement("div",{className:e.root},r.a.createElement(z,{TopbarMessage:"Login/Signup!",Styles:e}),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(y.a,{container:!0,spacing:3},r.a.createElement(y.a,{item:!0,xs:12,sm:6},r.a.createElement(b.a,{className:e.card},r.a.createElement(g.a,null,r.a.createElement(v.a,{className:e.title,variant:"h2"},"Login or Signup"),r.a.createElement(S.a,null,r.a.createElement(w.a,null,r.a.createElement(te.a,{id:"outlined-login-user-id",label:"User ID",variant:"outlined"})),r.a.createElement(w.a,null,r.a.createElement(te.a,{id:"outlined-login-user-password",label:"Password",variant:"outlined"})),r.a.createElement(w.a,null,r.a.createElement(j.a,{variant:"contained",color:"primary",size:"medium"},"Submit")),r.a.createElement(w.a,null,r.a.createElement(j.a,{variant:"contained",color:"primary",size:"medium"},"Signup")))))))))}E(Xe,"/loginsignup","/Loginsignuppage","LoginSignUpPage","/loginsignupPage");function Ze(){var e=A();return r.a.createElement("div",{className:e.root},r.a.createElement(z,{TopbarMessage:"My Account",Styles:e}),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(y.a,{container:!0,spacing:3},r.a.createElement(y.a,{item:!0,xs:12,sm:6},r.a.createElement(b.a,{className:e.card},r.a.createElement(g.a,null,r.a.createElement(v.a,{className:e.title,variant:"h2"},"Account Info"),r.a.createElement(S.a,null,r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"User ID: "}),r.a.createElement(O.a,{primary:" 123456789 "})),r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"Email: "}),r.a.createElement(O.a,{primary:" thisperson@companydomain.com "})),r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"Change Email: "}),r.a.createElement(te.a,{id:"outlined-account-new-email",label:"New Email",variant:"outlined"})),r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"Password: "}),r.a.createElement(te.a,{id:"outlined-account-password",label:"Password",variant:"outlined"})),r.a.createElement(w.a,null,r.a.createElement(j.a,{variant:"contained",color:"primary",size:"medium"},"Submit")))))),r.a.createElement(y.a,{item:!0,xs:12,sm:6},r.a.createElement(b.a,{className:e.card},r.a.createElement(g.a,null,r.a.createElement(v.a,{className:e.title,variant:"h2"},"Change Password"),r.a.createElement(S.a,null,r.a.createElement(w.a,null,r.a.createElement(O.a,null,"To change the password you must")),r.a.createElement(w.a,null,r.a.createElement(O.a,null,"type in the original password.")),r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"Original: "}),r.a.createElement(te.a,{id:"outlined-account-password-original",label:"Original Password",variant:"outlined"})),r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"New Password: "}),r.a.createElement(te.a,{id:"outlined-account-password-new",label:"New Password",variant:"outlined"})),r.a.createElement(w.a,null,r.a.createElement(j.a,{variant:"contained",color:"primary",size:"medium"},"Submit")))))))))}E(Ze,"/account","/Accountpage","/AccountPage","/accountpage");function ea(){var e=A();return r.a.createElement("div",{className:e.root},r.a.createElement(z,{TopbarMessage:"About",Styles:e}),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(y.a,{container:!0,spacing:3},r.a.createElement(y.a,{item:!0,xs:12,sm:6},r.a.createElement(b.a,{className:e.card},r.a.createElement(g.a,null,r.a.createElement(v.a,{className:e.title,variant:"h2"},"Back-End"),r.a.createElement(S.a,null,r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"Brooke Tingley"}),r.a.createElement(O.a,null,r.a.createElement("a",{href:"https://github.com/btingley"},"Github"))),r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"Rob Doster"}),r.a.createElement(O.a,null,r.a.createElement("a",{href:"https://github.com/rdoster13"},"Github"))),r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"Ralph Greaves"}),r.a.createElement(O.a,null,r.a.createElement("a",{href:"https://github.com/regreaves"},"Github"))))))),r.a.createElement(y.a,{item:!0,xs:12,sm:6},r.a.createElement(b.a,{className:e.card},r.a.createElement(g.a,null,r.a.createElement(v.a,{className:e.title,variant:"h2"},"Front-End"),r.a.createElement(S.a,null,r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"Alex Louderback"}),r.a.createElement(O.a,null,r.a.createElement("a",{href:"https://github.com/alouderback"},"Github")),r.a.createElement(O.a,null,r.a.createElement("a",{href:"https://www.linkedin.com/in/alex-louderback-a2a599149/"},"Linkedin"))),r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"Cayden Reynolds"}),r.a.createElement(O.a,null,r.a.createElement("a",{href:"https://github.com/caydenreynolds"},"Github"))),r.a.createElement(w.a,null,r.a.createElement(O.a,{primary:"Brandon Miller"}),r.a.createElement(O.a,null,r.a.createElement("a",{href:"https://github.com/ScratchnSniff0"},"Github")),r.a.createElement(O.a,null,r.a.createElement("a",{href:"https://www.linkedin.com/in/brandon-m-miller"},"Linkedin"))))))),r.a.createElement(y.a,{item:!0,xs:12,sm:6},r.a.createElement(b.a,{className:e.card},r.a.createElement(g.a,null,r.a.createElement(v.a,{className:e.title,variant:"h2"},"About"),r.a.createElement(v.a,{variant:"h2"},"Made at York College of Pennsylvania by very hard working students.")))))))}E(ea,"/about","/aboot","/About");var aa=t(250),ta=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(aa.a,{theme:T},r.a.createElement(m.a,null,r.a.createElement(h,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ta,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[191,1,2]]]);
//# sourceMappingURL=main.1f450b97.chunk.js.map