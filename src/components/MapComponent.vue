<template>
  <div class="q-pa-md">
    <div class="q-col-gutter-md row items-start">
      <div class="col-3">
        <q-img
          src="~assets/yosemite_california.jpg"
          style="width: 90%"
          v-for="transition in transitions"
          :key="transition"
          :transition="transition"
          ratio="1"
          spinner-color="white"
          class="rounded-borders"
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            Yosemite Park at California
          </div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          style="width: 90%"
          v-for="transition in transitions"
          :key="transition"
          :transition="transition"
          ratio="1"
          spinner-color="white"
          class="rounded-borders"
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            Caption
          </div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          style="width: 90%"
          v-for="transition in transitions"
          :key="transition"
          :transition="transition"
          ratio="1"
          spinner-color="white"
          class="rounded-borders"
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            Caption
          </div>
        </q-img>
      </div>

      <div class="col-3">
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          style="width: 90%"
          v-for="transition in transitions"
          :key="transition"
          :transition="transition"
          ratio="1"
          spinner-color="white"
          class="rounded-borders"
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            Caption
          </div>
        </q-img>
      </div>

            <div class="col-3">
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          style="width: 90%"
          v-for="transition in transitions"
          :key="transition"
          :transition="transition"
          ratio="1"
          spinner-color="white"
          class="rounded-borders"
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            Caption
          </div>
        </q-img>
      </div>

            <div class="col-3">
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          style="width: 90%"
          v-for="transition in transitions"
          :key="transition"
          :transition="transition"
          ratio="1"
          spinner-color="white"
          class="rounded-borders"
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            Caption
          </div>
        </q-img>
      </div>

            <div class="col-3">
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          style="width: 90%"
          v-for="transition in transitions"
          :key="transition"
          :transition="transition"
          ratio="1"
          spinner-color="white"
          class="rounded-borders"
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            Caption
          </div>
        </q-img>
      </div>
      
            <div class="col-3">
        <q-img
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          style="width: 90%"
          v-for="transition in transitions"
          :key="transition"
          :transition="transition"
          ratio="1"
          spinner-color="white"
          class="rounded-borders"
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            Caption
          </div>
        </q-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridImg',
  data () {
    return {
      transitions: [
        'scale'
      ]
    }
  }
}
</script>