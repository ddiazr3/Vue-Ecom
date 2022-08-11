<template>
    <ContactForm />
</template>

<script>
import ContactForm from '@/Components/ContactPage/ContactForm.vue'
import axios from 'axios'
export default {
  components: {
    ContactForm
  },
  mounted(){
    //como recibir y enviar eventos
    // Echo.channel('public')
    //     .listen('TestEvent', (e) => {
    //       alert(e.message)
    //     });
    //  console.log(process.env.VUE_APP_HOST_BACKEND)
    // axios.get(`${process.env.VUE_APP_HOST_BACKEND}/prueba`).then(res => {
    //
    // }).catch(error => {
    //   console.log("ocurrio un error")
    // })
  }
}
</script>
