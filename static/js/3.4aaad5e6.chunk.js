(this.webpackJsonpsuanchik=this.webpackJsonpsuanchik||[]).push([[3],{307:function(e,a,s){e.exports={Dialogs:"Messenger_Dialogs__tsgjK",messagelist:"Messenger_messagelist__2va0j",dialogMessage:"Messenger_dialogMessage__YBNIe",dialog:"Messenger_dialog__2LLNG",item:"Messenger_item__1qLFf",names:"Messenger_names__2GyyF",active:"Messenger_active__23_SJ",dialogStyles:"Messenger_dialogStyles__3ItkB",dialog2:"Messenger_dialog2__16WaV",textareaButton:"Messenger_textareaButton__1cWRP",showMessage:"Messenger_showMessage__3eROM",lastmessage:"Messenger_lastmessage__2q06c"}},308:function(e,a,s){"use strict";s.r(a);var t=s(12),n=s(10),l=s(130),i=s(131),c=s(30),m=s(0),g=s.n(m),r=s(307),o=s.n(r),d=function(e){return g.a.createElement("div",{className:o.a.itemD},g.a.createElement("div",{className:o.a.dialogMessage},g.a.createElement("div",null,g.a.createElement("span",null,e.message))))},u=s(24),_=function(e){return g.a.createElement("div",{className:o.a.item},g.a.createElement("div",null,g.a.createElement(u.b,{to:"/Messenger/"+e.id,activeClassName:o.a.active},g.a.createElement("div",{className:o.a.dialogStyles},g.a.createElement("span",{className:o.a.names},e.dialogList),e.img,g.a.createElement("div",{className:o.a.lastmessage},"\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438e")))))},M=s(34),E=s.n(M),v=s(91),p=s(132),f=s(11),b=s(35),N=Object(b.a)(500),h=Object(p.a)({form:"messenger"})((function(e){return g.a.createElement("form",{onSubmit:e.handleSubmit},g.a.createElement("div",{className:o.a.textareaButton},g.a.createElement(v.a,{component:f.b,placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u043d\u0438\u0435 ...",cols:"80",name:"messageBody",validate:[N]}),g.a.createElement("button",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))})),L=function(e){var a=Object(m.useState)(!1),s=Object(c.a)(a,2),t=s[0],n=s[1],l=function(){n(!t)},i=e.dialog,r=e.messagesList,u=e.addMessageC,M=i.map((function(e){return g.a.createElement(d,{id:e.id,message:e.message})})),v=r.map((function(e){return g.a.createElement(_,{id:e.id,dialogList:e.dialogname,img:g.a.createElement("img",{src:e.img?e.img:E.a})})}));return g.a.createElement("div",{className:o.a.Dialogs},t?g.a.createElement("span",null,g.a.createElement("span",{className:o.a.showMessage,onClick:l},"c\u043a\u0440\u044b\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),g.a.createElement("div",{className:o.a.messagelist},v)):g.a.createElement("span",{className:o.a.showMessage,onClick:l},"\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),g.a.createElement("div",{className:o.a.dialog},g.a.createElement("div",{className:o.a.dialog2},M,g.a.createElement(h,{onSubmit:function(e){u(e.messageBody)}}))))};a.default=Object(n.compose)(Object(t.b)((function(e){return{newMLetter:e.MessagesPage.newMLetter,dispatch:e.MessagesPage.dispatch,dialog:e.MessagesPage.dialog,messagesList:e.MessagesPage.messagesList}}),(function(e){return{addMessageC:function(a){e(Object(i.a)(a))}}})),l.a)(L)}}]);
//# sourceMappingURL=3.4aaad5e6.chunk.js.map