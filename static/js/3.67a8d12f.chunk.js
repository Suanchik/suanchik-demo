(this.webpackJsonpsuanchik=this.webpackJsonpsuanchik||[]).push([[3],{303:function(e,a,s){e.exports={Dialogs:"Messenger_Dialogs__2sLEJ",messagelist:"Messenger_messagelist__39cRO",itemD:"Messenger_itemD__vkkcW",dialogMessage:"Messenger_dialogMessage__2_Vwk",img:"Messenger_img__1jjgU",dialog:"Messenger_dialog__kWiKW",item:"Messenger_item__aHh78",names:"Messenger_names__13KEh",active:"Messenger_active__RDj_G",dialogStyles:"Messenger_dialogStyles__18rWz",dialog2:"Messenger_dialog2__OBFf3",textareaButton:"Messenger_textareaButton__94N5s",showMessage:"Messenger_showMessage__HP9ru",lastmessage:"Messenger_lastmessage__1ZU2J",span:"Messenger_span__3cocT",mymessage:"Messenger_mymessage__jDiZP",curentDialog:"Messenger_curentDialog__3LUex",name:"Messenger_name__Gj85-"}},304:function(e,a,s){e.exports=s.p+"static/media/close.1175686f.svg"},305:function(e,a,s){"use strict";s.r(a);var t=s(13),n=s(10),i=s(133),m=s(134),l=s(43),g=s(30),r=s(0),c=s.n(r),o=s(303),d=s.n(o),u=s(304),_=s.n(u),f=s(34),M=s.n(f),E=function(e){return c.a.createElement("div",{className:d.a.itemD},c.a.createElement("div",{className:d.a.dialogMessage},e.messages.map((function(a){return c.a.createElement("div",{className:"dialog_container"},c.a.createElement("span",{className:"me"===a.author?d.a.mymessage:d.a.span},c.a.createElement("img",{src:a.author===e.name?e.img:M.a,alt:""})," ",a.message),c.a.createElement("span",{className:d.a.img,onClick:function(){return s=a.id,void(window.confirm("\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435?")&&e.deleteMessage(e.index,s));var s}},c.a.createElement("img",{src:_.a,alt:"delete"})))}))))},p=function(e){return c.a.createElement("div",{className:d.a.item},c.a.createElement("div",null,c.a.createElement("div",{className:d.a.dialogStyles},c.a.createElement("div",{className:d.a.names},e.dialogList),e.img)))},v=s(92),b=s(135),h=s(12),j=s(31),N=s(25),k=s(9),y=Object(j.a)(500),O=Object(b.a)({form:"messenger"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",{className:d.a.textareaButton},c.a.createElement(v.a,{component:h.c,placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u043d\u0438\u0435 ...",cols:"70",name:"messageBody",validate:[j.b,y]}),c.a.createElement("button",{disabled:!e.dialogId},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))})),L=Object(k.f)((function(e){var a=Object(r.useState)(null),s=Object(g.a)(a,2),t=s[0],n=s[1],i=e.match.params.dialogId;Object(r.useEffect)((function(){if(i){var a=Object(l.a)(e.messagesList).filter((function(e){return e.id===i}));n({dialogname:a[0].dialogname,img:a[0].img})}else{Object(l.a)(e.messagesList).filter((function(e){return e.id===i}));n({dialogname:null,img:M.a})}}),[]);var m=e.messagesList,o=e.messagesList.map((function(e,a){return c.a.createElement(N.b,{to:"/Messenger/"+e.id,onClick:function(){return function(e){n({dialogname:e.dialogname,img:e.img})}(e)},activeClassName:d.a.active},c.a.createElement(p,{key:a,id:e.id,dialogList:e.dialogname,img:c.a.createElement("img",{src:e.img?e.img:M.a})}))})),u=function(a){e.addMessageC({id:5*Math.random(),message:a.messageBody,author:"me"},i)};return c.a.createElement("div",{className:d.a.Dialogs},c.a.createElement("span",{style:{display:"inline-block",backgroundColor:"white",boxShadow:"0 0 0 0.5px rgb(0,0,0, 0.5)",marginRight:"-5px"}},c.a.createElement("div",{className:d.a.messagelist},o)),c.a.createElement("div",{className:d.a.dialog},t?c.a.createElement("div",{className:d.a.curentDialog},c.a.createElement("div",{className:d.a.name},c.a.createElement("span",{style:{opacity:"0.7",fontWeight:"normal"}},null===t.dialogname?"\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043d\u0438\u043a\u0430":"\u0432\u0430\u0448\u0430 \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0430 \u0441"," "),t.dialogname),c.a.createElement("img",{src:t.img,alt:"ava"})):null,m.map((function(a,s){return c.a.createElement("div",{className:d.a.dialog2},c.a.createElement(k.b,{path:"/Messenger/"+a.id,render:function(){return c.a.createElement(E,{name:a.dialogname,img:a.img,key:s,index:s,id:a.id,messages:a.dialog,deleteMessage:e.deleteMessage})}}),c.a.createElement(O,{dialogId:i,onSubmit:u}))}))))}));a.default=Object(n.compose)(Object(t.b)((function(e){return{profile:e.ProfilePage.profile,newMLetter:e.MessagesPage.newMLetter,dispatch:e.MessagesPage.dispatch,dialog:e.MessagesPage.dialog,messagesList:e.MessagesPage.messagesList}}),(function(e){return{addMessageC:function(a,s){e(Object(m.a)(a,s))},deleteMessage:function(a,s){e(Object(m.c)(a,s))}}})),i.a)(L)}}]);
//# sourceMappingURL=3.67a8d12f.chunk.js.map