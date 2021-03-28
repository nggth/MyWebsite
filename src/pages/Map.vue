<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-deep-purple-4 text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="~assets/logo.jpg">
          </q-avatar>
          My View
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
      >
        <q-carousel-slide :name="1" img-src="~assets/california.jpg"/>
        <q-carousel-slide :name="2" img-src="~assets/losangeles.jpg"/>
        <q-carousel-slide :name="3" img-src="~assets/newyork.jpg"/>
        <q-carousel-slide :name="4" img-src="~assets/Paris.jpg"/>
      </q-carousel>
    </q-page-container>

    <q-page-container>
      <map-component></map-component>
    </q-page-container>
  </q-layout>
</template>

<script>
import MapComponent from 'components/MapComponent.vue'
// import SideBar from './SideBar.vue'
export default {
  components: {
  'map-component': MapComponent,
  },
  data () {
    return {
      left: false,
      slide: 1
    }
  }
}
</script>