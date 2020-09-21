import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import VueI18n from 'vue-i18n'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = true
Vue.use(VueI18n)


const i18n = new VueI18n({
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      silentFallbackWarn: true,
      messages:{
        en: {
          "opis":"Concierge for your ",
          "opis2":"Have happier guests while reducing your workload.",
          "ap":"Apartment",
          "chatbot":"GET YOUR CHATBOT",
          "benefiti":"Benefits",
          "instant response":"INSTANT RESPONSE",
          "insant response msg" :"Questions answered 24/7",
          "fast search":"FAST SEARCH",
          "fast search msg":"Generating instant responses",
          "best experiences":"HAND PICKED EXPERIENCES",
          "best experiences msg": "Only the best local experiences are offered",
          "direct on mobile":"DIRECT ON MOBILE",
          "direct on mobile msg": "You can book the perfect experience without downloading an app",
          "usage":"How your guests use it?",
          "phone":"PHONE",
          "phone msg":"Turn the camera on",
          "qr code":"QR CODE",
          "qr code msg":"Scan the QR code in the hotel",
          "conversation":"CONVERSATION",
          "conversation msg":"Start talking with the chatbot in matter of seconds",
          "how does it look msg":"Connect with our bot and he will ask you a series of questions to determine the perfect offer to you.",
          "sounds interesting":"Sound interesting?",
          "contact us":"Contact us",
          "get your chatbot":" to get your chatbot.",
          "home":"Home",
          "about":"Benefits",
          "how it works":"How it works",
          "send now":"Send Now"

    
 
        },
       hrv:{
          "opis":"Recepcionar za vaš",
          "opis2":"Na ovaj način ćete imati zadovoljnije goste uz smanjenje radnog opterećenja",
          "chatbot":"Dohvatite svog chatbota",
          "ap":"Apartman",
          "benefiti":"Prednosti",
          "instant response":"TRENUTNI ODGOVOR",
          "insant response msg" :"Na poruke se odgovara automatski",
          "fast search":"BRZO PRETRAŽIVANJE",
          "fast search msg":"Slanje instantnih odgovora", 
          "best experiences":"RUČNO BIRANA ISKUSTVA ",
          "best experiences msg": "U ponudi su samo najbolja lokalna iskustva",
          "direct on mobile":"DIREKTNO NA MOBITELU",
          "direct on mobile msg": "Savršeno iskustvo možete rezervirati bez preuzimanja aplikacije",
          "usage":"Kako vaši gosti to koriste?",
          "phone":"MOBITEL",
          "phone msg":"Izvadite mobitel i uključite fotoaparat",
          "qr code":"QR CODE",
          "qr code msg":"Skeniranje QR koda i preusmjeravanje na razgovor",
          "conversation":"RAZGOVOR",
          "conversation msg":"Razgovor započinje s početnom bot porukom",
          "sounds interesting":"Zvuči zanimljivo?",
          "contact us":"Kontaktirajte nas",
          "get your chatbot":" da biste dobili svog chatbota.",
          "home":"Početna",
          "about":"Benefiti",
          "how it works":"Kako radi",
          "send now":"Pošalji sada"
       }
      }
      
})



new Vue({
  i18n,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
